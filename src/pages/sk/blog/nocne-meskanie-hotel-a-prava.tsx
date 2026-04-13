import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Hotel,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/nocne-meskanie-hotel-a-prava";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=overnight_delay_hotel_rights";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=overnight_delay_hotel_rights";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=overnight_delay_hotel_rights";

const faqItems = [
  {
    question: "Mám pri nočnom meškaní nárok na hotel?",
    answer:
      "Často áno. Ak nový očakávaný odlet vychádza až na nasledujúci deň, aerolinka má spravidla zabezpečiť hotel a dopravu medzi letiskom a ubytovaním, ak je prenocovanie potrebné.",
  },
  {
    question: "Platí hotel aj vtedy, keď kompenzácia nevznikne?",
    answer:
      "Áno. Právo na hotel patrí do starostlivosti o pasažiera a je oddelené od peňažnej kompenzácie. Aj keď kompenzácia nevznikne, starostlivosť môže stále vzniknúť.",
  },
  {
    question: "Čo ak mi aerolinka hotel neponúkne?",
    answer:
      "Ak aerolinka starostlivosť reálne neposkytne, môžete si ju v primeranom rozsahu zabezpečiť sami a žiadať preplatenie. Dôležité je držať náklady rozumné a odložiť si účtenky.",
  },
  {
    question: "Patrí aj transfer medzi letiskom a hotelom?",
    answer:
      "Áno, ak je prenocovanie potrebné, pravidlá hovoria aj o doprave medzi letiskom a miestom ubytovania.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function NocneMeskanieHotelAPravaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Nočné meškanie letu: hotel, starostlivosť a práva pasažiera"
        description="Čo ak sa meškanie letu pretiahne cez noc? Vysvetľujeme, kedy máte nárok na hotel, transfer, jedlo a prečo je právo na starostlivosť oddelené od kompenzácie."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Nočné meškanie letu: hotel, starostlivosť a práva pasažiera",
            description:
              "Praktický sprievodca pre situáciu, keď sa meškanie letu pretiahne cez noc, vrátane hotelu, transferu, jedla a rozdielu medzi starostlivosťou a kompenzáciou.",
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
                name: "Nočné meškanie letu",
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
            <span>Nočné meškanie letu</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
              Edge case content pre overnight delay
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Nočné meškanie letu: hotel, starostlivosť a práva pasažiera
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak sa meškanie letu pretiahne cez noc, najčastejšie sa rieši <strong>hotel</strong>,
              <strong> transfer</strong>, jedlo a komunikácia s aerolinkou. Práve tu je dôležité
              rozlíšiť <strong>právo na starostlivosť</strong> od peňažnej <strong>kompenzácie</strong>,
              pretože nejde o to isté.
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
            <Card className="border-indigo-200 bg-gradient-to-br from-indigo-600 to-blue-700 p-8 text-white shadow-xl dark:border-indigo-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-indigo-50">
                <p>
                  <strong>Áno, pri nočnom meškaní často vzniká nárok na hotel.</strong> Ak nový
                  očakávaný odlet vychádza až na ďalší deň, aerolinka má spravidla zabezpečiť ubytovanie
                  a dopravu medzi letiskom a hotelom.
                </p>
                <p>
                  Toto právo patrí do <strong>starostlivosti o pasažiera</strong> a je oddelené od
                  peňažnej kompenzácie.
                </p>
                <p>
                  Ak aerolinka starostlivosť neposkytne, môžete mať nárok na preplatenie vlastných,
                  primeraných nákladov.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Riešite nočné meškanie a neviete, čo s hotelom?"
            description="ClaimWinger vie rýchlo preveriť, či sa vo vašom prípade rieši len starostlivosť, alebo aj peňažná kompenzácia za dlhé meškanie v konečnej destinácii."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=overnight_delay_hotel_rights"
            ctaLabel="Preveriť meškajúci let s ClaimWinger"
            loadingLabel="Načítava sa formulár pre meškajúci let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger pre meškajúce lety."
            placement="sk_blog_overnight_delay_hotel_rights_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo presne patrí do starostlivosti
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "jedlo a občerstvenie primerane čakaniu",
                "hotelové ubytovanie, ak treba prenocovať",
                "doprava medzi letiskom a hotelom",
                "možnosť komunikácie, napríklad telefonát alebo e-mail",
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
              Kedy býva hotel najjasnejší
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Hotel className="mb-3 h-6 w-6 text-indigo-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Odlet až nasledujúci deň
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Toto je najsilnejší praktický signál, že prenocovanie je potrebné a hotel by mala
                  riešiť aerolinka.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Clock className="mb-3 h-6 w-6 text-indigo-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Dlhé nočné čakanie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste odkázaní čakať cez noc bez rozumnej možnosti pokračovať v ceste, právo na
                  starostlivosť býva veľmi dôležité.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <FileText className="mb-3 h-6 w-6 text-indigo-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Jasný dôkaz o novom čase
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Uložte si všetko, čo ukazuje nový odlet, nové boarding passy, e-maily a časy.
                  Práve to pomáha pri neskoršom preplatení nákladov.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo robiť, ak aerolinka hotel neponúkne
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Držte náklady rozumné
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak si musíte hotel zabezpečiť sami, zvoľte primerané riešenie. Pri preplácaní býva
                  dôležité, aby náklady pôsobili nevyhnutne a rozumne, nie luxusne.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Odložte si účtenky
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Bez účteniek sa vlastné náklady preukazujú oveľa ťažšie. Uložte si hotel, taxi,
                  transfer aj primerané jedlo.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Rozlišujte starostlivosť a kompenzáciu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To, že vám patrí hotel, ešte automaticky neznamená, že vám patrí aj peňažná
                  kompenzácia. Sú to dve rozdielne vrstvy práv.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy sa popri hoteli rieši aj kompenzácia
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Ak sa nočné meškanie zároveň pretaví do <strong>meškania v konečnej destinácii 3 hodiny
                alebo viac</strong>, môže sa popri starostlivosti otvoriť aj téma peňažnej kompenzácie.
              </p>
              <p>
                To však stále závisí od rozsahu <strong>EU261</strong> a od toho, či aerolinka nevie
                preukázať <strong>mimoriadne okolnosti</strong>. Práve preto netreba zamieňať hotel
                s automatickou kompenzáciou.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-indigo-200 bg-indigo-50 p-8 dark:border-indigo-800 dark:bg-indigo-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri nočnom meškaní býva najdôležitejšie rýchlo rozlíšiť, čo patrí do starostlivosti
                a čo môže byť už kompenzácia za dlhé meškanie. ClaimWinger vie preveriť obidve vrstvy.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_overnight_delay_hotel_rights_final_cta_delay",
                        delayedFlightHref
                      )
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
                        "sk_overnight_delay_hotel_rights_final_cta_cancelled",
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
                  Ak chcete rýchlo preveriť, čo z nočného meškania patrí do starostlivosti a čo už do kompenzácie.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_overnight_delay_hotel_rights_related_home",
                      claimWingerHomeHref
                    )
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ako dlho trvá vyplatenie odškodnenia?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak už riešite, čo sa deje po claimovaní a ako dlho môže trvať celý proces.
                </p>
                <Link
                  href="/sk/blog/ako-dlho-trva-vyplatenie-odskodnenia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o výplate
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Čo robiť, keď aerolinka neodpovedá?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak po nočnom meškaní alebo vlastných nákladoch dopravca mlčí.
                </p>
                <Link
                  href="/sk/blog/co-robit-ked-aerolinka-neodpoveda"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o eskalácii
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
