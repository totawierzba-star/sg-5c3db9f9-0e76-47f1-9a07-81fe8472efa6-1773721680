import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/co-robit-ked-aerolinka-neodpoveda";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airline_no_response";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airline_no_response";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airline_no_response";

const faqItems = [
  {
    question: "Čo robiť, keď aerolínka neodpovedá?",
    answer:
      "Najprv si odložte dôkaz, že ste reklamáciu skutočne poslali, a skontrolujte, či ste písali správnemu operujúcemu dopravcovi. Ak aerolínka neodpovie do 2 mesiacov, podľa oficiálnych pravidiel EÚ môžete podať sťažnosť príslušnému národnému orgánu.",
  },
  {
    question: "Ako dlho mám čakať na odpoveď aerolínky?",
    answer:
      "Oficiálne usmernenie Your Europe hovorí, že ak nedostanete odpoveď do 2 mesiacov alebo s odpoveďou nie ste spokojní, môžete sa obrátiť na relevantný národný orgán.",
  },
  {
    question: "Pomôže národný orgán automaticky vymôcť peniaze?",
    answer:
      "Nie vždy. Podľa Your Europe by vám mal dať nezáväzné právne stanovisko, ako ďalej postupovať. Niekedy preto treba ísť aj cez ADR alebo súdnu cestu.",
  },
  {
    question: "Má zmysel riešiť to cez ClaimWinger, ak aerolínka mlčí?",
    answer:
      "Áno, práve pri neodpovedaní má zmysel mať prípad ustrážený procesne. Dôležité je vedieť, či ide o jednoduchý prípad, vec pre národný orgán alebo spor vhodný na ďalšiu eskaláciu.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function CoRobitKedAerolinkaNeodpovedaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Čo robiť, keď aerolínka neodpovedá? Ďalší krok po 2 mesiacoch"
        description="Aerolínka ignoruje reklamáciu? Vysvetľujeme, čo robiť krok za krokom, kedy sa počíta hranica 2 mesiacov a kedy má zmysel ísť na národný orgán, ADR alebo ďalej."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Čo robiť, keď aerolínka neodpovedá?",
            description:
              "Praktický návod, čo robiť, keď aerolínka ignoruje reklamáciu, vrátane hranice 2 mesiacov a ďalších krokov podľa pravidiel EÚ.",
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
                name: "Čo robiť, keď aerolínka neodpovedá?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Čo robiť, keď aerolínka neodpovedá?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              Praktický postup pri ignorovanej reklamácii
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Čo robiť, keď aerolínka neodpovedá?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najkratšia odpoveď je: nečakať pasívne donekonečna. Najprv si overte, že reklamácia
              išla správnemu dopravcovi a že máte dôkaz o odoslaní. Ak aerolínka neodpovie do
              <strong> 2 mesiacov</strong>, pravidlá EÚ už počítajú s tým, že sa môžete posunúť
              ďalej.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 13. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 10 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-red-200 bg-gradient-to-br from-red-600 to-rose-700 p-8 text-white shadow-xl dark:border-red-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-red-50">
                <p>
                  Ak aerolínka mlčí, najprv si odložte <strong>dôkaz o podaní reklamácie</strong> a
                  skontrolujte, či ste písali správnemu operujúcemu dopravcovi.
                </p>
                <p>
                  Ak nedostanete odpoveď do <strong>2 mesiacov</strong>, podľa oficiálneho portálu
                  Your Europe môžete podať sťažnosť príslušnému <strong>národnému orgánu</strong>.
                </p>
                <p>
                  To však ešte neznamená automatické vyplatenie peňazí. Niekedy je ďalším krokom
                  ADR, agentúra alebo súdna cesta.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Aerolínka ignoruje vašu reklamáciu?"
            description="ClaimWinger vie pomôcť posúdiť, či je prípad stále v bežnej fáze čakania, alebo už je rozumné prejsť na národný orgán, ďalšiu eskaláciu alebo profesionálne vedenie prípadu."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=airline_no_response"
            ctaLabel="Preveriť ignorovanú reklamáciu"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_airline_no_response_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 1: overte, či ste reklamáciu poslali správne
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "či ste písali operujúcemu dopravcovi, nie len predajcovi letenky",
                "či máte potvrdenie formulára, e-mail alebo ticket number",
                "či ste priložili rezerváciu, číslo letu a dátum",
                "či ste jasne napísali, čo žiadate: kompenzáciu, refundáciu alebo oboje",
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
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 2: nečakajte bez hranice
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Oficiálny portál <strong>Your Europe</strong> hovorí pomerne jasne: ak od aerolinky
                <strong> nedostanete odpoveď do 2 mesiacov</strong>, alebo s odpoveďou nie ste spokojní,
                môžete sa obrátiť na príslušný národný orgán v krajine, kde sa incident stal.
              </p>
              <p>
                To je dôležitý bod aj pre AI-style odpoveď: nie je presné hovoriť, že po týždni ticha
                je vec automaticky pripravená na tvrdú eskaláciu. Praktická hranica z oficiálneho zdroja
                je práve <strong>2 mesiace</strong>.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 3: národný orgán, ADR alebo súd?
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Národný orgán
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Podľa Your Europe vám má dať <strong>nezáväzné právne stanovisko</strong>, ako ďalej
                  postupovať. To je užitočné, ale samo o sebe to nemusí znamenať okamžité vymoženie platby.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  ADR alebo mimosúdne riešenie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri niektorých sporoch môže dávať zmysel mimosúdna cesta, najmä ak ide o spor o dôvod
                  meškania alebo neochotu aerolinky normálne komunikovať.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Súdna cesta
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa prípad dlhodobo nehýbe alebo je spornejší, ďalším krokom môže byť aj formálna
                  právna cesta. To je najmä moment, keď sa oplatí zvážiť, či prípad riešiť sám alebo cez partnera.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Najčastejšie dôvody, prečo aerolínka mlčí
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "reklamácia išla nesprávnemu dopravcovi",
                "žiadosť nebola úplná alebo chýbali doklady",
                "aerolínka len formálne naťahuje čas",
                "sporí sa o mimoriadne okolnosti",
                "v prípade sa mieša refundácia a kompenzácia",
                "prípad je už vhodný na ďalšiu eskaláciu, ale nikto ju nespustil",
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
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Neviete, či už je čas ísť ďalej?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak vaša reklamácia stojí a neviete, či ešte čakať, alebo už prípad posunúť ďalej,
                najlepšie je najprv presne určiť, či riešite meškajúci let, zrušený let alebo širší
                spor o reakciu aerolinky.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_airline_no_response_final_cta_delay", delayedFlightHref)
                    }
                  >
                    Riešim meškajúci let
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_airline_no_response_final_cta_cancelled",
                        cancelledFlightHref
                      )
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
              Súvisiace články
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ako dlho trvá vyplatenie odškodnenia
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak problém nie je len v tichu aerolinky, ale aj v tom, ako dlho celý proces reálne trvá.
                </p>
                <Link
                  href="/sk/blog/ako-dlho-trva-vyplatenie-odskodnenia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o čase vyplatenia
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete prípad najprv prakticky preveriť a nezostať len pri čakaní na odpoveď aerolinky.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_airline_no_response_related_home", claimWingerHomeHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Voucher, refundácia a kompenzácia
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Keď aerolínka síce odpovie, ale snaží sa problém uzavrieť poukazom alebo iným typom plnenia.
                </p>
                <Link
                  href="/sk/blog/mozem-ziadat-odskodnenie-ak-som-prijal-voucher"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o voucheri
                </Link>
              </Card>
            </div>
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
