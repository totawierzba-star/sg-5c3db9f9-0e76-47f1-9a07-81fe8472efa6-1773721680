import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/bratislava-malaga-meskanie-letu";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_agp_delay";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_agp_delay";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_agp_delay";

const faqItems = [
  { question: "Mám pri Bratislava – Malaga nárok?", answer: "Áno, pri meškaní 3+ hod. Trasa ~2 100 km (nad 1 500 km) = 400 € v rámci EÚ." },
  { question: "Akí dopravcovia?", answer: "Ryanair priamo Bratislava – Malaga (AGP) sezónne. Alternatívne cez Viedeň alebo Budapešť." },
  { question: "Koľko dostanem?", answer: "400 € – trasa v rámci EÚ nad 1 500 km." },
  { question: "AGP je hlavným letiskom pre Costa del Sol?", answer: "Áno. Malaga-Costa del Sol (AGP) obsluhuje Marbellu, Torremolinos, Fuengirolu. Druhý najväčší hub v južnom Španielsku po Sevilla." },
  { question: "Bežné dôvody meškania?", answer: "Rotácia lietadla pri Ryanair, letná preťaženosť, príležitostné búrky nad Gibraltárom." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function BratislavaMalagaMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO title="Bratislava – Malaga meškanie letu: 400 € EU261" description="Meškanie Ryanair letu Bratislava – Malaga? EU261 nárok 400 €. Costa del Sol dovolenka a vaše práva." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Bratislava – Malaga meškanie", description: "EU261 pri BTS – Malaga.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Bratislava – Malaga", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Bratislava – Malaga</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">Trasa · BTS – AGP · 2 100 km</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Bratislava – Malaga meškanie letu: 400 €</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Ryanair Bratislava – Malaga je populárny pre dovolenky v Costa del Sol. Meškanie 3+ hod = <strong>400 €</strong>. Overte cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_bts_agp_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-yellow-200 bg-gradient-to-br from-yellow-600 to-amber-700 p-8 text-white shadow-xl dark:border-yellow-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-yellow-50"><p>BTS – Malaga ≈ 2 100 km. V EÚ nad 1 500 km = <strong>400 €</strong>.</p><p>Ryanair sezónny priamy let. Costa del Sol je letná destinácia č. 1.</p><p>Rotácia lietadla nie je mimoriadna okolnosť – pri 3+ hod meškaní vzniká nárok.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Malaga dovolenka so skazením?" description="ClaimWinger rieši Ryanair letnú sezónu. Preverenie zdarma." ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=bts_agp_delay" ctaLabel="Preveriť BTS – Malaga" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_bts_agp_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Malaga s chýbajúcou dovolenkou</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">400 € kompenzácie + prípadné preplatenie výdavkov počas čakania.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bts_agp_final_primary", delayedFlightHref)}>Preveriť meškanie<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bts_agp_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Bratislava – Alicante</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Alternatívna španielska destinácia.</p><Link href="/sk/blog/bratislava-alicante-meskanie-letu" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Ryanair odškodnenie</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Hlavný dopravca trasy.</p><Link href="/sk/blog/ryanair-problemy-prawa" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Bratislava – Barcelona zrušený</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Iná španielska trasa.</p><Link href="/sk/blog/bratislava-barcelona-zruseny-let" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
