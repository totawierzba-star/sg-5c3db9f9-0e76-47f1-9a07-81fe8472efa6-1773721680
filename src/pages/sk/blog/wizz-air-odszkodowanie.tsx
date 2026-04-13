import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  ListChecks,
  UserCheck,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/wizz-air-odszkodowanie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=how_to_claim_wizz_air";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=how_to_claim_wizz_air";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=how_to_claim_wizz_air";

const faqItems = [
  {
    question: "Môžem podať reklamáciu Wizz Air priamo sám?",
    answer:
      "Áno. Wizz Air vo svojom help centre odporúča pri neurgentných žiadostiach podať reklamáciu priamo cez ich formulár. Pri jednoduchom prípade to môže byť rozumný prvý krok.",
  },
  {
    question: "Ako dlho Wizz Air spracúva claim?",
    answer:
      "Wizz Air vo svojom help centre uvádza, že sa snaží vybaviť reklamácie a písomné žiadosti do 30 dní. To však neznamená, že každý spor sa v praxi naozaj uzavrie bez ďalších otázok v tomto čase.",
  },
  {
    question: "Môžem cez Wizz Air žiadať aj expenses, nielen kompenzáciu?",
    answer:
      "Áno. Wizz Air rozlišuje bežné passenger rights, EC261 compensation request a ďalšie typy claimov. Preto je dôležité zvoliť správnu kategóriu a mať pripravené doklady k nákladom.",
  },
  {
    question: "Čo ak nesúhlasím s odpoveďou Wizz Air?",
    answer:
      "V takom prípade má zmysel uložiť si celé rozhodnutie, podklady a pozrieť sa na ďalšie možnosti eskalácie podľa krajiny incidentu, vrátane ADR alebo ďalšieho procesného postupu.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function WizzAirOdszkodowanieSk() {
  return (
    <LayoutSk>
      <SEO
        title="Ako podať reklamáciu Wizz Air krok za krokom"
        description="Praktický návod, ako podať reklamáciu Wizz Air: čo si pripraviť, ako zvoliť správnu claim kategóriu, čo hovoria o 30 dňoch spracovania a čo robiť pri spore."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ako podať reklamáciu Wizz Air krok za krokom",
            description:
              "Praktický sprievodca podaním reklamácie Wizz Air vrátane dokumentov, claim kategórií, orientácie v EC261 a ďalších krokov pri nesúhlase s odpoveďou dopravcu.",
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
                name: "Ako podať reklamáciu Wizz Air krok za krokom",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Ako podať reklamáciu Wizz Air krok za krokom</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-fuchsia-100 px-4 py-2 text-sm font-medium text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
              Praktický návod pre reklamáciu Wizz Air
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ako podať reklamáciu Wizz Air krok za krokom
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak chcete podať reklamáciu voči <strong>Wizz Air</strong>, najdôležitejšie je správne
              zaradiť svoj prípad. Wizz vo svojom help centre upozorňuje, že výber nesprávnej
              <strong> kategórie reklamácie</strong> môže predĺžiť spracovanie. Preto má zmysel najprv si
              ujasniť, či riešite <strong>kompenzáciu podľa EC261</strong>, náklady, refundáciu alebo ich kombináciu.
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
            <Card className="border-fuchsia-200 bg-gradient-to-br from-fuchsia-600 to-violet-700 p-8 text-white shadow-xl dark:border-fuchsia-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-fuchsia-50">
                <p>
                  <strong>Áno, reklamáciu Wizz Air môžete podať priamo sám.</strong> Wizz vo svojom
                  help centre odporúča pri neurgentných žiadostiach použiť ich reklamačný formulár.
                </p>
                <p>
                  Wizz zároveň upozorňuje, že <strong>nesprávne zvolená kategória</strong> môže
                  predĺžiť riešenie. Preto treba oddeliť claim na kompenzáciu, náklady a refundáciu.
                </p>
                <p>
                  Ak nechcete riešiť celý proces sami, môžete prípad poslať aj cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_how_to_claim_wizz_quick_answer_home",
                        claimWingerHomeHref
                      )
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
            title="Nechcete riešiť reklamáciu Wizz Air sami?"
            description="ClaimWinger vie prevziať prípad od preverenia nároku až po ďalšiu eskaláciu. Ak nechcete sledovať formuláre, claim status a odpovede dopravcu, môžete to posunúť sem."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=how_to_claim_wizz_air"
            ctaLabel="Preveriť prípad s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_how_to_claim_wizz_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <ListChecks className="h-8 w-8 text-fuchsia-600" />
              Krok 1: zistite, aký typ claimu podávate
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Kompenzácia podľa EC261
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Peňažná kompenzácia za meškanie, zrušenie alebo odmietnutie nástupu, ak sú splnené
                  podmienky podľa pravidiel EÚ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Náklady
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Náklady na jedlo, hotel, dopravu alebo iné primerané výdavky, ktoré vznikli počas
                  problému s letom.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Refundácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Vrátenie ceny letenky alebo nevyužitej časti cesty. To je iná vrstva než peňažná
                  kompenzácia za stratu času.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 2: pripravte si dokumenty ešte pred formulárom
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "rezerváciu alebo PNR",
                "boarding pass alebo dôkaz o check-ine",
                "číslo letu a dátum",
                "oznámenie o meškaní, zrušení alebo presmerovaní",
                "účtenky za hotel, jedlo alebo dopravu pri expenses",
                "skutočný čas príchodu do konečnej destinácie",
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
              Krok 3: zvoľte správnu claim kategóriu
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Wizz priamo upozorňuje, že <strong>wrongly selected category might prolong the resolution time</strong>.
                  To je prakticky najdôležitejšia vec v ich flow. Ak podáte expenses ako compensation
                  alebo naopak, celý proces sa môže zbytočne natiahnuť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Po odoslaní claimu dostanete <strong>unique ID</strong> a Wizz uvádza, že stav
                  môžete sledovať v účte WIZZ v záložke <strong>Your Claims</strong>.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <UserCheck className="h-8 w-8 text-fuchsia-600" />
              Krok 4: sledujte spracovanie a počítajte s realitou
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Wizz uvádza 30 dní
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  V ich help centre je uvedené, že sa snažia vybaviť reklamácie a písomné žiadosti do
                  <strong> 30 dní</strong>. To je užitočný orientačný bod, ale nie je to záruka, že
                  každý spor sa v praxi uzavrie bez ďalších otázok.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Duplicity nepomáhajú
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Wizz uvádza, že duplicitné claimy sa automaticky zlučujú. Posielanie tej istej veci
                  viackrát teda skôr nepridá rýchlosť, než aby pomohlo.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 5: čo robiť, ak odpoveď nestačí
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak Wizz prípad zamietne alebo odpoveď nedáva zmysel, uložte si celé rozhodnutie,
                  dôkazy o lete a claim ID. Ďalší postup závisí od typu sporu a krajiny incidentu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak nechcete pokračovať sami, môžete prípad posunúť cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_how_to_claim_wizz_inline_home",
                        claimWingerHomeHref
                      )
                    }
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    ClaimWinger Slovensko
                  </a>
                  . ClaimWinger účtuje <strong>30 %</strong> bez ohľadu na to, či sa vec rieši
                  mimosúdne alebo súdne.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-fuchsia-200 bg-fuchsia-50 p-8 dark:border-fuchsia-800 dark:bg-fuchsia-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si prípad preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri Wizz Air býva najväčší chaos v tom, či ide o EC261 claim, expenses alebo refundáciu.
                ClaimWinger vie rýchlo povedať, čo presne má vo vašom prípade zmysel riešiť a aké
                podklady budú najsilnejšie.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-fuchsia-600 hover:bg-fuchsia-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_how_to_claim_wizz_final_cta_home",
                        claimWingerHomeHref
                      )
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
                      trackClaimClick(
                        "sk_how_to_claim_wizz_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Riešim skôr meškanie
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
                  Čo robiť, keď aerolínka neodpovedá?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ďalší krok, ak po podaní claimu neprichádza rozumná odpoveď.
                </p>
                <Link
                  href="/sk/blog/co-robit-ked-aerolinka-neodpoveda"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Oplatí sa použiť firmu na odškodnenie?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak sa rozhodujete medzi vlastným claimom a agentúrou.
                </p>
                <Link
                  href="/sk/blog/oplati-sa-pouzit-firmu-na-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na porovnanie
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete prípad preveriť bez toho, aby ste sami riešili celý proces s Wizz Air.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_how_to_claim_wizz_related_home",
                      claimWingerHomeHref
                    )
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
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
