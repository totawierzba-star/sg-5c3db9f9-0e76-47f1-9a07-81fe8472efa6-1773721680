import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/bratislava-madrid-meskanie-letu";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_madrid_delay";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_madrid_delay";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_madrid_delay";

const faqItems = [
  { question: "Mám pri Bratislava – Madrid nárok?", answer: "Áno, pri meškaní 3+ hod. Trasa ~1 900 km (nad 1 500 km) = 400 € pri lete v rámci EÚ nad 1 500 km." },
  { question: "Akí dopravcovia?", answer: "Priamy let Ryanair sezónne, alternatívou je prestup cez Viedeň (Iberia, Austrian) alebo Budapešť (Wizz Air, LOT)." },
  { question: "Koľko dostanem?", answer: "400 € – v rámci EÚ nad 1 500 km." },
  { question: "Časté problémy?", answer: "Letná horúčava v Madride (nad 40 °C), štrajky pozemného personálu v Iberia alebo Vueling, preťažená trasa." },
  { question: "Aerolinka tvrdí horúčavu – mimoriadna?", answer: "Horúčava sama osebe nie. Iba ak skutočne prekročila prevádzkové limity lietadla, čo musí aerolinka dokázať." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function BratislavaMadridMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO title="Bratislava – Madrid meškanie letu: 400 € nárok EU261" description="Meškal alebo zrušili let Bratislava – Madrid? EU261 kompenzácia 400 € pri 3+ hod meškaní. Prehľad dopravcov a postupu reklamácie." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Bratislava – Madrid meškanie", description: "EU261 pri Bratislava – Madrid.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Bratislava – Madrid", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Bratislava – Madrid</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">Trasa · BTS – MAD · 1 900 km</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Bratislava – Madrid meškanie letu: 400 €</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Bratislava – Madrid je obľúbená trasa pre mestské víkendy. Pri meškaní 3+ hod vzniká nárok na <strong>400 €</strong>. Overte cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_bts_madrid_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-red-200 bg-gradient-to-br from-red-600 to-orange-700 p-8 text-white shadow-xl dark:border-red-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-red-50"><p>BTS – Madrid ≈ 1 900 km. V EÚ nad 1 500 km = <strong>400 €</strong>.</p><p>Priamy let Ryanair sezónne. Prestupové: Iberia cez Viedeň, Wizz Air cez Budapešť.</p><p>Letná horúčava nad 40 °C – overujte, či aerolinka predložila dôkazy.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Meškal let z Bratislavy do Madridu?" description="ClaimWinger rieši Iberia, Ryanair, Wizz Air, Austrian. Preverenie zdarma." ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=bts_madrid_delay" ctaLabel="Preveriť BTS – Madrid" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_bts_madrid_embed" />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Typické problémy</h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Letná horúčava v Madride</h3><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Júl/august – teploty nad 40 °C. Pri prekročení prevádzkových limitov lietadla môže byť mimoriadnou okolnosťou, ale aerolinka musí dokázať reálny dopad na konkrétny let.</p></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Štrajky v Španielsku</h3><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Časté štrajky Iberia a Vueling pozemného personálu. Štrajk vlastných zamestnancov nie je mimoriadna okolnosť (ECJ C-28/20).</p></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Preťažený vzdušný priestor</h3><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Bežný dôvod meškaní. Nie je to mimoriadna okolnosť, len prevádzkový problém.</p></Card>
            </div>
          </section>

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">400 € za vás vybaví ClaimWinger</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">Provízia 30 % pri úspechu. Žiadna platba vopred.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bts_madrid_final_primary", delayedFlightHref)}>Preveriť meškanie<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bts_madrid_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Iberia odškodnenie</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Hlavný španielsky dopravca.</p><Link href="/sk/blog/iberia-odskodnenie" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Letisko Madrid</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Informácie o MAD.</p><Link href="/sk/blog/letisko-madrid-mad-meskania" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Viedeň – Madrid zrušený</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Alternatívny prípad.</p><Link href="/sk/blog/vieden-madrid-zruseny-let" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
