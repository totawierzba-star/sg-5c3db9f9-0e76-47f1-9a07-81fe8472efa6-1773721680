import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/letisko-dublin-dub-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=dub_airport";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=dub_airport";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=dub_airport";

const faqItems = [
  {
    question: "Mám pri Dubline (DUB) nárok na odškodnenie podľa EU261?",
    answer:
      "Áno. Írsko je plným členom EÚ, takže EU261 platí pri odlete z DUB aj pri prílete z tretích krajín s EÚ aerolinkou. Sumy 250 / 400 / 600 €.",
  },
  {
    question: "Akí dopravcovia lietajú z DUB?",
    answer:
      "Ryanair (najväčší hub v sieti), Aer Lingus (hlavný írsky dopravca), Lufthansa, Air France, British Airways, American Airlines, Delta, United. DUB má tzv. US Preclearance – pasovú kontrolu USA priamo v Írsku.",
  },
  {
    question: "Koľko dostanem za meškanie z DUB?",
    answer:
      "250 € pri krátkych trasách do 1 500 km, 400 € pri stredných, 600 € pri transatlantike (DUB – New York, DUB – Los Angeles, DUB – Boston).",
  },
  {
    question: "Ryanair v DUB a EU261 – sú rovnaké pravidlá?",
    answer:
      "Áno. Ryanair DAC má írsky AOC a plne podlieha EU261 pri všetkých letoch z EÚ letísk. Reklamácie cez oficiálny online formulár.",
  },
  {
    question: "Írsky regulátor?",
    answer:
      "IAA (Irish Aviation Authority). Po Brexite zohráva zvýšenú úlohu pre spoluprácu s britskou CAA.",
  },
  {
    question: "Aer Lingus je v OneWorld alebo IAG?",
    answer:
      "Aer Lingus je súčasť IAG (International Airlines Group) spolu s Iberia, British Airways a Vueling. Členstvo OneWorld je plánované. Kompenzácie sa však riešia individuálne u každej aerolinky.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoDublinDubMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Dublin (DUB): meškania a odškodnenie EU261"
        description="Meškanie alebo zrušenie letu na letisku Dublin? Prehľad nárokov podľa EU261, typických dopravcov a postupu reklamácie pre slovenských cestujúcich."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Letisko Dublin (DUB): meškania a odškodnenie",
            description:
              "Sprievodca EU261 nárokom pri meškaní alebo zrušení letu na Dublin Airport.",
            mainEntityOfPage: articleUrl,
            datePublished: "2026-04-24",
            dateModified: "2026-04-24",
            author: { "@type": "Organization", name: "problemlot.com" },
            publisher: {
              "@type": "Organization",
              name: "problemlot.com",
              logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" },
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
              acceptedAnswer: { "@type": "Answer", text: item.answer },
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
              { "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" },
              { "@type": "ListItem", position: 3, name: "Letisko Dublin", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Letisko Dublin (DUB)</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Letisko · DUB · Dublin Airport
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Dublin (DUB): meškania a odškodnenie EU261
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Dublin Airport (IATA <strong>DUB</strong>) je domov <strong>Ryanair</strong> aj{" "}
              <strong>Aer Lingus</strong>. Írsko je plným členom EÚ – EU261 pri odlete z DUB platí
              v plnom rozsahu. Dublin je tiež jedným z mála EÚ letísk s <strong>US Preclearance</strong>{" "}
              – pasovou kontrolou USA priamo v Írsku, čo zrýchľuje vstup do USA. Preverte nárok cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_dub_intro", delayedFlightHref)}
              >
                ClaimWinger
              </a>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 24. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 7 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white shadow-xl dark:border-emerald-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-emerald-50">
                <p>DUB = EÚ letisko, plne EU261. Sumy 250 / 400 / 600 €.</p>
                <p>Hub Ryanair a Aer Lingus. US Preclearance skracuje tranzit do USA.</p>
                <p>Regulátor: Irish Aviation Authority (IAA).</p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Problém s letom cez Dublin?"
            description="Ryanair, Aer Lingus, transatlantický prestup s Delta alebo United. ClaimWinger rieši všetky aerolinky na DUB."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=dub_airport"
            ctaLabel="Preveriť DUB prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_dub_airport_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kompenzačné pásma pri letoch z/do DUB
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">250 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  DUB – Londýn, DUB – Paríž, DUB – Amsterdam. Pod 1 500 km.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">400 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  DUB – Viedeň (~1 600 km), DUB – Bratislava, DUB – Istanbul. Nad 1 500 km.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">600 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  DUB – New York (JFK/EWR), DUB – Boston, DUB – Los Angeles, DUB – Orlando.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Ryanair hub a mnoho reklamácií
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Dublin je najväčší Ryanair hub v Európe. ClaimWinger má dlhoročnú skúsenosť s
                Ryanair customer care a eskaláciou cez írsku IAA.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_dub_final_primary", delayedFlightHref)}
                  >
                    Preveriť DUB meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_dub_final_secondary", cancelledFlightHref)}
                  >
                    Zrušený DUB let
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
                  Ryanair problémy a práva
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ryanair je hlavný dopravca v DUB.
                </p>
                <Link
                  href="/sk/blog/ryanair-problemy-prawa"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Bratislava – Dublin zrušený let
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Linka Bratislava – Dublin je populárna medzi SK cestujúcimi.
                </p>
                <Link
                  href="/sk/blog/bratislava-dublin-zruseny-let"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Reklamácia Ryanair krok za krokom
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Podrobný postup pre Ryanair EU261.
                </p>
                <Link
                  href="/sk/blog/ako-podat-reklamaciu-ryanair-krok-za-krokom"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
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
