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
  Route,
  XCircle,
} from "lucide-react";

export default function IstanbulMissedConnectionCompensation() {
  return (
    <LayoutZh>
      <SEO
        title="在伊斯坦布尔错过转机怎么办？IST / SAW 赔偿指南【2026】"
        description="在伊斯坦布尔机场 IST 或 SAW 错过下一程后，什么时候能拿 EU261，什么时候不能？本文讲清联程票、单独出票、酒店安置、Turkish Airlines 与 Pegasus 的责任边界。"
        url="https://problemlot.com/zh/blog/istanbul-missed-connection-compensation"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "在伊斯坦布尔错过转机怎么办？IST / SAW 赔偿指南【2026】",
            description:
              "面向中文乘客的伊斯坦布尔转机失败指南，覆盖 IST、SAW、联程票、EU261、土耳其规则和过夜安置。",
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
                "https://problemlot.com/zh/blog/istanbul-missed-connection-compensation",
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
                name: "在伊斯坦布尔错过转机后，一定能拿到 €600 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。是否能拿到 EU261 赔偿，关键看是不是同一联程票、整个行程从哪里起飞，以及最终目的地晚点了多久。",
                },
              },
              {
                "@type": "Question",
                name: "IST 和 SAW 错过转机，法律判断会不同吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "机场本身不是决定性因素。真正决定结论的是承运人、出发地、联程结构和最终到达延误。不过 IST 更常见于 Turkish Airlines，SAW 更常见于 Pegasus，因此案件类型会不同。",
                },
              },
              {
                "@type": "Question",
                name: "如果我是在土耳其出发、经伊斯坦布尔转机再飞欧洲，能用 EU261 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不能直接用 EU261，尤其在实际承运人为非欧盟航司时。这类案件往往要优先分析土耳其乘客权益规则。",
                },
              },
              {
                "@type": "Question",
                name: "错过转机后，航空公司必须给酒店吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "如果您持有同一联程票且被迫过夜，航空公司通常应承担改签到最终目的地并提供必要照护，包括酒店和交通安排。",
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
            <span className="text-slate-900 dark:text-white">伊斯坦布尔错过转机</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Route className="h-4 w-4" />
              转机权益
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              在伊斯坦布尔错过转机怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              这是全欧洲和欧亚航线中最“热”的机场场景之一。很多乘客人在 IST 或 SAW 站着排队时，
              最想知道的只有两件事：今晚有没有酒店，以及这次错过转机能不能索赔。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 12 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  更可能拿到 EU261
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>同一联程票，从欧盟机场起飞</li>
                  <li>最终目的地晚点超过 3 小时</li>
                  <li>第一段问题导致整个行程失败</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                  <XCircle className="h-5 w-5" />
                  常见不能直接走 EU261
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>土耳其出发，经伊斯坦布尔返欧</li>
                  <li>非欧盟航司、非欧盟起点的联程</li>
                  <li>自己分开买的两张票</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先确认这次伊斯坦布尔转机失败有没有赔偿机会？</h2>
            <p className="mb-6 text-blue-100">
              如果您现在正卡在 IST 或 SAW，或者已经被改签到次日，
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
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              先别急着争赔偿，先确认这是不是同一联程票
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                在伊斯坦布尔错过转机时，最关键的一步不是看航显屏，而是看订票结构。
                如果整个行程在同一张订单里，航空公司通常仍有义务把您送到最终目的地。
                如果是两张独立机票，第二段风险往往由乘客自己承担。
              </p>
              <p>
                这也是为什么很多人明明“都在伊斯坦布尔误机了”，
                有的人能拿赔偿、有的人却只能自掏腰包重买机票。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              6 个最常见的 IST / SAW 场景
            </h2>
            <div className="overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white">
                    <th className="p-4">场景</th>
                    <th className="p-4">EU261 常是否适用</th>
                    <th className="p-4">重点判断</th>
                    <th className="p-4">说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4">柏林 → IST → 曼谷，同一联程错过第二段</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">欧盟出发 + 最终晚点</td>
                    <td className="p-4">常可走 EU261</td>
                  </tr>
                  <tr>
                    <td className="p-4">巴黎 → SAW → 迪拜，第一段晚 50 分钟</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">常可适用</td>
                    <td className="p-4">最终目的地晚点</td>
                    <td className="p-4">不是只看第一段延误时长</td>
                  </tr>
                  <tr>
                    <td className="p-4">IST → 柏林，错过同日改签，次日才飞</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不适用</td>
                    <td className="p-4">土耳其起点</td>
                    <td className="p-4">更常看土耳其规则</td>
                  </tr>
                  <tr>
                    <td className="p-4">安卡拉 → IST → 巴黎，同一联程</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不适用</td>
                    <td className="p-4">整段起点不在欧盟</td>
                    <td className="p-4">不应直接套用 EU261</td>
                  </tr>
                  <tr>
                    <td className="p-4">单独买票：伦敦 → IST，另购 IST → 德里</td>
                    <td className="p-4 font-semibold text-amber-700 dark:text-amber-400">通常更难</td>
                    <td className="p-4">是否独立出票</td>
                    <td className="p-4">第二段风险常由乘客承担</td>
                  </tr>
                  <tr>
                    <td className="p-4">SAW 过夜，航司安排次日早班</td>
                    <td className="p-4 font-semibold text-amber-700 dark:text-amber-400">赔偿另看</td>
                    <td className="p-4">照护义务</td>
                    <td className="p-4">酒店、餐饮和交通仍很关键</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              什么时候必须明确说“不受欧洲法规保护”？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                这一点一定要写得非常清楚：
                不是所有在伊斯坦布尔错过转机的案件都能拿到 EU261。
              </p>
              <ul className="space-y-2">
                <li>如果整个行程从土耳其起飞，常常不在 EU261 的保护范围内。</li>
                <li>如果实际承运人为非欧盟航司，且起点不在欧盟，通常也不能直接走 EU261。</li>
                <li>但这不代表完全没有权利，往往只是法律路径改为土耳其规则。</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Hotel className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              在机场现场，先把这些东西拿到手
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li>新的登机牌或改签确认。</li>
              <li>酒店、餐饮或交通券。</li>
              <li>延误或取消原因的书面说明。</li>
              <li>原始订票确认、行李直挂标签和航显照片。</li>
              <li>如果被拒绝安置，保留自己支付的酒店和交通票据。</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定这次伊斯坦布尔误机算不算高价值索赔？</h2>
            <p className="mb-6 text-slate-300">
              只要知道出发地、承运人、是否联程和最终到达时间，通常就能快速判断案件方向。
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
                  在伊斯坦布尔错过转机，只晚了 40 分钟也可能赔吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  可能可以。关键不是第一段单独晚了多久，而是这次误机是否导致您在最终目的地严重晚点。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  IST 和 SAW 哪个机场更容易出问题？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  两个机场都高频出问题，但 IST 更常见于 Turkish Airlines 大联程，SAW 更常见于 Pegasus 低成本中转。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  从土耳其出发经伊斯坦布尔再飞欧洲，也能拿 EU261 吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  通常不能直接这样判断。若起点在土耳其且承运人为非欧盟航司，通常不在 EU261 保护范围内。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  错过转机后，我自己订酒店还能报吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  在很多场景里可以后续追偿，但一定要保留票据，并先给航空公司机会安排官方住宿和交通。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您的航司是 Turkish Airlines，继续看
                <Link
                  href="/zh/blog/turkish-airlines-transit-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Turkish Airlines 转机延误、取消、错过联程怎么索赔？》
                </Link>
                。
              </p>
              <p>
                如果您的机场是 SAW、航司是 Pegasus，也建议继续读
                <Link
                  href="/zh/blog/pegasus-airlines-delay-cancellation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Pegasus Airlines 索赔指南》
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
