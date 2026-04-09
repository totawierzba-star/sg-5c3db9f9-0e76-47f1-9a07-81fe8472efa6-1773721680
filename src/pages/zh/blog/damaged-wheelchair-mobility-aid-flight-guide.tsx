import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  Accessibility,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Ticket,
} from "lucide-react";

export default function DamagedWheelchairMobilityAidFlightGuide() {
  return (
    <LayoutZh>
      <SEO
        title="轮椅或助行器在航班中损坏了怎么办？Mobility Aid 指南【2026】"
        description="轮椅、助行器、电动代步设备在托运或落地后损坏、晚到或无法使用怎么办？本文讲清 mobility aid、damaged wheelchair、赔偿与 EU261 边界。"
        url="https://problemlot.com/zh/blog/damaged-wheelchair-mobility-aid-flight-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "轮椅或助行器在航班中损坏了怎么办？Mobility Aid 指南【2026】",
            description:
              "解释 damaged wheelchair、mobility aid、延误或损坏辅助设备、赔偿与 EU261 边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/damaged-wheelchair-mobility-aid-flight-guide",
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
                name: "轮椅或助行器落地后损坏了，这只算普通行李问题吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不应简单当成普通箱包问题。对很多旅客来说，轮椅或助行器是关键辅助设备，损坏后果可能远比普通行李晚到严重得多。",
                },
              },
              {
                "@type": "Question",
                name: "如果设备晚到或不能用，临时租借替代设备和交通费用还能追吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多情况下都值得保留并继续主张，尤其当这些支出是合理、必要且与设备无法使用直接相关时。",
                },
              },
              {
                "@type": "Question",
                name: "这类案件能直接按 EU261 赔吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。辅助设备损坏或晚到通常不属于最典型的 EU261 延误赔偿路径，但如果还叠加了航班延误、误机或改签到次日，航班部分仍可能需要单独分析。",
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
            <span className="text-slate-900 dark:text-white">辅助设备损坏与晚到</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Accessibility className="h-4 w-4" />
              特殊协助
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              轮椅或助行器在航班中损坏了怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              对很多旅客来说，轮椅、助行器、折叠 walker 或电动代步设备不是“普通行李”，而是
              <strong> 出行所必需的辅助设备</strong>。一旦它在托运、装卸或交付时被损坏、晚到或完全不能使用，
              影响往往立刻就会落在乘客的行动能力、安全和住宿交通安排上。
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
                  <li>立刻在机场报损并拿到书面记录</li>
                  <li>拍下设备整体、损坏点和序列信息</li>
                  <li>保留临时替代设备与交通支出票据</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>这和普通行李晚到完全一样</li>
                  <li>只要航司说会修，就先别留证据</li>
                  <li>辅助设备问题和航班权利完全无关</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">落地后发现轮椅或助行器坏了，行动已经受影响？</h2>
            <p className="mb-6 text-blue-100">
              先免费检查这次问题更像纯粹的设备损坏，还是已经叠加了协助失灵、误机、改签到次日或额外住宿交通损失。
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
              为什么辅助设备损坏比普通行李更严重？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为普通行李晚到，乘客可能还可以先用临时衣物和洗漱用品应对；但轮椅或助行器一旦损坏，
                影响的可能是能否独立移动、能否安全离开机场、能否入住酒店，甚至能否继续整段旅行。
              </p>
              <p>
                这也是为什么这类案件最怕被简单归类成“箱子坏了”。对需要该设备的人来说，
                真正的损失常常不止是维修费用，而是
                <strong> 临时替代设备</strong>、
                <strong> 额外交通</strong>、
                <strong> 协助成本</strong> 和整段行程被迫改变。
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
                如果辅助设备损坏或晚到之外，航班本身还发生了延误、取消、改签到次日或误机，
                那么航班部分仍然可能落在欧洲旅客规则的分析范围内。
              </p>
              <p>
                <strong>不一定直接受 EU261 保护：</strong>
                如果核心问题只是轮椅、助行器或 mobility aid 的损坏、晚到或交付异常，
                这通常更接近设备与行李责任本身，而不是典型的 EU261 航班赔偿路径。
              </p>
              <p>
                也就是说，常见的正确做法是把
                <strong> 航班本身的争议</strong> 和
                <strong> 辅助设备的争议</strong> 拆开，各自保留证据、各自判断路径。
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
                  1. 落地后设备外观明显受损
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最需要立即拍照和报损的情况，尤其当轮胎、扶手、电池、控制器或折叠结构已经影响正常使用时。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 设备没有跟同一班飞机到达
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这种情况下乘客的即时损失通常比普通行李晚到更大，因为行动能力和地面安排会立刻受到影响。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 航司只提供很基础的临时替代品
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  有时提供的替代设备并不能满足实际需要，此时更要记录为什么它不足以替代原设备以及由此产生的额外成本。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">别把辅助设备当成普通托运行李处理</h2>
            <p className="mb-6 text-slate-300">
              越是这种对行动能力直接产生影响的损坏，越要从一开始就把损失、时间线和替代成本记录完整。
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
                请保留机场报损记录、设备照片、型号与序列号、登机牌、设备托运标签、维修评估、替代设备租赁票据，以及因为设备不可用而产生的出租车、酒店或额外协助费用。
                如果设备是电动型，也应记录电池和功能部件状态。
              </p>
              <p>
                如果您还没搞清楚这更接近延误行李、PRM 协助失败还是航班本身也发生了晚点，也建议继续看
                <Link
                  href="/zh/blog/delayed-baggage-after-arrival-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《飞机到了但行李没到，能索赔吗》
                </Link>
                、
                <Link
                  href="/zh/blog/reduced-mobility-assistance-delay-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《机场轮椅或特殊协助太晚，导致误机怎么办》
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

          <section
            id="faq"
            className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">常见问题 FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  机场说“先把设备带走，之后再申报”，我该怎么做？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  只要条件允许，最好先在机场完成报损或至少拿到书面记录，再离开现场。越晚补报，之后越容易出现争议。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果设备还能勉强用，是不是就不值得报损？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  仍然值得。很多结构性损伤在现场看似还能动，后续却会迅速恶化，及时留证非常关键。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  这种案件最后是不是只能拿到维修费？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不应只这样想。合理替代设备、交通、住宿和额外协助成本，都可能成为需要一起评估的损失组成部分。
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
                如果您的问题还叠加了改签到次日、误机或最终目的地明显晚到，也建议继续看
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《最终目的地规则》
                </Link>
                和
                <Link
                  href="/zh/blog/airline-rerouted-without-consent-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《航司没问我就改到别的航班》
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
