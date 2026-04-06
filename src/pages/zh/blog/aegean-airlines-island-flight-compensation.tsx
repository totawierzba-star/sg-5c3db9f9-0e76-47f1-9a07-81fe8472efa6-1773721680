import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Plane,
  Scale,
  Waves,
} from "lucide-react";

export default function AegeanAirlinesIslandFlightCompensation() {
  return (
    <LayoutZh>
      <SEO
        title="Aegean Airlines 飞希腊群岛延误怎么办？赔偿指南【2026】"
        description="Aegean Airlines 飞雅典、圣托里尼、罗得岛、克里特等航线延误或取消后，什么时候能拿 EU261？本文讲清岛屿航线、转机、天气借口和赔偿边界。"
        url="https://problemlot.com/zh/blog/aegean-airlines-island-flight-compensation"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Aegean Airlines 飞希腊群岛延误怎么办？赔偿指南【2026】",
            description:
              "面向中文乘客的 Aegean Airlines 索赔指南，覆盖希腊群岛航线、雅典转机、EU261 边界和常见天气争议。",
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
                "https://problemlot.com/zh/blog/aegean-airlines-island-flight-compensation",
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
                name: "Aegean Airlines 飞希腊群岛的航班都受 EU261 保护吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "大多数时候更容易受保护，因为 Aegean 是欧盟航空公司，且很多航线发生在欧盟内。但是否能拿到赔偿，还要看延误原因和最终到达时间。",
                },
              },
              {
                "@type": "Question",
                name: "飞圣托里尼、罗得岛或克里特时，航空公司说是天气原因，还能索赔吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "可能仍需具体核实。真正的恶劣天气可能构成例外，但并不是所有“天气”说法都足以自动免赔。",
                },
              },
              {
                "@type": "Question",
                name: "雅典转机去岛屿时错过下一段，能拿赔偿吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "如果是同一联程票，并且最终目的地严重晚点，很多案件仍可以按 EU261 评估，关键看整个行程而不只是单段延误。",
                },
              },
              {
                "@type": "Question",
                name: "Aegean 取消岛屿航班后，酒店和改签谁负责？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "航空公司通常仍需承担改签到最终目的地和必要照护义务，尤其是在无法当天成行、需要过夜时。",
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
            <span className="text-slate-900 dark:text-white">Aegean Airlines 指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              航空公司指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Aegean Airlines 飞希腊群岛延误怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Aegean 的航线看起来“很短、很度假”，但赔偿规则一点都不轻。尤其是雅典转机去圣托里尼、
              罗得岛、伊拉克利翁这些目的地时，一次短延误就可能毁掉整个岛屿行程。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 11 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最关键的判断</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  为什么 Aegean 更容易进入 EU261
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>Aegean 是欧盟航空公司</li>
                  <li>很多航线都发生在欧盟内部</li>
                  <li>岛屿联程和雅典转机常可按最终到达评估</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  但最容易出错的地方
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>把所有“天气原因”都当成免赔</li>
                  <li>只看短程距离，不看最终到达时间</li>
                  <li>忽视联程票与单独出票的区别</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先确认 Aegean 这趟岛屿航班能不能索赔？</h2>
            <p className="mb-6 text-blue-100">
              如果您飞雅典、圣托里尼、罗得岛、克里特等航线时遭遇延误、取消或错过转机，
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
              <Waves className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              为什么希腊群岛航线的案件很特别？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为这些航线常常既短、又季节性强，还容易受到风、能见度和机场能力的影响。
                航司最爱给的解释往往就是“天气不好”或“机场限制”。
              </p>
              <p>
                但从乘客角度看，真正重要的是：
                这是不是一趟同一联程里的关键一段，
                以及最终目的地到底晚到了多久。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">5 个最常见的 Aegean 场景</h2>
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
                    <td className="p-4">雅典 → 圣托里尼，延误 4 小时</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">欧盟内航班</td>
                    <td className="p-4">短程也可触发赔偿</td>
                  </tr>
                  <tr>
                    <td className="p-4">巴黎 → 雅典 → 罗得岛，联程失败</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">最终到达晚点</td>
                    <td className="p-4">联程票按最终目的地看</td>
                  </tr>
                  <tr>
                    <td className="p-4">法兰克福 → 雅典 → 伊拉克利翁，错过第二段</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">欧盟出发联程</td>
                    <td className="p-4">常可走 EU261</td>
                  </tr>
                  <tr>
                    <td className="p-4">雅典 → 岛屿，因天气改到次日</td>
                    <td className="p-4 font-semibold text-amber-700 dark:text-amber-400">需核实</td>
                    <td className="p-4">天气是否真实例外</td>
                    <td className="p-4">不能只听航司一句话</td>
                  </tr>
                  <tr>
                    <td className="p-4">岛屿 → 雅典 → 巴黎，返程联程严重晚点</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">欧盟内 / 欧盟航司</td>
                    <td className="p-4">仍可能拿到标准赔偿</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              天气原因不是万能免赔卡
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                对希腊群岛航线来说，天气确实比很多大陆机场更重要，
                但这并不意味着航司只要提到 “wind” 或 “weather” 就自动免责。
              </p>
              <ul className="space-y-2">
                <li>真正恶劣天气可能构成例外。</li>
                <li>但上一段飞机晚点、排班问题或运营混乱，不能简单包装成天气。</li>
                <li>乘客应尽量索要书面原因并保留机场现场证据。</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <MapPin className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              岛屿航线取消后，除了赔偿还要盯什么？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                岛屿航线最麻烦的不是取消本身，而是下一班可能不是几小时后，而是第二天甚至更晚。
                所以一定要关注改签和照护：
              </p>
              <ul className="space-y-2">
                <li>是否改签到同日最早可行航班。</li>
                <li>是否提供酒店、餐饮和机场交通。</li>
                <li>如果是联程，后续国际段是否一起改好。</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定 Aegean 这次到底算普通延误还是可赔案件？</h2>
            <p className="mb-6 text-slate-300">
              只要有航班号、出发地、最终目的地和实际晚到时间，通常就能先判断索赔方向。
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
                  岛屿航线这么短，也能拿赔偿吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  可以。距离只影响赔偿档位，不会自动让航班失去 EU261 保护。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Aegean 说是天气，我是不是就没机会了？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。需要看天气是否真实且不可避免，以及航司是否采取了合理措施。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  雅典转机失败时，看哪一段最重要？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  更重要的是整个联程的最终到达时间，而不是单看其中一段短程晚了多久。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  岛屿航班取消后，酒店谁管？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  在需要过夜时，航空公司通常仍有照护义务，包括住宿和必要交通。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您的问题更偏向机场级混乱，也建议继续读
                <Link
                  href="/zh/blog/istanbul-missed-connection-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《在伊斯坦布尔错过转机怎么办？》
                </Link>
                。
              </p>
              <p>
                如果您是度假套餐乘客，也可以继续看
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
