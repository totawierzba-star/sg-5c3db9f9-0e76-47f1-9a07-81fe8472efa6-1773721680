import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Layers3,
  PlaneLanding,
  Workflow,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/batozina-a-prestup-kombinovane-naroky";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=baggage_connection_combined_claims";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=baggage_connection_combined_claims";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=baggage_connection_combined_claims";

const faqItems = [
  {
    question: "Môžem mať pri prestupe nárok za let aj za batožinu naraz?",
    answer:
      "Áno. Problém so samotným letom a problém s batožinou sú dve odlišné vrstvy. Pri jednej ceste sa môžu stretnúť naraz, ale neposudzujú sa rovnako a nemajú rovnaké lehoty ani dôkazy.",
  },
  {
    question: "Je stratená alebo meškajúca batožina to isté ako kompenzácia za zmeškaný prestup?",
    answer:
      "Nie. Kompenzácia za let sa pri prestupe typicky pozerá na konečnú destináciu, jednu rezerváciu a pravidlá EU261. Batožina ide samostatnou cestou a opiera sa o PIR, sledovanie batožiny a písomnú reklamáciu pri stratenej, poškodenej alebo oneskorene doručenej batožine.",
  },
  {
    question: "Čo mám riešiť ako prvé, keď sa pokazil prestup aj batožina?",
    answer:
      "Najprv treba stabilizovať samotnú cestu: presmerovanie, novú letenku alebo návrat. Hneď popri tom však treba nahlásiť problém s batožinou na letisku, vyžiadať si PIR a odložiť si všetky doklady. Obe línie sa majú riešiť paralelne, nie zmiešane v jednej nejasnej reklamácii.",
  },
  {
    question: "Pomáha jedna rezervácia aj pri batožine a prestupe?",
    answer:
      "Áno, z praktického hľadiska veľmi. Pri lete je jedna rezervácia často kľúčová pre EU261. Pri batožine zase pomáha pochopiť celý reťazec segmentov a uľahčuje sledovanie batožiny, hoci batožinový nárok sa právne neposudzuje rovnako ako letová kompenzácia.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function BatozinaAPrestupKombinovaneNarokyPage() {
  return (
    <LayoutSk>
      <SEO
        title="Batožina + prestup: ako fungujú kombinované nároky?"
        description="Čo ak sa pokazí prestup aj batožina naraz? Vysvetľujeme rozdiel medzi nárokom za let a za batožinu, jednu rezerváciu, PIR a ako tieto dve vrstvy riešiť bez chaosu."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Batožina + prestup: ako fungujú kombinované nároky?",
            description:
              "Praktický návod pre situáciu, keď sa pokazí prestup aj batožina naraz, vrátane rozdielu medzi nárokom za let a nárokom za batožinu.",
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
                name: "Batožina + prestup",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Batožina + prestup</span>
          </div>

          <header className="mb-10">
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Batožina + prestup: ako fungujú kombinované nároky?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Toto je jeden z najchaotickejších scenárov po prílete: <strong>prestup sa pokazil</strong>,
              konečný plán cesty sa rozpadol a popri tom ešte <strong>neprišla batožina</strong> alebo
              prišla poškodená. Najväčšia chyba býva v tom, že cestujúci skúšajú všetko tlačiť do
              jedného nároku, hoci v skutočnosti ide o <strong>dve odlišné vrstvy problému</strong>.
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
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-600 to-sky-700 p-8 text-white shadow-xl dark:border-cyan-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-cyan-50">
                <p>
                  <strong>Áno, pri jednej ceste môžete mať naraz nárok za let aj samostatný nárok za batožinu.</strong>
                </p>
                <p>
                  Pri lete sa pri prestupe často rieši <strong>jedna rezervácia</strong>,
                  <strong> konečná destinácia</strong> a pravidlá <strong>EU261</strong>. Pri batožine sa
                  rieši najmä <strong>PIR</strong>, sledovanie batožiny, batožinový štítok a písomnú reklamáciu.
                </p>
                <p>
                  Ak chcete rýchlo oddeliť, čo patrí do ktorého typu prípadu, môžete to poslať cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_baggage_connection_combined_quick_answer_home",
                        claimWingerHomeHref
                      )
                    }
                    className="font-semibold underline underline-offset-4"
                  >
                    ClaimWinger Slovensko
                  </a>
                  . ClaimWinger účtuje <strong>30 %</strong> bez ohľadu na to, či sa vec rieši mimosúdne
                  alebo súdne.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Pokazil sa vám prestup aj batožina naraz?"
            description="ClaimWinger vie pomôcť oddeliť silný nárok za samotný let od samostatného problému s batožinou, aby sa celý prípad nerozpadol na jeden nejasný mix dokumentov."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=baggage_connection_combined_claims"
            ctaLabel="Preveriť kombinovaný prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_baggage_connection_combined_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Layers3 className="h-8 w-8 text-cyan-600" />
              1. Najprv si rozdeľte dve vrstvy problému
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Vrstva letu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu sa rieši, či vznikol nárok za <strong>zmeškaný prestup</strong>, veľké meškanie do
                  <strong> konečnej destinácie</strong>, presmerovanie, refundácia alebo kompenzácia pod
                  <strong> EU261</strong>.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Vrstva batožiny
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu sa rieši, či je batožina <strong>stratená, oneskorene doručená alebo poškodená</strong>, či máte
                  <strong> PIR</strong>, kde sa rozbieha sledovanie batožiny a aká písomná reklamácia sa má podať.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <PlaneLanding className="h-8 w-8 text-cyan-600" />
              2. Čo riešiť najprv po prílete alebo po páde prestupu
            </h2>
            <div className="grid gap-4">
              {[
                "zistiť, ako vás aerolínka dostane do konečnej destinácie",
                "odložiť si údaje o celej trase a o jednej rezervácii, ak existuje",
                "na letisku hneď nahlásiť problém s batožinou a vyžiadať si PIR",
                "odfotiť si batožinový štítok, boarding passy a obrazovky s novým letom",
                "nepomiešať claim za let s batožinovým reportom do jednej neprehľadnej správy",
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
              <Workflow className="h-8 w-8 text-cyan-600" />
              3. Ako vyzerá typický kombinovaný scenár
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Predstavte si cestu <strong>na jednej rezervácii</strong>: prvý segment mešká, prestup padne,
                do konečného cieľa prídete neskoro a vaša batožina nepríde vôbec alebo sa objaví až neskôr.
              </p>
              <p>
                V takom prípade sa pri lete pozerá najmä na to, <strong>o koľko neskôr ste dorazili do
                konečnej destinácie</strong> a či sú splnené podmienky EU261. Pri batožine sa medzitým rieši,
                kde sa batožina stratila v reťazci, či existuje <strong>PIR</strong> a ako pokračuje sledovanie batožiny.
              </p>
              <p>
                Tieto dve línie sa síce opierajú o tú istú cestu, ale nie sú to tie isté práva. Ak ich
                zmiešate do jednej nepresnej reklamácie, aerolínka má väčší priestor celé to rozmazať.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <FileText className="h-8 w-8 text-cyan-600" />
              4. Čo si pripraviť, ak sa pokazili obe vrstvy naraz
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "PNR alebo potvrdenie jednej rezervácie",
                "boarding passy a nové segmenty po presmerovaní",
                "PIR alebo iný batožinový report",
                "batožinový štítok a fotografie kufra, ak je poškodený",
                "čas príchodu do konečnej destinácie",
                "komunikáciu s aerolinkou o prestupe aj o batožine",
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
            <Card className="border-cyan-200 bg-cyan-50 p-8 dark:border-cyan-800 dark:bg-cyan-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Praktická chyba, ktorá oslabuje obidve línie naraz
              </h2>
              <p className="mb-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                Najčastejšie sa stáva toto: cestujúci pošle aerolinke jednu správu typu „zmeškal som prestup,
                kufor neprišiel, chcem všetko preplatiť“. To je ľudsky pochopiteľné, ale procesne slabé.
              </p>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                Oveľa silnejšie je rozlíšiť <strong>claim za let</strong> a <strong>batožinový claim</strong>,
                hoci sa odvíjajú od tej istej cesty. Takto sa ľahšie držia lehoty, dôkazy aj logika každého
                nároku osobitne.
              </p>
            </Card>
          </section>

          <section className="mb-12">
            <Card className="border-cyan-200 bg-white p-8 dark:border-cyan-800 dark:bg-slate-900">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si to roztriediť bez chaosu?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger vie pomôcť rozlíšiť, čo vo vašom prípade patrí pod nárok za let a čo pod
                samostatný problém s batožinou. To býva najdôležitejšie práve pri prestupoch, kde sa jedna
                cesta rozpadne na viac dokumentov, viac segmentov a dva rozdielne typy práv.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_baggage_connection_combined_final_cta_home",
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
                        "sk_baggage_connection_combined_final_cta_delay",
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
                        "sk_baggage_connection_combined_final_cta_cancel",
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
