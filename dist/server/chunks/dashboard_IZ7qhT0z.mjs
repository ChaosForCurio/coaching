import { c as createComponent } from './astro-component_EmTaXPWV.mjs';
import 'piccolore';
import { I as renderTemplate } from './sequence_DI9gLznW.mjs';
import { r as renderComponent } from './server_CAbLtFaR.mjs';
import { $ as $$DashboardOverview } from './DashboardOverview_Kfbl667K.mjs';

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardOverview", $$DashboardOverview, {})}`;
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
