import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/mozem-ziadat-odskodnenie-pri-zmene-casu-letu";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=time_change";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=time_change";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=time_change";

const faqItems = [
  {
    question: "Môžem žiadať odškodnenie pri zmene času letu?",
    answer:
      "Niekedy áno, ale nie pri každej zmene automaticky. Najdôležitejšie je, či bol let posunutý výrazne skôr, či ho treba právne čítať ako zrušenie, alebo či zmena viedla k dlhému meškaniu pri príchode do cieľa.",
  },
  {
    question: "Čo ak let odlieta skôr než pôvodne?",
    answer:
      "Ak aerolínka presunie odlet o viac ako 1 hodinu skôr, pravidlá EÚ to považujú za zrušený let. V takom prípade sa uplatňujú práva ako pri zrušení, vrátane možnej kompenzácie pri neskorom oznámení.",
  },
  {
    question: "Čo ak let len posunuli neskôr?",
    answer:
      "Vtedy ešte nejde automaticky o zrušenie. Treba pozerať na to, ako sa zmena prejavila v reálnom odlete a najmä v príchode do konečnej destinácie. Ak vznikne dlhé meškanie pri prílete, kompenzácia môže prísť do úvahy.",
  },
  {
    question: "Rozhoduje aj to, kedy ma aerolínka informovala?",
    answer:
      "Áno. Pri zmene, ktorá sa právne číta ako zrušenie, je veľmi dôležité, či ste boli informovaní viac ako 14 dní vopred, alebo neskôr.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function MozemZiadatOdskodneniePriZmeneCasuLetuPage() {
  return (
    <LayoutSk>
      <SEO
        title="Môžem žiadať odškodnenie pri zmene času letu? Áno, ale záleží na type zmeny"
        description="Zmenila aerolínka čas letu? Vysvetľujeme, kedy ide len o úpravu harmonogramu, kedy sa zmena času považuje za zrušenie a kedy môže vzniknúť nárok na kompenzáciu."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Môžem žiadať odškodnenie pri zmene času letu?",
            description:
              "Praktické vysvetlenie, kedy môže zmena času letu viesť ku kompenzácii a kedy ešte nejde o prípad podľa EU261.",
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
                name: "Môžem žiadať odškodnenie pri zmene času letu?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Môžem žiadať odškodnenie pri zmene času letu?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              Praktická odpoveď pri zmene času letu
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Môžem žiadať odškodnenie pri zmene času letu?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najkratšia odpoveď je: <strong>niekedy áno</strong>, ale nie pri každej úprave času
              automaticky. Kľúčové je, či let odlieta výrazne skôr, či ide fakticky o zrušenie,
              alebo či zmena viedla k veľkému meškaniu pri príchode do cieľa.
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
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-600 to-sky-700 p-8 text-white shadow-xl dark:border-cyan-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-cyan-50">
                <p>
                  Ak aerolínka posunie let <strong>o viac než 1 hodinu skôr</strong>, pravidlá EÚ to
                  považujú za <strong>zrušenie letu</strong>.
                </p>
                <p>
                  Ak sa let posunie neskôr, ešte to neznamená automatickú kompenzáciu. Treba sa pozerať
                  na reálny dopad na <strong>príchod do konečnej destinácie</strong>.
                </p>
                <p>
                  Pri zmene, ktorá sa právne číta ako zrušenie, je dôležité aj to, <strong>kedy</strong>
                  vás aerolínka informovala.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Zmenili vám čas letu a neviete, či už ide o nárok?"
            description="ClaimWinger vie pomôcť odlíšiť, či ide len o menšiu úpravu harmonogramu, alebo o zmenu, ktorá sa už podľa pravidiel EÚ číta ako zrušenie alebo vedie ku kompenzácii."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=time_change"
            ctaLabel="Preveriť zmenu času letu"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_time_change_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy sa zmena času správa ako zrušenie
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Oficiálne FAQ portálu <strong>Your Europe</strong> hovoria jasne: ak aerolínka zmení
                odlet tak, že lietadlo odlieta <strong>o viac než 1 hodinu skôr</strong>, ide o prípad,
                ktorý sa má posudzovať ako <strong>zrušený let</strong>.
              </p>
              <p>
                Túto logiku potvrdil aj Súdny dvor EÚ v spojených veciach vrátane <strong>C-146/20</strong>:
                let posunutý dopredu o viac než hodinu sa považuje za zrušenie.
              </p>
              <p>
                To je veľmi dôležité, pretože zrazu nejde len o „malú zmenu v itinerári“, ale o režim
                práv pri zrušení letu, vrátane refundácie, reroutingu a potenciálnej kompenzácie.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy samotná zmena času ešte nestačí
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Menšie posunutie dopredu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak je let posunutý dopredu len mierne, ešte to nemusí automaticky spadať do kompenzácie.
                  Treba pozerať na presné okolnosti a pravidlá informovania cestujúcich.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Posun neskôr
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa let presunie na neskorší čas, nejde automaticky o zrušenie. Často sa treba
                  pýtať, či vám vzniklo dlhé meškanie pri prílete do konečnej destinácie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Zmena oznámená veľmi včas
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj pri zmene, ktorá sa číta ako zrušenie, je dôležité, či vás aerolínka informovala
                  viac než 14 dní vopred alebo neskôr.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Praktický checklist pri zmene času letu
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "o koľko sa zmenil odlet oproti pôvodnému času",
                "či šiel let skôr alebo neskôr",
                "kedy vás aerolínka o zmene informovala",
                "aký bol reálny dopad na príchod do konečnej destinácie",
                "či ste prijali nový let, refundáciu alebo rerouting",
                "či aerolínka tvrdí mimoriadne okolnosti",
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
                Zmenili vám čas letu a neviete, či to riešiť ako meškanie alebo zrušenie?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Najlepšie je najprv rozlíšiť, či vám let posunuli neskôr, alebo výrazne skôr. Od toho
                sa často odvíja celý právny režim prípadu aj ďalší postup.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_time_change_final_cta_delay", delayedFlightHref)
                    }
                  >
                    Riešim skôr meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_time_change_final_cta_cancelled", cancelledFlightHref)
                    }
                  >
                    Riešim skôr zrušenie
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
                  Koľko dostanem za zrušený let?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa vaša zmena času právne číta ako zrušenie, ďalším krokom je výška možnej kompenzácie.
                </p>
                <Link
                  href="/sk/blog/kolko-dostanem-za-zruseny-let"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o zrušenom lete
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete prakticky preveriť, či zmena času letu už vytvára reálny nárok.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_time_change_related_home", claimWingerHomeHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Platí odškodnenie pri prestupe?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak zmena času rozbila prestup alebo zmenila príchod do konečného cieľa.
                </p>
                <Link
                  href="/sk/blog/plati-odskodnenie-pri-prestupe"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o prestupe
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
