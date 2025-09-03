import { useEffect, useState } from 'react';

const Sitemap = () => {
  const [sitemapContent, setSitemapContent] = useState<string>('');

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const response = await fetch('https://gmdkpupaogjslpyhhloz.supabase.co/functions/v1/sitemap');
        const xmlContent = await response.text();
        setSitemapContent(xmlContent);
        
        // Replace the page content with XML
        document.open();
        document.write(xmlContent);
        document.close();
      } catch (error) {
        console.error('Failed to fetch sitemap:', error);
      }
    };

    fetchSitemap();
  }, []);

  return (
    <div style={{ display: 'none' }}>
      <pre>{sitemapContent}</pre>
    </div>
  );
};

export default Sitemap;