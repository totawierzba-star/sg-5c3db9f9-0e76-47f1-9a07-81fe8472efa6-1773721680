import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  DoorClosed,
  ShieldAlert,
} from "lucide-react";

export default function MissedCheckInGateClosureGuide() {
  return (
    <LayoutZh>
      <SEO
        title="错过值机或登机口关闭怎么办？Missed Check-in 指南【2026】"
        description="因为 missed check-in、gate closed、late to boarding 或 airport queue 错过航班，就一定是乘客自己的责任吗？本文讲清错过值机、登机口关闭和 EU261 的边界。"
        url="https://problemlot.com/zh/blog/missed-check-in-gate-closure-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "错过值机或登机口关闭怎么办？Missed Check-in 指南【2026】",
            description:
              "解释 missed check-in、gate closed、late to boarding 与乘客权利边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/missed-check-in-gate-closure-guide",
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
                name: "错过值机或登机口关闭，就一定是乘客自己的责任吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。如果是您自己明显迟到，通常更难主张赔偿；但如果是机场排队失控、转机衔接混乱、航司误导或系统问题导致，也值得继续核查。",
                },
              },
              {
                "@type": "Question",
                name: "missed check-in 和 denied boarding 是一回事吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不是。missed check-in 更多围绕您是否按时完成值机和登机程序；denied boarding 通常是您已按时到达但被航司拒绝运输。两条法律路径不同。",
                },
              },
              {
                "@type": "Question",
                name: "如果是机场安检或排队太长导致错过，还值得保留证据吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "值得。排队照片、时间截图、航显、聊天记录和现场说明，都会影响后续对责任归属的判断。",
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
            <span className="text-slate-900 dark:text-white">错过值机与登机口关闭</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <DoorClosed className="h-4 w-4" />
              登机边界
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              错过值机或登机口关闭怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客在机场最崩溃的瞬间，并不是航班被取消，而是眼看着值机关闭、登机口关门，
              然后被告知 “too late”。但真正要分清的是：
              <strong> 这是您自己明显迟到，还是机场排队、系统问题、前序延误、转机混乱或航司沟通问题导致的结果</strong>。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-07</span>
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
                  更像乘客自己迟到的场景
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>明显晚于航司规定时间到柜台或登机口</li>
                  <li>没有前序外部干扰或航司误导</li>
                  <li>现场时间线很明确对自己不利</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  更值得继续核查的场景
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>机场排队失控或安检异常拥堵</li>
                  <li>联程转机太晚放人或指引混乱</li>
                  <li>系统、值机柜台或航司通知有问题</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">您是真迟到了，还是被机场/航司流程坑到了？</h2>
            <p className="mb-6 text-blue-100">
              如果您还有值机时间、安检排队照片、转机时间线或 gate 截图，
              现在就可以先做一次免费资格检查，判断这是不是值得继续追的案件。
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
              先分清：这是自己错过，还是流程把您卡住了？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                不是每一次 missed check-in 都能怪航空公司，但也不是每一次 gate closed 都一定是乘客自己的错。
                关键在于：您到达机场、值机柜台、安检、边检和登机口的实际时间线，到底发生了什么。
              </p>
              <p>
                也正因为如此，<strong>错过航班</strong> 和
                <strong> 标准可赔的 denied boarding</strong>，通常不是同一条法律路径。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              什么时候更可能和 EU261 有关，什么时候不一定？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                <strong>更可能值得继续看 EU261 或相关权利：</strong>
                当您本来已经按要求到场，但因为联程延误、系统故障、柜台错误、错误通知或航司自身流程问题错过后续航班时，
                这类案件就不应被简单归为“乘客迟到”。
              </p>
              <p>
                <strong>不一定能走标准赔偿路径：</strong>
                如果您确实明显晚于要求时间到达值机或登机口，而且没有其他外部或航司原因，
                那通常更难进入标准可赔场景。这里首先不是看“欧盟规则保不保护”，而是责任究竟落在谁身上。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的 missed check-in / gate closure 场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 自己明显迟到
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最难争的场景。如果时间线很明确，且没有外部因素，航司通常会坚持这是乘客自身责任。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 排队、边检、安检或机场流程失控
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类场景更复杂。责任未必一定在航司，但也不应自动视为“只能认倒霉”，特别是当您很早就到机场却仍被卡住时。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 联程转机或系统问题导致错过后续
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  如果前一段延误、系统改签错误、登机口通知混乱或航司放人太晚导致您错过下一段，
                  责任分析就完全不同，通常更值得继续核查。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">被告知 “too late”，但您觉得自己并没有真正迟到？</h2>
            <p className="mb-6 text-slate-300">
              这种情况下最重要的就是还原时间线：您几点到机场、几点过安检、几点到 gate、谁说了什么。
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
              乘客现在最该做什么？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                第一，立刻固定时间线，包括到机场时间、值机/安检/边检排队时间、gate 截图和现场广播。
                第二，要求书面说明到底是 missed check-in、gate closed 还是其他更具体原因。第三，如果您怀疑前一段航班、联程延误或系统错误是根本原因，就把这一点也留下证据。
              </p>
              <p>
                如果您怀疑这其实更像拒载而不是自己迟到，可以继续看
                <Link
                  href="/zh/blog/holiday-flight-overbooking-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Overbooking 赔偿指南》
                </Link>
                和
                <Link
                  href="/zh/blog/denied-boarding-document-visa-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《因证件或签证被拒载怎么办？》
                </Link>
                。
              </p>
            </div>
          </section>

          <section id="faq" className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">常见问题 FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  miss check-in 和 denied boarding 是一回事吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不是。一个更偏向是否按时完成程序，另一个更偏向您已合规到场却被拒绝运输。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果我是因为转机太晚放人，才没赶上下一段，还值得查吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  值得。这类案件通常不能简单归类为“乘客自己迟到”，尤其在联程或同一承运人转机时更需要细看。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  机场排队太长导致错过，还需要保留证据吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  需要，而且越早越好。照片、排队视频、聊天记录和时间截图，都会直接影响后续能否还原责任。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您怀疑真正问题是拒载而不是自己晚到，继续看
                <Link
                  href="/zh/blog/holiday-flight-overbooking-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Overbooking 赔偿指南》
                </Link>
                。
              </p>
              <p>
                如果案件还涉及联程和最终到达时间，也建议继续看
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《最终目的地规则》
                </Link>
                和
                <Link
                  href="/zh/blog/flight-delay-written-reason-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《为什么一定要拿书面原因》
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
