import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Euro,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { ClaimWingerLtSection } from "@/components/ClaimWingerLtSection";
import { LayoutLt } from "@/components/LayoutLt";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerLtLink, trackClaimWingerLtClick } from "@/lib/claimwingerLinksLt";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/lt";

const homeFaqs = [
  {
    question: "Kada keleivis Lietuvoje gali gauti kompensaciją pagal EU261?",
    answer:
      "Dažniausiai tada, kai skrydis išvyksta iš ES, JK, Šveicarijos ar EEE oro uosto, arba kai į šią zoną atvykstama su oro vežėju, kuriam taikomos šios taisyklės. Svarbu tikrasis skrydį vykdęs vežėjas, atvykimo vėlavimas ir sutrikimo priežastis.",
  },
  {
    question: "Kokia gali būti kompensacijos suma?",
    answer:
      "Fiksuotos sumos yra 250, 400 arba 600 eurų vienam keleiviui. Dydis priklauso nuo maršruto atstumo ir teisinio taikymo, o ne nuo bilieto kainos.",
  },
  {
    question: "Ar EU261 galioja Ryanair, Wizz Air, airBaltic, LOT ir Lufthansa?",
    answer:
      "Taip, bet kiekvienu atveju reikia vertinti maršrutą ir skrydį vykdantį vežėją. Išvykstant iš Lietuvos oro uosto EU261 paprastai taikomas bet kuriai oro linijai, o atvykstant iš trečiosios šalies svarbu, ar vežėjas patenka į EU/UK/CH/EEA taikymo sritį.",
  },
  {
    question: "Kodėl ClaimWinger forma yra anglų kalba?",
    answer:
      "ClaimWinger kol kas neturi atskiros lietuviškos versijos, todėl lietuviški puslapiai veda į anglišką formą. Ji gali būti naudojama konkrečiam skrydžio atvejui patikrinti ir turi lietuviškai pažymėtus UTM parametrus srauto analitikai.",
  },
  {
    question: "Kur kreiptis, jei oro linija neatsako?",
    answer:
      "Pirmiausia verta pateikti rašytinę pretenziją pačiai oro linijai ir išsaugoti atsakymą arba tylos įrodymą. Jei susitarimo nėra, Lietuvos atvejais skundus dėl keleivių teisių nagrinėja Lietuvos transporto saugos administracija.",
  },
];

const highlights = [
  {
    title: "3 valandos galutinėje paskirties vietoje",
    description:
      "Vėluojančiam skrydžiui svarbiausias kriterijus paprastai yra bent 3 valandų vėlavimas atvykus į galutinį kelionės tikslą.",
    icon: Clock3,
  },
  {
    title: "250 / 400 / 600 eurų",
    description:
      "EU261 ir UK261 naudoja fiksuotas sumas pagal atstumą. Pigus bilietas nereiškia mažesnės kompensacijos.",
    icon: Euro,
  },
  {
    title: "Vilnius, Kaunas, Palanga ir Europos hubai",
    description:
      "Maršrutai per Rygą, Varšuvą, Kopenhagą, Frankfurtą, Amsterdamą ar Londoną dažnai sukuria realius EU261 ir UK261 atvejus.",
    icon: Plane,
  },
];

const scenarios = [
  {
    title: "Skrydis vėluoja",
    href: "/lt/veluojantis-skrydis",
    description:
      "Tinka atvykimo vėlavimui, praleistam persėdimui ir atvejams, kai galutinį tikslą pasiekėte bent 3 valandomis vėliau.",
    icon: Clock3,
  },
  {
    title: "Skrydis atšauktas",
    href: "/lt/atsauktas-skrydis",
    description:
      "Paaiškiname, kada atšaukimas suteikia teisę į kompensaciją, bilieto grąžinimą, naują maršrutą ir pagalbą oro uoste.",
    icon: Plane,
  },
  {
    title: "Kompensacijos skaičiuoklė",
    href: "/lt/kompensacijos-skaiciuokle",
    description:
      "Įveskite oro uostus ir situaciją, kad gautumėte pirminį 250, 400 arba 600 eurų įvertinimą.",
    icon: Euro,
  },
  {
    title: "Blogas lietuviškai",
    href: "/lt/blog",
    description:
      "Paruošta struktūra būsimiems gidams apie oro linijas, oro uostus, maršrutus ir keleivių teises.",
    icon: BookOpen,
  },
];

