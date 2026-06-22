/**
 * The v0.2.0 $schema URI for the Agent Skills Discovery index
 */
const SCHEMA_URI = 'https://schemas.agentskills.io/discovery/0.2.0/schema.json';

/**
 * GET /.well-known/agent-skills/index.json
 *
 * Returns a JSON index of all available skills per the Agent Skills Discovery RFC v0.2.0.
 *
 * @see https://github.com/cloudflare/agent-skills-discovery-rfc
 */
const GET = async () => {
    // Dynamic import of virtual module - resolved at runtime by Astro
    // @ts-expect-error - astro:content is a virtual module only available at runtime
    const { getCollection } = await import('./_astro_content_B2GJ7ABX.mjs');
    const skills = await getCollection('skills');
    const index = {
        $schema: SCHEMA_URI,
        skills: skills.map((skill) => {
            const { name, type, description, digest } = skill.data;
            // Determine URL based on type
            const url = type === 'archive'
                ? `/.well-known/agent-skills/${skill.id}.tar.gz`
                : `/.well-known/agent-skills/${skill.id}/SKILL.md`;
            return {
                name,
                type,
                description,
                url,
                digest,
            };
        }),
    };
    return new Response(JSON.stringify(index, null, 2), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600',
        },
    });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
