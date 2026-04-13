import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/mozem-ziadat-odskodnenie-bez-boarding-passu";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=no_boarding_pass";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=no_boarding_pass";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=no_boarding_pass";

const faqItems = [
  {
    question: "Môžem žiadať odškodnenie bez boarding passu?",
    answer:
      "Vo veľa prípadoch áno. Boarding pass je užitočný dôkaz, ale nie je jediný. Dôležité je vedieť preukázať rezerváciu a, pri meškaní alebo odmietnutí nástupu na palubu, aj to, že ste sa na check-in dostavili včas.",
  },
  {
    question: "Čo môžem použiť namiesto boarding passu?",
    answer:
      "Najčastejšie pomôže potvrdenie rezervácie, PNR, e-ticket, emaily od aerolinky, screenshot z aplikácie, potvrdenie check-inu, batožinový štítok alebo doklad o platbe.",
  },
  {
    question: "Je bez boarding passu ľahšie riešiť zrušený let ako meškanie?",
    answer:
      "Zvyčajne áno. Pri zrušenom lete je často jednoduchšie preukázať rezerváciu a samotné zrušenie. Pri meškaní alebo odmietnutí nástupu na palubu je dôležitejšie doložiť aj to, že ste boli pripravení na odlet a dostavili ste sa na check-in.",
  },
  {
    question: "Znamená strata boarding passu automaticky koniec nároku?",
    answer:
      "Nie. Nárok automaticky nekončí, ale prípad sa môže stať dôkazne náročnejší. Práve preto je dobré čo najskôr poskladať náhradné dôkazy a neposielať reklamáciu len s holým tvrdením.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function MozemZiadatOdskodnenieBezBoardingPassuPage() {
  return (
    <LayoutSk>
      <SEO
        title="Môžem žiadať odškodnenie bez boarding passu? Áno, ale treba iné dôkazy"
        description="Dá sa žiadať odškodnenie bez boarding passu? Vysvetľujeme, čo je podľa EU261 dôležitejšie ako samotný boarding pass a aké dokumenty môžu chýbajúci doklad nahradiť."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Môžem žiadať odškodnenie bez boarding passu?",
            description:
              "Praktický návod, ako riešiť kompenzáciu bez boarding passu a ktoré dokumenty môžu nahradiť stratený palubný lístok.",
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
                name: "Môžem žiadať odškodnenie bez boarding passu?",
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
            <span>Môžem žiadať odškodnenie bez boarding passu?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              Praktický sprievodca pre chýbajúce doklady
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Môžem žiadať odškodnenie bez boarding passu?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Áno, často sa to dá. Boarding pass je silný dôkaz, ale nie je to jediný dokument,
              na ktorom celý nárok stojí. Dôležité je vedieť preukázať rezerváciu a, pri meškaní
              alebo odmietnutí nástupu na palubu, aj to, že ste sa na check-in dostavili včas.
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
                  <strong>Áno, vo veľa prípadoch môžete žiadať odškodnenie aj bez boarding passu.</strong>
                </p>
                <p>
                  Podľa pravidiel EU261 je kľúčové najmä to, že ste mali <strong>potvrdenú rezerváciu</strong>.
                  Pri meškaní a odmietnutí nástupu na palubu je navyše dôležité vedieť doložiť, že ste sa
                  <strong> dostavili na check-in včas</strong>.
                </p>
                <p>
                  Boarding pass je teda veľmi užitočný dôkaz, ale nie je to jediná cesta, ako prípad
                  postaviť.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Nemáte boarding pass? Overte si prípad cez ClaimWinger Slovensko"
            description="Ak vám chýba palubný lístok, no máte rezerváciu, emaily od aerolinky alebo potvrdenie check-inu, ClaimWinger vie posúdiť, či je prípad stále dôkazne dostatočný."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=no_boarding_pass"
            ctaLabel="Otvoriť formulár ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_no_boarding_pass_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo je dôležitejšie než samotný boarding pass
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Z oficiálnych pravidiel EU261 vyplýva, že základom je <strong>potvrdená rezervácia</strong>.
                Pri väčšine problémov navyše musíte vedieť doložiť, že ste sa na let dostavili
                včas na check-in. Samotné nariadenie nehovorí, že jediným prípustným dôkazom musí
                byť práve boarding pass.
              </p>
              <p>
                To je dobrá správa najmä v prípadoch, keď ste palubný lístok stratili, aplikácia
                ho po lete už nezobrazuje alebo ste ho nikdy nestiahli. Zlá správa je len to, že
                prípad sa môže stať <strong>dôkazne náročnejší</strong> a treba ho postaviť z viacerých
                podkladov.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Aké doklady môžu boarding pass nahradiť
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "potvrdenie rezervácie alebo PNR",
                "e-ticket alebo itinerary z emailu",
                "potvrdenie online check-inu",
                "screenshot z aplikácie aerolinky",
                "batožinový štítok alebo potvrdenie o odovzdaní batožiny",
                "správy od aerolinky o meškaní, zrušení alebo zmene letu",
                "doklad o platbe za letenku",
                "história rezervácie z klientskeho účtu alebo vernostného programu",
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
              Pri ktorých typoch prípadov je boarding pass najdôležitejší
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Zrušený let
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Zvyčajne býva najjednoduchší aj bez boarding passu, lebo dôležité je hlavne
                  preukázať rezerváciu a samotné zrušenie letu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Meškanie letu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu už býva dôležitejšie ukázať, že ste boli pripravení odletieť. Preto veľmi
                  pomáha check-in potvrdenie alebo aspoň silný dôkaz rezervácie a účasti na ceste.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Denied boarding
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu je dôkaz o včasnom dostavení sa na check-in obzvlášť dôležitý. Bez neho môže
                  aerolinka tvrdiť, že problém vznikol na strane cestujúceho.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Praktický postup, ak boarding pass nemáte
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  1. Nájdite potvrdenie rezervácie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Začnite od PNR, emailu o kúpe a itinerary. To je základ celého prípadu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  2. Pohľadajte dôkaz check-inu alebo účasti na ceste
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pomôcť vie screenshot z aplikácie, email o online check-ine, batožinový štítok
                  alebo komunikácia s aerolinkou z dňa odletu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  3. Nespoliehajte sa na jeden dôkaz
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Keď jeden dokument chýba, pomáha poslať viac menších dôkazov naraz, nie čakať na
                  zázrak z jednej prílohy.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  4. Čím skôr prípad poskladáte, tým lepšie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aerolinky a aplikácie niekedy staré boarding passy alebo check-in obrazovky
                  postupne mažú. Preto sa oplatí všetko vytiahnuť čo najskôr.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy môže byť prípad aj bez boarding passu slabší
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Chýba aj rezervácia aj check-in dôkaz
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak neviete doložiť ani PNR, ani potvrdenie rezervácie, ani žiadny dôkaz o tom, že
                  ste sa na let reálne chystali, prípad sa oslabuje výraznejšie.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Spor o to, či ste prišli včas na letisko
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To býva problém hlavne pri odmietnutí nástupu na palubu alebo keď aerolinka naznačuje, že
                  cestujúci nestihol check-in. Vtedy treba skladať čo najviac podporných dôkazov.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chýba vám boarding pass, ale máte rezerváciu alebo emaily od aerolinky?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                To ešte vôbec nemusí znamenať koniec nároku. Ak chcete rýchlo zistiť, či je dôkazný
                balík stále dosť silný, môžete prípad preveriť cez ClaimWinger Slovensko.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_no_boarding_pass_final_cta_primary", claimWingerHomeHref)
                    }
                  >
                    Overiť môj prípad
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_no_boarding_pass_final_cta_secondary", delayedFlightHref)
                    }
                  >
                    Riešim skôr meškajúci let
                  </a>
                </Button>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Súvisiace prípady
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Meškajúci let
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak vám chýba boarding pass a riešite meškanie, pozrite si aj náš článok o tom,
                  koľko hodín meškania treba na kompenzáciu.
                </p>
                <Link
                  href="/sk/blog/kolko-hodin-meskania-je-potrebnych-na-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o meškaní
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Zrušený let
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri zrušenom lete býva boarding pass menej kritický než pri odmietnutí nástupu na palubu, ale
                  stále je dobré mať email o zrušení a detaily rezervácie.
                </p>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_no_boarding_pass_related_cancelled", cancelledFlightHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Preveriť zrušený let v ClaimWingeri
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
