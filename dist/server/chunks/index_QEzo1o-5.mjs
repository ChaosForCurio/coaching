globalThis.process ??= {};
globalThis.process.env ??= {};
import { p as getDefaultExportFromCjs } from "./schema_AfQQoxGU.mjs";
var Lr$1 = Object.defineProperty;
var Pr$1 = (e2) => {
  throw TypeError(e2);
};
var Zi = (e2, t2, r2) => t2 in e2 ? Lr$1(e2, t2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[t2] = r2;
var Or$1 = (e2, t2) => {
  for (var r2 in t2) Lr$1(e2, r2, { get: t2[r2], enumerable: true });
};
var Ut$1 = (e2, t2, r2) => Zi(e2, typeof t2 != "symbol" ? t2 + "" : t2, r2), es = (e2, t2, r2) => t2.has(e2) || Pr$1("Cannot " + r2);
var Fe$1 = (e2, t2, r2) => (es(e2, t2, "read from private field"), r2 ? r2.call(e2) : t2.get(e2)), Dr$1 = (e2, t2, r2) => t2.has(e2) ? Pr$1("Cannot add the same private member more than once") : t2 instanceof WeakSet ? t2.add(e2) : t2.set(e2, r2);
var Ji = {};
Or$1(Ji, { languages: () => Vi, options: () => Wi, parsers: () => Nr, printers: () => qo$1 });
var ve$1 = (e2, t2) => (r2, n2, ...i) => r2 | 1 && n2 == null ? void 0 : (t2.call(n2) ?? n2[e2]).apply(n2, i);
var ts = String.prototype.replaceAll ?? function(e2, t2) {
  return e2.global ? this.replace(e2, t2) : this.split(e2).join(t2);
}, rs = ve$1("replaceAll", function() {
  if (typeof this == "string") return ts;
}), w$1 = rs;
function ns(e2) {
  return this[e2 < 0 ? this.length + e2 : e2];
}
var is = ve$1("at", function() {
  if (Array.isArray(this) || typeof this == "string") return ns;
}), M$1 = is;
var ss = () => {
}, He$1 = ss;
var Ve = "string", Ue$1 = "array", lt$1 = "cursor", Te = "indent", be$1 = "align", ct$1 = "trim", we$1 = "group", ke$1 = "fill", xe$1 = "if-break", ye$1 = "indent-if-break", ut$1 = "line-suffix", pt$1 = "line-suffix-boundary", $$1 = "line", ht$1 = "label", Ae$1 = "break-parent", mt$1 = /* @__PURE__ */ new Set([lt$1, Te, be$1, ct$1, we$1, ke$1, xe$1, ye$1, ut$1, pt$1, $$1, ht$1, Ae$1]);
function as(e2) {
  if (typeof e2 == "string") return Ve;
  if (Array.isArray(e2)) return Ue$1;
  if (!e2) return;
  let { type: t2 } = e2;
  if (mt$1.has(t2)) return t2;
}
var ft$1 = as;
var os = (e2) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e2);
function ls(e2) {
  let t2 = e2 === null ? "null" : typeof e2;
  if (t2 !== "string" && t2 !== "object") return `Unexpected doc '${t2}', 
Expected it to be 'string' or 'object'.`;
  if (ft$1(e2)) throw new Error("doc is valid.");
  let r2 = Object.prototype.toString.call(e2);
  if (r2 !== "[object Object]") return `Unexpected doc '${r2}'.`;
  let n2 = os([...mt$1].map((i) => `'${i}'`));
  return `Unexpected doc.type '${e2.type}'.
Expected it to be ${n2}.`;
}
var Wt$1 = class Wt extends Error {
  name = "InvalidDocError";
  constructor(t2) {
    super(ls(t2)), this.doc = t2;
  }
}, Ir$1 = Wt$1;
function Gt$1(e2, t2) {
  if (typeof e2 == "string") return t2(e2);
  let r2 = /* @__PURE__ */ new Map();
  return n2(e2);
  function n2(s2) {
    if (r2.has(s2)) return r2.get(s2);
    let a = i(s2);
    return r2.set(s2, a), a;
  }
  function i(s2) {
    switch (ft$1(s2)) {
      case Ue$1:
        return t2(s2.map(n2));
      case ke$1:
        return t2({ ...s2, parts: s2.parts.map(n2) });
      case xe$1:
        return t2({ ...s2, breakContents: n2(s2.breakContents), flatContents: n2(s2.flatContents) });
      case we$1: {
        let { expandedStates: a, contents: o2 } = s2;
        return a ? (a = a.map(n2), o2 = a[0]) : o2 = n2(o2), t2({ ...s2, contents: o2, expandedStates: a });
      }
      case be$1:
      case Te:
      case ye$1:
      case ht$1:
      case ut$1:
        return t2({ ...s2, contents: n2(s2.contents) });
      case Ve:
      case lt$1:
      case ct$1:
      case pt$1:
      case $$1:
      case Ae$1:
        return t2(s2);
      default:
        throw new Ir$1(s2);
    }
  }
}
function L$1(e2, t2 = Rr$1) {
  return Gt$1(e2, (r2) => typeof r2 == "string" ? B$1(t2, r2.split(`
`)) : r2);
}
var dt$1 = He$1;
function A(e2) {
  return { type: Te, contents: e2 };
}
function cs(e2, t2) {
  return { type: be$1, contents: t2, n: e2 };
}
function qr$1(e2) {
  return cs(Number.NEGATIVE_INFINITY, e2);
}
var Y$1 = { type: Ae$1 };
function gt$1(e2) {
  return { type: ke$1, parts: e2 };
}
function E(e2, t2 = {}) {
  return dt$1(t2.expandedStates), { type: we$1, id: t2.id, contents: e2, break: !!t2.shouldBreak, expandedStates: t2.expandedStates };
}
function j$1(e2, t2 = "", r2 = {}) {
  return { type: xe$1, breakContents: e2, flatContents: t2, groupId: r2.groupId };
}
function Fr$1(e2, t2) {
  return { type: ye$1, contents: e2, groupId: t2.groupId, negate: t2.negate };
}
function B$1(e2, t2) {
  let r2 = [];
  for (let n2 = 0; n2 < t2.length; n2++) n2 !== 0 && r2.push(e2), r2.push(t2[n2]);
  return r2;
}
var S$1 = { type: $$1 }, k$1 = { type: $$1, soft: true }, us = { type: $$1, hard: true }, C = [us, Y$1], ps = { type: $$1, hard: true, literal: true }, Rr$1 = [ps, Y$1];
var Hr$1 = Object.freeze({ character: "'", codePoint: 39 }), Vr$1 = Object.freeze({ character: '"', codePoint: 34 }), hs = Object.freeze({ preferred: Hr$1, alternate: Vr$1 }), ms = Object.freeze({ preferred: Vr$1, alternate: Hr$1 });
function fs(e2, t2) {
  let { preferred: r2, alternate: n2 } = t2 === true || t2 === "'" ? hs : ms, { length: i } = e2, s2 = 0, a = 0;
  for (let o2 = 0; o2 < i; o2++) {
    let c2 = e2.charCodeAt(o2);
    c2 === r2.codePoint ? s2++ : c2 === n2.codePoint && a++;
  }
  return (s2 > a ? n2 : r2).character;
}
var Ur$1 = fs;
function zt$1(e2) {
  if (typeof e2 != "string") throw new TypeError("Expected a string");
  return e2.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var $t$1 = class $t {
  #e;
  constructor(t2) {
    this.#e = new Set(t2);
  }
  getLeadingWhitespaceCount(t2) {
    let r2 = this.#e, n2 = 0;
    for (let i = 0; i < t2.length && r2.has(t2.charAt(i)); i++) n2++;
    return n2;
  }
  getTrailingWhitespaceCount(t2) {
    let r2 = this.#e, n2 = 0;
    for (let i = t2.length - 1; i >= 0 && r2.has(t2.charAt(i)); i--) n2++;
    return n2;
  }
  getLeadingWhitespace(t2) {
    let r2 = this.getLeadingWhitespaceCount(t2);
    return t2.slice(0, r2);
  }
  getTrailingWhitespace(t2) {
    let r2 = this.getTrailingWhitespaceCount(t2);
    return t2.slice(t2.length - r2);
  }
  hasLeadingWhitespace(t2) {
    return this.#e.has(t2.charAt(0));
  }
  hasTrailingWhitespace(t2) {
    return this.#e.has(M$1(0, t2, -1));
  }
  trimStart(t2) {
    let r2 = this.getLeadingWhitespaceCount(t2);
    return t2.slice(r2);
  }
  trimEnd(t2) {
    let r2 = this.getTrailingWhitespaceCount(t2);
    return t2.slice(0, t2.length - r2);
  }
  trim(t2) {
    return this.trimEnd(this.trimStart(t2));
  }
  split(t2, r2 = false) {
    let n2 = `[${zt$1([...this.#e].join(""))}]+`, i = new RegExp(r2 ? `(${n2})` : n2, "u");
    return t2.split(i);
  }
  hasWhitespaceCharacter(t2) {
    let r2 = this.#e;
    return Array.prototype.some.call(t2, (n2) => r2.has(n2));
  }
  hasNonWhitespaceCharacter(t2) {
    let r2 = this.#e;
    return Array.prototype.some.call(t2, (n2) => !r2.has(n2));
  }
  isWhitespaceOnly(t2) {
    let r2 = this.#e;
    return Array.prototype.every.call(t2, (n2) => r2.has(n2));
  }
  #t(t2) {
    let r2 = Number.POSITIVE_INFINITY;
    for (let n2 of t2.split(`
`)) {
      if (n2.length === 0) continue;
      let i = this.getLeadingWhitespaceCount(n2);
      if (i === 0) return 0;
      n2.length !== i && i < r2 && (r2 = i);
    }
    return r2 === Number.POSITIVE_INFINITY ? 0 : r2;
  }
  dedentString(t2) {
    let r2 = this.#t(t2);
    return r2 === 0 ? t2 : t2.split(`
`).map((n2) => n2.slice(r2)).join(`
`);
  }
}, Wr$1 = $t$1;
var ds = ["	", `
`, "\f", "\r", " "], gs = new Wr$1(ds), N = gs;
var Yt$1 = class Yt extends Error {
  name = "UnexpectedNodeError";
  constructor(t2, r2, n2 = "type") {
    super(`Unexpected ${r2} node ${n2}: ${JSON.stringify(t2[n2])}.`), this.node = t2;
  }
}, Gr$1 = Yt$1;
var _s = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens", "switchValueSourceSpan", "expSourceSpan", "valueSourceSpan"]), Ss = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function zr$1(e2, t2, r2) {
  if (e2.kind === "text" || e2.kind === "comment") return null;
  if (e2.kind === "yaml" && delete t2.value, e2.kind === "attribute") {
    let { fullName: n2, value: i } = e2;
    n2 === "style" || n2 === "class" || n2 === "srcset" && (r2.fullName === "img" || r2.fullName === "source") || n2 === "allow" && r2.fullName === "iframe" || n2.startsWith("on") || n2.startsWith("@") || n2.startsWith(":") || n2.startsWith(".") || n2.startsWith("#") || n2.startsWith("v-") || n2 === "vars" && r2.fullName === "style" || (n2 === "setup" || n2 === "generic") && r2.fullName === "script" || n2 === "slot-scope" || n2.startsWith("(") || n2.startsWith("[") || n2.startsWith("*") || n2.startsWith("bind") || n2.startsWith("i18n") || n2.startsWith("on-") || n2.startsWith("ng-") || i?.includes("{{") ? delete t2.value : i && (t2.value = w$1(0, i, /'|&quot;|&apos;/gu, '"'));
  }
  if (e2.kind === "docType" && (t2.value = w$1(0, e2.value.toLowerCase(), /\s+/gu, " ")), e2.kind === "angularControlFlowBlock" && e2.parameters?.children) for (let n2 of t2.parameters.children) Ss.has(e2.name) ? delete n2.expression : n2.expression = n2.expression.trim();
  e2.kind === "angularIcuExpression" && (t2.switchValue = e2.switchValue.trim()), e2.kind === "angularLetDeclarationInitializer" && delete t2.value, e2.kind === "element" && e2.isVoid && !e2.isSelfClosing && (t2.isSelfClosing = true);
}
zr$1.ignoredProperties = _s;
var $r$1 = zr$1;
function X$1(e2, t2 = true) {
  return [A([k$1, e2]), t2 ? k$1 : ""];
}
function V$2(e2, t2) {
  let r2 = e2.type === "NGRoot" ? e2.node.type === "NGMicrosyntax" && e2.node.body.length === 1 && e2.node.body[0].type === "NGMicrosyntaxExpression" ? e2.node.body[0].expression : e2.node : e2.type === "JsExpressionRoot" ? e2.node : e2;
  return r2 && (r2.type === "ObjectExpression" || r2.type === "ArrayExpression" || (t2.parser === "__vue_expression" || t2.parser === "__vue_ts_expression" || t2.parser === "__ng_binding" || t2.parser === "__ng_directive") && (r2.type === "TemplateLiteral" || r2.type === "StringLiteral"));
}
async function x$1(e2, t2, r2, n2) {
  r2 = { __isInHtmlAttribute: true, __embeddedInHtml: true, ...r2 };
  let i = true;
  n2 && (r2.__onHtmlBindingRoot = (a, o2) => {
    i = n2(a, o2);
  });
  let s2 = await t2(e2, r2, t2);
  return i ? E(s2) : X$1(s2);
}
function Es(e2, t2, r2, n2) {
  let { node: i } = r2, s2 = n2.originalText.slice(i.sourceSpan.start.offset, i.sourceSpan.end.offset);
  return /^\s*$/u.test(s2) ? "" : x$1(s2, e2, { parser: "__ng_directive", __isInHtmlAttribute: false }, V$2);
}
var Yr$1 = Es;
var Cs = Array.prototype.toReversed ?? function() {
  return [...this].reverse();
}, vs = ve$1("toReversed", function() {
  if (Array.isArray(this)) return Cs;
}), jr$1 = vs;
function Ts() {
  let e2 = globalThis, t2 = e2.Deno?.build?.os;
  return typeof t2 == "string" ? t2 === "windows" : e2.navigator?.platform?.startsWith("Win") ?? e2.process?.platform?.startsWith("win") ?? false;
}
var bs = Ts();
function Xr$1(e2) {
  if (e2 = e2 instanceof URL ? e2 : new URL(e2), e2.protocol !== "file:") throw new TypeError(`URL must be a file URL: received "${e2.protocol}"`);
  return e2;
}
function ws$1(e2) {
  return e2 = Xr$1(e2), decodeURIComponent(e2.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function ks(e2) {
  e2 = Xr$1(e2);
  let t2 = decodeURIComponent(e2.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  return e2.hostname !== "" && (t2 = `\\\\${e2.hostname}${t2}`), t2;
}
function jt$1(e2) {
  return bs ? ks(e2) : ws$1(e2);
}
var Kr$1 = (e2) => String(e2).split(/[/\\]/u).pop(), Qr$1 = (e2) => String(e2).startsWith("file:");
function xs(e2) {
  return Array.isArray(e2) && e2.length > 0;
}
var Ne$1 = xs;
function Jr$1(e2, t2) {
  if (!t2) return;
  let r2 = Kr$1(t2).toLowerCase();
  return e2.find(({ filenames: n2 }) => n2?.some((i) => i.toLowerCase() === r2)) ?? e2.find(({ extensions: n2 }) => n2?.some((i) => r2.endsWith(i)));
}
function ys(e2, t2) {
  if (t2) return e2.find(({ name: r2 }) => r2.toLowerCase() === t2) ?? e2.find(({ aliases: r2 }) => r2?.includes(t2)) ?? e2.find(({ extensions: r2 }) => r2?.includes(`.${t2}`));
}
var As = void 0;
function Zr$1(e2, t2) {
  if (t2) {
    if (Qr$1(t2)) try {
      t2 = jt$1(t2);
    } catch {
      return;
    }
    if (typeof t2 == "string") return e2.find(({ isSupported: r2 }) => r2?.({ filepath: t2 }));
  }
}
function Ns(e2, t2) {
  let r2 = jr$1(0, e2.plugins).flatMap((i) => i.languages ?? []);
  return (ys(r2, t2.language) ?? Jr$1(r2, t2.physicalFile) ?? Jr$1(r2, t2.file) ?? Zr$1(r2, t2.physicalFile) ?? Zr$1(r2, t2.file) ?? As?.(r2, t2.physicalFile))?.parsers[0];
}
var _t = Ns;
var St = /* @__PURE__ */ Symbol.for("PRETTIER_IS_FRONT_MATTER");
function Ls(e2) {
  return !!e2?.[St];
}
var ie$1 = Ls;
var We$1 = 3;
function Ps(e2) {
  let t2 = e2.slice(0, We$1);
  if (t2 !== "---" && t2 !== "+++") return;
  let r2 = e2.indexOf(`
`, We$1);
  if (r2 === -1) return;
  let n2 = e2.slice(We$1, r2).trim(), i = e2.indexOf(`
${t2}`, r2), s2 = n2;
  if (s2 || (s2 = t2 === "+++" ? "toml" : "yaml"), i === -1 && t2 === "---" && s2 === "yaml" && (i = e2.indexOf(`
...`, r2)), i === -1) return;
  let a = i + 1 + We$1, o2 = e2.charAt(a + 1);
  if (!/\s?/u.test(o2)) return;
  let c2 = e2.slice(0, a), u;
  return { language: s2, explicitLanguage: n2 || null, value: e2.slice(r2 + 1, i), startDelimiter: t2, endDelimiter: c2.slice(-We$1), raw: c2, start: { line: 1, column: 0, index: 0 }, end: { index: c2.length, get line() {
    return u ?? (u = c2.split(`
`)), u.length;
  }, get column() {
    return u ?? (u = c2.split(`
`)), M$1(0, u, -1).length;
  } }, [St]: true };
}
function Os(e2) {
  let t2 = Ps(e2);
  return t2 ? { frontMatter: t2, get content() {
    let { raw: r2 } = t2;
    return w$1(0, r2, /[^\n]/gu, " ") + e2.slice(r2.length);
  } } : { content: e2 };
}
var Xt$1 = Os;
var en$1 = "inline", Kt$1 = { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", style: "none", template: "inline", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", dialog: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", search: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", menu: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", input: "inline-block", button: "inline-block", fieldset: "block", details: "block", summary: "block", marquee: "inline-block", select: "inline-block", source: "block", track: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", option: "block", optgroup: "block" }, tn$1 = "normal", Qt$1 = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" };
function Ds(e2) {
  return e2.kind === "element" && !e2.hasExplicitNamespace && !["html", "svg"].includes(e2.namespace);
}
var se$1 = Ds;
var Is = (e2) => w$1(0, e2, /^[\t\f\r ]*\n/gu, ""), Jt$1 = (e2) => Is(N.trimEnd(e2)), rn$1 = (e2) => {
  let t2 = e2, r2 = N.getLeadingWhitespace(t2);
  r2 && (t2 = t2.slice(r2.length));
  let n2 = N.getTrailingWhitespace(t2);
  return n2 && (t2 = t2.slice(0, -n2.length)), { leadingWhitespace: r2, trailingWhitespace: n2, text: t2 };
};
function Et$1(e2, t2) {
  return !!(e2.kind === "ieConditionalComment" && e2.lastChild && !e2.lastChild.isSelfClosing && !e2.lastChild.endSourceSpan || e2.kind === "ieConditionalComment" && !e2.complete || ae$1(e2) && e2.children.some((r2) => r2.kind !== "text" && r2.kind !== "interpolation") || Tt(e2, t2) && !q$1(e2, t2) && e2.kind !== "interpolation");
}
function oe$1(e2) {
  return e2.kind === "attribute" || !e2.parent || !e2.prev ? false : Rs(e2.prev);
}
function Rs(e2) {
  return e2.kind === "comment" && e2.value.trim() === "prettier-ignore";
}
function O$1(e2) {
  return e2.kind === "text" || e2.kind === "comment";
}
function q$1(e2, t2) {
  return e2.kind === "element" && (e2.fullName === "script" || e2.fullName === "style" || e2.fullName === "svg:style" || e2.fullName === "svg:script" || e2.fullName === "mj-style" && t2.parser === "mjml" || se$1(e2) && (e2.name === "script" || e2.name === "style"));
}
function nn$1(e2, t2) {
  return e2.children && !q$1(e2, t2);
}
function sn$1(e2, t2) {
  return q$1(e2, t2) || e2.kind === "interpolation" || Zt$1(e2);
}
function Zt$1(e2) {
  return gn$1(e2).startsWith("pre");
}
function an$1(e2, t2) {
  let r2 = n2();
  if (r2 && !e2.prev && e2.parent?.tagDefinition?.ignoreFirstLf) return e2.kind === "interpolation";
  return r2;
  function n2() {
    return ie$1(e2) || e2.kind === "angularControlFlowBlock" ? false : (e2.kind === "text" || e2.kind === "interpolation") && e2.prev && (e2.prev.kind === "text" || e2.prev.kind === "interpolation") ? true : !e2.parent || e2.parent.cssDisplay === "none" ? false : ae$1(e2.parent) ? true : !(!e2.prev && (e2.parent.kind === "root" || ae$1(e2) && e2.parent || q$1(e2.parent, t2) || $e(e2.parent, t2) || !Vs(e2.parent.cssDisplay)) || e2.prev && !Gs(e2.prev.cssDisplay));
  }
}
function on$1(e2, t2) {
  return ie$1(e2) || e2.kind === "angularControlFlowBlock" ? false : (e2.kind === "text" || e2.kind === "interpolation") && e2.next && (e2.next.kind === "text" || e2.next.kind === "interpolation") ? true : !e2.parent || e2.parent.cssDisplay === "none" ? false : ae$1(e2.parent) ? true : !(!e2.next && (e2.parent.kind === "root" || ae$1(e2) && e2.parent || q$1(e2.parent, t2) || $e(e2.parent, t2) || !Us(e2.parent.cssDisplay)) || e2.next && !Ws(e2.next.cssDisplay));
}
function ln(e2, t2) {
  return zs(e2.cssDisplay) && !q$1(e2, t2);
}
function Ge$1(e2) {
  return ie$1(e2) || e2.next && e2.sourceSpan.end && e2.sourceSpan.end.line + 1 < e2.next.sourceSpan.start.line;
}
function cn(e2) {
  return er$1(e2) || e2.kind === "element" && e2.children.length > 0 && (["body", "script", "style"].includes(e2.name) || e2.children.some((t2) => Bs(t2))) || e2.firstChild && e2.firstChild === e2.lastChild && e2.firstChild.kind !== "text" && pn(e2.firstChild) && (!e2.lastChild.isTrailingSpaceSensitive || hn$1(e2.lastChild));
}
function er$1(e2) {
  return e2.kind === "element" && e2.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(e2.name) || e2.cssDisplay.startsWith("table") && e2.cssDisplay !== "table-cell");
}
function Ct$1(e2) {
  return mn$1(e2) || e2.prev && Ms(e2.prev) || un$1(e2);
}
function Ms(e2) {
  return mn$1(e2) || e2.kind === "element" && e2.fullName === "br" || un$1(e2);
}
function un$1(e2) {
  return pn(e2) && hn$1(e2);
}
function pn(e2) {
  return e2.hasLeadingSpaces && (e2.prev ? e2.prev.sourceSpan.end.line < e2.sourceSpan.start.line : e2.parent.kind === "root" || e2.parent.startSourceSpan.end.line < e2.sourceSpan.start.line);
}
function hn$1(e2) {
  return e2.hasTrailingSpaces && (e2.next ? e2.next.sourceSpan.start.line > e2.sourceSpan.end.line : e2.parent.kind === "root" || e2.parent.endSourceSpan && e2.parent.endSourceSpan.start.line > e2.sourceSpan.end.line);
}
function mn$1(e2) {
  switch (e2.kind) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return true;
    case "element":
      return ["script", "select"].includes(e2.name);
  }
  return false;
}
function vt(e2) {
  return e2.lastChild ? vt(e2.lastChild) : e2;
}
function Bs(e2) {
  return e2.children?.some((t2) => t2.kind !== "text");
}
function fn(e2) {
  if (e2) switch (e2) {
    case "module":
    case "text/javascript":
    case "text/babel":
    case "text/jsx":
    case "application/javascript":
      return "babel";
    case "application/x-typescript":
      return "typescript";
    case "text/markdown":
      return "markdown";
    case "text/html":
      return "html";
    case "text/x-handlebars-template":
      return "glimmer";
    default:
      if (e2.endsWith("json") || e2.endsWith("importmap") || e2 === "speculationrules") return "json";
  }
}
function qs(e2, t2) {
  let { name: r2, attrMap: n2 } = e2;
  if (r2 !== "script" || Object.prototype.hasOwnProperty.call(n2, "src")) return;
  let { type: i, lang: s2 } = e2.attrMap;
  return !s2 && !i ? "babel" : _t(t2, { language: s2 }) ?? fn(i);
}
function Fs(e2, t2) {
  if (!Tt(e2, t2)) return;
  let { attrMap: r2 } = e2;
  if (Object.prototype.hasOwnProperty.call(r2, "src")) return;
  let { type: n2, lang: i } = r2;
  return _t(t2, { language: i }) ?? fn(n2);
}
function Hs(e2, t2) {
  if (e2.name === "style") {
    let { lang: r2 } = e2.attrMap;
    return r2 ? _t(t2, { language: r2 }) : "css";
  }
  if (e2.name === "mj-style" && t2.parser === "mjml") return "css";
}
function tr$1(e2, t2) {
  return qs(e2, t2) ?? Hs(e2, t2) ?? Fs(e2, t2);
}
function ze$1(e2) {
  return e2 === "block" || e2 === "list-item" || e2.startsWith("table");
}
function Vs(e2) {
  return !ze$1(e2) && e2 !== "inline-block";
}
function Us(e2) {
  return !ze$1(e2) && e2 !== "inline-block";
}
function Ws(e2) {
  return !ze$1(e2);
}
function Gs(e2) {
  return !ze$1(e2);
}
function zs(e2) {
  return !ze$1(e2) && e2 !== "inline-block";
}
function ae$1(e2) {
  return gn$1(e2).startsWith("pre");
}
function $s(e2, t2) {
  let r2 = e2;
  for (; r2; ) {
    if (t2(r2)) return true;
    r2 = r2.parent;
  }
  return false;
}
function dn$1(e2, t2) {
  if (le$1(e2, t2)) return "block";
  if (e2.prev?.kind === "comment") {
    let n2 = e2.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
    if (n2) return n2[1];
  }
  let r2 = false;
  if (e2.kind === "element" && e2.namespace === "svg") if ($s(e2, (n2) => n2.fullName === "svg:foreignObject")) r2 = true;
  else return e2.name === "svg" ? "inline-block" : "block";
  switch (t2.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      if (e2.kind === "element" && (!e2.namespace || r2 || se$1(e2)) && Object.prototype.hasOwnProperty.call(Kt$1, e2.name)) return Kt$1[e2.name];
  }
  return en$1;
}
function gn$1(e2) {
  return e2.kind === "element" && (!e2.namespace || se$1(e2)) && Object.prototype.hasOwnProperty.call(Qt$1, e2.name) ? Qt$1[e2.name] : tn$1;
}
function rr$1(e2) {
  return w$1(0, w$1(0, e2, "&apos;", "'"), "&quot;", '"');
}
function b$1(e2) {
  return rr$1(e2.value);
}
var Ys = /* @__PURE__ */ new Set(["template", "style", "script"]);
function $e(e2, t2) {
  return le$1(e2, t2) && !Ys.has(e2.fullName);
}
function le$1(e2, t2) {
  return t2.parser === "vue" && e2.kind === "element" && e2.parent.kind === "root" && e2.fullName.toLowerCase() !== "html";
}
function Tt(e2, t2) {
  return le$1(e2, t2) && ($e(e2, t2) || e2.attrMap.lang && e2.attrMap.lang !== "html");
}
function _n$1(e2) {
  let t2 = e2.fullName;
  return t2.charAt(0) === "#" || t2 === "slot-scope" || t2 === "v-slot" || t2.startsWith("v-slot:");
}
function Sn$1(e2, t2) {
  let r2 = e2.parent;
  if (!le$1(r2, t2)) return false;
  let n2 = r2.fullName, i = e2.fullName;
  return n2 === "script" && i === "setup" || n2 === "style" && i === "vars";
}
function bt(e2, t2 = e2.value) {
  return e2.parent.isWhitespaceSensitive ? e2.parent.isIndentationSensitive ? L$1(t2) : L$1(N.dedentString(Jt$1(t2)), C) : B$1(S$1, N.split(t2));
}
function wt(e2, t2) {
  return le$1(e2, t2) && e2.name === "script";
}
function js(e2) {
  let { valueSpan: t2, value: r2 } = e2;
  return t2.end.offset - t2.start.offset === r2.length + 2;
}
function kt$1(e2, t2) {
  if (js(e2)) return false;
  let { value: r2 } = e2;
  return /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(r2) || t2.parser === "lwc" && r2.startsWith("{") && r2.endsWith("}");
}
var En$1 = /\{\{(.+?)\}\}/su, Cn$1 = ({ node: { value: e2 } }) => En$1.test(e2);
async function vn$1(e2, t2, r2) {
  let n2 = b$1(r2.node), i = [];
  for (let [s2, a] of n2.split(En$1).entries()) if (s2 % 2 === 0) i.push(L$1(a));
  else try {
    i.push(E(["{{", A([S$1, await x$1(a, e2, { parser: "__ng_interpolation", __isInHtmlInterpolation: true })]), S$1, "}}"]));
  } catch {
    i.push("{{", L$1(a), "}}");
  }
  return i;
}
var nr$1 = (e2) => (t2, r2, n2) => x$1(b$1(n2.node), t2, { parser: e2 }, V$2), Xs = [{ test(e2) {
  let t2 = e2.node.fullName;
  return t2.startsWith("(") && t2.endsWith(")") || t2.startsWith("on-");
}, print: nr$1("__ng_action") }, { test(e2) {
  let t2 = e2.node.fullName;
  return t2.startsWith("[") && t2.endsWith("]") || /^bind(?:on)?-/u.test(t2) || /^ng-(?:if|show|hide|class|style)$/u.test(t2);
}, print: nr$1("__ng_binding") }, { test: (e2) => e2.node.fullName.startsWith("*"), print: nr$1("__ng_directive") }, { test: (e2) => /^i18n(?:-.+)?$/u.test(e2.node.fullName), print: Ks }, { test: Cn$1, print: vn$1 }].map(({ test: e2, print: t2 }) => ({ test: (r2, n2) => n2.parser === "angular" && e2(r2), print: t2 }));
function Ks(e2, t2, { node: r2 }) {
  let n2 = b$1(r2);
  return X$1(gt$1(bt(r2, n2.trim())), !n2.includes("@@"));
}
var Tn$1 = Xs;
var bn$1 = ({ node: e2 }, t2) => !t2.parentParser && e2.fullName === "class" && !e2.value.includes("{{"), wn$1 = (e2, t2, r2) => b$1(r2.node).trim().split(/\s+/u).join(" ");
var ir$1 = ["onabort", "onafterprint", "onauxclick", "onbeforeinput", "onbeforematch", "onbeforeprint", "onbeforetoggle", "onbeforeunload", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncommand", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "onhashchange", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onlanguagechange", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmessage", "onmessageerror", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onoffline", "ononline", "onpagehide", "onpagereveal", "onpageshow", "onpageswap", "onpaste", "onpause", "onplay", "onplaying", "onpopstate", "onprogress", "onratechange", "onrejectionhandled", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onstorage", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onunhandledrejection", "onunload", "onvolumechange", "onwaiting", "onwheel"];
var Js = new Set(ir$1), kn$1 = ({ node: e2 }, t2) => Js.has(e2.fullName) && !t2.parentParser && !e2.value.includes("{{"), xn$1 = (e2, t2, r2) => x$1(b$1(r2.node), e2, { parser: "babel", __isHtmlInlineEventHandler: true }, () => false);
function Zs(e2) {
  let t2 = [];
  for (let r2 of e2.split(";")) {
    if (r2 = N.trim(r2), !r2) continue;
    let [n2, ...i] = N.split(r2);
    t2.push({ name: n2, value: i });
  }
  return t2;
}
var yn$1 = Zs;
var An$1 = ({ node: e2 }, t2) => e2.fullName === "allow" && !t2.parentParser && e2.parent.fullName === "iframe" && !e2.value.includes("{{");
function Nn$1(e2, t2, r2) {
  let { node: n2 } = r2, i = yn$1(b$1(n2));
  return i.length === 0 ? [""] : X$1(i.map(({ name: s2, value: a }, o2) => [[s2, ...a].join(" "), o2 === i.length - 1 ? j$1(";") : [";", S$1]]));
}
function Ln$1(e2) {
  return e2 === "	" || e2 === `
` || e2 === "\f" || e2 === "\r" || e2 === " ";
}
var ea$1 = /^[ \t\n\r\u000c]+/, ta$1 = /^[, \t\n\r\u000c]+/, ra$1 = /^[^ \t\n\r\u000c]+/, na$1 = /[,]+$/, Pn$1 = /^\d+$/, ia$1 = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
function sa$1(e2) {
  let t2 = e2.length, r2, n2, i, s2, a, o2 = 0, c2;
  function u(m) {
    let _2, T2 = m.exec(e2.substring(o2));
    if (T2) return [_2] = T2, o2 += _2.length, _2;
  }
  let p = [];
  for (; ; ) {
    if (u(ta$1), o2 >= t2) {
      if (p.length === 0) throw new Error("Must contain one or more image candidate strings.");
      return p;
    }
    c2 = o2, r2 = u(ra$1), n2 = [], r2.slice(-1) === "," ? (r2 = r2.replace(na$1, ""), g()) : d();
  }
  function d() {
    for (u(ea$1), i = "", s2 = "in descriptor"; ; ) {
      if (a = e2.charAt(o2), s2 === "in descriptor") if (Ln$1(a)) i && (n2.push(i), i = "", s2 = "after descriptor");
      else if (a === ",") {
        o2 += 1, i && n2.push(i), g();
        return;
      } else if (a === "(") i += a, s2 = "in parens";
      else if (a === "") {
        i && n2.push(i), g();
        return;
      } else i += a;
      else if (s2 === "in parens") if (a === ")") i += a, s2 = "in descriptor";
      else if (a === "") {
        n2.push(i), g();
        return;
      } else i += a;
      else if (s2 === "after descriptor" && !Ln$1(a)) if (a === "") {
        g();
        return;
      } else s2 = "in descriptor", o2 -= 1;
      o2 += 1;
    }
  }
  function g() {
    let m = false, _2, T2, P2, z2, ne = {}, Q, ot2, Ce2, qe2, Vt2;
    for (z2 = 0; z2 < n2.length; z2++) Q = n2[z2], ot2 = Q[Q.length - 1], Ce2 = Q.substring(0, Q.length - 1), qe2 = parseInt(Ce2, 10), Vt2 = parseFloat(Ce2), Pn$1.test(Ce2) && ot2 === "w" ? ((_2 || T2) && (m = true), qe2 === 0 ? m = true : _2 = qe2) : ia$1.test(Ce2) && ot2 === "x" ? ((_2 || T2 || P2) && (m = true), Vt2 < 0 ? m = true : T2 = Vt2) : Pn$1.test(Ce2) && ot2 === "h" ? ((P2 || T2) && (m = true), qe2 === 0 ? m = true : P2 = qe2) : m = true;
    if (!m) ne.source = { value: r2, startOffset: c2 }, _2 && (ne.width = { value: _2 }), T2 && (ne.density = { value: T2 }), P2 && (ne.height = { value: P2 }), p.push(ne);
    else throw new Error(`Invalid srcset descriptor found in "${e2}" at "${Q}".`);
  }
}
var On$1 = sa$1;
var Dn$1 = (e2) => e2.node.fullName === "srcset" && (e2.parent.fullName === "img" || e2.parent.fullName === "source"), In$1 = { width: "w", height: "h", density: "x" }, aa = Object.keys(In$1);
function Rn$1(e2, t2, r2) {
  let n2 = b$1(r2.node), i = On$1(n2), s2 = aa.filter((m) => i.some((_2) => Object.prototype.hasOwnProperty.call(_2, m)));
  if (s2.length > 1) throw new Error("Mixed descriptor in srcset is not supported");
  let [a] = s2, o2 = In$1[a], c2 = i.map((m) => m.source.value), u = Math.max(...c2.map((m) => m.length)), p = i.map((m) => m[a] ? String(m[a].value) : ""), d = p.map((m) => {
    let _2 = m.indexOf(".");
    return _2 === -1 ? m.length : _2;
  }), g = Math.max(...d);
  return X$1(B$1([",", S$1], c2.map((m, _2) => {
    let T2 = [m], P2 = p[_2];
    if (P2) {
      let z2 = u - m.length + 1, ne = g - d[_2], Q = " ".repeat(z2 + ne);
      T2.push(j$1(Q, " "), P2 + o2);
    }
    return T2;
  })));
}
var Mn$1 = ({ node: e2 }, t2) => e2.fullName === "style" && !t2.parentParser && !e2.value.includes("{{"), Bn$1 = async (e2, t2, r2) => X$1(await e2(b$1(r2.node), { parser: "css", __isHTMLStyleAttribute: true }));
var sr$1 = /* @__PURE__ */ new WeakMap();
function oa$1(e2, t2) {
  let { root: r2 } = e2;
  return sr$1.has(r2) || sr$1.set(r2, r2.children.some((n2) => wt(n2, t2) && ["ts", "typescript"].includes(n2.attrMap.lang))), sr$1.get(r2);
}
var U$1 = oa$1;
function qn(e2, t2, r2) {
  let n2 = b$1(r2.node);
  return x$1(`type T<${n2}> = any`, e2, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: true }, V$2);
}
function Fn$1(e2, t2, r2, n2) {
  let i = b$1(r2.node), s2 = U$1(r2, n2) ? "babel-ts" : "babel";
  return x$1(`function _(${i}) {}`, e2, { parser: s2, __isVueBindings: true });
}
async function Hn$1(e2, t2, r2, n2) {
  let i = b$1(r2.node), { left: s2, operator: a, right: o2 } = la$1(i), c2 = U$1(r2, n2);
  return [E(await x$1(`function _(${s2}) {}`, e2, { parser: c2 ? "babel-ts" : "babel", __isVueForBindingLeft: true })), " ", a, " ", await x$1(o2, e2, { parser: c2 ? "__ts_expression" : "__js_expression" })];
}
function la$1(e2) {
  let t2 = /(.*?)\s+(in|of)\s+(.*)/su, r2 = /,([^,\]}]*)(?:,([^,\]}]*))?$/u, n2 = /^\(|\)$/gu, i = e2.match(t2);
  if (!i) return;
  let s2 = { for: i[3].trim() };
  if (!s2.for) return;
  let a = w$1(0, i[1].trim(), n2, ""), o2 = a.match(r2);
  o2 ? (s2.alias = a.replace(r2, ""), s2.iterator1 = o2[1].trim(), o2[2] && (s2.iterator2 = o2[2].trim())) : s2.alias = a;
  let c2 = [s2.alias, s2.iterator1, s2.iterator2];
  if (!c2.some((u, p) => !u && (p === 0 || c2.slice(p + 1).some(Boolean)))) return { left: c2.filter(Boolean).join(","), operator: i[2], right: s2.for };
}
var ca$1 = [{ test: (e2) => e2.node.fullName === "v-for", print: Hn$1 }, { test: (e2, t2) => e2.node.fullName === "generic" && wt(e2.parent, t2), print: qn }, { test: ({ node: e2 }, t2) => _n$1(e2) || Sn$1(e2, t2), print: Fn$1 }, { test(e2) {
  let t2 = e2.node.fullName;
  return t2.startsWith("@") || t2.startsWith("v-on:");
}, print: ua$1 }, { test(e2) {
  let t2 = e2.node.fullName;
  return t2.startsWith(":") || t2.startsWith(".") || t2.startsWith("v-bind:");
}, print: pa$1 }, { test: (e2) => e2.node.fullName.startsWith("v-"), print: Vn$1 }].map(({ test: e2, print: t2 }) => ({ test: (r2, n2) => n2.parser === "vue" && e2(r2, n2), print: t2 }));
async function ua$1(e2, t2, r2, n2) {
  try {
    return await Vn$1(e2, t2, r2, n2);
  } catch (a) {
    if (a.cause?.code !== "BABEL_PARSER_SYNTAX_ERROR") throw a;
  }
  let i = b$1(r2.node), s2 = U$1(r2, n2) ? "__vue_ts_event_binding" : "__vue_event_binding";
  return x$1(i, e2, { parser: s2 }, V$2);
}
function pa$1(e2, t2, r2, n2) {
  let i = b$1(r2.node), s2 = U$1(r2, n2) ? "__vue_ts_expression" : "__vue_expression";
  return x$1(i, e2, { parser: s2 }, V$2);
}
function Vn$1(e2, t2, r2, n2) {
  let i = b$1(r2.node), s2 = U$1(r2, n2) ? "__ts_expression" : "__js_expression";
  return x$1(i, e2, { parser: s2 }, V$2);
}
var Un$1 = ca$1;
var ha$1 = [{ test: Dn$1, print: Rn$1 }, { test: Mn$1, print: Bn$1 }, { test: kn$1, print: xn$1 }, { test: bn$1, print: wn$1 }, { test: An$1, print: Nn$1 }, ...Un$1, ...Tn$1].map(({ test: e2, print: t2 }) => ({ test: e2, print: fa$1(t2) }));
function ma$1(e2, t2) {
  let { node: r2 } = e2, { value: n2 } = r2;
  if (n2) return kt$1(r2, t2) ? [r2.rawName, "=", n2] : ha$1.find(({ test: i }) => i(e2, t2))?.print;
}
function fa$1(e2) {
  return async (t2, r2, n2, i) => {
    let s2 = await e2(t2, r2, n2, i);
    if (s2) return s2 = Gt$1(s2, (a) => typeof a == "string" ? w$1(0, a, '"', "&quot;") : a), [n2.node.rawName, '="', E(s2), '"'];
  };
}
var Wn$1 = ma$1;
var K$1 = (e2) => e2.sourceSpan.start.offset, J = (e2) => e2.sourceSpan.end.offset;
function Ye$1(e2, t2) {
  return [e2.isSelfClosing ? "" : da$1(e2, t2), ce$1(e2, t2)];
}
function da$1(e2, t2) {
  return e2.lastChild && he$1(e2.lastChild) ? "" : [ga$1(e2, t2), xt(e2, t2)];
}
function ce$1(e2, t2) {
  return (e2.next ? W$1(e2.next) : pe(e2.parent)) ? "" : [ue$1(e2, t2), F(e2, t2)];
}
function ga$1(e2, t2) {
  return pe(e2) ? ue$1(e2.lastChild, t2) : "";
}
function F(e2, t2) {
  return he$1(e2) ? xt(e2.parent, t2) : je$1(e2) ? yt(e2.next, t2) : "";
}
function xt(e2, t2) {
  if (zn$1(e2, t2)) return "";
  switch (e2.kind) {
    case "ieConditionalComment":
      return "<!";
    case "element":
      if (e2.hasHtmComponentClosingTag) return "<//";
    default:
      return `</${e2.rawName}`;
  }
}
function ue$1(e2, t2) {
  if (zn$1(e2, t2)) return "";
  switch (e2.kind) {
    case "ieConditionalComment":
    case "ieConditionalEndComment":
      return "[endif]-->";
    case "ieConditionalStartComment":
      return "]><!-->";
    case "interpolation":
      return "}}";
    case "angularIcuExpression":
      return "}";
    case "element":
      if (e2.isSelfClosing) return "/>";
    default:
      return ">";
  }
}
function zn$1(e2, t2) {
  return !e2.isSelfClosing && !e2.endSourceSpan && (oe$1(e2) || Et$1(e2.parent, t2));
}
function W$1(e2) {
  return e2.prev && e2.prev.kind !== "docType" && e2.kind !== "angularControlFlowBlock" && !O$1(e2.prev) && e2.isLeadingSpaceSensitive && !e2.hasLeadingSpaces;
}
function pe(e2) {
  return e2.lastChild?.isTrailingSpaceSensitive && !e2.lastChild.hasTrailingSpaces && !O$1(vt(e2.lastChild)) && !ae$1(e2);
}
function he$1(e2) {
  return !e2.next && !e2.hasTrailingSpaces && e2.isTrailingSpaceSensitive && O$1(vt(e2));
}
function je$1(e2) {
  return e2.next && !O$1(e2.next) && O$1(e2) && e2.isTrailingSpaceSensitive && !e2.hasTrailingSpaces;
}
function _a$2(e2) {
  let t2 = e2.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
  return t2 ? t2[1] ? t2[1].split(/\s+/u) : true : false;
}
function Xe$1(e2) {
  return !e2.prev && e2.isLeadingSpaceSensitive && !e2.hasLeadingSpaces;
}
function Sa$1(e2, t2, r2) {
  let { node: n2 } = e2;
  if (!Ne$1(n2.attrs)) return n2.isSelfClosing ? " " : "";
  let i = n2.prev?.kind === "comment" && _a$2(n2.prev.value), s2 = typeof i == "boolean" ? () => i : Array.isArray(i) ? (d) => i.includes(d.rawName) : () => false, a = e2.map(({ node: d }) => s2(d) ? L$1(t2.originalText.slice(K$1(d), J(d))) : r2(), "attrs"), o2 = n2.kind === "element" && n2.fullName === "script" && n2.attrs.length === 1 && n2.attrs[0].fullName === "src" && n2.children.length === 0, u = t2.singleAttributePerLine && n2.attrs.length > 1 && !le$1(n2, t2) ? C : S$1, p = [A([o2 ? " " : S$1, B$1(u, a)])];
  return n2.firstChild && Xe$1(n2.firstChild) || n2.isSelfClosing && pe(n2.parent) || o2 ? p.push(n2.isSelfClosing ? " " : "") : p.push(t2.bracketSameLine ? n2.isSelfClosing ? " " : "" : n2.isSelfClosing ? S$1 : k$1), p;
}
function Ea$1(e2) {
  return e2.firstChild && Xe$1(e2.firstChild) ? "" : At(e2);
}
function Ke(e2, t2, r2) {
  let { node: n2 } = e2;
  return [me$1(n2, t2), Sa$1(e2, t2, r2), n2.isSelfClosing ? "" : Ea$1(n2)];
}
function me$1(e2, t2) {
  return e2.prev && je$1(e2.prev) ? "" : [H$1(e2, t2), yt(e2, t2)];
}
function H$1(e2, t2) {
  return Xe$1(e2) ? At(e2.parent) : W$1(e2) ? ue$1(e2.prev, t2) : "";
}
var Gn$1 = "<!doctype";
function yt(e2, t2) {
  switch (e2.kind) {
    case "ieConditionalComment":
    case "ieConditionalStartComment":
      return `<!--[if ${e2.condition}`;
    case "ieConditionalEndComment":
      return "<!--<!";
    case "interpolation":
      return "{{";
    case "docType": {
      if (e2.value === "html") {
        let { filepath: n2 } = t2;
        if (n2 && /\.html?$/u.test(n2)) return Gn$1;
      }
      let r2 = K$1(e2);
      return t2.originalText.slice(r2, r2 + Gn$1.length);
    }
    case "angularIcuExpression":
      return "{";
    case "element":
      if (e2.condition) return `<!--[if ${e2.condition}]><!--><${e2.rawName}`;
    default:
      return `<${e2.rawName}`;
  }
}
function At(e2) {
  switch (e2.kind) {
    case "ieConditionalComment":
      return "]>";
    case "element":
      if (e2.condition) return "><!--<![endif]-->";
    default:
      return ">";
  }
}
function Ca$1(e2, t2) {
  if (!e2.endSourceSpan) return "";
  let r2 = e2.startSourceSpan.end.offset;
  e2.firstChild && Xe$1(e2.firstChild) && (r2 -= At(e2).length);
  let n2 = e2.endSourceSpan.start.offset;
  return e2.lastChild && he$1(e2.lastChild) ? n2 += xt(e2, t2).length : pe(e2) && (n2 -= ue$1(e2.lastChild, t2).length), t2.originalText.slice(r2, n2);
}
var Nt = Ca$1;
var va$1 = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function Ta$1(e2, t2) {
  let { node: r2 } = e2;
  switch (r2.kind) {
    case "element":
      if (q$1(r2, t2) || r2.kind === "interpolation") return;
      if (!r2.isSelfClosing && Tt(r2, t2)) {
        let n2 = tr$1(r2, t2);
        return n2 ? async (i, s2) => {
          let a = Nt(r2, t2), o2 = /^\s*$/u.test(a), c2 = "";
          return o2 || (c2 = await i(Jt$1(a), { parser: n2, __embeddedInHtml: true }), o2 = c2 === ""), [H$1(r2, t2), E(Ke(e2, t2, s2)), o2 ? "" : C, c2, o2 ? "" : C, Ye$1(r2, t2), F(r2, t2)];
        } : void 0;
      }
      break;
    case "text":
      if (q$1(r2.parent, t2)) {
        let n2 = tr$1(r2.parent, t2);
        if (n2) return async (i) => {
          let s2 = n2 === "markdown" ? N.dedentString(r2.value.replace(/^[^\S\n]*\n/u, "")) : r2.value, a = { parser: n2, __embeddedInHtml: true };
          if (t2.parser === "html" && n2 === "babel") {
            let o2 = "script", { attrMap: c2 } = r2.parent;
            c2 && (c2.type === "module" || (c2.type === "text/babel" || c2.type === "text/jsx") && c2["data-type"] === "module") && (o2 = "module"), a.__babelSourceType = o2;
          }
          return [Y$1, H$1(r2, t2), await i(s2, a), F(r2, t2)];
        };
      } else if (r2.parent.kind === "interpolation") return async (n2) => {
        let i = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
        return t2.parser === "angular" ? i.parser = "__ng_interpolation" : t2.parser === "vue" ? i.parser = U$1(e2, t2) ? "__vue_ts_expression" : "__vue_expression" : i.parser = "__js_expression", [A([S$1, await n2(r2.value, i)]), r2.parent.next && W$1(r2.parent.next) ? " " : S$1];
      };
      break;
    case "attribute":
      return Wn$1(e2, t2);
    case "angularControlFlowBlockParameters":
      return va$1.has(e2.parent.name) ? Yr$1 : void 0;
    case "angularLetDeclarationInitializer":
      return (n2) => x$1(r2.value, n2, { parser: "__ng_binding", __isInHtmlAttribute: false });
  }
}
var $n$1 = Ta$1;
var Qe$1 = null;
function Je$1(e2) {
  if (Qe$1 !== null && typeof Qe$1.property) {
    let t2 = Qe$1;
    return Qe$1 = Je$1.prototype = null, t2;
  }
  return Qe$1 = Je$1.prototype = e2 ?? /* @__PURE__ */ Object.create(null), new Je$1();
}
var ba$1 = 10;
for (let e2 = 0; e2 <= ba$1; e2++) Je$1();
function ar$1(e2) {
  return Je$1(e2);
}
function wa$1(e2, t2 = "type") {
  ar$1(e2);
  function r2(n2) {
    let i = n2[t2], s2 = e2[i];
    if (!Array.isArray(s2)) throw Object.assign(new Error(`Missing visitor keys for '${i}'.`), { node: n2 });
    return s2;
  }
  return r2;
}
var Yn$1 = wa$1;
var I$2 = [["children"], []], jn$1 = { root: I$2[0], element: ["attrs", "children"], ieConditionalComment: I$2[0], ieConditionalStartComment: I$2[1], ieConditionalEndComment: I$2[1], interpolation: I$2[0], text: I$2[0], docType: I$2[1], comment: I$2[1], attribute: I$2[1], cdata: I$2[1], angularControlFlowBlock: ["children", "parameters"], angularControlFlowBlockParameters: I$2[0], angularControlFlowBlockParameter: I$2[1], angularLetDeclaration: ["init"], angularLetDeclarationInitializer: I$2[1], angularIcuExpression: ["cases"], angularIcuCase: ["expression"] };
var ka$1 = Yn$1(jn$1, "kind"), Xn = ka$1;
var Kn$1 = "format";
var Qn = /^\s*<!--\s*@(?:noformat|noprettier)\s*-->/u, Jn$1 = /^\s*<!--\s*@(?:format|prettier)\s*-->/u;
var Zn$1 = (e2) => Jn$1.test(e2), ei$1 = (e2) => Qn.test(e2), ti$1 = (e2) => `<!-- @${Kn$1} -->

${e2}`;
var ri$1 = /* @__PURE__ */ new Map([["if", /* @__PURE__ */ new Set(["else if", "else"])], ["else if", /* @__PURE__ */ new Set(["else if", "else"])], ["for", /* @__PURE__ */ new Set(["empty"])], ["defer", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["placeholder", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["error", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["loading", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])]]);
function ni$1(e2) {
  let t2 = J(e2);
  return e2.kind === "element" && !e2.endSourceSpan && Ne$1(e2.children) ? Math.max(t2, ni$1(M$1(0, e2.children, -1))) : t2;
}
function Ze$1(e2, t2, r2) {
  let n2 = e2.node;
  if (oe$1(n2)) {
    let i = ni$1(n2);
    return [H$1(n2, t2), L$1(N.trimEnd(t2.originalText.slice(K$1(n2) + (n2.prev && je$1(n2.prev) ? yt(n2).length : 0), i - (n2.next && W$1(n2.next) ? ue$1(n2, t2).length : 0)))), F(n2, t2)];
  }
  return r2();
}
function Lt(e2, t2) {
  return O$1(e2) && O$1(t2) ? e2.isTrailingSpaceSensitive ? e2.hasTrailingSpaces ? Ct$1(t2) ? C : S$1 : "" : Ct$1(t2) ? C : k$1 : je$1(e2) && (oe$1(t2) || t2.firstChild || t2.isSelfClosing || t2.kind === "element" && t2.attrs.length > 0) || e2.kind === "element" && e2.isSelfClosing && W$1(t2) ? "" : !t2.isLeadingSpaceSensitive || Ct$1(t2) || W$1(t2) && e2.lastChild && he$1(e2.lastChild) && e2.lastChild.lastChild && he$1(e2.lastChild.lastChild) ? C : t2.hasLeadingSpaces ? S$1 : k$1;
}
function Le$1(e2, t2, r2) {
  let { node: n2 } = e2;
  if (er$1(n2)) return [Y$1, ...e2.map(() => {
    let s2 = e2.node, a = s2.prev ? Lt(s2.prev, s2) : "";
    return [a ? [a, Ge$1(s2.prev) ? C : ""] : "", Ze$1(e2, t2, r2)];
  }, "children")];
  let i = n2.children.map(() => /* @__PURE__ */ Symbol(""));
  return e2.map(({ node: s2, index: a }) => {
    if (O$1(s2)) {
      if (s2.prev && O$1(s2.prev)) {
        let m = Lt(s2.prev, s2);
        if (m) return Ge$1(s2.prev) ? [C, C, Ze$1(e2, t2, r2)] : [m, Ze$1(e2, t2, r2)];
      }
      return Ze$1(e2, t2, r2);
    }
    let o2 = [], c2 = [], u = [], p = [], d = s2.prev ? Lt(s2.prev, s2) : "", g = s2.next ? Lt(s2, s2.next) : "";
    return d && (Ge$1(s2.prev) ? o2.push(C, C) : d === C ? o2.push(C) : O$1(s2.prev) ? c2.push(d) : c2.push(j$1("", k$1, { groupId: i[a - 1] }))), g && (Ge$1(s2) ? O$1(s2.next) && p.push(C, C) : g === C ? O$1(s2.next) && p.push(C) : u.push(g)), [...o2, E([...c2, E([Ze$1(e2, t2, r2), ...u], { id: i[a] })]), ...p];
  }, "children");
}
function ii$1(e2, t2, r2) {
  let { node: n2 } = e2, i = [];
  if (Na$1(e2) && i.push("} "), i.push("@", n2.name), ya$1(n2)) return i.push(";"), i;
  if (n2.parameters && i.push(" (", E(r2("parameters")), ")"), !Aa(n2)) {
    i.push(" {");
    let s2 = si$1(n2);
    n2.children.length > 0 ? (n2.firstChild.hasLeadingSpaces = true, n2.lastChild.hasTrailingSpaces = true, i.push(A([C, Le$1(e2, t2, r2)])), s2 && i.push(C, "}")) : s2 && i.push("}");
  }
  return E(i, { shouldBreak: true });
}
function si$1(e2) {
  return !(e2.next?.kind === "angularControlFlowBlock" && ri$1.get(e2.name)?.has(e2.next.name));
}
var xa$1 = (e2) => e2?.kind === "angularControlFlowBlock" && (e2.name === "case" || e2.name === "default"), ya$1 = (e2) => e2?.kind === "angularControlFlowBlock" && e2.name === "default never";
function Aa(e2) {
  return xa$1(e2) && e2.endSourceSpan && e2.endSourceSpan.start.offset === e2.endSourceSpan.end.offset;
}
function Na$1(e2) {
  let { previous: t2 } = e2;
  return t2?.kind === "angularControlFlowBlock" && !oe$1(t2) && !si$1(t2);
}
function ai$1(e2, t2, r2) {
  return [A([k$1, B$1([";", S$1], e2.map(r2, "children"))]), k$1];
}
function oi$1(e2, t2, r2) {
  let { node: n2 } = e2;
  return [me$1(n2, t2), E([n2.switchValue.trim(), ", ", n2.type, n2.cases.length > 0 ? [",", A([S$1, B$1(S$1, e2.map(r2, "cases"))])] : "", k$1]), ce$1(n2, t2)];
}
function li$1(e2, t2, r2) {
  let { node: n2 } = e2;
  return [n2.value, " {", E([A([k$1, e2.map(({ node: i, isLast: s2 }) => {
    let a = [r2()];
    return i.kind === "text" && (i.hasLeadingSpaces && a.unshift(S$1), i.hasTrailingSpaces && !s2 && a.push(S$1)), a;
  }, "expression")]), k$1]), "}"];
}
function ci$1(e2, t2, r2) {
  let { node: n2 } = e2;
  if (Et$1(n2, t2)) return [H$1(n2, t2), E(Ke(e2, t2, r2)), L$1(Nt(n2, t2)), ...Ye$1(n2, t2), F(n2, t2)];
  let i = n2.children.length === 1 && (n2.firstChild.kind === "interpolation" || n2.firstChild.kind === "angularIcuExpression") && n2.firstChild.isLeadingSpaceSensitive && !n2.firstChild.hasLeadingSpaces && n2.lastChild.isTrailingSpaceSensitive && !n2.lastChild.hasTrailingSpaces, s2 = /* @__PURE__ */ Symbol("element-attr-group-id"), a = (p) => E([E(Ke(e2, t2, r2), { id: s2 }), p, Ye$1(n2, t2)]), o2 = (p) => i ? Fr$1(p, { groupId: s2 }) : (q$1(n2, t2) || $e(n2, t2)) && n2.parent.kind === "root" && t2.parser === "vue" && !t2.vueIndentScriptAndStyle ? p : A(p), c2 = () => i ? j$1(k$1, "", { groupId: s2 }) : n2.firstChild.hasLeadingSpaces && n2.firstChild.isLeadingSpaceSensitive ? S$1 : n2.firstChild.kind === "text" && n2.isWhitespaceSensitive && n2.isIndentationSensitive ? qr$1(k$1) : k$1, u = () => (n2.next ? W$1(n2.next) : pe(n2.parent)) ? n2.lastChild.hasTrailingSpaces && n2.lastChild.isTrailingSpaceSensitive ? " " : "" : i ? j$1(k$1, "", { groupId: s2 }) : n2.lastChild.hasTrailingSpaces && n2.lastChild.isTrailingSpaceSensitive ? S$1 : (n2.lastChild.kind === "comment" || n2.lastChild.kind === "text" && n2.isWhitespaceSensitive && n2.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${t2.tabWidth * (e2.ancestors.length - 1)}}$`, "u").test(n2.lastChild.value) ? "" : k$1;
  return n2.children.length === 0 ? a(n2.hasDanglingSpaces && n2.isDanglingSpaceSensitive ? S$1 : "") : a([cn(n2) ? Y$1 : "", o2([c2(), Le$1(e2, t2, r2)]), u()]);
}
var R$1 = (function(e2) {
  return e2[e2.RAW_TEXT = 0] = "RAW_TEXT", e2[e2.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", e2[e2.PARSABLE_DATA = 2] = "PARSABLE_DATA", e2;
})({});
function et$1(e2, t2 = true) {
  if (e2[0] != ":") return [null, e2];
  let r2 = e2.indexOf(":", 1);
  if (r2 === -1) {
    if (t2) throw new Error(`Unsupported format "${e2}" expecting ":namespace:name"`);
    return [null, e2];
  }
  return [e2.slice(1, r2), e2.slice(r2 + 1)];
}
function or$1(e2) {
  return et$1(e2)[1] === "ng-container";
}
function lr$1(e2) {
  return et$1(e2)[1] === "ng-content";
}
function Pe$1(e2) {
  return e2 === null ? null : et$1(e2)[0];
}
function fe$1(e2, t2) {
  return e2 ? `:${e2}:${t2}` : t2;
}
var cr$1 = { name: "custom-elements" }, ur$1 = { name: "no-errors-schema" }, Z$1 = (function(e2) {
  return e2[e2.NONE = 0] = "NONE", e2[e2.HTML = 1] = "HTML", e2[e2.STYLE = 2] = "STYLE", e2[e2.SCRIPT = 3] = "SCRIPT", e2[e2.URL = 4] = "URL", e2[e2.RESOURCE_URL = 5] = "RESOURCE_URL", e2[e2.ATTRIBUTE_NO_BINDING = 6] = "ATTRIBUTE_NO_BINDING", e2;
})({});
var La$1 = /-+([a-z0-9])/g;
function ui$1(e2) {
  return e2.replace(La$1, (...t2) => t2[1].toUpperCase());
}
var Pt;
function pr$1() {
  return Pt || (Pt = {}, tt$1(Z$1.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), tt$1(Z$1.STYLE, ["*|style"]), tt$1(Z$1.URL, ["*|formAction", "area|href", "a|href", "a|xlink:href", "form|action", "annotation|href", "annotation|xlink:href", "annotation-xml|href", "annotation-xml|xlink:href", "maction|href", "maction|xlink:href", "malignmark|href", "malignmark|xlink:href", "math|href", "math|xlink:href", "mroot|href", "mroot|xlink:href", "msqrt|href", "msqrt|xlink:href", "merror|href", "merror|xlink:href", "mfrac|href", "mfrac|xlink:href", "mglyph|href", "mglyph|xlink:href", "msub|href", "msub|xlink:href", "msup|href", "msup|xlink:href", "msubsup|href", "msubsup|xlink:href", "mmultiscripts|href", "mmultiscripts|xlink:href", "mprescripts|href", "mprescripts|xlink:href", "mi|href", "mi|xlink:href", "mn|href", "mn|xlink:href", "mo|href", "mo|xlink:href", "mpadded|href", "mpadded|xlink:href", "mphantom|href", "mphantom|xlink:href", "mrow|href", "mrow|xlink:href", "ms|href", "ms|xlink:href", "mspace|href", "mspace|xlink:href", "mstyle|href", "mstyle|xlink:href", "mtable|href", "mtable|xlink:href", "mtd|href", "mtd|xlink:href", "mtr|href", "mtr|xlink:href", "mtext|href", "mtext|xlink:href", "mover|href", "mover|xlink:href", "munder|href", "munder|xlink:href", "munderover|href", "munderover|xlink:href", "semantics|href", "semantics|xlink:href", "none|href", "none|xlink:href", "img|src", "video|src"]), tt$1(Z$1.RESOURCE_URL, ["base|href", "embed|src", "frame|src", "iframe|src", "link|href", "object|codebase", "object|data", "script|src", "script|href", "script|xlink:href"]), tt$1(Z$1.ATTRIBUTE_NO_BINDING, ["animate|attributeName", "animate|values", "animate|to", "animate|from", "set|to", "set|attributeName", "animateMotion|attributeName", "animateTransform|attributeName", "unknown|attributeName", "unknown|values", "unknown|to", "unknown|from", "iframe|sandbox", "iframe|allow", "iframe|allowFullscreen", "iframe|referrerPolicy", "iframe|csp", "iframe|fetchPriority", "unknown|sandbox", "unknown|allow", "unknown|allowFullscreen", "unknown|referrerPolicy", "unknown|csp", "unknown|fetchPriority"])), Pt;
}
function tt$1(e2, t2) {
  for (let r2 of t2) Pt[r2.toLowerCase()] = e2;
}
var pi = class {
};
var Pa$1 = "boolean", Oa$1 = "number", Da$1 = "string", Ia$1 = "object", Ra$1 = ["[Element]|textContent,%ariaActiveDescendantElement,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColIndexText,%ariaColSpan,%ariaControlsElements,%ariaCurrent,%ariaDescribedByElements,%ariaDescription,%ariaDetailsElements,%ariaDisabled,%ariaErrorMessageElements,%ariaExpanded,%ariaFlowToElements,%ariaHasPopup,%ariaHidden,%ariaInvalid,%ariaKeyShortcuts,%ariaLabel,%ariaLabelledByElements,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaOwnsElements,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowIndexText,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,search,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "geolocation^[HTMLElement]|accuracymode,!autolocate,*location,*promptaction,*promptdismiss,*validationstatuschange,!watch", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "selectedcontent^[HTMLElement]|", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "search^[HTMLELement]|", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|", ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":math:math^:math:|", ":math:maction^:math:|", ":math:menclose^:math:|", ":math:merror^:math:|", ":math:mfenced^:math:|", ":math:mfrac^:math:|", ":math:mi^:math:|", ":math:mmultiscripts^:math:|", ":math:mn^:math:|", ":math:mo^:math:|", ":math:mover^:math:|", ":math:mpadded^:math:|", ":math:mphantom^:math:|", ":math:mroot^:math:|", ":math:mrow^:math:|", ":math:ms^:math:|", ":math:mspace^:math:|", ":math:msqrt^:math:|", ":math:mstyle^:math:|", ":math:msub^:math:|", ":math:msubsup^:math:|", ":math:msup^:math:|", ":math:mtable^:math:|", ":math:mtd^:math:|", ":math:mtext^:math:|", ":math:mtr^:math:|", ":math:munder^:math:|", ":math:munderover^:math:|", ":math:semantics^:math:|"], hi = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex", "aria-activedescendant": "ariaActiveDescendantElement", "aria-atomic": "ariaAtomic", "aria-autocomplete": "ariaAutoComplete", "aria-busy": "ariaBusy", "aria-checked": "ariaChecked", "aria-colcount": "ariaColCount", "aria-colindex": "ariaColIndex", "aria-colindextext": "ariaColIndexText", "aria-colspan": "ariaColSpan", "aria-controls": "ariaControlsElements", "aria-current": "ariaCurrent", "aria-describedby": "ariaDescribedByElements", "aria-description": "ariaDescription", "aria-details": "ariaDetailsElements", "aria-disabled": "ariaDisabled", "aria-errormessage": "ariaErrorMessageElements", "aria-expanded": "ariaExpanded", "aria-flowto": "ariaFlowToElements", "aria-haspopup": "ariaHasPopup", "aria-hidden": "ariaHidden", "aria-invalid": "ariaInvalid", "aria-keyshortcuts": "ariaKeyShortcuts", "aria-label": "ariaLabel", "aria-labelledby": "ariaLabelledByElements", "aria-level": "ariaLevel", "aria-live": "ariaLive", "aria-modal": "ariaModal", "aria-multiline": "ariaMultiLine", "aria-multiselectable": "ariaMultiSelectable", "aria-orientation": "ariaOrientation", "aria-owns": "ariaOwnsElements", "aria-placeholder": "ariaPlaceholder", "aria-posinset": "ariaPosInSet", "aria-pressed": "ariaPressed", "aria-readonly": "ariaReadOnly", "aria-required": "ariaRequired", "aria-roledescription": "ariaRoleDescription", "aria-rowcount": "ariaRowCount", "aria-rowindex": "ariaRowIndex", "aria-rowindextext": "ariaRowIndexText", "aria-rowspan": "ariaRowSpan", "aria-selected": "ariaSelected", "aria-setsize": "ariaSetSize", "aria-sort": "ariaSort", "aria-valuemax": "ariaValueMax", "aria-valuemin": "ariaValueMin", "aria-valuenow": "ariaValueNow", "aria-valuetext": "ariaValueText" })), Ma$1 = Array.from(hi).reduce((e2, [t2, r2]) => (e2.set(t2, r2), e2), /* @__PURE__ */ new Map()), mi = class extends pi {
  _schema = /* @__PURE__ */ new Map();
  _eventSchema = /* @__PURE__ */ new Map();
  constructor() {
    super(), Ra$1.forEach((e2) => {
      let t2 = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Set(), [n2, i] = e2.split("|"), s2 = i.split(","), [a, o2] = n2.split("^");
      a.split(",").forEach((u) => {
        this._schema.set(u.toLowerCase(), t2), this._eventSchema.set(u.toLowerCase(), r2);
      });
      let c2 = o2 && this._schema.get(o2.toLowerCase());
      if (c2) {
        for (let [u, p] of c2) t2.set(u, p);
        for (let u of this._eventSchema.get(o2.toLowerCase())) r2.add(u);
      }
      s2.forEach((u) => {
        if (u.length > 0) switch (u[0]) {
          case "*":
            r2.add(u.substring(1));
            break;
          case "!":
            t2.set(u.substring(1), Pa$1);
            break;
          case "#":
            t2.set(u.substring(1), Oa$1);
            break;
          case "%":
            t2.set(u.substring(1), Ia$1);
            break;
          default:
            t2.set(u, Da$1);
        }
      });
    });
  }
  hasProperty(e2, t2, r2) {
    if (r2.some((n2) => n2.name === ur$1.name)) return true;
    if (e2.indexOf("-") > -1) {
      if (or$1(e2) || lr$1(e2)) return false;
      if (r2.some((n2) => n2.name === cr$1.name)) return true;
    }
    return (this._schema.get(e2.toLowerCase()) || this._schema.get("unknown")).has(t2);
  }
  hasElement(e2, t2) {
    return t2.some((r2) => r2.name === ur$1.name) || e2.indexOf("-") > -1 && (or$1(e2) || lr$1(e2) || t2.some((r2) => r2.name === cr$1.name)) ? true : this._schema.has(e2.toLowerCase());
  }
  securityContext(e2, t2, r2) {
    r2 && (t2 = this.getMappedPropName(t2)), e2 = e2.toLowerCase(), t2 = t2.toLowerCase();
    let n2 = pr$1()[e2 + "|" + t2];
    return n2 || (n2 = pr$1()["*|" + t2], n2 || Z$1.NONE);
  }
  getMappedPropName(e2) {
    return hi.get(e2) ?? e2;
  }
  getDefaultComponentElementName() {
    return "ng-component";
  }
  validateProperty(e2) {
    return e2.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event property '${e2}' is disallowed for security reasons, please use (${e2.slice(2)})=...
If '${e2}' is a directive input, make sure the directive is imported by the current module.` } : { error: false };
  }
  validateAttribute(e2) {
    return e2.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event attribute '${e2}' is disallowed for security reasons, please use (${e2.slice(2)})=...` } : { error: false };
  }
  allKnownElementNames() {
    return Array.from(this._schema.keys());
  }
  allKnownAttributesOfElement(e2) {
    let t2 = this._schema.get(e2.toLowerCase()) || this._schema.get("unknown");
    return Array.from(t2.keys()).map((r2) => Ma$1.get(r2) ?? r2);
  }
  allKnownEventsOfElement(e2) {
    return Array.from(this._eventSchema.get(e2.toLowerCase()) ?? []);
  }
  normalizeAnimationStyleProperty(e2) {
    return ui$1(e2);
  }
  normalizeAnimationStyleValue(e2, t2, r2) {
    let n2 = "", i = r2.toString().trim(), s2 = null;
    if (Ba$1(e2) && r2 !== 0 && r2 !== "0") if (typeof r2 == "number") n2 = "px";
    else {
      let a = r2.match(/^[+-]?[\d\.]+([a-z]*)$/);
      a && a[1].length == 0 && (s2 = `Please provide a CSS unit value for ${t2}:${r2}`);
    }
    return { error: s2, value: i + n2 };
  }
};
function Ba$1(e2) {
  switch (e2) {
    case "width":
    case "height":
    case "minWidth":
    case "minHeight":
    case "maxWidth":
    case "maxHeight":
    case "left":
    case "top":
    case "bottom":
    case "right":
    case "fontSize":
    case "outlineWidth":
    case "outlineOffset":
    case "paddingTop":
    case "paddingLeft":
    case "paddingBottom":
    case "paddingRight":
    case "marginTop":
    case "marginLeft":
    case "marginBottom":
    case "marginRight":
    case "borderRadius":
    case "borderWidth":
    case "borderTopWidth":
    case "borderLeftWidth":
    case "borderRightWidth":
    case "borderBottomWidth":
    case "textIndent":
      return true;
    default:
      return false;
  }
}
var f = class {
  closedByChildren = {};
  contentType;
  closedByParent = false;
  implicitNamespacePrefix;
  isVoid;
  ignoreFirstLf;
  canSelfClose;
  preventNamespaceInheritance;
  constructor({ closedByChildren: e2, implicitNamespacePrefix: t2, contentType: r2 = R$1.PARSABLE_DATA, closedByParent: n2 = false, isVoid: i = false, ignoreFirstLf: s2 = false, preventNamespaceInheritance: a = false, canSelfClose: o2 = false } = {}) {
    e2 && e2.length > 0 && e2.forEach((c2) => this.closedByChildren[c2] = true), this.isVoid = i, this.closedByParent = n2 || i, this.implicitNamespacePrefix = t2 || null, this.contentType = r2, this.ignoreFirstLf = s2, this.preventNamespaceInheritance = a, this.canSelfClose = o2 ?? i;
  }
  isClosedByChild(e2) {
    return this.isVoid || e2.toLowerCase() in this.closedByChildren;
  }
  getContentType(e2) {
    return typeof this.contentType == "object" ? (e2 === void 0 ? void 0 : this.contentType[e2]) ?? this.contentType.default : this.contentType;
  }
}, fi$1, rt$1;
function Oe$1(e2) {
  return rt$1 || (fi$1 = new f({ canSelfClose: true }), rt$1 = Object.assign(/* @__PURE__ */ Object.create(null), { base: new f({ isVoid: true }), meta: new f({ isVoid: true }), area: new f({ isVoid: true }), embed: new f({ isVoid: true }), link: new f({ isVoid: true }), img: new f({ isVoid: true }), input: new f({ isVoid: true }), param: new f({ isVoid: true }), hr: new f({ isVoid: true }), br: new f({ isVoid: true }), source: new f({ isVoid: true }), track: new f({ isVoid: true }), wbr: new f({ isVoid: true }), p: new f({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new f({ closedByChildren: ["tbody", "tfoot"] }), tbody: new f({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new f({ closedByChildren: ["tbody"], closedByParent: true }), tr: new f({ closedByChildren: ["tr"], closedByParent: true }), td: new f({ closedByChildren: ["td", "th"], closedByParent: true }), th: new f({ closedByChildren: ["td", "th"], closedByParent: true }), col: new f({ isVoid: true }), svg: new f({ implicitNamespacePrefix: "svg" }), foreignObject: new f({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: true }), math: new f({ implicitNamespacePrefix: "math" }), li: new f({ closedByChildren: ["li"], closedByParent: true }), dt: new f({ closedByChildren: ["dt", "dd"] }), dd: new f({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new f({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new f({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new f({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new f({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new f({ closedByChildren: ["optgroup"], closedByParent: true }), option: new f({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new f({ ignoreFirstLf: true }), listing: new f({ ignoreFirstLf: true }), style: new f({ contentType: R$1.RAW_TEXT }), script: new f({ contentType: R$1.RAW_TEXT }), title: new f({ contentType: { default: R$1.ESCAPABLE_RAW_TEXT, svg: R$1.PARSABLE_DATA } }), textarea: new f({ contentType: R$1.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), new mi().allKnownElementNames().forEach((t2) => {
    !rt$1[t2] && Pe$1(t2) === null && (rt$1[t2] = new f({ canSelfClose: false }));
  })), rt$1[e2] ?? fi$1;
}
var De$1 = class gi {
  constructor(t2, r2, n2, i) {
    this.file = t2, this.offset = r2, this.line = n2, this.col = i;
  }
  toString() {
    return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
  }
  moveBy(t2) {
    let r2 = this.file.content, n2 = r2.length, i = this.offset, s2 = this.line, a = this.col;
    for (; i > 0 && t2 < 0; ) if (i--, t2++, r2.charCodeAt(i) == 10) {
      s2--;
      let o2 = r2.substring(0, i - 1).lastIndexOf(`
`);
      a = o2 > 0 ? i - o2 : i;
    } else a--;
    for (; i < n2 && t2 > 0; ) {
      let o2 = r2.charCodeAt(i);
      i++, t2--, o2 == 10 ? (s2++, a = 0) : a++;
    }
    return new gi(this.file, i, s2, a);
  }
  getContext(t2, r2) {
    let n2 = this.file.content, i = this.offset;
    if (i != null) {
      i > n2.length - 1 && (i = n2.length - 1);
      let s2 = i, a = 0, o2 = 0;
      for (; a < t2 && i > 0 && (i--, a++, !(n2[i] == `
` && ++o2 == r2)); ) ;
      for (a = 0, o2 = 0; a < t2 && s2 < n2.length - 1 && (s2++, a++, !(n2[s2] == `
` && ++o2 == r2)); ) ;
      return { before: n2.substring(i, this.offset), after: n2.substring(this.offset, s2 + 1) };
    }
    return null;
  }
}, nt$1 = class nt {
  constructor(e2, t2) {
    this.content = e2, this.url = t2;
  }
}, h = class {
  constructor(e2, t2, r2 = e2, n2 = null) {
    this.start = e2, this.end = t2, this.fullStart = r2, this.details = n2;
  }
  toString() {
    return this.start.file.content.substring(this.start.offset, this.end.offset);
  }
}, di = (function(e2) {
  return e2[e2.WARNING = 0] = "WARNING", e2[e2.ERROR = 1] = "ERROR", e2;
})({}), ee$1 = class ee extends Error {
  constructor(e2, t2, r2 = di.ERROR, n2) {
    super(t2), this.span = e2, this.msg = t2, this.level = r2, this.relatedError = n2, Object.setPrototypeOf(this, new.target.prototype);
  }
  contextualMessage() {
    let e2 = this.span.start.getContext(100, 3);
    return e2 ? `${this.msg} ("${e2.before}[${di[this.level]} ->]${e2.after}")` : this.msg;
  }
  toString() {
    let e2 = this.span.details ? `, ${this.span.details}` : "";
    return `${this.contextualMessage()}: ${this.span.start}${e2}`;
  }
};
var de$1 = class de {
  constructor(e2, t2) {
    this.sourceSpan = e2, this.i18n = t2;
  }
}, _i = class extends de$1 {
  constructor(e2, t2, r2, n2) {
    super(t2, n2), this.value = e2, this.tokens = r2;
  }
  visit(e2, t2) {
    return e2.visitText(this, t2);
  }
  kind = "text";
}, Si = class extends de$1 {
  constructor(e2, t2, r2, n2) {
    super(t2, n2), this.value = e2, this.tokens = r2;
  }
  visit(e2, t2) {
    return e2.visitCdata(this, t2);
  }
  kind = "cdata";
}, Ei = class extends de$1 {
  constructor(e2, t2, r2, n2, i, s2) {
    super(n2, s2), this.switchValue = e2, this.type = t2, this.cases = r2, this.switchValueSourceSpan = i;
  }
  visit(e2, t2) {
    return e2.visitExpansion(this, t2);
  }
  kind = "expansion";
}, Ci = class {
  constructor(e2, t2, r2, n2, i) {
    this.value = e2, this.expression = t2, this.sourceSpan = r2, this.valueSourceSpan = n2, this.expSourceSpan = i;
  }
  visit(e2, t2) {
    return e2.visitExpansionCase(this, t2);
  }
  kind = "expansionCase";
}, vi = class extends de$1 {
  constructor(e2, t2, r2, n2, i, s2, a) {
    super(r2, a), this.name = e2, this.value = t2, this.keySpan = n2, this.valueSpan = i, this.valueTokens = s2;
  }
  visit(e2, t2) {
    return e2.visitAttribute(this, t2);
  }
  kind = "attribute";
  get nameSpan() {
    return this.keySpan;
  }
}, te$1 = class te extends de$1 {
  constructor(e2, t2, r2, n2, i, s2, a, o2 = null, c2 = null, u, p) {
    super(s2, p), this.name = e2, this.attrs = t2, this.directives = r2, this.children = n2, this.isSelfClosing = i, this.startSourceSpan = a, this.endSourceSpan = o2, this.nameSpan = c2, this.isVoid = u;
  }
  visit(e2, t2) {
    return e2.visitElement(this, t2);
  }
  kind = "element";
}, Ti = class {
  constructor(e2, t2) {
    this.value = e2, this.sourceSpan = t2;
  }
  visit(e2, t2) {
    return e2.visitComment(this, t2);
  }
  kind = "comment";
}, bi = class {
  constructor(e2, t2) {
    this.value = e2, this.sourceSpan = t2;
  }
  visit(e2, t2) {
    return e2.visitDocType(this, t2);
  }
  kind = "docType";
}, ge$1 = class ge extends de$1 {
  constructor(e2, t2, r2, n2, i, s2, a = null, o2) {
    super(n2, o2), this.name = e2, this.parameters = t2, this.children = r2, this.nameSpan = i, this.startSourceSpan = s2, this.endSourceSpan = a;
  }
  visit(e2, t2) {
    return e2.visitBlock(this, t2);
  }
  kind = "block";
}, G$1 = class G extends de$1 {
  constructor(e2, t2, r2, n2, i, s2, a, o2, c2, u = null, p) {
    super(o2, p), this.componentName = e2, this.tagName = t2, this.fullName = r2, this.attrs = n2, this.directives = i, this.children = s2, this.isSelfClosing = a, this.startSourceSpan = c2, this.endSourceSpan = u;
  }
  visit(e2, t2) {
    return e2.visitComponent(this, t2);
  }
  kind = "component";
}, wi = class {
  constructor(e2, t2, r2, n2, i = null) {
    this.name = e2, this.attrs = t2, this.sourceSpan = r2, this.startSourceSpan = n2, this.endSourceSpan = i;
  }
  visit(e2, t2) {
    return e2.visitDirective(this, t2);
  }
  kind = "directive";
}, hr$1 = class hr {
  constructor(e2, t2) {
    this.expression = e2, this.sourceSpan = t2;
  }
  visit(e2, t2) {
    return e2.visitBlockParameter(this, t2);
  }
  kind = "blockParameter";
  startSourceSpan = null;
  endSourceSpan = null;
}, mr$1 = class mr {
  constructor(e2, t2, r2, n2, i) {
    this.name = e2, this.value = t2, this.sourceSpan = r2, this.nameSpan = n2, this.valueSpan = i;
  }
  visit(e2, t2) {
    return e2.visitLetDeclaration(this, t2);
  }
  kind = "letDeclaration";
  startSourceSpan = null;
  endSourceSpan = null;
};
function Ot(e2, t2, r2 = null) {
  let n2 = [], i = e2.visit ? (s2) => e2.visit(s2, r2) || s2.visit(e2, r2) : (s2) => s2.visit(e2, r2);
  return t2.forEach((s2) => {
    let a = i(s2);
    a && n2.push(a);
  }), n2;
}
var fr$1 = class fr {
  constructor() {
  }
  visitElement(e2, t2) {
    this.visitChildren(t2, (r2) => {
      r2(e2.attrs), r2(e2.directives), r2(e2.children);
    });
  }
  visitAttribute(e2, t2) {
  }
  visitText(e2, t2) {
  }
  visitCdata(e2, t2) {
  }
  visitComment(e2, t2) {
  }
  visitDocType(e2, t2) {
  }
  visitExpansion(e2, t2) {
    return this.visitChildren(t2, (r2) => {
      r2(e2.cases);
    });
  }
  visitExpansionCase(e2, t2) {
  }
  visitBlock(e2, t2) {
    this.visitChildren(t2, (r2) => {
      r2(e2.parameters), r2(e2.children);
    });
  }
  visitBlockParameter(e2, t2) {
  }
  visitLetDeclaration(e2, t2) {
  }
  visitComponent(e2, t2) {
    this.visitChildren(t2, (r2) => {
      r2(e2.attrs), r2(e2.children);
    });
  }
  visitDirective(e2, t2) {
    this.visitChildren(t2, (r2) => {
      r2(e2.attrs);
    });
  }
  visitChildren(e2, t2) {
    let r2 = [], n2 = this;
    function i(s2) {
      s2 && r2.push(Ot(n2, s2, e2));
    }
    return t2(i), Array.prototype.concat.apply([], r2);
  }
};
var _e$1 = { AElig: "Æ", AMP: "&", amp: "&", Aacute: "Á", Abreve: "Ă", Acirc: "Â", Acy: "А", Afr: "𝔄", Agrave: "À", Alpha: "Α", Amacr: "Ā", And: "⩓", Aogon: "Ą", Aopf: "𝔸", ApplyFunction: "⁡", af: "⁡", Aring: "Å", angst: "Å", Ascr: "𝒜", Assign: "≔", colone: "≔", coloneq: "≔", Atilde: "Ã", Auml: "Ä", Backslash: "∖", setminus: "∖", setmn: "∖", smallsetminus: "∖", ssetmn: "∖", Barv: "⫧", Barwed: "⌆", doublebarwedge: "⌆", Bcy: "Б", Because: "∵", becaus: "∵", because: "∵", Bernoullis: "ℬ", Bscr: "ℬ", bernou: "ℬ", Beta: "Β", Bfr: "𝔅", Bopf: "𝔹", Breve: "˘", breve: "˘", Bumpeq: "≎", HumpDownHump: "≎", bump: "≎", CHcy: "Ч", COPY: "©", copy: "©", Cacute: "Ć", Cap: "⋒", CapitalDifferentialD: "ⅅ", DD: "ⅅ", Cayleys: "ℭ", Cfr: "ℭ", Ccaron: "Č", Ccedil: "Ç", Ccirc: "Ĉ", Cconint: "∰", Cdot: "Ċ", Cedilla: "¸", cedil: "¸", CenterDot: "·", centerdot: "·", middot: "·", Chi: "Χ", CircleDot: "⊙", odot: "⊙", CircleMinus: "⊖", ominus: "⊖", CirclePlus: "⊕", oplus: "⊕", CircleTimes: "⊗", otimes: "⊗", ClockwiseContourIntegral: "∲", cwconint: "∲", CloseCurlyDoubleQuote: "”", rdquo: "”", rdquor: "”", CloseCurlyQuote: "’", rsquo: "’", rsquor: "’", Colon: "∷", Proportion: "∷", Colone: "⩴", Congruent: "≡", equiv: "≡", Conint: "∯", DoubleContourIntegral: "∯", ContourIntegral: "∮", conint: "∮", oint: "∮", Copf: "ℂ", complexes: "ℂ", Coproduct: "∐", coprod: "∐", CounterClockwiseContourIntegral: "∳", awconint: "∳", Cross: "⨯", Cscr: "𝒞", Cup: "⋓", CupCap: "≍", asympeq: "≍", DDotrahd: "⤑", DJcy: "Ђ", DScy: "Ѕ", DZcy: "Џ", Dagger: "‡", ddagger: "‡", Darr: "↡", Dashv: "⫤", DoubleLeftTee: "⫤", Dcaron: "Ď", Dcy: "Д", Del: "∇", nabla: "∇", Delta: "Δ", Dfr: "𝔇", DiacriticalAcute: "´", acute: "´", DiacriticalDot: "˙", dot: "˙", DiacriticalDoubleAcute: "˝", dblac: "˝", DiacriticalGrave: "`", grave: "`", DiacriticalTilde: "˜", tilde: "˜", Diamond: "⋄", diam: "⋄", diamond: "⋄", DifferentialD: "ⅆ", dd: "ⅆ", Dopf: "𝔻", Dot: "¨", DoubleDot: "¨", die: "¨", uml: "¨", DotDot: "⃜", DotEqual: "≐", doteq: "≐", esdot: "≐", DoubleDownArrow: "⇓", Downarrow: "⇓", dArr: "⇓", DoubleLeftArrow: "⇐", Leftarrow: "⇐", lArr: "⇐", DoubleLeftRightArrow: "⇔", Leftrightarrow: "⇔", hArr: "⇔", iff: "⇔", DoubleLongLeftArrow: "⟸", Longleftarrow: "⟸", xlArr: "⟸", DoubleLongLeftRightArrow: "⟺", Longleftrightarrow: "⟺", xhArr: "⟺", DoubleLongRightArrow: "⟹", Longrightarrow: "⟹", xrArr: "⟹", DoubleRightArrow: "⇒", Implies: "⇒", Rightarrow: "⇒", rArr: "⇒", DoubleRightTee: "⊨", vDash: "⊨", DoubleUpArrow: "⇑", Uparrow: "⇑", uArr: "⇑", DoubleUpDownArrow: "⇕", Updownarrow: "⇕", vArr: "⇕", DoubleVerticalBar: "∥", par: "∥", parallel: "∥", shortparallel: "∥", spar: "∥", DownArrow: "↓", ShortDownArrow: "↓", darr: "↓", downarrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", duarr: "⇵", DownBreve: "̑", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", leftharpoondown: "↽", lhard: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", rhard: "⇁", rightharpoondown: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", top: "⊤", DownTeeArrow: "↧", mapstodown: "↧", Dscr: "𝒟", Dstrok: "Đ", ENG: "Ŋ", ETH: "Ð", Eacute: "É", Ecaron: "Ě", Ecirc: "Ê", Ecy: "Э", Edot: "Ė", Efr: "𝔈", Egrave: "È", Element: "∈", in: "∈", isin: "∈", isinv: "∈", Emacr: "Ē", EmptySmallSquare: "◻", EmptyVerySmallSquare: "▫", Eogon: "Ę", Eopf: "𝔼", Epsilon: "Ε", Equal: "⩵", EqualTilde: "≂", eqsim: "≂", esim: "≂", Equilibrium: "⇌", rightleftharpoons: "⇌", rlhar: "⇌", Escr: "ℰ", expectation: "ℰ", Esim: "⩳", Eta: "Η", Euml: "Ë", Exists: "∃", exist: "∃", ExponentialE: "ⅇ", ee: "ⅇ", exponentiale: "ⅇ", Fcy: "Ф", Ffr: "𝔉", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", blacksquare: "▪", squarf: "▪", squf: "▪", Fopf: "𝔽", ForAll: "∀", forall: "∀", Fouriertrf: "ℱ", Fscr: "ℱ", GJcy: "Ѓ", GT: ">", gt: ">", Gamma: "Γ", Gammad: "Ϝ", Gbreve: "Ğ", Gcedil: "Ģ", Gcirc: "Ĝ", Gcy: "Г", Gdot: "Ġ", Gfr: "𝔊", Gg: "⋙", ggg: "⋙", Gopf: "𝔾", GreaterEqual: "≥", ge: "≥", geq: "≥", GreaterEqualLess: "⋛", gel: "⋛", gtreqless: "⋛", GreaterFullEqual: "≧", gE: "≧", geqq: "≧", GreaterGreater: "⪢", GreaterLess: "≷", gl: "≷", gtrless: "≷", GreaterSlantEqual: "⩾", geqslant: "⩾", ges: "⩾", GreaterTilde: "≳", gsim: "≳", gtrsim: "≳", Gscr: "𝒢", Gt: "≫", NestedGreaterGreater: "≫", gg: "≫", HARDcy: "Ъ", Hacek: "ˇ", caron: "ˇ", Hat: "^", Hcirc: "Ĥ", Hfr: "ℌ", Poincareplane: "ℌ", HilbertSpace: "ℋ", Hscr: "ℋ", hamilt: "ℋ", Hopf: "ℍ", quaternions: "ℍ", HorizontalLine: "─", boxh: "─", Hstrok: "Ħ", HumpEqual: "≏", bumpe: "≏", bumpeq: "≏", IEcy: "Е", IJlig: "Ĳ", IOcy: "Ё", Iacute: "Í", Icirc: "Î", Icy: "И", Idot: "İ", Ifr: "ℑ", Im: "ℑ", image: "ℑ", imagpart: "ℑ", Igrave: "Ì", Imacr: "Ī", ImaginaryI: "ⅈ", ii: "ⅈ", Int: "∬", Integral: "∫", int: "∫", Intersection: "⋂", bigcap: "⋂", xcap: "⋂", InvisibleComma: "⁣", ic: "⁣", InvisibleTimes: "⁢", it: "⁢", Iogon: "Į", Iopf: "𝕀", Iota: "Ι", Iscr: "ℐ", imagline: "ℐ", Itilde: "Ĩ", Iukcy: "І", Iuml: "Ï", Jcirc: "Ĵ", Jcy: "Й", Jfr: "𝔍", Jopf: "𝕁", Jscr: "𝒥", Jsercy: "Ј", Jukcy: "Є", KHcy: "Х", KJcy: "Ќ", Kappa: "Κ", Kcedil: "Ķ", Kcy: "К", Kfr: "𝔎", Kopf: "𝕂", Kscr: "𝒦", LJcy: "Љ", LT: "<", lt: "<", Lacute: "Ĺ", Lambda: "Λ", Lang: "⟪", Laplacetrf: "ℒ", Lscr: "ℒ", lagran: "ℒ", Larr: "↞", twoheadleftarrow: "↞", Lcaron: "Ľ", Lcedil: "Ļ", Lcy: "Л", LeftAngleBracket: "⟨", lang: "⟨", langle: "⟨", LeftArrow: "←", ShortLeftArrow: "←", larr: "←", leftarrow: "←", slarr: "←", LeftArrowBar: "⇤", larrb: "⇤", LeftArrowRightArrow: "⇆", leftrightarrows: "⇆", lrarr: "⇆", LeftCeiling: "⌈", lceil: "⌈", LeftDoubleBracket: "⟦", lobrk: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", dharl: "⇃", downharpoonleft: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", lfloor: "⌊", LeftRightArrow: "↔", harr: "↔", leftrightarrow: "↔", LeftRightVector: "⥎", LeftTee: "⊣", dashv: "⊣", LeftTeeArrow: "↤", mapstoleft: "↤", LeftTeeVector: "⥚", LeftTriangle: "⊲", vartriangleleft: "⊲", vltri: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", ltrie: "⊴", trianglelefteq: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", uharl: "↿", upharpoonleft: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", leftharpoonup: "↼", lharu: "↼", LeftVectorBar: "⥒", LessEqualGreater: "⋚", leg: "⋚", lesseqgtr: "⋚", LessFullEqual: "≦", lE: "≦", leqq: "≦", LessGreater: "≶", lessgtr: "≶", lg: "≶", LessLess: "⪡", LessSlantEqual: "⩽", leqslant: "⩽", les: "⩽", LessTilde: "≲", lesssim: "≲", lsim: "≲", Lfr: "𝔏", Ll: "⋘", Lleftarrow: "⇚", lAarr: "⇚", Lmidot: "Ŀ", LongLeftArrow: "⟵", longleftarrow: "⟵", xlarr: "⟵", LongLeftRightArrow: "⟷", longleftrightarrow: "⟷", xharr: "⟷", LongRightArrow: "⟶", longrightarrow: "⟶", xrarr: "⟶", Lopf: "𝕃", LowerLeftArrow: "↙", swarr: "↙", swarrow: "↙", LowerRightArrow: "↘", searr: "↘", searrow: "↘", Lsh: "↰", lsh: "↰", Lstrok: "Ł", Lt: "≪", NestedLessLess: "≪", ll: "≪", Map: "⤅", Mcy: "М", MediumSpace: " ", Mellintrf: "ℳ", Mscr: "ℳ", phmmat: "ℳ", Mfr: "𝔐", MinusPlus: "∓", mnplus: "∓", mp: "∓", Mopf: "𝕄", Mu: "Μ", NJcy: "Њ", Nacute: "Ń", Ncaron: "Ň", Ncedil: "Ņ", Ncy: "Н", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", ZeroWidthSpace: "​", NewLine: `
`, Nfr: "𝔑", NoBreak: "⁠", NonBreakingSpace: " ", nbsp: " ", Nopf: "ℕ", naturals: "ℕ", Not: "⫬", NotCongruent: "≢", nequiv: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", npar: "∦", nparallel: "∦", nshortparallel: "∦", nspar: "∦", NotElement: "∉", notin: "∉", notinva: "∉", NotEqual: "≠", ne: "≠", NotEqualTilde: "≂̸", nesim: "≂̸", NotExists: "∄", nexist: "∄", nexists: "∄", NotGreater: "≯", ngt: "≯", ngtr: "≯", NotGreaterEqual: "≱", nge: "≱", ngeq: "≱", NotGreaterFullEqual: "≧̸", ngE: "≧̸", ngeqq: "≧̸", NotGreaterGreater: "≫̸", nGtv: "≫̸", NotGreaterLess: "≹", ntgl: "≹", NotGreaterSlantEqual: "⩾̸", ngeqslant: "⩾̸", nges: "⩾̸", NotGreaterTilde: "≵", ngsim: "≵", NotHumpDownHump: "≎̸", nbump: "≎̸", NotHumpEqual: "≏̸", nbumpe: "≏̸", NotLeftTriangle: "⋪", nltri: "⋪", ntriangleleft: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", nltrie: "⋬", ntrianglelefteq: "⋬", NotLess: "≮", nless: "≮", nlt: "≮", NotLessEqual: "≰", nle: "≰", nleq: "≰", NotLessGreater: "≸", ntlg: "≸", NotLessLess: "≪̸", nLtv: "≪̸", NotLessSlantEqual: "⩽̸", nleqslant: "⩽̸", nles: "⩽̸", NotLessTilde: "≴", nlsim: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", NotPrecedes: "⊀", npr: "⊀", nprec: "⊀", NotPrecedesEqual: "⪯̸", npre: "⪯̸", npreceq: "⪯̸", NotPrecedesSlantEqual: "⋠", nprcue: "⋠", NotReverseElement: "∌", notni: "∌", notniva: "∌", NotRightTriangle: "⋫", nrtri: "⋫", ntriangleright: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", nrtrie: "⋭", ntrianglerighteq: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", nsqsube: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", nsqsupe: "⋣", NotSubset: "⊂⃒", nsubset: "⊂⃒", vnsub: "⊂⃒", NotSubsetEqual: "⊈", nsube: "⊈", nsubseteq: "⊈", NotSucceeds: "⊁", nsc: "⊁", nsucc: "⊁", NotSucceedsEqual: "⪰̸", nsce: "⪰̸", nsucceq: "⪰̸", NotSucceedsSlantEqual: "⋡", nsccue: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", nsupset: "⊃⃒", vnsup: "⊃⃒", NotSupersetEqual: "⊉", nsupe: "⊉", nsupseteq: "⊉", NotTilde: "≁", nsim: "≁", NotTildeEqual: "≄", nsime: "≄", nsimeq: "≄", NotTildeFullEqual: "≇", ncong: "≇", NotTildeTilde: "≉", nap: "≉", napprox: "≉", NotVerticalBar: "∤", nmid: "∤", nshortmid: "∤", nsmid: "∤", Nscr: "𝒩", Ntilde: "Ñ", Nu: "Ν", OElig: "Œ", Oacute: "Ó", Ocirc: "Ô", Ocy: "О", Odblac: "Ő", Ofr: "𝔒", Ograve: "Ò", Omacr: "Ō", Omega: "Ω", ohm: "Ω", Omicron: "Ο", Oopf: "𝕆", OpenCurlyDoubleQuote: "“", ldquo: "“", OpenCurlyQuote: "‘", lsquo: "‘", Or: "⩔", Oscr: "𝒪", Oslash: "Ø", Otilde: "Õ", Otimes: "⨷", Ouml: "Ö", OverBar: "‾", oline: "‾", OverBrace: "⏞", OverBracket: "⎴", tbrk: "⎴", OverParenthesis: "⏜", PartialD: "∂", part: "∂", Pcy: "П", Pfr: "𝔓", Phi: "Φ", Pi: "Π", PlusMinus: "±", plusmn: "±", pm: "±", Popf: "ℙ", primes: "ℙ", Pr: "⪻", Precedes: "≺", pr: "≺", prec: "≺", PrecedesEqual: "⪯", pre: "⪯", preceq: "⪯", PrecedesSlantEqual: "≼", prcue: "≼", preccurlyeq: "≼", PrecedesTilde: "≾", precsim: "≾", prsim: "≾", Prime: "″", Product: "∏", prod: "∏", Proportional: "∝", prop: "∝", propto: "∝", varpropto: "∝", vprop: "∝", Pscr: "𝒫", Psi: "Ψ", QUOT: '"', quot: '"', Qfr: "𝔔", Qopf: "ℚ", rationals: "ℚ", Qscr: "𝒬", RBarr: "⤐", drbkarow: "⤐", REG: "®", circledR: "®", reg: "®", Racute: "Ŕ", Rang: "⟫", Rarr: "↠", twoheadrightarrow: "↠", Rarrtl: "⤖", Rcaron: "Ř", Rcedil: "Ŗ", Rcy: "Р", Re: "ℜ", Rfr: "ℜ", real: "ℜ", realpart: "ℜ", ReverseElement: "∋", SuchThat: "∋", ni: "∋", niv: "∋", ReverseEquilibrium: "⇋", leftrightharpoons: "⇋", lrhar: "⇋", ReverseUpEquilibrium: "⥯", duhar: "⥯", Rho: "Ρ", RightAngleBracket: "⟩", rang: "⟩", rangle: "⟩", RightArrow: "→", ShortRightArrow: "→", rarr: "→", rightarrow: "→", srarr: "→", RightArrowBar: "⇥", rarrb: "⇥", RightArrowLeftArrow: "⇄", rightleftarrows: "⇄", rlarr: "⇄", RightCeiling: "⌉", rceil: "⌉", RightDoubleBracket: "⟧", robrk: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", dharr: "⇂", downharpoonright: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rfloor: "⌋", RightTee: "⊢", vdash: "⊢", RightTeeArrow: "↦", map: "↦", mapsto: "↦", RightTeeVector: "⥛", RightTriangle: "⊳", vartriangleright: "⊳", vrtri: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", rtrie: "⊵", trianglerighteq: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", uharr: "↾", upharpoonright: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", rharu: "⇀", rightharpoonup: "⇀", RightVectorBar: "⥓", Ropf: "ℝ", reals: "ℝ", RoundImplies: "⥰", Rrightarrow: "⇛", rAarr: "⇛", Rscr: "ℛ", realine: "ℛ", Rsh: "↱", rsh: "↱", RuleDelayed: "⧴", SHCHcy: "Щ", SHcy: "Ш", SOFTcy: "Ь", Sacute: "Ś", Sc: "⪼", Scaron: "Š", Scedil: "Ş", Scirc: "Ŝ", Scy: "С", Sfr: "𝔖", ShortUpArrow: "↑", UpArrow: "↑", uarr: "↑", uparrow: "↑", Sigma: "Σ", SmallCircle: "∘", compfn: "∘", Sopf: "𝕊", Sqrt: "√", radic: "√", Square: "□", squ: "□", square: "□", SquareIntersection: "⊓", sqcap: "⊓", SquareSubset: "⊏", sqsub: "⊏", sqsubset: "⊏", SquareSubsetEqual: "⊑", sqsube: "⊑", sqsubseteq: "⊑", SquareSuperset: "⊐", sqsup: "⊐", sqsupset: "⊐", SquareSupersetEqual: "⊒", sqsupe: "⊒", sqsupseteq: "⊒", SquareUnion: "⊔", sqcup: "⊔", Sscr: "𝒮", Star: "⋆", sstarf: "⋆", Sub: "⋐", Subset: "⋐", SubsetEqual: "⊆", sube: "⊆", subseteq: "⊆", Succeeds: "≻", sc: "≻", succ: "≻", SucceedsEqual: "⪰", sce: "⪰", succeq: "⪰", SucceedsSlantEqual: "≽", sccue: "≽", succcurlyeq: "≽", SucceedsTilde: "≿", scsim: "≿", succsim: "≿", Sum: "∑", sum: "∑", Sup: "⋑", Supset: "⋑", Superset: "⊃", sup: "⊃", supset: "⊃", SupersetEqual: "⊇", supe: "⊇", supseteq: "⊇", THORN: "Þ", TRADE: "™", trade: "™", TSHcy: "Ћ", TScy: "Ц", Tab: "	", Tau: "Τ", Tcaron: "Ť", Tcedil: "Ţ", Tcy: "Т", Tfr: "𝔗", Therefore: "∴", there4: "∴", therefore: "∴", Theta: "Θ", ThickSpace: "  ", ThinSpace: " ", thinsp: " ", Tilde: "∼", sim: "∼", thicksim: "∼", thksim: "∼", TildeEqual: "≃", sime: "≃", simeq: "≃", TildeFullEqual: "≅", cong: "≅", TildeTilde: "≈", ap: "≈", approx: "≈", asymp: "≈", thickapprox: "≈", thkap: "≈", Topf: "𝕋", TripleDot: "⃛", tdot: "⃛", Tscr: "𝒯", Tstrok: "Ŧ", Uacute: "Ú", Uarr: "↟", Uarrocir: "⥉", Ubrcy: "Ў", Ubreve: "Ŭ", Ucirc: "Û", Ucy: "У", Udblac: "Ű", Ufr: "𝔘", Ugrave: "Ù", Umacr: "Ū", UnderBar: "_", lowbar: "_", UnderBrace: "⏟", UnderBracket: "⎵", bbrk: "⎵", UnderParenthesis: "⏝", Union: "⋃", bigcup: "⋃", xcup: "⋃", UnionPlus: "⊎", uplus: "⊎", Uogon: "Ų", Uopf: "𝕌", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", udarr: "⇅", UpDownArrow: "↕", updownarrow: "↕", varr: "↕", UpEquilibrium: "⥮", udhar: "⥮", UpTee: "⊥", bot: "⊥", bottom: "⊥", perp: "⊥", UpTeeArrow: "↥", mapstoup: "↥", UpperLeftArrow: "↖", nwarr: "↖", nwarrow: "↖", UpperRightArrow: "↗", nearr: "↗", nearrow: "↗", Upsi: "ϒ", upsih: "ϒ", Upsilon: "Υ", Uring: "Ů", Uscr: "𝒰", Utilde: "Ũ", Uuml: "Ü", VDash: "⊫", Vbar: "⫫", Vcy: "В", Vdash: "⊩", Vdashl: "⫦", Vee: "⋁", bigvee: "⋁", xvee: "⋁", Verbar: "‖", Vert: "‖", VerticalBar: "∣", mid: "∣", shortmid: "∣", smid: "∣", VerticalLine: "|", verbar: "|", vert: "|", VerticalSeparator: "❘", VerticalTilde: "≀", wr: "≀", wreath: "≀", VeryThinSpace: " ", hairsp: " ", Vfr: "𝔙", Vopf: "𝕍", Vscr: "𝒱", Vvdash: "⊪", Wcirc: "Ŵ", Wedge: "⋀", bigwedge: "⋀", xwedge: "⋀", Wfr: "𝔚", Wopf: "𝕎", Wscr: "𝒲", Xfr: "𝔛", Xi: "Ξ", Xopf: "𝕏", Xscr: "𝒳", YAcy: "Я", YIcy: "Ї", YUcy: "Ю", Yacute: "Ý", Ycirc: "Ŷ", Ycy: "Ы", Yfr: "𝔜", Yopf: "𝕐", Yscr: "𝒴", Yuml: "Ÿ", ZHcy: "Ж", Zacute: "Ź", Zcaron: "Ž", Zcy: "З", Zdot: "Ż", Zeta: "Ζ", Zfr: "ℨ", zeetrf: "ℨ", Zopf: "ℤ", integers: "ℤ", Zscr: "𝒵", aacute: "á", abreve: "ă", ac: "∾", mstpos: "∾", acE: "∾̳", acd: "∿", acirc: "â", acy: "а", aelig: "æ", afr: "𝔞", agrave: "à", alefsym: "ℵ", aleph: "ℵ", alpha: "α", amacr: "ā", amalg: "⨿", and: "∧", wedge: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", angle: "∠", ange: "⦤", angmsd: "∡", measuredangle: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angzarr: "⍼", aogon: "ą", aopf: "𝕒", apE: "⩰", apacir: "⩯", ape: "≊", approxeq: "≊", apid: "≋", apos: "'", aring: "å", ascr: "𝒶", ast: "*", midast: "*", atilde: "ã", auml: "ä", awint: "⨑", bNot: "⫭", backcong: "≌", bcong: "≌", backepsilon: "϶", bepsi: "϶", backprime: "‵", bprime: "‵", backsim: "∽", bsim: "∽", backsimeq: "⋍", bsime: "⋍", barvee: "⊽", barwed: "⌅", barwedge: "⌅", bbrktbrk: "⎶", bcy: "б", bdquo: "„", ldquor: "„", bemptyv: "⦰", beta: "β", beth: "ℶ", between: "≬", twixt: "≬", bfr: "𝔟", bigcirc: "◯", xcirc: "◯", bigodot: "⨀", xodot: "⨀", bigoplus: "⨁", xoplus: "⨁", bigotimes: "⨂", xotime: "⨂", bigsqcup: "⨆", xsqcup: "⨆", bigstar: "★", starf: "★", bigtriangledown: "▽", xdtri: "▽", bigtriangleup: "△", xutri: "△", biguplus: "⨄", xuplus: "⨄", bkarow: "⤍", rbarr: "⤍", blacklozenge: "⧫", lozf: "⧫", blacktriangle: "▴", utrif: "▴", blacktriangledown: "▾", dtrif: "▾", blacktriangleleft: "◂", ltrif: "◂", blacktriangleright: "▸", rtrif: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bopf: "𝕓", bowtie: "⋈", boxDL: "╗", boxDR: "╔", boxDl: "╖", boxDr: "╓", boxH: "═", boxHD: "╦", boxHU: "╩", boxHd: "╤", boxHu: "╧", boxUL: "╝", boxUR: "╚", boxUl: "╜", boxUr: "╙", boxV: "║", boxVH: "╬", boxVL: "╣", boxVR: "╠", boxVh: "╫", boxVl: "╢", boxVr: "╟", boxbox: "⧉", boxdL: "╕", boxdR: "╒", boxdl: "┐", boxdr: "┌", boxhD: "╥", boxhU: "╨", boxhd: "┬", boxhu: "┴", boxminus: "⊟", minusb: "⊟", boxplus: "⊞", plusb: "⊞", boxtimes: "⊠", timesb: "⊠", boxuL: "╛", boxuR: "╘", boxul: "┘", boxur: "└", boxv: "│", boxvH: "╪", boxvL: "╡", boxvR: "╞", boxvh: "┼", boxvl: "┤", boxvr: "├", brvbar: "¦", bscr: "𝒷", bsemi: "⁏", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bumpE: "⪮", cacute: "ć", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", caps: "∩︀", caret: "⁁", ccaps: "⩍", ccaron: "č", ccedil: "ç", ccirc: "ĉ", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", cemptyv: "⦲", cent: "¢", cfr: "𝔠", chcy: "ч", check: "✓", checkmark: "✓", chi: "χ", cir: "○", cirE: "⧃", circ: "ˆ", circeq: "≗", cire: "≗", circlearrowleft: "↺", olarr: "↺", circlearrowright: "↻", orarr: "↻", circledS: "Ⓢ", oS: "Ⓢ", circledast: "⊛", oast: "⊛", circledcirc: "⊚", ocir: "⊚", circleddash: "⊝", odash: "⊝", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", clubs: "♣", clubsuit: "♣", colon: ":", comma: ",", commat: "@", comp: "∁", complement: "∁", congdot: "⩭", copf: "𝕔", copysr: "℗", crarr: "↵", cross: "✗", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", curlyeqprec: "⋞", cuesc: "⋟", curlyeqsucc: "⋟", cularr: "↶", curvearrowleft: "↶", cularrp: "⤽", cup: "∪", cupbrcap: "⩈", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curvearrowright: "↷", curarrm: "⤼", curlyvee: "⋎", cuvee: "⋎", curlywedge: "⋏", cuwed: "⋏", curren: "¤", cwint: "∱", cylcty: "⌭", dHar: "⥥", dagger: "†", daleth: "ℸ", dash: "‐", hyphen: "‐", dbkarow: "⤏", rBarr: "⤏", dcaron: "ď", dcy: "д", ddarr: "⇊", downdownarrows: "⇊", ddotseq: "⩷", eDDot: "⩷", deg: "°", delta: "δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", diamondsuit: "♦", diams: "♦", digamma: "ϝ", gammad: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", dlcorn: "⌞", llcorner: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", doteqdot: "≑", eDot: "≑", dotminus: "∸", minusd: "∸", dotplus: "∔", plusdo: "∔", dotsquare: "⊡", sdotb: "⊡", drcorn: "⌟", lrcorner: "⌟", drcrop: "⌌", dscr: "𝒹", dscy: "ѕ", dsol: "⧶", dstrok: "đ", dtdot: "⋱", dtri: "▿", triangledown: "▿", dwangle: "⦦", dzcy: "џ", dzigrarr: "⟿", eacute: "é", easter: "⩮", ecaron: "ě", ecir: "≖", eqcirc: "≖", ecirc: "ê", ecolon: "≕", eqcolon: "≕", ecy: "э", edot: "ė", efDot: "≒", fallingdotseq: "≒", efr: "𝔢", eg: "⪚", egrave: "è", egs: "⪖", eqslantgtr: "⪖", egsdot: "⪘", el: "⪙", elinters: "⏧", ell: "ℓ", els: "⪕", eqslantless: "⪕", elsdot: "⪗", emacr: "ē", empty: "∅", emptyset: "∅", emptyv: "∅", varnothing: "∅", emsp13: " ", emsp14: " ", emsp: " ", eng: "ŋ", ensp: " ", eogon: "ę", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", epsiv: "ϵ", straightepsilon: "ϵ", varepsilon: "ϵ", equals: "=", equest: "≟", questeq: "≟", equivDD: "⩸", eqvparsl: "⧥", erDot: "≓", risingdotseq: "≓", erarr: "⥱", escr: "ℯ", eta: "η", eth: "ð", euml: "ë", euro: "€", excl: "!", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", filig: "ﬁ", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", fork: "⋔", pitchfork: "⋔", forkv: "⫙", fpartint: "⨍", frac12: "½", half: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", sfrown: "⌢", fscr: "𝒻", gEl: "⪌", gtreqqless: "⪌", gacute: "ǵ", gamma: "γ", gap: "⪆", gtrapprox: "⪆", gbreve: "ğ", gcirc: "ĝ", gcy: "г", gdot: "ġ", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", gimel: "ℷ", gjcy: "ѓ", glE: "⪒", gla: "⪥", glj: "⪤", gnE: "≩", gneqq: "≩", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gneq: "⪈", gnsim: "⋧", gopf: "𝕘", gscr: "ℊ", gsime: "⪎", gsiml: "⪐", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtrdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrarr: "⥸", gvertneqq: "≩︀", gvnE: "≩︀", hardcy: "ъ", harrcir: "⥈", harrw: "↭", leftrightsquigarrow: "↭", hbar: "ℏ", hslash: "ℏ", planck: "ℏ", plankv: "ℏ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", mldr: "…", hercon: "⊹", hfr: "𝔥", hksearow: "⤥", searhk: "⤥", hkswarow: "⤦", swarhk: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", larrhk: "↩", hookrightarrow: "↪", rarrhk: "↪", hopf: "𝕙", horbar: "―", hscr: "𝒽", hstrok: "ħ", hybull: "⁃", iacute: "í", icirc: "î", icy: "и", iecy: "е", iexcl: "¡", ifr: "𝔦", igrave: "ì", iiiint: "⨌", qint: "⨌", iiint: "∭", tint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", imacr: "ī", imath: "ı", inodot: "ı", imof: "⊷", imped: "Ƶ", incare: "℅", infin: "∞", infintie: "⧝", intcal: "⊺", intercal: "⊺", intlarhk: "⨗", intprod: "⨼", iprod: "⨼", iocy: "ё", iogon: "į", iopf: "𝕚", iota: "ι", iquest: "¿", iscr: "𝒾", isinE: "⋹", isindot: "⋵", isins: "⋴", isinsv: "⋳", itilde: "ĩ", iukcy: "і", iuml: "ï", jcirc: "ĵ", jcy: "й", jfr: "𝔧", jmath: "ȷ", jopf: "𝕛", jscr: "𝒿", jsercy: "ј", jukcy: "є", kappa: "κ", kappav: "ϰ", varkappa: "ϰ", kcedil: "ķ", kcy: "к", kfr: "𝔨", kgreen: "ĸ", khcy: "х", kjcy: "ќ", kopf: "𝕜", kscr: "𝓀", lAtail: "⤛", lBarr: "⤎", lEg: "⪋", lesseqqgtr: "⪋", lHar: "⥢", lacute: "ĺ", laemptyv: "⦴", lambda: "λ", langd: "⦑", lap: "⪅", lessapprox: "⪅", laquo: "«", larrbfs: "⤟", larrfs: "⤝", larrlp: "↫", looparrowleft: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", leftarrowtail: "↢", lat: "⪫", latail: "⤙", late: "⪭", lates: "⪭︀", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lcub: "{", lbrack: "[", lsqb: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", lcedil: "ļ", lcy: "л", ldca: "⤶", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", leq: "≤", leftleftarrows: "⇇", llarr: "⇇", leftthreetimes: "⋋", lthree: "⋋", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessdot: "⋖", ltdot: "⋖", lfisht: "⥼", lfr: "𝔩", lgE: "⪑", lharul: "⥪", lhblk: "▄", ljcy: "љ", llhard: "⥫", lltri: "◺", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnE: "≨", lneqq: "≨", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lneq: "⪇", lnsim: "⋦", loang: "⟬", loarr: "⇽", longmapsto: "⟼", xmap: "⟼", looparrowright: "↬", rarrlp: "↬", lopar: "⦅", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", loz: "◊", lozenge: "◊", lpar: "(", lparlt: "⦓", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", lsime: "⪍", lsimg: "⪏", lsquor: "‚", sbquo: "‚", lstrok: "ł", ltcc: "⪦", ltcir: "⩹", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltrPar: "⦖", ltri: "◃", triangleleft: "◃", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", mDDot: "∺", macr: "¯", strns: "¯", male: "♂", malt: "✠", maltese: "✠", marker: "▮", mcomma: "⨩", mcy: "м", mdash: "—", mfr: "𝔪", mho: "℧", micro: "µ", midcir: "⫰", minus: "−", minusdu: "⨪", mlcp: "⫛", models: "⊧", mopf: "𝕞", mscr: "𝓂", mu: "μ", multimap: "⊸", mumap: "⊸", nGg: "⋙̸", nGt: "≫⃒", nLeftarrow: "⇍", nlArr: "⇍", nLeftrightarrow: "⇎", nhArr: "⇎", nLl: "⋘̸", nLt: "≪⃒", nRightarrow: "⇏", nrArr: "⇏", nVDash: "⊯", nVdash: "⊮", nacute: "ń", nang: "∠⃒", napE: "⩰̸", napid: "≋̸", napos: "ŉ", natur: "♮", natural: "♮", ncap: "⩃", ncaron: "ň", ncedil: "ņ", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", ndash: "–", neArr: "⇗", nearhk: "⤤", nedot: "≐̸", nesear: "⤨", toea: "⤨", nfr: "𝔫", nharr: "↮", nleftrightarrow: "↮", nhpar: "⫲", nis: "⋼", nisd: "⋺", njcy: "њ", nlE: "≦̸", nleqq: "≦̸", nlarr: "↚", nleftarrow: "↚", nldr: "‥", nopf: "𝕟", not: "¬", notinE: "⋹̸", notindot: "⋵̸", notinvb: "⋷", notinvc: "⋶", notnivb: "⋾", notnivc: "⋽", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", nrarr: "↛", nrightarrow: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nscr: "𝓃", nsub: "⊄", nsubE: "⫅̸", nsubseteqq: "⫅̸", nsup: "⊅", nsupE: "⫆̸", nsupseteqq: "⫆̸", ntilde: "ñ", nu: "ν", num: "#", numero: "№", numsp: " ", nvDash: "⊭", nvHarr: "⤄", nvap: "≍⃒", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwArr: "⇖", nwarhk: "⤣", nwnear: "⤧", oacute: "ó", ocirc: "ô", ocy: "о", odblac: "ő", odiv: "⨸", odsold: "⦼", oelig: "œ", ofcir: "⦿", ofr: "𝔬", ogon: "˛", ograve: "ò", ogt: "⧁", ohbar: "⦵", olcir: "⦾", olcross: "⦻", olt: "⧀", omacr: "ō", omega: "ω", omicron: "ο", omid: "⦶", oopf: "𝕠", opar: "⦷", operp: "⦹", or: "∨", vee: "∨", ord: "⩝", order: "ℴ", orderof: "ℴ", oscr: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oslash: "ø", osol: "⊘", otilde: "õ", otimesas: "⨶", ouml: "ö", ovbar: "⌽", para: "¶", parsim: "⫳", parsl: "⫽", pcy: "п", percnt: "%", period: ".", permil: "‰", pertenk: "‱", pfr: "𝔭", phi: "φ", phiv: "ϕ", straightphi: "ϕ", varphi: "ϕ", phone: "☎", pi: "π", piv: "ϖ", varpi: "ϖ", planckh: "ℎ", plus: "+", plusacir: "⨣", pluscir: "⨢", plusdu: "⨥", pluse: "⩲", plussim: "⨦", plustwo: "⨧", pointint: "⨕", popf: "𝕡", pound: "£", prE: "⪳", prap: "⪷", precapprox: "⪷", precnapprox: "⪹", prnap: "⪹", precneqq: "⪵", prnE: "⪵", precnsim: "⋨", prnsim: "⋨", prime: "′", profalar: "⌮", profline: "⌒", profsurf: "⌓", prurel: "⊰", pscr: "𝓅", psi: "ψ", puncsp: " ", qfr: "𝔮", qopf: "𝕢", qprime: "⁗", qscr: "𝓆", quatint: "⨖", quest: "?", rAtail: "⤜", rHar: "⥤", race: "∽̱", racute: "ŕ", raemptyv: "⦳", rangd: "⦒", range: "⦥", raquo: "»", rarrap: "⥵", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", rightarrowtail: "↣", rarrw: "↝", rightsquigarrow: "↝", ratail: "⤚", ratio: "∶", rbbrk: "❳", rbrace: "}", rcub: "}", rbrack: "]", rsqb: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", rcedil: "ŗ", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdsh: "↳", rect: "▭", rfisht: "⥽", rfr: "𝔯", rharul: "⥬", rho: "ρ", rhov: "ϱ", varrho: "ϱ", rightrightarrows: "⇉", rrarr: "⇉", rightthreetimes: "⋌", rthree: "⋌", ring: "˚", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", ropar: "⦆", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", rpar: ")", rpargt: "⦔", rppolint: "⨒", rsaquo: "›", rscr: "𝓇", rtimes: "⋊", rtri: "▹", triangleright: "▹", rtriltri: "⧎", ruluhar: "⥨", rx: "℞", sacute: "ś", scE: "⪴", scap: "⪸", succapprox: "⪸", scaron: "š", scedil: "ş", scirc: "ŝ", scnE: "⪶", succneqq: "⪶", scnap: "⪺", succnapprox: "⪺", scnsim: "⋩", succnsim: "⋩", scpolint: "⨓", scy: "с", sdot: "⋅", sdote: "⩦", seArr: "⇘", sect: "§", semi: ";", seswar: "⤩", tosa: "⤩", sext: "✶", sfr: "𝔰", sharp: "♯", shchcy: "щ", shcy: "ш", shy: "­", sigma: "σ", sigmaf: "ς", sigmav: "ς", varsigma: "ς", simdot: "⩪", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", smashp: "⨳", smeparsl: "⧤", smile: "⌣", ssmile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", spades: "♠", spadesuit: "♠", sqcaps: "⊓︀", sqcups: "⊔︀", sscr: "𝓈", star: "☆", sub: "⊂", subset: "⊂", subE: "⫅", subseteqq: "⫅", subdot: "⪽", subedot: "⫃", submult: "⫁", subnE: "⫋", subsetneqq: "⫋", subne: "⊊", subsetneq: "⊊", subplus: "⪿", subrarr: "⥹", subsim: "⫇", subsub: "⫕", subsup: "⫓", sung: "♪", sup1: "¹", sup2: "²", sup3: "³", supE: "⫆", supseteqq: "⫆", supdot: "⪾", supdsub: "⫘", supedot: "⫄", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supsetneqq: "⫌", supne: "⊋", supsetneq: "⊋", supplus: "⫀", supsim: "⫈", supsub: "⫔", supsup: "⫖", swArr: "⇙", swnwar: "⤪", szlig: "ß", target: "⌖", tau: "τ", tcaron: "ť", tcedil: "ţ", tcy: "т", telrec: "⌕", tfr: "𝔱", theta: "θ", thetasym: "ϑ", thetav: "ϑ", vartheta: "ϑ", thorn: "þ", times: "×", timesbar: "⨱", timesd: "⨰", topbot: "⌶", topcir: "⫱", topf: "𝕥", topfork: "⫚", tprime: "‴", triangle: "▵", utri: "▵", triangleq: "≜", trie: "≜", tridot: "◬", triminus: "⨺", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", tscy: "ц", tshcy: "ћ", tstrok: "ŧ", uHar: "⥣", uacute: "ú", ubrcy: "ў", ubreve: "ŭ", ucirc: "û", ucy: "у", udblac: "ű", ufisht: "⥾", ufr: "𝔲", ugrave: "ù", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", uogon: "ų", uopf: "𝕦", upsi: "υ", upsilon: "υ", upuparrows: "⇈", uuarr: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", urtri: "◹", uscr: "𝓊", utdot: "⋰", utilde: "ũ", uuml: "ü", uwangle: "⦧", vBar: "⫨", vBarv: "⫩", vangrt: "⦜", varsubsetneq: "⊊︀", vsubne: "⊊︀", varsubsetneqq: "⫋︀", vsubnE: "⫋︀", varsupsetneq: "⊋︀", vsupne: "⊋︀", varsupsetneqq: "⫌︀", vsupnE: "⫌︀", vcy: "в", veebar: "⊻", veeeq: "≚", vellip: "⋮", vfr: "𝔳", vopf: "𝕧", vscr: "𝓋", vzigzag: "⦚", wcirc: "ŵ", wedbar: "⩟", wedgeq: "≙", weierp: "℘", wp: "℘", wfr: "𝔴", wopf: "𝕨", wscr: "𝓌", xfr: "𝔵", xi: "ξ", xnis: "⋻", xopf: "𝕩", xscr: "𝓍", yacute: "ý", yacy: "я", ycirc: "ŷ", ycy: "ы", yen: "¥", yfr: "𝔶", yicy: "ї", yopf: "𝕪", yscr: "𝓎", yucy: "ю", yuml: "ÿ", zacute: "ź", zcaron: "ž", zcy: "з", zdot: "ż", zeta: "ζ", zfr: "𝔷", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
_e$1.ngsp = "";
var l$1 = (function(e2) {
  return e2[e2.TAG_OPEN_START = 0] = "TAG_OPEN_START", e2[e2.TAG_OPEN_END = 1] = "TAG_OPEN_END", e2[e2.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", e2[e2.TAG_CLOSE = 3] = "TAG_CLOSE", e2[e2.INCOMPLETE_TAG_OPEN = 4] = "INCOMPLETE_TAG_OPEN", e2[e2.TEXT = 5] = "TEXT", e2[e2.ESCAPABLE_RAW_TEXT = 6] = "ESCAPABLE_RAW_TEXT", e2[e2.RAW_TEXT = 7] = "RAW_TEXT", e2[e2.INTERPOLATION = 8] = "INTERPOLATION", e2[e2.ENCODED_ENTITY = 9] = "ENCODED_ENTITY", e2[e2.COMMENT_START = 10] = "COMMENT_START", e2[e2.COMMENT_END = 11] = "COMMENT_END", e2[e2.CDATA_START = 12] = "CDATA_START", e2[e2.CDATA_END = 13] = "CDATA_END", e2[e2.ATTR_NAME = 14] = "ATTR_NAME", e2[e2.ATTR_QUOTE = 15] = "ATTR_QUOTE", e2[e2.ATTR_VALUE_TEXT = 16] = "ATTR_VALUE_TEXT", e2[e2.ATTR_VALUE_INTERPOLATION = 17] = "ATTR_VALUE_INTERPOLATION", e2[e2.DOC_TYPE_START = 18] = "DOC_TYPE_START", e2[e2.DOC_TYPE_END = 19] = "DOC_TYPE_END", e2[e2.EXPANSION_FORM_START = 20] = "EXPANSION_FORM_START", e2[e2.EXPANSION_CASE_VALUE = 21] = "EXPANSION_CASE_VALUE", e2[e2.EXPANSION_CASE_EXP_START = 22] = "EXPANSION_CASE_EXP_START", e2[e2.EXPANSION_CASE_EXP_END = 23] = "EXPANSION_CASE_EXP_END", e2[e2.EXPANSION_FORM_END = 24] = "EXPANSION_FORM_END", e2[e2.BLOCK_OPEN_START = 25] = "BLOCK_OPEN_START", e2[e2.BLOCK_OPEN_END = 26] = "BLOCK_OPEN_END", e2[e2.BLOCK_CLOSE = 27] = "BLOCK_CLOSE", e2[e2.BLOCK_PARAMETER = 28] = "BLOCK_PARAMETER", e2[e2.INCOMPLETE_BLOCK_OPEN = 29] = "INCOMPLETE_BLOCK_OPEN", e2[e2.LET_START = 30] = "LET_START", e2[e2.LET_VALUE = 31] = "LET_VALUE", e2[e2.LET_END = 32] = "LET_END", e2[e2.INCOMPLETE_LET = 33] = "INCOMPLETE_LET", e2[e2.COMPONENT_OPEN_START = 34] = "COMPONENT_OPEN_START", e2[e2.COMPONENT_OPEN_END = 35] = "COMPONENT_OPEN_END", e2[e2.COMPONENT_OPEN_END_VOID = 36] = "COMPONENT_OPEN_END_VOID", e2[e2.COMPONENT_CLOSE = 37] = "COMPONENT_CLOSE", e2[e2.INCOMPLETE_COMPONENT_OPEN = 38] = "INCOMPLETE_COMPONENT_OPEN", e2[e2.DIRECTIVE_NAME = 39] = "DIRECTIVE_NAME", e2[e2.DIRECTIVE_OPEN = 40] = "DIRECTIVE_OPEN", e2[e2.DIRECTIVE_CLOSE = 41] = "DIRECTIVE_CLOSE", e2[e2.EOF = 42] = "EOF", e2;
})({});
function it$1(e2) {
  return e2 >= 9 && e2 <= 32 || e2 == 160;
}
function Ie$1(e2) {
  return 48 <= e2 && e2 <= 57;
}
function Re$1(e2) {
  return e2 >= 97 && e2 <= 122 || e2 >= 65 && e2 <= 90;
}
function ki(e2) {
  return e2 >= 97 && e2 <= 102 || e2 >= 65 && e2 <= 70 || Ie$1(e2);
}
function Me$1(e2) {
  return e2 === 10 || e2 === 13;
}
function dr$1(e2) {
  return 48 <= e2 && e2 <= 55;
}
function Dt$1(e2) {
  return e2 === 39 || e2 === 34 || e2 === 96;
}
var qa$1 = class qa {
  constructor(e2, t2, r2) {
    this.tokens = e2, this.errors = t2, this.nonNormalizedIcuExpressions = r2;
  }
};
function Pi(e2, t2, r2, n2 = {}) {
  let i = new Ua(new nt$1(e2, t2), r2, n2);
  return i.tokenize(), new qa$1(Xa$1(i.tokens), i.errors, i.nonNormalizedIcuExpressions);
}
var Fa$1 = /\r\n?/g;
function Se$1(e2) {
  return `Unexpected character "${e2 === 0 ? "EOF" : String.fromCharCode(e2)}"`;
}
function xi(e2) {
  return `Unknown entity "${e2}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function Ha$1(e2, t2) {
  return `Unable to parse entity "${t2}" - ${e2} character reference entities must end with ";"`;
}
var gr$1 = (function(e2) {
  return e2.HEX = "hexadecimal", e2.DEC = "decimal", e2;
})(gr$1 || {}), Va$1 = ["@if", "@else", "@for", "@switch", "@case", "@default", "@empty", "@defer", "@placeholder", "@loading", "@error"], st$1 = { start: "{{", end: "}}" }, Ua = class {
  _cursor;
  _tokenizeIcu;
  _leadingTriviaCodePoints;
  _canSelfClose;
  _allowHtmComponentClosingTags;
  _currentTokenStart = null;
  _currentTokenType = null;
  _expansionCaseStack = [];
  _openDirectiveCount = 0;
  _inInterpolation = false;
  _preserveLineEndings;
  _i18nNormalizeLineEndingsInICUs;
  _fullNameStack = [];
  _tokenizeBlocks;
  _tokenizeLet;
  _selectorlessEnabled;
  tokens = [];
  errors = [];
  nonNormalizedIcuExpressions = [];
  constructor(e2, t2, r2) {
    this._getTagContentType = t2, this._tokenizeIcu = r2.tokenizeExpansionForms || false, this._leadingTriviaCodePoints = r2.leadingTriviaChars && r2.leadingTriviaChars.map((i) => i.codePointAt(0) || 0), this._canSelfClose = r2.canSelfClose || false, this._allowHtmComponentClosingTags = r2.allowHtmComponentClosingTags || false;
    let n2 = r2.range || { endPos: e2.content.length, startPos: 0, startLine: 0, startCol: 0 };
    this._cursor = r2.escapedString ? new Ka$1(e2, n2) : new Oi(e2, n2), this._preserveLineEndings = r2.preserveLineEndings || false, this._i18nNormalizeLineEndingsInICUs = r2.i18nNormalizeLineEndingsInICUs || false, this._tokenizeBlocks = r2.tokenizeBlocks ?? true, this._tokenizeLet = r2.tokenizeLet ?? true, this._selectorlessEnabled = r2.selectorlessEnabled ?? false;
    try {
      this._cursor.init();
    } catch (i) {
      this.handleError(i);
    }
  }
  _processCarriageReturns(e2) {
    return this._preserveLineEndings ? e2 : e2.replace(Fa$1, `
`);
  }
  tokenize() {
    for (; this._cursor.peek() !== 0; ) {
      let e2 = this._cursor.clone();
      try {
        if (this._attemptCharCode(60)) if (this._attemptCharCode(33)) this._attemptStr("[CDATA[") ? this._consumeCdata(e2) : this._attemptStr("--") ? this._consumeComment(e2) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e2) : this._consumeBogusComment(e2);
        else if (this._attemptCharCode(47)) this._consumeTagClose(e2);
        else {
          let t2 = this._cursor.clone();
          this._attemptCharCode(63) ? (this._cursor = t2, this._consumeBogusComment(e2)) : this._consumeTagOpen(e2);
        }
        else this._tokenizeLet && this._cursor.peek() === 64 && !this._inInterpolation && this._isLetStart() ? this._consumeLetDeclaration(e2) : this._tokenizeBlocks && this._isBlockStart() ? this._consumeBlockStart(e2) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(e2) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(l$1.TEXT, l$1.INTERPOLATION, () => this._isTextEnd(), () => this._isTagStart());
      } catch (t2) {
        this.handleError(t2);
      }
    }
    this._beginToken(l$1.EOF), this._endToken([]);
  }
  _getBlockName() {
    let e2 = false, t2 = this._cursor.clone();
    return this._attemptCharCodeUntilFn((r2) => it$1(r2) ? !e2 : ja$1(r2) ? (e2 = true, false) : true), this._cursor.getChars(t2).trim();
  }
  _consumeBlockStart(e2) {
    this._requireCharCode(64), this._beginToken(l$1.BLOCK_OPEN_START, e2);
    let t2 = this._endToken([this._getBlockName()]);
    if (this._cursor.peek() === 40) if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(v$1), this._attemptCharCode(41)) this._attemptCharCodeUntilFn(v$1);
    else {
      t2.type = l$1.INCOMPLETE_BLOCK_OPEN;
      return;
    }
    if (t2.parts[0] === "default never" && this._attemptCharCode(59)) {
      this._beginToken(l$1.BLOCK_OPEN_END), this._endToken([]), this._beginToken(l$1.BLOCK_CLOSE), this._endToken([]);
      return;
    }
    this._attemptCharCode(123) ? (this._beginToken(l$1.BLOCK_OPEN_END), this._endToken([])) : this._isBlockStart() && (t2.parts[0] === "case" || t2.parts[0] === "default") ? (this._beginToken(l$1.BLOCK_OPEN_END), this._endToken([]), this._beginToken(l$1.BLOCK_CLOSE), this._endToken([])) : t2.type = l$1.INCOMPLETE_BLOCK_OPEN;
  }
  _consumeBlockEnd(e2) {
    this._beginToken(l$1.BLOCK_CLOSE, e2), this._endToken([]);
  }
  _consumeBlockParameters() {
    for (this._attemptCharCodeUntilFn(Ai); this._cursor.peek() !== 41 && this._cursor.peek() !== 0; ) {
      this._beginToken(l$1.BLOCK_PARAMETER);
      let e2 = this._cursor.clone(), t2 = null, r2 = 0;
      for (; this._cursor.peek() !== 59 && this._cursor.peek() !== 0 || t2 !== null; ) {
        let n2 = this._cursor.peek();
        if (n2 === 92) this._cursor.advance();
        else if (n2 === t2) t2 = null;
        else if (t2 === null && Dt$1(n2)) t2 = n2;
        else if (n2 === 40 && t2 === null) r2++;
        else if (n2 === 41 && t2 === null) {
          if (r2 === 0) break;
          r2 > 0 && r2--;
        }
        this._cursor.advance();
      }
      this._endToken([this._cursor.getChars(e2)]), this._attemptCharCodeUntilFn(Ai);
    }
  }
  _consumeLetDeclaration(e2) {
    if (this._requireStr("@let"), this._beginToken(l$1.LET_START, e2), it$1(this._cursor.peek())) this._attemptCharCodeUntilFn(v$1);
    else {
      let r2 = this._endToken([this._cursor.getChars(e2)]);
      r2.type = l$1.INCOMPLETE_LET;
      return;
    }
    let t2 = this._endToken([this._getLetDeclarationName()]);
    if (this._attemptCharCodeUntilFn(v$1), !this._attemptCharCode(61)) {
      t2.type = l$1.INCOMPLETE_LET;
      return;
    }
    this._attemptCharCodeUntilFn((r2) => v$1(r2) && !Me$1(r2)), this._consumeLetDeclarationValue(), this._cursor.peek() === 59 ? (this._beginToken(l$1.LET_END), this._endToken([]), this._cursor.advance()) : (t2.type = l$1.INCOMPLETE_LET, t2.sourceSpan = this._cursor.getSpan(e2));
  }
  _getLetDeclarationName() {
    let e2 = this._cursor.clone(), t2 = false;
    return this._attemptCharCodeUntilFn((r2) => Re$1(r2) || r2 === 36 || r2 === 95 || t2 && Ie$1(r2) ? (t2 = true, false) : true), this._cursor.getChars(e2).trim();
  }
  _consumeLetDeclarationValue() {
    let e2 = this._cursor.clone();
    for (this._beginToken(l$1.LET_VALUE, e2); this._cursor.peek() !== 0; ) {
      let t2 = this._cursor.peek();
      if (t2 === 59) break;
      Dt$1(t2) && (this._cursor.advance(), this._attemptCharCodeUntilFn((r2) => r2 === 92 ? (this._cursor.advance(), false) : r2 === t2)), this._cursor.advance();
    }
    this._endToken([this._cursor.getChars(e2)]);
  }
  _tokenizeExpansionForm() {
    if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), true;
    if ($a$1(this._cursor.peek()) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), true;
    if (this._cursor.peek() === 125) {
      if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), true;
      if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), true;
    }
    return false;
  }
  _beginToken(e2, t2 = this._cursor.clone()) {
    this._currentTokenStart = t2, this._currentTokenType = e2;
  }
  _endToken(e2, t2) {
    if (this._currentTokenStart === null) throw new ee$1(this._cursor.getSpan(t2), "Programming error - attempted to end a token when there was no start to the token");
    if (this._currentTokenType === null) throw new ee$1(this._cursor.getSpan(this._currentTokenStart), "Programming error - attempted to end a token which has no token type");
    let r2 = { type: this._currentTokenType, parts: e2, sourceSpan: (t2 ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
    return this.tokens.push(r2), this._currentTokenStart = null, this._currentTokenType = null, r2;
  }
  _createError(e2, t2) {
    this._isInExpansionForm() && (e2 += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
    let r2 = new ee$1(t2, e2);
    return this._currentTokenStart = null, this._currentTokenType = null, r2;
  }
  handleError(e2) {
    if (e2 instanceof Er$1 && (e2 = this._createError(e2.msg, this._cursor.getSpan(e2.cursor))), e2 instanceof ee$1) this.errors.push(e2);
    else throw e2;
  }
  _attemptCharCode(e2) {
    return this._cursor.peek() === e2 ? (this._cursor.advance(), true) : false;
  }
  _attemptCharCodeCaseInsensitive(e2) {
    return Ya$1(this._cursor.peek(), e2) ? (this._cursor.advance(), true) : false;
  }
  _requireCharCode(e2) {
    let t2 = this._cursor.clone();
    if (!this._attemptCharCode(e2)) throw this._createError(Se$1(this._cursor.peek()), this._cursor.getSpan(t2));
  }
  _attemptStr(e2) {
    let t2 = e2.length;
    if (this._cursor.charsLeft() < t2) return false;
    let r2 = this._cursor.clone();
    for (let n2 = 0; n2 < t2; n2++) if (!this._attemptCharCode(e2.charCodeAt(n2))) return this._cursor = r2, false;
    return true;
  }
  _attemptStrCaseInsensitive(e2) {
    for (let t2 = 0; t2 < e2.length; t2++) if (!this._attemptCharCodeCaseInsensitive(e2.charCodeAt(t2))) return false;
    return true;
  }
  _requireStr(e2) {
    let t2 = this._cursor.clone();
    if (!this._attemptStr(e2)) throw this._createError(Se$1(this._cursor.peek()), this._cursor.getSpan(t2));
  }
  _requireStrCaseInsensitive(e2) {
    let t2 = this._cursor.clone();
    if (!this._attemptStrCaseInsensitive(e2)) throw this._createError(Se$1(this._cursor.peek()), this._cursor.getSpan(t2));
  }
  _attemptCharCodeUntilFn(e2) {
    for (; !e2(this._cursor.peek()); ) this._cursor.advance();
  }
  _requireCharCodeUntilFn(e2, t2) {
    let r2 = this._cursor.clone();
    if (this._attemptCharCodeUntilFn(e2), this._cursor.diff(r2) < t2) throw this._createError(Se$1(this._cursor.peek()), this._cursor.getSpan(r2));
  }
  _attemptUntilChar(e2) {
    for (; this._cursor.peek() !== e2; ) this._cursor.advance();
  }
  _readChar() {
    let e2 = String.fromCodePoint(this._cursor.peek());
    return this._cursor.advance(), e2;
  }
  _peekStr(e2) {
    let t2 = e2.length;
    if (this._cursor.charsLeft() < t2) return false;
    let r2 = this._cursor.clone();
    for (let n2 = 0; n2 < t2; n2++) {
      if (r2.peek() !== e2.charCodeAt(n2)) return false;
      r2.advance();
    }
    return true;
  }
  _isBlockStart() {
    return this._cursor.peek() === 64 && Va$1.some((e2) => this._peekStr(e2));
  }
  _isLetStart() {
    return this._cursor.peek() === 64 && this._peekStr("@let");
  }
  _consumeEntity(e2) {
    this._beginToken(l$1.ENCODED_ENTITY);
    let t2 = this._cursor.clone();
    if (this._cursor.advance(), this._attemptCharCode(35)) {
      let r2 = this._attemptCharCode(120) || this._attemptCharCode(88), n2 = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(Ga$1), this._cursor.peek() != 59) {
        this._cursor.advance();
        let s2 = r2 ? gr$1.HEX : gr$1.DEC;
        throw this._createError(Ha$1(s2, this._cursor.getChars(t2)), this._cursor.getSpan());
      }
      let i = this._cursor.getChars(n2);
      this._cursor.advance();
      try {
        let s2 = parseInt(i, r2 ? 16 : 10);
        this._endToken([String.fromCodePoint(s2), this._cursor.getChars(t2)]);
      } catch {
        throw this._createError(xi(this._cursor.getChars(t2)), this._cursor.getSpan());
      }
    } else {
      let r2 = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(za$1), this._cursor.peek() != 59) this._beginToken(e2, t2), this._cursor = r2, this._endToken(["&"]);
      else {
        let n2 = this._cursor.getChars(r2);
        this._cursor.advance();
        let i = _e$1.hasOwnProperty(n2) && _e$1[n2];
        if (!i) throw this._createError(xi(n2), this._cursor.getSpan(t2));
        this._endToken([i, `&${n2};`]);
      }
    }
  }
  _consumeRawText(e2, t2) {
    this._beginToken(e2 ? l$1.ESCAPABLE_RAW_TEXT : l$1.RAW_TEXT);
    let r2 = [];
    for (; ; ) {
      let n2 = this._cursor.clone(), i = t2();
      if (this._cursor = n2, i) break;
      e2 && this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(r2.join(""))]), r2.length = 0, this._consumeEntity(l$1.ESCAPABLE_RAW_TEXT), this._beginToken(l$1.ESCAPABLE_RAW_TEXT)) : r2.push(this._readChar());
    }
    this._endToken([this._processCarriageReturns(r2.join(""))]);
  }
  _consumeComment(e2) {
    this._beginToken(l$1.COMMENT_START, e2), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(l$1.COMMENT_END), this._requireStr("-->"), this._endToken([]);
  }
  _consumeBogusComment(e2) {
    this._beginToken(l$1.COMMENT_START, e2), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(l$1.COMMENT_END), this._cursor.advance(), this._endToken([]);
  }
  _consumeCdata(e2) {
    this._beginToken(l$1.CDATA_START, e2), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(l$1.CDATA_END), this._requireStr("]]>"), this._endToken([]);
  }
  _consumeDocType(e2) {
    this._beginToken(l$1.DOC_TYPE_START, e2), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(l$1.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
  }
  _consumePrefixAndName(e2) {
    let t2 = this._cursor.clone(), r2 = "";
    for (; this._cursor.peek() !== 58 && !Wa$1(this._cursor.peek()); ) this._cursor.advance();
    let n2;
    this._cursor.peek() === 58 ? (r2 = this._cursor.getChars(t2), this._cursor.advance(), n2 = this._cursor.clone()) : n2 = t2, this._requireCharCodeUntilFn(e2, r2 === "" ? 0 : 1);
    let i = this._cursor.getChars(n2);
    return [r2, i];
  }
  _consumeSingleLineComment() {
    this._attemptCharCodeUntilFn((e2) => Me$1(e2) || e2 === 0), this._attemptCharCodeUntilFn(v$1);
  }
  _consumeMultiLineComment() {
    this._attemptCharCodeUntilFn((e2) => {
      if (e2 === 0) return true;
      if (e2 === 42) {
        let t2 = this._cursor.clone();
        return t2.advance(), t2.peek() === 47;
      }
      return false;
    }), this._attemptStr("*/") && this._attemptCharCodeUntilFn(v$1);
  }
  _consumeTagOpen(e2) {
    let t2, r2, n2, i, s2 = [];
    try {
      if (this._selectorlessEnabled && It$1(this._cursor.peek())) i = this._consumeComponentOpenStart(e2), [n2, r2, t2] = i.parts, r2 && (n2 += `:${r2}`), t2 && (n2 += `:${t2}`), this._attemptCharCodeUntilFn(v$1);
      else {
        if (!Re$1(this._cursor.peek())) throw this._createError(Se$1(this._cursor.peek()), this._cursor.getSpan(e2));
        i = this._consumeTagOpenStart(e2), r2 = i.parts[0], t2 = n2 = i.parts[1], this._attemptCharCodeUntilFn(v$1);
      }
      for (; ; ) {
        if (this._attemptStr("//")) {
          this._consumeSingleLineComment();
          continue;
        }
        if (this._attemptStr("/*")) {
          this._consumeMultiLineComment();
          continue;
        }
        if (Li(this._cursor.peek())) break;
        if (this._selectorlessEnabled && this._cursor.peek() === 64) {
          let o2 = this._cursor.clone(), c2 = o2.clone();
          c2.advance(), It$1(c2.peek()) && this._consumeDirective(o2, c2);
        } else {
          let o2 = this._consumeAttribute();
          s2.push(o2);
        }
      }
      i.type === l$1.COMPONENT_OPEN_START ? this._consumeComponentOpenEnd() : this._consumeTagOpenEnd();
    } catch (o2) {
      if (o2 instanceof ee$1) {
        i ? i.type = i.type === l$1.COMPONENT_OPEN_START ? l$1.INCOMPLETE_COMPONENT_OPEN : l$1.INCOMPLETE_TAG_OPEN : (this._beginToken(l$1.TEXT, e2), this._endToken(["<"]));
        return;
      }
      throw o2;
    }
    if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === l$1.TAG_OPEN_END_VOID) return;
    let a = this._getTagContentType(t2, r2, this._fullNameStack.length > 0, s2);
    this._handleFullNameStackForTagOpen(r2, t2), a === R$1.RAW_TEXT ? this._consumeRawTextWithTagClose(r2, i, n2, false) : a === R$1.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(r2, i, n2, true);
  }
  _consumeRawTextWithTagClose(e2, t2, r2, n2) {
    this._consumeRawText(n2, () => !this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(v$1), !this._attemptStrCaseInsensitive(e2 && t2.type !== l$1.COMPONENT_OPEN_START ? `${e2}:${r2}` : r2)) ? false : (this._attemptCharCodeUntilFn(v$1), this._attemptCharCode(62))), this._beginToken(t2.type === l$1.COMPONENT_OPEN_START ? l$1.COMPONENT_CLOSE : l$1.TAG_CLOSE), this._requireCharCodeUntilFn((i) => i === 62, 3), this._cursor.advance(), this._endToken(t2.parts), this._handleFullNameStackForTagClose(e2, r2);
  }
  _consumeTagOpenStart(e2) {
    this._beginToken(l$1.TAG_OPEN_START, e2);
    let t2 = this._consumePrefixAndName(Ee$1);
    return this._endToken(t2);
  }
  _consumeComponentOpenStart(e2) {
    this._beginToken(l$1.COMPONENT_OPEN_START, e2);
    let t2 = this._consumeComponentName();
    return this._endToken(t2);
  }
  _consumeComponentName() {
    let e2 = this._cursor.clone();
    for (; Ni(this._cursor.peek()); ) this._cursor.advance();
    let t2 = this._cursor.getChars(e2), r2 = "", n2 = "";
    return this._cursor.peek() === 58 && (this._cursor.advance(), [r2, n2] = this._consumePrefixAndName(Ee$1)), [t2, r2, n2];
  }
  _consumeAttribute() {
    let [e2, t2] = this._consumeAttributeName(), r2;
    return this._attemptCharCodeUntilFn(v$1), this._attemptCharCode(61) && (this._attemptCharCodeUntilFn(v$1), r2 = this._consumeAttributeValue()), this._attemptCharCodeUntilFn(v$1), { prefix: e2, name: t2, value: r2 };
  }
  _consumeAttributeName() {
    let e2 = this._cursor.peek();
    if (e2 === 39 || e2 === 34) throw this._createError(Se$1(e2), this._cursor.getSpan());
    this._beginToken(l$1.ATTR_NAME);
    let t2;
    if (this._openDirectiveCount > 0) {
      let n2 = 0;
      t2 = (i) => {
        if (this._openDirectiveCount > 0) {
          if (i === 40) n2++;
          else if (i === 41) {
            if (n2 === 0) return true;
            n2--;
          }
        }
        return Ee$1(i);
      };
    } else if (e2 === 91) {
      let n2 = 0;
      t2 = (i) => (i === 91 ? n2++ : i === 93 && n2--, n2 <= 0 ? Ee$1(i) : Me$1(i));
    } else t2 = Ee$1;
    let r2 = this._consumePrefixAndName(t2);
    return this._endToken(r2), r2;
  }
  _consumeAttributeValue() {
    let e2;
    if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
      let t2 = this._cursor.peek();
      this._consumeQuote(t2);
      let r2 = () => this._cursor.peek() === t2;
      e2 = this._consumeWithInterpolation(l$1.ATTR_VALUE_TEXT, l$1.ATTR_VALUE_INTERPOLATION, r2, r2), this._consumeQuote(t2);
    } else {
      let t2 = () => Ee$1(this._cursor.peek());
      e2 = this._consumeWithInterpolation(l$1.ATTR_VALUE_TEXT, l$1.ATTR_VALUE_INTERPOLATION, t2, t2);
    }
    return e2;
  }
  _consumeQuote(e2) {
    this._beginToken(l$1.ATTR_QUOTE), this._requireCharCode(e2), this._endToken([String.fromCodePoint(e2)]);
  }
  _consumeTagOpenEnd() {
    let e2 = this._attemptCharCode(47) ? l$1.TAG_OPEN_END_VOID : l$1.TAG_OPEN_END;
    this._beginToken(e2), this._requireCharCode(62), this._endToken([]);
  }
  _consumeComponentOpenEnd() {
    let e2 = this._attemptCharCode(47) ? l$1.COMPONENT_OPEN_END_VOID : l$1.COMPONENT_OPEN_END;
    this._beginToken(e2), this._requireCharCode(62), this._endToken([]);
  }
  _consumeTagClose(e2) {
    if (this._selectorlessEnabled) {
      let t2 = e2.clone();
      for (; t2.peek() !== 62 && !It$1(t2.peek()); ) t2.advance();
      if (It$1(t2.peek())) {
        this._beginToken(l$1.COMPONENT_CLOSE, e2);
        let r2 = this._consumeComponentName();
        this._attemptCharCodeUntilFn(v$1), this._requireCharCode(62), this._endToken(r2);
        return;
      }
    }
    if (this._beginToken(l$1.TAG_CLOSE, e2), this._attemptCharCodeUntilFn(v$1), this._allowHtmComponentClosingTags && this._attemptCharCode(47)) this._attemptCharCodeUntilFn(v$1), this._requireCharCode(62), this._endToken([]);
    else {
      let [t2, r2] = this._consumePrefixAndName(Ee$1);
      this._attemptCharCodeUntilFn(v$1), this._requireCharCode(62), this._endToken([t2, r2]), this._handleFullNameStackForTagClose(t2, r2);
    }
  }
  _consumeExpansionFormStart() {
    this._beginToken(l$1.EXPANSION_FORM_START), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(l$1.EXPANSION_FORM_START), this._beginToken(l$1.RAW_TEXT);
    let e2 = this._readUntil(44), t2 = this._processCarriageReturns(e2);
    if (this._i18nNormalizeLineEndingsInICUs) this._endToken([t2]);
    else {
      let n2 = this._endToken([e2]);
      t2 !== e2 && this.nonNormalizedIcuExpressions.push(n2);
    }
    this._requireCharCode(44), this._attemptCharCodeUntilFn(v$1), this._beginToken(l$1.RAW_TEXT);
    let r2 = this._readUntil(44);
    this._endToken([r2]), this._requireCharCode(44), this._attemptCharCodeUntilFn(v$1);
  }
  _consumeExpansionCaseStart() {
    this._beginToken(l$1.EXPANSION_CASE_VALUE);
    let e2 = this._readUntil(123).trim();
    this._endToken([e2]), this._attemptCharCodeUntilFn(v$1), this._beginToken(l$1.EXPANSION_CASE_EXP_START), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(v$1), this._expansionCaseStack.push(l$1.EXPANSION_CASE_EXP_START);
  }
  _consumeExpansionCaseEnd() {
    this._beginToken(l$1.EXPANSION_CASE_EXP_END), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(v$1), this._expansionCaseStack.pop();
  }
  _consumeExpansionFormEnd() {
    this._beginToken(l$1.EXPANSION_FORM_END), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
  }
  _consumeWithInterpolation(e2, t2, r2, n2) {
    this._beginToken(e2);
    let i = [];
    for (; !r2(); ) {
      let a = this._cursor.clone();
      this._attemptStr(st$1.start) ? (this._endToken([this._processCarriageReturns(i.join(""))], a), i.length = 0, this._consumeInterpolation(t2, a, n2), this._beginToken(e2)) : this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(e2), this._beginToken(e2)) : i.push(this._readChar());
    }
    this._inInterpolation = false;
    let s2 = this._processCarriageReturns(i.join(""));
    return this._endToken([s2]), s2;
  }
  _consumeInterpolation(e2, t2, r2) {
    let n2 = [];
    this._beginToken(e2, t2), n2.push(st$1.start);
    let i = this._cursor.clone(), s2 = null, a = false;
    for (; this._cursor.peek() !== 0 && (r2 === null || !r2()); ) {
      let o2 = this._cursor.clone();
      if (this._isTagStart()) {
        this._cursor = o2, n2.push(this._getProcessedChars(i, o2)), this._endToken(n2);
        return;
      }
      if (s2 === null) if (this._attemptStr(st$1.end)) {
        n2.push(this._getProcessedChars(i, o2)), n2.push(st$1.end), this._endToken(n2);
        return;
      } else this._attemptStr("//") && (a = true);
      let c2 = this._cursor.peek();
      this._cursor.advance(), c2 === 92 ? this._cursor.advance() : c2 === s2 ? s2 = null : !a && s2 === null && Dt$1(c2) && (s2 = c2);
    }
    n2.push(this._getProcessedChars(i, this._cursor)), this._endToken(n2);
  }
  _consumeDirective(e2, t2) {
    for (this._requireCharCode(64), this._cursor.advance(); Ni(this._cursor.peek()); ) this._cursor.advance();
    this._beginToken(l$1.DIRECTIVE_NAME, e2);
    let r2 = this._cursor.getChars(t2);
    if (this._endToken([r2]), this._attemptCharCodeUntilFn(v$1), this._cursor.peek() === 40) {
      for (this._openDirectiveCount++, this._beginToken(l$1.DIRECTIVE_OPEN), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(v$1); !Li(this._cursor.peek()) && this._cursor.peek() !== 41; ) this._consumeAttribute();
      if (this._attemptCharCodeUntilFn(v$1), this._openDirectiveCount--, this._cursor.peek() !== 41) {
        if (this._cursor.peek() === 62 || this._cursor.peek() === 47) return;
        throw this._createError(Se$1(this._cursor.peek()), this._cursor.getSpan(e2));
      }
      this._beginToken(l$1.DIRECTIVE_CLOSE), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(v$1);
    }
  }
  _getProcessedChars(e2, t2) {
    return this._processCarriageReturns(t2.getChars(e2));
  }
  _isTextEnd() {
    return !!(this._isTagStart() || this._cursor.peek() === 0 || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === 125 && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._isLetStart() || this._cursor.peek() === 125));
  }
  _isTagStart() {
    if (this._cursor.peek() === 60) {
      let e2 = this._cursor.clone();
      e2.advance();
      let t2 = e2.peek();
      if (97 <= t2 && t2 <= 122 || 65 <= t2 && t2 <= 90 || t2 === 47 || t2 === 33) return true;
    }
    return false;
  }
  _readUntil(e2) {
    let t2 = this._cursor.clone();
    return this._attemptUntilChar(e2), this._cursor.getChars(t2);
  }
  _isInExpansion() {
    return this._isInExpansionCase() || this._isInExpansionForm();
  }
  _isInExpansionCase() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === l$1.EXPANSION_CASE_EXP_START;
  }
  _isInExpansionForm() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === l$1.EXPANSION_FORM_START;
  }
  isExpansionFormStart() {
    if (this._cursor.peek() !== 123) return false;
    let e2 = this._cursor.clone(), t2 = this._attemptStr(st$1.start);
    return this._cursor = e2, !t2;
  }
  _handleFullNameStackForTagOpen(e2, t2) {
    let r2 = fe$1(e2, t2);
    (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === r2) && this._fullNameStack.push(r2);
  }
  _handleFullNameStackForTagClose(e2, t2) {
    let r2 = fe$1(e2, t2);
    this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === r2 && this._fullNameStack.pop();
  }
};
function v$1(e2) {
  return !it$1(e2) || e2 === 0;
}
function Ee$1(e2) {
  return it$1(e2) || e2 === 62 || e2 === 60 || e2 === 47 || e2 === 39 || e2 === 34 || e2 === 61 || e2 === 0;
}
function Wa$1(e2) {
  return (e2 < 97 || 122 < e2) && (e2 < 65 || 90 < e2) && (e2 < 48 || e2 > 57);
}
function Ga$1(e2) {
  return e2 === 59 || e2 === 0 || !ki(e2);
}
function za$1(e2) {
  return e2 === 59 || e2 === 0 || !(Re$1(e2) || Ie$1(e2));
}
function $a$1(e2) {
  return e2 !== 125;
}
function Ya$1(e2, t2) {
  return yi(e2) === yi(t2);
}
function yi(e2) {
  return e2 >= 97 && e2 <= 122 ? e2 - 97 + 65 : e2;
}
function ja$1(e2) {
  return Re$1(e2) || Ie$1(e2) || e2 === 95;
}
function Ai(e2) {
  return e2 !== 59 && v$1(e2);
}
function It$1(e2) {
  return e2 === 95 || e2 >= 65 && e2 <= 90;
}
function Ni(e2) {
  return Re$1(e2) || Ie$1(e2) || e2 === 95;
}
function Li(e2) {
  return e2 === 47 || e2 === 62 || e2 === 60 || e2 === 0;
}
function Xa$1(e2) {
  let t2 = [], r2;
  for (let n2 = 0; n2 < e2.length; n2++) {
    let i = e2[n2];
    r2 && r2.type === l$1.TEXT && i.type === l$1.TEXT || r2 && r2.type === l$1.ATTR_VALUE_TEXT && i.type === l$1.ATTR_VALUE_TEXT ? (r2.parts[0] += i.parts[0], r2.sourceSpan.end = i.sourceSpan.end) : (r2 = i, t2.push(r2));
  }
  return t2;
}
var Oi = class _r {
  state;
  file;
  input;
  end;
  constructor(t2, r2) {
    if (t2 instanceof _r) {
      this.file = t2.file, this.input = t2.input, this.end = t2.end;
      let n2 = t2.state;
      this.state = { peek: n2.peek, offset: n2.offset, line: n2.line, column: n2.column };
    } else {
      if (!r2) throw new Error("Programming error: the range argument must be provided with a file argument.");
      this.file = t2, this.input = t2.content, this.end = r2.endPos, this.state = { peek: -1, offset: r2.startPos, line: r2.startLine, column: r2.startCol };
    }
  }
  clone() {
    return new _r(this);
  }
  peek() {
    return this.state.peek;
  }
  charsLeft() {
    return this.end - this.state.offset;
  }
  diff(t2) {
    return this.state.offset - t2.state.offset;
  }
  advance() {
    this.advanceState(this.state);
  }
  init() {
    this.updatePeek(this.state);
  }
  getSpan(t2, r2) {
    t2 = t2 || this;
    let n2 = t2;
    if (r2) for (; this.diff(t2) > 0 && r2.indexOf(t2.peek()) !== -1; ) n2 === t2 && (t2 = t2.clone()), t2.advance();
    let i = this.locationFromCursor(t2);
    return new h(i, this.locationFromCursor(this), n2 !== t2 ? this.locationFromCursor(n2) : i);
  }
  getChars(t2) {
    return this.input.substring(t2.state.offset, this.state.offset);
  }
  charAt(t2) {
    return this.input.charCodeAt(t2);
  }
  advanceState(t2) {
    if (t2.offset >= this.end) throw this.state = t2, new Er$1('Unexpected character "EOF"', this);
    let r2 = this.charAt(t2.offset);
    r2 === 10 ? (t2.line++, t2.column = 0) : Me$1(r2) || t2.column++, t2.offset++, this.updatePeek(t2);
  }
  updatePeek(t2) {
    t2.peek = t2.offset >= this.end ? 0 : this.charAt(t2.offset);
  }
  locationFromCursor(t2) {
    return new De$1(t2.file, t2.state.offset, t2.state.line, t2.state.column);
  }
}, Ka$1 = class Sr extends Oi {
  internalState;
  constructor(t2, r2) {
    t2 instanceof Sr ? (super(t2), this.internalState = { ...t2.internalState }) : (super(t2, r2), this.internalState = this.state);
  }
  advance() {
    this.state = this.internalState, super.advance(), this.processEscapeSequence();
  }
  init() {
    super.init(), this.processEscapeSequence();
  }
  clone() {
    return new Sr(this);
  }
  getChars(t2) {
    let r2 = t2.clone(), n2 = "";
    for (; r2.internalState.offset < this.internalState.offset; ) n2 += String.fromCodePoint(r2.peek()), r2.advance();
    return n2;
  }
  processEscapeSequence() {
    let t2 = () => this.internalState.peek;
    if (t2() === 92) if (this.internalState = { ...this.state }, this.advanceState(this.internalState), t2() === 110) this.state.peek = 10;
    else if (t2() === 114) this.state.peek = 13;
    else if (t2() === 118) this.state.peek = 11;
    else if (t2() === 116) this.state.peek = 9;
    else if (t2() === 98) this.state.peek = 8;
    else if (t2() === 102) this.state.peek = 12;
    else if (t2() === 117) if (this.advanceState(this.internalState), t2() === 123) {
      this.advanceState(this.internalState);
      let r2 = this.clone(), n2 = 0;
      for (; t2() !== 125; ) this.advanceState(this.internalState), n2++;
      this.state.peek = this.decodeHexDigits(r2, n2);
    } else {
      let r2 = this.clone();
      this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r2, 4);
    }
    else if (t2() === 120) {
      this.advanceState(this.internalState);
      let r2 = this.clone();
      this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r2, 2);
    } else if (dr$1(t2())) {
      let r2 = "", n2 = 0, i = this.clone();
      for (; dr$1(t2()) && n2 < 3; ) i = this.clone(), r2 += String.fromCodePoint(t2()), this.advanceState(this.internalState), n2++;
      this.state.peek = parseInt(r2, 8), this.internalState = i.internalState;
    } else Me$1(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
  }
  decodeHexDigits(t2, r2) {
    let n2 = this.input.slice(t2.internalState.offset, t2.internalState.offset + r2), i = parseInt(n2, 16);
    if (isNaN(i)) throw t2.state = t2.internalState, new Er$1("Invalid hexadecimal escape sequence", t2);
    return i;
  }
}, Er$1 = class Er extends Error {
  constructor(e2, t2) {
    super(e2), this.msg = e2, this.cursor = t2, Object.setPrototypeOf(this, new.target.prototype);
  }
};
var y = class Ri extends ee$1 {
  static create(t2, r2, n2) {
    return new Ri(t2, r2, n2);
  }
  constructor(t2, r2, n2) {
    super(r2, n2), this.elementName = t2;
  }
}, Qa$1 = class Qa {
  constructor(e2, t2) {
    this.rootNodes = e2, this.errors = t2;
  }
}, Mi = class {
  constructor(e2) {
    this.getTagDefinition = e2;
  }
  parse(e2, t2, r2, n2 = false, i) {
    let s2 = (m) => (_2, ...T2) => m(_2.toLowerCase(), ...T2), a = n2 ? this.getTagDefinition : s2(this.getTagDefinition), o2 = (m) => a(m).getContentType(), c2 = n2 ? i : s2(i), u = Pi(e2, t2, i ? (m, _2, T2, P2) => {
      let z2 = c2(m, _2, T2, P2);
      return z2 !== void 0 ? z2 : o2(m);
    } : o2, r2), p = r2 && r2.canSelfClose || false, d = r2 && r2.allowHtmComponentClosingTags || false, g = new Ja$1(u.tokens, a, p, d, n2);
    return g.build(), new Qa$1(g.rootNodes, [...u.errors, ...g.errors]);
  }
}, Ja$1 = class Bi {
  _index = -1;
  _peek;
  _containerStack = [];
  rootNodes = [];
  errors = [];
  constructor(t2, r2, n2, i, s2) {
    this.tokens = t2, this.tagDefinitionResolver = r2, this.canSelfClose = n2, this.allowHtmComponentClosingTags = i, this.isTagNameCaseSensitive = s2, this._advance();
  }
  build() {
    for (; this._peek.type !== l$1.EOF; ) this._peek.type === l$1.TAG_OPEN_START || this._peek.type === l$1.INCOMPLETE_TAG_OPEN ? this._consumeElementStartTag(this._advance()) : this._peek.type === l$1.TAG_CLOSE ? (this._closeVoidElement(), this._consumeElementEndTag(this._advance())) : this._peek.type === l$1.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === l$1.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === l$1.TEXT || this._peek.type === l$1.RAW_TEXT || this._peek.type === l$1.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === l$1.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === l$1.BLOCK_OPEN_START ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === l$1.BLOCK_CLOSE ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === l$1.INCOMPLETE_BLOCK_OPEN ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === l$1.LET_START ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === l$1.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._peek.type === l$1.INCOMPLETE_LET ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._peek.type === l$1.COMPONENT_OPEN_START || this._peek.type === l$1.INCOMPLETE_COMPONENT_OPEN ? this._consumeComponentStartTag(this._advance()) : this._peek.type === l$1.COMPONENT_CLOSE ? this._consumeComponentEndTag(this._advance()) : this._advance();
    for (let t2 of this._containerStack) t2 instanceof ge$1 && this.errors.push(y.create(t2.name, t2.sourceSpan, `Unclosed block "${t2.name}"`));
  }
  _advance() {
    let t2 = this._peek;
    return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], t2;
  }
  _advanceIf(t2) {
    return this._peek.type === t2 ? this._advance() : null;
  }
  _consumeCdata(t2) {
    let r2 = this._advance(), n2 = this._getText(r2), i = this._advanceIf(l$1.CDATA_END);
    this._addToParent(new Si(n2, new h(t2.sourceSpan.start, (i || r2).sourceSpan.end), [r2]));
  }
  _consumeComment(t2) {
    let r2 = this._advanceIf(l$1.RAW_TEXT), n2 = this._advanceIf(l$1.COMMENT_END), i = r2 != null ? r2.parts[0].trim() : null, s2 = n2 == null ? t2.sourceSpan : new h(t2.sourceSpan.start, n2.sourceSpan.end, t2.sourceSpan.fullStart);
    this._addToParent(new Ti(i, s2));
  }
  _consumeDocType(t2) {
    let r2 = this._advanceIf(l$1.RAW_TEXT), n2 = this._advanceIf(l$1.DOC_TYPE_END), i = r2 != null ? r2.parts[0].trim() : null, s2 = new h(t2.sourceSpan.start, (n2 || r2 || t2).sourceSpan.end);
    this._addToParent(new bi(i, s2));
  }
  _consumeExpansion(t2) {
    let r2 = this._advance(), n2 = this._advance(), i = [];
    for (; this._peek.type === l$1.EXPANSION_CASE_VALUE; ) {
      let a = this._parseExpansionCase();
      if (!a) return;
      i.push(a);
    }
    if (this._peek.type !== l$1.EXPANSION_FORM_END) {
      this.errors.push(y.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
      return;
    }
    let s2 = new h(t2.sourceSpan.start, this._peek.sourceSpan.end, t2.sourceSpan.fullStart);
    this._addToParent(new Ei(r2.parts[0], n2.parts[0], i, s2, r2.sourceSpan)), this._advance();
  }
  _parseExpansionCase() {
    let t2 = this._advance();
    if (this._peek.type !== l$1.EXPANSION_CASE_EXP_START) return this.errors.push(y.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
    let r2 = this._advance(), n2 = this._collectExpansionExpTokens(r2);
    if (!n2) return null;
    let i = this._advance();
    n2.push({ type: l$1.EOF, parts: [], sourceSpan: i.sourceSpan });
    let s2 = new Bi(n2, this.tagDefinitionResolver, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
    if (s2.build(), s2.errors.length > 0) return this.errors = this.errors.concat(s2.errors), null;
    let a = new h(t2.sourceSpan.start, i.sourceSpan.end, t2.sourceSpan.fullStart), o2 = new h(r2.sourceSpan.start, i.sourceSpan.end, r2.sourceSpan.fullStart);
    return new Ci(t2.parts[0], s2.rootNodes, a, t2.sourceSpan, o2);
  }
  _collectExpansionExpTokens(t2) {
    let r2 = [], n2 = [l$1.EXPANSION_CASE_EXP_START];
    for (; ; ) {
      if ((this._peek.type === l$1.EXPANSION_FORM_START || this._peek.type === l$1.EXPANSION_CASE_EXP_START) && n2.push(this._peek.type), this._peek.type === l$1.EXPANSION_CASE_EXP_END) if (Di$1(n2, l$1.EXPANSION_CASE_EXP_START)) {
        if (n2.pop(), n2.length === 0) return r2;
      } else return this.errors.push(y.create(null, t2.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === l$1.EXPANSION_FORM_END) if (Di$1(n2, l$1.EXPANSION_FORM_START)) n2.pop();
      else return this.errors.push(y.create(null, t2.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === l$1.EOF) return this.errors.push(y.create(null, t2.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      r2.push(this._advance());
    }
  }
  _getText(t2) {
    let r2 = t2.parts[0];
    if (r2.length > 0 && r2[0] == `
`) {
      var n2;
      let i = this._getClosestElementLikeParent();
      i != null && i.children.length == 0 && (!((n2 = this._getTagDefinition(i)) === null || n2 === void 0) && n2.ignoreFirstLf) && (r2 = r2.substring(1));
    }
    return r2;
  }
  _consumeText(t2) {
    let r2 = [t2], n2 = t2.sourceSpan, i = t2.parts[0];
    if (i.length > 0 && i[0] === `
`) {
      var s2;
      let a = this._getContainer();
      a != null && a.children.length === 0 && (!((s2 = this._getTagDefinition(a)) === null || s2 === void 0) && s2.ignoreFirstLf) && (i = i.substring(1), r2[0] = { type: t2.type, sourceSpan: t2.sourceSpan, parts: [i] });
    }
    for (; this._peek.type === l$1.INTERPOLATION || this._peek.type === l$1.TEXT || this._peek.type === l$1.ENCODED_ENTITY; ) t2 = this._advance(), r2.push(t2), t2.type === l$1.INTERPOLATION ? i += t2.parts.join("").replace(/&([^;]+);/g, Ii) : t2.type === l$1.ENCODED_ENTITY ? i += t2.parts[0] : i += t2.parts.join("");
    if (i.length > 0) {
      let a = t2.sourceSpan;
      this._addToParent(new _i(i, new h(n2.start, a.end, n2.fullStart, n2.details), r2));
    }
  }
  _closeVoidElement() {
    var t2;
    let r2 = this._getContainer();
    r2 !== null && (!((t2 = this._getTagDefinition(r2)) === null || t2 === void 0) && t2.isVoid) && this._containerStack.pop();
  }
  _consumeElementStartTag(t2) {
    var r2;
    let n2 = [], i = [];
    this._consumeAttributesAndDirectives(n2, i);
    let s2 = this._getElementFullName(t2, this._getClosestElementLikeParent()), a = this._getTagDefinition(s2), o2 = false;
    if (this._peek.type === l$1.TAG_OPEN_END_VOID) {
      this._advance(), o2 = true;
      let T2 = this._getTagDefinition(s2);
      this.canSelfClose || T2?.canSelfClose || Pe$1(s2) !== null || T2?.isVoid || this.errors.push(y.create(s2, t2.sourceSpan, `Only void, custom and foreign elements can be self closed "${t2.parts[1]}"`));
    } else this._peek.type === l$1.TAG_OPEN_END && (this._advance(), o2 = false);
    let c2 = this._peek.sourceSpan.fullStart, u = new h(t2.sourceSpan.start, c2, t2.sourceSpan.fullStart), p = new h(t2.sourceSpan.start, c2, t2.sourceSpan.fullStart), d = new h(t2.sourceSpan.start.moveBy(1), t2.sourceSpan.end), g = new te$1(s2, n2, i, [], o2, u, p, void 0, d, a?.isVoid ?? false), m = this._getContainer(), _2 = m !== null && !!(!((r2 = this._getTagDefinition(m)) === null || r2 === void 0) && r2.isClosedByChild(g.name));
    this._pushContainer(g, _2), o2 ? this._popContainer(s2, te$1, u) : t2.type === l$1.INCOMPLETE_TAG_OPEN && (this._popContainer(s2, te$1, null), this.errors.push(y.create(s2, u, `Opening tag "${s2}" not terminated.`)));
  }
  _consumeComponentStartTag(t2) {
    var r2;
    let n2 = t2.parts[0], i = [], s2 = [];
    this._consumeAttributesAndDirectives(i, s2);
    let a = this._getClosestElementLikeParent(), o2 = this._getComponentTagName(t2, a), c2 = this._getComponentFullName(t2, a), u = this._peek.type === l$1.COMPONENT_OPEN_END_VOID;
    this._advance();
    let p = this._peek.sourceSpan.fullStart, d = new h(t2.sourceSpan.start, p, t2.sourceSpan.fullStart), g = new G$1(n2, o2, c2, i, s2, [], u, d, new h(t2.sourceSpan.start, p, t2.sourceSpan.fullStart), void 0), m = this._getContainer(), _2 = m !== null && g.tagName !== null && !!(!((r2 = this._getTagDefinition(m)) === null || r2 === void 0) && r2.isClosedByChild(g.tagName));
    this._pushContainer(g, _2), u ? this._popContainer(c2, G$1, d) : t2.type === l$1.INCOMPLETE_COMPONENT_OPEN && (this._popContainer(c2, G$1, null), this.errors.push(y.create(c2, d, `Opening tag "${c2}" not terminated.`)));
  }
  _consumeAttributesAndDirectives(t2, r2) {
    for (; this._peek.type === l$1.ATTR_NAME || this._peek.type === l$1.DIRECTIVE_NAME; ) this._peek.type === l$1.DIRECTIVE_NAME ? r2.push(this._consumeDirective(this._peek)) : t2.push(this._consumeAttr(this._advance()));
  }
  _consumeComponentEndTag(t2) {
    let r2 = this._getComponentFullName(t2, this._getClosestElementLikeParent());
    if (!this._popContainer(r2, G$1, t2.sourceSpan)) {
      let n2 = this._containerStack[this._containerStack.length - 1], i;
      n2 instanceof G$1 && n2.componentName === t2.parts[0] ? i = `, did you mean "${n2.fullName}"?` : i = ". It may happen when the tag has already been closed by another tag.";
      let s2 = `Unexpected closing tag "${r2}"${i}`;
      this.errors.push(y.create(r2, t2.sourceSpan, s2));
    }
  }
  _getTagDefinition(t2) {
    return typeof t2 == "string" ? this.tagDefinitionResolver(t2) : t2 instanceof te$1 ? this.tagDefinitionResolver(t2.name) : t2 instanceof G$1 && t2.tagName !== null ? this.tagDefinitionResolver(t2.tagName) : null;
  }
  _pushContainer(t2, r2) {
    r2 && this._containerStack.pop(), this._addToParent(t2), this._containerStack.push(t2);
  }
  _consumeElementEndTag(t2) {
    var r2;
    let n2 = this.allowHtmComponentClosingTags && t2.parts.length === 0 ? null : this._getElementFullName(t2, this._getClosestElementLikeParent());
    if (n2 && (!((r2 = this._getTagDefinition(n2)) === null || r2 === void 0) && r2.isVoid)) this.errors.push(y.create(n2, t2.sourceSpan, `Void elements do not have end tags "${t2.parts[1]}"`));
    else if (!this._popContainer(n2, te$1, t2.sourceSpan)) {
      let i = `Unexpected closing tag "${n2}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
      this.errors.push(y.create(n2, t2.sourceSpan, i));
    }
  }
  _popContainer(t2, r2, n2) {
    let i = false;
    for (let a = this._containerStack.length - 1; a >= 0; a--) {
      var s2;
      let o2 = this._containerStack[a], c2 = o2 instanceof G$1 ? o2.fullName : o2.name;
      if (Pe$1(c2) ? c2 === t2 : (c2 === t2 || t2 === null) && o2 instanceof r2) return o2.endSourceSpan = n2, o2.sourceSpan.end = n2 !== null ? n2.end : o2.sourceSpan.end, this._containerStack.splice(a, this._containerStack.length - a), !i;
      (o2 instanceof ge$1 || !(!((s2 = this._getTagDefinition(o2)) === null || s2 === void 0) && s2.closedByParent)) && (i = true);
    }
    return false;
  }
  _consumeAttr(t2) {
    let r2 = fe$1(t2.parts[0], t2.parts[1]), n2 = t2.sourceSpan.end, i;
    this._peek.type === l$1.ATTR_QUOTE && (i = this._advance());
    let s2 = "", a = [], o2, c2;
    if (this._peek.type === l$1.ATTR_VALUE_TEXT) for (o2 = this._peek.sourceSpan, c2 = this._peek.sourceSpan.end; this._peek.type === l$1.ATTR_VALUE_TEXT || this._peek.type === l$1.ATTR_VALUE_INTERPOLATION || this._peek.type === l$1.ENCODED_ENTITY; ) {
      let p = this._advance();
      a.push(p), p.type === l$1.ATTR_VALUE_INTERPOLATION ? s2 += p.parts.join("").replace(/&([^;]+);/g, Ii) : p.type === l$1.ENCODED_ENTITY ? s2 += p.parts[0] : s2 += p.parts.join(""), c2 = n2 = p.sourceSpan.end;
    }
    this._peek.type === l$1.ATTR_QUOTE && (c2 = n2 = this._advance().sourceSpan.end);
    let u = o2 && c2 && new h(i?.sourceSpan.start ?? o2.start, c2, i?.sourceSpan.fullStart ?? o2.fullStart);
    return new vi(r2, s2, new h(t2.sourceSpan.start, n2, t2.sourceSpan.fullStart), t2.sourceSpan, u, a.length > 0 ? a : void 0, void 0);
  }
  _consumeDirective(t2) {
    let r2 = [], n2 = t2.sourceSpan.end, i = null;
    if (this._advance(), this._peek.type === l$1.DIRECTIVE_OPEN) {
      for (n2 = this._peek.sourceSpan.end, this._advance(); this._peek.type === l$1.ATTR_NAME; ) r2.push(this._consumeAttr(this._advance()));
      this._peek.type === l$1.DIRECTIVE_CLOSE ? (i = this._peek.sourceSpan, this._advance()) : this.errors.push(y.create(null, t2.sourceSpan, "Unterminated directive definition"));
    }
    let s2 = new h(t2.sourceSpan.start, n2, t2.sourceSpan.fullStart), a = new h(s2.start, i === null ? t2.sourceSpan.end : i.end, s2.fullStart);
    return new wi(t2.parts[0], r2, a, s2, i);
  }
  _consumeBlockOpen(t2) {
    let r2 = [];
    for (; this._peek.type === l$1.BLOCK_PARAMETER; ) {
      let o2 = this._advance();
      r2.push(new hr$1(o2.parts[0], o2.sourceSpan));
    }
    this._peek.type === l$1.BLOCK_OPEN_END && this._advance();
    let n2 = this._peek.sourceSpan.fullStart, i = new h(t2.sourceSpan.start, n2, t2.sourceSpan.fullStart), s2 = new h(t2.sourceSpan.start, n2, t2.sourceSpan.fullStart), a = new ge$1(t2.parts[0], r2, [], i, t2.sourceSpan, s2);
    this._pushContainer(a, false);
  }
  _consumeBlockClose(t2) {
    let r2 = this._containerStack.length, n2 = this._containerStack[r2 - 1];
    if (!this._popContainer(null, ge$1, t2.sourceSpan)) {
      if (this._containerStack.length < r2) {
        let i = n2 instanceof G$1 ? n2.fullName : n2.name;
        this.errors.push(y.create(null, t2.sourceSpan, `Unexpected closing block. The block may have been closed earlier. Did you forget to close the <${i}> element? If you meant to write the \`}\` character, you should use the "&#125;" HTML entity instead.`));
        return;
      }
      this.errors.push(y.create(null, t2.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the `}` character, you should use the "&#125;" HTML entity instead.'));
    }
  }
  _consumeIncompleteBlock(t2) {
    let r2 = [];
    for (; this._peek.type === l$1.BLOCK_PARAMETER; ) {
      let o2 = this._advance();
      r2.push(new hr$1(o2.parts[0], o2.sourceSpan));
    }
    let n2 = this._peek.sourceSpan.fullStart, i = new h(t2.sourceSpan.start, n2, t2.sourceSpan.fullStart), s2 = new h(t2.sourceSpan.start, n2, t2.sourceSpan.fullStart), a = new ge$1(t2.parts[0], r2, [], i, t2.sourceSpan, s2);
    this._pushContainer(a, false), this._popContainer(null, ge$1, null), this.errors.push(y.create(t2.parts[0], i, `Incomplete block "${t2.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
  }
  _consumeLet(t2) {
    let r2 = t2.parts[0], n2, i;
    if (this._peek.type !== l$1.LET_VALUE) {
      this.errors.push(y.create(t2.parts[0], t2.sourceSpan, `Invalid @let declaration "${r2}". Declaration must have a value.`));
      return;
    } else n2 = this._advance();
    if (this._peek.type !== l$1.LET_END) {
      this.errors.push(y.create(t2.parts[0], t2.sourceSpan, `Unterminated @let declaration "${r2}". Declaration must be terminated with a semicolon.`));
      return;
    } else i = this._advance();
    let s2 = i.sourceSpan.fullStart, a = new h(t2.sourceSpan.start, s2, t2.sourceSpan.fullStart), o2 = t2.sourceSpan.toString().lastIndexOf(r2), c2 = new h(t2.sourceSpan.start.moveBy(o2), t2.sourceSpan.end), u = new mr$1(r2, n2.parts[0], a, c2, n2.sourceSpan);
    this._addToParent(u);
  }
  _consumeIncompleteLet(t2) {
    let r2 = t2.parts[0] ?? "", n2 = r2 ? ` "${r2}"` : "";
    if (r2.length > 0) {
      let i = t2.sourceSpan.toString().lastIndexOf(r2), s2 = new h(t2.sourceSpan.start.moveBy(i), t2.sourceSpan.end), a = new h(t2.sourceSpan.start, t2.sourceSpan.start.moveBy(0)), o2 = new mr$1(r2, "", t2.sourceSpan, s2, a);
      this._addToParent(o2);
    }
    this.errors.push(y.create(t2.parts[0], t2.sourceSpan, `Incomplete @let declaration${n2}. @let declarations must be written as \`@let <name> = <value>;\``));
  }
  _getContainer() {
    return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
  }
  _getClosestElementLikeParent() {
    for (let t2 = this._containerStack.length - 1; t2 > -1; t2--) {
      let r2 = this._containerStack[t2];
      if (r2 instanceof te$1 || r2 instanceof G$1) return r2;
    }
    return null;
  }
  _addToParent(t2) {
    let r2 = this._getContainer();
    r2 === null ? this.rootNodes.push(t2) : r2.children.push(t2);
  }
  _getElementFullName(t2, r2) {
    return fe$1(this._getPrefix(t2, r2), t2.parts[1]);
  }
  _getComponentFullName(t2, r2) {
    let n2 = t2.parts[0], i = this._getComponentTagName(t2, r2);
    return i === null ? n2 : i.startsWith(":") ? n2 + i : `${n2}:${i}`;
  }
  _getComponentTagName(t2, r2) {
    let n2 = this._getPrefix(t2, r2), i = t2.parts[2];
    return !n2 && !i ? null : !n2 && i ? i : fe$1(n2, i || "ng-component");
  }
  _getPrefix(t2, r2) {
    var n2;
    let i, s2;
    if (t2.type === l$1.COMPONENT_OPEN_START || t2.type === l$1.INCOMPLETE_COMPONENT_OPEN || t2.type === l$1.COMPONENT_CLOSE ? (i = t2.parts[1], s2 = t2.parts[2]) : (i = t2.parts[0], s2 = t2.parts[1]), i = i || ((n2 = this._getTagDefinition(s2)) === null || n2 === void 0 ? void 0 : n2.implicitNamespacePrefix) || "", !i && r2) {
      let a = r2 instanceof te$1 ? r2.name : r2.tagName;
      if (a !== null) {
        let o2 = et$1(a)[1], c2 = this._getTagDefinition(o2);
        c2 !== null && !c2.preventNamespaceInheritance && (i = Pe$1(a));
      }
    }
    return i;
  }
};
function Di$1(e2, t2) {
  return e2.length > 0 && e2[e2.length - 1] === t2;
}
function Ii(e2, t2) {
  return _e$1[t2] !== void 0 ? _e$1[t2] || e2 : /^#x[a-f0-9]+$/i.test(t2) ? String.fromCodePoint(parseInt(t2.slice(2), 16)) : /^#\d+$/.test(t2) ? String.fromCodePoint(parseInt(t2.slice(1), 10)) : e2;
}
var qi = class extends Mi {
  constructor() {
    super(Oe$1);
  }
  parse(e2, t2, r2, n2 = false, i) {
    return super.parse(e2, t2, r2, n2, i);
  }
};
var Cr$1;
function Rt(e2, t2 = {}) {
  let { canSelfClose: r2 = false, allowHtmComponentClosingTags: n2 = false, isTagNameCaseSensitive: i = false, getTagContentType: s2, tokenizeAngularBlocks: a = false, tokenizeAngularLetDeclaration: o2 = false, enableAngularSelectorlessSyntax: c2 = false } = t2;
  return Cr$1 ?? (Cr$1 = new qi()), Cr$1.parse(e2, "angular-html-parser", { tokenizeExpansionForms: a, canSelfClose: r2, allowHtmComponentClosingTags: n2, tokenizeBlocks: a, tokenizeLet: o2, selectorlessEnabled: c2 }, i, s2);
}
var Za$1 = [to$1, ro$1, io$1, ao$1, oo$1, uo$1, lo$1, co$1, po$1, so$1];
function eo$1(e2, t2) {
  for (let r2 of Za$1) r2(e2, t2);
  return e2;
}
function to$1(e2) {
  e2.walk((t2) => {
    if (t2.kind === "element" && t2.tagDefinition.ignoreFirstLf && t2.children.length > 0 && t2.children[0].kind === "text" && t2.children[0].value[0] === `
`) {
      let r2 = t2.children[0];
      r2.value.length === 1 ? t2.removeChild(r2) : r2.value = r2.value.slice(1);
    }
  });
}
function ro$1(e2) {
  let t2 = (r2) => r2.kind === "element" && r2.prev?.kind === "ieConditionalStartComment" && r2.prev.sourceSpan.end.offset === r2.startSourceSpan.start.offset && r2.firstChild?.kind === "ieConditionalEndComment" && r2.firstChild.sourceSpan.start.offset === r2.startSourceSpan.end.offset;
  e2.walk((r2) => {
    if (r2.children) for (let n2 = 0; n2 < r2.children.length; n2++) {
      let i = r2.children[n2];
      if (!t2(i)) continue;
      let s2 = i.prev, a = i.firstChild;
      r2.removeChild(s2), n2--;
      let o2 = new h(s2.sourceSpan.start, a.sourceSpan.end), c2 = new h(o2.start, i.sourceSpan.end);
      i.condition = s2.condition, i.sourceSpan = c2, i.startSourceSpan = o2, i.removeChild(a);
    }
  });
}
function no$1(e2, t2, r2) {
  e2.walk((n2) => {
    if (n2.children) for (let i = 0; i < n2.children.length; i++) {
      let s2 = n2.children[i];
      if (s2.kind !== "text" && !t2(s2)) continue;
      s2.kind !== "text" && (s2.kind = "text", s2.value = r2(s2));
      let a = s2.prev;
      !a || a.kind !== "text" || (a.value += s2.value, a.sourceSpan = new h(a.sourceSpan.start, s2.sourceSpan.end), n2.removeChild(s2), i--);
    }
  });
}
function io$1(e2) {
  return no$1(e2, (t2) => t2.kind === "cdata", (t2) => `<![CDATA[${t2.value}]]>`);
}
function so$1(e2) {
  let t2 = (r2) => r2.kind === "element" && r2.attrs.length === 0 && r2.children.length === 1 && r2.firstChild.kind === "text" && !N.hasWhitespaceCharacter(r2.children[0].value) && !r2.firstChild.hasLeadingSpaces && !r2.firstChild.hasTrailingSpaces && r2.isLeadingSpaceSensitive && !r2.hasLeadingSpaces && r2.isTrailingSpaceSensitive && !r2.hasTrailingSpaces && r2.prev?.kind === "text" && r2.next?.kind === "text";
  e2.walk((r2) => {
    if (r2.children) for (let n2 = 0; n2 < r2.children.length; n2++) {
      let i = r2.children[n2];
      if (!t2(i)) continue;
      let s2 = i.prev, a = i.next;
      s2.value += `<${i.rawName}>` + i.firstChild.value + `</${i.rawName}>` + a.value, s2.sourceSpan = new h(s2.sourceSpan.start, a.sourceSpan.end), s2.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive, s2.hasTrailingSpaces = a.hasTrailingSpaces, r2.removeChild(i), n2--, r2.removeChild(a);
    }
  });
}
function ao$1(e2, t2) {
  if (t2.parser === "html") return;
  let r2 = /\{\{(.+?)\}\}/su;
  e2.walk((n2) => {
    if (nn$1(n2, t2)) for (let i of n2.children) {
      if (i.kind !== "text") continue;
      let s2 = i.sourceSpan.start, a = null, o2 = i.value.split(r2);
      for (let c2 = 0; c2 < o2.length; c2++, s2 = a) {
        let u = o2[c2];
        if (c2 % 2 === 0) {
          a = s2.moveBy(u.length), u.length > 0 && n2.insertChildBefore(i, { kind: "text", value: u, sourceSpan: new h(s2, a) });
          continue;
        }
        a = s2.moveBy(u.length + 4), n2.insertChildBefore(i, { kind: "interpolation", sourceSpan: new h(s2, a), children: u.length === 0 ? [] : [{ kind: "text", value: u, sourceSpan: new h(s2.moveBy(2), a.moveBy(-2)) }] });
      }
      n2.removeChild(i);
    }
  });
}
function oo$1(e2, t2) {
  e2.walk((r2) => {
    let n2 = r2.$children;
    if (!n2) return;
    if (n2.length === 0 || n2.length === 1 && n2[0].kind === "text" && N.trim(n2[0].value).length === 0) {
      r2.hasDanglingSpaces = n2.length > 0, r2.$children = [];
      return;
    }
    let i = sn$1(r2, t2), s2 = Zt$1(r2);
    if (!i) for (let a = 0; a < n2.length; a++) {
      let o2 = n2[a];
      if (o2.kind !== "text") continue;
      let { leadingWhitespace: c2, text: u, trailingWhitespace: p } = rn$1(o2.value), d = o2.prev, g = o2.next;
      u ? (o2.value = u, o2.sourceSpan = new h(o2.sourceSpan.start.moveBy(c2.length), o2.sourceSpan.end.moveBy(-p.length)), c2 && (d && (d.hasTrailingSpaces = true), o2.hasLeadingSpaces = true), p && (o2.hasTrailingSpaces = true, g && (g.hasLeadingSpaces = true))) : (r2.removeChild(o2), a--, (c2 || p) && (d && (d.hasTrailingSpaces = true), g && (g.hasLeadingSpaces = true)));
    }
    r2.isWhitespaceSensitive = i, r2.isIndentationSensitive = s2;
  });
}
function lo$1(e2) {
  e2.walk((t2) => {
    t2.isSelfClosing = !t2.children || t2.kind === "element" && (t2.tagDefinition.isVoid || t2.endSourceSpan && t2.startSourceSpan.start === t2.endSourceSpan.start && t2.startSourceSpan.end === t2.endSourceSpan.end);
  });
}
function co$1(e2, t2) {
  e2.walk((r2) => {
    r2.kind === "element" && (r2.hasHtmComponentClosingTag = r2.endSourceSpan && /^<\s*\/\s*\/\s*>$/u.test(t2.originalText.slice(r2.endSourceSpan.start.offset, r2.endSourceSpan.end.offset)));
  });
}
function uo$1(e2, t2) {
  e2.walk((r2) => {
    r2.cssDisplay = dn$1(r2, t2);
  });
}
function po$1(e2, t2) {
  e2.walk((r2) => {
    let { children: n2 } = r2;
    if (n2) {
      if (n2.length === 0) {
        r2.isDanglingSpaceSensitive = ln(r2, t2);
        return;
      }
      for (let i of n2) i.isLeadingSpaceSensitive = an$1(i, t2), i.isTrailingSpaceSensitive = on$1(i, t2);
      for (let i = 0; i < n2.length; i++) {
        let s2 = n2[i];
        s2.isLeadingSpaceSensitive = (i === 0 || s2.prev.isTrailingSpaceSensitive) && s2.isLeadingSpaceSensitive, s2.isTrailingSpaceSensitive = (i === n2.length - 1 || s2.next.isLeadingSpaceSensitive) && s2.isTrailingSpaceSensitive;
      }
    }
  });
}
var Fi = eo$1;
function ho$1(e2, t2, r2) {
  let { node: n2 } = e2;
  switch (n2.kind) {
    case "root":
      return t2.__onHtmlRoot && t2.__onHtmlRoot(n2), [E(Le$1(e2, t2, r2)), C];
    case "element":
    case "ieConditionalComment":
      return ci$1(e2, t2, r2);
    case "angularControlFlowBlock":
      return ii$1(e2, t2, r2);
    case "angularControlFlowBlockParameters":
      return ai$1(e2, t2, r2);
    case "angularControlFlowBlockParameter":
      return N.trim(n2.expression);
    case "angularLetDeclaration":
      return E(["@let ", E([n2.id, " =", E(A([S$1, r2("init")]))]), ";"]);
    case "angularLetDeclarationInitializer":
      return n2.value;
    case "angularIcuExpression":
      return oi$1(e2, t2, r2);
    case "angularIcuCase":
      return li$1(e2, t2, r2);
    case "ieConditionalStartComment":
    case "ieConditionalEndComment":
      return [me$1(n2), ce$1(n2)];
    case "interpolation":
      return [me$1(n2, t2), ...e2.map(r2, "children"), ce$1(n2, t2)];
    case "text": {
      if (n2.parent.kind === "interpolation") {
        let o2 = /\n[^\S\n]*$/u, c2 = o2.test(n2.value), u = c2 ? n2.value.replace(o2, "") : n2.value;
        return [L$1(u), c2 ? C : ""];
      }
      let i = H$1(n2, t2), s2 = bt(n2), a = F(n2, t2);
      return s2[0] = [i, s2[0]], s2.push([s2.pop(), a]), gt$1(s2);
    }
    case "docType":
      return [E([me$1(n2, t2), " ", w$1(0, n2.value.replace(/^html\b/iu, "html"), /\s+/gu, " ")]), ce$1(n2, t2)];
    case "comment":
      return [H$1(n2, t2), L$1(t2.originalText.slice(K$1(n2), J(n2))), F(n2, t2)];
    case "attribute": {
      if (n2.value === null) return n2.rawName;
      let i = rr$1(n2.value), s2 = kt$1(n2, t2) ? "" : Ur$1(i, '"');
      return [n2.rawName, "=", s2, L$1(s2 === '"' ? w$1(0, i, '"', "&quot;") : w$1(0, i, "'", "&apos;")), s2];
    }
    case "frontMatter":
    case "cdata":
    default:
      throw new Gr$1(n2, "HTML");
  }
}
var mo$1 = { features: { experimental_frontMatterSupport: { massageAstNode: true, embed: true, print: true } }, preprocess: Fi, print: ho$1, insertPragma: ti$1, massageAstNode: $r$1, embed: $n$1, getVisitorKeys: Xn }, Hi = mo$1;
var Vi = [{ name: "Angular", type: "markup", aceMode: "html", extensions: [".component.html"], tmScope: "text.html.basic", aliases: ["xhtml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["angular"], vscodeLanguageIds: ["html"], filenames: [], linguistLanguageId: 146 }, { name: "HTML", type: "markup", aceMode: "html", extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], tmScope: "text.html.basic", aliases: ["xhtml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["html"], vscodeLanguageIds: ["html"], linguistLanguageId: 146 }, { name: "Lightning Web Components", type: "markup", aceMode: "html", extensions: [], tmScope: "text.html.basic", aliases: ["xhtml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["lwc"], vscodeLanguageIds: ["html"], filenames: [], linguistLanguageId: 146 }, { name: "MJML", type: "markup", aceMode: "html", extensions: [".mjml"], tmScope: "text.mjml.basic", aliases: ["MJML", "mjml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["mjml"], filenames: [], vscodeLanguageIds: ["mjml"], linguistLanguageId: 146 }, { name: "Vue", type: "markup", aceMode: "vue", extensions: [".vue"], tmScope: "source.vue", codemirrorMode: "vue", codemirrorMimeType: "text/x-vue", parsers: ["vue"], vscodeLanguageIds: ["vue"], linguistLanguageId: 391 }];
var vr$1 = { bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
var Ui = "HTML", fo$1 = { bracketSameLine: vr$1.bracketSameLine, htmlWhitespaceSensitivity: { category: Ui, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: vr$1.singleAttributePerLine, vueIndentScriptAndStyle: { category: Ui, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } }, Wi = fo$1;
var Nr = {};
Or$1(Nr, { angular: () => Ro$1, html: () => Oo$1, lwc: () => Bo$1, mjml: () => Io$1, vue: () => Mo$1 });
function go$1(e2, t2) {
  let r2 = new SyntaxError(e2 + " (" + t2.loc.start.line + ":" + t2.loc.start.column + ")");
  return Object.assign(r2, t2);
}
var Gi = go$1;
var _o$1 = { canSelfClose: true, normalizeTagName: false, normalizeAttributeName: false, allowHtmComponentClosingTags: false, isTagNameCaseSensitive: false, shouldParseFrontMatter: true };
function Mt$1(e2) {
  return { ..._o$1, ...e2 };
}
function Tr$1(e2) {
  let { canSelfClose: t2, allowHtmComponentClosingTags: r2, isTagNameCaseSensitive: n2, shouldParseAsRawText: i, tokenizeAngularBlocks: s2, tokenizeAngularLetDeclaration: a } = e2;
  return { canSelfClose: t2, allowHtmComponentClosingTags: r2, isTagNameCaseSensitive: n2, getTagContentType: i ? (...o2) => i(...o2) ? R$1.RAW_TEXT : void 0 : void 0, tokenizeAngularBlocks: s2, tokenizeAngularLetDeclaration: a };
}
var Bt = /* @__PURE__ */ new Map([["*", /* @__PURE__ */ new Set(["accesskey", "autocapitalize", "autocorrect", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "exportparts", "hidden", "id", "inert", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "part", "popover", "slot", "spellcheck", "style", "tabindex", "title", "translate", "writingsuggestions"])], ["a", /* @__PURE__ */ new Set(["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"])], ["applet", /* @__PURE__ */ new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])], ["area", /* @__PURE__ */ new Set(["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"])], ["audio", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"])], ["base", /* @__PURE__ */ new Set(["href", "target"])], ["basefont", /* @__PURE__ */ new Set(["color", "face", "size"])], ["blockquote", /* @__PURE__ */ new Set(["cite"])], ["body", /* @__PURE__ */ new Set(["alink", "background", "bgcolor", "link", "text", "vlink"])], ["br", /* @__PURE__ */ new Set(["clear"])], ["button", /* @__PURE__ */ new Set(["command", "commandfor", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"])], ["canvas", /* @__PURE__ */ new Set(["height", "width"])], ["caption", /* @__PURE__ */ new Set(["align"])], ["col", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["colgroup", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["data", /* @__PURE__ */ new Set(["value"])], ["del", /* @__PURE__ */ new Set(["cite", "datetime"])], ["details", /* @__PURE__ */ new Set(["name", "open"])], ["dialog", /* @__PURE__ */ new Set(["closedby", "open"])], ["dir", /* @__PURE__ */ new Set(["compact"])], ["div", /* @__PURE__ */ new Set(["align"])], ["dl", /* @__PURE__ */ new Set(["compact"])], ["embed", /* @__PURE__ */ new Set(["height", "src", "type", "width"])], ["fieldset", /* @__PURE__ */ new Set(["disabled", "form", "name"])], ["font", /* @__PURE__ */ new Set(["color", "face", "size"])], ["form", /* @__PURE__ */ new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"])], ["frame", /* @__PURE__ */ new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])], ["frameset", /* @__PURE__ */ new Set(["cols", "rows"])], ["h1", /* @__PURE__ */ new Set(["align"])], ["h2", /* @__PURE__ */ new Set(["align"])], ["h3", /* @__PURE__ */ new Set(["align"])], ["h4", /* @__PURE__ */ new Set(["align"])], ["h5", /* @__PURE__ */ new Set(["align"])], ["h6", /* @__PURE__ */ new Set(["align"])], ["head", /* @__PURE__ */ new Set(["profile"])], ["hr", /* @__PURE__ */ new Set(["align", "noshade", "size", "width"])], ["html", /* @__PURE__ */ new Set(["manifest", "version"])], ["iframe", /* @__PURE__ */ new Set(["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"])], ["img", /* @__PURE__ */ new Set(["align", "alt", "border", "crossorigin", "decoding", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"])], ["input", /* @__PURE__ */ new Set(["accept", "align", "alpha", "alt", "autocomplete", "checked", "colorspace", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "popovertarget", "popovertargetaction", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"])], ["ins", /* @__PURE__ */ new Set(["cite", "datetime"])], ["isindex", /* @__PURE__ */ new Set(["prompt"])], ["label", /* @__PURE__ */ new Set(["for", "form"])], ["legend", /* @__PURE__ */ new Set(["align"])], ["li", /* @__PURE__ */ new Set(["type", "value"])], ["link", /* @__PURE__ */ new Set(["as", "blocking", "charset", "color", "crossorigin", "disabled", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"])], ["map", /* @__PURE__ */ new Set(["name"])], ["menu", /* @__PURE__ */ new Set(["compact"])], ["meta", /* @__PURE__ */ new Set(["charset", "content", "http-equiv", "media", "name", "scheme"])], ["meter", /* @__PURE__ */ new Set(["high", "low", "max", "min", "optimum", "value"])], ["object", /* @__PURE__ */ new Set(["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"])], ["ol", /* @__PURE__ */ new Set(["compact", "reversed", "start", "type"])], ["optgroup", /* @__PURE__ */ new Set(["disabled", "label"])], ["option", /* @__PURE__ */ new Set(["disabled", "label", "selected", "value"])], ["output", /* @__PURE__ */ new Set(["for", "form", "name"])], ["p", /* @__PURE__ */ new Set(["align"])], ["param", /* @__PURE__ */ new Set(["name", "type", "value", "valuetype"])], ["pre", /* @__PURE__ */ new Set(["width"])], ["progress", /* @__PURE__ */ new Set(["max", "value"])], ["q", /* @__PURE__ */ new Set(["cite"])], ["script", /* @__PURE__ */ new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])], ["select", /* @__PURE__ */ new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])], ["slot", /* @__PURE__ */ new Set(["name"])], ["source", /* @__PURE__ */ new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])], ["style", /* @__PURE__ */ new Set(["blocking", "media", "type"])], ["table", /* @__PURE__ */ new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])], ["tbody", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["td", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["template", /* @__PURE__ */ new Set(["shadowrootclonable", "shadowrootcustomelementregistry", "shadowrootdelegatesfocus", "shadowrootmode", "shadowrootserializable"])], ["textarea", /* @__PURE__ */ new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])], ["tfoot", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["th", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["thead", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["time", /* @__PURE__ */ new Set(["datetime"])], ["tr", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["track", /* @__PURE__ */ new Set(["default", "kind", "label", "src", "srclang"])], ["ul", /* @__PURE__ */ new Set(["compact", "type"])], ["video", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])]]);
var zi = /* @__PURE__ */ new Set(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fencedframe", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "search", "section", "select", "selectedcontent", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]);
var qt$1 = { attrs: true, children: true, cases: true, expression: true }, $i = /* @__PURE__ */ new Set(["parent"]), re, br$1, wr$1, Be$1 = class Be {
  constructor(t2 = {}) {
    Dr$1(this, re);
    Ut$1(this, "kind");
    Ut$1(this, "parent");
    for (let r2 of /* @__PURE__ */ new Set([...$i, ...Object.keys(t2)])) this.setProperty(r2, t2[r2]);
    if (ie$1(t2)) for (let r2 of Object.getOwnPropertySymbols(t2)) this.setProperty(r2, t2[r2]);
  }
  setProperty(t2, r2) {
    if (this[t2] !== r2) {
      if (t2 in qt$1 && (r2 = r2.map((n2) => this.createChild(n2))), !$i.has(t2)) {
        this[t2] = r2;
        return;
      }
      Object.defineProperty(this, t2, { value: r2, enumerable: false, configurable: true });
    }
  }
  map(t2) {
    let r2;
    for (let n2 in qt$1) {
      let i = this[n2];
      if (i) {
        let s2 = So$1(i, (a) => a.map(t2));
        r2 !== i && (r2 || (r2 = new Be({ parent: this.parent })), r2.setProperty(n2, s2));
      }
    }
    if (r2) for (let n2 in this) n2 in qt$1 || (r2[n2] = this[n2]);
    return t2(r2 || this);
  }
  walk(t2) {
    for (let r2 in qt$1) {
      let n2 = this[r2];
      if (n2) for (let i = 0; i < n2.length; i++) n2[i].walk(t2);
    }
    t2(this);
  }
  createChild(t2) {
    let r2 = t2 instanceof Be ? t2.clone() : new Be(t2);
    return r2.setProperty("parent", this), r2;
  }
  insertChildBefore(t2, r2) {
    let n2 = this.$children;
    n2.splice(n2.indexOf(t2), 0, this.createChild(r2));
  }
  removeChild(t2) {
    let r2 = this.$children;
    r2.splice(r2.indexOf(t2), 1);
  }
  replaceChild(t2, r2) {
    let n2 = this.$children;
    n2[n2.indexOf(t2)] = this.createChild(r2);
  }
  clone() {
    return new Be(this);
  }
  get $children() {
    return this[Fe$1(this, re, br$1)];
  }
  set $children(t2) {
    this[Fe$1(this, re, br$1)] = t2;
  }
  get firstChild() {
    return this.$children?.[0];
  }
  get lastChild() {
    return M$1(1, this.$children, -1);
  }
  get prev() {
    let t2 = Fe$1(this, re, wr$1);
    return t2[t2.indexOf(this) - 1];
  }
  get next() {
    let t2 = Fe$1(this, re, wr$1);
    return t2[t2.indexOf(this) + 1];
  }
  get rawName() {
    return this.hasExplicitNamespace ? this.fullName : this.name;
  }
  get fullName() {
    return this.namespace ? this.namespace + ":" + this.name : this.name;
  }
  get attrMap() {
    return Object.fromEntries(this.attrs.map((t2) => [t2.fullName, t2.value]));
  }
};
re = /* @__PURE__ */ new WeakSet(), br$1 = function() {
  return this.kind === "angularIcuCase" ? "expression" : this.kind === "angularIcuExpression" ? "cases" : "children";
}, wr$1 = function() {
  return this.parent?.$children ?? [];
};
var Ft$1 = Be$1;
function So$1(e2, t2) {
  let r2 = e2.map(t2);
  return r2.some((n2, i) => n2 !== e2[i]) ? r2 : e2;
}
var Eo$1 = [{ regex: /^(?<openingTagSuffix>\[if(?<condition>[^\]]*)\]>)(?<data>.*?)<!\s*\[endif\]$/su, parse: Co$1 }, { regex: /^\[if(?<condition>[^\]]*)\]><!$/u, parse: vo$1 }, { regex: /^<!\s*\[endif\]$/u, parse: To$1 }];
function Yi(e2, t2) {
  if (e2.value) for (let { regex: r2, parse: n2 } of Eo$1) {
    let i = e2.value.match(r2);
    if (i) return n2(e2, i, t2);
  }
  return null;
}
function Co$1(e2, t2, r2) {
  let { openingTagSuffix: n2, condition: i, data: s2 } = t2.groups, a = 4 + n2.length, o2 = e2.sourceSpan.start.moveBy(a), c2 = o2.moveBy(s2.length), [u, p] = (() => {
    try {
      return [true, r2(s2, o2).children];
    } catch {
      return [false, [{ kind: "text", value: s2, sourceSpan: new h(o2, c2) }]];
    }
  })();
  return { kind: "ieConditionalComment", complete: u, children: p, condition: w$1(0, i.trim(), /\s+/gu, " "), sourceSpan: e2.sourceSpan, startSourceSpan: new h(e2.sourceSpan.start, o2), endSourceSpan: new h(c2, e2.sourceSpan.end) };
}
function vo$1(e2, t2) {
  let { condition: r2 } = t2.groups;
  return { kind: "ieConditionalStartComment", condition: w$1(0, r2.trim(), /\s+/gu, " "), sourceSpan: e2.sourceSpan };
}
function To$1(e2) {
  return { kind: "ieConditionalEndComment", sourceSpan: e2.sourceSpan };
}
var kr$1 = class kr extends fr$1 {
  visitExpansionCase(t2, r2) {
    r2.parseOptions.name === "angular" && this.visitChildren(r2, (n2) => {
      n2(t2.expression);
    });
  }
  visit(t2, { parseOptions: r2 }) {
    xo$1(t2), yo$1(t2, r2), No$1(t2, r2), Ao$1(t2);
  }
};
function Ki(e2, t2, r2, n2) {
  Ot(new kr$1(), e2.children, { parseOptions: r2 }), t2 && e2.children.unshift(t2);
  let i = new Ft$1(e2);
  return i.walk((s2) => {
    if (s2.kind === "comment") {
      let a = Yi(s2, n2);
      a && s2.parent.replaceChild(s2, a);
    }
    bo$1(s2), wo$1(s2), ko$1(s2);
  }), i;
}
function bo$1(e2) {
  if (e2.kind === "block") {
    if (e2.name = w$1(0, e2.name.toLowerCase(), /\s+/gu, " ").trim(), e2.kind = "angularControlFlowBlock", !Ne$1(e2.parameters)) {
      delete e2.parameters;
      return;
    }
    for (let t2 of e2.parameters) t2.kind = "angularControlFlowBlockParameter";
    e2.parameters = { kind: "angularControlFlowBlockParameters", children: e2.parameters, sourceSpan: new h(e2.parameters[0].sourceSpan.start, M$1(0, e2.parameters, -1).sourceSpan.end) };
  }
}
function wo$1(e2) {
  e2.kind === "letDeclaration" && (e2.kind = "angularLetDeclaration", e2.id = e2.name, e2.init = { kind: "angularLetDeclarationInitializer", sourceSpan: new h(e2.valueSpan.start, e2.valueSpan.end), value: e2.value }, delete e2.name, delete e2.value);
}
function ko$1(e2) {
  e2.kind === "expansion" && (e2.kind = "angularIcuExpression"), e2.kind === "expansionCase" && (e2.kind = "angularIcuCase");
}
function ji(e2, t2) {
  let r2 = e2.toLowerCase();
  return t2(r2) ? r2 : e2;
}
function Xi(e2) {
  let t2 = e2.name.startsWith(":") ? e2.name.slice(1).split(":")[0] : null, r2 = e2.nameSpan.toString(), n2 = t2 !== null && r2.startsWith(`${t2}:`), i = n2 ? r2.slice(t2.length + 1) : r2;
  e2.name = i, e2.namespace = t2, e2.hasExplicitNamespace = n2;
}
function xo$1(e2) {
  switch (e2.kind) {
    case "element":
      Xi(e2);
      for (let t2 of e2.attrs) Xi(t2), t2.valueSpan ? (t2.value = t2.valueSpan.toString(), /["']/u.test(t2.value[0]) && (t2.value = t2.value.slice(1, -1))) : t2.value = null;
      break;
    case "comment":
      e2.value = e2.sourceSpan.toString().slice(4, -3);
      break;
    case "text":
      e2.value = e2.sourceSpan.toString();
      break;
  }
}
function yo$1(e2, t2) {
  if (e2.kind === "element") {
    let r2 = Oe$1(t2.isTagNameCaseSensitive ? e2.name : e2.name.toLowerCase());
    !e2.namespace || e2.namespace === r2.implicitNamespacePrefix || se$1(e2) ? e2.tagDefinition = r2 : e2.tagDefinition = Oe$1("");
  }
}
function Ao$1(e2) {
  e2.sourceSpan && e2.endSourceSpan && (e2.sourceSpan = new h(e2.sourceSpan.start, e2.endSourceSpan.end));
}
function No$1(e2, t2) {
  if (e2.kind === "element" && (t2.normalizeTagName && (!e2.namespace || e2.namespace === e2.tagDefinition.implicitNamespacePrefix || se$1(e2)) && (e2.name = ji(e2.name, (r2) => zi.has(r2))), t2.normalizeAttributeName)) for (let r2 of e2.attrs) r2.namespace || (r2.name = ji(r2.name, (n2) => Bt.has(e2.name) && (Bt.get("*").has(n2) || Bt.get(e2.name).has(n2))));
}
function yr$1(e2, t2) {
  let { rootNodes: r2, errors: n2 } = Rt(e2, Tr$1(t2));
  return n2.length > 0 && xr$1(n2[0]), { parseOptions: t2, rootNodes: r2 };
}
function Qi(e2, t2) {
  let r2 = Tr$1(t2), { rootNodes: n2, errors: i } = Rt(e2, r2);
  if (n2.some((u) => u.kind === "docType" && u.value === "html" || u.kind === "element" && u.name.toLowerCase() === "html")) return yr$1(e2, Ht$1);
  let a, o2 = () => a ?? (a = Rt(e2, { ...r2, getTagContentType: void 0 })), c2 = (u) => {
    let { offset: p } = u.startSourceSpan.start;
    return o2().rootNodes.find((d) => d.kind === "element" && d.startSourceSpan.start.offset === p) ?? u;
  };
  for (let [u, p] of n2.entries()) if (p.kind === "element") {
    if (p.isVoid) i = o2().errors, n2[u] = c2(p);
    else if (Lo$1(p)) {
      let { endSourceSpan: d, startSourceSpan: g } = p, m = o2().errors.find((_2) => _2.span.start.offset > g.start.offset && _2.span.start.offset < d.end.offset);
      m && xr$1(m), n2[u] = c2(p);
    }
  }
  return i.length > 0 && xr$1(i[0]), { parseOptions: t2, rootNodes: n2 };
}
function Lo$1(e2) {
  if (e2.kind !== "element" || e2.name !== "template") return false;
  let t2 = e2.attrs.find((r2) => r2.name === "lang")?.value;
  return !t2 || t2 === "html";
}
function xr$1(e2) {
  let { msg: t2, span: { start: r2, end: n2 } } = e2;
  throw Gi(t2, { loc: { start: { line: r2.line + 1, column: r2.col + 1 }, end: { line: n2.line + 1, column: n2.col + 1 } }, cause: e2 });
}
function Po$1(e2, t2, r2, n2, i, s2) {
  let { offset: a } = n2, o2 = w$1(0, t2.slice(0, a), /[^\n]/gu, " ") + r2, c2 = Ar$1(o2, e2, { ...i, shouldParseFrontMatter: false }, s2);
  c2.sourceSpan = new h(n2, M$1(0, c2.children, -1).sourceSpan.end);
  let u = c2.children[0];
  return u.length === a ? c2.children.shift() : (u.sourceSpan = new h(u.sourceSpan.start.moveBy(a), u.sourceSpan.end), u.value = u.value.slice(a)), c2;
}
function Ar$1(e2, t2, r2, n2 = {}) {
  let { frontMatter: i, content: s2 } = r2.shouldParseFrontMatter ? Xt$1(e2) : { content: e2 }, a = new nt$1(e2, n2.filepath), o2 = new De$1(a, 0, 0, 0), c2 = o2.moveBy(e2.length), { parseOptions: u, rootNodes: p } = t2(s2, r2), d = { kind: "root", sourceSpan: new h(o2, c2), children: p }, g;
  if (i) {
    let [_2, T2] = [i.start, i.end].map((P2) => new De$1(a, P2.index, P2.line - 1, P2.column));
    g = { ...i, kind: "frontMatter", sourceSpan: new h(_2, T2) };
  }
  return Ki(d, g, u, (_2, T2) => Po$1(t2, e2, _2, T2, u, n2));
}
var Ht$1 = Mt$1({ name: "html", normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true });
function at$1(e2) {
  let t2 = Mt$1(e2), r2 = t2.name === "vue" ? Qi : yr$1;
  return { parse: (n2, i) => Ar$1(n2, r2, t2, i), hasPragma: Zn$1, hasIgnorePragma: ei$1, astFormat: "html", locStart: K$1, locEnd: J };
}
var Oo$1 = at$1(Ht$1), Do$1 = /* @__PURE__ */ new Set(["mj-style", "mj-raw"]), Io$1 = at$1({ ...Ht$1, name: "mjml", shouldParseAsRawText: (e2) => Do$1.has(e2) }), Ro$1 = at$1({ name: "angular", tokenizeAngularBlocks: true, tokenizeAngularLetDeclaration: true }), Mo$1 = at$1({ name: "vue", isTagNameCaseSensitive: true, shouldParseAsRawText(e2, t2, r2, n2) {
  return e2.toLowerCase() !== "html" && !r2 && (e2 !== "template" || n2.some(({ name: i, value: s2 }) => i === "lang" && s2 !== "html" && s2 !== "" && s2 !== void 0));
} }), Bo$1 = at$1({ name: "lwc", canSelfClose: false });
var qo$1 = { html: Hi };
const html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ji,
  languages: Vi,
  options: Wi,
  parsers: Nr,
  printers: qo$1
}, Symbol.toStringTag, { value: "Module" }));
var Zn = Object.create;
var Mt = Object.defineProperty;
var eo = Object.getOwnPropertyDescriptor;
var to = Object.getOwnPropertyNames;
var uo = Object.getPrototypeOf, ro = Object.prototype.hasOwnProperty;
var no = (e2, t2) => () => (t2 || e2((t2 = { exports: {} }).exports, t2), t2.exports), Yt2 = (e2, t2) => {
  for (var u in t2) Mt(e2, u, { get: t2[u], enumerable: true });
}, oo = (e2, t2, u, r2) => {
  if (t2 && typeof t2 == "object" || typeof t2 == "function") for (let o2 of to(t2)) !ro.call(e2, o2) && o2 !== u && Mt(e2, o2, { get: () => t2[o2], enumerable: !(r2 = eo(t2, o2)) || r2.enumerable });
  return e2;
};
var ao = (e2, t2, u) => (u = e2 != null ? Zn(uo(e2)) : {}, oo(Mt(u, "default", { value: e2, enumerable: true }), e2));
var dn = no((of, ln2) => {
  var yt2, bt2, At2, _t2, xt2, $e2, bu, Ke2, Bt2, cn2, Tt2, Ve2, Nt2, St2, wt2, pe2, fn2, Ot2, Pt2;
  Nt2 = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]|[^\/\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
  Ve2 = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
  yt2 = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
  wt2 = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y;
  Tt2 = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
  pe2 = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y;
  Pt2 = /[\t\v\f\ufeff\p{Zs}]+/yu;
  Ke2 = /\r?\n|[\r\u2028\u2029]/y;
  Bt2 = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y;
  St2 = /\/\/.*/y;
  At2 = /[<>.:={}]|\/(?![\/*])/y;
  bt2 = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
  _t2 = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y;
  xt2 = /[^<>{}]+/y;
  Ot2 = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
  fn2 = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
  $e2 = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
  bu = /^(?:return|throw|yield)$/;
  cn2 = RegExp(Ke2.source);
  ln2.exports = function* (e2, { jsx: t2 = false } = {}) {
    var u, r2, o2, n2, a, s2, i, D, f2, l2, d, c2, p, F2;
    for ({ length: s2 } = e2, n2 = 0, a = "", F2 = [{ tag: "JS" }], u = [], d = 0, c2 = false; n2 < s2; ) {
      switch (D = F2[F2.length - 1], D.tag) {
        case "JS":
        case "JSNonExpressionParen":
        case "InterpolationInTemplate":
        case "InterpolationInJSX":
          if (e2[n2] === "/" && (Ot2.test(a) || $e2.test(a)) && (Nt2.lastIndex = n2, i = Nt2.exec(e2))) {
            n2 = Nt2.lastIndex, a = i[0], c2 = true, yield { type: "RegularExpressionLiteral", value: i[0], closed: i[1] !== void 0 && i[1] !== "\\" };
            continue;
          }
          if (Ve2.lastIndex = n2, i = Ve2.exec(e2)) {
            switch (p = i[0], f2 = Ve2.lastIndex, l2 = p, p) {
              case "(":
                a === "?NonExpressionParenKeyword" && F2.push({ tag: "JSNonExpressionParen", nesting: d }), d++, c2 = false;
                break;
              case ")":
                d--, c2 = true, D.tag === "JSNonExpressionParen" && d === D.nesting && (F2.pop(), l2 = "?NonExpressionParenEnd", c2 = false);
                break;
              case "{":
                Ve2.lastIndex = 0, o2 = !fn2.test(a) && (Ot2.test(a) || $e2.test(a)), u.push(o2), c2 = false;
                break;
              case "}":
                switch (D.tag) {
                  case "InterpolationInTemplate":
                    if (u.length === D.nesting) {
                      pe2.lastIndex = n2, i = pe2.exec(e2), n2 = pe2.lastIndex, a = i[0], i[1] === "${" ? (a = "?InterpolationInTemplate", c2 = false, yield { type: "TemplateMiddle", value: i[0] }) : (F2.pop(), c2 = true, yield { type: "TemplateTail", value: i[0], closed: i[1] === "`" });
                      continue;
                    }
                    break;
                  case "InterpolationInJSX":
                    if (u.length === D.nesting) {
                      F2.pop(), n2 += 1, a = "}", yield { type: "JSXPunctuator", value: "}" };
                      continue;
                    }
                }
                c2 = u.pop(), l2 = c2 ? "?ExpressionBraceEnd" : "}";
                break;
              case "]":
                c2 = true;
                break;
              case "++":
              case "--":
                l2 = c2 ? "?PostfixIncDec" : "?UnaryIncDec";
                break;
              case "<":
                if (t2 && (Ot2.test(a) || $e2.test(a))) {
                  F2.push({ tag: "JSXTag" }), n2 += 1, a = "<", yield { type: "JSXPunctuator", value: p };
                  continue;
                }
                c2 = false;
                break;
              default:
                c2 = false;
            }
            n2 = f2, a = l2, yield { type: "Punctuator", value: p };
            continue;
          }
          if (yt2.lastIndex = n2, i = yt2.exec(e2)) {
            switch (n2 = yt2.lastIndex, l2 = i[0], i[0]) {
              case "for":
              case "if":
              case "while":
              case "with":
                a !== "." && a !== "?." && (l2 = "?NonExpressionParenKeyword");
            }
            a = l2, c2 = !$e2.test(i[0]), yield { type: i[1] === "#" ? "PrivateIdentifier" : "IdentifierName", value: i[0] };
            continue;
          }
          if (wt2.lastIndex = n2, i = wt2.exec(e2)) {
            n2 = wt2.lastIndex, a = i[0], c2 = true, yield { type: "StringLiteral", value: i[0], closed: i[2] !== void 0 };
            continue;
          }
          if (Tt2.lastIndex = n2, i = Tt2.exec(e2)) {
            n2 = Tt2.lastIndex, a = i[0], c2 = true, yield { type: "NumericLiteral", value: i[0] };
            continue;
          }
          if (pe2.lastIndex = n2, i = pe2.exec(e2)) {
            n2 = pe2.lastIndex, a = i[0], i[1] === "${" ? (a = "?InterpolationInTemplate", F2.push({ tag: "InterpolationInTemplate", nesting: u.length }), c2 = false, yield { type: "TemplateHead", value: i[0] }) : (c2 = true, yield { type: "NoSubstitutionTemplate", value: i[0], closed: i[1] === "`" });
            continue;
          }
          break;
        case "JSXTag":
        case "JSXTagEnd":
          if (At2.lastIndex = n2, i = At2.exec(e2)) {
            switch (n2 = At2.lastIndex, l2 = i[0], i[0]) {
              case "<":
                F2.push({ tag: "JSXTag" });
                break;
              case ">":
                F2.pop(), a === "/" || D.tag === "JSXTagEnd" ? (l2 = "?JSX", c2 = true) : F2.push({ tag: "JSXChildren" });
                break;
              case "{":
                F2.push({ tag: "InterpolationInJSX", nesting: u.length }), l2 = "?InterpolationInJSX", c2 = false;
                break;
              case "/":
                a === "<" && (F2.pop(), F2[F2.length - 1].tag === "JSXChildren" && F2.pop(), F2.push({ tag: "JSXTagEnd" }));
            }
            a = l2, yield { type: "JSXPunctuator", value: i[0] };
            continue;
          }
          if (bt2.lastIndex = n2, i = bt2.exec(e2)) {
            n2 = bt2.lastIndex, a = i[0], yield { type: "JSXIdentifier", value: i[0] };
            continue;
          }
          if (_t2.lastIndex = n2, i = _t2.exec(e2)) {
            n2 = _t2.lastIndex, a = i[0], yield { type: "JSXString", value: i[0], closed: i[2] !== void 0 };
            continue;
          }
          break;
        case "JSXChildren":
          if (xt2.lastIndex = n2, i = xt2.exec(e2)) {
            n2 = xt2.lastIndex, a = i[0], yield { type: "JSXText", value: i[0] };
            continue;
          }
          switch (e2[n2]) {
            case "<":
              F2.push({ tag: "JSXTag" }), n2++, a = "<", yield { type: "JSXPunctuator", value: "<" };
              continue;
            case "{":
              F2.push({ tag: "InterpolationInJSX", nesting: u.length }), n2++, a = "?InterpolationInJSX", c2 = false, yield { type: "JSXPunctuator", value: "{" };
              continue;
          }
      }
      if (Pt2.lastIndex = n2, i = Pt2.exec(e2)) {
        n2 = Pt2.lastIndex, yield { type: "WhiteSpace", value: i[0] };
        continue;
      }
      if (Ke2.lastIndex = n2, i = Ke2.exec(e2)) {
        n2 = Ke2.lastIndex, c2 = false, bu.test(a) && (a = "?NoLineTerminatorHere"), yield { type: "LineTerminatorSequence", value: i[0] };
        continue;
      }
      if (Bt2.lastIndex = n2, i = Bt2.exec(e2)) {
        n2 = Bt2.lastIndex, cn2.test(i[0]) && (c2 = false, bu.test(a) && (a = "?NoLineTerminatorHere")), yield { type: "MultiLineComment", value: i[0], closed: i[1] !== void 0 };
        continue;
      }
      if (St2.lastIndex = n2, i = St2.exec(e2)) {
        n2 = St2.lastIndex, c2 = false, yield { type: "SingleLineComment", value: i[0] };
        continue;
      }
      r2 = String.fromCodePoint(e2.codePointAt(n2)), n2 += r2.length, a = r2, c2 = false, yield { type: D.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid", value: r2 };
    }
  };
});
var Hn = {};
Yt2(Hn, { __debug: () => li, check: () => ci, doc: () => wu, format: () => Jn, formatWithCursor: () => zn, getSupportInfo: () => fi, util: () => Pu, version: () => Mn });
var X = (e2, t2) => (u, r2, ...o2) => u | 1 && r2 == null ? void 0 : (t2.call(r2) ?? r2[e2]).apply(r2, o2);
var io = String.prototype.replaceAll ?? function(e2, t2) {
  return e2.global ? this.replace(e2, t2) : this.split(e2).join(t2);
}, so = X("replaceAll", function() {
  if (typeof this == "string") return io;
}), oe = so;
var Ne = class {
  diff(t2, u, r2 = {}) {
    let o2;
    typeof r2 == "function" ? (o2 = r2, r2 = {}) : "callback" in r2 && (o2 = r2.callback);
    let n2 = this.castInput(t2, r2), a = this.castInput(u, r2), s2 = this.removeEmpty(this.tokenize(n2, r2)), i = this.removeEmpty(this.tokenize(a, r2));
    return this.diffWithOptionsObj(s2, i, r2, o2);
  }
  diffWithOptionsObj(t2, u, r2, o2) {
    var n2;
    let a = (m) => {
      if (m = this.postProcess(m, r2), o2) {
        setTimeout(function() {
          o2(m);
        }, 0);
        return;
      } else return m;
    }, s2 = u.length, i = t2.length, D = 1, f2 = s2 + i;
    r2.maxEditLength != null && (f2 = Math.min(f2, r2.maxEditLength));
    let l2 = (n2 = r2.timeout) !== null && n2 !== void 0 ? n2 : 1 / 0, d = Date.now() + l2, c2 = [{ oldPos: -1, lastComponent: void 0 }], p = this.extractCommon(c2[0], u, t2, 0, r2);
    if (c2[0].oldPos + 1 >= i && p + 1 >= s2) return a(this.buildValues(c2[0].lastComponent, u, t2));
    let F2 = -1 / 0, C2 = 1 / 0, y2 = () => {
      for (let m = Math.max(F2, -D); m <= Math.min(C2, D); m += 2) {
        let h2, E2 = c2[m - 1], g = c2[m + 1];
        E2 && (c2[m - 1] = void 0);
        let A2 = false;
        if (g) {
          let Q = g.oldPos - m;
          A2 = g && 0 <= Q && Q < s2;
        }
        let J2 = E2 && E2.oldPos + 1 < i;
        if (!A2 && !J2) {
          c2[m] = void 0;
          continue;
        }
        if (!J2 || A2 && E2.oldPos < g.oldPos ? h2 = this.addToPath(g, true, false, 0, r2) : h2 = this.addToPath(E2, false, true, 1, r2), p = this.extractCommon(h2, u, t2, m, r2), h2.oldPos + 1 >= i && p + 1 >= s2) return a(this.buildValues(h2.lastComponent, u, t2)) || true;
        c2[m] = h2, h2.oldPos + 1 >= i && (C2 = Math.min(C2, m - 1)), p + 1 >= s2 && (F2 = Math.max(F2, m + 1));
      }
      D++;
    };
    if (o2) (function m() {
      setTimeout(function() {
        if (D > f2 || Date.now() > d) return o2(void 0);
        y2() || m();
      }, 0);
    })();
    else for (; D <= f2 && Date.now() <= d; ) {
      let m = y2();
      if (m) return m;
    }
  }
  addToPath(t2, u, r2, o2, n2) {
    let a = t2.lastComponent;
    return a && !n2.oneChangePerToken && a.added === u && a.removed === r2 ? { oldPos: t2.oldPos + o2, lastComponent: { count: a.count + 1, added: u, removed: r2, previousComponent: a.previousComponent } } : { oldPos: t2.oldPos + o2, lastComponent: { count: 1, added: u, removed: r2, previousComponent: a } };
  }
  extractCommon(t2, u, r2, o2, n2) {
    let a = u.length, s2 = r2.length, i = t2.oldPos, D = i - o2, f2 = 0;
    for (; D + 1 < a && i + 1 < s2 && this.equals(r2[i + 1], u[D + 1], n2); ) D++, i++, f2++, n2.oneChangePerToken && (t2.lastComponent = { count: 1, previousComponent: t2.lastComponent, added: false, removed: false });
    return f2 && !n2.oneChangePerToken && (t2.lastComponent = { count: f2, previousComponent: t2.lastComponent, added: false, removed: false }), t2.oldPos = i, D;
  }
  equals(t2, u, r2) {
    return r2.comparator ? r2.comparator(t2, u) : t2 === u || !!r2.ignoreCase && t2.toLowerCase() === u.toLowerCase();
  }
  removeEmpty(t2) {
    let u = [];
    for (let r2 = 0; r2 < t2.length; r2++) t2[r2] && u.push(t2[r2]);
    return u;
  }
  castInput(t2, u) {
    return t2;
  }
  tokenize(t2, u) {
    return Array.from(t2);
  }
  join(t2) {
    return t2.join("");
  }
  postProcess(t2, u) {
    return t2;
  }
  get useLongestToken() {
    return false;
  }
  buildValues(t2, u, r2) {
    let o2 = [], n2;
    for (; t2; ) o2.push(t2), n2 = t2.previousComponent, delete t2.previousComponent, t2 = n2;
    o2.reverse();
    let a = o2.length, s2 = 0, i = 0, D = 0;
    for (; s2 < a; s2++) {
      let f2 = o2[s2];
      if (f2.removed) f2.value = this.join(r2.slice(D, D + f2.count)), D += f2.count;
      else {
        if (!f2.added && this.useLongestToken) {
          let l2 = u.slice(i, i + f2.count);
          l2 = l2.map(function(d, c2) {
            let p = r2[D + c2];
            return p.length > d.length ? p : d;
          }), f2.value = this.join(l2);
        } else f2.value = this.join(u.slice(i, i + f2.count));
        i += f2.count, f2.added || (D += f2.count);
      }
    }
    return o2;
  }
};
var jt = class extends Ne {
  tokenize(t2) {
    return t2.slice();
  }
  join(t2) {
    return t2;
  }
  removeEmpty(t2) {
    return t2;
  }
}, ku = new jt();
function Ut(e2, t2, u) {
  return ku.diff(e2, t2, u);
}
var Do = () => {
}, P = Do;
var Ru = "cr", Lu = "crlf", co = "lf", fo = co, Wt2 = "\r", Mu = `\r
`, Je = `
`, lo = Je;
function Yu(e2) {
  let t2 = e2.indexOf(Wt2);
  return t2 !== -1 ? e2.charAt(t2 + 1) === Je ? Lu : Ru : fo;
}
function Se(e2) {
  return e2 === Ru ? Wt2 : e2 === Lu ? Mu : lo;
}
var po = /* @__PURE__ */ new Map([[Je, /\n/gu], [Wt2, /\r/gu], [Mu, /\r\n/gu]]);
function $t2(e2, t2) {
  let u = po.get(t2);
  return e2.match(u)?.length ?? 0;
}
var Fo = /\r\n?/gu;
function ju(e2) {
  return oe(0, e2, Fo, Je);
}
function mo(e2) {
  return this[e2 < 0 ? this.length + e2 : e2];
}
var Eo = X("at", function() {
  if (Array.isArray(this) || typeof this == "string") return mo;
}), b = Eo;
var G2 = "string", j = "array", U = "cursor", I$1 = "indent", k = "align", v = "trim", x = "group", w = "fill", B = "if-break", R = "indent-if-break", L = "line-suffix", M = "line-suffix-boundary", _ = "line", O = "label", T = "break-parent", He = /* @__PURE__ */ new Set([U, I$1, k, v, x, w, B, R, L, M, _, O, T]);
function Uu(e2) {
  let t2 = e2.length;
  for (; t2 > 0 && (e2[t2 - 1] === "\r" || e2[t2 - 1] === `
`); ) t2--;
  return t2 < e2.length ? e2.slice(0, t2) : e2;
}
function Co(e2) {
  if (typeof e2 == "string") return G2;
  if (Array.isArray(e2)) return j;
  if (!e2) return;
  let { type: t2 } = e2;
  if (He.has(t2)) return t2;
}
var H = Co;
var ho = (e2) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e2);
function go(e2) {
  let t2 = e2 === null ? "null" : typeof e2;
  if (t2 !== "string" && t2 !== "object") return `Unexpected doc '${t2}', 
Expected it to be 'string' or 'object'.`;
  if (H(e2)) throw new Error("doc is valid.");
  let u = Object.prototype.toString.call(e2);
  if (u !== "[object Object]") return `Unexpected doc '${u}'.`;
  let r2 = ho([...He].map((o2) => `'${o2}'`));
  return `Unexpected doc.type '${e2.type}'.
Expected it to be ${r2}.`;
}
var Vt = class extends Error {
  name = "InvalidDocError";
  constructor(t2) {
    super(go(t2)), this.doc = t2;
  }
}, Z = Vt;
var Wu = {};
function yo(e2, t2, u, r2) {
  let o2 = [e2];
  for (; o2.length > 0; ) {
    let n2 = o2.pop();
    if (n2 === Wu) {
      u(o2.pop());
      continue;
    }
    u && o2.push(n2, Wu);
    let a = H(n2);
    if (!a) throw new Z(n2);
    if (t2?.(n2) !== false) switch (a) {
      case j:
      case w: {
        let s2 = a === j ? n2 : n2.parts;
        for (let i = s2.length, D = i - 1; D >= 0; --D) o2.push(s2[D]);
        break;
      }
      case B:
        o2.push(n2.flatContents, n2.breakContents);
        break;
      case x:
        if (r2 && n2.expandedStates) for (let s2 = n2.expandedStates.length, i = s2 - 1; i >= 0; --i) o2.push(n2.expandedStates[i]);
        else o2.push(n2.contents);
        break;
      case k:
      case I$1:
      case R:
      case O:
      case L:
        o2.push(n2.contents);
        break;
      case G2:
      case U:
      case v:
      case M:
      case _:
      case T:
        break;
      default:
        throw new Z(n2);
    }
  }
}
var we = yo;
function Pe(e2, t2) {
  if (typeof e2 == "string") return t2(e2);
  let u = /* @__PURE__ */ new Map();
  return r2(e2);
  function r2(n2) {
    if (u.has(n2)) return u.get(n2);
    let a = o2(n2);
    return u.set(n2, a), a;
  }
  function o2(n2) {
    switch (H(n2)) {
      case j:
        return t2(n2.map(r2));
      case w:
        return t2({ ...n2, parts: n2.parts.map(r2) });
      case B:
        return t2({ ...n2, breakContents: r2(n2.breakContents), flatContents: r2(n2.flatContents) });
      case x: {
        let { expandedStates: a, contents: s2 } = n2;
        return a ? (a = a.map(r2), s2 = a[0]) : s2 = r2(s2), t2({ ...n2, contents: s2, expandedStates: a });
      }
      case k:
      case I$1:
      case R:
      case O:
      case L:
        return t2({ ...n2, contents: r2(n2.contents) });
      case G2:
      case U:
      case v:
      case M:
      case _:
      case T:
        return t2(n2);
      default:
        throw new Z(n2);
    }
  }
}
function Xe(e2, t2, u) {
  let r2 = u, o2 = false;
  function n2(a) {
    if (o2) return false;
    let s2 = t2(a);
    s2 !== void 0 && (o2 = true, r2 = s2);
  }
  return we(e2, n2), r2;
}
function bo(e2) {
  if (e2.type === x && e2.break || e2.type === _ && e2.hard || e2.type === T) return true;
}
function Ku(e2) {
  return Xe(e2, bo, false);
}
function $u(e2) {
  if (e2.length > 0) {
    let t2 = b(0, e2, -1);
    !t2.expandedStates && !t2.break && (t2.break = "propagated");
  }
  return null;
}
function Gu(e2) {
  let t2 = /* @__PURE__ */ new Set(), u = [];
  function r2(n2) {
    if (n2.type === T && $u(u), n2.type === x) {
      if (u.push(n2), t2.has(n2)) return false;
      t2.add(n2);
    }
  }
  function o2(n2) {
    n2.type === x && u.pop().break && $u(u);
  }
  we(e2, r2, o2, true);
}
function Ao(e2) {
  return e2.type === _ && !e2.hard ? e2.soft ? "" : " " : e2.type === B ? e2.flatContents : e2;
}
function zu(e2) {
  return Pe(e2, Ao);
}
function Vu(e2) {
  for (e2 = [...e2]; e2.length >= 2 && b(0, e2, -2).type === _ && b(0, e2, -1).type === T; ) e2.length -= 2;
  if (e2.length > 0) {
    let t2 = Oe(b(0, e2, -1));
    e2[e2.length - 1] = t2;
  }
  return e2;
}
function Oe(e2) {
  switch (H(e2)) {
    case I$1:
    case R:
    case x:
    case L:
    case O: {
      let t2 = Oe(e2.contents);
      return { ...e2, contents: t2 };
    }
    case B:
      return { ...e2, breakContents: Oe(e2.breakContents), flatContents: Oe(e2.flatContents) };
    case w:
      return { ...e2, parts: Vu(e2.parts) };
    case j:
      return Vu(e2);
    case G2:
      return Uu(e2);
    case k:
    case U:
    case v:
    case M:
    case _:
    case T:
      break;
    default:
      throw new Z(e2);
  }
  return e2;
}
function qe(e2) {
  return Oe(xo(e2));
}
function _o(e2) {
  switch (H(e2)) {
    case w:
      if (e2.parts.every((t2) => t2 === "")) return "";
      break;
    case x:
      if (!e2.contents && !e2.id && !e2.break && !e2.expandedStates) return "";
      if (e2.contents.type === x && e2.contents.id === e2.id && e2.contents.break === e2.break && e2.contents.expandedStates === e2.expandedStates) return e2.contents;
      break;
    case k:
    case I$1:
    case R:
    case L:
      if (!e2.contents) return "";
      break;
    case B:
      if (!e2.flatContents && !e2.breakContents) return "";
      break;
    case j: {
      let t2 = [];
      for (let u of e2) {
        if (!u) continue;
        let [r2, ...o2] = Array.isArray(u) ? u : [u];
        typeof r2 == "string" && typeof b(0, t2, -1) == "string" ? t2[t2.length - 1] += r2 : t2.push(r2), t2.push(...o2);
      }
      return t2.length === 0 ? "" : t2.length === 1 ? t2[0] : t2;
    }
    case G2:
    case U:
    case v:
    case M:
    case _:
    case O:
    case T:
      break;
    default:
      throw new Z(e2);
  }
  return e2;
}
function xo(e2) {
  return Pe(e2, (t2) => _o(t2));
}
function Ju(e2, t2 = Qe) {
  return Pe(e2, (u) => typeof u == "string" ? Ie(t2, u.split(`
`)) : u);
}
function Bo(e2) {
  if (e2.type === _) return true;
}
function Hu(e2) {
  return Xe(e2, Bo, false);
}
function Ee(e2, t2) {
  return e2.type === O ? { ...e2, contents: t2(e2.contents) } : t2(e2);
}
var Ze = P;
function ae(e2) {
  return { type: I$1, contents: e2 };
}
function De(e2, t2) {
  return { type: k, contents: t2, n: e2 };
}
function Qu(e2) {
  return De(Number.NEGATIVE_INFINITY, e2);
}
function et(e2) {
  return De({ type: "root" }, e2);
}
function Zu(e2) {
  return De(-1, e2);
}
function tt(e2, t2, u) {
  let r2 = e2;
  if (t2 > 0) {
    for (let o2 = 0; o2 < Math.floor(t2 / u); ++o2) r2 = ae(r2);
    r2 = De(t2 % u, r2), r2 = De(Number.NEGATIVE_INFINITY, r2);
  }
  return r2;
}
var ce = { type: T };
var ee2 = { type: U };
function er(e2) {
  return { type: w, parts: e2 };
}
function Kt(e2, t2 = {}) {
  return Ze(t2.expandedStates), { type: x, id: t2.id, contents: e2, break: !!t2.shouldBreak, expandedStates: t2.expandedStates };
}
function tr(e2, t2) {
  return Kt(e2[0], { ...t2, expandedStates: e2 });
}
function ur(e2, t2 = "", u = {}) {
  return { type: B, breakContents: e2, flatContents: t2, groupId: u.groupId };
}
function rr(e2, t2) {
  return { type: R, contents: e2, groupId: t2.groupId, negate: t2.negate };
}
function Ie(e2, t2) {
  let u = [];
  for (let r2 = 0; r2 < t2.length; r2++) r2 !== 0 && u.push(e2), u.push(t2[r2]);
  return u;
}
function nr(e2, t2) {
  return e2 ? { type: O, label: e2, contents: t2 } : t2;
}
var ut = { type: _ }, or = { type: _, soft: true }, ke = { type: _, hard: true }, V$1 = [ke, ce], Gt = { type: _, hard: true, literal: true }, Qe = [Gt, ce];
function ve(e2) {
  return { type: L, contents: e2 };
}
var ar = { type: M };
var ir = { type: v };
function te2(e2) {
  if (!e2) return "";
  if (Array.isArray(e2)) {
    let t2 = [];
    for (let u of e2) if (Array.isArray(u)) t2.push(...te2(u));
    else {
      let r2 = te2(u);
      r2 !== "" && t2.push(r2);
    }
    return t2;
  }
  return e2.type === B ? { ...e2, breakContents: te2(e2.breakContents), flatContents: te2(e2.flatContents) } : e2.type === x ? { ...e2, contents: te2(e2.contents), expandedStates: e2.expandedStates?.map(te2) } : e2.type === w ? { type: "fill", parts: e2.parts.map(te2) } : e2.contents ? { ...e2, contents: te2(e2.contents) } : e2;
}
function sr(e2) {
  let t2 = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ new Set();
  return r2(te2(e2));
  function r2(n2, a, s2) {
    if (typeof n2 == "string") return JSON.stringify(n2);
    if (Array.isArray(n2)) {
      let i = n2.map(r2).filter(Boolean);
      return i.length === 1 ? i[0] : `[${i.join(", ")}]`;
    }
    if (n2.type === _) {
      let i = s2?.[a + 1]?.type === T;
      return n2.literal ? i ? "literalline" : "literallineWithoutBreakParent" : n2.hard ? i ? "hardline" : "hardlineWithoutBreakParent" : n2.soft ? "softline" : "line";
    }
    if (n2.type === T) return s2?.[a - 1]?.type === _ && s2[a - 1].hard ? void 0 : "breakParent";
    if (n2.type === v) return "trim";
    if (n2.type === I$1) return "indent(" + r2(n2.contents) + ")";
    if (n2.type === k) return n2.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + r2(n2.contents) + ")" : n2.n < 0 ? "dedent(" + r2(n2.contents) + ")" : n2.n.type === "root" ? "markAsRoot(" + r2(n2.contents) + ")" : "align(" + JSON.stringify(n2.n) + ", " + r2(n2.contents) + ")";
    if (n2.type === B) return "ifBreak(" + r2(n2.breakContents) + (n2.flatContents ? ", " + r2(n2.flatContents) : "") + (n2.groupId ? (n2.flatContents ? "" : ', ""') + `, { groupId: ${o2(n2.groupId)} }` : "") + ")";
    if (n2.type === R) {
      let i = [];
      n2.negate && i.push("negate: true"), n2.groupId && i.push(`groupId: ${o2(n2.groupId)}`);
      let D = i.length > 0 ? `, { ${i.join(", ")} }` : "";
      return `indentIfBreak(${r2(n2.contents)}${D})`;
    }
    if (n2.type === x) {
      let i = [];
      n2.break && n2.break !== "propagated" && i.push("shouldBreak: true"), n2.id && i.push(`id: ${o2(n2.id)}`);
      let D = i.length > 0 ? `, { ${i.join(", ")} }` : "";
      return n2.expandedStates ? `conditionalGroup([${n2.expandedStates.map((f2) => r2(f2)).join(",")}]${D})` : `group(${r2(n2.contents)}${D})`;
    }
    if (n2.type === w) return `fill([${n2.parts.map((i) => r2(i)).join(", ")}])`;
    if (n2.type === L) return "lineSuffix(" + r2(n2.contents) + ")";
    if (n2.type === M) return "lineSuffixBoundary";
    if (n2.type === O) return `label(${JSON.stringify(n2.label)}, ${r2(n2.contents)})`;
    if (n2.type === U) return "cursor";
    throw new Error("Unknown doc type " + n2.type);
  }
  function o2(n2) {
    if (typeof n2 != "symbol") return JSON.stringify(String(n2));
    if (n2 in t2) return t2[n2];
    let a = n2.description || "symbol";
    for (let s2 = 0; ; s2++) {
      let i = a + (s2 > 0 ? ` #${s2}` : "");
      if (!u.has(i)) return u.add(i), t2[n2] = `Symbol.for(${JSON.stringify(i)})`;
    }
  }
}
var Dr = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function zt(e2) {
  return e2 === 12288 || e2 >= 65281 && e2 <= 65376 || e2 >= 65504 && e2 <= 65510;
}
function Jt(e2) {
  return e2 >= 4352 && e2 <= 4447 || e2 === 8986 || e2 === 8987 || e2 === 9001 || e2 === 9002 || e2 >= 9193 && e2 <= 9196 || e2 === 9200 || e2 === 9203 || e2 === 9725 || e2 === 9726 || e2 === 9748 || e2 === 9749 || e2 >= 9776 && e2 <= 9783 || e2 >= 9800 && e2 <= 9811 || e2 === 9855 || e2 >= 9866 && e2 <= 9871 || e2 === 9875 || e2 === 9889 || e2 === 9898 || e2 === 9899 || e2 === 9917 || e2 === 9918 || e2 === 9924 || e2 === 9925 || e2 === 9934 || e2 === 9940 || e2 === 9962 || e2 === 9970 || e2 === 9971 || e2 === 9973 || e2 === 9978 || e2 === 9981 || e2 === 9989 || e2 === 9994 || e2 === 9995 || e2 === 10024 || e2 === 10060 || e2 === 10062 || e2 >= 10067 && e2 <= 10069 || e2 === 10071 || e2 >= 10133 && e2 <= 10135 || e2 === 10160 || e2 === 10175 || e2 === 11035 || e2 === 11036 || e2 === 11088 || e2 === 11093 || e2 >= 11904 && e2 <= 11929 || e2 >= 11931 && e2 <= 12019 || e2 >= 12032 && e2 <= 12245 || e2 >= 12272 && e2 <= 12287 || e2 >= 12289 && e2 <= 12350 || e2 >= 12353 && e2 <= 12438 || e2 >= 12441 && e2 <= 12543 || e2 >= 12549 && e2 <= 12591 || e2 >= 12593 && e2 <= 12686 || e2 >= 12688 && e2 <= 12773 || e2 >= 12783 && e2 <= 12830 || e2 >= 12832 && e2 <= 12871 || e2 >= 12880 && e2 <= 42124 || e2 >= 42128 && e2 <= 42182 || e2 >= 43360 && e2 <= 43388 || e2 >= 44032 && e2 <= 55203 || e2 >= 63744 && e2 <= 64255 || e2 >= 65040 && e2 <= 65049 || e2 >= 65072 && e2 <= 65106 || e2 >= 65108 && e2 <= 65126 || e2 >= 65128 && e2 <= 65131 || e2 >= 94176 && e2 <= 94180 || e2 >= 94192 && e2 <= 94198 || e2 >= 94208 && e2 <= 101589 || e2 >= 101631 && e2 <= 101662 || e2 >= 101760 && e2 <= 101874 || e2 >= 110576 && e2 <= 110579 || e2 >= 110581 && e2 <= 110587 || e2 === 110589 || e2 === 110590 || e2 >= 110592 && e2 <= 110882 || e2 === 110898 || e2 >= 110928 && e2 <= 110930 || e2 === 110933 || e2 >= 110948 && e2 <= 110951 || e2 >= 110960 && e2 <= 111355 || e2 >= 119552 && e2 <= 119638 || e2 >= 119648 && e2 <= 119670 || e2 === 126980 || e2 === 127183 || e2 === 127374 || e2 >= 127377 && e2 <= 127386 || e2 >= 127488 && e2 <= 127490 || e2 >= 127504 && e2 <= 127547 || e2 >= 127552 && e2 <= 127560 || e2 === 127568 || e2 === 127569 || e2 >= 127584 && e2 <= 127589 || e2 >= 127744 && e2 <= 127776 || e2 >= 127789 && e2 <= 127797 || e2 >= 127799 && e2 <= 127868 || e2 >= 127870 && e2 <= 127891 || e2 >= 127904 && e2 <= 127946 || e2 >= 127951 && e2 <= 127955 || e2 >= 127968 && e2 <= 127984 || e2 === 127988 || e2 >= 127992 && e2 <= 128062 || e2 === 128064 || e2 >= 128066 && e2 <= 128252 || e2 >= 128255 && e2 <= 128317 || e2 >= 128331 && e2 <= 128334 || e2 >= 128336 && e2 <= 128359 || e2 === 128378 || e2 === 128405 || e2 === 128406 || e2 === 128420 || e2 >= 128507 && e2 <= 128591 || e2 >= 128640 && e2 <= 128709 || e2 === 128716 || e2 >= 128720 && e2 <= 128722 || e2 >= 128725 && e2 <= 128728 || e2 >= 128732 && e2 <= 128735 || e2 === 128747 || e2 === 128748 || e2 >= 128756 && e2 <= 128764 || e2 >= 128992 && e2 <= 129003 || e2 === 129008 || e2 >= 129292 && e2 <= 129338 || e2 >= 129340 && e2 <= 129349 || e2 >= 129351 && e2 <= 129535 || e2 >= 129648 && e2 <= 129660 || e2 >= 129664 && e2 <= 129674 || e2 >= 129678 && e2 <= 129734 || e2 === 129736 || e2 >= 129741 && e2 <= 129756 || e2 >= 129759 && e2 <= 129770 || e2 >= 129775 && e2 <= 129784 || e2 >= 131072 && e2 <= 196605 || e2 >= 196608 && e2 <= 262141;
}
var cr = "©®‼⁉™ℹ↔↕↖↗↘↙↩↪⌨⏏⏱⏲⏸⏹⏺▪▫▶◀◻◼☀☁☂☃☄☎☑☘☝☠☢☣☦☪☮☯☸☹☺♀♂♟♠♣♥♦♨♻♾⚒⚔⚕⚖⚗⚙⚛⚜⚠⚧⚰⚱⛈⛏⛑⛓⛩⛱⛷⛸⛹✂✈✉✌✍✏✒✔✖✝✡✳✴❄❇❣❤➡⤴⤵⬅⬆⬇";
var To = /[^\x20-\x7F]/u, No = new Set(cr);
function So(e2) {
  if (!e2) return 0;
  if (!To.test(e2)) return e2.length;
  e2 = e2.replace(Dr(), (u) => No.has(u) ? " " : "  ");
  let t2 = 0;
  for (let u of e2) {
    let r2 = u.codePointAt(0);
    r2 <= 31 || r2 >= 127 && r2 <= 159 || r2 >= 768 && r2 <= 879 || r2 >= 65024 && r2 <= 65039 || (t2 += zt(r2) || Jt(r2) ? 2 : 1);
  }
  return t2;
}
var Re = So;
var wo = { type: 0 }, Oo = { type: 1 }, Ht = { value: "", length: 0, queue: [], get root() {
  return Ht;
} };
function fr2(e2, t2, u) {
  let r2 = t2.type === 1 ? e2.queue.slice(0, -1) : [...e2.queue, t2], o2 = "", n2 = 0, a = 0, s2 = 0;
  for (let p of r2) switch (p.type) {
    case 0:
      f2(), u.useTabs ? i(1) : D(u.tabWidth);
      break;
    case 3: {
      let { string: F2 } = p;
      f2(), o2 += F2, n2 += F2.length;
      break;
    }
    case 2: {
      let { width: F2 } = p;
      a += 1, s2 += F2;
      break;
    }
    default:
      throw new Error(`Unexpected indent comment '${p.type}'.`);
  }
  return d(), { ...e2, value: o2, length: n2, queue: r2 };
  function i(p) {
    o2 += "	".repeat(p), n2 += u.tabWidth * p;
  }
  function D(p) {
    o2 += " ".repeat(p), n2 += p;
  }
  function f2() {
    u.useTabs ? l2() : d();
  }
  function l2() {
    a > 0 && i(a), c2();
  }
  function d() {
    s2 > 0 && D(s2), c2();
  }
  function c2() {
    a = 0, s2 = 0;
  }
}
function lr(e2, t2, u) {
  if (!t2) return e2;
  if (t2.type === "root") return { ...e2, root: e2 };
  if (t2 === Number.NEGATIVE_INFINITY) return e2.root;
  let r2;
  return typeof t2 == "number" ? t2 < 0 ? r2 = Oo : r2 = { type: 2, width: t2 } : r2 = { type: 3, string: t2 }, fr2(e2, r2, u);
}
function dr(e2, t2) {
  return fr2(e2, wo, t2);
}
function Po(e2) {
  let t2 = 0;
  for (let u = e2.length - 1; u >= 0; u--) {
    let r2 = e2[u];
    if (r2 === " " || r2 === "	") t2++;
    else break;
  }
  return t2;
}
function Xt(e2) {
  let t2 = Po(e2);
  return { text: t2 === 0 ? e2 : e2.slice(0, e2.length - t2), count: t2 };
}
var W = /* @__PURE__ */ Symbol("MODE_BREAK"), q = /* @__PURE__ */ Symbol("MODE_FLAT"), qt = /* @__PURE__ */ Symbol("DOC_FILL_PRINTED_LENGTH");
function rt(e2, t2, u, r2, o2, n2) {
  if (u === Number.POSITIVE_INFINITY) return true;
  let a = t2.length, s2 = false, i = [e2], D = "";
  for (; u >= 0; ) {
    if (i.length === 0) {
      if (a === 0) return true;
      i.push(t2[--a]);
      continue;
    }
    let { mode: f2, doc: l2 } = i.pop(), d = H(l2);
    switch (d) {
      case G2:
        l2 && (s2 && (D += " ", u -= 1, s2 = false), D += l2, u -= Re(l2));
        break;
      case j:
      case w: {
        let c2 = d === j ? l2 : l2.parts, p = l2[qt] ?? 0;
        for (let F2 = c2.length - 1; F2 >= p; F2--) i.push({ mode: f2, doc: c2[F2] });
        break;
      }
      case I$1:
      case k:
      case R:
      case O:
        i.push({ mode: f2, doc: l2.contents });
        break;
      case v: {
        let { text: c2, count: p } = Xt(D);
        D = c2, u += p;
        break;
      }
      case x: {
        if (n2 && l2.break) return false;
        let c2 = l2.break ? W : f2, p = l2.expandedStates && c2 === W ? b(0, l2.expandedStates, -1) : l2.contents;
        i.push({ mode: c2, doc: p });
        break;
      }
      case B: {
        let p = (l2.groupId ? o2[l2.groupId] || q : f2) === W ? l2.breakContents : l2.flatContents;
        p && i.push({ mode: f2, doc: p });
        break;
      }
      case _:
        if (f2 === W || l2.hard) return true;
        l2.soft || (s2 = true);
        break;
      case L:
        r2 = true;
        break;
      case M:
        if (r2) return false;
        break;
    }
  }
  return false;
}
function Ce(e2, t2) {
  let u = /* @__PURE__ */ Object.create(null), r2 = t2.printWidth, o2 = Se(t2.endOfLine), n2 = 0, a = [{ indent: Ht, mode: W, doc: e2 }], s2 = "", i = false, D = [], f2 = [], l2 = [], d = [], c2 = 0;
  for (Gu(e2); a.length > 0; ) {
    let { indent: m, mode: h2, doc: E2 } = a.pop();
    switch (H(E2)) {
      case G2: {
        let g = o2 !== `
` ? oe(0, E2, `
`, o2) : E2;
        g && (s2 += g, a.length > 0 && (n2 += Re(g)));
        break;
      }
      case j:
        for (let g = E2.length - 1; g >= 0; g--) a.push({ indent: m, mode: h2, doc: E2[g] });
        break;
      case U:
        if (f2.length >= 2) throw new Error("There are too many 'cursor' in doc.");
        f2.push(c2 + s2.length);
        break;
      case I$1:
        a.push({ indent: dr(m, t2), mode: h2, doc: E2.contents });
        break;
      case k:
        a.push({ indent: lr(m, E2.n, t2), mode: h2, doc: E2.contents });
        break;
      case v:
        y2();
        break;
      case x:
        switch (h2) {
          case q:
            if (!i) {
              a.push({ indent: m, mode: E2.break ? W : q, doc: E2.contents });
              break;
            }
          case W: {
            i = false;
            let g = { indent: m, mode: q, doc: E2.contents }, A2 = r2 - n2, J2 = D.length > 0;
            if (!E2.break && rt(g, a, A2, J2, u)) a.push(g);
            else if (E2.expandedStates) {
              let Q = b(0, E2.expandedStates, -1);
              if (E2.break) {
                a.push({ indent: m, mode: W, doc: Q });
                break;
              } else for (let re2 = 1; re2 < E2.expandedStates.length + 1; re2++) if (re2 >= E2.expandedStates.length) {
                a.push({ indent: m, mode: W, doc: Q });
                break;
              } else {
                let Te2 = E2.expandedStates[re2], ne = { indent: m, mode: q, doc: Te2 };
                if (rt(ne, a, A2, J2, u)) {
                  a.push(ne);
                  break;
                }
              }
            } else a.push({ indent: m, mode: W, doc: E2.contents });
            break;
          }
        }
        E2.id && (u[E2.id] = b(0, a, -1).mode);
        break;
      case w: {
        let g = r2 - n2, A2 = E2[qt] ?? 0, { parts: J2 } = E2, Q = J2.length - A2;
        if (Q === 0) break;
        let re2 = J2[A2 + 0], Te2 = J2[A2 + 1], ne = { indent: m, mode: q, doc: re2 }, vt2 = { indent: m, mode: W, doc: re2 }, Rt2 = rt(ne, [], g, D.length > 0, u, true);
        if (Q === 1) {
          Rt2 ? a.push(ne) : a.push(vt2);
          break;
        }
        let Iu = { indent: m, mode: q, doc: Te2 }, Lt2 = { indent: m, mode: W, doc: Te2 };
        if (Q === 2) {
          Rt2 ? a.push(Iu, ne) : a.push(Lt2, vt2);
          break;
        }
        let Xn2 = J2[A2 + 2], qn2 = { indent: m, mode: h2, doc: { ...E2, [qt]: A2 + 2 } }, Qn2 = rt({ indent: m, mode: q, doc: [re2, Te2, Xn2] }, [], g, D.length > 0, u, true);
        a.push(qn2), Qn2 ? a.push(Iu, ne) : Rt2 ? a.push(Lt2, ne) : a.push(Lt2, vt2);
        break;
      }
      case B:
      case R: {
        let g = E2.groupId ? u[E2.groupId] : h2;
        if (g === W) {
          let A2 = E2.type === B ? E2.breakContents : E2.negate ? E2.contents : ae(E2.contents);
          A2 && a.push({ indent: m, mode: h2, doc: A2 });
        }
        if (g === q) {
          let A2 = E2.type === B ? E2.flatContents : E2.negate ? ae(E2.contents) : E2.contents;
          A2 && a.push({ indent: m, mode: h2, doc: A2 });
        }
        break;
      }
      case L:
        D.push({ indent: m, mode: h2, doc: E2.contents });
        break;
      case M:
        D.length > 0 && a.push({ indent: m, mode: h2, doc: ke });
        break;
      case _:
        switch (h2) {
          case q:
            if (E2.hard) i = true;
            else {
              E2.soft || (s2 += " ", n2 += 1);
              break;
            }
          case W:
            if (D.length > 0) {
              a.push({ indent: m, mode: h2, doc: E2 }, ...D.reverse()), D.length = 0;
              break;
            }
            E2.literal ? (s2 += o2, n2 = 0, m.root && (m.root.value && (s2 += m.root.value), n2 = m.root.length)) : (y2(), s2 += o2 + m.value, n2 = m.length);
            break;
        }
        break;
      case O:
        a.push({ indent: m, mode: h2, doc: E2.contents });
        break;
      case T:
        break;
      default:
        throw new Z(E2);
    }
    a.length === 0 && D.length > 0 && (a.push(...D.reverse()), D.length = 0);
  }
  let p = l2.join("") + s2, F2 = [...d, ...f2];
  if (F2.length !== 2) return { formatted: p };
  let C2 = F2[0];
  return { formatted: p, cursorNodeStart: C2, cursorNodeText: p.slice(C2, b(0, F2, -1)) };
  function y2() {
    let { text: m, count: h2 } = Xt(s2);
    m && (l2.push(m), c2 += m.length), s2 = "", n2 -= h2, f2.length > 0 && (d.push(...f2.map((E2) => Math.min(E2, c2))), f2.length = 0);
  }
}
function Io(e2, t2, u = 0) {
  let r2 = 0;
  for (let o2 = u; o2 < e2.length; ++o2) e2[o2] === "	" ? r2 = r2 + t2 - r2 % t2 : r2++;
  return r2;
}
var he = Io;
var Qt = class {
  constructor(t2) {
    this.stack = [t2];
  }
  get key() {
    let { stack: t2, siblings: u } = this;
    return b(0, t2, u === null ? -2 : -4) ?? null;
  }
  get index() {
    return this.siblings === null ? null : b(0, this.stack, -2);
  }
  get node() {
    return b(0, this.stack, -1);
  }
  get parent() {
    return this.getNode(1);
  }
  get grandparent() {
    return this.getNode(2);
  }
  get isInArray() {
    return this.siblings !== null;
  }
  get siblings() {
    let { stack: t2 } = this, u = b(0, t2, -3);
    return Array.isArray(u) ? u : null;
  }
  get next() {
    let { siblings: t2 } = this;
    return t2 === null ? null : t2[this.index + 1];
  }
  get previous() {
    let { siblings: t2 } = this;
    return t2 === null ? null : t2[this.index - 1];
  }
  get isFirst() {
    return this.index === 0;
  }
  get isLast() {
    let { siblings: t2, index: u } = this;
    return t2 !== null && u === t2.length - 1;
  }
  get isRoot() {
    return this.stack.length === 1;
  }
  get root() {
    return this.stack[0];
  }
  get ancestors() {
    return [...this.#e()];
  }
  getName() {
    let { stack: t2 } = this, { length: u } = t2;
    return u > 1 ? b(0, t2, -2) : null;
  }
  getValue() {
    return b(0, this.stack, -1);
  }
  getNode(t2 = 0) {
    let u = this.#t(t2);
    return u === -1 ? null : this.stack[u];
  }
  getParentNode(t2 = 0) {
    return this.getNode(t2 + 1);
  }
  #t(t2) {
    let { stack: u } = this;
    for (let r2 = u.length - 1; r2 >= 0; r2 -= 2) if (!Array.isArray(u[r2]) && --t2 < 0) return r2;
    return -1;
  }
  call(t2, ...u) {
    let { stack: r2 } = this, { length: o2 } = r2, n2 = b(0, r2, -1);
    for (let a of u) n2 = n2?.[a], r2.push(a, n2);
    try {
      return t2(this);
    } finally {
      r2.length = o2;
    }
  }
  callParent(t2, u = 0) {
    let r2 = this.#t(u + 1), o2 = this.stack.splice(r2 + 1);
    try {
      return t2(this);
    } finally {
      this.stack.push(...o2);
    }
  }
  each(t2, ...u) {
    let { stack: r2 } = this, { length: o2 } = r2, n2 = b(0, r2, -1);
    for (let a of u) n2 = n2[a], r2.push(a, n2);
    try {
      for (let a = 0; a < n2.length; ++a) r2.push(a, n2[a]), t2(this, a, n2), r2.length -= 2;
    } finally {
      r2.length = o2;
    }
  }
  map(t2, ...u) {
    let r2 = [];
    return this.each((o2, n2, a) => {
      r2[n2] = t2(o2, n2, a);
    }, ...u), r2;
  }
  match(...t2) {
    let u = this.stack.length - 1, r2 = null, o2 = this.stack[u--];
    for (let n2 of t2) {
      if (o2 === void 0) return false;
      let a = null;
      if (typeof r2 == "number" && (a = r2, r2 = this.stack[u--], o2 = this.stack[u--]), n2 && !n2(o2, r2, a)) return false;
      r2 = this.stack[u--], o2 = this.stack[u--];
    }
    return true;
  }
  findAncestor(t2) {
    for (let u of this.#e()) if (t2(u)) return u;
  }
  hasAncestor(t2) {
    for (let u of this.#e()) if (t2(u)) return true;
    return false;
  }
  *#e() {
    let { stack: t2 } = this;
    for (let u = t2.length - 3; u >= 0; u -= 2) {
      let r2 = t2[u];
      Array.isArray(r2) || (yield r2);
    }
  }
}, pr = Qt;
function ko(e2) {
  return e2 !== null && typeof e2 == "object";
}
var ge2 = ko;
function ye(e2) {
  return (t2, u, r2) => {
    let o2 = !!r2?.backwards;
    if (u === false) return false;
    let { length: n2 } = t2, a = u;
    for (; a >= 0 && a < n2; ) {
      let s2 = t2.charAt(a);
      if (e2 instanceof RegExp) {
        if (!e2.test(s2)) return a;
      } else if (!e2.includes(s2)) return a;
      o2 ? a-- : a++;
    }
    return a === -1 || a === n2 ? a : false;
  };
}
var Fr = ye(/\s/u), Y = ye(" 	"), nt2 = ye(",; 	"), ot = ye(/[^\n\r]/u);
var mr2 = (e2) => e2 === `
` || e2 === "\r" || e2 === "\u2028" || e2 === "\u2029";
function vo(e2, t2, u) {
  let r2 = !!u?.backwards;
  if (t2 === false) return false;
  let o2 = e2.charAt(t2);
  if (r2) {
    if (e2.charAt(t2 - 1) === "\r" && o2 === `
`) return t2 - 2;
    if (mr2(o2)) return t2 - 1;
  } else {
    if (o2 === "\r" && e2.charAt(t2 + 1) === `
`) return t2 + 2;
    if (mr2(o2)) return t2 + 1;
  }
  return t2;
}
var K = vo;
function Ro(e2, t2, u = {}) {
  let r2 = Y(e2, u.backwards ? t2 - 1 : t2, u), o2 = K(e2, r2, u);
  return r2 !== o2;
}
var z = Ro;
function Lo(e2) {
  return Array.isArray(e2) && e2.length > 0;
}
var Er2 = Lo;
function* be(e2, t2) {
  let { getVisitorKeys: u, filter: r2 = () => true } = t2, o2 = (n2) => ge2(n2) && r2(n2);
  for (let n2 of u(e2)) {
    let a = e2[n2];
    if (Array.isArray(a)) for (let s2 of a) o2(s2) && (yield s2);
    else o2(a) && (yield a);
  }
}
function* Cr(e2, t2) {
  let u = [e2];
  for (let r2 = 0; r2 < u.length; r2++) {
    let o2 = u[r2];
    for (let n2 of be(o2, t2)) yield n2, u.push(n2);
  }
}
function hr2(e2, t2) {
  return be(e2, t2).next().done;
}
function gr(e2, t2, u) {
  let { cache: r2 } = u;
  if (r2.has(e2)) return r2.get(e2);
  let { filter: o2 } = u;
  if (!o2) return [];
  let n2, a = (u.getChildren?.(e2, u) ?? [...be(e2, { getVisitorKeys: u.getVisitorKeys })]).flatMap((D) => (n2 ?? (n2 = [e2, ...t2]), o2(D, n2) ? [D] : gr(D, n2, u))), { locStart: s2, locEnd: i } = u;
  return a.sort((D, f2) => s2(D) - s2(f2) || i(D) - i(f2)), r2.set(e2, a), a;
}
var at = gr;
function Mo(e2) {
  let t2 = e2.type || e2.kind || "(unknown type)", u = String(e2.name || e2.id && (typeof e2.id == "object" ? e2.id.name : e2.id) || e2.key && (typeof e2.key == "object" ? e2.key.name : e2.key) || e2.value && (typeof e2.value == "object" ? "" : String(e2.value)) || e2.operator || "");
  return u.length > 20 && (u = u.slice(0, 19) + "…"), t2 + (u ? " " + u : "");
}
function Zt(e2, t2) {
  (e2.comments ?? (e2.comments = [])).push(t2), t2.printed = false, t2.nodeDescription = Mo(e2);
}
function fe(e2, t2) {
  t2.leading = true, t2.trailing = false, Zt(e2, t2);
}
function ue(e2, t2, u) {
  t2.leading = false, t2.trailing = false, u && (t2.marker = u), Zt(e2, t2);
}
function le(e2, t2) {
  t2.leading = false, t2.trailing = true, Zt(e2, t2);
}
var uu = /* @__PURE__ */ new WeakMap();
function br(e2, t2, u, r2, o2 = []) {
  let { locStart: n2, locEnd: a } = u, s2 = n2(t2), i = a(t2), D = at(e2, o2, { cache: uu, locStart: n2, locEnd: a, getVisitorKeys: u.getVisitorKeys, filter: u.printer.canAttachComment, getChildren: u.printer.getCommentChildNodes }), f2, l2, d = 0, c2 = D.length;
  for (; d < c2; ) {
    let p = d + c2 >> 1, F2 = D[p], C2 = n2(F2), y2 = a(F2);
    if (C2 <= s2 && i <= y2) return br(F2, t2, u, F2, [F2, ...o2]);
    if (y2 <= s2) {
      f2 = F2, d = p + 1;
      continue;
    }
    if (i <= C2) {
      l2 = F2, c2 = p;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if (r2?.type === "TemplateLiteral") {
    let { quasis: p } = r2, F2 = tu(p, t2, u);
    f2 && tu(p, f2, u) !== F2 && (f2 = null), l2 && tu(p, l2, u) !== F2 && (l2 = null);
  }
  return { enclosingNode: r2, precedingNode: f2, followingNode: l2 };
}
var eu = () => false;
function Ar(e2, t2) {
  let { comments: u } = e2;
  if (delete e2.comments, !Er2(u) || !t2.printer.canAttachComment) return;
  let r2 = [], { printer: { features: { experimental_avoidAstMutation: o2 }, handleComments: n2 = {} }, originalText: a } = t2, { ownLine: s2 = eu, endOfLine: i = eu, remaining: D = eu } = n2, f2 = u.map((l2, d) => ({ ...br(e2, l2, t2), comment: l2, text: a, options: t2, ast: e2, isLastComment: u.length - 1 === d }));
  for (let [l2, d] of f2.entries()) {
    let { comment: c2, precedingNode: p, enclosingNode: F2, followingNode: C2, text: y2, options: m, ast: h2, isLastComment: E2 } = d, g;
    if (o2 ? g = [d] : (c2.enclosingNode = F2, c2.precedingNode = p, c2.followingNode = C2, g = [c2, y2, m, h2, E2]), Yo(y2, m, f2, l2)) c2.placement = "ownLine", s2(...g) || (C2 ? fe(C2, c2) : p ? le(p, c2) : F2 ? ue(F2, c2) : ue(h2, c2));
    else if (jo(y2, m, f2, l2)) c2.placement = "endOfLine", i(...g) || (p ? le(p, c2) : C2 ? fe(C2, c2) : F2 ? ue(F2, c2) : ue(h2, c2));
    else if (c2.placement = "remaining", !D(...g)) if (p && C2) {
      let A2 = r2.length;
      A2 > 0 && r2[A2 - 1].followingNode !== C2 && yr(r2, m), r2.push(d);
    } else p ? le(p, c2) : C2 ? fe(C2, c2) : F2 ? ue(F2, c2) : ue(h2, c2);
  }
  if (yr(r2, t2), !o2) for (let l2 of u) delete l2.precedingNode, delete l2.enclosingNode, delete l2.followingNode;
}
var _r2 = (e2) => !/[\S\n\u2028\u2029]/u.test(e2);
function Yo(e2, t2, u, r2) {
  let { comment: o2, precedingNode: n2 } = u[r2], { locStart: a, locEnd: s2 } = t2, i = a(o2);
  if (n2) for (let D = r2 - 1; D >= 0; D--) {
    let { comment: f2, precedingNode: l2 } = u[D];
    if (l2 !== n2 || !_r2(e2.slice(s2(f2), i))) break;
    i = a(f2);
  }
  return z(e2, i, { backwards: true });
}
function jo(e2, t2, u, r2) {
  let { comment: o2, followingNode: n2 } = u[r2], { locStart: a, locEnd: s2 } = t2, i = s2(o2);
  if (n2) for (let D = r2 + 1; D < u.length; D++) {
    let { comment: f2, followingNode: l2 } = u[D];
    if (l2 !== n2 || !_r2(e2.slice(i, a(f2)))) break;
    i = s2(f2);
  }
  return z(e2, i);
}
function yr(e2, t2) {
  let u = e2.length;
  if (u === 0) return;
  let { precedingNode: r2, followingNode: o2 } = e2[0], n2 = t2.locStart(o2), a;
  for (a = u; a > 0; --a) {
    let { comment: s2, precedingNode: i, followingNode: D } = e2[a - 1];
    let f2 = t2.originalText.slice(t2.locEnd(s2), n2);
    if (t2.printer.isGap?.(f2, t2) ?? /^[\s(]*$/u.test(f2)) n2 = t2.locStart(s2);
    else break;
  }
  for (let [s2, { comment: i }] of e2.entries()) s2 < a ? le(r2, i) : fe(o2, i);
  for (let s2 of [r2, o2]) s2.comments && s2.comments.length > 1 && s2.comments.sort((i, D) => t2.locStart(i) - t2.locStart(D));
  e2.length = 0;
}
function tu(e2, t2, u) {
  let r2 = u.locStart(t2) - 1;
  for (let o2 = 1; o2 < e2.length; ++o2) if (r2 < u.locStart(e2[o2])) return o2 - 1;
  return 0;
}
function Uo(e2, t2) {
  let u = t2 - 1;
  u = Y(e2, u, { backwards: true }), u = K(e2, u, { backwards: true }), u = Y(e2, u, { backwards: true });
  let r2 = K(e2, u, { backwards: true });
  return u !== r2;
}
var Le = Uo;
function xr(e2, t2) {
  let u = e2.node;
  return u.printed = true, t2.printer.printComment(e2, t2);
}
function Wo(e2, t2) {
  let u = e2.node, r2 = [xr(e2, t2)], { printer: o2, originalText: n2, locStart: a, locEnd: s2 } = t2;
  if (o2.isBlockComment?.(u)) {
    let f2 = z(n2, s2(u)) ? z(n2, a(u), { backwards: true }) ? V$1 : ut : " ";
    r2.push(f2);
  } else r2.push(V$1);
  let D = K(n2, Y(n2, s2(u)));
  return D !== false && z(n2, D) && r2.push(V$1), r2;
}
function $o(e2, t2, u) {
  let r2 = e2.node, o2 = xr(e2, t2), { printer: n2, originalText: a, locStart: s2 } = t2, i = n2.isBlockComment?.(r2);
  if (u?.hasLineSuffix && !u?.isBlock || z(a, s2(r2), { backwards: true })) {
    let D = Le(a, s2(r2));
    return { doc: ve([V$1, D ? V$1 : "", o2]), isBlock: i, hasLineSuffix: true };
  }
  return !i || u?.hasLineSuffix ? { doc: [ve([" ", o2]), ce], isBlock: i, hasLineSuffix: true } : { doc: [" ", o2], isBlock: i, hasLineSuffix: false };
}
function Vo(e2, t2) {
  let u = e2.node;
  if (!u) return {};
  let r2 = t2[/* @__PURE__ */ Symbol.for("printedComments")];
  if ((u.comments || []).filter((i) => !r2.has(i)).length === 0) return { leading: "", trailing: "" };
  let n2 = [], a = [], s2;
  return e2.each(() => {
    let i = e2.node;
    if (r2?.has(i)) return;
    let { leading: D, trailing: f2 } = i;
    D ? n2.push(Wo(e2, t2)) : f2 && (s2 = $o(e2, t2, s2), a.push(s2.doc));
  }, "comments"), { leading: n2, trailing: a };
}
function Br(e2, t2, u) {
  let { leading: r2, trailing: o2 } = Vo(e2, u);
  return !r2 && !o2 ? t2 : Ee(t2, (n2) => [r2, n2, o2]);
}
function Tr(e2) {
  let { [/* @__PURE__ */ Symbol.for("comments")]: t2, [/* @__PURE__ */ Symbol.for("printedComments")]: u } = e2;
  for (let r2 of t2) {
    if (!r2.printed && !u.has(r2)) throw new Error('Comment "' + r2.value.trim() + '" was not printed. Please report this error!');
    delete r2.printed;
  }
}
var Me = class extends Error {
  name = "ConfigError";
}, Ye = class extends Error {
  name = "UndefinedParserError";
};
var Sr2 = { checkIgnorePragma: { category: "Special", type: "boolean", default: false, description: "Check whether the file's first docblock comment contains '@noprettier' or '@noformat' to determine if it should be formatted.", cliCategory: "Other" }, cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e2) => typeof e2 == "string" || typeof e2 == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }, { value: "mjml", description: "MJML" }] }, plugins: { type: "path", array: true, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e2) => typeof e2 == "string" || typeof e2 == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: false, description: "Require either '@prettier' or '@format' to be present in the file's first docblock comment in order for it to be formatted.", cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
function it({ plugins: e2 = [], showDeprecated: t2 = false } = {}) {
  let u = e2.flatMap((o2) => o2.languages ?? []), r2 = [];
  for (let o2 of Go(Object.assign({}, ...e2.map(({ options: n2 }) => n2), Sr2))) !t2 && o2.deprecated || (Array.isArray(o2.choices) && (t2 || (o2.choices = o2.choices.filter((n2) => !n2.deprecated)), o2.name === "parser" && (o2.choices = [...o2.choices, ...Ko(o2.choices, u, e2)])), o2.pluginDefaults = Object.fromEntries(e2.filter((n2) => n2.defaultOptions?.[o2.name] !== void 0).map((n2) => [n2.name, n2.defaultOptions[o2.name]])), r2.push(o2));
  return { languages: u, options: r2 };
}
function* Ko(e2, t2, u) {
  let r2 = new Set(e2.map((o2) => o2.value));
  for (let o2 of t2) if (o2.parsers) {
    for (let n2 of o2.parsers) if (!r2.has(n2)) {
      r2.add(n2);
      let a = u.find((i) => i.parsers && Object.prototype.hasOwnProperty.call(i.parsers, n2)), s2 = o2.name;
      a?.name && (s2 += ` (plugin: ${a.name})`), yield { value: n2, description: s2 };
    }
  }
}
function Go(e2) {
  let t2 = [];
  for (let [u, r2] of Object.entries(e2)) {
    let o2 = { name: u, ...r2 };
    Array.isArray(o2.default) && (o2.default = b(0, o2.default, -1).value), t2.push(o2);
  }
  return t2;
}
var zo = Array.prototype.toReversed ?? function() {
  return [...this].reverse();
}, Jo = X("toReversed", function() {
  if (Array.isArray(this)) return zo;
}), wr = Jo;
function Ho() {
  let e2 = globalThis, t2 = e2.Deno?.build?.os;
  return typeof t2 == "string" ? t2 === "windows" : e2.navigator?.platform?.startsWith("Win") ?? e2.process?.platform?.startsWith("win") ?? false;
}
var Xo = Ho();
function Or(e2) {
  if (e2 = e2 instanceof URL ? e2 : new URL(e2), e2.protocol !== "file:") throw new TypeError(`URL must be a file URL: received "${e2.protocol}"`);
  return e2;
}
function qo(e2) {
  return e2 = Or(e2), decodeURIComponent(e2.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function Qo(e2) {
  e2 = Or(e2);
  let t2 = decodeURIComponent(e2.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  return e2.hostname !== "" && (t2 = `\\\\${e2.hostname}${t2}`), t2;
}
function ru(e2) {
  return Xo ? Qo(e2) : qo(e2);
}
var Pr = (e2) => String(e2).split(/[/\\]/u).pop(), Ir = (e2) => String(e2).startsWith("file:");
function kr2(e2, t2) {
  if (!t2) return;
  let u = Pr(t2).toLowerCase();
  return e2.find(({ filenames: r2 }) => r2?.some((o2) => o2.toLowerCase() === u)) ?? e2.find(({ extensions: r2 }) => r2?.some((o2) => u.endsWith(o2)));
}
function Zo(e2, t2) {
  if (t2) return e2.find(({ name: u }) => u.toLowerCase() === t2) ?? e2.find(({ aliases: u }) => u?.includes(t2)) ?? e2.find(({ extensions: u }) => u?.includes(`.${t2}`));
}
var ea = void 0;
function vr(e2, t2) {
  if (t2) {
    if (Ir(t2)) try {
      t2 = ru(t2);
    } catch {
      return;
    }
    if (typeof t2 == "string") return e2.find(({ isSupported: u }) => u?.({ filepath: t2 }));
  }
}
function ta(e2, t2) {
  let u = wr(0, e2.plugins).flatMap((o2) => o2.languages ?? []);
  return (Zo(u, t2.language) ?? kr2(u, t2.physicalFile) ?? kr2(u, t2.file) ?? vr(u, t2.physicalFile) ?? vr(u, t2.file) ?? ea?.(u, t2.physicalFile))?.parsers[0];
}
var st = ta;
var ie = { key: (e2) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e2) ? e2 : JSON.stringify(e2), value(e2) {
  if (e2 === null || typeof e2 != "object") return JSON.stringify(e2);
  if (Array.isArray(e2)) return `[${e2.map((u) => ie.value(u)).join(", ")}]`;
  let t2 = Object.keys(e2);
  return t2.length === 0 ? "{}" : `{ ${t2.map((u) => `${ie.key(u)}: ${ie.value(e2[u])}`).join(", ")} }`;
}, pair: ({ key: e2, value: t2 }) => ie.value({ [e2]: t2 }) };
var nu = new Proxy(String, { get: () => nu }), $ = nu, ou = () => nu;
var Rr = (e2, t2, { descriptor: u }) => {
  let r2 = [`${$.yellow(typeof e2 == "string" ? u.key(e2) : u.pair(e2))} is deprecated`];
  return t2 && r2.push(`we now treat it as ${$.blue(typeof t2 == "string" ? u.key(t2) : u.pair(t2))}`), r2.join("; ") + ".";
};
var Dt = /* @__PURE__ */ Symbol.for("vnopts.VALUE_NOT_EXIST"), Ae = /* @__PURE__ */ Symbol.for("vnopts.VALUE_UNCHANGED");
var Lr = " ".repeat(2), Yr = (e2, t2, u) => {
  let { text: r2, list: o2 } = u.normalizeExpectedResult(u.schemas[e2].expected(u)), n2 = [];
  return r2 && n2.push(Mr(e2, t2, r2, u.descriptor)), o2 && n2.push([Mr(e2, t2, o2.title, u.descriptor)].concat(o2.values.map((a) => jr(a, u.loggerPrintWidth))).join(`
`)), Ur(n2, u.loggerPrintWidth);
};
function Mr(e2, t2, u, r2) {
  return [`Invalid ${$.red(r2.key(e2))} value.`, `Expected ${$.blue(u)},`, `but received ${t2 === Dt ? $.gray("nothing") : $.red(r2.value(t2))}.`].join(" ");
}
function jr({ text: e2, list: t2 }, u) {
  let r2 = [];
  return e2 && r2.push(`- ${$.blue(e2)}`), t2 && r2.push([`- ${$.blue(t2.title)}:`].concat(t2.values.map((o2) => jr(o2, u - Lr.length).replace(/^|\n/g, `$&${Lr}`))).join(`
`)), Ur(r2, u);
}
function Ur(e2, t2) {
  if (e2.length === 1) return e2[0];
  let [u, r2] = e2, [o2, n2] = e2.map((a) => a.split(`
`, 1)[0].length);
  return o2 > t2 && o2 > n2 ? r2 : u;
}
var _e = [], au = [];
function ct(e2, t2, u) {
  if (e2 === t2) return 0;
  let r2 = u?.maxDistance, o2 = e2;
  e2.length > t2.length && (e2 = t2, t2 = o2);
  let n2 = e2.length, a = t2.length;
  for (; n2 > 0 && e2.charCodeAt(~-n2) === t2.charCodeAt(~-a); ) n2--, a--;
  let s2 = 0;
  for (; s2 < n2 && e2.charCodeAt(s2) === t2.charCodeAt(s2); ) s2++;
  if (n2 -= s2, a -= s2, r2 !== void 0 && a - n2 > r2) return r2;
  if (n2 === 0) return r2 !== void 0 && a > r2 ? r2 : a;
  let i, D, f2, l2, d = 0, c2 = 0;
  for (; d < n2; ) au[d] = e2.charCodeAt(s2 + d), _e[d] = ++d;
  for (; c2 < a; ) {
    for (i = t2.charCodeAt(s2 + c2), f2 = c2++, D = c2, d = 0; d < n2; d++) l2 = i === au[d] ? f2 : f2 + 1, f2 = _e[d], D = _e[d] = f2 > D ? l2 > D ? D + 1 : l2 : l2 > f2 ? f2 + 1 : l2;
    if (r2 !== void 0) {
      let p = D;
      for (d = 0; d < n2; d++) _e[d] < p && (p = _e[d]);
      if (p > r2) return r2;
    }
  }
  return _e.length = n2, au.length = n2, r2 !== void 0 && D > r2 ? r2 : D;
}
function Wr(e2, t2, u) {
  if (!Array.isArray(t2) || t2.length === 0) return;
  let r2 = u?.maxDistance, o2 = e2.length;
  for (let i of t2) if (i === e2) return i;
  let n2, a = Number.POSITIVE_INFINITY, s2 = /* @__PURE__ */ new Set();
  for (let i of t2) {
    if (s2.has(i)) continue;
    s2.add(i);
    let D = Math.abs(i.length - o2);
    if (D >= a || D > r2) continue;
    let f2 = Number.isFinite(a) ? Math.min(a, r2) : r2, l2 = f2 === void 0 ? ct(e2, i) : ct(e2, i, { maxDistance: f2 });
    if (l2 > r2) continue;
    let d = l2;
    if (f2 !== void 0 && l2 === f2 && f2 === r2 && (d = ct(e2, i)), d < a && (a = d, n2 = i, a === 0)) break;
  }
  if (!(a > r2)) return n2;
}
var ft = (e2, t2, { descriptor: u, logger: r2, schemas: o2 }) => {
  let n2 = [`Ignored unknown option ${$.yellow(u.pair({ key: e2, value: t2 }))}.`], a = Wr(e2, Object.keys(o2), { maxDistance: 3 });
  a && n2.push(`Did you mean ${$.blue(u.key(a))}?`), r2.warn(n2.join(" "));
};
var ua = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
function ra(e2, t2) {
  let u = new e2(t2), r2 = Object.create(u);
  for (let o2 of ua) o2 in t2 && (r2[o2] = na(t2[o2], u, S.prototype[o2].length));
  return r2;
}
var S = class {
  static create(t2) {
    return ra(this, t2);
  }
  constructor(t2) {
    this.name = t2.name;
  }
  default(t2) {
  }
  expected(t2) {
    return "nothing";
  }
  validate(t2, u) {
    return false;
  }
  deprecated(t2, u) {
    return false;
  }
  forward(t2, u) {
  }
  redirect(t2, u) {
  }
  overlap(t2, u, r2) {
    return t2;
  }
  preprocess(t2, u) {
    return t2;
  }
  postprocess(t2, u) {
    return Ae;
  }
};
function na(e2, t2, u) {
  return typeof e2 == "function" ? (...r2) => e2(...r2.slice(0, u - 1), t2, ...r2.slice(u - 1)) : () => e2;
}
var lt = class extends S {
  constructor(t2) {
    super(t2), this._sourceName = t2.sourceName;
  }
  expected(t2) {
    return t2.schemas[this._sourceName].expected(t2);
  }
  validate(t2, u) {
    return u.schemas[this._sourceName].validate(t2, u);
  }
  redirect(t2, u) {
    return this._sourceName;
  }
};
var dt = class extends S {
  expected() {
    return "anything";
  }
  validate() {
    return true;
  }
};
var pt = class extends S {
  constructor({ valueSchema: t2, name: u = t2.name, ...r2 }) {
    super({ ...r2, name: u }), this._valueSchema = t2;
  }
  expected(t2) {
    let { text: u, list: r2 } = t2.normalizeExpectedResult(this._valueSchema.expected(t2));
    return { text: u && `an array of ${u}`, list: r2 && { title: "an array of the following values", values: [{ list: r2 }] } };
  }
  validate(t2, u) {
    if (!Array.isArray(t2)) return false;
    let r2 = [];
    for (let o2 of t2) {
      let n2 = u.normalizeValidateResult(this._valueSchema.validate(o2, u), o2);
      n2 !== true && r2.push(n2.value);
    }
    return r2.length === 0 ? true : { value: r2 };
  }
  deprecated(t2, u) {
    let r2 = [];
    for (let o2 of t2) {
      let n2 = u.normalizeDeprecatedResult(this._valueSchema.deprecated(o2, u), o2);
      n2 !== false && r2.push(...n2.map(({ value: a }) => ({ value: [a] })));
    }
    return r2;
  }
  forward(t2, u) {
    let r2 = [];
    for (let o2 of t2) {
      let n2 = u.normalizeForwardResult(this._valueSchema.forward(o2, u), o2);
      r2.push(...n2.map($r));
    }
    return r2;
  }
  redirect(t2, u) {
    let r2 = [], o2 = [];
    for (let n2 of t2) {
      let a = u.normalizeRedirectResult(this._valueSchema.redirect(n2, u), n2);
      "remain" in a && r2.push(a.remain), o2.push(...a.redirect.map($r));
    }
    return r2.length === 0 ? { redirect: o2 } : { redirect: o2, remain: r2 };
  }
  overlap(t2, u) {
    return t2.concat(u);
  }
};
function $r({ from: e2, to: t2 }) {
  return { from: [e2], to: t2 };
}
var Ft = class extends S {
  expected() {
    return "true or false";
  }
  validate(t2) {
    return typeof t2 == "boolean";
  }
};
function Kr(e2, t2) {
  let u = /* @__PURE__ */ Object.create(null);
  for (let r2 of e2) {
    let o2 = r2[t2];
    if (u[o2]) throw new Error(`Duplicate ${t2} ${JSON.stringify(o2)}`);
    u[o2] = r2;
  }
  return u;
}
function Gr(e2, t2) {
  let u = /* @__PURE__ */ new Map();
  for (let r2 of e2) {
    let o2 = r2[t2];
    if (u.has(o2)) throw new Error(`Duplicate ${t2} ${JSON.stringify(o2)}`);
    u.set(o2, r2);
  }
  return u;
}
function zr() {
  let e2 = /* @__PURE__ */ Object.create(null);
  return (t2) => {
    let u = JSON.stringify(t2);
    return e2[u] ? true : (e2[u] = true, false);
  };
}
function Jr(e2, t2) {
  let u = [], r2 = [];
  for (let o2 of e2) t2(o2) ? u.push(o2) : r2.push(o2);
  return [u, r2];
}
function Hr(e2) {
  return e2 === Math.floor(e2);
}
function Xr(e2, t2) {
  if (e2 === t2) return 0;
  let u = typeof e2, r2 = typeof t2, o2 = ["undefined", "object", "boolean", "number", "string"];
  return u !== r2 ? o2.indexOf(u) - o2.indexOf(r2) : u !== "string" ? Number(e2) - Number(t2) : e2.localeCompare(t2);
}
function qr(e2) {
  return (...t2) => {
    let u = e2(...t2);
    return typeof u == "string" ? new Error(u) : u;
  };
}
function iu(e2) {
  return e2 === void 0 ? {} : e2;
}
function su(e2) {
  if (typeof e2 == "string") return { text: e2 };
  let { text: t2, list: u } = e2;
  return oa((t2 || u) !== void 0, "Unexpected `expected` result, there should be at least one field."), u ? { text: t2, list: { title: u.title, values: u.values.map(su) } } : { text: t2 };
}
function Du(e2, t2) {
  return e2 === true ? true : e2 === false ? { value: t2 } : e2;
}
function cu(e2, t2, u = false) {
  return e2 === false ? false : e2 === true ? u ? true : [{ value: t2 }] : "value" in e2 ? [e2] : e2.length === 0 ? false : e2;
}
function Vr(e2, t2) {
  return typeof e2 == "string" || "key" in e2 ? { from: t2, to: e2 } : "from" in e2 ? { from: e2.from, to: e2.to } : { from: t2, to: e2.to };
}
function mt(e2, t2) {
  return e2 === void 0 ? [] : Array.isArray(e2) ? e2.map((u) => Vr(u, t2)) : [Vr(e2, t2)];
}
function fu(e2, t2) {
  let u = mt(typeof e2 == "object" && "redirect" in e2 ? e2.redirect : e2, t2);
  return u.length === 0 ? { remain: t2, redirect: u } : typeof e2 == "object" && "remain" in e2 ? { remain: e2.remain, redirect: u } : { redirect: u };
}
function oa(e2, t2) {
  if (!e2) throw new Error(t2);
}
var Et = class extends S {
  constructor(t2) {
    super(t2), this._choices = Gr(t2.choices.map((u) => u && typeof u == "object" ? u : { value: u }), "value");
  }
  expected({ descriptor: t2 }) {
    let u = Array.from(this._choices.keys()).map((a) => this._choices.get(a)).filter(({ hidden: a }) => !a).map((a) => a.value).sort(Xr).map(t2.value), r2 = u.slice(0, -2), o2 = u.slice(-2);
    return { text: r2.concat(o2.join(" or ")).join(", "), list: { title: "one of the following values", values: u } };
  }
  validate(t2) {
    return this._choices.has(t2);
  }
  deprecated(t2) {
    let u = this._choices.get(t2);
    return u && u.deprecated ? { value: t2 } : false;
  }
  forward(t2) {
    let u = this._choices.get(t2);
    return u ? u.forward : void 0;
  }
  redirect(t2) {
    let u = this._choices.get(t2);
    return u ? u.redirect : void 0;
  }
};
var Ct = class extends S {
  expected() {
    return "a number";
  }
  validate(t2, u) {
    return typeof t2 == "number";
  }
};
var ht = class extends Ct {
  expected() {
    return "an integer";
  }
  validate(t2, u) {
    return u.normalizeValidateResult(super.validate(t2, u), t2) === true && Hr(t2);
  }
};
var je = class extends S {
  expected() {
    return "a string";
  }
  validate(t2) {
    return typeof t2 == "string";
  }
};
var Qr = ie, Zr = ft, en = Yr, tn = Rr;
var gt = class {
  constructor(t2, u) {
    let { logger: r2 = console, loggerPrintWidth: o2 = 80, descriptor: n2 = Qr, unknown: a = Zr, invalid: s2 = en, deprecated: i = tn, missing: D = () => false, required: f2 = () => false, preprocess: l2 = (c2) => c2, postprocess: d = () => Ae } = u || {};
    this._utils = { descriptor: n2, logger: r2 || { warn: () => {
    } }, loggerPrintWidth: o2, schemas: Kr(t2, "name"), normalizeDefaultResult: iu, normalizeExpectedResult: su, normalizeDeprecatedResult: cu, normalizeForwardResult: mt, normalizeRedirectResult: fu, normalizeValidateResult: Du }, this._unknownHandler = a, this._invalidHandler = qr(s2), this._deprecatedHandler = i, this._identifyMissing = (c2, p) => !(c2 in p) || D(c2, p), this._identifyRequired = f2, this._preprocess = l2, this._postprocess = d, this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = zr();
  }
  normalize(t2) {
    let u = {}, o2 = [this._preprocess(t2, this._utils)], n2 = () => {
      for (; o2.length !== 0; ) {
        let a = o2.shift(), s2 = this._applyNormalization(a, u);
        o2.push(...s2);
      }
    };
    n2();
    for (let a of Object.keys(this._utils.schemas)) {
      let s2 = this._utils.schemas[a];
      if (!(a in u)) {
        let i = iu(s2.default(this._utils));
        "value" in i && o2.push({ [a]: i.value });
      }
    }
    n2();
    for (let a of Object.keys(this._utils.schemas)) {
      if (!(a in u)) continue;
      let s2 = this._utils.schemas[a], i = u[a], D = s2.postprocess(i, this._utils);
      D !== Ae && (this._applyValidation(D, a, s2), u[a] = D);
    }
    return this._applyPostprocess(u), this._applyRequiredCheck(u), u;
  }
  _applyNormalization(t2, u) {
    let r2 = [], { knownKeys: o2, unknownKeys: n2 } = this._partitionOptionKeys(t2);
    for (let a of o2) {
      let s2 = this._utils.schemas[a], i = s2.preprocess(t2[a], this._utils);
      this._applyValidation(i, a, s2);
      let D = ({ from: c2, to: p }) => {
        r2.push(typeof p == "string" ? { [p]: c2 } : { [p.key]: p.value });
      }, f2 = ({ value: c2, redirectTo: p }) => {
        let F2 = cu(s2.deprecated(c2, this._utils), i, true);
        if (F2 !== false) if (F2 === true) this._hasDeprecationWarned(a) || this._utils.logger.warn(this._deprecatedHandler(a, p, this._utils));
        else for (let { value: C2 } of F2) {
          let y2 = { key: a, value: C2 };
          if (!this._hasDeprecationWarned(y2)) {
            let m = typeof p == "string" ? { key: p, value: C2 } : p;
            this._utils.logger.warn(this._deprecatedHandler(y2, m, this._utils));
          }
        }
      };
      mt(s2.forward(i, this._utils), i).forEach(D);
      let d = fu(s2.redirect(i, this._utils), i);
      if (d.redirect.forEach(D), "remain" in d) {
        let c2 = d.remain;
        u[a] = a in u ? s2.overlap(u[a], c2, this._utils) : c2, f2({ value: c2 });
      }
      for (let { from: c2, to: p } of d.redirect) f2({ value: c2, redirectTo: p });
    }
    for (let a of n2) {
      let s2 = t2[a];
      this._applyUnknownHandler(a, s2, u, (i, D) => {
        r2.push({ [i]: D });
      });
    }
    return r2;
  }
  _applyRequiredCheck(t2) {
    for (let u of Object.keys(this._utils.schemas)) if (this._identifyMissing(u, t2) && this._identifyRequired(u)) throw this._invalidHandler(u, Dt, this._utils);
  }
  _partitionOptionKeys(t2) {
    let [u, r2] = Jr(Object.keys(t2).filter((o2) => !this._identifyMissing(o2, t2)), (o2) => o2 in this._utils.schemas);
    return { knownKeys: u, unknownKeys: r2 };
  }
  _applyValidation(t2, u, r2) {
    let o2 = Du(r2.validate(t2, this._utils), t2);
    if (o2 !== true) throw this._invalidHandler(u, o2.value, this._utils);
  }
  _applyUnknownHandler(t2, u, r2, o2) {
    let n2 = this._unknownHandler(t2, u, this._utils);
    if (n2) for (let a of Object.keys(n2)) {
      if (this._identifyMissing(a, n2)) continue;
      let s2 = n2[a];
      a in this._utils.schemas ? o2(a, s2) : r2[a] = s2;
    }
  }
  _applyPostprocess(t2) {
    let u = this._postprocess(t2, this._utils);
    if (u !== Ae) {
      if (u.delete) for (let r2 of u.delete) delete t2[r2];
      if (u.override) {
        let { knownKeys: r2, unknownKeys: o2 } = this._partitionOptionKeys(u.override);
        for (let n2 of r2) {
          let a = u.override[n2];
          this._applyValidation(a, n2, this._utils.schemas[n2]), t2[n2] = a;
        }
        for (let n2 of o2) {
          let a = u.override[n2];
          this._applyUnknownHandler(n2, a, t2, (s2, i) => {
            let D = this._utils.schemas[s2];
            this._applyValidation(i, s2, D), t2[s2] = i;
          });
        }
      }
    }
  }
};
var lu;
function ia(e2, t2, { logger: u = false, isCLI: r2 = false, passThrough: o2 = false, FlagSchema: n2, descriptor: a } = {}) {
  if (r2) {
    if (!n2) throw new Error("'FlagSchema' option is required.");
    if (!a) throw new Error("'descriptor' option is required.");
  } else a = ie;
  let s2 = o2 ? Array.isArray(o2) ? (d, c2) => o2.includes(d) ? { [d]: c2 } : void 0 : (d, c2) => ({ [d]: c2 }) : (d, c2, p) => {
    let { _: F2, ...C2 } = p.schemas;
    return ft(d, c2, { ...p, schemas: C2 });
  }, i = sa(t2, { isCLI: r2, FlagSchema: n2 }), D = new gt(i, { logger: u, unknown: s2, descriptor: a }), f2 = u !== false;
  f2 && lu && (D._hasDeprecationWarned = lu);
  let l2 = D.normalize(e2);
  return f2 && (lu = D._hasDeprecationWarned), l2;
}
function sa(e2, { isCLI: t2, FlagSchema: u }) {
  let r2 = [];
  t2 && r2.push(dt.create({ name: "_" }));
  for (let o2 of e2) r2.push(Da(o2, { isCLI: t2, optionInfos: e2, FlagSchema: u })), o2.alias && t2 && r2.push(lt.create({ name: o2.alias, sourceName: o2.name }));
  return r2;
}
function Da(e2, { isCLI: t2, optionInfos: u, FlagSchema: r2 }) {
  let { name: o2 } = e2, n2 = { name: o2 }, a, s2 = {};
  switch (e2.type) {
    case "int":
      a = ht, t2 && (n2.preprocess = Number);
      break;
    case "string":
      a = je;
      break;
    case "choice":
      a = Et, n2.choices = e2.choices.map((i) => i?.redirect ? { ...i, redirect: { to: { key: e2.name, value: i.redirect } } } : i);
      break;
    case "boolean":
      a = Ft;
      break;
    case "flag":
      a = r2, n2.flags = u.flatMap((i) => [i.alias, i.description && i.name, i.oppositeDescription && `no-${i.name}`].filter(Boolean));
      break;
    case "path":
      a = je;
      break;
    default:
      throw new Error(`Unexpected type ${e2.type}`);
  }
  if (e2.exception ? n2.validate = (i, D, f2) => e2.exception(i) || D.validate(i, f2) : n2.validate = (i, D, f2) => i === void 0 || D.validate(i, f2), e2.redirect && (s2.redirect = (i) => i ? { to: typeof e2.redirect == "string" ? e2.redirect : { key: e2.redirect.option, value: e2.redirect.value } } : void 0), e2.deprecated && (s2.deprecated = true), t2 && !e2.array) {
    let i = n2.preprocess || ((D) => D);
    n2.preprocess = (D, f2, l2) => f2.preprocess(i(Array.isArray(D) ? b(0, D, -1) : D), l2);
  }
  return e2.array ? pt.create({ ...t2 ? { preprocess: (i) => Array.isArray(i) ? i : [i] } : {}, ...s2, valueSchema: a.create(n2) }) : a.create({ ...n2, ...s2 });
}
var un = ia;
var ca = Array.prototype.findLast ?? function(e2) {
  for (let t2 = this.length - 1; t2 >= 0; t2--) {
    let u = this[t2];
    if (e2(u, t2, this)) return u;
  }
}, fa = X("findLast", function() {
  if (Array.isArray(this)) return ca;
}), du = fa;
var rn = /* @__PURE__ */ Symbol.for("PRETTIER_IS_FRONT_MATTER"), pu = [];
function la(e2) {
  return !!e2?.[rn];
}
var de2 = la;
var nn = /* @__PURE__ */ new Set(["yaml", "toml"]), Ue = ({ node: e2 }) => de2(e2) && nn.has(e2.language);
async function Fu(e2, t2, u, r2) {
  let { node: o2 } = u, { language: n2 } = o2;
  if (!nn.has(n2)) return;
  let a = o2.value.trim(), s2;
  if (a) {
    let i = n2 === "yaml" ? n2 : st(r2, { language: n2 });
    if (!i) return;
    s2 = a ? await e2(a, { parser: i }) : "";
  } else s2 = a;
  return et([o2.startDelimiter, o2.explicitLanguage ?? "", V$1, s2, s2 ? V$1 : "", o2.endDelimiter]);
}
function da(e2, t2) {
  return Ue({ node: e2 }) && (delete t2.end, delete t2.raw, delete t2.value), t2;
}
var mu = da;
function pa({ node: e2 }) {
  return e2.raw;
}
var Eu = pa;
var on = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]), Fa = (e2) => Object.keys(e2).filter((t2) => !on.has(t2));
function ma(e2, t2) {
  let u = e2 ? (r2) => e2(r2, on) : Fa;
  return t2 ? new Proxy(u, { apply: (r2, o2, n2) => de2(n2[0]) ? pu : Reflect.apply(r2, o2, n2) }) : u;
}
var Cu = ma;
function gu(e2, t2) {
  if (!t2) throw new Error("parserName is required.");
  let u = du(0, e2, (o2) => o2.parsers && Object.prototype.hasOwnProperty.call(o2.parsers, t2));
  if (u) return u;
  let r2 = `Couldn't resolve parser "${t2}".`;
  throw r2 += " Plugins must be explicitly added to the standalone bundle.", new Me(r2);
}
function an(e2, t2) {
  if (!t2) throw new Error("astFormat is required.");
  let u = du(0, e2, (o2) => o2.printers && Object.prototype.hasOwnProperty.call(o2.printers, t2));
  if (u) return u;
  let r2 = `Couldn't find plugin for AST format "${t2}".`;
  throw r2 += " Plugins must be explicitly added to the standalone bundle.", new Me(r2);
}
function We({ plugins: e2, parser: t2 }) {
  let u = gu(e2, t2);
  return yu(u, t2);
}
function yu(e2, t2) {
  let u = e2.parsers[t2];
  return typeof u == "function" ? u() : u;
}
async function sn(e2, t2) {
  let u = e2.printers[t2], r2 = typeof u == "function" ? await u() : u;
  return Ea(r2);
}
var hu = /* @__PURE__ */ new WeakMap();
function Ea(e2) {
  if (hu.has(e2)) return hu.get(e2);
  let { features: t2, getVisitorKeys: u, embed: r2, massageAstNode: o2, print: n2, ...a } = e2;
  t2 = ya(t2);
  let s2 = t2.experimental_frontMatterSupport;
  u = Cu(u, s2.massageAstNode || s2.embed || s2.print);
  let i = o2;
  o2 && s2.massageAstNode && (i = new Proxy(o2, { apply(d, c2, p) {
    return mu(...p), Reflect.apply(d, c2, p);
  } }));
  let D = r2;
  if (r2) {
    let d;
    D = new Proxy(r2, { get(c2, p, F2) {
      return p === "getVisitorKeys" ? (d ?? (d = r2.getVisitorKeys ? Cu(r2.getVisitorKeys, s2.massageAstNode || s2.embed) : u), d) : Reflect.get(c2, p, F2);
    }, apply: (c2, p, F2) => s2.embed && Ue(...F2) ? Fu : Reflect.apply(c2, p, F2) });
  }
  let f2 = n2;
  s2.print && (f2 = new Proxy(n2, { apply(d, c2, p) {
    let [F2] = p;
    return de2(F2.node) ? Eu(F2) : Reflect.apply(d, c2, p);
  } }));
  let l2 = { features: t2, getVisitorKeys: u, embed: D, massageAstNode: i, print: f2, ...a };
  return hu.set(e2, l2), l2;
}
var Ca = ["clean", "embed", "print"], ha = Object.fromEntries(Ca.map((e2) => [e2, false]));
function ga(e2) {
  return { ...ha, ...e2 };
}
function ya(e2) {
  return { experimental_avoidAstMutation: false, ...e2, experimental_frontMatterSupport: ga(e2?.experimental_frontMatterSupport) };
}
var Dn = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null, getVisitorKeys: null };
async function ba(e2, t2 = {}) {
  let u = { ...e2 };
  if (!u.parser) if (u.filepath) {
    if (u.parser = st(u, { physicalFile: u.filepath }), !u.parser) throw new Ye(`No parser could be inferred for file "${u.filepath}".`);
  } else throw new Ye("No parser and no file path given, couldn't infer a parser.");
  let r2 = it({ plugins: e2.plugins, showDeprecated: true }).options, o2 = { ...Dn, ...Object.fromEntries(r2.filter((l2) => l2.default !== void 0).map((l2) => [l2.name, l2.default])) }, n2 = gu(u.plugins, u.parser), a = await yu(n2, u.parser);
  u.astFormat = a.astFormat, u.locEnd = a.locEnd, u.locStart = a.locStart;
  let s2 = n2.printers?.[a.astFormat] ? n2 : an(u.plugins, a.astFormat), i = await sn(s2, a.astFormat);
  u.printer = i, u.getVisitorKeys = i.getVisitorKeys;
  let D = s2.defaultOptions ? Object.fromEntries(Object.entries(s2.defaultOptions).filter(([, l2]) => l2 !== void 0)) : {}, f2 = { ...o2, ...D };
  for (let [l2, d] of Object.entries(f2)) (u[l2] === null || u[l2] === void 0) && (u[l2] = d);
  return u.parser === "json" && (u.trailingComma = "none"), un(u, r2, { passThrough: Object.keys(Dn), ...t2 });
}
var se = ba;
ao(dn());
var _u = { keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"], strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"], strictBind: ["eval", "arguments"] };
new Set(_u.keyword);
new Set(_u.strict);
new Set(_u.strictBind);
var It = (e2, t2) => (u) => e2(t2(u));
function mn(e2) {
  return { keyword: e2.cyan, capitalized: e2.yellow, jsxIdentifier: e2.yellow, punctuator: e2.yellow, number: e2.magenta, string: e2.green, regex: e2.magenta, comment: e2.gray, invalid: It(It(e2.white, e2.bgRed), e2.bold), gutter: e2.gray, marker: It(e2.red, e2.bold), message: It(e2.red, e2.bold), reset: e2.reset };
}
mn(ou());
mn(ou());
function _a$1() {
  return new Proxy({}, { get: () => (e2) => e2 });
}
var Fn = /\r\n|[\n\r\u2028\u2029]/;
function xa(e2, t2, u) {
  let r2 = Object.assign({ column: 0, line: -1 }, e2.start), o2 = Object.assign({}, r2, e2.end), { linesAbove: n2 = 2, linesBelow: a = 3 } = u || {}, s2 = r2.line, i = r2.column, D = o2.line, f2 = o2.column, l2 = Math.max(s2 - (n2 + 1), 0), d = Math.min(t2.length, D + a);
  s2 === -1 && (l2 = 0), D === -1 && (d = t2.length);
  let c2 = D - s2, p = {};
  if (c2) for (let F2 = 0; F2 <= c2; F2++) {
    let C2 = F2 + s2;
    if (!i) p[C2] = true;
    else if (F2 === 0) {
      let y2 = t2[C2 - 1].length;
      p[C2] = [i, y2 - i + 1];
    } else if (F2 === c2) p[C2] = [0, f2];
    else {
      let y2 = t2[C2 - F2].length;
      p[C2] = [0, y2];
    }
  }
  else i === f2 ? i ? p[s2] = [i, 0] : p[s2] = true : p[s2] = [i, f2 - i];
  return { start: l2, end: d, markerLines: p };
}
function En(e2, t2, u = {}) {
  let o2 = _a$1(), n2 = e2.split(Fn), { start: a, end: s2, markerLines: i } = xa(t2, n2, u), D = t2.start && typeof t2.start.column == "number", f2 = String(s2).length, d = e2.split(Fn, s2).slice(a, s2).map((c2, p) => {
    let F2 = a + 1 + p, y2 = ` ${` ${F2}`.slice(-f2)} |`, m = i[F2], h2 = !i[F2 + 1];
    if (m) {
      let E2 = "";
      if (Array.isArray(m)) {
        let g = c2.slice(0, Math.max(m[0] - 1, 0)).replace(/[^\t]/g, " "), A2 = m[1] || 1;
        E2 = [`
 `, o2.gutter(y2.replace(/\d/g, " ")), " ", g, o2.marker("^").repeat(A2)].join(""), h2 && u.message && (E2 += " " + o2.message(u.message));
      }
      return [o2.marker(">"), o2.gutter(y2), c2.length > 0 ? ` ${c2}` : "", E2].join("");
    } else return ` ${o2.gutter(y2)}${c2.length > 0 ? ` ${c2}` : ""}`;
  }).join(`
`);
  return u.message && !D && (d = `${" ".repeat(f2 + 1)}${u.message}
${d}`), d;
}
async function Ba(e2, t2) {
  let u = await We(t2), r2 = u.preprocess ? await u.preprocess(e2, t2) : e2;
  t2.originalText = r2;
  let o2;
  try {
    o2 = await u.parse(r2, t2, t2);
  } catch (n2) {
    Ta(n2, e2);
  }
  return { text: r2, ast: o2 };
}
function Ta(e2, t2) {
  let { loc: u } = e2;
  if (u) {
    let r2 = En(t2, u, {});
    throw e2.message += `
` + r2, e2.codeFrame = r2, e2;
  }
  throw e2;
}
var Fe = Ba;
async function Cn(e2, t2, u, r2, o2) {
  if (u.embeddedLanguageFormatting !== "auto") return;
  let { printer: n2 } = u, { embed: a } = n2;
  if (!a) return;
  if (a.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");
  let { hasPrettierIgnore: s2 } = n2, { getVisitorKeys: i } = a, D = [];
  d();
  let f2 = e2.stack;
  for (let { print: c2, node: p, pathStack: F2 } of D) try {
    e2.stack = F2;
    let C2 = await c2(l2, t2, e2, u);
    C2 && o2.set(p, C2);
  } catch (C2) {
    if (globalThis.PRETTIER_DEBUG) throw C2;
  }
  e2.stack = f2;
  function l2(c2, p) {
    return Na(c2, p, u, r2);
  }
  function d() {
    let { node: c2 } = e2;
    if (c2 === null || typeof c2 != "object" || s2?.(e2)) return;
    for (let F2 of i(c2)) Array.isArray(c2[F2]) ? e2.each(d, F2) : e2.call(d, F2);
    let p = a(e2, u);
    if (p) {
      if (typeof p == "function") {
        D.push({ print: p, node: c2, pathStack: [...e2.stack] });
        return;
      }
      o2.set(c2, p);
    }
  }
}
async function Na(e2, t2, u, r2) {
  let o2 = await se({ ...u, ...t2, parentParser: u.parser, originalText: e2, cursorOffset: void 0, rangeStart: void 0, rangeEnd: void 0 }, { passThrough: true }), { ast: n2 } = await Fe(e2, o2), a = await r2(n2, o2);
  return qe(a);
}
function Sa(e2, t2, u, r2) {
  let { originalText: o2, [/* @__PURE__ */ Symbol.for("comments")]: n2, locStart: a, locEnd: s2, [/* @__PURE__ */ Symbol.for("printedComments")]: i } = t2, { node: D } = e2, f2 = a(D), l2 = s2(D);
  for (let c2 of n2) a(c2) >= f2 && s2(c2) <= l2 && i.add(c2);
  let { printPrettierIgnored: d } = t2.printer;
  return d ? d(e2, t2, u, r2) : o2.slice(f2, l2);
}
var hn = Sa;
async function Ge(e2, t2) {
  ({ ast: e2 } = await xu(e2, t2));
  let u = /* @__PURE__ */ new Map(), r2 = new pr(e2), n2 = /* @__PURE__ */ new Map();
  await Cn(r2, s2, t2, Ge, n2);
  let a = await gn(r2, t2, s2, void 0, n2);
  if (Tr(t2), t2.cursorOffset >= 0) {
    if (t2.nodeAfterCursor && !t2.nodeBeforeCursor) return [ee2, a];
    if (t2.nodeBeforeCursor && !t2.nodeAfterCursor) return [a, ee2];
  }
  return a;
  function s2(D, f2) {
    return D === void 0 || D === r2 ? i(f2) : Array.isArray(D) ? r2.call(() => i(f2), ...D) : r2.call(() => i(f2), D);
  }
  function i(D) {
    let f2 = r2.node;
    if (f2 == null) return "";
    let l2 = ge2(f2) && D === void 0;
    if (l2 && u.has(f2)) return u.get(f2);
    let d = gn(r2, t2, s2, D, n2);
    return l2 && u.set(f2, d), d;
  }
}
function gn(e2, t2, u, r2, o2) {
  let { node: n2 } = e2, { printer: a } = t2, s2;
  switch (a.hasPrettierIgnore?.(e2) ? s2 = hn(e2, t2, u, r2) : o2.has(n2) ? s2 = o2.get(n2) : s2 = a.print(e2, t2, u, r2), n2) {
    case t2.cursorNode:
      s2 = Ee(s2, (i) => [ee2, i, ee2]);
      break;
    case t2.nodeBeforeCursor:
      s2 = Ee(s2, (i) => [i, ee2]);
      break;
    case t2.nodeAfterCursor:
      s2 = Ee(s2, (i) => [ee2, i]);
      break;
  }
  return a.printComment && !a.willPrintOwnComments?.(e2, t2) && (s2 = Br(e2, s2, t2)), s2;
}
async function xu(e2, t2) {
  let u = e2.comments ?? [];
  t2[/* @__PURE__ */ Symbol.for("comments")] = u, t2[/* @__PURE__ */ Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), Ar(e2, t2);
  let { printer: { preprocess: r2 } } = t2;
  return e2 = r2 ? await r2(e2, t2) : e2, { ast: e2, comments: u };
}
function wa(e2, t2) {
  let { cursorOffset: u, locStart: r2, locEnd: o2, getVisitorKeys: n2 } = t2, a = (c2) => r2(c2) <= u && o2(c2) >= u, s2 = e2, i = [e2];
  for (let c2 of Cr(e2, { getVisitorKeys: n2, filter: a })) i.push(c2), s2 = c2;
  if (hr2(s2, { getVisitorKeys: n2 })) return { cursorNode: s2 };
  let D, f2, l2 = -1, d = Number.POSITIVE_INFINITY;
  for (; i.length > 0 && (D === void 0 || f2 === void 0); ) {
    s2 = i.pop();
    let c2 = D !== void 0, p = f2 !== void 0;
    for (let F2 of be(s2, { getVisitorKeys: n2 })) {
      if (!c2) {
        let C2 = o2(F2);
        C2 <= u && C2 > l2 && (D = F2, l2 = C2);
      }
      if (!p) {
        let C2 = r2(F2);
        C2 >= u && C2 < d && (f2 = F2, d = C2);
      }
    }
  }
  return { nodeBeforeCursor: D, nodeAfterCursor: f2 };
}
var Bu = wa;
function Oa(e2, t2) {
  let { printer: u } = t2, r2 = u.massageAstNode;
  if (!r2) return e2;
  let { getVisitorKeys: o2 } = u, { ignoredProperties: n2 } = r2;
  return a(e2);
  function a(s2, i) {
    if (!ge2(s2)) return s2;
    if (Array.isArray(s2)) return s2.map((d) => a(d, i)).filter(Boolean);
    let D = {}, f2 = new Set(o2(s2));
    for (let d in s2) !Object.prototype.hasOwnProperty.call(s2, d) || n2?.has(d) || (f2.has(d) ? D[d] = a(s2[d], s2) : D[d] = s2[d]);
    let l2 = r2(s2, D, i);
    if (l2 !== null) return l2 ?? D;
  }
}
var yn = Oa;
var Pa = Array.prototype.findLastIndex ?? function(e2) {
  for (let t2 = this.length - 1; t2 >= 0; t2--) {
    let u = this[t2];
    if (e2(u, t2, this)) return t2;
  }
  return -1;
}, Ia = X("findLastIndex", function() {
  if (Array.isArray(this)) return Pa;
}), bn = Ia;
var ka = ({ parser: e2 }) => e2 === "json" || e2 === "json5" || e2 === "jsonc" || e2 === "json-stringify";
function va(e2, t2) {
  return t2 = new Set(t2), e2.find((u) => xn.has(u.type) && t2.has(u));
}
function An(e2) {
  let t2 = bn(0, e2, (u) => u.type !== "Program" && u.type !== "File");
  return t2 === -1 ? e2 : e2.slice(0, t2 + 1);
}
function Ra(e2, t2, { locStart: u, locEnd: r2 }) {
  let [o2, ...n2] = e2, [a, ...s2] = t2;
  if (o2 === a) return [o2, a];
  let i = u(o2);
  for (let f2 of An(s2)) if (u(f2) >= i) a = f2;
  else break;
  let D = r2(a);
  for (let f2 of An(n2)) {
    if (r2(f2) <= D) o2 = f2;
    else break;
    if (o2 === a) break;
  }
  return [o2, a];
}
function Tu(e2, t2, u, r2, o2 = [], n2) {
  let { locStart: a, locEnd: s2 } = u, i = a(e2), D = s2(e2);
  if (t2 > D || t2 < i || n2 === "rangeEnd" && t2 === i || n2 === "rangeStart" && t2 === D) return;
  let f2 = [e2, ...o2], l2 = at(e2, f2, { cache: uu, locStart: a, locEnd: s2, getVisitorKeys: u.getVisitorKeys, filter: u.printer.canAttachComment, getChildren: u.printer.getCommentChildNodes });
  for (let d of l2) {
    let c2 = Tu(d, t2, u, r2, f2, n2);
    if (c2) return c2;
  }
  if (r2(e2, o2[0])) return f2;
}
function La(e2, t2) {
  return t2 !== "DeclareExportDeclaration" && e2 !== "TypeParameterDeclaration" && (e2 === "Directive" || e2 === "TypeAlias" || e2 === "TSExportAssignment" || e2.startsWith("Declare") || e2.startsWith("TSDeclare") || e2.endsWith("Statement") || e2.endsWith("Declaration"));
}
var xn = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), Ma = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function _n(e2, t2, u) {
  if (!t2) return false;
  switch (e2.parser) {
    case "flow":
    case "hermes":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "oxc":
    case "oxc-ts":
    case "__babel_estree":
      return La(t2.type, u?.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return xn.has(t2.type);
    case "graphql":
      return Ma.has(t2.kind);
    case "vue":
      return t2.tag !== "root";
  }
  return false;
}
function Bn(e2, t2, u) {
  let { rangeStart: r2, rangeEnd: o2, locStart: n2, locEnd: a } = t2;
  let s2 = e2.slice(r2, o2).search(/\S/u), i = s2 === -1;
  if (!i) for (r2 += s2; o2 > r2 && !/\S/u.test(e2[o2 - 1]); --o2) ;
  let D = Tu(u, r2, t2, (c2, p) => _n(t2, c2, p), [], "rangeStart");
  if (!D) return;
  let f2 = i ? D : Tu(u, o2, t2, (c2) => _n(t2, c2), [], "rangeEnd");
  if (!f2) return;
  let l2, d;
  if (ka(t2)) {
    let c2 = va(D, f2);
    l2 = c2, d = c2;
  } else [l2, d] = Ra(D, f2, t2);
  return [Math.min(n2(l2), n2(d)), Math.max(a(l2), a(d))];
}
var wn = "\uFEFF", Tn = /* @__PURE__ */ Symbol("cursor");
async function On(e2, t2, u = 0) {
  if (!e2 || e2.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: r2, text: o2 } = await Fe(e2, t2);
  t2.cursorOffset >= 0 && (t2 = { ...t2, ...Bu(r2, t2) });
  let n2 = await Ge(r2, t2);
  u > 0 && (n2 = tt([V$1, n2], u, t2.tabWidth));
  let a = Ce(n2, t2);
  if (u > 0) {
    let i = a.formatted.trim();
    a.cursorNodeStart !== void 0 && (a.cursorNodeStart -= a.formatted.indexOf(i), a.cursorNodeStart < 0 && (a.cursorNodeStart = 0, a.cursorNodeText = a.cursorNodeText.trimStart()), a.cursorNodeStart + a.cursorNodeText.length > i.length && (a.cursorNodeText = a.cursorNodeText.trimEnd())), a.formatted = i + Se(t2.endOfLine);
  }
  let s2 = t2[/* @__PURE__ */ Symbol.for("comments")];
  if (t2.cursorOffset >= 0) {
    let i, D, f2, l2;
    if ((t2.cursorNode || t2.nodeBeforeCursor || t2.nodeAfterCursor) && a.cursorNodeText) if (f2 = a.cursorNodeStart, l2 = a.cursorNodeText, t2.cursorNode) i = t2.locStart(t2.cursorNode), D = o2.slice(i, t2.locEnd(t2.cursorNode));
    else {
      if (!t2.nodeBeforeCursor && !t2.nodeAfterCursor) throw new Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
      i = t2.nodeBeforeCursor ? t2.locEnd(t2.nodeBeforeCursor) : 0;
      let y2 = t2.nodeAfterCursor ? t2.locStart(t2.nodeAfterCursor) : o2.length;
      D = o2.slice(i, y2);
    }
    else i = 0, D = o2, f2 = 0, l2 = a.formatted;
    let d = t2.cursorOffset - i;
    if (D === l2) return { formatted: a.formatted, cursorOffset: f2 + d, comments: s2 };
    let c2 = D.split("");
    c2.splice(d, 0, Tn);
    let p = l2.split(""), F2 = Ut(c2, p), C2 = f2;
    for (let y2 of F2) if (y2.removed) {
      if (y2.value.includes(Tn)) break;
    } else C2 += y2.count;
    return { formatted: a.formatted, cursorOffset: C2, comments: s2 };
  }
  return { formatted: a.formatted, cursorOffset: -1, comments: s2 };
}
async function Ya(e2, t2) {
  let { ast: u, text: r2 } = await Fe(e2, t2), [o2, n2] = Bn(r2, t2, u) ?? [0, 0], a = r2.slice(o2, n2), s2 = Math.min(o2, r2.lastIndexOf(`
`, o2) + 1), i = r2.slice(s2, o2).match(/^\s*/u)[0], D = he(i, t2.tabWidth), f2 = await On(a, { ...t2, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t2.cursorOffset > o2 && t2.cursorOffset <= n2 ? t2.cursorOffset - o2 : -1, endOfLine: "lf" }, D), l2 = f2.formatted.trimEnd(), { cursorOffset: d } = t2;
  d > n2 ? d += l2.length - a.length : f2.cursorOffset >= 0 && (d = f2.cursorOffset + o2);
  let c2 = r2.slice(0, o2) + l2 + r2.slice(n2);
  if (t2.endOfLine !== "lf") {
    let p = Se(t2.endOfLine);
    d >= 0 && p === `\r
` && (d += $t2(c2.slice(0, d), `
`)), c2 = oe(0, c2, `
`, p);
  }
  return { formatted: c2, cursorOffset: d, comments: f2.comments };
}
function Nu(e2, t2, u) {
  return typeof t2 != "number" || Number.isNaN(t2) || t2 < 0 || t2 > e2.length ? u : t2;
}
function Nn(e2, t2) {
  let { cursorOffset: u, rangeStart: r2, rangeEnd: o2 } = t2;
  return u = Nu(e2, u, -1), r2 = Nu(e2, r2, 0), o2 = Nu(e2, o2, e2.length), { ...t2, cursorOffset: u, rangeStart: r2, rangeEnd: o2 };
}
function Pn(e2, t2) {
  let { cursorOffset: u, rangeStart: r2, rangeEnd: o2, endOfLine: n2 } = Nn(e2, t2), a = e2.charAt(0) === wn;
  if (a && (e2 = e2.slice(1), u--, r2--, o2--), n2 === "auto" && (n2 = Yu(e2)), e2.includes("\r")) {
    let s2 = (i) => $t2(e2.slice(0, Math.max(i, 0)), `\r
`);
    u -= s2(u), r2 -= s2(r2), o2 -= s2(o2), e2 = ju(e2);
  }
  return { hasBOM: a, text: e2, options: Nn(e2, { ...t2, cursorOffset: u, rangeStart: r2, rangeEnd: o2, endOfLine: n2 }) };
}
async function Sn(e2, t2) {
  let u = await We(t2);
  return !u.hasPragma || u.hasPragma(e2);
}
async function ja(e2, t2) {
  return (await We(t2)).hasIgnorePragma?.(e2);
}
async function Su(e2, t2) {
  let { hasBOM: u, text: r2, options: o2 } = Pn(e2, await se(t2));
  if (o2.rangeStart >= o2.rangeEnd && r2 !== "" || o2.requirePragma && !await Sn(r2, o2) || o2.checkIgnorePragma && await ja(r2, o2)) return { formatted: e2, cursorOffset: t2.cursorOffset, comments: [] };
  let n2;
  return o2.rangeStart > 0 || o2.rangeEnd < r2.length ? n2 = await Ya(r2, o2) : (!o2.requirePragma && o2.insertPragma && o2.printer.insertPragma && !await Sn(r2, o2) && (r2 = o2.printer.insertPragma(r2)), n2 = await On(r2, o2)), u && (n2.formatted = wn + n2.formatted, n2.cursorOffset >= 0 && n2.cursorOffset++), n2;
}
async function In(e2, t2, u) {
  let { text: r2, options: o2 } = Pn(e2, await se(t2)), n2 = await Fe(r2, o2);
  return u && (u.preprocessForPrint && (n2.ast = await xu(n2.ast, o2)), u.massage && (n2.ast = yn(n2.ast, o2))), n2;
}
async function kn(e2, t2) {
  t2 = await se(t2);
  let u = await Ge(e2, t2);
  return Ce(u, t2);
}
async function vn(e2, t2) {
  let u = sr(e2), { formatted: r2 } = await Su(u, { ...t2, parser: "__js_expression" });
  return r2;
}
async function Rn(e2, t2) {
  t2 = await se(t2);
  let { ast: u } = await Fe(e2, t2);
  return t2.cursorOffset >= 0 && (t2 = { ...t2, ...Bu(u, t2) }), Ge(u, t2);
}
async function Ln(e2, t2) {
  return Ce(e2, await se(t2));
}
var wu = {};
Yt2(wu, { builders: () => Wa, printer: () => $a, utils: () => Va });
var Wa = { join: Ie, line: ut, softline: or, hardline: V$1, literalline: Qe, group: Kt, conditionalGroup: tr, fill: er, lineSuffix: ve, lineSuffixBoundary: ar, cursor: ee2, breakParent: ce, ifBreak: ur, trim: ir, indent: ae, indentIfBreak: rr, align: De, addAlignmentToDoc: tt, markAsRoot: et, dedentToRoot: Qu, dedent: Zu, hardlineWithoutBreakParent: ke, literallineWithoutBreakParent: Gt, label: nr, concat: (e2) => e2 }, $a = { printDocToString: Ce }, Va = { willBreak: Ku, traverseDoc: we, findInDoc: Xe, mapDoc: Pe, removeLines: zu, stripTrailingHardline: qe, replaceEndOfLine: Ju, canBreak: Hu };
var Mn = "3.8.4";
var Pu = {};
Yt2(Pu, { addDanglingComment: () => ue, addLeadingComment: () => fe, addTrailingComment: () => le, getAlignmentSize: () => he, getIndentSize: () => Yn, getMaxContinuousCount: () => jn, getNextNonSpaceNonCommentCharacter: () => Un, getNextNonSpaceNonCommentCharacterIndex: () => ni, getPreferredQuote: () => Vn, getStringWidth: () => Re, hasNewline: () => z, hasNewlineInRange: () => Kn, hasSpaces: () => Gn, isNextLineEmpty: () => Di, isNextLineEmptyAfterIndex: () => kt, isPreviousLineEmpty: () => ai, makeString: () => si, skip: () => ye, skipEverythingButNewLine: () => ot, skipInlineComment: () => xe, skipNewline: () => K, skipSpaces: () => Y, skipToLineEnd: () => nt2, skipTrailingComment: () => Be2, skipWhitespace: () => Fr });
function Ka(e2, t2) {
  if (t2 === false) return false;
  if (e2.charAt(t2) === "/" && e2.charAt(t2 + 1) === "*") {
    for (let u = t2 + 2; u < e2.length; ++u) if (e2.charAt(u) === "*" && e2.charAt(u + 1) === "/") return u + 2;
  }
  return t2;
}
var xe = Ka;
function Ga(e2, t2) {
  return t2 === false ? false : e2.charAt(t2) === "/" && e2.charAt(t2 + 1) === "/" ? ot(e2, t2) : t2;
}
var Be2 = Ga;
function za(e2, t2) {
  let u = null, r2 = t2;
  for (; r2 !== u; ) u = r2, r2 = Y(e2, r2), r2 = xe(e2, r2), r2 = Be2(e2, r2), r2 = K(e2, r2);
  return r2;
}
var ze = za;
function Ja(e2, t2) {
  let u = null, r2 = t2;
  for (; r2 !== u; ) u = r2, r2 = nt2(e2, r2), r2 = xe(e2, r2), r2 = Y(e2, r2);
  return r2 = Be2(e2, r2), r2 = K(e2, r2), r2 !== false && z(e2, r2);
}
var kt = Ja;
function Ha(e2, t2) {
  let u = e2.lastIndexOf(`
`);
  return u === -1 ? 0 : he(e2.slice(u + 1).match(/^[\t ]*/u)[0], t2);
}
var Yn = Ha;
function Ou(e2) {
  if (typeof e2 != "string") throw new TypeError("Expected a string");
  return e2.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Xa(e2, t2) {
  let u = e2.matchAll(new RegExp(`(?:${Ou(t2)})+`, "gu"));
  return u.reduce || (u = [...u]), u.reduce((r2, [o2]) => Math.max(r2, o2.length), 0) / t2.length;
}
var jn = Xa;
function qa2(e2, t2) {
  let u = ze(e2, t2);
  return u === false ? "" : e2.charAt(u);
}
var Un = qa2;
var Wn = Object.freeze({ character: "'", codePoint: 39 }), $n = Object.freeze({ character: '"', codePoint: 34 }), Qa2 = Object.freeze({ preferred: Wn, alternate: $n }), Za = Object.freeze({ preferred: $n, alternate: Wn });
function ei(e2, t2) {
  let { preferred: u, alternate: r2 } = t2 === true || t2 === "'" ? Qa2 : Za, { length: o2 } = e2, n2 = 0, a = 0;
  for (let s2 = 0; s2 < o2; s2++) {
    let i = e2.charCodeAt(s2);
    i === u.codePoint ? n2++ : i === r2.codePoint && a++;
  }
  return (n2 > a ? r2 : u).character;
}
var Vn = ei;
function ti(e2, t2, u) {
  for (let r2 = t2; r2 < u; ++r2) if (e2.charAt(r2) === `
`) return true;
  return false;
}
var Kn = ti;
function ui(e2, t2, u = {}) {
  return Y(e2, u.backwards ? t2 - 1 : t2, u) !== t2;
}
var Gn = ui;
function ri(e2, t2, u) {
  return ze(e2, u(t2));
}
function ni(e2, t2) {
  return arguments.length === 2 || typeof t2 == "number" ? ze(e2, t2) : ri(...arguments);
}
function oi(e2, t2, u) {
  return Le(e2, u(t2));
}
function ai(e2, t2) {
  return arguments.length === 2 || typeof t2 == "number" ? Le(e2, t2) : oi(...arguments);
}
function ii(e2, t2, u) {
  return kt(e2, u(t2));
}
function si(e2, t2, u) {
  let r2 = t2 === '"' ? "'" : '"', n2 = oe(0, e2, /\\(.)|(["'])/gsu, (a, s2, i) => s2 === r2 ? s2 : i === t2 ? "\\" + i : i || (u && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s2) ? s2 : "\\" + s2));
  return t2 + n2 + t2;
}
function Di(e2, t2) {
  return arguments.length === 2 || typeof t2 == "number" ? kt(e2, t2) : ii(...arguments);
}
function me(e2, t2 = 1) {
  return async (...u) => {
    let r2 = u[t2] ?? {}, o2 = r2.plugins ?? [];
    return u[t2] = { ...r2, plugins: Array.isArray(o2) ? o2 : Object.values(o2) }, e2(...u);
  };
}
var zn = me(Su);
async function Jn(e2, t2) {
  let { formatted: u } = await zn(e2, { ...t2, cursorOffset: -1 });
  return u;
}
async function ci(e2, t2) {
  return await Jn(e2, t2) === e2;
}
var fi = me(it, 0), li = { parse: me(In), formatAST: me(kn), formatDoc: me(vn), printToDoc: me(Rn), printDocToString: me(Ln) };
var ElementType;
(function(ElementType2) {
  ElementType2["Root"] = "root";
  ElementType2["Text"] = "text";
  ElementType2["Directive"] = "directive";
  ElementType2["Comment"] = "comment";
  ElementType2["Script"] = "script";
  ElementType2["Style"] = "style";
  ElementType2["Tag"] = "tag";
  ElementType2["CDATA"] = "cdata";
  ElementType2["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
function isTag$1(elem) {
  return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
const Root = ElementType.Root;
const Text$1 = ElementType.Text;
const Directive = ElementType.Directive;
const Comment$1 = ElementType.Comment;
const Script = ElementType.Script;
const Style = ElementType.Style;
const Tag = ElementType.Tag;
const CDATA$1 = ElementType.CDATA;
const Doctype = ElementType.Doctype;
class Node {
  constructor() {
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.startIndex = null;
    this.endIndex = null;
  }
  // Read-write aliases for properties
  /**
   * Same as {@link parent}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get parentNode() {
    return this.parent;
  }
  set parentNode(parent) {
    this.parent = parent;
  }
  /**
   * Same as {@link prev}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get previousSibling() {
    return this.prev;
  }
  set previousSibling(prev) {
    this.prev = prev;
  }
  /**
   * Same as {@link next}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nextSibling() {
    return this.next;
  }
  set nextSibling(next) {
    this.next = next;
  }
  /**
   * Clone this node, and optionally its children.
   *
   * @param recursive Clone child nodes as well.
   * @returns A clone of the node.
   */
  cloneNode(recursive = false) {
    return cloneNode(this, recursive);
  }
}
class DataNode extends Node {
  /**
   * @param data The content of the data node
   */
  constructor(data) {
    super();
    this.data = data;
  }
  /**
   * Same as {@link data}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nodeValue() {
    return this.data;
  }
  set nodeValue(data) {
    this.data = data;
  }
}
class Text extends DataNode {
  constructor() {
    super(...arguments);
    this.type = ElementType.Text;
  }
  get nodeType() {
    return 3;
  }
}
class Comment extends DataNode {
  constructor() {
    super(...arguments);
    this.type = ElementType.Comment;
  }
  get nodeType() {
    return 8;
  }
}
class ProcessingInstruction extends DataNode {
  constructor(name2, data) {
    super(data);
    this.name = name2;
    this.type = ElementType.Directive;
  }
  get nodeType() {
    return 1;
  }
}
class NodeWithChildren extends Node {
  /**
   * @param children Children of the node. Only certain node types can have children.
   */
  constructor(children) {
    super();
    this.children = children;
  }
  // Aliases
  /** First child of the node. */
  get firstChild() {
    var _a2;
    return (_a2 = this.children[0]) !== null && _a2 !== void 0 ? _a2 : null;
  }
  /** Last child of the node. */
  get lastChild() {
    return this.children.length > 0 ? this.children[this.children.length - 1] : null;
  }
  /**
   * Same as {@link children}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get childNodes() {
    return this.children;
  }
  set childNodes(children) {
    this.children = children;
  }
}
class CDATA extends NodeWithChildren {
  constructor() {
    super(...arguments);
    this.type = ElementType.CDATA;
  }
  get nodeType() {
    return 4;
  }
}
class Document extends NodeWithChildren {
  constructor() {
    super(...arguments);
    this.type = ElementType.Root;
  }
  get nodeType() {
    return 9;
  }
}
class Element extends NodeWithChildren {
  /**
   * @param name Name of the tag, eg. `div`, `span`.
   * @param attribs Object mapping attribute names to attribute values.
   * @param children Children of the node.
   */
  constructor(name2, attribs, children = [], type = name2 === "script" ? ElementType.Script : name2 === "style" ? ElementType.Style : ElementType.Tag) {
    super(children);
    this.name = name2;
    this.attribs = attribs;
    this.type = type;
  }
  get nodeType() {
    return 1;
  }
  // DOM Level 1 aliases
  /**
   * Same as {@link name}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get tagName() {
    return this.name;
  }
  set tagName(name2) {
    this.name = name2;
  }
  get attributes() {
    return Object.keys(this.attribs).map((name2) => {
      var _a2, _b;
      return {
        name: name2,
        value: this.attribs[name2],
        namespace: (_a2 = this["x-attribsNamespace"]) === null || _a2 === void 0 ? void 0 : _a2[name2],
        prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name2]
      };
    });
  }
}
function isTag(node) {
  return isTag$1(node);
}
function isCDATA(node) {
  return node.type === ElementType.CDATA;
}
function isText(node) {
  return node.type === ElementType.Text;
}
function isComment(node) {
  return node.type === ElementType.Comment;
}
function isDirective(node) {
  return node.type === ElementType.Directive;
}
function isDocument(node) {
  return node.type === ElementType.Root;
}
function cloneNode(node, recursive = false) {
  let result;
  if (isText(node)) {
    result = new Text(node.data);
  } else if (isComment(node)) {
    result = new Comment(node.data);
  } else if (isTag(node)) {
    const children = recursive ? cloneChildren(node.children) : [];
    const clone = new Element(node.name, { ...node.attribs }, children);
    children.forEach((child) => child.parent = clone);
    if (node.namespace != null) {
      clone.namespace = node.namespace;
    }
    if (node["x-attribsNamespace"]) {
      clone["x-attribsNamespace"] = { ...node["x-attribsNamespace"] };
    }
    if (node["x-attribsPrefix"]) {
      clone["x-attribsPrefix"] = { ...node["x-attribsPrefix"] };
    }
    result = clone;
  } else if (isCDATA(node)) {
    const children = recursive ? cloneChildren(node.children) : [];
    const clone = new CDATA(children);
    children.forEach((child) => child.parent = clone);
    result = clone;
  } else if (isDocument(node)) {
    const children = recursive ? cloneChildren(node.children) : [];
    const clone = new Document(children);
    children.forEach((child) => child.parent = clone);
    if (node["x-mode"]) {
      clone["x-mode"] = node["x-mode"];
    }
    result = clone;
  } else if (isDirective(node)) {
    const instruction = new ProcessingInstruction(node.name, node.data);
    if (node["x-name"] != null) {
      instruction["x-name"] = node["x-name"];
      instruction["x-publicId"] = node["x-publicId"];
      instruction["x-systemId"] = node["x-systemId"];
    }
    result = instruction;
  } else {
    throw new Error(`Not implemented yet: ${node.type}`);
  }
  result.startIndex = node.startIndex;
  result.endIndex = node.endIndex;
  if (node.sourceCodeLocation != null) {
    result.sourceCodeLocation = node.sourceCodeLocation;
  }
  return result;
}
function cloneChildren(childs) {
  const children = childs.map((child) => cloneNode(child, true));
  for (let i = 1; i < children.length; i++) {
    children[i].prev = children[i - 1];
    children[i - 1].next = children[i];
  }
  return children;
}
const defaultOpts = {
  withStartIndices: false,
  withEndIndices: false,
  xmlMode: false
};
class DomHandler {
  /**
   * @param callback Called once parsing has completed.
   * @param options Settings for the handler.
   * @param elementCB Callback whenever a tag is closed.
   */
  constructor(callback, options, elementCB) {
    this.dom = [];
    this.root = new Document(this.dom);
    this.done = false;
    this.tagStack = [this.root];
    this.lastNode = null;
    this.parser = null;
    if (typeof options === "function") {
      elementCB = options;
      options = defaultOpts;
    }
    if (typeof callback === "object") {
      options = callback;
      callback = void 0;
    }
    this.callback = callback !== null && callback !== void 0 ? callback : null;
    this.options = options !== null && options !== void 0 ? options : defaultOpts;
    this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
  }
  onparserinit(parser) {
    this.parser = parser;
  }
  // Resets the handler back to starting state
  onreset() {
    this.dom = [];
    this.root = new Document(this.dom);
    this.done = false;
    this.tagStack = [this.root];
    this.lastNode = null;
    this.parser = null;
  }
  // Signals the handler that parsing is done
  onend() {
    if (this.done)
      return;
    this.done = true;
    this.parser = null;
    this.handleCallback(null);
  }
  onerror(error) {
    this.handleCallback(error);
  }
  onclosetag() {
    this.lastNode = null;
    const elem = this.tagStack.pop();
    if (this.options.withEndIndices) {
      elem.endIndex = this.parser.endIndex;
    }
    if (this.elementCB)
      this.elementCB(elem);
  }
  onopentag(name2, attribs) {
    const type = this.options.xmlMode ? ElementType.Tag : void 0;
    const element = new Element(name2, attribs, void 0, type);
    this.addNode(element);
    this.tagStack.push(element);
  }
  ontext(data) {
    const { lastNode } = this;
    if (lastNode && lastNode.type === ElementType.Text) {
      lastNode.data += data;
      if (this.options.withEndIndices) {
        lastNode.endIndex = this.parser.endIndex;
      }
    } else {
      const node = new Text(data);
      this.addNode(node);
      this.lastNode = node;
    }
  }
  oncomment(data) {
    if (this.lastNode && this.lastNode.type === ElementType.Comment) {
      this.lastNode.data += data;
      return;
    }
    const node = new Comment(data);
    this.addNode(node);
    this.lastNode = node;
  }
  oncommentend() {
    this.lastNode = null;
  }
  oncdatastart() {
    const text = new Text("");
    const node = new CDATA([text]);
    this.addNode(node);
    text.parent = node;
    this.lastNode = text;
  }
  oncdataend() {
    this.lastNode = null;
  }
  onprocessinginstruction(name2, data) {
    const node = new ProcessingInstruction(name2, data);
    this.addNode(node);
  }
  handleCallback(error) {
    if (typeof this.callback === "function") {
      this.callback(error, this.dom);
    } else if (error) {
      throw error;
    }
  }
  addNode(node) {
    const parent = this.tagStack[this.tagStack.length - 1];
    const previousSibling = parent.children[parent.children.length - 1];
    if (this.options.withStartIndices) {
      node.startIndex = this.parser.startIndex;
    }
    if (this.options.withEndIndices) {
      node.endIndex = this.parser.endIndex;
    }
    parent.children.push(node);
    if (previousSibling) {
      node.prev = previousSibling;
      previousSibling.next = node;
    }
    node.parent = parent;
    this.lastNode = null;
  }
}
const e = /\n/g;
function n(n2) {
  const o2 = [...n2.matchAll(e)].map(((e2) => e2.index || 0));
  o2.unshift(-1);
  const s2 = t(o2, 0, o2.length);
  return (e2) => r(s2, e2);
}
function t(e2, n2, r2) {
  if (r2 - n2 == 1) return { offset: e2[n2], index: n2 + 1 };
  const o2 = Math.ceil((n2 + r2) / 2), s2 = t(e2, n2, o2), l2 = t(e2, o2, r2);
  return { offset: s2.offset, low: s2, high: l2 };
}
function r(e2, n2) {
  return (function(e3) {
    return Object.prototype.hasOwnProperty.call(e3, "index");
  })(e2) ? { line: e2.index, column: n2 - e2.offset } : r(e2.high.offset < n2 ? e2.high : e2.low, n2);
}
function o(e2, t2 = "", r2 = {}) {
  const o2 = "string" != typeof t2 ? t2 : r2, l2 = "string" == typeof t2 ? t2 : "", c2 = e2.map(s), f2 = !!o2.lineNumbers;
  return function(e3, t3 = 0) {
    const r3 = f2 ? n(e3) : () => ({ line: 0, column: 0 });
    let o3 = t3;
    const s2 = [];
    e: for (; o3 < e3.length; ) {
      let n2 = false;
      for (const t4 of c2) {
        t4.regex.lastIndex = o3;
        const c3 = t4.regex.exec(e3);
        if (c3 && c3[0].length > 0) {
          if (!t4.discard) {
            const e4 = r3(o3), n3 = "string" == typeof t4.replace ? c3[0].replace(new RegExp(t4.regex.source, t4.regex.flags), t4.replace) : c3[0];
            s2.push({ state: l2, name: t4.name, text: n3, offset: o3, len: c3[0].length, line: e4.line, column: e4.column });
          }
          if (o3 = t4.regex.lastIndex, n2 = true, t4.push) {
            const n3 = t4.push(e3, o3);
            s2.push(...n3.tokens), o3 = n3.offset;
          }
          if (t4.pop) break e;
          break;
        }
      }
      if (!n2) break;
    }
    return { tokens: s2, offset: o3, complete: e3.length <= o3 };
  };
}
function s(e2, n2) {
  return { ...e2, regex: l(e2, n2) };
}
function l(e2, n2) {
  if (0 === e2.name.length) throw new Error(`Rule #${n2} has empty name, which is not allowed.`);
  if ((function(e3) {
    return Object.prototype.hasOwnProperty.call(e3, "regex");
  })(e2)) return (function(e3) {
    if (e3.global) throw new Error(`Regular expression /${e3.source}/${e3.flags} contains the global flag, which is not allowed.`);
    return e3.sticky ? e3 : new RegExp(e3.source, e3.flags + "y");
  })(e2.regex);
  if ((function(e3) {
    return Object.prototype.hasOwnProperty.call(e3, "str");
  })(e2)) {
    if (0 === e2.str.length) throw new Error(`Rule #${n2} ("${e2.name}") has empty "str" property, which is not allowed.`);
    return new RegExp(c(e2.str), "y");
  }
  return new RegExp(c(e2.name), "y");
}
function c(e2) {
  return e2.replace(/[-[\]{}()*+!<=:?./\\^$|#\s,]/g, "\\$&");
}
function token(onToken, onEnd) {
  return (data, i) => {
    let position = i;
    let value = void 0;
    if (i < data.tokens.length) {
      value = onToken(data.tokens[i], data, i);
      if (value !== void 0) {
        position++;
      }
    }
    return value === void 0 ? { matched: false } : {
      matched: true,
      position,
      value
    };
  };
}
function mapInner(r2, f2) {
  return r2.matched ? {
    matched: true,
    position: r2.position,
    value: f2(r2.value, r2.position)
  } : r2;
}
function mapOuter(r2, f2) {
  return r2.matched ? f2(r2) : r2;
}
function map(p, mapper) {
  return (data, i) => mapInner(p(data, i), (v2, j2) => mapper(v2, data, i, j2));
}
function option(p, def) {
  return (data, i) => {
    const r2 = p(data, i);
    return r2.matched ? r2 : {
      matched: true,
      position: i,
      value: def
    };
  };
}
function choice(...ps2) {
  return (data, i) => {
    for (const p of ps2) {
      const result = p(data, i);
      if (result.matched) {
        return result;
      }
    }
    return { matched: false };
  };
}
function otherwise(pa2, pb) {
  return (data, i) => {
    const r1 = pa2(data, i);
    return r1.matched ? r1 : pb(data, i);
  };
}
function takeWhile(p, test) {
  return (data, i) => {
    const values = [];
    let success = true;
    do {
      const r2 = p(data, i);
      if (r2.matched && test(r2.value, values.length + 1, data, i, r2.position)) {
        values.push(r2.value);
        i = r2.position;
      } else {
        success = false;
      }
    } while (success);
    return {
      matched: true,
      position: i,
      value: values
    };
  };
}
function many(p) {
  return takeWhile(p, () => true);
}
function many1(p) {
  return ab(p, many(p), (head, tail) => [head, ...tail]);
}
function ab(pa2, pb, join) {
  return (data, i) => mapOuter(pa2(data, i), (ma2) => mapInner(pb(data, ma2.position), (vb, j2) => join(ma2.value, vb, data, i, j2)));
}
function left(pa2, pb) {
  return ab(pa2, pb, (va2) => va2);
}
function right(pa2, pb) {
  return ab(pa2, pb, (va2, vb) => vb);
}
function abc(pa2, pb, pc, join) {
  return (data, i) => mapOuter(pa2(data, i), (ma2) => mapOuter(pb(data, ma2.position), (mb) => mapInner(pc(data, mb.position), (vc, j2) => join(ma2.value, mb.value, vc, data, i, j2))));
}
function middle(pa2, pb, pc) {
  return abc(pa2, pb, pc, (ra2, rb) => rb);
}
function all(...ps2) {
  return (data, i) => {
    const result = [];
    let position = i;
    for (const p of ps2) {
      const r1 = p(data, position);
      if (r1.matched) {
        result.push(r1.value);
        position = r1.position;
      } else {
        return { matched: false };
      }
    }
    return {
      matched: true,
      position,
      value: result
    };
  };
}
function flatten(...ps2) {
  return flatten1(all(...ps2));
}
function flatten1(p) {
  return map(p, (vs2) => vs2.flatMap((v2) => v2));
}
function chainReduce(acc, f2) {
  return (data, i) => {
    let loop = true;
    let acc1 = acc;
    let pos = i;
    do {
      const r2 = f2(acc1, data, pos)(data, pos);
      if (r2.matched) {
        acc1 = r2.value;
        pos = r2.position;
      } else {
        loop = false;
      }
    } while (loop);
    return {
      matched: true,
      position: pos,
      value: acc1
    };
  };
}
function reduceLeft(acc, p, reducer) {
  return chainReduce(acc, (acc2) => map(p, (v2, data, i, j2) => reducer(acc2, v2, data, i, j2)));
}
function leftAssoc2(pLeft, pOper, pRight) {
  return chain(pLeft, (v0) => reduceLeft(v0, ab(pOper, pRight, (f2, y2) => [f2, y2]), (acc, [f2, y2]) => f2(acc, y2)));
}
function chain(p, f2) {
  return (data, i) => mapOuter(p(data, i), (m1) => f2(m1.value, data, i, m1.position)(data, m1.position));
}
const ws = `(?:[ \\t\\r\\n\\f]*)`;
const nl = `(?:\\n|\\r\\n|\\r|\\f)`;
const nonascii = `[^\\x00-\\x7F]`;
const unicode = `(?:\\\\[0-9a-f]{1,6}(?:\\r\\n|[ \\n\\r\\t\\f])?)`;
const escape = `(?:\\\\[^\\n\\r\\f0-9a-f])`;
const nmstart = `(?:[_a-z]|${nonascii}|${unicode}|${escape})`;
const nmchar = `(?:[_a-z0-9-]|${nonascii}|${unicode}|${escape})`;
const name = `(?:${nmchar}+)`;
const ident = `(?:[-]?${nmstart}${nmchar}*)`;
const string1 = `'([^\\n\\r\\f\\\\']|\\\\${nl}|${nonascii}|${unicode}|${escape})*'`;
const string2 = `"([^\\n\\r\\f\\\\"]|\\\\${nl}|${nonascii}|${unicode}|${escape})*"`;
const lexSelector = o([
  { name: "ws", regex: new RegExp(ws) },
  { name: "hash", regex: new RegExp(`#${name}`, "i") },
  { name: "ident", regex: new RegExp(ident, "i") },
  { name: "str1", regex: new RegExp(string1, "i") },
  { name: "str2", regex: new RegExp(string2, "i") },
  { name: "*" },
  { name: "." },
  { name: "," },
  { name: "[" },
  { name: "]" },
  { name: "=" },
  { name: ">" },
  { name: "|" },
  { name: "+" },
  { name: "~" },
  { name: "^" },
  { name: "$" }
]);
const lexEscapedString = o([
  { name: "unicode", regex: new RegExp(unicode, "i") },
  { name: "escape", regex: new RegExp(escape, "i") },
  { name: "any", regex: new RegExp("[\\s\\S]", "i") }
]);
function sumSpec([a0, a1, a2], [b0, b1, b2]) {
  return [a0 + b0, a1 + b1, a2 + b2];
}
function sumAllSpec(ss2) {
  return ss2.reduce(sumSpec, [0, 0, 0]);
}
const unicodeEscapedSequence_ = token((t2) => t2.name === "unicode" ? String.fromCodePoint(parseInt(t2.text.slice(1), 16)) : void 0);
const escapedSequence_ = token((t2) => t2.name === "escape" ? t2.text.slice(1) : void 0);
const anyChar_ = token((t2) => t2.name === "any" ? t2.text : void 0);
const escapedString_ = map(many(choice(unicodeEscapedSequence_, escapedSequence_, anyChar_)), (cs2) => cs2.join(""));
function unescape(escapedString) {
  const lexerResult = lexEscapedString(escapedString);
  const result = escapedString_({ tokens: lexerResult.tokens, options: void 0 }, 0);
  return result.value;
}
function literal(name2) {
  return token((t2) => t2.name === name2 ? true : void 0);
}
const whitespace_ = token((t2) => t2.name === "ws" ? null : void 0);
const optionalWhitespace_ = option(whitespace_, null);
function optionallySpaced(parser) {
  return middle(optionalWhitespace_, parser, optionalWhitespace_);
}
const identifier_ = token((t2) => t2.name === "ident" ? unescape(t2.text) : void 0);
const hashId_ = token((t2) => t2.name === "hash" ? unescape(t2.text.slice(1)) : void 0);
const string_ = token((t2) => t2.name.startsWith("str") ? unescape(t2.text.slice(1, -1)) : void 0);
const namespace_ = left(option(identifier_, ""), literal("|"));
const qualifiedName_ = otherwise(ab(namespace_, identifier_, (ns2, name2) => ({ name: name2, namespace: ns2 })), map(identifier_, (name2) => ({ name: name2, namespace: null })));
const uniSelector_ = otherwise(ab(namespace_, literal("*"), (ns2) => ({ type: "universal", namespace: ns2, specificity: [0, 0, 0] })), map(literal("*"), () => ({ type: "universal", namespace: null, specificity: [0, 0, 0] })));
const tagSelector_ = map(qualifiedName_, ({ name: name2, namespace }) => ({
  type: "tag",
  name: name2,
  namespace,
  specificity: [0, 0, 1]
}));
const classSelector_ = ab(literal("."), identifier_, (fullstop, name2) => ({
  type: "class",
  name: name2,
  specificity: [0, 1, 0]
}));
const idSelector_ = map(hashId_, (name2) => ({
  type: "id",
  name: name2,
  specificity: [1, 0, 0]
}));
const attrModifier_ = token((t2) => {
  if (t2.name === "ident") {
    if (t2.text === "i" || t2.text === "I") {
      return "i";
    }
    if (t2.text === "s" || t2.text === "S") {
      return "s";
    }
  }
  return void 0;
});
const attrValue_ = otherwise(ab(string_, option(right(optionalWhitespace_, attrModifier_), null), (v2, mod) => ({ value: v2, modifier: mod })), ab(identifier_, option(right(whitespace_, attrModifier_), null), (v2, mod) => ({ value: v2, modifier: mod })));
const attrMatcher_ = choice(map(literal("="), () => "="), ab(literal("~"), literal("="), () => "~="), ab(literal("|"), literal("="), () => "|="), ab(literal("^"), literal("="), () => "^="), ab(literal("$"), literal("="), () => "$="), ab(literal("*"), literal("="), () => "*="));
const attrPresenceSelector_ = abc(literal("["), optionallySpaced(qualifiedName_), literal("]"), (lbr, { name: name2, namespace }) => ({
  type: "attrPresence",
  name: name2,
  namespace,
  specificity: [0, 1, 0]
}));
const attrValueSelector_ = middle(literal("["), abc(optionallySpaced(qualifiedName_), attrMatcher_, optionallySpaced(attrValue_), ({ name: name2, namespace }, matcher, { value, modifier }) => ({
  type: "attrValue",
  name: name2,
  namespace,
  matcher,
  value,
  modifier,
  specificity: [0, 1, 0]
})), literal("]"));
const attrSelector_ = otherwise(attrPresenceSelector_, attrValueSelector_);
const typeSelector_ = otherwise(uniSelector_, tagSelector_);
const subclassSelector_ = choice(idSelector_, classSelector_, attrSelector_);
const compoundSelector_ = map(otherwise(flatten(typeSelector_, many(subclassSelector_)), many1(subclassSelector_)), (ss2) => {
  return {
    type: "compound",
    list: ss2,
    specificity: sumAllSpec(ss2.map((s2) => s2.specificity))
  };
});
const combinator_ = choice(map(literal(">"), () => ">"), map(literal("+"), () => "+"), map(literal("~"), () => "~"), ab(literal("|"), literal("|"), () => "||"));
const combinatorSeparator_ = otherwise(optionallySpaced(combinator_), map(whitespace_, () => " "));
const complexSelector_ = leftAssoc2(compoundSelector_, map(combinatorSeparator_, (c2) => (left2, right2) => ({
  type: "compound",
  list: [...right2.list, { type: "combinator", combinator: c2, left: left2, specificity: left2.specificity }],
  specificity: sumSpec(left2.specificity, right2.specificity)
})), compoundSelector_);
function parse_(parser, str) {
  if (!(typeof str === "string" || str instanceof String)) {
    throw new Error("Expected a selector string. Actual input is not a string!");
  }
  const lexerResult = lexSelector(str);
  if (!lexerResult.complete) {
    throw new Error(`The input "${str}" was only partially tokenized, stopped at offset ${lexerResult.offset}!
` + prettyPrintPosition(str, lexerResult.offset));
  }
  const result = optionallySpaced(parser)({ tokens: lexerResult.tokens, options: void 0 }, 0);
  if (!result.matched) {
    throw new Error(`No match for "${str}" input!`);
  }
  if (result.position < lexerResult.tokens.length) {
    const token2 = lexerResult.tokens[result.position];
    throw new Error(`The input "${str}" was only partially parsed, stopped at offset ${token2.offset}!
` + prettyPrintPosition(str, token2.offset, token2.len));
  }
  return result.value;
}
function prettyPrintPosition(str, offset, len = 1) {
  return `${str.replace(/(\t)|(\r)|(\n)/g, (m, t2, r2) => t2 ? "␉" : r2 ? "␍" : "␊")}
${"".padEnd(offset)}${"^".repeat(len)}`;
}
function parse1(str) {
  return parse_(complexSelector_, str);
}
function serialize(selector) {
  if (!selector.type) {
    throw new Error("This is not an AST node.");
  }
  switch (selector.type) {
    case "universal":
      return _serNs(selector.namespace) + "*";
    case "tag":
      return _serNs(selector.namespace) + _serIdent(selector.name);
    case "class":
      return "." + _serIdent(selector.name);
    case "id":
      return "#" + _serIdent(selector.name);
    case "attrPresence":
      return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}]`;
    case "attrValue":
      return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}${selector.matcher}"${_serStr(selector.value)}"${selector.modifier ? selector.modifier : ""}]`;
    case "combinator":
      return serialize(selector.left) + selector.combinator;
    case "compound":
      return selector.list.reduce((acc, node) => {
        if (node.type === "combinator") {
          return serialize(node) + acc;
        } else {
          return acc + serialize(node);
        }
      }, "");
    case "list":
      return selector.list.map(serialize).join(",");
  }
}
function _serNs(ns2) {
  return ns2 || ns2 === "" ? _serIdent(ns2) + "|" : "";
}
function _codePoint(char) {
  return `\\${char.codePointAt(0).toString(16)} `;
}
function _serIdent(str) {
  return str.replace(
    /(^[0-9])|(^-[0-9])|(^-$)|([-0-9a-zA-Z_]|[^\x00-\x7F])|(\x00)|([\x01-\x1f]|\x7f)|([\s\S])/g,
    (m, d1, d2, hy, safe, nl2, ctrl, other) => d1 ? _codePoint(d1) : d2 ? "-" + _codePoint(d2.slice(1)) : hy ? "\\-" : safe ? safe : nl2 ? "�" : ctrl ? _codePoint(ctrl) : "\\" + other
  );
}
function _serStr(str) {
  return str.replace(
    /(")|(\\)|(\x00)|([\x01-\x1f]|\x7f)/g,
    (m, dq, bs2, nl2, ctrl) => dq ? '\\"' : bs2 ? "\\\\" : nl2 ? "�" : _codePoint(ctrl)
  );
}
function normalize(selector) {
  if (!selector.type) {
    throw new Error("This is not an AST node.");
  }
  switch (selector.type) {
    case "compound": {
      selector.list.forEach(normalize);
      selector.list.sort((a, b2) => _compareArrays(_getSelectorPriority(a), _getSelectorPriority(b2)));
      break;
    }
    case "combinator": {
      normalize(selector.left);
      break;
    }
    case "list": {
      selector.list.forEach(normalize);
      selector.list.sort((a, b2) => serialize(a) < serialize(b2) ? -1 : 1);
      break;
    }
  }
  return selector;
}
function _getSelectorPriority(selector) {
  switch (selector.type) {
    case "universal":
      return [1];
    case "tag":
      return [1];
    case "id":
      return [2];
    case "class":
      return [3, selector.name];
    case "attrPresence":
      return [4, serialize(selector)];
    case "attrValue":
      return [5, serialize(selector)];
    case "combinator":
      return [15, serialize(selector)];
  }
}
function compareSpecificity(a, b2) {
  return _compareArrays(a, b2);
}
function _compareArrays(a, b2) {
  if (!Array.isArray(a) || !Array.isArray(b2)) {
    throw new Error("Arguments must be arrays.");
  }
  const shorter = a.length < b2.length ? a.length : b2.length;
  for (let i = 0; i < shorter; i++) {
    if (a[i] === b2[i]) {
      continue;
    }
    return a[i] < b2[i] ? -1 : 1;
  }
  return a.length - b2.length;
}
class DecisionTree {
  constructor(input) {
    this.branches = weave(toAstTerminalPairs(input));
  }
  build(builder) {
    return builder(this.branches);
  }
}
function toAstTerminalPairs(array) {
  const len = array.length;
  const results = new Array(len);
  for (let i = 0; i < len; i++) {
    const [selectorString, val] = array[i];
    const ast = preprocess(parse1(selectorString));
    results[i] = {
      ast,
      terminal: {
        type: "terminal",
        valueContainer: { index: i, value: val, specificity: ast.specificity }
      }
    };
  }
  return results;
}
function preprocess(ast) {
  reduceSelectorVariants(ast);
  normalize(ast);
  return ast;
}
function reduceSelectorVariants(ast) {
  const newList = [];
  ast.list.forEach((sel) => {
    switch (sel.type) {
      case "class":
        newList.push({
          matcher: "~=",
          modifier: null,
          name: "class",
          namespace: null,
          specificity: sel.specificity,
          type: "attrValue",
          value: sel.name
        });
        break;
      case "id":
        newList.push({
          matcher: "=",
          modifier: null,
          name: "id",
          namespace: null,
          specificity: sel.specificity,
          type: "attrValue",
          value: sel.name
        });
        break;
      case "combinator":
        reduceSelectorVariants(sel.left);
        newList.push(sel);
        break;
      case "universal":
        break;
      default:
        newList.push(sel);
        break;
    }
  });
  ast.list = newList;
}
function weave(items) {
  const branches = [];
  while (items.length) {
    const topKind = findTopKey(items, (sel) => true, getSelectorKind);
    const { matches, nonmatches, empty } = breakByKind(items, topKind);
    items = nonmatches;
    if (matches.length) {
      branches.push(branchOfKind(topKind, matches));
    }
    if (empty.length) {
      branches.push(...terminate(empty));
    }
  }
  return branches;
}
function terminate(items) {
  const results = [];
  for (const item of items) {
    const terminal = item.terminal;
    if (terminal.type === "terminal") {
      results.push(terminal);
    } else {
      const { matches, rest } = partition(terminal.cont, (node) => node.type === "terminal");
      matches.forEach((node) => results.push(node));
      if (rest.length) {
        terminal.cont = rest;
        results.push(terminal);
      }
    }
  }
  return results;
}
function breakByKind(items, selectedKind) {
  const matches = [];
  const nonmatches = [];
  const empty = [];
  for (const item of items) {
    const simpsels = item.ast.list;
    if (simpsels.length) {
      const isMatch = simpsels.some((node) => getSelectorKind(node) === selectedKind);
      (isMatch ? matches : nonmatches).push(item);
    } else {
      empty.push(item);
    }
  }
  return { matches, nonmatches, empty };
}
function getSelectorKind(sel) {
  switch (sel.type) {
    case "attrPresence":
      return `attrPresence ${sel.name}`;
    case "attrValue":
      return `attrValue ${sel.name}`;
    case "combinator":
      return `combinator ${sel.combinator}`;
    default:
      return sel.type;
  }
}
function branchOfKind(kind, items) {
  if (kind === "tag") {
    return tagNameBranch(items);
  }
  if (kind.startsWith("attrValue ")) {
    return attrValueBranch(kind.substring(10), items);
  }
  if (kind.startsWith("attrPresence ")) {
    return attrPresenceBranch(kind.substring(13), items);
  }
  if (kind === "combinator >") {
    return combinatorBranch(">", items);
  }
  if (kind === "combinator +") {
    return combinatorBranch("+", items);
  }
  throw new Error(`Unsupported selector kind: ${kind}`);
}
function tagNameBranch(items) {
  const groups = spliceAndGroup(items, (x2) => x2.type === "tag", (x2) => x2.name);
  const variants = Object.entries(groups).map(([name2, group]) => ({
    type: "variant",
    value: name2,
    cont: weave(group.items)
  }));
  return {
    type: "tagName",
    variants
  };
}
function attrPresenceBranch(name2, items) {
  for (const item of items) {
    spliceSimpleSelector(item, (x2) => x2.type === "attrPresence" && x2.name === name2);
  }
  return {
    type: "attrPresence",
    name: name2,
    cont: weave(items)
  };
}
function attrValueBranch(name2, items) {
  const groups = spliceAndGroup(items, (x2) => x2.type === "attrValue" && x2.name === name2, (x2) => `${x2.matcher} ${x2.modifier || ""} ${x2.value}`);
  const matchers = [];
  for (const group of Object.values(groups)) {
    const sel = group.oneSimpleSelector;
    const predicate = getAttrPredicate(sel);
    const continuation = weave(group.items);
    matchers.push({
      type: "matcher",
      matcher: sel.matcher,
      modifier: sel.modifier,
      value: sel.value,
      predicate,
      cont: continuation
    });
  }
  return {
    type: "attrValue",
    name: name2,
    matchers
  };
}
function getAttrPredicate(sel) {
  if (sel.modifier === "i") {
    const expected = sel.value.toLowerCase();
    switch (sel.matcher) {
      case "=":
        return (actual) => expected === actual.toLowerCase();
      case "~=":
        return (actual) => actual.toLowerCase().split(/[ \t]+/).includes(expected);
      case "^=":
        return (actual) => actual.toLowerCase().startsWith(expected);
      case "$=":
        return (actual) => actual.toLowerCase().endsWith(expected);
      case "*=":
        return (actual) => actual.toLowerCase().includes(expected);
      case "|=":
        return (actual) => {
          const lower = actual.toLowerCase();
          return expected === lower || lower.startsWith(expected) && lower[expected.length] === "-";
        };
    }
  } else {
    const expected = sel.value;
    switch (sel.matcher) {
      case "=":
        return (actual) => expected === actual;
      case "~=":
        return (actual) => actual.split(/[ \t]+/).includes(expected);
      case "^=":
        return (actual) => actual.startsWith(expected);
      case "$=":
        return (actual) => actual.endsWith(expected);
      case "*=":
        return (actual) => actual.includes(expected);
      case "|=":
        return (actual) => expected === actual || actual.startsWith(expected) && actual[expected.length] === "-";
    }
  }
}
function combinatorBranch(combinator, items) {
  const groups = spliceAndGroup(items, (x2) => x2.type === "combinator" && x2.combinator === combinator, (x2) => serialize(x2.left));
  const leftItems = [];
  for (const group of Object.values(groups)) {
    const rightCont = weave(group.items);
    const leftAst = group.oneSimpleSelector.left;
    leftItems.push({
      ast: leftAst,
      terminal: { type: "popElement", cont: rightCont }
    });
  }
  return {
    type: "pushElement",
    combinator,
    cont: weave(leftItems)
  };
}
function spliceAndGroup(items, predicate, keyCallback) {
  const groups = {};
  while (items.length) {
    const bestKey = findTopKey(items, predicate, keyCallback);
    const bestKeyPredicate = (sel) => predicate(sel) && keyCallback(sel) === bestKey;
    const hasBestKeyPredicate = (item) => item.ast.list.some(bestKeyPredicate);
    const { matches, rest } = partition1(items, hasBestKeyPredicate);
    let oneSimpleSelector = null;
    for (const item of matches) {
      const splicedNode = spliceSimpleSelector(item, bestKeyPredicate);
      if (!oneSimpleSelector) {
        oneSimpleSelector = splicedNode;
      }
    }
    if (oneSimpleSelector == null) {
      throw new Error("No simple selector is found.");
    }
    groups[bestKey] = { oneSimpleSelector, items: matches };
    items = rest;
  }
  return groups;
}
function spliceSimpleSelector(item, predicate) {
  const simpsels = item.ast.list;
  const matches = new Array(simpsels.length);
  let firstIndex = -1;
  for (let i = simpsels.length; i-- > 0; ) {
    if (predicate(simpsels[i])) {
      matches[i] = true;
      firstIndex = i;
    }
  }
  if (firstIndex == -1) {
    throw new Error(`Couldn't find the required simple selector.`);
  }
  const result = simpsels[firstIndex];
  item.ast.list = simpsels.filter((sel, i) => !matches[i]);
  return result;
}
function findTopKey(items, predicate, keyCallback) {
  const candidates = {};
  for (const item of items) {
    const candidates1 = {};
    for (const node of item.ast.list.filter(predicate)) {
      candidates1[keyCallback(node)] = true;
    }
    for (const key of Object.keys(candidates1)) {
      if (candidates[key]) {
        candidates[key]++;
      } else {
        candidates[key] = 1;
      }
    }
  }
  let topKind = "";
  let topCounter = 0;
  for (const entry of Object.entries(candidates)) {
    if (entry[1] > topCounter) {
      topKind = entry[0];
      topCounter = entry[1];
    }
  }
  return topKind;
}
function partition(src, predicate) {
  const matches = [];
  const rest = [];
  for (const x2 of src) {
    if (predicate(x2)) {
      matches.push(x2);
    } else {
      rest.push(x2);
    }
  }
  return { matches, rest };
}
function partition1(src, predicate) {
  const matches = [];
  const rest = [];
  for (const x2 of src) {
    if (predicate(x2)) {
      matches.push(x2);
    } else {
      rest.push(x2);
    }
  }
  return { matches, rest };
}
class Picker {
  constructor(f2) {
    this.f = f2;
  }
  pickAll(el) {
    return this.f(el);
  }
  pick1(el, preferFirst = false) {
    const results = this.f(el);
    const len = results.length;
    if (len === 0) {
      return null;
    }
    if (len === 1) {
      return results[0].value;
    }
    const comparator = preferFirst ? comparatorPreferFirst : comparatorPreferLast;
    let result = results[0];
    for (let i = 1; i < len; i++) {
      const next = results[i];
      if (comparator(result, next)) {
        result = next;
      }
    }
    return result.value;
  }
}
function comparatorPreferFirst(acc, next) {
  const diff = compareSpecificity(next.specificity, acc.specificity);
  return diff > 0 || diff === 0 && next.index < acc.index;
}
function comparatorPreferLast(acc, next) {
  const diff = compareSpecificity(next.specificity, acc.specificity);
  return diff > 0 || diff === 0 && next.index > acc.index;
}
function hp2Builder(nodes) {
  return new Picker(handleArray(nodes));
}
function handleArray(nodes) {
  const matchers = nodes.map(handleNode);
  return (el, ...tail) => matchers.flatMap((m) => m(el, ...tail));
}
function handleNode(node) {
  switch (node.type) {
    case "terminal": {
      const result = [node.valueContainer];
      return (el, ...tail) => result;
    }
    case "tagName":
      return handleTagName(node);
    case "attrValue":
      return handleAttrValueName(node);
    case "attrPresence":
      return handleAttrPresenceName(node);
    case "pushElement":
      return handlePushElementNode(node);
    case "popElement":
      return handlePopElementNode(node);
  }
}
function handleTagName(node) {
  const variants = {};
  for (const variant of node.variants) {
    variants[variant.value] = handleArray(variant.cont);
  }
  return (el, ...tail) => {
    const continuation = variants[el.name];
    return continuation ? continuation(el, ...tail) : [];
  };
}
function handleAttrPresenceName(node) {
  const attrName = node.name;
  const continuation = handleArray(node.cont);
  return (el, ...tail) => Object.prototype.hasOwnProperty.call(el.attribs, attrName) ? continuation(el, ...tail) : [];
}
function handleAttrValueName(node) {
  const callbacks = [];
  for (const matcher of node.matchers) {
    const predicate = matcher.predicate;
    const continuation = handleArray(matcher.cont);
    callbacks.push((attr, el, ...tail) => predicate(attr) ? continuation(el, ...tail) : []);
  }
  const attrName = node.name;
  return (el, ...tail) => {
    const attr = el.attribs[attrName];
    return attr || attr === "" ? callbacks.flatMap((cb) => cb(attr, el, ...tail)) : [];
  };
}
function handlePushElementNode(node) {
  const continuation = handleArray(node.cont);
  const leftElementGetter = node.combinator === "+" ? getPrecedingElement : getParentElement;
  return (el, ...tail) => {
    const next = leftElementGetter(el);
    if (next === null) {
      return [];
    }
    return continuation(next, el, ...tail);
  };
}
const getPrecedingElement = (el) => {
  const prev = el.prev;
  if (prev === null) {
    return null;
  }
  return isTag(prev) ? prev : getPrecedingElement(prev);
};
const getParentElement = (el) => {
  const parent = el.parent;
  return parent && isTag(parent) ? parent : null;
};
function handlePopElementNode(node) {
  const continuation = handleArray(node.cont);
  return (el, next, ...tail) => continuation(next, ...tail);
}
const htmlDecodeTree = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((c2) => c2.charCodeAt(0))
);
const xmlDecodeTree = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((c2) => c2.charCodeAt(0))
);
var _a;
const decodeMap = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
const fromCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
    let output = "";
    if (codePoint > 65535) {
      codePoint -= 65536;
      output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
  }
);
function replaceCodePoint(codePoint) {
  var _a2;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
}
var CharCodes$1;
(function(CharCodes2) {
  CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
  CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
  CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
  CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
  CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
  CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
  CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
  CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
  CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
  CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
  CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes$1 || (CharCodes$1 = {}));
const TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags2) {
  BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
  BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber$1(code) {
  return code >= CharCodes$1.ZERO && code <= CharCodes$1.NINE;
}
function isHexadecimalCharacter(code) {
  return code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_F || code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
  return code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_Z || code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_Z || isNumber$1(code);
}
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes$1.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function(EntityDecoderState2) {
  EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode2) {
  DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
  DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
  DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
class EntityDecoder {
  constructor(decodeTree, emitCodePoint, errors) {
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors;
    this.state = EntityDecoderState.EntityStart;
    this.consumed = 1;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.decodeMode = DecodingMode.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(decodeMode) {
    this.decodeMode = decodeMode;
    this.state = EntityDecoderState.EntityStart;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(str, offset) {
    switch (this.state) {
      case EntityDecoderState.EntityStart: {
        if (str.charCodeAt(offset) === CharCodes$1.NUM) {
          this.state = EntityDecoderState.NumericStart;
          this.consumed += 1;
          return this.stateNumericStart(str, offset + 1);
        }
        this.state = EntityDecoderState.NamedEntity;
        return this.stateNamedEntity(str, offset);
      }
      case EntityDecoderState.NumericStart: {
        return this.stateNumericStart(str, offset);
      }
      case EntityDecoderState.NumericDecimal: {
        return this.stateNumericDecimal(str, offset);
      }
      case EntityDecoderState.NumericHex: {
        return this.stateNumericHex(str, offset);
      }
      case EntityDecoderState.NamedEntity: {
        return this.stateNamedEntity(str, offset);
      }
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(str, offset) {
    if (offset >= str.length) {
      return -1;
    }
    if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes$1.LOWER_X) {
      this.state = EntityDecoderState.NumericHex;
      this.consumed += 1;
      return this.stateNumericHex(str, offset + 1);
    }
    this.state = EntityDecoderState.NumericDecimal;
    return this.stateNumericDecimal(str, offset);
  }
  addToNumericResult(str, start, end, base) {
    if (start !== end) {
      const digitCount = end - start;
      this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
      this.consumed += digitCount;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber$1(char) || isHexadecimalCharacter(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 16);
        return this.emitNumericEntity(char, 3);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 16);
    return -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber$1(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 10);
        return this.emitNumericEntity(char, 2);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 10);
    return -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(lastCp, expectedLength) {
    var _a2;
    if (this.consumed <= expectedLength) {
      (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
      return 0;
    }
    if (lastCp === CharCodes$1.SEMI) {
      this.consumed += 1;
    } else if (this.decodeMode === DecodingMode.Strict) {
      return 0;
    }
    this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
    if (this.errors) {
      if (lastCp !== CharCodes$1.SEMI) {
        this.errors.missingSemicolonAfterCharacterReference();
      }
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(str, offset) {
    const { decodeTree } = this;
    let current = decodeTree[this.treeIndex];
    let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
    for (; offset < str.length; offset++, this.excess++) {
      const char = str.charCodeAt(offset);
      this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
      if (this.treeIndex < 0) {
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
        (valueLength === 0 || // And there should be no invalid characters.
        isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
      }
      current = decodeTree[this.treeIndex];
      valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      if (valueLength !== 0) {
        if (char === CharCodes$1.SEMI) {
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        }
        if (this.decodeMode !== DecodingMode.Strict) {
          this.result = this.treeIndex;
          this.consumed += this.excess;
          this.excess = 0;
        }
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var _a2;
    const { result, decodeTree } = this;
    const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
    this.emitNamedEntityData(result, valueLength, this.consumed);
    (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.missingSemicolonAfterCharacterReference();
    return this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(result, valueLength, consumed) {
    const { decodeTree } = this;
    this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
    if (valueLength === 3) {
      this.emitCodePoint(decodeTree[result + 2], consumed);
    }
    return consumed;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var _a2;
    switch (this.state) {
      case EntityDecoderState.NamedEntity: {
        return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      }
      // Otherwise, emit a numeric entity if we have one.
      case EntityDecoderState.NumericDecimal: {
        return this.emitNumericEntity(0, 2);
      }
      case EntityDecoderState.NumericHex: {
        return this.emitNumericEntity(0, 3);
      }
      case EntityDecoderState.NumericStart: {
        (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      case EntityDecoderState.EntityStart: {
        return 0;
      }
    }
  }
}
function getDecoder(decodeTree) {
  let ret = "";
  const decoder2 = new EntityDecoder(decodeTree, (str) => ret += fromCodePoint(str));
  return function decodeWithTrie(str, decodeMode) {
    let lastIndex = 0;
    let offset = 0;
    while ((offset = str.indexOf("&", offset)) >= 0) {
      ret += str.slice(lastIndex, offset);
      decoder2.startEntity(decodeMode);
      const len = decoder2.write(
        str,
        // Skip the "&"
        offset + 1
      );
      if (len < 0) {
        lastIndex = offset + decoder2.end();
        break;
      }
      lastIndex = offset + len;
      offset = len === 0 ? lastIndex + 1 : lastIndex;
    }
    const result = ret + str.slice(lastIndex);
    ret = "";
    return result;
  };
}
function determineBranch(decodeTree, current, nodeIdx, char) {
  const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
  }
  if (jumpOffset) {
    const value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
  }
  let lo2 = nodeIdx;
  let hi2 = lo2 + branchCount - 1;
  while (lo2 <= hi2) {
    const mid = lo2 + hi2 >>> 1;
    const midVal = decodeTree[mid];
    if (midVal < char) {
      lo2 = mid + 1;
    } else if (midVal > char) {
      hi2 = mid - 1;
    } else {
      return decodeTree[mid + branchCount];
    }
  }
  return -1;
}
getDecoder(htmlDecodeTree);
getDecoder(xmlDecodeTree);
var CharCodes;
(function(CharCodes2) {
  CharCodes2[CharCodes2["Tab"] = 9] = "Tab";
  CharCodes2[CharCodes2["NewLine"] = 10] = "NewLine";
  CharCodes2[CharCodes2["FormFeed"] = 12] = "FormFeed";
  CharCodes2[CharCodes2["CarriageReturn"] = 13] = "CarriageReturn";
  CharCodes2[CharCodes2["Space"] = 32] = "Space";
  CharCodes2[CharCodes2["ExclamationMark"] = 33] = "ExclamationMark";
  CharCodes2[CharCodes2["Number"] = 35] = "Number";
  CharCodes2[CharCodes2["Amp"] = 38] = "Amp";
  CharCodes2[CharCodes2["SingleQuote"] = 39] = "SingleQuote";
  CharCodes2[CharCodes2["DoubleQuote"] = 34] = "DoubleQuote";
  CharCodes2[CharCodes2["Dash"] = 45] = "Dash";
  CharCodes2[CharCodes2["Slash"] = 47] = "Slash";
  CharCodes2[CharCodes2["Zero"] = 48] = "Zero";
  CharCodes2[CharCodes2["Nine"] = 57] = "Nine";
  CharCodes2[CharCodes2["Semi"] = 59] = "Semi";
  CharCodes2[CharCodes2["Lt"] = 60] = "Lt";
  CharCodes2[CharCodes2["Eq"] = 61] = "Eq";
  CharCodes2[CharCodes2["Gt"] = 62] = "Gt";
  CharCodes2[CharCodes2["Questionmark"] = 63] = "Questionmark";
  CharCodes2[CharCodes2["UpperA"] = 65] = "UpperA";
  CharCodes2[CharCodes2["LowerA"] = 97] = "LowerA";
  CharCodes2[CharCodes2["UpperF"] = 70] = "UpperF";
  CharCodes2[CharCodes2["LowerF"] = 102] = "LowerF";
  CharCodes2[CharCodes2["UpperZ"] = 90] = "UpperZ";
  CharCodes2[CharCodes2["LowerZ"] = 122] = "LowerZ";
  CharCodes2[CharCodes2["LowerX"] = 120] = "LowerX";
  CharCodes2[CharCodes2["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes || (CharCodes = {}));
var State;
(function(State2) {
  State2[State2["Text"] = 1] = "Text";
  State2[State2["BeforeTagName"] = 2] = "BeforeTagName";
  State2[State2["InTagName"] = 3] = "InTagName";
  State2[State2["InSelfClosingTag"] = 4] = "InSelfClosingTag";
  State2[State2["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
  State2[State2["InClosingTagName"] = 6] = "InClosingTagName";
  State2[State2["AfterClosingTagName"] = 7] = "AfterClosingTagName";
  State2[State2["BeforeAttributeName"] = 8] = "BeforeAttributeName";
  State2[State2["InAttributeName"] = 9] = "InAttributeName";
  State2[State2["AfterAttributeName"] = 10] = "AfterAttributeName";
  State2[State2["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
  State2[State2["InAttributeValueDq"] = 12] = "InAttributeValueDq";
  State2[State2["InAttributeValueSq"] = 13] = "InAttributeValueSq";
  State2[State2["InAttributeValueNq"] = 14] = "InAttributeValueNq";
  State2[State2["BeforeDeclaration"] = 15] = "BeforeDeclaration";
  State2[State2["InDeclaration"] = 16] = "InDeclaration";
  State2[State2["InProcessingInstruction"] = 17] = "InProcessingInstruction";
  State2[State2["BeforeComment"] = 18] = "BeforeComment";
  State2[State2["CDATASequence"] = 19] = "CDATASequence";
  State2[State2["InSpecialComment"] = 20] = "InSpecialComment";
  State2[State2["InCommentLike"] = 21] = "InCommentLike";
  State2[State2["BeforeSpecialS"] = 22] = "BeforeSpecialS";
  State2[State2["SpecialStartSequence"] = 23] = "SpecialStartSequence";
  State2[State2["InSpecialTag"] = 24] = "InSpecialTag";
  State2[State2["BeforeEntity"] = 25] = "BeforeEntity";
  State2[State2["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
  State2[State2["InNamedEntity"] = 27] = "InNamedEntity";
  State2[State2["InNumericEntity"] = 28] = "InNumericEntity";
  State2[State2["InHexEntity"] = 29] = "InHexEntity";
})(State || (State = {}));
function isWhitespace(c2) {
  return c2 === CharCodes.Space || c2 === CharCodes.NewLine || c2 === CharCodes.Tab || c2 === CharCodes.FormFeed || c2 === CharCodes.CarriageReturn;
}
function isEndOfTagSection(c2) {
  return c2 === CharCodes.Slash || c2 === CharCodes.Gt || isWhitespace(c2);
}
function isNumber(c2) {
  return c2 >= CharCodes.Zero && c2 <= CharCodes.Nine;
}
function isASCIIAlpha(c2) {
  return c2 >= CharCodes.LowerA && c2 <= CharCodes.LowerZ || c2 >= CharCodes.UpperA && c2 <= CharCodes.UpperZ;
}
function isHexDigit(c2) {
  return c2 >= CharCodes.UpperA && c2 <= CharCodes.UpperF || c2 >= CharCodes.LowerA && c2 <= CharCodes.LowerF;
}
var QuoteType;
(function(QuoteType2) {
  QuoteType2[QuoteType2["NoValue"] = 0] = "NoValue";
  QuoteType2[QuoteType2["Unquoted"] = 1] = "Unquoted";
  QuoteType2[QuoteType2["Single"] = 2] = "Single";
  QuoteType2[QuoteType2["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
const Sequences = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  CdataEnd: new Uint8Array([93, 93, 62]),
  CommentEnd: new Uint8Array([45, 45, 62]),
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
  // `</title`
};
class Tokenizer {
  constructor({ xmlMode = false, decodeEntities = true }, cbs) {
    this.cbs = cbs;
    this.state = State.Text;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.baseState = State.Text;
    this.isSpecial = false;
    this.running = true;
    this.offset = 0;
    this.currentSequence = void 0;
    this.sequenceIndex = 0;
    this.trieIndex = 0;
    this.trieCurrent = 0;
    this.entityResult = 0;
    this.entityExcess = 0;
    this.xmlMode = xmlMode;
    this.decodeEntities = decodeEntities;
    this.entityTrie = xmlMode ? xmlDecodeTree : htmlDecodeTree;
  }
  reset() {
    this.state = State.Text;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.baseState = State.Text;
    this.currentSequence = void 0;
    this.running = true;
    this.offset = 0;
  }
  write(chunk) {
    this.offset += this.buffer.length;
    this.buffer = chunk;
    this.parse();
  }
  end() {
    if (this.running)
      this.finish();
  }
  pause() {
    this.running = false;
  }
  resume() {
    this.running = true;
    if (this.index < this.buffer.length + this.offset) {
      this.parse();
    }
  }
  /**
   * The current index within all of the written data.
   */
  getIndex() {
    return this.index;
  }
  /**
   * The start of the current section.
   */
  getSectionStart() {
    return this.sectionStart;
  }
  stateText(c2) {
    if (c2 === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt)) {
      if (this.index > this.sectionStart) {
        this.cbs.ontext(this.sectionStart, this.index);
      }
      this.state = State.BeforeTagName;
      this.sectionStart = this.index;
    } else if (this.decodeEntities && c2 === CharCodes.Amp) {
      this.state = State.BeforeEntity;
    }
  }
  stateSpecialStartSequence(c2) {
    const isEnd = this.sequenceIndex === this.currentSequence.length;
    const isMatch = isEnd ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      isEndOfTagSection(c2)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (c2 | 32) === this.currentSequence[this.sequenceIndex]
    );
    if (!isMatch) {
      this.isSpecial = false;
    } else if (!isEnd) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0;
    this.state = State.InTagName;
    this.stateInTagName(c2);
  }
  /** Look for an end tag. For <title> tags, also decode entities. */
  stateInSpecialTag(c2) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (c2 === CharCodes.Gt || isWhitespace(c2)) {
        const endOfText = this.index - this.currentSequence.length;
        if (this.sectionStart < endOfText) {
          const actualIndex = this.index;
          this.index = endOfText;
          this.cbs.ontext(this.sectionStart, endOfText);
          this.index = actualIndex;
        }
        this.isSpecial = false;
        this.sectionStart = endOfText + 2;
        this.stateInClosingTagName(c2);
        return;
      }
      this.sequenceIndex = 0;
    }
    if ((c2 | 32) === this.currentSequence[this.sequenceIndex]) {
      this.sequenceIndex += 1;
    } else if (this.sequenceIndex === 0) {
      if (this.currentSequence === Sequences.TitleEnd) {
        if (this.decodeEntities && c2 === CharCodes.Amp) {
          this.state = State.BeforeEntity;
        }
      } else if (this.fastForwardTo(CharCodes.Lt)) {
        this.sequenceIndex = 1;
      }
    } else {
      this.sequenceIndex = Number(c2 === CharCodes.Lt);
    }
  }
  stateCDATASequence(c2) {
    if (c2 === Sequences.Cdata[this.sequenceIndex]) {
      if (++this.sequenceIndex === Sequences.Cdata.length) {
        this.state = State.InCommentLike;
        this.currentSequence = Sequences.CdataEnd;
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
      }
    } else {
      this.sequenceIndex = 0;
      this.state = State.InDeclaration;
      this.stateInDeclaration(c2);
    }
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(c2) {
    while (++this.index < this.buffer.length + this.offset) {
      if (this.buffer.charCodeAt(this.index - this.offset) === c2) {
        return true;
      }
    }
    this.index = this.buffer.length + this.offset - 1;
    return false;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(c2) {
    if (c2 === this.currentSequence[this.sequenceIndex]) {
      if (++this.sequenceIndex === this.currentSequence.length) {
        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, this.index, 2);
        } else {
          this.cbs.oncomment(this.sectionStart, this.index, 2);
        }
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
        this.state = State.Text;
      }
    } else if (this.sequenceIndex === 0) {
      if (this.fastForwardTo(this.currentSequence[0])) {
        this.sequenceIndex = 1;
      }
    } else if (c2 !== this.currentSequence[this.sequenceIndex - 1]) {
      this.sequenceIndex = 0;
    }
  }
  /**
   * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
   *
   * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
   * We allow anything that wouldn't end the tag.
   */
  isTagStartChar(c2) {
    return this.xmlMode ? !isEndOfTagSection(c2) : isASCIIAlpha(c2);
  }
  startSpecial(sequence, offset) {
    this.isSpecial = true;
    this.currentSequence = sequence;
    this.sequenceIndex = offset;
    this.state = State.SpecialStartSequence;
  }
  stateBeforeTagName(c2) {
    if (c2 === CharCodes.ExclamationMark) {
      this.state = State.BeforeDeclaration;
      this.sectionStart = this.index + 1;
    } else if (c2 === CharCodes.Questionmark) {
      this.state = State.InProcessingInstruction;
      this.sectionStart = this.index + 1;
    } else if (this.isTagStartChar(c2)) {
      const lower = c2 | 32;
      this.sectionStart = this.index;
      if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
        this.startSpecial(Sequences.TitleEnd, 3);
      } else {
        this.state = !this.xmlMode && lower === Sequences.ScriptEnd[2] ? State.BeforeSpecialS : State.InTagName;
      }
    } else if (c2 === CharCodes.Slash) {
      this.state = State.BeforeClosingTagName;
    } else {
      this.state = State.Text;
      this.stateText(c2);
    }
  }
  stateInTagName(c2) {
    if (isEndOfTagSection(c2)) {
      this.cbs.onopentagname(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c2);
    }
  }
  stateBeforeClosingTagName(c2) {
    if (isWhitespace(c2)) ;
    else if (c2 === CharCodes.Gt) {
      this.state = State.Text;
    } else {
      this.state = this.isTagStartChar(c2) ? State.InClosingTagName : State.InSpecialComment;
      this.sectionStart = this.index;
    }
  }
  stateInClosingTagName(c2) {
    if (c2 === CharCodes.Gt || isWhitespace(c2)) {
      this.cbs.onclosetag(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = State.AfterClosingTagName;
      this.stateAfterClosingTagName(c2);
    }
  }
  stateAfterClosingTagName(c2) {
    if (c2 === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
      this.state = State.Text;
      this.baseState = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeAttributeName(c2) {
    if (c2 === CharCodes.Gt) {
      this.cbs.onopentagend(this.index);
      if (this.isSpecial) {
        this.state = State.InSpecialTag;
        this.sequenceIndex = 0;
      } else {
        this.state = State.Text;
      }
      this.baseState = this.state;
      this.sectionStart = this.index + 1;
    } else if (c2 === CharCodes.Slash) {
      this.state = State.InSelfClosingTag;
    } else if (!isWhitespace(c2)) {
      this.state = State.InAttributeName;
      this.sectionStart = this.index;
    }
  }
  stateInSelfClosingTag(c2) {
    if (c2 === CharCodes.Gt) {
      this.cbs.onselfclosingtag(this.index);
      this.state = State.Text;
      this.baseState = State.Text;
      this.sectionStart = this.index + 1;
      this.isSpecial = false;
    } else if (!isWhitespace(c2)) {
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c2);
    }
  }
  stateInAttributeName(c2) {
    if (c2 === CharCodes.Eq || isEndOfTagSection(c2)) {
      this.cbs.onattribname(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = State.AfterAttributeName;
      this.stateAfterAttributeName(c2);
    }
  }
  stateAfterAttributeName(c2) {
    if (c2 === CharCodes.Eq) {
      this.state = State.BeforeAttributeValue;
    } else if (c2 === CharCodes.Slash || c2 === CharCodes.Gt) {
      this.cbs.onattribend(QuoteType.NoValue, this.index);
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c2);
    } else if (!isWhitespace(c2)) {
      this.cbs.onattribend(QuoteType.NoValue, this.index);
      this.state = State.InAttributeName;
      this.sectionStart = this.index;
    }
  }
  stateBeforeAttributeValue(c2) {
    if (c2 === CharCodes.DoubleQuote) {
      this.state = State.InAttributeValueDq;
      this.sectionStart = this.index + 1;
    } else if (c2 === CharCodes.SingleQuote) {
      this.state = State.InAttributeValueSq;
      this.sectionStart = this.index + 1;
    } else if (!isWhitespace(c2)) {
      this.sectionStart = this.index;
      this.state = State.InAttributeValueNq;
      this.stateInAttributeValueNoQuotes(c2);
    }
  }
  handleInAttributeValue(c2, quote) {
    if (c2 === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(quote === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index);
      this.state = State.BeforeAttributeName;
    } else if (this.decodeEntities && c2 === CharCodes.Amp) {
      this.baseState = this.state;
      this.state = State.BeforeEntity;
    }
  }
  stateInAttributeValueDoubleQuotes(c2) {
    this.handleInAttributeValue(c2, CharCodes.DoubleQuote);
  }
  stateInAttributeValueSingleQuotes(c2) {
    this.handleInAttributeValue(c2, CharCodes.SingleQuote);
  }
  stateInAttributeValueNoQuotes(c2) {
    if (isWhitespace(c2) || c2 === CharCodes.Gt) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(QuoteType.Unquoted, this.index);
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c2);
    } else if (this.decodeEntities && c2 === CharCodes.Amp) {
      this.baseState = this.state;
      this.state = State.BeforeEntity;
    }
  }
  stateBeforeDeclaration(c2) {
    if (c2 === CharCodes.OpeningSquareBracket) {
      this.state = State.CDATASequence;
      this.sequenceIndex = 0;
    } else {
      this.state = c2 === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
    }
  }
  stateInDeclaration(c2) {
    if (c2 === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
      this.cbs.ondeclaration(this.sectionStart, this.index);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateInProcessingInstruction(c2) {
    if (c2 === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
      this.cbs.onprocessinginstruction(this.sectionStart, this.index);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeComment(c2) {
    if (c2 === CharCodes.Dash) {
      this.state = State.InCommentLike;
      this.currentSequence = Sequences.CommentEnd;
      this.sequenceIndex = 2;
      this.sectionStart = this.index + 1;
    } else {
      this.state = State.InDeclaration;
    }
  }
  stateInSpecialComment(c2) {
    if (c2 === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
      this.cbs.oncomment(this.sectionStart, this.index, 0);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeSpecialS(c2) {
    const lower = c2 | 32;
    if (lower === Sequences.ScriptEnd[3]) {
      this.startSpecial(Sequences.ScriptEnd, 4);
    } else if (lower === Sequences.StyleEnd[3]) {
      this.startSpecial(Sequences.StyleEnd, 4);
    } else {
      this.state = State.InTagName;
      this.stateInTagName(c2);
    }
  }
  stateBeforeEntity(c2) {
    this.entityExcess = 1;
    this.entityResult = 0;
    if (c2 === CharCodes.Number) {
      this.state = State.BeforeNumericEntity;
    } else if (c2 === CharCodes.Amp) ;
    else {
      this.trieIndex = 0;
      this.trieCurrent = this.entityTrie[0];
      this.state = State.InNamedEntity;
      this.stateInNamedEntity(c2);
    }
  }
  stateInNamedEntity(c2) {
    this.entityExcess += 1;
    this.trieIndex = determineBranch(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c2);
    if (this.trieIndex < 0) {
      this.emitNamedEntity();
      this.index--;
      return;
    }
    this.trieCurrent = this.entityTrie[this.trieIndex];
    const masked = this.trieCurrent & BinTrieFlags.VALUE_LENGTH;
    if (masked) {
      const valueLength = (masked >> 14) - 1;
      if (!this.allowLegacyEntity() && c2 !== CharCodes.Semi) {
        this.trieIndex += valueLength;
      } else {
        const entityStart = this.index - this.entityExcess + 1;
        if (entityStart > this.sectionStart) {
          this.emitPartial(this.sectionStart, entityStart);
        }
        this.entityResult = this.trieIndex;
        this.trieIndex += valueLength;
        this.entityExcess = 0;
        this.sectionStart = this.index + 1;
        if (valueLength === 0) {
          this.emitNamedEntity();
        }
      }
    }
  }
  emitNamedEntity() {
    this.state = this.baseState;
    if (this.entityResult === 0) {
      return;
    }
    const valueLength = (this.entityTrie[this.entityResult] & BinTrieFlags.VALUE_LENGTH) >> 14;
    switch (valueLength) {
      case 1: {
        this.emitCodePoint(this.entityTrie[this.entityResult] & ~BinTrieFlags.VALUE_LENGTH);
        break;
      }
      case 2: {
        this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
        break;
      }
      case 3: {
        this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
        this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
      }
    }
  }
  stateBeforeNumericEntity(c2) {
    if ((c2 | 32) === CharCodes.LowerX) {
      this.entityExcess++;
      this.state = State.InHexEntity;
    } else {
      this.state = State.InNumericEntity;
      this.stateInNumericEntity(c2);
    }
  }
  emitNumericEntity(strict) {
    const entityStart = this.index - this.entityExcess - 1;
    const numberStart = entityStart + 2 + Number(this.state === State.InHexEntity);
    if (numberStart !== this.index) {
      if (entityStart > this.sectionStart) {
        this.emitPartial(this.sectionStart, entityStart);
      }
      this.sectionStart = this.index + Number(strict);
      this.emitCodePoint(replaceCodePoint(this.entityResult));
    }
    this.state = this.baseState;
  }
  stateInNumericEntity(c2) {
    if (c2 === CharCodes.Semi) {
      this.emitNumericEntity(true);
    } else if (isNumber(c2)) {
      this.entityResult = this.entityResult * 10 + (c2 - CharCodes.Zero);
      this.entityExcess++;
    } else {
      if (this.allowLegacyEntity()) {
        this.emitNumericEntity(false);
      } else {
        this.state = this.baseState;
      }
      this.index--;
    }
  }
  stateInHexEntity(c2) {
    if (c2 === CharCodes.Semi) {
      this.emitNumericEntity(true);
    } else if (isNumber(c2)) {
      this.entityResult = this.entityResult * 16 + (c2 - CharCodes.Zero);
      this.entityExcess++;
    } else if (isHexDigit(c2)) {
      this.entityResult = this.entityResult * 16 + ((c2 | 32) - CharCodes.LowerA + 10);
      this.entityExcess++;
    } else {
      if (this.allowLegacyEntity()) {
        this.emitNumericEntity(false);
      } else {
        this.state = this.baseState;
      }
      this.index--;
    }
  }
  allowLegacyEntity() {
    return !this.xmlMode && (this.baseState === State.Text || this.baseState === State.InSpecialTag);
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    if (this.running && this.sectionStart !== this.index) {
      if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
        this.cbs.ontext(this.sectionStart, this.index);
        this.sectionStart = this.index;
      } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = this.index;
      }
    }
  }
  shouldContinue() {
    return this.index < this.buffer.length + this.offset && this.running;
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse() {
    while (this.shouldContinue()) {
      const c2 = this.buffer.charCodeAt(this.index - this.offset);
      switch (this.state) {
        case State.Text: {
          this.stateText(c2);
          break;
        }
        case State.SpecialStartSequence: {
          this.stateSpecialStartSequence(c2);
          break;
        }
        case State.InSpecialTag: {
          this.stateInSpecialTag(c2);
          break;
        }
        case State.CDATASequence: {
          this.stateCDATASequence(c2);
          break;
        }
        case State.InAttributeValueDq: {
          this.stateInAttributeValueDoubleQuotes(c2);
          break;
        }
        case State.InAttributeName: {
          this.stateInAttributeName(c2);
          break;
        }
        case State.InCommentLike: {
          this.stateInCommentLike(c2);
          break;
        }
        case State.InSpecialComment: {
          this.stateInSpecialComment(c2);
          break;
        }
        case State.BeforeAttributeName: {
          this.stateBeforeAttributeName(c2);
          break;
        }
        case State.InTagName: {
          this.stateInTagName(c2);
          break;
        }
        case State.InClosingTagName: {
          this.stateInClosingTagName(c2);
          break;
        }
        case State.BeforeTagName: {
          this.stateBeforeTagName(c2);
          break;
        }
        case State.AfterAttributeName: {
          this.stateAfterAttributeName(c2);
          break;
        }
        case State.InAttributeValueSq: {
          this.stateInAttributeValueSingleQuotes(c2);
          break;
        }
        case State.BeforeAttributeValue: {
          this.stateBeforeAttributeValue(c2);
          break;
        }
        case State.BeforeClosingTagName: {
          this.stateBeforeClosingTagName(c2);
          break;
        }
        case State.AfterClosingTagName: {
          this.stateAfterClosingTagName(c2);
          break;
        }
        case State.BeforeSpecialS: {
          this.stateBeforeSpecialS(c2);
          break;
        }
        case State.InAttributeValueNq: {
          this.stateInAttributeValueNoQuotes(c2);
          break;
        }
        case State.InSelfClosingTag: {
          this.stateInSelfClosingTag(c2);
          break;
        }
        case State.InDeclaration: {
          this.stateInDeclaration(c2);
          break;
        }
        case State.BeforeDeclaration: {
          this.stateBeforeDeclaration(c2);
          break;
        }
        case State.BeforeComment: {
          this.stateBeforeComment(c2);
          break;
        }
        case State.InProcessingInstruction: {
          this.stateInProcessingInstruction(c2);
          break;
        }
        case State.InNamedEntity: {
          this.stateInNamedEntity(c2);
          break;
        }
        case State.BeforeEntity: {
          this.stateBeforeEntity(c2);
          break;
        }
        case State.InHexEntity: {
          this.stateInHexEntity(c2);
          break;
        }
        case State.InNumericEntity: {
          this.stateInNumericEntity(c2);
          break;
        }
        default: {
          this.stateBeforeNumericEntity(c2);
        }
      }
      this.index++;
    }
    this.cleanup();
  }
  finish() {
    if (this.state === State.InNamedEntity) {
      this.emitNamedEntity();
    }
    if (this.sectionStart < this.index) {
      this.handleTrailingData();
    }
    this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const endIndex = this.buffer.length + this.offset;
    if (this.state === State.InCommentLike) {
      if (this.currentSequence === Sequences.CdataEnd) {
        this.cbs.oncdata(this.sectionStart, endIndex, 0);
      } else {
        this.cbs.oncomment(this.sectionStart, endIndex, 0);
      }
    } else if (this.state === State.InNumericEntity && this.allowLegacyEntity()) {
      this.emitNumericEntity(false);
    } else if (this.state === State.InHexEntity && this.allowLegacyEntity()) {
      this.emitNumericEntity(false);
    } else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) ;
    else {
      this.cbs.ontext(this.sectionStart, endIndex);
    }
  }
  emitPartial(start, endIndex) {
    if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
      this.cbs.onattribdata(start, endIndex);
    } else {
      this.cbs.ontext(start, endIndex);
    }
  }
  emitCodePoint(cp) {
    if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
      this.cbs.onattribentity(cp);
    } else {
      this.cbs.ontextentity(cp);
    }
  }
}
const formTags = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]);
const pTag = /* @__PURE__ */ new Set(["p"]);
const tableSectionTags = /* @__PURE__ */ new Set(["thead", "tbody"]);
const ddtTags = /* @__PURE__ */ new Set(["dd", "dt"]);
const rtpTags = /* @__PURE__ */ new Set(["rt", "rp"]);
const openImpliesClose = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", pTag],
  ["h1", pTag],
  ["h2", pTag],
  ["h3", pTag],
  ["h4", pTag],
  ["h5", pTag],
  ["h6", pTag],
  ["select", formTags],
  ["input", formTags],
  ["output", formTags],
  ["button", formTags],
  ["datalist", formTags],
  ["textarea", formTags],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", ddtTags],
  ["dt", ddtTags],
  ["address", pTag],
  ["article", pTag],
  ["aside", pTag],
  ["blockquote", pTag],
  ["details", pTag],
  ["div", pTag],
  ["dl", pTag],
  ["fieldset", pTag],
  ["figcaption", pTag],
  ["figure", pTag],
  ["footer", pTag],
  ["form", pTag],
  ["header", pTag],
  ["hr", pTag],
  ["main", pTag],
  ["nav", pTag],
  ["ol", pTag],
  ["pre", pTag],
  ["section", pTag],
  ["table", pTag],
  ["ul", pTag],
  ["rt", rtpTags],
  ["rp", rtpTags],
  ["tbody", tableSectionTags],
  ["tfoot", tableSectionTags]
]);
const voidElements = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
const foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
const htmlIntegrationElements = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]);
const reNameEnd = /\s|\//;
class Parser {
  constructor(cbs, options = {}) {
    var _a2, _b, _c, _d, _e2;
    this.options = options;
    this.startIndex = 0;
    this.endIndex = 0;
    this.openTagStart = 0;
    this.tagname = "";
    this.attribname = "";
    this.attribvalue = "";
    this.attribs = null;
    this.stack = [];
    this.foreignContext = [];
    this.buffers = [];
    this.bufferOffset = 0;
    this.writeIndex = 0;
    this.ended = false;
    this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
    this.lowerCaseTagNames = (_a2 = options.lowerCaseTags) !== null && _a2 !== void 0 ? _a2 : !options.xmlMode;
    this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
    this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer)(this.options, this);
    (_e2 = (_d = this.cbs).onparserinit) === null || _e2 === void 0 ? void 0 : _e2.call(_d, this);
  }
  // Tokenizer event handlers
  /** @internal */
  ontext(start, endIndex) {
    var _a2, _b;
    const data = this.getSlice(start, endIndex);
    this.endIndex = endIndex - 1;
    (_b = (_a2 = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a2, data);
    this.startIndex = endIndex;
  }
  /** @internal */
  ontextentity(cp) {
    var _a2, _b;
    const index2 = this.tokenizer.getSectionStart();
    this.endIndex = index2 - 1;
    (_b = (_a2 = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a2, fromCodePoint(cp));
    this.startIndex = index2;
  }
  isVoidElement(name2) {
    return !this.options.xmlMode && voidElements.has(name2);
  }
  /** @internal */
  onopentagname(start, endIndex) {
    this.endIndex = endIndex;
    let name2 = this.getSlice(start, endIndex);
    if (this.lowerCaseTagNames) {
      name2 = name2.toLowerCase();
    }
    this.emitOpenTag(name2);
  }
  emitOpenTag(name2) {
    var _a2, _b, _c, _d;
    this.openTagStart = this.startIndex;
    this.tagname = name2;
    const impliesClose = !this.options.xmlMode && openImpliesClose.get(name2);
    if (impliesClose) {
      while (this.stack.length > 0 && impliesClose.has(this.stack[this.stack.length - 1])) {
        const element = this.stack.pop();
        (_b = (_a2 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a2, element, true);
      }
    }
    if (!this.isVoidElement(name2)) {
      this.stack.push(name2);
      if (foreignContextElements.has(name2)) {
        this.foreignContext.push(true);
      } else if (htmlIntegrationElements.has(name2)) {
        this.foreignContext.push(false);
      }
    }
    (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name2);
    if (this.cbs.onopentag)
      this.attribs = {};
  }
  endOpenTag(isImplied) {
    var _a2, _b;
    this.startIndex = this.openTagStart;
    if (this.attribs) {
      (_b = (_a2 = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a2, this.tagname, this.attribs, isImplied);
      this.attribs = null;
    }
    if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
      this.cbs.onclosetag(this.tagname, true);
    }
    this.tagname = "";
  }
  /** @internal */
  onopentagend(endIndex) {
    this.endIndex = endIndex;
    this.endOpenTag(false);
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  onclosetag(start, endIndex) {
    var _a2, _b, _c, _d, _e2, _f;
    this.endIndex = endIndex;
    let name2 = this.getSlice(start, endIndex);
    if (this.lowerCaseTagNames) {
      name2 = name2.toLowerCase();
    }
    if (foreignContextElements.has(name2) || htmlIntegrationElements.has(name2)) {
      this.foreignContext.pop();
    }
    if (!this.isVoidElement(name2)) {
      const pos = this.stack.lastIndexOf(name2);
      if (pos !== -1) {
        if (this.cbs.onclosetag) {
          let count = this.stack.length - pos;
          while (count--) {
            this.cbs.onclosetag(this.stack.pop(), count !== 0);
          }
        } else
          this.stack.length = pos;
      } else if (!this.options.xmlMode && name2 === "p") {
        this.emitOpenTag("p");
        this.closeCurrentTag(true);
      }
    } else if (!this.options.xmlMode && name2 === "br") {
      (_b = (_a2 = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a2, "br");
      (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, "br", {}, true);
      (_f = (_e2 = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e2, "br", false);
    }
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  onselfclosingtag(endIndex) {
    this.endIndex = endIndex;
    if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
      this.closeCurrentTag(false);
      this.startIndex = endIndex + 1;
    } else {
      this.onopentagend(endIndex);
    }
  }
  closeCurrentTag(isOpenImplied) {
    var _a2, _b;
    const name2 = this.tagname;
    this.endOpenTag(isOpenImplied);
    if (this.stack[this.stack.length - 1] === name2) {
      (_b = (_a2 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a2, name2, !isOpenImplied);
      this.stack.pop();
    }
  }
  /** @internal */
  onattribname(start, endIndex) {
    this.startIndex = start;
    const name2 = this.getSlice(start, endIndex);
    this.attribname = this.lowerCaseAttributeNames ? name2.toLowerCase() : name2;
  }
  /** @internal */
  onattribdata(start, endIndex) {
    this.attribvalue += this.getSlice(start, endIndex);
  }
  /** @internal */
  onattribentity(cp) {
    this.attribvalue += fromCodePoint(cp);
  }
  /** @internal */
  onattribend(quote, endIndex) {
    var _a2, _b;
    this.endIndex = endIndex;
    (_b = (_a2 = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a2, this.attribname, this.attribvalue, quote === QuoteType.Double ? '"' : quote === QuoteType.Single ? "'" : quote === QuoteType.NoValue ? void 0 : null);
    if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
      this.attribs[this.attribname] = this.attribvalue;
    }
    this.attribvalue = "";
  }
  getInstructionName(value) {
    const index2 = value.search(reNameEnd);
    let name2 = index2 < 0 ? value : value.substr(0, index2);
    if (this.lowerCaseTagNames) {
      name2 = name2.toLowerCase();
    }
    return name2;
  }
  /** @internal */
  ondeclaration(start, endIndex) {
    this.endIndex = endIndex;
    const value = this.getSlice(start, endIndex);
    if (this.cbs.onprocessinginstruction) {
      const name2 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction(`!${name2}`, `!${value}`);
    }
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  onprocessinginstruction(start, endIndex) {
    this.endIndex = endIndex;
    const value = this.getSlice(start, endIndex);
    if (this.cbs.onprocessinginstruction) {
      const name2 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction(`?${name2}`, `?${value}`);
    }
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  oncomment(start, endIndex, offset) {
    var _a2, _b, _c, _d;
    this.endIndex = endIndex;
    (_b = (_a2 = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a2, this.getSlice(start, endIndex - offset));
    (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  oncdata(start, endIndex, offset) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _j, _k;
    this.endIndex = endIndex;
    const value = this.getSlice(start, endIndex - offset);
    if (this.options.xmlMode || this.options.recognizeCDATA) {
      (_b = (_a2 = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a2);
      (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
      (_f = (_e2 = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e2);
    } else {
      (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, `[CDATA[${value}]]`);
      (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
    }
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  onend() {
    var _a2, _b;
    if (this.cbs.onclosetag) {
      this.endIndex = this.startIndex;
      for (let index2 = this.stack.length; index2 > 0; this.cbs.onclosetag(this.stack[--index2], true))
        ;
    }
    (_b = (_a2 = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a2);
  }
  /**
   * Resets the parser to a blank state, ready to parse a new HTML document
   */
  reset() {
    var _a2, _b, _c, _d;
    (_b = (_a2 = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a2);
    this.tokenizer.reset();
    this.tagname = "";
    this.attribname = "";
    this.attribs = null;
    this.stack.length = 0;
    this.startIndex = 0;
    this.endIndex = 0;
    (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
    this.buffers.length = 0;
    this.bufferOffset = 0;
    this.writeIndex = 0;
    this.ended = false;
  }
  /**
   * Resets the parser, then parses a complete document and
   * pushes it to the handler.
   *
   * @param data Document to parse.
   */
  parseComplete(data) {
    this.reset();
    this.end(data);
  }
  getSlice(start, end) {
    while (start - this.bufferOffset >= this.buffers[0].length) {
      this.shiftBuffer();
    }
    let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
    while (end - this.bufferOffset > this.buffers[0].length) {
      this.shiftBuffer();
      slice += this.buffers[0].slice(0, end - this.bufferOffset);
    }
    return slice;
  }
  shiftBuffer() {
    this.bufferOffset += this.buffers[0].length;
    this.writeIndex--;
    this.buffers.shift();
  }
  /**
   * Parses a chunk of data and calls the corresponding callbacks.
   *
   * @param chunk Chunk to parse.
   */
  write(chunk) {
    var _a2, _b;
    if (this.ended) {
      (_b = (_a2 = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a2, new Error(".write() after done!"));
      return;
    }
    this.buffers.push(chunk);
    if (this.tokenizer.running) {
      this.tokenizer.write(chunk);
      this.writeIndex++;
    }
  }
  /**
   * Parses the end of the buffer and clears the stack, calls onend.
   *
   * @param chunk Optional final chunk to parse.
   */
  end(chunk) {
    var _a2, _b;
    if (this.ended) {
      (_b = (_a2 = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a2, new Error(".end() after done!"));
      return;
    }
    if (chunk)
      this.write(chunk);
    this.ended = true;
    this.tokenizer.end();
  }
  /**
   * Pauses parsing. The parser won't emit events until `resume` is called.
   */
  pause() {
    this.tokenizer.pause();
  }
  /**
   * Resumes parsing after `pause` was called.
   */
  resume() {
    this.tokenizer.resume();
    while (this.tokenizer.running && this.writeIndex < this.buffers.length) {
      this.tokenizer.write(this.buffers[this.writeIndex++]);
    }
    if (this.ended)
      this.tokenizer.end();
  }
  /**
   * Alias of `write`, for backwards compatibility.
   *
   * @param chunk Chunk to parse.
   * @deprecated
   */
  parseChunk(chunk) {
    this.write(chunk);
  }
  /**
   * Alias of `end`, for backwards compatibility.
   *
   * @param chunk Optional final chunk to parse.
   * @deprecated
   */
  done(chunk) {
    this.end(chunk);
  }
}
const xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
const xmlCodeMap = /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [39, "&apos;"],
  [60, "&lt;"],
  [62, "&gt;"]
]);
const getCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? (str, index2) => str.codePointAt(index2) : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    (c2, index2) => (c2.charCodeAt(index2) & 64512) === 55296 ? (c2.charCodeAt(index2) - 55296) * 1024 + c2.charCodeAt(index2 + 1) - 56320 + 65536 : c2.charCodeAt(index2)
  )
);
function encodeXML(str) {
  let ret = "";
  let lastIdx = 0;
  let match;
  while ((match = xmlReplacer.exec(str)) !== null) {
    const i = match.index;
    const char = str.charCodeAt(i);
    const next = xmlCodeMap.get(char);
    if (next !== void 0) {
      ret += str.substring(lastIdx, i) + next;
      lastIdx = i + 1;
    } else {
      ret += `${str.substring(lastIdx, i)}&#x${getCodePoint(str, i).toString(16)};`;
      lastIdx = xmlReplacer.lastIndex += Number((char & 64512) === 55296);
    }
  }
  return ret + str.substr(lastIdx);
}
function getEscaper(regex, map2) {
  return function escape2(data) {
    let match;
    let lastIdx = 0;
    let result = "";
    while (match = regex.exec(data)) {
      if (lastIdx !== match.index) {
        result += data.substring(lastIdx, match.index);
      }
      result += map2.get(match[0].charCodeAt(0));
      lastIdx = match.index + 1;
    }
    return result + data.substring(lastIdx);
  };
}
const escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [160, "&nbsp;"]
]));
const escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
  [38, "&amp;"],
  [60, "&lt;"],
  [62, "&gt;"],
  [160, "&nbsp;"]
]));
const elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((val) => [val.toLowerCase(), val]));
const attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((val) => [val.toLowerCase(), val]));
const unencodedElements = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function replaceQuotes(value) {
  return value.replace(/"/g, "&quot;");
}
function formatAttributes(attributes, opts) {
  var _a2;
  if (!attributes)
    return;
  const encode = ((_a2 = opts.encodeEntities) !== null && _a2 !== void 0 ? _a2 : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML : escapeAttribute;
  return Object.keys(attributes).map((key) => {
    var _a3, _b;
    const value = (_a3 = attributes[key]) !== null && _a3 !== void 0 ? _a3 : "";
    if (opts.xmlMode === "foreign") {
      key = (_b = attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
    }
    if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
      return key;
    }
    return `${key}="${encode(value)}"`;
  }).join(" ");
}
const singleTag = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function render$1(node, options = {}) {
  const nodes = "length" in node ? node : [node];
  let output = "";
  for (let i = 0; i < nodes.length; i++) {
    output += renderNode(nodes[i], options);
  }
  return output;
}
function renderNode(node, options) {
  switch (node.type) {
    case Root:
      return render$1(node.children, options);
    // @ts-expect-error We don't use `Doctype` yet
    case Doctype:
    case Directive:
      return renderDirective(node);
    case Comment$1:
      return renderComment(node);
    case CDATA$1:
      return renderCdata(node);
    case Script:
    case Style:
    case Tag:
      return renderTag(node, options);
    case Text$1:
      return renderText(node, options);
  }
}
const foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]);
const foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
function renderTag(elem, opts) {
  var _a2;
  if (opts.xmlMode === "foreign") {
    elem.name = (_a2 = elementNames.get(elem.name)) !== null && _a2 !== void 0 ? _a2 : elem.name;
    if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
      opts = { ...opts, xmlMode: false };
    }
  }
  if (!opts.xmlMode && foreignElements.has(elem.name)) {
    opts = { ...opts, xmlMode: "foreign" };
  }
  let tag = `<${elem.name}`;
  const attribs = formatAttributes(elem.attribs, opts);
  if (attribs) {
    tag += ` ${attribs}`;
  }
  if (elem.children.length === 0 && (opts.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    opts.selfClosingTags !== false
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    opts.selfClosingTags && singleTag.has(elem.name)
  ))) {
    if (!opts.xmlMode)
      tag += " ";
    tag += "/>";
  } else {
    tag += ">";
    if (elem.children.length > 0) {
      tag += render$1(elem.children, opts);
    }
    if (opts.xmlMode || !singleTag.has(elem.name)) {
      tag += `</${elem.name}>`;
    }
  }
  return tag;
}
function renderDirective(elem) {
  return `<${elem.data}>`;
}
function renderText(elem, opts) {
  var _a2;
  let data = elem.data || "";
  if (((_a2 = opts.encodeEntities) !== null && _a2 !== void 0 ? _a2 : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
    data = opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML(data) : escapeText(data);
  }
  return data;
}
function renderCdata(elem) {
  return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
  return `<!--${elem.data}-->`;
}
function parseDocument(data, options) {
  const handler = new DomHandler(void 0, options);
  new Parser(handler, options).end(data);
  return handler.root;
}
var cjs;
var hasRequiredCjs;
function requireCjs() {
  if (hasRequiredCjs) return cjs;
  hasRequiredCjs = 1;
  var isMergeableObject = function isMergeableObject2(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };
  function isNonNullObject(value) {
    return !!value && typeof value === "object";
  }
  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
  }
  var canUseSymbol = typeof Symbol === "function" && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }
  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }
  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }
  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }
  function getMergeFunction(key, options) {
    if (!options.customMerge) {
      return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === "function" ? customMerge : deepmerge;
  }
  function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
      return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
  }
  function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
  }
  function propertyIsOnObject(object, property) {
    try {
      return property in object;
    } catch (_2) {
      return false;
    }
  }
  function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
  }
  function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
      getKeys(target).forEach(function(key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }
    getKeys(source).forEach(function(key) {
      if (propertyIsUnsafe(target, key)) {
        return;
      }
      if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
      } else {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      }
    });
    return destination;
  }
  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }
  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error("first argument should be an array");
    }
    return array.reduce(function(prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };
  var deepmerge_1 = deepmerge;
  cjs = deepmerge_1;
  return cjs;
}
var cjsExports = requireCjs();
const merge = /* @__PURE__ */ getDefaultExportFromCjs(cjsExports);
function limitedDepthRecursive(n2, f2, g = () => void 0) {
  if (n2 === void 0) {
    const f1 = function(...args) {
      return f2(f1, ...args);
    };
    return f1;
  }
  if (n2 >= 0) {
    return function(...args) {
      return f2(limitedDepthRecursive(n2 - 1, f2, g), ...args);
    };
  }
  return g;
}
function trimCharacter(str, char) {
  let start = 0;
  let end = str.length;
  while (start < end && str[start] === char) {
    ++start;
  }
  while (end > start && str[end - 1] === char) {
    --end;
  }
  return start > 0 || end < str.length ? str.substring(start, end) : str;
}
function trimCharacterEnd(str, char) {
  let end = str.length;
  while (end > 0 && str[end - 1] === char) {
    --end;
  }
  return end < str.length ? str.substring(0, end) : str;
}
function unicodeEscape(str) {
  return str.replace(/[\s\S]/g, (c2) => "\\u" + c2.charCodeAt().toString(16).padStart(4, "0"));
}
function mergeDuplicatesPreferLast(items, getKey) {
  const map2 = /* @__PURE__ */ new Map();
  for (let i = items.length; i-- > 0; ) {
    const item = items[i];
    const key = getKey(item);
    map2.set(
      key,
      map2.has(key) ? merge(item, map2.get(key), { arrayMerge: overwriteMerge$1 }) : item
    );
  }
  return [...map2.values()].reverse();
}
const overwriteMerge$1 = (acc, src, options) => [...src];
function get(obj, path) {
  for (const key of path) {
    if (!obj) {
      return void 0;
    }
    obj = obj[key];
  }
  return obj;
}
function numberToLetterSequence(num, baseChar = "a", base = 26) {
  const digits = [];
  do {
    num -= 1;
    digits.push(num % base);
    num = num / base >> 0;
  } while (num > 0);
  const baseCode = baseChar.charCodeAt(0);
  return digits.reverse().map((n2) => String.fromCharCode(baseCode + n2)).join("");
}
const I = ["I", "X", "C", "M"];
const V = ["V", "L", "D"];
function numberToRoman(num) {
  return [...num + ""].map((n2) => +n2).reverse().map((v2, i) => v2 % 5 < 4 ? (v2 < 5 ? "" : V[i]) + I[i].repeat(v2 % 5) : I[i] + (v2 < 5 ? V[i] : I[i + 1])).reverse().join("");
}
class InlineTextBuilder {
  /**
   * Creates an instance of InlineTextBuilder.
   *
   * If `maxLineLength` is not provided then it is either `options.wordwrap` or unlimited.
   *
   * @param { Options } options           HtmlToText options.
   * @param { number }  [ maxLineLength ] This builder will try to wrap text to fit this line length.
   */
  constructor(options, maxLineLength = void 0) {
    this.lines = [];
    this.nextLineWords = [];
    this.maxLineLength = maxLineLength || options.wordwrap || Number.MAX_VALUE;
    this.nextLineAvailableChars = this.maxLineLength;
    this.wrapCharacters = get(options, ["longWordSplit", "wrapCharacters"]) || [];
    this.forceWrapOnLimit = get(options, ["longWordSplit", "forceWrapOnLimit"]) || false;
    this.stashedSpace = false;
    this.wordBreakOpportunity = false;
  }
  /**
   * Add a new word.
   *
   * @param { string } word A word to add.
   * @param { boolean } [noWrap] Don't wrap text even if the line is too long.
   */
  pushWord(word, noWrap = false) {
    if (this.nextLineAvailableChars <= 0 && !noWrap) {
      this.startNewLine();
    }
    const isLineStart = this.nextLineWords.length === 0;
    const cost = word.length + (isLineStart ? 0 : 1);
    if (cost <= this.nextLineAvailableChars || noWrap) {
      this.nextLineWords.push(word);
      this.nextLineAvailableChars -= cost;
    } else {
      const [first, ...rest] = this.splitLongWord(word);
      if (!isLineStart) {
        this.startNewLine();
      }
      this.nextLineWords.push(first);
      this.nextLineAvailableChars -= first.length;
      for (const part of rest) {
        this.startNewLine();
        this.nextLineWords.push(part);
        this.nextLineAvailableChars -= part.length;
      }
    }
  }
  /**
   * Pop a word from the currently built line.
   * This doesn't affect completed lines.
   *
   * @returns { string }
   */
  popWord() {
    const lastWord = this.nextLineWords.pop();
    if (lastWord !== void 0) {
      const isLineStart = this.nextLineWords.length === 0;
      const cost = lastWord.length + (isLineStart ? 0 : 1);
      this.nextLineAvailableChars += cost;
    }
    return lastWord;
  }
  /**
   * Concat a word to the last word already in the builder.
   * Adds a new word in case there are no words yet in the last line.
   *
   * @param { string } word A word to be concatenated.
   * @param { boolean } [noWrap] Don't wrap text even if the line is too long.
   */
  concatWord(word, noWrap = false) {
    if (this.wordBreakOpportunity && word.length > this.nextLineAvailableChars) {
      this.pushWord(word, noWrap);
      this.wordBreakOpportunity = false;
    } else {
      const lastWord = this.popWord();
      this.pushWord(lastWord ? lastWord.concat(word) : word, noWrap);
    }
  }
  /**
   * Add current line (and more empty lines if provided argument > 1) to the list of complete lines and start a new one.
   *
   * @param { number } n Number of line breaks that will be added to the resulting string.
   */
  startNewLine(n2 = 1) {
    this.lines.push(this.nextLineWords);
    if (n2 > 1) {
      this.lines.push(...Array.from({ length: n2 - 1 }, () => []));
    }
    this.nextLineWords = [];
    this.nextLineAvailableChars = this.maxLineLength;
  }
  /**
   * No words in this builder.
   *
   * @returns { boolean }
   */
  isEmpty() {
    return this.lines.length === 0 && this.nextLineWords.length === 0;
  }
  clear() {
    this.lines.length = 0;
    this.nextLineWords.length = 0;
    this.nextLineAvailableChars = this.maxLineLength;
  }
  /**
   * Join all lines of words inside the InlineTextBuilder into a complete string.
   *
   * @returns { string }
   */
  toString() {
    return [...this.lines, this.nextLineWords].map((words) => words.join(" ")).join("\n");
  }
  /**
   * Split a long word up to fit within the word wrap limit.
   * Use either a character to split looking back from the word wrap limit,
   * or truncate to the word wrap limit.
   *
   * @param   { string }   word Input word.
   * @returns { string[] }      Parts of the word.
   */
  splitLongWord(word) {
    const parts = [];
    let idx = 0;
    while (word.length > this.maxLineLength) {
      const firstLine = word.substring(0, this.maxLineLength);
      const remainingChars = word.substring(this.maxLineLength);
      const splitIndex = firstLine.lastIndexOf(this.wrapCharacters[idx]);
      if (splitIndex > -1) {
        word = firstLine.substring(splitIndex + 1) + remainingChars;
        parts.push(firstLine.substring(0, splitIndex + 1));
      } else {
        idx++;
        if (idx < this.wrapCharacters.length) {
          word = firstLine + remainingChars;
        } else {
          if (this.forceWrapOnLimit) {
            parts.push(firstLine);
            word = remainingChars;
            if (word.length > this.maxLineLength) {
              continue;
            }
          } else {
            word = firstLine + remainingChars;
          }
          break;
        }
      }
    }
    parts.push(word);
    return parts;
  }
}
class StackItem {
  constructor(next = null) {
    this.next = next;
  }
  getRoot() {
    return this.next ? this.next : this;
  }
}
class BlockStackItem extends StackItem {
  constructor(options, next = null, leadingLineBreaks = 1, maxLineLength = void 0) {
    super(next);
    this.leadingLineBreaks = leadingLineBreaks;
    this.inlineTextBuilder = new InlineTextBuilder(options, maxLineLength);
    this.rawText = "";
    this.stashedLineBreaks = 0;
    this.isPre = next && next.isPre;
    this.isNoWrap = next && next.isNoWrap;
  }
}
class ListStackItem extends BlockStackItem {
  constructor(options, next = null, {
    interRowLineBreaks = 1,
    leadingLineBreaks = 2,
    maxLineLength = void 0,
    maxPrefixLength = 0,
    prefixAlign = "left"
  } = {}) {
    super(options, next, leadingLineBreaks, maxLineLength);
    this.maxPrefixLength = maxPrefixLength;
    this.prefixAlign = prefixAlign;
    this.interRowLineBreaks = interRowLineBreaks;
  }
}
class ListItemStackItem extends BlockStackItem {
  constructor(options, next = null, {
    leadingLineBreaks = 1,
    maxLineLength = void 0,
    prefix = ""
  } = {}) {
    super(options, next, leadingLineBreaks, maxLineLength);
    this.prefix = prefix;
  }
}
class TableStackItem extends StackItem {
  constructor(next = null) {
    super(next);
    this.rows = [];
    this.isPre = next && next.isPre;
    this.isNoWrap = next && next.isNoWrap;
  }
}
class TableRowStackItem extends StackItem {
  constructor(next = null) {
    super(next);
    this.cells = [];
    this.isPre = next && next.isPre;
    this.isNoWrap = next && next.isNoWrap;
  }
}
class TableCellStackItem extends StackItem {
  constructor(options, next = null, maxColumnWidth = void 0) {
    super(next);
    this.inlineTextBuilder = new InlineTextBuilder(options, maxColumnWidth);
    this.rawText = "";
    this.stashedLineBreaks = 0;
    this.isPre = next && next.isPre;
    this.isNoWrap = next && next.isNoWrap;
  }
}
class TransformerStackItem extends StackItem {
  constructor(next = null, transform) {
    super(next);
    this.transform = transform;
  }
}
function charactersToCodes(str) {
  return [...str].map((c2) => "\\u" + c2.charCodeAt(0).toString(16).padStart(4, "0")).join("");
}
class WhitespaceProcessor {
  /**
   * Creates an instance of WhitespaceProcessor.
   *
   * @param { Options } options    HtmlToText options.
   * @memberof WhitespaceProcessor
   */
  constructor(options) {
    this.whitespaceChars = options.preserveNewlines ? options.whitespaceCharacters.replace(/\n/g, "") : options.whitespaceCharacters;
    const whitespaceCodes = charactersToCodes(this.whitespaceChars);
    this.leadingWhitespaceRe = new RegExp(`^[${whitespaceCodes}]`);
    this.trailingWhitespaceRe = new RegExp(`[${whitespaceCodes}]$`);
    this.allWhitespaceOrEmptyRe = new RegExp(`^[${whitespaceCodes}]*$`);
    this.newlineOrNonWhitespaceRe = new RegExp(`(\\n|[^\\n${whitespaceCodes}])`, "g");
    this.newlineOrNonNewlineStringRe = new RegExp(`(\\n|[^\\n]+)`, "g");
    if (options.preserveNewlines) {
      const wordOrNewlineRe = new RegExp(`\\n|[^\\n${whitespaceCodes}]+`, "gm");
      this.shrinkWrapAdd = function(text, inlineTextBuilder, transform = ((str) => str), noWrap = false) {
        if (!text) {
          return;
        }
        const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
        let anyMatch = false;
        let m = wordOrNewlineRe.exec(text);
        if (m) {
          anyMatch = true;
          if (m[0] === "\n") {
            inlineTextBuilder.startNewLine();
          } else if (previouslyStashedSpace || this.testLeadingWhitespace(text)) {
            inlineTextBuilder.pushWord(transform(m[0]), noWrap);
          } else {
            inlineTextBuilder.concatWord(transform(m[0]), noWrap);
          }
          while ((m = wordOrNewlineRe.exec(text)) !== null) {
            if (m[0] === "\n") {
              inlineTextBuilder.startNewLine();
            } else {
              inlineTextBuilder.pushWord(transform(m[0]), noWrap);
            }
          }
        }
        inlineTextBuilder.stashedSpace = previouslyStashedSpace && !anyMatch || this.testTrailingWhitespace(text);
      };
    } else {
      const wordRe = new RegExp(`[^${whitespaceCodes}]+`, "g");
      this.shrinkWrapAdd = function(text, inlineTextBuilder, transform = ((str) => str), noWrap = false) {
        if (!text) {
          return;
        }
        const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
        let anyMatch = false;
        let m = wordRe.exec(text);
        if (m) {
          anyMatch = true;
          if (previouslyStashedSpace || this.testLeadingWhitespace(text)) {
            inlineTextBuilder.pushWord(transform(m[0]), noWrap);
          } else {
            inlineTextBuilder.concatWord(transform(m[0]), noWrap);
          }
          while ((m = wordRe.exec(text)) !== null) {
            inlineTextBuilder.pushWord(transform(m[0]), noWrap);
          }
        }
        inlineTextBuilder.stashedSpace = previouslyStashedSpace && !anyMatch || this.testTrailingWhitespace(text);
      };
    }
  }
  /**
   * Add text with only minimal processing.
   * Everything between newlines considered a single word.
   * No whitespace is trimmed.
   * Not affected by preserveNewlines option - `\n` always starts a new line.
   *
   * `noWrap` argument is `true` by default - this won't start a new line
   * even if there is not enough space left in the current line.
   *
   * @param { string }            text              Input text.
   * @param { InlineTextBuilder } inlineTextBuilder A builder to receive processed text.
   * @param { boolean }           [noWrap] Don't wrap text even if the line is too long.
   */
  addLiteral(text, inlineTextBuilder, noWrap = true) {
    if (!text) {
      return;
    }
    const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
    let anyMatch = false;
    let m = this.newlineOrNonNewlineStringRe.exec(text);
    if (m) {
      anyMatch = true;
      if (m[0] === "\n") {
        inlineTextBuilder.startNewLine();
      } else if (previouslyStashedSpace) {
        inlineTextBuilder.pushWord(m[0], noWrap);
      } else {
        inlineTextBuilder.concatWord(m[0], noWrap);
      }
      while ((m = this.newlineOrNonNewlineStringRe.exec(text)) !== null) {
        if (m[0] === "\n") {
          inlineTextBuilder.startNewLine();
        } else {
          inlineTextBuilder.pushWord(m[0], noWrap);
        }
      }
    }
    inlineTextBuilder.stashedSpace = previouslyStashedSpace && !anyMatch;
  }
  /**
   * Test whether the given text starts with HTML whitespace character.
   *
   * @param   { string }  text  The string to test.
   * @returns { boolean }
   */
  testLeadingWhitespace(text) {
    return this.leadingWhitespaceRe.test(text);
  }
  /**
   * Test whether the given text ends with HTML whitespace character.
   *
   * @param   { string }  text  The string to test.
   * @returns { boolean }
   */
  testTrailingWhitespace(text) {
    return this.trailingWhitespaceRe.test(text);
  }
  /**
   * Test whether the given text contains any non-whitespace characters.
   *
   * @param   { string }  text  The string to test.
   * @returns { boolean }
   */
  testContainsWords(text) {
    return !this.allWhitespaceOrEmptyRe.test(text);
  }
  /**
   * Return the number of newlines if there are no words.
   *
   * If any word is found then return zero regardless of the actual number of newlines.
   *
   * @param   { string }  text  Input string.
   * @returns { number }
   */
  countNewlinesNoWords(text) {
    this.newlineOrNonWhitespaceRe.lastIndex = 0;
    let counter = 0;
    let match;
    while ((match = this.newlineOrNonWhitespaceRe.exec(text)) !== null) {
      if (match[0] === "\n") {
        counter++;
      } else {
        return 0;
      }
    }
    return counter;
  }
}
class BlockTextBuilder {
  /**
   * Creates an instance of BlockTextBuilder.
   *
   * @param { Options } options HtmlToText options.
   * @param { import('selderee').Picker<DomNode, TagDefinition> } picker Selectors decision tree picker.
   * @param { any} [metadata] Optional metadata for HTML document, for use in formatters.
   */
  constructor(options, picker, metadata = void 0) {
    this.options = options;
    this.picker = picker;
    this.metadata = metadata;
    this.whitespaceProcessor = new WhitespaceProcessor(options);
    this._stackItem = new BlockStackItem(options);
    this._wordTransformer = void 0;
  }
  /**
   * Put a word-by-word transform function onto the transformations stack.
   *
   * Mainly used for uppercasing. Can be bypassed to add unformatted text such as URLs.
   *
   * Word transformations applied before wrapping.
   *
   * @param { (str: string) => string } wordTransform Word transformation function.
   */
  pushWordTransform(wordTransform) {
    this._wordTransformer = new TransformerStackItem(this._wordTransformer, wordTransform);
  }
  /**
   * Remove a function from the word transformations stack.
   *
   * @returns { (str: string) => string } A function that was removed.
   */
  popWordTransform() {
    if (!this._wordTransformer) {
      return void 0;
    }
    const transform = this._wordTransformer.transform;
    this._wordTransformer = this._wordTransformer.next;
    return transform;
  }
  /**
   * Ignore wordwrap option in followup inline additions and disable automatic wrapping.
   */
  startNoWrap() {
    this._stackItem.isNoWrap = true;
  }
  /**
   * Return automatic wrapping to behavior defined by options.
   */
  stopNoWrap() {
    this._stackItem.isNoWrap = false;
  }
  /** @returns { (str: string) => string } */
  _getCombinedWordTransformer() {
    const wt2 = this._wordTransformer ? ((str) => applyTransformer(str, this._wordTransformer)) : void 0;
    const ce2 = this.options.encodeCharacters;
    return wt2 ? ce2 ? (str) => ce2(wt2(str)) : wt2 : ce2;
  }
  _popStackItem() {
    const item = this._stackItem;
    this._stackItem = item.next;
    return item;
  }
  /**
   * Add a line break into currently built block.
   */
  addLineBreak() {
    if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem)) {
      return;
    }
    if (this._stackItem.isPre) {
      this._stackItem.rawText += "\n";
    } else {
      this._stackItem.inlineTextBuilder.startNewLine();
    }
  }
  /**
   * Allow to break line in case directly following text will not fit.
   */
  addWordBreakOpportunity() {
    if (this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem) {
      this._stackItem.inlineTextBuilder.wordBreakOpportunity = true;
    }
  }
  /**
   * Add a node inline into the currently built block.
   *
   * @param { string } str
   * Text content of a node to add.
   *
   * @param { object } [param1]
   * Object holding the parameters of the operation.
   *
   * @param { boolean } [param1.noWordTransform]
   * Ignore word transformers if there are any.
   * Don't encode characters as well.
   * (Use this for things like URL addresses).
   */
  addInline(str, { noWordTransform = false } = {}) {
    if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem)) {
      return;
    }
    if (this._stackItem.isPre) {
      this._stackItem.rawText += str;
      return;
    }
    if (str.length === 0 || // empty string
    this._stackItem.stashedLineBreaks && // stashed linebreaks make whitespace irrelevant
    !this.whitespaceProcessor.testContainsWords(str)) {
      return;
    }
    if (this.options.preserveNewlines) {
      const newlinesNumber = this.whitespaceProcessor.countNewlinesNoWords(str);
      if (newlinesNumber > 0) {
        this._stackItem.inlineTextBuilder.startNewLine(newlinesNumber);
        return;
      }
    }
    if (this._stackItem.stashedLineBreaks) {
      this._stackItem.inlineTextBuilder.startNewLine(this._stackItem.stashedLineBreaks);
    }
    this.whitespaceProcessor.shrinkWrapAdd(
      str,
      this._stackItem.inlineTextBuilder,
      noWordTransform ? void 0 : this._getCombinedWordTransformer(),
      this._stackItem.isNoWrap
    );
    this._stackItem.stashedLineBreaks = 0;
  }
  /**
   * Add a string inline into the currently built block.
   *
   * Use this for markup elements that don't have to adhere
   * to text layout rules.
   *
   * @param { string } str Text to add.
   */
  addLiteral(str) {
    if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem)) {
      return;
    }
    if (str.length === 0) {
      return;
    }
    if (this._stackItem.isPre) {
      this._stackItem.rawText += str;
      return;
    }
    if (this._stackItem.stashedLineBreaks) {
      this._stackItem.inlineTextBuilder.startNewLine(this._stackItem.stashedLineBreaks);
    }
    this.whitespaceProcessor.addLiteral(
      str,
      this._stackItem.inlineTextBuilder,
      this._stackItem.isNoWrap
    );
    this._stackItem.stashedLineBreaks = 0;
  }
  /**
   * Start building a new block.
   *
   * @param { object } [param0]
   * Object holding the parameters of the block.
   *
   * @param { number } [param0.leadingLineBreaks]
   * This block should have at least this number of line breaks to separate it from any preceding block.
   *
   * @param { number }  [param0.reservedLineLength]
   * Reserve this number of characters on each line for block markup.
   *
   * @param { boolean } [param0.isPre]
   * Should HTML whitespace be preserved inside this block.
   */
  openBlock({ leadingLineBreaks = 1, reservedLineLength = 0, isPre = false } = {}) {
    const maxLineLength = Math.max(20, this._stackItem.inlineTextBuilder.maxLineLength - reservedLineLength);
    this._stackItem = new BlockStackItem(
      this.options,
      this._stackItem,
      leadingLineBreaks,
      maxLineLength
    );
    if (isPre) {
      this._stackItem.isPre = true;
    }
  }
  /**
   * Finalize currently built block, add it's content to the parent block.
   *
   * @param { object } [param0]
   * Object holding the parameters of the block.
   *
   * @param { number } [param0.trailingLineBreaks]
   * This block should have at least this number of line breaks to separate it from any following block.
   *
   * @param { (str: string) => string } [param0.blockTransform]
   * A function to transform the block text before adding to the parent block.
   * This happens after word wrap and should be used in combination with reserved line length
   * in order to keep line lengths correct.
   * Used for whole block markup.
   */
  closeBlock({ trailingLineBreaks = 1, blockTransform = void 0 } = {}) {
    const block = this._popStackItem();
    const blockText = blockTransform ? blockTransform(getText(block)) : getText(block);
    addText(this._stackItem, blockText, block.leadingLineBreaks, Math.max(block.stashedLineBreaks, trailingLineBreaks));
  }
  /**
   * Start building a new list.
   *
   * @param { object } [param0]
   * Object holding the parameters of the list.
   *
   * @param { number } [param0.maxPrefixLength]
   * Length of the longest list item prefix.
   * If not supplied or too small then list items won't be aligned properly.
   *
   * @param { 'left' | 'right' } [param0.prefixAlign]
   * Specify how prefixes of different lengths have to be aligned
   * within a column.
   *
   * @param { number } [param0.interRowLineBreaks]
   * Minimum number of line breaks between list items.
   *
   * @param { number } [param0.leadingLineBreaks]
   * This list should have at least this number of line breaks to separate it from any preceding block.
   */
  openList({ maxPrefixLength = 0, prefixAlign = "left", interRowLineBreaks = 1, leadingLineBreaks = 2 } = {}) {
    this._stackItem = new ListStackItem(this.options, this._stackItem, {
      interRowLineBreaks,
      leadingLineBreaks,
      maxLineLength: this._stackItem.inlineTextBuilder.maxLineLength,
      maxPrefixLength,
      prefixAlign
    });
  }
  /**
   * Start building a new list item.
   *
   * @param {object} param0
   * Object holding the parameters of the list item.
   *
   * @param { string } [param0.prefix]
   * Prefix for this list item (item number, bullet point, etc).
   */
  openListItem({ prefix = "" } = {}) {
    if (!(this._stackItem instanceof ListStackItem)) {
      throw new Error("Can't add a list item to something that is not a list! Check the formatter.");
    }
    const list = this._stackItem;
    const prefixLength = Math.max(prefix.length, list.maxPrefixLength);
    const maxLineLength = Math.max(20, list.inlineTextBuilder.maxLineLength - prefixLength);
    this._stackItem = new ListItemStackItem(this.options, list, {
      prefix,
      maxLineLength,
      leadingLineBreaks: list.interRowLineBreaks
    });
  }
  /**
   * Finalize currently built list item, add it's content to the parent list.
   */
  closeListItem() {
    const listItem = this._popStackItem();
    const list = listItem.next;
    const prefixLength = Math.max(listItem.prefix.length, list.maxPrefixLength);
    const spacing = "\n" + " ".repeat(prefixLength);
    const prefix = list.prefixAlign === "right" ? listItem.prefix.padStart(prefixLength) : listItem.prefix.padEnd(prefixLength);
    const text = prefix + getText(listItem).replace(/\n/g, spacing);
    addText(
      list,
      text,
      listItem.leadingLineBreaks,
      Math.max(listItem.stashedLineBreaks, list.interRowLineBreaks)
    );
  }
  /**
   * Finalize currently built list, add it's content to the parent block.
   *
   * @param { object } param0
   * Object holding the parameters of the list.
   *
   * @param { number } [param0.trailingLineBreaks]
   * This list should have at least this number of line breaks to separate it from any following block.
   */
  closeList({ trailingLineBreaks = 2 } = {}) {
    const list = this._popStackItem();
    const text = getText(list);
    if (text) {
      addText(this._stackItem, text, list.leadingLineBreaks, trailingLineBreaks);
    }
  }
  /**
   * Start building a table.
   */
  openTable() {
    this._stackItem = new TableStackItem(this._stackItem);
  }
  /**
   * Start building a table row.
   */
  openTableRow() {
    if (!(this._stackItem instanceof TableStackItem)) {
      throw new Error("Can't add a table row to something that is not a table! Check the formatter.");
    }
    this._stackItem = new TableRowStackItem(this._stackItem);
  }
  /**
   * Start building a table cell.
   *
   * @param { object } [param0]
   * Object holding the parameters of the cell.
   *
   * @param { number } [param0.maxColumnWidth]
   * Wrap cell content to this width. Fall back to global wordwrap value if undefined.
   */
  openTableCell({ maxColumnWidth = void 0 } = {}) {
    if (!(this._stackItem instanceof TableRowStackItem)) {
      throw new Error("Can't add a table cell to something that is not a table row! Check the formatter.");
    }
    this._stackItem = new TableCellStackItem(this.options, this._stackItem, maxColumnWidth);
  }
  /**
   * Finalize currently built table cell and add it to parent table row's cells.
   *
   * @param { object } [param0]
   * Object holding the parameters of the cell.
   *
   * @param { number } [param0.colspan] How many columns this cell should occupy.
   * @param { number } [param0.rowspan] How many rows this cell should occupy.
   */
  closeTableCell({ colspan = 1, rowspan = 1 } = {}) {
    const cell = this._popStackItem();
    const text = trimCharacter(getText(cell), "\n");
    cell.next.cells.push({ colspan, rowspan, text });
  }
  /**
   * Finalize currently built table row and add it to parent table's rows.
   */
  closeTableRow() {
    const row = this._popStackItem();
    row.next.rows.push(row.cells);
  }
  /**
   * Finalize currently built table and add the rendered text to the parent block.
   *
   * @param { object } param0
   * Object holding the parameters of the table.
   *
   * @param { TablePrinter } param0.tableToString
   * A function to convert a table of stringified cells into a complete table.
   *
   * @param { number } [param0.leadingLineBreaks]
   * This table should have at least this number of line breaks to separate if from any preceding block.
   *
   * @param { number } [param0.trailingLineBreaks]
   * This table should have at least this number of line breaks to separate it from any following block.
   */
  closeTable({ tableToString: tableToString2, leadingLineBreaks = 2, trailingLineBreaks = 2 }) {
    const table = this._popStackItem();
    const output = tableToString2(table.rows);
    if (output) {
      addText(this._stackItem, output, leadingLineBreaks, trailingLineBreaks);
    }
  }
  /**
   * Return the rendered text content of this builder.
   *
   * @returns { string }
   */
  toString() {
    return getText(this._stackItem.getRoot());
  }
}
function getText(stackItem) {
  if (!(stackItem instanceof BlockStackItem || stackItem instanceof ListItemStackItem || stackItem instanceof TableCellStackItem)) {
    throw new Error("Only blocks, list items and table cells can be requested for text contents.");
  }
  return stackItem.inlineTextBuilder.isEmpty() ? stackItem.rawText : stackItem.rawText + stackItem.inlineTextBuilder.toString();
}
function addText(stackItem, text, leadingLineBreaks, trailingLineBreaks) {
  if (!(stackItem instanceof BlockStackItem || stackItem instanceof ListItemStackItem || stackItem instanceof TableCellStackItem)) {
    throw new Error("Only blocks, list items and table cells can contain text.");
  }
  const parentText = getText(stackItem);
  const lineBreaks = Math.max(stackItem.stashedLineBreaks, leadingLineBreaks);
  stackItem.inlineTextBuilder.clear();
  if (parentText) {
    stackItem.rawText = parentText + "\n".repeat(lineBreaks) + text;
  } else {
    stackItem.rawText = text;
    stackItem.leadingLineBreaks = lineBreaks;
  }
  stackItem.stashedLineBreaks = trailingLineBreaks;
}
function applyTransformer(str, transformer) {
  return transformer ? applyTransformer(transformer.transform(str), transformer.next) : str;
}
function compile$1(options = {}) {
  const selectorsWithoutFormat = options.selectors.filter((s2) => !s2.format);
  if (selectorsWithoutFormat.length) {
    throw new Error(
      "Following selectors have no specified format: " + selectorsWithoutFormat.map((s2) => `\`${s2.selector}\``).join(", ")
    );
  }
  const picker = new DecisionTree(
    options.selectors.map((s2) => [s2.selector, s2])
  ).build(hp2Builder);
  if (typeof options.encodeCharacters !== "function") {
    options.encodeCharacters = makeReplacerFromDict(options.encodeCharacters);
  }
  const baseSelectorsPicker = new DecisionTree(
    options.baseElements.selectors.map((s2, i) => [s2, i + 1])
  ).build(hp2Builder);
  function findBaseElements(dom) {
    return findBases(dom, options, baseSelectorsPicker);
  }
  const limitedWalk = limitedDepthRecursive(
    options.limits.maxDepth,
    recursiveWalk,
    function(dom, builder) {
      builder.addInline(options.limits.ellipsis || "");
    }
  );
  return function(html2, metadata = void 0) {
    return process$1(html2, metadata, options, picker, findBaseElements, limitedWalk);
  };
}
function process$1(html2, metadata, options, picker, findBaseElements, walk) {
  const maxInputLength = options.limits.maxInputLength;
  if (maxInputLength && html2 && html2.length > maxInputLength) {
    console.warn(
      `Input length ${html2.length} is above allowed limit of ${maxInputLength}. Truncating without ellipsis.`
    );
    html2 = html2.substring(0, maxInputLength);
  }
  const document = parseDocument(html2, { decodeEntities: options.decodeEntities });
  const bases = findBaseElements(document.children);
  const builder = new BlockTextBuilder(options, picker, metadata);
  walk(bases, builder);
  return builder.toString();
}
function findBases(dom, options, baseSelectorsPicker) {
  const results = [];
  function recursiveWalk2(walk, dom2) {
    dom2 = dom2.slice(0, options.limits.maxChildNodes);
    for (const elem of dom2) {
      if (elem.type !== "tag") {
        continue;
      }
      const pickedSelectorIndex = baseSelectorsPicker.pick1(elem);
      if (pickedSelectorIndex > 0) {
        results.push({ selectorIndex: pickedSelectorIndex, element: elem });
      } else if (elem.children) {
        walk(elem.children);
      }
      if (results.length >= options.limits.maxBaseElements) {
        return;
      }
    }
  }
  const limitedWalk = limitedDepthRecursive(
    options.limits.maxDepth,
    recursiveWalk2
  );
  limitedWalk(dom);
  if (options.baseElements.orderBy !== "occurrence") {
    results.sort((a, b2) => a.selectorIndex - b2.selectorIndex);
  }
  return options.baseElements.returnDomByDefault && results.length === 0 ? dom : results.map((x2) => x2.element);
}
function recursiveWalk(walk, dom, builder) {
  if (!dom) {
    return;
  }
  const options = builder.options;
  const tooManyChildNodes = dom.length > options.limits.maxChildNodes;
  if (tooManyChildNodes) {
    dom = dom.slice(0, options.limits.maxChildNodes);
    dom.push({
      data: options.limits.ellipsis,
      type: "text"
    });
  }
  for (const elem of dom) {
    switch (elem.type) {
      case "text": {
        builder.addInline(elem.data);
        break;
      }
      case "tag": {
        const tagDefinition = builder.picker.pick1(elem);
        const format = options.formatters[tagDefinition.format];
        format(elem, walk, builder, tagDefinition.options || {});
        break;
      }
    }
  }
  return;
}
function makeReplacerFromDict(dict) {
  if (!dict || Object.keys(dict).length === 0) {
    return void 0;
  }
  const entries = Object.entries(dict).filter(([, v2]) => v2 !== false);
  const regex = new RegExp(
    entries.map(([c2]) => `(${unicodeEscape([...c2][0])})`).join("|"),
    "g"
  );
  const values = entries.map(([, v2]) => v2);
  const replacer = (m, ...cgs) => values[cgs.findIndex((cg) => cg)];
  return (str) => str.replace(regex, replacer);
}
function formatSkip(elem, walk, builder, formatOptions) {
}
function formatInlineString(elem, walk, builder, formatOptions) {
  builder.addLiteral(formatOptions.string || "");
}
function formatBlockString(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.addLiteral(formatOptions.string || "");
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatInline(elem, walk, builder, formatOptions) {
  walk(elem.children, builder);
}
function formatBlock$1(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function renderOpenTag(elem) {
  const attrs = elem.attribs && elem.attribs.length ? " " + Object.entries(elem.attribs).map(([k2, v2]) => v2 === "" ? k2 : `${k2}=${v2.replace(/"/g, "&quot;")}`).join(" ") : "";
  return `<${elem.name}${attrs}>`;
}
function renderCloseTag(elem) {
  return `</${elem.name}>`;
}
function formatInlineTag(elem, walk, builder, formatOptions) {
  builder.startNoWrap();
  builder.addLiteral(renderOpenTag(elem));
  builder.stopNoWrap();
  walk(elem.children, builder);
  builder.startNoWrap();
  builder.addLiteral(renderCloseTag(elem));
  builder.stopNoWrap();
}
function formatBlockTag(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.startNoWrap();
  builder.addLiteral(renderOpenTag(elem));
  builder.stopNoWrap();
  walk(elem.children, builder);
  builder.startNoWrap();
  builder.addLiteral(renderCloseTag(elem));
  builder.stopNoWrap();
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatInlineHtml(elem, walk, builder, formatOptions) {
  builder.startNoWrap();
  builder.addLiteral(
    render$1(elem, { decodeEntities: builder.options.decodeEntities })
  );
  builder.stopNoWrap();
}
function formatBlockHtml(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.startNoWrap();
  builder.addLiteral(
    render$1(elem, { decodeEntities: builder.options.decodeEntities })
  );
  builder.stopNoWrap();
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatInlineSurround(elem, walk, builder, formatOptions) {
  builder.addLiteral(formatOptions.prefix || "");
  walk(elem.children, builder);
  builder.addLiteral(formatOptions.suffix || "");
}
var genericFormatters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  block: formatBlock$1,
  blockHtml: formatBlockHtml,
  blockString: formatBlockString,
  blockTag: formatBlockTag,
  inline: formatInline,
  inlineHtml: formatInlineHtml,
  inlineString: formatInlineString,
  inlineSurround: formatInlineSurround,
  inlineTag: formatInlineTag,
  skip: formatSkip
});
function getRow(matrix, j2) {
  if (!matrix[j2]) {
    matrix[j2] = [];
  }
  return matrix[j2];
}
function findFirstVacantIndex(row, x2 = 0) {
  while (row[x2]) {
    x2++;
  }
  return x2;
}
function transposeInPlace(matrix, maxSize) {
  for (let i = 0; i < maxSize; i++) {
    const rowI = getRow(matrix, i);
    for (let j2 = 0; j2 < i; j2++) {
      const rowJ = getRow(matrix, j2);
      if (rowI[j2] || rowJ[i]) {
        const temp = rowI[j2];
        rowI[j2] = rowJ[i];
        rowJ[i] = temp;
      }
    }
  }
}
function putCellIntoLayout(cell, layout, baseRow, baseCol) {
  for (let r2 = 0; r2 < cell.rowspan; r2++) {
    const layoutRow = getRow(layout, baseRow + r2);
    for (let c2 = 0; c2 < cell.colspan; c2++) {
      layoutRow[baseCol + c2] = cell;
    }
  }
}
function getOrInitOffset(offsets, index2) {
  if (offsets[index2] === void 0) {
    offsets[index2] = index2 === 0 ? 0 : 1 + getOrInitOffset(offsets, index2 - 1);
  }
  return offsets[index2];
}
function updateOffset(offsets, base, span, value) {
  offsets[base + span] = Math.max(
    getOrInitOffset(offsets, base + span),
    getOrInitOffset(offsets, base) + value
  );
}
function tableToString(tableRows, rowSpacing, colSpacing) {
  const layout = [];
  let colNumber = 0;
  const rowNumber = tableRows.length;
  const rowOffsets = [0];
  for (let j2 = 0; j2 < rowNumber; j2++) {
    const layoutRow = getRow(layout, j2);
    const cells = tableRows[j2];
    let x2 = 0;
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      x2 = findFirstVacantIndex(layoutRow, x2);
      putCellIntoLayout(cell, layout, j2, x2);
      x2 += cell.colspan;
      cell.lines = cell.text.split("\n");
      const cellHeight = cell.lines.length;
      updateOffset(rowOffsets, j2, cell.rowspan, cellHeight + rowSpacing);
    }
    colNumber = layoutRow.length > colNumber ? layoutRow.length : colNumber;
  }
  transposeInPlace(layout, rowNumber > colNumber ? rowNumber : colNumber);
  const outputLines = [];
  const colOffsets = [0];
  for (let x2 = 0; x2 < colNumber; x2++) {
    let y2 = 0;
    let cell;
    const rowsInThisColumn = Math.min(rowNumber, layout[x2].length);
    while (y2 < rowsInThisColumn) {
      cell = layout[x2][y2];
      if (cell) {
        if (!cell.rendered) {
          let cellWidth = 0;
          for (let j2 = 0; j2 < cell.lines.length; j2++) {
            const line = cell.lines[j2];
            const lineOffset = rowOffsets[y2] + j2;
            outputLines[lineOffset] = (outputLines[lineOffset] || "").padEnd(colOffsets[x2]) + line;
            cellWidth = line.length > cellWidth ? line.length : cellWidth;
          }
          updateOffset(colOffsets, x2, cell.colspan, cellWidth + colSpacing);
          cell.rendered = true;
        }
        y2 += cell.rowspan;
      } else {
        const lineOffset = rowOffsets[y2];
        outputLines[lineOffset] = outputLines[lineOffset] || "";
        y2++;
      }
    }
  }
  return outputLines.join("\n");
}
function formatLineBreak(elem, walk, builder, formatOptions) {
  builder.addLineBreak();
}
function formatWbr(elem, walk, builder, formatOptions) {
  builder.addWordBreakOpportunity();
}
function formatHorizontalLine(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.addInline("-".repeat(formatOptions.length || builder.options.wordwrap || 40));
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatParagraph(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatPre(elem, walk, builder, formatOptions) {
  builder.openBlock({
    isPre: true,
    leadingLineBreaks: formatOptions.leadingLineBreaks || 2
  });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatHeading(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  if (formatOptions.uppercase !== false) {
    builder.pushWordTransform((str) => str.toUpperCase());
    walk(elem.children, builder);
    builder.popWordTransform();
  } else {
    walk(elem.children, builder);
  }
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatBlockquote(elem, walk, builder, formatOptions) {
  builder.openBlock({
    leadingLineBreaks: formatOptions.leadingLineBreaks || 2,
    reservedLineLength: 2
  });
  walk(elem.children, builder);
  builder.closeBlock({
    trailingLineBreaks: formatOptions.trailingLineBreaks || 2,
    blockTransform: (str) => (formatOptions.trimEmptyLines !== false ? trimCharacter(str, "\n") : str).split("\n").map((line) => "> " + line).join("\n")
  });
}
function withBrackets(str, brackets) {
  if (!brackets) {
    return str;
  }
  const lbr = typeof brackets[0] === "string" ? brackets[0] : "[";
  const rbr = typeof brackets[1] === "string" ? brackets[1] : "]";
  return lbr + str + rbr;
}
function pathRewrite(path, rewriter, baseUrl, metadata, elem) {
  const modifiedPath = typeof rewriter === "function" ? rewriter(path, metadata, elem) : path;
  return modifiedPath[0] === "/" && baseUrl ? trimCharacterEnd(baseUrl, "/") + modifiedPath : modifiedPath;
}
function formatImage(elem, walk, builder, formatOptions) {
  const attribs = elem.attribs || {};
  const alt = attribs.alt ? attribs.alt : "";
  const src = !attribs.src ? "" : pathRewrite(attribs.src, formatOptions.pathRewrite, formatOptions.baseUrl, builder.metadata, elem);
  const text = !src ? alt : !alt ? withBrackets(src, formatOptions.linkBrackets) : alt + " " + withBrackets(src, formatOptions.linkBrackets);
  builder.addInline(text, { noWordTransform: true });
}
function formatAnchor(elem, walk, builder, formatOptions) {
  function getHref() {
    if (formatOptions.ignoreHref) {
      return "";
    }
    if (!elem.attribs || !elem.attribs.href) {
      return "";
    }
    let href2 = elem.attribs.href.replace(/^mailto:/, "");
    if (formatOptions.noAnchorUrl && href2[0] === "#") {
      return "";
    }
    href2 = pathRewrite(href2, formatOptions.pathRewrite, formatOptions.baseUrl, builder.metadata, elem);
    return href2;
  }
  const href = getHref();
  if (!href) {
    walk(elem.children, builder);
  } else {
    let text = "";
    builder.pushWordTransform(
      (str) => {
        if (str) {
          text += str;
        }
        return str;
      }
    );
    walk(elem.children, builder);
    builder.popWordTransform();
    const hideSameLink = formatOptions.hideLinkHrefIfSameAsText && href === text;
    if (!hideSameLink) {
      builder.addInline(
        !text ? href : " " + withBrackets(href, formatOptions.linkBrackets),
        { noWordTransform: true }
      );
    }
  }
}
function formatList(elem, walk, builder, formatOptions, nextPrefixCallback) {
  const isNestedList = get(elem, ["parent", "name"]) === "li";
  let maxPrefixLength = 0;
  const listItems = (elem.children || []).filter((child) => child.type !== "text" || !/^\s*$/.test(child.data)).map(function(child) {
    if (child.name !== "li") {
      return { node: child, prefix: "" };
    }
    const prefix = isNestedList ? nextPrefixCallback().trimStart() : nextPrefixCallback();
    if (prefix.length > maxPrefixLength) {
      maxPrefixLength = prefix.length;
    }
    return { node: child, prefix };
  });
  if (!listItems.length) {
    return;
  }
  builder.openList({
    interRowLineBreaks: 1,
    leadingLineBreaks: isNestedList ? 1 : formatOptions.leadingLineBreaks || 2,
    maxPrefixLength,
    prefixAlign: "left"
  });
  for (const { node, prefix } of listItems) {
    builder.openListItem({ prefix });
    walk([node], builder);
    builder.closeListItem();
  }
  builder.closeList({ trailingLineBreaks: isNestedList ? 1 : formatOptions.trailingLineBreaks || 2 });
}
function formatUnorderedList(elem, walk, builder, formatOptions) {
  const prefix = formatOptions.itemPrefix || " * ";
  return formatList(elem, walk, builder, formatOptions, () => prefix);
}
function formatOrderedList(elem, walk, builder, formatOptions) {
  let nextIndex = Number(elem.attribs.start || "1");
  const indexFunction = getOrderedListIndexFunction(elem.attribs.type);
  const nextPrefixCallback = () => " " + indexFunction(nextIndex++) + ". ";
  return formatList(elem, walk, builder, formatOptions, nextPrefixCallback);
}
function getOrderedListIndexFunction(olType = "1") {
  switch (olType) {
    case "a":
      return (i) => numberToLetterSequence(i, "a");
    case "A":
      return (i) => numberToLetterSequence(i, "A");
    case "i":
      return (i) => numberToRoman(i).toLowerCase();
    case "I":
      return (i) => numberToRoman(i);
    case "1":
    default:
      return (i) => i.toString();
  }
}
function splitClassesAndIds(selectors) {
  const classes = [];
  const ids = [];
  for (const selector of selectors) {
    if (selector.startsWith(".")) {
      classes.push(selector.substring(1));
    } else if (selector.startsWith("#")) {
      ids.push(selector.substring(1));
    }
  }
  return { classes, ids };
}
function isDataTable(attr, tables) {
  if (tables === true) {
    return true;
  }
  if (!attr) {
    return false;
  }
  const { classes, ids } = splitClassesAndIds(tables);
  const attrClasses = (attr["class"] || "").split(" ");
  const attrIds = (attr["id"] || "").split(" ");
  return attrClasses.some((x2) => classes.includes(x2)) || attrIds.some((x2) => ids.includes(x2));
}
function formatTable(elem, walk, builder, formatOptions) {
  return isDataTable(elem.attribs, builder.options.tables) ? formatDataTable(elem, walk, builder, formatOptions) : formatBlock(elem, walk, builder, formatOptions);
}
function formatBlock(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks });
}
function formatDataTable(elem, walk, builder, formatOptions) {
  builder.openTable();
  elem.children.forEach(walkTable);
  builder.closeTable({
    tableToString: (rows) => tableToString(rows, formatOptions.rowSpacing ?? 0, formatOptions.colSpacing ?? 3),
    leadingLineBreaks: formatOptions.leadingLineBreaks,
    trailingLineBreaks: formatOptions.trailingLineBreaks
  });
  function formatCell(cellNode) {
    const colspan = +get(cellNode, ["attribs", "colspan"]) || 1;
    const rowspan = +get(cellNode, ["attribs", "rowspan"]) || 1;
    builder.openTableCell({ maxColumnWidth: formatOptions.maxColumnWidth });
    walk(cellNode.children, builder);
    builder.closeTableCell({ colspan, rowspan });
  }
  function walkTable(elem2) {
    if (elem2.type !== "tag") {
      return;
    }
    const formatHeaderCell = formatOptions.uppercaseHeaderCells !== false ? (cellNode) => {
      builder.pushWordTransform((str) => str.toUpperCase());
      formatCell(cellNode);
      builder.popWordTransform();
    } : formatCell;
    switch (elem2.name) {
      case "thead":
      case "tbody":
      case "tfoot":
      case "center":
        elem2.children.forEach(walkTable);
        return;
      case "tr": {
        builder.openTableRow();
        for (const childOfTr of elem2.children) {
          if (childOfTr.type !== "tag") {
            continue;
          }
          switch (childOfTr.name) {
            case "th": {
              formatHeaderCell(childOfTr);
              break;
            }
            case "td": {
              formatCell(childOfTr);
              break;
            }
          }
        }
        builder.closeTableRow();
        break;
      }
    }
  }
}
var textFormatters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  anchor: formatAnchor,
  blockquote: formatBlockquote,
  dataTable: formatDataTable,
  heading: formatHeading,
  horizontalLine: formatHorizontalLine,
  image: formatImage,
  lineBreak: formatLineBreak,
  orderedList: formatOrderedList,
  paragraph: formatParagraph,
  pre: formatPre,
  table: formatTable,
  unorderedList: formatUnorderedList,
  wbr: formatWbr
});
const DEFAULT_OPTIONS = {
  baseElements: {
    selectors: ["body"],
    orderBy: "selectors",
    // 'selectors' | 'occurrence'
    returnDomByDefault: true
  },
  decodeEntities: true,
  encodeCharacters: {},
  formatters: {},
  limits: {
    ellipsis: "...",
    maxBaseElements: void 0,
    maxChildNodes: void 0,
    maxDepth: void 0,
    maxInputLength: 1 << 24
    // 16_777_216
  },
  longWordSplit: {
    forceWrapOnLimit: false,
    wrapCharacters: []
  },
  preserveNewlines: false,
  selectors: [
    { selector: "*", format: "inline" },
    {
      selector: "a",
      format: "anchor",
      options: {
        baseUrl: null,
        hideLinkHrefIfSameAsText: false,
        ignoreHref: false,
        linkBrackets: ["[", "]"],
        noAnchorUrl: true
      }
    },
    { selector: "article", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: "aside", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    {
      selector: "blockquote",
      format: "blockquote",
      options: { leadingLineBreaks: 2, trailingLineBreaks: 2, trimEmptyLines: true }
    },
    { selector: "br", format: "lineBreak" },
    { selector: "div", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: "footer", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: "form", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: "h1", format: "heading", options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h2", format: "heading", options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h3", format: "heading", options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h4", format: "heading", options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h5", format: "heading", options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h6", format: "heading", options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
    { selector: "header", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    {
      selector: "hr",
      format: "horizontalLine",
      options: { leadingLineBreaks: 2, length: void 0, trailingLineBreaks: 2 }
    },
    {
      selector: "img",
      format: "image",
      options: { baseUrl: null, linkBrackets: ["[", "]"] }
    },
    { selector: "main", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: "nav", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    {
      selector: "ol",
      format: "orderedList",
      options: { leadingLineBreaks: 2, trailingLineBreaks: 2 }
    },
    { selector: "p", format: "paragraph", options: { leadingLineBreaks: 2, trailingLineBreaks: 2 } },
    { selector: "pre", format: "pre", options: { leadingLineBreaks: 2, trailingLineBreaks: 2 } },
    { selector: "section", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    {
      selector: "table",
      format: "table",
      options: {
        colSpacing: 3,
        leadingLineBreaks: 2,
        maxColumnWidth: 60,
        rowSpacing: 0,
        trailingLineBreaks: 2,
        uppercaseHeaderCells: true
      }
    },
    {
      selector: "ul",
      format: "unorderedList",
      options: { itemPrefix: " * ", leadingLineBreaks: 2, trailingLineBreaks: 2 }
    },
    { selector: "wbr", format: "wbr" }
  ],
  tables: [],
  // deprecated
  whitespaceCharacters: " 	\r\n\f​",
  wordwrap: 80
};
const concatMerge = (acc, src, options) => [...acc, ...src];
const overwriteMerge = (acc, src, options) => [...src];
const selectorsMerge = (acc, src, options) => acc.some((s2) => typeof s2 === "object") ? concatMerge(acc, src) : overwriteMerge(acc, src);
function compile(options = {}) {
  options = merge(
    DEFAULT_OPTIONS,
    options,
    {
      arrayMerge: overwriteMerge,
      customMerge: (key) => key === "selectors" ? selectorsMerge : void 0
    }
  );
  options.formatters = Object.assign({}, genericFormatters, textFormatters, options.formatters);
  options.selectors = mergeDuplicatesPreferLast(options.selectors, ((s2) => s2.selector));
  handleDeprecatedOptions(options);
  return compile$1(options);
}
function convert(html2, options = {}, metadata = void 0) {
  return compile(options)(html2, metadata);
}
function handleDeprecatedOptions(options) {
  if (options.tags) {
    const tagDefinitions = Object.entries(options.tags).map(
      ([selector, definition]) => ({ ...definition, selector: selector || "*" })
    );
    options.selectors.push(...tagDefinitions);
    options.selectors = mergeDuplicatesPreferLast(options.selectors, ((s2) => s2.selector));
  }
  function set(obj, path, value) {
    const valueKey = path.pop();
    for (const key of path) {
      let nested = obj[key];
      if (!nested) {
        nested = {};
        obj[key] = nested;
      }
      obj = nested;
    }
    obj[valueKey] = value;
  }
  if (options["baseElement"]) {
    const baseElement = options["baseElement"];
    set(
      options,
      ["baseElements", "selectors"],
      Array.isArray(baseElement) ? baseElement : [baseElement]
    );
  }
  if (options["returnDomByDefault"] !== void 0) {
    set(options, ["baseElements", "returnDomByDefault"], options["returnDomByDefault"]);
  }
  for (const definition of options.selectors) {
    if (definition.format === "anchor" && get(definition, ["options", "noLinkBrackets"])) {
      set(definition, ["options", "linkBrackets"], false);
    }
  }
}
var react = { exports: {} };
var react_production = {};
var hasRequiredReact_production;
function requireReact_production() {
  if (hasRequiredReact_production) return react_production;
  hasRequiredReact_production = 1;
  var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
  function getIteratorFn(maybeIterable) {
    if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
    maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
    return "function" === typeof maybeIterable ? maybeIterable : null;
  }
  var ReactNoopUpdateQueue = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, assign = Object.assign, emptyObject = {};
  function Component(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
  }
  Component.prototype.isReactComponent = {};
  Component.prototype.setState = function(partialState, callback) {
    if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, partialState, callback, "setState");
  };
  Component.prototype.forceUpdate = function(callback) {
    this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
  };
  function ComponentDummy() {
  }
  ComponentDummy.prototype = Component.prototype;
  function PureComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
  }
  var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
  pureComponentPrototype.constructor = PureComponent;
  assign(pureComponentPrototype, Component.prototype);
  pureComponentPrototype.isPureReactComponent = true;
  var isArrayImpl = Array.isArray;
  function noop() {
  }
  var ReactSharedInternals = { H: null, A: null, T: null, S: null }, hasOwnProperty = Object.prototype.hasOwnProperty;
  function ReactElement(type, key, props) {
    var refProp = props.ref;
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type,
      key,
      ref: void 0 !== refProp ? refProp : null,
      props
    };
  }
  function cloneAndReplaceKey(oldElement, newKey) {
    return ReactElement(oldElement.type, newKey, oldElement.props);
  }
  function isValidElement(object) {
    return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function escape2(key) {
    var escaperLookup = { "=": "=0", ":": "=2" };
    return "$" + key.replace(/[=:]/g, function(match) {
      return escaperLookup[match];
    });
  }
  var userProvidedKeyEscapeRegex = /\/+/g;
  function getElementKey(element, index2) {
    return "object" === typeof element && null !== element && null != element.key ? escape2("" + element.key) : index2.toString(36);
  }
  function resolveThenable(thenable) {
    switch (thenable.status) {
      case "fulfilled":
        return thenable.value;
      case "rejected":
        throw thenable.reason;
      default:
        switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
          function(fulfilledValue) {
            "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
          },
          function(error) {
            "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
          }
        )), thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
        }
    }
    throw thenable;
  }
  function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
    var type = typeof children;
    if ("undefined" === type || "boolean" === type) children = null;
    var invokeCallback = false;
    if (null === children) invokeCallback = true;
    else
      switch (type) {
        case "bigint":
        case "string":
        case "number":
          invokeCallback = true;
          break;
        case "object":
          switch (children.$$typeof) {
            case REACT_ELEMENT_TYPE:
            case REACT_PORTAL_TYPE:
              invokeCallback = true;
              break;
            case REACT_LAZY_TYPE:
              return invokeCallback = children._init, mapIntoArray(
                invokeCallback(children._payload),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              );
          }
      }
    if (invokeCallback)
      return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c2) {
        return c2;
      })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(
        callback,
        escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(
          userProvidedKeyEscapeRegex,
          "$&/"
        ) + "/") + invokeCallback
      )), array.push(callback)), 1;
    invokeCallback = 0;
    var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
    if (isArrayImpl(children))
      for (var i = 0; i < children.length; i++)
        nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        );
    else if (i = getIteratorFn(children), "function" === typeof i)
      for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
        nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        );
    else if ("object" === type) {
      if ("function" === typeof children.then)
        return mapIntoArray(
          resolveThenable(children),
          array,
          escapedPrefix,
          nameSoFar,
          callback
        );
      array = String(children);
      throw Error(
        "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return invokeCallback;
  }
  function mapChildren(children, func, context) {
    if (null == children) return children;
    var result = [], count = 0;
    mapIntoArray(children, result, "", "", function(child) {
      return func.call(context, child, count++);
    });
    return result;
  }
  function lazyInitializer(payload) {
    if (-1 === payload._status) {
      var ctor = payload._result;
      ctor = ctor();
      ctor.then(
        function(moduleObject) {
          if (0 === payload._status || -1 === payload._status)
            payload._status = 1, payload._result = moduleObject;
        },
        function(error) {
          if (0 === payload._status || -1 === payload._status)
            payload._status = 2, payload._result = error;
        }
      );
      -1 === payload._status && (payload._status = 0, payload._result = ctor);
    }
    if (1 === payload._status) return payload._result.default;
    throw payload._result;
  }
  var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
    if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
      var event = new window.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
        error
      });
      if (!window.dispatchEvent(event)) return;
    } else if ("object" === typeof process && "function" === typeof process.emit) {
      process.emit("uncaughtException", error);
      return;
    }
    console.error(error);
  }, Children = {
    map: mapChildren,
    forEach: function(children, forEachFunc, forEachContext) {
      mapChildren(
        children,
        function() {
          forEachFunc.apply(this, arguments);
        },
        forEachContext
      );
    },
    count: function(children) {
      var n2 = 0;
      mapChildren(children, function() {
        n2++;
      });
      return n2;
    },
    toArray: function(children) {
      return mapChildren(children, function(child) {
        return child;
      }) || [];
    },
    only: function(children) {
      if (!isValidElement(children))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return children;
    }
  };
  react_production.Activity = REACT_ACTIVITY_TYPE;
  react_production.Children = Children;
  react_production.Component = Component;
  react_production.Fragment = REACT_FRAGMENT_TYPE;
  react_production.Profiler = REACT_PROFILER_TYPE;
  react_production.PureComponent = PureComponent;
  react_production.StrictMode = REACT_STRICT_MODE_TYPE;
  react_production.Suspense = REACT_SUSPENSE_TYPE;
  react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
  react_production.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(size) {
      return ReactSharedInternals.H.useMemoCache(size);
    }
  };
  react_production.cache = function(fn2) {
    return function() {
      return fn2.apply(null, arguments);
    };
  };
  react_production.cacheSignal = function() {
    return null;
  };
  react_production.cloneElement = function(element, config, children) {
    if (null === element || void 0 === element)
      throw Error(
        "The argument must be a React element, but you passed " + element + "."
      );
    var props = assign({}, element.props), key = element.key;
    if (null != config)
      for (propName in void 0 !== config.key && (key = "" + config.key), config)
        !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
    var propName = arguments.length - 2;
    if (1 === propName) props.children = children;
    else if (1 < propName) {
      for (var childArray = Array(propName), i = 0; i < propName; i++)
        childArray[i] = arguments[i + 2];
      props.children = childArray;
    }
    return ReactElement(element.type, key, props);
  };
  react_production.createContext = function(defaultValue) {
    defaultValue = {
      $$typeof: REACT_CONTEXT_TYPE,
      _currentValue: defaultValue,
      _currentValue2: defaultValue,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    defaultValue.Provider = defaultValue;
    defaultValue.Consumer = {
      $$typeof: REACT_CONSUMER_TYPE,
      _context: defaultValue
    };
    return defaultValue;
  };
  react_production.createElement = function(type, config, children) {
    var propName, props = {}, key = null;
    if (null != config)
      for (propName in void 0 !== config.key && (key = "" + config.key), config)
        hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
    var childrenLength = arguments.length - 2;
    if (1 === childrenLength) props.children = children;
    else if (1 < childrenLength) {
      for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
        childArray[i] = arguments[i + 2];
      props.children = childArray;
    }
    if (type && type.defaultProps)
      for (propName in childrenLength = type.defaultProps, childrenLength)
        void 0 === props[propName] && (props[propName] = childrenLength[propName]);
    return ReactElement(type, key, props);
  };
  react_production.createRef = function() {
    return { current: null };
  };
  react_production.forwardRef = function(render2) {
    return { $$typeof: REACT_FORWARD_REF_TYPE, render: render2 };
  };
  react_production.isValidElement = isValidElement;
  react_production.lazy = function(ctor) {
    return {
      $$typeof: REACT_LAZY_TYPE,
      _payload: { _status: -1, _result: ctor },
      _init: lazyInitializer
    };
  };
  react_production.memo = function(type, compare) {
    return {
      $$typeof: REACT_MEMO_TYPE,
      type,
      compare: void 0 === compare ? null : compare
    };
  };
  react_production.startTransition = function(scope) {
    var prevTransition = ReactSharedInternals.T, currentTransition = {};
    ReactSharedInternals.T = currentTransition;
    try {
      var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
      null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
      "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
    } catch (error) {
      reportGlobalError(error);
    } finally {
      null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
    }
  };
  react_production.unstable_useCacheRefresh = function() {
    return ReactSharedInternals.H.useCacheRefresh();
  };
  react_production.use = function(usable) {
    return ReactSharedInternals.H.use(usable);
  };
  react_production.useActionState = function(action, initialState, permalink) {
    return ReactSharedInternals.H.useActionState(action, initialState, permalink);
  };
  react_production.useCallback = function(callback, deps) {
    return ReactSharedInternals.H.useCallback(callback, deps);
  };
  react_production.useContext = function(Context) {
    return ReactSharedInternals.H.useContext(Context);
  };
  react_production.useDebugValue = function() {
  };
  react_production.useDeferredValue = function(value, initialValue) {
    return ReactSharedInternals.H.useDeferredValue(value, initialValue);
  };
  react_production.useEffect = function(create, deps) {
    return ReactSharedInternals.H.useEffect(create, deps);
  };
  react_production.useEffectEvent = function(callback) {
    return ReactSharedInternals.H.useEffectEvent(callback);
  };
  react_production.useId = function() {
    return ReactSharedInternals.H.useId();
  };
  react_production.useImperativeHandle = function(ref, create, deps) {
    return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
  };
  react_production.useInsertionEffect = function(create, deps) {
    return ReactSharedInternals.H.useInsertionEffect(create, deps);
  };
  react_production.useLayoutEffect = function(create, deps) {
    return ReactSharedInternals.H.useLayoutEffect(create, deps);
  };
  react_production.useMemo = function(create, deps) {
    return ReactSharedInternals.H.useMemo(create, deps);
  };
  react_production.useOptimistic = function(passthrough, reducer) {
    return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
  };
  react_production.useReducer = function(reducer, initialArg, init) {
    return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
  };
  react_production.useRef = function(initialValue) {
    return ReactSharedInternals.H.useRef(initialValue);
  };
  react_production.useState = function(initialState) {
    return ReactSharedInternals.H.useState(initialState);
  };
  react_production.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
    return ReactSharedInternals.H.useSyncExternalStore(
      subscribe,
      getSnapshot,
      getServerSnapshot
    );
  };
  react_production.useTransition = function() {
    return ReactSharedInternals.H.useTransition();
  };
  react_production.version = "19.2.7";
  return react_production;
}
var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return react.exports;
  hasRequiredReact = 1;
  {
    react.exports = requireReact_production();
  }
  return react.exports;
}
var reactExports = requireReact();
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production = {};
var hasRequiredReactJsxRuntime_production;
function requireReactJsxRuntime_production() {
  if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
  hasRequiredReactJsxRuntime_production = 1;
  var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
  function jsxProd(type, config, maybeKey) {
    var key = null;
    void 0 !== maybeKey && (key = "" + maybeKey);
    void 0 !== config.key && (key = "" + config.key);
    if ("key" in config) {
      maybeKey = {};
      for (var propName in config)
        "key" !== propName && (maybeKey[propName] = config[propName]);
    } else maybeKey = config;
    config = maybeKey.ref;
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type,
      key,
      ref: void 0 !== config ? config : null,
      props: maybeKey
    };
  }
  reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
  reactJsxRuntime_production.jsx = jsxProd;
  reactJsxRuntime_production.jsxs = jsxProd;
  return reactJsxRuntime_production;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  {
    jsxRuntime.exports = requireReactJsxRuntime_production();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
function getHtmlNode(path) {
  const topNode = path.node;
  if (topNode) return topNode;
  return path.stack?.[path.stack.length - 1];
}
function recursivelyMapDoc(doc, callback) {
  if (Array.isArray(doc)) return doc.map((innerDoc) => recursivelyMapDoc(innerDoc, callback));
  if (typeof doc === "object") {
    if (doc.type === "line") return callback(doc.soft ? "" : " ");
    if (doc.type === "group") return {
      ...doc,
      contents: recursivelyMapDoc(doc.contents, callback),
      expandedStates: recursivelyMapDoc(doc.expandedStates, callback)
    };
    if ("contents" in doc) return {
      ...doc,
      contents: recursivelyMapDoc(doc.contents, callback)
    };
    if ("parts" in doc) return {
      ...doc,
      parts: recursivelyMapDoc(doc.parts, callback)
    };
    if (doc.type === "if-break") return {
      ...doc,
      breakContents: recursivelyMapDoc(doc.breakContents, callback),
      flatContents: recursivelyMapDoc(doc.flatContents, callback)
    };
    const nextDoc = { ...doc };
    for (const [key, value] of Object.entries(nextDoc)) if (value && typeof value === "object") nextDoc[key] = recursivelyMapDoc(value, callback);
    return nextDoc;
  }
  return callback(doc);
}
const modifiedHtml = { ...html };
if (modifiedHtml.printers) {
  const previousPrint = modifiedHtml.printers.html.print;
  modifiedHtml.printers.html.print = (path, options, print, args) => {
    const node = getHtmlNode(path);
    const rawPrintingResult = previousPrint(path, options, print, args);
    if (node?.type === "ieConditionalComment" || node?.kind === "ieConditionalComment") return recursivelyMapDoc(rawPrintingResult, (doc) => {
      if (typeof doc === "object" && doc.type === "line") return doc.soft ? "" : " ";
      return doc;
    });
    return rawPrintingResult;
  };
}
const defaults = {
  endOfLine: "lf",
  tabWidth: 2,
  plugins: [modifiedHtml],
  bracketSameLine: true,
  parser: "html"
};
const pretty = (str, options = {}) => {
  return Jn(str.replaceAll("\0", ""), {
    ...defaults,
    ...options
  });
};
const plainTextSelectors = [
  {
    selector: "img",
    format: "skip"
  },
  {
    selector: "[data-skip-in-text=true]",
    format: "skip"
  },
  {
    selector: "a",
    options: {
      linkBrackets: false,
      hideLinkHrefIfSameAsText: true
    }
  }
];
function toPlainText(html$1, options) {
  return convert(html$1, {
    wordwrap: false,
    ...options,
    selectors: [...plainTextSelectors, ...options?.selectors ?? []]
  });
}
function createErrorBoundary(reject) {
  if (!React.Component) return (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: props.children });
  return class ErrorBoundary extends React.Component {
    componentDidCatch(error) {
      reject(error);
    }
    render() {
      return this.props.children;
    }
  };
}
const decoder = new TextDecoder("utf-8");
const readStream = async (stream) => {
  const chunks = [];
  const writableStream = new WritableStream({
    write(chunk) {
      chunks.push(chunk);
    },
    abort(reason) {
      throw new Error("Stream aborted", { cause: { reason } });
    }
  });
  await stream.pipeTo(writableStream);
  let length = 0;
  chunks.forEach((item) => {
    length += item.length;
  });
  const mergedChunks = new Uint8Array(length);
  let offset = 0;
  chunks.forEach((item) => {
    mergedChunks.set(item, offset);
    offset += item.length;
  });
  return decoder.decode(mergedChunks);
};
const importReactDom = () => {
  return import("./server.edge_XteSICBB.mjs").then((n2) => n2.s).catch(() => import("./server.edge_XteSICBB.mjs").then((n2) => n2.s));
};
const render = async (element, options) => {
  const reactDOMServer = await importReactDom().then((m) => {
    if ("default" in m) return m.default;
    return m;
  });
  const html$1 = await new Promise((resolve, reject) => {
    const ErrorBoundary = createErrorBoundary(reject);
    reactDOMServer.renderToReadableStream(/* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { children: element }) }), {
      onError(error) {
        reject(error);
      },
      progressiveChunkSize: Number.POSITIVE_INFINITY
    }).then(async (stream) => {
      await stream.allReady;
      return readStream(stream);
    }).then(resolve).catch(reject);
  });
  if (options?.plainText) return toPlainText(html$1, options.htmlToTextOptions);
  const document = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">${html$1.replace(/<!DOCTYPE.*?>/, "")}`;
  if (options?.pretty) return pretty(document);
  return document;
};
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  plainTextSelectors,
  pretty,
  render,
  toPlainText
}, Symbol.toStringTag, { value: "Module" }));
export {
  index as i,
  requireReact as r
};
