/**
 * ============================================================================
 * GOOGLE APPS SCRIPT: WEBSITE APPLICATION & ENQUIRY FORM WEB APP
 * ============================================================================
 * This script accepts POST submissions from your website application popup form
 * and appends them to your Google Sheet in real-time.
 *
 * Expected Google Sheet Columns:
 * 1. Timestamp
 * 2. Name
 * 3. Email
 * 4. Mobile
 * 5. Secondary Mobile
 * 6. Nearest Branch
 * 7. Preferred Course
 * 8. Consent
 * 9. Source/Page
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

    // 2. Validate required fields
    var validationError = validateFormData(data);
    if (validationError) {
      return createJsonResponse({
        status: "error",
        message: validationError
      }, 400);
    }

    // 3. Honeypot check (anti-spam)
    if (data.website_url && String(data.website_url).trim() !== "") {
      // Silently reject spam submission
      return createJsonResponse({
        status: "success",
        message: "Enquiry submitted successfully."
      }, 200);
    }

    // 4. Access active spreadsheet and target sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    
    // Create sheet if it does not exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // 5. Ensure headers exist on row 1
    ensureHeaderRow(sheet);

    // 6. Format data row
    var timestamp = new Date();
    var name = sanitize(data.name || "");
    var email = sanitize(data.email || "");
    var mobile = sanitize(data.mobile || "");
    var secMobile = sanitize(data.secondaryMobile || data.secondary_mobile || "N/A");
    var branch = sanitize(data.nearestBranch || data.branch || "");
    var course = sanitize(data.preferredCourse || data.course || "");
    var consent = sanitize(data.consent || "Yes");
    var sourcePage = sanitize(data.sourcePage || data.source_page || "Website Modal");

    // 7. Append row to sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      mobile,
      secMobile,
      branch,
      course,
      consent,
      sourcePage
    ]);

    // Format Timestamp cell to readable date-time
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setNumberFormat("yyyy-mm-dd hh:mm:ss");

    // ── STATUS COLUMN (col 10) ───────────────────────────────────────────────
    // Set initial status to "New"
    sheet.getRange(lastRow, 10).setValue("New");

    // Add dropdown validation: New / Contacted / Enrolled / Lost
    var statusRule = SpreadsheetApp.newDataValidation()
      .requireValueInList(["New", "Contacted", "Enrolled", "Lost"], true)
      .setAllowInvalid(false)
      .build();
    sheet.getRange(lastRow, 10).setDataValidation(statusRule);

    // Stamp "Last Updated" timestamp in col 11
    sheet.getRange(lastRow, 11).setValue(timestamp);
    sheet.getRange(lastRow, 11).setNumberFormat("yyyy-mm-dd hh:mm:ss");

    // Color the entire new row Yellow → marks it as a fresh unattended lead
    var newRowRange = sheet.getRange(lastRow, 1, 1, 11);
    newRowRange.setBackground("#FFF9C4");

    // ── ROW FORMATTING ───────────────────────────────────────────────────────
    // Font & size
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

    // Center-align: Timestamp, Mobile, Branch, Consent, Status, Last Updated
    sheet.getRange(lastRow, 1).setHorizontalAlignment("center"); // Timestamp
    sheet.getRange(lastRow, 4).setHorizontalAlignment("center"); // Mobile
    sheet.getRange(lastRow, 5).setHorizontalAlignment("center"); // Sec Mobile
    sheet.getRange(lastRow, 6).setHorizontalAlignment("center"); // Branch
    sheet.getRange(lastRow, 8).setHorizontalAlignment("center"); // Consent
    sheet.getRange(lastRow, 10).setHorizontalAlignment("center"); // Status
    sheet.getRange(lastRow, 11).setHorizontalAlignment("center"); // Last Updated

    // Left-align: Name, Email, Course, Source
    sheet.getRange(lastRow, 2).setHorizontalAlignment("left"); // Name
    sheet.getRange(lastRow, 3).setHorizontalAlignment("left"); // Email
    sheet.getRange(lastRow, 7).setHorizontalAlignment("left"); // Course
    sheet.getRange(lastRow, 9).setHorizontalAlignment("left"); // Source/Page

    // Clip text overflow (no wrapping) — keeps rows compact
    newRowRange.setWrap(false);
    // ────────────────────────────────────────────────────────────────────────

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
 * Helper: Create header row if empty
 */
function ensureHeaderRow(sheet) {
  if (sheet.getLastRow() === 0) {
    var headers = [
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
      "Last Updated"
    ];
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
  }
}

