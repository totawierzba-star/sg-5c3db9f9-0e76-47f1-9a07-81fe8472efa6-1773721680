import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/ako-podat-reklamaciu-wizz-air-krok-za-krokom";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=wizzair_procedure";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=wizzair_procedure";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=wizzair_procedure";

const faqItems = [
  {
    question: "Cez aký kanál podať reklamáciu Wizz Air?",
    answer:
      "Najúčinnejší je oficiálny formulár EU261 Claim na wizzair.com v sekcii Help Centre / Contact Us. Alternatívou je e-mail customer.relations@wizzair.com alebo chat v aplikácii – ten však nie je právne najpreukaznejší.",
  },
  {
    question: "Koľko trvá odpoveď Wizz Air?",
    answer:
      "Oficiálne 30 dní, v praxi často 4 – 8 týždňov. Pri komplikovaných prípadoch (mimoriadne okolnosti, prestup, codeshare) aj 2 – 3 mesiace. Pri mlčaní nad 30 dní posielajte urgenciu.",
  },
  {
    question: "Čo ak Wizz Air odmietne reklamáciu?",
    answer:
      "Máte tri možnosti: (1) odvolanie na ich customer care s dodatočnými argumentmi a dôkazmi, (2) sťažnosť na národného regulátora (Maďarsko – KNYH pre Wizz Air Hungary), (3) odovzdanie prípadu špecializovanej firme s právnou cestou.",
  },
  {
    question: "Wizz Air ponúka vouchery 20 % bonus – prijať?",
    answer:
      "Opatrne. Voucher je platný obmedzený čas, len s Wizz Air a s obmedzenými destináciami. EU261 vám dáva právo na hotovosť – ak neodsúhlasíte voucher písomne, nemusíte ho prijať. Pri kompenzácii 250 € často radšej vezmite peniaze.",
  },
  {
    question: "Je dôležité, či let operuje Wizz Air Hungary, Malta alebo UK?",
    answer:
      "Áno pri identifikácii správneho regulátora. Wizz Air skupina má tri AOC (Maďarsko, Malta, UK). Reklamáciu posielate skupine cez jednotný systém, ale pri eskalácii treba vedieť, ktorý subjekt let operoval.",
  },
  {
    question: "Dá sa niečo stihnúť v mobilnej aplikácii?",
    answer:
      "V aplikácii môžete podať jednoduchú reklamáciu alebo chat, ale pre EU261 je lepšie formálne podanie cez webformulár. Uložte si všetky screeny a ID tiketu.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AkoPodatReklamaciuWizzAirKrokZaKrokomPage() {
  return (
    <LayoutSk>
      <SEO
        title="Reklamácia Wizz Air krok za krokom: formulár EU261 + tipy"
        description="Podrobný návod na podanie reklamácie Wizz Air za meškanie alebo zrušenie letu. Vzor textu, odkazy na oficiálny formulár a tipy, ako sa vyhnúť bežným chybám."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ako podať reklamáciu Wizz Air krok za krokom",
            description:
              "Praktický návod krok za krokom na podanie EU261 reklamácie u Wizz Air vrátane odkazov na oficiálny formulár a tipov.",
            mainEntityOfPage: articleUrl,
            datePublished: "2026-04-24",
            dateModified: "2026-04-24",
            author: { "@type": "Organization", name: "problemlot.com" },
            publisher: {
              "@type": "Organization",
              name: "problemlot.com",
              logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" },
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
              acceptedAnswer: { "@type": "Answer", text: item.answer },
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
              { "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Reklamácia Wizz Air krok za krokom",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Reklamácia Wizz Air krok za krokom</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700 dark:bg-pink-900/30 dark:text-pink-300">
              Návod krok za krokom
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ako podať reklamáciu Wizz Air krok za krokom (EU261)
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Wizz Air je najčastejšia low-cost aerolinka pre slovenských cestujúcich a zároveň jedna
              z tých, ktoré odmietajú najviac prvých reklamácií. Dobre pripravená EU261 reklamácia
              však má vysokú úspešnosť. V tomto článku nájdete{" "}
              <strong>detailný návod krok za krokom</strong>, vzor textu a odkazy na oficiálny
              formulár. Ak nechcete riešiť papierovanie, odovzdajte prípad cez{" "}
              <a
                href={claimWingerHomeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_wizzair_proc_intro", claimWingerHomeHref)}
              >
                ClaimWinger Slovensko
              </a>
              .
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 24. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 10 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-pink-200 bg-gradient-to-br from-pink-600 to-rose-700 p-8 text-white shadow-xl dark:border-pink-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-pink-50">
                <p>
                  Použite <strong>oficiálny EU261 Claim Form</strong> na wizzair.com/en-gb/help – nie
                  chat ani telefón.
                </p>
                <p>
                  V podaní uveďte: PNR, číslo letu, dátum, meškanie v hodinách a minútach, odkaz na
                  článok 7 EU261, vyčíslenú sumu a IBAN.
                </p>
                <p>
                  Odpoveď čakajte do 30 dní. Pri mlčaní posielajte urgenciu, pri zamietnutí
                  eskalujte.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Wizz Air zamietol vašu reklamáciu?"
            description="ClaimWinger má úspešnosť nad 90 % pri Wizz Air prípadoch vďaka znalosti typických argumentov a pravidelnej komunikácii s customer care. Preverenie zdarma."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=wizzair_procedure"
            ctaLabel="Odovzdať Wizz Air reklamáciu"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_wizzair_procedure_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 1 – Pripravte si dokumentáciu
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "číslo rezervácie (PNR) – 6-znakový kód",
                "číslo letu (W6 + číslice)",
                "dátum plánovaného odletu a príletu",
                "skutočný čas odletu a príletu (otvorenie dverí)",
                "e-maily a SMS od Wizz Air s časmi doručenia",
                "fotografie odletovej tabule / gate zóny",
                "boarding pass alebo check-in potvrdenie",
                "účtenky za výdavky počas meškania",
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
              Krok 2 – Vyplňte oficiálny EU261 Claim Form
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>Postupujte takto:</p>
              <ol>
                <li>
                  Otvorte <strong>wizzair.com/en-gb/help</strong> → sekcia{" "}
                  <strong>Claims &amp; Compensation</strong> → <strong>EU261 Compensation Form</strong>.
                </li>
                <li>Zadajte PNR a priezvisko hlavného cestujúceho.</li>
                <li>
                  Vyberte typ incidentu: <em>Flight delay</em>, <em>Cancellation</em> alebo{" "}
                  <em>Denied boarding</em>.
                </li>
                <li>
                  V opise uveďte: Claim for compensation under Article 7 of Regulation (EC) 261/2004
                  + stručný priebeh.
                </li>
                <li>Pridajte prílohy (boarding pass, e-maily, účtenky, foto tabule).</li>
                <li>Uveďte IBAN pre prevod kompenzácie.</li>
                <li>Odošlite a uložte si ID tiketu z potvrdzovacieho e-mailu.</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 3 – Text reklamácie (vzor pre pole „Popis situácie")
            </h2>
            <Card className="border-slate-200 p-6 dark:border-slate-700">
              <pre className="whitespace-pre-wrap break-words text-sm leading-7 text-slate-700 dark:text-slate-300">{`Dear Wizz Air Customer Relations,

I am submitting a compensation claim under Regulation (EC) 261/2004, Article 7, for the following flight:

- Passenger: [NAME]
- Booking code (PNR): [PNR]
- Flight number: W6 [NUMBER]
- Scheduled departure: [DATE / TIME]
- Scheduled arrival: [DATE / TIME]
- Actual arrival (doors open): [DATE / TIME]
- Arrival delay: [H / MIN]
- Great-circle distance: [KM]

I am entitled to EUR [250 / 400] based on flight distance, confirmed by CJEU ruling C-402/07 (Sturgeon).

Please transfer the amount to IBAN [IBAN].

I also request reimbursement under Article 9 for the following expenses (receipts attached):
- [EXPENSE 1]
- [EXPENSE 2]

Please respond within 30 days. Without a substantive reply, I will escalate to the National Enforcement Body and/or file a claim in court.

Kind regards,
[NAME]
[ADDRESS] / [EMAIL]`}</pre>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 4 – Čo robiť po odoslaní
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Do 30 dní – čakajte na odpoveď
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Wizz Air má oficiálne 30 dní na vyjadrenie. V praxi odpovedá do 3 – 8 týždňov.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Po 30 dňoch – urgencia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pošlite cez rovnaký formulár urgenciu s odkazom na ID tiketu. Uveďte, že bez
                  odpovede do ďalších 14 dní eskalujete.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Pri zamietnutí – odvolanie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Wizz Air typicky zamieta s odkazom na mimoriadne okolnosti. Vo vašom odvolaní
                  žiadajte konkrétne dôkazy: meteorologický report, ATC notice, štrajkovú notu.
                  Väčšina zamietnutí padne pri tejto žiadosti.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Pri pretrvávajúcom odmietnutí – eskalácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Sťažnosť na{" "}
                  <Link
                    href="/sk/blog/ako-kontaktovat-dopravny-urad-sr-staznost"
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    Dopravný úrad SR
                  </Link>{" "}
                  alebo maďarský KNYH, prípadne súdne konanie. Alternatívne cez špecializovanú firmu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Nechcete sa doťahovať s Wizz Air?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger prevezme celý proces – od prvého podania cez odvolanie až po súd. Preverenie
                zdarma, provízia 30 % len pri úspechu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_wizzair_proc_final_primary", delayedFlightHref)
                    }
                  >
                    Preveriť Wizz Air prípad
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_wizzair_proc_final_secondary", cancelledFlightHref)
                    }
                  >
                    Riešim zrušený Wizz let
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
                  Wizz Air odškodnenie – sumy a práva
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Prehľad výšky kompenzácie a pravidiel pre Wizz Air cestujúcich.
                </p>
                <Link
                  href="/sk/blog/wizz-air-odszkodowanie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Vzor e-mailu reklamácie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Kompletné šablóny v slovenčine aj angličtine.
                </p>
                <Link
                  href="/sk/blog/emailova-sablona-reklamacie-aerolinky"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ryanair reklamácia krok za krokom
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Paralelný návod pre cestujúcich Ryanair.
                </p>
                <Link
                  href="/sk/blog/ako-podat-reklamaciu-ryanair-krok-za-krokom"
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
