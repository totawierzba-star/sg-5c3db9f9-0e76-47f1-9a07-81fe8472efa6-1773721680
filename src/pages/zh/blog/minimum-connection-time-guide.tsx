import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Route,
  ShieldAlert,
} from "lucide-react";

export default function MinimumConnectionTimeGuide() {
  return (
    <LayoutZh>
      <SEO
        title="最短转机时间是谁定的？MCT 与误机责任指南【2026】"
        description="联程票转机时间太短，误机后该怪谁？本文讲清 minimum connection time、官方最短转机时间、self-transfer 和 EU261 的关键边界。"
        url="https://problemlot.com/zh/blog/minimum-connection-time-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "最短转机时间是谁定的？MCT 与误机责任指南【2026】",
            description:
              "解释 minimum connection time、联程票误机与 EU261 边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/minimum-connection-time-guide",
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
                name: "联程票转机时间很短，误机后还能怪航空公司吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多情况下可以继续核查。若这张票本来就是航空公司或系统允许售出的联程结构，且中转时间符合机场或系统认可的 minimum connection time，乘客通常不应自动承担全部风险。",
                },
              },
              {
                "@type": "Question",
                name: "minimum connection time 是什么？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MCT 通常指机场、航司系统或行业规则认可的一种最短转机时间，用来判断某个连接是否在理论上可售、可行。",
                },
              },
              {
                "@type": "Question",
                name: "如果我是自己分开买票，还能用 MCT 保护自己吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常更难。self-transfer 结构下，即便您自己留的时间比官方 MCT 长，也不自动产生真正联程票那种保护。",
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
            <span className="text-slate-900 dark:text-white">最短转机时间 MCT</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Route className="h-4 w-4" />
              转机规则
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              最短转机时间是谁定的？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客看到一张联程票只留了 50 分钟、60 分钟甚至更短，就会问:
              “这本来就不现实，为什么还卖给我？” 这里真正关键的概念就是
              <strong> minimum connection time</strong>，
              也就是系统、机场或承运安排默认认可的最短转机时间。
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
                  真正联程票的常见逻辑
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>如果系统把它卖出来，通常说明连接被视为可售</li>
                  <li>误机后通常更应看最终目的地和后续重签</li>
                  <li>风险分配通常不应全部丢给乘客</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  self-transfer 的常见现实
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>您自己留的时间再长，也未必有联程保护</li>
                  <li>第二段风险很多时候由自己承担</li>
                  <li>MCT 不自动替代统一运输合同</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次转机时间到底算不算“卖得太紧”？</h2>
            <p className="mb-6 text-blue-100">
              如果您的联程票因为短转机而误机，现在就可以先做一次免费资格检查，判断这次风险应由谁承担。
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
              MCT 到底解决什么问题？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                它本质上是在回答一个很实际的问题: 这个连接在机场现实流程下，理论上来得及吗？
                若一张真正联程票本身就是按系统认可的最短转机时间卖出的，
                乘客通常有理由认为这段连接本来就是“可行产品”。
              </p>
              <p>
                也正因为如此，<strong>真正联程票里的短转机</strong> 和
                <strong> 自己拍脑袋留下的短自助转机</strong>，风险结构会非常不同。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              什么时候更可能受欧洲法规保护，什么时候不一定？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                <strong>更可能受 EU261 保护：</strong>
                如果这是一张真正联程票，且整段或相关航段满足 EU261 适用条件，那么即使第一段只小晚点，
                只要最终导致您错过转机并晚到最终目的地，仍可能继续进入赔偿分析。
              </p>
              <p>
                <strong>不一定受完整保护：</strong>
                如果您是自己分开买票、不同终端甚至不同机场转机，
                那么即便您留的时间看起来比官方 MCT 更长，也不自动获得真正联程票那种责任保护。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的短转机场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 系统卖出的真正联程短转机
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最值得继续看的场景之一。若这张票本来就是官方认可可售结构，乘客通常不应自动承担全部误机风险。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 分开买票但时间留得很短
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这更像自担风险结构。即便外观看起来像一趟行程，也不等于获得联程保护。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 同机场可行，但跨终端/跨机场后变得很紧
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  一旦涉及重新安检、重新值机、换机场或重新托运，现实中的最短转机时间和责任结构都会变得更复杂。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">航司卖给您的转机时间本来就很极限？</h2>
            <p className="mb-6 text-slate-300">
              这种情况下最重要的是先分清这是不是一张真正联程票，以及系统是否本来把它当成可售结构。
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
                第一，确认这是不是统一出票、统一 PNR 的真正联程票。第二，保留原始行程单、误机时间线、重签记录和最终到达时间。第三，如果这是 self-transfer，不要误以为官方最短转机时间本身就能替代联程保护。
              </p>
              <p>
                如果您还没搞清楚为什么真正联程更看最终目的地，可以继续看
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《最终目的地规则》
                </Link>
                。如果是分开买票，也建议继续看
                <Link
                  href="/zh/blog/self-transfer-separate-tickets-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Self-Transfer 指南》
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
                  只要联程票卖出来了，就一定意味着转机时间足够吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不代表您一定毫无风险，但通常说明这段连接在系统层面被视作可售、可行，因此不应轻易把全部后果都丢给乘客。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  自己分开买票，也能用 MCT 证明航司该负责吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  通常更难。MCT 本身并不自动创造联程票的法律保护。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  不同终端和不同机场，会明显改变责任吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  会。因为它往往说明现实转机难度更高，也更可能暴露出这不是统一运输合同下的简单联程。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果案件更偏向错过转机本身，继续看
                <Link
                  href="/zh/blog/missed-connection-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《错过转机赔偿指南》
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
              <p>
                如果您想先快速确认相关航段是否落在 EU261 范围内，再看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
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
