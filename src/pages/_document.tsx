import { cn } from "@/lib/utils";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const faviconVersion = "20260411";

  return (
    <Html lang="pl">
      <Head>
        <meta name="application-name" content="ProblemLot" />
        <meta name="apple-mobile-web-app-title" content="ProblemLot" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content={`/browserconfig.xml?v=${faviconVersion}`} />
        <link rel="icon" href={`/favicon-32x32.png?v=${faviconVersion}`} sizes="32x32" type="image/png" />
        <link rel="icon" href={`/favicon-16x16.png?v=${faviconVersion}`} sizes="16x16" type="image/png" />
        <link rel="shortcut icon" href={`/favicon.ico?v=${faviconVersion}`} />
        <link rel="apple-touch-icon" href={`/apple-touch-icon.png?v=${faviconVersion}`} sizes="180x180" />
        <link rel="mask-icon" href={`/safari-pinned-tab.svg?v=${faviconVersion}`} color="#2563eb" />
        <link rel="manifest" href={`/site.webmanifest?v=${faviconVersion}`} />
        <meta
          name="google-site-verification"
          content="DPV_dIXtVkWNE_tb-yvnEz2pTSn_JUs4WgVzj2jTKsE"
        />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KD4RSD4F');`
        }} />
        {/* End Google Tag Manager */}
        
        {/*
          CRITICAL: DO NOT REMOVE THIS SCRIPT
          The Softgen AI monitoring script is essential for core app functionality.
          The application will not function without it.
        */}
        <script
          src="https://cdn.softgen.ai/script.js"
          async
          data-softgen-monitoring="true"
        />
      </Head>
      <body
        className={cn(
          "min-h-screen w-full scroll-smooth bg-background text-foreground antialiased"
        )}
      >
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

        {/* Visual Editor Script */}
        {process.env.NODE_ENV === "development" && (
          <script
            src="https://cdn.softgen.dev/visual-editor.min.js"
            async
            data-softgen-visual-editor="true"
          />
        )}
      </body>
    </Html>
  );
}
