import Head from "next/head";

type ViSeoHeadProps = {
  canonicalUrl: string;
};

export function ViSeoHead({ canonicalUrl }: ViSeoHeadProps) {
  return (
    <Head>
      <meta
        name="robots"
        content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      />
      <link rel="alternate" hrefLang="vi" href={canonicalUrl} />
      <link rel="alternate" hrefLang="vi-VN" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Head>
  );
}
