import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  DoorOpen,
  PlaneLanding,
  Timer,
} from "lucide-react";

export default function ArrivalTimeDoorOpenGuide() {
  return (
    <LayoutZh>
      <SEO
        title="到达时间到底怎么算？开门时间 vs 落地时间【2026】"
        description="EU261 里为什么很多案件更看开门时间而不是轮子着地时间？本文讲清 arrival time、door open、下机时间与 3 小时规则的关系。"
        url="https://problemlot.com/zh/blog/arrival-time-door-open-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "到达时间到底怎么算？开门时间 vs 落地时间【2026】",
            description:
              "解释 EU261 中 arrival time、舱门打开时间、轮子着地时间和 3 小时门槛关系的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/arrival-time-door-open-guide",
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
                name: "飞机轮子着地时，是否就算已经到达？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多案件里并不这么看。更关键的通常是至少一个舱门何时打开、乘客何时真正可以离机，而不是轮子触地的时刻。",
                },
              },
              {
                "@type": "Question",
                name: "如果飞机准时落地，但在停机坪等了很久，能影响赔偿吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "可能会。因为若最终“到达时间”因此跨过关键门槛，例如 3 小时，结论可能完全不同。",
                },
              },
              {
                "@type": "Question",
                name: "为什么几分钟都可能重要？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "因为很多案件围绕 3 小时门槛展开，几分钟就可能决定是否达到赔偿标准。",
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
            <span className="text-slate-900 dark:text-white">到达时间怎么计算</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Timer className="h-4 w-4" />
              赔偿基础
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              到达时间到底怎么算？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客会自然地认为 “飞机一落地就算到达”。可在赔偿争议里，真正关键的往往不是轮子触地，
              而是乘客究竟什么时候真正能离开飞机、继续自己的行程。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 7 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <PlaneLanding className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  更有意义的时间点
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>至少一个舱门打开</li>
                  <li>乘客可以实际下机</li>
                  <li>能继续自己的行程</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>把轮子着地当成最终到达</li>
                  <li>忽略滑行和停机坪等待时间</li>
                  <li>低估几分钟的价值</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次到底有没有跨过关键到达门槛？</h2>
            <p className="mb-6 text-blue-100">
              如果您的航班落地后又在停机坪等了很久，或者您不确定到底晚到多少，
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
              <DoorOpen className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              为什么舱门打开时间这么重要？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为从乘客角度看，真正的 “到达” 不只是技术上飞机到了地面，
                而是您可以离机、继续过边检、拿行李、去转机或离开机场。
              </p>
              <p>
                所以在很多接近门槛的案件里，
                舱门何时打开，往往比轮子何时触地更能决定结论。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">3 个典型场景</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  1. 飞机提前落地，但停机位没空
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  轮子触地不代表您已经真正到达，停机坪等待时间仍可能很关键。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  2. 飞机晚到 2 小时 55 分，但开门时已经超过 3 小时
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这种几分钟的差别，往往正是案件争议的核心。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  3. 联程票第一段落地后，滑行和开门太慢
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这类几分钟也可能决定您是否赶上下一段，从而把整个案件价值完全改变。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              必须说清楚：到达时间不只是“落地”这么简单
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                如果案件离关键门槛很近，几分钟都可能改变结论。
              </p>
              <p>
                这也是为什么航班记录、App 截图、实际下机时间和后续沟通记录，
                在这类案件里都比乘客想象的更重要。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定自己这次到底算几点到达？</h2>
            <p className="mb-6 text-slate-300">
              只要您有原计划到达时间、实际落地情况和下机时间线，就能先把关键门槛判断清楚。
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
                  轮子着地时间是不是官方最重要时间？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  在很多赔偿争议里，不一定。更关键的常常是乘客何时真正可以离机。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  如果只差几分钟，真的有这么重要吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  是的。很多案件正是围绕是否跨过关键门槛而产生结论差异。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  这种规则对直飞和联程都重要吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  都重要，只是联程里这些分钟常常还会影响您是否错过下一段。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您还没分清 3 小时门槛，继续看
                <Link
                  href="/zh/blog/three-hour-arrival-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《为什么是到达晚点 3 小时，不是起飞晚点 3 小时？》
                </Link>
                。
              </p>
              <p>
                如果您是联程误机，也建议继续读
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《什么叫最终目的地？》
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
