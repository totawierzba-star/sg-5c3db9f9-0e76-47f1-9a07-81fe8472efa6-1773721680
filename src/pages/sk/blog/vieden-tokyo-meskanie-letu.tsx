import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/vieden-tokyo-meskanie-letu";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vie_tokyo_delay";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vie_tokyo_delay";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vie_tokyo_delay";

const faqItems = [
  { question: "Mám pri Viedeň – Tokio nárok?", answer: "Áno, pri meškaní 4+ hod pri prílete (long-haul nad 3 500 km). Trasa ~9 100 km = 600 €." },
  { question: "Akí dopravcovia?", answer: "Austrian Airlines (OS) lieta priamo do Tokio-Haneda (HND). Alternatívne Lufthansa cez Frankfurt alebo Mníchov, KLM cez Amsterdam, Turkish Airlines cez Istanbul." },
  { question: "Koľko dostanem?", answer: "600 € pri meškaní 4+ hod (trasa nad 3 500 km mimo EÚ). Pri zrušení oznámenom menej ako 14 dní vopred bez presmerovania." },
  { question: "Typické dôvody meškania?", answer: "Silný vietor z Pacifiku, preťažený vzdušný priestor nad Ruskou federáciou (po 2022 oblet), technické problémy long-haul flotily. Rotácia lietadla pri tak dlhých trasách nie je mimoriadna okolnosť." },
  { question: "Uzavretie ruského vzdušného priestoru – ovplyvňuje to?", answer: "Áno, lety do Ázie sú 1–2 hodiny dlhšie (oblet cez Strednú Áziu alebo Polárny kruh). Ak meškanie vznikne kvôli presmerovaniu, aerolinka to môže uplatniť ako mimoriadnu okolnosť." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function ViedenTokyoMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO title="Viedeň – Tokio meškanie letu: 600 € kompenzácia EU261" description="Meškal Austrian let Viedeň – Tokio? EU261 nárok 600 € pri meškaní 4+ hod. Long-haul špecifiká a uzavretý ruský vzdušný priestor." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Viedeň – Tokio meškanie", description: "EU261 pri VIE – Tokio.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Viedeň – Tokio", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Viedeň – Tokio</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">Long-haul · VIE – HND · 9 100 km</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Viedeň – Tokio meškanie letu: 600 € EU261</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Austrian Airlines lieta priamo Viedeň – Tokio Haneda. Pri meškaní 4+ hod alebo zrušení bez primeraného presmerovania vzniká nárok na <strong>600 €</strong>. Overte cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_vie_tokyo_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-rose-200 bg-gradient-to-br from-rose-600 to-pink-700 p-8 text-white shadow-xl dark:border-rose-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-rose-50"><p>VIE – HND ≈ 9 100 km. Nad 3 500 km mimo EÚ = <strong>600 €</strong>.</p><p>Hranica meškania pre long-haul = 4 hodiny, nie 3.</p><p>Uzavretý ruský vzdušný priestor môže pridať 1–2 hodiny letu – to sa ale nepočíta samostatne do meškania.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Austrian let do Tokia meškal?" description="ClaimWinger rieši Lufthansa Group long-haul prípady vrátane uzavretého ruského priestoru." ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=vie_tokyo_delay" ctaLabel="Preveriť VIE – Tokio" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_vie_tokyo_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">600 € na japonskej dovolenke</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">Pri 4+ hod meškaní alebo zrušení nárok výrazný. ClaimWinger preverí zdarma.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_vie_tokyo_final_primary", delayedFlightHref)}>Preveriť meškanie<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_vie_tokyo_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Austrian Airlines odškodnenie</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Priamy dopravca trasy.</p><Link href="/sk/blog/austrian-airlines-meskanie-odskodnenie" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Viedeň – Bangkok</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Iný long-haul z Viedne.</p><Link href="/sk/blog/vieden-bangkok-meskanie-letu-eu-aerolinka" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Meškanie nad 5 hodín</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Plná refundácia + kompenzácia.</p><Link href="/sk/blog/meskanie-nad-5-hodin" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
