import Head from "next/head";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  canonicalUrl?: string;
  locale?: string;
  language?: string;
}

const defaultTitle = "problemlot.com - Odszkodowanie za opóźniony i odwołany lot";
const defaultDescription =
  "Praktyczny serwis o prawach pasażerów lotniczych, odszkodowaniach za opóźnione i odwołane loty oraz zasadach EU261 i UK261.";
const defaultImage = "https://problemlot.com/og-image.png";
const siteUrl = "https://problemlot.com";

export const SEOElements = ({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  url = siteUrl,
  type = "website",
  noindex = false,
  canonicalUrl,
  locale = "pl_PL",
  language = "Polish",
}: SEOProps = {}) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    {noindex && <meta name="robots" content="noindex,nofollow" />}
    
    {/* Open Graph */}
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:site_name" content="problemlot.com" />
    <meta property="og:locale" content={locale} />
    
    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    
    {/* Additional SEO */}
    <meta name="language" content={language} />
    <meta name="author" content="problemlot.com" />
  </>
);

export function SEO(props: SEOProps) {
  return (
    <Head>
      <SEOElements {...props} />
    </Head>
  );
}
