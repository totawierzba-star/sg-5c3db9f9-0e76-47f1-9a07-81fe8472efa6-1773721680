import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/vtacia-zrazka-mimoriadna-okolnost";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bird_strike";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bird_strike";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bird_strike";

const faqItems = [
  { question: "Je vtáčia zrážka mimoriadna okolnosť?", answer: "Áno, potvrdil to rozsudok ECJ C-315/15 (Pešková). Vtáčia zrážka nie je vlastná aerolinke – ide o externú udalosť." },
  { question: "Musí aerolinka predložiť dôkazy?", answer: "Áno. Dokument o oprave, foto poškodenia, zápis z technického personálu. Samotné tvrdenie nestačí." },
  { question: "Čo ak vtáčia zrážka bola pred letom?", answer: "Ak už bolo poškodenie opravené a aerolinka to vedela, ale neprijala opatrenia (náhradné lietadlo), môže kompenzácia vzniknúť. Aerolinka musí dokázať rozumné opatrenia." },
  { question: "Right to care pri vtáčej zrážke?", answer: "Áno. Aj pri mimoriadnej okolnosti máte právo na jedlo, hotel a presmerovanie." },
  { question: "Ak vtáčia zrážka spôsobí reťaz meškaní?", answer: "Iba prvý let je krytý mimoriadnou okolnosťou. Ďalšie rotácie toho istého lietadla musia byť posúdené samostatne." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function VtaciaZrazkaMimoriadnaOkolnostPage() {
  return (
    <LayoutSk>
      <SEO title="Vtáčia zrážka ako mimoriadna okolnosť (ECJ C-315/15)" description="Vtáčia zrážka je mimoriadna okolnosť podľa rozsudku Pešková vs Travel Service. Kedy ruší kompenzáciu a kedy nie." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Vtáčia zrážka mimoriadna okolnosť", description: "ECJ C-315/15 a EU261.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Vtáčia zrážka", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Vtáčia zrážka</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">Edge case · ECJ C-315/15 Pešková</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Vtáčia zrážka ako mimoriadna okolnosť</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Vtáčia zrážka (bird strike) je podľa rozsudku <strong>ECJ C-315/15 Pešková</strong> mimoriadnou okolnosťou. Aerolinka pri nej nemusí platiť paušálnu kompenzáciu, ale musí dokázať prijatie rozumných opatrení. Preverte cez <a href={claimWingerHomeHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_bird_intro", claimWingerHomeHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 5 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-orange-200 bg-gradient-to-br from-orange-600 to-amber-700 p-8 text-white shadow-xl dark:border-orange-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-orange-50"><p>Vtáčia zrážka = <strong>mimoriadna okolnosť</strong>. Kompenzácia zvyčajne nevzniká.</p><p>Ale právo na starostlivosť (jedlo, hotel) a presmerovanie <strong>zostáva</strong>.</p><p>Pri reťazových meškaniach iných letov tej istej aerolinky posudzujeme každé zvlášť.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Vtáčia zrážka alebo len výhovorka?" description="ClaimWinger overí, či ide o reálnu zrážku a či aerolinka prijala rozumné opatrenia." ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=bird_strike" ctaLabel="Preveriť nárok" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_bird_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Nestačí len tvrdenie aerolinky</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">Aerolinka musí dokázať reálnu zrážku aj rozumné opatrenia. ClaimWinger získa dôkazy a overí.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bird_final_primary", delayedFlightHref)}>Preveriť nárok<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_bird_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Mimoriadne okolnosti</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Všeobecný prehľad.</p><Link href="/sk/blog/mimoriadne-okolnosti-kompenzacia" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Technická porucha</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Rozdiel oproti vtáčej zrážke.</p><Link href="/sk/blog/technicka-porucha-narok-na-odskodnenie" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Počasie mimoriadna</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Iná kategória externých udalostí.</p><Link href="/sk/blog/pocasie-ako-mimoriadna-okolnost" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
