import { c as createComponent } from './astro-component_CePqt0Ai.mjs';
import 'piccolore';
import { I as renderTemplate } from './sequence_CMdjYNBY.mjs';
import { r as renderComponent } from './entrypoint_CqE5cXTs.mjs';
import { $ as $$DashboardOverview } from './DashboardOverview_WHMmySI8.mjs';
import { r as requireAuth } from './auth_LP014y4c.mjs';

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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
