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

export default function DelayedBaggageAfterArrivalGuide() {
  return (
    <LayoutZh>
      <SEO
        title="飞机到了但行李没到，能索赔吗？延误行李指南【2026】"
        description="航班已到达，但托运行李很晚才到、没有上同一班飞机或完全丢失怎么办？本文讲清 delayed baggage、Montreal Convention、EU261 与费用追偿边界。"
        url="https://problemlot.com/zh/blog/delayed-baggage-after-arrival-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "飞机到了但行李没到，能索赔吗？延误行李指南【2026】",
            description:
              "解释 delayed baggage、行李晚到、Montreal Convention、EU261 与费用追偿边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/delayed-baggage-after-arrival-guide",
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
                name: "飞机已经到达，但托运行李没有出来，这一定能按 EU261 索赔吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。行李晚到通常不是典型的 EU261 延误赔偿路径，更多要看行李责任和相关国际公约下的费用追偿规则。",
                },
              },
              {
                "@type": "Question",
                name: "行李晚到期间买衣服、洗漱用品和交通工具，还能报销吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多情况下值得主张合理、必要的临时支出，但关键是尽快报备、保留票据并控制消费范围与必要性。",
                },
              },
              {
                "@type": "Question",
                name: "如果航班本身也晚点了，行李又没到，这两件事要分开看吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常要分开看。航班延误可能走一条规则路径，而行李晚到又是另一条责任路径，不能把它们简单混成同一类索赔。",
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
            <span className="text-slate-900 dark:text-white">延误行李与费用追偿</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Briefcase className="h-4 w-4" />
              行李争议
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              飞机到了但行李没到，能索赔吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客在漫长的旅行后终于抵达目的地，却又在行李转盘前等了很久，最后才被告知：
              <strong> 行李没有跟这班飞机一起到</strong>。有人遇到的是行李晚到几个小时，
              有人则要等到第二天甚至更久。问题是，这到底能不能索赔，又该走哪条规则？
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
                  <li>立刻在机场报备并拿到 PIR 或等效记录</li>
                  <li>保留行李牌、登机牌和转盘等待信息</li>
                  <li>购买必要物品时保留全部票据</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>行李晚到一定能按 EU261 赔偿</li>
                  <li>先买需要的东西，之后再说也没关系</li>
                  <li>没有完全丢失就不值得留证据</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">到了目的地却没有行李，不知道该怎么追？</h2>
            <p className="mb-6 text-blue-100">
              先免费检查这次问题更像纯粹的延误行李，还是已经叠加了航班晚点、改签到次日或更大的运营异常。
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
              为什么行李晚到和航班延误不能混为一谈？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为这两类争议的核心对象和法律路径不同。航班延误关注的是您何时到达目的地，以及航班本身是否落在欧洲乘客规则范围内；
                而行李晚到更多关注的是托运行李是否按承诺交付、您因此产生了哪些必要费用，以及行李责任本身如何认定。
              </p>
              <p>
                也正因为如此，很多乘客最容易犯的错误就是：
                把“人到了但箱子没到”当成普通 EU261 问题处理，结果忽略了
                <strong> 机场现场报备</strong>、<strong> PIR 记录</strong> 和
                <strong> 必要消费票据</strong> 这些真正关键的证据。
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
                <strong>更可能仍需要分析欧洲规则：</strong>
                如果您的航班本身也发生了延误、取消、改签到次日或明显晚到，而行李晚到只是叠加问题之一，
                那么航班部分仍然可能走欧洲规则路径。
              </p>
              <p>
                <strong>不一定受 EU261 保护：</strong>
                如果唯一问题是人已经按时到达，但托运行李没有一起到，
                这通常更接近行李责任和国际运输规则问题，而不是典型的 EU261 航班赔偿场景。
              </p>
              <p>
                也就是说，要把
                <strong> 航班本身的延误</strong> 和
                <strong> 行李晚到</strong> 分开看。它们可能同时存在，但通常不是同一条索赔逻辑。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的延误行李场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 行李没有跟上同一班飞机
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最常见的情况。人先到了，箱子晚一班甚至晚一天到，最需要做的就是立刻在机场报备，而不是先回酒店再说。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 行李很晚才出现在转盘上
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  即便最后拿到了行李，如果等待时间异常长，也应记录大致时间线，特别是它是否进一步影响了接驳、酒店或地面交通。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 航班晚点和行李晚到同时发生
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类案件最容易让乘客混淆。实际上常常需要把“人为什么晚到”和“箱子为什么没来”拆成两套证据链来处理。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">别只盯着箱子什么时候出现</h2>
            <p className="mb-6 text-slate-300">
              真正决定后面能不能追费用的，往往是您有没有在第一时间报备、留档，并把临时支出控制在合理范围内。
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
                请保留登机牌、行李牌、PIR 或机场行李异常报告、购买生活必需品的发票、酒店与交通额外费用，以及行李最终送达时间的记录。
                如果客服承诺报销或配送，也请保留聊天和邮件证据。
              </p>
              <p>
                如果您还没搞清楚这次问题是否还叠加了航班晚点、改签到次日或最终目的地延误，也建议继续看
                <Link
                  href="/zh/blog/how-to-document-delay-costs-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《怎么证明酒店、餐饮和出租车费用》
                </Link>
                、
                <Link
                  href="/zh/blog/landed-but-stuck-on-plane-arrival-time-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《飞机落地了却迟迟不能下机》
                </Link>
                和
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

          <section
            id="faq"
            className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">常见问题 FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  行李晚到几个小时，也值得报备吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  值得，尤其当您因此额外花了钱、错过接驳或需要证明后续损失时，早报备往往比事后解释更有力。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  航司说“先自己买需要的东西”，我该怎么买？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  应尽量控制在合理、必要的范围内，并完整保留票据。越接近基本生活需要，后续越容易说明必要性。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果我的行李最后找到了，前面的损失就不能追了吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不应简单这样理解。即使最终找回，只要在晚到期间产生了合理必要支出，仍然值得保留并继续核查。
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
                如果您的问题还叠加了 charter、sports equipment 或更大范围的行李损坏争议，也建议继续看
                <Link
                  href="/zh/blog/sports-equipment-damaged-charter-flight"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《运动器材在包机航班上损坏怎么办》
                </Link>
                和
                <Link
                  href="/zh/blog/through-checked-baggage-vs-through-ticket-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《行李直挂不等于完整联程保护》
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
