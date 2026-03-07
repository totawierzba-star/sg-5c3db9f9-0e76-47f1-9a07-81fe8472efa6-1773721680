import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  canonical?: string;
  schema?: string; // JSON-LD structured data
}

// SEO elements that can be used in _document.tsx (returns JSX without Head wrapper)
export function SEOElements({
  title = "Hello World",
  description = "Welcome to my app",
  image,
  url,
  canonical,
  schema,
}: SEOProps) {
  const siteUrl = "https://problemlot.com";
  
  // Use dynamic OG image if no specific image is provided
  const ogImageUrl = image || `${siteUrl}/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description.slice(0, 100))}`;
  
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Schema.org JSON-LD */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      )}

      {/* Viewport and mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}

// SEO component for use in pages/_app.tsx or individual pages (uses next/head)
export function SEO({ title, description, image, url, schema }: SEOProps) {
  const siteTitle = "Problemlot.com";
  const defaultDescription = "Odszkodowania za opóźnione i odwołane loty";
  const siteUrl = "https://problemlot.com";
  
  const finalTitle = title || siteTitle;
  const finalDesc = description || defaultDescription;
  
  // Use dynamic OG image if no specific image is provided
  const ogImageUrl = image || `${siteUrl}/api/og?title=${encodeURIComponent(finalTitle)}&desc=${encodeURIComponent(finalDesc.slice(0, 100))}`;

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="icon" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={ogImageUrl} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={ogImageUrl} />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      )}
    </Head>
  );
}
