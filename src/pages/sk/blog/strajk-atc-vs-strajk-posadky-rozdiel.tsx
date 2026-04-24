import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/strajk-atc-vs-strajk-posadky-rozdiel";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=strike_types";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=strike_types";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=strike_types";

const faqItems = [
  { question: "Je štrajk mimoriadna okolnosť?", answer: "Záleží na tom, kto štrajkuje. Externé štrajky (ATC, letiskoví pracovníci, pozemné služby iných firiem) = áno. Štrajk vlastnej posádky aerolinky = nie." },
  { question: "Rozsudok ECJ C-28/20 Airhelp vs. SAS – čo povedal?", answer: "Že štrajk vlastných zamestnancov aerolinky nie je mimoriadna okolnosť, pretože je to otázka riadenia aerolinky. Kompenzácia teda vzniká." },
  { question: "Štrajk ATC – mimoriadna okolnosť?", answer: "Áno. ATC je externá inštitúcia, aerolinka ho nemôže ovplyvniť. Pri zrušení letu kvôli ATC štrajku kompenzácia nevzniká, ale right to care áno." },
  { question: "Štrajk letiskových pracovníkov (bezpečnosť, čistenie, baggage)?", answer: "Typicky mimoriadna okolnosť, pretože nie sú zamestnancami aerolinky. Ak to aerolinka dokáže." },
  { question: "Divoký (neohlásený) štrajk posádky?", answer: "Podľa rozsudku z roku 2018 aj divoký štrajk bol posúdený ako nie mimoriadna okolnosť. ECJ C-195/17 potvrdil, že masívne chorobné alebo organizovaný protest zamestnancov = kompenzácia." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function StrajkAtcVsStrajkPosadkyRozdielPage() {
  return (
    <LayoutSk>
      <SEO title="Štrajk ATC vs štrajk posádky: rozdiel pri EU261 kompenzácii" description="Štrajk ATC = áno mimoriadna okolnosť. Štrajk vlastnej posádky aerolinky = nie (ECJ C-28/20). Kľúčové pre váš nárok." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Štrajk ATC vs štrajk posádky", description: "Rozdiel pri EU261 posudzovaní.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Štrajk ATC vs posádka", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Štrajk ATC vs posádka</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">Edge case · ECJ C-28/20</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Štrajk ATC vs štrajk posádky: rozdiel pri kompenzácii</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Štrajky sú bežným dôvodom meškania v Európe, ale nie všetky štrajky sú mimoriadnou okolnosťou. Kľúčový rozdiel: <strong>ATC štrajk = áno mimoriadna</strong>, <strong>štrajk vlastnej posádky = nie</strong>. Overte nárok cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_strike_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-rose-200 bg-gradient-to-br from-rose-600 to-pink-700 p-8 text-white shadow-xl dark:border-rose-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-rose-50"><p><strong>Štrajk ATC</strong> = externý, mimo kontroly aerolinky = <strong>mimoriadna okolnosť</strong>.</p><p><strong>Štrajk vlastnej posádky</strong> = vnútorný problém aerolinky = <strong>nie mimoriadna okolnosť</strong> (ECJ C-28/20 Airhelp vs. SAS).</p><p>Pri oboch typoch <strong>right to care platí</strong> (jedlo, hotel, presmerovanie).</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Aerolinka tvrdí štrajk – je to oprávnené?" description="ClaimWinger overí typ štrajku a pomôže s reklamáciou." ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=strike_types" ctaLabel="Preveriť nárok" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_strike_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">ClaimWinger rozlíši typ štrajku</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">Aerolinky často zamietajú s výhovorkou o štrajku, ktorý nebol mimoriadnou okolnosťou. Úspešnosť pri tejto kategórii je vysoká.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_strike_final_primary", delayedFlightHref)}>Preveriť meškanie<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_strike_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Štrajk a kompenzácia</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Podrobný prehľad štrajkov a EU261.</p><Link href="/sk/blog/strajk-lini-lotniczych-odszkodowanie" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Mimoriadne okolnosti</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Všeobecný rámec.</p><Link href="/sk/blog/mimoriadne-okolnosti-kompenzacia" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Meškanie kvôli posádke</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Nedostatok posádky ako dôvod.</p><Link href="/sk/blog/meskanie-kvoli-nedostatku-posadky" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
