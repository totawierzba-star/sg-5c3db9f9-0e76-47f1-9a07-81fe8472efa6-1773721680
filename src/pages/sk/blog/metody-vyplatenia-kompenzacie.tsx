import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/metody-vyplatenia-kompenzacie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=payout_methods";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=payout_methods";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=payout_methods";

const faqItems = [
  {
    question: "Aké formy vyplatenia kompenzácie povoľuje EU261?",
    answer:
      "Článok 7 ods. 3 nariadenia povoľuje hotovosť, bankový prevod, elektronický bankový transfer, bankové šeky alebo (s písomným súhlasom cestujúceho) cestovné vouchery. Platí princíp: aerolinka nemôže voucher cestujúcemu nanútiť.",
  },
  {
    question: "Môže mi aerolinka dať voucher namiesto peňazí?",
    answer:
      "Len ak výslovne a písomne súhlasíte. Pri kompenzácii za zrušenie či meškanie máte právo žiadať hotovosť alebo bankový prevod. Vouchery často ponúkajú aerolinky prednostne, pretože sú pre ne lacnejšie.",
  },
  {
    question: "Ako rýchlo mi aerolinka vyplatí kompenzáciu po schválení?",
    answer:
      "Bežne 14 – 30 dní od schválenia nároku. Pri bankovom prevode v rámci EÚ do 3 pracovných dní po iniciácii. Pri šekoch alebo poštových poukazoch dlhšie – niekedy 4 – 6 týždňov.",
  },
  {
    question: "Čo ak aerolinka pošle peniaze na nesprávny účet?",
    answer:
      "Ak ste uviedli chybný IBAN, aerolinka bude tvrdiť, že povinnosť splnila. Vždy dvakrát skontrolujte údaje. Ak chybu urobila aerolinka, má povinnosť peniaze doručiť – nové transakcia alebo oprava IBAN.",
  },
  {
    question: "Dostanem kompenzáciu aj ak žijem mimo EÚ?",
    answer:
      "Áno. EU261 sa vzťahuje na lety, nie na pasažierov podľa miesta bydliska. Aerolinka musí vyplatiť kompenzáciu bez ohľadu na to, kam ju treba poslať – IBAN aj mimo SEPA funguje, hoci s dodatočnými poplatkami.",
  },
  {
    question: "Je vouchera 125 % hodnoty lepšia voľba než hotovosť?",
    answer:
      "Zvyčajne nie. Voucher má obmedzené platnosti, expiráciu, obmedzenia na destinácie alebo sezóny. Hotovosť je univerzálna. Voucher zvažujte len ak máte konkrétny plán ho využiť v krátkom čase s tou istou aerolinkou.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function MetodyVyplateniaKompenzaciePage() {
  return (
    <LayoutSk>
      <SEO
        title="Metódy vyplatenia kompenzácie za let: prevod, šek alebo voucher?"
        description="Prehľad spôsobov, akými aerolinky vyplácajú odškodnenie EU261. Čo musíte prijať, čo môžete odmietnuť a ako sa vyhnúť trikom s vouchermi. Kompletný sprievodca."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Metódy vyplatenia kompenzácie za let",
            description:
              "Prevod, šek, voucher, hotovosť – akú formu vyplatenia musí aerolinka ponúknuť podľa EU261 a ktorú máte právo žiadať.",
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
                name: "Metódy vyplatenia kompenzácie",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-lime-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Metódy vyplatenia kompenzácie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2 text-sm font-medium text-lime-700 dark:bg-lime-900/30 dark:text-lime-300">
              Peniaze vs voucher – čo si vybrať
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Metódy vyplatenia kompenzácie: prevod, šek alebo voucher?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Keď vám aerolinka schváli kompenzáciu, často sa objaví otázka – dostanete peniaze na účet
              alebo len voucher? Nariadenie EU261 dáva cestujúcemu jasnú ochranu: aerolinka{" "}
              <strong>nesmie voucher nanútiť</strong> a vždy musíte mať možnosť žiadať hotovosť alebo
              bankový prevod. V tomto článku prejdeme všetky formy vyplatenia, ich výhody aj trik, na
              ktorý si dajte pozor. Nárok si môžete overiť cez{" "}
              <a
                href={claimWingerHomeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_payout_methods_intro", claimWingerHomeHref)}
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
                <span>Čítanie: 8 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-lime-200 bg-gradient-to-br from-lime-600 to-green-700 p-8 text-white shadow-xl dark:border-lime-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-lime-50">
                <p>
                  EU261 čl. 7 ods. 3: <strong>hotovosť, bankový prevod, elektronický transfer alebo
                  bankový šek</strong> – to musí aerolinka ponúknuť.
                </p>
                <p>
                  <strong>Voucher</strong> je možný <strong>len s písomným súhlasom</strong> cestujúceho.
                </p>
                <p>
                  Najrýchlejšia a najčistejšia forma: <strong>SEPA prevod na IBAN</strong> (3 pracovné
                  dni). Najpomalšia: <strong>poštový šek</strong> alebo zahraničný bankový šek
                  (4 – 6 týždňov).
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Aerolinka vám ponúkla voucher? Zvážte prevod na účet"
            description="ClaimWinger zariadi, aby vám kompenzácia prišla priamo na slovenský IBAN – bez voucheru, bez obmedzení. Overenie zdarma."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=payout_methods"
            ctaLabel="Získať peniaze na účet"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_payout_methods_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              5 metód vyplatenia podľa EU261
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  1. Bankový prevod na IBAN (najčastejšie)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najbežnejšia a najrýchlejšia forma. V rámci SEPA do 3 pracovných dní po iniciácii.
                  Bez poplatkov pri eurovom prevode medzi slovenskou a európskou bankou. Toto je forma,
                  ktorú by ste mali vždy žiadať.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  2. Hotovosť
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  V praxi zriedka – aerolinky ponúkajú len na letisku priamo po udalosti. Pri sumách
                  do 250 € môže byť použiteľná, ale nie je štandard. Ak ju nechcete, máte právo žiadať
                  prevod.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  3. Bankový šek (cestovný šek)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Typická forma v USA a UK. Na Slovensku menej praktická – trvanie inkaso 2 – 4 týždne,
                  banka si účtuje poplatok. Požiadajte radšej bankový prevod, pokiaľ aerolinka
                  nerešpektuje IBAN.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  4. Elektronický transfer (PayPal, Wise)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Niektoré aerolinky ponúkajú PayPal. Zvyčajne rýchle (do 1 dňa) a bez priamych
                  poplatkov, ale s kurzovou stratou pri inej mene. Pre slovenského pasažiera v eurách
                  rovnaký výsledok ako SEPA.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  5. Voucher / letecký kredit (s vaším súhlasom)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aerolinka môže ponúknuť voucher, často s bonusom (napr. 125 % nominálnej hodnoty).
                  Legálne je to možné LEN s vaším <strong>výslovným písomným súhlasom</strong>. Ak ste
                  ho neodsúhlasili podpisom alebo kliknutím v e-maili, voucher vás neviaže.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Pozor na trik s voucherom
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Bežný scenár: aerolinka vám pošle e-mail s odkazom „Preberte svoju kompenzáciu" a po
                kliknutí sa objaví rozhranie, kde automaticky navrhne voucher 125 % sumy. Voucher
                vyzerá výhodnejšie, ale v skutočnosti má:
              </p>
              <ul>
                <li>
                  <strong>Krátku platnosť</strong> (často 12 mesiacov, niekedy menej).
                </li>
                <li>
                  <strong>Obmedzenie na konkrétnu aerolinku</strong> – ak s ňou viac neletíte, peniaze
                  stratíte.
                </li>
                <li>
                  <strong>Vylúčené sezóny</strong> – často bez platnosti cez Vianoce, leto, jarné
                  prázdniny.
                </li>
                <li>
                  <strong>Nemožnosť vrátenia</strong> – raz prijatý voucher sa nedá zmeniť na peniaze.
                </li>
              </ul>
              <p>
                Rada: Vždy najprv kliknite na opciu „Vyplatiť v hotovosti" alebo „Požadovať bankový
                prevod". Ak ju systém aerolinky skrýva, napíšte e-mail s explicitnou žiadosťou o prevod
                podľa článku 7 ods. 3 EU261. Viac v článku{" "}
                <Link
                  href="/sk/blog/mozem-ziadat-odskodnenie-ak-som-prijal-voucher"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Môžem žiadať odškodnenie, ak som prijal voucher?
                </Link>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Ako dlho trvá vyplatenie
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  SEPA prevod (EUR)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  <strong>1 – 3 pracovné dni</strong> od iniciácie. Bezplatné medzi EÚ bankami.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  PayPal / Wise
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  <strong>Pár hodín až 1 deň</strong>. Pozor na konverziu meny, ak nie v EUR.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Zahraničný bankový prevod
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  <strong>3 – 7 pracovných dní</strong>. Môžu byť poplatky pri non-EUR.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Bankový šek (cestovný šek)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  <strong>4 – 6 týždňov</strong>. Zahŕňa poštovú doručenku aj inkaso v banke.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete peniaze na účet čo najrýchlejšie?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger od aerolinky vždy žiada SEPA prevod na IBAN, ktorý uvediete vo formulári.
                Pri úspechu provízia 30 %, nikdy voucher. Preverenie je zdarma.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_payout_methods_final_primary", delayedFlightHref)
                    }
                  >
                    Získať kompenzáciu prevodom
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_payout_methods_final_secondary", cancelledFlightHref)
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
                  Voucher namiesto kompenzácie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Môžete žiadať hotovosť, aj keď aerolinka ponúkla voucher? Áno – a tu je návod ako.
                </p>
                <Link
                  href="/sk/blog/mozem-ziadat-odskodnenie-ak-som-prijal-voucher"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ako dlho trvá vyplatenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Celý proces od podania reklamácie až po prijatie peňazí na účet.
                </p>
                <Link
                  href="/sk/blog/ako-dlho-trva-vyplatenie-odskodnenia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Najrýchlejší spôsob ziskania peňazí
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Porovnanie stratégií, ako čo najrýchlejšie dostať peniaze na účet.
                </p>
                <Link
                  href="/sk/blog/najrychlejsi-sposob-ziskania-penazi-za-let"
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
