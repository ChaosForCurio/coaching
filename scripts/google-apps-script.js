/**
 * Google Apps Script for Bhavya Computer Classes Leads & Applications
 * 
 * Works with your EXISTING Google Sheet!
 * 
 * ============================================================================
 * HOW TO ADD THIS TO YOUR EXISTING GOOGLE SHEET:
 * ============================================================================
 * 1. Open your EXISTING Google Sheet in your browser.
 * 
 * 2. In the top menu, click:
 *    Extensions > Apps Script
 * 
 * 3. Delete whatever is inside the editor (Code.gs) and paste this ENTIRE code.
 * 
 * 4. Click Save (Ctrl+S or Cmd+S).
 * 
 * 5. Click the blue "Deploy" button (top right) > "New deployment"
 *    - Click the gear icon next to "Select type" -> Choose "Web app"
 *    - Description: "Bhavya Leads Integration"
 *    - Execute as: "Me" (your Google account)
 *    - Who has access: "Anyone" (IMPORTANT: MUST be "Anyone")
 *    - Click "Deploy"
 * 
 * 6. Authorize the permissions when prompted:
 *    (Click "Advanced" -> "Go to ... (unsafe)" -> "Allow")
 * 
 * 7. Copy the "Web app URL" (it ends in /exec).
 *    Example: https://script.google.com/macros/s/AKfycb.../exec
 * 
 * 8. Add this URL to your project's `.env` and Vercel Environment Variables:
 *    GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/YOUR_DEPLOYED_ID/exec"
 * ============================================================================
 */

function doPost(e) {
  try {
    var lock = LockService.getScriptLock();
    lock.tryLock(10000);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    // Use the active sheet or tab named "Leads" / "Sheet1"
    var sheet = ss.getSheetByName("Leads") || ss.getSheetByName("Enquiries") || ss.getActiveSheet();

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
      if (data.jsonData) {
        try {
          var parsed = JSON.parse(data.jsonData);
          data = Object.assign({}, data, parsed);
        } catch (jErr) {}
      }
    }

    var timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var leadId = data.id || data.leadId || ("BCC-" + Date.now().toString().slice(-6));
    var name = data.name ? String(data.name).trim() : "";
    var phone = data.phone || data.mobile || "";
    var secondaryPhone = data.secondaryPhone || data.secondaryMobile || data.secMobile || "";
    var email = data.email ? String(data.email).trim() : "";
    var course = data.course || data.preferredCourse || "";
    var branch = data.branch || data.nearestBranch || "Kota Main Campus";
    var batch = data.batch || "Flexible";
    var message = data.message || data.query || "";
    var consent = (data.consent === true || data.consent === "true" || data.consent === "Yes") ? "Yes" : "No";
    var source = data.source || data.sourcePage || "Website";

    // Format phone numbers to keep leading zeros / country code intact
    var phoneFormatted = phone ? "'" + String(phone).trim() : "";
    var secPhoneFormatted = secondaryPhone ? "'" + String(secondaryPhone).trim() : "";

    // Standardized payload dictionary for flexible header matching
    var leadValues = {
      "lead id": leadId,
      "id": leadId,
      "timestamp": timestamp,
      "date": timestamp,
      "date & time": timestamp,
      "date and time": timestamp,
      "name": name,
      "full name": name,
      "student name": name,
      "phone": phoneFormatted,
      "phone number": phoneFormatted,
      "mobile": phoneFormatted,
      "mobile number": phoneFormatted,
      "whatsapp": phoneFormatted,
      "whatsapp number": phoneFormatted,
      "alternate phone": secPhoneFormatted,
      "secondary mobile": secPhoneFormatted,
      "secondary phone": secPhoneFormatted,
      "email": email,
      "email address": email,
      "course": course,
      "preferred course": course,
      "course name": course,
      "branch": branch,
      "nearest branch": branch,
      "center": branch,
      "batch": batch,
      "batch preference": batch,
      "message": message,
      "query": message,
      "message / query": message,
      "consent": consent,
      "source": source,
      "source page": source
    };

    // If the sheet already has existing headers in Row 1, match columns dynamically!
    var lastCol = sheet.getLastColumn();
    if (lastCol > 0 && sheet.getLastRow() > 0) {
      var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
      var hasRecognizedHeaders = false;

      var rowData = headers.map(function(header) {
        if (!header) return "";
        var cleanKey = String(header).trim().toLowerCase();
        if (leadValues.hasOwnProperty(cleanKey)) {
          hasRecognizedHeaders = true;
          return leadValues[cleanKey];
        }
        return "";
      });

      if (hasRecognizedHeaders) {
        sheet.appendRow(rowData);
        lock.releaseLock();
        return ContentService
          .createTextOutput(JSON.stringify({ result: "success", mode: "dynamic_match", row: sheet.getLastRow() }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }

    // Fallback: If no headers exist yet, create default headers and append
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Lead ID",
        "Date & Time",
        "Full Name",
        "Phone / WhatsApp",
        "Alternate Phone",
        "Email Address",
        "Preferred Course",
        "Nearest Branch",
        "Batch Preference",
        "Message / Query",
        "Consent",
        "Source Page"
      ]);
      sheet.getRange("A1:L1").setFontWeight("bold").setBackground("#39318B").setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      leadId,
      timestamp,
      name,
      phoneFormatted,
      secPhoneFormatted,
      email,
      course,
      branch,
      batch,
      message,
      consent,
      source
    ]);

    lock.releaseLock();

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", mode: "default_append", row: sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "active", 
      message: "Bhavya Computer Classes Google Sheet Webhook is active and connected to your existing sheet." 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
