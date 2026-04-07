import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ShieldAlert,
  Ticket,
} from "lucide-react";

export default function ThroughCheckedBaggageVsThroughTicketGuide() {
  return (
    <LayoutZh>
      <SEO
        title="行李直挂到终点，就一定算联程受保护吗？一文讲清关键区别【2026】"
        description="行李被直挂到最终目的地，就等于整段行程受 EU261 联程保护吗？本文讲清 through-checked baggage、through ticket、separate tickets 的核心区别。"
        url="https://problemlot.com/zh/blog/through-checked-baggage-vs-through-ticket-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "行李直挂到终点，就一定算联程受保护吗？一文讲清关键区别【2026】",
            description:
              "解释 through-checked baggage、through ticket、联程保护和 EU261 边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/through-checked-baggage-vs-through-ticket-guide",
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
                name: "行李直挂到终点，就一定说明整段是联程票吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。行李直挂只是行李处理安排，不能自动证明整段旅程在同一运输合同下受到完整联程保护。",
                },
              },
              {
                "@type": "Question",
                name: "如果第一段延误，第二段独立机票作废，还能按 EU261 追第二段损失吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不能直接这样理解。第一段是否适用 EU261 需要单独判断，但第二段若是独立机票，很多损失并不会自动纳入同一责任链。",
                },
              },
              {
                "@type": "Question",
                name: "同一家航空公司帮我把行李挂到终点，是否就必须免费保护后续航段？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "也不一定。关键仍然是出票结构、PNR、运输合同和承运安排，而不是单纯看行李标签打到了哪里。",
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
            <span className="text-slate-900 dark:text-white">行李直挂与联程保护</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Briefcase className="h-4 w-4" />
              转机规则
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              行李直挂到终点，就一定算联程受保护吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客看到柜台把行李直接挂到最终目的地，就以为整段旅程已经自动变成真正联程。
              但现实中，<strong>行李直挂</strong>、<strong>联程票</strong> 和
              <strong> 法律上的完整保护</strong>，并不是同一个概念。
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
                  更接近真正联程
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>统一出票结构或统一运输合同</li>
                  <li>更可能按最终目的地分析延误</li>
                  <li>错过转机后的保护通常更强</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  只有行李直挂
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>不自动等于整段是一个受保护行程</li>
                  <li>第二段独立机票风险仍可能自担</li>
                  <li>EU261 不能自动覆盖全部后果</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">行李挂到了终点，但还是误机或多花钱了？</h2>
            <p className="mb-6 text-blue-100">
              这类案子最容易误判。先免费检查您的航班结构、出票方式和是否仍有索赔空间。
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
              为什么“行李直挂”这么容易让人误会？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为从乘客视角看，柜台如果愿意把箱子直接贴到终点站，就像在告诉您“系统已经把这趟旅程认作一段”。
                但很多时候，这只是地面操作上的便利，不代表后续所有航段都处于同一责任链。
              </p>
              <p>
                换句话说，<strong>行李标签</strong> 不是
                <strong> 运输合同</strong>。柜台可以处理行李，但法律上谁对误机、改签、住宿和最终目的地延误负责，仍要回到出票和承运结构本身。
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
                如果您的航班本身满足 EU261 的适用条件，例如从欧盟机场出发，或由欧盟承运人执行符合条件的航段，那么
                <strong> 该航段</strong> 仍可能单独受保护。若这还是一张真正联程票，分析时往往更接近“最终目的地到达延误”逻辑。
              </p>
              <p>
                <strong>不一定受完整联程保护：</strong>
                如果只是把行李直挂到终点，但后段其实是独立机票、独立 PNR、独立值机或自助转机结构，
                那么 EU261 不会因为行李标签打到了终点，就自动把整趟路程都视为一个统一受保护行程。
              </p>
              <p>
                最重要的一点是：<strong>第一段可能可赔</strong>，并不等于
                <strong> 第二段作废、酒店、重买机票和转场费用</strong> 一定都能顺着同一条路径追回。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三个最常见的误区
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 行李直挂 = 一定是联程票
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。直挂只是行李处理方式，不自动证明机票是统一合同，也不自动证明后续航段必须免费保护。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 同一家航司操作，就一定算同一责任链
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  也不一定。关键仍然是 PNR、出票结构、是否统一承运安排，而不是单纯看 logo 或值机柜台是否愿意帮您把箱子挂到终点。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 第一段延误可赔，第二段损失就会自动一起赔
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这正是很多乘客损失扩大的原因。第一段和后段如果不是一条完整受保护的运输链，后果可能需要拆开分析。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定自己是“真正联程”还是只有“行李直挂”？</h2>
            <p className="mb-6 text-slate-300">
              这类案件的关键不是一句“柜台说可以”就能下结论，而是把航段、PNR、出票和最终延误拆开看。
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
              乘客现在最该保留哪些信息？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                第一，保留两段机票、PNR、值机记录和行李牌照片。第二，保留第一段延误的书面原因、最终到达时间和第二段作废或重买记录。
                第三，若产生酒店、餐饮、出租车或重新托运费用，也请完整保存票据和付款截图。
              </p>
              <p>
                如果您还没搞清楚“分开买票”和“真正联程”差在哪里，可以继续看
                <Link
                  href="/zh/blog/self-transfer-separate-tickets-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Self-transfer 与分开买票指南》
                </Link>
                、
                <Link
                  href="/zh/blog/minimum-connection-time-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《MCT 最短转机时间指南》
                </Link>
                和
                <Link
                  href="/zh/blog/open-jaw-mixed-carriers-pnr-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《不同 PNR 与 mixed carriers 指南》
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
                  行李直挂到终点，还需要自己重新值机吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  有时仍然需要。行李被直挂，并不必然意味着后段值机、登机牌、误机保护和责任归属都自动一并解决。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  同一家航空公司帮我处理了两段，为什么还可能不算真正联程？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  因为真正关键的是运输合同和出票结构，而不是柜台操作本身。有些便利安排不会自动改变法律上的责任边界。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果第一段受 EU261 保护，我下一步最该做什么？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  先把第一段是否可赔和第二段损失是否能并入同一责任链分开判断，不要仅凭“行李直挂”就默认整段都能一起索赔。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您想先快速判断这段航班本身是否落在 EU261 里，继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果您已经出现误机或最终目的地晚点，也建议继续看
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《最终目的地规则》
                </Link>
                和
                <Link
                  href="/zh/blog/actual-carrier-charter-flight-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《谁才是真正负责的承运人》
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
