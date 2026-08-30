globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent, r as renderScript } from "./Footer_DY66i9Gu.mjs";
import { A as AstroError, I as ImageMissingAlt, m as maybeRenderHead, a as addAttribute, f as spreadAttributes, b as renderTemplate, v as FontFamilyNotFound, u as unescapeHTML, r as renderComponent, F as Fragment } from "./worker-entry_C595MgLD.mjs";
import { r as resolveSrc, i as isESMImportedImage, g as getImage$1 } from "./deterministic-string_0OKmBxzX.mjs";
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
const mimes = {
  "3g2": "video/3gpp2",
  "3gp": "video/3gpp",
  "3gpp": "video/3gpp",
  "3mf": "model/3mf",
  "aac": "audio/aac",
  "ac": "application/pkix-attr-cert",
  "adp": "audio/adpcm",
  "adts": "audio/aac",
  "ai": "application/postscript",
  "aml": "application/automationml-aml+xml",
  "amlx": "application/automationml-amlx+zip",
  "amr": "audio/amr",
  "apng": "image/apng",
  "appcache": "text/cache-manifest",
  "appinstaller": "application/appinstaller",
  "appx": "application/appx",
  "appxbundle": "application/appxbundle",
  "asc": "application/pgp-keys",
  "atom": "application/atom+xml",
  "atomcat": "application/atomcat+xml",
  "atomdeleted": "application/atomdeleted+xml",
  "atomsvc": "application/atomsvc+xml",
  "au": "audio/basic",
  "avci": "image/avci",
  "avcs": "image/avcs",
  "avif": "image/avif",
  "aw": "application/applixware",
  "bdoc": "application/bdoc",
  "bin": "application/octet-stream",
  "bmp": "image/bmp",
  "bpk": "application/octet-stream",
  "btf": "image/prs.btif",
  "btif": "image/prs.btif",
  "buffer": "application/octet-stream",
  "ccxml": "application/ccxml+xml",
  "cdfx": "application/cdfx+xml",
  "cdmia": "application/cdmi-capability",
  "cdmic": "application/cdmi-container",
  "cdmid": "application/cdmi-domain",
  "cdmio": "application/cdmi-object",
  "cdmiq": "application/cdmi-queue",
  "cer": "application/pkix-cert",
  "cgm": "image/cgm",
  "cjs": "application/node",
  "class": "application/java-vm",
  "coffee": "text/coffeescript",
  "conf": "text/plain",
  "cpl": "application/cpl+xml",
  "cpt": "application/mac-compactpro",
  "crl": "application/pkix-crl",
  "css": "text/css",
  "csv": "text/csv",
  "cu": "application/cu-seeme",
  "cwl": "application/cwl",
  "cww": "application/prs.cww",
  "davmount": "application/davmount+xml",
  "dbk": "application/docbook+xml",
  "deb": "application/octet-stream",
  "def": "text/plain",
  "deploy": "application/octet-stream",
  "dib": "image/bmp",
  "disposition-notification": "message/disposition-notification",
  "dist": "application/octet-stream",
  "distz": "application/octet-stream",
  "dll": "application/octet-stream",
  "dmg": "application/octet-stream",
  "dms": "application/octet-stream",
  "doc": "application/msword",
  "dot": "application/msword",
  "dpx": "image/dpx",
  "drle": "image/dicom-rle",
  "dsc": "text/prs.lines.tag",
  "dssc": "application/dssc+der",
  "dtd": "application/xml-dtd",
  "dump": "application/octet-stream",
  "dwd": "application/atsc-dwd+xml",
  "ear": "application/java-archive",
  "ecma": "application/ecmascript",
  "elc": "application/octet-stream",
  "emf": "image/emf",
  "eml": "message/rfc822",
  "emma": "application/emma+xml",
  "emotionml": "application/emotionml+xml",
  "eps": "application/postscript",
  "epub": "application/epub+zip",
  "exe": "application/octet-stream",
  "exi": "application/exi",
  "exp": "application/express",
  "exr": "image/aces",
  "ez": "application/andrew-inset",
  "fdf": "application/fdf",
  "fdt": "application/fdt+xml",
  "fits": "image/fits",
  "g3": "image/g3fax",
  "gbr": "application/rpki-ghostbusters",
  "geojson": "application/geo+json",
  "gif": "image/gif",
  "glb": "model/gltf-binary",
  "gltf": "model/gltf+json",
  "gml": "application/gml+xml",
  "gpx": "application/gpx+xml",
  "gram": "application/srgs",
  "grxml": "application/srgs+xml",
  "gxf": "application/gxf",
  "gz": "application/gzip",
  "h261": "video/h261",
  "h263": "video/h263",
  "h264": "video/h264",
  "heic": "image/heic",
  "heics": "image/heic-sequence",
  "heif": "image/heif",
  "heifs": "image/heif-sequence",
  "hej2": "image/hej2k",
  "held": "application/atsc-held+xml",
  "hjson": "application/hjson",
  "hlp": "application/winhlp",
  "hqx": "application/mac-binhex40",
  "hsj2": "image/hsj2",
  "htm": "text/html",
  "html": "text/html",
  "ics": "text/calendar",
  "ief": "image/ief",
  "ifb": "text/calendar",
  "iges": "model/iges",
  "igs": "model/iges",
  "img": "application/octet-stream",
  "in": "text/plain",
  "ini": "text/plain",
  "ink": "application/inkml+xml",
  "inkml": "application/inkml+xml",
  "ipfix": "application/ipfix",
  "iso": "application/octet-stream",
  "its": "application/its+xml",
  "jade": "text/jade",
  "jar": "application/java-archive",
  "jhc": "image/jphc",
  "jls": "image/jls",
  "jp2": "image/jp2",
  "jpe": "image/jpeg",
  "jpeg": "image/jpeg",
  "jpf": "image/jpx",
  "jpg": "image/jpeg",
  "jpg2": "image/jp2",
  "jpgm": "image/jpm",
  "jpgv": "video/jpeg",
  "jph": "image/jph",
  "jpm": "image/jpm",
  "jpx": "image/jpx",
  "js": "text/javascript",
  "json": "application/json",
  "json5": "application/json5",
  "jsonld": "application/ld+json",
  "jsonml": "application/jsonml+json",
  "jsx": "text/jsx",
  "jt": "model/jt",
  "jxl": "image/jxl",
  "jxr": "image/jxr",
  "jxra": "image/jxra",
  "jxrs": "image/jxrs",
  "jxs": "image/jxs",
  "jxsc": "image/jxsc",
  "jxsi": "image/jxsi",
  "jxss": "image/jxss",
  "kar": "audio/midi",
  "ktx": "image/ktx",
  "ktx2": "image/ktx2",
  "less": "text/less",
  "lgr": "application/lgr+xml",
  "list": "text/plain",
  "litcoffee": "text/coffeescript",
  "log": "text/plain",
  "lostxml": "application/lost+xml",
  "lrf": "application/octet-stream",
  "m1v": "video/mpeg",
  "m21": "application/mp21",
  "m2a": "audio/mpeg",
  "m2t": "video/mp2t",
  "m2ts": "video/mp2t",
  "m2v": "video/mpeg",
  "m3a": "audio/mpeg",
  "m4a": "audio/mp4",
  "m4p": "application/mp4",
  "m4s": "video/iso.segment",
  "ma": "application/mathematica",
  "mads": "application/mads+xml",
  "maei": "application/mmt-aei+xml",
  "man": "text/troff",
  "manifest": "text/cache-manifest",
  "map": "application/json",
  "mar": "application/octet-stream",
  "markdown": "text/markdown",
  "mathml": "application/mathml+xml",
  "mb": "application/mathematica",
  "mbox": "application/mbox",
  "md": "text/markdown",
  "mdx": "text/mdx",
  "me": "text/troff",
  "mesh": "model/mesh",
  "meta4": "application/metalink4+xml",
  "metalink": "application/metalink+xml",
  "mets": "application/mets+xml",
  "mft": "application/rpki-manifest",
  "mid": "audio/midi",
  "midi": "audio/midi",
  "mime": "message/rfc822",
  "mj2": "video/mj2",
  "mjp2": "video/mj2",
  "mjs": "text/javascript",
  "mml": "text/mathml",
  "mods": "application/mods+xml",
  "mov": "video/quicktime",
  "mp2": "audio/mpeg",
  "mp21": "application/mp21",
  "mp2a": "audio/mpeg",
  "mp3": "audio/mpeg",
  "mp4": "video/mp4",
  "mp4a": "audio/mp4",
  "mp4s": "application/mp4",
  "mp4v": "video/mp4",
  "mpd": "application/dash+xml",
  "mpe": "video/mpeg",
  "mpeg": "video/mpeg",
  "mpf": "application/media-policy-dataset+xml",
  "mpg": "video/mpeg",
  "mpg4": "video/mp4",
  "mpga": "audio/mpeg",
  "mpp": "application/dash-patch+xml",
  "mrc": "application/marc",
  "mrcx": "application/marcxml+xml",
  "ms": "text/troff",
  "mscml": "application/mediaservercontrol+xml",
  "msh": "model/mesh",
  "msi": "application/octet-stream",
  "msix": "application/msix",
  "msixbundle": "application/msixbundle",
  "msm": "application/octet-stream",
  "msp": "application/octet-stream",
  "mtl": "model/mtl",
  "mts": "video/mp2t",
  "musd": "application/mmt-usd+xml",
  "mxf": "application/mxf",
  "mxmf": "audio/mobile-xmf",
  "mxml": "application/xv+xml",
  "n3": "text/n3",
  "nb": "application/mathematica",
  "nq": "application/n-quads",
  "nt": "application/n-triples",
  "obj": "model/obj",
  "oda": "application/oda",
  "oga": "audio/ogg",
  "ogg": "audio/ogg",
  "ogv": "video/ogg",
  "ogx": "application/ogg",
  "omdoc": "application/omdoc+xml",
  "onepkg": "application/onenote",
  "onetmp": "application/onenote",
  "onetoc": "application/onenote",
  "onetoc2": "application/onenote",
  "opf": "application/oebps-package+xml",
  "opus": "audio/ogg",
  "otf": "font/otf",
  "owl": "application/rdf+xml",
  "oxps": "application/oxps",
  "p10": "application/pkcs10",
  "p7c": "application/pkcs7-mime",
  "p7m": "application/pkcs7-mime",
  "p7s": "application/pkcs7-signature",
  "p8": "application/pkcs8",
  "pdf": "application/pdf",
  "pfr": "application/font-tdpfr",
  "pgp": "application/pgp-encrypted",
  "pkg": "application/octet-stream",
  "pki": "application/pkixcmp",
  "pkipath": "application/pkix-pkipath",
  "pls": "application/pls+xml",
  "png": "image/png",
  "prc": "model/prc",
  "prf": "application/pics-rules",
  "provx": "application/provenance+xml",
  "ps": "application/postscript",
  "pskcxml": "application/pskc+xml",
  "pti": "image/prs.pti",
  "qt": "video/quicktime",
  "raml": "application/raml+yaml",
  "rapd": "application/route-apd+xml",
  "rdf": "application/rdf+xml",
  "relo": "application/p2p-overlay+xml",
  "rif": "application/reginfo+xml",
  "rl": "application/resource-lists+xml",
  "rld": "application/resource-lists-diff+xml",
  "rmi": "audio/midi",
  "rnc": "application/relax-ng-compact-syntax",
  "rng": "application/xml",
  "roa": "application/rpki-roa",
  "roff": "text/troff",
  "rq": "application/sparql-query",
  "rs": "application/rls-services+xml",
  "rsat": "application/atsc-rsat+xml",
  "rsd": "application/rsd+xml",
  "rsheet": "application/urc-ressheet+xml",
  "rss": "application/rss+xml",
  "rtf": "text/rtf",
  "rtx": "text/richtext",
  "rusd": "application/route-usd+xml",
  "s3m": "audio/s3m",
  "sbml": "application/sbml+xml",
  "scq": "application/scvp-cv-request",
  "scs": "application/scvp-cv-response",
  "sdp": "application/sdp",
  "senmlx": "application/senml+xml",
  "sensmlx": "application/sensml+xml",
  "ser": "application/java-serialized-object",
  "setpay": "application/set-payment-initiation",
  "setreg": "application/set-registration-initiation",
  "sgi": "image/sgi",
  "sgm": "text/sgml",
  "sgml": "text/sgml",
  "shex": "text/shex",
  "shf": "application/shf+xml",
  "shtml": "text/html",
  "sieve": "application/sieve",
  "sig": "application/pgp-signature",
  "sil": "audio/silk",
  "silo": "model/mesh",
  "siv": "application/sieve",
  "slim": "text/slim",
  "slm": "text/slim",
  "sls": "application/route-s-tsid+xml",
  "smi": "application/smil+xml",
  "smil": "application/smil+xml",
  "snd": "audio/basic",
  "so": "application/octet-stream",
  "spdx": "text/spdx",
  "spp": "application/scvp-vp-response",
  "spq": "application/scvp-vp-request",
  "spx": "audio/ogg",
  "sql": "application/sql",
  "sru": "application/sru+xml",
  "srx": "application/sparql-results+xml",
  "ssdl": "application/ssdl+xml",
  "ssml": "application/ssml+xml",
  "stk": "application/hyperstudio",
  "stl": "model/stl",
  "stpx": "model/step+xml",
  "stpxz": "model/step-xml+zip",
  "stpz": "model/step+zip",
  "styl": "text/stylus",
  "stylus": "text/stylus",
  "svg": "image/svg+xml",
  "svgz": "image/svg+xml",
  "swidtag": "application/swid+xml",
  "t": "text/troff",
  "t38": "image/t38",
  "td": "application/urc-targetdesc+xml",
  "tei": "application/tei+xml",
  "teicorpus": "application/tei+xml",
  "text": "text/plain",
  "tfi": "application/thraud+xml",
  "tfx": "image/tiff-fx",
  "tif": "image/tiff",
  "tiff": "image/tiff",
  "toml": "application/toml",
  "tr": "text/troff",
  "trig": "application/trig",
  "ts": "video/mp2t",
  "tsd": "application/timestamped-data",
  "tsv": "text/tab-separated-values",
  "ttc": "font/collection",
  "ttf": "font/ttf",
  "ttl": "text/turtle",
  "ttml": "application/ttml+xml",
  "txt": "text/plain",
  "u3d": "model/u3d",
  "u8dsn": "message/global-delivery-status",
  "u8hdr": "message/global-headers",
  "u8mdn": "message/global-disposition-notification",
  "u8msg": "message/global",
  "ubj": "application/ubjson",
  "uri": "text/uri-list",
  "uris": "text/uri-list",
  "urls": "text/uri-list",
  "vcard": "text/vcard",
  "vrml": "model/vrml",
  "vtt": "text/vtt",
  "vxml": "application/voicexml+xml",
  "war": "application/java-archive",
  "wasm": "application/wasm",
  "wav": "audio/wav",
  "weba": "audio/webm",
  "webm": "video/webm",
  "webmanifest": "application/manifest+json",
  "webp": "image/webp",
  "wgsl": "text/wgsl",
  "wgt": "application/widget",
  "wif": "application/watcherinfo+xml",
  "wmf": "image/wmf",
  "woff": "font/woff",
  "woff2": "font/woff2",
  "wrl": "model/vrml",
  "wsdl": "application/wsdl+xml",
  "wspolicy": "application/wspolicy+xml",
  "x3d": "model/x3d+xml",
  "x3db": "model/x3d+fastinfoset",
  "x3dbz": "model/x3d+binary",
  "x3dv": "model/x3d-vrml",
  "x3dvz": "model/x3d+vrml",
  "x3dz": "model/x3d+xml",
  "xaml": "application/xaml+xml",
  "xav": "application/xcap-att+xml",
  "xca": "application/xcap-caps+xml",
  "xcs": "application/calendar+xml",
  "xdf": "application/xcap-diff+xml",
  "xdssc": "application/dssc+xml",
  "xel": "application/xcap-el+xml",
  "xenc": "application/xenc+xml",
  "xer": "application/patch-ops-error+xml",
  "xfdf": "application/xfdf",
  "xht": "application/xhtml+xml",
  "xhtml": "application/xhtml+xml",
  "xhvml": "application/xv+xml",
  "xlf": "application/xliff+xml",
  "xm": "audio/xm",
  "xml": "text/xml",
  "xns": "application/xcap-ns+xml",
  "xop": "application/xop+xml",
  "xpl": "application/xproc+xml",
  "xsd": "application/xml",
  "xsf": "application/prs.xsf+xml",
  "xsl": "application/xml",
  "xslt": "application/xml",
  "xspf": "application/xspf+xml",
  "xvm": "application/xv+xml",
  "xvml": "application/xv+xml",
  "yaml": "text/yaml",
  "yang": "application/yang",
  "yin": "application/yin+xml",
  "yml": "text/yaml",
  "zip": "application/zip"
};
function lookup(extn) {
  let tmp = ("" + extn).trim().toLowerCase();
  let idx = tmp.lastIndexOf(".");
  return mimes[!~idx ? tmp : tmp.substring(++idx)];
}
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
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })}  <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}> </picture>`;
}, "D:/Coding Projects/coaching/node_modules/astro/components/Picture.astro", void 0);
const componentDataByCssVariable = /* @__PURE__ */ new Map([]);
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
  urls: /* @__PURE__ */ new Set([]),
  address: null
});
const assetQueryParams = void 0;
const imageConfig = { "endpoint": { "entrypoint": "@astrojs/cloudflare/image-transform-endpoint", "route": "/_image" }, "service": { "entrypoint": "@astrojs/cloudflare/image-service-workerd", "config": {} }, "dangerouslyProcessSVG": false, "domains": ["images.unsplash.com", "images.unsplash.com"], "remotePatterns": [], "responsiveStyles": false };
Object.defineProperty(imageConfig, "assetQueryParams", {
  value: assetQueryParams,
  enumerable: false,
  configurable: true
});
const getImage = async (options) => await getImage$1(options, imageConfig);
const facultyClassroomImg = new Proxy({ "src": "/_astro/faculty-classroom.D2HpDY36.jpg", "width": 1024, "height": 768, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "D:/Coding Projects/coaching/public/images/faculty-classroom.jpg";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Coding Projects/coaching/public/images/faculty-classroom.jpg");
    return target[name];
  }
});
const heroBgImg = new Proxy({ "src": "/_astro/hero-bg.Baugcrqn.jpg", "width": 1024, "height": 768, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "D:/Coding Projects/coaching/public/images/hero-bg.jpg";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Coding Projects/coaching/public/images/hero-bg.jpg");
    return target[name];
  }
});
const webDevImg = new Proxy({ "src": "/_astro/web-dev.XD5KtplO.jpg", "width": 1408, "height": 768, "format": "jpg" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "D:/Coding Projects/coaching/public/images/web-dev.jpg";
    }
    if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Coding Projects/coaching/public/images/web-dev.jpg");
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
  return renderTemplate`<!-- Outer wrapper for scroll budget -->${maybeRenderHead()}<section id="courses-wrapper" class="relative bg-[#0a0a0a]" style="height: 5000px;"> <!-- Sticky viewport --> <div class="sticky top-0 h-screen overflow-hidden flex flex-col justify-center"> <!-- Section header --> <div id="courses-header" class="absolute top-10 left-8 md:left-14 z-20 pointer-events-none select-none transition-all duration-300"> <span class="text-[10px] uppercase tracking-[0.65em] text-white/30 block mb-2">
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
</span> </div> </div> <!-- Horizontal strip --> <div id="courses-strip" class="flex items-stretch gap-6 pl-[10vw]" style="will-change: transform;"> ${courses.map((course, idx) => renderTemplate`<article class="course-card group relative border bg-white/[0.02] backdrop-blur-md overflow-hidden h-[68vh] max-h-[560px] flex flex-col justify-between p-9 hover:bg-white/[0.06] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] cursor-pointer rounded-xl"${addAttribute(`width: clamp(280px, 85vw, 400px); flex-shrink: 0; border-color: ${course.accent}40; opacity: 0.15; transform: translateY(50px);`, "style")}${addAttribute(idx, "data-index")}${addAttribute(course.category, "data-category")}> <!-- Accent glow --> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"${addAttribute(`background: radial-gradient(ellipse at 15% 85%, ${course.accent}22 0%, transparent 60%);`, "style")}></div> <!-- Background image --> <div class="absolute inset-0 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-700 pointer-events-none"> ${renderComponent($$result, "Image", $$Image, { "src": course.image, "alt": `${course.title} Training and Certification in Kota`, "loading": "lazy", "class": "w-full h-full object-cover grayscale mix-blend-overlay" })} <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div> </div> <!-- Top row: ghost number + icon --> <div class="relative z-10 flex justify-between items-start"> <span class="font-black select-none leading-none group-hover:scale-105 transition-transform duration-500 origin-top-left"${addAttribute(`font-size: clamp(64px, 15vw, 112px); color: ${course.accent}20; line-height: 0.85;`, "style")}> ${course.num} </span> <div class="w-12 h-12 mt-1 flex items-center justify-center border border-white/10 group-hover:border-white/30 rounded-full group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 flex-shrink-0"${addAttribute(`background: ${course.accent}22; color: rgba(255,255,255,0.7);`, "style")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(course.icon)}` })} </div> </div> <!-- Bottom content --> <div class="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500"> <span class="text-[10px] font-medium uppercase tracking-[0.4em] mb-3 block transition-colors duration-500"${addAttribute(`color: ${course.accent}; opacity: 0.8;`, "style")}> ${course.category} </span> <h3 class="text-[2rem] md:text-[2.25rem] font-bold leading-tight mb-3 group-hover:translate-x-1.5 transition-transform duration-500"> ${course.title} </h3> ${course.badge && renderTemplate`<span class="inline-block mb-5 text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 font-bold rounded-sm shadow-lg"${addAttribute(`background: ${course.accent}; color: #0a0a0a;`, "style")}> ${course.badge} </span>`} <p class="text-[14px] text-white/50 leading-relaxed mb-6 max-w-[340px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"> ${course.description} </p> <!-- Animated reveal line --> <div class="flex items-center gap-3 overflow-hidden"> <div class="h-px w-0 group-hover:w-12 transition-all duration-500 ease-out"${addAttribute(`background: ${course.accent};`, "style")}></div> <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 group-hover:text-white/80 transition-colors duration-500">
View Syllabus
</span> </div> </div> <!-- Bottom accent stroke --> <div class="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700 ease-out"${addAttribute(`background: linear-gradient(90deg, ${course.accent} 0%, ${course.accent}00 100%);`, "style")}></div> </article>`)} <!-- End CTA panel --> <div class="flex-shrink-0 w-[85vw] max-w-[320px] flex flex-col justify-center items-start px-8 md:px-16"> <span class="text-[10px] uppercase tracking-[0.5em] text-white/25 mb-6 font-medium">
Ready to start?
</span> <h3 class="text-5xl md:text-6xl font-bold leading-tight mb-8">
Enroll<br>Today
</h3> <a href="https://wa.me/919694932391" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-4 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"> <span class="text-[11px] font-bold uppercase tracking-[0.2em]">Chat on WhatsApp</span> <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> <!-- Right breathing room so last card isn't flush to edge --> <div class="flex-shrink-0 w-[10vw]"></div> </div> </div> </section> ${renderScript($$result, "D:/Coding Projects/coaching/src/components/Courses.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding Projects/coaching/src/components/Courses.astro", void 0);
export {
  $$Courses as $,
  $$Image as a,
  heroBgImg as h
};
