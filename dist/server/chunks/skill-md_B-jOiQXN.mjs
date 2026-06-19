/**
 * Generate static paths for skill-md type skills.
 * This enables static generation for the dynamic [skill]/SKILL.md route.
 */
const getStaticPaths = async () => {
    // Dynamic import of virtual module - resolved at runtime by Astro
    // @ts-expect-error - astro:content is a virtual module only available at runtime
    const { getCollection } = await import('./_astro_content_CZ_GIco3.mjs');
    const skills = await getCollection('skills');
    // Only generate paths for skill-md type skills
    // Archive skills serve SKILL.md embedded within the .tar.gz archive
    return skills
        .filter((skill) => skill.data.type === 'skill-md')
        .map((skill) => ({
        params: { skill: skill.id },
    }));
};
/**
 * GET /.well-known/agent-skills/[skill]/SKILL.md
 *
 * Serves the SKILL.md file for a skill per the Agent Skills Discovery RFC v0.2.0.
 *
 * @see https://github.com/cloudflare/agent-skills-discovery-rfc
 */
const GET = async ({ params }) => {
    const { skill } = params;
    if (!skill) {
        return new Response('Skill name is required', {
            status: 400,
            headers: { 'Content-Type': 'text/plain' },
        });
    }
    // Dynamic import of virtual module - resolved at runtime by Astro
    // @ts-expect-error - astro:content is a virtual module only available at runtime
    const { getEntry } = await import('./_astro_content_CZ_GIco3.mjs');
    // Get the skill from the content collection
    const skillEntry = (await getEntry('skills', skill));
    if (!skillEntry) {
        return new Response(`Skill "${skill}" not found`, {
            status: 404,
            headers: { 'Content-Type': 'text/plain' },
        });
    }
    return new Response(skillEntry.data.skillMdRaw, {
        status: 200,
        headers: {
            'Content-Type': 'text/markdown',
            'Cache-Control': 'public, max-age=3600',
        },
    });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
