import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock3,
  ExternalLink,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

import { ClaimWingerJaSection } from "@/components/ClaimWingerJaSection";
import { LayoutJa } from "@/components/LayoutJa";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildJaArticleContent } from "@/lib/jaArticleContent";
import { type BlogArticleJa, getCategoryLabelJa } from "@/lib/blogArticlesJa";
import {
  buildClaimWingerJaLink,
  trackClaimWingerJaClick,
} from "@/lib/claimwingerLinksJa";
import {
  combineSchemas,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

type JaBlogArticlePageProps = {
  article: BlogArticleJa;
};

function CompensationTable() {
  return (
    <Card className="rounded-3xl border-red-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
        補償金額の一覧表：250・400・600ユーロ
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-red-50 text-slate-900 dark:bg-red-950/30 dark:text-white">
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">飛行距離</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">金額</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">ルートの例</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">1,500 km未満</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">250ユーロ</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">ヨーロッパ内の短距離路線 例：ワルシャワ–ベルリン（約520 km）</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">1,500–3,500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">400ユーロ</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">中距離路線 例：ワルシャワ–リスボン（約2,750 km）</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">3,500 km超</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">600ユーロ</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">大陸間の長距離路線 例：ワルシャワ–東京（約8,600 km）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        金額はEU規則（EC）261/2004により固定されています。実際に受け取れる権利は、ルート、目的地への到着遅延、
        トラブルの原因、および適用される法域によって異なります。
      </p>
    </Card>
  );
}

function NonEuCarrierTable() {
  const rows = [
    ["EU域内の空港から出発する便（航空会社を問わず）", "対象", "positive"],
    ["日本発・LOTポーランド航空などEU系航空会社の便", "対象", "positive"],
    ["日本発・JAL/ANAの便", "EU261の対象外", "negative"],
    ["ロンドン発着（ブレグジット後）", "UK261が適用", "neutral"],
  ];

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-amber-50 text-slate-900 dark:bg-amber-950/30 dark:text-white">
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">状況</th>
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">EU261は適用されますか？</th>
          </tr>
        </thead>
        <tbody className="text-slate-700 dark:text-slate-300">
          {rows.map(([situation, result, tone]) => (
            <tr key={situation}>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">{situation}</td>
              <td
                className={[
                  "border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800",
                  tone === "positive" ? "text-emerald-700 dark:text-emerald-300" : "",
                  tone === "negative" ? "text-red-700 dark:text-red-300" : "",
                  tone === "neutral" ? "text-sky-700 dark:text-sky-300" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {result}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function JaBlogArticlePage({ article }: JaBlogArticlePageProps) {
  const content = buildJaArticleContent(article);
  const articleUrl = `https://problemlot.com/ja/blog/${article.slug}`;
  const embedHref = buildClaimWingerJaLink(content.ctaDestination, {
    medium: "embedded_cta",
    campaign: article.slug,
    content: "high_article_embed",
  });
  const bottomHref = buildClaimWingerJaLink(content.ctaDestination, {
    medium: "article_cta",
    campaign: article.slug,
    content: "bottom_cta",
  });
  const introHref = content.contextualLinks[0]?.href || embedHref;

  const schemas = combineSchemas(
    generateOrganizationSchema({ url: articleUrl, sameAs: ["https://claimwinger.com"] }),
    generateWebPageSchema({
      title: content.seoTitle,
      description: content.description,
      url: articleUrl,
      inLanguage: "ja-JP",
    }),
    {
      ...generateArticleSchema({
        title: content.title,
        description: content.description,
        url: articleUrl,
        publishDate: article.publishDate,
        modifiedDate: article.updatedDate,
        author: "ClaimWingerの認可を受けた法務アドバイザー",
      }),
      inLanguage: "ja-JP",
    },
    {
      ...generateFAQSchema(content.faqs),
      inLanguage: "ja-JP",
    },
    generateBreadcrumbSchema([
      { name: "ホーム", url: "https://problemlot.com/ja" },
      { name: "ブログ", url: "https://problemlot.com/ja/blog" },
      { name: content.title, url: articleUrl },
    ]),
  );

  return (
    <LayoutJa>
      <SEO
        title={content.seoTitle}
        description={content.description}
        url={articleUrl}
        canonicalUrl={articleUrl}
        locale="ja_JP"
        language="Japanese"
        type="article"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }}
        />
      </Head>

      <article className="min-h-screen bg-gradient-to-br from-red-50 via-white to-slate-50 text-slate-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/ja" className="hover:text-red-700 dark:hover:text-red-300">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/ja/blog" className="hover:text-red-700 dark:hover:text-red-300">
              ブログ
            </Link>
            <span>/</span>
            <span>{article.title}</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 dark:bg-red-950/40 dark:text-red-200">
              <ShieldCheck className="h-4 w-4" />
              {getCategoryLabelJa(article.category)}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              {content.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                更新日：{article.updatedDate}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                読了時間：{article.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                テーマ：{article.cluster}
              </span>
            </div>

            <div className="mt-7 space-y-5 text-xl leading-9 text-slate-700 dark:text-slate-300">
              {content.intro.map((paragraph, index) => (
                <p key={paragraph}>
                  {paragraph}
                  {index === 1 && (
                    <>
                      {" "}
                      すぐに確認したい場合は、
                      <a
                        href={introHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackClaimWingerJaClick(
                            `ja_article_${article.slug}_intro_text_link`,
                            introHref,
                          )
                        }
                        className="font-semibold text-red-800 underline decoration-red-300 underline-offset-4 transition hover:text-red-950 dark:text-red-300"
                      >
                        {content.ctaAnchor}
                      </a>
                      をご利用ください。
                    </>
                  )}
                </p>
              ))}
            </div>
          </header>

          <section className="mb-10">
            <Card className="rounded-3xl border-red-200 bg-gradient-to-br from-red-800 to-slate-950 p-8 text-white shadow-xl dark:border-red-900">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <ShieldCheck className="h-6 w-6 text-red-100" />
                簡単な回答
              </h2>
              <div className="space-y-3 text-base leading-7 text-red-50">
                {content.quickAnswer.map((answer) => (
                  <p key={answer} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                    <span>{answer}</span>
                  </p>
                ))}
              </div>
            </Card>
          </section>

          <ClaimWingerJaSection
            className="mb-12"
            title="ClaimWingerであなたのケースを確認しましょう"
            description="フォームは日本語でご利用いただけます。遅延、欠航、オーバーブッキング、乗り継ぎ便の乗り遅れがEU261またはUK261の対象かどうか、すぐに確認できるよう記事の上部に配置しています。"
            ctaHref={embedHref}
            ctaLabel={content.ctaPath === "/cancelled-flight" ? "欠航便を確認する" : "遅延便を確認する"}
            placement={`ja_article_${article.slug}_embed_high`}
            embedCampaign={article.slug}
            embedContent="high_article_embed"
            loadingLabel="ClaimWingerの日本語フォームを読み込んでいます..."
            loadingDescription="まもなく、前払いなしで具体的なフライトを確認できます。"
          />

          <section className="mb-10 grid gap-4 md:grid-cols-2">
            {content.keyPoints.map((point) => (
              <Card key={point} className="rounded-2xl border-red-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-300" />
                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{point}</p>
                </div>
              </Card>
            ))}
          </section>

          <main className="space-y-8">
            <CompensationTable />

            {content.sections.map((section) => (
              <Card
                key={section.title}
                className="rounded-3xl border-red-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                  {section.title}
                </h2>
                <div className="space-y-4 text-base leading-8 text-slate-700 dark:text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.table === "nonEu" && <NonEuCarrierTable />}
                  {section.bullets && (
                    <ul className="space-y-3 pt-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-700 dark:text-red-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            ))}

            <Card className="rounded-3xl border-red-200 bg-red-50/70 p-8 dark:border-red-900 dark:bg-red-950/10">
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                便利な確認リンク
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ご自身の状況に合ったリンクをお選びください。すべてのリンクは、日本の利用者向けに
                トラッキングされたClaimWingerの日本語フローにつながります。
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {content.contextualLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerJaClick(link.placement, link.href)}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg dark:border-slate-800 dark:bg-gray-900 dark:hover:border-red-700"
                  >
                    <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-red-800 dark:text-red-300">
                      <ExternalLink className="h-4 w-4" />
                      確認
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-950 dark:text-white">
                      {link.label}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {link.description}
                    </p>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="rounded-3xl border-red-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-950 dark:text-white">
                <HelpCircle className="h-6 w-6 text-red-700 dark:text-red-300" />
                よくあるご質問
              </h2>
              <div className="space-y-5">
                {content.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="border-b border-slate-200 pb-5 last:border-0 last:pb-0 dark:border-gray-800"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-slate-950 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="leading-7 text-slate-700 dark:text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="rounded-3xl bg-gradient-to-br from-red-800 to-slate-950 p-8 text-white shadow-xl">
              <h2 className="mb-3 text-2xl font-bold">あなたのケースは補償の対象でしょうか？</h2>
              <p className="mb-6 max-w-2xl leading-8 text-red-50">
                最も早い次のステップは、ルート、到着時刻、トラブルの原因、書類を確認することです。
                ClaimWingerは成功報酬型（no-win-no-fee）で、前払いは一切不要です。
              </p>
              <a
                href={bottomHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimWingerJaClick(`ja_article_${article.slug}_bottom_cta`, bottomHref)
                }
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-red-900 transition hover:bg-red-50"
              >
                ClaimWingerで確認する
                <ArrowRight className="h-4 w-4" />
              </a>
            </Card>

            <Card className="rounded-3xl border-slate-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                その他の便利なページ
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/ja/chien-furaito"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  遅延フライト
                </Link>
                <Link
                  href="/ja/kekko-furaito"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  欠航フライト
                </Link>
                <Link
                  href="/ja/keisanki"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  補償金計算ツール
                </Link>
                <Link
                  href="/ja/blog"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  日本語ブログ
                </Link>
              </div>
            </Card>
          </main>
        </div>
      </article>
    </LayoutJa>
  );
}
