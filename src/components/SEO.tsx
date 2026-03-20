import Head from "next/head";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  canonicalUrl?: string;
}

const defaultTitle = "bizneslot.info - Prawa pasażerów w podróżach służbowych";
const defaultDescription = "Ekspertowy portal o prawach pasażerów lotniczych w delegacjach i podróżach służbowych. Dowiedz się, kiedy przysługuje Ci odszkodowanie za lot firmowy.";
const defaultImage = "https://bizneslot.info/og-image.png";
const siteUrl = "https://bizneslot.info";

export const SEOElements = ({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  url = siteUrl,
  type = "website",
  noindex = false,
  canonicalUrl,
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
    <meta property="og:site_name" content="bizneslot.info" />
    <meta property="og:locale" content="pl_PL" />
    
    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    
    {/* Additional SEO */}
    <meta name="language" content="Polish" />
    <meta name="author" content="bizneslot.info" />
  </>
);

export function SEO(props: SEOProps) {
  return (
    <Head>
      <SEOElements {...props} />
    </Head>
  );
}
