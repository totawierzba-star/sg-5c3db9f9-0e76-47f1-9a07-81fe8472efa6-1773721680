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

import { ClaimWingerJaSection } from "@/components/ClaimWingerJaSection";
import { LayoutJa } from "@/components/LayoutJa";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerJaLink, trackClaimWingerJaClick } from "@/lib/claimwingerLinksJa";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/ja";

const homeFaqs = [
  {
    question: "日本の旅行者はどのような場合にEU規則261/2004に基づく補償金を受け取れますか？",
    answer:
      "日本はEUに加盟していないため、適用範囲は出発地と運航する航空会社で決まります。EU域内の空港から出発するフライトは、航空会社を問わず対象です。たとえばワルシャワ発東京行きは、JALやANAが運航する便でも対象になります。一方、日本からEUへ向かうフライトは、LOTポーランド航空、Lufthansa、FinnairなどEUの航空会社が運航する場合のみ対象で、日本発のJALやANAの便は対象外です。実際に運航した航空会社、最終目的地での遅れ、そして原因を確認する必要があります。悪天候などの特別な事情がある場合は、補償金が支払われないことがあります。",
  },
  {
    question: "補償金の金額はいくらですか？",
    answer:
      "補償金は飛行距離に応じて一人あたり250ユーロ、400ユーロ、600ユーロの定額で、航空券の価格には左右されません。EU－日本間の路線はすべて3,500 kmを大きく超えるため、対象となる場合の補償金は一人あたり600ユーロです。たとえばワルシャワ－東京は約8,600 km、フランクフルト－東京は約9,350 kmです。",
  },
  {
    question: "LOTポーランド航空のフライトはどちらの方向でも対象ですか？",
    answer:
      "はい。LOTポーランド航空はEUの航空会社なので、EU発のフライトも日本発のフライトも、どちらの方向でも対象です。LOTはワルシャワをハブとしており、ワルシャワでの乗り継ぎに間に合わなかった場合でも、遅れは最終目的地への到着時刻で判断されます。最終目的地に3時間以上遅れて到着した場合は、補償金を受け取れる可能性があります。",
  },
  {
    question: "ClaimWingerのフォームは日本語で利用できますか？",
    answer:
      "はい。ClaimWingerにはclaimwinger.com/jaで日本語版が用意されています。そのため、当サイトの日本語ページからは、分析用の日本語UTMパラメータ付きで日本語フォームに直接移動できます。",
  },
];

const highlights = [
  {
    title: "最終目的地で3時間以上",
    description:
      "フライトの遅延の場合、主な基準は最終目的地への到着が3時間以上遅れたことです。乗り継ぎ失敗でも最終目的地での遅れで判断されます。",
    icon: Clock3,
  },
  {
    title: "250 / 400 / 600ユーロ",
    description:
      "EU規則261/2004は飛行距離に応じた定額の補償金を定めています。EU－日本間の路線はすべて3,500 kmを超えるため、対象となる場合は600ユーロです。",
    icon: Euro,
  },
  {
    title: "ワルシャワと欧州のハブ空港",
    description:
      "ワルシャワ、フランクフルト、ヘルシンキ、ミュンヘン、アムステルダム経由で東京や大阪へ向かう路線では、EU規則261/2004の実際の請求事例が数多く発生しています。",
    icon: Plane,
  },
];

const scenarios = [
  {
    title: "フライトの遅延",
    href: "/ja/chien-furaito",
    description:
      "遅延や乗り継ぎ失敗により、最終目的地に3時間以上遅れて到着した場合の状況を確認できます。",
    icon: Clock3,
  },
  {
    title: "フライトの欠航",
    href: "/ja/kekko-furaito",
    description:
      "欠航がどのような場合に補償金、払い戻し、代替便、空港でのケアの権利につながるかを解説します。",
    icon: Plane,
  },
  {
    title: "補償金計算ツール",
    href: "/ja/keisanki",
    description:
      "空港と状況を入力すると、250・400・600ユーロの初期見積もりを確認できます。",
    icon: Euro,
  },
  {
    title: "日本語ブログ",
    href: "/ja/blog",
    description:
      "航空会社、空港、路線、旅行者の権利について、日本の旅行者向けのガイドをお届けします。",
    icon: BookOpen,
  },
];

