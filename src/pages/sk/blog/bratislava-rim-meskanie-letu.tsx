import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/bratislava-rim-meskanie-letu";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_rome_delay";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_rome_delay";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_rome_delay";

const faqItems = [
  {
    question: "Mám pri lete Bratislava – Rím nárok na odškodnenie za meškanie?",
    answer:
      "Áno, ak ste do konečnej destinácie priletelí s meškaním 3 hodiny a viac. Trasa BTS – FCO/CIA (~750 km) spadá do pásma 250 €.",
  },
  {
    question: "Akí dopravcovia lietajú Bratislava – Rím?",
    answer:
      "Priamym letom Ryanair do Ciampino (CIA) alebo Fiumicino (FCO) sezónne. Alternatívou je prestup cez Viedeň (Austrian) alebo prestup cez iné mesto (Wizz Air, Ryanair).",
  },
  {
    question: "Koľko dostanem pri tejto trase?",
    answer:
      "250 € pri priamom lete (~750 km). Pri prestupe s konečnou destináciou inde ráta sa meškanie pri prílete do finálneho cieľa.",
  },
  {
    question: "Platí EU261 aj pre Ryanair Bratislava – Rím?",
    answer:
      "Áno, Ryanair DAC má írsky EÚ AOC. Pri odlete z Bratislavy platí plne EU261. Reklamácia cez oficiálny formulár na ryanair.com.",
  },
  {
    question: "Čo ak je let len sezónny?",
    answer:
      "Ryanair Bratislava – Rím býva sezónny (jar – jeseň). Pri zrušení sezónneho letu s oznámením viac ako 14 dní vopred kompenzácia nevzniká, ale máte nárok na plnú refundáciu.",
  },
  {
    question: "Najčastejšie dôvody meškania BTS – Rím?",
    answer:
      "Rotácia lietadla (nie mimoriadna okolnosť), preťaženie talianskeho vzdušného priestoru, štrajky v Taliansku. Pri štrajku vlastnej posádky aerolinky vzniká nárok, pri ATC štrajku nie.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function BratislavaRimMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO
        title="Bratislava – Rím meškanie letu: kedy vzniká nárok na 250 €"
        description="Meškal alebo zrušili vám let Bratislava – Rím? Prehľad nárokov EU261 pre túto trasu, typických dopravcov a postupu reklamácie."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bratislava – Rím meškanie letu",
            description:
              "EU261 kompenzácia pri meškaní alebo zrušení letu na trase Bratislava – Rím.",
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
              { "@type": "ListItem", position: 3, name: "Bratislava – Rím meškanie", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Bratislava – Rím meškanie letu</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              Trasa · BTS – FCO / CIA · 750 km
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Bratislava – Rím meškanie letu: kompenzácia 250 €
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Trasa Bratislava – Rím je obľúbená pre mestské víkendy aj pracovné cesty. Meškania
              a zrušenia sú na tejto trase (najmä Ryanair) relatívne časté – najmä v letnej sezóne
              a počas talianskych štrajkov. Pri meškaní 3+ hodín máte nárok na{" "}
              <strong>250 € kompenzácie podľa EU261</strong>. Overte si nárok cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_bts_rome_intro", delayedFlightHref)}
              >
                ClaimWinger Slovensko
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
            <Card className="border-amber-200 bg-gradient-to-br from-amber-600 to-orange-700 p-8 text-white shadow-xl dark:border-amber-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-amber-50">
                <p>Bratislava – Rím ≈ 750 km. Pod 1 500 km = <strong>250 €</strong>.</p>
                <p>
                  Podmienky: meškanie 3+ hodín pri prílete alebo zrušenie oznámené menej ako 14 dní
                  pred odletom.
                </p>
                <p>
                  Obvyklí dopravcovia: Ryanair priamo (sezónne), Austrian cez Viedeň, Wizz Air cez
                  Budapešť.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Meškal alebo zrušili vám Ryanair Bratislava – Rím?"
            description="ClaimWinger rieši Ryanair EU261 reklamácie so 90%+ úspešnosťou. Preverenie zdarma, provízia 30 % len pri úspechu."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=bts_rome_delay"
            ctaLabel="Preveriť BTS – Rím meškanie"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_bts_rome_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Scenáre pri trase Bratislava – Rím
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Priamy let Ryanair do Ciampino (CIA)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najbežnejšia kombinácia. Meškanie 3+ hodín = 250 €. Zrušenie menej ako 14 dní
                  vopred = tiež 250 €, ak nebolo zabezpečené primerané presmerovanie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Prestup cez Viedeň s Austrian
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Austrian operuje viac denných rotácií Viedeň – Rím. Ak je celá cesta na jednej
                  rezervácii, počíta sa meškanie pri prílete do Ríma. Kompenzácia stále 250 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Zmeškaný prestup kvôli meškaniu prvého letu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak prvý let zmeškal prestupy a do Ríma ste dorazili s 3+ hodinovým meškaním,
                  nárok vzniká. Aerolinka navyše musí zabezpečiť presmerovanie a v prípade potreby
                  ubytovanie.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete 250 € bez talianskej administratívy?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger preberie celú reklamáciu. Pri Ryanair EU261 formulári, pri Austrian cez
                Lufthansa Group systém. Provízia 30 % pri úspechu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_bts_rome_final_primary", delayedFlightHref)}
                  >
                    Preveriť meškanie BTS – Rím
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_bts_rome_final_secondary", cancelledFlightHref)}
                  >
                    Zrušený BTS – Rím let
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
                  Reklamácia Ryanair
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Kompletný návod pre Ryanair EU261.
                </p>
                <Link
                  href="/sk/blog/ako-podat-reklamaciu-ryanair-krok-za-krokom"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Viedeň – Rím meškanie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Alternatívna trasa z regiónu.
                </p>
                <Link
                  href="/sk/blog/vieden-rim-meskanie-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Letisko Rím FCO
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Špecifiká pri cieli.
                </p>
                <Link
                  href="/sk/blog/letisko-rim-fiumicino-fco-meskania"
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
