/**
 * ============================================================================
 * GOOGLE APPS SCRIPT: WEBSITE APPLICATION & ENQUIRY FORM WEB APP
 * ============================================================================
 * This script accepts POST submissions from your website application popup form
 * and appends them to your Google Sheet in real-time.
 * Also supports 2-way sync with Telegram: when a counselor taps "Claim Lead"
 * or "Mark Invalid" on Telegram, it instantly recolors and updates this sheet!
 *
 * Google Sheet Columns (13 Total):
 * 1.  Lead ID
 * 2.  Timestamp
 * 3.  Name
 * 4.  Email
 * 5.  Mobile
 * 6.  Secondary Mobile
 * 7.  Nearest Branch
 * 8.  Preferred Course
 * 9.  Consent
 * 10. Source/Page
 * 11. Status (New / Contacted / Enrolled / Lost)
 * 12. Claimed By (Counselor username / name)
 * 13. Last Updated
 * ============================================================================
 */

// Global Sheet name (defaults to active sheet or first sheet)
var SHEET_NAME = "Enquiries";

/**
 * Handle HTTP POST Requests from Form
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Prevent race conditions when multiple users submit simultaneously
  try {
    lock.waitLock(10000); // Wait up to 10 seconds for concurrent write
  } catch (lockError) {
    return createJsonResponse({
      status: "error",
      message: "Server is busy. Please retry in a moment."
    }, 429);
  }

  try {
    // 1. Parse submitted data (supports JSON body, form-urlencoded, or parameter)
    var data = parseRequestData(e);

    if (!data) {
      return createJsonResponse({
        status: "error",
        message: "No data received or invalid payload."
      }, 400);
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheetByName("Sheet1") || ss.getActiveSheet();

    // ── ACTION: UPDATE LEAD STATUS FROM TELEGRAM WEBHOOK ──────────────────────
    if (data.action === "updateLeadStatus" || data.action === "update_status") {
      var syncResult = handleLeadStatusUpdate(sheet, data);
      lock.releaseLock();
      return createJsonResponse(syncResult, syncResult.status === "success" ? 200 : 404);
    }

    // 2. Validate required fields (for new enquiry submission)
    var validationError = validateFormData(data);
    if (validationError) {
      lock.releaseLock();
      return createJsonResponse({
        status: "error",
        message: validationError
      }, 400);
    }

    // 3. Honeypot check (anti-spam)
    if (data.website_url && String(data.website_url).trim() !== "") {
      lock.releaseLock();
      // Silently reject spam submission
      return createJsonResponse({
        status: "success",
        message: "Enquiry submitted successfully."
      }, 200);
    }

    // 4. Access active spreadsheet and target sheet
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // 5. Ensure headers exist on row 1
    ensureHeaderRow(sheet);

    // 6. Format data row
    var timestamp = new Date();
    var leadId = data.id || data.leadId || "";
    var name = sanitize(data.name || "");
    var email = sanitize(data.email || "");
    var mobile = sanitize(data.mobile || data.phone || "");
    var secMobile = sanitize(data.secondaryMobile || data.secondary_mobile || "N/A");
    var branch = sanitize(data.nearestBranch || data.branch || "");
    var course = sanitize(data.preferredCourse || data.course || "");
    var consent = sanitize(data.consent || "Yes");
    var sourcePage = sanitize(data.sourcePage || data.source_page || "Website Modal");
    var initialStatus = sanitize(data.status || "New");
    var claimedBy = sanitize(data.claimedBy || "Unclaimed");

    // 7. Append row to sheet (13 columns)
    sheet.appendRow([
      leadId,
      timestamp,
      name,
      email,
      mobile,
      secMobile,
      branch,
      course,
      consent,
      sourcePage,
      initialStatus,
      claimedBy,
      timestamp
    ]);

    // Format Timestamp cell to readable date-time
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 2).setNumberFormat("yyyy-mm-dd hh:mm:ss");

    // Add dropdown validation for Status (col 11)
    var statusRule = SpreadsheetApp.newDataValidation()
      .requireValueInList(["New", "Contacted", "Enrolled", "Lost"], true)
      .setAllowInvalid(false)
      .build();
    sheet.getRange(lastRow, 11).setDataValidation(statusRule);

    // Stamp "Last Updated" timestamp in col 13
    sheet.getRange(lastRow, 13).setNumberFormat("yyyy-mm-dd hh:mm:ss");

    // Color the entire new row based on status (default yellow for New)
    var newRowRange = sheet.getRange(lastRow, 1, 1, 13);
    newRowRange.setBackground(getStatusColor(initialStatus));

    // ── ROW FORMATTING ───────────────────────────────────────────────────────
    newRowRange.setFontFamily("Arial");
    newRowRange.setFontSize(10);
    newRowRange.setVerticalAlignment("middle");

    // Borders
    newRowRange.setBorder(
      true, true, true, true, true, true,
      "#CCCCCC", SpreadsheetApp.BorderStyle.SOLID
    );

    // Row height for breathing room
    sheet.setRowHeight(lastRow, 28);

    // Center-align columns
    [1, 2, 5, 6, 7, 9, 11, 12, 13].forEach(function(colIdx) {
      sheet.getRange(lastRow, colIdx).setHorizontalAlignment("center");
    });

    // Left-align columns
    [3, 4, 8, 10].forEach(function(colIdx) {
      sheet.getRange(lastRow, colIdx).setHorizontalAlignment("left");
    });

    // Clip text overflow
    newRowRange.setWrap(false);

    // Optional: send direct Telegram alert as backup/fail-safe if bot credentials are provided in Script Properties
    sendDirectTelegramAlertIfConfigured(data, leadId);

    // Release lock
    lock.releaseLock();

    // 8. Return success JSON
    return createJsonResponse({
      status: "success",
      message: "Thank you! Your enquiry has been submitted successfully.",
      row: lastRow
    }, 200);

  } catch (err) {
    lock.releaseLock();
    Logger.log("doPost Error: " + err.toString());
    return createJsonResponse({
      status: "error",
      message: "An internal server error occurred: " + err.message
    }, 500);
  }
}

/**
 * Handle HTTP GET Requests (Health Check in Browser)
 */
