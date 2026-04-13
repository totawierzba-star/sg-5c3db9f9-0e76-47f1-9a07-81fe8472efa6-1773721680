import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/vieden-rim-meskanie-letu";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vienna_rome_delay";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vienna_rome_delay";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=vienna_rome_delay";

const faqItems = [
  {
    question: "Mám pri lete Viedeň – Rím nárok na odškodnenie za meškanie?",
    answer:
      "Často áno, ak ste do konečnej destinácie prišli s meškaním 3 hodiny a viac, let patrí do rozsahu EU261 a aerolínka nepreukáže mimoriadne okolnosti. Pri bežnom priamom lete z Viedne do Ríma býva typická kompenzácia 250 €.",
  },
  {
    question: "Koľko môžem dostať pri meškaní na tejto trase?",
    answer:
      "Pri samostatnom lete Viedeň – Rím ide zvyčajne o pásmo do 1 500 km, takže kompenzácia býva 250 €. Ak však Rím nebol konečný cieľ a šlo o jednu rezerváciu ďalej, rozhodovať môže až konečná destinácia celej cesty.",
  },
  {
    question: "Počíta sa meškanie v odlete alebo v príchode?",
    answer:
      "Pri kompenzácii sa kľúčovo sleduje meškanie pri príchode do konečnej destinácie, nie len to, o koľko neskôr lietadlo odletelo z Viedne.",
  },
  {
    question: "Čo ak aerolínka tvrdí technický alebo prevádzkový problém?",
    answer:
      "Nie každý technický alebo prevádzkový problém automaticky znamená mimoriadne okolnosti. Aerolínka musí svoj dôvod vedieť preukázať a nestačí len všeobecné tvrdenie bez podkladov.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function ViedenRimMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO
        title="Viedeň – Rím meškanie letu: odškodnenie, výška nároku a čo rozhoduje"
        description="Meškal vám let z Viedne do Ríma? Zistite, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 250 € a prečo rozhoduje meškanie v cieli."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Viedeň – Rím meškanie letu: odškodnenie, výška nároku a čo rozhoduje",
            description:
              "Praktický sprievodca pre cestujúcich pri meškaní letu z Viedne do Ríma vrátane výšky nároku a pravidiel EU261.",
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
                name: "Viedeň – Rím meškanie letu",
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
            <span>Viedeň – Rím meškanie letu</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              Route content pre VIE a Rím
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Viedeň – Rím meškanie letu: mám nárok na odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pri bežnom lete z <strong>Viedne do Ríma</strong> býva odpoveď často priaznivá: ak
              prídete do cieľa s meškaním aspoň <strong>3 hodiny</strong>, let je v rozsahu
              <strong> EU261</strong> a aerolínka nepreukáže mimoriadne okolnosti, nárok na
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
            <Card className="border-red-200 bg-gradient-to-br from-red-600 to-rose-700 p-8 text-white shadow-xl dark:border-red-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-red-50">
                <p>
                  <strong>Áno, často áno.</strong> Let z Viedne do Ríma odlieta aj pristáva v EÚ,
                  takže ochrana podľa EU261 je pri tejto trase veľmi priamočiara.
                </p>
                <p>
                  Pri samostatnom lete na tejto trase býva typická kompenzácia <strong>250 €</strong>,
                  ak meškanie v cieli dosiahne aspoň 3 hodiny.
                </p>
                <p>
                  Ak však Rím nebol konečný cieľ, ale len prestup na jednej rezervácii, môže byť
                  rozhodujúca až konečná destinácia celej cesty.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Meškal vám let Viedeň – Rím?"
            description="ClaimWinger vie rýchlo preveriť, či ide o jasný nárok podľa EU261, alebo o spornejší prípad, kde bude dôležitý dôvod meškania a sila dokumentov."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=vienna_rome_delay"
            ctaLabel="Preveriť nárok za meškajúci let"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie meškajúceho letu."
            placement="sk_blog_vienna_rome_delay_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Prečo je táto trasa z pohľadu EU261 jednoduchšia
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Let v rámci EÚ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Trasa Viedeň – Rím je vnútroeurópska cesta, takže rozsah pravidiel EU261 tu býva
                  zvyčajne oveľa menej sporný než pri letoch mimo EÚ alebo do tretích krajín.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Typické pásmo 250 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri bežnom priamom lete Viedeň – Rím ide typicky o pásmo do 1 500 km, takže pri
                  splnení podmienok ide najčastejšie o kompenzáciu 250 €.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-8 w-8 text-red-600" />
              Koľko môžete dostať
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-green-200 p-6 dark:border-green-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Priamy let Viedeň – Rím
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste leteli point-to-point a prišli ste do Ríma s meškaním aspoň 3 hodiny,
                  na tejto trase býva typická kompenzácia <strong>250 €</strong>.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Let s prestupom na jednej rezervácii
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak Rím nebol konečný cieľ a cesta pokračovala ďalej na jednej rezervácii,
                  rozhodovať môže až vzdialenosť a meškanie v konečnej destinácii celej trasy.
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
                "do Ríma ste prišli s meškaním aspoň 3 hodiny",
                "máte rezerváciu, potvrdenia a správy od aerolinky",
                "let bol jeden samostatný úsek alebo súčasť jednej rezervácie",
                "aerolínka nevie presvedčivo doložiť mimoriadne okolnosti",
                "dôvod meškania vyzerá skôr prevádzkovo než mimoriadne",
                "na let ste sa dostavili riadne a včas",
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
                  Ak aerolínka preukáže mimoriadne okolnosti, kompenzácia nemusí vzniknúť. Stále však
                  môže zostať právo na starostlivosť, presmerovanie alebo refundáciu v iných typoch
                  problému.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Nesprávny bod merania meškania
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri kompenzácii nerozhoduje len meškanie odletu z Viedne. Kľúčovo sa pozerá na
                  meškanie pri príchode do konečnej destinácie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Oddelené rezervácie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak bol Rím len prestupný bod a ďalší let ste mali na samostatnej letenke,
                  situácia býva slabšia než pri jednej spoločnej rezervácii.
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
                môže vzniknúť nárok na kompenzáciu, ak nejde o mimoriadne okolnosti. Pri letoch v
                rámci EÚ je aplikácia týchto pravidiel spravidla veľmi priamočiara.
              </p>
              <p>
                Pri trase Viedeň – Rím je preto kľúčové najmä to, či išlo o jednoduchý priamy úsek,
                alebo o časť širšej cesty na jednej rezervácii ďalej.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri tejto trase má veľký zmysel rýchlo oddeliť bežný prípad 250 € od spornejšej
                situácie s prestupom, zmenou trasy alebo tvrdenými mimoriadnymi okolnosťami.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_vienna_rome_delay_final_cta_delay", delayedFlightHref)
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
                        "sk_vienna_rome_delay_final_cta_cancelled",
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
                  Koľko dostanem za 3-hodinové meškanie letu?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete rýchlo pochopiť, ako sa mení výška kompenzácie podľa vzdialenosti.
                </p>
                <Link
                  href="/sk/blog/kolko-dostanem-za-3-hodinove-meskanie-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Platí odškodnenie pri prestupe?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak Rím nebol konečný cieľ a cesta pokračovala ďalej.
                </p>
                <Link
                  href="/sk/blog/plati-odskodnenie-pri-prestupe"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o prestupe
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
                    trackClaimClick("sk_vienna_rome_delay_related_home", claimWingerHomeHref)
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
