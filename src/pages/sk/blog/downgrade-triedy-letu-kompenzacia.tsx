import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/downgrade-triedy-letu-kompenzacia";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=downgrade";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=downgrade";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=downgrade";

const faqItems = [
  { question: "Čo je downgrade triedy letu?", answer: "Keď vás aerolinka presunie z vyššej triedy (business, prvá trieda) do nižšej (economy) proti vašej vôli. Dôvody: preplnenie business, zmena lietadla s menšou kabínou, technické problémy." },
  { question: "Mám nárok pri downgrade?", answer: "Áno. Článok 10 EU261 stanovuje refundáciu časti ceny lístka: 30 % pri letoch do 1 500 km, 50 % pri 1 500 – 3 500 km, 75 % pri letoch nad 3 500 km." },
  { question: "Downgrade je to isté ako meškanie?", answer: "Nie. Downgrade má samostatný článok 10 a samostatnú kompenzáciu. Pri downgrade nemáte nárok na 250/400/600 € paušálnu kompenzáciu z článku 7 – iba na refundáciu podľa článku 10." },
  { question: "Čo ak dostanem downgrade zadarmo (upgrade bol z miesta poľutovania)?", answer: "Downgrade z podmienok v rezervácii je vždy porušenie. Ak ste pôvodne kúpili lístok v economy a pilotujú vás do business, nejde o downgrade." },
  { question: "Kúpil som si lístok za 2 000 €, aerolinka ponúkla 600 € – stačí?", answer: "Nie automaticky. Výpočet závisí od trasy a porcenta. Pri lete nad 3 500 km 75 % z 2 000 € = 1 500 €. Spočítajte si a pri nesúlade reklamujte ďalej." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function DowngradeTriedyLetuKompenzaciaPage() {
  return (
    <LayoutSk>
      <SEO title="Downgrade triedy letu: kompenzácia 30–75 % ceny (článok 10 EU261)" description="Downgrade z business do economy alebo z prvej do business? EU261 článok 10 stanovuje refundáciu 30/50/75 % ceny lístka podľa vzdialenosti." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Downgrade triedy letu – kompenzácia", description: "EU261 článok 10 kompenzácia pri downgrade.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Downgrade triedy", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Downgrade triedy letu</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Edge case · Článok 10 EU261</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Downgrade triedy letu: kompenzácia 30 – 75 %</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Aerolinka vás presunula z business do economy? Podľa <strong>článku 10 nariadenia EC 261/2004</strong> máte nárok na refundáciu časti ceny lístka: <strong>30 % do 1 500 km</strong>, <strong>50 % pre 1 500 – 3 500 km</strong>, <strong>75 % nad 3 500 km</strong>. Overte cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_downgrade_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-purple-200 bg-gradient-to-br from-purple-600 to-fuchsia-700 p-8 text-white shadow-xl dark:border-purple-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-purple-50"><p><strong>Článok 10 EU261</strong>: refundácia 30 / 50 / 75 % ceny lístka podľa vzdialenosti.</p><p>Toto je <strong>samostatná</strong> od paušálnej kompenzácie z článku 7.</p><p>Príklad: business Viedeň – New York za 3 000 €, downgrade na economy = 75 % × 3 000 = 2 250 € refundácia.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Aerolinka vás degradovala?" description="ClaimWinger vypočíta presnú refundáciu podľa článku 10 a podá reklamáciu." ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=downgrade" ctaLabel="Preveriť downgrade" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_downgrade_embed" />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Tabuľka refundácie</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">30 %</h3><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Lety do 1 500 km. Napr. z 800 € business lístka dostanete 240 €.</p></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">50 %</h3><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Všetky lety v EÚ nad 1 500 km a mimo EÚ 1 500 – 3 500 km. Z 1 500 € dostanete 750 €.</p></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">75 %</h3><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Lety mimo EÚ nad 3 500 km. Z 3 000 € dostanete 2 250 €.</p></Card>
            </div>
          </section>

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">ClaimWinger za vás vypočíta presne</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">Aerolinky často ponúkajú nižšiu sumu než reálny nárok. ClaimWinger overí.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_downgrade_final_primary", delayedFlightHref)}>Preveriť downgrade<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={claimWingerHomeHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_downgrade_final_secondary", claimWingerHomeHref)}>ClaimWinger SK</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Právo na starostlivosť</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Ďalšie práva cestujúcich podľa EU261.</p><Link href="/sk/blog/right-to-care-jedlo-hotel-doprava" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Overbooking</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Odmietnutie nástupu – iné scenáre preplnenia.</p><Link href="/sk/blog/overbooking-odmietnutie-nastupu" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Mimoriadne okolnosti</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Downgrade sa nerátajú ako mimoriadna okolnosť.</p><Link href="/sk/blog/mimoriadne-okolnosti-kompenzacia" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
