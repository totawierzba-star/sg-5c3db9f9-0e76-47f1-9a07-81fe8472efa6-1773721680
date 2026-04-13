import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Search,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/ako-vybrat-spravnu-firmu-na-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=how_to_choose_claim_company";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=how_to_choose_claim_company";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=how_to_choose_claim_company";

const faqItems = [
  {
    question: "Ako vybrať správnu firmu na odškodnenie za let?",
    answer:
      "Najdôležitejšie je pozerať sa na transparentnosť provízie, čo všetko je v nej zahrnuté, ako firma komunikuje riziká prípadu a či jasne vysvetľuje rozdiel medzi jednoduchým mimosúdnym vybavením a náročnejším sporom.",
  },
  {
    question: "Je najnižšia provízia vždy najlepšia voľba?",
    answer:
      "Nie automaticky. Nízke číslo samo o sebe nestačí, ak nie je jasné, čo zahŕňa, či sa mení pri súde alebo pri ďalších poplatkoch a ako firma rieši komplikovanejšie prípady.",
  },
  {
    question: "Je v poriadku skúsiť najprv vlastnú reklamáciu?",
    answer:
      "Áno, pri jednoduchom prípade to môže byť rozumný prvý krok. Firma dáva väčší zmysel najmä vtedy, keď aerolínka neodpovedá, zamietne nárok alebo nechcete niesť ďalšiu procesnú záťaž sami.",
  },
  {
    question: "Aká je provízia ClaimWingeru?",
    answer:
      "ClaimWinger účtuje 30 % bez ohľadu na to, či sa vec vyrieši mimosúdne alebo súdne. To je dôležité vedieť vopred pri porovnávaní s inými modelmi.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AkoVybratSpravnuFirmuNaOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Ako vybrať správnu firmu na odškodnenie za let?"
        description="Ako si vybrať firmu na odškodnenie za let? Vysvetľujeme, na čo sa pozerať pri provízii, zmluvných podmienkach, komunikácii a kedy ešte stačí vlastná reklamácia."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ako vybrať správnu firmu na odškodnenie za let?",
            description:
              "Praktický návod, podľa čoho vyberať firmu na odškodnenie za let a na čo si dať pozor pri provízii, podmienkach a komunikácii.",
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
                name: "Ako vybrať správnu firmu na odškodnenie za let?",
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
            <span>Ako vybrať správnu firmu na odškodnenie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Praktické kritériá výberu bez marketingovej hmly
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ako vybrať správnu firmu na odškodnenie za let?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Dobrú firmu nespoznáte podľa najhlasnejšieho sľubu, ale podľa toho, ako
              <strong> transparentne vysvetlí províziu</strong>, čo presne robí s vaším prípadom a
              či otvorene povie aj to, <strong>kedy ešte stačí vlastná reklamácia</strong>.
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
                  Správna firma na odškodnenie by mala jasne vysvetliť
                  <strong> koľko si berie</strong>, <strong>kedy si to berie</strong> a
                  <strong> čo presne robí, keď sa vec skomplikuje</strong>.
                </p>
                <p>
                  Dôležité je aj to, či vás netlačí do služby tam, kde ešte pokojne stačí vlastná
                  reklamácia, a či otvorene komunikuje, ako sa mení situácia pri súde.
                </p>
                <p>
                  Ak chcete rovno preveriť prípad cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_how_to_choose_claim_company_quick_answer_home",
                        claimWingerHomeHref
                      )
                    }
                    className="font-semibold underline underline-offset-4"
                  >
                    ClaimWinger Slovensko
                  </a>
                  , je férové vedieť vopred, že ClaimWinger účtuje <strong>30 %</strong> aj pri
                  mimosúdnej aj pri súdnej ceste.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Chcete si prípad rovno preveriť s ClaimWinger?"
            description="Ak nechcete riešiť výber medzi viacerými cestami sami, môžete prípad poslať priamo ClaimWingeru. Provízia je 30 % bez ohľadu na to, či sa vec rieši mimosúdne alebo súdne."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=how_to_choose_claim_company"
            ctaLabel="Preveriť prípad s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_how_to_choose_claim_company_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Wallet className="h-8 w-8 text-emerald-600" />
              1. Najprv pozerajte na províziu, ale poctivo
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Samotné číslo nestačí. Dôležité je vedieť, či je provízia pevná, či sa mení pri
                  súde, či sú zvlášť ďalšie poplatky a v akej chvíli sa vôbec účtuje.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri ClaimWingeri je dôležité vedieť jednoduchú vec: <strong>30 %</strong> bez
                  ohľadu na to, či sa spor vyrieši mimosúdne alebo súdne. Táto jasnosť sama o sebe
                  pomáha pri porovnaní.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Search className="h-8 w-8 text-emerald-600" />
              2. Pýtajte sa, čo firma robí pri ťažšom spore
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Jednoduchý prípad po meškaní alebo zrušení je jedna vec. Úplne iná je situácia, keď
                  aerolínka mlčí, zamieta nárok alebo sa bráni mimoriadnymi okolnosťami.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dobrá firma vie vysvetliť, čo sa deje ďalej: či prípad ešte skúša mimosúdne,
                  využíva ADR, alebo je pripravená niesť spor aj do náročnejšej procesnej fázy.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <ShieldCheck className="h-8 w-8 text-emerald-600" />
              3. Dobrý signál je aj to, keď vás firma netlačí zbytočne
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Férový prístup znamená aj to, že firma prizná, keď má zmysel najprv skúsiť
                  <strong> vlastnú reklamáciu</strong>. Nie každý čerstvý a jednoduchý prípad musí
                  automaticky prejsť cez agentúru.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Väčší zmysel má firma tam, kde je spor už procesne ťažší: zamietnutie,
                  neodpovedanie, slabá dokumentácia alebo nejasná situácia pri prestupe.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Na čo si dať pozor pri sľuboch a marketingu
            </h2>
            <div className="grid gap-4">
              {[
                "nepozerajte len na veľké percentá úspešnosti bez kontextu",
                "pýtajte sa, čo presne znamená úspech a pri akých typoch sporov",
                "overte si, či firma jasne vysvetľuje, kto rieši komunikáciu a eskaláciu",
                "dávajte pozor na modely, kde nie je jasné, čo sa stane pri súde alebo ďalších poplatkoch",
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
            <Card className="border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-800 dark:bg-emerald-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si prípad rovno preveriť?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak nechcete porovnávať modely a zmluvné nuansy sami, môžete prípad rovno poslať do
                ClaimWingeru. Vopred viete, že provízia je <strong>30 %</strong> aj pri mimosúdnej,
                aj pri súdnej ceste.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_how_to_choose_claim_company_final_cta_home",
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
                        "sk_how_to_choose_claim_company_final_cta_delay",
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
                        "sk_how_to_choose_claim_company_final_cta_cancel",
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
                  Oplatí sa použiť firmu na odškodnenie?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Širší článok o tom, kedy má firma vôbec väčší zmysel než vlastná reklamácia.
                </p>
                <Link
                  href="/sk/blog/oplati-sa-pouzit-firmu-na-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Potrebujem právnika na odškodnenie?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dobrý follow-up, ak sa rozhodujete medzi vlastnou cestou, firmou a právnikom.
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
                  Kedy ísť na súd pri odškodnení za let?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak porovnávate firmy aj podľa toho, čo robia v ťažšej fáze sporu.
                </p>
                <Link
                  href="/sk/blog/kedy-ist-na-sud-pri-odskodneni-za-let"
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
