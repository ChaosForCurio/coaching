globalThis.process ??= {};
globalThis.process.env ??= {};
const SCHEMA_URI = "https://schemas.agentskills.io/discovery/0.2.0/schema.json";
const GET = async () => {
  const { getCollection } = await import("./_astro_content_DgUbC1nr.mjs");
  const skills = await getCollection("skills");
  const index = {
    $schema: SCHEMA_URI,
    skills: skills.map((skill) => {
      const { name, type, description, digest } = skill.data;
      const url = type === "archive" ? `/.well-known/agent-skills/${skill.id}.tar.gz` : `/.well-known/agent-skills/${skill.id}/SKILL.md`;
      return {
        name,
        type,
        description,
        url,
        digest
      };
    })
  };
  return new Response(JSON.stringify(index, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600"
    }
  });
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
