import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Link2,
  Plane,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/viac-letov-v-jednej-rezervacii";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=multiple_flights_one_booking";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=multiple_flights_one_booking";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=multiple_flights_one_booking";

const faqItems = [
  {
    question: "Prečo je pri viacerých letoch dôležité, že sú v jednej rezervácii?",
    answer:
      "Pretože pri jednej rezervácii sa cesta často posudzuje ako jeden celok. To je veľmi dôležité pri zmeškanom prestupe, meškaní do konečnej destinácie, presmerovaní aj pri starostlivosti o pasažiera.",
  },
  {
    question: "Počíta sa pri jednej rezervácii meškanie prvého letu alebo konečná destinácia?",
    answer:
      "Veľmi často je rozhodujúce meškanie pri príchode do konečnej destinácie. Aj menší problém na prvom segmente môže zmeniť celú cestu, ak rozbije ďalšie nadväznosti.",
  },
  {
    question: "Stačí, že mám jednu rezerváciu, aby vznikla kompenzácia?",
    answer:
      "Nie. Jedna rezervácia veľmi pomáha, ale stále treba overiť, či sa na cestu vzťahuje EU261, aký bol skutočný výsledok v konečnej destinácii a či aerolinka nepreukáže mimoriadne okolnosti.",
  },
  {
    question: "Je jedna rezervácia to isté ako jedna aerolinka?",
    answer:
      "Nie vždy. Cesta môže byť v jednej rezervácii aj vtedy, keď jednotlivé segmenty operujú rôzni dopravcovia alebo partneri v codeshare. Práve preto je dôležité pozerať na PNR, itinerár a operujúceho dopravcu.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function ViacLetovVJednejRezervaciiPage() {
  return (
    <LayoutSk>
      <SEO
        title="Viac letov v jednej rezervácii: prečo je to dôležité pri nároku?"
        description="Máte viac segmentov v jednej rezervácii? Vysvetľujeme, prečo to mení posudzovanie meškania, zmeškaného prestupu, konečnej destinácie aj práv podľa EU261."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Viac letov v jednej rezervácii: prečo je to dôležité pri nároku?",
            description:
              "Praktický sprievodca tým, ako jedna rezervácia mení posudzovanie meškania, zmeškaného prestupu a konečnej destinácie podľa pravidiel EÚ.",
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
                name: "Viac letov v jednej rezervácii",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Viac letov v jednej rezervácii</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
              Edge case content pre one booking logic
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Viac letov v jednej rezervácii: prečo je to dôležité pri nároku?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak máte <strong>viac segmentov v jednej rezervácii</strong>, vaša cesta sa často
              neposudzuje len po jednotlivých letoch, ale ako jeden spoločný itinerár. To môže
              zásadne meniť výsledok pri <strong>zmeškanom prestupe</strong>, dlhom meškaní,
              presmerovaní aj pri výpočte príchodu do <strong>konečnej destinácie</strong>.
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
            <Card className="border-indigo-200 bg-gradient-to-br from-indigo-600 to-blue-700 p-8 text-white shadow-xl dark:border-indigo-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-indigo-50">
                <p>
                  <strong>Jedna rezervácia veľmi posilňuje logiku nároku.</strong> Pri viacerých
                  letoch na jednom PNR sa často pozerá na výsledok celej cesty, nie len na prvý
                  problémový segment.
                </p>
                <p>
                  To je dôležité hlavne pri <strong>konečnej destinácii</strong>, pri
                  <strong> zmeškanom prestupe</strong>, pri presmerovaní a pri tom, kto má riešiť
                  náhradný let alebo návrat.
                </p>
                <p>
                  Samotná jedna rezervácia však <strong>nestačí automaticky</strong>. Stále treba
                  overiť rozsah EU261, výsledné meškanie a prípadné mimoriadne okolnosti.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Máte viac letov v jednej rezervácii a celá cesta sa pokazila?"
            description="ClaimWinger vie rýchlo poskladať, či sa vo vašom prípade počíta konečná destinácia, jedna rezervácia, prestupný reťazec a skutočný dopad na celý itinerár."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=multiple_flights_one_booking"
            ctaLabel="Preveriť cestu v jednej rezervácii"
            loadingLabel="Načítava sa formulár pre meškajúci let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger pre prestupné a viacsegmentové cesty."
            placement="sk_blog_multiple_flights_one_booking_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo sa pri jednej rezervácii mení
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Link2 className="mb-3 h-6 w-6 text-indigo-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Cesta sa často číta ako celok
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri jednej rezervácii sa problém prvého letu často prenáša do hodnotenia celej
                  cesty, nie len jedného segmentu izolovane.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Plane className="mb-3 h-6 w-6 text-indigo-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Dôležitá je konečná destinácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri kompenzácii sa veľmi často pozerá na to, o koľko neskôr ste prišli na úplný
                  koniec itinerára, nie len na čas príletu po prvom segmente.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <CheckCircle2 className="mb-3 h-6 w-6 text-indigo-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Zodpovednosť býva jasnejšia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Jedna rezervácia často zlepšuje vašu pozíciu pri rebookingu, starostlivosti a
                  argumentácii, že ide o jednu spoločnú cestu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy je jedna rezervácia najsilnejšia
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Pri zmeškanom prestupe
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Toto je najznámejší scenár. Ak sa prvý let oneskorí a rozbije zvyšok cesty, jedna
                  rezervácia výrazne zlepšuje logiku nároku aj právo na nové riešenie od dopravcu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Pri meškaní do konečnej destinácie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj kratšie meškanie prvého segmentu môže byť právne dôležité, ak v dôsledku neho
                  dorazíte do finálnej destinácie o viac než 3 hodiny neskôr.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Pri rebookingu a návrate
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa cesta rozpadne, jedna rezervácia často lepšie ukazuje, že aerolinka alebo
                  organizátor itinerára má riešiť aj zvyšok cesty, nielen prvý odcinek.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo jedna rezervácia sama o sebe ešte nerieši
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Rozsah EU261
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj pri jednej rezervácii stále musíte overiť, či trasa a operujúci dopravca
                  spadajú pod pravidlá EÚ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Jedna rezervácia nepomôže, ak aerolinka preukáže skutočne mimoriadne okolnosti,
                  ktoré nebolo možné rozumne ovplyvniť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Každý segment nemusí operovať tá istá línia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri codeshare a partneroch je stále dôležité zistiť, kto bol operujúci dopravca
                  problémového segmentu a aký bol celý reťazec cesty.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo si odložiť ako dôkaz
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "celý itinerár so všetkými segmentmi",
                "PNR alebo potvrdenie, že ide o jednu rezerváciu",
                "boarding passy k jednotlivým segmentom",
                "oznámienie o meškaní, zrušení alebo presmerovaní",
                "skutočný čas príchodu do konečnej destinácie",
                "nový itinerár, ak vás aerolinka prebookovala",
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
            <Card className="border-indigo-200 bg-indigo-50 p-8 dark:border-indigo-800 dark:bg-indigo-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri viacerých letoch v jednej rezervácii býva rozhodujúce, či sa pozeráme na prvý
                problémový segment, alebo na výsledok celej cesty. ClaimWinger vie rýchlo poskladať,
                ako sa na váš itinerár pozerá z pohľadu konečnej destinácie a jednej rezervácie.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_multiple_flights_one_booking_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Preveriť itinerár v jednej rezervácii
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
                        "sk_multiple_flights_one_booking_final_cta_home",
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
                  Platí odškodnenie pri prestupe?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Širší pohľad na to, kedy sa pri prestupných letoch počíta konečná destinácia.
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
                  Zmeškaný prestup
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak sa jeden problémový segment už premenil na konkrétne zmeškaný ďalší let.
                </p>
                <Link
                  href="/sk/blog/zmeskany-prestup-kompenzacia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o zmeškanom prestupe
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete preveriť konkrétny viacsegmentový itinerár a jeho výsledok v konečnej destinácii.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_multiple_flights_one_booking_related_home",
                      claimWingerHomeHref
                    )
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
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
