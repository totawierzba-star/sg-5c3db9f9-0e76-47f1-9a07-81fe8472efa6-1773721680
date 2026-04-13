import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Receipt,
  RefreshCcw,
  Ticket,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/nahrada-za-novy-listok";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=replacement_ticket_reimbursement";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=replacement_ticket_reimbursement";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=replacement_ticket_reimbursement";

const faqItems = [
  {
    question: "Kedy mi aerolínka preplatí nový lístok, ktorý som si kúpil sám?",
    answer:
      "Najsilnejší prípad býva vtedy, keď mala aerolínka povinnosť ponúknuť re-routing za porovnateľných podmienok čo najskôr, ale neurobila to. Your Europe uvádza, že ak aerolínka nesplní túto povinnosť, musí preplatiť náklady na nový let kúpený za porovnateľných podmienok.",
  },
  {
    question: "Stačí, že som sa rozhodol kúpiť si nový lístok sám?",
    answer:
      "Nie vždy. Samotné rozhodnutie cestujúceho ešte automaticky negarantuje preplatenie. Dôležité je, či aerolínka reálne neponúkla včasnú a porovnateľnú alternatívu, alebo či jednostranne neposlala len refundáciu namiesto výberu medzi refundáciou a presmerovaním.",
  },
  {
    question: "Môžem dostať nový lístok aj kompenzáciu podľa EU261?",
    answer:
      "Áno, tieto vrstvy sa môžu stretnúť. Preplatenie nového lístka rieši nápravu dopravy, zatiaľ čo kompenzácia podľa EU261 rieši stratu času a nepríjemnosti. Nie je to automatické v každom prípade, ale nie je to ani vzájomne vylúčené.",
  },
  {
    question: "Čo si mám odložiť, ak som kúpil nový lístok?",
    answer:
      "Najmä pôvodnú rezerváciu, oznámenie o zrušení alebo veľkom meškaní, screenshoty komunikácie s aerolinkou, dôkaz, že neponúkla vhodný re-routing, a doklad o kúpe nového lístka vrátane ceny a času nákupu.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function NahradaZaNovyListokPage() {
  return (
    <LayoutSk>
      <SEO
        title="Náhrada za nový lístok: kedy ju aerolínka preplatí?"
        description="Kedy aerolínka preplatí nový lístok, ktorý ste si kúpili sami? Vysvetľujeme re-routing, porovnateľné podmienky, refundáciu vs presmerovanie a ktoré dôkazy sú najdôležitejšie."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Náhrada za nový lístok: kedy ju aerolínka preplatí?",
            description:
              "Praktický návod, kedy môže aerolínka preplatiť vlastnoručne kúpený nový lístok a prečo je dôležité, či splnila povinnosť ponúknuť včasný re-routing.",
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
                name: "Náhrada za nový lístok",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Náhrada za nový lístok</span>
          </div>

          <header className="mb-10">
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Náhrada za nový lístok: kedy ju aerolínka preplatí?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Toto je veľmi praktický a zároveň citlivý scenár: let sa rozsype, aerolínka nepomáha
              dosť rýchlo a cestujúci si kúpi <strong>nový lístok za vlastné peniaze</strong>, aby sa
              vôbec dostal do cieľa. Kľúčové potom je, či išlo o rozumný krok po tom, čo dopravca
              nesplnil povinnosť ponúknuť porovnateľné presmerovanie.
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
            <Card className="border-amber-200 bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white shadow-xl dark:border-amber-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-amber-50">
                <p>
                  <strong>Aerolínka môže mať povinnosť preplatiť nový lístok, ktorý ste si kúpili sami.</strong>
                </p>
                <p>
                  Najmä vtedy, keď mala ponúknuť <strong>re-routing za porovnateľných podmienok čo najskôr</strong>,
                  ale neurobila to, alebo vám jednostranne poslala len refundáciu namiesto reálnej voľby.
                </p>
                <p>
                  Ak chcete rýchlo preveriť, či váš nový lístok vyzerá ako rozumný a obhájiteľný náklad,
                  môžete to poslať cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_replacement_ticket_quick_answer_home",
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
            title="Kúpili ste si nový lístok po zrušení alebo rozpade cesty?"
            description="ClaimWinger vie pomôcť preveriť, či mal dopravca povinnosť zabezpečiť včasné presmerovanie a či váš vlastný nový lístok vyzerá ako náklad, ktorý možno žiadať späť."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=replacement_ticket_reimbursement"
            ctaLabel="Preveriť prípad s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_replacement_ticket_reimbursement_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <RefreshCcw className="h-8 w-8 text-amber-600" />
              1. Základ je v tom, čo mala aerolínka ponúknuť
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Pri <strong>zrušení letu</strong> alebo pri iných relevantných scenároch musí aerolínka
                ponúknuť výber medzi <strong>refundáciou</strong> a <strong>presmerovaním</strong>.
                Ak si vyberiete presmerovanie, nejde len o ľubovoľné čakanie bez konca. Pravidlá hovoria
                o doprave do cieľa za <strong>porovnateľných podmienok čo najskôr</strong>.
              </p>
              <p>
                To je presne bod, na ktorom stojí veľa sporov o nový lístok. Ak dopravca túto povinnosť
                nesplnil a vy ste si zabezpečili porovnateľnú náhradu sami, vaše postavenie býva oveľa silnejšie.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Ticket className="h-8 w-8 text-amber-600" />
              2. Kedy býva nový lístok najlepšie obhájiteľný
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "let bol zrušený a aerolínka neponúkla použiteľné presmerovanie včas",
                "dopravca vás nechal bez reálnej pomoci a bez jasnej alternatívy",
                "nový lístok bol kúpený na porovnateľnú trasu a v rozumnom čase",
                "viete doložiť, čo vám aerolínka ponúkla alebo neponúkla",
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
              <AlertTriangle className="h-8 w-8 text-amber-600" />
              3. Kedy je situácia slabšia
            </h2>
            <div className="grid gap-4">
              {[
                "aerolínka ponúkla primerané presmerovanie, ale vy ste si vybrali drahšie riešenie z vlastnej preferencie",
                "nový lístok bol kúpený zbytočne draho alebo na inú, menej porovnateľnú trasu",
                "nemáte dôkaz o tom, že dopravca neplnil povinnosť re-routing zabezpečiť",
                "najprv ste prijali jednu možnosť a až potom žiadate plnú náhradu za inú vlastnú voľbu",
              ].map((item) => (
                <Card key={item} className="border-slate-200 p-4 dark:border-slate-700">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-1 h-5 w-5 text-amber-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Receipt className="h-8 w-8 text-amber-600" />
              4. Čo si odložiť ako dôkaz
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "pôvodnú rezerváciu a boarding pass, ak ho máte",
                "e-mail alebo app notifikáciu o zrušení či veľkom meškaní",
                "screenshoty ponúkanej alternatívy alebo dôkaz, že nebola ponúknutá",
                "doklad o kúpe nového lístka s časom nákupu a cenou",
                "komunikáciu s helpdeskom alebo agentom na letisku",
                "doklady o ďalších primeraných nákladoch, ak vznikli popri tom",
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
            <Card className="border-amber-200 bg-amber-50 p-8 dark:border-amber-800 dark:bg-amber-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Dôležité rozlíšenie: nový lístok nie je to isté čo kompenzácia
              </h2>
              <p className="mb-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                Preplatenie vlastnoručne kúpeného nového lístka rieši otázku, či ste si museli
                zabezpečiť dopravu sami namiesto aerolínky. <strong>Kompenzácia podľa EU261</strong>
                je samostatná vrstva, ktorá rieši stratu času a nepríjemnosti.
              </p>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                V praxi to znamená, že niektoré prípady vedia niesť obe vrstvy naraz: rozumný vlastný
                nový lístok plus peňažnú kompenzáciu, ak sú splnené podmienky EU261.
              </p>
            </Card>
          </section>

          <section className="mb-12">
            <Card className="border-amber-200 bg-white p-8 dark:border-amber-800 dark:bg-slate-900">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si overiť, či bol nový lístok ešte rozumný a obhájiteľný?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak si nie ste istí, či dopravca skutočne zlyhal pri presmerovaní, alebo či ste nekúpili
                riešenie príliš skoro, ClaimWinger vie pomôcť prípad usporiadať a odlíšiť refundáciu,
                presmerovanie, expenses a možnú kompenzáciu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_replacement_ticket_final_cta_home",
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
                        "sk_replacement_ticket_final_cta_delay",
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
                        "sk_replacement_ticket_final_cta_cancel",
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
