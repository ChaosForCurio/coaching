globalThis.process ??= {};
globalThis.process.env ??= {};
import { g as getImage$1 } from "./deterministic-string_0OKmBxzX.mjs";
const imageConfig = { "endpoint": { "entrypoint": "@astrojs/cloudflare/image-transform-endpoint", "route": "/_image" }, "service": { "entrypoint": "@astrojs/cloudflare/image-service-workerd", "config": {} }, "dangerouslyProcessSVG": false, "domains": ["images.unsplash.com", "images.unsplash.com"], "remotePatterns": [], "responsiveStyles": false };
Object.defineProperty(imageConfig, "assetQueryParams", {
  value: void 0,
  enumerable: false,
  configurable: true
});
const getImage = async (options) => await getImage$1(options, imageConfig);
export {
  getImage,
  imageConfig
};
