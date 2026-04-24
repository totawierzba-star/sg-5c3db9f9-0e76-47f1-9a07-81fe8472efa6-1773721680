import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/bratislava-milan-meskanie-letu";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_milan_delay";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_milan_delay";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_milan_delay";

const faqItems = [
  {
    question: "Mám pri lete Bratislava – Miláno nárok?",
    answer:
      "Áno, ak meškanie pri prílete je 3+ hodín. Trasa BTS – MXP/BGY je ~620 km = 250 €.",
  },
  {
    question: "Ktorý letisko v Miláne je typický cieľ?",
    answer:
      "Wizz Air lieta priamo Bratislava – Miláno Bergamo (BGY). Ryanair príležitostne do Miláno Malpensa (MXP). Alternatívne prestup cez Viedeň do Miláno Linate (LIN) s Austrian alebo ITA.",
  },
  {
    question: "Koľko dostanem?",
    answer: "250 € (pod 1 500 km). Pri zrušení menej ako 14 dní vopred bez primeraného presmerovania.",
  },
  {
    question: "Wizz Air Bratislava – Milan BGY je spoľahlivý?",
    answer:
      "Celoročný let, ale Wizz Air sa občas pasuje s preťažením trasy. Meškania bývajú po 20:00 a cez víkendy časté. Pri 3+ hod meškaní vzniká nárok.",
  },
  {
    question: "Aké mimoriadne okolnosti?",
    answer:
      "Hmla v Pádskej nížine (zimné mesiace), talianske štrajky ATC, búrky nad Alpami. Štrajk vlastnej posádky Wizz Air nie je mimoriadna okolnosť.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function BratislavaMilanMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO
        title="Bratislava – Miláno meškanie letu: nárok 250 € podľa EU261"
        description="Meškal alebo zrušili vám let Bratislava – Miláno (BGY/MXP/LIN)? Prehľad EU261 nárokov pri Wizz Air, Ryanair a prestupoch cez Viedeň."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Bratislava – Miláno meškanie letu", description: "EU261 kompenzácia pri meškaní Bratislava – Miláno.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Bratislava – Miláno", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Bratislava – Miláno meškanie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Trasa · BTS – BGY/MXP/LIN · 620 km
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Bratislava – Miláno meškanie letu: 250 € kompenzácia
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Trasa Bratislava – Miláno je populárna pre pracovné cesty aj víkendové lety. Wizz Air
              ju operuje celoročne do <strong>Miláno Bergamo (BGY)</strong>. Pri meškaní 3+ hodín alebo
              zrušení bez primeraného presmerovania vzniká nárok na <strong>250 €</strong>. Overte si to cez{" "}
              <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_bts_milan_intro", delayedFlightHref)}>ClaimWinger</a>.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-blue-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>Bratislava – Miláno ≈ 620 km. Pod 1 500 km = <strong>250 €</strong>.</p>
                <p>Priame lety Wizz Air (BGY) celoročne, Ryanair sezónne (MXP).</p>
                <p>Rotácia lietadla alebo nedostatok posádky nie sú mimoriadne okolnosti.</p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Wizz Air alebo Ryanair vám meškal na Miláno?"
            description="ClaimWinger vyrieši reklamáciu aj pri zamietnutí mimoriadnymi okolnosťami. Preverenie zdarma."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=bts_milan_delay"
            ctaLabel="Preveriť BTS – Miláno meškanie"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_bts_milan_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Najčastejšie problémy</h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Wizz Air BTS – BGY: večerné meškania</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Ranné meškania narastajú cez deň a pre ceskujúcich večerného letu to často znamená 3+ hodín. Nárok na 250 € pri rotácia lietadla.</p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Hmla v Pádskej nížine (nov – feb)</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Miláno môže byť v zime silne ovplyvnené hmlou. Aerolinka môže uplatniť mimoriadne okolnosti, ale musí predložiť meteo report.</p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Talianske štrajky ATC</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Bývajú ohlásené vopred. Aerolinka musí preukázať, že štrajk reálne ovplyvnil konkrétny let.</p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">250 € bez papierovania</h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">ClaimWinger vie preveriť všetky typy letov Bratislava – Miláno. Pri úspechu 30 % provízia.</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bts_milan_final_primary", delayedFlightHref)}>Preveriť meškanie<ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bts_milan_final_secondary", cancelledFlightHref)}>Zrušený let</a>
                </Button>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Wizz Air odškodnenie</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Hlavný dopravca trasy.</p><Link href="/sk/blog/wizz-air-odszkodowanie" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Letisko Miláno Malpensa</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Informácie o MXP.</p><Link href="/sk/blog/letisko-milan-malpensa-mxp-meskania" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Reklamácia Wizz Air</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Krok-za-krokom postup.</p><Link href="/sk/blog/ako-podat-reklamaciu-wizz-air-krok-za-krokom" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Často kladené otázky</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <summary className="cursor-pointer text-lg font-semibold text-slate-900 dark:text-white">{item.question}</summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </article>
    </LayoutSk>
  );
}
