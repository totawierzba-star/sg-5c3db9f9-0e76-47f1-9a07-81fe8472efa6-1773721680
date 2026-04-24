import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/vieden-sanghaj-meskanie-letu";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vie_pvg_delay";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vie_pvg_delay";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vie_pvg_delay";

const faqItems = [
  { question: "Mám pri Viedeň – Šanghaj nárok?", answer: "Áno, pri meškaní 4+ hod (long-haul). Trasa ~7 900 km = 600 €." },
  { question: "Akí dopravcovia?", answer: "Austrian priamo do PVG (Šanghaj Pudong), Air China, China Eastern. Pri EÚ aerolinke (Austrian) plne platí EU261. Pri čínskych aerolinkách pri odlete z Viedne áno, pri lete Šanghaj – Viedeň obvykle nie." },
  { question: "Koľko dostanem?", answer: "600 € pri Austrian (EÚ aerolinka, odlet/prílet do EÚ). Pri čínskej aerolinke záleží na smere." },
  { question: "Oblet Ruska – dopad na meškanie?", answer: "Áno, pridáva 1-2 hodiny na trase do Ázie. Samotný dlhší let sa nepočíta ako meškanie, ak bol plánovaný – ak vznikol dodatočne, posudzuje sa mimoriadne okolnosti." },
  { question: "PVG alebo SHA?", answer: "Austrian lieta do Pudong (PVG) – hlavné medzinárodné letisko. Hongqiao (SHA) je prevažne domáce." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function ViedenSanghajMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO title="Viedeň – Šanghaj meškanie letu: 600 € EU261" description="Austrian Viedeň – Šanghaj (PVG) meškal? Long-haul EU261 kompenzácia 600 € pri 4+ hod meškaní." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Viedeň – Šanghaj meškanie", description: "EU261 pri VIE – PVG.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Viedeň – Šanghaj", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Viedeň – Šanghaj</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">Long-haul · VIE – PVG · 7 900 km</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Viedeň – Šanghaj meškanie letu: 600 €</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Austrian priamy let Viedeň – Šanghaj Pudong. Pri meškaní 4+ hod alebo zrušení bez primeraného presmerovania = <strong>600 €</strong>. Overte cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_vie_pvg_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-red-200 bg-gradient-to-br from-red-600 to-rose-700 p-8 text-white shadow-xl dark:border-red-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-red-50"><p>VIE – PVG ≈ 7 900 km. Nad 3 500 km mimo EÚ = <strong>600 €</strong>.</p><p>Pri Austrian (EÚ) plne EU261. Pri čínskych aerolinkách – závisí od smeru.</p><p>Oblet Ruska pridáva 1-2 hodiny, ale plánovaný oblet nie je meškaním.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Austrian let do Šanghaja meškal?" description="ClaimWinger rieši Lufthansa Group aj čínskych partnerov." ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=vie_pvg_delay" ctaLabel="Preveriť VIE – Šanghaj" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_vie_pvg_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">600 € za long-haul meškanie</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">ClaimWinger rieši s Austrian customer relations v angličtine a nemčine.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_vie_pvg_final_primary", delayedFlightHref)}>Preveriť meškanie<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_vie_pvg_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Viedeň – Tokio</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Iný ázijský long-haul z VIE.</p><Link href="/sk/blog/vieden-tokyo-meskanie-letu" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Viedeň – Bangkok</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Ďalší ázijský let.</p><Link href="/sk/blog/vieden-bangkok-meskanie-letu-eu-aerolinka" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Austrian Airlines</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Dopravca trasy.</p><Link href="/sk/blog/austrian-airlines-meskanie-odskodnenie" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Často kladené otázky</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (<details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"><summary className="cursor-pointer text-lg font-semibold text-slate-900 dark:text-white">{item.question}</summary><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.answer}</p></details>))}
            </div>
          </section>
        </div>
      </article>
    </LayoutSk>
  );
}
