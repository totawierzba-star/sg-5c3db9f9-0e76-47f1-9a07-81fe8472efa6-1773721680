import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  PlaneLanding,
  ShieldAlert,
  Ticket,
} from "lucide-react";

export default function LandedButStuckOnPlaneArrivalTimeGuide() {
  return (
    <LayoutZh>
      <SEO
        title="飞机落地了却迟迟不能下机，延误怎么算？Arrival Time 指南【2026】"
        description="航班已落地，但因为停机位、摆渡车、廊桥或机场调度迟迟不能下机，延误时间怎么算？本文讲清 landed but stuck on plane、arrival time 与 EU261 边界。"
        url="https://problemlot.com/zh/blog/landed-but-stuck-on-plane-arrival-time-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "飞机落地了却迟迟不能下机，延误怎么算？Arrival Time 指南【2026】",
            description:
              "解释 landed but stuck on plane、arrival time、开门时间、机场地面调度与 EU261 边界的中文指南。",
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
            datePublished: "2026-04-07",
            dateModified: "2026-04-07",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://problemlot.com/zh/blog/landed-but-stuck-on-plane-arrival-time-guide",
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
                name: "飞机轮子已经着地了，延误是不是就结束了？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不应简单这样理解。很多旅客权利分析更看乘客真正能够离机的时间，而不是单纯看飞机接地的那一刻。",
                },
              },
              {
                "@type": "Question",
                name: "因为没有廊桥或摆渡车，大家在飞机里多等了很久，这段时间算吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常值得重点记录和分析。乘客无法实际结束飞行状态的时间，往往比很多人想象得更重要。",
                },
              },
              {
                "@type": "Question",
                name: "这种情况一定能按 EU261 赔吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。关键仍要看航班本身是否落在欧洲规则范围内，以及最终到达延误是否跨过了相关门槛。",
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
            <span className="text-slate-900 dark:text-white">落地后仍困在机上</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <PlaneLanding className="h-4 w-4" />
              赔偿基础
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              飞机落地了却迟迟不能下机，延误怎么算？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客看着屏幕显示“已到达”，甚至已经感觉到飞机轮子着地，
              却又在机舱里多等了十几分钟、三十分钟，甚至更久。原因可能是
              <strong> 没有停机位</strong>、<strong>没有廊桥</strong>、
              <strong> 摆渡车迟到</strong> 或机场地面调度混乱。问题是，这段时间到底算不算延误？
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-07</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Ticket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  先记住
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>轮子着地不一定等于最终“到达”</li>
                  <li>开门和允许下机的时间常常更关键</li>
                  <li>这段等待可能直接影响 3 小时门槛</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>落地那一秒就停止计算延误</li>
                  <li>机场地面问题和乘客权利无关</li>
                  <li>只要准时着陆，就不可能晚到 3 小时</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">落地后还在机上等了很久，不确定这段算不算？</h2>
            <p className="mb-6 text-blue-100">
              先免费检查这次等待是否影响了实际到达时间，以及您的航班是否仍在欧洲规则分析范围内。
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
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              为什么“已经落地”不一定等于“已经到达”？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为从乘客视角，飞行真正结束并不是轮胎触地的那一瞬间，而是您终于可以站起来、取行李架上的物品，并离开机舱的时候。
                如果飞机落地后还在滑行、等待停机位、等摆渡车或等廊桥接驳，乘客仍然被困在运输过程中。
              </p>
              <p>
                这就是为什么很多旅客权利分析会更重视
                <strong> 开门时间</strong> 或
                <strong> 乘客被允许离机的时间</strong>，而不是单看航班跟踪网站上显示的 touchdown 时间。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-700 dark:text-amber-300" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                什么时候更可能受欧洲法规保护，什么时候不一定？
              </h2>
            </div>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                <strong>更可能受欧洲法规保护：</strong>
                如果航班本身满足欧洲乘客规则的适用范围，而落地后机上等待又把最终到达时间推过关键门槛，
                那这段地面等待就非常值得继续分析。它并不因为发生在“落地之后”就自动失去意义。
              </p>
              <p>
                <strong>不一定受欧洲法规保护：</strong>
                如果航班本身并不在欧洲规则范围内，
                那么即使您确实在落地后又被困了很久，也不当然进入 EU261 赔偿路径。此时更多可能是一般服务和地面运营争议。
              </p>
              <p>
                所以第一步仍然是先判断
                <strong> 这趟航班是否受欧洲规则覆盖</strong>，
                然后再看这段地面等待是否改变了最终到达时间结果。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的“落地后还没结束”场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 没有停机位，飞机只能等待
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这种情况最容易让乘客误以为“反正已经到了”，但实际上旅程对乘客来说仍未真正结束。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 没有廊桥或摆渡车
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  飞机已经停好，但乘客仍然无法离机。这类等待尤其值得记录具体分钟数和现场说明。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 到达时间卡在 3 小时边缘
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最关键的争议点之一。有些案件成败，恰恰就取决于这最后十几分钟到底算不算在最终到达延误里。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">别只盯着着陆时间</h2>
            <p className="mb-6 text-slate-300">
              越是接近 3 小时门槛的案件，越要把落地后到真正下机之间的每一分钟都记录清楚。
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
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              乘客现在最该保留哪些证据？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                请保留机舱内等待时的时间截图、手机照片、机组广播内容、舱门打开时间、摆渡车到达时间，以及实际进入航站楼的大致时间。
                如果后续还错过了接驳、火车或酒店安排，也请保留全部票据和时间线。
              </p>
              <p>
                如果您还没搞清楚为什么“到达时间”不是单看落地时间，也建议继续看
                <Link
                  href="/zh/blog/arrival-time-door-open-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《到达时间到底怎么算？开门时间 vs 落地时间》
                </Link>
                、
                <Link
                  href="/zh/blog/three-hour-arrival-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《为什么是到达晚点 3 小时》
                </Link>
                和
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《最终目的地规则》
                </Link>
                。
              </p>
            </div>
          </section>

          <section
            id="faq"
            className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">常见问题 FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  飞机提前落地，但下机很晚，最后还算准点吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不应只看“提前落地”这一点。关键还是乘客实际什么时候被允许结束运输状态并离开机舱。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  航班跟踪网站显示的 arrival time 能直接拿来用吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  可以作为参考，但未必足够。它显示的可能是着陆、停靠或系统记录时间，而不一定准确反映乘客真正可下机的时点。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  这类等待如果是机场地面原因，也值得继续追吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  值得先留证并继续核查。尤其在时间刚好卡门槛时，这段等待本身就可能决定案件走向。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您想先快速判断一趟航班本身是否落在欧洲规则范围内，继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果您的问题还叠加了接驳失败、改签到次日或额外交通损失，也建议继续看
                <Link
                  href="/zh/blog/how-to-document-delay-costs-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《怎么证明酒店、餐饮和出租车费用》
                </Link>
                和
                <Link
                  href="/zh/blog/refund-vs-rerouting-choice-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《退款还是改签到最终目的地》
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
