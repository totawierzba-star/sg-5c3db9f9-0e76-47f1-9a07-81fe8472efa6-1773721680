import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Armchair,
  CheckCircle2,
  ShieldAlert,
  Ticket,
} from "lucide-react";

export default function FlightDowngradeBusinessToEconomyGuide() {
  return (
    <LayoutZh>
      <SEO
        title="买了商务舱却被安排到经济舱？航班降舱赔偿指南【2026】"
        description="买了商务舱、豪华经济舱或高级舱位，却被安排到更低舱位怎么办？本文讲清 flight downgrade、refund、EU261 和乘客权利边界。"
        url="https://problemlot.com/zh/blog/flight-downgrade-business-to-economy-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "买了商务舱却被安排到经济舱？航班降舱赔偿指南【2026】",
            description:
              "解释 flight downgrade、舱位降级、退款比例、EU261 与乘客权利边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/flight-downgrade-business-to-economy-guide",
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
                name: "买了商务舱却被安排到经济舱，一定可以拿回差价吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常至少值得主张退款或补偿，但关键不只是“票价差多少”，还要看航班是否落在欧洲规则范围内，以及实际被降到什么舱位。",
                },
              },
              {
                "@type": "Question",
                name: "降舱和航班延误、取消是同一种赔偿吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不是完全一样。降舱有自己独立的权利路径，和延误、取消、拒载不完全重合，不能简单混为一谈。",
                },
              },
              {
                "@type": "Question",
                name: "如果是免费升舱后又被调回原舱位，也算降舱吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不一样。更关键的是您原本实际购买并应获得的舱位是什么，而不是临时赠送或系统短暂显示过什么。",
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
            <span className="text-slate-900 dark:text-white">降舱赔偿指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Armchair className="h-4 w-4" />
              舱位争议
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              买了商务舱却被安排到经济舱？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客在值机、登机口甚至上飞机后才发现，自己买的是
              <strong> 商务舱</strong>、<strong>豪华经济舱</strong> 或其他更高舱位，
              结果实际被安排到了更低等级的座位。降舱看起来不像延误那样“戏剧化”，但它同样可能触发明确的乘客权利。
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
                  先确认这些点
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>原始购票舱位和票价明细</li>
                  <li>实际登机牌显示的舱位</li>
                  <li>这趟航班是否落在欧洲法规范围内</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>只会退一点税费，不会有其他权利</li>
                  <li>降舱必须和超售绑在一起才有补偿</li>
                  <li>只要接受登机，就等于放弃后续主张</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">被临时降舱，不确定能追回多少？</h2>
            <p className="mb-6 text-blue-100">
              先免费检查这趟航班是否落在欧洲规则范围内，以及您这次降舱更接近退款、赔偿还是票务调整争议。
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
              降舱为什么和普通“服务不好”不一样？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为这不是单纯的抱怨餐食、座位不舒服或优先登机没做好，而是您支付并合同上应获得的运输等级，
                最终没有按承诺履行。商务舱和经济舱的差异，不只是服务体验，也包括舱位权益、行李额度、可改签性和整体票价结构。
              </p>
              <p>
                也正因为如此，降舱在欧洲乘客权利体系里并不是边缘问题。
                它和延误、取消不同，但同样可能有一条
                <strong> 明确且独立</strong> 的主张路径。
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
                <strong>更可能受欧洲法规保护：</strong>
                如果相关航班本身满足欧洲乘客规则的适用范围，例如航段、出发地或承运结构落在欧洲法规覆盖之内，
                那么降舱问题通常就不仅仅是“退点差价”，而应继续从正式乘客权利角度分析。
              </p>
              <p>
                <strong>不一定受欧洲法规保护：</strong>
                如果航班本身不落在相关欧洲规则范围内，
                那么即使体验上确实发生了降舱，也不自动意味着可以走同样的欧盟权利路径。此时更可能回到合同、票规或一般退款争议。
              </p>
              <p>
                所以第一步仍然不是争论“我是不是很亏”，而是先判断
                <strong> 这趟航班本身是否进入欧洲规则框架</strong>。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的降舱场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 商务舱超售，临时改到经济舱
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最典型的情形。乘客常常在值机口或登机口才被告知“今天只能坐后面”，而没有得到清晰解释或明确书面记录。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 换机型后高舱位座位不够
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  有时航司会因机型变化、wet lease 或运营调整，导致原本购买的舱位无法按计划提供。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 票面显示高舱位，但实际只给低舱位服务
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类案件更复杂，因为要先区分究竟是服务缩水、座位替代，还是法律意义上的真正降舱。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">降舱不只是“不满意”，而是权利问题</h2>
            <p className="mb-6 text-slate-300">
              越是这种看似“至少还是飞了”的情况，越容易被低估，但它恰恰最需要保留票面和实际舱位证据。
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
                请保留原始购票确认、电子客票、座位和舱位截图、实际登机牌、柜台或登机口给出的说明，以及任何关于换机型、超售或临时调整的书面记录。
                如果您接受了代金券或现场补偿，也请保留全部文件，不要只留口头承诺。
              </p>
              <p>
                如果您还没搞清楚这次问题更接近降舱、拒载还是航司换了承运结构，也建议继续看
                <Link
                  href="/zh/blog/holiday-flight-overbooking-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Overbooking 被拒载指南》
                </Link>
                、
                <Link
                  href="/zh/blog/codeshare-operating-carrier-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《代码共享航班延误找谁赔》
                </Link>
                和
                <Link
                  href="/zh/blog/wet-lease-subcontracted-flight-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Wet Lease 外包执飞指南》
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
                  航司给了餐券或少量里程，就算解决了吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。现场给的 goodwill 补偿和正式的降舱权利主张不是同一件事，不能因为拿了小补偿就自动认为全部问题都结束了。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  豪华经济舱被调到经济舱，也算降舱吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  通常值得重点分析。关键是您原本实际购买和应获得的运输等级，而不是航司现场如何口头解释。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果我坐完航班才想维权，会不会太晚？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不应因为已经飞了就放弃。很多降舱争议本来就是在飞完后，靠票面和实际舱位差异来重建证据链。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您想先快速判断这趟航班本身是否落在欧洲法规范围内，继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果您的问题还叠加了航班取消、改签到次日或最终目的地延误，也建议继续看
                <Link
                  href="/zh/blog/refund-vs-rerouting-choice-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《退款还是改签到最终目的地》
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
            </div>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