export default function JapaneseHomePage() {
  const claimHref = buildClaimWingerJaLink("home", {
    medium: "homepage_context_link",
    campaign: "ja_home",
    content: "main_claim_check",
  });
  const schemas = combineSchemas(
    generateOrganizationSchema({ url: canonicalUrl }),
    generateWebPageSchema({
      title: "フライトの遅延・欠航の補償金 - EU規則261/2004を日本語で解説",
      description:
        "EU規則261/2004に基づく、フライトの遅延・欠航・搭乗拒否に対する補償金についての日本語ガイドです。",
      url: canonicalUrl,
      inLanguage: "ja-JP",
    }),
    generateFAQSchema(homeFaqs),
    generateBreadcrumbSchema([{ name: "ホーム", url: canonicalUrl }]),
  );

  return (
    <LayoutJa>
      <SEO
        title="フライトの遅延・欠航で最大600ユーロの補償金 | ProblemLot.com"
        description="旅行者の権利を日本語で解説：EU規則261/2004に基づく、フライトの遅延・欠航・乗り継ぎ失敗に対する最大600ユーロの補償金。"
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
        <section className="px-4 pb-16 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 dark:bg-red-950/40 dark:text-red-200">
              <Sparkles className="h-4 w-4" />
              EU規則261/2004を日本語で — ヨーロッパと日本を結ぶフライトに
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
                  フライトの遅延や欠航がありましたか？
                  <span className="mt-3 block text-red-700 dark:text-red-300">
                    最大600ユーロの補償金を受け取れる可能性があります。
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                  ProblemLot.comの日本語版では、EU規則261/2004がどのような場合に日本の
                  旅行者を保護するのか、250・400・600ユーロの補償金がどのように計算される
                  のか、どのような証拠を保管しておくべきか、そしてどのタイミングで
                  ClaimWingerに手続きを任せるのが賢明かを、わかりやすく解説します。
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={claimHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerJaClick("ja_home_hero_context", claimHref)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-6 py-4 text-base font-bold text-white transition hover:bg-red-800"
                  >
                    ClaimWingerでフライトを確認する
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Link
                    href="/ja/keisanki"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-bold text-slate-950 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 dark:bg-gray-900 dark:text-white dark:ring-slate-800 dark:hover:bg-gray-800"
                  >
                    計算ツールを開く
                  </Link>
                </div>
              </div>

              <ClaimWingerJaSection
                className="lg:mt-2"
                badge="かんたんフライトチェック"
                title="今すぐフライトを確認できます"
                description="初期確認にはClaimWingerの日本語フォームをご利用ください。路線、日付、フライトに何が起きたかが分かっている場合は、これが最も早い方法です。"
                ctaHref={claimHref}
                ctaLabel="ClaimWingerで確認する"
                placement="ja_home_hero_embed"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-red-100 bg-white/80 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <ShieldCheck className="h-4 w-4" />
                重要なルールの概要
              </div>
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                補償金を受け取る権利は何で決まりますか？
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="p-6">
                    <Icon className="mb-4 h-9 w-9 text-red-700 dark:text-red-300" />
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
            <h2 className="mb-8 text-3xl font-bold text-slate-950 dark:text-white">
              状況を選んでください
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {scenarios.map((item) => {
                const Icon = item.icon;

                return (
                  <Link key={item.href} href={item.href}>
                    <Card className="h-full p-6 transition hover:-translate-y-1 hover:shadow-lg">
                      <Icon className="mb-4 h-8 w-8 text-red-700 dark:text-red-300" />
                      <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </LayoutJa>
  );
}
