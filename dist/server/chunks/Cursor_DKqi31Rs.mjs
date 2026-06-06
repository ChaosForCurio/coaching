import { c as createComponent } from './astro-component_CcqMMwb0.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate } from './server_CbJrX1FR.mjs';
import 'clsx';
import { r as renderScript } from './global_DzgTv7pz.mjs';

const $$Cursor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="custom-cursor-dot" class="fixed top-0 left-0 pointer-events-none z-[10001] rounded-full transition-colors duration-200" style="width: 6px; height: 6px; background: white; transform: translate(-50%, -50%);" data-astro-cid-msvfyisy></div> <div id="custom-cursor-ring" class="fixed top-0 left-0 pointer-events-none z-[10000] flex items-center justify-center overflow-hidden rounded-full border border-white/35 bg-transparent" style="width: 44px; height: 44px; transform: translate(-50%, -50%); transition: border-color 0.3s, background 0.3s, backdrop-filter 0.3s;" data-astro-cid-msvfyisy> <span id="custom-cursor-label" class="text-[9px] uppercase tracking-[0.18em] font-semibold whitespace-nowrap select-none text-white opacity-0 scale-50 transition-all duration-200" data-astro-cid-msvfyisy></span> </div>  ${renderScript($$result, "D:/Coding Projects/coaching/src/components/Cursor.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/src/components/Cursor.astro", void 0);

export { $$Cursor as $ };