export default function LithuanianHomePage() {
  const claimHref = buildClaimWingerLtLink("home", {
    medium: "homepage_context_link",
    campaign: "lt_home",
    content: "main_claim_check",
  });
  const schemas = combineSchemas(
    generateOrganizationSchema({ url: canonicalUrl }),
    generateWebPageSchema({
      title: "Kompensacija už vėluojantį ar atšauktą skrydį - EU261 lietuviškai",
      description:
        "Lietuviškas gidas apie kompensaciją už vėluojantį, atšauktą arba perpildytą skrydį pagal EU261 ir UK261.",
      url: canonicalUrl,
      inLanguage: "lt-LT",
    }),
    generateFAQSchema(homeFaqs),
    generateBreadcrumbSchema([{ name: "Pradžia", url: canonicalUrl }]),
  );

  return (
    <LayoutLt>
      <SEO
        title="Kompensacija už vėluojantį ar atšauktą skrydį iki 600 € | ProblemLot.com"
        description="Keleivių teisės lietuviškai: EU261 ir UK261 už vėluojantį skrydį, atšauktą skrydį, praleistą persėdimą ir kompensaciją iki 600 eurų."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="lt_LT"
        language="Lithuanian"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 pb-16 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
              <Sparkles className="h-4 w-4" />
              EU261 ir UK261 lietuviškai kelionėms per Europą
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
                  Vėluojantis ar atšauktas skrydis?
                  <span className="mt-3 block text-emerald-700 dark:text-emerald-300">
                    Galite turėti teisę į iki 600 eurų kompensaciją.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                  Lietuviška ProblemLot.com versija aiškiai paaiškina, kada EU261 ir UK261
                  saugo keleivius iš Lietuvos, kaip skaičiuojamos 250, 400 ir 600 eurų sumos,
                  kokius įrodymus verta išsaugoti ir kada verta perduoti atvejį ClaimWinger.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={claimHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerLtClick("lt_home_hero_context", claimHref)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-800"
                  >
                    Patikrinti atvejį ClaimWinger
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Link
                    href="/lt/kompensacijos-skaiciuokle"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-bold text-slate-950 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 dark:bg-gray-900 dark:text-white dark:ring-slate-800 dark:hover:bg-gray-800"
                  >
                    Atidaryti skaičiuoklę
                  </Link>
                </div>
              </div>

              <ClaimWingerLtSection
                className="lg:mt-2"
                badge="Greita skrydžio patikra"
                title="Patikrinkite skrydį čia pat"
                description="Naudokite anglišką ClaimWinger formą pirminiam įvertinimui. Tai greičiausias kelias, jei jau žinote maršrutą, datą ir kas nutiko skrydžiui."
                ctaHref={claimHref}
                ctaLabel="Patikrinti ClaimWinger"
                placement="lt_home_hero_embed"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-emerald-100 bg-white/80 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <ShieldCheck className="h-4 w-4" />
                Svarbiausios taisyklės trumpai
              </div>
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Kas lemia teisę į kompensaciją?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="p-6">
                    <Icon className="mb-4 h-9 w-9 text-emerald-700 dark:text-emerald-300" />
                    <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Pasirinkite tinkamą kitą žingsnį
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                Kiekvienas puslapis sukurtas konkrečiai situacijai, kad nereikėtų gaišti laiko
                bendroms, neaiškioms taisyklėms.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {scenarios.map((scenario) => {
                const Icon = scenario.icon;

                return (
                  <Link key={scenario.href} href={scenario.href} className="group">
                    <Card className="h-full p-6 transition group-hover:-translate-y-1 group-hover:border-emerald-200 group-hover:shadow-lg dark:group-hover:border-emerald-800">
                      <Icon className="mb-4 h-8 w-8 text-emerald-700 dark:text-emerald-300" />
                      <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">
                        {scenario.title}
                      </h3>
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {scenario.description}
                      </p>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-16 dark:bg-gray-900/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-950 dark:text-white">
              Dažniausiai užduodami klausimai
            </h2>
            <div className="space-y-4">
              {homeFaqs.map((faq) => (
                <Card key={faq.question} className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-slate-950 dark:text-white">{faq.question}</h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </LayoutLt>
  );
}
