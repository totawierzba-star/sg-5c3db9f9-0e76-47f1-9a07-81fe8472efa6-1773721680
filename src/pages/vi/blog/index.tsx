import Head from "next/head";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Sparkles } from "lucide-react";

import { LayoutVi } from "@/components/LayoutVi";
import { SEO } from "@/components/SEO";
import { ViSeoHead } from "@/components/ViSeoHead";
import { Card } from "@/components/ui/card";
import { blogArticlesViSorted } from "@/lib/blogArticlesVi";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/vi/blog";

const contentPillars = [
  {
    title: "Core EU261",
    description:
      "Các bài nền tảng về phạm vi áp dụng, số tiền 250 / 400 / 600 EUR và cách phân biệt delay, cancellation, refund, compensation.",
  },
  {
    title: "AI / short answers",
    description:
      "Các truy vấn ngắn có intent cao như trễ bao nhiêu giờ, mất boarding pass, nhận voucher rồi còn được tiền mặt không.",
  },
  {
    title: "Routes & hub logic",
    description:
      "Các bài chuyên sâu cho tuyến châu Âu → Việt Nam / châu Á và logic nối chuyến qua Frankfurt, Paris CDG, Amsterdam hay Vienna.",
  },
];

export default function BlogIndexVi() {
  const schemas = combineSchemas(
    generateOrganizationSchema({ url: canonicalUrl }),
    generateWebPageSchema({
      title: "Blog EU261 tiếng Việt | Hướng dẫn bồi thường chuyến bay",
      description:
        "Blog tiếng Việt về EU261 cho hành khách bay giữa châu Âu và Việt Nam: quyền lợi khi chuyến bay bị trễ, bị hủy, đổi lịch và cách kiểm tra hồ sơ bồi thường.",
      url: canonicalUrl,
      inLanguage: "vi-VN",
      type: "CollectionPage",
    }),
    generateBreadcrumbSchema([
      { name: "Trang chủ", url: "https://problemlot.com/vi" },
      { name: "Blog", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutVi>
      <SEO
        title="Blog EU261 tiếng Việt | Hướng dẫn bồi thường chuyến bay"
        description="Blog tiếng Việt về EU261 cho hành khách bay giữa châu Âu và Việt Nam: quyền lợi khi chuyến bay bị trễ, bị hủy, đổi lịch và cách kiểm tra hồ sơ bồi thường."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="vi_VN"
        language="Vietnamese"
      />
      <ViSeoHead canonicalUrl={canonicalUrl} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="border-b border-emerald-100 bg-white/80 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">
                <BookOpen className="h-4 w-4" />
                Blog tiếng Việt cho EU261
              </div>
              <h1 className="mb-5 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
                Trung tâm nội dung cho hành khách Việt bay qua châu Âu
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Các bài viết ở đây tập trung vào những câu hỏi có intent cao nhất của hành
                khách Việt khi bay giữa châu Âu và Việt Nam, đặc biệt ở các hồ sơ long-haul,
                transit qua hub EU và case cần hiểu nhanh logic EU261.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-slate-900 p-8 text-white shadow-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
                <Sparkles className="h-4 w-4" />
                Bài mở đầu quan trọng nhất
              </div>
              <h2 className="mb-3 text-2xl font-bold">{blogArticlesViSorted[0].title}</h2>
              <p className="mb-6 text-emerald-50">{blogArticlesViSorted[0].excerpt}</p>
              <Link
                href={`/vi/blog/${blogArticlesViSorted[0].slug}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                Đọc bài viết
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Bạn sẽ tìm thấy gì trong blog này?
              </h2>
              <div className="space-y-4">
                {contentPillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                    <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogArticlesViSorted.map((article) => (
              <Link
                key={article.slug}
                href={`/vi/blog/${article.slug}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-emerald-300 dark:bg-gray-900 dark:ring-slate-800 dark:hover:ring-emerald-700"
              >
                <div className="p-6">
                  <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">
                    {article.cluster}
                  </div>
                  <h2 className="mb-3 text-xl font-bold text-slate-900 transition group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
                    {article.title}
                  </h2>
                  <p className="mb-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Clock3 className="h-4 w-4" />
                    {article.readTime}
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-6 py-4 text-sm font-semibold text-emerald-700 transition group-hover:bg-emerald-50 dark:border-slate-800 dark:bg-gray-950 dark:text-emerald-400">
                  <span>Đọc chi tiết</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </LayoutVi>
  );
}
