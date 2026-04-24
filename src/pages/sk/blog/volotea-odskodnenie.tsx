import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/volotea-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=volotea";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=volotea";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=volotea";

const faqItems = [
  {
    question: "Volotea je EÚ aerolinka a spadá pod EU261?",
    answer:
      "Áno. Volotea (kód V7) je španielska low-cost aerolinka so sídlom v Barcelone, operuje s talianskym a španielskym AOC. Lety z EÚ letísk plne podliehajú EU261.",
  },
  {
    question: "Koľko dostanem za meškanie letu Volotea?",
    answer:
      "250 € pri krátkych trasách do 1 500 km, 400 € v EÚ nad 1 500 km alebo mimo EÚ 1 500 – 3 500 km. Volotea neoperuje long-haul – 600 € v praxi nepríde do úvahy.",
  },
  {
    question: "Volotea lieta z Bratislavy alebo Viedne?",
    answer:
      "Volotea nelieta z Bratislavy. Lieta z Viedne a z Budapešti do sezónnych destinácií v Taliansku, Grécku, Chorvátsku a na Cypre. Pre slovenských cestujúcich ide najčastejšie o letné destinácie.",
  },
  {
    question: "Ako reklamovať Volotea?",
    answer:
      "Cez online formulár Ayuda / Contacto na volotea.com. Vyberte kategóriu Derechos de los pasajeros / Passenger rights. Odporúča sa posielať v angličtine alebo španielčine.",
  },
  {
    question: "Volotea odpovedá rýchlo?",
    answer:
      "Proces je obvykle pomalší ako u Ryanair alebo Wizz Air. Očakávajte 4 – 6 týždňov na prvú odpoveď. Niekedy aj dlhšie – najmä v letných mesiacoch, keď je množstvo reklamácií najvyššie.",
  },
  {
    question: "Volotea ma často zrušuje lety mimo sezóny – dostanem kompenzáciu?",
    answer:
      "Volotea viackrát upravuje svoj letový poriadok pred sezónou. Ak sa zrušenie deje aspoň 14 dní pred odletom, kompenzácia nevzniká – máte však právo na refundáciu alebo presmerovanie. Pri neskoršom oznámení nárok vzniká.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function VoloteaOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Volotea odškodnenie: kedy vzniká nárok a koľko peňazí dostanete"
        description="Volotea vám meškal alebo zrušil let z Viedne, Budapešti alebo iného mesta? Prehľad nárokov podľa EU261, typických trás a postupu reklamácie."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Volotea odškodnenie podľa EU261",
            description:
              "Sprievodca nárokom na kompenzáciu pri meškaní alebo zrušení letu španielskej low-cost aerolinky Volotea.",
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
              { "@type": "ListItem", position: 3, name: "Volotea odškodnenie", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Volotea odškodnenie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-fuchsia-100 px-4 py-2 text-sm font-medium text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
              Volotea · Španielska low-cost · sezónne lety
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Volotea odškodnenie: EU261 práva pre slovenských cestujúcich
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Volotea (kód <strong>V7</strong>) sa špecializuje na sezónne spojenia medzi stredne
              veľkými európskymi letiskami. Pre slovenských cestujúcich ide najčastejšie o lety{" "}
              <strong>z Viedne alebo Budapešti</strong> do Grécka, na Sardíniu, do Talianska či na
              Cyprus. Ako EÚ aerolinka podlieha plne pravidlám EU261. Overte nárok cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_volotea_intro", delayedFlightHref)}
              >
                ClaimWinger
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
            <Card className="border-fuchsia-200 bg-gradient-to-br from-fuchsia-600 to-pink-700 p-8 text-white shadow-xl dark:border-fuchsia-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-fuchsia-50">
                <p>Volotea = EÚ aerolinka = plné pokrytie EU261 pri letoch z EÚ.</p>
                <p>
                  Sumy: typicky <strong>250 €</strong> (krátke trasy) alebo{" "}
                  <strong>400 €</strong> (stredne dlhé).
                </p>
                <p>
                  Volotea mení poriadok lety pred sezónou – pri zrušeniach oznámených viac ako 14 dní
                  vopred kompenzácia nevzniká, ale máte refundáciu.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Volotea meškal alebo zrušil váš let do prímorskej destinácie?"
            description="Leto je hlavná sezóna pre Volotea a zároveň čas najčastejších problémov. ClaimWinger vie situáciu rýchlo vyhodnotiť a podať reklamáciu za vás."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=volotea"
            ctaLabel="Preveriť Volotea prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_volotea_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické trasy Volotea a výška kompenzácie
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Viedeň – Olbia (Sardínia)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ~1 100 km, krátka trasa = 250 € pri 3+ hodinovom meškaní.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Viedeň – Cagliari (Sardínia)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ~1 200 km, krátka trasa = 250 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Viedeň – Santorini / Korfu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ~1 500 – 1 700 km, stredná trasa = zvyčajne 250 € pri meškaní 3+ hodín, 400 €
                  nad 1 500 km.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Budapešť – Paphos / Larnaka (Cyprus)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ~2 100 km, v rámci EÚ = 400 € pri 3+ hodinovom meškaní.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Časté problémy so sezónnymi letmi Volotea
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Zrušenie linky pred sezónou
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Volotea pred každou sezónou upravuje flotilu a poriadok. Zrušenia oznámené viac
                  než 14 dní vopred nezakladajú nárok na kompenzáciu, máte však právo na plnú
                  refundáciu ceny letu do 7 dní.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Meškanie pre ranné rotácie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Volotea má často reťaz 4 – 5 letov denne s tým istým strojom. Ranné meškanie sa
                  nabaľuje a popoludní dosahuje 4+ hodín. Dôvod rotácia lietadla nie je mimoriadna
                  okolnosť – nárok vzniká.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Letné búrky v Stredomorí
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nepravidelné búrky nad Jadranským alebo Egejským morom môžu znamenať odstavenie
                  letu. Ak sú potvrdené meteorologickým reportom, sú mimoriadnou okolnosťou. Žiadajte
                  dôkazy.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Volotea vám narušila dovolenku?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger preverí, či meškanie spôsobila skutočne mimoriadna okolnosť, alebo
                bežný prevádzkový problém. Reklamáciu spíše v angličtine alebo španielčine a podá
                priamo. Pri úspechu provízia 30 % – pri neúspechu nič.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_volotea_final_primary", delayedFlightHref)}
                  >
                    Preveriť meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_volotea_final_secondary", cancelledFlightHref)}
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
                  Meškanie kvôli rotácii lietadla
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Prečo rotácia lietadla nie je mimoriadna okolnosť.
                </p>
                <Link
                  href="/sk/blog/meskanie-kvoli-rotacii-lietadla"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Platí EU261 pre low-cost?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Všeobecný rámec pre low-cost aerolinky vrátane Volotea.
                </p>
                <Link
                  href="/sk/blog/plati-odskodnenie-aj-pre-low-cost-lety"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Právo na starostlivosť
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Jedlo, hotel, doprava pri meškaní Volotea.
                </p>
                <Link
                  href="/sk/blog/right-to-care-jedlo-hotel-doprava"
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
