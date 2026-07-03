import { c as createComponent, r as renderScript } from './Footer_Cx4TwuOa.mjs';
import 'piccolore';
import { A as AstroError, I as ImageMissingAlt, m as maybeRenderHead, a as addAttribute, f as spreadAttributes, b as renderTemplate, k as FontFamilyNotFound, u as unescapeHTML, r as renderComponent, F as Fragment } from './prerender_DwZ5v2Mm.mjs';
import { r as resolveSrc, i as isESMImportedImage, g as getImage$1 } from './deterministic-string_CTVC_PN4.mjs';
import 'clsx';
import * as mime from 'mrmime';

const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = Number.parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = Number.parseInt(props.height);
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  if (layout !== "none") {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  } else if (imageConfig.objectFit || imageConfig.objectPosition) {
    props.fit ??= imageConfig.objectFit;
    props.position ??= imageConfig.objectPosition;
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  const { class: className, ...attributes } = { ...additionalAttributes, ...image.attributes };
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "D:/Coding Projects/coaching/node_modules/astro/components/Image.astro", void 0);

const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  const useResponsive = layout !== "none";
  if (useResponsive) {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  } else if (imageConfig.objectFit || imageConfig.objectPosition) {
    props.fit ??= imageConfig.objectFit;
    props.position ??= imageConfig.objectPosition;
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  const clonedSrc = isESMImportedImage(originalSrc) ? (
    // @ts-expect-error - clone is a private, hidden prop
    originalSrc.clone ?? originalSrc
  ) : originalSrc;
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(clonedSrc) && specialFormatsFallback.includes(clonedSrc.format)) {
    resultFallbackFormat = clonedSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  const { class: className, ...attributes } = {
    ...imgAdditionalAttributes,
    ...fallbackImage.attributes
  };
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })}  <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}> </picture>`;
}, "D:/Coding Projects/coaching/node_modules/astro/components/Picture.astro", void 0);

const componentDataByCssVariable = new Map([]);

function filterPreloads(data, preload) {
  if (!preload) {
    return null;
  }
  if (preload === true) {
    return data;
  }
  return data.filter(
    ({ weight, style, subset }) => preload.some((p) => {
      if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) {
        return false;
      }
      if (p.style !== void 0 && p.style !== style) {
        return false;
      }
      if (p.subset !== void 0 && p.subset !== subset) {
        return false;
      }
      return true;
    })
  );
}
function checkWeight(input, target) {
  const trimmedInput = input.trim();
  if (trimmedInput.includes(" ")) {
    return trimmedInput === target;
  }
  if (target.includes(" ")) {
    const [a, b] = target.split(" ");
    const parsedInput = Number.parseInt(input);
    return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
  }
  return input === target;
}

const $$Font = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Font;
  const { cssVariable, preload = false } = Astro2.props;
  const data = componentDataByCssVariable.get(cssVariable);
  if (!data) {
    throw new AstroError({
      ...FontFamilyNotFound,
      message: FontFamilyNotFound.message(cssVariable)
    });
  }
  const filteredPreloadData = filterPreloads(data.preloads, preload);
  return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "D:/Coding Projects/coaching/node_modules/astro/components/Font.astro", void 0);

class RemoteRuntimeFontFileUrlResolver {
  #urls;
  #address;
  constructor({
    urls,
    address
  }) {
    this.#urls = urls;
    this.#address = address;
  }
  resolve(url) {
    if (!this.#urls.has(url)) {
      return null;
    }
    if (!this.#address) {
      throw new Error("Server address unavailable, this should not happen. Open an issue.");
    }
    if (!url.startsWith("/")) {
      url = new URL(url).pathname;
    }
    const host = this.#address.family === "IPv6" ? `[${this.#address.address}]` : this.#address.address;
    return `http://${host}:${this.#address.port}${url}`;
  }
}

new RemoteRuntimeFontFileUrlResolver({
								urls: new Set([]),
								address: null,
							});

const assetQueryParams = undefined;
					const imageConfig = {"endpoint":{"route":"/_image"},"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"dangerouslyProcessSVG":false,"domains":["images.unsplash.com"],"remotePatterns":[],"responsiveStyles":false};
					Object.defineProperty(imageConfig, 'assetQueryParams', {
						value: assetQueryParams,
						enumerable: false,
						configurable: true,
					});
							const getImage = async (options) => await getImage$1(options, imageConfig);

const facultyClassroomImg = new Proxy({"src":"/_astro/faculty-classroom.D2HpDY36.jpg","width":1024,"height":768,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Coding Projects/coaching/public/images/faculty-classroom.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Coding Projects/coaching/public/images/faculty-classroom.jpg");
							return target[name];
						}
					});

