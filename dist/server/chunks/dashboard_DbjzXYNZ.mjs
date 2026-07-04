globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_FVi2OYOm.mjs";
import { K as renderTemplate } from "./sequence_CMysm0T6.mjs";
import { r as renderComponent } from "./worker-entry_BXKqGpOE.mjs";
import { $ as $$DashboardOverview } from "./DashboardOverview_CTfQe1W_.mjs";
import { r as requireAuth } from "./auth_B_F03Kif.mjs";
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Dashboard;
  const currentUser = await requireAuth(Astro2.cookies);
  if (!currentUser) {
    Astro2.cookies.delete("userSession");
    return Astro2.redirect("/login");
  }
  return renderTemplate`${renderComponent($$result, "DashboardOverview", $$DashboardOverview, { "currentUser": currentUser })}`;
}, "D:/Coding Projects/coaching/src/pages/student/dashboard.astro", void 0);
const $$file = "D:/Coding Projects/coaching/src/pages/student/dashboard.astro";
const $$url = "/student/dashboard";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
