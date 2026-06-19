import { c as createComponent } from './astro-component_DJPswS2K.mjs';
import 'piccolore';
import { _ as addAttribute, I as renderTemplate, aR as renderHead, F as Fragment, b9 as renderSlot, b4 as unescapeHTML } from './sequence_Suik_5Ze.mjs';
import { r as renderComponent } from './server_XJySStNO.mjs';
import { r as renderScript } from './script_BBdc2VQP.mjs';
/* empty css                 */
import { $ as $$SEOHead } from './SEOHead_D2qu1SZm.mjs';
import { $ as $$Cursor } from './Cursor_C1IsHTOn.mjs';
import { $ as $$Navbar } from './Navbar_BruBbfeq.mjs';
import 'clsx';

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/Coding Projects/coaching/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/node_modules/astro/components/ClientRouter.astro", void 0);

const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const { title, description, canonical, currentUser, activePage } = Astro2.props;
  const role = currentUser.role.toLowerCase();
  const isStudent = role === "student";
  const isTeacher = role === "teacher";
  const navLinks = [
    {
      id: "overview",
      href: "/dashboard/",
      label: "Overview",
      badge: "Home",
      iconColor: "#22d3ee",
      icon: `<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>`,
      group: "General",
      show: true
    },
    {
      id: "profile",
      href: "/dashboard/profile/",
      label: "My Profile",
      badge: "",
      iconColor: "#a78bfa",
      icon: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
      group: "General",
      show: true
    },
    {
      id: "calendar",
      href: "/dashboard/calendar/",
      label: "Calendar",
      badge: "",
      iconColor: "#34d399",
      icon: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,
      group: "Attendance",
      show: isStudent
    },
    {
      id: "courses",
      href: "/dashboard/courses/",
      label: "Courses",
      badge: "",
      iconColor: "#fbbf24",
      icon: `<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>`,
      group: "Attendance",
      show: true
    },
    {
      id: "mark",
      href: "/dashboard/mark/",
      label: "Mark Attendance",
      badge: "",
      iconColor: "#f87171",
      icon: `<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>`,
      group: "Teacher Tools",
      show: isTeacher
    },
    {
      id: "assign",
      href: "/dashboard/assign/",
      label: "Assign Course",
      badge: "",
      iconColor: "#a78bfa",
      icon: `<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`,
      group: "Teacher Tools",
      show: isTeacher
    }
  ];
  const groups = ["General", "Attendance", "Teacher Tools"];
  const roleLabel = currentUser.role.charAt(0) + currentUser.role.slice(1).toLowerCase() + " Portal";
  const avatarLetter = currentUser.name.charAt(0).toUpperCase() || "U";
  const avatarUrl = currentUser.avatar_url;
  return renderTemplate`<html lang="en" data-astro-cid-kqx5um5x> <head>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": title, "description": description || "Bhavya Computer Classes Student Portal — Dashboard", "canonical": canonical || "https://www.bhavyacomputerclasses.com/dashboard", "data-astro-cid-kqx5um5x": true })}${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-kqx5um5x": true })}${renderHead()}</head> <body class="bg-[#000] text-white overflow-x-hidden selection:bg-white/20" data-astro-cid-kqx5um5x> ${renderComponent($$result, "Cursor", $$Cursor, { "data-astro-cid-kqx5um5x": true })} ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-kqx5um5x": true })} <div class="noise" data-astro-cid-kqx5um5x></div> <!-- Dashboard Shell --> <div class="dashboard-shell min-h-screen flex pt-[72px]" data-astro-cid-kqx5um5x> <!-- Sidebar Backdrop (mobile) --> <div id="sidebar-backdrop" class="sidebar-backdrop" data-astro-cid-kqx5um5x></div> <!-- Sidebar --> <aside id="sidebar" class="sidebar" data-astro-cid-kqx5um5x> <!-- Brand --> <div class="sidebar-brand" data-astro-cid-kqx5um5x> <div class="brand-icon" data-astro-cid-kqx5um5x> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#sb-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-kqx5um5x> <defs data-astro-cid-kqx5um5x><linearGradient id="sb-grad" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-kqx5um5x><stop offset="0%" stop-color="#a78bfa" data-astro-cid-kqx5um5x></stop><stop offset="100%" stop-color="#22d3ee" data-astro-cid-kqx5um5x></stop></linearGradient></defs> <path d="M22 10v6M2 10l10-5 10 5-10 5z" data-astro-cid-kqx5um5x></path><path d="M6 12v5c3 3 9 3 12 0v-5" data-astro-cid-kqx5um5x></path> </svg> </div> <div class="brand-text" data-astro-cid-kqx5um5x> <p class="brand-name" data-astro-cid-kqx5um5x>BCI Portal</p> <p class="brand-sub" data-astro-cid-kqx5um5x>${roleLabel}</p> </div> </div> <!-- User card --> <div class="sidebar-user-card" data-astro-cid-kqx5um5x> <div class="user-avatar-wrap" data-astro-cid-kqx5um5x> <div class="user-avatar overflow-hidden" data-astro-cid-kqx5um5x> ${avatarUrl ? renderTemplate`<img${addAttribute(avatarUrl, "src")}${addAttribute(currentUser.name, "alt")} class="w-full h-full object-cover" data-astro-cid-kqx5um5x>` : avatarLetter} </div> <span class="user-online-ring" data-astro-cid-kqx5um5x></span> </div> <div class="user-info" data-astro-cid-kqx5um5x> <p class="user-name" data-astro-cid-kqx5um5x>${currentUser.name}</p> <p class="user-role-badge" data-astro-cid-kqx5um5x>${currentUser.role}</p> </div> <div class="user-chevron" data-astro-cid-kqx5um5x> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-kqx5um5x><polyline points="9 18 15 12 9 6" data-astro-cid-kqx5um5x></polyline></svg> </div> </div> <!-- Nav --> <nav class="sidebar-nav" data-astro-cid-kqx5um5x> ${groups.map((group) => {
    const groupLinks = navLinks.filter((l) => l.group === group && l.show);
    if (groupLinks.length === 0) return null;
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-kqx5um5x": true }, { "default": ($$result2) => renderTemplate` <p class="nav-group-label" data-astro-cid-kqx5um5x>${group}</p> ${groupLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`sidebar-link ${activePage === link.id ? "active" : ""}`, "class")}${addAttribute(`--icon-accent: ${link.iconColor}`, "style")}${addAttribute(`nav-${link.id}`, "id")} data-astro-cid-kqx5um5x> <span class="link-icon" data-astro-cid-kqx5um5x> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-kqx5um5x>${unescapeHTML(link.icon)}</svg> </span> <span class="link-label" data-astro-cid-kqx5um5x>${link.label}</span> ${link.badge && renderTemplate`<span class="link-badge" data-astro-cid-kqx5um5x>${link.badge}</span>`} </a>`)}` })}`;
  })} </nav> <!-- Sidebar Footer --> <div class="sidebar-footer" data-astro-cid-kqx5um5x> <div class="sidebar-footer-divider" data-astro-cid-kqx5um5x></div> <button id="logout-btn" class="sidebar-logout" data-astro-cid-kqx5um5x> <span class="logout-icon" data-astro-cid-kqx5um5x> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-kqx5um5x><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-astro-cid-kqx5um5x></path><polyline points="16 17 21 12 16 7" data-astro-cid-kqx5um5x></polyline><line x1="21" y1="12" x2="9" y2="12" data-astro-cid-kqx5um5x></line></svg> </span> <span data-astro-cid-kqx5um5x>Sign Out</span> </button> </div> </aside> <!-- Mobile header --> <div class="mobile-header" data-astro-cid-kqx5um5x> <button id="sidebar-toggle" class="sidebar-toggle-btn" aria-label="Toggle sidebar" data-astro-cid-kqx5um5x> <svg id="toggle-icon-bars" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-kqx5um5x><line x1="3" y1="6" x2="21" y2="6" data-astro-cid-kqx5um5x></line><line x1="3" y1="12" x2="21" y2="12" data-astro-cid-kqx5um5x></line><line x1="3" y1="18" x2="21" y2="18" data-astro-cid-kqx5um5x></line></svg> <svg id="toggle-icon-x" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;" data-astro-cid-kqx5um5x><line x1="18" y1="6" x2="6" y2="18" data-astro-cid-kqx5um5x></line><line x1="6" y1="6" x2="18" y2="18" data-astro-cid-kqx5um5x></line></svg> </button> <span class="mobile-brand" data-astro-cid-kqx5um5x>BCI Portal</span> <div class="user-avatar sm-avatar overflow-hidden" data-astro-cid-kqx5um5x> ${avatarUrl ? renderTemplate`<img${addAttribute(avatarUrl, "src")}${addAttribute(currentUser.name, "alt")} class="w-full h-full object-cover" data-astro-cid-kqx5um5x>` : avatarLetter} </div> </div> <!-- Main Content --> <main class="dashboard-main" data-astro-cid-kqx5um5x> ${renderSlot($$result, $$slots["default"])} </main> </div>  ${renderScript($$result, "D:/Coding Projects/coaching/src/layouts/DashboardLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Coding Projects/coaching/src/layouts/DashboardLayout.astro", void 0);

export { $$DashboardLayout as $ };
