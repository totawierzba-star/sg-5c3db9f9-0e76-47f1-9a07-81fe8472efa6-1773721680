import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Receipt,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/meskanie-nad-5-hodin";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=delay_over_5_hours";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=delay_over_5_hours";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=delay_over_5_hours";

const faqItems = [
  {
    question: "Mám pri meškaní nad 5 hodín automaticky nárok na kompenzáciu?",
    answer:
      "Nie automaticky. Päť hodín je dôležitý prah najmä pre refundáciu, ak sa rozhodnete necestovať. Peňažná kompenzácia sa stále typicky viaže na meškanie pri prílete do konečnej destinácie a ďalšie podmienky EU261.",
  },
  {
    question: "Môžem po 5 hodinách čakania odmietnuť let a žiadať peniaze späť?",
    answer:
      "Často áno. Pri meškaní aspoň 5 hodín pri odlete má aerolinka spravidla vrátiť cenu letenky a pri nadväznej ceste aj zabezpečiť návrat do východiskového bodu, ak už cesta stratila zmysel.",
  },
  {
    question: "Môžem dostať aj refundáciu, aj kompenzáciu?",
    answer:
      "Niekedy áno, ale nie vždy v tej istej praktickej konfigurácii. Refundácia rieši cenu nevyužitej cesty, kým kompenzácia rieši stratu času a nepríjemnosti. Záleží aj na tom, či ste cestu nakoniec absolvovali alebo ju po 5 hodinách vzdali.",
  },
  {
    question: "Čo si mám pri meškaní nad 5 hodín odložiť?",
    answer:
      "Najmä boarding pass, PNR, oznámenie o dĺžke meškania, skutočný čas odletu a príletu a potvrdenie o tom, či ste let nakoniec absolvovali alebo požiadali o refundáciu.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function MeskanieNad5HodinPage() {
  return (
    <LayoutSk>
      <SEO
        title="Meškanie nad 5 hodín: refundácia, kompenzácia a vaše práva"
        description="Čo ak let mešká viac ako 5 hodín? Vysvetľujeme, kedy môžete žiadať refundáciu, ako sa to líši od kompenzácie a čo sa deje pri nadväzných letoch."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Meškanie nad 5 hodín: refundácia, kompenzácia a vaše práva",
            description:
              "Praktický sprievodca pre situáciu, keď let mešká viac ako 5 hodín, vrátane rozdielu medzi refundáciou, starostlivosťou a peňažnou kompenzáciou.",
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
                name: "Meškanie nad 5 hodín",
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
            <span>Meškanie nad 5 hodín</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Edge case content pre long departure delay
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Meškanie nad 5 hodín: refundácia, kompenzácia a vaše práva
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pri meškaní <strong>nad 5 hodín</strong> sa do hry dostáva silné právo na
              <strong> refundáciu</strong>, ale veľa cestujúcich si to pletie s automatickou
              <strong> kompenzáciou</strong>. Tieto dve veci nie sú to isté a pri tomto prahu je
              práve rozdiel medzi nimi najdôležitejší.
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
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-600 to-green-700 p-8 text-white shadow-xl dark:border-emerald-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-emerald-50">
                <p>
                  <strong>Pri meškaní nad 5 hodín môžete často žiadať refundáciu.</strong> Ak už
                  nechcete cestovať, aerolinka má spravidla vrátiť cenu letenky a pri nadväznej ceste
                  aj zabezpečiť návrat do východiskového bodu, ak cesta stratila zmysel.
                </p>
                <p>
                  To však <strong>nie je automaticky to isté</strong> ako peňažná kompenzácia. Tá sa
                  zvyčajne stále viaže na pravidlo <strong>3+ hodiny pri prílete do konečnej destinácie</strong>
                  a ďalšie podmienky EU261.
                </p>
                <p>
                  Pri 5 hodinách sa teda najskôr pozerá na to, či <strong>pokračujete v ceste</strong>,
                  alebo sa rozhodnete <strong>necestovať a žiadať peniaze späť</strong>.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Let mešká viac ako 5 hodín a neviete, či čakať alebo žiadať refundáciu?"
            description="ClaimWinger vie rýchlo rozlíšiť, či sa vo vašom prípade hrá hlavne o refundáciu nevyužitej cesty, alebo aj o samostatnú peňažnú kompenzáciu za meškanie."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=delay_over_5_hours"
            ctaLabel="Preveriť meškanie nad 5 hodín"
            loadingLabel="Načítava sa formulár pre meškajúci let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger pre dlhé meškania."
            placement="sk_blog_delay_over_5_hours_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo presne znamená hranica 5 hodín
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Receipt className="mb-3 h-6 w-6 text-emerald-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Silnejšia refundácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri veľmi dlhom meškaní na odlete už nejde len o starostlivosť. Ak sa rozhodnete
                  necestovať, vzniká silná logika na vrátenie ceny letenky.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <CheckCircle2 className="mb-3 h-6 w-6 text-emerald-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Nie automatická kompenzácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Päť hodín samo osebe nefunguje ako nový „magický próg“ pre peniaze navyše. Pre
                  kompenzáciu je stále dôležitý najmä výsledok v konečnej destinácii.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <AlertCircle className="mb-3 h-6 w-6 text-emerald-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Rozhodnutie treba urobiť vedome
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri 5 hodinách sa oplatí jasno si povedať, či ešte chcete let absolvovať, alebo už
                  cesta stratila zmysel a je lepšie ísť cestou refundácie.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy môžete po 5 hodinách žiadať refundáciu
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Ak sa rozhodnete necestovať
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri meškaní aspoň 5 hodín pri odlete môže mať pokračovanie cesty pre vás už malý
                  zmysel. Vtedy je najsilnejší argument pre refundáciu nevyužitej letenky.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Ak máte nadväznú cestu na jednej rezervácii
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste už uviazli v trase s prestupom a cesta stratila pôvodný účel, môže sa riešiť
                  aj návrat do východiskového bodu pri najbližšej príležitosti.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Ak aerolinka nezabezpečila rozumné riešenie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Veľmi dlhé čakanie bez jasného a použiteľného riešenia často vedie k tomu, že pre
                  pasažiera prestáva mať pokračovanie v ceste praktický zmysel.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy sa stále môže hrať aj o kompenzáciu
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Ak ste nakoniec leteli
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste cestu napriek veľkému meškaniu absolvovali a do konečnej destinácie prišli
                  o 3 hodiny alebo viac neskôr, kompenzácia môže byť stále aktuálna téma.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Ak sa na let vzťahuje EU261
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nestačí samotná dĺžka čakania. Let musí spadať do rozsahu pravidiel EÚ a aerolinka
                  nesmie preukázať mimoriadne okolnosti.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Ak nejde len o odlet, ale o prílet do cieľa
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri kompenzácii je stále kľúčové, čo sa stalo v konečnej destinácii, nie len to,
                  že ste na prvom letisku čakali veľmi dlho.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo si odložiť a čo riešiť hneď
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "boarding pass a PNR",
                "screenshot alebo e-mail s novým odhadom odletu",
                "doklad, že meškanie prekročilo 5 hodín",
                "potvrdenie, či ste let nakoniec absolvovali alebo nie",
                "nový itinerár, ak vás presmerovali",
                "účtenky za primerané náklady, ak aerolinka neposkytla starostlivosť",
              ].map((item) => (
                <Card key={item} className="border-slate-200 p-4 dark:border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">
              Ak už teraz viete, že ide skôr o dlhé meškanie než o čisté zrušenie, najpraktickejšie
              je preveriť situáciu vo{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimClick(
                    "sk_delay_over_5_hours_inline_delay",
                    delayedFlightHref
                  )
                }
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                formulári ClaimWinger pre meškajúce lety
              </a>
              . Ak sa prípad medzičasom zmenil na zrušený let alebo nový itinerár, pomôže aj{" "}
              <a
                href={cancelledFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimClick(
                    "sk_delay_over_5_hours_inline_cancelled",
                    cancelledFlightHref
                  )
                }
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                formulár ClaimWinger pre zrušené lety
              </a>
              .
            </p>
          </section>

          <section className="mb-12">
            <Card className="border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-800 dark:bg-emerald-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri meškaní nad 5 hodín býva najťažšie rozhodnúť, či ešte čakať, alebo už ísť cestou
                refundácie. ClaimWinger vie rýchlo poskladať, či sa vo vašom prípade rieši najmä
                vrátenie peňazí za cestu, alebo aj samostatná kompenzácia.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_delay_over_5_hours_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Preveriť meškanie nad 5 hodín
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_delay_over_5_hours_final_cta_home",
                        claimWingerHomeHref
                      )
                    }
                  >
                    Otvoriť ClaimWinger Slovensko
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
                  Koľko hodín meškania je potrebných na odškodnenie?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Širší kontext 3-hodinového pravidla, starostlivosti a základov EU261.
                </p>
                <Link
                  href="/sk/blog/kolko-hodin-meskania-je-potrebnych-na-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na širší článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Nočné meškanie letu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak sa 5-hodinové čakanie pretiahlo cez noc a riešite hotel alebo transfer.
                </p>
                <Link
                  href="/sk/blog/nocne-meskanie-hotel-a-prava"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o hoteli
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete preveriť, či sa vo vašom prípade viac rieši refundácia, alebo aj peňažná kompenzácia.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_delay_over_5_hours_related_home",
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
