import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/pegasus-airlines-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=pegasus_airlines_compensation";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=pegasus_airlines_compensation";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=pegasus_airlines_compensation";

const faqItems = [
  {
    question: "Mám pri lete Pegasus Airlines nárok na odškodnenie?",
    answer:
      "Často áno, ale pri Pegasus Airlines je najprv dôležité určiť, či sa na váš let vôbec uplatní pravidlo 261/2004. Pri letoch z EÚ býva nárok často relevantný. Pri letoch mimo EÚ samotná značka Pegasus zvyčajne nestačí.",
  },
  {
    question: "Je dôležité, že Pegasus Airlines nie je dopravca z EÚ?",
    answer:
      "Áno. Pri Pegasus Airlines je preto veľmi dôležité miesto odletu, operujúci dopravca a štruktúra celej cesty. Pri odlete z EÚ býva ochrana často zachovaná. Pri iných trasách je posúdenie oveľa citlivejšie.",
  },
  {
    question: "Koľko môžem dostať od Pegasus Airlines?",
    answer:
      "Ak sa na let uplatní 261/2004, typické pásma bývajú 250 €, 400 € alebo 600 € podľa trasy a okolností. Najprv však treba overiť, či daný let vôbec patrí do rozsahu pravidiel.",
  },
  {
    question: "Počíta sa meškanie pri odlete alebo pri prílete?",
    answer:
      "Pri kompenzácii sa kľúčovo sleduje meškanie pri príchode do konečnej destinácie, nie len samotné meškanie odletu.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function PegasusAirlinesOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Pegasus Airlines odškodnenie: kedy vzniká nárok pri letoch z EÚ"
        description="Meškal vám, zrušili alebo výrazne presunuli let Pegasus Airlines? Zistite, kedy vzniká nárok, prečo je pri Pegasuse kľúčový odlet z EÚ a čo pri claimoch rozhoduje."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Pegasus Airlines odškodnenie: kedy vzniká nárok pri letoch z EÚ",
            description:
              "Praktický sprievodca pre cestujúcich pri problémoch s letom Pegasus Airlines vrátane rozsahu pravidiel 261/2004, významu odletu z EÚ a najčastejších komplikácií pri trasách cez Istanbul a Sabiha Gokcen.",
            mainEntityOfPage: articleUrl,
            datePublished: "2026-04-13",
            dateModified: "2026-04-13",
            author: {
              "@type": "Organization",
              name: "problemlot.com",
            },
            publisher: {
              "@type": "Organization",
              name: "problemlot.com",
              logo: {
                "@type": "ImageObject",
                url: "https://problemlot.com/og-image.png",
              },
            },
            image: "https://problemlot.com/og-image.png",
            inLanguage: "sk-SK",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Domov",
                item: "https://problemlot.com/sk",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://problemlot.com/sk/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Pegasus Airlines odškodnenie",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">
              Domov
            </Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <span>/</span>
            <span>Pegasus Airlines odškodnenie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
              Airline content pre Pegasus Airlines
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Pegasus Airlines odškodnenie: kedy vzniká nárok?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak ste leteli s <strong>Pegasus Airlines</strong> a nastal problém, odpoveď môže byť
              priaznivá, ale pri tejto aerolinke je kľúčové hlavne to, <strong>odkiaľ let odlietol</strong>.
              Pegasus nie je dopravca z EÚ, takže pri nároku podľa pravidiel
              <strong> 261/2004</strong> býva mimoriadne dôležité najmä to, či let štartoval z EÚ
              a ako bola postavená celá cesta.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 13. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 10 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-orange-200 bg-gradient-to-br from-orange-600 to-amber-700 p-8 text-white shadow-xl dark:border-orange-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-orange-50">
                <p>
                  <strong>Áno, často áno.</strong> Pri Pegasus Airlines však nie je hlavná otázka len
                  to, či let meškal alebo bol zrušený. Kľúčové je aj to, či sa na let vôbec uplatnia
                  pravidlá <strong>261/2004</strong>.
                </p>
                <p>
                  Pri letoch z EÚ býva ochrana často silná aj pri Pegasus Airlines. Pri letoch mimo
                  EÚ je posúdenie oveľa citlivejšie a samotná značka dopravcu nestačí.
                </p>
                <p>
                  Kľúčové býva hlavne miesto odletu, operujúci dopravca, konečná destinácia a to,
                  či išlo o jednu rezerváciu alebo komplikovanejší prestup cez Istanbul.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Riešite meškanie alebo zrušenie letu Pegasus Airlines?"
            description="ClaimWinger vie rýchlo preveriť, či je váš prípad vôbec v rozsahu pravidiel 261/2004 a či ide o silný nárok, alebo o trasu, kde bude rozhodovať odlet z EÚ, operujúci dopravca a výsledok v konečnej destinácii."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=pegasus_airlines_compensation"
            ctaLabel="Preveriť nárok s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie nároku."
            placement="sk_blog_pegasus_airlines_compensation_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Pri Pegasus Airlines je kľúčový odlet z EÚ
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lety z EÚ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak Pegasus odlieta z letiska v EÚ, veľmi často bude nárok podľa 261/2004
                  relevantný aj napriek tomu, že nejde o dopravcu z EÚ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lety mimo EÚ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri letoch, ktoré nezačínajú v EÚ, býva situácia citlivejšia a nie je rozumné
                  predpokladať nárok len preto, že išlo o známeho dopravcu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Istanbul a Sabiha Gokcen
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Pegasus Airlines bývajú veľmi časté prestupy cez Istanbul a najmä letisko
                  Sabiha Gokcen, takže treba presne čítať celú cestu a konečnú destináciu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-8 w-8 text-orange-600" />
              Koľko môžete dostať
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-orange-200 p-6 dark:border-orange-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Ak sa pravidlá uplatnia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najčastejšie sa pracuje s pásmami <strong>250 €</strong>, <strong>400 €</strong>
                  a <strong>600 €</strong> podľa vzdialenosti a okolností.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Najprv však treba overiť rozsah
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Pegasus Airlines nie je najťažšia časť len výška nároku, ale už samotné
                  správne určenie, či je let v rozsahu 261/2004.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy býva nárok najsilnejší
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "let odlietal z EÚ",
                "do konečnej destinácie ste prišli s meškaním aspoň 3 hodiny",
                "alebo bol let zrušený za podmienok, ktoré zakladajú nárok",
                "máte rezerváciu, číslo letu a komunikáciu od Pegasus Airlines",
                "je jasné, kto bol operujúci dopravca a čo bola konečná destinácia",
                "na let ste sa dostavili riadne a včas",
              ].map((item) => (
                <Card key={item} className="border-slate-200 p-4 dark:border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo pri Pegasus Airlines najčastejšie komplikuje posúdenie
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Ne-EÚ dopravca
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Práve tento detail býva najčastejším zdrojom zmätku. Namiesto rýchleho predpokladu
                  treba presne overiť, či let spĺňa podmienky pravidiel 261/2004.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Prestupy cez Sabiha Gokcen
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Pegasuse bývajú časté prestupy cez Istanbul a Sabiha Gokcen. V takom prípade
                  môže byť rozhodujúca až konečná destinácia celej rezervácie, nie len prvý úsek.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie každé tvrdenie o počasí, riadení letovej prevádzky alebo bezpečnostnom probléme
                  automaticky vylučuje nárok. Dôležité je, či ho dopravca vie skutočne preukázať.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo hovoria oficiálne zdroje EÚ
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Oficiálne zdroje EÚ hovoria, že pravidlá sa vzťahujú na lety odlétajúce z EÚ aj vtedy,
                keď ich operuje dopravca mimo EÚ. To je pri Pegasus Airlines zásadné.
              </p>
              <p>
                Pri Pegasuse je preto dôležité nevyhodnocovať prípad len podľa značky dopravcu.
                V praxi často rozhoduje najmä odlet z EÚ a štruktúra celej cesty.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-orange-200 bg-orange-50 p-8 dark:border-orange-800 dark:bg-orange-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri Pegasus Airlines má veľký zmysel rýchlo oddeliť silný prípad od zložitejšej
                situácie s odletom mimo EÚ, prestupom cez Istanbul, partnerom, zdieľaným kódom alebo
                tvrdenými mimoriadnymi okolnosťami.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_pegasus_airlines_compensation_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Preveriť meškajúci let
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_pegasus_airlines_compensation_final_cta_cancelled",
                        cancelledFlightHref
                      )
                    }
                  >
                    Riešim skôr zrušený let
                  </a>
                </Button>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Súvisiace články
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete prípad preveriť prakticky podľa konkrétnych okolností letu.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_pegasus_airlines_compensation_related_home",
                      claimWingerHomeHref
                    )
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Môžem žiadať odškodnenie pri prestupe?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak Pegasus bol len časťou jednej cesty a problém sa prejavil ďalej v itinerári.
                </p>
                <Link
                  href="/sk/blog/plati-odskodnenie-pri-prestupe"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o prestupe
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Viedeň – Istanbul meškanie letu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak riešite užší trasovo špecifický kontext letu medzi EÚ a Tureckom.
                </p>
                <Link
                  href="/sk/blog/vieden-istanbul-meskanie-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na route článok
                </Link>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Často kladené otázky
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-slate-900 dark:text-white">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </article>
    </LayoutSk>
  );
}
