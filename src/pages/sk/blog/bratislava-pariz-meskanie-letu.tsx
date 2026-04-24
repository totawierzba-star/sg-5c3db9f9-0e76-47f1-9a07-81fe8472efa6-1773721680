import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/bratislava-pariz-meskanie-letu";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_paris_delay";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_paris_delay";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_paris_delay";

const faqItems = [
  { question: "Mám pri Bratislava – Paríž nárok?", answer: "Áno, ak meškanie pri prílete je 3+ hodín. Trasa BTS – CDG/ORY ≈ 1 100 km = 250 €." },
  { question: "Akí dopravcovia lietajú túto trasu?", answer: "Ryanair priamo do Paris Beauvais (BVA), alternatívou je prestup cez Viedeň (Air France, Austrian) do CDG, alebo cez Budapešť (Wizz Air)." },
  { question: "Ktoré pariánske letisko?", answer: "BVA – Beauvais (Ryanair low-cost, 85 km severne od Paríža), CDG – Charles de Gaulle (hlavný hub Air France), ORY – Orly (menšie, Vueling aj Ryanair Group)." },
  { question: "Koľko dostanem?", answer: "250 € (pod 1 500 km)." },
  { question: "Platí aj pri Ryanair do BVA?", answer: "Áno. Ryanair má írsky AOC a EU261 platí plne bez ohľadu na to, že BVA je low-cost letisko." },
  { question: "Časté dôvody meškania?", answer: "Štrajky ATC vo Francúzsku (mimoriadna okolnosť), preťaženie CDG, rotácia lietadla (nie je mimoriadna okolnosť)." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function BratislavaParizMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO title="Bratislava – Paríž meškanie letu: nárok na 250 € podľa EU261" description="Meškal Ryanair alebo iná aerolinka na trase Bratislava – Paríž? Prehľad nárokov EU261 pre BTS – CDG/BVA/ORY." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Bratislava – Paríž meškanie", description: "EU261 pri Bratislava – Paríž.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Bratislava – Paríž", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span>
            <span>Bratislava – Paríž meškanie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Trasa · BTS – CDG/BVA/ORY · 1 100 km</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Bratislava – Paríž meškanie letu: 250 € kompenzácia</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Trasa Bratislava – Paríž je populárna pre turizmus aj pracovné cesty. Pri meškaní 3+ hodín alebo zrušení bez primeraného presmerovania máte nárok na <strong>250 €</strong> podľa EU261. Preverte nárok cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_bts_paris_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-blue-200 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl dark:border-blue-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-blue-50"><p>BTS – Paríž ≈ 1 100 km. Pod 1 500 km = <strong>250 €</strong>.</p><p>Priame lety: Ryanair do Beauvais (BVA). Prestupové: Air France/Austrian cez Viedeň do CDG.</p><p>Francúzske štrajky ATC – áno mimoriadne okolnosti. Štrajk posádky Air France – nie.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Meškal let z Bratislavy do Paríža?" description="ClaimWinger rieši Ryanair aj Air France. Preverenie zdarma, provízia 30 % pri úspechu." ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=bts_paris_delay" ctaLabel="Preveriť BTS – Paríž" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_bts_paris_embed" />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Typické scenáre</h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Ryanair BTS – BVA</h3><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Priamy let, obvykle 250 € pri meškaní 3+ hodín. Zrušenie menej ako 14 dní vopred bez primeraného presmerovania = 250 €.</p></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Prestup cez Viedeň (Air France, Austrian)</h3><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Pri jednej rezervácii sa počíta meškanie pri prílete do Paríža.</p></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Štrajk francúzskeho ATC</h3><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Bežná situácia – mimoriadna okolnosť, kompenzácia nevzniká. Stále však máte právo na starostlivosť a presmerovanie.</p></Card>
            </div>
          </section>

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">ClaimWinger za vás</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">Preverenie zdarma, provízia 30 % pri úspechu. Rieši aj reklamáciu vo francúzštine.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bts_paris_final_primary", delayedFlightHref)}>Preveriť meškanie<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bts_paris_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Air France odškodnenie</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Hlavný francúzsky dopravca.</p><Link href="/sk/blog/air-france-odskodnenie" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Letisko Paríž CDG</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Informácie o hlavnom pariánskom letisku.</p><Link href="/sk/blog/letisko-pariz-cdg-meskania" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Viedeň – Paríž meškanie</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Alternatívna trasa pre prestup.</p><Link href="/sk/blog/vieden-pariz-meskanie-letu" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
