import Head from "next/head";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Euro, FileText, ShieldCheck, XCircle } from "lucide-react";

import { ClaimWingerBgSection } from "@/components/ClaimWingerBgSection";
import { LayoutBg } from "@/components/LayoutBg";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerBgLink, trackClaimWingerBgClick } from "@/lib/claimwingerLinksBg";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/bg/zabaven-polet";

const faqs = [
  {
    question: "Колко часа трябва да закъснее полетът, за да има обезщетение?",
    answer:
      "При EU261 и UK261 най-често се гледа закъснението при крайната дестинация. Ако пристигнете поне 3 часа по-късно и причината е в контрола на авиокомпанията, може да има право на обезщетение.",
  },
  {
    question: "Мога ли да получа обезщетение при 2 часа закъснение?",
    answer:
      "Обикновено не за парично обезщетение, но може да имате право на грижа на летището: храна, напитки и комуникация. Паричният праг за забавен полет обичайно започва от 3 часа при пристигане.",
  },
  {
    question: "Какво се случва, ако закъснението е заради технически проблем?",
    answer:
      "Техническите проблеми често не са достатъчни, за да освободи авиокомпанията от отговорност. Всеки случай трябва да се провери според причината, документите и конкретния маршрут.",
  },
  {
    question: "Важи ли за полети от София, Варна или Бургас?",
    answer:
      "Да. Българските летища са в ЕС, затова полетите, които излитат от тях, попадат в обхвата на EU261 независимо дали превозвачът е европейски или не.",
  },
];

const amountRows = [
  { amount: "250 €", distance: "до 1 500 km", example: "София - Виена, София - Рим" },
  { amount: "400 €", distance: "1 500-3 500 km", example: "София - Лондон, Варна - Мадрид" },
  { amount: "600 €", distance: "над 3 500 km", example: "София - Ню Йорк през ЕС хъб" },
];

const canClaim = [
  "Пристигнали сте на крайната дестинация с поне 3 часа закъснение.",
  "Полетът е излетял от ЕС, Великобритания, Швейцария или ЕИП, или е пристигнал там с покрит превозвач.",
  "Причината не е извънредно обстоятелство извън контрола на авиокомпанията.",
  "Разполагате с резервация, бордна карта, имейл или друг документ за пътуването.",
];

const cannotClaim = [
  "Закъснението при пристигане е под 3 часа.",
  "Проблемът е причинен от тежко време, ограничения на въздушния трафик или реален риск за сигурността.",
  "Полетът е извън обхвата на EU261/UK261 и не се изпълнява от покрит превозвач.",
  "Отказът или пропускът е свързан с ваша вина, например липсващи документи.",
];

export default function BulgarianDelayedFlightPage() {
  const claimHref = buildClaimWingerBgLink("delayed", {
    medium: "delayed_page_cta",
    campaign: "bg_delayed_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "Забавен полет - кога се дължи обезщетение до 600 евро",
      description:
        "Българско ръководство за обезщетение при забавен полет по EU261 и UK261.",
      url: canonicalUrl,
      inLanguage: "bg-BG",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Начало", url: "https://problemlot.com/bg" },
      { name: "Забавен полет", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutBg>
      <SEO
        title="Забавен полет над 3 часа? Обезщетение до 600 € | EU261"
        description="Разберете кога забавен полет от София, Варна, Бургас или друг европейски маршрут дава право на 250, 400 или 600 евро обезщетение."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="bg_BG"
        language="Bulgarian"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800 dark:bg-sky-950/40 dark:text-sky-200">
              <Clock3 className="h-4 w-4" />
              Забавен полет по EU261 / UK261
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Забавен полет? Проверете дали имате право на до 600 евро.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Ако пристигнете на крайната дестинация поне 3 часа по-късно, забавянето може да доведе
              до фиксирано обезщетение. Най-важни са маршрутът, реалният оператор на полета,
              причината за закъснението и това дали проблемът е в контрола на авиокомпанията.
            </p>

            <ClaimWingerBgSection
              className="mt-10"
              badge="Проверка на забавен полет"
              title="Проверете закъснението в английския формуляр"
              description="Въведете маршрута и данните за полета в ClaimWinger. Формулярът е на английски, но е подходящ за български пътници с казуси по EU261 и UK261."
              ctaHref={claimHref}
              ctaLabel="Проверете забавения полет"
              placement="bg_delayed_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-sky-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <Euro className="h-8 w-8 text-sky-700 dark:text-sky-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Колко обезщетение може да получите?
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {amountRows.map((row) => (
                <Card key={row.amount} className="p-6">
                  <div className="text-5xl font-black text-sky-700 dark:text-sky-300">{row.amount}</div>
                  <h3 className="mt-4 text-lg font-bold text-slate-950 dark:text-white">{row.distance}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{row.example}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <ShieldCheck className="mb-4 h-9 w-9 text-green-600" />
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Кога обикновено може да подадете иск
              </h2>
              <div className="space-y-3">
                {canClaim.map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    {item}
                  </p>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <XCircle className="mb-4 h-9 w-9 text-red-600" />
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Кога обезщетение често не се дължи
              </h2>
              <div className="space-y-3">
                {cannotClaim.map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    <XCircle className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                    {item}
                  </p>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-16 dark:bg-gray-900/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-center gap-3">
              <FileText className="h-8 w-8 text-sky-700 dark:text-sky-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Какво да запазите като доказателства?
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {["Бордна карта или резервация", "Снимка на таблото със закъснението", "Имейли, SMS-и и причина от авиокомпанията"].map((item) => (
                <Card key={item} className="p-5">
                  <h3 className="font-bold text-slate-950 dark:text-white">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Колкото по-точна е документацията, толкова по-лесно се проверява реалната причина и часът на пристигане.
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-950 dark:text-white">
              Често задавани въпроси
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question} className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-slate-950 dark:text-white">{faq.question}</h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-sky-200 bg-sky-50 p-8 text-center dark:border-sky-900 dark:bg-sky-950/20">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Не сте сигурни дали закъснението е достатъчно?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                Използвайте калкулатора или отворете ClaimWinger, за да проверите маршрута и ситуацията.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/bg/kalkulator" className="inline-flex items-center justify-center rounded-2xl bg-sky-700 px-6 py-3 font-bold text-white hover:bg-sky-800">
                  Калкулатор
                </Link>
                <a
                  href={claimHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClaimWingerBgClick("bg_delayed_footer_cta", claimHref)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-sky-800 shadow-sm ring-1 ring-sky-200 hover:bg-sky-50"
                >
                  Проверете в ClaimWinger
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </LayoutBg>
  );
}
