import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Plane,
  Route,
  Scale,
  XCircle,
} from "lucide-react";

export default function TurkishAirlinesTransitCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="Turkish Airlines 转机延误、取消、错过联程怎么索赔？【2026】"
        description="Turkish Airlines 经伊斯坦布尔 IST 转机时，什么时候能拿 EU261，什么时候只能走土耳其规则？本文讲清德国-伊斯坦布尔-亚洲、返欧和错过转机的赔偿边界。"
        url="https://problemlot.com/zh/blog/turkish-airlines-transit-compensation-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Turkish Airlines 转机延误、取消、错过联程怎么索赔？【2026】",
            description:
              "面向中文乘客的 Turkish Airlines 联程与转机索赔指南，覆盖伊斯坦布尔 IST、EU261、土耳其规则和最终到达延误。",
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
                "https://problemlot.com/zh/blog/turkish-airlines-transit-compensation-guide",
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
                name: "Turkish Airlines 的联程航班一定受 EU261 保护吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不是。Turkish Airlines 属于非欧盟航空公司。若整个行程从欧盟机场起飞，很多联程案件仍可能适用 EU261；若从土耳其起飞返欧，则通常不在 EU261 保护范围内。",
                },
              },
              {
                "@type": "Question",
                name: "法兰克福 → 伊斯坦布尔 → 曼谷，第一段延误导致最终晚到，能赔吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常有机会。因为整段联程从欧盟出发，若最终目的地晚点超过 3 小时，很多案件仍可按 EU261 评估，即使第二段飞往第三国。",
                },
              },
              {
                "@type": "Question",
                name: "伊斯坦布尔 → 北京或伊斯坦布尔 → 柏林延误，为什么常常不能直接用 EU261？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "因为航班从第三国土耳其起飞，且实际承运人为非欧盟航司 Turkish Airlines。这类案件通常要优先看土耳其乘客权益规则，而不是 EU261。",
                },
              },
              {
                "@type": "Question",
                name: "在伊斯坦布尔 IST 错过 Turkish Airlines 下一段后，酒店和改签谁负责？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "若您是同一联程订位，航空公司通常仍负有改签到最终目的地和必要照护义务，包括过夜时的酒店与交通安排。",
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
            <span className="text-slate-900 dark:text-white">Turkish Airlines 转机指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              航空公司指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Turkish Airlines 转机延误、取消、错过联程怎么索赔？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Turkish Airlines 最容易出问题的地方，不是单一航班晚点，而是经伊斯坦布尔 IST 的大规模联程转机。
              同样是 “经土耳其转一次”，从德国出发和从伊斯坦布尔返欧，法律结论可能完全相反。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 13 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">一句话先判断</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  常见能走 EU261
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>法兰克福 → IST → 曼谷</li>
                  <li>巴黎 → IST → 北京</li>
                  <li>柏林 → 伊斯坦布尔，或欧盟出发的同一联程票</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                  <XCircle className="h-5 w-5" />
                  常见不能直接走 EU261
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>伊斯坦布尔 → 柏林</li>
                  <li>伊斯坦布尔 → 北京</li>
                  <li>安卡拉 → 伊斯坦布尔 → 欧盟</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              原因很简单：<strong>Turkish Airlines 不是欧盟航空公司</strong>。
              所以从欧盟起飞的整段行程，往往还有机会适用 EU261；而从土耳其起飞的航班，则常常必须改看土耳其规则。
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先确认 Turkish Airlines 这趟该走哪套规则？</h2>
            <p className="mb-6 text-blue-100">
              如果您在伊斯坦布尔 IST 错过联程、被改到次日，或者整段行程晚点超过 3 小时，
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
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Route className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              为什么 Turkish Airlines 联程最容易出高价值案件？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为很多 Turkish Airlines 行程都不是简单的 “A 点飞 B 点”，
                而是欧洲出发，经 IST 再转到亚洲、中东或非洲。第一段只要出现 30 到 60 分钟的延误，
                就可能让整个行程在最终目的地晚到半天甚至一天。
              </p>
              <p>
                对这类联程来说，关键不是看您在伊斯坦布尔等了多久，而是看
                <strong>最终目的地</strong>的到达延误，以及整段是否在同一张票上。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">6 个典型场景，直接看结论</h2>
            <div className="overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white">
                    <th className="p-4">场景</th>
                    <th className="p-4">EU261 常是否适用</th>
                    <th className="p-4">优先分析路径</th>
                    <th className="p-4">说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4">法兰克福 → IST → 曼谷，联程晚到 8 小时</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">EU261</td>
                    <td className="p-4">欧盟出发，看最终到达晚点</td>
                  </tr>
                  <tr>
                    <td className="p-4">巴黎 → IST，第一段取消</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">EU261</td>
                    <td className="p-4">欧盟出发，TK 也受约束</td>
                  </tr>
                  <tr>
                    <td className="p-4">IST → 北京，延误 5 小时</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不适用</td>
                    <td className="p-4">土耳其规则</td>
                    <td className="p-4">第三国起飞，非欧盟航司</td>
                  </tr>
                  <tr>
                    <td className="p-4">IST → 柏林，改到次日</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不适用</td>
                    <td className="p-4">土耳其规则</td>
                    <td className="p-4">返欧不自动等于 EU261</td>
                  </tr>
                  <tr>
                    <td className="p-4">慕尼黑 → IST → 开罗，错过下一段</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">常可适用</td>
                    <td className="p-4">EU261</td>
                    <td className="p-4">从欧盟起飞的同一联程</td>
                  </tr>
                  <tr>
                    <td className="p-4">安卡拉 → IST → 巴黎，延误过夜</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不适用</td>
                    <td className="p-4">土耳其规则</td>
                    <td className="p-4">整段起点在土耳其</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              在 IST 错过转机，先确认这 3 件事
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>是否是同一张联程票，而不是拆开单独购买。</li>
              <li>整个行程的起点是不是欧盟机场。</li>
              <li>最终目的地是否晚点超过 3 小时，或被改签到次日。</li>
            </ul>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-200">
              这也是为什么很多 Turkish Airlines 案件价值很高。
              您在伊斯坦布尔只错过一次转机，最终却可能晚到 10 小时以上，
              这时看的是整段行程的最终结果，而不是单一航段的局部延误。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              错过转机后，Turkish Airlines 还需要做什么？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                如果您持有同一张联程票，航司通常仍需把您送到最终目的地。
                一旦您在 IST 被迫长时间等待或过夜，通常还应关注以下照护问题：
              </p>
              <ul className="space-y-2">
                <li>新的登机牌或改签确认。</li>
                <li>餐饮券、酒店、机场与酒店之间交通。</li>
                <li>行李是否自动转运，还是需要在中途重新领取。</li>
                <li>书面说明延误或取消原因。</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">什么时候应该停止和航司争论 EU261？</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                如果您的 Turkish Airlines 行程是从土耳其起飞，
                尤其是 <strong>IST → 欧盟</strong> 或 <strong>土耳其国内 → IST → 欧盟</strong>，
                那就不应默认自己仍受 EU261 保护。
              </p>
              <p>
                这些案件里，更有效的方向通常是先分析
                <strong>土耳其 SHY-YOLCU</strong> 规则，而不是反复要求航司按欧盟法处理。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定 Turkish Airlines 这单该走 EU261 还是土耳其规则？</h2>
            <p className="mb-6 text-slate-300">
              只要知道整段路线、是否联程、最终到达时间和承运人，我们就能先把索赔路径判断清楚。
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
                  Turkish Airlines 从德国出发飞亚洲，也能拿到 EU261 吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  可以，很多时候能。关键在于整个行程从欧盟出发，并且最终目的地严重晚点。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  在 IST 错过转机时，只看第一段延误时长够吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不够。更关键的是最终目的地的到达时间，以及您是否持有同一张联程票。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  伊斯坦布尔飞柏林延误 5 小时，为什么通常不能直接用 EU261？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  因为航班从第三国土耳其起飞，且实际承运人为非欧盟航司 Turkish Airlines，所以通常不在 EU261 保护范围内。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  被改签到次日后，还能要求酒店和餐饮吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  在很多场景里仍然可以。改签到次日通常意味着航司需要履行相应照护义务，尤其是住宿和必要交通安排。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您的案件核心是土耳其返欧保护边界，建议继续看
                <Link
                  href="/zh/blog/eu261-turkey-flights-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《土耳其航班也能拿 EU261 赔偿吗？》
                </Link>
                。
              </p>
              <p>
                如果您更像是在 IST 错过联程，也可以继续读
                <Link
                  href="/zh/blog/turkey-shy-pass-passenger-rights"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《SHY-PASS 土耳其乘客权益指南》
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
