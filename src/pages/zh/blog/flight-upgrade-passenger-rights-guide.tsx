import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Ticket,
  TrendingUp,
} from "lucide-react";

export default function FlightUpgradePassengerRightsGuide() {
  return (
    <LayoutZh>
      <SEO
        title="被免费升舱了，还会影响赔偿吗？航班 Upgrade 权利指南【2026】"
        description="被航空公司免费升舱到更高舱位，会影响退款、赔偿或其他旅客权利吗？本文讲清 flight upgrade、goodwill、EU261 与舱位权利边界。"
        url="https://problemlot.com/zh/blog/flight-upgrade-passenger-rights-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "被免费升舱了，还会影响赔偿吗？航班 Upgrade 权利指南【2026】",
            description:
              "解释 flight upgrade、免费升舱、goodwill、EU261 与乘客权利边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/flight-upgrade-passenger-rights-guide",
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
                name: "航空公司免费把我升舱了，我需要补差价吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不需要。被航司主动升舱一般不应要求您额外支付票价差额，重点是保留好原始票面和实际登机信息。",
                },
              },
              {
                "@type": "Question",
                name: "如果我原来的航班有延误或取消，被升舱后还能继续主张赔偿吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多情况下仍然可以。升舱不自动抹掉延误、取消或最终目的地晚点的分析，需要把舱位变化和原始航班问题分开看。",
                },
              },
              {
                "@type": "Question",
                name: "免费升舱和降舱是同一种权利逻辑吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不是。降舱更常涉及明确的退款或补偿权利，而免费升舱通常不会让您天然失去其他权利，但也不等于自动获得额外赔偿。",
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
            <span className="text-slate-900 dark:text-white">升舱与乘客权利</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <TrendingUp className="h-4 w-4" />
              舱位争议
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              被免费升舱了，还会影响赔偿吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客在值机柜台或登机口被通知“今天给您升舱”，第一反应当然是高兴。
              但如果同一趟行程里还叠加了
              <strong> 延误</strong>、<strong>取消</strong>、<strong>误机</strong> 或
              <strong> 改签</strong>，就会出现一个常见误区：
              乘客以为升舱之后，原本可能存在的其他权利就自动消失了。
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
                  一般先记住
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>航司主动升舱通常不应要求补差价</li>
                  <li>升舱不自动抹掉原本的延误或取消问题</li>
                  <li>要保留原始票面和实际登机舱位证据</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>免费升舱后就不能再追别的权利</li>
                  <li>升舱等于接受了所有变化</li>
                  <li>升舱和降舱是同一套赔偿逻辑</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">升舱看起来不错，但不确定自己还剩哪些权利？</h2>
            <p className="mb-6 text-blue-100">
              先免费检查这次升舱只是 goodwill，还是与延误、改签、取消或舱位争议叠加在一起。
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
              升舱为什么经常让乘客误判自己的权利？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为升舱在体验上是“向上”的变化，乘客很容易觉得自己已经从航司那里获得了足够补偿，
                或者不好意思再追其他问题。但从法律和票务逻辑看，舱位提升与航班本身是否延误、是否取消、是否造成最终目的地晚点，通常是不同层面的事情。
              </p>
              <p>
                也就是说，<strong>升舱不一定是完整和解</strong>。
                它可能只是航司给出的 goodwill，也可能只是运营调整下的结果，并不自动说明您原先的其他权利已被替代或放弃。
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
                如果同一趟航班本身满足欧洲乘客规则的适用范围，而且争议点是延误、取消、改签到次日、最终目的地晚点或其他典型旅客权利问题，
                那么即使您后来被免费升舱，这些问题也仍然可能继续按欧洲规则分析。
              </p>
              <p>
                <strong>不一定受欧洲法规保护：</strong>
                如果唯一变化只是您被免费安排到了更高舱位，而没有其他独立的航班问题，
                那通常不会自动触发额外的欧盟赔偿路径。换句话说，升舱本身一般不像降舱那样天然构成一条新的赔偿主张。
              </p>
              <p>
                所以关键是把问题拆开看：
                <strong> 升舱本身</strong> 是一件事，
                <strong> 原始航班争议</strong> 是另一件事，不能混成同一个结论。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的升舱场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 因经济舱超售被调到更高舱位
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这种情况对乘客体验通常更好，但并不意味着航司原本的运营问题就不存在，只是影响方式不同了。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 改签到其他航班后被安排更高舱位
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类情况最容易让乘客误以为“已经被补偿了”，但真正关键仍是最终目的地是否明显晚到、是否还有其他损失。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 航司口头说是升级，但没有书面记录
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类案件尤其需要保留登机牌和座位信息，否则之后很难重建当时到底发生了什么、是否与其他争议同时存在。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">升舱不是放弃其他权利的自动确认</h2>
            <p className="mb-6 text-slate-300">
              如果这趟行程里还发生了延误、取消或重大改签，舱位变高并不会自动把那些问题抹掉。
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
                请保留原始购票确认、原始舱位信息、实际登机牌、改签或升舱通知、座位截图，以及航司给出的代金券、里程或口头承诺对应的书面证明。
                如果同一趟行程还伴随延误或取消，也要保存完整时间线。
              </p>
              <p>
                如果您还没搞清楚这次变化更接近 goodwill、降舱争议还是延误后的替代安排，也建议继续看
                <Link
                  href="/zh/blog/flight-downgrade-business-to-economy-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《买了商务舱却被安排到经济舱》
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
                  免费升舱后，航司还能说这已经算补偿完了吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不能简单这样理解。是否足以覆盖其他争议，要看它是 goodwill 还是正式和解安排，以及原始航班问题本身有多大。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  升舱后如果我还是晚到终点很多小时，还能继续追吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这正是最值得继续分析的情况之一。舱位变化不能自动抹掉最终目的地延误本身的意义。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果只是系统里短暂显示我被升舱，最后又没有，这算什么？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  关键仍然是您最终实际获得的运输等级和原始购票权利，不能只看系统曾经闪过什么状态。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您想先快速判断航班本身是否落在欧洲规则范围内，继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果您的问题还叠加了改时间、取消或 OTA 沟通错误，也建议继续看
                <Link
                  href="/zh/blog/flight-time-change-notification-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《航司改了起飞时间，算取消吗》
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
        </div>
      </article>
    </LayoutZh>
  );
}
