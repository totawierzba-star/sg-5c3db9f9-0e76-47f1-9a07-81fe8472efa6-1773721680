import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/kapacitne-dovody-mimoriadne-okolnosti";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=capacity_reasons";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=capacity_reasons";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=capacity_reasons";

const faqItems = [
  { question: "Sú kapacitné dôvody mimoriadnou okolnosťou?", answer: "Nie. Preťaženie letiska, preťažený vzdušný priestor, kapacita aerolinky – to všetko sú bežné prevádzkové podmienky, za ktoré aerolinka zodpovedá. Kompenzácia vzniká." },
  { question: "Čo ak aerolinka tvrdí 'prevádzkové dôvody'?", answer: "Toto je v praxi najčastejšia zamietavá odpoveď aerolínií. Nie je to mimoriadna okolnosť. Ide o riziká, ktoré aerolinka nesie ako súčasť svojho podnikania." },
  { question: "Rotácia lietadla = mimoriadna okolnosť?", answer: "Nie. Samotná rotácia (meškanie jedného letu spôsobí meškanie ďalších) je vnútorný problém aerolinky. Ale ak prvé meškanie bolo kvôli ATC alebo počasiu, reťaz môže byť krytá." },
  { question: "Nedostatok posádky?", answer: "Bežný kapacitný problém. Nie je mimoriadnou okolnosťou. Pri meškaní 3+ hod vzniká nárok na 250/400/600 €." },
  { question: "Preplnenie slotov na letisku?", answer: "Problém letiska a aerolinky. Nie je mimoriadnou okolnosťou. Cestujúci má plný nárok." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function KapacitneDovodyMimoriadneOkolnostiPage() {
  return (
    <LayoutSk>
      <SEO title="Kapacitné dôvody a mimoriadne okolnosti: platí EU261 kompenzácia?" description="Aerolinka tvrdí kapacitné alebo prevádzkové dôvody? Nie je to mimoriadna okolnosť – kompenzácia vzniká. Ako reklamovať." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Kapacitné dôvody EU261", description: "Prečo kapacitné dôvody nie sú mimoriadne okolnosti.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Kapacitné dôvody", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Kapacitné dôvody</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">Edge case · Prevádzkové dôvody</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Kapacitné dôvody a mimoriadne okolnosti</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">„Prevádzkové dôvody", „kapacita letiska", „nedostatok posádky" – toto všetko aerolinky často uvádzajú pri zamietnutí EU261. Žiadne z toho <strong>nie je mimoriadnou okolnosťou</strong>. Kompenzácia vzniká. Overte cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_capacity_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 5 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-cyan-200 bg-gradient-to-br from-cyan-600 to-blue-700 p-8 text-white shadow-xl dark:border-cyan-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-cyan-50"><p>Kapacitné a prevádzkové dôvody <strong>NIE SÚ</strong> mimoriadnou okolnosťou.</p><p>Kompenzácia 250/400/600 € vzniká pri 3+ hod meškaní alebo zrušení bez primeraného presmerovania.</p><p>ECJ opakovane potvrdil, že aerolinka nesie svoje prevádzkové riziká.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Aerolinka zamietla s prevádzkovými dôvodmi?" description="Najčastejšia výhovorka aerolínií, ale v skutočnosti vzniká nárok. ClaimWinger to vyrieši." ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=capacity_reasons" ctaLabel="Preveriť zamietnutie" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_capacity_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Neuspokojte sa so zamietnutím</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">ClaimWinger vie rozlíšiť mimoriadne od bežných dôvodov. Úspešnosť pri takýchto prípadoch &gt; 90 %.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_capacity_final_primary", delayedFlightHref)}>Preveriť prípad<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_capacity_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Meškanie rotácia</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Rotácia nie je mimoriadna okolnosť.</p><Link href="/sk/blog/meskanie-kvoli-rotacii-lietadla" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Meškanie posádka</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Nedostatok posádky.</p><Link href="/sk/blog/meskanie-kvoli-nedostatku-posadky" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Prečo zamietajú</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Typické argumenty aerolínií.</p><Link href="/sk/blog/preco-aerolinky-zamietaju-reklamacie" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
