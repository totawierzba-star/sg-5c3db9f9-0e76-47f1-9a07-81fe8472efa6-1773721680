import { Html, Head, Main, NextScript } from "next/document";
import { SEOElements } from "@/components/SEO";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <SEOElements 
          title="Opóźniony lub odwołany lot – sprawdź odszkodowanie do 600 €"
          description="Masz problem z lotem? Sprawdź, czy przysługuje Ci nawet 600 € odszkodowania za opóźniony lub odwołany lot."
          url="https://problemlot.com"
        />
        <link rel="canonical" href="https://problemlot.com" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
