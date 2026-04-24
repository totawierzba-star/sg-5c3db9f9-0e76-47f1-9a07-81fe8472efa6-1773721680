import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/brussels-airlines-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=brussels_airlines";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=brussels_airlines";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=brussels_airlines";

const faqItems = [
  {
    question: "Mám pri lete Brussels Airlines nárok na odškodnenie?",
    answer:
      "Áno, Brussels Airlines (SN) je belgická aerolinka v Lufthansa Group s plným AOC z EÚ. Lety pod jej označením spadajú pod EU261 pri odlete z EÚ aj pri návrate do EÚ z tretích krajín.",
  },
  {
    question: "Brussels Airlines lieta do Bratislavy alebo Viedne?",
    answer:
      "Brussels Airlines nemá priamy denný spoj do Bratislavy, ale pravidelne lieta do Viedne a Budapešti. Pre slovenských cestujúcich je najčastejšia kombinácia s prestupom cez Brussels na lety do Afriky (Dakar, Abidjan, Kigali, Addis Abeba, Nairobi).",
  },
  {
    question: "Koľko dostanem za meškanie Brussels Airlines?",
    answer:
      "250 € do 1 500 km (krátke trasy v rámci EÚ), 400 € 1 500 – 3 500 km (napr. Brussels – Tel Aviv), 600 € nad 3 500 km mimo EÚ (napr. Brussels – New York, Brussels – Dakar).",
  },
  {
    question: "Ako reklamovať Brussels Airlines?",
    answer:
      "Cez oficiálny formulár na brusselsairlines.com v sekcii Customer relations / EU261. Alternatívne e-mailom. Brussels Airlines ako súčasť Lufthansa Group má pomerne štruktúrovaný proces reklamácií.",
  },
  {
    question: "Čo mimoriadne okolnosti pri Brussels Airlines?",
    answer:
      "Najčastejšie uvádzané: štrajky v Belgicku (bývajú relatívne časté), uzavretie vzdušného priestoru, politická nestabilita v afrických destináciách. Pri sporných prípadoch žiadajte konkrétne dôkazy.",
  },
  {
    question: "Brussels Airlines vypláca v eurách?",
    answer:
      "Áno. Brussels Airlines patrí do EÚ a štandardne vypláca kompenzáciu v EUR bankovým prevodom na IBAN.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function BrusselsAirlinesOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Brussels Airlines odškodnenie: kedy máte nárok na 250–600 €"
        description="Brussels Airlines (SN) meškal alebo zrušil let? Prehľad nárokov podľa EU261 pri letoch z Bruselu, Afriky aj transatlantických trasách. Postup reklamácie krok za krokom."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Brussels Airlines odškodnenie podľa EU261",
            description:
              "Sprievodca nárokom na kompenzáciu pri meškaní alebo zrušení letu Brussels Airlines.",
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
                name: "Brussels Airlines odškodnenie",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Brussels Airlines odškodnenie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              Brussels Airlines · Lufthansa Group · EÚ AOC
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Brussels Airlines odškodnenie podľa EU261
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Brussels Airlines (kód <strong>SN</strong>) je vlajková aerolinka Belgicka a súčasť
              Lufthansa Group. Pre slovenských cestujúcich je najčastejšie využívaná pri prestupoch
              do Afriky alebo na východné pobrežie USA. Ako EÚ aerolinka spadá pod plné pravidlá
              EU261 – pri meškaní nad 3 hodiny alebo zrušení môžete žiadať kompenzáciu 250 – 600 €.
              Ak si chcete ušetriť papierovanie, overte si nárok cez{" "}
              <a
                href={claimWingerHomeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_brussels_airlines_intro", claimWingerHomeHref)}
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
            <Card className="border-red-200 bg-gradient-to-br from-red-600 to-rose-700 p-8 text-white shadow-xl dark:border-red-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-red-50">
                <p>
                  Brussels Airlines = EÚ aerolinka = plné pokrytie EU261 pri odlete z EÚ aj pri návrate
                  do EÚ z tretích krajín.
                </p>
                <p>
                  Kompenzácia <strong>250 / 400 / 600 €</strong> podľa vzdialenosti. Typická hodnota
                  pre long-haul z Bruselu do USA/Afriky je 600 €.
                </p>
                <p>
                  Belgické štrajky bývajú časté – aerolinka ich často uvádza ako mimoriadne okolnosti.
                  Žiadajte konkrétne dôkazy.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Brussels Airlines meškal alebo zrušil let?"
            description="ClaimWinger preverí trasu, zistí skutočný dôvod meškania a pripraví reklamáciu priamo na Brussels Airlines. Vo zvýšenej úspešnosti pomáha aj znalosť typických argumentov Lufthansa Group."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=brussels_airlines"
            ctaLabel="Preveriť Brussels Airlines prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_brussels_airlines_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické trasy Brussels Airlines a výška kompenzácie
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krátke európske trasy – 250 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Brussels – Viedeň, Brussels – Budapešť, Brussels – Varšava, Brussels – Praha.
                  Typicky pod 1 500 km, nárok 250 € pri 3+ hodinách meškania.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Stredné trasy – 400 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Brussels – Tel Aviv, Brussels – Istanbul, Brussels – Moskva (pozastavené), Brussels –
                  Lisabon, Brussels – Madrid. 1 500 – 3 500 km mimo EÚ alebo v EÚ nad 1 500 km = 400 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Long-haul – 600 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Brussels – New York JFK, Brussels – Washington, Brussels – Abidjan, Brussels –
                  Dakar, Brussels – Kigali, Brussels – Kinshasa. Nad 3 500 km mimo EÚ = 600 € pri 4+
                  hodinovom meškaní.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Brussels Airlines a africké linky: špecifiká
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Brussels Airlines má jednu z najširších afrických sietí spomedzi európskych aerolínií.
                Pre slovenských cestujúcich to znamená:
              </p>
              <ul>
                <li>
                  <strong>Lety z Bruselu do Afriky</strong> (napr. do Nairobi, Dakaru, Kigali) –
                  odlet z EÚ, plné EU261.
                </li>
                <li>
                  <strong>Lety z Afriky do Bruselu</strong> – návrat do EÚ s EÚ aerolinkou: EU261
                  platí v plnom rozsahu.
                </li>
                <li>
                  <strong>Miestne problémy</strong>: v afrických letiskách je bežnejšie zlé počasie
                  (monzóny), štrajky, prevádzkové problémy. Brussels Airlines ich často uvádza ako
                  mimoriadne okolnosti. Pri sporných prípadoch treba konkrétne dôkazy a niekedy
                  pomáha súdne konanie.
                </li>
              </ul>
              <p>
                Pre prípady s africkým zázemím je vhodné odovzdať prípad špecializovanej firme, ktorá
                má lokálne kontakty a judikatúru.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Ako reklamovať Brussels Airlines krok za krokom
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krok 1 – Formulár Customer relations
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Na brusselsairlines.com v sekcii Contact nájdete formulár EU261 claim. Zadajte PNR,
                  číslo letu a presný opis meškania.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krok 2 – Odpoveď do 28 dní
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Brussels Airlines sa deklaratívne zaväzuje odpovedať do 28 dní. V praxi sa
                  komplikované prípady ťahajú aj 6 – 8 týždňov.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krok 3 – Eskalácia na belgický regulátor
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri sporných prípadoch z Bruselu je príslušný belgický SPF Mobilité / FOD Mobiliteit.
                  Pri lete z inej krajiny platí národný regulátor odletu. Pri cestujúcich zo Slovenska
                  alternatívne Dopravný úrad SR.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krok 4 – Súdna cesta alebo firma
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Brussels Airlines akceptuje súdne rozhodnutia rýchlo. Belgické súdy majú rozsiahlu
                  judikatúru k EU261, často v prospech cestujúcich.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Brussels Airlines spor? ClaimWinger rieši aj africké trasy
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri long-haul a afrických prípadoch je dôležitá znalosť lokálnej judikatúry.
                ClaimWinger má skúsenosť s prípadmi Brussels Airlines, Lufthansa a Austrian. Preverenie
                zdarma, provízia 30 % pri úspechu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_brussels_airlines_final_primary", delayedFlightHref)
                    }
                  >
                    Preveriť meškajúci let
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_brussels_airlines_final_secondary", cancelledFlightHref)
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
                  Lufthansa odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Brussels Airlines je v skupine Lufthansy – proces je podobný.
                </p>
                <Link
                  href="/sk/blog/lufthansa-odskodnenie-meskanie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Austrian Airlines odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Austrian tiež v Lufthansa Group – často kombinované trasy.
                </p>
                <Link
                  href="/sk/blog/austrian-airlines-meskanie-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Codeshare lety – kto platí
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dôležité pri Brussels Airlines často operujúcich partnerov v Lufthansa Group.
                </p>
                <Link
                  href="/sk/blog/kto-zaplati-odskodnenie-codeshare-lety"
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