function doGet(e) {
  return createJsonResponse({
    status: "ok",
    service: "Application Enquiry Webhook",
    message: "Google Apps Script Web App is active and listening for POST submissions.",
    timestamp: new Date().toISOString()
  }, 200);
}

/**
 * Helper: Parse incoming request data from different POST encodings
 */
function parseRequestData(e) {
  if (!e) return null;

  // Case A: JSON posted in postData.contents
  if (e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (parseErr) {
      // Fallback: check if jsonData parameter was sent
    }
  }

  // Case B: Sent as URLSearchParams or form data
  if (e.parameter) {
    if (e.parameter.jsonData) {
      try {
        return JSON.parse(e.parameter.jsonData);
      } catch (err) {}
    }
    return e.parameter;
  }

  return null;
}

/**
 * Helper: Validate required form inputs
 */
function validateFormData(data) {
  var name = String(data.name || "").trim();
  var email = String(data.email || "").trim();
  var mobile = String(data.mobile || "").trim().replace(/\D/g, "");
  var branch = String(data.nearestBranch || data.branch || "").trim();
  var course = String(data.preferredCourse || data.course || "").trim();

  if (!name || name.length < 2) {
    return "Name is required (minimum 2 characters).";
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return "A valid email address is required.";
  }

  var mobileRegex = /^[6-9]\d{9}$/;
  if (!mobile || !mobileRegex.test(mobile)) {
    return "A valid 10-digit Indian mobile number is required.";
  }

  if (!branch) {
    return "Nearest branch selection is required.";
  }

  if (!course) {
    return "Preferred course selection is required.";
  }

  return null; // Valid
}

/**
 * Helper: Column Index Finder (Detects column numbers dynamically by header title)
 */
