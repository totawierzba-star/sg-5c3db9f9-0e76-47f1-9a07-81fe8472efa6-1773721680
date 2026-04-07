import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BellRing,
  CheckCircle2,
  ShieldAlert,
  Ticket,
} from "lucide-react";

export default function FlightTimeChangeNotificationCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="航司改了起飞时间，算取消吗？时间变更与赔偿指南【2026】"
        description="航空公司提前或临时修改起飞时间，只是 schedule change 还是已经接近 cancellation？本文讲清 time change、notification、EU261 和赔偿边界。"
        url="https://problemlot.com/zh/blog/flight-time-change-notification-compensation-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "航司改了起飞时间，算取消吗？时间变更与赔偿指南【2026】",
            description:
              "解释 flight time change、schedule change、notification timing、EU261 与赔偿边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/flight-time-change-notification-compensation-guide",
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
                name: "航空公司只改了起飞时间，没有写“取消”，还能索赔吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "有可能。关键不在名称，而在变更幅度、通知时间、替代安排和您最终受到的影响。有些看似普通的 schedule change，法律上可能非常接近取消或重大改签。",
                },
              },
              {
                "@type": "Question",
                name: "如果改时间通知是 OTA 发的，不是航司直接发的，会影响 EU261 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "沟通路径会影响取证和责任识别，但是否受 EU261 保护仍主要取决于航班本身、通知时点和承运结构，而不是单纯看邮件是谁发来的。",
                },
              },
              {
                "@type": "Question",
                name: "时间改到前一天或后一天，是否更像取消？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "这类大幅调整通常更值得重点审查，因为它往往不只是微调时刻，而是会显著改变整段旅行安排和最终到达结果。",
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
            <span className="text-slate-900 dark:text-white">时间变更与赔偿边界</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <BellRing className="h-4 w-4" />
              改签边界
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              航司改了起飞时间，算取消吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客收到邮件时看到的不是 “cancelled”，而是
              <strong> schedule change</strong>、<strong>time change</strong> 或
              <strong> updated itinerary</strong>。但对乘客来说，真正重要的不是措辞，而是这次变更到底把您的旅程改成了什么样。
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
                  先判断这些点
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>改动幅度有多大</li>
                  <li>您是在何时收到通知</li>
                  <li>最终到达时间和替代航班变化有多大</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>只要没写 cancelled，就一定不能赔</li>
                  <li>收到通知就等于自动接受变更</li>
                  <li>OTA 转发通知会抹掉 EU261 路径</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">只收到“时间调整”通知，不确定还能不能追？</h2>
            <p className="mb-6 text-blue-100">
              先免费检查这次变更到底只是微调，还是已经接近取消、重大改签或最终目的地延误争议。
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
              为什么“只是改时间”经常被低估？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为从字面上看，航班号没变、订单没消失、系统里也可能仍然显示“confirmed”，乘客容易以为这只是小改动。
                但如果时间被改到前一天、后一天，或者让您错过了后续转机、酒店入住、邮轮登船甚至重要会议，
                这已经不再只是普通的“时刻微调”。
              </p>
              <p>
                很多案件真正的争点在于：<strong>通知得有多早</strong>、<strong>改得有多大</strong>、
                <strong> 最终替代安排让您晚到了多少</strong>。也正因此，schedule change 经常和取消、重大改签、rerouting 混在一起。
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
                <strong>更可能受 EU261 保护：</strong>
                如果相关航班本身满足 EU261 的适用条件，例如航段、出发地和承运结构落在欧洲法规范围内，
                那么即便航司对外说的是 “time change” 或 “schedule update”，仍然值得进一步分析。
              </p>
              <p>
                <strong>不一定受 EU261 保护：</strong>
                如果航班本身不在法规适用范围内，
                那么单纯因为改时间很麻烦，并不会自动触发欧洲赔偿规则。
                也就是说，名称叫不叫 “cancellation” 不是唯一关键，<strong>航班适用范围</strong> 仍是第一步。
              </p>
              <p>
                另外，通知是航司直接发出，还是由 OTA 转发，只会影响取证和沟通复杂度，不会自动改变该航班是否落在 EU261 的根本判断。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的“时间变更”争议
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 改到前一天或后一天
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这种情况对旅程影响通常已经非常大，往往不能简单理解成普通时刻微调，尤其当酒店、地面交通或后续航段都被打乱时。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 改动不大，但导致错过联程或自助转机
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  有些时间变化表面只改了一小时，但对后续衔接影响很大。此时要把第一段、后续航段和整段结构拆开看。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 通知很晚，乘客几乎没有选择空间
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类案件的关键往往在通知时点和替代安排是否合理，而不是航司邮件主题到底写的是 update 还是 cancellation。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">时间被改了，不等于只能被动接受</h2>
            <p className="mb-6 text-slate-300">
              越是这种“名字听起来没那么严重”的改动，越值得尽快确认它到底属于哪一类法律路径。
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
                请保留原始行程单、变更通知邮件、短信、App 推送截图，以及您接受或拒绝替代方案的记录。
                如果变更是 OTA 转发的，也要保留平台收到通知和转发给您的时间证据。
              </p>
              <p>
                如果您还没搞清楚这次变更更像取消还是重大改签，可以继续看
                <Link
                  href="/zh/blog/cancellation-vs-major-schedule-change-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《取消 vs 重大时间变更》
                </Link>
                、
                <Link
                  href="/zh/blog/refund-vs-rerouting-choice-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《退款还是改签到最终目的地》
                </Link>
                和
                <Link
                  href="/zh/blog/ota-travel-agent-airline-responsibility-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《OTA、平台、代理责任指南》
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
                  航司给了新时间，我没点确认，这算我同意了吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不应简单这样理解。很多系统会自动更新行程，但这不代表所有争议都因此结束，仍需看通知方式、您是否有真实选择以及最终安排的影响。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  改成更早起飞，也可能有问题吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  当然可能。更早起飞会直接影响您是否还能按原计划到机场、值机、衔接前序交通或前一晚住宿安排。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果最终到达时间变化不大，还值得保留全部通知证据吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  值得。通知时点和替代安排本身就是案件结构的一部分，即使最后赔偿路径不同，这些证据也很重要。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您想先快速判断这趟航班是否受欧洲法规保护，继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果您的问题已经涉及最终到达时间、误机或后续行程损失，也建议继续看
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《最终目的地规则》
                </Link>
                和
                <Link
                  href="/zh/blog/three-hour-arrival-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《为什么看 3 小时到达晚点》
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
