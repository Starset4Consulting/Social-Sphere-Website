import { writeFileSync } from 'fs';
import { format } from 'date-fns';

const domain = 'https://socialsphere.in';


const pages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/web-development', priority: 0.9, changefreq: 'monthly' },
  { url: '/services/seo', priority: 0.9, changefreq: 'monthly' },
  { url: '/services/social-media', priority: 0.9, changefreq: 'monthly' },
  { url: '/services/multimedia', priority: 0.9, changefreq: 'monthly' },
  { url: '/services/strategy', priority: 0.9, changefreq: 'monthly' },
  { url: '/services/Political', priority: 0.9, changefreq: 'monthly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${domain}${page.url}</loc>
      <lastmod>${format(new Date(), 'yyyy-MM-dd')}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  writeFileSync('public/sitemap.xml', sitemap);
};

export default generateSitemap; 