import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/ake-dokumenty-potrebujem-na-reklamaciu";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=documents_for_claim";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=documents_for_claim";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=documents_for_claim";

const faqItems = [
  {
    question: "Aké dokumenty potrebujem na reklamáciu letu?",
    answer:
      "Najčastejšie stačí rezervácia alebo PNR, potvrdenie letu, údaje o trase a dátume a všetko, čo pomôže dokázať, že ste boli na konkrétnom lete. Boarding pass je veľmi užitočný, ale nie vždy je jediným možným dôkazom.",
  },
  {
    question: "Je boarding pass povinný?",
    answer:
      "Nie vždy. Pri meškaní alebo zrušení sa dá prípad často postaviť aj na rezervácii, e-mailoch od aerolinky, potvrdení check-inu alebo iných dôkazoch. Pri niektorých sporoch o nástup na palubu je však boarding pass alebo dôkaz včasného check-inu veľmi dôležitý.",
  },
  {
    question: "Potrebujem aj bločky za jedlo, hotel alebo taxi?",
    answer:
      "Ak žiadate aj náhradu výdavkov za starostlivosť, áno. Na kompenzáciu podľa EU261 to nie je to isté ako základný dôkaz letu, ale na vedľajšie náklady sú účtenky dôležité.",
  },
  {
    question: "Čo ak mi niektoré dokumenty chýbajú?",
    answer:
      "Nárok to nemusí automaticky zabiť. Dôležité je zachovať aspoň čo najviac stôp: PNR, e-maily, screenshoty, potvrdenia z aplikácie alebo bankový doklad o kúpe letenky.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AkeDokumentyPotrebujemNaReklamaciuPage() {
  return (
    <LayoutSk>
      <SEO
        title="Aké dokumenty potrebujem na reklamáciu? Rezervácia, boarding pass a ďalšie dôkazy"
        description="Aké dokumenty si pripraviť na reklamáciu meškajúceho alebo zrušeného letu? Vysvetľujeme, čo je povinné, čo je len užitočné a čo robiť, ak vám niečo chýba."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Aké dokumenty potrebujem na reklamáciu?",
            description:
              "Praktický checklist dokumentov a dôkazov, ktoré sa hodia pri reklamácii letu a pri nároku podľa EU261.",
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
                name: "Aké dokumenty potrebujem na reklamáciu?",
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
            <span>Aké dokumenty potrebujem na reklamáciu?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Praktický checklist podkladov a dôkazov
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Aké dokumenty potrebujem na reklamáciu?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najkratšia odpoveď je: ideálne si pripravte <strong>rezerváciu, číslo letu, dátum, PNR,
              potvrdenie cesty a všetko, čo dokáže, že ste boli pasažierom konkrétneho letu</strong>.
              Boarding pass je veľmi užitočný, ale nie vždy je jediným možným dôkazom.
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
            <Card className="border-blue-200 bg-gradient-to-br from-blue-600 to-cyan-700 p-8 text-white shadow-xl dark:border-blue-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-blue-50">
                <p>
                  Základom býva <strong>rezervácia alebo PNR</strong>, identifikácia letu a vaše meno.
                </p>
                <p>
                  <strong>Boarding pass pomáha, ale nie vždy je povinný</strong>. V mnohých prípadoch
                  sa dajú použiť aj iné dôkazy.
                </p>
                <p>
                  Ak žiadate aj <strong>náhradu výdavkov</strong>, odkladajte si aj účtenky za jedlo,
                  hotel, taxi alebo inú potrebnú starostlivosť.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Neviete, či máte dosť dokumentov na podanie reklamácie?"
            description="ClaimWinger vie pomôcť posúdiť, či sú vaše podklady už dosť silné na preverenie prípadu, alebo či sa ešte oplatí dohľadať chýbajúce dokumenty a potvrdenia."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=documents_for_claim"
            ctaLabel="Preveriť podklady k prípadu"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_documents_for_claim_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Základný checklist dokumentov
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "rezervácia alebo PNR",
                "potvrdenie letu a dátum cesty",
                "vaše meno a údaje pasažiera",
                "boarding pass alebo dôkaz check-inu, ak ho máte",
                "e-maily od aerolinky o meškaní, zrušení alebo reroutingu",
                "screenshoty z aplikácie alebo webu aerolinky",
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
              Čo je najdôležitejšie pri rôznych typoch problémov
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Pri meškaní letu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najdôležitejšie je vedieť preukázať, že ste boli pasažierom letu a aký bol výsledný
                  dopad na váš príchod do konečnej destinácie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Pri zrušení letu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dôležité sú hlavne informácie o tom, kedy vás aerolínka informovala, čo ponúkla
                  namiesto pôvodného letu a či ste prijali refundáciu alebo náhradný spoj.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Pri odmietnutí nástupu na palubu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu je obzvlášť dôležitý dôkaz, že ste sa dostavili včas na check-in a boli pripravení
                  nastúpiť. V tejto kategórii býva boarding pass alebo potvrdenie check-inu veľmi silné.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo ak vám niečo chýba
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Chýbajúci dokument ešte nemusí znamenať koniec. Ak nemáte boarding pass, stále môžu
                pomôcť e-maily, rezervácia, potvrdenie check-inu, screenshoty z aplikácie, bankový
                doklad o kúpe letenky alebo komunikácia s aerolinkou.
              </p>
              <p>
                Ideálne je zachovať <strong>čo najviac navzájom sa podporujúcich stôp</strong>, aby sa
                z prípadu dal poskladať uveriteľný obraz aj bez jedného konkrétneho dokumentu.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Dodatočné doklady pri náhrade výdavkov
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "účtenky za jedlo a nápoje",
                "doklad za hotel pri nočnom meškaní",
                "účtenka za taxi alebo inú nevyhnutnú dopravu",
                "doklad o kúpe nového lístka, ak sa rieši aj širšia škoda",
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
                Chcete rýchlo zistiť, či vaše dokumenty stačia?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Najlepšie je najprv rozlíšiť, či ide o meškajúci let, zrušený let alebo kombináciu
                kompenzácie a náhrady výdavkov. Od toho sa odvíja aj to, ktoré doklady sú naozaj
                najdôležitejšie.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_documents_for_claim_final_cta_delay", delayedFlightHref)
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
                        "sk_documents_for_claim_final_cta_cancelled",
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
                  Môžem žiadať odškodnenie bez boarding passu?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak vám chýba práve palubný lístok, tu je hlbšie vysvetlenie, čím sa dá nahradiť.
                </p>
                <Link
                  href="/sk/blog/mozem-ziadat-odskodnenie-bez-boarding-passu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o boarding passe
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete prípad prakticky preveriť a zistiť, ktoré podklady vám ešte chýbajú.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_documents_for_claim_related_home", claimWingerHomeHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Čo robiť, keď aerolínka neodpovedá
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak dokumenty máte, ale problém je skôr v tom, že sa reklamácia nehýbe.
                </p>
                <Link
                  href="/sk/blog/co-robit-ked-aerolinka-neodpoveda"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o neodpovedaní
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
