import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: string;
  schema?: object;
}

export function SEO({ 
  title, 
  description, 
  keywords,
  canonicalUrl = 'https://socialsphere.in', 
  ogImage = 'https://starset4consulting.github.io/Social-clients/image6.png',
  type = 'website',
  schema

}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Technical SEO */}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Social Sphere" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@socialsphere" />
      <meta name="twitter:creator" content="@socialsphere" />
      
      {/* Location */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.385044;78.486671" />
      <meta name="ICBM" content="17.385044, 78.486671" />
      
      {/* Language */}
      <meta property="og:locale" content="en_IN" />
      <link rel="alternate" href={canonicalUrl} hrefLang="en-in" />
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
} 