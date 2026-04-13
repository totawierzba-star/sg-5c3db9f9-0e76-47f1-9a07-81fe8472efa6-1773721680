import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/bratislava-dublin-zruseny-let";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bratislava_dublin_cancelled";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bratislava_dublin_cancelled";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bratislava_dublin_cancelled";

const faqItems = [
  {
    question: "Mám pri zrušenom lete Bratislava – Dublin nárok na odškodnenie?",
    answer:
      "Často áno, najmä ak vás aerolínka informovala menej než 14 dní pred odletom, neponúkla primerané presmerovanie a nepreukáže mimoriadne okolnosti. Pri bežnom priamom lete na tejto trase býva typická kompenzácia 250 €.",
  },
  {
    question: "Koľko môžem dostať pri zrušení tejto trasy?",
    answer:
      "Pri samostatnom lete Bratislava – Dublin ide zvyčajne o pásmo do 1 500 km, takže kompenzácia býva 250 €. Osobitne však stále máte aj právo na refundáciu alebo presmerovanie.",
  },
  {
    question: "Stačí, že mi vrátia cenu letenky?",
    answer:
      "Nie vždy. Refundácia ceny letenky a kompenzácia za zrušenie sú dve odlišné veci. Pri splnení podmienok EU261 môžete mať nárok na obe vrstvy naraz.",
  },
  {
    question: "Čo ak mi dali náhradný let?",
    answer:
      "Náhradný let môže ovplyvniť právo na kompenzáciu, najmä ak vám bol oznámený včas a príchod sa výrazne nelíšil. Stále však treba pozerať na konkrétny čas oznámenia a skutočný výsledok cesty.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function BratislavaDublinZrusenyLetPage() {
  return (
    <LayoutSk>
      <SEO
        title="Bratislava – Dublin zrušený let: odškodnenie, refundácia a čo rozhoduje"
        description="Zrušili vám let z Bratislavy do Dublinu? Zistite, kedy vzniká nárok na odškodnenie, kedy ide typicky o 250 € a ako sa líši refundácia od kompenzácie."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bratislava – Dublin zrušený let: odškodnenie, refundácia a čo rozhoduje",
            description:
              "Praktický sprievodca pre cestujúcich pri zrušenom lete z Bratislavy do Dublinu vrátane kompenzácie, refundácie a presmerovania podľa EU261.",
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
                name: "Bratislava – Dublin zrušený let",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Bratislava – Dublin zrušený let</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Route content pre Slovensko a Írsko
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Bratislava – Dublin zrušený let: mám nárok na odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pri zrušenom lete z <strong>Bratislavy do Dublinu</strong> netreba pozerať len na to,
              či vám vrátia cenu letenky. Ak vás aerolínka informovala neskoro, neponúkla primerané
              presmerovanie a nejde o mimoriadne okolnosti, môže vzniknúť aj nárok na
              <strong> kompenzáciu podľa EU261</strong>. Pri tejto trase ide zvyčajne o
              <strong> 250 €</strong>.
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
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white shadow-xl dark:border-emerald-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-emerald-50">
                <p>
                  <strong>Áno, často áno.</strong> Let z Bratislavy do Dublinu odlieta z EÚ, preto sa
                  naň vzťahuje EU261.
                </p>
                <p>
                  Ak bolo zrušenie oznámené menej než <strong>14 dní</strong> pred odletom, nešlo o
                  mimoriadne okolnosti a náhradný let nebol dostatočne primeraný, nárok na
                  kompenzáciu býva reálny.
                </p>
                <p>
                  Pri tejto trase ide pri samostatnom lete typicky o <strong>250 €</strong>, plus
                  oddelene právo na refundáciu alebo presmerovanie.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Zrušili vám let Bratislava – Dublin?"
            description="ClaimWinger vie rýchlo preveriť, či ide len o refundáciu ceny letenky, alebo aj o silný nárok na kompenzáciu podľa EU261."
            ctaHref="https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=bratislava_dublin_cancelled"
            ctaLabel="Preveriť nárok za zrušený let"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie zrušeného letu."
            placement="sk_blog_bratislava_dublin_cancelled_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo je pri zrušení tejto trasy najdôležitejšie
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Čas oznámenia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Kľúčové je, kedy vám aerolínka zrušenie oznámila. Práve hranica 14 dní pred odletom
                  výrazne mení šancu na kompenzáciu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Kvalita náhradného letu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nestačí len to, že aerolínka ponúkla nejaký iný let. Dôležité je, ako veľmi sa nový
                  odlet a nový príchod líšili od pôvodného plánu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-8 w-8 text-emerald-600" />
              Refundácia a kompenzácia nie sú to isté
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-blue-200 p-6 dark:border-blue-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Refundácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa rozhodnete necestovať, pri zrušení letu máte právo žiadať vrátenie ceny
                  letenky za neuskutočnenú časť cesty.
                </p>
              </Card>
              <Card className="border-green-200 p-6 dark:border-green-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Kompenzácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To je samostatná peňažná náhrada za zrušenie letu, ak sú splnené podmienky EU261.
                  Pri tejto trase ide pri bežnom samostatnom lete spravidla o <strong>250 €</strong>.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy býva nárok silnejší
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "zrušenie prišlo menej než 14 dní pred odletom",
                "náhradný let výrazne zhoršil váš plán cesty",
                "máte e-mail alebo správu s časom oznámenia",
                "let jasne patrí do rozsahu EU261",
                "aerolínka nepreukáže mimoriadne okolnosti",
                "Dublin bol konečný cieľ, alebo šlo o jednu spoločnú rezerváciu",
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
              Čo tento typ prípadu najčastejšie komplikuje
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak aerolínka vie preukázať mimoriadne okolnosti, kompenzácia nemusí vzniknúť. To
                  však neznamená automaticky zánik práva na refundáciu, presmerovanie a starostlivosť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Príliš všeobecné oznámenie od aerolinky
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Veľa závisí od toho, či máte uložený presný čas oznámenia a konkrétny návrh
                  presmerovania. Bez toho sa prípad hodnotí ťažšie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Zámena refundácie a kompenzácie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To, že vám vrátia cenu letenky, ešte neznamená, že tým automaticky zaniká nárok na
                  kompenzáciu pri zrušení letu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo hovoria oficiálne zdroje EÚ
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Pri zrušenom lete v rámci ochrany EU261 má cestujúci právo vybrať si medzi
                refundáciou a presmerovaním. Pri neskorom oznámení môže zároveň vzniknúť aj nárok na
                kompenzáciu, pokiaľ nejde o mimoriadne okolnosti.
              </p>
              <p>
                Pri trase Bratislava – Dublin je dôležité, že let odlieta z EÚ. Preto sa naň
                európske pravidlá vzťahujú aj bez akýchkoľvek ďalších výnimiek spojených s cieľovou
                krajinou.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si zrušený let preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri tejto trase býva dôležité rýchlo oddeliť jednoduchú refundáciu od prípadu, kde
                popri nej vzniká aj kompenzácia 250 €.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_bratislava_dublin_cancelled_final_cta_cancelled",
                        cancelledFlightHref
                      )
                    }
                  >
                    Preveriť zrušený let
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
                        "sk_bratislava_dublin_cancelled_final_cta_delay",
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
                  Koľko dostanem za zrušený let?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete pochopiť všeobecné pravidlá 250 / 400 / 600 € pri zrušení.
                </p>
                <Link
                  href="/sk/blog/kolko-dostanem-za-zruseny-let"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Môžem žiadať odškodnenie pri zmene času letu?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak aerolínka let nezrušila úplne, ale výrazne zmenila jeho čas.
                </p>
                <Link
                  href="/sk/blog/mozem-ziadat-odskodnenie-pri-zmene-casu-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete prípad preveriť prakticky podľa času oznámenia a návrhu náhradného letu.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_bratislava_dublin_cancelled_related_home",
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
