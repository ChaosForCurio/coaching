globalThis.process ??= {};
globalThis.process.env ??= {};
const getStaticPaths = async () => {
  const { getCollection } = await import("./_astro_content_BM5-7Htj.mjs");
  const skills = await getCollection("skills");
  return skills.filter((skill) => skill.data.type === "skill-md").map((skill) => ({
    params: { skill: skill.id }
  }));
};
const GET = async ({ params }) => {
  const { skill } = params;
  if (!skill) {
    return new Response("Skill name is required", {
      status: 400,
      headers: { "Content-Type": "text/plain" }
    });
  }
  const { getEntry } = await import("./_astro_content_BM5-7Htj.mjs");
  const skillEntry = await getEntry("skills", skill);
  if (!skillEntry) {
    return new Response(`Skill "${skill}" not found`, {
      status: 404,
      headers: { "Content-Type": "text/plain" }
    });
  }
  return new Response(skillEntry.data.skillMdRaw, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown",
      "Cache-Control": "public, max-age=3600"
    }
  });
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
