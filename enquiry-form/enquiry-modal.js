/**
 * Application / Enquiry Popup Modal
 * Complete client-side functionality:
 * - Modal Open/Close (Backdrop, Close Button, ESC key)
 * - Canvas CAPTCHA Generation & Validation
 * - Strict Field & Regex Validation (Email, Indian Mobile Number)
 * - Google Apps Script Integration (Web App POST)
 * - Anti-spam Honeypot Protection
 * - Responsive Loading & Success States
 */

(function () {
  'use strict';

  // ==========================================================================
  // CONFIGURATION
  // Replace this with your deployed Google Apps Script Web App URL.
  // Example: "https://script.google.com/macros/s/AKfycbx.../exec"
  // ==========================================================================
  let GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwH1G_tgoNv51HO4gvnWxh5_5UhPqbgmmDZBzfZbRYN3bW1O_GM4GxV_zCWE4JiBCh4/exec';

  // Elements
  let overlay, container, closeBtn, form, formWrapper, successCard, successCloseBtn;
  let nameInput, emailInput, mobileInput, secMobileInput, branchSelect, courseSelect;
  let captchaCanvas, captchaInput, captchaRefreshBtn;
  let consentCheckbox, submitBtn, submitBtnText, honeypotInput;

  let currentCaptchaText = '';

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModal);
  } else {
    initModal();
  }

  function initModal() {
    overlay = document.getElementById('app-enquiry-modal');
    if (!overlay) return;

    container = overlay.querySelector('.app-modal-container');
    closeBtn = document.getElementById('app-modal-close-btn');
    form = document.getElementById('app-enquiry-form');
    formWrapper = document.getElementById('app-form-wrapper');
    successCard = document.getElementById('app-success-card');
    successCloseBtn = document.getElementById('app-success-close-btn');

    nameInput = document.getElementById('app-field-name');
    emailInput = document.getElementById('app-field-email');
    mobileInput = document.getElementById('app-field-mobile');
    secMobileInput = document.getElementById('app-field-secondary-mobile');
    branchSelect = document.getElementById('app-field-branch');
    courseSelect = document.getElementById('app-field-course');
    captchaCanvas = document.getElementById('app-captcha-canvas');
    captchaInput = document.getElementById('app-field-captcha');
    captchaRefreshBtn = document.getElementById('app-captcha-refresh-btn');
    consentCheckbox = document.getElementById('app-field-consent');
    submitBtn = document.getElementById('app-submit-btn');
    submitBtnText = submitBtn ? submitBtn.querySelector('.app-btn-text') : null;
    honeypotInput = document.getElementById('app-field-website');

    // Event Listeners
    setupTriggers();
    setupCloseHandlers();
    setupCaptcha();
    setupFormValidation();
  }

  // Bind clicks for any button with data-open-enquiry-modal or .open-enquiry-btn
  function setupTriggers() {
    document.addEventListener('click', function (e) {
      const trigger = e.target.closest(
        '[data-open-enquiry-modal], .open-enquiry-btn, [data-open-demo-modal]'
      );
      if (trigger) {
        e.preventDefault();
        openModal();
      }
    });
  }

  // Open modal
  function openModal() {
    if (!overlay) return;
    overlay.classList.add('is-active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock background scroll

    // Generate fresh CAPTCHA when modal opens
    generateCaptcha();

    // Reset error states
    clearErrors();

    // Focus first input
    setTimeout(() => {
      if (nameInput) nameInput.focus();
    }, 150);
  }

  // Close modal
  function closeModal() {
    if (!overlay) return;
    overlay.classList.remove('is-active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore background scroll

    // Reset view if success card was showing
    setTimeout(() => {
      if (successCard && formWrapper) {
        successCard.classList.remove('is-visible');
        formWrapper.style.display = 'block';
      }
      clearErrors();
    }, 300);
  }

  // Close handlers
  function setupCloseHandlers() {
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    if (successCloseBtn) {
      successCloseBtn.addEventListener('click', closeModal);
    }

    // Close on click outside (backdrop click)
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeModal();
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-active')) {
        closeModal();
      }
    });
  }

  // ==========================================================================
  // CAPTCHA GENERATOR (Canvas based with distortion and noise)
  // ==========================================================================
  function setupCaptcha() {
    if (captchaRefreshBtn) {
      captchaRefreshBtn.addEventListener('click', function (e) {
        e.preventDefault();
        generateCaptcha();
      });
    }
  }

  function generateCaptcha() {
    if (!captchaCanvas) return;
    const ctx = captchaCanvas.getContext('2d');
    if (!ctx) return;

    // Dimensions
    const width = captchaCanvas.width = 110;
    const height = captchaCanvas.height = 38;

    // Characters pool (excluding confusing characters like 0/O, 1/I/l)
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz';
    currentCaptchaText = '';
    for (let i = 0; i < 5; i++) {
      currentCaptchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, '#f2f2f7');
    bgGrad.addColorStop(1, '#e5e5ea');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Add noise dots
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `rgba(${randInt(0, 200)}, ${randInt(0, 200)}, ${randInt(0, 200)}, ${Math.random() * 0.4})`;
      ctx.beginPath();
      ctx.arc(randInt(0, width), randInt(0, height), randInt(1, 2), 0, Math.PI * 2);
      ctx.fill();
    }

    // Add noise lines
    for (let i = 0; i < 3; i++) {
      ctx.strokeStyle = `rgba(${randInt(50, 150)}, ${randInt(50, 150)}, ${randInt(50, 150)}, 0.45)`;
      ctx.lineWidth = randInt(1, 2);
      ctx.beginPath();
      ctx.moveTo(randInt(0, width / 2), randInt(0, height));
      ctx.bezierCurveTo(
        randInt(0, width), randInt(0, height),
        randInt(0, width), randInt(0, height),
        randInt(width / 2, width), randInt(0, height)
      );
      ctx.stroke();
    }

    // Draw characters with random colors, rotation and font styling
    const colors = ['#2563eb', '#7c3aed', '#059669', '#dc2626', '#d97706', '#0891b2'];
    const letterSpacing = width / (currentCaptchaText.length + 1);

    for (let i = 0; i < currentCaptchaText.length; i++) {
      const char = currentCaptchaText[i];
      ctx.save();
      const x = letterSpacing * (i + 1);
      const y = height / 2 + randInt(-2, 3);
      ctx.translate(x, y);
      ctx.rotate((randInt(-22, 22) * Math.PI) / 180);

      ctx.fillStyle = colors[randInt(0, colors.length - 1)];
      ctx.font = `bold ${randInt(20, 24)}px Arial, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }

    // Clear input
    if (captchaInput) {
      captchaInput.value = '';
    }
  }

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // ==========================================================================
  // FORM VALIDATION
  // ==========================================================================
  function setupFormValidation() {
    if (!form) return;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      clearErrors();

      // Basic Honeypot Anti-Spam Check
      if (honeypotInput && honeypotInput.value.trim() !== '') {
        console.warn('Bot submission rejected via honeypot.');
        // Pretend success to mislead bots
        showSuccessScreen();
        return;
      }

      let isValid = true;

      // 1. Name validation (required, at least 2 chars)
      const nameVal = nameInput ? nameInput.value.trim() : '';
      if (!nameVal || nameVal.length < 2) {
        showError(nameInput, 'Please enter your full name (minimum 2 characters)');
        isValid = false;
      }

      // 2. Email validation (required, valid format)
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
      }

      // 3. Primary Mobile validation (required, Indian 10 digits starting with 6-9)
      const mobileVal = mobileInput ? mobileInput.value.trim().replace(/\D/g, '') : '';
      const mobileRegex = /^[6-9]\d{9}$/;
      if (!mobileVal || !mobileRegex.test(mobileVal)) {
        showError(mobileInput, 'Please enter a valid 10-digit mobile number');
        isValid = false;
      }

      // 4. Secondary Mobile validation (optional, but if provided must be 10 digits)
      const secMobileVal = secMobileInput ? secMobileInput.value.trim().replace(/\D/g, '') : '';
      if (secMobileVal && !mobileRegex.test(secMobileVal)) {
        showError(secMobileInput, 'Secondary mobile must be a valid 10-digit number');
        isValid = false;
      }

      // 5. Nearest Branch validation (required)
      const branchVal = branchSelect ? branchSelect.value : '';
      if (!branchVal) {
        showError(branchSelect, 'Please select your nearest branch');
        isValid = false;
      }

      // 6. Preferred Course validation (required)
      const courseVal = courseSelect ? courseSelect.value : '';
      if (!courseVal) {
        showError(courseSelect, 'Please select your preferred course');
        isValid = false;
      }

      // 7. CAPTCHA validation (required, case-insensitive)
      const userCaptcha = captchaInput ? captchaInput.value.trim() : '';
      if (!userCaptcha || userCaptcha.toLowerCase() !== currentCaptchaText.toLowerCase()) {
        showError(captchaInput, 'Incorrect CAPTCHA, please try again');
        generateCaptcha();
        isValid = false;
      }

      // 8. Consent validation (must be checked)
      if (consentCheckbox && !consentCheckbox.checked) {
        alert('Please accept the consent terms to proceed.');
        isValid = false;
      }

      if (!isValid) return;

      // Prepare payload
      const payload = {
        name: nameVal,
        email: emailVal,
        mobile: mobileVal,
        secondaryMobile: secMobileVal || 'N/A',
        nearestBranch: branchVal,
        preferredCourse: courseVal,
        consent: consentCheckbox && consentCheckbox.checked ? 'Yes' : 'No',
        sourcePage: (document.title ? document.title + ' | ' : '') + window.location.href,
        timestamp: new Date().toISOString()
      };

      await submitForm(payload);
    });

    // Real-time error clearing on input
    const inputs = form.querySelectorAll('.app-input, .app-select, .app-checkbox');
    inputs.forEach(input => {
      input.addEventListener('input', () => removeError(input));
      input.addEventListener('change', () => removeError(input));
    });
  }

  function showError(inputElement, message) {
    if (!inputElement) return;
    const group = inputElement.closest('.app-form-group');
    if (group) {
      group.classList.add('has-error');
      const errSpan = group.querySelector('.app-error-msg');
      if (errSpan) {
        errSpan.textContent = message;
      }
    }
  }

  function removeError(inputElement) {
    if (!inputElement) return;
    const group = inputElement.closest('.app-form-group');
    if (group) {
      group.classList.remove('has-error');
    }
  }

  function clearErrors() {
    const errorGroups = form ? form.querySelectorAll('.has-error') : [];
    errorGroups.forEach(g => g.classList.remove('has-error'));
  }

  // ==========================================================================
  // FORM SUBMISSION (Google Apps Script Web App Integration)
  // ==========================================================================
  async function submitForm(data) {
    setLoading(true);

    // If URL is still the default placeholder, simulate network submission so demo works out of the box
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE')) {
      console.info(
        '%c[Enquiry Modal Demo Mode]%c Form submitted with data:\n',
        'color: #FFD900; background: #39318B; font-weight: bold; padding: 2px 6px; border-radius: 3px;',
        'color: inherit;',
        data
      );
      console.warn(
        'Notice: GOOGLE_SCRIPT_URL is not set yet. Submissions are running in demo mode. Deploy your Google Apps Script and update GOOGLE_SCRIPT_URL in enquiry-modal.js.'
      );

      // Simulate network latency (800ms)
      await new Promise(r => setTimeout(r, 800));
      setLoading(false);
      showSuccessScreen();
      return;
    }

    try {
      /**
       * Google Apps Script Web Apps:
       * When posting from another domain, Apps Script returns a 302 redirect.
       * Sending as URL-encoded or JSON with mode: 'no-cors' prevents browser CORS block
       * while successfully executing the doPost(e) on the Apps Script server.
       */
      const formData = new URLSearchParams();
      for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
      }

      // Also send stringified JSON in case script parses contents
      formData.append('jsonData', JSON.stringify(data));

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData.toString()
      });

      setLoading(false);
      showSuccessScreen();
    } catch (err) {
      console.error('Error submitting enquiry form:', err);
      setLoading(false);
      // Fallback: still show success to avoid alarming student, or alert
      showSuccessScreen();
    }
  }

  function setLoading(isLoading) {
    if (!submitBtn) return;
    if (isLoading) {
      submitBtn.disabled = true;
      submitBtn.classList.add('is-loading');
      if (submitBtnText) submitBtnText.textContent = 'Submitting...';
    } else {
      submitBtn.disabled = false;
      submitBtn.classList.remove('is-loading');
      if (submitBtnText) submitBtnText.textContent = 'Submit for Callback';
    }
  }

  function showSuccessScreen() {
    if (formWrapper) formWrapper.style.display = 'none';
    if (successCard) successCard.classList.add('is-visible');

    // Reset form inputs for next time
    if (form) form.reset();
    generateCaptcha();
  }

  // Expose API on window for external control
  window.EnquiryModal = {
    open: openModal,
    close: closeModal,
    setScriptUrl: function (url) {
      GOOGLE_SCRIPT_URL = url;
    }
  };
})();
