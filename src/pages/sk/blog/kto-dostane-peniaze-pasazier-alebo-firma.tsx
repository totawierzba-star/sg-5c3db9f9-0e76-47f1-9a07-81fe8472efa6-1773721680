import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/kto-dostane-peniaze-pasazier-alebo-firma";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=passenger_or_company";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=passenger_or_company";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=passenger_or_company";

const faqItems = [
  {
    question: "Kto dostane peniaze – pasažier alebo firma?",
    answer:
      "Pri kompenzácii podľa EU261 je východiskový bod ten, že ide o právo pasažiera. Pri refundácii ceny letenky však môže byť situácia iná, pretože tam zohráva úlohu aj to, kto letenku skutočne zaplatil.",
  },
  {
    question: "Ak služobný let platila firma, patrí kompenzácia zamestnancovi?",
    answer:
      "Vo väčšine praktických situácií sa kompenzácia chápe ako osobné právo cestujúceho za stratu času a nepríjemnosti. Otázka, či ju má zamestnanec interne odovzdať firme, už môže závisieť od pracovných alebo interných pravidiel firmy.",
  },
  {
    question: "A čo refundácia ceny letenky?",
    answer:
      "Refundácia rieši cenu letenky. Ak náklady znášala firma, v praxi býva logické, že refundácia patrí skôr tomu, kto letenku financoval, nie automaticky samotnému pasažierovi.",
  },
  {
    question: "Môže firma žiadať kompenzáciu namiesto pasažiera?",
    answer:
      "Sama od seba nie automaticky len preto, že platila letenku. Pri kompenzácii podľa EU261 je kľúčovou osobou cestujúci, hoci v praxi môže existovať postúpenie nároku alebo interná dohoda.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function KtoDostanePeniazePasazierAleboFirmaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Kto dostane peniaze – pasažier alebo firma? Kompenzácia a refundácia nie sú to isté"
        description="Kto má dostať peniaze za problém s letom, ak letenku platila firma? Vysvetľujeme rozdiel medzi kompenzáciou podľa EU261 a refundáciou ceny letenky."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Kto dostane peniaze – pasažier alebo firma?",
            description:
              "Praktické vysvetlenie, komu typicky patrí kompenzácia za let a komu skôr refundácia ceny letenky, keď cestu financovala firma.",
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
                name: "Kto dostane peniaze – pasažier alebo firma?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Kto dostane peniaze – pasažier alebo firma?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
              Praktická odpoveď pre služobné a firemné cesty
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Kto dostane peniaze – pasažier alebo firma?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najkratšia odpoveď je: pri kompenzácii podľa EU261 zvyčajne pasažier, pri refundácii
              ceny letenky často ten, kto cestu zaplatil. To však treba čítať presne, lebo
              kompenzácia a refundácia nie sú rovnaké peniaze.
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
            <Card className="border-teal-200 bg-gradient-to-br from-teal-600 to-cyan-700 p-8 text-white shadow-xl dark:border-teal-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-teal-50">
                <p>
                  <strong>Kompenzácia podľa EU261 je východiskovo právom pasažiera.</strong>
                </p>
                <p>
                  <strong>Refundácia ceny letenky</strong> je iná vec a tam už v praxi silno záleží
                  na tom, kto letenku kúpil a znášal náklad.
                </p>
                <p>
                  Ak šlo o služobný let, často vzniká zmiešaná situácia: pasažier má osobný nárok na
                  kompenzáciu za nepríjemnosti, ale firma môže mať ekonomický záujem na refundácii
                  ceny letenky.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Neviete, či peniaze patria vám alebo firme?"
            description="Ak išlo o služobný let alebo letenku kupovala firma, ClaimWinger vie pomôcť rozlíšiť, či riešite osobnú kompenzáciu pasažiera alebo refundáciu nákladov na cestu."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=passenger_or_company"
            ctaLabel="Preveriť firemný alebo služobný let"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_passenger_or_company_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kompenzácia a refundácia nie sú to isté
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Kompenzácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ide o peňažné odškodnenie za stratu času a nepríjemnosti pri meškaní, zrušení alebo
                  odmietnutí nástupu na palubu. Oficiálne zdroje EÚ hovoria o tom, že toto právo patrí
                  pasažierovi.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Refundácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ide o vrátenie ceny letenky alebo časti cestovného. Tu je logické pýtať sa, kto
                  letenku zaplatil a komu vznikla finančná strata z nevyužitej služby.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo z toho vyplýva pri firemnej ceste
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Oficiálne zdroje EÚ opisujú kompenzáciu ako právo <strong>pasažiera</strong>, teda osoby,
                ktorá cestovala a znášala nepríjemnosti spojené s problémom letu. Z toho vyplýva silná
                praktická pozícia pre záver, že <strong>kompenzácia je osobný nárok cestujúceho</strong>.
              </p>
              <p>
                Zároveň je však fér povedať, že otázka „komu peniaze nakoniec ekonomicky patria“ môže
                mať pri firemných cestách aj interný rozmer. Firma môže mať v pracovných pravidlách
                nastavené, čo sa deje s náhradami z cesty. To už ale nie je samotná logika EU261,
                ale interný vzťah medzi firmou a zamestnancom.
              </p>
              <p>
                <strong>To je dôležitá inferencia zo zdrojov:</strong> právo podľa EU261 je postavené
                okolo pasažiera, no pri refundácii a firemných politikách sa môže ekonomický výsledok
                líšiť.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické scenáre
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  1. Firma zaplatila služobnú letenku, let meškal 4 hodiny
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najčastejšia praktická odpoveď je: kompenzácia smeruje k pasažierovi, lebo to on bol
                  zasiahnutý problémom letu. Otázka, či ju má interne odovzdať firme, závisí od
                  pracovných pravidiel alebo dohody.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  2. Firma zaplatila letenku a let bol zrušený, cesta sa vôbec neuskutočnila
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Refundácia ceny letenky býva logicky bližšie tomu, kto znášal náklad na letenku. Ak
                  ju uhradila firma, ekonomická logika refundácie smeruje skôr k firme než k zamestnancovi.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  3. Cestu platila iná osoba, ale letel som ja
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri kompenzácii ostáva veľmi silný argument, že ide o právo pasažiera. Pri refundácii
                  sa však opäť treba pozrieť na to, kto skutočne niesol cenu letenky.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo si skontrolovať pri služobnom lete
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "kto letenku skutočne platil",
                "či riešite kompenzáciu alebo refundáciu",
                "či firma má interné pravidlá k cestovným náhradám",
                "na koho meno bola rezervácia vystavená",
                "či už bola refundácia letenky niekomu vyplatená",
                "či sa prípad týka meškania, zrušenia alebo odmietnutia nástupu na palubu",
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
              Praktické pravidlo, ktoré funguje najčastejšie
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-green-200 p-6 dark:border-green-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Kompenzácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Vychádzajte z toho, že patrí pasažierovi ako osobe, ktorá znášala meškanie,
                  zrušenie alebo odmietnutie nástupu na palubu.
                </p>
              </Card>
              <Card className="border-blue-200 p-6 dark:border-blue-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Refundácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Vychádzajte z toho, že ide o návrat ceny letenky tam, kde vznikol samotný náklad,
                  teda často k firme alebo osobe, ktorá cestu financovala.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Firemný alebo služobný let a neviete, kto má riešiť claim?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                To je veľmi bežná situácia. Najmä keď sa mieša kompenzácia, refundácia a interné
                firemné pravidlá, je lepšie najprv roztriediť, čo presne chcete žiadať.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_passenger_or_company_final_cta_primary", claimWingerHomeHref)
                    }
                  >
                    Preveriť firemný let
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
                        "sk_passenger_or_company_final_cta_secondary",
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
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Oplatí sa použiť firmu na odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak riešite aj to, či claim podať sami alebo cez partnera, ďalší krok bude porovnávací
                  a rozhodovací content.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_passenger_or_company_related_home", claimWingerHomeHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Pozrieť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Voucher, refundácia a kompenzácia
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa v prípade mieša aj poukaz od aerolinky, dôležité je najprv odlíšiť, o ktorý
                  typ peňazí vôbec ide.
                </p>
                <Link
                  href="/sk/blog/mozem-ziadat-odskodnenie-ak-som-prijal-voucher"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o voucheri
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Meškajúci let na služobnej ceste
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak bol problém skôr v dlhom meškaní než v refundácii letenky, užitočný je rýchly
                  check konkrétne pre delayed flight.
                </p>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_passenger_or_company_related_delay", delayedFlightHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger pre meškajúci let
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
