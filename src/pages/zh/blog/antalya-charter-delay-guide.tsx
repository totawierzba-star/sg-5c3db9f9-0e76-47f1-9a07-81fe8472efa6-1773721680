import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Hotel,
  MapPin,
  Plane,
  XCircle,
} from "lucide-react";

export default function AntalyaCharterDelayGuide() {
  return (
    <LayoutZh>
      <SEO
        title="安塔利亚机场包机延误怎么办？终端滞留赔偿指南【2026】"
        description="在安塔利亚 AYT 等包机、返欧航班或旅游航班时发生长时间延误，什么时候受 EU261 保护，什么时候不受？本文讲清机场现场该做什么、酒店餐饮和赔偿边界。"
        url="https://problemlot.com/zh/blog/antalya-charter-delay-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "安塔利亚机场包机延误怎么办？终端滞留赔偿指南【2026】",
            description:
              "面向中文乘客的安塔利亚机场延误指南，覆盖包机、返欧、终端滞留、EU261 边界和酒店餐饮照护。",
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
            datePublished: "2026-04-06",
            dateModified: "2026-04-06",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://problemlot.com/zh/blog/antalya-charter-delay-guide",
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
                name: "安塔利亚机场的包机延误后，一定能拿到 EU261 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。关键不是是不是包机，而是航班从哪里起飞、飞往哪里以及由谁实际执飞。安塔利亚返欧时，很多乘客最容易误判这一点。",
                },
              },
              {
                "@type": "Question",
                name: "我在安塔利亚机场被困了 6 小时，航空公司必须提供餐饮吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "在很多场景里需要。只要达到相应延误门槛，航空公司通常仍负有照护义务，包括餐饮、必要时的酒店与交通安排。",
                },
              },
              {
                "@type": "Question",
                name: "安塔利亚飞德国的返程和德国飞安塔利亚的去程，为什么规则不一样？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "因为 EU261 的适用并不按“是不是同一趟旅行”判断，而是按每段行程的起点、终点和实际承运人判断。去程和返程在法律上可能完全不同。",
                },
              },
              {
                "@type": "Question",
                name: "如果是旅游套餐，少住一晚酒店能一起找航司赔吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "航班法定赔偿通常针对航空公司；而少住酒店、接送失败和套餐缩水，往往还要另外评估旅行社或套餐组织者责任。",
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
            <span className="text-slate-900 dark:text-white">安塔利亚机场延误</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              机场指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              安塔利亚机场包机延误怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              如果您正坐在安塔利亚机场 AYT 的候机厅里等着包机、返欧航班或旅游航线更新，
              您最需要知道的不是空话，而是这趟航班到底受不受欧洲法规保护，以及今晚谁该管您的餐饮和酒店。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 11 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看结论</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  常见更容易受保护
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>欧盟出发飞安塔利亚的包机或定期航班</li>
                  <li>欧盟起点的联程行程</li>
                  <li>最终目的地晚点超过 3 小时</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                  <XCircle className="h-5 w-5" />
                  常见最容易误判
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>安塔利亚返欧的包机</li>
                  <li>土耳其出发、非欧盟航司执飞</li>
                  <li>把“度假返程”误以为自动受 EU261 保护</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断 AYT 这趟能不能赔？</h2>
            <p className="mb-6 text-blue-100">
              如果您的安塔利亚包机、返欧航班或旅游航线已经延误、取消或被改到次日，
              现在就可以先做一次免费资格检查。
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
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">为什么安塔利亚机场的案件这么容易出错？</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为安塔利亚聚集了最典型的暑期问题组合：包机、返程、旅游套餐、地接、酒店晚数缩水。
                乘客很容易把所有损失混成一句话，“我假期被毁了”，
                但法律上需要拆开：一部分是航班本身，一部分是套餐履约。
              </p>
              <p>
                更难的是，很多人去程从欧洲飞来时确实可能受 EU261 保护，
                返程从安塔利亚飞回去时却完全不是同一条规则。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              在 AYT 机场现场，先做这 5 件事
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li>拍下航显屏、登机口状态和实际延误时长。</li>
              <li>索要延误或取消原因的书面说明。</li>
              <li>要求航空公司或地勤明确说明是否提供餐饮、酒店和交通。</li>
              <li>保留餐饮、酒店、出租车和电话通信票据。</li>
              <li>保存原始订票确认、旅行社行程单和实际承运人信息。</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              什么时候必须明确说“不受欧洲法规保护”？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                这点在安塔利亚尤其重要：
                <strong>返程从土耳其起飞</strong>，并不自动意味着受 EU261 保护。
              </p>
              <ul className="space-y-2">
                <li>去程：欧盟 → 安塔利亚，通常更容易受 EU261 保护。</li>
                <li>返程：安塔利亚 → 欧盟，必须重新判断承运人和法规边界。</li>
                <li>若返程由非欧盟航司执飞，通常不在 EU261 保护范围内。</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">5 个最常见的安塔利亚场景</h2>
            <div className="overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white">
                    <th className="p-4">场景</th>
                    <th className="p-4">EU261 常是否适用</th>
                    <th className="p-4">重点问题</th>
                    <th className="p-4">说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4">华沙 → 安塔利亚，包机延误 5 小时</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">欧盟出发</td>
                    <td className="p-4">包机不排除 EU261</td>
                  </tr>
                  <tr>
                    <td className="p-4">安塔利亚 → 华沙，返程改到次日</td>
                    <td className="p-4 font-semibold text-amber-700 dark:text-amber-400">需具体分析</td>
                    <td className="p-4">返程边界</td>
                    <td className="p-4">不能直接照搬去程逻辑</td>
                  </tr>
                  <tr>
                    <td className="p-4">安塔利亚 → 柏林，非欧盟航司延误 6 小时</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不适用</td>
                    <td className="p-4">第三国返欧</td>
                    <td className="p-4">更常要看土耳其规则</td>
                  </tr>
                  <tr>
                    <td className="p-4">法兰克福 → 安塔利亚，晚到导致少住一晚</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">航班赔偿与套餐缩水分开看</td>
                    <td className="p-4">酒店损失不等于自动由航司全赔</td>
                  </tr>
                  <tr>
                    <td className="p-4">AYT 机场滞留过夜</td>
                    <td className="p-4 font-semibold text-amber-700 dark:text-amber-400">赔偿另看</td>
                    <td className="p-4">照护义务</td>
                    <td className="p-4">酒店、餐饮、交通非常关键</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Hotel className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              如果被困到深夜，航司通常还要做什么？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                只要达到相应延误门槛，航空公司通常仍负有照护义务。
                对安塔利亚这种返程高峰机场来说，最实际的问题往往是：
                您会不会被安排到酒店，以及回机场的交通由谁负责。
              </p>
              <p>
                即使最后发现案件并不受 EU261 保护，也不代表照护义务就自动消失。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定安塔利亚返程这趟到底算不算高价值案件？</h2>
            <p className="mb-6 text-slate-300">
              只要有航线、承运人和最终到达时间，就可以先把这趟返程的法律路径判断清楚。
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
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">常见问题 FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  安塔利亚的包机也能拿到 €250、€400、€600 吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  可以，但前提是该航班本身处于 EU261 适用范围内。包机身份本身不会自动排除赔偿。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  为什么返程和去程不是同一套规则？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  因为 EU261 是按每段行程的起点、终点和承运人判断，而不是按“是不是同一次度假”判断。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  安塔利亚机场滞留 6 小时，餐饮和酒店可以要求吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  在很多场景里可以。达到延误门槛后，航空公司通常仍应提供相应照护，尤其是在需要过夜时。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  少住一晚酒店能一起找航司赔吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  需要拆开看。航班法定赔偿通常针对航空公司；酒店晚数缩水和套餐损失，往往要另外分析旅行社或组织者责任。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您还没分清包机和航司责任，继续看
                <Link
                  href="/zh/blog/charter-vs-scheduled-flight-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《包机延误了该找旅行社还是航空公司？》
                </Link>
                。
              </p>
              <p>
                如果案件里还涉及少住一晚酒店，也建议继续读
                <Link
                  href="/zh/blog/all-inclusive-delayed-flight-hotel-loss"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《All Inclusive 套餐遇上航班延误》
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