function getColumnIndexMap(sheet) {
  var headers = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1)).getValues()[0];
  var map = {
    id: -1,
    timestamp: -1,
    name: -1,
    email: -1,
    mobile: -1,
    secondaryMobile: -1,
    branch: -1,
    course: -1,
    consent: -1,
    source: -1,
    status: -1,
    claimedBy: -1,
    lastUpdated: -1
  };

  headers.forEach(function(title, i) {
    var h = String(title || "").trim().toLowerCase();
    if (h === "id" || h === "lead id" || h === "#") map.id = i + 1;
    else if (h.indexOf("time") !== -1 || h.indexOf("date") !== -1) map.timestamp = i + 1;
    else if (h === "name" || h === "student name") map.name = i + 1;
    else if (h === "email") map.email = i + 1;
    else if (h === "mobile" || h === "phone") map.mobile = i + 1;
    else if (h.indexOf("sec") !== -1 || h.indexOf("alt") !== -1) map.secondaryMobile = i + 1;
    else if (h.indexOf("branch") !== -1) map.branch = i + 1;
    else if (h.indexOf("course") !== -1) map.course = i + 1;
    else if (h === "consent") map.consent = i + 1;
    else if (h.indexOf("source") !== -1 || h.indexOf("page") !== -1) map.source = i + 1;
    else if (h === "status") map.status = i + 1;
    else if (h.indexOf("claim") !== -1 || h.indexOf("counselor") !== -1) map.claimedBy = i + 1;
    else if (h.indexOf("last") !== -1 || h.indexOf("updated") !== -1) map.lastUpdated = i + 1;
  });

  // Fallbacks for standard 13-column layout if headers didn't match
  if (map.status === -1) map.status = headers.length >= 12 ? 11 : 10;
  if (map.claimedBy === -1) map.claimedBy = 12;
  if (map.lastUpdated === -1) map.lastUpdated = headers.length >= 13 ? 13 : 11;
  if (map.mobile === -1) map.mobile = 5;
  if (map.id === -1) map.id = 1;

  return map;
}

/**
 * Helper: Create header row if empty or upgrade existing headers
 */
function ensureHeaderRow(sheet) {
  var headers = [
    "Lead ID",
    "Timestamp",
    "Name",
    "Email",
    "Mobile",
    "Secondary Mobile",
    "Nearest Branch",
    "Preferred Course",
    "Consent",
    "Source/Page",
    "Status",
    "Claimed By",
    "Last Updated"
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);

    // Style Header Row
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#39318B");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);

    // Auto-resize columns
    for (var i = 1; i <= headers.length; i++) {
      sheet.autoResizeColumn(i);
    }
  } else {
    // If headers exist, make sure Claimed By is present
    var curHeaders = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1)).getValues()[0];
    var hasClaimedBy = curHeaders.some(function(h) {
      return String(h).toLowerCase().indexOf("claim") !== -1;
    });

    if (!hasClaimedBy && curHeaders.length >= 10) {
      // Add Claimed By before or after Status
      var nextCol = curHeaders.length + 1;
      sheet.getRange(1, nextCol).setValue("Claimed By");
      sheet.getRange(1, nextCol).setFontWeight("bold").setBackground("#39318B").setFontColor("#FFFFFF");
    }
  }
}

/**
 * Handle Telegram-to-Google Sheets Status Update
 */
