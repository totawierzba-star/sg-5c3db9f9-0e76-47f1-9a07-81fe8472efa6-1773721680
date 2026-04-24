import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/ako-podat-reklamaciu-lufthansa-krok-za-krokom";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lufthansa_procedure";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lufthansa_procedure";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lufthansa_procedure";

const faqItems = [
  {
    question: "Kde podať reklamáciu Lufthansa?",
    answer:
      "Cez oficiálny online formulár Feedback – Kompensationsantrag na lufthansa.com v sekcii Customer Relations. Alternatívne poštou na adresu Lufthansa Passage EK/DL, 60546 Frankfurt. Proces je rovnaký pre Austrian Airlines, SWISS a Brussels Airlines – všetky sú v Lufthansa Group.",
  },
  {
    question: "Koľko trvá odpoveď Lufthansa?",
    answer:
      "Oficiálne 28 dní. V praxi 2 – 6 týždňov pri jednoduchých prípadoch, pri komplikovaných aj 8 – 12 týždňov. Lufthansa patrí medzi rýchlejšie aerolinky v odpovedaní.",
  },
  {
    question: "Aký jazyk použiť?",
    answer:
      "Reklamácia v nemčine alebo v angličtine je ideálna. Formulár podporuje viac jazykov, vrátane slovenčiny a češtiny, ale nemecký/anglický text sa lepšie posúdia na právnom odbore.",
  },
  {
    question: "Akceptuje Lufthansa podanie cez tretiu stranu?",
    answer:
      "Áno. Reklamáciu môžete podať aj cez splnomocnenca (napr. ClaimWinger) s priloženou plnej mocou. Lufthansa má na to štandardný proces a nekladie prekážky.",
  },
  {
    question: "Aké mimoriadne okolnosti Lufthansa najčastejšie uvádza?",
    answer:
      "Štrajky odborov vo vlastnom personáli (ale ECJ C-28/20 hovorí, že to nie je mimoriadna okolnosť), ATC obmedzenia, počasie, politická nestabilita. Pri prvom zamietnutí sa často oplatí trvať na dôkazoch.",
  },
  {
    question: "Lufthansa a codeshare – kto platí?",
    answer:
      "Ak operujúca aerolinka je Lufthansa, platí Lufthansa. Ak je Lufthansa len marketing carrier (napr. United operuje transatlantik s LH kódom), platí operujúca aerolinka. Viac v článku o codeshare letoch.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AkoPodatReklamaciuLufthansaKrokZaKrokomPage() {
  return (
    <LayoutSk>
      <SEO
        title="Reklamácia Lufthansa krok za krokom: formulár EU261 + vzor"
        description="Praktický návod na podanie reklamácie Lufthansa za meškanie alebo zrušenie letu. Online formulár, vzor textu, lehoty a eskalácia v Lufthansa Group."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ako podať reklamáciu Lufthansa krok za krokom",
            description:
              "Praktický návod na EU261 reklamáciu u Lufthansy vrátane odkazov na oficiálny formulár, vzoru textu a eskalácie.",
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
                name: "Reklamácia Lufthansa krok za krokom",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Reklamácia Lufthansa krok za krokom</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
              Návod krok za krokom · Lufthansa Group
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ako podať reklamáciu Lufthansa krok za krokom
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Lufthansa je jeden z najväčších európskych dopravcov a má štruktúrovaný proces reklamácií
              podľa EU261. Ten istý postup funguje aj pre <strong>Austrian Airlines</strong>,{" "}
              <strong>SWISS</strong> a <strong>Brussels Airlines</strong> – všetky sú v Lufthansa
              Group. V tomto článku prejdeme kompletný postup od dokumentácie až po eskaláciu.
              Alternatívne prípad odovzdajte cez{" "}
              <a
                href={claimWingerHomeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_lufthansa_proc_intro", claimWingerHomeHref)}
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
            <Card className="border-yellow-200 bg-gradient-to-br from-yellow-600 to-amber-700 p-8 text-white shadow-xl dark:border-yellow-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-yellow-50">
                <p>
                  Použite <strong>online Feedback / Kompensationsantrag</strong> na lufthansa.com –
                  formulár spracuje aj Austrian, SWISS a Brussels Airlines.
                </p>
                <p>
                  V texte uveďte PNR, číslo letu, dátum, meškanie, odkaz na článok 7 EU261 a sumu
                  v EUR.
                </p>
                <p>
                  Odpoveď do 28 dní. Pri zamietnutí odvolanie alebo eskalácia na Luftfahrt-Bundesamt
                  (LBA), súd alebo firmu.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Nechcete písať v nemčine? ClaimWinger to zvládne"
            description="ClaimWinger komunikuje s Lufthansou v nemčine aj anglicky, pozná rozhodnutia nemeckých súdov a pri odmietnutí eskaluje na Lufthansa-Bundesamt alebo priamo na súd."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=lufthansa_procedure"
            ctaLabel="Odovzdať Lufthansa prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_lufthansa_procedure_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 1 – Identifikujte operujúcu aerolinku v skupine
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Lufthansa Group má viacero EÚ AOC – Lufthansa, Lufthansa CityLine, Austrian Airlines,
                SWISS, Brussels Airlines, Edelweiss, Air Dolomiti, Eurowings. Pri reklamácii je
                kľúčové posielať na správny subjekt:
              </p>
              <ul>
                <li>
                  Lufthansa DE (LH) – hlavný dopravca, feedback cez lufthansa.com.
                </li>
                <li>
                  Austrian Airlines (OS) – austrian.com / Customer Relations.
                </li>
                <li>
                  SWISS (LX) – swiss.com / Customer Relations.
                </li>
                <li>
                  Brussels Airlines (SN) – brusselsairlines.com / Customer Care.
                </li>
                <li>
                  Eurowings (EW) – samostatná značka, eurowings.com / Feedback form.
                </li>
              </ul>
              <p>
                Pri wet-lease (napríklad lietadlo airBaltic v Lufthansa kódshare) platí{" "}
                <strong>airBaltic</strong>, nie Lufthansa.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 2 – Oficiálny formulár Lufthansa
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>Postup:</p>
              <ol>
                <li>
                  Otvorte <strong>lufthansa.com/help</strong> → <strong>Feedback</strong> →{" "}
                  <strong>Kompensationsantrag (EU261)</strong>.
                </li>
                <li>Zadajte e-mail, meno, PNR, dátum a číslo letu.</li>
                <li>
                  Vyberte typ prípadu: <em>Verspätung</em> (meškanie) /{" "}
                  <em>Annullierung</em> (zrušenie) / <em>Nicht-Beförderung</em> (odmietnutie
                  nástupu).
                </li>
                <li>
                  Do opisu vložte stručný text (vzor nižšie) s odkazom na článok 7 EU261 a
                  vyčíslenou sumou.
                </li>
                <li>Priložte boarding pass, e-maily, účtenky a fotografie.</li>
                <li>Uveďte IBAN pre bankový prevod.</li>
                <li>Odošlite a uložte si kópiu potvrdzovacieho e-mailu (ID tiketu).</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 3 – Vzor textu v angličtine
            </h2>
            <Card className="border-slate-200 p-6 dark:border-slate-700">
              <pre className="whitespace-pre-wrap break-words text-sm leading-7 text-slate-700 dark:text-slate-300">{`Dear Lufthansa Customer Relations,

I am submitting a compensation claim under Regulation (EC) 261/2004 for the following flight:

- Passenger: [NAME]
- Booking code (PNR): [PNR]
- Flight number: LH [NUMBER]
- Route: [DEPARTURE] – [ARRIVAL]
- Scheduled departure: [DATE / TIME]
- Scheduled arrival: [DATE / TIME]
- Actual arrival (doors open): [DATE / TIME]
- Arrival delay: [H / MIN]
- Great-circle distance: [KM]

Under Article 7 of Regulation (EC) 261/2004, I am entitled to EUR [250 / 400 / 600] (CJEU C-402/07 Sturgeon). Please transfer the amount to IBAN [IBAN].

I also claim reimbursement under Article 9 for expenses incurred (receipts attached).

Please respond within 28 days. Otherwise, I will escalate to Luftfahrt-Bundesamt and/or the competent court.

Kind regards,
[NAME] / [ADDRESS] / [EMAIL]`}</pre>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 4 – Eskalácia pri zamietnutí
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Odvolanie cez ten istý kanál
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri prvom zamietnutí často stačí jedno dobre argumentované odvolanie. Žiadajte
                  konkrétne dôkazy uvádzaných mimoriadnych okolností.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Luftfahrt-Bundesamt (LBA) – nemecký NEB
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Sťažnosť v nemčine alebo angličtine. LBA má proces posúdenia 3 – 6 mesiacov.
                  Nemôže priamo nariadiť vyplatenie, ale aerolinky jeho stanoviská zvyčajne
                  rešpektujú.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Nemecký súd
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Amtsgericht podľa sídla Lufthansy (Frankfurt, Mníchov) alebo podľa miesta odletu.
                  Pri malých sumách do 5 000 € existuje zjednodušený online proces.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Slovenský súd
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pre lety s odletom zo SR alebo pre slovenských cestujúcich. ClaimWinger pripraví
                  žalobu aj na slovenský súd.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Zjednodušte si proces s profesionálmi
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger má skúsenosť s celou Lufthansa Group – LH, OS, LX, SN, EW. Provízia 30 %
                pri úspechu vrátane nemeckých súdnych konaní.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_lufthansa_proc_final_primary", delayedFlightHref)
                    }
                  >
                    Preveriť Lufthansa prípad
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_lufthansa_proc_final_secondary", cancelledFlightHref)
                    }
                  >
                    Zrušený Lufthansa let
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
                  Lufthansa odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Všeobecný sprievodca nárokmi pri Lufthansa letoch.
                </p>
                <Link
                  href="/sk/blog/lufthansa-odskodnenie-meskanie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Austrian Airlines
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Paralelný sprievodca pre Austrian Airlines cestujúcich.
                </p>
                <Link
                  href="/sk/blog/austrian-airlines-meskanie-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Codeshare lety
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dôležité pri Lufthansa Group letoch operovaných partnermi.
                </p>
                <Link
                  href="/sk/blog/kto-zaplati-odskodnenie-codeshare-lety"
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
