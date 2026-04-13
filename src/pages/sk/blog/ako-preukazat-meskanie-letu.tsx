import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  ImageIcon,
  PlaneLanding,
  Receipt,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/ako-preukazat-meskanie-letu";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=prove_flight_delay";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=prove_flight_delay";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=prove_flight_delay";

const faqItems = [
  {
    question: "Ako najlepšie preukázať meškanie letu?",
    answer:
      "Najsilnejšia kombinácia býva rezervácia alebo PNR, dôkaz, že ste boli na konkrétnom lete, a stopy o skutočnom priebehu narušenia: e-maily od aerolinky, screenshoty z aplikácie, údaje o reroutingu a reálny čas príchodu do konečnej destinácie.",
  },
  {
    question: "Stačí screenshot odletovej tabule alebo aplikácie?",
    answer:
      "Ako podporný dôkaz často pomôže, ale sám o sebe nemusí byť najsilnejší. Lepšie je mať viac stôp naraz: rezerváciu, komunikáciu od aerolinky, boarding pass, potvrdenie check-inu a záznam o skutočnom príchode.",
  },
  {
    question: "Počíta sa pri nároku meškanie pri odlete alebo pri prílete?",
    answer:
      "Pri kompenzácii podľa EU261 je rozhodujúce najmä meškanie pri príchode do konečnej destinácie, nie len to, o koľko neskôr lietadlo odletelo.",
  },
  {
    question: "Potrebujem oficiálne potvrdenie od aerolinky?",
    answer:
      "Nie vždy. Oficiálne potvrdenie veľmi pomôže, ale nárok sa často dá postaviť aj na kombinácii rezervácie, e-mailov, screenshotov, dôkazu check-inu a ďalších konzistentných podkladov.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AkoPreukazatMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO
        title="Ako preukázať meškanie letu: ktoré dôkazy sú najsilnejšie?"
        description="Ako dokázať meškanie letu pri reklamácii? Vysvetľujeme, ktoré dôkazy sú najsilnejšie, prečo je dôležitá konečná destinácia a čo si odkladať pri narušenom lete."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ako preukázať meškanie letu: ktoré dôkazy sú najsilnejšie?",
            description:
              "Praktický návod, ako dokázať meškanie letu pri reklamácii a ktoré podklady najviac pomáhajú pri spore s aerolinkou.",
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
                name: "Ako preukázať meškanie letu",
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
            <span>Ako preukázať meškanie letu</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              Praktický návod k dôkazom pri meškaní
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ako preukázať meškanie letu: ktoré dôkazy sú najsilnejšie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pri reklamácii nestačí len povedať, že let meškal. Potrebujete vedieť
              <strong> preukázať, že ste boli na konkrétnom lete</strong>, čo sa s letom reálne
              stalo a najmä <strong>aký bol výsledok v konečnej destinácii</strong>. Práve tam sa
              často láme celý nárok podľa pravidiel <strong>EU261</strong>.
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
                  Najsilnejšie býva mať spolu <strong>rezerváciu alebo PNR</strong>, dôkaz o tom,
                  že ste boli na lete, a viacero stôp o samotnom narušení letu.
                </p>
                <p>
                  To znamená najmä <strong>e-maily od aerolinky</strong>, <strong>screenshoty z
                  aplikácie alebo odletovej tabule</strong>, potvrdenie <strong>reroutingu</strong>
                  a údaje o <strong>skutočnom príchode do konečnej destinácie</strong>.
                </p>
                <p>
                  Ak si nie ste istý, či sú vaše podklady už dosť silné, môžete ich rovno preveriť cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_prove_flight_delay_quick_answer_home",
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
            title="Neviete, či máte dosť dôkazov o meškaní?"
            description="ClaimWinger vie pomôcť posúdiť, či sú vaše podklady už dosť silné na preverenie nároku, alebo sa ešte oplatí dohľadať ďalšie potvrdenia a záznamy."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=prove_flight_delay"
            ctaLabel="Preveriť podklady k prípadu"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_prove_flight_delay_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 1: najprv preukážte, že ste patrili na konkrétny let
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "rezervácia alebo PNR",
                "e-ticket alebo potvrdenie kúpy",
                "boarding pass alebo dôkaz check-inu",
                "batožinový štítok, ak ste odovzdali batožinu",
              ].map((item) => (
                <Card key={item} className="border-slate-200 p-4 dark:border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Toto je základ. Bez neho sa spor ľahko zmení na debatu o tom, či ste vôbec boli
              pasažierom daného letu.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <ImageIcon className="h-8 w-8 text-cyan-600" />
              Krok 2: odkladajte si stopy o samotnom narušení letu
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  E-maily a push notifikácie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Správy od aerolinky o meškaní, zrušení, zmene času alebo novom gate bývajú veľmi
                  užitočné. Najlepšie je nechať si ich v pôvodnej podobe aj s časom doručenia.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Screenshoty tabule a aplikácie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Samy o sebe nemusia stačiť, ale ako podporný dôkaz sú veľmi dobré. Užitočné je,
                  keď na nich vidno let, čas a stav letu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <PlaneLanding className="h-8 w-8 text-cyan-600" />
              Krok 3: sledujte hlavne konečnú destináciu
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri kompenzácii podľa <strong>EU261</strong> sa často nepočíta len odlet, ale
                  <strong> meškanie pri príchode do konečnej destinácie</strong>. To je zásadné pri
                  prestupoch a pri jednej rezervácii.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak vás presmerovali na iný let, odkladajte si nový itinerár, boarding passy,
                  potvrdenie reroutingu a čas, kedy ste sa reálne dostali do cieľa. Práve to býva
                  v spore silnejšie než samotný screenshot prvého odletu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Receipt className="h-8 w-8 text-cyan-600" />
              Krok 4: ak vznikli náklady, ukladajte aj účtenky
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak žiadate aj náhradu za hotel, jedlo, taxi alebo inú starostlivosť, samotný dôkaz
                  meškania nestačí. Potrebujete aj primerané účtenky a ideálne prepojenie na konkrétny
                  problém s letom.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Toto je iná vrstva než peňažná kompenzácia. Preto je dobré držať oddelene dôkazy o
                  narušení letu a dôkazy o výdavkoch, ktoré tým vznikli.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 5: čo robiť, ak nemáte jedno „oficiálne potvrdenie“
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To ešte neznamená, že prípad je slabý. V praxi často pomôže konzistentná kombinácia
                  viacerých dôkazov: rezervácia, e-maily, screenshoty, potvrdenie check-inu, nové
                  letenky po presmerovaní a čas skutočného príletu do cieľa.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa aerolinka bráni tým, že meškanie nebolo dostatočne preukázané, veľmi pomáha,
                  keď je celý váš časový reťazec čistý a bez rozporov.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-cyan-200 bg-cyan-50 p-8 dark:border-cyan-800 dark:bg-cyan-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si prípad preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak máte rezerváciu, screenshoty, e-maily alebo len časť podkladov, ClaimWinger vie
                rýchlo odhadnúť, či už to stačí na rozumné preverenie nároku, alebo čo ešte chýba.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_prove_flight_delay_final_cta_home",
                        claimWingerHomeHref
                      )
                    }
                  >
                    Preveriť dôkazy s ClaimWinger
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
                        "sk_prove_flight_delay_final_cta_delay",
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
                        "sk_prove_flight_delay_final_cta_cancel",
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
                  Aké dokumenty potrebujem na reklamáciu?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Širší checklist dokumentov a podkladov k celej reklamácii.
                </p>
                <Link
                  href="/sk/blog/ake-dokumenty-potrebujem-na-reklamaciu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Viac letov v jednej rezervácii
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dôležité, ak meškanie prvého segmentu rozbilo celú cestu.
                </p>
                <Link
                  href="/sk/blog/viac-letov-v-jednej-rezervacii"
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
                  Ďalší krok, ak podklady máte, ale aerolinka stále nereaguje rozumne.
                </p>
                <Link
                  href="/sk/blog/co-robit-ked-aerolinka-neodpoveda"
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
