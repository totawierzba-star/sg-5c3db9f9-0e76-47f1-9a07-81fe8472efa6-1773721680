import Head from "next/head";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Euro, Plane, RefreshCw, ShieldCheck, XCircle } from "lucide-react";

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

const canonicalUrl = "https://problemlot.com/bg/otmenen-polet";

const faqs = [
  {
    question: "Винаги ли отменен полет дава право на обезщетение?",
    answer:
      "Не. Важно е кога авиокомпанията е уведомила пътниците, какъв алтернативен полет е предложила и дали причината е извънредно обстоятелство. При уведомление под 14 дни преди заминаване шансът за обезщетение често е по-силен.",
  },
  {
    question: "Мога ли да получа едновременно възстановяване на билета и обезщетение?",
    answer:
      "В някои ситуации да. Възстановяването на билета и фиксираното обезщетение по EU261 са различни права, но крайният резултат зависи от маршрута, алтернативния полет и причината за отмяната.",
  },
  {
    question: "Какво ако авиокомпанията предлага ваучер?",
    answer:
      "Не сте длъжни автоматично да приемате ваучер вместо парично възстановяване. Запазете предложението, условията и всички имейли, за да може случаят да бъде оценен правилно.",
  },
  {
    question: "Важи ли за полети от България?",
    answer:
      "Да. Ако полетът излита от българско летище, той е в обхвата на EU261, защото България е държава членка на ЕС.",
  },
];

const timeline = [
  {
    title: "Под 7 дни преди полета",
    description:
      "Често най-силен сценарий за обезщетение, особено ако алтернативният полет пристига значително по-късно.",
    value: "силен риск за авиокомпанията",
  },
  {
    title: "7-13 дни преди полета",
    description:
      "Обезщетение може да има, ако предложеното премаршрутиране не попада в законовите времеви рамки.",
    value: "нужна е проверка",
  },
  {
    title: "14+ дни преди полета",
    description:
      "Обикновено няма фиксирано обезщетение, но правото на възстановяване или алтернативен транспорт остава важно.",
    value: "по-слаб иск",
  },
];

const rights = [
  {
    title: "Възстановяване на сумата",
    description:
      "Ако не приемете алтернативен полет, може да имате право на възстановяване на неизползвания билет.",
    icon: Euro,
  },
  {
    title: "Премаршрутиране",
    description:
      "Авиокомпанията трябва да предложи разумна алтернатива до крайната дестинация при сравними условия.",
    icon: RefreshCw,
  },
  {
    title: "Грижа на летището",
    description:
      "При чакане може да се дължат храна, напитки, комуникация, хотел и транспорт между хотела и летището.",
    icon: ShieldCheck,
  },
];

export default function BulgarianCancelledFlightPage() {
  const claimHref = buildClaimWingerBgLink("cancelled", {
    medium: "cancelled_page_cta",
    campaign: "bg_cancelled_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "Отменен полет - обезщетение, възстановяване и премаршрутиране",
      description:
        "Българско ръководство за права при отменен полет по EU261 и UK261.",
      url: canonicalUrl,
      inLanguage: "bg-BG",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Начало", url: "https://problemlot.com/bg" },
      { name: "Отменен полет", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutBg>
      <SEO
        title="Отменен полет? Обезщетение до 600 € + възстановяване | EU261"
        description="Научете кога отменен полет дава право на обезщетение, възстановяване на билет, премаршрутиране и грижа на летището по EU261 и UK261."
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

      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800 dark:bg-rose-950/40 dark:text-rose-200">
              <XCircle className="h-4 w-4" />
              Отменен полет по EU261 / UK261
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Отменен полет? Проверете обезщетение, възстановяване и алтернативен маршрут.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              При отменен полет пътникът може да има няколко отделни права: фиксирано обезщетение до
              600 евро, възстановяване на билета, премаршрутиране и грижа по време на чакане. Най-важно
              е кога сте уведомени и дали предложената алтернатива е реално подходяща.
            </p>

            <ClaimWingerBgSection
              className="mt-10"
              badge="Проверка на отменен полет"
              title="Проверете отмяната в английския формуляр"
              description="ClaimWinger може да оцени дали отмяната попада в обхвата на EU261 или UK261. Формулярът е на английски, защото отделна българска версия все още не е налична."
              ctaHref={claimHref}
              ctaLabel="Проверете отменения полет"
              placement="bg_cancelled_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-rose-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <CalendarDays className="h-8 w-8 text-rose-700 dark:text-rose-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Кога е съобщена отмяната?
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {timeline.map((item) => (
                <Card key={item.title} className="p-6">
                  <div className="rounded-full bg-rose-50 px-3 py-1 text-sm font-bold text-rose-800 dark:bg-rose-950/40 dark:text-rose-200">
                    {item.value}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-3xl font-bold text-slate-950 dark:text-white">
              Какви права може да имате при отмяна?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {rights.map((right) => {
                const Icon = right.icon;

                return (
                  <Card key={right.title} className="p-6">
                    <Icon className="mb-4 h-9 w-9 text-rose-700 dark:text-rose-300" />
                    <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">{right.title}</h3>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{right.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-16 dark:bg-gray-900/70 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <CheckCircle2 className="mb-4 h-9 w-9 text-green-600" />
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Силен сценарий за обезщетение
              </h2>
              <div className="space-y-3">
                {[
                  "Отмяната е съобщена по-малко от 14 дни преди полета.",
                  "Полетът излита от ЕС, Великобритания, Швейцария или ЕИП.",
                  "Алтернативният полет пристига значително по-късно.",
                  "Причината е оперативен проблем, технически дефект или недостиг на екипаж.",
                ].map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    {item}
                  </p>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <Plane className="mb-4 h-9 w-9 text-sky-700 dark:text-sky-300" />
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Какво да поискате от авиокомпанията
              </h2>
              <div className="space-y-3">
                {[
                  "Писмено потвърждение за отмяната и причината.",
                  "Алтернативни маршрути и часове на пристигане.",
                  "Храна, напитки, хотел и транспорт, ако чакането го изисква.",
                  "Възстановяване в пари, ако не приемате предложената алтернатива.",
                ].map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-700 dark:text-sky-300" />
                    {item}
                  </p>
                ))}
              </div>
            </Card>
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

            <Card className="mt-8 border-rose-200 bg-rose-50 p-8 text-center dark:border-rose-900 dark:bg-rose-950/20">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Отмяната е била в последния момент?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                Проверете дали освен възстановяване може да имате право и на фиксирано обезщетение.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/bg/kalkulator" className="inline-flex items-center justify-center rounded-2xl bg-rose-700 px-6 py-3 font-bold text-white hover:bg-rose-800">
                  Калкулатор
                </Link>
                <a
                  href={claimHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClaimWingerBgClick("bg_cancelled_footer_cta", claimHref)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-rose-800 shadow-sm ring-1 ring-rose-200 hover:bg-rose-50"
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
