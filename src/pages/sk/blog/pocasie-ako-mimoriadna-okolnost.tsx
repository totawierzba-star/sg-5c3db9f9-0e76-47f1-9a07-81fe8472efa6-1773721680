import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/pocasie-ako-mimoriadna-okolnost";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=weather_extraordinary";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=weather_extraordinary";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=weather_extraordinary";

const faqItems = [
  { question: "Je zlé počasie automaticky mimoriadna okolnosť?", answer: "Nie automaticky. Počasie musí skutočne bezpečne znemožniť let. Mierny dážď alebo bežná zima nie je mimoriadna okolnosť. Silná búrka, extrémne vetry, hustá hmla obmedzujúca viditeľnosť – môžu byť." },
  { question: "Musí aerolinka dokázať počasie ako mimoriadne okolnosti?", answer: "Áno. Musí predložiť meteorologický report (napr. METAR, TAF) alebo oznámenie ATC, ktoré jednoznačne ukazuje, že let nebolo možné uskutočniť. Samotné tvrdenie nestačí." },
  { question: "Čo ak let pred nami úspešne odletel?",
    answer: "Kľúčový argument proti mimoriadnym okolnostiam. Ak iné aerolinky alebo iné lety tej istej aerolinky v rovnakom čase odleteli, tvrdenie o počasí je sporné." },
  { question: "Vtáčia zrážka je mimoriadna okolnosť?", answer: "Áno, podľa rozsudku ECJ C-315/15 (Pešková). Aerolinka musí dokázať, že prijala všetky rozumné opatrenia, aby dopadu zabránila." },
  { question: "Máte právo na starostlivosť aj pri počasí?", answer: "Áno. Aj ak je meškanie kvôli počasiu mimoriadnou okolnosťou (= bez kompenzácie), právo na jedlo, hotel, dopravu pri dlhšom meškaní platí vždy." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function PocasieAkoMimoriadnaOkolnostPage() {
  return (
    <LayoutSk>
      <SEO title="Počasie ako mimoriadna okolnosť: kedy neplatí kompenzácia" description="Aerolinka tvrdí počasie ako dôvod zrušenia? Kedy je to skutočne mimoriadna okolnosť podľa EU261 a kedy nie. Ako dokázať nárok." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Počasie ako mimoriadna okolnosť", description: "Kedy je počasie mimoriadnou okolnosťou podľa EU261.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Počasie mimoriadna okolnosť", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Počasie mimoriadna okolnosť</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">Edge case · Mimoriadne okolnosti</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Počasie ako mimoriadna okolnosť: kedy platí EU261</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Aerolinka tvrdí počasie a odmieta kompenzáciu? Nie každé zlé počasie je mimoriadna okolnosť. Aerolinka musí <strong>dokázať</strong>, že počasie skutočne znemožnilo konkrétny let. Preverte cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_weather_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-gray-200 bg-gradient-to-br from-gray-700 to-slate-800 p-8 text-white shadow-xl dark:border-gray-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-gray-100"><p><strong>Áno, počasie môže byť mimoriadna okolnosť.</strong> Ale len keď bolo také silné, že skutočne znemožnilo let.</p><p>Aerolinka <strong>musí dokázať</strong> – meteo reportom, oznámením ATC, uzavretím letiska.</p><p>Protiargument: iné lety v rovnakom čase úspešne odleteli = tvrdenie je sporné.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Aerolinka tvrdí počasie – je to oprávnené?" description="ClaimWinger získa meteo reporty a overí tvrdenie aerolinky. Preverenie zdarma." ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=weather_extraordinary" ctaLabel="Preveriť nárok" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_weather_embed" />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Kedy počasie JE a NIE JE mimoriadna okolnosť</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">JE mimoriadna</h3><ul className="text-sm leading-6 text-slate-600 dark:text-slate-300 space-y-1"><li>Tornádo alebo silná búrka</li><li>Hustá hmla obmedzujúca viditeľnosť pod minimá</li><li>Extrémne vetry nad limitmi lietadla</li><li>Zatvorené letisko kvôli snehovej kalamite</li><li>Vulkán alebo popol</li></ul></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">NIE JE mimoriadna</h3><ul className="text-sm leading-6 text-slate-600 dark:text-slate-300 space-y-1"><li>Mierny dážď alebo snežene</li><li>Letná horúčava v bežnom rozsahu</li><li>Bežný zimný vietor</li><li>Rotácia lietadla po meškaní v inom meste kvôli počasiu</li><li>Predvídateľné sezónne problémy</li></ul></Card>
            </div>
          </section>

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Máte pochybnosti o počasí?</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">ClaimWinger overí reálnu situáciu cez meteo reporty a rozhodnutia súdov.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_weather_final_primary", delayedFlightHref)}>Preveriť nárok<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_weather_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Mimoriadne okolnosti</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Všeobecný prehľad.</p><Link href="/sk/blog/mimoriadne-okolnosti-kompenzacia" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Vtáčia zrážka</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Ďalšia mimoriadna okolnosť.</p><Link href="/sk/blog/vtacia-zrazka-mimoriadna-okolnost" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Right to care</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Platí aj pri mimoriadnych okolnostiach.</p><Link href="/sk/blog/right-to-care-jedlo-hotel-doprava" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
