import Head from "next/head";
import Link from "next/link";
import { CalendarDays, CheckCircle2, Euro, Plane, RefreshCw, ShieldCheck, XCircle } from "lucide-react";

import { ClaimWingerJaSection } from "@/components/ClaimWingerJaSection";
import { LayoutJa } from "@/components/LayoutJa";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerJaLink } from "@/lib/claimwingerLinksJa";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/ja/kekko-furaito";

const faqs = [
  {
    question: "すべての欠航で補償金を受け取れますか?",
    answer:
      "いいえ。航空会社がいつ欠航を通知したか、どのような代替便が提示されたか、そして原因が特別な事情に当たるかどうかが重要です。",
  },
  {
    question: "払い戻しと補償金の両方を受け取れますか?",
    answer:
      "場合によっては可能です。航空券代金の払い戻し、代替便の提供、EU261の定額の補償金はそれぞれ別個の権利です。ただし、結果は路線、提示された代替手段、欠航の理由によって異なります。",
  },
  {
    question: "航空会社からバウチャーを提示された場合はどうすればよいですか?",
    answer:
      "現金での払い戻しの代わりにバウチャーを自動的に受け取る必要はありません。ご自身のケースを正確に評価できるよう、提示内容、条件、メールを保管してください。",
  },
  {
    question: "日本発着のフライトにもEU規則261/2004は適用されますか?",
    answer:
      "日本はEU加盟国ではないため、条件付きで適用されます。EU域内の空港から出発するフライトは航空会社を問わず対象です。日本からEUへ向かう便は、LOTポーランド航空、Lufthansa、FinnairなどのEU系航空会社が運航する場合のみ対象で、日本発のJALやANAの便は対象外です。例えば、LOTのワルシャワ - 成田便の欠航は、LOTがEU系航空会社のため、どちらの方向でも対象になり得ます。ロンドン発着はUK261の対象となる場合があります。",
  },
];

const timeline = [
  {
    title: "出発の7日前未満の通知",
    description:
      "多くの場合、補償金を受け取れる可能性が最も高いケースです。特に代替便の到着が大幅に遅れる場合に当てはまります。",
    value: "可能性が高い",
  },
  {
    title: "出発の7 - 13日前の通知",
    description:
      "提示された代替便が法令で定められた時間の枠に収まらない場合、補償金が支払われる可能性があります。",
    value: "確認が必要",
  },
  {
    title: "出発の14日以上前の通知",
    description:
      "定額の補償金の可能性は原則として低くなります。ただし、払い戻しまたは代替輸送を受ける権利は引き続き重要です。",
    value: "可能性が低い",
  },
];

const rights = [
  {
    title: "航空券代金の払い戻し",
    description:
      "代替便を利用しない場合、未使用区間の航空券代金の払い戻しを受ける権利が生じる可能性があります。",
    icon: Euro,
  },
  {
    title: "代替便(ルート変更)",
    description:
      "航空会社は、同等の条件で目的地までの合理的な代替輸送を提供する義務があります。",
    icon: RefreshCw,
  },
  {
    title: "空港での支援",
    description:
      "待機中は、食事、飲み物、通信手段、必要に応じてホテルと送迎を受ける権利が生じる可能性があります。",
    icon: ShieldCheck,
  },
];

const checklist = [
  "欠航の通知と航空会社からのすべてのメールを保管してください。",
  "提示された代替便の出発時刻と到着時刻を記録してください。",
  "航空会社が支援を提供しなかった場合は、食事、ホテル、交通費の領収書を保管してください。",
  "通知が出発の14日前を過ぎてから届いたかどうかをご確認ください。",
];

export default function JapaneseCancelledFlightPage() {
  const claimHref = buildClaimWingerJaLink("cancelled", {
    medium: "cancelled_page_cta",
    campaign: "ja_cancelled_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "欠航 - 補償金、払い戻し、代替便の権利",
      description:
        "EU規則261/2004およびUK261に基づく欠航時の搭乗者の権利について、日本語で解説するガイドです。",
      url: canonicalUrl,
      inLanguage: "ja-JP",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "ホーム", url: "https://problemlot.com/ja" },
      { name: "欠航", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutJa>
      <SEO
        title="フライトが欠航?最大600ユーロの補償金と払い戻し"
        description="欠航により補償金、航空券代金の払い戻し、代替便、空港での支援を受けられる条件を解説します。EU規則261/2004とUK261に基づき、LOTのワルシャワ - 成田便などEU系航空会社の欠航は日本発着でも対象になり得ます。"
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="ja_JP"
        language="Japanese"
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
              EU261 / UK261に基づく欠航
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              フライトが欠航?補償金、払い戻し、代替便をご確認ください。
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              欠航の場合、搭乗者には複数の別個の権利が生じる可能性があります:
              最大600ユーロの定額の補償金、航空券代金の払い戻し、代替便、
              待機中の空港での支援です。通知の時期と提示された代替便の内容が
              決定的に重要です。例えば、LOTのワルシャワ - 成田便の欠航は、
              LOTがEU系航空会社のため、どちらの方向でも対象になり得ます。
            </p>

            <ClaimWingerJaSection
              className="mt-10"
              badge="欠航チェック"
              title="日本語フォームで欠航をご確認ください"
              description="ClaimWingerは、欠航がEU261またはUK261の対象となるかを評価できます。フォームはclaimwinger.com/jaで日本語でご利用いただけます。"
              ctaHref={claimHref}
              ctaLabel="欠航を確認する"
              placement="ja_cancelled_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-red-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <CalendarDays className="h-8 w-8 text-red-700 dark:text-red-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                欠航はいつ通知されましたか?
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
                生じる可能性のある権利
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
                請求前に保管しておくべきもの
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
                href="/ja/keisanki"
                className="mt-6 inline-flex rounded-2xl bg-red-700 px-5 py-3 font-semibold text-white transition hover:bg-red-800"
              >
                補償金の金額を計算する
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </LayoutJa>
  );
}
