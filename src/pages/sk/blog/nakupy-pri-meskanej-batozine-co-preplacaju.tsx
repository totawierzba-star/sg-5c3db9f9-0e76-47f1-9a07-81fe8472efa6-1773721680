import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/nakupy-pri-meskanej-batozine-co-preplacaju";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=baggage_purchases";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=baggage_purchases";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=baggage_purchases";

const faqItems = [
  { question: "Čo môžem nakúpiť pri meškanej batožine?", answer: "Základné potreby na prežitie – hygiena (zubná kefka, šampón), spodná bielizeň, ponožky, tričko, doplnky. Niektoré aerolinky dávajú vopred voucher 50 – 100 €, inak si nakúpte sami." },
  { question: "Koľko môžem minúť?", answer: "Montrealský dohovor limituje celkovú náhradu 1 288 SDR (~1 600 €). Rozumné denné limity sú 50 – 100 € denne na osobu pri krátkom meškaní (1 – 3 dni)." },
  { question: "Aké nákupy aerolinka NEPREPLATI?", answer: "Luxusné oblečenie, elektronika, parfumy, drahé značky. Ak ste cestovali do business, primerané sú pracovné košele, ale nie premiové značky. Ide o náhradu, nie upgrade." },
  { question: "Ako dokázať nákupy?", answer: "Originálne účtenky s dátumom a miestom. Platobná karta a výpis z banky. Fotografie zakúpených produktov (voliteľné). Všetko v originálnej forme." },
  { question: "Aerolinka zamietne časť – čo robiť?", answer: "Napíšte detailnú odpoveď s vysvetlením, prečo každá položka bola potrebná. Pri pretrvávajúcom zamietnutí eskalujte na regulátora alebo súd." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function NakupyPriMeskanejBatozineCoPreplacajuPage() {
  return (
    <LayoutSk>
      <SEO title="Nákupy pri meškanej batožine: čo vám aerolinka preplatí" description="Meškaná batožina dokáže narušiť dovolenku. Aké nákupy aerolinka preplatí a koľko – sprievodca denných limitov a dôkazov." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Nákupy pri meškanej batožine", description: "Čo aerolinka preplatí pri meškanej batožine.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Nákupy pri meškanej batožine", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Nákupy pri meškanej batožine</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">Batožina · Preplatenie výdavkov</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Nákupy pri meškanej batožine: čo aerolinka preplatí</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Aerolinka musí preplatiť <strong>primerané náklady</strong> na základné potreby, pokiaľ ste bez batožiny. Typicky 50 – 100 € denne. Luxus a drahé značky sa nepreplácajú. Overte cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_baggage_purchases_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 5 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-yellow-200 bg-gradient-to-br from-yellow-600 to-amber-700 p-8 text-white shadow-xl dark:border-yellow-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-yellow-50"><p>Aerolinka preplatí <strong>primerané výdavky</strong> na základné potreby.</p><p>Denne 50 – 100 € na osobu. Max 1 288 SDR (~1 600 €) podľa Montrealského dohovoru.</p><p>Nepriemerám: luxus, elektronika, parfumy, drahé značky.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Meškaná batožina – získajte preplatenie" description="ClaimWinger vám pomôže zostaviť nárok a overí, či aerolinka preplatila všetko." ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=baggage_purchases" ctaLabel="Preveriť nárok" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_baggage_purchases_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Dokumentácia je kľúčová</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">Pri meškanej batožine rozhoduje dôkazný materiál. ClaimWinger zostaví kompletnú reklamáciu.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_baggage_purchases_final_primary", delayedFlightHref)}>Preveriť výdavky<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_baggage_purchases_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Meškaná batožina</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Všeobecný sprievodca.</p><Link href="/sk/blog/meskana-batozina-co-preplacaju" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">PIR protokol</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Kľúčový dokument.</p><Link href="/sk/blog/pir-protokol-co-to-je" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Stratená batožina</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Po 21 dňoch.</p><Link href="/sk/blog/batozina-uplne-stratena-montrealsky-dohovor" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
