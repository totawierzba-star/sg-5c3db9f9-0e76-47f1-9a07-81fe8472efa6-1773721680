import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  SearchX,
  ShieldAlert,
  Ticket,
} from "lucide-react";

export default function BookingDisappearedReservationNotFoundGuide() {
  return (
    <LayoutZh>
      <SEO
        title="机票订单突然消失了怎么办？Reservation Not Found 指南【2026】"
        description="App 里航班消失、PNR 查不到、订单显示 reservation not found 怎么办？本文讲清 booking disappeared、票务异常、拒载风险与 EU261 边界。"
        url="https://problemlot.com/zh/blog/booking-disappeared-reservation-not-found-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "机票订单突然消失了怎么办？Reservation Not Found 指南【2026】",
            description:
              "解释 booking disappeared、reservation not found、PNR 异常、拒载风险与 EU261 边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/booking-disappeared-reservation-not-found-guide",
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
                name: "App 里订单突然消失，是不是代表机票已经没了？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。有时只是系统同步、航班改动或渠道显示异常，但也可能意味着订单、票号、付款或出票状态真的出了问题。",
                },
              },
              {
                "@type": "Question",
                name: "Reservation not found 是平台问题，还是航空公司的问题？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "两种都有可能。它可能来自 OTA 出票链路、航司系统更新、PNR 更换、重发票号失败，或更严重的订单失效问题。",
                },
              },
              {
                "@type": "Question",
                name: "如果因为订单消失最后没能飞，能按 EU261 处理吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。关键要看根因是航司运营、票务链路、付款/出票问题，还是乘客资格本身。不能把所有 reservation not found 都视为典型 EU261 案。",
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
            <span className="text-slate-900 dark:text-white">订单消失与 Reservation Not Found</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <SearchX className="h-4 w-4" />
              票务边界
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              机票订单突然消失了怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客在出发前一天或出发当天打开 App，突然发现原本还在的航班不见了，或者系统直接显示
              <strong> reservation not found</strong>、<strong>booking unavailable</strong>、
              <strong> no trip found</strong>。这种情况最可怕的地方在于，您往往不知道问题到底出在
              <strong> 航司</strong>、<strong> OTA</strong>，还是订单本身。
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
                  先做这三件事
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>立刻截图保存 App 和网站上的异常页面</li>
                  <li>同时核对 PNR、电子客票号和付款凭证</li>
                  <li>尽快联系出票方与航司双线确认状态</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>App 看不到就一定是我看错了</li>
                  <li>只要付款成功，票就肯定没问题</li>
                  <li>订单消失最后没飞，一定都能按 EU261 赔</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">出发前订单突然消失，不知道还能不能飞？</h2>
            <p className="mb-6 text-blue-100">
              先免费检查这次问题更像系统显示异常、OTA 出票链路故障，还是已经影响到您的真实乘机资格。
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
              为什么订单会突然“消失”？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                原因可能比乘客想的复杂得多。有时只是 App 同步失败、航班改时刻后生成了新 PNR，
                或者平台还没把最新状态回写到前端；但也可能是电子客票未真正出票、票号失效、改签失败、付款异常，
                甚至某一段已被系统取消。
              </p>
              <p>
                最麻烦的地方在于，您在表面上看到的是“查不到”，但查不到并不等于只有一种原因。
                也正因为如此，<strong>只联系一边</strong> 往往不够。航司、OTA、代理和实际承运人给出的说法，可能完全不同。
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
                <strong>更可能需要继续分析 EU261：</strong>
                如果订单消失的背后其实是航班取消、重大改签、错误替代安排、实际承运人变更后通知失败，
                或者您到机场后因航司系统和运营处理失当而无法成行，这类案件值得继续深挖。
              </p>
              <p>
                <strong>不一定受 EU261 保护：</strong>
                如果核心问题是 OTA 没有正确出票、支付未完成、姓名/证件信息错误，或纯粹是票务链路断裂，
                那就不一定是典型的欧洲航班赔偿案，而更像票务和合同服务争议。
              </p>
              <p>
                所以关键不是“订单看不到了”这一表象，而是
                <strong> 真实的底层原因</strong> 到底是什么。表面现象一样，法律路径可能完全不同。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的高风险场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. OTA 订单存在，但航司系统查不到
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这通常意味着出票、同步、重发票号或后端传输出了问题，不能只看一边系统就下结论。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 航班改时间或换承运人后，原 PNR 失效
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  有时旅客其实仍有票，只是订单结构变了。但如果通知链条断裂，乘客会在最糟糕的时刻才发现问题。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 到机场后才发现根本无法值机
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类案件最容易升级成重买机票、误机或次日改签，尤其当乘客此前一直以为“App 只是显示 bug”。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">别把“查不到订单”当成普通小故障</h2>
            <p className="mb-6 text-slate-300">
              越是这种模糊状态，越应该同时核对票号、PNR、承运人和付款，而不是只刷新 App 等它自己恢复。
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
                请保留 App 和网站的异常截图、电子客票号、支付凭证、订单确认邮件、客服聊天记录、航司和 OTA 双方的回复。
                如果到机场后仍被拒绝值机，也要保留柜台书面说明和现场时间线。
              </p>
              <p>
                如果您还没搞清楚这更接近 OTA 责任、值机失败还是改签通知问题，也建议继续看
                <Link
                  href="/zh/blog/ota-travel-agent-airline-responsibility-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《OTA、平台、代理责任指南》
                </Link>
                、
                <Link
                  href="/zh/blog/online-checkin-failed-airport-desk-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《网上值机失败怎么办》
                </Link>
                和
                <Link
                  href="/zh/blog/flight-time-change-notification-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《航司改了起飞时间，算取消吗》
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
                  付款成功就一定代表已经出票吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。支付成功和真正出票不是完全同一件事，尤其在 OTA、多承运人和复杂改签场景里更容易出现差异。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  PNR 查不到，但我还有电子客票号，这重要吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  很重要。票号、PNR 和承运人系统状态一起看，往往更能判断订单究竟是“显示消失”还是“真实失效”。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  客服让我等系统恢复，我该继续等吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不建议只被动等待。越接近起飞，越需要同步保留证据并同时找出票方和航司确认真实状态。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您想先快速判断一趟航班本身是否落在欧洲法规范围内，继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果您的问题已经延伸到实际承运人、代码共享或航班结构变化，也建议继续看
                <Link
                  href="/zh/blog/codeshare-operating-carrier-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《代码共享航班延误找谁赔》
                </Link>
                和
                <Link
                  href="/zh/blog/wet-lease-subcontracted-flight-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Wet Lease 外包执飞指南》
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
