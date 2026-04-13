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

const articleUrl =
  "https://problemlot.com/sk/blog/ako-podat-reklamaciu-ryanair-krok-za-krokom";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=how_to_claim_ryanair";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=how_to_claim_ryanair";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=how_to_claim_ryanair";

const faqItems = [
  {
    question: "Môžem podať reklamáciu Ryanair priamo sám?",
    answer:
      "Áno. Ryanair priamo uvádza, že cestujúci môžu podať nárok cez ich vlastný compensation form. Pri jednoduchom prípade to môže byť rozumný prvý krok.",
  },
  {
    question: "Vyžaduje Ryanair overenie identity pri reklamácii?",
    answer:
      "Áno, podľa ich help centra môže byť potrebné overenie identity, aby Ryanair vedel potvrdiť, že žiadosť podáva skutočný pasažier alebo oprávnená osoba.",
  },
  {
    question: "Je žiadosť o expenses to isté ako žiadosť o kompenzáciu?",
    answer:
      "Nie. Ryanair výslovne odlišuje compensation a expenses. To znamená, že náhrada nákladov za hotel, jedlo alebo dopravu môže ísť inou cestou než samotná peňažná kompenzácia podľa EU261.",
  },
  {
    question: "Čo ak nesúhlasím s rozhodnutím Ryanair?",
    answer:
      "Ryanair vo svojom help centre uvádza ako ďalší krok ADR. V praxi je rozumné mať uložené celé rozhodnutie, dôkazy o lete a jasne vedieť, či ide o spor o mimoriadne okolnosti, dokumenty alebo inú otázku.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AkoPodatReklamaciuRyanairKrokZaKrokomPage() {
  return (
    <LayoutSk>
      <SEO
        title="Ako podať reklamáciu Ryanair krok za krokom"
        description="Praktický návod, ako podať reklamáciu Ryanair: čo si pripraviť, čo Ryanair rozlišuje medzi compensation a expenses, ako funguje identity verification a čo robiť pri zamietnutí."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ako podať reklamáciu Ryanair krok za krokom",
            description:
              "Praktický sprievodca podaním reklamácie Ryanair vrátane dokumentov, identity verification, rozdielu medzi compensation a expenses a ďalších krokov pri nesúhlase s rozhodnutím.",
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
                name: "Ako podať reklamáciu Ryanair krok za krokom",
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
            <span>Ako podať reklamáciu Ryanair krok za krokom</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Procedure content pre Ryanair claims
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ako podať reklamáciu Ryanair krok za krokom
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak chcete podať reklamáciu voči <strong>Ryanair</strong>, najdôležitejšie je nezačať
              len samotným formulárom, ale tým, že si rozdelíte prípad na správny typ nároku:
              <strong> kompenzácia</strong>, <strong>expenses</strong> alebo ich kombinácia. Práve
              tu pasažieri robia najviac zbytočných chýb.
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
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-blue-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>
                  <strong>Áno, reklamáciu Ryanair môžete podať priamo sám.</strong> Ryanair vo svojom
                  help centre uvádza vlastný compensation form a odporúča pasažierom podávať nároky
                  priamo.
                </p>
                <p>
                  Treba však rozlišovať medzi <strong>compensation</strong> a <strong>expenses</strong>,
                  pripraviť si správne dokumenty a počítať s tým, že Ryanair môže žiadať
                  <strong> overenie identity</strong>.
                </p>
                <p>
                  Ak nechcete riešiť celý proces sám, môžete prípad poslať aj cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_how_to_claim_ryanair_quick_answer_home",
                        claimWingerHomeHref
                      )
                    }
                    className="font-semibold underline underline-offset-4"
                  >
                    ClaimWinger Slovensko
                  </a>
                  , kde je provízia <strong>30 %</strong> bez ohľadu na to, či sa vec rieši mimosúdne
                  alebo súdne.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Nechcete riešiť reklamáciu Ryanair sami?"
            description="ClaimWinger vie prevziať prípad od prvého preverenia až po ďalšiu eskaláciu. Ak nechcete sledovať formuláre, dôkazy a odpovede Ryanair, môžete to posunúť sem."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=how_to_claim_ryanair"
            ctaLabel="Preveriť prípad s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_how_to_claim_ryanair_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 1: zistite, čo vlastne žiadate
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Compensation
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Peňažná kompenzácia podľa EU261 za meškanie, zrušenie alebo odmietnutie nástupu,
                  ak sú splnené podmienky nároku.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Expenses
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Náklady ako jedlo, hotel alebo doprava. Ryanair výslovne uvádza, že expenses a
                  compensation sa podávajú a posudzujú oddelene.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Refundácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Vrátenie ceny letenky alebo nevyužitej časti cesty. To je iná vrstva než samotná
                  kompenzácia za stratu času.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <ListChecks className="h-8 w-8 text-sky-600" />
              Krok 2: pripravte si správne dokumenty
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
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <UserCheck className="h-8 w-8 text-sky-600" />
              Krok 3: počítajte s overením identity
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ryanair vo svojom help centre vysvetľuje, že pri žiadosti môže byť potrebné
                  <strong> overenie identity</strong>, aby sa potvrdilo, že reklamáciu podáva skutočný
                  pasažier alebo oprávnená osoba.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To je dôležité najmä vtedy, ak reklamáciu podávate za niekoho iného. V takom prípade
                  sa oplatí mať pripravené všetky údaje o rezervácii a jasne vyriešené, kto je oprávnený
                  konať v mene cestujúceho.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 4: ak žiadate expenses, nepomiešajte ich s kompenzáciou
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Expenses sú samostatná vetva
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ryanair priamo uvádza, že requests na expenses a compensation sa podávajú a
                  hodnotia oddelene. To je prakticky veľmi dôležité.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Účtenky držte pri zemi
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri nákladoch na hotel, jedlo alebo dopravu si nechávajte primerané výdavky a
                  dobré dôkazy. To býva silnejšie než všeobecný opis situácie bez dokladov.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 5: čo robiť, ak s rozhodnutím Ryanair nesúhlasíte
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ryanair vo svojom help centre uvádza, že ak nie ste spokojní s rozhodnutím, ďalším
                  krokom môže byť <strong>ADR</strong>. V praxi sa oplatí uložiť si celé rozhodnutie,
                  dôvod zamietnutia a všetky podklady, ktoré ste posielali.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak nechcete ďalej riešiť formuláre a spor s dopravcom sami, môžete prípad poslať aj
                  cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_how_to_claim_ryanair_inline_home",
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
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-800 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si prípad preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri Ryanair býva najväčší chaos v tom, či ide o compensation, expenses, refundáciu
                alebo ich kombináciu. ClaimWinger vie rýchlo povedať, čo presne má vo vašom prípade
                zmysel riešiť a akými podkladmi to podložiť.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_how_to_claim_ryanair_final_cta_home",
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
                        "sk_how_to_claim_ryanair_final_cta_delay",
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
                  Ďalší krok, ak po podaní reklamácie stále neprichádza žiadna rozumná odpoveď.
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
                  Priama reklamácia vs agentúra
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak sa rozhodujete, či prípad ešte riešiť sám, alebo ho už posunúť ďalej.
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
                  Ak chcete prípad preveriť bez toho, aby ste sami riešili celý proces s Ryanair.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_how_to_claim_ryanair_related_home",
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
