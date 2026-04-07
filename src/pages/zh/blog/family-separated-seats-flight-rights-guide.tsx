import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Ticket,
  Users,
} from "lucide-react";

export default function FamilySeparatedSeatsFlightRightsGuide() {
  return (
    <LayoutZh>
      <SEO
        title="一家人被分开坐怎么办？儿童与家人座位分离指南【2026】"
        description="值机后被分开座、儿童没和家长坐一起、预选座被改掉怎么办？本文讲清 family seating、seat reassignment、refund 与 EU261 边界。"
        url="https://problemlot.com/zh/blog/family-separated-seats-flight-rights-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "一家人被分开坐怎么办？儿童与家人座位分离指南【2026】",
            description:
              "解释 family seating、seat reassignment、儿童与家人分开座位、退款与 EU261 边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/family-separated-seats-flight-rights-guide",
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
                name: "儿童被安排和家长分开坐，这一定合法吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不应简单这样理解。尤其涉及年幼儿童时，航空公司通常至少应尽合理努力安排家长与孩子相邻或接近座位。",
                },
              },
              {
                "@type": "Question",
                name: "我付费选了座位，结果登机前被换掉，还能追回费用吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多情况下值得主张退还已支付的选座费用，关键是保留原始选座记录、付款凭证和最终登机牌。",
                },
              },
              {
                "@type": "Question",
                name: "一家人被拆开坐，能按 EU261 索赔吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不属于最典型的 EU261 延误或取消赔偿场景，但如果座位变化与超售、拒载、改签或更大范围运营问题叠加，仍值得继续分析。",
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
            <span className="text-slate-900 dark:text-white">家庭分座与选座争议</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Users className="h-4 w-4" />
              座位争议
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              一家人被分开坐怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客直到值机完成、登机口打印新登机牌，甚至走进机舱后才发现，
              自己和伴侣、父母或孩子被分到了不同区域。对成人来说这也许只是糟糕体验，
              但当涉及 <strong>儿童与家长被拆开</strong> 时，问题就不只是“不方便”。
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
                  <li>截图保留原始选座和付款记录</li>
                  <li>保留最终登机牌和实际座位信息</li>
                  <li>记录是否有儿童、特殊需求或家人同行</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>付费选了座位就绝不会被改</li>
                  <li>家人被拆开坐只能认倒霉</li>
                  <li>任何分座都能直接按 EU261 索赔</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">被改座位后，一家人被拆开了？</h2>
            <p className="mb-6 text-blue-100">
              先免费检查这次问题更像普通座位调整、付费选座退款争议，还是已经和超售、换机型或更大运营问题绑定在一起。
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
              为什么一家人会被分开坐？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                常见原因包括机型更换、座位图重排、航司超售、临时调配、值机顺序靠后，或者 OTA 与航司之间的选座信息没有正确同步。
                有时您虽然提前付费选了座位，但到了机场系统已经把原座位释放或重排。
              </p>
              <p>
                对没有儿童的同行旅客，这往往先表现为服务争议或付费选座退款问题。
                但如果涉及年幼儿童、陪护需求或特殊协助，问题就可能上升为更严肃的乘客权益与安全安排争议。
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
                <strong>更可能需要继续分析欧洲规则或更广泛乘客权利：</strong>
                如果座位变化背后其实是超售、强制调位、换机型、错误拒载、改签到其他航班，或由此进一步造成误机与晚到，
                那案件就不应只停留在“座位没坐一起”这一层。
              </p>
              <p>
                <strong>不一定直接进入 EU261 赔偿路径：</strong>
                如果问题只是普通座位调整、同行人被拆开但航班本身没有延误、取消、拒载或重大运营问题，
                那通常更接近选座退款、服务履行和家人相邻安排义务问题，而不是典型的 EU261 金额赔偿案。
              </p>
              <p>
                所以关键要先分清：
                <strong> 这是单纯的座位问题</strong>，还是
                <strong> 更大运营异常的一个表面现象</strong>。
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
                  1. 付费选座后被改位
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最常见的争议之一。即使航司可以基于运营原因改位，也不代表付费选座费用就自动作废。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 儿童和家长被拆开
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这种情况最需要当场争取并留证，因为它已经不只是舒适度问题，还涉及合理照护和基本同行安排。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 换机型后整排座位失效
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  一旦机型或座位图变化，原本的付费选座、同行安排和特殊需求备注都可能受到影响，需要尽快重建证据链。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">分座不总是“小问题”</h2>
            <p className="mb-6 text-slate-300">
              尤其当儿童、特殊协助或付费选座被同时影响时，座位变化往往比乘客当场感受到的更严重。
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
                请保留原始选座确认、付款记录、座位图截图、登机牌、换位通知、机型变更信息，以及柜台或登机口关于无法安排同坐的书面或聊天记录。
                如果被迫临时改签到其他航班，也要同步保留完整时间线。
              </p>
              <p>
                如果您还没搞清楚这更接近 overbooking、换机型还是 OTA 选座同步错误，也建议继续看
                <Link
                  href="/zh/blog/holiday-flight-overbooking-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Overbooking 被拒载指南》
                </Link>
                、
                <Link
                  href="/zh/blog/wet-lease-subcontracted-flight-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Wet Lease 外包执飞指南》
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
                  如果航司最后帮我们调回一起坐，还值得保留证据吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  值得。尤其当您付费选座、经历长时间争执，或途中已经受到明显影响时，保留记录仍然很重要。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  家人被拆开，但飞机最终准点起飞，这还算权利问题吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  仍然可能是。虽然它不一定自动变成 EU261 金额赔偿案，但付费选座、儿童照护和服务履行问题并不会因航班准点而消失。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  航司说“座位不保证”，这就什么都追不回吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不应简单接受这种说法。是否能调整座位是一回事，您是否为特定座位或同行安排支付了费用又是另一回事。
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
                如果您的问题还叠加了改签到次日、最终目的地晚点或现场重买机票，也建议继续看
                <Link
                  href="/zh/blog/refund-vs-rerouting-choice-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《退款还是改签到最终目的地》
                </Link>
                和
                <Link
                  href="/zh/blog/how-to-document-delay-costs-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《怎么证明酒店、餐饮和出租车费用》
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
