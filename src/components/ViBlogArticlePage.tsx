import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileText,
  Sparkles,
} from "lucide-react";

import { ClaimWingerViSection } from "@/components/ClaimWingerViSection";
import { LayoutVi } from "@/components/LayoutVi";
import { SEO } from "@/components/SEO";
import { ViSeoHead } from "@/components/ViSeoHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  buildClaimWingerViLink,
  trackClaimWingerViClick,
} from "@/lib/claimwingerLinksVi";
import { type ViBlogArticle } from "@/lib/blogArticlesVi";
import {
  combineSchemas,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

type ViBlogArticlePageProps = {
  article: ViBlogArticle;
};

const EMBED_COPY: Record<
  ViBlogArticle["claimVariant"],
  { title: string; description: string; ctaLabel: string }
> = {
  home: {
    title: "Kiểm tra hồ sơ EU261 của bạn bằng tiếng Việt",
    description:
      "Nếu bạn đã nắm được logic cơ bản từ bài viết này, bước tiếp theo hợp lý là kiểm tra hồ sơ thật với dữ liệu chuyến bay cụ thể. Form ClaimWinger tiếng Việt giúp bạn tách nhanh hồ sơ mạnh và hồ sơ cần xem kỹ hơn.",
    ctaLabel: "Mở form kiểm tra tổng quát",
  },
  delayed: {
    title: "Kiểm tra ngay hồ sơ chuyến bay bị hoãn",
    description:
      "Dùng luồng này nếu vấn đề chính là chuyến bay đến muộn. Đây là cách nhanh nhất để kiểm tra mốc giờ đến cuối cùng và khả năng phát sinh bồi thường.",
    ctaLabel: "Mở form cho chuyến bay bị hoãn",
  },
  cancelled: {
    title: "Kiểm tra ngay hồ sơ chuyến bay bị hủy",
    description:
      "Dùng luồng này nếu hãng thông báo hủy chuyến, đổi sang chuyến khác hoặc thay đổi lịch bay đáng kể gần ngày khởi hành.",
    ctaLabel: "Mở form cho chuyến bay bị hủy",
  },
};

export function ViBlogArticlePage({ article }: ViBlogArticlePageProps) {
  const articleUrl = `https://problemlot.com/vi/blog/${article.slug}`;
  const primaryClaimHref = buildClaimWingerViLink(article.claimVariant, {
    medium: "article_cta",
    campaign: article.slug,
    content: "primary_button",
  });
  const embedCopy = EMBED_COPY[article.claimVariant];

  const schemas = combineSchemas(
    generateOrganizationSchema({ url: articleUrl }),
    generateWebPageSchema({
      title: article.seoTitle,
      description: article.description,
      url: articleUrl,
      inLanguage: "vi-VN",
    }),
    {
      ...generateArticleSchema({
        title: article.title,
        description: article.description,
        url: articleUrl,
        publishDate: article.date,
        modifiedDate: article.updatedDate,
        author: "ProblemLot.com",
      }),
      inLanguage: "vi-VN",
    },
    generateFAQSchema(article.faqs),
    generateBreadcrumbSchema([
      { name: "Trang chủ", url: "https://problemlot.com/vi" },
      { name: "Blog", url: "https://problemlot.com/vi/blog" },
      { name: article.title, url: articleUrl },
    ]),
  );

  return (
    <LayoutVi>
      <SEO
        title={`${article.seoTitle} | ProblemLot`}
        description={article.description}
        url={articleUrl}
        canonicalUrl={articleUrl}
        locale="vi_VN"
        language="Vietnamese"
        type="article"
      />
      <ViSeoHead canonicalUrl={articleUrl} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </Head>

      <article className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/vi" className="hover:text-emerald-600 dark:hover:text-emerald-400">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="/vi/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400">
              Blog
            </Link>
            <span>/</span>
            <span>{article.title}</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">
              <Sparkles className="h-4 w-4" />
              {article.heroEyebrow}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              {article.heroSummary}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                Cập nhật: {article.updatedDate}
              </span>
              <span className="inline-flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Thời gian đọc: {article.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Cụm nội dung: {article.cluster}
              </span>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 text-white shadow-xl dark:border-emerald-800">
              <h2 className="mb-4 text-2xl font-bold">Câu trả lời ngắn</h2>
              <div className="space-y-3 text-base leading-7 text-emerald-50">
                {article.quickAnswer.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </Card>
          </section>

          <section className="mb-10">
            <div className="grid gap-4 md:grid-cols-2">
              {article.keyPoints.map((point) => (
                <Card key={point} className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{point}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <ClaimWingerViSection
            className="mb-12"
            title={embedCopy.title}
            description={embedCopy.description}
            ctaHref={primaryClaimHref}
            ctaLabel={embedCopy.ctaLabel}
            placement={`vi_article_${article.slug}_embed_high`}
            loadingLabel="Đang tải form ClaimWinger tiếng Việt..."
            loadingDescription="Bạn có thể kiểm tra hồ sơ ngay trong luồng tiếng Việt mà không cần rời bài viết."
          />

          {article.sections.map((section) => (
            <section key={section.title} className="mb-12">
              <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
                {section.title}
              </h2>
              <div className="space-y-4 text-base leading-8 text-slate-700 dark:text-slate-300">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && (
                <div className="mt-6 grid gap-4 md:grid-cols-1">
                  {section.bullets.map((bullet) => (
                    <Card key={bullet} className="p-5">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{bullet}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </section>
          ))}

          <section className="mb-12">
            <Card className="border-emerald-200 bg-emerald-50/70 p-8 dark:border-emerald-900 dark:bg-emerald-950/10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Liên kết ngữ cảnh để kiểm tra hồ sơ ngay
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Các link dưới đây đều có UTM riêng để phân biệt nguồn traffic theo từng ngữ cảnh của bài viết và gửi event về GTM khi người dùng nhấp.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {article.contextualLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerViClick(link.placement, link.href)}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-gray-900 dark:hover:border-emerald-700"
                  >
                    <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                      <ExternalLink className="h-4 w-4" />
                      Link ngữ cảnh
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                      {link.label}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {link.description}
                    </p>
                  </a>
                ))}
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Câu hỏi thường gặp
            </h2>
            <div className="space-y-4">
              {article.faqs.map((faq) => (
                <Card key={faq.question} className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Bước tiếp theo hợp lý
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Sau khi đọc xong phần nền tảng, bạn có thể đi thẳng vào luồng phù hợp với tình huống thật của mình hoặc quay lại trung tâm kiến thức tiếng Việt.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <a
                    href={primaryClaimHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimWingerViClick(
                        `vi_article_${article.slug}_bottom_primary`,
                        primaryClaimHref,
                      )
                    }
                  >
                    Kiểm tra hồ sơ ngay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/vi/chuyen-bay-bi-hoan">Đọc về chuyến bay bị hoãn</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/vi/chuyen-bay-bi-huy">Đọc về chuyến bay bị hủy</Link>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <Link href="/vi/blog">Về blog tiếng Việt</Link>
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </article>
    </LayoutVi>
  );
}
