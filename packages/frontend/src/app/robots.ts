import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

/**
 * Generates robots.txt for SEO.
 * Next.js serves this at /robots.txt
 *
 * Controls which paths search engine crawlers can access.
 * Update rules when you add admin, API, or private routes.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'], // Disallow API routes from indexing
      },
      // Example: stricter rules for specific bots
      // {
      //   userAgent: 'Googlebot',
      //   allow: '/',
      //   disallow: ['/api/', '/auth/'],
      // },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
