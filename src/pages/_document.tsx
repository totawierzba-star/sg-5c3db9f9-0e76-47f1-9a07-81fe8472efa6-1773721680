import { cn } from "@/lib/utils";
import Document, {
  type DocumentContext,
  type DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

type ProblemLotDocumentProps = DocumentInitialProps & {
  lang: string;
};

const languageByPrefix: Record<string, string> = {
  bg: "bg",
  cs: "cs",
  el: "el",
  en: "en",
  hi: "hi",
  hu: "hu",
  it: "it",
  lt: "lt",
  lv: "lv",
  no: "no",
  sk: "sk",
  sr: "sr",
  sv: "sv",
  tr: "tr",
  vi: "vi",
  zh: "zh",
};

function resolveHtmlLang(pathname?: string) {
  const prefix = (pathname || "").split("/").filter(Boolean)[0];

  return languageByPrefix[prefix] || "pl";
}

export default class ProblemLotDocument extends Document<ProblemLotDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<ProblemLotDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      lang: resolveHtmlLang(ctx.pathname),
    };
  }

  render() {
    const faviconVersion = "20260411";

    return (
      <Html lang={this.props.lang}>
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
        {/* Consent Mode defaults and guarded GTM loader */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d){
  var GTM_ID = 'GTM-KD4RSD4F';
  var CONSENT_KEY = 'problemlot_consent_v1';
  w.dataLayer = w.dataLayer || [];
  function gtag(){w.dataLayer.push(arguments);}
  w.gtag = w.gtag || gtag;
  w.gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });
  w.gtag('set', 'ads_data_redaction', true);
  w.gtag('set', 'url_passthrough', false);
  w.__loadProblemLotGtm = function(){
    if (w.__problemLotGtmLoaded) return;
    w.__problemLotGtmLoaded = true;
    w.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
    var firstScript = d.getElementsByTagName('script')[0];
    var tag = d.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    firstScript.parentNode.insertBefore(tag, firstScript);
  };
  try {
    var savedConsent = JSON.parse(w.localStorage.getItem(CONSENT_KEY) || 'null');
    if (savedConsent && savedConsent.status === 'accepted') {
      w.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        functionality_storage: 'granted',
        security_storage: 'granted'
      });
      w.gtag('set', 'ads_data_redaction', false);
      w.dataLayer.push({event: 'problemlot_consent_granted', consent_source: 'stored'});
      w.__loadProblemLotGtm();
    } else if (savedConsent && savedConsent.status === 'rejected') {
      w.dataLayer.push({event: 'problemlot_consent_denied', consent_source: 'stored'});
    }
  } catch (error) {
    w.dataLayer.push({event: 'problemlot_consent_storage_error'});
  }
})(window,document);`
        }} />
        {/* End Consent Mode defaults and guarded GTM loader */}
        
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
}
