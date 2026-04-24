import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/batozina-uplne-stratena-montrealsky-dohovor";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lost_baggage_montreal";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lost_baggage_montreal";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lost_baggage_montreal";

const faqItems = [
  { question: "Kedy je batožina definitívne stratená?", answer: "Po 21 dňoch od plánovaného príchodu, ak ju aerolinka nedokázala dodať. Vtedy sa batožina považuje za stratenú a môžete si uplatniť nárok podľa Montrealského dohovoru." },
  { question: "Koľko dostanem pri strate batožiny?", answer: "Montrealský dohovor stanovuje maximálny limit 1 288 SDR (cca 1 600 €) za pasažiera. Skutočná výška závisí od hodnoty obsahu, ktorú musíte preukázať." },
  { question: "Čo je Montrealský dohovor?", answer: "Medzinárodná dohoda z roku 1999, ktorá harmonizuje pravidlá zodpovednosti aerolinky za batožinu, meškanie a zranenia pri medzinárodnej leteckej doprave. EÚ je signatárom." },
  { question: "Ako uplatním nárok?", answer: "Podajte PIR (Property Irregularity Report) pri prílete. Po 21 dňoch písomne reklamujte aerolinke s podrobným súpisom obsahu a dôkazmi (účtenky, fotografie, tabuľky). Lehota na reklamáciu: 21 dní od oznámenia straty." },
  { question: "Čo ak som si zaplatil za registrovanú hodnotu?", answer: "Pri deklarovaní vyššej hodnoty (special declaration of interest) pri check-ine môžete mať vyšší limit. Bez toho platí 1 288 SDR." },
  { question: "Montrealský vs Varšavský dohovor?", answer: "Varšavský dohovor (1929) platí pre krajiny, ktoré nepodpísali Montrealský. Limity sú nižšie. V praxi pre EÚ letmi takmer vždy Montrealský." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function BatozinaUplneStratenaMontrealskyDohovorPage() {
  return (
    <LayoutSk>
      <SEO title="Úplne stratená batožina: Montrealský dohovor a nárok 1 600 €" description="Po 21 dňoch bez batožiny máte nárok až 1 288 SDR (~1 600 €) podľa Montrealského dohovoru. Postup reklamácie a potrebné dôkazy." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Stratená batožina Montrealský dohovor", description: "Reklamácia definitívne stratenej batožiny.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Stratená batožina", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Stratená batožina</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">Batožina · Montrealský dohovor</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Úplne stratená batožina: Montrealský dohovor a nárok 1 600 €</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Po 21 dňoch bez batožiny sa považuje za definitívne stratenú. Montrealský dohovor vám priznáva nárok až <strong>1 288 SDR (~1 600 €)</strong>. Dôležité sú dôkazy obsahu – účtenky, fotografie. Preverte cez <a href={claimWingerHomeHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_lost_baggage_intro", claimWingerHomeHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-amber-200 bg-gradient-to-br from-amber-600 to-yellow-700 p-8 text-white shadow-xl dark:border-amber-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-amber-50"><p>Po <strong>21 dňoch</strong> sa batožina považuje za stratenú.</p><p>Maximum: <strong>1 288 SDR (~1 600 €)</strong> za pasažiera podľa Montrealského dohovoru.</p><p>Skutočná výška závisí od hodnoty obsahu – musíte preukázať dokladmi.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Batožina sa nevrátila za 21 dní?" description="ClaimWinger pripraví reklamáciu podľa Montrealského dohovoru a získa maximum." ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=lost_baggage_montreal" ctaLabel="Preveriť nárok" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_lost_baggage_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Nestratte 1 600 € pre chýbajúce dokumenty</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">ClaimWinger vie, aké dôkazy sú kľúčové pre Montrealský nárok.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_lost_baggage_final_primary", delayedFlightHref)}>Preveriť batožinu<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_lost_baggage_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Meškaná batožina</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Čo preplácajú pri dočasnom meškaní.</p><Link href="/sk/blog/meskana-batozina-co-preplacaju" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">PIR protokol</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Kľúčový pri akejkoľvek reklamácii batožiny.</p><Link href="/sk/blog/pir-protokol-co-to-je" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Poškodená batožina</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Iný typ nároku.</p><Link href="/sk/blog/poskodena-batozina-narok" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
