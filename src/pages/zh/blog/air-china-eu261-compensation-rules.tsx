import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2, FileText, Plane, Scale } from "lucide-react";

export default function AirChinaEu261CompensationRules() {
  return (
    <LayoutZh>
      <SEO
        title="中国国际航空 Air China 能申请 EU261 吗？中国乘客最容易搞错的规则"
        description="国航延误或取消后，什么时候能申请 EU261，什么时候完全不能？本文用北京、上海、法兰克福、伦敦等常见航线解释中国国际航空的赔偿规则。"
        url="https://problemlot.com/zh/blog/air-china-eu261-compensation-rules"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "中国国际航空 Air China 能申请 EU261 吗？中国乘客最容易搞错的规则",
            description: "国航航班延误或取消后，中国乘客如何判断是否受 EU261 保护。",
            datePublished: "2026-03-08",
            dateModified: "2026-03-08",
            author: {
              "@type": "Organization",
              name: "ProblemLot.com",
            },
            publisher: {
              "@type": "Organization",
              name: "ProblemLot.com",
              logo: {
                "@type": "ImageObject",
                url: "https://problemlot.com/og-image.png",
              },
            },
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">
              首页
            </Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              博客
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">国航 EU261 规则</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              航空公司指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              中国国际航空 Air China 能申请 EU261 吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              最简答案是：<strong>有时候能，大多数中国出发航班不能。</strong>
              是否适用 EU261，不取决于您是不是中国乘客，而取决于出发地和实际承运人。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-03-08</span>
              <span>•</span>
              <span>阅读时间 10 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              一句话判断公式
            </h2>
            <p className="mb-4 text-slate-700 dark:text-slate-200">
              国航属于<strong>非欧盟航空公司</strong>。因此：
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 font-bold text-green-700 dark:text-green-400">通常受保护</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  从欧盟机场起飞的国航航班，例如法兰克福 → 北京、米兰 → 上海、马德里 → 北京。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 font-bold text-red-700 dark:text-red-400">通常不受保护</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  从中国机场起飞的国航航班，例如北京 → 法兰克福、上海 → 伦敦、成都 → 巴黎。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4 个最常见场景
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  1. 北京 → 法兰克福，国航执飞
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  通常不能依据 EU261 索赔。原因是航班从中国出发，承运人也不是欧盟航空公司。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  2. 法兰克福 → 北京，国航执飞
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  可以适用 EU261。关键原因是航班从欧盟机场起飞，法规覆盖所有承运人。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  3. 上海 → 伦敦，挂国航代码但汉莎或 LOT 实际执飞
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  需要看<strong>实际承运人</strong>。如果实际运营航班的是欧盟航空公司，您仍可能受到 EU261 保护。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  4. 国航联程票，第一段欧洲出发，第二段回中国
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  如果最终到达中国晚点超过 3 小时，而且第一段问题导致整个联程失败，依然可能触发赔偿。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertCircle className="h-7 w-7 text-amber-600 dark:text-amber-400" />
              最容易搞错的 3 个点
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>
                代码共享不等于承运人。挂的是谁的航班号，不一定决定是否适用 EU261。
              </li>
              <li>
                接受改签不自动放弃现金赔偿。赔偿和改签安排可以并存。
              </li>
              <li>
                国籍和护照不是重点。中国公民完全可能在国航航班上享有 EU261 权利。
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <CheckCircle2 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              如果您坐的是国航，建议这样判断
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">步骤 1</div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">看出发地</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  从欧盟起飞时，成功概率显著更高。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">步骤 2</div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">看实际承运人</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  若由欧盟航司代飞，结论可能完全不同。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">步骤 3</div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">看最终到达</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  最终目的地晚点 3 小时以上，才更接近现金赔偿门槛。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <FileText className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              下一篇建议读什么？
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/zh/blog/shanghai-pudong-delayed-flight-compensation"
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:ring-blue-300 dark:bg-gray-800 dark:ring-gray-700"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  上海浦东机场航班延误赔偿指南
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  适合从中国出发、想快速判断不同承运人差异的读者。
                </p>
              </Link>
              <Link
                href="/zh/blog/chinese-citizens-eu261-compensation-guide"
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:ring-blue-300 dark:bg-gray-800 dark:ring-gray-700"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  中国公民欧洲航班索赔完整指南
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  适合想从头建立整体规则框架的读者。
                </p>
              </Link>
            </div>
          </section>

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">不确定自己的国航航班算不算？</h2>
            <p className="mb-6 text-blue-100">
              只要知道航线、日期和实际承运人，就可以先做一次免费资格判断。
            </p>
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
        </div>
      </article>
    </LayoutZh>
  );
}