function handleLeadStatusUpdate(sheet, data) {
  var leadId = data.id || data.leadId;
  var phone = data.phone || data.mobile;
  var newStatus = data.status || "Contacted"; // "Contacted", "Lost", "Enrolled", "New"
  var counselor = data.claimedBy || data.counselorName || "Counselor";
  var lastUpdated = new Date();

  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return { status: "not_found", message: "No rows available to update" };
  }

  var colMap = getColumnIndexMap(sheet);
  var numCols = Math.max(sheet.getLastColumn(), 13);
  var allData = sheet.getRange(2, 1, lastRow - 1, numCols).getValues();

  var targetRow = -1;

  // Search by Lead ID first
  if (leadId) {
    var searchId = String(leadId).trim();
    for (var i = 0; i < allData.length; i++) {
      var rowId = String(allData[i][colMap.id - 1] || "").trim();
      if (rowId === searchId) {
        targetRow = i + 2;
        break;
      }
    }
  }

  // Fallback: search by phone number (last 10 digits)
  if (targetRow === -1 && phone) {
    var cleanPhone = String(phone).replace(/\D/g, "");
    var last10 = cleanPhone.slice(-10);
    for (var j = 0; j < allData.length; j++) {
      var cellPhone = String(allData[j][colMap.mobile - 1] || "").replace(/\D/g, "");
      if (cellPhone.slice(-10) === last10) {
        targetRow = j + 2;
        break;
      }
    }
  }

  if (targetRow === -1) {
    return { status: "not_found", message: "Lead not found in sheet for ID: " + leadId };
  }

  // 1. Update Status
  if (colMap.status > 0) {
    sheet.getRange(targetRow, colMap.status).setValue(newStatus);
  }

  // 2. Update Claimed By
  if (colMap.claimedBy > 0) {
    sheet.getRange(targetRow, colMap.claimedBy).setValue(counselor);
  }

  // 3. Update Last Updated
  if (colMap.lastUpdated > 0) {
    var timeCell = sheet.getRange(targetRow, colMap.lastUpdated);
    timeCell.setValue(lastUpdated);
    timeCell.setNumberFormat("yyyy-mm-dd hh:mm:ss");
  }

  // 4. Update Row Color
  var rowRange = sheet.getRange(targetRow, 1, 1, numCols);
  rowRange.setBackground(getStatusColor(newStatus));

  return {
    status: "success",
    message: "Lead #" + leadId + " successfully synced to " + newStatus + " by " + counselor,
    row: targetRow
  };
}

/**
 * Returns background color hex for a given status
 */
function getStatusColor(status) {
  var s = String(status || "").toLowerCase().trim();
  if (s === "contacted" || s === "claimed") return "#BBDEFB"; // 🔵 Light Blue
  if (s === "enrolled") return "#C8E6C9";                     // 🟢 Light Green
  if (s === "lost" || s === "invalid") return "#FFCDD2";      // 🔴 Light Red
  return "#FFF9C4";                                           // 🟡 Light Yellow (New)
}

/**
 * Direct Telegram Notification Fail-Safe (sent via Apps Script)
 */
function sendDirectTelegramAlertIfConfigured(data, leadId) {
  try {
    var props = PropertiesService.getScriptProperties();
    var botToken = props.getProperty("TELEGRAM_BOT_TOKEN");
    var chatId = props.getProperty("TELEGRAM_CHAT_ID");

    if (!botToken || !chatId) return; // Not configured in script properties

    var name = data.name || "Student";
    var phone = data.mobile || data.phone || "";
    var course = data.preferredCourse || data.course || "";
    var branch = data.nearestBranch || data.branch || "";

    var text = "🚀 <b>NEW LEAD (Google Sheets Sync)</b> <i>(#" + (leadId || "New") + ")</i>\n" +
               "━━━━━━━━━━━━━━━━━━━━━━━\n" +
               "👤 <b>Name:</b> " + name + "\n" +
               "📞 <b>Phone:</b> +91 " + phone + "\n" +
               "📚 <b>Course:</b> " + course + "\n" +
               "🏫 <b>Branch:</b> " + branch + "\n" +
               "🕒 <b>Time:</b> " + Utilities.formatDate(new Date(), "Asia/Kolkata", "dd MMM, hh:mm a") + "\n" +
               "━━━━━━━━━━━━━━━━━━━━━━━\n" +
               "⏳ <b>Status:</b> 🟡 <i>Unclaimed</i>";

    var waUrl = "https://wa.me/91" + String(phone).replace(/\D/g, "").slice(-10);
    var payload = {
      chat_id: chatId,
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{ text: "💬 WhatsApp Student", url: waUrl }]
        ]
      })
    };

    UrlFetchApp.fetch("https://api.telegram.org/bot" + botToken + "/sendMessage", {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });
  } catch (err) {
    Logger.log("Direct Telegram Alert Error: " + err.toString());
  }
}

