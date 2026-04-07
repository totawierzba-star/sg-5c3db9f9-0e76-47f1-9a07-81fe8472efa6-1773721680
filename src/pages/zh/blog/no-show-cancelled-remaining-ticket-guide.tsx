import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Ticket,
  XCircle,
} from "lucide-react";

export default function NoShowCancelledRemainingTicketGuide() {
  return (
    <LayoutZh>
      <SEO
        title="没坐第一段，后面机票全被取消了？No-show 规则指南【2026】"
        description="错过第一段、主动放弃一段，结果后续航班全被取消怎么办？本文讲清 no-show、remaining ticket cancellation、联程结构与 EU261 的边界。"
        url="https://problemlot.com/zh/blog/no-show-cancelled-remaining-ticket-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "没坐第一段，后面机票全被取消了？No-show 规则指南【2026】",
            description:
              "解释 no-show、后续航段被取消、联程票结构与 EU261 边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/no-show-cancelled-remaining-ticket-guide",
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
                name: "错过第一段后，航空公司把后面全部航班取消，这正常吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "在很多票规里，no-show 可能触发后续航段失效，但是否合理、是否应提前通知、以及是否仍有争议空间，要看整张票的结构和具体原因。",
                },
              },
              {
                "@type": "Question",
                name: "如果第一段是因为延误或改时间才没赶上，后续被取消还能分析 EU261 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "有可能。关键在于第一段未乘坐到底是乘客主动放弃，还是航空公司先前的延误、改签、通知问题导致整个行程链条断裂。",
                },
              },
              {
                "@type": "Question",
                name: "我想故意不用去程，只坐回程，可以吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "风险很高。很多航空公司会把未使用的前序航段视为 no-show，从而自动取消后续航班，尤其在统一票号和联程结构里更常见。",
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
            <span className="text-slate-900 dark:text-white">No-show 与后续航班取消</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <XCircle className="h-4 w-4" />
              票规边界
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              没坐第一段，后面机票全被取消了？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客以为某一段不用坐也没关系，结果到了机场才发现，
              <strong> 后续航班已经被系统全部取消</strong>。这种情况常见于
              <strong> no-show</strong>、跳段使用、错过第一段或联程票中途断开。
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
                  先分清两种情况
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>乘客主动放弃一段</li>
                  <li>航司先前变更或延误导致无法乘坐</li>
                  <li>统一票号和联程结构通常风险更大</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>不坐一段不影响后面行程</li>
                  <li>只要我买了票，回程一定保留</li>
                  <li>No-show 和 EU261 完全无关</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">后续航班突然失效，不确定还能不能追回？</h2>
            <p className="mb-6 text-blue-100">
              先免费检查这次 no-show 是您主动放弃，还是前序延误、改时间或通知问题把整段行程打断了。
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
              为什么没坐第一段，会连后面的票一起失效？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为在很多统一票号和联程结构里，系统默认您会按既定顺序使用每一个航段。
                一旦前一段没有被正常使用，后面的行程就可能被判定为失效，特别是在往返票、联程票和特价票规则里更常见。
              </p>
              <p>
                但这里最重要的分界线在于：<strong>您是主动放弃</strong>，还是
                <strong> 因为航司先前的问题根本没法正常使用</strong>。
                如果是后者，案件就可能不只是单纯的 no-show，而是会回到延误、改签、取消或通知不足的分析路径。
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
                如果第一段或前序变更本身满足 EU261 的适用条件，而且正是航司的延误、取消、重大改时间或错误替代安排，
                导致您无法正常使用后续航段，那么整个争议仍值得继续做欧洲法规分析。
              </p>
              <p>
                <strong>不一定受 EU261 保护：</strong>
                如果您只是单纯决定不坐第一段、故意跳段，或未按票规使用统一机票，
                那么这更可能是票规和合同使用问题，而不是自动进入 EU261 赔偿路径。
              </p>
              <p>
                换句话说，关键不只是“后面被取消了”，而是
                <strong> 为什么前面那一段没被正常使用</strong>。这是判断欧洲法规是否仍 relevant 的核心。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的 no-show 场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 主动放弃去程，只想坐回程
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最典型的高风险做法。很多航司会把未使用的前序航段视为 no-show，从而取消后面全部航班。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 第一段因延误或改时间没赶上
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类情况最值得仔细审查，因为问题可能已经不再是您“主动没坐”，而是前序航班或通知机制先出了问题。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 平台或代理改签失误，导致一段没被正常使用
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这时争议通常会同时牵涉票务服务链和航班本身，不能只简单理解成乘客 no-show。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">先判断是“主动弃乘”还是“被迫断链”</h2>
            <p className="mb-6 text-slate-300">
              只要这个分界线判断错了，后面不管是找航司、OTA 还是主张 EU261，方向都很容易跑偏。
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
                请保留原始行程、所有航段的票号和 PNR、前序延误或改时间通知、平台聊天记录，以及后续航班被系统取消的截图。
                如果您是因为前一段问题没赶上后一段，这些时间线证据尤其关键。
              </p>
              <p>
                如果您还没搞清楚航班结构和责任顺序，建议继续看
                <Link
                  href="/zh/blog/flight-time-change-notification-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《航司改了起飞时间，算取消吗》
                </Link>
                、
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《最终目的地规则》
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
                  如果我提前告诉航空公司“不坐第一段”，后面还会被取消吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  仍有可能，因为是否保留后续航班通常取决于票规和航司处理方式，而不是单纯看您是否提前说过。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  回程被系统取消后，我只能重买全价票吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  很多乘客最后确实被迫重买，但是否真的没有其他路径，要看前因是主动 no-show，还是航司前序问题导致整段断链。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  这种事和 EU261 有关系吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  如果核心原因是您主动不用某一段，通常关系较弱；但如果是航司自己的延误、取消或重大改时间先打断了行程，就值得继续分析。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您想先判断一趟航班本身是否落在欧洲法规范围内，继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果您的问题更接近联程断裂、分票转机或不同 PNR，也建议继续看
                <Link
                  href="/zh/blog/self-transfer-separate-tickets-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Self-transfer 指南》
                </Link>
                和
                <Link
                  href="/zh/blog/open-jaw-mixed-carriers-pnr-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Open-jaw、不同航司、不同 PNR 指南》
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
