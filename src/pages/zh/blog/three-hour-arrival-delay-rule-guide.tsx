import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  PlaneLanding,
  Scale,
} from "lucide-react";

export default function ThreeHourArrivalDelayRuleGuide() {
  return (
    <LayoutZh>
      <SEO
        title="为什么是到达晚点 3 小时，不是起飞晚点 3 小时？【2026】"
        description="EU261 为什么更看最终到达时间，而不是起飞推迟了多久？本文讲清 3 小时规则、开门时间、转机失败和最容易被误解的到达计算方式。"
        url="https://problemlot.com/zh/blog/three-hour-arrival-delay-rule-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "为什么是到达晚点 3 小时，不是起飞晚点 3 小时？【2026】",
            description:
              "解释 EU261 下 3 小时到达延误规则、开门时间、最终目的地和转机失败关系的中文指南。",
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
            datePublished: "2026-04-06",
            dateModified: "2026-04-06",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://problemlot.com/zh/blog/three-hour-arrival-delay-rule-guide",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "为什么我起飞只晚了 1 小时，却仍可能拿到赔偿？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "因为很多案件里看的是最终到达时间，而不是起飞推迟时间。若小延误导致错过转机并最终晚到 3 小时以上，仍可能触发赔偿。",
                },
              },
              {
                "@type": "Question",
                name: "到达时间是看飞机落地时间吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常更关键的是乘客能够离开飞机、至少一个舱门打开的时间，而不是飞机轮子触地的时刻。",
                },
              },
              {
                "@type": "Question",
                name: "如果我在中途机场等了很久，但最终只晚到 2 小时 50 分，还能赔吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多案件里关键门槛仍围绕最终到达延误是否达到约 3 小时，因此几分钟的差别都可能非常重要。",
                },
              },
              {
                "@type": "Question",
                name: "这条 3 小时规则对联程票和直飞都适用吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多时候都适用，但联程票会更强调最终目的地；直飞则通常直接看该航班到达终点的时间。",
                },
              },
            ],
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
            <span className="text-slate-900 dark:text-white">3 小时到达规则</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Scale className="h-4 w-4" />
              赔偿基础
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              为什么是到达晚点 3 小时，不是起飞晚点 3 小时？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              这是乘客最容易直觉判断错的规则。很多人只盯着航班“晚起飞多久”，
              但在 EU261 逻辑里，真正更重要的经常是您到底晚了多久才真正到达终点。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Clock3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  常见正确理解
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>关键看最终到达终点时晚了多久</li>
                  <li>小起飞延误也可能变成大到达延误</li>
                  <li>联程票更要看整段最后结果</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>以为只看起飞时间</li>
                  <li>以为轮子着地就算到达</li>
                  <li>忽略转机失败后的最终晚点</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次到底是不是超过 3 小时门槛？</h2>
            <p className="mb-6 text-blue-100">
              如果您的航班涉及长延误、错过转机或到底算不算 3 小时仍说不清，
              现在就可以先做一次免费资格检查。
            </p>
            <a
              href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              免费检查我的航班
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <PlaneLanding className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              为什么轮子着地时间不一定是关键？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为从乘客真实能离开飞机、继续行程的角度看，
                飞机触地还不等于您已经“到达”。
              </p>
              <p>
                这也是为什么在很多争议里，
                舱门何时打开、乘客何时真正能下机，
                会比轮子触地时间更有实际意义。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">4 个典型例子</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  1. 起飞晚 20 分钟，落地晚 15 分钟
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这类案件通常距离赔偿门槛很远，因为最终到达影响很小。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  2. 起飞晚 45 分钟，但错过转机，最终晚到 7 小时
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这类联程案件里，赔偿判断往往会更接近后者，也就是最终目的地晚到的结果。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  3. 中途等了很久，但最终只晚到 2 小时 55 分
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这时门槛问题就会变得很敏感，几分钟都可能影响结论。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  4. 直飞航班晚到 3 小时 20 分
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这类直飞案件通常更简单，直接围绕该终点城市的最终到达延误来判断。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              必须说清楚：联程票和直飞都可能看 3 小时，但逻辑不完全一样
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                直飞案件通常更直接，看这班飞机到达终点晚了多久。
              </p>
              <p>
                联程案件则更容易出现“第一段小延误，最终大晚点”的情况，
                所以更依赖最终目的地和整段行程结构。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定这次到底有没有超过 3 小时门槛？</h2>
            <p className="mb-6 text-slate-300">
              只要您有原定到达时间、实际下机时间或最终到达时间，就能先把这条规则判断清楚。
            </p>
            <a
              href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              立即免费检查资格
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">常见问题 FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  起飞晚点很久，但到达只晚一点，还能赔吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  很多案件里更关键的是到达延误，而不是起飞延误本身。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  为什么轮子着地时间不够？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  因为乘客真正完成“到达”的时间，往往更接近能下机并继续行程的时候。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  3 小时规则对转机失败也适用吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  很多联程案件里是的，但更关键的是最终目的地的晚点结果。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您还没分清最终目的地，继续看
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《什么叫最终目的地？》
                </Link>
                。
              </p>
              <p>
                如果案件涉及伊斯坦布尔误机，也建议继续读
                <Link
                  href="/zh/blog/istanbul-missed-connection-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《在伊斯坦布尔错过转机怎么办？》
                </Link>
                。
              </p>
            </div>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
