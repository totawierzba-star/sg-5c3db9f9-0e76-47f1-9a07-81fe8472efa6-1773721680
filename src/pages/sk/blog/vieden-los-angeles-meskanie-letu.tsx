import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/vieden-los-angeles-meskanie-letu";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vie_lax_delay";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vie_lax_delay";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vie_lax_delay";

const faqItems = [
  { question: "Mám pri Viedeň – Los Angeles nárok?", answer: "Áno, pri meškaní 4+ hod (long-haul). Trasa ~10 000 km = 600 €." },
  { question: "Akí dopravcovia?", answer: "Neexistuje priamy let Viedeň – LAX. Typicky prestup cez Frankfurt (Lufthansa), Mníchov, Londýn, Paríž alebo Amsterdam." },
  { question: "Pri prestupe – čo je dôležité?", answer: "Pri jednej rezervácii sa ráta meškanie pri prílete do LAX. Pri self-connect (dva samostatné tickety) sa EU261 ráta pre každý úsek samostatne." },
  { question: "Koľko dostanem?", answer: "600 € pri meškaní 4+ hod pri prílete do LAX (trasa nad 3 500 km mimo EÚ)." },
  { question: "Lufthansa operuje priamo Mníchov – LAX?", answer: "Áno, Lufthansa, United Airlines, a Delta majú priame linky Frankfurt / Mníchov / Amsterdam – LAX. Pri Lufthansa reklamujete LH, pri United (Star Alliance partner) operujúcu aerolinku." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function ViedenLosAngelesMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO title="Viedeň – Los Angeles meškanie letu: 600 € EU261" description="Meškal Lufthansa alebo United let Viedeň – Los Angeles (s prestupom)? EU261 nárok 600 € pri 4+ hod meškaní." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Viedeň – Los Angeles meškanie", description: "EU261 pri VIE – LAX.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Viedeň – Los Angeles", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Viedeň – Los Angeles</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">Long-haul · VIE – LAX · 10 000 km · s prestupom</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Viedeň – Los Angeles meškanie letu: 600 €</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Priama linka Viedeň – LAX neexistuje, cestujúci typicky letia cez Frankfurt, Mníchov, Paríž alebo Amsterdam. Pri meškaní 4+ hodín pri prílete do LAX nárok <strong>600 €</strong>. Overte cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_vie_lax_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-orange-200 bg-gradient-to-br from-orange-600 to-red-700 p-8 text-white shadow-xl dark:border-orange-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-orange-50"><p>VIE – LAX ≈ 10 000 km (s prestupom). Nad 3 500 km mimo EÚ = <strong>600 €</strong>.</p><p>Dôležité: jedna rezervácia vs. self-connect. Len pri jednej rezervácii sa ráta konečná destinácia.</p><p>Operujúca aerolinka = zodpovedná za EU261 (nie marketingová).</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Meškanie transatlantika cez Frankfurt?" description="ClaimWinger rieši Lufthansa Group, United, Delta transatlantické prípady." ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=vie_lax_delay" ctaLabel="Preveriť VIE – LAX" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_vie_lax_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">600 € za transatlantické meškanie</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">ClaimWinger rieši EU aj USA súdne konania.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_vie_lax_final_primary", delayedFlightHref)}>Preveriť meškanie<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_vie_lax_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Viedeň – New York</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Iný transatlantický long-haul z VIE.</p><Link href="/sk/blog/vieden-new-york-meskanie-letu" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Codeshare – kto platí</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Kľúčové pri prestupe s partnerskou aerolinkou.</p><Link href="/sk/blog/kto-zaplati-odskodnenie-codeshare-lety" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Zmeškaný prestup</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Pri dlhých cestách s prestupmi.</p><Link href="/sk/blog/zmeskany-prestup-kompenzacia" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
