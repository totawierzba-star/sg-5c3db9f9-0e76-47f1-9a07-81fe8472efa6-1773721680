import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/bratislava-barcelona-zruseny-let";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_bcn_cancel";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_bcn_cancel";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bts_bcn_cancel";

const faqItems = [
  { question: "Mám pri zrušení Bratislava – Barcelona nárok?", answer: "Áno, ak zrušenie bolo oznámené menej než 14 dní pred odletom a neponúkli vám presmerovanie v rozumných časových medziach. Trasa ~1 540 km = 400 €." },
  { question: "Akí dopravcovia?", answer: "Wizz Air operuje Bratislava – Barcelona El Prat (BCN) celoročne. Alternatívy: Ryanair cez Viedeň alebo Budapešť do BCN." },
  { question: "Koľko dostanem?", answer: "400 € pri zrušení (trasa nad 1 500 km v rámci EÚ). Pri priamom Wizz Air lete celoročne platí plne EU261." },
  { question: "Zrušenie tesne pred odletom – ďalšie práva?", answer: "Áno: plná refundácia do 7 dní, presmerovanie za podobné podmienky, v prípade potreby hotel a stravovanie." },
  { question: "Čo ak mi Wizz Air ponúkol voucher?", answer: "Máte právo odmietnuť voucher a žiadať hotovosť/bankový prevod. EU261 článok 7 ods. 3 to potvrdzuje." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function BratislavaBarcelonaZrusenyLetPage() {
  return (
    <LayoutSk>
      <SEO title="Bratislava – Barcelona zrušený let: 400 € kompenzácia EU261" description="Zrušil vám Wizz Air alebo iná aerolinka let Bratislava – Barcelona? EU261 nárok 400 €. Postup reklamácie, refundácia a presmerovanie." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Bratislava – Barcelona zrušený let", description: "EU261 pri zrušení Bratislava – Barcelona.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Bratislava – Barcelona zrušený", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Bratislava – Barcelona zrušený</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">Trasa · BTS – BCN · 1 540 km</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Bratislava – Barcelona zrušený let: 400 €</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Zrušil vám Wizz Air priamy let Bratislava – Barcelona? Pri oznámení menej ako 14 dní vopred bez primeraného presmerovania vzniká nárok na <strong>400 €</strong>. Overte cez <a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_bts_bcn_intro", cancelledFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-orange-200 bg-gradient-to-br from-orange-600 to-red-700 p-8 text-white shadow-xl dark:border-orange-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-orange-50"><p>BTS – Barcelona ≈ 1 540 km. V EÚ nad 1 500 km = <strong>400 €</strong>.</p><p>Pri zrušení <strong>menej ako 14 dní</strong> vopred + bez primeraného presmerovania = plný nárok.</p><p>Aj ak vám ponúkli voucher, máte právo žiadať hotovosť.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Wizz Air zrušil váš let na Barcelonu?" description="ClaimWinger overí termín oznámenia a primeranosť presmerovania. Preverenie zdarma." ctaHref="https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=bts_bcn_cancel" ctaLabel="Preveriť zrušený let" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_bts_bcn_embed" />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Vaše tri práva pri zrušení</h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">1. Kompenzácia 400 €</h3><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Ak oznámenie prišlo menej ako 14 dní vopred a vám nebola ponúknutá porovnateľná alternatíva.</p></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">2. Plná refundácia alebo presmerovanie</h3><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Refundácia do 7 dní alebo nový let za porovnateľné podmienky – vy sa rozhodujete.</p></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">3. Right to care</h3><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Jedlo, hotel, doprava ak musíte čakať na nový let. Aj pri zamietnutí hotovostnej kompenzácie toto právo zostáva.</p></Card>
            </div>
          </section>

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">400 € bez vlastných formulárov</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">ClaimWinger vyrieši Wizz Air reklamáciu vrátane eskalácie.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bts_bcn_final_primary", cancelledFlightHref)}>Preveriť zrušenie<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bts_bcn_final_secondary", delayedFlightHref)}>Meškajúci let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Wizz Air Bratislava – Barcelona meškanie</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Meškanie vs zrušenie na tej istej trase.</p><Link href="/sk/blog/wizz-air-bratislava-barcelona-meskanie-letu" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Letisko Barcelona</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Informácie o BCN.</p><Link href="/sk/blog/letisko-barcelona-bcn-meskania" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Reklamácia Wizz Air</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Kompletný postup krok za krokom.</p><Link href="/sk/blog/ako-podat-reklamaciu-wizz-air-krok-za-krokom" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
