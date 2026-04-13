import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/ryanair-vieden-pariz-zruseny-let";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=ryanair_vienna_paris_cancelled";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=ryanair_vienna_paris_cancelled";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=ryanair_vienna_paris_cancelled";

const faqItems = [
  {
    question: "Mám pri zrušenom lete Ryanair Viedeň – Paríž nárok na odškodnenie?",
    answer:
      "Často áno, najmä ak vás Ryanair informoval menej než 14 dní pred odletom, neponúkol primerané presmerovanie a nepreukáže mimoriadne okolnosti. Pri bežnom samostatnom lete na tejto trase býva typická kompenzácia 250 €.",
  },
  {
    question: "Koľko môžem dostať pri zrušení tejto trasy?",
    answer:
      "Pri samostatnom lete Viedeň – Paríž ide zvyčajne o pásmo do 1 500 km, takže kompenzácia býva 250 €. Osobitne však stále máte aj právo na refundáciu alebo presmerovanie.",
  },
  {
    question: "Mení sa niečo tým, že ide o Ryanair?",
    answer:
      "Základné pravidlá EU261 sa nemenia. Stále rozhoduje čas oznámenia, kvalita náhradného letu a to, či aerolínka vie preukázať mimoriadne okolnosti. Rozdiel býva skôr v praktickej komunikácii a v tom, ako treba reklamáciu dobre zdokumentovať.",
  },
  {
    question: "Stačí, že mi vrátia cenu letenky?",
    answer:
      "Nie vždy. Refundácia ceny letenky a kompenzácia za zrušenie sú dve odlišné veci. Pri splnení podmienok EU261 môžete mať nárok na obe vrstvy naraz.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function RyanairViedenParizZrusenyLetPage() {
  return (
    <LayoutSk>
      <SEO
        title="Ryanair Viedeň – Paríž zrušený let: odškodnenie, refundácia a čo rozhoduje"
        description="Zrušili vám let Ryanair z Viedne do Paríža? Zistite, kedy vzniká nárok na odškodnenie, kedy ide typicky o 250 € a ako sa líši refundácia od kompenzácie."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Ryanair Viedeň – Paríž zrušený let: odškodnenie, refundácia a čo rozhoduje",
            description:
              "Praktický sprievodca pre cestujúcich pri zrušenom lete Ryanair z Viedne do Paríža vrátane kompenzácie, refundácie a presmerovania podľa EU261.",
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
                name: "Ryanair Viedeň – Paríž zrušený let",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Ryanair Viedeň – Paríž zrušený let</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Brand + route content pre Ryanair
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ryanair Viedeň – Paríž zrušený let: mám nárok na odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pri zrušenom lete <strong>Ryanair z Viedne do Paríža</strong> netreba pozerať len na to,
              či vám vrátia cenu letenky. Ak vás aerolínka informovala neskoro, neponúkla primerané
              presmerovanie a nejde o mimoriadne okolnosti, môže vzniknúť aj nárok na
              <strong> kompenzáciu podľa EU261</strong>. Pri tejto trase ide spravidla o
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
            <Card className="border-blue-200 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl dark:border-blue-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-blue-50">
                <p>
                  <strong>Áno, často áno.</strong> Let z Viedne do Paríža odlieta aj pristáva v EÚ,
                  takže ochrana podľa EU261 je pri tejto trase veľmi priamočiara aj pri low-cost
                  dopravcovi, akým je Ryanair.
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
            title="Zrušili vám let Ryanair Viedeň – Paríž?"
            description="ClaimWinger vie rýchlo preveriť, či ide len o refundáciu ceny letenky, alebo aj o silný nárok na kompenzáciu podľa EU261 pri zrušenom lete Ryanair."
            ctaHref="https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=ryanair_vienna_paris_cancelled"
            ctaLabel="Preveriť nárok za zrušený let"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie zrušeného letu."
            placement="sk_blog_ryanair_vienna_paris_cancelled_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo je pri tejto trase najdôležitejšie
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Čas oznámenia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Kľúčové je, kedy vám Ryanair zrušenie oznámil. Práve hranica 14 dní pred odletom
                  výrazne mení šancu na kompenzáciu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Kvalita náhradného letu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nestačí len to, že Ryanair ponúkol nejaký iný let. Dôležité je, ako veľmi sa nový
                  odlet a nový príchod líšili od pôvodného plánu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-8 w-8 text-blue-600" />
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
              Kedy býva nárok najsilnejší
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "zrušenie bolo oznámené menej než 14 dní pred odletom",
                "náhradný let vás dostal do Paríža výrazne neskôr než pôvodný plán",
                "máte rezerváciu, číslo letu a komunikáciu od Ryanair",
                "Ryanair nevie presvedčivo doložiť mimoriadne okolnosti",
                "let bol samostatný úsek alebo súčasť jednej rezervácie",
                "na let ste boli riadne odbavení a pripravení cestovať",
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
              Čo túto trasu najčastejšie komplikuje
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie každé zrušenie automaticky znamená 250 €. Ak Ryanair vie preukázať mimoriadne
                  okolnosti, nárok na kompenzáciu nemusí vzniknúť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Zámena refundácie a kompenzácie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Mnohí cestujúci sa zastavia pri vrátení ceny letenky. To však automaticky nerieši,
                  či zároveň vznikol aj samostatný peňažný nárok podľa EU261.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Pokračovanie na ďalší let
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak Paríž nebol konečný cieľ a cesta pokračovala ďalej na jednej rezervácii, pri
                  hodnotení môže rozhodovať až výsledok v konečnej destinácii celej cesty.
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
                Oficiálne pravidlá EÚ hovoria, že pri zrušení letu môže vzniknúť nárok na
                kompenzáciu, ak bolo zrušenie oznámené neskoro, nejde o mimoriadne okolnosti a nový
                let nespĺňa podmienky, ktoré by nárok znížili alebo vylúčili.
              </p>
              <p>
                Pri trase Ryanair Viedeň – Paríž je dôležité hlavne to, že ide o let v rámci EÚ.
                Preto býva základ právneho posúdenia pomerne priamočiary, ak je dobre zdokumentované,
                kedy bolo zrušenie oznámené a aký bol výsledok presmerovania.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri tejto trase má veľký zmysel rýchlo oddeliť čistú refundáciu od silného prípadu
                250 € a preveriť, či Ryanair naozaj vie obhájiť dôvod zrušenia.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_ryanair_vienna_paris_cancelled_final_cta_cancelled",
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
                        "sk_ryanair_vienna_paris_cancelled_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Riešim skôr meškanie letu
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
                  Ryanair – všeobecný sprievodca
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete širší prehľad o sporoch, reklamáciách a praxi Ryanair.
                </p>
                <Link
                  href="/sk/blog/ryanair-problemy-prawa"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o Ryanair
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Viedeň – Paríž meškanie letu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete širší route guide dla tej trasy poza samym scenariuszem zrušenia.
                </p>
                <Link
                  href="/sk/blog/vieden-pariz-meskanie-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na route článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete prípad preveriť prakticky podľa konkrétnych okolností letu.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_ryanair_vienna_paris_cancelled_related_home",
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