const heroBgImg = new Proxy({"src":"/_astro/hero-bg.Baugcrqn.jpg","width":1024,"height":768,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Coding Projects/coaching/public/images/hero-bg.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Coding Projects/coaching/public/images/hero-bg.jpg");
							return target[name];
						}
					});

const webDevImg = new Proxy({"src":"/_astro/web-dev.XD5KtplO.jpg","width":1408,"height":768,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Coding Projects/coaching/public/images/web-dev.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Coding Projects/coaching/public/images/web-dev.jpg");
							return target[name];
						}
					});

const $$Courses = createComponent(($$result, $$props, $$slots) => {
  const courses = [
    {
      num: "01",
      title: "RSCIT",
      category: "Government Certified",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
      image: facultyClassroomImg,
      description: "Rajasthan State Certificate in Information Technology. Recognized by Govt. of Rajasthan. Includes 2 Digital Courses FREE on admission.",
      badge: "2 Courses FREE",
      accent: "#f59e0b"
    },
    {
      num: "02",
      title: "Tally & Accounting",
      category: "Finance & Accounts",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
      image: heroBgImg,
      description: "Complete Tally ERP with practical GST, invoicing, ledgers, and financial reporting for business and commerce professionals.",
      accent: "#10b981"
    },
    {
      num: "03",
      title: "Typing",
      category: "Hindi & English",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
      image: webDevImg,
      description: "Professional Hindi and English typing courses built for government exam readiness and corporate job requirements.",
      accent: "#6366f1"
    },
    {
      num: "04",
      title: "Web Development",
      category: "Programming",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
      image: webDevImg,
      description: "Build dynamic websites with PHP and React. Includes Python Programming Basic & Advanced with live projects.",
      accent: "#ec4899"
    },
    {
      num: "05",
      title: "Graphic Design",
      category: "Creative Suite",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
      image: heroBgImg,
      description: "Photoshop, CorelDRAW, DTP and digital marketing — SEO, social media, and paid campaigns.",
      accent: "#f97316"
    },
    {
      num: "06",
      title: "Python & AI",
      category: "Advanced Tech",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
      image: webDevImg,
      description: "From basic syntax to ML fundamentals. Hands-on automation, data analysis, and real-world project building.",
      accent: "#22d3ee"
    }
  ];
  return renderTemplate`<!-- Outer wrapper for scroll budget -->${maybeRenderHead()}<div id="courses-wrapper" class="relative bg-[#0a0a0a]" style="height: 5000px;"> <!-- Sticky viewport --> <div class="sticky top-0 h-screen overflow-hidden flex flex-col justify-center"> <!-- Section header --> <div id="courses-header" class="absolute top-10 left-8 md:left-14 z-20 pointer-events-none select-none transition-all duration-300"> <span class="text-[10px] uppercase tracking-[0.65em] text-white/30 block mb-2">
Our Programs
</span> <h2 class="text-6xl md:text-[7rem] leading-none">Programs</h2> <div class="flex items-center gap-2 mt-3"> <div class="w-4 h-px bg-white/30"></div> <span class="text-[10px] uppercase tracking-[0.4em] text-white/30">
Scroll to explore
</span> </div> </div> <!-- Live card counter --> <div class="absolute top-10 right-8 md:right-14 z-20 pointer-events-none select-none text-right"> <span class="text-[10px] text-white/20 uppercase tracking-widest block mb-1">
Course
</span> <div class="flex items-end justify-end gap-1"> <span id="courses-counter" class="text-3xl font-black text-white/20 tabular-nums leading-none">
01
</span> <span class="text-white/10 text-base mb-0.5">/0${courses.length}</span> </div> </div> <!-- Progress bar --> <div class="absolute bottom-8 left-8 right-8 z-20"> <div class="relative h-px bg-white/10 overflow-hidden"> <div id="courses-progress-bar" class="absolute inset-y-0 left-0 bg-white/60 origin-left scale-x-0"></div> </div> <div class="flex justify-between mt-2"> <span class="text-[9px] uppercase tracking-[0.4em] text-white/20">
Bhavya Computer Classes
</span> <span class="text-[9px] uppercase tracking-[0.4em] text-white/20"> ${courses.length} Programs
</span> </div> </div> <!-- Horizontal strip --> <div id="courses-strip" class="flex items-stretch gap-6 pl-[10vw]" style="will-change: transform;"> ${courses.map((course, idx) => renderTemplate`<div class="course-card group relative border bg-white/[0.02] backdrop-blur-md overflow-hidden h-[68vh] max-h-[560px] flex flex-col justify-between p-9 hover:bg-white/[0.06] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] cursor-pointer rounded-xl"${addAttribute(`width: clamp(280px, 85vw, 400px); flex-shrink: 0; border-color: ${course.accent}40; opacity: 0.15; transform: translateY(50px);`, "style")}${addAttribute(idx, "data-index")}${addAttribute(course.category, "data-category")}> <!-- Accent glow --> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"${addAttribute(`background: radial-gradient(ellipse at 15% 85%, ${course.accent}22 0%, transparent 60%);`, "style")}></div> <!-- Background image --> <div class="absolute inset-0 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-700 pointer-events-none"> ${renderComponent($$result, "Image", $$Image, { "src": course.image, "alt": "", "loading": "lazy", "class": "w-full h-full object-cover grayscale mix-blend-overlay" })} <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div> </div> <!-- Top row: ghost number + icon --> <div class="relative z-10 flex justify-between items-start"> <span class="font-black select-none leading-none group-hover:scale-105 transition-transform duration-500 origin-top-left"${addAttribute(`font-size: clamp(64px, 15vw, 112px); color: ${course.accent}20; line-height: 0.85;`, "style")}> ${course.num} </span> <div class="w-12 h-12 mt-1 flex items-center justify-center border border-white/10 group-hover:border-white/30 rounded-full group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 flex-shrink-0"${addAttribute(`background: ${course.accent}22; color: rgba(255,255,255,0.7);`, "style")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(course.icon)}` })} </div> </div> <!-- Bottom content --> <div class="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500"> <span class="text-[10px] font-medium uppercase tracking-[0.4em] mb-3 block transition-colors duration-500"${addAttribute(`color: ${course.accent}; opacity: 0.8;`, "style")}> ${course.category} </span> <h3 class="text-[2rem] md:text-[2.25rem] font-bold leading-tight mb-3 group-hover:translate-x-1.5 transition-transform duration-500"> ${course.title} </h3> ${course.badge && renderTemplate`<span class="inline-block mb-5 text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 font-bold rounded-sm shadow-lg"${addAttribute(`background: ${course.accent}; color: #0a0a0a;`, "style")}> ${course.badge} </span>`} <p class="text-[14px] text-white/50 leading-relaxed mb-6 max-w-[340px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"> ${course.description} </p> <!-- Animated reveal line --> <div class="flex items-center gap-3 overflow-hidden"> <div class="h-px w-0 group-hover:w-12 transition-all duration-500 ease-out"${addAttribute(`background: ${course.accent};`, "style")}></div> <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 group-hover:text-white/80 transition-colors duration-500">
View Syllabus
</span> </div> </div> <!-- Bottom accent stroke --> <div class="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700 ease-out"${addAttribute(`background: linear-gradient(90deg, ${course.accent} 0%, ${course.accent}00 100%);`, "style")}></div> </div>`)} <!-- End CTA panel --> <div class="flex-shrink-0 w-[85vw] max-w-[320px] flex flex-col justify-center items-start px-8 md:px-16"> <span class="text-[10px] uppercase tracking-[0.5em] text-white/25 mb-6 font-medium">
Ready to start?
</span> <h3 class="text-5xl md:text-6xl font-bold leading-tight mb-8">
Enroll<br>Today
</h3> <a href="https://wa.me/919694932391" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-4 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"> <span class="text-[11px] font-bold uppercase tracking-[0.2em]">Chat on WhatsApp</span> <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> <!-- Right breathing room so last card isn't flush to edge --> <div class="flex-shrink-0 w-[10vw]"></div> </div> </div> </div> ${renderScript($$result, "D:/Coding Projects/coaching/src/components/Courses.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/src/components/Courses.astro", void 0);

export { $$Courses as $ };
