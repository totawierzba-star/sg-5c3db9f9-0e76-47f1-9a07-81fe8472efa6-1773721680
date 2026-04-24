import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/ako-zvysit-sance-na-uspech-reklamacie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=increase_success";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=increase_success";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=increase_success";

const faqItems = [
  {
    question: "Čo najviac zvyšuje šance na úspech reklamácie?",
    answer:
      "Kompletná dokumentácia (rezervácia, boarding pass, presné časy, e-maily), jasné uvedenie právneho základu EU261 a vzdialenosti letu, a odovzdanie prípadu špecializovanej firme pri komplikáciách. Aerolinky často zamietnu prvú reklamáciu, ale ustupujú pri pevne argumentovanom druhom podaní.",
  },
  {
    question: "Aká je priemerná úspešnosť pri samostatnej reklamácii?",
    answer:
      "Odhady sa líšia: pri rutinných prípadoch 30 – 50 %, pri zložitejších (mimoriadne okolnosti, spor o čas príletu) 10 – 20 %. Špecializované firmy dosahujú na rovnakých typoch prípadov 80 – 95 %, pretože majú právnu infraštruktúru a judikatúru.",
  },
  {
    question: "Kedy sa oplatí odovzdať prípad firme a kedy skúsiť sám?",
    answer:
      "Jednoduché 3-hodinové meškanie s jasným dôkazom často vyriešite sami. Pri zamietnutí, odvolaní sa na mimoriadne okolnosti, starších prípadoch alebo medzinárodných letoch je firma (napr. ClaimWinger) efektívnejšia, pretože zvládne aj súdnu cestu.",
  },
  {
    question: "Koľko je premlčacia doba nárokov na Slovensku?",
    answer:
      "Pre nároky podľa EU261 je na Slovensku uplatniteľná všeobecná 3-ročná premlčacia doba podľa Občianskeho zákonníka. Čím skôr reklamujete, tým lepšie – dôkazy, svedkovia aj odhodlanie sa postupne strácajú.",
  },
  {
    question: "Ako rýchlo môžem od aerolinky očakávať odpoveď?",
    answer:
      "Bežné reklamácie rieši aerolinka 2 – 6 týždňov. Pri mlčaní alebo zdržiavaní dlhšie než 30 dní je dobré posielať formálnu druhú výzvu a následne eskalovať na Dopravný úrad SR alebo firmu.",
  },
  {
    question: "Má zmysel žiadať dôvody zamietnutia?",
    answer:
      "Áno, je to kľúčový krok. Aerolinka musí uviesť presný právny dôvod. Často uvádza paušálne mimoriadne okolnosti bez dôkazov – to je najsilnejší bod pre úspešné odvolanie alebo súdne konanie.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AkoZvysitSanceNaUspechReklamaciePage() {
  return (
    <LayoutSk>
      <SEO
        title="Ako zvýšiť šance na úspech reklamácie letu: 10 osvedčených krokov"
        description="Chcete, aby vaša reklamácia za meškanie alebo zrušenie letu uspela? Praktický návod, čo robiť pred, počas a po reklamácii pre maximálnu úspešnosť."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ako zvýšiť šance na úspech reklamácie letu",
            description:
              "Praktický sprievodca 10 krokmi, ktoré zásadne zvýšia pravdepodobnosť úspešnej reklamácie podľa EU261 pri meškaní alebo zrušení letu.",
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
              {
                "@type": "ListItem",
                position: 3,
                name: "Ako zvýšiť šance na úspech reklamácie letu",
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
            <span>Ako zvýšiť šance na úspech reklamácie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
              Praktický návod – 10 krokov
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ako zvýšiť šance na úspech reklamácie letu
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Aerolinky zamietajú prvú reklamáciu častejšie, než by si pasažieri priali. Skúsenosť
              však ukazuje, že <strong>dobre postavený prípad</strong> má 3 – 5× vyššiu úspešnosť.
              Tento návod prejde 10 krokov, ktoré výrazne zlepšia vaše šance – od okamihu, keď lietadlo
              ešte stojí na letisku, až po eskaláciu na súd. Ak nechcete riešiť sami, môžete odovzdať
              prípad cez{" "}
              <a
                href={claimWingerHomeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_increase_success_intro", claimWingerHomeHref)}
              >
                ClaimWinger Slovensko
              </a>
              , ktorý rieši mimosúdnu aj súdnu cestu s pevnou províziou 30 %.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 24. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 11 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-indigo-200 bg-gradient-to-br from-indigo-600 to-violet-700 p-8 text-white shadow-xl dark:border-indigo-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-indigo-50">
                <p>
                  Tri piliere úspešnej reklamácie: <strong>dôkazy</strong>, <strong>právny základ</strong>{" "}
                  a <strong>vytrvalosť</strong>.
                </p>
                <p>
                  Najmä dôkazy rozhodujú: fotografia tabule, e-maily aerolinky, boarding pass, účtenky –
                  bez nich aerolinka zamietne aj oprávnený nárok.
                </p>
                <p>
                  Pri komplikácii odovzdajte prípad špecializovanej firme. ClaimWinger má úspešnosť
                  90 %+ aj pri ťažkých prípadoch, pretože zvládne súdnu cestu.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Chcete maximalizovať šance bez vlastnej práce?"
            description="ClaimWinger prevezme celý prípad, vyargumentuje sa aj cez advokátsku kanceláriu a pri úspechu si vezme len 30 % z kompenzácie. Ak neuspejete, neplatíte nič."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=increase_success"
            ctaLabel="Odovzdať prípad ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_increase_success_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. – 5. Čo urobiť HNEĎ pri meškaní/zrušení
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  1. Fotografujte odletovú tabuľu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Každá zmena harmonogramu na tabuli = snímka obrazovky alebo fotografia s viditeľným
                  časom. Aerolinka neskôr môže tvrdiť iný čas; vaša fotografia ho vyvráti.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  2. Uchovajte všetky e-maily a SMS
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nemažte ich a exportujte si e-mailové hlavičky s presným časom doručenia. Dátum
                  oznámenia rozhoduje pri zrušených letoch (pravidlo 14 dní).
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  3. Pýtajte si od personálu písomné vyhlásenie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Na gate alebo pri stánku aerolinky požiadajte o písomné potvrdenie dôvodu meškania.
                  Často tam zaznie iný dôvod, než neskôr aerolinka uvedie v zamietnutí. Ak ho
                  odmietnu, poznačte si meno zamestnanca.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  4. Zaznamenajte čas otvorenia dverí
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Po prílete sledujte hodiny na mobile (pozor, časová zóna) a odfoťte si moment
                  otvorenia dverí. Rozdiel medzi pristátím a otvorením dverí môže presiahnuť 20 – 30
                  minút – a to je kľúčové pri hraničných prípadoch na 3 hodiny.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  5. Odložte si všetky účtenky
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hotel, jedlo, taxi, parkovanie v cieli, novú rezerváciu, SIM kartu – všetko, čo ste
                  zaplatili kvôli meškaniu. Ide o right to care (článok 9 EU261), ktorý aerolinka musí
                  uhradiť aj pri mimoriadnych okolnostiach.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              6. – 10. Ako napísať a pretlačiť reklamáciu
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  6. Píšte formálne, konkrétne a s odkazmi na právo
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  V reklamácii vždy uveďte: číslo letu, dátum, PNR, presný čas meškania, vzdialenosť
                  letu a <strong>nárok podľa článku 7 nariadenia (ES) č. 261/2004</strong>. Aerolinka
                  pozná, keď pisateľ vie, o čom hovorí – na takúto reklamáciu reaguje inak než na
                  bežné sťažnosti.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  7. Žiadajte odpoveď do 30 dní
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  V reklamácii uveďte explicitne, že očakávate odpoveď do 30 dní. Po uplynutí termínu
                  pošlite druhú výzvu s uvedením, že bez reakcie eskalujete prípad na Dopravný úrad SR
                  alebo súd.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  8. Neprijímajte voucher namiesto hotovosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  EU261 výslovne hovorí o výplate v hotovosti, bankovým prevodom, elektronickým
                  transferom alebo na cestovnom šeku. Aerolinka <strong>nemôže</strong> nanútiť
                  voucher. Odmietnite ho a trvajte na peniazoch. Viac v článku{" "}
                  <Link
                    href="/sk/blog/mozem-ziadat-odskodnenie-ak-som-prijal-voucher"
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    Môžem žiadať odškodnenie, ak som prijal voucher?
                  </Link>
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  9. Pri „mimoriadnych okolnostiach" žiadajte dôkazy
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak aerolinka zamietne reklamáciu s odkazom na mimoriadne okolnosti, odpovedzte
                  formálne a pýtajte si konkrétne dôkazy (meteorologický report, štrajková nota,
                  vyhlásenie ATC). Väčšina aerolínií buď ustúpi, alebo nevie dôkazy predložiť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  10. Eskalujte – štát, firma alebo súd
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri zamietnutí máte tri cesty: (a) sťažnosť na Dopravný úrad SR alebo národný
                  regulátor v krajine odletu; (b) odovzdanie prípadu špecializovanej firme; (c)
                  samostatná žaloba na príslušnom súde. Každá z nich významne zvyšuje úspešnosť –
                  samotná reklamácia u aerolinky je len prvým krokom.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Najčastejšie chyby, ktoré znižujú šance
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "reklamácia bez čísla letu a PNR",
                "neskoré podanie – po 2+ rokoch bez dobrej evidencie",
                "prijatie voucheru bez preštudovania podmienok",
                "nepodpísanie reklamácie ani nezaslanie doporučene",
                "chýbajúce účtenky za výdavky počas meškania",
                "zanechaný let: nevedieť presný čas otvorenia dverí",
                "veriť e-mailu z chatbota ako právnemu stanovisku",
                "vzdať sa po prvom zamietnutí",
              ].map((item) => (
                <Card key={item} className="border-slate-200 p-4 dark:border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-red-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Nechcete sa doťahovať o každý detail?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger Slovensko preverí prípad zdarma, pripraví argumentáciu a pri úspechu si
                odpočíta 30 % z kompenzácie. Ak aerolinka odmietne, pokračuje na súd bez dodatočných
                nákladov pre vás. Pozrite{" "}
                <Link
                  href="/sk/blog/claimwinger-vs-airhelp-vs-skycop"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  porovnanie s AirHelp a Skycop
                </Link>{" "}
                alebo{" "}
                <a
                  href="https://claimwinger.com/sk/listino-prezzi?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=increase_success"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                  onClick={() =>
                    trackClaimClick(
                      "sk_increase_success_pricing",
                      "https://claimwinger.com/sk/listino-prezzi",
                    )
                  }
                >
                  presný cenník
                </a>
                .
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_increase_success_final_primary", delayedFlightHref)
                    }
                  >
                    Preveriť nárok zdarma
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_increase_success_final_secondary", cancelledFlightHref)
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
              Súvisiace články
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Aká je šanca na úspech?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Štatistiky úspešnosti pre vlastné reklamácie aj špecializované firmy.
                </p>
                <Link
                  href="/sk/blog/aka-je-sanca-na-uspech-reklamacie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Prečo aerolinky zamietajú reklamácie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najčastejšie argumenty aerolínií a ako ich vyvrátiť.
                </p>
                <Link
                  href="/sk/blog/preco-aerolinky-zamietaju-reklamacie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Kedy ísť na súd
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak aerolinka odmieta komunikovať, súdna cesta je často lacnejšia, než sa zdá.
                </p>
                <Link
                  href="/sk/blog/kedy-ist-na-sud-pri-odskodneni-za-let"
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