/**
 * Helper: Sanitize string to prevent spreadsheet injection / XSS
 */
function sanitize(val) {
  if (val === null || val === undefined) return "";
  var str = String(val).trim();
  
  // Prevent formula injection in Google Sheets (e.g. '=cmd|...', '+...', '@...')
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
 * This runs automatically whenever any cell in the spreadsheet is edited.
 * It watches column J (Status) and recolors the full row based on the value.
 *
 * Color Legend:
 *   🟡 New        → Light Yellow  (#FFF9C4) — fresh, unattended lead
 *   🔵 Contacted  → Light Blue    (#BBDEFB) — call made, in discussion
 *   🟢 Enrolled   → Light Green   (#C8E6C9) — student joined, fees paid
 *   🔴 Lost       → Light Red     (#FFCDD2) — not interested / unreachable
 * ============================================================================
 */
function onEdit(e) {
  var sheet = e.range.getSheet();
  var sheetName = sheet.getName();

  // Work on both Enquiries and Sheet1
  if (sheetName !== SHEET_NAME && sheetName !== "Sheet1") return;

  // Only react to edits in column 10 (Status)
  if (e.range.getColumn() !== 10) return;

  var row = e.range.getRow();
  if (row === 1) return; // Skip header row

  var status = e.range.getValue();
  var totalCols = 11; // A through K (Timestamp → Last Updated)
  var rowRange = sheet.getRange(row, 1, 1, totalCols);

  // Status → background color map
  var colorMap = {
    "New":       "#FFF9C4",  // 🟡 Light Yellow
    "Contacted": "#BBDEFB",  // 🔵 Light Blue
    "Enrolled":  "#C8E6C9",  // 🟢 Light Green
    "Lost":      "#FFCDD2"   // 🔴 Light Red
  };

  // Apply row background color
  rowRange.setBackground(colorMap[status] || "#FFFFFF");

  // Update "Last Updated" column (col 11) with current timestamp
  var now = new Date();
  var lastUpdatedCell = sheet.getRange(row, 11);
  lastUpdatedCell.setValue(now);
  lastUpdatedCell.setNumberFormat("yyyy-mm-dd hh:mm:ss");
}

/**
 * ============================================================================
 * ONE-TIME FORMATTER: Run this manually ONCE to beautify all existing data
 * ============================================================================
 * How to run:
 *   1. Open Apps Script editor
 *   2. Select "formatSheet" from the function dropdown at the top
 *   3. Click the ▶ Run button
 * ============================================================================
 */
function formatSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) { Logger.log("Sheet not found: " + SHEET_NAME); return; }

  var lastRow = sheet.getLastRow();
  var lastCol = 11;

  if (lastRow < 1) { Logger.log("No data found."); return; }

  // ── COLUMN WIDTHS ─────────────────────────────────────────────────────────
  var colWidths = [140, 130, 180, 110, 110, 100, 150, 70, 220, 100, 140];
  colWidths.forEach(function(w, i) { sheet.setColumnWidth(i + 1, w); });

  // ── HEADER ROW (Row 1) ────────────────────────────────────────────────────
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

  // ── DATA ROWS (Row 2 onwards) ─────────────────────────────────────────────
  if (lastRow < 2) return;

  var dataRange = sheet.getRange(2, 1, lastRow - 1, lastCol);
  dataRange.setFontFamily("Arial");
  dataRange.setFontSize(10);
  dataRange.setVerticalAlignment("middle");
  dataRange.setWrap(false);

  // Borders on all data cells
  dataRange.setBorder(
    true, true, true, true, true, true,
    "#CCCCCC", SpreadsheetApp.BorderStyle.SOLID
  );

  // Column-specific alignment
  var centerCols = [1, 4, 5, 6, 8, 10, 11];
  var leftCols   = [2, 3, 7, 9];
  centerCols.forEach(function(c) {
    sheet.getRange(2, c, lastRow - 1, 1).setHorizontalAlignment("center");
  });
  leftCols.forEach(function(c) {
    sheet.getRange(2, c, lastRow - 1, 1).setHorizontalAlignment("left");
  });

  // Alternating row colors based on Status (col 10), fallback to zebra stripe
  var statusColorMap = {
    "New":       "#FFF9C4",
    "Contacted": "#BBDEFB",
    "Enrolled":  "#C8E6C9",
    "Lost":      "#FFCDD2"
  };

  for (var r = 2; r <= lastRow; r++) {
    var status = sheet.getRange(r, 10).getValue();
    var rowRange = sheet.getRange(r, 1, 1, lastCol);
    if (statusColorMap[status]) {
      rowRange.setBackground(statusColorMap[status]);
    } else {
      // Default zebra stripe if no status
      rowRange.setBackground(r % 2 === 0 ? "#F8F9FA" : "#FFFFFF");
    }
    sheet.setRowHeight(r, 28);
  }

  Logger.log("✅ Sheet formatted successfully! Total rows processed: " + (lastRow - 1));
}

/**
 * ============================================================================
 * FIX SHEET1: Run this ONCE to fix your OLD data in the "Sheet1" tab
 * ============================================================================
 * How to run:
 *   1. Open Apps Script editor
 *   2. Click the function dropdown → select "fixSheet1"
 *   3. Click ▶ Run
 * ============================================================================
 */
function fixSheet1() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  if (!sheet) { Logger.log("Sheet1 not found."); return; }

  var lastRow = sheet.getLastRow();
  var lastCol = 11;

  if (lastRow < 1) { Logger.log("Sheet1 is empty."); return; }

  // ── STEP 1: Fix Header Row (Row 1) ────────────────────────────────────────
  // Add missing Status & Last Updated headers if not already there
  var existingHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  if (!existingHeaders[9] || existingHeaders[9] === "") {
    sheet.getRange(1, 10).setValue("Status");
  }
  if (!existingHeaders[10] || existingHeaders[10] === "") {
    sheet.getRange(1, 11).setValue("Last Updated");
  }

  // Style Header Row
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

  // ── STEP 2: Auto-fit Column Widths to content ─────────────────────────────
  for (var i = 1; i <= lastCol; i++) {
    sheet.autoResizeColumn(i);
  }
  // Ensure Preferred Course column is never too narrow (min 180px)
  var courseCols = [5, 7]; // col 5 in Sheet1, col 7 in Enquiries
  courseCols.forEach(function(c) {
    if (sheet.getColumnWidth(c) < 180) sheet.setColumnWidth(c, 180);
  });
  // Ensure Source/Page is wide enough
  if (sheet.getColumnWidth(9) < 200) sheet.setColumnWidth(9, 200);

  // ── STEP 3: Format all data rows ─────────────────────────────────────────
  if (lastRow < 2) return;

  var dataRange = sheet.getRange(2, 1, lastRow - 1, lastCol);
  dataRange.setFontFamily("Arial");
  dataRange.setFontSize(10);
  dataRange.setVerticalAlignment("middle");
  dataRange.setWrap(false);

  // Borders
  dataRange.setBorder(
    true, true, true, true, true, true,
    "#CCCCCC", SpreadsheetApp.BorderStyle.SOLID
  );

  // Alignment
  [1, 4, 5, 6, 8, 10, 11].forEach(function(c) {
    sheet.getRange(2, c, lastRow - 1, 1).setHorizontalAlignment("center");
  });
  [2, 3, 7, 9].forEach(function(c) {
    sheet.getRange(2, c, lastRow - 1, 1).setHorizontalAlignment("left");
  });

  // ── STEP 4: Add Status dropdown + color to each existing row ──────────────
  var statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(["New", "Contacted", "Enrolled", "Lost"], true)
    .setAllowInvalid(false)
    .build();

  for (var r = 2; r <= lastRow; r++) {
    var rowRange = sheet.getRange(r, 1, 1, lastCol);

    // Set Status = "New" if empty, keep existing value if already set
    var currentStatus = sheet.getRange(r, 10).getValue();
    if (!currentStatus || currentStatus === "") {
      sheet.getRange(r, 10).setValue("New");
      currentStatus = "New";
    }

    // Add dropdown to Status cell
    sheet.getRange(r, 10).setDataValidation(statusRule);

    // Set Last Updated if empty
    var lastUpdated = sheet.getRange(r, 11).getValue();
    if (!lastUpdated || lastUpdated === "") {
      sheet.getRange(r, 11).setValue(new Date());
      sheet.getRange(r, 11).setNumberFormat("yyyy-mm-dd hh:mm:ss");
    }

    // Color row by status
    var colorMap = {
      "New":       "#FFF9C4",
      "Contacted": "#BBDEFB",
      "Enrolled":  "#C8E6C9",
      "Lost":      "#FFCDD2"
    };
    rowRange.setBackground(colorMap[currentStatus] || (r % 2 === 0 ? "#F8F9FA" : "#FFFFFF"));
    sheet.setRowHeight(r, 28);
  }

  Logger.log("✅ Sheet1 fixed! Rows processed: " + (lastRow - 1));
}
