import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/aerolinka-skrachovala-ako-dostat-peniaze";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airline_bankrupt";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airline_bankrupt";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airline_bankrupt";

const faqItems = [
  { question: "Aerolinka skrachovala a zrušila let – dostanem peniaze?", answer: "Je to komplikované. Podáte pohľadávku do konkurznej podstaty. Šanca úspechu je nízka, zvyčajne dostanete len percento z celkovej sumy." },
  { question: "Čo ak som platil kartou?", answer: "Pri zaplatení kartou môžete požiadať banku o chargeback (vrátenie platby) podľa pravidiel kartových sietí. To je najrýchlejšia cesta k peniazom." },
  { question: "Cestovné poistenie kryje bankrot?", answer: "Len niektoré poistky. Skontrolujte svoje podmienky – často je to doplnková poistka nad rámec základnej." },
  { question: "Čo ak som kúpil lístok cez agentúru?", answer: "Agentúra môže mať poistku od IATA alebo iného garanta. Niektoré krajiny (napr. Nemecko) majú garančný fond. Slovensko obmedzene." },
  { question: "Známe bankroty – ČSA, Monarch, Thomas Cook, FlyBMI?", answer: "Všetky tieto prípady ukazujú zložitosť vymáhania. Väčšina pasažierov nevidela plnú refundáciu. Najrýchlejšia cesta je chargeback alebo poistka." },
  { question: "EU261 platí aj pri skrachovanej aerolinke?", answer: "Technicky áno, ale nárok je neprioritný v konkurznej podstate. Paušálna kompenzácia 250/400/600 € typicky nebude vyplatená." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function AerolinkaSkrachovalaAkoDostatPeniazePage() {
  return (
    <LayoutSk>
      <SEO title="Aerolinka skrachovala – ako dostať peniaze späť" description="Skrachovala aerolinka a zrušila váš let? Chargeback, cestovné poistenie, konkurzná podstata – sprievodca vrátenia peňazí." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Aerolinka skrachovala", description: "Ako dostať peniaze späť po bankrote aerolinky.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Skrachovaná aerolinka", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Aerolinka skrachovala</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">Edge case · Bankrot aerolinky</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Aerolinka skrachovala: ako dostať peniaze späť</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Bankrot aerolinky je jedným z najťažších scenárov. EU261 formálne platí, ale vymáhanie je ťažké. Najrýchlejšie cesty: <strong>chargeback</strong> z karty, <strong>cestovné poistenie</strong>, pohľadávka v konkurznej podstate. Preverte cez <a href={claimWingerHomeHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_bankrupt_intro", claimWingerHomeHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-rose-200 bg-gradient-to-br from-rose-600 to-red-700 p-8 text-white shadow-xl dark:border-rose-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď – tri cesty k peniazom</h2><div className="space-y-3 text-base leading-7 text-rose-50"><p><strong>1. Chargeback</strong> z karty – ak ste zaplatili debetnou/kreditnou kartou. Najrýchlejší, obvykle 2 – 6 týždňov.</p><p><strong>2. Cestovné poistenie</strong> – ak máte balík alebo doplnkovú poistku pre bankrot dopravcu.</p><p><strong>3. Pohľadávka v konkurznej podstate</strong> – posledná možnosť, nízka úspešnosť.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Stratili ste peniaze pri bankrote aerolinky?" description="ClaimWinger preverí všetky cesty a pomôže s dokumentáciou." ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=airline_bankrupt" ctaLabel="Preveriť nárok" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_bankrupt_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Nenechajte peniaze zmiznúť</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">Pri bankrote je čas kľúčový. ClaimWinger vie, ktorá cesta má najvyššiu šancu.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bankrupt_final_primary", cancelledFlightHref)}>Preveriť prípad<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bankrupt_final_secondary", delayedFlightHref)}>Meškajúci let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">ITA vs Alitalia</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Prípad zaniknutej Alitalie.</p><Link href="/sk/blog/ita-airways-odskodnenie" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Náhrada za nový lístok</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Ak ste museli kúpiť nový.</p><Link href="/sk/blog/nahrada-za-novy-listok" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Metódy vyplatenia</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Ako aerolinky platia kompenzácie.</p><Link href="/sk/blog/metody-vyplatenia-kompenzacie" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
