import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/potrebujem-pravnika-na-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=need_lawyer";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=need_lawyer";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=need_lawyer";

const faqItems = [
  {
    question: "Potrebujem právnika na odškodnenie za let?",
    answer:
      "Vo väčšine jednoduchých prípadov nie. Reklamáciu môžete podať sami priamo aerolínke. Právnik alebo profesionálne vedenie prípadu začína dávať väčší zmysel pri zamietnutí, neodpovedaní, spore o mimoriadne okolnosti alebo pri ďalšej eskalácii.",
  },
  {
    question: "Môžem si nárok uplatniť aj bez právnika?",
    answer:
      "Áno. Oficiálne pravidlá EÚ počítajú s tým, že najprv reklamujete priamo u aerolinky a ak treba, môžete sa obrátiť na národný orgán, ADR alebo súd. Právnik nie je povinnou podmienkou už pri prvom kroku.",
  },
  {
    question: "Kedy má právnik alebo agentúra väčší zmysel?",
    answer:
      "Najmä vtedy, keď je prípad sporný, aerolínka mlčí, odmieta plniť alebo keď sa vec posúva za bežnú prvú reklamáciu. Vtedy je dôležitý proces, argumentácia a ďalšia eskalácia.",
  },
  {
    question: "Je ClaimWinger to isté ako právnik?",
    answer:
      "Nie. ClaimWinger je partner na riešenie nárokov za problémy s letmi. Výhodou je, že nemusíte hneď samostatne zháňať advokáta pre prvý krok a pri ClaimWingeri platí 30 % provízia bez ohľadu na to, či sa prípad rieši mimosúdne alebo súdne.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function PotrebujemPravnikaNaOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Potrebujem právnika na odškodnenie? Väčšinou nie, ale niekedy to mení výsledok"
        description="Treba si na odškodnenie za let hneď hľadať právnika? Vysvetľujeme, kedy stačí vlastná reklamácia, kedy má zmysel ClaimWinger a kedy je prípad už spornejší."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Potrebujem právnika na odškodnenie?",
            description:
              "Praktické vysvetlenie, kedy si môžete nárok riešiť sami a kedy má zmysel právnik alebo profesionálne vedenie prípadu.",
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
                name: "Potrebujem právnika na odškodnenie?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Potrebujem právnika na odškodnenie?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              Praktická odpoveď pre vlastnú reklamáciu aj ďalšiu eskaláciu
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Potrebujem právnika na odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najkratšia odpoveď je: <strong>väčšinou nie hneď na začiatku</strong>. Prvú reklamáciu voči
              aerolinke môžete podať sami. Právnik alebo profesionálne vedenie prípadu začína dávať
              väčší zmysel vtedy, keď je prípad sporný, zamietnutý alebo sa posúva ďalej než len cez
              jednoduchú reklamáciu.
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
            <Card className="border-purple-200 bg-gradient-to-br from-purple-600 to-indigo-700 p-8 text-white shadow-xl dark:border-purple-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-purple-50">
                <p>
                  <strong>Na prvý krok právnika zvyčajne nepotrebujete.</strong>
                </p>
                <p>
                  Podľa oficiálnych pravidiel EÚ sa reklamácia najprv posiela <strong>priamo aerolínke</strong>.
                </p>
                <p>
                  Ak je však prípad zamietnutý, ignorovaný alebo sa posúva na ďalšiu eskaláciu, odborné
                  vedenie môže mať väčšiu hodnotu než len ďalší vlastný pokus bez stratégie.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Neviete, či to ešte zvládnete sami alebo už treba pomoc?"
            description="ClaimWinger vie pomôcť posúdiť, či ide o jednoduchý prípad vhodný na rýchle preverenie, alebo už o spor, kde sa oplatí riešiť ďalšiu eskaláciu bez toho, aby ste si hneď sami zháňali právnika."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=need_lawyer"
            ctaLabel="Preveriť, či potrebujem pomoc"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_need_lawyer_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy si viete nárok riešiť sami
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "máte jasné meškanie alebo zrušenie a dobré dokumenty",
                "aerolínka ešte vec vôbec neposudzovala alebo ide o prvú reklamáciu",
                "prípad nie je zložito spojený s prestupmi, dvoma letenkami alebo sporom o dôvod",
                "chcete najprv skúsiť priamu reklamáciu bez ďalších nákladov alebo provízie",
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
              Kedy už pomoc dáva väčší zmysel
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Aerolínka neodpovedá alebo zamieta
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Vtedy už nejde len o napísanie formulára, ale aj o proces, argumentáciu a rozhodnutie,
                  či posunúť vec ďalej na národný orgán, ADR alebo súdnu cestu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Spor o mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak aerolínka tvrdí, že prípad nespadá do kompenzácie, spor býva viac o dôkazoch a
                  právnej logike než o samotnom formulári.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Vec sa posúva ďalej než len na prvú reklamáciu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Oficiálne zdroje EÚ rátajú aj s národným orgánom, ADR a súdnou cestou. V tejto fáze
                  už môže byť praktickejšie mať prípad vedený systematicky, nie len improvizovať.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Právnik, ClaimWinger alebo vlastná reklamácia?
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Vlastná reklamácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dobrá voľba na jednoduchý prvý krok, ak máte čas a prípad vyzerá čisto.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  ClaimWinger
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Praktická voľba, ak nechcete hneď samostatne zháňať právnika a chcete, aby prípad
                  išiel organizovane ďalej. Pri ClaimWingeri platí <strong>30 % provízia</strong>
                  bez ohľadu na to, či sa vec rieši mimosúdne alebo súdne.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Samostatný právnik
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Môže dávať zmysel pri spornejšej alebo špecifickej veci, ale nie je povinnou vstupenkou
                  už do prvého kroku reklamácie.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo hovoria oficiálne zdroje EÚ
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Portál <strong>Your Europe</strong> vedie pasažiera najprv k tomu, aby reklamoval
                priamo u aerolinky. Ak to nepomôže, opisuje ďalšie možnosti: <strong>národný orgán</strong>,
                <strong> ADR</strong> a <strong>súd</strong>, vrátane európskeho konania vo veciach s nízkou hodnotou sporu.
              </p>
              <p>
                To je dôležité aj pre jednoduchú odpoveď na otázku o právnikovi: právo EÚ nehovorí, že
                si pri odškodnení musíte hneď zabezpečiť advokáta. Skôr ukazuje viacero foriem nápravy,
                z ktorých právnik je len jedna možnosť.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete zistiť, či váš prípad ešte zvládnete sami?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Najlepšie je najprv odlíšiť, či riešite bežný meškajúci let, zrušený let alebo už spor,
                kde aerolínka neodpovedá alebo odmieta plniť. Od toho sa odvíja aj to, či právnika
                vôbec potrebujete.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_need_lawyer_final_cta_delay", delayedFlightHref)
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
                      trackClaimClick("sk_need_lawyer_final_cta_cancelled", cancelledFlightHref)
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
                  Čo robiť, keď aerolínka neodpovedá
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa prípad nehýbe, otázka už často nie je o právnikovi, ale o ďalšom procese.
                </p>
                <Link
                  href="/sk/blog/co-robit-ked-aerolinka-neodpoveda"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o neodpovedaní
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Zamietnutá reklamácia
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak problém už nie je v podaní reklamácie, ale v tom, že vám prišla zamietavá odpoveď.
                </p>
                <Link
                  href="/sk/blog/zamietnuta-reklamacia-co-robit"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o zamietnutí
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete prípad najprv preveriť prakticky a bez samostatného zháňania právnika.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_need_lawyer_related_home", claimWingerHomeHref)
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
