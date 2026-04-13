import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/aka-je-sanca-na-uspech-reklamacie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=claim_success_chance";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=claim_success_chance";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=claim_success_chance";

const faqItems = [
  {
    question: "Aká je šanca na úspech reklamácie?",
    answer:
      "Neexistuje jedno poctivé percento, ktoré by platilo pre všetky prípady. Šanca býva vyššia vtedy, keď je let jasne v rozsahu EU261, máte dobré dokumenty, meškanie alebo zrušenie sa dá dobre preukázať a aerolínka nepreukáže mimoriadne okolnosti.",
  },
  {
    question: "Kedy býva reklamácia silnejšia?",
    answer:
      "Najmä pri meškaní 3 hodiny a viac v cieli, pri zrušení oznámenom neskoro, pri odmietnutí nástupu na palubu alebo pri zmeškanom prestupe v jednej rezervácii. Dôležité je aj to, aby išlo o let, na ktorý sa EU261 vôbec vzťahuje.",
  },
  {
    question: "Kedy býva šanca slabšia?",
    answer:
      "Najmä ak ide o spor mimo rozsahu EU261, o dve samostatné rezervácie pri prestupe, o slabé dôkazy alebo o situáciu, kde aerolínka vie preukázať mimoriadne okolnosti.",
  },
  {
    question: "Pomôže ClaimWinger aj pri nejasnom prípade?",
    answer:
      "Áno, ClaimWinger vie pomôcť preveriť, či prípad vyzerá skôr ako jednoduchá priama reklamácia, alebo ako spor, ktorý si vyžiada ďalšie kroky. Provízia ClaimWingeru je 30 % bez ohľadu na to, či sa prípad vyrieši mimosúdne alebo súdne.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AkaJeSancaNaUspechReklamaciePage() {
  return (
    <LayoutSk>
      <SEO
        title="Aká je šanca na úspech reklamácie? Záleží od dôkazov, EU261 a dôvodu problému"
        description="Aká je reálna šanca, že reklamácia za meškajúci alebo zrušený let uspeje? Vysvetľujeme najdôležitejšie faktory: rozsah EU261, dokumenty, mimoriadne okolnosti a reakciu aerolinky."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Aká je šanca na úspech reklamácie?",
            description:
              "Praktický prehľad faktorov, ktoré zvyšujú alebo znižujú šancu na úspešnú reklamáciu pri meškaní alebo zrušení letu.",
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
                name: "Aká je šanca na úspech reklamácie?",
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
            <span>Aká je šanca na úspech reklamácie?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              AI odpoveď a praktické hodnotenie sily prípadu
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Aká je šanca na úspech reklamácie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najpoctivejšia odpoveď je: <strong>záleží od prípadu</strong>. Neexistuje jedno
              spoľahlivé percento, ktoré by platilo pre každý meškajúci alebo zrušený let. Šanca na
              úspech rastie najmä vtedy, keď je prípad jasne v rozsahu <strong>EU261</strong>, máte
              dobré dôkazy a aerolínka nevie vierohodne preukázať mimoriadne okolnosti.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 13. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 10 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white shadow-xl dark:border-emerald-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-emerald-50">
                <p>
                  <strong>Silnejšia reklamácia</strong> býva tam, kde je let v rozsahu EU261,
                  meškanie v cieli je aspoň 3 hodiny alebo ide o zrušenie, odmietnutie nástupu či
                  zmeškaný prestup v jednej rezervácii.
                </p>
                <p>
                  <strong>Slabšia reklamácia</strong> býva tam, kde chýbajú dokumenty, ide o dve
                  oddelené rezervácie alebo aerolínka vie doložiť mimoriadne okolnosti.
                </p>
                <p>
                  Ak si nie ste istí, či váš prípad patrí skôr medzi jednoduché alebo sporné, má
                  zmysel ho dať rýchlo preveriť ešte pred ďalšou eskaláciou.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Neviete, či má vaša reklamácia reálnu šancu?"
            description="ClaimWinger vie pomôcť rýchlo preveriť, či váš prípad vyzerá ako jasný nárok podľa EU261, alebo či pôjde skôr o spor o dôvod meškania, zrušenia alebo prestupu."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=claim_success_chance"
            ctaLabel="Preveriť šancu prípadu vo formulári"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_claim_success_chance_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo najviac zvyšuje šancu na úspech
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "let patrí do rozsahu EU261",
                "v cieli vzniklo meškanie 3 hodiny a viac",
                "zrušenie bolo oznámené neskoro",
                "pri prestupe šlo o jednu rezerváciu",
                "máte rezerváciu, správy od aerolinky a ďalšie dôkazy",
                "aerolínka nevie presvedčivo doložiť mimoriadne okolnosti",
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
              Čo šancu naopak oslabuje
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Nejasný rozsah pravidiel
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najprv treba vedieť, či sa na let vôbec vzťahuje EU261. Ak let nespadá do európskeho
                  režimu, úspech reklamácie sa už nebude opierať o tie isté pravidlá.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Slabé alebo rozbité dôkazy
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Rezervácia, oznámenia od aerolinky, potvrdenie času a ďalšie dôkazy pomáhajú. Čím
                  menej z nich zostane, tým ťažšie sa prípad obhajuje.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak aerolínka vie naozaj preukázať mimoriadne okolnosti, právo na kompenzáciu môže
                  odpadnúť, aj keď máte stále nárok na starostlivosť, refundáciu alebo presmerovanie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Dve samostatné rezervácie pri prestupe
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri oddelených letenkách býva pozícia cestujúceho často slabšia než pri jednej
                  spoločnej rezervácii do konečnej destinácie.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Prečo sa nedá poctivo povedať jedno percento
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Na internete sa často objavujú jednoduché odpovede typu „úspešnosť je 80 %“ alebo
                „ak máte meškanie nad 3 hodiny, určite vyhráte“. Takéto tvrdenia sú príliš hrubé.
                Oficiálne zdroje EÚ nevydávajú jednotnú univerzálnu štatistiku, ktorá by poctivo
                platila pre každý typ letu, každú aerolínku a každú krajinu.
              </p>
              <p>
                O sile reklamácie rozhoduje kombinácia viacerých faktorov naraz: rozsah EU261,
                dôvod problému, kvalita dôkazov, správanie aerolinky a to, či sa spor zastaví pri
                prvej reklamácii alebo sa posunie ďalej.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo hovoria oficiálne zdroje EÚ
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Portál <strong>Your Europe</strong> a materiály Európskej komisie ukazujú jasnú
                kostru: pri meškaní viac než 3 hodiny v cieli, pri zrušení alebo pri zmeškanom
                prestupe v jednej rezervácii môže vzniknúť nárok na kompenzáciu, ak nejde o
                mimoriadne okolnosti.
              </p>
              <p>
                Zároveň platí, že ak aerolínka tvrdí mimoriadne okolnosti, musí ich vedieť
                preukázať. Ak cestujúci nedostane odpoveď do 2 mesiacov alebo nie je spokojný s
                odpoveďou, spor sa môže posunúť ďalej na národný orgán, ADR alebo súdnu cestu.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Praktické pravidlo pre rýchle sebahodnotenie
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-emerald-200 p-6 dark:border-emerald-800">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Skôr silný prípad
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Jasný let pod EU261, dobré dôkazy, 3+ hodiny v cieli alebo zrušenie a bez
                  presvedčivo preukázaných mimoriadnych okolností.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Skôr hraničný prípad
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Niečo sedí, ale chýbajú dokumenty, dôvod problému je sporný alebo letová situácia
                  je zložitejšia než vyzerá na prvý pohľad.
                </p>
              </Card>
              <Card className="border-rose-200 p-6 dark:border-rose-800">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Skôr slabý prípad
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Let je mimo rozsahu EU261, ide o dve oddelené rezervácie alebo aerolínka má
                  silný a doložený argument o mimoriadnych okolnostiach.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si dať prípad rýchlo preveriť?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Najpraktickejšie je oddeliť jasné prípady od tých sporných. To vám pomôže rozhodnúť,
                či sa oplatí vlastná reklamácia, alebo už riešiť ďalší postup cez partnera.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_claim_success_chance_final_cta_delay",
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
                        "sk_claim_success_chance_final_cta_cancelled",
                        cancelledFlightHref
                      )
                    }
                  >
                    Preveriť zrušený let
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
                  Čo robiť, keď aerolínka neodpovedá
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak prípad vyzerá silno, ale letecká spoločnosť jednoducho mlčí.
                </p>
                <Link
                  href="/sk/blog/co-robit-ked-aerolinka-neodpoveda"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Zamietnutá reklamácia – čo robiť
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete vedieť, čo robiť, keď aerolínka tvrdí, že nárok nevznikol.
                </p>
                <Link
                  href="/sk/blog/zamietnuta-reklamacia-co-robit"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete prípad preveriť prakticky podľa konkrétnych okolností letu.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_claim_success_chance_related_home", claimWingerHomeHref)
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