/**
 * Helper: Sanitize string to prevent spreadsheet injection / XSS
 */
function sanitize(val) {
  if (val === null || val === undefined) return "";
  var str = String(val).trim();
  
  if (str.length > 0 && (str.charAt(0) === '=' || str.charAt(0) === '+' || str.charAt(0) === '-' || str.charAt(0) === '@')) {
    str = "'" + str;
  }
  return str;
}

/**
 * Helper: Return standard JSON response
 */
function createJsonResponse(dataObj, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(dataObj));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

/**
 * ============================================================================
 * ON-EDIT TRIGGER: Auto-recolor rows when Status dropdown is changed
 * ============================================================================
 */
function onEdit(e) {
  if (!e || !e.range) return;
  var sheet = e.range.getSheet();
  var sheetName = sheet.getName();

  if (sheetName !== SHEET_NAME && sheetName !== "Sheet1" && sheetName !== "Leads") return;

  var colMap = getColumnIndexMap(sheet);
  if (e.range.getColumn() !== colMap.status) return;

  var row = e.range.getRow();
  if (row === 1) return; // Skip header row

  var status = e.range.getValue();
  var totalCols = Math.max(sheet.getLastColumn(), 13);
  var rowRange = sheet.getRange(row, 1, 1, totalCols);

  // Apply row background color
  rowRange.setBackground(getStatusColor(status));

  // Update "Last Updated" timestamp
  if (colMap.lastUpdated > 0) {
    var now = new Date();
    var lastUpdatedCell = sheet.getRange(row, colMap.lastUpdated);
    lastUpdatedCell.setValue(now);
    lastUpdatedCell.setNumberFormat("yyyy-mm-dd hh:mm:ss");
  }
}

/**
 * ============================================================================
 * ONE-TIME FORMATTER: Run this manually ONCE to beautify all existing data
 * ============================================================================
 */
function formatSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheetByName("Sheet1") || ss.getActiveSheet();
  if (!sheet) { Logger.log("Sheet not found."); return; }

  var lastRow = sheet.getLastRow();
  var lastCol = 13;

  if (lastRow < 1) { Logger.log("No data found."); return; }

  ensureHeaderRow(sheet);

  // Column Widths
  var colWidths = [80, 140, 130, 180, 110, 110, 120, 160, 70, 200, 110, 140, 140];
  colWidths.forEach(function(w, i) { sheet.setColumnWidth(i + 1, w); });

  // Style Header Row (Row 1)
  var headerRange = sheet.getRange(1, 1, 1, lastCol);
  headerRange.setBackground("#39318B");
  headerRange.setFontColor("#FFFFFF");
  headerRange.setFontWeight("bold");
  headerRange.setFontFamily("Arial");
  headerRange.setFontSize(10);
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  headerRange.setWrap(false);
  sheet.setRowHeight(1, 32);
  sheet.setFrozenRows(1);

  if (lastRow < 2) return;

  var dataRange = sheet.getRange(2, 1, lastRow - 1, lastCol);
  dataRange.setFontFamily("Arial");
  dataRange.setFontSize(10);
  dataRange.setVerticalAlignment("middle");
  dataRange.setWrap(false);

  dataRange.setBorder(
    true, true, true, true, true, true,
    "#CCCCCC", SpreadsheetApp.BorderStyle.SOLID
  );

  var colMap = getColumnIndexMap(sheet);

  // Status Validation Rule
  var statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(["New", "Contacted", "Enrolled", "Lost"], true)
    .setAllowInvalid(false)
    .build();

  for (var r = 2; r <= lastRow; r++) {
    var curStatus = sheet.getRange(r, colMap.status).getValue() || "New";
    var rowRange = sheet.getRange(r, 1, 1, lastCol);
    rowRange.setBackground(getStatusColor(curStatus));
    sheet.getRange(r, colMap.status).setDataValidation(statusRule);
    sheet.setRowHeight(r, 28);
  }

  Logger.log("✅ Sheet formatted successfully! Total rows: " + (lastRow - 1));
}
