import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileText,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/pir-protokol-co-to-je";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=pir_report_guide";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=pir_report_guide";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=pir_report_guide";

const faqItems = [
  {
    question: "Čo je PIR protokol?",
    answer:
      "PIR je praktický letiskový report o probléme s batožinou, najčastejšie pri meškaní, strate alebo poškodení odbavenej batožiny. Pomáha spustiť tracing a vytvoriť prvú oficiálnu stopu o tom, že problém vznikol pri ceste.",
  },
  {
    question: "Stačí samotný PIR ako reklamácia?",
    answer:
      "Nie vždy. PIR je veľmi dôležitý, ale Your Europe zároveň uvádza, že reklamáciu treba podať písomne aerolinke a neexistuje jeden štandardný formulár platný pre celú EÚ. Pri poškodenej batožine býva lehota 7 dní a pri oneskorene doručenej 21 dní od doručenia batožiny.",
  },
  {
    question: "Kedy mám žiadať o PIR?",
    answer:
      "Najlepšie hneď na letisku po zistení problému s odbavenou batožinou. Čím skôr vznikne oficiálna stopa, tým silnejší býva celý prípad.",
  },
  {
    question: "Je PIR to isté ako kompenzácia za meškajúci let?",
    answer:
      "Nie. PIR rieši vrstvu batožiny. Kompenzácia za meškanie alebo zrušenie letu je samostatný nárok a riadi sa inou logikou než batožinový report.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function PirProtokolCoToJePage() {
  return (
    <LayoutSk>
      <SEO
        title="PIR protokol: čo to je a kedy ho potrebujete?"
        description="Čo je PIR protokol pri batožine? Vysvetľujeme, kedy ho pýtať na letisku, čo doň patrí, prečo veľmi pomáha a prečo sám o sebe nie vždy stačí ako celá reklamácia."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "PIR protokol: čo to je a kedy ho potrebujete?",
            description:
              "Praktický návod, čo je PIR pri batožine, kedy ho žiadať na letisku a prečo je dôležitý, ale nie vždy jedinou časťou reklamácie.",
            mainEntityOfPage: articleUrl,
            datePublished: "2026-04-13",
            dateModified: "2026-04-13",
            author: {
              "@type": "Organization",
              name: "problemlot.com",
            },
            publisher: {
              "@type": "Organization",
              name: "problemlot.com",
              logo: {
                "@type": "ImageObject",
                url: "https://problemlot.com/og-image.png",
              },
            },
            image: "https://problemlot.com/og-image.png",
            inLanguage: "sk-SK",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Domov",
                item: "https://problemlot.com/sk",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://problemlot.com/sk/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "PIR protokol",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">
              Domov
            </Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <span>/</span>
            <span>PIR protokol</span>
          </div>

          <header className="mb-10">
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              PIR protokol: čo to je a kedy ho potrebujete?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Keď po prílete chýba kufor alebo príde poškodený, veľa cestujúcich počuje skratku
              <strong> PIR</strong> prvýkrát až pri letiskovom pulte pre batožinu. A práve tam sa často rozhoduje,
              či bude mať celý prípad pevnú stopu, alebo sa neskôr rozpadne na dohady.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 13. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 8 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-cyan-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>
                  <strong>PIR</strong> je praktický letiskový report o probléme s odbavenou batožinou.
                  Najčastejšie sa vypĺňa pri <strong>meškaní</strong>, <strong>strate</strong> alebo
                  <strong> poškodení</strong> batožiny.
                </p>
                <p>
                  Je veľmi dôležitý, pretože vytvára prvú oficiálnu stopu a často spúšťa tracing.
                  Zároveň však nemusí automaticky znamenať, že máte splnenú aj celú
                  <strong> písomnú reklamáciu</strong> voči aerolinke.
                </p>
                <p>
                  Ak riešite popri batožine aj meškanie alebo zrušenie letu, môžete situáciu poslať
                  cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_pir_article_quick_answer_home", claimWingerHomeHref)
                    }
                    className="font-semibold underline underline-offset-4"
                  >
                    ClaimWinger Slovensko
                  </a>
                  . ClaimWinger účtuje <strong>30 %</strong> bez ohľadu na to, či sa vec rieši
                  mimosúdne alebo súdne.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Máte chaos medzi problémom s batožinou a problémom s letom?"
            description="ClaimWinger vie pomôcť oddeliť, čo patrí do samostatného batožinového prípadu a čo už patrí do nároku za meškajúci alebo zrušený let."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=pir_report_guide"
            ctaLabel="Preveriť prípad s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_pir_report_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <ClipboardList className="h-8 w-8 text-sky-600" />
              1. Čo vlastne PIR znamená
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  PIR sa bežne chápe ako <strong>Property Irregularity Report</strong>. V praxi ide o
                  letiskový záznam, že s vašou odbavenou batožinou niečo nie je v poriadku.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najčastejšie sa vystavuje v troch scenároch: <strong>batožina neprišla</strong>,
                  <strong> prišla poškodená</strong> alebo <strong>prišla s inou nezrovnalosťou</strong>,
                  ktorú treba oficiálne zachytiť hneď po prílete.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <MapPinned className="h-8 w-8 text-sky-600" />
              2. Kedy treba žiadať o PIR
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "hneď po zistení, že batožina neprišla na pás",
                "hneď po prevzatí, ak vidíte prasklinu, zlomené koliesko alebo rukoväť",
                "na letisku, kde ste batožinu očakávali po prílete",
                "pred odchodom z terminálu, ak sa to dá rozumne stihnúť",
              ].map((item) => (
                <Card key={item} className="border-slate-200 p-4 dark:border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertCircle className="h-8 w-8 text-sky-600" />
              3. Čo by v PIR a okolo PIR nemalo chýbať
            </h2>
            <div className="grid gap-4">
              {[
                "meno cestujúceho a kontaktné údaje",
                "číslo letu, dátum a trasa",
                "batožinový štítok alebo aspoň údaje z odbavenia batožiny",
                "popis kufra a viditeľného poškodenia alebo informácia, že chýba",
                "adresa doručenia, ak batožina mešká",
                "fotografie a boarding pass uložené mimo samotného reportu",
              ].map((item) => (
                <Card key={item} className="border-slate-200 p-4 dark:border-slate-700">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 text-sky-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Prečo PIR veľmi pomáha, ale nie vždy stačí sám o sebe
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Your Europe uvádza, že pri stratenej, poškodenej alebo oneskorene doručenej batožine treba reklamáciu podať
                <strong> písomne</strong> a zároveň neexistuje <strong>štandardný formulár platný v celej EÚ</strong>.
                To je presne dôvod, prečo je PIR dôležitý, ale nie vždy posledný krok.
              </p>
              <p>
                Pri <strong>poškodenej batožine</strong> býva lehota na písomnú reklamáciu
                <strong> 7 dní</strong> od prevzatia. Pri <strong>oneskorene doručenej batožine</strong>
                ide typicky o <strong>21 dní od doručenia</strong>. Preto je bezpečnejšie brať PIR ako
                silný štart prípadu, nie ako garanciu, že už netreba nič ďalšie robiť.
              </p>
              <p>
                Ak vám pracovník na letisku povie, že „je to už v systéme“, je to dobré znamenie,
                ale stále sa oplatí mať vlastnú kópiu reportu, číslo prípadu a vedieť, aký ďalší
                písomný krok aerolínka očakáva.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-amber-200 bg-amber-50 p-8 dark:border-amber-800 dark:bg-amber-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Keď ste z letiska odišli bez PIR
              </h2>
              <p className="mb-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                Nie je to automaticky koniec prípadu, ale situácia býva slabšia. Vtedy pomáha všetko,
                čo vie časovo ukázať, že problém existoval už po prílete: fotografie, správy aerolinky,
                batožinový štítok, svedkovia, e-mail poslaný hneď po prílete alebo záznam z helpdesku.
              </p>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                Čím väčšia medzera medzi prevzatím batožiny a prvým oficiálnym hlásením, tým viac
                priestoru má aerolínka tvrdiť, že problém vznikol neskôr mimo jej kontroly.
              </p>
            </Card>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-800 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si preveriť aj vrstvu nároku za samotný let?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                PIR rieši batožinu. Ak však popri tom riešite aj meškanie, zrušenie letu alebo rozpad
                celej cesty, ClaimWinger vie pomôcť rozlíšiť, čo patrí do ktorého typu prípadu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_pir_article_final_cta_home", claimWingerHomeHref)
                    }
                  >
                    Preveriť prípad s ClaimWinger
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_pir_article_final_cta_delay", delayedFlightHref)
                    }
                  >
                    Riešim meškajúci let
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_pir_article_final_cta_cancel", cancelledFlightHref)
                    }
                  >
                    Riešim zrušený let
                  </a>
                </Button>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Často kladené otázky
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-slate-900 dark:text-white">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </article>
    </LayoutSk>
  );
}
