import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Hotel, Plane, Route, ShieldAlert } from "lucide-react";

export default function AmsterdamSchipholMissedConnectionCompensation() {
  return (
    <LayoutZh>
      <SEO
        title="阿姆斯特丹史基浦转机失败怎么办？中国乘客错过转机赔偿全指南"
        description="在阿姆斯特丹史基浦机场转机时错过下一程，是否能拿到 €600？本文解释联程票、单独出票、过夜安置、重新订票和 KLM/法航常见场景。"
        url="https://problemlot.com/zh/blog/amsterdam-schiphol-missed-connection-compensation"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "阿姆斯特丹史基浦转机失败怎么办？中国乘客错过转机赔偿全指南",
            description: "中国乘客在阿姆斯特丹史基浦机场错过转机后的赔偿和安置指南。",
            datePublished: "2026-03-03",
            dateModified: "2026-03-03",
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
            <span className="text-slate-900 dark:text-white">史基浦机场错过转机</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Route className="h-4 w-4" />
              转机权益
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              阿姆斯特丹史基浦转机失败怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              对中国乘客来说，阿姆斯特丹是最常见的欧洲转机点之一。只要是联程票，错过转机后往往不仅有改签权利，还有机会拿到 €600 赔偿。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-03-03</span>
              <span>•</span>
              <span>阅读时间 12 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              先看最重要的区别
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 font-bold text-green-700 dark:text-green-400">联程票</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  如果上海 → 阿姆斯特丹 → 巴塞罗那在同一张订单里，第一段延误导致错过第二段，通常可以按照最终到达延误来判断赔偿。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 font-bold text-red-700 dark:text-red-400">单独出票</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  如果您分开买了两张机票，第二段一般由您自己承担风险，现金赔偿与改签责任都更复杂。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              什么时候最容易拿到 €600？
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  第一段由欧盟航司执飞
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  例如 KLM、法航、Lufthansa、LOT 等。从中国出发也可能适用 EU261。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  最终目的地晚点超过 3 小时
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  不是看您在阿姆斯特丹等了多久，而是看您最终到达马德里、伦敦、巴黎或中国的时间。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  延误原因不属于真正的特殊情况
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  普通技术故障、上一航班连锁晚点、机组安排问题，往往仍应由航空公司负责。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <ShieldAlert className="h-7 w-7 text-amber-600 dark:text-amber-400" />
              在史基浦机场现场要做的事
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>请航空公司或地勤确认您是“misconnected passenger”。</li>
              <li>索要新的登机牌或改签确认邮件。</li>
              <li>如果需要过夜，要求酒店、交通和餐饮安排。</li>
              <li>保留您自己支付的酒店、餐食、出租车票据。</li>
              <li>拍下航显屏和误机时刻，方便后续证明因果关系。</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Hotel className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              赔偿之外，您还可以要求什么？
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">重新订票</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  联程票情况下，航司应负责把您送到最终目的地。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">酒店与餐饮</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  过夜或长时间等待时，航空公司应提供合理照顾。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">现金赔偿</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  若满足 EU261 条件，赔偿和照顾义务可以同时存在。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <CheckCircle2 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              哪些案例最典型？
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  上海 → 阿姆斯特丹 → 里斯本，KLM 联程票
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  第一段晚到 70 分钟，错过下一程，最终第二天中午到达。通常是非常典型的 EU261 转机赔偿场景。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  北京 → 阿姆斯特丹一张票，阿姆斯特丹 → 巴黎另一张票
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这类分开出票的情况，第二张票损失很可能需要您自己承担，索赔难度明显更高。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              继续阅读
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/zh/blog/klm-compensation-guide"
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:ring-blue-300 dark:bg-gray-800 dark:ring-gray-700"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  荷兰皇家航空 KLM 延误/取消赔偿指南
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  如果您飞史基浦的主要承运人是 KLM，这篇更适合。
                </p>
              </Link>
              <Link
                href="/zh/blog/missed-connection-compensation-guide"
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:ring-blue-300 dark:bg-gray-800 dark:ring-gray-700"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  错过转机赔偿总指南
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  想看更通用的联程规则，可以接着读这篇。
                </p>
              </Link>
            </div>
          </section>

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">已经在欧洲转机失败了？</h2>
            <p className="mb-6 text-blue-100">
              只要您还保留着原始机票、改签记录和到达时间，现在就可以先判断是否值得索赔。
            </p>
            <a
              href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              免费检查资格
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </article>
    </LayoutZh>
  );
}
