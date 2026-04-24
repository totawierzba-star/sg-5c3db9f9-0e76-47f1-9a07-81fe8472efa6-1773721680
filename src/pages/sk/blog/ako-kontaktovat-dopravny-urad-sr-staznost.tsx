import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/ako-kontaktovat-dopravny-urad-sr-staznost";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=neb_sr";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=neb_sr";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=neb_sr";

const faqItems = [
  {
    question: "Kto je slovenský národný regulátor pre práva cestujúcich v leteckej doprave?",
    answer:
      "Je to Dopravný úrad SR, konkrétne jeho Divízia civilného letectva. Funguje ako National Enforcement Body (NEB) pre nariadenie EC 261/2004 a posudzuje sťažnosti cestujúcich na aerolinky, ktorých lety odlietavajú z územia SR alebo prilietavajú z tretích krajín s aerolinkami EÚ.",
  },
  {
    question: "Kedy má zmysel sťažovať sa na Dopravný úrad?",
    answer:
      "Vždy, keď aerolinka nereaguje dlhšie než 6 týždňov alebo odmietla vašu reklamáciu bez dostatočného odôvodnenia. Dopravný úrad nevypláca kompenzáciu, ale skúma porušenie pravidiel a dokáže aerolinku usmerniť alebo pokutovať.",
  },
  {
    question: "Môže Dopravný úrad nariadiť aerolinke vyplatiť peniaze?",
    answer:
      "Priamo nie – nevydáva platobné rozhodnutia ako súd. Jeho postoj však má vysokú váhu: aerolinky ho často rešpektujú a pristúpia k vyplateniu. Pri ignorovaní môže hroziť pokuta alebo odňatie povolení.",
  },
  {
    question: "Koľko trvá posúdenie sťažnosti?",
    answer:
      "Spravidla 2 – 6 mesiacov. Ide o administratívny proces, nie súdne konanie. Počas neho sa dopravca musí vyjadriť a Dopravný úrad vydá záver.",
  },
  {
    question: "Potrebujem právnika na sťažnosť Dopravnému úradu?",
    answer:
      "Nie. Sťažnosť môže podať každý cestujúci sám. V praxi však pomáha mať už predchádzajúce reklamácie zdokumentované a priložiť ich.",
  },
  {
    question: "Ako Dopravný úrad kontaktovať?",
    answer:
      "Sťažnosť sa podáva písomne – poštou, e-mailom alebo cez Slovensko.sk s elektronickým podpisom. Kontaktné údaje sú zverejnené na stránke Dopravného úradu SR v sekcii civilného letectva / Ochrana práv cestujúcich.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AkoKontaktovatDopravnyUradSrStaznostPage() {
  return (
    <LayoutSk>
      <SEO
        title="Dopravný úrad SR: ako podať sťažnosť na aerolinku (NEB Slovensko)"
        description="Aerolinka odmietla reklamáciu? Eskalujte ju na Dopravný úrad SR – slovenský národný regulátor pre EC 261/2004. Návod, čo priložiť a ako sa sťažnosť podáva."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ako podať sťažnosť na Dopravný úrad SR",
            description:
              "Sprievodca eskaláciou reklamácie za meškanie alebo zrušenie letu na slovenský národný regulátor (NEB).",
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
                name: "Sťažnosť na Dopravný úrad SR",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Sťažnosť na Dopravný úrad SR</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              Eskalácia pre slovenských cestujúcich
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Dopravný úrad SR: ako podať sťažnosť na aerolinku
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Keď aerolinka ignoruje alebo odmietne vašu reklamáciu, nemusíte sa hneď obracať na súd.
              Na Slovensku existuje <strong>Dopravný úrad SR</strong>, ktorý ako <strong>National
              Enforcement Body</strong> podľa EC 261/2004 posudzuje porušenia pravidiel aerolinkami.
              Sťažnosť je bezplatná, nepotrebujete právnika a aerolinky ju typicky berú vážnejšie než
              jednotlivé reklamácie. Alternatívne môžete prípad odovzdať{" "}
              <a
                href={claimWingerHomeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_neb_sr_intro", claimWingerHomeHref)}
              >
                ClaimWinger Slovensko
              </a>
              , ktorý paralelne eskaluje aj na súd.
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
            <Card className="border-amber-200 bg-gradient-to-br from-amber-600 to-orange-700 p-8 text-white shadow-xl dark:border-amber-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-amber-50">
                <p>
                  <strong>Kto:</strong> Dopravný úrad SR, Divízia civilného letectva – pre lety{" "}
                  <strong>odlietajúce zo Slovenska</strong> a pre lety z tretích krajín s EÚ aerolinkou.
                </p>
                <p>
                  <strong>Ako:</strong> Písomná sťažnosť poštou, e-mailom alebo cez Slovensko.sk.
                  Priložte reklamáciu aj odpoveď aerolinky.
                </p>
                <p>
                  <strong>Trvanie:</strong> 2 – 6 mesiacov. Dopravný úrad nevypláca kompenzáciu, ale
                  vydáva stanoviská – aerolinky ich obvykle rešpektujú.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Nechcete čakať 6 mesiacov na Dopravný úrad?"
            description="ClaimWinger eskaluje paralelne na aerolinku, regulátora aj súd. Získate peniaze rýchlejšie a bez administratívneho papierovania."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=neb_sr"
            ctaLabel="Eskalovať cez ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_neb_sr_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy má zmysel podať sťažnosť
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  1. Aerolinka neodpovedala viac ako 6 týždňov
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Európska komisia odporúča cestujúcim, aby pred sťažnosťou regulátorovi dali
                  aerolinke minimálne 6 týždňov na odpoveď. Ak ticho pretrváva, je to jasný signál
                  pre eskaláciu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  2. Aerolinka odmietla bez jasného odôvodnenia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Šablónové odpovede typu „kompenzácia sa nevzťahuje na tento prípad" bez uvedenia
                  konkrétnych mimoriadnych okolností sú ideálny dôvod na sťažnosť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  3. Aerolinka tvrdí mimoriadne okolnosti bez dôkazov
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Regulátor má právomoc požadovať od aerolinky konkrétne dôkazy (meteo report,
                  štrajková nota, rozhodnutie ATC). Zvyčajne sa aerolinky v tejto fáze vyrovnajú.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  4. Aerolinka ponúkla len voucher
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Voucher bez písomného súhlasu je porušenie článku 7 ods. 3 EU261. Dopravný úrad
                  často v tomto druhu prípadov rozhoduje v prospech cestujúceho.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy je príslušný Dopravný úrad SR a kedy iný regulátor
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Podľa jednotného stanoviska EK sa reklamácia rieši <strong>podľa krajiny odletu</strong>.
                Výnimkou sú lety z tretích krajín do EÚ, kde je príslušný regulátor v krajine, kam let
                smeroval, ak ho operovala EÚ aerolinka.
              </p>
              <ul>
                <li>
                  <strong>Let z Bratislavy / Košíc / Viedeň</strong> (pre SK pasažiera) → Dopravný úrad
                  SR (Viedeň je Österreich – Austro-Control, ale mnohokrát sa komunikácia prijme aj na SR).
                </li>
                <li>
                  <strong>Let z inej krajiny EÚ do SR</strong> (napr. Londýn – Bratislava) → regulátor
                  krajiny odletu (CAA UK).
                </li>
                <li>
                  <strong>Let z tretej krajiny do SR s EÚ aerolinkou</strong> (napr. Bangkok – Viedeň –
                  Bratislava, Austrian Airlines) → Dopravný úrad SR alebo AT regulátor.
                </li>
              </ul>
              <p>
                Aktuálny zoznam národných enforcement bodies (NEB) vedie Európska komisia. Ak si
                nie ste istí, obráťte sa najprv na Dopravný úrad SR – ten vám postúpi sťažnosť
                správnemu regulátorovi.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo priložiť k sťažnosti
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "kópiu rezervácie / e-ticket s PNR",
                "boarding pass alebo potvrdenie check-inu",
                "pôvodnú reklamáciu zaslanú aerolinke",
                "odpoveď aerolinky (alebo potvrdenie jej mlčania)",
                "všetky e-maily / SMS o meškaní alebo zrušení",
                "účtenky za výdavky počas meškania",
                "fotografie odletovej tabule alebo svedectvo",
                "vyčíslenie požadovanej sumy podľa článku 7",
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
              Limity Dopravného úradu
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Dopravný úrad SR je dôležitý nástroj, ale má svoje hranice, ktoré sa oplatí vedieť:
              </p>
              <ul>
                <li>
                  <strong>Nevydáva platobné rozhodnutia.</strong> Nemôže priamo nariadiť aerolinke
                  vyplatiť vám peniaze. Funguje v administratívno-regulačnej rovine.
                </li>
                <li>
                  <strong>Dlhé lehoty.</strong> Vyjadrenie aerolinky a vyhodnotenie sťažnosti trvá
                  typicky 2 – 6 mesiacov. Ak potrebujete peniaze rýchlo, súdna cesta (resp.
                  špecializovaná firma) je efektívnejšia.
                </li>
                <li>
                  <strong>Sťažnosť neprerušuje premlčanie.</strong> Podanie sťažnosti na NEB
                  <strong> nezastavuje</strong> 3-ročnú premlčaciu dobu. Pri dlhých sporoch je dobré
                  súbežne pripraviť aj súdne podanie.
                </li>
                <li>
                  <strong>Možná pokuta aerolinke.</strong> Dopravný úrad môže aerolinke udeliť pokutu
                  za systémové porušenia – nie však priamo vyplatiť kompenzáciu vám.
                </li>
              </ul>
              <p>
                Najúčinnejšia stratégia: sťažnosť na Dopravný úrad <strong>paralelne</strong> s
                eskaláciou cez špecializovanú firmu. Aerolinka potom čelí dvom tlakom súčasne a často
                radšej prípad uzavrie mimosúdne.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete kombinovaný tlak na aerolinku?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger môže súbežne s Dopravným úradom SR poslať predžalobnú výzvu a pripraviť
                súdne konanie. Získate kompenzáciu spravidla rýchlejšie a bez vlastnej administratívy.
                Provízia 30 % pri úspechu, 0 € pri neúspechu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_neb_sr_final_primary", delayedFlightHref)}
                  >
                    Eskalovať s ClaimWinger
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_neb_sr_final_secondary", cancelledFlightHref)}
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
                  Aerolinka zamietla reklamáciu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Postup pri zamietnutej reklamácii a príprava eskalácie.
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
                  Kedy ísť na súd
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aká je cena súdneho konania a ako sa pripraviť.
                </p>
                <Link
                  href="/sk/blog/kedy-ist-na-sud-pri-odskodneni-za-let"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Koľko má aerolinka na odpoveď
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Štandardné lehoty a kedy je vhodné eskalovať.
                </p>
                <Link
                  href="/sk/blog/kolko-ma-aerolinka-na-odpoved"
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
