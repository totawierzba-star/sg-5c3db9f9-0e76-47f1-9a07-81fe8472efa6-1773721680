import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/mozem-ziadat-odskodnenie-za-rodinu";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=family_claim";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=family_claim";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=family_claim";

const faqItems = [
  {
    question: "Môžem žiadať odškodnenie za rodinu?",
    answer:
      "Áno, často áno. Pri probléme s letom sa nárok typicky posudzuje za každého cestujúceho osobitne, nie len za jednu rezerváciu ako celok. Preto môže mať nárok viac členov rodiny naraz.",
  },
  {
    question: "Dostanú kompenzáciu aj deti?",
    answer:
      "Často áno, najmä ak mali vlastnú rezerváciu alebo lístok na daný let. Pri malých deťoch a infant tarife je však dôležité pozerať aj na to, ako boli v rezervácii vedené a za akých podmienok cestovali.",
  },
  {
    question: "Počíta sa kompenzácia za každého člena rodiny zvlášť?",
    answer:
      "Vo väčšine bežných prípadov áno. Ak majú nárok podľa EU261 viacerí pasažieri z jednej rodiny, suma sa obvykle počíta za každého oprávneného cestujúceho osobitne.",
  },
  {
    question: "Môže reklamáciu podať jeden rodič za všetkých?",
    answer:
      "Prakticky často áno, ale záleží na tom, čo aerolínka alebo partner požaduje na potvrdenie zastupovania ostatných pasažierov. Dôležité je vedieť preukázať, za koho nárok uplatňujete.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function MozemZiadatOdskodnenieZaRodinuPage() {
  return (
    <LayoutSk>
      <SEO
        title="Môžem žiadať odškodnenie za rodinu? Áno, nárok sa často ráta za každého pasažiera"
        description="Dá sa žiadať kompenzácia za celú rodinu? Vysvetľujeme, kedy sa nárok počíta za každého člena zvlášť, čo platí pri deťoch a prečo rezervácia sama nestačí."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Môžem žiadať odškodnenie za rodinu?",
            description:
              "Praktické vysvetlenie, ako sa pri EU261 pozerá na rodinu, deti a individuálny nárok každého pasažiera.",
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
                name: "Môžem žiadať odškodnenie za rodinu?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Môžem žiadať odškodnenie za rodinu?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
              Praktická odpoveď pre rodiny a spoločné rezervácie
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Môžem žiadať odškodnenie za rodinu?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najkratšia odpoveď je: <strong>často áno</strong>. Pri EU261 sa nárok spravidla
              neposudzuje len za jednu rezerváciu, ale <strong>za každého oprávneného pasažiera</strong>.
              To znamená, že pri jednom probléme s letom môže mať nárok viac členov rodiny naraz.
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
            <Card className="border-green-200 bg-gradient-to-br from-green-600 to-emerald-700 p-8 text-white shadow-xl dark:border-green-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-green-50">
                <p>
                  <strong>Nárok sa často ráta za každého pasažiera zvlášť.</strong>
                </p>
                <p>
                  Ak spolu cestovali dvaja rodičia a dve deti a všetci spĺňajú podmienky EU261,
                  nárok sa môže riešiť pre každú oprávnenú osobu osobitne.
                </p>
                <p>
                  Pri malých deťoch a infant tarife je však rozumné pozrieť sa presne na to, ako boli
                  vedené v rezervácii a aké mali podmienky cestovania.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Cestovala celá rodina a neviete, koľko pasažierov sa do nároku počíta?"
            description="ClaimWinger vie pomôcť overiť, či sa prípad týka len jedného pasažiera, alebo či je možné riešiť kompenzáciu za viacerých členov rodiny naraz."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=family_claim"
            ctaLabel="Preveriť rodinný prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_family_claim_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Ako sa na to pozerať prakticky
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "každý pasažier je samostatná osoba s vlastnými právami",
                "jedna spoločná rezervácia sama o sebe neznamená len jeden nárok",
                "ak podmienky spĺňa viac členov rodiny, kompenzácia sa môže počítať za každého z nich",
                "pri malých deťoch je dôležité vedieť, ako boli vedené v rezervácii",
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
              Deti, bábätká a infant tarifa
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Pri deťoch je odpoveď často priaznivá, ale je lepšie nehovoriť úplne mechanicky, že
                „každé dieťa vždy automaticky dostane to isté bez ďalšieho skúmania“. Dôležité je, či
                bolo dieťa vedené ako samostatný pasažier s vlastnou rezerváciou alebo lístkom, a ako
                boli nastavené podmienky cesty.
              </p>
              <p>
                Pri <strong>infant</strong> tarife, najmä ak dieťa cestuje bez vlastného sedadla, môže
                byť rozumné pozrieť sa presnejšie na dokumentáciu. V mnohých praktických prípadoch
                nárok stále môže dávať zmysel, ale nie je dobré to prezentovať ako úplne bezvýhradne
                automatické pravidlo bez kontextu.
              </p>
              <p>
                To je v tejto téme dôležitá poctivá formulácia: pravidlá EÚ hovoria o pasažieroch s
                platnou rezerváciou a cestovnými dokladmi, ale konkrétny spôsob evidencie dieťaťa v
                rezervácii môže ovplyvniť silu prípadu.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kto môže podať reklamáciu za rodinu
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Jeden rodič za všetkých
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Prakticky to často funguje, ale aerolinka alebo partner môže chcieť jasne vidieť,
                  za koho sa nárok uplatňuje a aké údaje patria ku každému pasažierovi.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Každý pasažier osobitne
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  V niektorých prípadoch môže byť čistejšie mať jasne rozpísané nároky po jednotlivých
                  pasažieroch, aj keď ich podáva tá istá osoba.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Praktický checklist pri rodinnom prípade
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "koľko pasažierov bolo v rezervácii",
                "či mali deti vlastné lístky alebo boli vedené ako infant",
                "či všetci let skutočne absolvovali alebo boli reroutovaní",
                "aký bol dopad na konečný cieľ pri každom pasažierovi",
                "kto bude prípad podávať a aké údaje má za ostatných",
                "aké dokumenty máte ku každej osobe v rezervácii",
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
                Chcete vedieť, či sa nárok ráta za celú rodinu alebo len za časť pasažierov?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Najlepšie je najprv si ujasniť, ako boli členovia rodiny vedení v rezervácii a aký
                typ problému s letom riešite. Od toho sa odvíja aj to, koľko osôb sa do nároku reálne počíta.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_family_claim_final_cta_delay", delayedFlightHref)
                    }
                  >
                    Riešim meškajúci let
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_family_claim_final_cta_cancelled", cancelledFlightHref)
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
                  Aké dokumenty potrebujem na reklamáciu?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete mať pri rodinnom prípade pripravené podklady pre každého pasažiera.
                </p>
                <Link
                  href="/sk/blog/ake-dokumenty-potrebujem-na-reklamaciu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na checklist dokumentov
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete prakticky preveriť, koľko členov rodiny sa do nároku naozaj počíta.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_family_claim_related_home", claimWingerHomeHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Môžem žiadať odškodnenie bez boarding passu?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak v rodinnej rezervácii niekomu chýba palubný lístok alebo iný dokument.
                </p>
                <Link
                  href="/sk/blog/mozem-ziadat-odskodnenie-bez-boarding-passu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o boarding passe
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
