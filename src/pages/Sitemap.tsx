import { useEffect } from 'react';

const Sitemap = () => {
  useEffect(() => {
    // Set proper headers for XML response
    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cbntrust.org/</loc>
    <lastmod>2025-09-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://cbntrust.org/about</loc>
    <lastmod>2025-09-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cbntrust.org/our-work</loc>
    <lastmod>2025-09-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://cbntrust.org/events</loc>
    <lastmod>2025-09-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cbntrust.org/gallery</loc>
    <lastmod>2025-09-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://cbntrust.org/news</loc>
    <lastmod>2025-09-03</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cbntrust.org/contact</loc>
    <lastmod>2025-09-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

    // Replace page content with XML
    document.open();
    document.write(sitemapXML);
    document.close();
  }, []);

  return null;
};

export default Sitemap;