import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/emailova-sablona-reklamacie-aerolinky";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=email_template";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=email_template";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=email_template";

const faqItems = [
  {
    question: "Musí reklamácia prísť mailom alebo poštou?",
    answer:
      "Obidve formy sú platné. E-mail je rýchlejší a aerolinky ho zvyčajne prijímajú cez oficiálny formulár alebo mailovú adresu customer relations. Pri súdnom konaní je však preukaznejšia doporučená pošta s potvrdením o doručení.",
  },
  {
    question: "Čo je v reklamácii najdôležitejšie?",
    answer:
      "Presné údaje o lete (dátum, číslo, PNR, trasa), presný opis meškania (v hodinách a minútach), výslovne uvedený právny základ (nariadenie ES č. 261/2004, článok 7), vyčíslená suma a termín na odpoveď (spravidla 30 dní).",
  },
  {
    question: "V akom jazyku mám reklamáciu poslať?",
    answer:
      "Slovenská aerolinka rozumie slovenčine; zahraničné aerolinky reagujú väčšinou len na angličtinu alebo národný jazyk (nemčinu pre Lufthansa/Austrian, francúzštinu pre Air France, portugalčinu pre TAP). Odporúčame posielať v slovenčine aj v anglickom preklade.",
  },
  {
    question: "Ako sa dá požiadavka preukázať doporučeným spôsobom?",
    answer:
      "Najlepšie cez oficiálny online formulár aerolinky – uložte si potvrdenie (screenshot a e-mail s ID tiketu). Alternatívne e-mail s doručenkou alebo doporučený list so sledovaním. Pri súdnom konaní musíte vedieť preukázať, že aerolinka reklamáciu dostala.",
  },
  {
    question: "Čo ak aerolinka neodpovedá do 30 dní?",
    answer:
      "Pošlite urgenciu s odkazom na termín, uveďte, že bez reakcie sa obrátite na Dopravný úrad SR alebo špecializovanú firmu. Po ďalších 14 dňoch eskalujte – aerolinky zvyčajne reagujú po prvom podaní na regulátora.",
  },
  {
    question: "Má reklamácia obsahovať číslo bankového účtu?",
    answer:
      "Áno, aspoň IBAN. Urýchli to vyplatenie pri schválení reklamácie. Aerolinka môže (aj keď nemusí) vyplácať kompenzáciu bankovým prevodom – EU261 to výslovne povoľuje.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function EmailovaSablonaReklamacieAerolinkyPage() {
  return (
    <LayoutSk>
      <SEO
        title="Vzor reklamácie letu e-mailom: kompletná šablóna s návodom"
        description="Stiahnite si overenú šablónu e-mailovej reklamácie za meškanie alebo zrušenie letu. Vzorový text v slovenčine aj angličtine plus návod, ako ju správne vyplniť a poslať."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Vzor reklamácie letu e-mailom: kompletná šablóna s návodom",
            description:
              "Overené vzory e-mailovej reklamácie za meškanie alebo zrušenie letu v slovenčine aj angličtine vrátane praktického návodu.",
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
                name: "Vzor reklamácie letu e-mailom",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Vzor reklamácie letu e-mailom</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Šablóna na stiahnutie
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Vzor reklamácie letu e-mailom: šablóna a návod
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Silná reklamácia začína dobre napísaným e-mailom. Nižšie nájdete{" "}
              <strong>overené vzory v slovenčine aj angličtine</strong>, štruktúru dokumentu,
              zoznam povinných údajov a tipy, ako e-mail odoslať tak, aby ste mali doklad o doručení.
              Ak nechcete riešiť text a e-mailovú komunikáciu sami, celý proces zvládne{" "}
              <a
                href={claimWingerHomeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_email_template_intro", claimWingerHomeHref)}
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
                <span>Čítanie: 9 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-blue-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>
                  Reklamáciu pošlite na <strong>oficiálnu adresu customer relations</strong> aerolinky
                  alebo cez online formulár – nie cez chat ani na sociálne siete.
                </p>
                <p>
                  V tele mailu musí byť: <strong>PNR, číslo letu, dátum, trasa, čas meškania, právny
                  základ, vyčíslená suma, termín na odpoveď, IBAN</strong>.
                </p>
                <p>
                  Uložte si <strong>potvrdenie o odoslaní</strong> a ID tiketu. Pri absencii odpovede
                  do 30 dní eskalujte.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Nevolí sa vám písať? Reklamáciu spíše ClaimWinger"
            description="ClaimWinger zloží reklamáciu podľa najnovších vzorov, pošle ju správnej aerolinke vo vhodnom jazyku a ustráži termíny. Preverenie zdarma, provízia 30 % len pri úspechu."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=email_template"
            ctaLabel="Nechať prípad ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_email_template_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Šablóna v slovenčine (meškanie letu)
            </h2>
            <Card className="border-slate-200 p-6 dark:border-slate-700">
              <pre className="whitespace-pre-wrap break-words text-sm leading-7 text-slate-700 dark:text-slate-300">{`Predmet: Reklamácia – kompenzácia podľa nariadenia (ES) č. 261/2004 – let [ČÍSLO LETU] dňa [DÁTUM]

Vážení,

som cestujúci dotknutý meškaním letu operovaného Vašou spoločnosťou.

Údaje o lete:
• Meno a priezvisko cestujúceho: [MENO]
• Rezervačný kód (PNR): [PNR]
• Číslo letu: [ČÍSLO LETU]
• Trasa: [MESTO ODLETU] – [MESTO PRÍLETU]
• Dátum plánovaného odletu: [DÁTUM]
• Plánovaný čas príletu: [ČAS]
• Skutočný čas príletu (otvorenie dverí): [ČAS]
• Celkové meškanie pri prílete: [POČET HODÍN A MINÚT]
• Vzdialenosť letu (great-circle): [KM]

Na základe nariadenia Európskeho parlamentu a Rady (ES) č. 261/2004, najmä článku 7, mi za uvedené meškanie vzniká nárok na paušálnu kompenzáciu vo výške [SUMA] EUR (250 / 400 / 600 €) podľa vzdialenosti letu. Právny základ potvrdzuje rozsudok Súdneho dvora EÚ vo veci C-402/07 (Sturgeon).

Žiadam o výplatu uvedenej sumy na bankový účet: IBAN [IBAN].

Zároveň žiadam o preplatenie výdavkov, ktoré som v súvislosti s meškaním musel znášať (článok 9 nariadenia). Účtenky a doklady prikladám v prílohe. Ide o: [VYMENOVANIE VÝDAVKOV].

Očakávam vašu odpoveď do 30 dní od doručenia tohto e-mailu. Po uplynutí lehoty si vyhradzujem právo obrátiť sa na Dopravný úrad SR a/alebo príslušný súd.

S pozdravom,
[MENO A PRIEZVISKO]
[ADRESA]
[TELEFÓN]
[E-MAIL]

Prílohy:
1. Rezervácia / potvrdenie letu
2. Boarding pass (ak máte)
3. Korešpondencia s aerolinkou
4. Účtenky za výdavky
5. Fotografia odletovej tabule / iné dôkazy`}</pre>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Šablóna v angličtine (pre zahraničné aerolinky)
            </h2>
            <Card className="border-slate-200 p-6 dark:border-slate-700">
              <pre className="whitespace-pre-wrap break-words text-sm leading-7 text-slate-700 dark:text-slate-300">{`Subject: Compensation claim under Regulation (EC) 261/2004 – flight [FLIGHT NUMBER] on [DATE]

Dear Customer Relations team,

I am writing to claim statutory compensation for a delayed flight operated by your airline.

Flight details:
- Passenger name: [NAME]
- Booking reference (PNR): [PNR]
- Flight number: [FLIGHT NUMBER]
- Route: [DEPARTURE] to [ARRIVAL]
- Scheduled departure date: [DATE]
- Scheduled arrival time: [TIME]
- Actual arrival (doors open): [TIME]
- Arrival delay: [HOURS / MINUTES]
- Great-circle distance: [KM]

Under Regulation (EC) 261/2004, Article 7, I am entitled to EUR [250 / 400 / 600] fixed compensation based on the flight distance (CJEU case C-402/07 Sturgeon).

Please transfer the amount to the following bank account: IBAN [IBAN].

I also request reimbursement of expenses incurred due to the delay, under Article 9 of the regulation. Receipts are attached.

Please respond within 30 days of receipt. If I do not hear back, I will escalate to the national enforcement body (Slovak Transport Authority) and/or take the matter to court.

Sincerely,
[NAME]
[ADDRESS]
[PHONE]
[EMAIL]

Attachments:
1. Booking confirmation
2. Boarding pass (if available)
3. Communication from the airline
4. Receipts
5. Photos of the departure board and other evidence`}</pre>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Na akú adresu poslať reklamáciu
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Ryanair</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Výlučne online formulár v sekcii Help Centre. E-mail v prípade Ryanair nefunguje –
                  reklamácia musí prísť formulárom.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Wizz Air</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Online formulár Nárok na kompenzáciu alebo e-mail na customer relations z účtu
                  pasažiera.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lufthansa / Austrian / SWISS
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Sekcia Feedback – Customer Relations na webe. Všetky patria do Lufthansa Group
                  s jednotným systémom.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  ITA / Air France / KLM
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Online formulár v sekcii Claims / Complaints. KLM a Air France patria do AFKL
                  a používajú jednotný proces.
                </p>
              </Card>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Pozri tiež{" "}
              <Link
                href="/sk/blog/ako-podat-reklamaciu-ryanair-krok-za-krokom"
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                Ako podať reklamáciu Ryanair
              </Link>{" "}
              a{" "}
              <Link
                href="/sk/blog/ako-podat-staznost-letecka-spolocnost"
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                Ako podať sťažnosť leteckej spoločnosti
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              5 tipov na silný text reklamácie
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "uveďte výslovne článok 7 a článok 9 EU261",
                "priložte minimálne 3 nezávislé dôkazy (e-mail, tabuľa, boarding pass)",
                "vyžiadajte odpoveď do 30 dní – písomne, nie telefonicky",
                "vyčíslite sumu v EUR aj pri výdavkoch",
                "uveďte IBAN, aby aerolinka nemala výhovorku",
                "nepoužívajte emocionálny tón – je to obchodno-právny dokument",
                "podpíšte sa plnou adresou",
                "uchovajte si screenshot formulára alebo e-mail s potvrdením",
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
                Chcete istotu, že reklamácia bude správne podaná?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger pošle reklamáciu priamo aerolinke v správnom jazyku a formáte. Vy len
                vyplníte slovenský formulár – cca 3 minúty, bez zálohy.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_email_template_final_primary", delayedFlightHref)}
                  >
                    Spustiť reklamáciu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_email_template_final_secondary", cancelledFlightHref)
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
                  Ako podať sťažnosť leteckej spoločnosti
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Širší sprievodca procesom reklamácie od prvého podania až po eskaláciu.
                </p>
                <Link
                  href="/sk/blog/ako-podat-staznost-letecka-spolocnost"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Aké dokumenty potrebujem
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Zoznam povinných a odporúčaných dokumentov k úspešnej reklamácii.
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
                  Ako zvýšiť šance na úspech
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  10 krokov, ktoré dramaticky zvýšia pravdepodobnosť úspešnej reklamácie.
                </p>
                <Link
                  href="/sk/blog/ako-zvysit-sance-na-uspech-reklamacie"
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
