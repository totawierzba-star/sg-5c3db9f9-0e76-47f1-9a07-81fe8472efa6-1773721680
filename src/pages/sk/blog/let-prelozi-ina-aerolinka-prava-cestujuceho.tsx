import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/let-prelozi-ina-aerolinka-prava-cestujuceho";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=rebooked_airline";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=rebooked_airline";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=rebooked_airline";

const faqItems = [
  { question: "Čo ak let preloží iná aerolinka?", answer: "Ak aerolinka X vás preloží na let aerolinky Y (presmerovanie), váš nárok z EU261 zostáva voči pôvodnej aerolinke X, nie voči Y." },
  { question: "Nový let Y meškal – kto zodpovedá?", answer: "Ak prvá aerolinka zrušila váš let, je zodpovedná za celú cestu vrátane náhradného letu. Pri meškaní náhradného letu pri prílete 3+ hod = kompenzácia od pôvodnej aerolinky." },
  { question: "Akú výšku kompenzácie?", answer: "Podľa pôvodne plánovanej trasy – nie podľa náhradného letu. Ak pôvodný let bol Viedeň – Paríž (1 100 km, 250 €), kompenzácia je 250 € aj ak vás presmerovali cez Frankfurt." },
  { question: "Čo ak má náhradný let vyššiu triedu?", answer: "Nemôžete byť žiadaní za rozdiel v cene. Ak však pôvodný bol business a náhradný economy = downgrade podľa článku 10 = refundácia 30/50/75 %." },
  { question: "Interline dohody medzi aerolinkami?", answer: "Aerolinky v aliancii (Star Alliance, SkyTeam, OneWorld) majú interline dohody a často sa presúvajú pasažieri medzi sebou pri narušeniach. Toto je bežná prax." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function LetPreloziInaAerolinkaPravaCestujucehoPage() {
  return (
    <LayoutSk>
      <SEO title="Let preložil iná aerolinka: vaše práva cestujúceho" description="Aerolinka vás presunula na let iného dopravcu? Prehľad EU261 nárokov, pôvodný vs náhradný let a kompenzácia." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Let preložil iná aerolinka", description: "Práva pasažiera pri presmerovaní na iného dopravcu.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Let preložila iná aerolinka", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Let preložila iná aerolinka</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">Edge case · Presmerovanie cez iného dopravcu</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Let preložila iná aerolinka: vaše práva cestujúceho</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Pri narušení letu môže aerolinka presmerovať pasažierov na let iného dopravcu. EU261 nárok <strong>zostáva voči pôvodnej aerolinke</strong>. Výška sa počíta podľa pôvodnej plánovanej trasy. Overte cez <a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_rebook_intro", cancelledFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 5 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-indigo-200 bg-gradient-to-br from-indigo-600 to-blue-700 p-8 text-white shadow-xl dark:border-indigo-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-indigo-50"><p>Nárok z EU261 zostáva voči <strong>pôvodnej aerolinke</strong>.</p><p>Sumy podľa pôvodnej trasy, nie náhradnej.</p><p>Pri downgrade na nižšiu triedu = čl. 10 refundácia 30/50/75 %.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Presmerovanie cez iného dopravcu?" description="ClaimWinger vypočíta nárok podľa pôvodnej trasy a reklamuje u pôvodnej aerolinky." ctaHref="https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=rebooked_airline" ctaLabel="Preveriť prípad" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_rebook_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Presmerovanie alebo spor o zodpovednosť?</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">ClaimWinger identifikuje správnu aerolinku a podá reklamáciu.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_rebook_final_primary", cancelledFlightHref)}>Preveriť nárok<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_rebook_final_secondary", delayedFlightHref)}>Meškajúci let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Codeshare – kto platí</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Príbuzná téma s partnerskými aerolinkami.</p><Link href="/sk/blog/kto-zaplati-odskodnenie-codeshare-lety" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Downgrade triedy</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Ak náhradný let je v nižšej triede.</p><Link href="/sk/blog/downgrade-triedy-letu-kompenzacia" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Presmerovaný let</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Všeobecné práva pri presmerovaní.</p><Link href="/sk/blog/presmerovany-let-prava" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
