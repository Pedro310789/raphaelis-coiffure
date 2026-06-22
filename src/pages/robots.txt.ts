import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  // VERCEL=1 is auto-injected on every Vercel build regardless of environment setting.
  // Production will be on Hostinger where this variable won't exist.
  const blockCrawlers = import.meta.env.VERCEL === '1';

  const content = blockCrawlers
    ? `User-agent: *\nDisallow: /`
    : `User-agent: *\nAllow: /\nSitemap: https://raphaeliscoiffure.be/sitemap-index.xml`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
