import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/ako-podat-reklamaciu-ita-airways-krok-za-krokom";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=ita_procedure";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=ita_procedure";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=ita_procedure";

const faqItems = [
  {
    question: "Kde podať reklamáciu ITA Airways?",
    answer:
      "Cez oficiálny formulár Modulo di reclamo / Complaint form na itaspa.com v sekcii Customer Care. Odporúča sa podanie v taliančine s anglickým zhrnutím.",
  },
  {
    question: "Koľko trvá odpoveď ITA Airways?",
    answer:
      "V praxi 4 – 8 týždňov. Pri komplikovaných prípadoch aj 2 – 3 mesiace. ITA Airways je pomalšia ako Lufthansa alebo KLM.",
  },
  {
    question: "V akom jazyku podať reklamáciu?",
    answer:
      "Taliančina je najefektívnejšia. Anglicky tiež akceptujú, ale taliansky právny odbor odpovedá rýchlejšie, keď je text v taliančine.",
  },
  {
    question: "Čo ak ITA zamietne reklamáciu?",
    answer:
      "Odvolanie cez ten istý formulár s dodatočnými argumentmi. Pri trvalom odmietnutí eskalácia na ENAC (Ente Nazionale per l'Aviazione Civile) alebo taliansky súd.",
  },
  {
    question: "Môžem reklamovať aj cez cestovnú agentúru, cez ktorú som kúpil letenku?",
    answer:
      "Cestovná agentúra nemá povinnosť platiť kompenzáciu – tú má operujúca aerolinka. Agentúra môže pomôcť s prílohami rezervácie, ale reklamáciu posielate priamo na ITA Airways.",
  },
  {
    question: "ITA Airways a Alitalia – rozdiel v procese?",
    answer:
      "ITA Airways = nová aerolinka od 15. 10. 2021, reklamácia priamo u nej. Alitalia = staré prípady sa riešia u konkurznej podstaty (amministrazione straordinaria). Dvakrát skontrolujte dátum letu.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AkoPodatReklamaciuItaAirwaysKrokZaKrokomPage() {
  return (
    <LayoutSk>
      <SEO
        title="Reklamácia ITA Airways krok za krokom: formulár + taliansky vzor"
        description="Podrobný návod na reklamáciu ITA Airways za meškanie alebo zrušenie letu. Formulár Modulo di reclamo, vzor textu v taliančine a eskalácia na ENAC."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ako podať reklamáciu ITA Airways krok za krokom",
            description:
              "Podrobný návod na EU261 reklamáciu u ITA Airways vrátane vzoru v taliančine a eskalácie na ENAC.",
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
                name: "Reklamácia ITA Airways krok za krokom",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Reklamácia ITA Airways krok za krokom</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
              Návod krok za krokom · ITA Airways
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ako podať reklamáciu ITA Airways krok za krokom
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              ITA Airways má štruktúrovaný, ale pomalší proces reklamácií. Talianska byrokracia
              vyžaduje dôkladnú dokumentáciu a najmä komunikáciu v taliančine. V tomto článku nájdete
              podrobný postup vrátane <strong>vzoru v taliančine aj v angličtine</strong> a rady,
              ako zrýchliť odpoveď. Pre rýchlejšie riešenie odovzdajte prípad cez{" "}
              <a
                href={claimWingerHomeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_ita_proc_intro", claimWingerHomeHref)}
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
            <Card className="border-teal-200 bg-gradient-to-br from-teal-600 to-emerald-700 p-8 text-white shadow-xl dark:border-teal-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-teal-50">
                <p>
                  <strong>Modulo di reclamo</strong> na itaspa.com / Customer Care. Cez ten pošlite
                  PNR, číslo letu a vyčíslenú sumu.
                </p>
                <p>
                  Očakávajte 4 – 8 týždňov na odpoveď. Pri zamietnutí <strong>odvolanie</strong>,
                  potom <strong>ENAC</strong> (taliansky NEB) alebo <strong>taliansky súd</strong>.
                </p>
                <p>
                  Overte dátum letu – od 15. 10. 2021 je to ITA Airways, pred tým Alitalia (iný
                  subjekt, konkurzná podstata).
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="ITA Airways nereaguje v taliančine?"
            description="ClaimWinger má skúsenosť s Modulo di reclamo, ENAC aj talianskymi súdmi. Preverenie zdarma, provízia 30 % pri úspechu."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=ita_procedure"
            ctaLabel="Odovzdať ITA prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_ita_procedure_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 1 – Identifikujte správny subjekt
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Pri reklamácii najskôr dvakrát skontrolujte dátum letu a PNR:
              </p>
              <ul>
                <li>
                  <strong>Let od 15. 10. 2021</strong> = ITA Airways. Reklamácia cez itaspa.com.
                </li>
                <li>
                  <strong>Let pred 15. 10. 2021</strong> = Alitalia. Nárok si uplatňujete u správcu
                  konkurznej podstaty. ITA Airways tieto záväzky neprebrala.
                </li>
                <li>
                  <strong>Wet-lease</strong> (napr. pre Lufthansu) – pozrite, kto je operated by.
                  Ak ITA Airways, reklamujete ju.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 2 – Vyplňte Modulo di reclamo online
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <ol>
                <li>
                  Otvorte <strong>itaspa.com</strong> → <strong>Customer Care</strong> →{" "}
                  <strong>Invia un reclamo</strong> alebo <strong>Submit a complaint</strong>.
                </li>
                <li>
                  Zvoľte jazyk. Slovenčina nie je v ponuke – použite taliančinu alebo angličtinu.
                </li>
                <li>
                  Vyberte kategóriu: <em>Compensazione EC 261/2004</em> /{" "}
                  <em>Compensation under EC 261/2004</em>.
                </li>
                <li>Zadajte PNR, číslo letu, dátum, mená pasažierov.</li>
                <li>V popise uveďte priebeh meškania, čas otvorenia dverí a vyčíslenú sumu.</li>
                <li>Priložte boarding pass, e-maily, účtenky a fotografie (max 10 MB / súbor).</li>
                <li>Uveďte IBAN – ITA Airways vypláca výlučne bankovým prevodom v EUR.</li>
                <li>Odošlite a uložte si potvrdzovací e-mail s ID tiketu.</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 3 – Vzor textu v taliančine
            </h2>
            <Card className="border-slate-200 p-6 dark:border-slate-700">
              <pre className="whitespace-pre-wrap break-words text-sm leading-7 text-slate-700 dark:text-slate-300">{`Oggetto: Richiesta di compensazione ai sensi del Regolamento (CE) 261/2004 – volo AZ[NUMERO] del [DATA]

Gentile ITA Airways,

In qualità di passeggero del volo sotto indicato, richiedo il pagamento della compensazione pecuniaria prevista dall'art. 7 del Regolamento (CE) 261/2004.

Dati del volo:
- Passeggero: [NOME COGNOME]
- Codice prenotazione (PNR): [PNR]
- Numero del volo: AZ [NUMERO]
- Tratta: [PARTENZA] – [ARRIVO]
- Data di partenza programmata: [DATA]
- Orario di arrivo programmato: [ORA]
- Orario di arrivo effettivo (apertura porte): [ORA]
- Ritardo all'arrivo: [H / MIN]
- Distanza ortodromica: [KM]

Ai sensi dell'art. 7, ho diritto a una compensazione di EUR [250 / 400 / 600], in linea con la sentenza CGUE C-402/07 (Sturgeon).

Vi chiedo di effettuare il pagamento sull'IBAN [IBAN].

Richiedo inoltre il rimborso delle spese sostenute ai sensi dell'art. 9 (ricevute in allegato).

Vi chiedo di rispondere entro 30 giorni. In caso contrario, mi rivolgerò all'ENAC e/o al tribunale competente.

Cordiali saluti,
[NOME COGNOME]
[INDIRIZZO] / [EMAIL]`}</pre>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Krok 4 – Eskalácia cez ENAC alebo súd
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  ENAC – taliansky NEB
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ente Nazionale per l&apos;Aviazione Civile. Sťažnosť cez online formulár alebo
                  doporučene. Proces 3 – 6 mesiacov. ENAC nevydáva platobné rozhodnutia, ale jeho
                  stanovisko výrazne pomáha v prípadnom súde.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Taliansky súd (Giudice di Pace)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pre sumy do 25 000 € existuje malý súd – Giudice di Pace. Rozhodnutie obvykle do
                  6 – 12 mesiacov. Taliansky súdny systém má rozsiahlu judikatúru v prospech cestujúcich.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Slovenský súd
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri lete z SR alebo cestujúcom zo SR. Slovenské súdy môžu v EU261 prípadoch
                  rozhodovať podľa nariadenia Brusel I bis.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Odovzdanie špecializovanej firme
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najjednoduchšia cesta pri ITA Airways – firmy sa nestrácajú v talianskej byrokracii
                  a majú kontakty na talianskych advokátov.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                ITA reklamácia bez talianskej administratívy
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger preberie komunikáciu v taliančine, podá reklamáciu, eskaluje na ENAC a pri
                potrebe žaluje na Giudice di Pace. Provízia 30 % len pri úspechu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_ita_proc_final_primary", delayedFlightHref)
                    }
                  >
                    Preveriť ITA prípad
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_ita_proc_final_secondary", cancelledFlightHref)
                    }
                  >
                    Zrušený ITA let
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
                  ITA Airways odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Všeobecné práva a sumy pri ITA Airways.
                </p>
                <Link
                  href="/sk/blog/ita-airways-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Môžem žiadať starý let
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dôležité pri starých Alitalia prípadoch.
                </p>
                <Link
                  href="/sk/blog/mozem-ziadat-odskodnenie-za-stary-let-2-3-roky"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Kedy ísť na súd
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Porovnanie talianskeho a slovenského súdneho procesu.
                </p>
                <Link
                  href="/sk/blog/kedy-ist-na-sud-pri-odskodneni-za-let"
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
