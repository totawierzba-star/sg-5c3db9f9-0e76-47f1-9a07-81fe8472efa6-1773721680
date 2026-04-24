import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/kosice-vieden-meskanie-letu";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=ksc_vie_delay";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=ksc_vie_delay";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=ksc_vie_delay";

const faqItems = [
  { question: "Je priamy let Košice – Viedeň?", answer: "V súčasnosti väčšinou nie (sezónne či nepravidelné). Pre pasažierov z Košíc je typické letieť do Viedne cez Viedenské letisko (VIE) ako odrazový bod – prestup je v inej krajine, čo je kľúčové pre EU261." },
  { question: "Mám nárok pri zmeškanej linke Košice – kdekoľvek cez Viedeň?", answer: "Pri jednej rezervácii na celú cestu áno – ráta sa meškanie pri prílete do konečnej destinácie. Ak ste cestovali dvomi rôznymi tiketami (self-connect), nie." },
  { question: "Ako sa dostať z Košíc do Viedne?", answer: "Typicky autobusom (FlixBus), vlakom cez Bratislavu alebo autom. Priame letecké spojenie je minimálne. Pre EU261 ako letecká linka teda zvyčajne nefunguje." },
  { question: "Ak mám let Košice – Londýn s prestupom vo Viedni?", answer: "Pri meškaní prvého letu KSC – VIE alebo nadväzujúceho VIE – LHR rozhoduje meškanie pri prílete do Londýna. Ak je 3+ hod, nárok 400 € vzniká." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function KosiceViedenMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO title="Košice – Viedeň prestup meškanie: EU261 nárok pri jednej rezervácii" description="Cestujete z Košíc cez Viedeň do EU destinácie? Ako EU261 rieši meškania pri prestupe a koľko vám pripadá." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Košice – Viedeň meškanie", description: "EU261 pri prestupe z Košíc cez Viedeň.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Košice – Viedeň", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Košice – Viedeň</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">Trasa · prestup cez VIE · špecifický prípad</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Košice – Viedeň prestup meškanie: EU261 prehľad</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Košice nemajú pravidelné letecké spojenie do Viedne – pasažieri z východného Slovenska typicky cestujú do Viedne pozemne a odtiaľ letia do destinácie. Z hľadiska EU261 je dôležité, <strong>ako máte ticketnutú celú cestu</strong>. Preverte svoj prípad cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_ksc_vie_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 5 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-violet-200 bg-gradient-to-br from-violet-600 to-purple-700 p-8 text-white shadow-xl dark:border-violet-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-violet-50"><p>Priame spojenie Košice – Viedeň letecky prakticky neexistuje.</p><p>Pri letoch z Košíc cez Viedeň ďalej (s jedným ticketom) sa kompenzácia ráta podľa konečnej destinácie.</p><p>Pozemná doprava Košice – Viedeň (bus, vlak, auto) <strong>nepatrí pod EU261</strong>.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Zmeškaný prestup vo Viedni?" description="Pri jednej leteckej rezervácii Košice – Viedeň – cieľ si preverte nárok." ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=ksc_vie_delay" ctaLabel="Preveriť prestup" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_ksc_vie_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Prestup cez Viedeň s meškaním?</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">Pri jednej rezervácii ClaimWinger vyrieši celú cestu.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_ksc_vie_final_primary", delayedFlightHref)}>Preveriť<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_ksc_vie_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Viac letov v jednej rezervácii</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Kľúčové pri prestupoch.</p><Link href="/sk/blog/viac-letov-v-jednej-rezervacii" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Zmeškaný prestup</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Postup a kompenzácia.</p><Link href="/sk/blog/zmeskany-prestup-kompenzacia" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Letisko Viedeň</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">VIE ako hub pre SK cestujúcich.</p><Link href="/sk/blog/lotnisko-wieden-opoznienie" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
