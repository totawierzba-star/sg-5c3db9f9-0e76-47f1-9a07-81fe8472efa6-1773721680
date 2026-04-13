import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/oplati-sa-pouzit-firmu-na-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=use_claim_company";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=use_claim_company";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=use_claim_company";

const faqItems = [
  {
    question: "Oplatí sa použiť firmu na odškodnenie?",
    answer:
      "Niekedy áno, niekedy nie. Ak máte jednoduchý prípad a čas riešiť ho sami, vlastná reklamácia môže byť rozumná. Ak je prípad zamietnutý, aerolínka neodpovedá alebo nechcete riešiť ďalšiu eskaláciu sami, firma môže mať väčší zmysel.",
  },
  {
    question: "Kedy sa viac oplatí podať reklamáciu sám?",
    answer:
      "Najmä pri jednoduchom, čerstvom prípade, kde máte dobré dokumenty a aerolínka ešte len dostáva prvú reklamáciu. Vtedy si viete otestovať priamu cestu bez provízie.",
  },
  {
    question: "Kedy má firma väčšiu hodnotu?",
    answer:
      "Najmä vtedy, keď prípad nejde hladko: aerolínka mlčí, zamieta, sporí sa o mimoriadne okolnosti alebo treba vec posúvať ďalej na národný orgán, ADR alebo súdnu cestu.",
  },
  {
    question: "Aká je provízia ClaimWingeru?",
    answer:
      "ClaimWinger účtuje 30 % províziu bez ohľadu na to, či sa prípad vyrieši mimosúdne alebo súdne. To je dôležité vedieť vopred pri porovnaní s vlastnou reklamáciou.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function OplatiSaPouzitFirmuNaOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Oplatí sa použiť firmu na odškodnenie? Závisí od zložitosti prípadu a ceny času"
        description="Má zmysel riešiť odškodnenie cez firmu, alebo radšej podať reklamáciu sám? Vysvetľujeme hlavné rozdiely, kedy sa oplatí priama reklamácia a kedy je firma praktickejšia."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Oplatí sa použiť firmu na odškodnenie?",
            description:
              "Praktické porovnanie vlastnej reklamácie a použitia firmy na odškodnenie pri problémoch s letom.",
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
                name: "Oplatí sa použiť firmu na odškodnenie?",
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
            <span>Oplatí sa použiť firmu na odškodnenie?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              Praktické porovnanie priamej reklamácie a externej pomoci
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Oplatí sa použiť firmu na odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najkratšia odpoveď je: <strong>záleží od prípadu</strong>. Pri jednoduchom a čerstvom
              probléme s letom sa často oplatí najprv podať reklamáciu priamo. Pri zamietnutí,
              neodpovedaní alebo spornejšom prípade však firma môže ušetriť čas, energiu a ďalšie
              procesné kroky.
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
            <Card className="border-purple-200 bg-gradient-to-br from-purple-600 to-indigo-700 p-8 text-white shadow-xl dark:border-purple-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-purple-50">
                <p>
                  <strong>Vlastná reklamácia</strong> dáva zmysel, ak je prípad jednoduchý a chcete
                  sa vyhnúť provízii.
                </p>
                <p>
                  <strong>Firma</strong> dáva väčší zmysel, ak aerolínka mlčí, zamieta alebo nechcete
                  sami riešiť ďalšiu eskaláciu.
                </p>
                <p>
                  Pri ClaimWingeri je férové vedieť vopred, že provízia je <strong>30 %</strong>
                  bez ohľadu na to, či sa vec vyrieši mimosúdne alebo súdne.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Neviete, či sa váš prípad ešte oplatí riešiť sami?"
            description="ClaimWinger vie pomôcť posúdiť, či ide o jednoduchý prípad vhodný na rýchle preverenie, alebo o vec, kde už je praktickejšie riešiť ďalší proces cez partnera."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=use_claim_company"
            ctaLabel="Preveriť, či sa oplatí externá pomoc"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_use_claim_company_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy sa viac oplatí podať reklamáciu sám
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "prípad je čerstvý a zatiaľ nebol zamietnutý",
                "máte dobré dokumenty a jasný problém s letom",
                "ste ochotní venovať čas komunikácii s aerolinkou",
                "chcete najprv skúsiť priamu cestu bez provízie",
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
              Kedy má firma väčšiu hodnotu
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Aerolínka neodpovedá alebo zamieta
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Vtedy už nejde len o podanie formulára, ale aj o ďalší proces, argumentáciu a voľbu
                  ďalšej cesty.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Spor o mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak je jadrom prípadu spor o dôvod meškania alebo zrušenia, firma môže mať väčšiu
                  procesnú hodnotu než ďalší improvizovaný pokus.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Nechcete riešiť ďalšie kroky sami
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Oficiálne zdroje EÚ počítajú s tým, že spor môže ísť ďalej cez národný orgán, ADR
                  alebo súd. Pre niektorých cestujúcich je už táto fáza dosť dôvodom na externú pomoc.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Hlavný rozdiel: provízia verzus čas a proces
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-green-200 p-6 dark:border-green-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Vlastná reklamácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Výhoda je jasná: ak uspejete sami, neplatíte províziu. Nevýhodou je, že celý čas,
                  komunikácia a ďalšie kroky zostávajú na vás.
                </p>
              </Card>
              <Card className="border-purple-200 p-6 dark:border-purple-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  ClaimWinger
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Výhoda je praktickosť a to, že nemusíte riešiť celý proces sami. Dôležitý rozdiel:
                  provízia ClaimWingeru je <strong>30 %</strong> bez ohľadu na to, či sa prípad vyrieši
                  mimosúdne alebo súdne.
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
                Portál <strong>Your Europe</strong> a Európska komisia opisujú prirodzenú postupnosť:
                najprv kontaktovať aerolinku, potom sa pri problémoch obrátiť na príslušný národný orgán,
                skúsiť ADR a v prípade potreby ísť aj na súd.
              </p>
              <p>
                To znamená, že <strong>firma nie je povinná</strong> na začiatku. Zároveň však oficiálne
                zdroje ukazujú, že spor sa môže stať procesne náročnejším. Práve v tejto fáze môže mať
                externá pomoc väčšiu praktickú hodnotu.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete zistiť, či má zmysel riešiť to ešte sami?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Najlepšie je najprv si ujasniť, či ide o jednoduchý meškajúci alebo zrušený let, alebo
                už o spornejší prípad, kde sa celá hodnota firmy ukáže hlavne v ďalšom procese.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_use_claim_company_final_cta_delay", delayedFlightHref)
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
                        "sk_use_claim_company_final_cta_cancelled",
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
                  Ak chcete osobitne rozlíšiť firmu, právnika a vlastnú reklamáciu.
                </p>
                <Link
                  href="/sk/blog/potrebujem-pravnika-na-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o právnikovi
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ako podať sťažnosť leteckej spoločnosti
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete najprv vyskúšať priamu cestu bez provízie.
                </p>
                <Link
                  href="/sk/blog/ako-podat-staznost-letecka-spolocnost"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na návod pre vlastnú reklamáciu
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete prípad prakticky preveriť a rozhodnúť sa podľa konkrétnej situácie.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_use_claim_company_related_home", claimWingerHomeHref)
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
