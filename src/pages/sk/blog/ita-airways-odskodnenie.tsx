import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/ita-airways-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=ita_airways";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=ita_airways";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=ita_airways";

const faqItems = [
  {
    question: "ITA Airways je to isté ako Alitalia?",
    answer:
      "Nie, ITA Airways (Italia Trasporto Aereo) je nová talianska vlajková aerolinka, ktorá vznikla v roku 2021 po zániku Alitalie. Prevzala podstatnú časť flotily a slotov, ale právne je to samostatná spoločnosť. Pri reklamáciách sa adresuje výlučne ITA Airways.",
  },
  {
    question: "Mám pri lete ITA Airways nárok na odškodnenie?",
    answer:
      "Áno. ITA Airways je EÚ aerolinka s talianskym AOC. Plne spadá pod EU261 pri odlete z EÚ aj pri návrate z tretích krajín do EÚ. Od roku 2024 patrí pod Lufthansa Group.",
  },
  {
    question: "Koľko dostanem za meškanie ITA Airways?",
    answer:
      "250 € do 1 500 km (napr. Rím – Viedeň), 400 € 1 500 – 3 500 km (napr. Rím – Dubaj), 600 € nad 3 500 km mimo EÚ (napr. Rím – New York, Rím – Tokio, Rím – Buenos Aires).",
  },
  {
    question: "Ako podať reklamáciu ITA Airways?",
    answer:
      "Cez sekciu Customer Care / Reclamo EU261 na itaspa.com. Reklamáciu môžete poslať v taliančine alebo v angličtine. Proces býva pomalší ako pri nemeckých aerolinkách – odpoveď trvá 4 – 8 týždňov.",
  },
  {
    question: "Môžem reklamovať starý prípad Alitalie?",
    answer:
      "Pri prípadoch z pôvodnej Alitalie sa situácia komplikuje – tá je v likvidácii. Nároky z obdobia pred októbrom 2021 treba uplatňovať voči Alitalia – Società Aerea Italiana in Amministrazione Straordinaria. ITA Airways tieto záväzky neprevzala.",
  },
  {
    question: "ITA Airways má provinciu v USA pri dlhých letoch?",
    answer:
      "ITA Airways operuje transatlantické linky z Ríma (Fiumicino) do New Yorku, Bostonu, Washingtonu, Miami, LA a San Francisca. Pri týchto linkách platí pri odlete z EÚ plné EU261 (600 € pri meškaní 4+ hodiny).",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function ItaAirwaysOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="ITA Airways odškodnenie: nárok podľa EU261 (následník Alitalie)"
        description="ITA Airways meškal alebo zrušil let? Aktuálny sprievodca nárokmi podľa EU261, postup reklamácie a rozdiely oproti Alitalii. Sumy 250–600 €."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "ITA Airways odškodnenie podľa EU261",
            description:
              "Sprievodca nárokmi na kompenzáciu pri meškaní alebo zrušení letu ITA Airways vrátane špecifík novej talianskej vlajkovej aerolinky.",
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
              { "@type": "ListItem", position: 3, name: "ITA Airways odškodnenie", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>ITA Airways odškodnenie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              ITA Airways · Talianska vlajková · Lufthansa Group
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              ITA Airways odškodnenie podľa EU261
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              ITA Airways (kód <strong>AZ</strong>) je talianska vlajková aerolinka, ktorá od roku
              2021 nahradila Alitaliu. V roku 2024 vstúpila pod strešný holding Lufthansa Group. Pre
              slovenského cestujúceho je najčastejšie využívaná pri prestupoch cez{" "}
              <strong>Rím Fiumicino</strong> alebo <strong>Miláno Linate</strong>, najmä na dlhé
              linky do Ameriky, Afriky či Ázie. Ako EÚ aerolinka plne podlieha EU261 – kompenzácia
              250 – 600 €. Overte si nárok{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_ita_airways_intro", delayedFlightHref)}
              >
                cez ClaimWinger
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
                <span>Čítanie: 9 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-600 to-green-700 p-8 text-white shadow-xl dark:border-emerald-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-emerald-50">
                <p>
                  ITA Airways je samostatný subjekt od Alitalie – pri starých prípadoch z Alitalie
                  nemôžete ITA žalovať, len likvidátora.
                </p>
                <p>
                  Sumy <strong>250 / 400 / 600 €</strong> pri meškaní 3+ hodín alebo zrušení 14 dní
                  pred odletom.
                </p>
                <p>
                  Proces reklamácie je pomalší – počítajte 4 – 8 týždňov na odpoveď. Odporúča sa
                  posielať v taliančine alebo anglicky.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="ITA Airways vám meškal transatlantický let?"
            description="Dlhé meškania na linkách Rím – New York / Washington / Miami môžu znamenať 600 € kompenzácie. ClaimWinger sa postará o reklamáciu v taliančine aj o eskaláciu."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=ita_airways"
            ctaLabel="Preveriť ITA Airways prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_ita_airways_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické trasy ITA Airways a kompenzácia
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krátke európske trasy – 250 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Rím – Viedeň, Rím – Budapešť, Miláno – Viedeň, Miláno – Mníchov. Pod 1 500 km =
                  250 € pri 3+ hodinovom meškaní.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Stredné trasy – 400 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Rím – Káhira, Rím – Tel Aviv, Rím – Dubaj, Miláno – Casablanca. 1 500 – 3 500 km
                  mimo EÚ = 400 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Long-haul – 600 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Rím – New York (JFK a Newark), Rím – Boston, Rím – Washington, Rím – Miami, Rím –
                  Los Angeles, Rím – Tokio (Haneda), Rím – Buenos Aires, Rím – São Paulo. Nad 3 500 km
                  mimo EÚ = 600 € pri 4+ hodinovom meškaní.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kľúčový rozdiel: ITA Airways vs Alitalia
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Pri reklamáciách letov spred <strong>15. októbra 2021</strong> ste cestovali s{" "}
                <strong>Alitaliou</strong>, ktorá je v mimoriadnej administrácii (likvidácii). Tieto
                pohľadávky sa riešia u správcu konkurznej podstaty a pravdepodobnosť plnej náhrady je
                nízka.
              </p>
              <p>
                Lety od <strong>15. októbra 2021</strong> sú pod značkou <strong>ITA Airways</strong>
                {" "}– reklamáciu podávate priamo u nej. ITA prevzala flotilu, personál, sloty a
                ochrannú známku „Alitalia", ale <strong>neprevzala</strong> pohľadávky a záväzky
                pôvodnej spoločnosti.
              </p>
              <p>
                V praxi: pri PNR zo septembra 2021 = Alitalia proces. Pri PNR z novembra 2021 = ITA
                Airways proces. Dvakrát skontrolujte, s ktorou aerolinkou ste reálne leteli.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Postup reklamácie ITA Airways
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  1. Vyplňte formulár Reclamo online
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Na itaspa.com v sekcii Customer Care / Modulo di reclamo. Odporúčame posielať
                  v taliančine s anglickým popisom pre prípad, že sa prípad dostane na právny odbor.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  2. Priložte kompletnú dokumentáciu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  PNR, boarding pass, rezerváciu, všetky e-maily a SMS od aerolinky s časmi doručenia,
                  účtenky za výdavky. Taliansky systém je citlivý na formálnu kompletnosť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  3. Čakajte 4 – 8 týždňov
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Proces u ITA Airways býva pomalší ako u Lufthansy alebo KLM. Nestratte trpezlivosť,
                  ale po 8 týždňoch určite eskalujte.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  4. Eskalácia: ENAC alebo súd
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ENAC (Ente Nazionale per l&apos;Aviazione Civile) je taliansky NEB. Alternatívne
                  talianske súdy – majú rozsiahlu pro-passenger judikatúru.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Prenechajte taliansku reklamáciu profesionálom
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Reklamácia v taliančine, komunikácia s ENAC a prípadné súdne konanie sú zložité
                procesy. ClaimWinger má skúsenosť s ITA Airways aj Alitaliou. Preverenie zdarma,
                provízia 30 % pri úspechu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_ita_airways_final_primary", delayedFlightHref)
                    }
                  >
                    Preveriť meškanie ITA
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_ita_airways_final_secondary", cancelledFlightHref)
                    }
                  >
                    Zrušený ITA let
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
                  ITA Airways je v Lufthansa Group – proces je podobný.
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
                  Môžem žiadať starý let 2 – 3 roky?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dôležité pri starých Alitalia prípadoch.
                </p>
                <Link
                  href="/sk/blog/mozem-ziadat-odskodnenie-za-stary-let-2-3-roky"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Predčasný odlet
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Časté pri ITA Airways kvôli rekonfigurácii letového plánu.
                </p>
                <Link
                  href="/sk/blog/predcasny-odlet-letu-odskodnenie"
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
