import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/hotel-pri-meskani-letu-kedy-musi-aerolinka-zaplatit";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=hotel_delay";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=hotel_delay";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=hotel_delay";

const faqItems = [
  { question: "Kedy musí aerolinka zaplatiť hotel?", answer: "Vždy, keď meškanie alebo zrušenie letu prinúti pasažiera zostať do ďalšieho dňa. Článok 9 EU261 hovorí o povinnosti zabezpečiť ubytovanie bezplatne." },
  { question: "Aký hotel?", answer: "Štandardné 3★ ubytovanie. Nemusí byť luxusný, ale musí byť primeraný (čistý, bezpečný, bez hmyzu). Aerolinka zvyčajne má zmluvy s konkrétnymi hotelmi blízko letiska." },
  { question: "Čo ak aerolinka hotel neposkytne?", answer: "Máte právo kúpiť si sami a aerolinka ho musí preplatiť. Vyberte štandardné 3★ v cene 80 – 150 € za noc. Odložte si originálnu faktúru." },
  { question: "Aerolinka preplatí neobmedzene?",
    answer: "Pri mimoriadnych okolnostiach áno – EU261 nemá horný limit pre hotel. Pri bežnom meškaní platí aerolinka, kým cestujúci nedokončí cestu." },
  { question: "Aj pri mimoriadnych okolnostiach?", answer: "Áno. Right to care platí <strong>vždy</strong>, aj pri mimoriadnych okolnostiach (počasie, štrajk ATC). Kompenzácia 250/400/600 € nevzniká, ale hotel áno." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function HotelPriMeskaniLetuKedyMusiAerolinkaZaplatitPage() {
  return (
    <LayoutSk>
      <SEO title="Hotel pri meškaní letu: kedy musí aerolinka zaplatiť" description="Meškanie cez noc = aerolinka musí zabezpečiť hotel a dopravu. Aj pri mimoriadnych okolnostiach. Koľko a ako preplatiť." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Hotel pri meškaní letu", description: "Kedy aerolinka platí hotel.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Hotel pri meškaní", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Hotel pri meškaní</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Right to care · Článok 9 EU261</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Hotel pri meškaní letu: kedy musí aerolinka zaplatiť</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Pri meškaní cez noc má aerolinka povinnosť zabezpečiť <strong>hotel a dopravu medzi letiskom a hotelom</strong>. Aj pri mimoriadnych okolnostiach. Ak neposkytne, kúpte si sami a reklamujte. Overte cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_hotel_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 5 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-emerald-200 bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white shadow-xl dark:border-emerald-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-emerald-50"><p>Hotel = povinnosť aerolinky, keď meškanie vyžaduje nocľah.</p><p>Štandardné 3★ ubytovanie. Bez horného limitu počtu nocí.</p><p>Platí <strong>vždy</strong>, aj pri mimoriadnych okolnostiach.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Zaplatili ste si hotel z vlastného?" description="ClaimWinger vie získať preplatenie od aerolinky." ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=hotel_delay" ctaLabel="Preveriť preplatenie" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_hotel_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Aerolinka odmietla preplatiť?</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">ClaimWinger pripraví reklamáciu podľa článku 9 EU261.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_hotel_final_primary", delayedFlightHref)}>Preveriť hotel<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_hotel_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Nočné meškanie</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Špecifiká pri nočnom čakaní.</p><Link href="/sk/blog/nocne-meskanie-hotel-a-prava" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Right to care</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Komplexný sprievodca.</p><Link href="/sk/blog/right-to-care-jedlo-hotel-doprava" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Strata ubytovania</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Pri zrušení letu a hotel rezervácii.</p><Link href="/sk/blog/zruseny-let-strata-ubytovania" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
