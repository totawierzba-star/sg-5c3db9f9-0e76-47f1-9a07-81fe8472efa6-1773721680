import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import { ClaimWingerZhSection } from "@/components/ClaimWingerZhSection";
import Link from "next/link";
import { ArrowRight, AlertCircle, BookOpen, Clock, Euro, Plane } from "lucide-react";
import { blogArticlesZhSorted } from "@/lib/blogArticlesZh";

export default function ZhHomePage() {
  const latestArticles = blogArticlesZhSorted.slice(0, 3);

  return (
    <LayoutZh>
      <SEO
        title="航班延误或取消 – 检查最高600欧元的赔偿"
        description="您的航班有问题吗？检查您是否有权获得高达600欧元的航班延误或取消赔偿。"
        url="https://problemlot.com/zh"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Plane className="w-4 h-4" />
              航班赔偿服务
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              您的航班延误或取消了吗？<br />您可能有权获得高达<span className="text-blue-600 dark:text-blue-400"> 600 €</span> 的赔偿
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              根据欧盟法规 261/2004，乘客在航班延误、取消或超额预订的情况下有权获得赔偿。检查您的权利并立即获得应得的补偿。
            </p>
            <ClaimWingerZhSection
              className="mt-8 text-left"
              badge="ClaimWinger 中文航班索赔"
              title="先免费检查，再决定是否提交索赔"
              description="如果您的航班延误、取消或转机失败，直接通过 ClaimWinger 中文表单提交会更快。系统会先帮您判断资格，随后再进入正式索赔流程。"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">600 €</div>
                <div className="text-gray-600 dark:text-gray-300">最高赔偿金额</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3 小时</div>
                <div className="text-gray-600 dark:text-gray-300">最低延误时间以获得赔偿</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">6 年</div>
                <div className="text-gray-600 dark:text-gray-300">提出索赔的期限</div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              如何获得赔偿？
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    检查您的航班
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    输入您的航班详细信息，我们将在几秒钟内告诉您是否有资格获得赔偿。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    我们处理您的案件
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    我们的专家团队将处理与航空公司的所有沟通和法律程序。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    获得您的赔偿
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    一旦我们收到航空公司的付款，我们会将您的赔偿金直接转给您。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              您的乘客权利
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link
                href="/zh/delayed-flight"
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <Clock className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  航班延误
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  如果您的航班延误超过3小时，您可能有权获得赔偿。
                </p>
              </Link>

              <Link
                href="/zh/cancelled-flight"
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <AlertCircle className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  航班取消
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  航班取消时，您有权获得退款或替代航班以及赔偿。
                </p>
              </Link>

              <Link
                href="/zh/compensation-calculator"
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <Euro className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  赔偿计算器
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  计算您可以获得多少赔偿：250€、400€ 或 600€。
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  <BookOpen className="h-4 w-4" />
                  中文博客
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  最新中文指南
                </h2>
                <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
                  我们持续补充中国乘客最常遇到的欧洲航班延误、取消和转机问题，方便您快速判断是否值得索赔。
                </p>
              </div>

              <Link
                href="/zh/blog"
                className="inline-flex items-center gap-2 text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                查看全部文章
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/zh/blog/${article.slug}`}
                  className="group rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="mb-3 text-sm font-medium text-blue-600 dark:text-blue-400">
                    {article.category}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {article.title}
                  </h3>
                  <p className="mb-5 line-clamp-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{article.date}</span>
                    <span className="inline-flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400">
                      阅读
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl shadow-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              不要让您的权利白白流失
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              检查您是否有权因航班延误或取消获得赔偿
            </p>
            <a
              href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              检查我的赔偿
            </a>
            <p className="mt-4 text-sm text-blue-100">
              无风险 – 只在成功时付款
            </p>
          </div>
        </section>
      </div>
    </LayoutZh>
  );
}
