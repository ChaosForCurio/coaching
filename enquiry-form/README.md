# Application & Enquiry Form Modal Setup Guide

This package provides a modern, responsive **Application / Enquiry Popup Modal** for computer institutes and coaching centers, closely inspired by professional training institute portals with a dark purple (`#39318B`) theme and high-contrast yellow (`#FFD900`) submit button.

---

## 📁 Package Contents

```
enquiry-form/
├── index.html                  # Standalone preview & complete working HTML
├── enquiry-modal.css           # Complete responsive CSS stylesheet
├── enquiry-modal.js            # Validation, CAPTCHA, & Google Apps Script handler
├── GoogleAppsScript_Code.gs    # Backend script for Google Sheets
└── README.md                   # Step-by-step setup and deployment guide
```

---

## 📊 1. Exact Google Sheet Setup

1. Go to [Google Sheets](https://sheets.new) and create a new blank spreadsheet.
2. Name the spreadsheet: **Student Enquiries 2025–26** (or any name you prefer).
3. Name the first sheet tab: `Enquiries` (optional, the script will create/auto-detect it if empty).
4. Set up the following **9 columns in Row 1** (The script will automatically format and bold them):

| Column | Header Name | Description |
| :---: | :--- | :--- |
| **A** | `Timestamp` | Date and time when the student submitted the form |
| **B** | `Name` | Full name of the applicant |
| **C** | `Email` | Valid email address |
| **D** | `Mobile` | 10-digit primary mobile number |
| **E** | `Secondary Mobile` | Optional secondary phone number |
| **F** | `Nearest Branch` | Selected branch location |
| **G** | `Preferred Course` | Selected course / program |
| **H** | `Consent` | Student consent for SMS/Email/WhatsApp updates |
| **I** | `Source/Page` | Exact URL/page where the enquiry originated |

---

## ⚙️ 2. Google Apps Script Deployment (Step-by-Step)

### Step 1: Open Apps Script
1. In your Google Sheet, click on **Extensions** in the top menu.
2. Select **Apps Script**. A new browser tab will open with the code editor.

### Step 2: Paste the Backend Code
1. Delete any sample code inside `Code.gs`.
2. Open `GoogleAppsScript_Code.gs` from this folder, copy all code, and paste it into the editor.
3. Click the **Save** icon (💾) or press `Ctrl + S`. Name the project (e.g. `Enquiry Webhook`).

### Step 3: Deploy as Web App
1. At the top right of the Apps Script window, click the blue **Deploy** button.
2. Select **New deployment**.
3. In the dialog, click the **gear icon (⚙️)** next to "Select type" and choose **Web app**.
4. Configure the deployment settings:
   - **Description**: `Enquiry Form v1`
   - **Execute as**: `Me (your_email@gmail.com)` *(Important! Do not change this)*
   - **Who has access**: `Anyone` *(Crucial: This allows your website visitors to submit without logging into Google)*
5. Click **Deploy**.

### Step 4: Authorize Permissions
1. Google will prompt you to **Authorize access**. Click **Authorize access**.
2. Select your Google account.
3. If you see an *"Advanced / Google hasn't verified this app"* warning:
   - Click **Advanced** (small link on the left).
   - Click **Go to Enquiry Webhook (unsafe)**.
   - Click **Allow**.

### Step 5: Copy the Web App URL
1. Copy the generated **Web app URL**. It will look similar to:
   ```text
   https://script.google.com/macros/s/AKfycbz_XXXXX.../exec
   ```
2. Click **Done**.

---

## 🔗 3. Connecting the Web App URL to the Form

Open `enquiry-modal.js` and locate line 18:

```javascript
// ==========================================================================
// CONFIGURATION
// ==========================================================================
let GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec';
```

Paste your copied Web App URL into `GOOGLE_SCRIPT_URL`.

---

## 🚀 4. How to Use & Embed on Your Website

### Option A: Open `index.html` Directly
Double-click `index.html` in any browser to test the full user journey:
- Click **Enquire Now** to open the modal.
- Test form validation (empty fields, invalid phone, wrong CAPTCHA).
- Submit the form and watch the row appear in your Google Sheet in real-time!

### Option B: Embed into Any Existing Website (HTML / PHP / WordPress)
1. Link the CSS inside your `<head>`:
   ```html
   <link rel="stylesheet" href="enquiry-modal.css">
   ```
2. Copy the modal markup (from `<div id="app-enquiry-modal" ...>` to `</div>`) and paste it right before your closing `</body>` tag.
3. Add the script right before `</body>`:
   ```html
   <script src="enquiry-modal.js"></script>
   ```
4. Add `data-open-enquiry-modal` or class `open-enquiry-btn` to any button you want to trigger the modal:
   ```html
   <button type="button" data-open-enquiry-modal>Enquire Now</button>
   ```

### Option C: JavaScript Programmatic Control
You can open or close the modal from any custom script:
```javascript
// Open popup
window.EnquiryModal.open();

// Close popup
window.EnquiryModal.close();
```

---

## 🛡️ Security & Anti-Spam Features

1. **Zero Exposed Credentials**: No Google Sheet IDs, API keys, or service account tokens are exposed to the client.
2. **Honeypot Trap**: Invisible `website_url` input field catches automated bots silently.
3. **Canvas CAPTCHA**: Dynamic alphanumeric CAPTCHA with visual noise lines and angle jitter generated on an HTML5 `<canvas>`.
4. **Formula Injection Protection**: Sanitizes inputs in Apps Script to prevent Excel/Sheets formula injections (`=`, `@`, `+`, `-`).
5. **Rate Limiting & Lock**: Google Apps Script utilizes `LockService` to prevent concurrent write collisions when multiple users submit simultaneously.
