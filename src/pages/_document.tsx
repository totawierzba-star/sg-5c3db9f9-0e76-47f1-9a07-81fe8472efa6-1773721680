import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { SEOElements } from "@/components/SEO";

class MyDocument extends Document<{ lang: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const path = ctx.asPath || ctx.pathname || "";
    
    let lang = "pl"; // Domyślny polski
    if (path.startsWith("/hi")) lang = "hi";
    else if (path.startsWith("/cs")) lang = "cs";
    else if (path.startsWith("/sk")) lang = "sk";
    else if (path.startsWith("/it")) lang = "it";
    else if (path.startsWith("/zh")) lang = "zh";
    else if (path.startsWith("/en")) lang = "en";
    
    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          {/* Favicon */}
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="alternate icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          
          {/* PWA Meta Tags */}
          <meta name="theme-color" content="#1e40af" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          
          {/* Google Search Console Verification */}
          <meta name="google-site-verification" content="DPV_dIXtVkWNE_tb-yvnEz2pTSn_JUs4WgVzj2jTKsE" />
          
          <SEOElements
            title="ProblemLot.pl – Odszkodowanie za opóźniony lub odwołany lot"
            description="Specjalizujemy się w sprawach odszkodowań lotniczych. Zajmujemy się całą dokumentacją, negocjacjami z linią lotniczą i ewentualnymi procedurami sądowymi."
            image="https://problemlot.com/og-image.png"
            url="https://problemlot.com"
          />
          
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KD4RSD4F');`,
            }}
          />
          {/* End Google Tag Manager */}
        </Head>
        <body className="antialiased">
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KD4RSD4F"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;