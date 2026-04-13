import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Gavel,
  Scale,
  ShieldCheck,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/kedy-ist-na-sud-pri-odskodneni-za-let";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=when_to_go_to_court";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=when_to_go_to_court";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=when_to_go_to_court";

const faqItems = [
  {
    question: "Kedy má zmysel ísť na súd pri odškodnení za let?",
    answer:
      "Zvyčajne až vtedy, keď už prebehla priama reklamácia, odpoveď aerolinky je zamietavá alebo slabá a ďalšie mäkšie kroky, ako národný orgán či ADR, nepomohli alebo nie sú pre daný spor dostatočné.",
  },
  {
    question: "Musím ísť na súd hneď po zamietnutí reklamácie?",
    answer:
      "Nie. V mnohých prípadoch je rozumnejšie najprv si overiť dôvody zamietnutia, prípadne využiť národný orgán alebo ADR. Súd býva skôr ďalší krok, nie automatická prvá reakcia.",
  },
  {
    question: "Potrebujem na súd právnika?",
    answer:
      "Nie vždy. Your Europe uvádza, že pri európskom small claims postupe právnik nie je povinný. To však neznamená, že každý spor je procesne jednoduchý.",
  },
  {
    question: "Existuje európsky postup pre menšie cezhraničné spory?",
    answer:
      "Áno. Your Europe uvádza Európsky small claims postup pre cezhraničné nároky do 5 000 eur, spravidla ako písomný proces bez povinnosti mať právnika.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function KedyIstNaSudPriOdskodneniZaLetPage() {
  return (
    <LayoutSk>
      <SEO
        title="Kedy ísť na súd pri odškodnení za let?"
        description="Kedy má zmysel ísť na súd pri spore s aerolinkou? Vysvetľujeme, kedy ešte stačí reklamácia, kedy pomáha národný orgán alebo ADR a kedy už prichádza súd."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Kedy ísť na súd pri odškodnení za let?",
            description:
              "Praktický návod, kedy má zmysel posunúť spor s aerolinkou na súd a kedy je ešte rozumnejšie použiť reklamáciu, národný orgán alebo ADR.",
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
                name: "Kedy ísť na súd pri odškodnení za let?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Kedy ísť na súd pri odškodnení za let?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700 dark:bg-stone-900/30 dark:text-stone-300">
              Praktický moment pre súdnu eskaláciu
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Kedy ísť na súd pri odškodnení za let?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Súd by nemal byť automatický prvý krok pri každom spore s aerolinkou. Najčastejšie dáva
              zmysel až vtedy, keď už máte za sebou <strong>priame uplatnenie nároku</strong>,
              rozumiete dôvodu sporu a je jasné, že mäkšia eskalácia už nestačí alebo nepriniesla
              výsledok.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 13. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 9 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-stone-200 bg-gradient-to-br from-stone-700 to-slate-800 p-8 text-white shadow-xl dark:border-stone-700">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-stone-100">
                <p>
                  <strong>Na súd sa zvyčajne nejde hneď.</strong> Najprv má zmysel reklamácia priamo
                  u aerolinky, potom podľa typu sporu národný orgán alebo ADR.
                </p>
                <p>
                  Súd začne byť realistickou voľbou vtedy, keď je spor stále otvorený, aerolinka
                  odmieta zaplatiť, a vy už máte dosť podkladov na to, aby sa prípad dal procesne
                  uniesť.
                </p>
                <p>
                  Ak nechcete túto fázu viesť sami, môžete prípad preveriť cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_when_to_go_to_court_quick_answer_home",
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
            title="Neviete, či je váš prípad už na súd?"
            description="ClaimWinger vie pomôcť posúdiť, či ešte stačí reklamácia alebo ďalšia mimosúdna eskalácia, alebo či už spor procesne smeruje k súdnemu riešeniu."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=when_to_go_to_court"
            ctaLabel="Preveriť ďalší procesný krok"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_when_to_go_to_court_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <ShieldCheck className="h-8 w-8 text-stone-600" />
              Súd nie je prvý reflex
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Oficiálna európska logika je jasná: najprv sa sťažujete <strong>aerolinke</strong>.
                  Ak nepríde odpoveď alebo je odpoveď slabá, dáva zmysel pozrieť sa na
                  <strong> národný orgán</strong> alebo <strong>ADR</strong>. Súd je ďalšia vrstva,
                  nie automatický prvý krok.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To je dôležité aj prakticky. Súdny spor má zmysel tam, kde je už jasné, že
                  mimosúdna cesta nepriniesla výsledok alebo kde spor potrebuje autoritatívne
                  rozhodnutie.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Scale className="h-8 w-8 text-stone-600" />
              Kedy už súd dáva reálny zmysel
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "aerolínka nárok dlhodobo odmieta alebo platí len časť bez rozumného vysvetlenia",
                "spor sa točí okolo mimoriadnych okolností, konečnej destinácie alebo jednej rezervácie",
                "národný orgán alebo ADR nepomohli, prípadne nie sú pre váš spor dostatočné",
                "máte čisté dôkazy o lete, priebehu narušenia a výsledku v konečnej destinácii",
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
              <Gavel className="h-8 w-8 text-stone-600" />
              Čo hovoria oficiálne európske postupy
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Your Europe uvádza, že pri cezhraničných spotrebiteľských sporoch môžete využiť aj
                  <strong> Európsky small claims postup</strong> do <strong>5 000 €</strong>. Ide
                  prevažne o písomný proces a <strong>právnik nie je povinný</strong>.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Your Europe zároveň uvádza, že pri lete prevádzkovanom aerolinkou z EÚ môžete
                  nárok uplatniť aj v mieste <strong>odletu alebo príletu</strong>. Pri iných
                  situáciách závisí fórum od toho, kde let odletel, pristál, nadväzoval alebo kde je
                  aerolínka registrovaná.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Na čo si dať pozor pred súdom
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Veľký rozdiel robí, či máte spor roztriedený: reklamácia, odpoveď aerolinky,
                  prípadné stanovisko orgánu, všetky časy letu a výsledok v konečnej destinácii.
                  Bez toho sa aj dobrý nárok vie procesne rozpadnúť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Druhá dôležitá vec je <strong>premlčanie</strong>. Lehoty na súdne vymáhanie sa
                  neriadia jedným spoločným číslom pre celú EÚ, ale vnútroštátnymi pravidlami.
                  Práve preto sa neoplatí prípad zbytočne držať v nečinnosti.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-stone-200 bg-stone-50 p-8 dark:border-stone-800 dark:bg-stone-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete vedieť, či je váš spor už na súd?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Nie každý prípad treba hneď tlačiť do súdu. ClaimWinger vie pomôcť rozlíšiť, či ešte
                dáva zmysel mimosúdna cesta, alebo či už máte spor v bode, kde treba rátať aj so
                súdnym postupom.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-stone-700 hover:bg-stone-800">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_when_to_go_to_court_final_cta_home",
                        claimWingerHomeHref
                      )
                    }
                  >
                    Preveriť spor s ClaimWinger
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
                        "sk_when_to_go_to_court_final_cta_delay",
                        delayedFlightHref
                      )
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
                      trackClaimClick(
                        "sk_when_to_go_to_court_final_cta_cancel",
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
                  Potrebujem právnika na odškodnenie?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dobrý follow-up, ak sa rozhodujete, či ešte viete spor uniesť sami.
                </p>
                <Link
                  href="/sk/blog/potrebujem-pravnika-na-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Čo robiť, keď aerolínka neodpovedá?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak ste ešte len v štádiu čakania a nechcete ísť na súd príliš skoro.
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
                  Čo robiť, keď aerolínka zamietne reklamáciu?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Prirodzený krok pred tým, než sa vôbec začne riešiť súdna eskalácia.
                </p>
                <Link
                  href="/sk/blog/zamietnuta-reklamacia-co-robit"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
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
