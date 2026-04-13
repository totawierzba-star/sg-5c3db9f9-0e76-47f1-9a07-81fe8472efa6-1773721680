import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Plane,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/zmeskany-prestup-mimo-eu";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=missed_connection_outside_eu";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=missed_connection_outside_eu";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=missed_connection_outside_eu";

const faqItems = [
  {
    question: "Môžem žiadať odškodnenie, ak som zmeškal prestup mimo EÚ?",
    answer:
      "Často áno, ale nie vždy. Rozhodujúce je, či bola cesta na jednej rezervácii, odkiaľ let začínal a či sa na celý prípad vzťahuje EU261. Samotný fakt, že prestup bol mimo EÚ, ešte nárok automaticky neruší.",
  },
  {
    question: "Je najdôležitejšie, že prestup bol mimo EÚ?",
    answer:
      "Nie. Dôležitejšie býva, či cesta odlietala z EÚ alebo či šlo o prílet do EÚ s európskou aerolinkou. Práve to často rozhoduje viac než samotné miesto prestupu.",
  },
  {
    question: "Čo ak som mal jednu rezerváciu, ale druhý úsek operoval non-EU dopravca?",
    answer:
      "Tu je potrebné pozerať veľmi presne na smer cesty a na to, ktoré lety sú pre práva relevantné. Pri niektorých itinerároch mimo EÚ sa nepozerá rovnako na každý segment.",
  },
  {
    question: "Počíta sa pri zmeškanom prestupe mimo EÚ konečná destinácia?",
    answer:
      "Áno. Ak ide o prípad, na ktorý sa pravidlá vzťahujú, rozhodujúci býva dopad na konečnú destináciu, nie len samotné zlyhanie prestupu na medziletisku.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function ZmeskanyPrestupMimoEuPage() {
  return (
    <LayoutSk>
      <SEO
        title="Zmeškaný prestup mimo EÚ: kedy ešte vzniká nárok na odškodnenie?"
        description="Čo ak zmeškáte prestup mimo EÚ? Vysvetľujeme, kedy môže stále platiť EU261, prečo je rozhodujúca jedna rezervácia, smer cesty a konečná destinácia."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Zmeškaný prestup mimo EÚ: kedy ešte vzniká nárok na odškodnenie?",
            description:
              "Praktický sprievodca pre situáciu, keď pasažier zmešká prestup mimo EÚ, vrátane rozsahu EU261, jednej rezervácie a významu konečnej destinácie.",
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
                name: "Zmeškaný prestup mimo EÚ",
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
            <span>Zmeškaný prestup mimo EÚ</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              Edge case content pre prestup mimo EÚ
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Zmeškaný prestup mimo EÚ: kedy ešte vzniká nárok na odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak zmeškáte prestup <strong>mimo EÚ</strong>, situácia býva zložitejšia než pri čisto
              európskej ceste. Samotné miesto prestupu však ešte neznamená, že ste bez nároku.
              Kľúčové sú <strong>jedna rezervácia</strong>, <strong>smer cesty</strong> a to, či sa
              na konkrétny itinerár stále vzťahuje <strong>EU261</strong>.
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
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-600 to-sky-700 p-8 text-white shadow-xl dark:border-cyan-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-cyan-50">
                <p>
                  <strong>Áno, niekedy áno.</strong> Zmeškaný prestup mimo EÚ ešte automaticky
                  nevylučuje nárok.
                </p>
                <p>
                  Pri ceste začínajúcej v <strong>EÚ</strong> môže byť postavenie pasažiera stále
                  veľmi silné, aj keď samotný prestup prebehol mimo Únie.
                </p>
                <p>
                  Pri ceste z <strong>non-EU krajiny do EÚ</strong> už býva kľúčové, či ide o
                  <strong> EU aerolinku</strong> a ktoré segmenty sa do právnej logiky vlastne rátajú.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Zmeškali ste prestup mimo EÚ a neviete, či ešte platí EU261?"
            description="ClaimWinger vie rýchlo preveriť, či je váš prípad stále v rozsahu EU261, alebo či ho oslabuje smer cesty, non-EU segmenty alebo oddelené rezervácie."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=missed_connection_outside_eu"
            ctaLabel="Preveriť zmeškaný prestup"
            loadingLabel="Načítava sa formulár pre meškajúci let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger na preverenie prípadu."
            placement="sk_blog_missed_connection_outside_eu_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy býva pozícia pasažiera najsilnejšia
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "cesta odlietala z EÚ",
                "lety boli v jednej rezervácii",
                "do konečnej destinácie ste prišli s veľkým meškaním",
                "prípad neoslabujú mimoriadne okolnosti",
                "viete ukázať celý itinerár od prvého do posledného segmentu",
                "je jasné, kto bol operujúci dopravca na rozhodujúcich úsekoch",
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
              Tri najčastejšie scenáre
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Plane className="mb-3 h-6 w-6 text-cyan-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Cesta z EÚ, prestup mimo EÚ, jedna rezervácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Toto býva pre pasažiera silnejší variant. Ak cesta začínala v EÚ a zmeškaný prestup
                  mimo EÚ vás posunul v konečnej destinácii o viac než 3 hodiny, nárok môže byť reálny.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <AlertCircle className="mb-3 h-6 w-6 text-cyan-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Cesta z non-EU krajiny do EÚ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu býva dôležité, či ide o <strong>EU aerolinku</strong>. Nie každý segment mimo EÚ
                  sa posudzuje rovnako a práve to mení silu prípadu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Clock className="mb-3 h-6 w-6 text-cyan-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Samostatné letenky mimo EÚ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste si spojili dva oddelené lístky, prípad býva oveľa slabší. Aerolinka zvyčajne
                  nezodpovedá za to, že ste nestihli ďalší, samostatne kúpený let.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo je pri tomto edge case najdôležitejšie
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Miesto prestupu nie je všetko
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To, že prestup bol mimo EÚ, ešte samo o sebe nárok neruší. Oveľa dôležitejší je
                  celkový rámec cesty.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Počíta sa konečná destinácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa prípad do EU261 zmestí, kľúčový býva dopad na konečný cieľ, nie len samotné
                  zlyhanie prestupu na medziletisku.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Operujúci dopravca mení výsledok
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri itinerároch mimo EÚ býva veľmi dôležité, ktorý dopravca let skutočne operoval,
                  nie len čo bolo napísané na marketingovom kóde.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-cyan-200 bg-cyan-50 p-8 dark:border-cyan-800 dark:bg-cyan-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri zmeškanom prestupe mimo EÚ bývajú rozhodujúce detaily itinerára. ClaimWinger vie
                rýchlo oddeliť silný prípad s jednou rezerváciou od slabšieho scenára s oddelenými
                letenkami alebo mimo rozsahu EU261.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_missed_connection_outside_eu_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Preveriť zmeškaný prestup
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_missed_connection_outside_eu_final_cta_home",
                        claimWingerHomeHref
                      )
                    }
                  >
                    Otvoriť ClaimWinger Slovensko
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
                  Ak chcete rýchlo preveriť konkrétnu trasu, operujúceho dopravcu a rozsah EU261.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_missed_connection_outside_eu_related_home",
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
                  Môžem žiadať odškodnenie za zmeškaný prestup?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete najprv širší základ a logiku jednej rezervácie bez špecifického fokusu mimo EÚ.
                </p>
                <Link
                  href="/sk/blog/zmeskany-prestup-kompenzacia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na všeobecný článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Viedeň–Bangkok (EU aerolinka)
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak riešite long-haul mimo EÚ a rolu európskeho dopravcu na trase.
                </p>
                <Link
                  href="/sk/blog/vieden-bangkok-meskanie-letu-eu-aerolinka"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na long-haul článok
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
