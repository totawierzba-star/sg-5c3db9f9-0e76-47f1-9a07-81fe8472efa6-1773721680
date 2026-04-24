import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/bratislava-berlin-meskanie-letu";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_ber_delay";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_ber_delay";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_ber_delay";

const faqItems = [
  { question: "Mám pri Bratislava – Berlín nárok?", answer: "Áno, pri meškaní 3+ hod. Trasa ~530 km = 250 €." },
  { question: "Akí dopravcovia?", answer: "Ryanair priamy do BER (sezónne alebo obmedzene), alternatívne cez Viedeň (Lufthansa, Austrian, easyJet) alebo cez Budapešť (Wizz Air, Ryanair)." },
  { question: "BER Brandenburg – aký je súčasný stav?", answer: "Letisko Berlín Brandenburg (BER) je od 2020 jediným funkčným letiskom v Berlíne. Tegel (TXL) a Schönefeld (SXF) sú už zatvorené." },
  { question: "Koľko dostanem?", answer: "250 € – trasa pod 1 500 km." },
  { question: "Bežné dôvody meškania z BER?", answer: "Preťaženie (BER sa stále vyrovnáva s kapacitou), ATC obmedzenia v nemeckom vzdušnom priestore. Rotácia lietadla nie je mimoriadnou okolnosťou." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function BratislavaBerlinMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO title="Bratislava – Berlín meškanie letu: 250 € EU261" description="Meškal alebo zrušili let Bratislava – Berlín? EU261 nárok 250 €. Priamy Ryanair alebo prestup cez Viedeň/Budapešť." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Bratislava – Berlín meškanie", description: "EU261 pri BTS – Berlín.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Bratislava – Berlín", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Bratislava – Berlín</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">Trasa · BTS – BER · 530 km</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Bratislava – Berlín meškanie letu: 250 €</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Krátka trasa Bratislava – Berlín Brandenburg (BER). Pri meškaní 3+ hodín = <strong>250 €</strong>. Overte cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_bts_ber_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 5 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-slate-200 bg-gradient-to-br from-slate-700 to-gray-800 p-8 text-white shadow-xl dark:border-slate-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-slate-100"><p>BTS – BER ≈ 530 km. Pod 1 500 km = <strong>250 €</strong>.</p><p>Priame lety obmedzené, alternatívy cez Viedeň alebo Budapešť.</p><p>BER je jediné funkčné berlínske letisko – TXL a SXF zatvorené.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Meškanie na Berlín?" description="ClaimWinger rieši Lufthansa, easyJet, Ryanair, Wizz Air. Preverenie zdarma." ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=bts_ber_delay" ctaLabel="Preveriť BTS – Berlín" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_bts_ber_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">250 € rýchlo na účet</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">ClaimWinger pošle reklamáciu priamo aerolinke.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bts_ber_final_primary", delayedFlightHref)}>Preveriť meškanie<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bts_ber_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Lufthansa reklamácia</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Hlavný nemecký dopravca.</p><Link href="/sk/blog/ako-podat-reklamaciu-lufthansa-krok-za-krokom" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">easyJet odškodnenie</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">easyJet má v BER základňu.</p><Link href="/sk/blog/easyjet-odskodnenie" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Viedeň – Amsterdam zrušený</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Iná stredoeurópska trasa.</p><Link href="/sk/blog/vieden-amsterdam-zruseny-let" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
