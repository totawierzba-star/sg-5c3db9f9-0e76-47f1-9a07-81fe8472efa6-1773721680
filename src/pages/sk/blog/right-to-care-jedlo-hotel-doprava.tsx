import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/right-to-care-jedlo-hotel-doprava";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=right_to_care";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=right_to_care";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=right_to_care";

const faqItems = [
  {
    question: "Čo je právo na starostlivosť (right to care) podľa EU261?",
    answer:
      "Je to povinnosť aerolinky bezplatne vám poskytnúť jedlo, nápoje, komunikáciu a v prípade potreby ubytovanie s transportom pri meškaní, zrušení alebo odmietnutí nástupu. Právo sa nepočíta do 3-hodinovej hranice pre paušálnu kompenzáciu – platí aj pri kratšom meškaní.",
  },
  {
    question: "Od koľkých hodín meškania mám nárok na občerstvenie?",
    answer:
      "Pri letoch do 1 500 km od 2 hodín, pri letoch 1 500 – 3 500 km od 3 hodín, pri letoch nad 3 500 km mimo EÚ od 4 hodín. Občerstvenie musí byť primerané dĺžke čakania.",
  },
  {
    question: "Kedy musí aerolinka zaplatiť hotel?",
    answer:
      "Vždy, keď si meškanie alebo zrušenie vyžaduje nocľah. Typicky ak let bol presunutý až na nasledujúci deň, alebo meškanie trvá cez noc. Aerolinka musí uhradiť ubytovanie aj dopravu medzi letiskom a hotelom.",
  },
  {
    question: "Dostanem jedlo a hotel aj pri mimoriadnych okolnostiach?",
    answer:
      "Áno. Právo na starostlivosť platí bez ohľadu na príčinu meškania. Aj keď aerolinka nemusí platiť paušálnu kompenzáciu (napr. pri extrémnom počasí), pitie, jedlo, hotel a dopravu stále hradí.",
  },
  {
    question: "Čo ak som si jedlo a hotel zaplatil sám?",
    answer:
      "Odložte si originálne účtenky a pošlite reklamáciu aerolinke s dokumentáciou. Aerolinka vám musí uhradiť primerané výdavky – zvyčajne jedlo, nealkoholické nápoje, taxi a štandardné 3★ ubytovanie. Luxusné hotely alebo alkohol sa nepreplácajú.",
  },
  {
    question: "Je právo na starostlivosť oddelené od paušálnej kompenzácie?",
    answer:
      "Áno. Dostávate ho súbežne. Starostlivosť za výdavky a kompenzácia 250 / 400 / 600 € ide nad rámec – nie je to buď-alebo.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function RightToCareJedloHotelDopravaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Právo na starostlivosť: jedlo, hotel a doprava pri meškaní letu"
        description="Čo vám aerolinka musí poskytnúť pri meškaní alebo zrušení letu: občerstvenie, hotel, dopravu a komunikáciu. Prehľadný sprievodca pravidlom right to care podľa EU261."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Právo na starostlivosť: jedlo, hotel a doprava pri meškaní letu",
            description:
              "Ako funguje right to care podľa EU261: kedy aerolinka musí poskytnúť občerstvenie, ubytovanie a dopravu bezplatne.",
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
                name: "Právo na starostlivosť pri meškaní letu",
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
            <span>Právo na starostlivosť pri meškaní letu</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Praktická odpoveď – čo vám aerolinka musí dať
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Právo na starostlivosť: jedlo, hotel a doprava pri meškaní
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pri meškaní alebo zrušení letu vám aerolinka musí bezplatne zabezpečiť{" "}
              <strong>občerstvenie</strong>, <strong>hotel</strong> a <strong>dopravu</strong>.
              Toto pravidlo – tzv. <strong>right to care</strong> (článok 9 nariadenia EC 261/2004)
              – platí <em>bez ohľadu na príčinu meškania</em>, teda aj pri mimoriadnych okolnostiach.
              Pokiaľ aerolinka službu neposkytla, máte právo na{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_right_to_care_intro_link", delayedFlightHref)}
              >
                preplatenie výdavkov cez ClaimWinger
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
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white shadow-xl dark:border-emerald-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-emerald-50">
                <p>
                  <strong>Jedlo a pitie:</strong> od 2 h (krátke lety) / 3 h (stredné) / 4 h (dlhé),
                  primerané dĺžke čakania.
                </p>
                <p>
                  <strong>Dve komunikácie</strong> (telefonát, e-mail alebo fax) bezplatne.
                </p>
                <p>
                  <strong>Hotel + doprava medzi letiskom a hotelom:</strong> vždy, keď je potrebný
                  nocľah – bez horného limitu počtu nocí.
                </p>
                <p>
                  Funguje aj pri mimoriadnych okolnostiach. <strong>Neodpočítava</strong> sa od
                  paušálnej kompenzácie 250 / 400 / 600 €.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Aerolinka vám nedala jedlo, hotel alebo dopravu? Získajte späť peniaze"
            description="ClaimWinger preverí vaše výdavky počas meškania letu a pripraví vám reklamáciu na ich preplatenie. Aj pri mimoriadnych okolnostiach – právo na starostlivosť platí vždy."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=right_to_care"
            ctaLabel="Preveriť preplatenie výdavkov"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie vašich výdavkov."
            placement="sk_blog_right_to_care_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy aerolinka musí poskytnúť starostlivosť
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lety do 1 500 km – od 2 hodín meškania
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Typické krátke trasy: Bratislava – Rím, Košice – Londýn, Viedeň – Paríž. Po 2 hodinách
                  čakania vám musí aerolinka ponúknuť občerstvenie, pitie a komunikáciu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lety v EÚ nad 1 500 km alebo mimo EÚ 1 500 – 3 500 km – od 3 hodín
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Trasy ako Viedeň – Lisabon, Bratislava – Istanbul, Viedeň – Dubaj. Rovnaké právo na
                  starostlivosť, ale s trojhodinovým prahom.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lety nad 3 500 km mimo EÚ – od 4 hodín
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dlhé trasy: Viedeň – New York, Viedeň – Bangkok, Viedeň – Tokio. Pri takýchto letoch
                  sa starostlivosť začína od 4 hodín meškania.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo presne vám aerolinka musí dať (článok 9 EC 261/2004)
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Občerstvenie a nápoje
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Primerané dĺžke čakania. Obvykle vouchery na food court (10 – 15 € / osoba / 3 h).
                  Alkohol NIE je povinný – voda, káva, džús, čaj, nealkoholické nápoje áno.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Dve bezplatné komunikácie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Telefonáty, e-maily, fax alebo SMS na kontaktovanie rodiny, zamestnávateľa, hotela
                  v cieli. V praxi dnes často rieši free Wi-Fi na letisku.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Ubytovanie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Keď meškanie presiahne do ďalšieho dňa alebo si vyžaduje nocľah. Štandardné 3★
                  ubytovanie, bez luxusu, ale v primeranej kvalite. Aerolinka musí zabezpečiť aj izbu
                  cez agentúru, ak vlastné kontakty nemá.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Doprava medzi letiskom a hotelom
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aerolinka platí transfer do hotela aj späť. Obvykle cez shuttle autobus alebo taxi.
                  Ak ste si dopravu zaplatili sami, musí vám preplatiť primerané náklady.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Aerolinka vám nič neponúkla – čo robiť
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Na letiskách počas veľkých meškaní sa často stane, že aerolinka starostlivosť vôbec
                nezabezpečí – pasažieri si musia jedlo, hotel a dopravu platiť sami. V tomto prípade
                nejde o porušenie, ktoré by strácalo vaše práva. <strong>Máte nárok na preplatenie</strong>{" "}
                primeraných výdavkov.
              </p>
              <p>Postup je jednoduchý:</p>
              <ul>
                <li>
                  <strong>Zachovajte všetky originálne účtenky</strong> – strava, taxi, hotel,
                  SIM karta, úložisko batožiny, všetko v súvislosti s meškaním.
                </li>
                <li>
                  <strong>Zdokumentujte časovú os</strong> – kedy bol pôvodný odlet, kedy prišlo
                  oznámenie o meškaní, kedy ste si výdavok urobili.
                </li>
                <li>
                  <strong>Pošlite reklamáciu</strong> priamo aerolinke s prílohami. Vzor nájdete v
                  článku{" "}
                  <Link
                    href="/sk/blog/ako-podat-staznost-letecka-spolocnost"
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    Ako podať sťažnosť leteckej spoločnosti
                  </Link>
                  .
                </li>
                <li>
                  <strong>Pri zamietnutí alebo mlčaní</strong> eskalujte cez špecializovanú firmu
                  alebo Dopravný úrad SR.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo sa NEPROPLÁCA
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "alkoholické nápoje",
                "luxusné 4★/5★ hotely, keď je dostupný štandard",
                "predražené taxi, ak je k dispozícii shuttle",
                "drahé reštaurácie typu fine dining",
                "prémiové služby (masáže, wellness, minibar)",
                "drahé nákupy v duty free",
              ].map((item) => (
                <Card key={item} className="border-slate-200 p-4 dark:border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-red-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Zlaté pravidlo: čokoľvek, čo by ste v tej situácii za vlastné peniaze urobili aj bez
              meškania, aerolinka nepreplatí.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Starostlivosť vs. kompenzácia – neplaťte si nič proti druhému
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Pri meškaní nad 3 hodiny majú cestujúci často nárok <strong>na oboje</strong>:
              </p>
              <ul>
                <li>
                  <strong>Preplatenie výdavkov</strong> (strava, hotel, doprava) podľa článku 9
                  nariadenia – reálne vydané peniaze.
                </li>
                <li>
                  <strong>Paušálnu kompenzáciu 250 / 400 / 600 €</strong> podľa článku 7 nariadenia –
                  fixná suma za nepohodlie.
                </li>
              </ul>
              <p>
                Aerolinky sa občas snažia tieto dva nároky „zlúčiť" – napríklad tvrdiť, že poskytnutý
                voucher 30 € za obed „znižuje" paušálnu kompenzáciu. Je to <strong>nesprávne</strong>.
                Ide o dve samostatné plnenia podľa dvoch samostatných článkov nariadenia.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo si zdokumentovať pri čakaní na letisku
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "fotografia odletovej tabule s pôvodným a novým časom",
                "všetky SMS a e-maily s oznámením o meškaní",
                "účtenky za jedlo, pitie, taxi, hotel, internet",
                "boarding pass alebo potvrdenie o check-ine",
                "svedectvo ďalších pasažierov z rovnakého letu",
                "fotografia voucherov, ak ich aerolinka dala",
                "časy – kedy ste sa pýtali o starostlivosť a aerolinka odmietla",
                "rezervačný kód (PNR) a číslo letu",
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
                Zaplatili ste hotel, taxi alebo jedlo z vlastného?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Odovzdajte prípad ClaimWinger. Prejdeme si vaše účtenky, pripravíme reklamáciu aerolinke
                a eskalujeme ju, ak nereaguje. Ak meškanie prekročilo 3 hodiny, pridáme aj nárok na
                paušálnu kompenzáciu 250 – 600 €. Preverenie je zdarma a bez záväzku.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_right_to_care_final_primary", delayedFlightHref)}
                  >
                    Požiadať o preplatenie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_right_to_care_final_secondary", cancelledFlightHref)
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
                  Nočné meškanie: hotel a práva
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Špecifické pravidlá pri meškaní cez noc vrátane presných pravidiel pre ubytovanie.
                </p>
                <Link
                  href="/sk/blog/nocne-meskanie-hotel-a-prava"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti a kompenzácia
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Prečo aj pri počasí či štrajku starostlivosť stále platí, aj keď kompenzácia nie.
                </p>
                <Link
                  href="/sk/blog/mimoriadne-okolnosti-kompenzacia"
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
                  Preverte si nárok na kompenzáciu aj preplatenie výdavkov v slovenskom formulári.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_right_to_care_related_home", claimWingerHomeHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger
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
