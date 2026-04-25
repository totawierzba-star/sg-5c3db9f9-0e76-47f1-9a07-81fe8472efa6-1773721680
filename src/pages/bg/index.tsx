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

import { ClaimWingerBgSection } from "@/components/ClaimWingerBgSection";
import { LayoutBg } from "@/components/LayoutBg";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerBgLink, trackClaimWingerBgClick } from "@/lib/claimwingerLinksBg";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/bg";

const homeFaqs = [
  {
    question: "Кога български пътник може да получи обезщетение по EU261?",
    answer:
      "Най-често при полет, който излита от летище в ЕС, Великобритания, Швейцария или ЕИП, или при пристигане в тази зона с европейски превозвач. Важни са реалният оператор, закъснението при крайния пункт и причината за проблема.",
  },
  {
    question: "Колко голямо може да бъде обезщетението за полет?",
    answer:
      "Фиксираните суми са 250, 400 или 600 евро на пътник според разстоянието и правния обхват на маршрута. Цената на билета обикновено не определя размера на обезщетението.",
  },
  {
    question: "Важи ли EU261 за Wizz Air, Ryanair, Lufthansa и British Airways?",
    answer:
      "Да, но точната рамка зависи от маршрута. За полети от ЕС правилата могат да важат за всяка авиокомпания; за полети към ЕС от трета държава има значение дали операторът е покрит от EU261, UK261 или сходна рамка.",
  },
  {
    question: "Защо формулярът ClaimWinger е на английски?",
    answer:
      "ClaimWinger все още няма отделна българска версия. Затова българските страници водят към английския формуляр, който може да се използва за проверка на конкретен случай.",
  },
];

const highlights = [
  {
    title: "3 часа при крайната дестинация",
    description:
      "При забавен полет ключовият праг обикновено е пристигане поне 3 часа по-късно от планираното.",
    icon: Clock3,
  },
  {
    title: "250 / 400 / 600 евро",
    description:
      "Сумата зависи от разстоянието на маршрута, а не от това дали билетът е бил евтин или скъп.",
    icon: Euro,
  },
  {
    title: "София, Варна, Бургас и европейски хъбове",
    description:
      "Маршрутите през Франкфурт, Виена, Лондон, Амстердам и Париж често създават реални EU261 казуси.",
    icon: Plane,
  },
];

const scenarios = [
  {
    title: "Полетът е забавен",
    href: "/bg/zabaven-polet",
    description:
      "Подходящо за закъснение при пристигане, изпусната връзка и маршрути с пристигане поне 3 часа по-късно.",
    icon: Clock3,
  },
  {
    title: "Полетът е отменен",
    href: "/bg/otmenen-polet",
    description:
      "Разберете кога отмяната води до обезщетение, възстановяване на билет, премаршрутиране и грижа на летището.",
    icon: Plane,
  },
  {
    title: "Калкулатор на обезщетение",
    href: "/bg/kalkulator",
    description:
      "Въведете летищата и ситуацията, за да получите първоначална оценка за 250, 400 или 600 евро.",
    icon: Euro,
  },
  {
    title: "Блог на български",
    href: "/bg/blog",
    description:
      "Подготвена структура за бъдещи ръководства по авиокомпании, летища, маршрути и процедура.",
    icon: BookOpen,
  },
];

export default function BulgarianHomePage() {
  const claimHref = buildClaimWingerBgLink("home", {
    medium: "homepage_context_link",
    campaign: "bg_home",
    content: "main_claim_check",
  });
  const schemas = combineSchemas(
    generateOrganizationSchema({ url: canonicalUrl }),
    generateWebPageSchema({
      title: "Обезщетение при забавен или отменен полет - EU261 на български",
      description:
        "Българско ръководство за обезщетение при забавен, отменен или свръхрезервиран полет по EU261 и UK261.",
      url: canonicalUrl,
      inLanguage: "bg-BG",
    }),
    generateFAQSchema(homeFaqs),
    generateBreadcrumbSchema([{ name: "Начало", url: canonicalUrl }]),
  );

  return (
    <LayoutBg>
      <SEO
        title="Обезщетение при забавен или отменен полет - до 600 € | ProblemLot.com"
        description="Права на пътниците на български: EU261 и UK261 за забавен полет, отменен полет, изпусната връзка и обезщетение до 600 евро."
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

      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 pb-16 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-800 dark:bg-sky-950/40 dark:text-sky-200">
              <Sparkles className="h-4 w-4" />
              EU261 и UK261 на български за полети в Европа
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
                  Забавен или отменен полет?
                  <span className="mt-3 block text-sky-700 dark:text-sky-300">
                    Може да имате право на до 600 евро обезщетение.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                  Българската версия на ProblemLot.com обяснява кога EU261 и UK261 защитават пътниците,
                  как се изчисляват сумите 250, 400 и 600 евро, какво да пазите като доказателства и кога
                  си струва да подадете иск чрез ClaimWinger.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={claimHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerBgClick("bg_home_hero_context", claimHref)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-700 px-6 py-4 text-base font-bold text-white transition hover:bg-sky-800"
                  >
                    Проверете случая в ClaimWinger
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Link
                    href="/bg/kalkulator"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-bold text-slate-950 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 dark:bg-gray-900 dark:text-white dark:ring-slate-800 dark:hover:bg-gray-800"
                  >
                    Отворете калкулатора
                  </Link>
                </div>
              </div>

              <ClaimWingerBgSection
                className="lg:mt-2"
                badge="Бърза проверка на случая"
                title="Проверете полета си още тук"
                description="Използвайте английския формуляр на ClaimWinger за предварителна оценка. Това е най-краткият път, ако вече знаете маршрута, датата и какво се е случило с полета."
                ctaHref={claimHref}
                ctaLabel="Проверете в ClaimWinger"
                placement="bg_home_hero_embed"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-sky-100 bg-white/80 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <ShieldCheck className="h-4 w-4" />
                Най-важните правила накратко
              </div>
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Какво решава дали имате право на обезщетение?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="p-6">
                    <Icon className="mb-4 h-9 w-9 text-sky-700 dark:text-sky-300" />
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
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                  Изберете правилната следваща стъпка
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                  Всяка страница е направена за конкретен сценарий, за да не губите време в общи обяснения.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {scenarios.map((scenario) => {
                const Icon = scenario.icon;

                return (
                  <Link
                    key={scenario.href}
                    href={scenario.href}
                    className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-sky-300 dark:bg-gray-900 dark:ring-slate-800 dark:hover:ring-sky-700"
                  >
                    <Icon className="mb-4 h-10 w-10 text-sky-700 dark:text-sky-300" />
                    <h3 className="mb-2 text-xl font-bold text-slate-950 dark:text-white">
                      {scenario.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {scenario.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-950 dark:text-white">
              Често задавани въпроси
            </h2>
            <div className="space-y-4">
              {homeFaqs.map((faq) => (
                <Card key={faq.question} className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-slate-950 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </LayoutBg>
  );
}
