import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/kto-zaplati-odskodnenie-codeshare-lety";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=codeshare";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=codeshare";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=codeshare";

const faqItems = [
  {
    question: "Čo je codeshare let a prečo je to dôležité pri reklamácii?",
    answer:
      "Codeshare je dohoda medzi dvoma aerolinkami, kde jedna predáva miesta na lete operovanom druhou. Pri reklamácii podľa EU261 je kľúčové rozlíšiť aerolinku predávajúcu (marketing carrier) a operujúcu (operating carrier) – pretože kompenzáciu musí vyplatiť vždy operujúca aerolinka.",
  },
  {
    question: "Ako zistím, ktorá aerolinka let naozaj operuje?",
    answer:
      "V potvrdení rezervácie je uvedený údaj operated by X. Alternatívne je to zrejmé z boarding passu – tam je uniforma posádky a logo na lietadle. Nepomýľte si marketing code (napr. LO1234) s operating code (napr. KL5678) toho istého letu.",
  },
  {
    question: "Môžem reklamovať u aerolinky, u ktorej som kúpil lístok?",
    answer:
      "Môžete jej prípad oznámiť, ale povinnosť zaplatiť kompenzáciu má operujúca aerolinka. V praxi marketing carrier často prípad presmeruje na operujúcu aerolinku, čo predlžuje celý proces.",
  },
  {
    question: "Platí EU261 pri codeshare lete mimo EÚ?",
    answer:
      "Záleží na tom, kto let operuje. Ak je to EÚ aerolinka (napr. Lufthansa na Air India linke), EU261 sa uplatňuje na lety z EÚ a na lety do EÚ pri EÚ aerolinkách. Pri mimoEÚ operujúcej aerolinke na lete mimo EÚ sa EU261 nemusí aplikovať.",
  },
  {
    question: "Čo ak nastal problém kvôli partnerskej aerolinke?",
    answer:
      "Aj keď problém spôsobila partnerská (nepredávajúca) aerolinka, povinnosť zaplatiť kompenzáciu zostáva na operujúcej aerolinke. Tá si medzi sebou vzťahy s partnerom rieši samostatne, to nemá dopad na vaše práva.",
  },
  {
    question: "Sťažuje codeshare cestu k reklamácii?",
    answer:
      "Áno, často. Marketing aerolinka občas odmieta komunikovať, operujúca zase pripomína, že neviete, ktorú máte kontaktovať. Preto sa oplatí uviesť obe aerolinky v reklamácii a pripraviť sa na dlhšiu korešpondenciu alebo odovzdať prípad špecializovanej firme.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function KtoZaplatiOdskodnenieCodeshareLetyPage() {
  return (
    <LayoutSk>
      <SEO
        title="Codeshare lety: ktorá aerolinka platí odškodnenie za meškanie?"
        description="Kúpili ste let cez jednu aerolinku, ale letelo ju iná? Vysvetľujeme, kto podľa EU261 platí kompenzáciu pri codeshare letoch a ako reklamovať v zložitom prostredí aliancií."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Codeshare lety: kto platí odškodnenie?",
            description:
              "Kompenzáciu podľa EU261 musí vyplatiť aerolinka, ktorá let operuje, nie marketingová aerolinka, u ktorej ste lístok kúpili.",
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
                name: "Codeshare lety: kto platí odškodnenie?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Codeshare lety: kto platí</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
              Codeshare a aliancie (Star Alliance, SkyTeam, OneWorld)
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Codeshare lety: ktorá aerolinka platí odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Kúpili ste lístok cez Lufthansu, ale letíte United Airlines. Alebo cez KLM, ale stroj
              je od Delta. Pri codeshare letoch sa často pýtate, kto zaplatí kompenzáciu pri meškaní.
              EU261 má <strong>jednoznačnú odpoveď</strong> – musí ju vyplatiť <strong>operujúca
              aerolinka</strong>, nie tá, u ktorej ste si lístok kúpili. Prečítajte si, ako to
              v praxi funguje, a ak chcete nechať reklamáciu na profesionálov,{" "}
              <a
                href={claimWingerHomeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_codeshare_intro", claimWingerHomeHref)}
              >
                ClaimWinger Slovensko
              </a>{" "}
              to zvládne za vás.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 24. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 9 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-violet-200 bg-gradient-to-br from-violet-600 to-purple-700 p-8 text-white shadow-xl dark:border-violet-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-violet-50">
                <p>
                  <strong>Operujúca aerolinka</strong> (operating carrier) vždy platí. Aj keď ste
                  lístok kúpili od aerolinky A, ak let operuje aerolinka B, kompenzáciu platí
                  aerolinka B.
                </p>
                <p>
                  Operujúcu aerolinku <strong>nájdete v potvrdení rezervácie</strong> pri údaji
                  „operated by" alebo na boarding passe/tabuli v deň letu.
                </p>
                <p>
                  V reklamácii uveďte <strong>obe aerolinky</strong>. Získate tým čas aj tlak na
                  obidvoch, aby problém vyriešili.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Zmätok medzi dvoma aerolinkami? ClaimWinger to vyrieši"
            description="Naši špecialisti presne identifikujú operujúcu aerolinku, pošlú reklamáciu správnej strane a ustránia typické trik aerolínií „to nie sme my, to sú oni"."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=codeshare"
            ctaLabel="Odovzdať codeshare prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_codeshare_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Marketing vs. operating carrier – aký je rozdiel
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Marketing carrier (marketingová aerolinka)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aerolinka, ktorá predala lístok a ktorej meno je uvedené na rezervácii. Typicky má
                  svoj vlastný kód v čísle letu (napr. LO 1100). Pri reklamácii ju môžete kontaktovať,
                  ale kompenzáciu priamo nevypláca.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Operating carrier (operujúca aerolinka)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aerolinka, ktorá reálne let operuje – posádku, lietadlo, odchod z rampy. Má svoj
                  vlastný kód letu (operated by). Podľa EU261 je zodpovedná za kompenzáciu. Ona
                  vypláca peniaze.
                </p>
              </Card>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Pravidlo pochádza priamo z nariadenia <strong>EC 261/2004</strong>, čl. 2 písm. b),
              ktorý definuje „operating air carrier" ako aerolinku, ktorá vykonáva let, a čl. 3 ods. 5,
              podľa ktorého sa povinnosti z nariadenia vzťahujú na operujúcu aerolinku.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Ako zistiť, kto let naozaj operuje
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  1. Potvrdenie rezervácie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hľadajte riadok <em>Operated by [aerolinka]</em> alebo <em>Flight operated by</em>.
                  Niekedy je tam aj poznámka, že let operuje partnerská spoločnosť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  2. Webstránka aerolinky
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri zadaní čísla letu na Flightradar24, stránke aerolinky alebo letiska býva údaj
                  operated by jasne uvedený. Užitočné pri zložitých aliančných trasách.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  3. Logo na lietadle a uniformy posádky
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  V deň letu skontrolujte logo na lietadle a uniformy. Fotografia je užitočným dôkazom
                  pri reklamácii – aerolinka B nemôže tvrdiť, že let operovala, ak sedíte v stroji
                  s logom aerolinky C.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  4. Boarding pass – kód letu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dvojpísmenový kód na začiatku čísla letu (napr. LH pre Lufthansa, AF pre Air France)
                  často zodpovedá marketingovej aerolinke. Operating code býva uvedený menším písmom
                  v rohu boarding passu alebo v rezervácii.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické codeshare scenáre
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  LOT predáva, Lufthansa operuje (Star Alliance)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Bežné pri dlhých linkách cez Varšavu alebo Mníchov. Kompenzáciu pri meškaní vypláca
                  <strong> Lufthansa</strong>, aj keď ste mali rezerváciu u LOT. LOT prípad
                  pravdepodobne presmeruje na Lufthansu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  KLM predáva, Delta operuje (SkyTeam)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Transatlantické linky s rezerváciou cez KLM, ale reálnym strojom Delta. Pri meškaní
                  letu z Amsterdamu (operatérom Delta) reklamujete na <strong>Delta</strong>. EU261
                  platí, lebo let odlieta z EÚ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  British Airways predáva, American Airlines operuje (OneWorld)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Let London – New York cez BA kód, ale operátorom AA. Kompenzáciu vypláca{" "}
                  <strong>American Airlines</strong>. Uk261 alebo EU261 platí podľa krajiny odletu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Wet-lease: Ryanair posiela na let Malta Air alebo Lauda
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri wet-lease operuje dcérska spoločnosť skupiny. Pri Ryanair skupine je to bežné
                  (Ryanair / Malta Air / Lauda / Buzz). Reklamujete aerolinku, ktorá je uvedená
                  v operated by na rezervácii.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Praktické tipy pri reklamácii codeshare letu
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "v reklamácii uveďte obe aerolinky (marketing aj operating)",
                "v predmete e-mailu uveďte: EU261 compensation + letter number",
                "priložte rezerváciu s viditeľným operated by",
                "ak vás presmerujú, vždy žiadajte oficiálne oznámenie",
                "udržujte paralelnú korešpondenciu s oboma aerolinkami",
                "pri mlčaní nad 6 týždňov eskalujte na NEB krajiny odletu",
                "nepríjmite argument „to nebol náš let" – overte operated by",
                "pri súdnej ceste žaluje sa operujúca aerolinka",
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
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Codeshare reklamácia je často komplikovaná
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak vám dve aerolinky dlhodobo posielajú reklamáciu medzi sebou, ClaimWinger presne
                identifikuje operujúcu stranu a vymáha kompenzáciu priamo u nej. Našu úspešnosť
                a proces vidíte v článku{" "}
                <Link
                  href="/sk/blog/claimwinger-vs-airhelp-vs-skycop"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  porovnanie ClaimWinger vs AirHelp vs Skycop
                </Link>
                .
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_codeshare_final_primary", delayedFlightHref)}
                  >
                    Riešiť codeshare meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_codeshare_final_secondary", cancelledFlightHref)
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
                  Platí odškodnenie pri prestupe?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Prestupy + codeshare často idú ruka v ruke – pozrite komplexný pohľad.
                </p>
                <Link
                  href="/sk/blog/plati-odskodnenie-pri-prestupe"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Viac letov v jednej rezervácii
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ako sa to rieši pri dvoch sekvenčných letoch v jednej PNR.
                </p>
                <Link
                  href="/sk/blog/viac-letov-v-jednej-rezervacii"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Zmeškaný prestup mimo EÚ
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Špecifické pravidlá pri prestupoch mimo EÚ a non-EÚ aerolinkami.
                </p>
                <Link
                  href="/sk/blog/zmeskany-prestup-mimo-eu"
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
