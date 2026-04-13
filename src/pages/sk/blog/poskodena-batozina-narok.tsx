import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock,
  FileText,
  ShieldAlert,
  Suitcase,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/poskodena-batozina-narok";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=damaged_baggage_claim";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=damaged_baggage_claim";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=damaged_baggage_claim";

const faqItems = [
  {
    question: "Mám nárok, ak mi aerolínka poškodila batožinu?",
    answer:
      "Áno, často áno. Your Europe uvádza, že pri poškodenej odbavenej batožine je aerolínka zodpovedná približne do výšky €1 300, pokiaľ škoda nevznikla pre vnútornú chybu samotnej batožiny.",
  },
  {
    question: "Do kedy musím nahlásiť poškodenú batožinu?",
    answer:
      "Pri poškodenej odbavenej batožine treba podať písomnú reklamáciu aerolinke čo najskôr a najneskôr do 7 dní od prevzatia batožiny.",
  },
  {
    question: "Stačí len povedať na letisku, že je kufor poškodený?",
    answer:
      "Nie. Ústne nahlásenie nestačí. Prakticky veľmi pomáha PIR alebo iný report na letisku, fotografie poškodenia a následná písomná reklamácia v lehote.",
  },
  {
    question: "Je poškodená batožina to isté ako kompenzácia za meškajúci let?",
    answer:
      "Nie. Ide o odlišný typ nároku než kompenzácia za meškanie alebo zrušenie letu podľa EU261.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function PoskodenaBatozinaNarokPage() {
  return (
    <LayoutSk>
      <SEO
        title="Poškodená batožina: mám nárok a čo robiť?"
        description="Čo robiť pri poškodenej batožine? Vysvetľujeme fotografie, PIR, lehotu 7 dní, približný limit €1 300 a čo býva pri reklamácii najdôležitejšie."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Poškodená batožina: mám nárok a čo robiť?",
            description:
              "Praktický návod, čo robiť pri poškodenej batožine, ako zbierať dôkazy a dokedy podať reklamáciu aerolinke.",
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
                name: "Poškodená batožina",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Poškodená batožina</span>
          </div>

          <header className="mb-10">
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Poškodená batožina: mám nárok a čo robiť?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pri poškodenej batožine rozhodujú najmä <strong>prvé minúty po prílete</strong>.
              Fotky, PIR, baggage tag a rýchla písomná reklamácia vedia urobiť obrovský rozdiel.
              Bez nich sa aj rozumný prípad zbytočne oslabí.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 13. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 8 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-teal-200 bg-gradient-to-br from-teal-600 to-cyan-700 p-8 text-white shadow-xl dark:border-teal-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-teal-50">
                <p>
                  Ak je odbavená batožina po prílete <strong>poškodená</strong>, nárok často existuje,
                  ale musíte konať rýchlo.
                </p>
                <p>
                  Your Europe uvádza približný limit zodpovednosti okolo <strong>€1 300</strong> a
                  zároveň zdôrazňuje, že pri poškodenej batožine treba podať písomnú reklamáciu do
                  <strong> 7 dní</strong> od prevzatia.
                </p>
                <p>
                  Ak chcete preveriť, ako oddeliť batožinový problém od samotného nároku za let,
                  môžete situáciu poslať cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_damaged_baggage_claim_quick_answer_home",
                        claimWingerHomeHref
                      )
                    }
                    className="font-semibold underline underline-offset-4"
                  >
                    ClaimWinger Slovensko
                  </a>
                  . ClaimWinger účtuje <strong>30 %</strong> bez ohľadu na to, či sa vec rieši
                  mimosúdne alebo súdne.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Máte poškodenú batožinu a zároveň problém s letom?"
            description="ClaimWinger vie pomôcť oddeliť nárok za samotný let od osobitnej vrstvy nároku za poškodenú batožinu a nasmerovať vás na správny ďalší krok."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=damaged_baggage_claim"
            ctaLabel="Preveriť prípad s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_damaged_baggage_claim_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Camera className="h-8 w-8 text-teal-600" />
              1. Zdokumentujte škodu hneď po prevzatí
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "fotografie poškodenia ešte na letisku alebo hneď po prevzatí",
                "detailné zábery praskliny, zlomeného kolieska, zipsu alebo rukoväte",
                "fotografia baggage tagu a samotného kufra",
                "boarding pass alebo iný dôkaz o lete",
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
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <ShieldAlert className="h-8 w-8 text-teal-600" />
              2. Urobte report ešte na letisku, ak sa dá
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ústne oznámenie nestačí. Prakticky veľmi pomáha <strong>PIR</strong> alebo iný
                  letiskový report, ktorý zachytí, že batožina bola poškodená už pri prevzatí.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak odídete bez akejkoľvek stopy a nahlásite škodu až neskôr bez fotiek a reportu,
                  aerolínka má oveľa viac priestoru tvrdiť, že kufor sa poškodil mimo jej kontroly.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Suitcase className="h-8 w-8 text-teal-600" />
              3. Pozor na termín 7 dní
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Your Europe uvádza, že pri poškodenej odbavenej batožine treba podať
                  <strong> písomnú reklamáciu do 7 dní od prevzatia</strong>.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To je iná lehota než pri meškanej batožine. Preto sa oplatí od začiatku vedieť,
                  či riešite <strong>poškodenie</strong> alebo <strong>oneskorené doručenie</strong>.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kedy býva spor najsilnejší
            </h2>
            <div className="grid gap-4">
              {[
                "škoda je viditeľná a zdokumentovaná hneď po prevzatí",
                "máte PIR alebo inú letiskovú stopu o poškodení",
                "máte baggage tag, boarding pass a fotografie",
                "reklamáciu pošlete písomne v lehote",
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
            <Card className="border-teal-200 bg-teal-50 p-8 dark:border-teal-800 dark:bg-teal-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si situáciu preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak je spolu s batožinou problém aj na strane letu, ClaimWinger vie pomôcť rozlíšiť,
                čo patrí do samostatného nároku za batožinu a čo už patrí do nároku za let.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_damaged_baggage_claim_final_cta_home",
                        claimWingerHomeHref
                      )
                    }
                  >
                    Preveriť prípad s ClaimWinger
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_damaged_baggage_claim_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Riešim meškajúci let
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_damaged_baggage_claim_final_cta_cancel",
                        cancelledFlightHref
                      )
                    }
                  >
                    Riešim zrušený let
                  </a>
                </Button>
              </div>
            </Card>
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
