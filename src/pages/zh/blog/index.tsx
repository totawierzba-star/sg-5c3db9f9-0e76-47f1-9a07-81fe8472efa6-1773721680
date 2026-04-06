import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Search,
  Sparkles,
  Tag,
} from "lucide-react";
import {
  blogArticlesZhSorted,
  blogCategoriesZh,
  featuredBlogArticlesZh,
} from "@/lib/blogArticlesZh";

export default function BlogIndexZh() {
  const [selectedCategory, setSelectedCategory] = useState("全部文章");
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.trim().toLowerCase();

  const filteredArticles = blogArticlesZhSorted.filter((article) => {
    const matchesCategory =
      selectedCategory === "全部文章" || article.category === selectedCategory;
    const matchesSearch =
      query === "" ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const latestArticles = blogArticlesZhSorted.slice(0, 6);
  const featuredArticles = featuredBlogArticlesZh.slice(0, 3);
  const totalArticles = blogArticlesZhSorted.length;
  const totalCategories = blogCategoriesZh.length - 1;

  const categoryCounts = blogArticlesZhSorted.reduce<Record<string, number>>((acc, article) => {
    acc[article.category] = (acc[article.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <LayoutZh>
      <SEO
        title={`航班延误索赔博客【中文】${totalArticles}篇 EU261 权利、案例分析、专家建议`}
        description={`ProblemLot 中文博客已发布 ${totalArticles} 篇航班延误、取消、转机失败和 EU261 索赔指南，覆盖机场、航空公司、法规解读和中国乘客常见场景。`}
        url="https://problemlot.com/zh/blog"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
        <section className="border-b border-blue-100 bg-white/70 py-16 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                <BookOpen className="h-4 w-4" />
                中文航班赔偿知识库
              </div>

              <h1 className="mb-5 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
                专为中国乘客打造的欧洲航班索赔博客
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                聚焦中国出发、欧洲转机、航班取消、延误超 3 小时和 EU261 索赔实务。
                从北京、上海到法兰克福、巴黎、阿姆斯特丹，我们把最关键的问题讲清楚。
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {totalArticles}
                  </div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">深度文章</div>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {totalCategories}
                  </div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">内容分类</div>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    €600
                  </div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">最高赔偿金额</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 p-8 text-white shadow-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
                <Sparkles className="h-4 w-4" />
                精选推荐
              </div>
              <h2 className="mb-3 text-2xl font-bold">先读这几篇，最快判断自己能不能索赔</h2>
              <p className="mb-6 max-w-2xl text-blue-100">
                如果您是第一次接触 EU261，建议先看总规则、再看机场或航空公司专题，判断会更准确。
              </p>

              <div className="space-y-4">
                {featuredArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/zh/blog/${article.slug}`}
                    className="block rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/15"
                  >
                    <div className="mb-2 text-sm text-blue-100">{article.category}</div>
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-blue-100">{article.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                快速查找文章
              </h2>

              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="搜索：国航、浦东、转机、EU261..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {blogCategoriesZh.map((category) => {
                  const count =
                    category === "全部文章" ? totalArticles : categoryCounts[category] || 0;

                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        selectedCategory === category
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-gray-700 dark:text-slate-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      {category} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {selectedCategory === "全部文章" ? "全部文章" : selectedCategory}
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                找到 {filteredArticles.length} 篇相关内容
              </p>
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <p className="text-lg text-slate-600 dark:text-slate-300">
                暂时没有匹配结果。您可以试试“延误”、“取消”、“国航”或“转机”。
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/zh/blog/${article.slug}`}
                  className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-blue-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-blue-600"
                >
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                      <Tag className="h-4 w-4" />
                      <span>{article.category}</span>
                    </div>

                    <h3 className="mb-3 line-clamp-2 text-xl font-bold text-slate-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {article.title}
                    </h3>

                    <p className="mb-6 line-clamp-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-6 py-4 text-sm font-semibold text-blue-600 transition group-hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-900 dark:text-blue-400 dark:group-hover:bg-gray-950">
                    <span>阅读全文</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          )}

          <section className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                最新更新
              </h2>
              <div className="space-y-4">
                {latestArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/zh/blog/${article.slug}`}
                    className="block rounded-2xl bg-slate-50 p-4 transition hover:bg-blue-50 dark:bg-gray-900 dark:hover:bg-gray-950"
                  >
                    <div className="mb-1 text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400">
                      {article.category}
                    </div>
                    <div className="font-semibold text-slate-900 dark:text-white">{article.title}</div>
                    <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{article.date}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
              <h2 className="mb-4 text-3xl font-bold">您的航班遇到问题了吗？</h2>
              <p className="mb-6 max-w-2xl text-lg text-blue-100">
                阅读博客后，下一步就是检查自己的航班是否满足延误 3 小时、取消通知不足 14 天或联程转机失败等条件。
              </p>
              <div className="mb-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-2xl font-bold">30 秒</div>
                  <div className="mt-1 text-sm text-blue-100">快速初步判断</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-2xl font-bold">€250-€600</div>
                  <div className="mt-1 text-sm text-blue-100">常见赔偿区间</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-2xl font-bold">No win, no fee</div>
                  <div className="mt-1 text-sm text-blue-100">成功后才收费</div>
                </div>
              </div>
              <a
                href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
              >
                免费检查航班
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </section>
        </section>
      </div>
    </LayoutZh>
  );
}
