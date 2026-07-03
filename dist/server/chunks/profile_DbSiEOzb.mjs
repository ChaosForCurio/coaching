import { c as createComponent } from './astro-component_CePqt0Ai.mjs';
import 'piccolore';
import { I as renderTemplate, _ as addAttribute, v as maybeRenderHead, b3 as unescapeHTML, bk as defineScriptVars } from './sequence_CMdjYNBY.mjs';
import { r as renderComponent } from './entrypoint_CqE5cXTs.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout_DZsQbiib.mjs';
import 'clsx';
import { r as requireAuth } from './auth_LP014y4c.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items } = Astro2.props;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...item.href ? { item: `https://www.bhavyacomputerclasses.com${item.href}` } : {}
    }))
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script> ", '<nav aria-label="Breadcrumb" class="py-3"> <ol class="flex items-center space-x-2 text-sm text-white/60"> ', " </ol> </nav>"])), unescapeHTML(JSON.stringify(breadcrumbSchema)), maybeRenderHead(), items.map((item, index) => renderTemplate`<li class="flex items-center"> ${item.href ? renderTemplate`<a${addAttribute(item.href, "href")} class="hover:text-white transition-colors"> ${item.label} </a>` : renderTemplate`<span class="text-white font-medium" aria-current="page"> ${item.label} </span>`} ${index < items.length - 1 && renderTemplate`<svg class="w-4 h-4 mx-2 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg>`} </li>`));
}, "D:/Coding Projects/coaching/src/components/Breadcrumbs.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Profile;
  const currentUser = await requireAuth(Astro2.cookies);
  if (!currentUser) {
    Astro2.cookies.delete("userSession");
    return Astro2.redirect("/login");
  }
  const userId = currentUser.id;
  const avatarLetter = currentUser.name.charAt(0).toUpperCase();
  const avatarUrl = currentUser.avatar_url;
  const cloudinaryCloudName = "demqbd2bw";
  const cloudinaryUploadPreset = "coaching_avatars";
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "My Profile — BCI Dashboard", "description": "View and manage your profile at Bhavya Computer Classes.", "currentUser": currentUser, "activePage": "profile", "data-astro-cid-rxvxkuhm": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="mb-6" data-astro-cid-rxvxkuhm> ', ' </div>  <div class="page-header" data-astro-cid-rxvxkuhm> <div data-astro-cid-rxvxkuhm> <h2 class="page-title" data-astro-cid-rxvxkuhm>My Profile</h2> <p class="page-subtitle" data-astro-cid-rxvxkuhm>Your account information</p> </div> </div>  <section class="section" data-astro-cid-rxvxkuhm> <div class="profile-card" data-astro-cid-rxvxkuhm> <!-- Skeleton State --> <div id="profile-skeleton" class="animate-pulse-slow" data-astro-cid-rxvxkuhm> <div class="profile-top" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 88px; height: 88px; border-radius: 22px;" data-astro-cid-rxvxkuhm></div> <div class="profile-identity" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 150px; height: 28px; margin-bottom: 10px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 80px; height: 24px; border-radius: 20px;" data-astro-cid-rxvxkuhm></div> </div> </div> <div class="profile-divider" data-astro-cid-rxvxkuhm></div> <div class="profile-fields" data-astro-cid-rxvxkuhm> <div class="profile-field" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 70px; height: 12px; margin-bottom: 8px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 140px; height: 18px;" data-astro-cid-rxvxkuhm></div> </div> <div class="profile-field" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 90px; height: 12px; margin-bottom: 8px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 180px; height: 18px;" data-astro-cid-rxvxkuhm></div> </div> <div class="profile-field" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 80px; height: 12px; margin-bottom: 8px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 100px; height: 18px;" data-astro-cid-rxvxkuhm></div> </div> <div class="profile-field" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 60px; height: 12px; margin-bottom: 8px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 130px; height: 36px; border-radius: 12px;" data-astro-cid-rxvxkuhm></div> </div> </div> </div> <!-- Actual Content --> <div id="profile-actual" class="hidden" data-astro-cid-rxvxkuhm> <!-- Avatar + Name --> <div class="profile-top" data-astro-cid-rxvxkuhm> <div class="profile-avatar-wrap group" data-astro-cid-rxvxkuhm> <div class="profile-avatar overflow-hidden relative" data-astro-cid-rxvxkuhm> ', ` <!-- Upload Overlay --> <button id="upload-avatar-btn" class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer border-none text-white font-['Outfit']" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-1" data-astro-cid-rxvxkuhm><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-rxvxkuhm></path><polyline points="17 8 12 3 7 8" data-astro-cid-rxvxkuhm></polyline><line x1="12" y1="3" x2="12" y2="15" data-astro-cid-rxvxkuhm></line></svg> <span class="text-[10px] font-bold uppercase tracking-wider" data-astro-cid-rxvxkuhm>Upload</span> </button> </div> <span class="online-ring" data-astro-cid-rxvxkuhm></span> </div> <div class="profile-identity" data-astro-cid-rxvxkuhm> <h3 class="profile-name" data-astro-cid-rxvxkuhm>`, '</h3> <div class="profile-role-pill" data-astro-cid-rxvxkuhm>', '</div> </div> </div> <div class="profile-divider" data-astro-cid-rxvxkuhm></div> <!-- Info Fields --> <div class="profile-fields" data-astro-cid-rxvxkuhm> <div class="profile-field" data-astro-cid-rxvxkuhm> <p class="field-label" data-astro-cid-rxvxkuhm>Full Name</p> <p class="field-value" data-astro-cid-rxvxkuhm>', '</p> </div> <div class="profile-field" data-astro-cid-rxvxkuhm> <p class="field-label" data-astro-cid-rxvxkuhm>Email Address</p> <p class="field-value" data-astro-cid-rxvxkuhm>', '</p> </div> <div class="profile-field" data-astro-cid-rxvxkuhm> <p class="field-label" data-astro-cid-rxvxkuhm>Account Role</p> <p class="field-value capitalize" data-astro-cid-rxvxkuhm>', '</p> </div> <div class="profile-field" data-astro-cid-rxvxkuhm> <p class="field-label" data-astro-cid-rxvxkuhm>Unique ID</p> <div class="id-row" data-astro-cid-rxvxkuhm> <code class="id-code" data-astro-cid-rxvxkuhm>BCI-', `</code> <button id="copy-id-btn" class="copy-btn" title="Copy ID" aria-label="Copy Unique ID" data-astro-cid-rxvxkuhm> <svg id="copy-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rxvxkuhm><rect x="9" y="9" width="13" height="13" rx="2" ry="2" data-astro-cid-rxvxkuhm></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" data-astro-cid-rxvxkuhm></path></svg> </button> </div> </div> </div> </div> </div> </section>  <section class="section" data-astro-cid-rxvxkuhm> <div class="section-header" data-astro-cid-rxvxkuhm> <h3 class="section-title" data-astro-cid-rxvxkuhm>Account Details</h3> </div> <!-- Skeleton Grid --> <div class="details-grid" id="details-skeleton" data-astro-cid-rxvxkuhm> <div class="detail-card" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;" data-astro-cid-rxvxkuhm></div> <div style="flex: 1;" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 50px; height: 12px; margin-bottom: 6px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 80px; height: 16px;" data-astro-cid-rxvxkuhm></div> </div> </div> <div class="detail-card" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;" data-astro-cid-rxvxkuhm></div> <div style="flex: 1;" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 60px; height: 12px; margin-bottom: 6px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 80px; height: 16px;" data-astro-cid-rxvxkuhm></div> </div> </div> <div class="detail-card" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;" data-astro-cid-rxvxkuhm></div> <div style="flex: 1;" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 90px; height: 12px; margin-bottom: 6px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 40px; height: 16px;" data-astro-cid-rxvxkuhm></div> </div> </div> </div> <!-- Actual Details Grid --> <div class="details-grid hidden" id="details-actual" data-astro-cid-rxvxkuhm> <div class="detail-card" data-astro-cid-rxvxkuhm> <div class="detail-icon" style="color:#22d3ee; background:rgba(34,211,238,0.08); border-color:rgba(34,211,238,0.15);" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-rxvxkuhm><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.37 6.37l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-rxvxkuhm></path></svg> </div> <div data-astro-cid-rxvxkuhm> <p class="detail-label" data-astro-cid-rxvxkuhm>Status</p> <p class="detail-value" data-astro-cid-rxvxkuhm>Active</p> </div> </div> <div class="detail-card" data-astro-cid-rxvxkuhm> <div class="detail-icon" style="color:#a78bfa; background:rgba(167,139,250,0.08); border-color:rgba(167,139,250,0.15);" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-rxvxkuhm><rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-astro-cid-rxvxkuhm></rect><path d="M7 11V7a5 5 0 0 1 10 0v4" data-astro-cid-rxvxkuhm></path></svg> </div> <div data-astro-cid-rxvxkuhm> <p class="detail-label" data-astro-cid-rxvxkuhm>Password</p> <p class="detail-value" data-astro-cid-rxvxkuhm>••••••••</p> </div> </div> <div class="detail-card" data-astro-cid-rxvxkuhm> <div class="detail-icon" style="color:#34d399; background:rgba(52,211,153,0.08); border-color:rgba(52,211,153,0.15);" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-rxvxkuhm><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-astro-cid-rxvxkuhm></path><polyline points="22 4 12 14.01 9 11.01" data-astro-cid-rxvxkuhm></polyline></svg> </div> <div data-astro-cid-rxvxkuhm> <p class="detail-label" data-astro-cid-rxvxkuhm>Account Verified</p> <p class="detail-value" data-astro-cid-rxvxkuhm>Yes</p> </div> </div> </div> </section>  <div id="upload-modal" class="fixed inset-0 z-50 bg-black/80 hidden items-center justify-center backdrop-blur-sm transition-opacity" data-astro-cid-rxvxkuhm> <div class="bg-[#0a0a0a] border border-[#222] rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl relative transform scale-95 transition-transform duration-200" id="upload-modal-content" data-astro-cid-rxvxkuhm> <button id="close-modal-btn" class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rxvxkuhm><line x1="18" y1="6" x2="6" y2="18" data-astro-cid-rxvxkuhm></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-rxvxkuhm></line></svg> </button> <h3 class="text-xl font-['Syne'] font-bold text-white mb-2" data-astro-cid-rxvxkuhm>Upload Profile Picture</h3> <p class="text-sm font-['Outfit'] text-gray-400 mb-6" data-astro-cid-rxvxkuhm>Choose a new avatar for your account.</p> <div id="drop-zone" class="border-2 border-dashed border-[#333] hover:border-[#22d3ee] rounded-2xl p-10 text-center transition-colors cursor-pointer group flex flex-col items-center justify-center" data-astro-cid-rxvxkuhm> <input type="file" id="file-input" class="hidden" accept="image/png, image/jpeg, image/jpg, image/webp" data-astro-cid-rxvxkuhm> <div class="w-16 h-16 rounded-full bg-[#111] border border-[#222] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rxvxkuhm><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-rxvxkuhm></path><polyline points="17 8 12 3 7 8" data-astro-cid-rxvxkuhm></polyline><line x1="12" y1="3" x2="12" y2="15" data-astro-cid-rxvxkuhm></line></svg> </div> <p class="text-white font-medium font-['Outfit'] mb-1" data-astro-cid-rxvxkuhm>Click to browse or drag and drop</p> <p class="text-xs text-gray-500 font-['Outfit']" data-astro-cid-rxvxkuhm>PNG, JPG or WEBP (Max 5MB)</p> </div> <!-- Upload Progress --> <div id="upload-progress-container" class="hidden mt-6" data-astro-cid-rxvxkuhm> <div class="flex justify-between text-sm font-['Outfit'] mb-2" data-astro-cid-rxvxkuhm> <span class="text-white" id="upload-status-text" data-astro-cid-rxvxkuhm>Uploading...</span> <span class="text-[#22d3ee]" id="upload-percent" data-astro-cid-rxvxkuhm>0%</span> </div> <div class="h-2 w-full bg-[#111] rounded-full overflow-hidden" data-astro-cid-rxvxkuhm> <div id="upload-progress-bar" class="h-full bg-[#22d3ee] transition-all duration-300" style="width: 0%" data-astro-cid-rxvxkuhm></div> </div> </div> </div> </div>  <script>(function(){`, `
    // Skeleton Removal
    setTimeout(() => {
      document.getElementById('profile-skeleton')?.remove();
      document.getElementById('profile-actual')?.classList.remove('hidden');
      document.getElementById('details-skeleton')?.remove();
      document.getElementById('details-actual')?.classList.remove('hidden');
    }, 150);

    // Copy ID functionality
    document.getElementById('copy-id-btn')?.addEventListener('click', function () {
      const code = \`BCI-\${String(userId).padStart(4, '0')}\`;
      navigator.clipboard.writeText(code).then(() => {
        const icon = document.getElementById('copy-icon');
        if (icon) icon.outerHTML = \`<svg id="copy-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\`;
        setTimeout(() => window.location.reload(), 1800);
      });
    });

    // Custom Upload Logic
    const uploadBtn = document.getElementById('upload-avatar-btn');
    const modal = document.getElementById('upload-modal');
    const modalContent = document.getElementById('upload-modal-content');
    const closeBtn = document.getElementById('close-modal-btn');
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const progressContainer = document.getElementById('upload-progress-container');
    const progressBar = document.getElementById('upload-progress-bar');
    const progressPercent = document.getElementById('upload-percent');
    const statusText = document.getElementById('upload-status-text');

    function openModal() {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      setTimeout(() => {
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
      }, 10);
    }

    function closeModal() {
      modalContent.classList.remove('scale-100');
      modalContent.classList.add('scale-95');
      setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        // Reset state
        progressContainer.classList.add('hidden');
        dropZone.classList.remove('hidden');
        fileInput.value = '';
        resetProgress();
      }, 200);
    }

    function resetProgress() {
      statusText.textContent = "Uploading...";
      statusText.className = "text-white";
      progressBar.className = "h-full bg-[#22d3ee] transition-all duration-300";
      progressPercent.className = "text-[#22d3ee]";
      progressBar.style.width = '0%';
      progressPercent.textContent = '0%';
    }

    uploadBtn?.addEventListener('click', () => {
      if (!cloudinaryCloudName || !cloudinaryUploadPreset) {
        alert("Cloudinary is not fully configured. Please check .env settings.");
        return;
      }
      openModal();
    });

    closeBtn?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    dropZone?.addEventListener('click', () => fileInput.click());

    dropZone?.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('border-[#22d3ee]', 'bg-[#111]');
    });

    dropZone?.addEventListener('dragleave', (e) => {
      e.preventDefault();
      dropZone.classList.remove('border-[#22d3ee]', 'bg-[#111]');
    });

    dropZone?.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('border-[#22d3ee]', 'bg-[#111]');
      if (e.dataTransfer.files.length) {
        handleFile(e.dataTransfer.files[0]);
      }
    });

    fileInput?.addEventListener('change', (e) => {
      if (e.target.files.length) {
        handleFile(e.target.files[0]);
      }
    });

    async function handleFile(file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
      }
      if (file.size > 5000000) {
        alert('File size must be less than 5MB.');
        return;
      }

      dropZone.classList.add('hidden');
      progressContainer.classList.remove('hidden');
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', cloudinaryUploadPreset);
      formData.append('folder', 'user_avatars');

      const xhr = new XMLHttpRequest();
      xhr.open('POST', \`https://api.cloudinary.com/v1_1/\${cloudinaryCloudName}/image/upload\`);
      
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const percent = Math.round((e.loaded / e.total) * 100);
          progressBar.style.width = percent + '%';
          progressPercent.textContent = percent + '%';
        }
      };

      xhr.onload = async () => {
        if (xhr.status === 200) {
          statusText.textContent = "Saving to profile...";
          const response = JSON.parse(xhr.responseText);
          const newAvatarUrl = response.secure_url;

          try {
            const API_URL = '';
            const res = await fetch(\`\${API_URL}/api/update-avatar\`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ avatarUrl: newAvatarUrl }),
            });
            
            if (res.ok) {
              statusText.textContent = "Success!";
              statusText.className = "text-[#10b981]";
              progressBar.className = "h-full bg-[#10b981] transition-all duration-300";
              progressPercent.className = "text-[#10b981]";

              // Update UI Instantly
              const profileAvatarContainer = document.querySelector('.profile-avatar');
              if (profileAvatarContainer) {
                const currentImg = document.getElementById('profile-img');
                if (currentImg) {
                  currentImg.src = newAvatarUrl;
                } else {
                  const span = document.getElementById('profile-letter');
                  if (span) span.remove();
                  
                  const img = document.createElement('img');
                  img.src = newAvatarUrl;
                  img.alt = "Profile Avatar";
                  img.className = "w-full h-full object-cover";
                  img.id = "profile-img";
                  
                  profileAvatarContainer.insertBefore(img, uploadBtn);
                }
              }
              document.querySelectorAll('.user-avatar img').forEach(img => {
                img.src = newAvatarUrl;
              });

              setTimeout(closeModal, 1000);
            } else {
              throw new Error('Server update failed');
            }
          } catch (err) {
            handleError("Failed to save avatar.");
          }
        } else {
          handleError("Upload failed. Try again.");
        }
      };

      xhr.onerror = () => handleError("Network error. Try again.");
      xhr.send(formData);
    }

    function handleError(msg) {
      statusText.textContent = msg;
      statusText.className = "text-red-500";
      progressBar.className = "h-full bg-red-500 transition-all duration-300";
      progressPercent.className = "text-red-500";
      setTimeout(closeModal, 2500);
    }

  })();</script> `], [" ", '<div class="mb-6" data-astro-cid-rxvxkuhm> ', ' </div>  <div class="page-header" data-astro-cid-rxvxkuhm> <div data-astro-cid-rxvxkuhm> <h2 class="page-title" data-astro-cid-rxvxkuhm>My Profile</h2> <p class="page-subtitle" data-astro-cid-rxvxkuhm>Your account information</p> </div> </div>  <section class="section" data-astro-cid-rxvxkuhm> <div class="profile-card" data-astro-cid-rxvxkuhm> <!-- Skeleton State --> <div id="profile-skeleton" class="animate-pulse-slow" data-astro-cid-rxvxkuhm> <div class="profile-top" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 88px; height: 88px; border-radius: 22px;" data-astro-cid-rxvxkuhm></div> <div class="profile-identity" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 150px; height: 28px; margin-bottom: 10px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 80px; height: 24px; border-radius: 20px;" data-astro-cid-rxvxkuhm></div> </div> </div> <div class="profile-divider" data-astro-cid-rxvxkuhm></div> <div class="profile-fields" data-astro-cid-rxvxkuhm> <div class="profile-field" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 70px; height: 12px; margin-bottom: 8px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 140px; height: 18px;" data-astro-cid-rxvxkuhm></div> </div> <div class="profile-field" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 90px; height: 12px; margin-bottom: 8px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 180px; height: 18px;" data-astro-cid-rxvxkuhm></div> </div> <div class="profile-field" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 80px; height: 12px; margin-bottom: 8px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 100px; height: 18px;" data-astro-cid-rxvxkuhm></div> </div> <div class="profile-field" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 60px; height: 12px; margin-bottom: 8px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 130px; height: 36px; border-radius: 12px;" data-astro-cid-rxvxkuhm></div> </div> </div> </div> <!-- Actual Content --> <div id="profile-actual" class="hidden" data-astro-cid-rxvxkuhm> <!-- Avatar + Name --> <div class="profile-top" data-astro-cid-rxvxkuhm> <div class="profile-avatar-wrap group" data-astro-cid-rxvxkuhm> <div class="profile-avatar overflow-hidden relative" data-astro-cid-rxvxkuhm> ', ` <!-- Upload Overlay --> <button id="upload-avatar-btn" class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer border-none text-white font-['Outfit']" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-1" data-astro-cid-rxvxkuhm><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-rxvxkuhm></path><polyline points="17 8 12 3 7 8" data-astro-cid-rxvxkuhm></polyline><line x1="12" y1="3" x2="12" y2="15" data-astro-cid-rxvxkuhm></line></svg> <span class="text-[10px] font-bold uppercase tracking-wider" data-astro-cid-rxvxkuhm>Upload</span> </button> </div> <span class="online-ring" data-astro-cid-rxvxkuhm></span> </div> <div class="profile-identity" data-astro-cid-rxvxkuhm> <h3 class="profile-name" data-astro-cid-rxvxkuhm>`, '</h3> <div class="profile-role-pill" data-astro-cid-rxvxkuhm>', '</div> </div> </div> <div class="profile-divider" data-astro-cid-rxvxkuhm></div> <!-- Info Fields --> <div class="profile-fields" data-astro-cid-rxvxkuhm> <div class="profile-field" data-astro-cid-rxvxkuhm> <p class="field-label" data-astro-cid-rxvxkuhm>Full Name</p> <p class="field-value" data-astro-cid-rxvxkuhm>', '</p> </div> <div class="profile-field" data-astro-cid-rxvxkuhm> <p class="field-label" data-astro-cid-rxvxkuhm>Email Address</p> <p class="field-value" data-astro-cid-rxvxkuhm>', '</p> </div> <div class="profile-field" data-astro-cid-rxvxkuhm> <p class="field-label" data-astro-cid-rxvxkuhm>Account Role</p> <p class="field-value capitalize" data-astro-cid-rxvxkuhm>', '</p> </div> <div class="profile-field" data-astro-cid-rxvxkuhm> <p class="field-label" data-astro-cid-rxvxkuhm>Unique ID</p> <div class="id-row" data-astro-cid-rxvxkuhm> <code class="id-code" data-astro-cid-rxvxkuhm>BCI-', `</code> <button id="copy-id-btn" class="copy-btn" title="Copy ID" aria-label="Copy Unique ID" data-astro-cid-rxvxkuhm> <svg id="copy-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rxvxkuhm><rect x="9" y="9" width="13" height="13" rx="2" ry="2" data-astro-cid-rxvxkuhm></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" data-astro-cid-rxvxkuhm></path></svg> </button> </div> </div> </div> </div> </div> </section>  <section class="section" data-astro-cid-rxvxkuhm> <div class="section-header" data-astro-cid-rxvxkuhm> <h3 class="section-title" data-astro-cid-rxvxkuhm>Account Details</h3> </div> <!-- Skeleton Grid --> <div class="details-grid" id="details-skeleton" data-astro-cid-rxvxkuhm> <div class="detail-card" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;" data-astro-cid-rxvxkuhm></div> <div style="flex: 1;" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 50px; height: 12px; margin-bottom: 6px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 80px; height: 16px;" data-astro-cid-rxvxkuhm></div> </div> </div> <div class="detail-card" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;" data-astro-cid-rxvxkuhm></div> <div style="flex: 1;" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 60px; height: 12px; margin-bottom: 6px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 80px; height: 16px;" data-astro-cid-rxvxkuhm></div> </div> </div> <div class="detail-card" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;" data-astro-cid-rxvxkuhm></div> <div style="flex: 1;" data-astro-cid-rxvxkuhm> <div class="skeleton-box" style="width: 90px; height: 12px; margin-bottom: 6px;" data-astro-cid-rxvxkuhm></div> <div class="skeleton-box" style="width: 40px; height: 16px;" data-astro-cid-rxvxkuhm></div> </div> </div> </div> <!-- Actual Details Grid --> <div class="details-grid hidden" id="details-actual" data-astro-cid-rxvxkuhm> <div class="detail-card" data-astro-cid-rxvxkuhm> <div class="detail-icon" style="color:#22d3ee; background:rgba(34,211,238,0.08); border-color:rgba(34,211,238,0.15);" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-rxvxkuhm><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.37 6.37l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-rxvxkuhm></path></svg> </div> <div data-astro-cid-rxvxkuhm> <p class="detail-label" data-astro-cid-rxvxkuhm>Status</p> <p class="detail-value" data-astro-cid-rxvxkuhm>Active</p> </div> </div> <div class="detail-card" data-astro-cid-rxvxkuhm> <div class="detail-icon" style="color:#a78bfa; background:rgba(167,139,250,0.08); border-color:rgba(167,139,250,0.15);" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-rxvxkuhm><rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-astro-cid-rxvxkuhm></rect><path d="M7 11V7a5 5 0 0 1 10 0v4" data-astro-cid-rxvxkuhm></path></svg> </div> <div data-astro-cid-rxvxkuhm> <p class="detail-label" data-astro-cid-rxvxkuhm>Password</p> <p class="detail-value" data-astro-cid-rxvxkuhm>••••••••</p> </div> </div> <div class="detail-card" data-astro-cid-rxvxkuhm> <div class="detail-icon" style="color:#34d399; background:rgba(52,211,153,0.08); border-color:rgba(52,211,153,0.15);" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-rxvxkuhm><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-astro-cid-rxvxkuhm></path><polyline points="22 4 12 14.01 9 11.01" data-astro-cid-rxvxkuhm></polyline></svg> </div> <div data-astro-cid-rxvxkuhm> <p class="detail-label" data-astro-cid-rxvxkuhm>Account Verified</p> <p class="detail-value" data-astro-cid-rxvxkuhm>Yes</p> </div> </div> </div> </section>  <div id="upload-modal" class="fixed inset-0 z-50 bg-black/80 hidden items-center justify-center backdrop-blur-sm transition-opacity" data-astro-cid-rxvxkuhm> <div class="bg-[#0a0a0a] border border-[#222] rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl relative transform scale-95 transition-transform duration-200" id="upload-modal-content" data-astro-cid-rxvxkuhm> <button id="close-modal-btn" class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rxvxkuhm><line x1="18" y1="6" x2="6" y2="18" data-astro-cid-rxvxkuhm></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-rxvxkuhm></line></svg> </button> <h3 class="text-xl font-['Syne'] font-bold text-white mb-2" data-astro-cid-rxvxkuhm>Upload Profile Picture</h3> <p class="text-sm font-['Outfit'] text-gray-400 mb-6" data-astro-cid-rxvxkuhm>Choose a new avatar for your account.</p> <div id="drop-zone" class="border-2 border-dashed border-[#333] hover:border-[#22d3ee] rounded-2xl p-10 text-center transition-colors cursor-pointer group flex flex-col items-center justify-center" data-astro-cid-rxvxkuhm> <input type="file" id="file-input" class="hidden" accept="image/png, image/jpeg, image/jpg, image/webp" data-astro-cid-rxvxkuhm> <div class="w-16 h-16 rounded-full bg-[#111] border border-[#222] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" data-astro-cid-rxvxkuhm> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rxvxkuhm><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-rxvxkuhm></path><polyline points="17 8 12 3 7 8" data-astro-cid-rxvxkuhm></polyline><line x1="12" y1="3" x2="12" y2="15" data-astro-cid-rxvxkuhm></line></svg> </div> <p class="text-white font-medium font-['Outfit'] mb-1" data-astro-cid-rxvxkuhm>Click to browse or drag and drop</p> <p class="text-xs text-gray-500 font-['Outfit']" data-astro-cid-rxvxkuhm>PNG, JPG or WEBP (Max 5MB)</p> </div> <!-- Upload Progress --> <div id="upload-progress-container" class="hidden mt-6" data-astro-cid-rxvxkuhm> <div class="flex justify-between text-sm font-['Outfit'] mb-2" data-astro-cid-rxvxkuhm> <span class="text-white" id="upload-status-text" data-astro-cid-rxvxkuhm>Uploading...</span> <span class="text-[#22d3ee]" id="upload-percent" data-astro-cid-rxvxkuhm>0%</span> </div> <div class="h-2 w-full bg-[#111] rounded-full overflow-hidden" data-astro-cid-rxvxkuhm> <div id="upload-progress-bar" class="h-full bg-[#22d3ee] transition-all duration-300" style="width: 0%" data-astro-cid-rxvxkuhm></div> </div> </div> </div> </div>  <script>(function(){`, `
    // Skeleton Removal
    setTimeout(() => {
      document.getElementById('profile-skeleton')?.remove();
      document.getElementById('profile-actual')?.classList.remove('hidden');
      document.getElementById('details-skeleton')?.remove();
      document.getElementById('details-actual')?.classList.remove('hidden');
    }, 150);

    // Copy ID functionality
    document.getElementById('copy-id-btn')?.addEventListener('click', function () {
      const code = \\\`BCI-\\\${String(userId).padStart(4, '0')}\\\`;
      navigator.clipboard.writeText(code).then(() => {
        const icon = document.getElementById('copy-icon');
        if (icon) icon.outerHTML = \\\`<svg id="copy-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\\\`;
        setTimeout(() => window.location.reload(), 1800);
      });
    });

    // Custom Upload Logic
    const uploadBtn = document.getElementById('upload-avatar-btn');
    const modal = document.getElementById('upload-modal');
    const modalContent = document.getElementById('upload-modal-content');
    const closeBtn = document.getElementById('close-modal-btn');
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const progressContainer = document.getElementById('upload-progress-container');
    const progressBar = document.getElementById('upload-progress-bar');
    const progressPercent = document.getElementById('upload-percent');
    const statusText = document.getElementById('upload-status-text');

    function openModal() {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      setTimeout(() => {
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
      }, 10);
    }

    function closeModal() {
      modalContent.classList.remove('scale-100');
      modalContent.classList.add('scale-95');
      setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        // Reset state
        progressContainer.classList.add('hidden');
        dropZone.classList.remove('hidden');
        fileInput.value = '';
        resetProgress();
      }, 200);
    }

    function resetProgress() {
      statusText.textContent = "Uploading...";
      statusText.className = "text-white";
      progressBar.className = "h-full bg-[#22d3ee] transition-all duration-300";
      progressPercent.className = "text-[#22d3ee]";
      progressBar.style.width = '0%';
      progressPercent.textContent = '0%';
    }

    uploadBtn?.addEventListener('click', () => {
      if (!cloudinaryCloudName || !cloudinaryUploadPreset) {
        alert("Cloudinary is not fully configured. Please check .env settings.");
        return;
      }
      openModal();
    });

    closeBtn?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    dropZone?.addEventListener('click', () => fileInput.click());

    dropZone?.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('border-[#22d3ee]', 'bg-[#111]');
    });

    dropZone?.addEventListener('dragleave', (e) => {
      e.preventDefault();
      dropZone.classList.remove('border-[#22d3ee]', 'bg-[#111]');
    });

    dropZone?.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('border-[#22d3ee]', 'bg-[#111]');
      if (e.dataTransfer.files.length) {
        handleFile(e.dataTransfer.files[0]);
      }
    });

    fileInput?.addEventListener('change', (e) => {
      if (e.target.files.length) {
        handleFile(e.target.files[0]);
      }
    });

    async function handleFile(file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
      }
      if (file.size > 5000000) {
        alert('File size must be less than 5MB.');
        return;
      }

      dropZone.classList.add('hidden');
      progressContainer.classList.remove('hidden');
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', cloudinaryUploadPreset);
      formData.append('folder', 'user_avatars');

      const xhr = new XMLHttpRequest();
      xhr.open('POST', \\\`https://api.cloudinary.com/v1_1/\\\${cloudinaryCloudName}/image/upload\\\`);
      
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const percent = Math.round((e.loaded / e.total) * 100);
          progressBar.style.width = percent + '%';
          progressPercent.textContent = percent + '%';
        }
      };

      xhr.onload = async () => {
        if (xhr.status === 200) {
          statusText.textContent = "Saving to profile...";
          const response = JSON.parse(xhr.responseText);
          const newAvatarUrl = response.secure_url;

          try {
            const API_URL = '';
            const res = await fetch(\\\`\\\${API_URL}/api/update-avatar\\\`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ avatarUrl: newAvatarUrl }),
            });
            
            if (res.ok) {
              statusText.textContent = "Success!";
              statusText.className = "text-[#10b981]";
              progressBar.className = "h-full bg-[#10b981] transition-all duration-300";
              progressPercent.className = "text-[#10b981]";

              // Update UI Instantly
              const profileAvatarContainer = document.querySelector('.profile-avatar');
              if (profileAvatarContainer) {
                const currentImg = document.getElementById('profile-img');
                if (currentImg) {
                  currentImg.src = newAvatarUrl;
                } else {
                  const span = document.getElementById('profile-letter');
                  if (span) span.remove();
                  
                  const img = document.createElement('img');
                  img.src = newAvatarUrl;
                  img.alt = "Profile Avatar";
                  img.className = "w-full h-full object-cover";
                  img.id = "profile-img";
                  
                  profileAvatarContainer.insertBefore(img, uploadBtn);
                }
              }
              document.querySelectorAll('.user-avatar img').forEach(img => {
                img.src = newAvatarUrl;
              });

              setTimeout(closeModal, 1000);
            } else {
              throw new Error('Server update failed');
            }
          } catch (err) {
            handleError("Failed to save avatar.");
          }
        } else {
          handleError("Upload failed. Try again.");
        }
      };

      xhr.onerror = () => handleError("Network error. Try again.");
      xhr.send(formData);
    }

    function handleError(msg) {
      statusText.textContent = msg;
      statusText.className = "text-red-500";
      progressBar.className = "h-full bg-red-500 transition-all duration-300";
      progressPercent.className = "text-red-500";
      setTimeout(closeModal, 2500);
    }

  })();</script> `])), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Dashboard", href: "/dashboard" },
    { label: "My Profile" }
  ], "data-astro-cid-rxvxkuhm": true }), avatarUrl ? renderTemplate`<img${addAttribute(avatarUrl, "src")}${addAttribute(currentUser.name, "alt")} class="w-full h-full object-cover" id="profile-img" data-astro-cid-rxvxkuhm>` : renderTemplate`<span id="profile-letter" data-astro-cid-rxvxkuhm>${avatarLetter}</span>`, currentUser.name, currentUser.role, currentUser.name, currentUser.email, currentUser.role.charAt(0) + currentUser.role.slice(1).toLowerCase(), String(currentUser.id).padStart(4, "0"), defineScriptVars({ userId, cloudinaryCloudName, cloudinaryUploadPreset })) })}`;
}, "D:/Coding Projects/coaching/src/pages/dashboard/profile.astro", void 0);
const $$file = "D:/Coding Projects/coaching/src/pages/dashboard/profile.astro";
const $$url = "/dashboard/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
