import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/zdravotny-problem-na-palube-odskodnenie";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=medical_emergency";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=medical_emergency";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=medical_emergency";

const faqItems = [
  { question: "Meškanie kvôli zdravotnému problému na palube – mimoriadna okolnosť?", answer: "Áno, zvyčajne. Zdravotná núdza pasažiera je externou udalosťou. Pilot musí niekedy odkloniť na najbližšie letisko, čo spôsobuje meškanie. Kompenzácia typicky nevzniká." },
  { question: "Čo ak zdravotný problém bol zamestnanca aerolinky (posádky)?", answer: "Vtedy situácia je zložitejšia. Môže byť posudzovaná ako vnútorná vec aerolinky. Dôležité je, či aerolinka mala náhradného pilota/stewardku a či prijala rozumné opatrenia." },
  { question: "Right to care pri medicínskom odklonení?", answer: "Áno. Pasažieri majú stále právo na jedlo, nápoje, komunikáciu a v prípade potreby hotel." },
  { question: "Čo ak som zmeškal prestup?", answer: "Pri jednej rezervácii aerolinka musí zabezpečiť presmerovanie. Právo na kompenzáciu závisí od celkového meškania pri prílete a typu zdravotnej udalosti." },
  { question: "ECJ judikatúra k zdravotným situáciám?", answer: "Typicky je to posudzované ako externá udalosť. Kľúčové je, že pilot má zákonnú povinnosť zabezpečiť bezpečnosť pasažierov – odklonenie je preto odôvodnené." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function ZdravotnyProblemNaPalubeOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO title="Zdravotný problém na palube a meškanie letu: EU261 nárok" description="Pilot odkloni let kvôli zdravotnému problému pasažiera? Ako to posudzuje EU261 a kedy vzniká kompenzácia." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Zdravotný problém na palube", description: "EU261 pri medicínskom odklonení letu.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Zdravotný problém na palube", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Zdravotný problém na palube</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">Edge case · Medicínske odklonenie</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Zdravotný problém na palube: nárok na odškodnenie?</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Pri zdravotnej núdzi pilot môže odkloniť let na najbližšie letisko, čo spôsobuje meškanie. Väčšinou ide o mimoriadnu okolnosť – kompenzácia nevzniká. Máte ale právo na starostlivosť a presmerovanie. Preverte cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_medical_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 5 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-red-200 bg-gradient-to-br from-red-600 to-pink-700 p-8 text-white shadow-xl dark:border-red-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-red-50"><p>Zdravotný problém pasažiera = mimoriadna okolnosť. Kompenzácia typicky nevzniká.</p><p>Right to care (jedlo, hotel, presmerovanie) zostáva.</p><p>Pri zdravotnom probléme posádky situácia je zložitejšia – závisí od rozumných opatrení aerolinky.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Zdravotné odklonenie = vaša strata?" description="Aj keď kompenzácia nevzniká, ClaimWinger môže pomôcť s preplatením výdavkov." ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=medical_emergency" ctaLabel="Preveriť nárok" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_medical_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Získajte aspoň preplatenie výdavkov</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">Pri dlhšom meškaní máte nárok na hotel, jedlo a dopravu. ClaimWinger to zariadi.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_medical_final_primary", delayedFlightHref)}>Preveriť výdavky<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_medical_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Mimoriadne okolnosti</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Všeobecný prehľad.</p><Link href="/sk/blog/mimoriadne-okolnosti-kompenzacia" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Right to care</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Platí aj pri mimoriadnej okolnosti.</p><Link href="/sk/blog/right-to-care-jedlo-hotel-doprava" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Presmerovaný let</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Práva pri odklonení.</p><Link href="/sk/blog/presmerovany-let-prava" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
