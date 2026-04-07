import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  PlaneTakeoff,
  ShieldAlert,
  Ticket,
} from "lucide-react";

export default function WetLeaseSubcontractedFlightCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="飞机和机组都不是原航司的，延误找谁赔？Wet Lease 指南【2026】"
        description="订票时是A航司，结果实际飞行的是B航司的飞机和机组。wet lease、subcontracted flight、actual carrier 和 EU261 该怎么判断？"
        url="https://problemlot.com/zh/blog/wet-lease-subcontracted-flight-compensation-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "飞机和机组都不是原航司的，延误找谁赔？Wet Lease 指南【2026】",
            description:
              "解释 wet lease、subcontracted flight、actual carrier 与 EU261 责任边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/wet-lease-subcontracted-flight-compensation-guide",
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
                name: "wet lease 航班延误后，应该找卖票的航空公司还是实际飞行的公司？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多案件里，关键仍然是确认谁是实际承运人，也就是当天真正执行这趟航班并承担运营控制的一方，而不是只看票卖给了谁。",
                },
              },
              {
                "@type": "Question",
                name: "如果我买的是欧盟航司的票，但实际飞的是外包航司，还一定受 EU261 保护吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。是否受 EU261 保护，仍要看航班出发地、实际承运结构以及具体航段安排，不能只根据品牌或售票页面判断。",
                },
              },
              {
                "@type": "Question",
                name: "wet lease 和 codeshare 是一回事吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不是完全一样。codeshare 更像是航班号和销售层面的安排，而 wet lease 往往涉及飞机、机组和运营执行由另一家公司提供。",
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
            <span className="text-slate-900 dark:text-white">Wet Lease 与外包执飞责任</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <PlaneTakeoff className="h-4 w-4" />
              责任判断
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              飞机和机组都不是原航司的，延误找谁赔？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客在登机口才发现，自己买的是一家航空公司的票，
              但真正飞这趟航班的飞机涂装、机组甚至广播系统都像是另一家公司。
              这种结构常见于 <strong>wet lease</strong>、<strong>subcontracted flight</strong> 或季节性外包运力。
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
                  先查这几件事
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>当天到底是谁实际执行航班</li>
                  <li>登机牌或邮件里是否写了 operated by</li>
                  <li>航班本身是否满足 EU261 适用条件</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>品牌是谁就一定找谁赔</li>
                  <li>外包执飞就自动不能走 EU261</li>
                  <li>wet lease 和 codeshare 完全一样</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">看到了“operated by”或陌生航司涂装？</h2>
            <p className="mb-6 text-blue-100">
              外包执飞案件最怕一开始找错对象。先免费检查承运结构和这趟航班还能不能继续主张赔偿。
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
              什么是 wet lease，为什么它会影响索赔路径？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                简单说，wet lease 通常意味着一家公司把飞机和机组一起提供给另一家公司使用。
                对乘客而言，票可能是在熟悉的大航司渠道买的，但当天真正执飞和执行运营控制的，
                可能是另一家航空公司。
              </p>
              <p>
                这会直接影响后续索赔，因为 EU261 分析里，<strong>实际承运人</strong> 往往比营销品牌更关键。
                也就是说，卖票给您的人、航班号显示的品牌、机场值机柜台的品牌，
                不一定就是最终最重要的责任对象。
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
                如果相关航班从欧盟机场出发，或者该航段本身满足 EU261 的适用条件，
                即便它是 wet lease 结构，仍然可能落入欧洲法规范围。关键不是“是不是外包”，
                而是 <strong>这趟航班的路线和实际承运结构</strong>。
              </p>
              <p>
                <strong>不一定受 EU261 保护：</strong>
                如果只是看到售票页面上挂着欧盟品牌，
                但实际执飞航班从欧盟外起飞且承运结构不满足法规要求，
                那么仅凭品牌印象并不能自动把案件带进 EU261。
              </p>
              <p>
                同样要注意，wet lease 并不自动消灭旅客权利。它只是让判断更依赖于：
                谁真正飞、谁控制航班运营、以及这段航班本身是否落在欧洲法规的范围里。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三个最容易踩坑的地方
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 只看品牌，不看实际执飞
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  很多乘客记得的是自己“买了谁的票”，但 EU261 争议里往往更需要确认“当天到底是谁飞的”。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 以为外包执飞就一定没有赔偿
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不对。外包或湿租本身不是自动免赔理由，真正关键仍然是该航班是否满足 EU261 适用条件以及延误原因本身。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 把 wet lease 和 codeshare 完全混为一谈
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  两者都涉及“票面看到的”和“实际飞的”不完全一致，但结构并不完全相同，责任分析也会更细。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">航班外包执飞，不代表只能放弃</h2>
            <p className="mb-6 text-slate-300">
              只要先把实际承运人、出发地和航段结构搞清楚，很多看起来混乱的案子其实能很快分出方向。
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
                请保留订票确认、电子客票、登机牌、机场屏幕截图，以及任何写着
                <strong> “operated by”</strong>、<strong> “flight operated for”</strong> 的文件。
                如果飞机涂装或机组明显属于另一家航司，也建议拍照保留。
              </p>
              <p>
                如果您还没搞清楚实际承运人和营销航司的区别，可以继续看
                <Link
                  href="/zh/blog/codeshare-operating-carrier-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《代码共享航班延误找谁赔》
                </Link>
                、
                <Link
                  href="/zh/blog/actual-carrier-charter-flight-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《谁才是真正负责的承运人》
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
                  我买的是大航司的票，为什么最后却是小航司飞机来飞？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这常见于季节性运力外包、湿租和临时运营调整。对乘客来说最重要的不是惊讶，而是尽快确认实际执飞方是谁。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  机场员工让我去找售票平台，我还要继续核查吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  要。平台、营销航司和实际承运人往往是不同角色，很多案件第一步就是要纠正被踢来踢去的问题。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  wet lease 会影响最终目的地延误的计算吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  是否看最终目的地，仍要结合整段行程结构来判断。wet lease 本身不是唯一标准，但它会影响您先找谁、如何证明责任链。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您的问题更接近代码共享、混合承运人或不同 PNR，继续看
                <Link
                  href="/zh/blog/open-jaw-mixed-carriers-pnr-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Open-jaw、不同航司、不同 PNR 指南》
                </Link>
                。
              </p>
              <p>
                如果您还想先看这段航班能不能进入欧洲法规分析，也建议继续看
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《最终目的地规则》
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
