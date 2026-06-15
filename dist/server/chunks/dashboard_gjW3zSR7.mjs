import { c as createComponent } from './astro-component_BEZRvB6d.mjs';
import 'piccolore';
import './sequence_Dp-Tbm17.mjs';
import 'clsx';

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Dashboard;
  return Astro2.redirect("/dashboard");
}, "D:/Coding Projects/coaching/src/pages/teacher/dashboard.astro", void 0);

const $$file = "D:/Coding Projects/coaching/src/pages/teacher/dashboard.astro";
const $$url = "/teacher/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Dashboard,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
