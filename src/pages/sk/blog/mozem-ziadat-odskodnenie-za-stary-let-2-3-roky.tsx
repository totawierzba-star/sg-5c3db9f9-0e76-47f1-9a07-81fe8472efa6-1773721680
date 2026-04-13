import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/mozem-ziadat-odskodnenie-za-stary-let-2-3-roky";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=old_flight_2_3_years";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=old_flight_2_3_years";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=old_flight_2_3_years";

const faqItems = [
  {
    question: "Môžem žiadať odškodnenie za starý let spred 2 až 3 rokov?",
    answer:
      "Často áno. Pri letoch starých 2 až 3 roky ešte môže byť nárok stále živý, ale presný limit závisí od vnútroštátnych pravidiel premlčania a od toho, kde sa nárok reálne uplatňuje.",
  },
  {
    question: "Existuje jednotná lehota v celej EÚ?",
    answer:
      "Nie. Pravidlá EU261 dávajú právo na kompenzáciu, ale lehoty na súdne vymáhanie sa riadia vnútroštátnymi pravidlami jednotlivých štátov.",
  },
  {
    question: "Má zmysel riešiť let starý takmer 3 roky?",
    answer:
      "Áno, často ešte áno, ale je to už hraničné. Pri takých prípadoch sa oplatí konať okamžite a nespoliehať sa na to, že čas ešte „nejako je“.",
  },
  {
    question: "Stačí, že som kedysi poslal reklamáciu aerolinke?",
    answer:
      "Nie vždy. Neoplatí sa automaticky predpokladať, že stará reklamácia zastavila plynutie lehoty. To závisí od konkrétnych pravidiel a od toho, čo sa v prípade potom dialo ďalej.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function MozemZiadatOdskodnenieZaStaryLetPage() {
  return (
    <LayoutSk>
      <SEO
        title="Môžem žiadať odškodnenie za starý let (2–3 roky)? Často áno, ale nečakajte"
        description="Dá sa ešte riešiť odškodnenie za let starý 2 alebo 3 roky? Vysvetľujeme, prečo odpoveď často znie áno, ale aj to, že presné lehoty závisia od vnútroštátnych pravidiel premlčania."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Môžem žiadať odškodnenie za starý let (2–3 roky)?",
            description:
              "Praktické vysvetlenie, kedy sa ešte oplatí riešiť kompenzáciu za starší let a prečo je pri letoch spred 2 až 3 rokov dôležité konať bez odkladu.",
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
                name: "Môžem žiadať odškodnenie za starý let (2–3 roky)?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-lime-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Môžem žiadať odškodnenie za starý let (2–3 roky)?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2 text-sm font-medium text-lime-700 dark:bg-lime-900/30 dark:text-lime-300">
              Praktická odpoveď na hranične staré prípady
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Môžem žiadať odškodnenie za starý let (2–3 roky)?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Často áno. Ak máte let starý 2 alebo 3 roky, nárok ešte nemusí byť stratený, ale
              takýto prípad už býva časovo citlivý. Najväčšia chyba je predpokladať, že „ak to bolo
              dávno, už to určite nemá zmysel“ alebo naopak „3 roky mám vždy a všade“.
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
            <Card className="border-lime-200 bg-gradient-to-br from-lime-600 to-green-700 p-8 text-white shadow-xl dark:border-lime-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-lime-50">
                <p>
                  <strong>Áno, let starý 2 až 3 roky sa často ešte oplatí preveriť.</strong>
                </p>
                <p>
                  EÚ dáva cestujúcemu práva podľa EU261, ale lehoty na uplatnenie nároku sa riadia
                  <strong> vnútroštátnymi pravidlami premlčania</strong>, nie jednou jednotnou
                  lehotou v celej Európe.
                </p>
                <p>
                  Pri lete starom skoro 3 roky preto netreba špekulovať, ale konať okamžite.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Máte starší let a neviete, či je ešte v lehote?"
            description="Pri letoch spred 2 až 3 rokov býva rozhodujúca kombinácia trasy, aerolinky a toho, kde sa nárok bude reálne uplatňovať. ClaimWinger vie rýchlo posúdiť, či má prípad ešte zmysel riešiť."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=old_flight_2_3_years"
            ctaLabel="Preveriť starší let"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie staršieho prípadu."
            placement="sk_blog_old_flight_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Prečo na to neexistuje jedna spoločná odpoveď pre celú EÚ
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Samotné pravidlá EU261 určujú, kedy máte nárok na kompenzáciu za meškanie, zrušenie
                alebo odmietnutie nástupu na palubu. <strong>Nehovoria však jednotne za celú EÚ</strong>,
                dokedy sa musí takýto nárok vymáhať na súde.
              </p>
              <p>
                Oficiálne materiály EÚ výslovne upozorňujú, že lehoty na podanie žaloby proti
                aerolinke sa riadia <strong>vnútroštátnymi pravidlami o premlčaní</strong> v každej
                krajine. Preto je let starý 2–3 roky niekedy ešte včas a inokedy už hraničný.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo to znamená prakticky pre let starý 2 alebo 3 roky
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Let starý okolo 2 rokov
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Takýto prípad často ešte určite stojí za preverenie. Veľa ľudí ho zbytočne odpíše
                  príliš skoro.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Let starý takmer 3 roky
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu už môže ísť o hraničný termín. Takýto prípad sa oplatí riešiť hneď, nie „po víkende“.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Let starší ako 3 roky
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Takýto prípad môže byť podstatne slabší, ale bez preverenia právneho rámca sa stále
                  neoplatí robiť automatický záver len podľa pamäti.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Od čoho závisí, či je starší let ešte „živý“
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Kde sa nárok reálne rieši
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Rozhodovať môže miesto odletu, príletu, sídlo aerolinky alebo zvolená procesná cesta.
                  Práve to ovplyvňuje, ktoré pravidlá premlčania sa použijú.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  O aký typ problému išlo
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Meškanie, zrušenie a denied boarding stoja na tom istom nariadení EU261, ale dokazovanie
                  a ďalšia procesná história prípadu môžu vyzerať inak.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Či už ste aerolinke písali
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Staršia reklamácia môže byť dôležitá, ale nie je bezpečné automaticky predpokladať,
                  že vždy zastavila plynutie lehoty.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Kvalita dokladov
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri starších letoch je často problém, že emaily, boarding passy alebo potvrdenia už
                  človek nemá po ruke. To však nemusí znamenať koniec prípadu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo urobiť hneď, ak je let starý 2–3 roky
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  1. Nájdite rezerváciu a základné detaily letu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  PNR, číslo letu, dátum, trasu a emaily od aerolinky. Pri starších prípadoch je toto
                  úplný základ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  2. Nečakajte, kým „bude viac času“
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri hraničných prípadoch je odklad najhoršia stratégia. To, že let je ešte „asi v lehote“,
                  sa môže zmeniť rýchlejšie, než si človek myslí.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  3. Nespoliehajte sa len na všeobecnú vetu o 3 rokoch
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  V mnohých prípadoch je to praktická orientácia, ale nie univerzálna garancia pre
                  každý let a každú procesnú cestu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  4. Dajte preveriť presný rámec prípadu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri starších letoch sa oplatí rýchle individuálne posúdenie viac než internetová
                  skratka typu „už je neskoro“.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Súvisiace otázky
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Premlčanie nárokov
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete širší prehľad o tom, prečo sa lehoty nelíšia len podľa typu letu, ale aj
                  podľa právneho rámca, pozrite si aj náš starší článok o premlčaní.
                </p>
                <Link
                  href="/sk/blog/premlcanie-narokov-kompenzacia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o premlčaní
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Starý meškajúci alebo zrušený let
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak už viete, či išlo skôr o meškanie alebo zrušenie, môžete ísť rovno na správny
                  claim flow.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_old_flight_related_delayed", delayedFlightHref)}
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    Meškajúci let
                  </a>
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_old_flight_related_cancelled", cancelledFlightHref)
                    }
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    Zrušený let
                  </a>
                </div>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Máte starší let a nechcete riskovať, že premeškáte poslednú šancu?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                To je presne typ prípadu, kde sa neoplatí robiť domáce právne odhady naslepo. Pri
                letoch starých 2–3 roky môže byť rozhodujúci každý detail a každý deň.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_old_flight_final_cta_primary", claimWingerHomeHref)}
                  >
                    Preveriť starší let
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_old_flight_final_cta_secondary", claimWingerHomeHref)
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
