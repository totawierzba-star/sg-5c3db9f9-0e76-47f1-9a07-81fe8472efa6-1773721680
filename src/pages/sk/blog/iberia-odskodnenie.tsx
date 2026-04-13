import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/iberia-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=iberia_compensation";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=iberia_compensation";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=iberia_compensation";

const faqItems = [
  {
    question: "Mám pri lete Iberia nárok na odškodnenie?",
    answer:
      "Často áno, ak let patrí do rozsahu EU261, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
  },
  {
    question: "Je dôležité, že Iberia je aerolinka z EÚ?",
    answer:
      "Áno, často áno. Pri letoch Iberia späť do EÚ z tretích krajín môže byť fakt, že ide o európskeho dopravcu, veľmi dôležitý pre rozsah EU261. Pri odlete z EÚ je ochrana často zachovaná už samotným miestom odletu.",
  },
  {
    question: "Koľko môžem dostať od Iberie?",
    answer:
      "Pri kratších letoch ide často o 250 €, pri stredných o 400 € a pri dlhých letoch nad 3 500 km často o 600 €, ak sú splnené podmienky EU261 a nejde o mimoriadne okolnosti.",
  },
  {
    question: "Počíta sa meškanie v odlete alebo v príchode?",
    answer:
      "Pri kompenzácii sa kľúčovo sleduje meškanie pri príchode do konečnej destinácie, nie len to, o koľko neskôr lietadlo odletelo.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function IberiaOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Iberia odškodnenie: kedy vzniká nárok a koľko môžete dostať"
        description="Meškal vám, zrušili alebo výrazne presunuli let Iberia? Zistite, kedy vzniká nárok na odškodnenie, kedy ide o 250 €, 400 € alebo 600 € a čo pri EU261 rozhoduje."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Iberia odškodnenie: kedy vzniká nárok a koľko môžete dostať",
            description:
              "Praktický sprievodca pre cestujúcich pri problémoch s letom Iberia vrátane výšky nároku, pravidiel EU261 a významu európskeho dopravcu.",
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
                name: "Iberia odškodnenie",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Iberia odškodnenie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
              Airline content pre Iberia
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Iberia odškodnenie: kedy vzniká nárok?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak ste leteli s <strong>Iberia</strong> a nastal problém, odpoveď býva často priaznivá.
              Pri meškaní, zrušení alebo inom relevantnom narušení v rozsahu
              <strong> EU261</strong> môže vzniknúť nárok na kompenzáciu. Výsledná suma býva typicky
              <strong> 250 €</strong>, <strong>400 €</strong> alebo <strong>600 €</strong> podľa
              trasy a okolností prípadu.
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
            <Card className="border-rose-200 bg-gradient-to-br from-rose-600 to-red-700 p-8 text-white shadow-xl dark:border-rose-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-rose-50">
                <p>
                  <strong>Áno, často áno.</strong> Iberia je európska aerolinka, takže pri mnohých
                  letoch v rámci EÚ, z EÚ a aj pri časti letov späť do EÚ môže byť ochrana EU261
                  veľmi silná.
                </p>
                <p>
                  Pri kratších letoch býva typicky <strong>250 €</strong>, pri stredných
                  <strong> 400 €</strong> a pri dlhých letoch nad 3 500 km často
                  <strong> 600 €</strong>, ak sú splnené podmienky nariadenia.
                </p>
                <p>
                  Kľúčové je hlavne to, či let patrí do rozsahu EU261, aké bolo meškanie pri prílete
                  do konečnej destinácie a či Iberia naozaj vie preukázať mimoriadne okolnosti.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Riešite meškanie alebo zrušenie letu Iberia?"
            description="ClaimWinger vie rýchlo preveriť, či ide o silný nárok podľa EU261, alebo o zložitejší prípad, kde bude dôležitý operujúci dopravca, jedna rezervácia a výsledok v konečnej destinácii."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=iberia_compensation"
            ctaLabel="Preveriť nárok s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie nároku."
            placement="sk_blog_iberia_compensation_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Prečo je pri Iberii dôležité, že ide o dopravcu z EÚ
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lety z EÚ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri odlete z letiska v EÚ býva ochrana EU261 často zachovaná už samotným miestom
                  odletu, bez ohľadu na to, či ide o európskeho alebo neeurópskeho dopravcu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lety späť do EÚ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri letoch z tretích krajín späť do EÚ býva fakt, že Iberia je dopravca z EÚ,
                  často veľmi dôležitý pre to, či sa EU261 vôbec uplatní.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-8 w-8 text-rose-600" />
              Koľko môžete dostať
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-green-200 p-6 dark:border-green-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  250 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri kratších letoch, často do 1 500 km, ak sú splnené podmienky EU261.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  400 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri stredných trasách, typicky v rámci širšej európskej a regionálnej siete.
                </p>
              </Card>
              <Card className="border-blue-200 p-6 dark:border-blue-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  600 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri dlhých letoch nad 3 500 km, ak ide o silný prípad bez mimoriadnych okolností.
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
                "do konečnej destinácie ste prišli s meškaním aspoň 3 hodiny",
                "alebo bol let zrušený za podmienok, ktoré zakladajú nárok",
                "máte rezerváciu, číslo letu a komunikáciu od Iberie",
                "Iberia nevie presvedčivo doložiť mimoriadne okolnosti",
                "let bol samostatný úsek alebo súčasť jednej rezervácie",
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
              Čo pri Iberii najčastejšie komplikuje posúdenie
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Prestup cez Madrid alebo Barcelonu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Iberii býva veľmi častý scenár, že Madrid alebo Barcelona sú len prestupné
                  body. V takom prípade môže byť rozhodujúca až konečná destinácia celej rezervácie,
                  nie len samotný prílet do Španielska.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Long-haul sieť do Latinskej Ameriky
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Iberii sa často riešia aj diaľkové trasy do Latinskej Ameriky. Práve tam vie
                  byť dôležité, že ide o dopravcu z EÚ, najmä pri návrate z tretích krajín späť do
                  Únie.
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
                Oficiálne pravidlá EÚ hovoria, že pri meškaní 3 hodiny a viac v konečnej destinácii
                alebo pri relevantnom zrušení letu môže vzniknúť nárok na kompenzáciu, ak nejde o
                mimoriadne okolnosti.
              </p>
              <p>
                Pri Iberii je navyše dôležité rozumieť tomu, že ide o európskeho dopravcu. To býva
                mimoriadne praktické pri letoch späť do EÚ z tretích krajín a pri častých
                prestupových itinerároch cez Madrid alebo Barcelonu.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri Iberii má veľký zmysel rýchlo oddeliť silný prípad 250 €, 400 € alebo 600 € od
                zložitejšej situácie s prestupom cez Španielsko, partnerom, letom v zdieľanom kóde
                alebo tvrdenými mimoriadnymi okolnosťami.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_iberia_compensation_final_cta_delay", delayedFlightHref)
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
                        "sk_iberia_compensation_final_cta_cancelled",
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
                    trackClaimClick("sk_iberia_compensation_related_home", claimWingerHomeHref)
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
                  Ak Iberia bola len časťou jednej cesty a problém sa prejavil ďalej v itinerári.
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
                  Viedeň – Madrid zrušený let
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak riešite užší trasovo špecifický kontext spojený so Španielskom.
                </p>
                <Link
                  href="/sk/blog/vieden-madrid-zruseny-let"
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
