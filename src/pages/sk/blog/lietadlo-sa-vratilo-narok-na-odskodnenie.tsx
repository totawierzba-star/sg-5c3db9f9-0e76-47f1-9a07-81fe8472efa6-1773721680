import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Plane,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/lietadlo-sa-vratilo-narok-na-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=returned_to_departure_airport";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=returned_to_departure_airport";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=returned_to_departure_airport";

const faqItems = [
  {
    question: "Ak sa lietadlo po štarte vrátilo na letisko odletu, ide automaticky o zrušený let?",
    answer:
      "Nie vždy automaticky v každej technickej podobe, ale ak sa lietadlo po vzlete vráti na letisko odletu a pasažieri sú presunutí na iný let, pravidlá EÚ takú situáciu spravidla posudzujú ako zrušenie letu.",
  },
  {
    question: "Vzniká pri návrate lietadla nárok na kompenzáciu?",
    answer:
      "Často áno, ale stále treba skontrolovať dôvod návratu, čas príchodu do konečnej destinácie a to, či aerolinka nepreukáže mimoriadne okolnosti. Samotný návrat ešte neznamená automatickú výplatu peňazí.",
  },
  {
    question: "Je dôležité, či som bol presunutý na iný let alebo som pokračoval neskôr tým istým lietadlom?",
    answer:
      "Áno. Ak vás presunuli na iný let, situácia silno smeruje k zrušeniu letu. Ak sa let po návrate obnovil neskôr, treba sa pozerať presnejšie na to, či ide skôr o zrušenie alebo o veľké meškanie.",
  },
  {
    question: "Čo si mám odložiť ako dôkaz?",
    answer:
      "Najmä pôvodný itinerár, oznámenie o návrate lietadla, nový itinerár alebo boarding pass na náhradný let a skutočný čas príchodu do konečnej destinácie.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LietadloSaVratiloNarokNaOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Lietadlo sa vrátilo: kedy vzniká nárok na odškodnenie?"
        description="Čo ak lietadlo po štarte pristálo späť na letisku odletu? Vysvetľujeme, kedy sa situácia posudzuje ako zrušenie letu, kedy sa rieši meškanie a čo rozhoduje pri nároku na kompenzáciu."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Lietadlo sa vrátilo: kedy vzniká nárok na odškodnenie?",
            description:
              "Praktický sprievodca situáciou, keď sa lietadlo po vzlete vráti na letisko odletu, vrátane rozdielu medzi zrušením letu a veľkým meškaním.",
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
                name: "Lietadlo sa vrátilo",
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
            <span>Lietadlo sa vrátilo</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
              Edge case content pre return to departure airport
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Lietadlo sa vrátilo: kedy vzniká nárok na odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak lietadlo po štarte <strong>pristálo späť na letisku odletu</strong>, veľa pasažierov
              netuší, či ide o <strong>zrušený let</strong>, veľké <strong>meškanie</strong> alebo len
              o technický detail bez významu. Práve v takýchto prípadoch rozhoduje, čo sa stalo potom:
              či vás presunuli na iný let, kedy ste sa dostali do cieľa a aký dôvod návratu aerolinka uvádza.
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
            <Card className="border-teal-200 bg-gradient-to-br from-teal-600 to-cyan-700 p-8 text-white shadow-xl dark:border-teal-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-teal-50">
                <p>
                  <strong>Často môže ísť o zrušený let.</strong> Oficiálne pravidlá EÚ výslovne
                  rátajú s tým, že ak lietadlo vzlietne, vráti sa na letisko odletu a pasažieri sú
                  presunutí na iný let, situácia sa spravidla posudzuje ako zrušenie letu.
                </p>
                <p>
                  To ale ešte neznamená automatickú kompenzáciu. Stále treba preveriť
                  <strong> dôvod návratu</strong>, prípadné <strong>mimoriadne okolnosti</strong>
                  a výsledný príchod do <strong>konečnej destinácie</strong>.
                </p>
                <p>
                  Ak sa let po návrate obnovil neskôr bez presunu na iný let, prípad môže vyzerať
                  skôr ako veľmi veľké meškanie než čisté zrušenie.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Vrátilo sa lietadlo po štarte späť na letisko odletu?"
            description="ClaimWinger vie rýchlo rozlíšiť, či sa váš prípad posudzuje skôr ako zrušený let alebo ako veľké meškanie, a či sa hrá o refundáciu, presmerovanie alebo aj peňažnú kompenzáciu."
            ctaHref="https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=returned_to_departure_airport"
            ctaLabel="Preveriť prípad s ClaimWinger"
            loadingLabel="Načítava sa formulár pre zrušený let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger pre zrušené a problematické lety."
            placement="sk_blog_returned_to_departure_airport_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy sa návrat lietadla spravidla berie ako zrušenie letu
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Plane className="mb-3 h-6 w-6 text-teal-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lietadlo už reálne vzlietlo
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nejde o obyčajné meškanie ešte pred odletom. Let sa už začal a potom bol prerušený
                  návratom na letisko odletu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <CheckCircle2 className="mb-3 h-6 w-6 text-teal-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Pasažieri boli presunutí na iný let
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To je najdôležitejší praktický znak. Práve takýto scenár pravidlá EÚ výslovne
                  uvádzajú ako typický príklad zrušeného letu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <AlertCircle className="mb-3 h-6 w-6 text-teal-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Rozhoduje konečný výsledok cesty
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj keď lietadlo pristálo späť, pre nárok je stále dôležité, kedy a ako ste sa
                  dostali do konečnej destinácie po novom riešení od aerolinky.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy môže situácia vyzerať skôr ako veľké meškanie
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Let sa po návrate znovu obnovil
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa po návrate na letisko odletu let neskôr obnovil a do cieľa ste pokračovali
                  bez presunu na iný samostatný let, prípad nemusí byť taký čistý ako klasické zrušenie.
                  Vtedy býva bezpečnejšie hodnotiť aj možnosť veľkého meškania.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Aerolinka len zmenila čas pokračovania
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste neboli presunutí na nový let, ale skôr ste čakali na opravu, novú posádku
                  alebo nové sloty, môže byť dôležitejšie pozerať sa na skutočný čas príletu do cieľa.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy býva prípad najsilnejší
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "lietadlo sa po vzlete vrátilo na letisko odletu",
                "aerolinka vás následne presunula na iný let",
                "do konečnej destinácie ste prišli výrazne neskôr",
                "máte e-mail, aplikáciu alebo oznámenie o novom itinerári",
                "na prípad sa vzťahuje EU261",
                "aerolinka nepreukáže skutočné mimoriadne okolnosti",
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
              Čo sa pri takomto prípade rieši popri kompenzácii
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Refundácia alebo nový let
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak šlo v praxi o zrušenie letu, zvyčajne sa rieši aj voľba medzi refundáciou a
                  presmerovaním do cieľa.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Starostlivosť na letisku
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri dlhom čakaní môže vzniknúť aj právo na jedlo, komunikáciu, hotel alebo
                  primerané preplatenie vlastných nákladov.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Návrat lietadla môže súvisieť s technickým problémom, bezpečnosťou alebo iným
                  incidentom. Práve tu sa často láme otázka, či kompenzácia ostane alebo nie.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-teal-200 bg-teal-50 p-8 dark:border-teal-800 dark:bg-teal-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri návrate lietadla na letisko odletu býva rozhodujúce, či ste pokračovali tým istým
                letom, alebo vás aerolinka presunula na nový spoj. ClaimWinger vie rýchlo rozlíšiť,
                či sa váš prípad bližšie podobá na zrušenie letu alebo na veľké meškanie.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_returned_to_departure_airport_final_cta_cancelled",
                        cancelledFlightHref
                      )
                    }
                  >
                    Preveriť prípad po návrate lietadla
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
                        "sk_returned_to_departure_airport_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Riešim skôr meškanie
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
                  Presmerovaný let: aké máte práva?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak vás po návrate lietadla presunuli na iný spoj a riešite refundáciu, rerouting aj kompenzáciu.
                </p>
                <Link
                  href="/sk/blog/presmerovany-let-prava"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o presmerovaní
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Koľko dostanem za zrušený let?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete nadviazať na základné sumy 250 €, 400 € a 600 € pri zrušení letu.
                </p>
                <Link
                  href="/sk/blog/kolko-dostanem-za-zruseny-let"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o sumách
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete preveriť konkrétny itinerár, nový let a skutočný príchod do konečnej destinácie.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_returned_to_departure_airport_related_home",
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
