import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/taxi-a-doprava-pri-zruseni-letu-rimbursment";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=taxi_reimburse";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=taxi_reimburse";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=taxi_reimburse";

const faqItems = [
  { question: "Preplatí aerolinka taxi pri zrušení letu?", answer: "Áno, ak ide o dopravu medzi letiskom a hotelom (bezplatne podľa článku 9 EU261) alebo o cestu do nového letiska pri presmerovaní. Účtenka je povinná." },
  { question: "Koľko aerolinka preplatí?", answer: "Primerané náklady na bežné dopravné prostriedky. Shuttle bus alebo štandardné taxi áno. Limuzína alebo luxusné taxi nie." },
  { question: "Čo ak musím cestovať do iného letiska?", answer: "Ak aerolinka vás presmerovala na let z iného letiska (napr. BCN miesto MAD), doprava je na aerolinke. Obvykle cez ňou organizovaný shuttle, pri samostatnom kúpe preplatenie." },
  { question: "Dokumentácia?", answer: "Originálne účtenky s dátumom, trasou a sumou. Platobná karta ako podporný dôkaz. Pri taxi si vypýtajte bloček alebo faktúru." },
  { question: "Súkromné auto – preplatí aerolinka?", answer: "Áno, môžete si uplatniť kilometrovné (typicky 0,20 – 0,30 €/km). Odložte si plán trasy a PSČ, účtenku za tankovanie ako dôkaz." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function TaxiADopravaPriZruseniLetuRimbursmentPage() {
  return (
    <LayoutSk>
      <SEO title="Taxi a doprava pri zrušení letu: preplatenie od aerolinky" description="Aerolinka musí pri zrušení alebo meškaní platiť dopravu medzi letiskom, hotelom a alternatívnym letiskom. Pravidlá preplatenia." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Taxi a doprava pri zrušení letu", description: "Preplatenie dopravy podľa článku 9 EU261.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Taxi a doprava", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Taxi a doprava pri zrušení</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">Right to care · Článok 9 EU261</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Taxi a doprava pri zrušení letu: preplatenie</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Pri zrušení alebo meškaní letu má aerolinka povinnosť zabezpečiť dopravu medzi letiskom, hotelom a alternatívnym letiskom. Ak ste si platili sami, máte nárok na preplatenie primeraných nákladov. Overte cez <a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_taxi_intro", cancelledFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 5 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-teal-200 bg-gradient-to-br from-teal-600 to-emerald-700 p-8 text-white shadow-xl dark:border-teal-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-teal-50"><p>Doprava medzi letiskom a hotelom = aerolinka platí (čl. 9).</p><p>Doprava medzi letiskami pri presmerovaní = aerolinka platí.</p><p>Primerané náklady – shuttle, taxi, vlak. Luxusné nie.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Zaplatili ste taxi alebo dopravu?" description="ClaimWinger pripraví reklamáciu na preplatenie výdavkov podľa článku 9 EU261." ctaHref="https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=taxi_reimburse" ctaLabel="Preveriť preplatenie" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_taxi_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Každá účtenka sa ráta</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">ClaimWinger získa preplatenie aj pri zamietnutí aerolinky.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_taxi_final_primary", cancelledFlightHref)}>Preveriť dopravu<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_taxi_final_secondary", delayedFlightHref)}>Meškajúci let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Right to care</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Komplexný sprievodca.</p><Link href="/sk/blog/right-to-care-jedlo-hotel-doprava" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Hotel pri meškaní</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Ubytovanie a doprava s hotelom.</p><Link href="/sk/blog/hotel-pri-meskani-letu-kedy-musi-aerolinka-zaplatit" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Náhrada za nový lístok</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Pri kúpe nového letu.</p><Link href="/sk/blog/nahrada-za-novy-listok" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
