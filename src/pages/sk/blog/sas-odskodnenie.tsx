import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/sas-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=sas_compensation";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=sas_compensation";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=sas_compensation";

const faqItems = [
  {
    question: "Mám pri lete SAS nárok na odškodnenie?",
    answer:
      "Často áno, ak let patrí do rozsahu pravidiel 261/2004, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
  },
  {
    question: "Je pri SAS dôležité, že lieta často cez Nórsko, Dánsko a Švédsko?",
    answer:
      "Áno. Pri SAS je dôležité dobre čítať škandinávsky kontext a trasu. Pravidlá sa uplatňujú aj na lety do a z Nórska, takže pri severoeurópskych itinerároch môže byť ochrana stále veľmi silná.",
  },
  {
    question: "Koľko môžem dostať od SAS?",
    answer:
      "Pri kratších letoch ide často o 250 €, pri stredných o 400 € a pri dlhých letoch nad 3 500 km často o 600 €, ak sú splnené podmienky pravidiel 261/2004 a nejde o mimoriadne okolnosti.",
  },
  {
    question: "Počíta sa meškanie v odlete alebo v príchode?",
    answer:
      "Pri kompenzácii sa kľúčovo sleduje meškanie pri príchode do konečnej destinácie, nie len to, o koľko neskôr lietadlo odletelo.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function SasOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="SAS odškodnenie: kedy vzniká nárok a čo je dôležité pri škandinávskych letoch"
        description="Meškal vám, zrušili alebo výrazne presunuli let SAS? Zistite, kedy vzniká nárok na odškodnenie, koľko môžete dostať a prečo je pri SAS dôležitý škandinávsky kontext."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "SAS odškodnenie: kedy vzniká nárok a čo je dôležité pri škandinávskych letoch",
            description:
              "Praktický sprievodca pre cestujúcich pri problémoch s letom SAS vrátane výšky nároku, pravidiel 261/2004 a významu škandinávskej siete a letov do a z Nórska.",
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
                name: "SAS odškodnenie",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>SAS odškodnenie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
              Airline content pre SAS
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              SAS odškodnenie: kedy vzniká nárok?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak ste leteli so <strong>SAS</strong> a nastal problém, odpoveď býva často priaznivá.
              Pri meškaní, zrušení alebo inom relevantnom narušení v rozsahu pravidiel
              <strong> 261/2004</strong> môže vzniknúť nárok na kompenzáciu. Pri SAS je však dôležité
              dobre rozumieť škandinávskej sieti a tomu, že pravidlá sa uplatňujú aj pri letoch
              do a z <strong>Nórska</strong>.
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
            <Card className="border-indigo-200 bg-gradient-to-br from-indigo-600 to-blue-700 p-8 text-white shadow-xl dark:border-indigo-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-indigo-50">
                <p>
                  <strong>Áno, často áno.</strong> Pri SAS býva dôležité, že pravidlá sa vzťahujú aj
                  na lety do a z <strong>Nórska</strong>, nielen na trasy v rámci členských štátov EÚ.
                </p>
                <p>
                  Pri kratších letoch býva typicky <strong>250 €</strong>, pri stredných
                  <strong> 400 €</strong> a pri dlhých letoch nad 3 500 km často
                  <strong> 600 €</strong>, ak sú splnené podmienky pravidiel a nejde o mimoriadne okolnosti.
                </p>
                <p>
                  Kľúčové je hlavne to, či let patrí do rozsahu 261/2004, aké bolo meškanie pri prílete
                  do konečnej destinácie a či SAS naozaj vie preukázať mimoriadne okolnosti.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Riešite meškanie alebo zrušenie letu SAS?"
            description="ClaimWinger vie rýchlo preveriť, či ide o silný nárok podľa pravidiel 261/2004, alebo o zložitejší prípad, kde bude dôležitý škandinávsky kontext, operujúci dopravca, jedna rezervácia a výsledok v konečnej destinácii."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=sas_compensation"
            ctaLabel="Preveriť nárok s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie nároku."
            placement="sk_blog_sas_compensation_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Prečo je pri SAS dôležitý škandinávsky kontext
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Nórsko je výslovne zahrnuté
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Oficiálne zdroje EÚ uvádzajú, že pravidlá sa uplatňujú aj na lety do a z Nórska.
                  To je pri SAS mimoriadne praktické.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Sieť cez Kodaň, Stockholm a Oslo
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri SAS bývajú veľmi časté severoeurópske prestupy. Preto treba presne čítať
                  konečnú destináciu a celú rezerváciu, nie len prvý úsek.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-8 w-8 text-indigo-600" />
              Koľko môžete dostať
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-green-200 p-6 dark:border-green-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  250 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri kratších letoch, často do 1 500 km, ak sú splnené podmienky pravidiel.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  400 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri stredných trasách, typicky v rámci širšej európskej a severnej siete.
                </p>
              </Card>
              <Card className="border-blue-200 p-6 dark:border-blue-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  600 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri dlhých letoch nad 3 500 km, ak ide o silný prípad bez mimoriadnych okolností.
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
                "do konečnej destinácie ste prišli s meškaním aspoň 3 hodiny",
                "alebo bol let zrušený za podmienok, ktoré zakladajú nárok",
                "máte rezerváciu, číslo letu a komunikáciu od SAS",
                "SAS nevie presvedčivo doložiť mimoriadne okolnosti",
                "je jasné, prečo sa na trasu vzťahujú pravidlá 261/2004",
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
              Čo pri SAS najčastejšie komplikuje posúdenie
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Prestup cez Kodaň, Stockholm alebo Oslo
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri SAS býva veľmi častý scenár, že škandinávske letisko je len prestupný bod. V
                  takom prípade môže byť rozhodujúca až konečná destinácia celej rezervácie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Kombinácia EÚ a Nórska
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Práve táto kombinácia býva pri SAS najčastejším zdrojom zmätku. Namiesto rýchleho
                  predpokladu treba presne overiť, ako sa pravidlá uplatnia na konkrétnu trasu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie každé tvrdenie o počasí, riadení letovej prevádzky alebo bezpečnostnom probléme
                  automaticky vylučuje nárok. Dôležité je, či ho dopravca vie skutočne preukázať.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo hovoria oficiálne zdroje
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Your Europe výslovne uvádza, že pravidlá sa uplatňujú aj na lety do a z
                <strong> Nórska</strong>. To je pri SAS zásadné, pretože ide o jednu z najčastejších
                kombinácií v severoeurópskej sieti.
              </p>
              <p>
                Pri SAS je preto dôležité nevyhodnocovať prípad len podľa intuície o tom, či ide o
                „EÚ let“. V praxi môže byť nárok stále veľmi silný aj pri škandinávskom itinerári.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri SAS má veľký zmysel rýchlo oddeliť silný prípad 250 €, 400 € alebo 600 € od
                zložitejšej situácie so škandinávskym prestupom, partnerom, zdieľaným kódom alebo
                tvrdenými mimoriadnymi okolnosťami.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_sas_compensation_final_cta_delay", delayedFlightHref)
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
                        "sk_sas_compensation_final_cta_cancelled",
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
                    trackClaimClick("sk_sas_compensation_related_home", claimWingerHomeHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Môžem žiadať odškodnenie pri prestupe?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak SAS bol len časťou jednej cesty a problém sa prejavil ďalej v itinerári.
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
                  Viedeň – Frankfurt meškanie letu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak riešite užší trasovo špecifický kontext stredoeurópskeho hubového letu.
                </p>
                <Link
                  href="/sk/blog/vieden-frankfurt-meskanie-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na route článok
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
