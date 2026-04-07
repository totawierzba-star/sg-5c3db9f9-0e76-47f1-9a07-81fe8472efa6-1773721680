import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Ticket,
  WalletCards,
} from "lucide-react";

export default function OtaTravelAgentAirlineResponsibilityGuide() {
  return (
    <LayoutZh>
      <SEO
        title="机票在 OTA 买的，延误后该找谁？航司、平台、代理责任指南【2026】"
        description="通过 OTA、旅行社或代理买的机票，发生延误、取消、误机后到底该找谁？本文讲清 airline、OTA、travel agent 与 EU261 的责任边界。"
        url="https://problemlot.com/zh/blog/ota-travel-agent-airline-responsibility-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "机票在 OTA 买的，延误后该找谁？航司、平台、代理责任指南【2026】",
            description:
              "解释 OTA、travel agent、airline、actual carrier 与 EU261 索赔边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/ota-travel-agent-airline-responsibility-guide",
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
                name: "通过 OTA 买的机票延误后，我应该先找平台还是航空公司？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "要分开看。涉及赔偿和航班运营原因时，重点往往仍在航空公司；但涉及退款流程、出票修改或沟通障碍时，OTA 也可能成为关键环节。",
                },
              },
              {
                "@type": "Question",
                name: "OTA 说要找航空公司，航空公司又让我找平台，这种情况正常吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "非常常见，但不代表双方都没有责任。关键是先区分您追的是 EU261 赔偿、航班改签、退款，还是出票服务本身的问题。",
                },
              },
              {
                "@type": "Question",
                name: "机票是代理买的，就一定不能按 EU261 索赔吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不是。机票由谁卖出，不会自动消灭 EU261 适用性。是否受保护，仍要看航班本身、出发地、承运人和延误原因。",
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
            <span className="text-slate-900 dark:text-white">OTA、代理与航司责任</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <WalletCards className="h-4 w-4" />
              责任判断
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              机票在 OTA 买的，延误后该找谁？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客不是在航空公司官网买票，而是在 OTA、旅行社、代理网站或比价平台下单。
              一旦发生延误、取消、误机或退款争议，最让人崩溃的就是：
              <strong> 平台说去找航司，航司说去找平台</strong>。
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
                  通常要拆开看
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>运营延误和取消，重点多半在航司</li>
                  <li>出票错误或改签链路，平台可能有关键责任</li>
                  <li>EU261 适用仍看航班本身，不看谁卖票</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>谁收了钱，谁就一定赔延误</li>
                  <li>平台出票就意味着航司没责任</li>
                  <li>OTA 购买会自动失去 EU261 权利</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">平台和航司互相踢皮球？</h2>
            <p className="mb-6 text-blue-100">
              先免费检查这起争议究竟属于运营赔偿、退款路径，还是出票链路问题，避免继续找错对象。
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
              OTA、旅行社、代理和航空公司，角色到底有什么不同？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                OTA 或旅行代理常常扮演的是销售和出票中介的角色，帮助您完成搜索、比价、支付和票务服务。
                但飞机延误、取消、机组问题、技术故障或运营调度，通常并不是平台亲自造成的。
              </p>
              <p>
                这就是为什么在很多 EU261 场景里，
                <strong>真正关键的仍然是承运航司</strong>，尤其是实际执行航班的一方。
                但如果争议点变成“平台迟迟不退款”“平台错误改签”“出票信息有误”，那问题又可能回到 OTA 自身。
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
                如果航班本身满足 EU261 的适用条件，例如从欧盟机场出发，或航段结构和承运安排符合欧洲法规要求，
                那么即便机票是通过 OTA 或代理购买，乘客仍然可能主张相应权利。
              </p>
              <p>
                <strong>不一定受 EU261 保护：</strong>
                如果航班本身并不落在法规适用范围内，
                那么“我是从大平台买的”或者“平台是欧洲公司”也不会自动让案件受到 EU261 保护。
                关键仍然是 <strong>航班</strong>，不是销售渠道。
              </p>
              <p>
                也就是说，平台渠道会影响您和谁沟通、谁处理改签、谁拖慢退款，
                但不会自动改变一趟航班是否受欧洲法规保护的根本判断。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三个最常见的责任混淆
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 平台收了钱，所以平台一定负责延误赔偿
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。收款和出票，不等于平台对航班运营后果承担全部责任。运营争议通常仍要回到航司和承运结构。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 航司说“不是官网买的”，所以我不能索赔
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这也不对。是否能走 EU261，不以官网购买为前提。关键还是航班本身是否满足规则和证据是否完整。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 平台和航司互相推诿，就说明没有人负责
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这通常只是沟通路径混乱，不代表权利消失。真正重要的是先明确您追的是赔偿、退款、改签还是出票错误。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">先分清争议类型，再决定找谁</h2>
            <p className="mb-6 text-slate-300">
              如果您把运营赔偿、退款流程和代理服务混在一起，最容易被平台和航司来回转。
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
                请保留 OTA 订单确认、支付凭证、电子客票、航班变更通知、平台客服聊天记录和航空公司回复。
                很多案件的突破点，不在一张机票，而在谁在什么时候说了什么、承诺了什么、拒绝了什么。
              </p>
              <p>
                如果您还没搞清楚谁才是真正负责的承运人，也建议继续看
                <Link
                  href="/zh/blog/codeshare-operating-carrier-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《代码共享航班延误找谁赔》
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
                  href="/zh/blog/refund-vs-rerouting-choice-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《退款还是改签到最终目的地》
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
                  OTA 帮我改签失败，错过了后续航班，这还算 EU261 吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类案件通常需要拆开看。第一段航班本身是否符合 EU261，是一条线；平台改签或沟通失误造成的额外损失，则可能是另一条线。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  平台说它只是中介，这就完全没责任了吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。它可能不对航班运营本身负责，但如果问题出在出票、通知、改签处理或退款服务，平台仍可能是关键方。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  通过代理买票会降低胜算吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  它会让沟通更复杂，但不会自动抹掉您的权利。真正影响胜算的，仍然是航班适用范围、证据链和责任识别是否准确。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您想先快速判断航班本身是否落在 EU261 里，继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果您还在区分营销航司、实际承运人和销售渠道，也建议继续看
                <Link
                  href="/zh/blog/actual-carrier-charter-flight-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《谁才是真正负责的承运人》
                </Link>
                和
                <Link
                  href="/zh/blog/open-jaw-mixed-carriers-pnr-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《不同航司、不同 PNR 还是一段行程吗》
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
