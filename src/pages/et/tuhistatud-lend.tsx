import Head from "next/head";
import Link from "next/link";
import { CalendarDays, CheckCircle2, Euro, Plane, RefreshCw, ShieldCheck, XCircle } from "lucide-react";

import { ClaimWingerEtSection } from "@/components/ClaimWingerEtSection";
import { LayoutEt } from "@/components/LayoutEt";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerEtLink } from "@/lib/claimwingerLinksEt";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/et/tuhistatud-lend";

const faqs = [
  {
    question: "Kas iga tühistatud lend annab õiguse hüvitisele?",
    answer:
      "Ei. Oluline on, millal lennufirma tühistamisest teatas, millist asenduslendu pakuti ja kas põhjuseks olid erakorralised asjaolud.",
  },
  {
    question: "Kas võib saada nii tagasimakse kui ka hüvitise?",
    answer:
      "Mõnel juhul jah. Piletiraha tagastamine, teekonna muutmine ja fikseeritud EU261 hüvitis on eraldi õigused, kuid tulemus sõltub marsruudist, pakutud alternatiivist ja tühistamise põhjusest.",
  },
  {
    question: "Mida teha, kui lennufirma pakub vautšerit?",
    answer:
      "Vautšerit ei pea rahalise tagasimakse asemel automaatselt vastu võtma. Säilitage pakkumine, tingimused ja e-kirjad, et teie juhtumit saaks täpselt hinnata.",
  },
  {
    question: "Kas EU261 kehtib Eestist väljuvatele tühistatud lendudele?",
    answer:
      "Jah. Kui lend väljub Eesti lennujaamast, kuulub see üldjuhul määruse (EÜ) nr 261/2004 kohaldamisalasse, sest Eesti on Euroopa Liidu liikmesriik, ning see kehtib olenemata lennufirma päritolust.",
  },
];

const timeline = [
  {
    title: "Vähem kui 7 päeva enne lendu",
    description:
      "Sageli tugevaim hüvitise stsenaarium, eriti kui asenduslend saabub oluliselt hiljem.",
    value: "tugev juhtum",
  },
  {
    title: "7-13 päeva enne lendu",
    description:
      "Hüvitis võib kuuluda maksmisele, kui pakutud asendusmarsruut ei mahu õigusaktides sätestatud ajaakendesse.",
    value: "vajab kontrolli",
  },
  {
    title: "14+ päeva enne lendu",
    description:
      "Fikseeritud hüvitis on üldjuhul vähem tõenäoline, kuid õigus tagasimaksele või alternatiivsele transpordile jääb endiselt oluliseks.",
    value: "nõrgem nõue",
  },
];

const rights = [
  {
    title: "Piletihinna tagastamine",
    description:
      "Kui te ei võta asenduslendu vastu, võib teil olla õigus kasutamata piletiosa tagasimaksele.",
    icon: Euro,
  },
  {
    title: "Alternatiivne marsruut",
    description:
      "Lennufirma peab pakkuma mõistlikku teekonda sihtkohta võrreldavatel tingimustel.",
    icon: RefreshCw,
  },
  {
    title: "Hoolitsus lennujaamas",
    description:
      "Ootamise ajal võib teil olla õigus toidule, jookidele, sidevahenditele, hotellile ja transpordile.",
    icon: ShieldCheck,
  },
];

const checklist = [
  "Säilitage tühistamisteade ja kõik lennufirma e-kirjad.",
  "Pange kirja pakutud asenduslennu väljumis- ja saabumisajad.",
  "Hoidke alles tšekid toidu, hotelli ja transpordi eest, kui lennufirma hoolitsust ei pakkunud.",
  "Kontrollige, kas teade saabus vähem kui 14 päeva enne väljalendu.",
];

export default function EstonianCancelledFlightPage() {
  const claimHref = buildClaimWingerEtLink("cancelled", {
    medium: "cancelled_page_cta",
    campaign: "et_cancelled_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "Tühistatud lend - hüvitis, tagasimakse ja alternatiivne marsruut",
      description:
        "Eestikeelne teejuht reisija õigustest tühistatud lennu korral määruse (EÜ) nr 261/2004 ja UK261 alusel.",
      url: canonicalUrl,
      inLanguage: "et-EE",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Avaleht", url: "https://problemlot.com/et" },
      { name: "Tühistatud lend", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutEt>
      <SEO
        title="Tühistatud lend? Hüvitis kuni 600 € + tagasimakse"
        description="Saage teada, millal tühistatud lend annab õiguse hüvitisele, piletiraha tagastamisele, alternatiivsele marsruudile ja hoolitsusele lennujaamas määruse (EÜ) nr 261/2004 ja UK261 alusel."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="et_EE"
        language="Estonian"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800 dark:bg-red-950/40 dark:text-red-200">
              <XCircle className="h-4 w-4" />
              Tühistatud lend EU261 / UK261 järgi
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Tühistatud lend? Kontrollige hüvitist, tagasimakset ja uut marsruuti.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Tühistatud lennu korral võib reisijal olla mitu eraldi õigust:
              fikseeritud hüvitis kuni 600 €, piletiraha tagastamine, alternatiivne
              marsruut ja hoolitsus ootamise ajal. Otsustava tähtsusega on teatamise
              tähtaeg ja pakutud alternatiivi kvaliteet.
            </p>

            <ClaimWingerEtSection
              className="mt-10"
              badge="Tühistatud lennu kontroll"
              title="Kontrollige tühistamist eestikeelses vormis"
              description="ClaimWinger saab hinnata, kas tühistamine kuulub EU261 või UK261 alla. Vorm on saadaval eesti keeles aadressil claimwinger.com/et."
              ctaHref={claimHref}
              ctaLabel="Kontrollige tühistatud lendu"
              placement="et_cancelled_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-red-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <CalendarDays className="h-8 w-8 text-red-700 dark:text-red-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Millal tühistamisest teatati?
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {timeline.map((item) => (
                <Card key={item.title} className="p-6">
                  <div className="mb-4 inline-flex rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-700 dark:bg-red-950/40 dark:text-red-300">
                    {item.value}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="p-6">
              <Plane className="mb-4 h-9 w-9 text-red-700 dark:text-red-300" />
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Millised õigused võivad teil olla
              </h2>
              <div className="space-y-4">
                {rights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="rounded-2xl bg-slate-50 p-4 dark:bg-gray-900">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-red-700 dark:text-red-300" />
                        <h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6">
              <CheckCircle2 className="mb-4 h-9 w-9 text-green-600" />
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Mida enne nõude esitamist alles hoida
              </h2>
              <div className="space-y-3">
                {checklist.map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    {item}
                  </p>
                ))}
              </div>
              <Link
                href="/et/kalkulaator"
                className="mt-6 inline-flex rounded-2xl bg-red-700 px-5 py-3 font-semibold text-white transition hover:bg-red-800"
              >
                Arvutage võimalik summa
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </LayoutEt>
  );
}
