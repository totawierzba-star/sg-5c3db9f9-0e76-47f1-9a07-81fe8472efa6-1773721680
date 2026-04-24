import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/vieden-tel-aviv-meskanie-letu";
const delayedFlightHref = "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vie_tlv_delay";
const cancelledFlightHref = "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vie_tlv_delay";
const claimWingerHomeHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vie_tlv_delay";

const faqItems = [
  { question: "Mám pri Viedeň – Tel Aviv nárok?", answer: "Áno, pri meškaní 3+ hod. Trasa ~2 400 km (1 500 – 3 500 km mimo EÚ) = 400 €." },
  { question: "Akí dopravcovia?", answer: "Austrian, El Al, Wizz Air (nepravidelné), Lufthansa. Pri Austrian (EÚ) plné EU261. El Al pri odlete z EÚ áno, pri návrate z Izraela obmedzene." },
  { question: "Koľko dostanem?", answer: "400 € – trasa 1 500 – 3 500 km mimo EÚ." },
  { question: "Bezpečnostné dôvody meškania?", answer: "Po 2023 sú bežné bezpečnostné omnoho obmedzenia vzdušného priestoru nad Izraelom. Tie sú mimoriadne okolnosti, kompenzácia nevzniká. Ale právo na starostlivosť a presmerovanie platí." },
  { question: "Zrušenie letu pre vojnu?", answer: "Vojenský konflikt je mimoriadna okolnosť. Aerolinka musí zabezpečiť presmerovanie alebo refundáciu, ale nemusí vyplatiť paušálnu kompenzáciu." },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", { locale: "sk", placement, destination });
}

export default function ViedenTelAvivMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO title="Viedeň – Tel Aviv meškanie letu: 400 € EU261" description="Austrian alebo El Al Viedeň – Tel Aviv meškal? EU261 nárok 400 €. Bezpečnostné obmedzenia a mimoriadne okolnosti." url={articleUrl} canonicalUrl={articleUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Viedeň – Tel Aviv meškanie", description: "EU261 pri VIE – TLV.", mainEntityOfPage: articleUrl, datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "problemlot.com" }, publisher: { "@type": "Organization", name: "problemlot.com", logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" } }, image: "https://problemlot.com/og-image.png", inLanguage: "sk-SK" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" }, { "@type": "ListItem", position: 3, name: "Viedeň – Tel Aviv", item: articleUrl }] }) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link><span>/</span><Link href="/sk/blog" className="hover:text-blue-600">Blog</Link><span>/</span><span>Viedeň – Tel Aviv</span>
          </div>
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">Trasa · VIE – TLV · 2 400 km</div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">Viedeň – Tel Aviv meškanie letu: 400 €</h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">Austrian Airlines, El Al, Wizz Air a Lufthansa lietajú Viedeň – Tel Aviv. Pri meškaní 3+ hod = <strong>400 €</strong>. Aktuálna bezpečnostná situácia však mení posudzovanie mimoriadnych okolností. Overte cez <a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline underline-offset-4" onClick={() => trackClaimClick("sk_vie_tlv_intro", delayedFlightHref)}>ClaimWinger</a>.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Aktualizované: 24. apríla 2026</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4" /><span>Čítanie: 6 minút</span></div>
            </div>
          </header>

          <section className="mb-10"><Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-blue-700 p-8 text-white shadow-xl dark:border-sky-800"><h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2><div className="space-y-3 text-base leading-7 text-sky-50"><p>VIE – TLV ≈ 2 400 km. Mimo EÚ, 1 500 – 3 500 km = <strong>400 €</strong>.</p><p>Bezpečnostné obmedzenia nad Izraelom = mimoriadne okolnosti (bez kompenzácie, ale right to care platí).</p><p>Austrian = EÚ aerolinka, plné pokrytie EU261.</p></div></Card></section>

          <ClaimWingerSkSection className="mb-12" title="Izraelský let meškal?" description="ClaimWinger rozlíši bezpečnostné mimoriadne okolnosti od prevádzkových." ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=vie_tlv_delay" ctaLabel="Preveriť VIE – Tel Aviv" loadingLabel="Načítava sa formulár ClaimWinger..." loadingDescription="O chvíľu sa zobrazí slovenský formulár." placement="sk_blog_vie_tlv_embed" />

          <section className="mb-12"><Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20"><h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">400 € pri správnom dôvode meškania</h2><p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">Nie každé meškanie na tejto trase je bezpečnostný dôvod. ClaimWinger to overí.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><a href={delayedFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_vie_tlv_final_primary", delayedFlightHref)}>Preveriť meškanie<ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline"><a href={cancelledFlightHref} target="_blank" rel="noopener noreferrer" onClick={() => trackClaimClick("sk_vie_tlv_final_secondary", cancelledFlightHref)}>Zrušený let</a></Button></div></Card></section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Mimoriadne okolnosti</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Ako sa posudzujú bezpečnostné situácie.</p><Link href="/sk/blog/mimoriadne-okolnosti-kompenzacia" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Viedeň – Istanbul meškanie</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Alternatívna blízkovýchodná trasa.</p><Link href="/sk/blog/vieden-istanbul-meskanie-letu" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700"><h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Austrian Airlines</h3><p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Proces reklamácie.</p><Link href="/sk/blog/austrian-airlines-meskanie-odskodnenie" className="font-semibold text-blue-600 underline underline-offset-4">Prejsť</Link></Card>
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
