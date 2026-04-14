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
const siteUrl = "https://problemlot.com";

function resolveSiteOrigin(...candidates: Array<string | undefined>) {
  for (const candidate of candidates) {
    if (!candidate) {
      continue;
    }

    try {
      return new URL(candidate).origin;
    } catch {
      continue;
    }
  }

  return siteUrl;
}

function isLegacyOgImage(image?: string) {
  return Boolean(image && image.includes("/og-image.png"));
}

function buildOgImageUrl(origin: string, title: string, description: string) {
  const params = new URLSearchParams({
    title,
    desc: description,
    view: "site",
    v: "20260414",
  });

  return `${origin}/api/og?${params.toString()}`;
}

function resolveImageUrl({
  image,
  origin,
  title,
  description,
}: {
  image?: string;
  origin: string;
  title: string;
  description: string;
}) {
  if (!image || isLegacyOgImage(image)) {
    return buildOgImageUrl(origin, title, description);
  }

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  if (image.startsWith("/")) {
    return `${origin}${image}`;
  }

  return `${origin}/${image.replace(/^\/+/, "")}`;
}

export const SEOElements = ({
  title = defaultTitle,
  description = defaultDescription,
  image,
  url = siteUrl,
  type = "website",
  noindex = false,
  canonicalUrl,
  locale = "pl_PL",
  language = "Polish",
}: SEOProps = {}) => {
  const origin = resolveSiteOrigin(canonicalUrl, url);
  const resolvedImage = resolveImageUrl({
    image,
    origin,
    title,
    description,
  });

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} | problemlot.com`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="problemlot.com" />
      <meta property="og:locale" content={locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />
      <meta name="twitter:image:alt" content={`${title} | problemlot.com`} />

      {/* Additional SEO */}
      <meta name="language" content={language} />
      <meta name="author" content="problemlot.com" />
    </>
  );
};

export function SEO(props: SEOProps) {
  return (
    <Head>
      <SEOElements {...props} />
    </Head>
  );
}
