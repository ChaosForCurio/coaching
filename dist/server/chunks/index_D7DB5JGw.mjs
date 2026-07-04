globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_FVi2OYOm.mjs";
import "./sequence_CMysm0T6.mjs";
import { g as getSessionUID, r as requireAuth } from "./auth_B_F03Kif.mjs";
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const uid = await getSessionUID(Astro2.cookies);
  if (!uid) {
    return Astro2.redirect("/login");
  }
  const currentUser = await requireAuth(Astro2.cookies);
  if (currentUser) {
    if (currentUser.role === "TEACHER") {
      return Astro2.redirect("/teacher/dashboard");
    } else {
      return Astro2.redirect("/student/dashboard");
    }
  } else {
    return Astro2.redirect("/login?error=profile_failed");
  }
}, "D:/Coding Projects/coaching/src/pages/dashboard/index.astro", void 0);
const $$file = "D:/Coding Projects/coaching/src/pages/dashboard/index.astro";
const $$url = "/dashboard";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
