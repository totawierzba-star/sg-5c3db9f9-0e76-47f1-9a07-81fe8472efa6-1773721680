import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Route,
  ShieldAlert,
  Ticket,
} from "lucide-react";

export default function SelfTransferSeparateTicketsGuide() {
  return (
    <LayoutZh>
      <SEO
        title="自己分开买票转机，错过下一段怎么办？Self-Transfer 指南【2026】"
        description="自己分开买票、不同终端或不同机场转机时，错过下一段还能索赔吗？本文讲清 self-transfer、separate tickets 和 EU261 的关键边界。"
        url="https://problemlot.com/zh/blog/self-transfer-separate-tickets-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "自己分开买票转机，错过下一段怎么办？Self-Transfer 指南【2026】",
            description:
              "解释 self-transfer、separate tickets、不同终端转机与 EU261 边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/self-transfer-separate-tickets-guide",
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
                name: "自己分开买票转机，错过第二段还能要求航司免费改签吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常更难。如果是独立机票，第二段风险很多时候不再由第一家航司承担，第二家航司也未必会把您视作受保护的联程旅客。",
                },
              },
              {
                "@type": "Question",
                name: "self-transfer 还能拿 EU261 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "第一段是否能走 EU261，要单独看这一段本身是否满足条件；但第二段机票和整段联程保护，通常会比真正联程票弱得多。",
                },
              },
              {
                "@type": "Question",
                name: "不同机场或不同终端转机，会让责任更难追吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "会。因为这通常进一步说明这是 self-transfer 结构，而不是单一运输合同下的真正联程行程。",
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
            <span className="text-slate-900 dark:text-white">Self-transfer 与分开买票</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Route className="h-4 w-4" />
              转机风险
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              自己分开买票转机，错过下一段怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客最晚才意识到的问题就是：两张票看起来像一整段行程，但法律上可能根本不是一回事。
              尤其当您需要换终端、换机场，甚至重新值机和取行李时，
              <strong> 风险分配会和真正联程票完全不同</strong>。
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
                  真正联程票
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>通常更看最终目的地到达时间</li>
                  <li>航司通常仍需把您送到最终目的地</li>
                  <li>错过转机后的保护更强</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  自己分开买票
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>第二段风险很多时候由乘客自己承担</li>
                  <li>第一家航司未必负责后续误机</li>
                  <li>酒店、重买机票和转场成本更难处理</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次 self-transfer 还有没有可追空间？</h2>
            <p className="mb-6 text-blue-100">
              如果您是分开买票、不同终端或不同机场转机失败，现在就可以先做一次免费资格检查。
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
              为什么 self-transfer 风险会突然变大？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为表面上看，您只是同一天从 A 飞到 B 再飞 C，但法律上第二段机票并不一定“认识”第一段的问题。
                这意味着第一家航司未必负责您的后续误机，第二家航司也未必免费改签。
              </p>
              <p>
                也正因为如此，<strong>只差 40 分钟</strong> 在 self-transfer 里可能代价很高，
                尤其当您还需要重新值机、重新托运行李、重新过安检或从一个机场跑到另一个机场时。
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
                第一段航班本身若满足 EU261 条件，您仍可能就这一段单独主张权利。
                例如从欧盟机场出发的第一段发生长延误，它是否可赔，要单独按那一段来判断。
              </p>
              <p>
                <strong>不一定受完整联程保护：</strong>
                如果第二段是独立机票、不同承运人、不同机场或不同终端的自助转机，
                那么整段行程通常不会像真正联程票那样被当作一个统一合同来处理。
                也就是说，<strong>第一段可赔</strong> 不等于 <strong>第二段损失一定有人负责</strong>。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的 self-transfer 场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 同一机场但分开买票
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  看起来最像联程，但法律上未必是。尤其当您需要重新值机或重新托运行李时，风险仍多半由自己承担。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 不同终端转机
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  如果还要出境、入境、重新安检或跨 terminal 移动，误机风险会显著增加，而责任路径通常更弱。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 不同机场转机
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最典型的 self-transfer 高风险结构。机场转场、交通延误和第二段独立机票叠加在一起，通常最难获得完整联程保护。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">分开买票后错过下一段，不知道还能追哪一部分？</h2>
            <p className="mb-6 text-slate-300">
              这种情况下最重要的就是把两段机票拆开看，再判断第一段是否可赔、第二段损失是否还有别的路径。
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
                第一，确认两段机票是否真的是独立出票、独立 PNR、独立值机。
                第二，保留第一段延误证据、第二段作废或重买记录、转场交通和时间线。第三，不要把整段行程默认当成一个受保护联程。
              </p>
              <p>
                如果您想看 geo 场景，也可以继续看
                <Link
                  href="/zh/blog/self-transfer-risk-istanbul"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《在伊斯坦布尔自己分开买票转机怎么办》
                </Link>
                和
                <Link
                  href="/zh/blog/pegasus-saw-self-transfer-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Pegasus 在 SAW 分票转机指南》
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
                  第一段能拿 EU261，第二段机票的钱也一定能追回来吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。这正是 self-transfer 最容易被误解的地方，第一段和第二段往往不是同一条责任链。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  同一个航空联盟，但分开买票，也算联程吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。关键不是品牌看起来像不像一趟，而是合同和出票结构到底是不是统一运输安排。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  不同机场转机的 taxi、酒店和重买机票，还值得保留票据吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  值得。即便最后不能完全追回，票据和时间线仍决定后续有没有其他争议空间。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您还没搞清楚为什么真正联程更看最终目的地，继续看
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《最终目的地规则》
                </Link>
                。
              </p>
              <p>
                如果您想先看单独一段航班是否可能落在 EU261 里，再看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
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
