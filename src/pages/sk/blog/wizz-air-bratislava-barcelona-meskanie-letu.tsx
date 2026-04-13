import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/wizz-air-bratislava-barcelona-meskanie-letu";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=wizz_bratislava_barcelona_delay";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=wizz_bratislava_barcelona_delay";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=wizz_bratislava_barcelona_delay";

const faqItems = [
  {
    question: "Mám pri lete Wizz Air Bratislava – Barcelona nárok na odškodnenie za meškanie?",
    answer:
      "Často áno, ak ste do konečnej destinácie prišli s meškaním 3 hodiny a viac, let patrí do rozsahu EU261 a Wizz Air nepreukáže mimoriadne okolnosti. Pri bežnom samostatnom lete na tejto trase býva typická kompenzácia 250 €.",
  },
  {
    question: "Koľko môžem dostať pri meškaní tejto trasy?",
    answer:
      "Pri samostatnom lete Bratislava – Barcelona ide zvyčajne o pásmo do 1 500 km, takže pri splnení podmienok býva typická kompenzácia 250 €. Ak však Barcelona nebola konečný cieľ a cesta pokračovala ďalej na jednej rezervácii, rozhodovať môže až konečná destinácia celej cesty.",
  },
  {
    question: "Mení sa niečo tým, že ide o Wizz Air?",
    answer:
      "Základné pravidlá EU261 sa nemenia. Stále rozhoduje hlavne meškanie pri prílete do konečnej destinácie, rozsah nariadenia a to, či aerolínka vie preukázať mimoriadne okolnosti.",
  },
  {
    question: "Počíta sa meškanie v odlete alebo v príchode?",
    answer:
      "Pri kompenzácii sa kľúčovo sleduje meškanie pri príchode do konečnej destinácie, nie len to, o koľko neskôr lietadlo odletelo z Bratislavy.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function WizzAirBratislavaBarcelonaMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO
        title="Wizz Air Bratislava – Barcelona meškanie letu: odškodnenie a výška nároku"
        description="Meškal vám let Wizz Air z Bratislavy do Barcelony? Zistite, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 250 € a čo pri EU261 rozhoduje."
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
              "Wizz Air Bratislava – Barcelona meškanie letu: odškodnenie a výška nároku",
            description:
              "Praktický sprievodca pre cestujúcich pri meškaní letu Wizz Air z Bratislavy do Barcelony vrátane výšky nároku a pravidiel EU261.",
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
                name: "Wizz Air Bratislava – Barcelona meškanie letu",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Wizz Air Bratislava – Barcelona meškanie letu</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              Brand + route content pre Wizz Air
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Wizz Air Bratislava – Barcelona meškanie letu: mám nárok na odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pri bežnom lete <strong>Wizz Air z Bratislavy do Barcelony</strong> býva odpoveď často
              priaznivá: ak prídete do cieľa s meškaním aspoň <strong>3 hodiny</strong>, let je v
              rozsahu <strong>EU261</strong> a Wizz Air nepreukáže mimoriadne okolnosti, nárok na
              kompenzáciu je reálny. Pri tejto trase ide spravidla o pásmo <strong>250 €</strong>.
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
            <Card className="border-purple-200 bg-gradient-to-br from-purple-600 to-indigo-700 p-8 text-white shadow-xl dark:border-purple-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-purple-50">
                <p>
                  <strong>Áno, často áno.</strong> Let z Bratislavy do Barcelony odlieta z EÚ a
                  pristáva v EÚ, takže ochrana EU261 je pri tejto trase veľmi priamočiara.
                </p>
                <p>
                  Pri samostatnom lete na tejto trase býva typická kompenzácia <strong>250 €</strong>,
                  ak meškanie v cieli dosiahne aspoň 3 hodiny.
                </p>
                <p>
                  To, že ide o <strong>Wizz Air</strong>, nemení základné pravidlá nároku. Stále sa
                  pozerá hlavne na prílet do cieľa a na to, či dopravca naozaj preukáže mimoriadne
                  okolnosti.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Meškal vám let Wizz Air Bratislava – Barcelona?"
            description="ClaimWinger vie rýchlo preveriť, či ide o jasný nárok 250 €, alebo o spornejší prípad, kde bude dôležitý dôvod meškania a sila dokumentov proti argumentácii aerolínky."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=wizz_bratislava_barcelona_delay"
            ctaLabel="Preveriť nárok za meškajúci let"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie meškajúceho letu."
            placement="sk_blog_wizz_bratislava_barcelona_delay_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Prečo je táto trasa z pohľadu EU261 dosť čistá
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Let v rámci EÚ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Bratislava aj Barcelona ležia v EÚ, takže rozsah nariadenia EU261 býva pri tejto
                  trase veľmi málo sporný.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Typické pásmo 250 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri bežnom samostatnom lete Bratislava – Barcelona ide typicky o pásmo do 1 500 km,
                  takže pri splnení podmienok býva kompenzácia často 250 €.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-8 w-8 text-purple-600" />
              Kedy býva pri tejto trase najčastejšie 250 €
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-green-200 p-6 dark:border-green-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Priamy let do Barcelony
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste leteli point-to-point a prišli ste do Barcelony s meškaním aspoň 3 hodiny,
                  na tejto trase býva typická kompenzácia <strong>250 €</strong>.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Barcelona nebola finálny cieľ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak Barcelona nebola konečný cieľ a cesta pokračovala ďalej na jednej rezervácii,
                  rozhodovať môže až konečná destinácia celej cesty.
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
                "do Barcelony ste prišli s meškaním aspoň 3 hodiny",
                "máte rezerváciu, číslo letu a správy od Wizz Air",
                "Barcelona bola samostatný let alebo súčasť jednej rezervácie",
                "Wizz Air nevie presvedčivo doložiť mimoriadne okolnosti",
                "na let ste sa dostavili riadne a včas",
                "nejde len o všeobecné tvrdenie o prevádzkových problémoch",
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
                  Nie každé meškanie automaticky znamená 250 €. Ak Wizz Air vie preukázať mimoriadne
                  okolnosti, nárok na kompenzáciu nemusí vzniknúť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Zámena odletu a príletu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najčastejší omyl je pozerať len na meškanie odletu z Bratislavy. Pri kompenzácii sa
                  však kľúčovo sleduje meškanie pri prílete do konečnej destinácie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Samostatná ďalšia letenka
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak Barcelona bola len prestupný bod a ďalší let ste mali mimo jednej rezervácie,
                  situácia býva zvyčajne slabšia než pri jednej spoločnej rezervácii.
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
                Oficiálne pravidlá EÚ hovoria, že pri meškaní 3 hodiny a viac v konečnej destinácii
                môže vzniknúť nárok na kompenzáciu, ak nejde o mimoriadne okolnosti. Pri trase
                Bratislava – Barcelona je navyše silné to, že ide o let v rámci EÚ.
              </p>
              <p>
                To, že dopravcom je Wizz Air, nemení samotný základ pravidiel. Mení skôr praktickú
                rovinu sporu: komunikáciu, dokumentáciu a to, ako dôsledne treba preveriť dôvod
                meškania.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri tejto trase má veľký zmysel rýchlo oddeliť čistý prípad 250 € od spornejšej
                situácie, kde Wizz Air tvrdí mimoriadne okolnosti alebo kde je nejasné, aké bolo
                skutočné meškanie v cieli.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_wizz_bratislava_barcelona_delay_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Preveriť meškajúci let
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
                        "sk_wizz_bratislava_barcelona_delay_final_cta_cancelled",
                        cancelledFlightHref
                      )
                    }
                  >
                    Riešim skôr zrušený let
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
                  Wizz Air – všeobecný sprievodca
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete širší prehľad o reklamáciách a typických sporoch s Wizz Air.
                </p>
                <Link
                  href="/sk/blog/wizz-air-odszkodowanie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o Wizz Air
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Koľko dostanem za 3-hodinové meškanie letu?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete porovnať tę trasę z ogólnymi widełkami 250 €, 400 € i 600 €.
                </p>
                <Link
                  href="/sk/blog/kolko-dostanem-za-3-hodinove-meskanie-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na ogólny článok
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
                      "sk_wizz_bratislava_barcelona_delay_related_home",
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
