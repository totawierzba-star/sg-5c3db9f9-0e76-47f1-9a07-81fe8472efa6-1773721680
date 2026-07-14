import Head from "next/head";
import Link from "next/link";
import { CheckCircle2, Clock3, Euro, ShieldCheck, XCircle } from "lucide-react";

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

const canonicalUrl = "https://problemlot.com/ja/chien-furaito";

const faqs = [
  {
    question: "何時間の遅延から補償金を受け取れますか?",
    answer:
      "EU規則261/2004およびUK261では、通常、最終目的地での遅延時間で判断します。最終目的地への到着が3時間以上遅れ、その原因が航空会社の責任範囲内にある場合、補償金を受け取る権利が生じる可能性があります。",
  },
  {
    question: "2時間の遅延でも金銭的な補償金を受け取れますか?",
    answer:
      "原則として受け取れません。ただし、空港での支援(食事、飲み物、通信手段、長時間の待機の場合はホテルと送迎)を受ける権利が生じる場合があります。金銭的な補償金の基準は、多くの場合、最終目的地での3時間以上の遅延です。",
  },
  {
    question: "技術的な不具合は「特別な事情」に当たりますか?",
    answer:
      "必ずしも当たりません。通常の整備・技術上の問題は、補償金の支払いを拒否する十分な理由にならないことが多いです。ただし、具体的な原因と航空会社の説明を個別に検討する必要があります。",
  },
  {
    question: "日本発のフライトにもEU規則261/2004は適用されますか?",
    answer:
      "日本はEU加盟国ではないため、条件付きで適用されます。EU域内の空港から出発するフライトは航空会社を問わず対象ですが、日本からEUへ向かうフライトは、LOTポーランド航空、Lufthansa、FinnairなどのEU系航空会社が運航する場合のみ対象です。日本発のJALやANAの便は対象外です。なお、ロンドン発着はUK261の対象となる場合があります。",
  },
  {
    question: "LOTポーランド航空のワルシャワ乗り継ぎ便で遅延した場合は?",
    answer:
      "LOTポーランド航空はEU系航空会社のため、東京発・EU発のどちらの方向でも対象になり得ます。ワルシャワのハブで乗り継ぎに失敗した場合でも、遅延は最終目的地への到着時刻で判断されます。1つの予約で最終目的地に3時間以上遅れて到着した場合、長距離区分の補償金を請求できる可能性があります。",
  },
];

const amountRows = [
  {
    amount: "250ユーロ",
    distance: "1,500 km未満",
    example: "例: ワルシャワ - ウィーン(約560 km)",
  },
  {
    amount: "400ユーロ",
    distance: "1,500 - 3,500 km",
    example: "例: ワルシャワ - リスボン(約2,750 km)",
  },
  {
    amount: "600ユーロ",
    distance: "3,500 km超",
    example: "例: ワルシャワ - 東京(約8,600 km)、フランクフルト - 東京(約9,350 km)",
  },
];

const canClaim = [
  "最終目的地への到着が3時間以上遅れました。",
  "フライトがEU、英国、スイス、EEAの空港から出発した(航空会社を問いません)、または日本からEUへの便をLOTポーランド航空、Lufthansa、FinnairなどのEU系航空会社が運航しました。",
  "遅延の原因が、航空会社の管理の及ばない特別な事情ではありませんでした。",
  "予約確認書、搭乗券、メールなどの搭乗を証明する書類があります。",
];

const cannotClaim = [
  "最終目的地での遅延が3時間未満でした。",
  "強い嵐、航空管制の制限、保安上のリスクが原因でした。",
  "日本発のJALやANAの便など、EU域外の航空会社が運航する日本発のフライトは、EU規則261/2004の適用範囲外です。",
  "書類の不備など、搭乗者自身の事情によって遅延が生じました。",
];

export default function JapaneseDelayedFlightPage() {
  const claimHref = buildClaimWingerJaLink("delayed", {
    medium: "delayed_page_cta",
    campaign: "ja_delayed_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "フライトの遅延 - 最大600ユーロの補償金を受け取れる条件",
      description:
        "EU規則261/2004およびUK261に基づくフライトの遅延の補償金について、日本語で解説するガイドです。",
      url: canonicalUrl,
      inLanguage: "ja-JP",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "ホーム", url: "https://problemlot.com/ja" },
      { name: "フライトの遅延", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutJa>
      <SEO
        title="フライトの遅延が3時間以上?最大600ユーロの補償金"
        description="ワルシャワなどヨーロッパの空港から出発したフライトの遅延で、250、400、600ユーロの補償金を受け取れる条件を解説します。EU規則261/2004とUK261に基づき、LOTポーランド航空などのEU系航空会社は日本発の便も対象です。"
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

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800 dark:bg-red-950/40 dark:text-red-200">
              <Clock3 className="h-4 w-4" />
              EU261 / UK261に基づくフライトの遅延
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              フライトの遅延?最大600ユーロの補償金の権利をご確認ください。
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              最終目的地への到着が3時間以上遅れた場合、定額の補償金を受け取る権利が
              生じる可能性があります。路線、実際に運航した航空会社、遅延の原因、
              航空会社の責任を確認する必要があります。LOTポーランド航空はEU系航空会社の
              ため、日本発・ヨーロッパ発のどちらの方向でも対象になり得ます。ワルシャワの
              ハブでの乗り継ぎ失敗も、最終目的地への到着時刻で判断されます。
            </p>

            <ClaimWingerJaSection
              className="mt-10"
              badge="フライトの遅延チェック"
              title="日本語フォームで遅延をご確認ください"
              description="路線とフライトの情報をClaimWingerのフォームにご入力ください。フォームは日本語に対応しており、EU261またはUK261の対象となるケースの確認に適しています。"
              ctaHref={claimHref}
              ctaLabel="フライトの遅延を確認する"
              placement="ja_delayed_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-red-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <Euro className="h-8 w-8 text-red-700 dark:text-red-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                受け取れる可能性のある補償金の金額
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {amountRows.map((row) => (
                <Card key={row.amount} className="p-6">
                  <div className="text-5xl font-black text-red-700 dark:text-red-300">{row.amount}</div>
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
                請求できる可能性が高いケース
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
                補償金が支払われないことが多いケース
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

          <div className="mx-auto mt-10 max-w-6xl rounded-3xl bg-slate-950 p-8 text-white">
            <h2 className="text-2xl font-bold">補償金の金額を事前に確認しませんか?</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              計算機は空港の座標、路線の距離、EU261/UK261のロジックを使用して、
              250、400、600ユーロのいずれに該当するかを素早く推定します。
            </p>
            <Link
              href="/ja/keisanki"
              className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-red-50"
            >
              計算機を開く
            </Link>
          </div>
        </section>
      </div>
    </LayoutJa>
  );
}
