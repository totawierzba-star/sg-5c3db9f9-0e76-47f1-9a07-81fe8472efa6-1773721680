import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/ako-dlho-trva-vyplatenie-odskodnenia";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=compensation_timeline";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=compensation_timeline";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=compensation_timeline";

const faqItems = [
  {
    question: "Ako dlho trvá vyplatenie odškodnenia za let?",
    answer:
      "Krátka odpoveď je: často niekoľko týždňov až niekoľko mesiacov. Pri samotnej kompenzácii podľa EU261 neexistuje jednotný európsky termín vyplatenia, hoci refundácia ceny letenky má byť pri relevantných situáciách vyplatená do 7 dní.",
  },
  {
    question: "Je kompenzácia povinne vyplatená do 7 dní?",
    answer:
      "Nie. Lehota 7 dní sa v pravidlách EÚ týka najmä refundácie ceny letenky alebo niektorých špecifických refundácií, nie všeobecne každej kompenzácie podľa EU261.",
  },
  {
    question: "Prečo niektoré prípady trvajú dlho?",
    answer:
      "Aerolinka môže žiadať doplnenie dokumentov, sporiť sa o mimoriadne okolnosti alebo vôbec neodpovedať načas. Dĺžku prípadu preto ovplyvňuje aj kvalita podkladov a to, či treba vec eskalovať.",
  },
  {
    question: "Kedy je prípad skôr rýchly?",
    answer:
      "Rýchlejšie bývajú jednoduché prípady s jasným meškaním alebo zrušením, dobrou dokumentáciou a bez sporu o mimoriadne okolnosti. Najpomalšie bývajú sporné alebo eskalované prípady.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AkoDlhotrvaVyplatenieOdskodneniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Ako dlho trvá vyplatenie odškodnenia? Refundácia a kompenzácia majú iný časový režim"
        description="Ako dlho trvá, kým aerolinka vyplatí peniaze za problém s letom? Vysvetľujeme rozdiel medzi refundáciou do 7 dní a kompenzáciou podľa EU261, pri ktorej nie je jednotná lehota."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ako dlho trvá vyplatenie odškodnenia?",
            description:
              "Praktický prehľad toho, ako dlho typicky trvá vyplatenie peňazí za problém s letom a prečo refundácia a kompenzácia nemajú rovnaký časový režim.",
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
                name: "Ako dlho trvá vyplatenie odškodnenia?",
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
            <span>Ako dlho trvá vyplatenie odškodnenia?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              Praktická odpoveď na čas výplaty
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ako dlho trvá vyplatenie odškodnenia?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najkratšia odpoveď je: pri kompenzácii často <strong>niekoľko týždňov až mesiacov</strong>,
              pri refundácii má EÚ v relevantných situáciách jasnejšiu lehotu <strong>7 dní</strong>.
              Najväčšia chyba je miešať tieto dve veci dokopy, akoby išlo o tú istú platbu.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 13. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 9 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-amber-200 bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white shadow-xl dark:border-amber-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-amber-50">
                <p>
                  <strong>Refundácia ceny letenky</strong> má mať pri relevantných situáciách podľa
                  pravidiel EÚ lehotu <strong>7 dní</strong>.
                </p>
                <p>
                  <strong>Kompenzácia podľa EU261</strong> však nemá jednotný celoeurópsky termín,
                  dokedy ju musí aerolinka vždy vyplatiť.
                </p>
                <p>
                  V praxi preto bývajú jednoduché prípady rýchlejšie, ale sporné prípady sa môžu
                  natiahnuť na <strong>niekoľko týždňov alebo mesiacov</strong>.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Chcete rýchlo preveriť, či má váš prípad šancu na vyplatenie?"
            description="ClaimWinger vie pomôcť rozlíšiť, či riešite refundáciu, kompenzáciu alebo oboje, a či váš prípad vyzerá skôr ako rýchla priamočiara vec alebo spornejší prípad."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=compensation_timeline"
            ctaLabel="Preveriť prípad cez ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_compensation_timeline_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Najdôležitejšie rozlíšenie: refundácia vs kompenzácia
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Refundácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Refundácia rieši cenu letenky alebo nevyužitej časti cesty. Pri zrušení letu alebo
                  pri situácii, keď už nechcete cestovať po veľkom meškaní, má práve táto časť pravidiel
                  jasnejšiu lehotu 7 dní.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Kompenzácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Kompenzácia je peňažné odškodnenie za stratu času a nepríjemnosti. Pri nej pravidlá
                  EÚ nehovoria o jednej univerzálnej lehote vyplatenia, a preto prax kolíše podľa
                  aerolinky a povahy prípadu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Ako dlho to trvá v praxi
            </h2>
            <div className="grid gap-4">
              <Card className="border-green-200 p-6 dark:border-green-800">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Rýchlejší prípad
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Jasné meškanie alebo zrušenie, dobré dokumenty, žiadny vážny spor o mimoriadne
                  okolnosti. Takéto prípady sa môžu vyriešiť relatívne rýchlo, často v horizonte
                  niekoľkých týždňov.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Bežný prípad
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aerolinka odpovedá pomaly, pýta si doplnenie, alebo formálne skúma príčinu problému.
                  Tu sa často hrá o horizont niekoľkých týždňov až mesiacov.
                </p>
              </Card>
              <Card className="border-red-200 p-6 dark:border-red-800">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Pomalší a sporný prípad
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Spor o mimoriadne okolnosti, neodpovedanie aerolinky alebo potreba ďalšej eskalácie.
                  Vtedy už treba rátať s tým, že proces môže trvať výrazne dlhšie než jednoduchý
                  priamočiary prípad.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo najčastejšie predlžuje vyplatenie
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "neúplné dokumenty alebo chýbajúca rezervácia",
                "spor o mimoriadne okolnosti",
                "nejasnosť, či ide o refundáciu, kompenzáciu alebo oboje",
                "prestupný let a spor o konečný cieľ",
                "slabá alebo oneskorená odpoveď aerolinky",
                "potreba eskalácie mimo bežný prvý krok reklamácie",
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
              Kedy čakať 7 dní a kedy nie
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Ak žiadate <strong>refundáciu ceny letenky</strong>, pravidlá EÚ pri relevantných
                situáciách hovoria o lehote <strong>7 dní</strong>. To je dôležité najmä pri zrušení
                letu alebo keď sa po veľkom meškaní rozhodnete už necestovať a chcete späť cenu letenky.
              </p>
              <p>
                Pri <strong>kompenzácii podľa EU261</strong> je situácia iná. Oficiálne FAQ EÚ
                výslovne hovoria, že pravidlá <strong>nestanovujú jednotnú lehotu vyplatenia
                kompenzácie</strong>. Preto sa neoplatí veriť jednoduchej vete typu „vždy to musí byť
                do 7 dní“. To nie je presné.
              </p>
              <p>
                Prakticky to znamená, že refundácia a kompenzácia môžu mať v jednom prípade úplne iný
                časový priebeh. Refundácia môže mať jasnejší termín, zatiaľ čo kompenzácia sa ešte bude
                riešiť a posudzovať.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Potrebujete odlíšiť rýchlu refundáciu od dlhšieho procesu kompenzácie?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Najpraktickejšie je najprv si ujasniť, či sa vo vašom prípade hrá o meškajúci let,
                zrušený let alebo kombináciu refundácie a kompenzácie. Od toho sa odvíja aj realistický
                časový priebeh celej veci.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_compensation_timeline_final_cta_delay", delayedFlightHref)
                    }
                  >
                    Riešim meškajúci let
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
                        "sk_compensation_timeline_final_cta_cancelled",
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
              Súvisiace články
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Čo robiť, keď aerolinka neodpovedá
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak je problém hlavne v tom, že sa reklamácia nehýbe, ďalší krok je riešiť skôr
                  neodpovedanie než samotnú dĺžku procesu.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_compensation_timeline_related_home", claimWingerHomeHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Pozrieť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Môžem žiadať odškodnenie za starý let?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Keď sa prípad vlečie dlho, ľudia sa často pýtajú aj na to, ako dlho ostáva nárok vôbec živý.
                </p>
                <Link
                  href="/sk/blog/mozem-ziadat-odskodnenie-za-stary-let-2-3-roky"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o starom lete
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Voucher, refundácia a kompenzácia
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa v prípade objavil aj voucher, najprv treba vedieť, aký typ peňazí vlastne riešite.
                </p>
                <Link
                  href="/sk/blog/mozem-ziadat-odskodnenie-ak-som-prijal-voucher"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o voucheri
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
