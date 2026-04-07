import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bird,
  CheckCircle2,
  ShieldAlert,
  TimerReset,
} from "lucide-react";

export default function BirdStrikeCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="鸟击就一定免赔吗？Bird Strike 延误和取消赔偿指南【2026】"
        description="航空公司说因为 bird strike 所以不能赔？本文讲清鸟击本身、后续维修、替代航班和连锁延误之间的区别，以及什么时候 EU261 仍值得继续核查。"
        url="https://problemlot.com/zh/blog/bird-strike-compensation-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "鸟击就一定免赔吗？Bird Strike 延误和取消赔偿指南【2026】",
            description:
              "解释 bird strike、后续延误和 EU261 赔偿边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/bird-strike-compensation-guide",
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
                name: "航空公司说鸟击，所以我一定拿不到 EU261 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。鸟击本身通常更接近外部性事件，但这并不代表所有后续延误、调机失败和改签到次日的影响都自动免赔，仍需看具体时间线和航空公司的应对措施。",
                },
              },
              {
                "@type": "Question",
                name: "如果是前序航班发生鸟击，导致我这班晚点呢？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "这类连锁影响更需要具体核查。关键不只是前序飞机发生了什么，还包括航空公司是否有合理替代安排，以及延误扩大到什么程度。",
                },
              },
              {
                "@type": "Question",
                name: "即使现金赔偿有争议，航空公司还要提供酒店和餐饮吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常仍然要。照护义务与现金赔偿并不是同一件事，乘客仍应要求餐饮、改签、过夜酒店和必要交通。",
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
            <span className="text-slate-900 dark:text-white">鸟击与赔偿</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ShieldAlert className="h-4 w-4" />
              特殊情况
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              鸟击就一定免赔吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客听到航空公司说 <strong>bird strike</strong>，就以为案件已经结束。
              但真正需要分清的是：
              <strong> 鸟击本身、后续检查维修、替代飞机安排失败，以及次日重飞造成的额外延误，并不一定是同一回事</strong>。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-07</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Bird className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  更接近真实例外的部分
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>真实发生的鸟击事件</li>
                  <li>必要安全检查和损伤评估</li>
                  <li>基于飞行安全的即时停飞决定</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  仍值得继续核查的部分
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>后续替代飞机安排是否合理</li>
                  <li>前序鸟击造成的长链条运营混乱</li>
                  <li>被改到次日后的额外等待是否可避免</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">航空公司用“bird strike”拒绝您了吗？</h2>
            <p className="mb-6 text-blue-100">
              鸟击是典型会让乘客马上放弃的一类理由，但很多案件真正的争议点在于
              后续运营处置，而不只是最初那一下撞击。现在就可以先免费检查资格。
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
              为什么鸟击案件不能只看“有没有鸟击”？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为在很多真实案件里，最初的外部事件和之后扩大的延误并不是完全重合的。
                航空公司可能先因为安全原因停飞一架飞机，这本身比较容易被理解；
                但之后它有没有合理地寻找替代飞机、重新组织机组、改签乘客、减少次生损失，
                仍然会影响整起案件的判断。
              </p>
              <p>
                换句话说，<strong>真实鸟击</strong>和<strong>后续所有运营混乱都自动免赔</strong>之间，
                中间常常还有很大的分析空间。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              什么时候明确更可能受欧洲法规保护，什么时候不一定？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                <strong>更可能受 EU261 保护：</strong>
                航班从欧盟机场出发，不论航空公司国籍；或者由欧盟承运人执飞并飞往欧盟。
                只要基础适用范围成立，鸟击并不意味着乘客就必须立刻放弃，而是需要继续看事件链条和最终到达延误。
              </p>
              <p>
                <strong>不一定受欧洲法规保护：</strong>
                例如第三国承运人从土耳其飞回欧盟、或整趟行程本就不落在 EU261 范围内。
                这时就算原因不是普通技术故障，也不能自动套用欧洲赔偿规则，而可能要改看
                <Link
                  href="/zh/blog/turkey-shy-pass-passenger-rights"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  SHY-PASS
                </Link>
                等其他制度。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种常见 bird strike 场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 本航班起飞前或起降时真实发生鸟击
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最典型的外部性事件。安全检查、损伤确认和必要维修往往是合理步骤，
                  但乘客仍然应保留正式说明和完整时间线。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 前序航班鸟击，拖累到您这班
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类案件最容易被一句 previous aircraft bird strike 带过去。
                  但对于乘客来说，关键还包括航司是否本可通过调机、重签或其他措施减少后续延误。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 被改到次日或长时间等待替代飞机
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这时除了现金赔偿争议，通常还会牵涉酒店、餐饮、交通和改签义务。
                  即使现金赔偿最终存在争议，航司也不能因此忽视照护责任。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">遇到 bird strike，被改到次日还没人解释？</h2>
            <p className="mb-6 text-slate-300">
              这种情况下最怕的是乘客只记住了“有鸟击”，却忽略了后续额外等待是否本来可以减少。
              先核查资格，再决定是否继续追偿。
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
                第一，要求书面说明明确写出是否真的发生鸟击、发生在本航班还是前序航班、以及为什么最终延误扩大到现在这个程度。
                第二，保留改签通知、酒店安排、餐饮票据和最终到达时间。第三，不要把所有后续损失都简单归为“反正是鸟击就没办法”。
              </p>
              <p>
                如果您还没有书面原因，可以先读
                <Link
                  href="/zh/blog/flight-delay-written-reason-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《为什么一定要拿书面原因》
                </Link>
                。如果航司同时还提到 technical issue，也建议继续看
                <Link
                  href="/zh/blog/technical-problem-extraordinary-circumstances-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《技术故障借口解析》
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
                  鸟击一定会让航空公司赢吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。真实鸟击本身通常是强理由，但案件是否完全结束，还要看后续延误是怎样形成的。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果是前一程飞机鸟击，和我这班有关系吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  有关系，但不能只停在一句“前序鸟击”。乘客仍应继续核查航司是否有合理替代安排、是否放大了连锁影响。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  没有 EU261 现金赔偿时，我还能报酒店和吃饭的钱吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  很多情况下仍然可以追照护费用，所以票据和书面记录仍然非常重要。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果这次争议还涉及次日改签或过夜安置，可以继续看
                <Link
                  href="/zh/blog/refund-vs-rerouting-choice-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《退款还是改签到最终目的地》
                </Link>
                和
                <Link
                  href="/zh/blog/airport-taxi-hotel-reimbursement-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《出租车和酒店报销指南》
                </Link>
                。
              </p>
              <p>
                如果您想先快速判断这趟航班本身是否属于 EU261，可看
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
