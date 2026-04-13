import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/presmerovany-let-prava";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=rerouted_flight_rights";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=rerouted_flight_rights";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=rerouted_flight_rights";

const faqItems = [
  {
    question: "Môžem si pri presmerovanom lete vybrať medzi refundáciou a novým letom?",
    answer:
      "Často áno, najmä ak bol pôvodný let zrušený alebo vám odmietli nástup na palubu. Aerolinka má v takých situáciách spravidla ponúknuť voľbu medzi refundáciou a presmerovaním.",
  },
  {
    question: "Znamená presmerovaný let automaticky, že kompenzácia nevzniká?",
    answer:
      "Nie. Presmerovanie samo o sebe neberie nárok na kompenzáciu. Dôležité je, prečo k presmerovaniu došlo, aký bol výsledný čas príchodu do konečnej destinácie a či aerolinka nepreukáže mimoriadne okolnosti.",
  },
  {
    question: "Môže sa kompenzácia po presmerovaní znížiť o 50 %?",
    answer:
      "Áno. Ak vás náhradný let dostal do konečnej destinácie len s obmedzeným sklzom, kompenzácia sa môže znížiť o polovicu. Rozhoduje dĺžka trasy a konečné oneskorenie po presmerovaní.",
  },
  {
    question: "Čo si mám uložiť ako dôkaz pri presmerovanom lete?",
    answer:
      "Najmä pôvodný itinerár, nový itinerár, oznámenie od aerolinky, palubné vstupenky a skutočný čas príletu do konečnej destinácie. Užitočné sú aj účtenky, ak aerolinka neposkytla starostlivosť.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function PresmerovanyLetPravaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Presmerovaný let: aké máte práva a kedy vzniká nárok?"
        description="Čo znamená presmerovaný let? Vysvetľujeme rozdiel medzi refundáciou, presmerovaním a kompenzáciou, pravidlo 50 % po reroutingu aj to, čo rozhoduje pri konečnej destinácii."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Presmerovaný let: aké máte práva a kedy vzniká nárok?",
            description:
              "Praktický sprievodca právami pri presmerovanom lete vrátane refundácie, nového letu, možnej kompenzácie a pravidla zníženia o 50 % po reroutingu.",
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
                name: "Presmerovaný let: práva",
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
            <span>Presmerovaný let: práva</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              Edge case content pre rerouting a refundáciu
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Presmerovaný let: aké máte práva a kedy vzniká nárok?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak vás aerolinka <strong>presmerovala na iný let</strong>, najdôležitejšie je
              rozlíšiť tri veci: <strong>refundáciu</strong>, <strong>presmerovanie</strong> a
              <strong> kompenzáciu</strong>. Nie je to to isté právo a práve ich miešanie vedie
              k najviac zbytočným chybám.
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
            <Card className="border-amber-200 bg-gradient-to-br from-amber-600 to-orange-700 p-8 text-white shadow-xl dark:border-amber-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-amber-50">
                <p>
                  <strong>Presmerovaný let neznamená automaticky koniec nároku.</strong> Ak bol
                  pôvodný let zrušený alebo vám odmietli nástup, aerolinka vám často musí ponúknuť
                  voľbu medzi refundáciou a novým letom.
                </p>
                <p>
                  Samotné presmerovanie ešte nevylučuje <strong>kompenzáciu</strong>. Rozhoduje,
                  prečo k nemu došlo, o koľko neskôr ste prišli do <strong>konečnej destinácie</strong>
                  a či nejde o <strong>mimoriadne okolnosti</strong>.
                </p>
                <p>
                  Pri vhodnom reroutingu sa môže kompenzácia <strong>znížiť o 50 %</strong>, ale
                  nie zmiznúť automaticky.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Presmerovali vás na iný let a neviete, čo vám ešte patrí?"
            description="ClaimWinger vie rýchlo rozlíšiť, či sa vo vašom prípade rieši len refundácia alebo aj peňažná kompenzácia po zrušení, odmietnutí nástupu či výraznom sklze v konečnej destinácii."
            ctaHref="https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=rerouted_flight_rights"
            ctaLabel="Preveriť presmerovaný let s ClaimWinger"
            loadingLabel="Načítava sa formulár pre zrušený let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger pre zrušené a presmerované lety."
            placement="sk_blog_rerouted_flight_rights_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo presne znamená presmerovaný let
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Pôvodný let už nejde podľa plánu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najčastejšie ide o situáciu, keď bol pôvodný let zrušený, výrazne posunutý alebo
                  sa rozpadla pôvodná cesta a aerolinka vás presunula na inú trasu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Nie je to samostatná kompenzácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Presmerovanie samo osebe nie je „extra platba“. Je to jedna z možností, ako má
                  aerolinka vyriešiť váš problém s dopravou do cieľa.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Stále sa pozerá na konečný výsledok
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pre kompenzáciu býva rozhodujúce, s akým oneskorením ste po presmerovaní dorazili
                  do konečnej destinácie, nie len to, že ste leteli iným spojom.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Tri veci, ktoré sa pri presmerovaní nemajú miešať
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Refundácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Vrátenie ceny letenky. Typicky prichádza do úvahy, ak už nechcete cestovať alebo
                  ak cesta po probléme stratila zmysel vzhľadom na váš pôvodný plán.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Presmerovanie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Náhradný let do cieľa. Môže ísť o najbližšiu možnú alternatívu alebo o let v
                  neskoršom termíne, ak si to zvolíte a sú dostupné miesta.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Kompenzácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Peňažná náhrada za čas a nepríjemnosti. Nevzniká len preto, že ste boli
                  presmerovaní. Vznik závisí od pravidiel EU261 a okolností konkrétneho prípadu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy máte právo vybrať si medzi refundáciou a novým letom
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Po zrušení letu alebo odmietnutí nástupu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Práve tu býva voľba medzi <strong>refundáciou</strong> a <strong>presmerovaním</strong>
                  najsilnejšia. Ak vám aerolinka len jednostranne vráti peniaze alebo vás bez voľby
                  presunie na nový let, ešte to nemusí znamenať, že všetko prebehlo správne.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Ak cesta po probléme stratila zmysel
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa kvôli problému cesta prestala hodiť k vášmu pôvodnému plánu, môže byť namieste
                  refundácia za neodletanú časť a pri nadväznej ceste aj návrat do východiskového bodu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Ak chcete cestovať neskôr
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pravidlá počítajú aj s tým, že si zvolíte nový let <strong>v neskoršom termíne
                  podľa vášho pohodlia</strong>, samozrejme pri dostupnosti miest a porovnateľných
                  podmienkach prepravy.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy presmerovanie kompenzáciu neberie a kedy ju môže znížiť
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <CheckCircle2 className="mb-3 h-6 w-6 text-green-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Plná kompenzácia môže zostať
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak vás rerouting dostal do cieľa výrazne neskôr, presmerovanie samo osebe nárok
                  neanuluje. Pri zrušenom lete sa stále môže hrať o plných 250 €, 400 € alebo 600 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Clock className="mb-3 h-6 w-6 text-amber-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Kompenzácia sa môže znížiť o 50 %
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak nový let dorazí do konečnej destinácie len s menším sklzom, suma sa môže znížiť
                  na 125 €, 200 € alebo 300 € podľa vzdialenosti a konečného času príletu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <AlertCircle className="mb-3 h-6 w-6 text-red-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti stále rozhodujú
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj pri presmerovaní môže aerolinka namietať mimoriadne okolnosti. V takom prípade
                  sa často rieši právo na nový let a starostlivosť, ale nie vždy peňažná kompenzácia.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Praktický postup: čo si uložiť a čo skontrolovať
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "pôvodný itinerár a plánovaný čas príletu",
                "nový itinerár po presmerovaní",
                "e-mail, SMS alebo screenshot z aplikácie aerolinky",
                "palubné vstupenky alebo check-in potvrdenia",
                "skutočný čas príletu do konečnej destinácie",
                "účtenky za jedlo, hotel alebo transfer, ak starostlivosť chýbala",
              ].map((item) => (
                <Card key={item} className="border-slate-200 p-4 dark:border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">
              Ak už teraz vidíte, že šlo hlavne o zrušenie pôvodného letu, najpraktickejšie je
              preveriť prípad priamo vo{" "}
              <a
                href={cancelledFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimClick(
                    "sk_rerouted_flight_rights_inline_cancelled",
                    cancelledFlightHref
                  )
                }
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                formulári ClaimWinger pre zrušené lety
              </a>
              . Ak si nie ste istí, či ide skôr o meškanie alebo zrušenie, pomôže aj hlavný{" "}
              <a
                href={claimWingerHomeHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimClick(
                    "sk_rerouted_flight_rights_inline_home",
                    claimWingerHomeHref
                  )
                }
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                formulár ClaimWinger Slovensko
              </a>
              .
            </p>
          </section>

          <section className="mb-12">
            <Card className="border-amber-200 bg-amber-50 p-8 dark:border-amber-800 dark:bg-amber-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri presmerovanom lete býva rozhodujúce, či šlo o zrušenie, akú voľbu vám aerolinka
                ponúkla a s akým výsledkom ste prišli do konečnej destinácie. ClaimWinger vie tieto
                detaily rýchlo poskladať do jedného praktického vyhodnotenia.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_rerouted_flight_rights_final_cta_cancelled",
                        cancelledFlightHref
                      )
                    }
                  >
                    Preveriť zrušený alebo presmerovaný let
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
                        "sk_rerouted_flight_rights_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Riešim skôr meškanie
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
                  Koľko dostanem za zrušený let?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete nadviazať na základné sumy 250 €, 400 € a 600 € a pravidlo zníženia po reroutingu.
                </p>
                <Link
                  href="/sk/blog/kolko-dostanem-za-zruseny-let"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o sumách
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Zrušený let menej ako 14 dní pred odletom
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak riešite neskoré oznámenie o zrušení a chcete vedieť, ako do toho vstupuje nový let.
                </p>
                <Link
                  href="/sk/blog/zruseny-let-menej-ako-14-dni-pred-odletom"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o 14 dňoch
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete posúdiť konkrétny pôvodný let, nový itinerár a výsledný čas príletu do cieľa.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_rerouted_flight_rights_related_home",
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
