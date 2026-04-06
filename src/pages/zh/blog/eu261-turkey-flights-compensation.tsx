import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Map,
  Plane,
  Scale,
  XCircle,
} from "lucide-react";

export default function Eu261TurkeyFlightsCompensation() {
  return (
    <LayoutZh>
      <SEO
        title="土耳其航班也能拿 EU261 赔偿吗？一文看懂飞土耳其的欧盟航班规则【2026】"
        description="飞土耳其的航班延误或取消后，什么时候能拿 €600，什么时候完全不受 EU261 保护？本文用欧盟 Article 3 规则讲清楚欧盟-土耳其航线赔偿边界。"
        url="https://problemlot.com/zh/blog/eu261-turkey-flights-compensation"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "土耳其航班也能拿 EU261 赔偿吗？一文看懂飞土耳其的欧盟航班规则【2026】",
            description:
              "飞土耳其的航班延误或取消后，什么时候受 EU261 保护、什么时候不受保护的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/eu261-turkey-flights-compensation",
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
                name: "从德国飞伊斯坦布尔的航班延误，能拿 EU261 赔偿吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常可以。只要航班从欧盟机场起飞，即使目的地是土耳其，也通常受 EU261 保护。",
                },
              },
              {
                "@type": "Question",
                name: "从伊斯坦布尔飞柏林、由 Turkish Airlines 执飞，受 EU261 保护吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不受保护。因为航班从第三国土耳其起飞，且实际承运人不是欧盟航空公司。",
                },
              },
              {
                "@type": "Question",
                name: "从伊斯坦布尔飞阿姆斯特丹、由 KLM 执飞，受 EU261 保护吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常受保护。因为航班从第三国起飞到欧盟，并且实际承运人是欧盟航空公司。",
                },
              },
              {
                "@type": "Question",
                name: "土耳其包机或旅游航班一定不受 EU261 保护吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。关键不是包机还是定期航班，而是起飞地、目的地和实际承运人。欧盟出发的包机通常仍可能受 EU261 保护。",
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
            <span className="text-slate-900 dark:text-white">EU261 与土耳其航班</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Scale className="h-4 w-4" />
              法规指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              土耳其航班也能拿 EU261 赔偿吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              最容易弄错的不是延误了多久，而是这趟航班到底有没有被欧洲法规保护。
              飞往土耳其、从土耳其返回欧洲、经伊斯坦布尔转机，这三类情况的结论可能完全不同。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 12 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                根据 EU261/2004 第 3 条，是否受保护主要看两件事：
                <strong>起飞地</strong>，以及<strong>实际承运人是不是欧盟航空公司</strong>。
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                  <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                    <CheckCircle2 className="h-5 w-5" />
                    通常受 EU261 保护
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>欧盟出发 → 土耳其</li>
                    <li>欧盟出发 → 土耳其转机 → 第三国</li>
                    <li>土耳其出发 → 欧盟，且由欧盟航司执飞</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                  <h3 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                    <XCircle className="h-5 w-5" />
                    通常不受 EU261 保护
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>土耳其出发 → 欧盟，由 Turkish Airlines 或 Pegasus 执飞</li>
                    <li>土耳其国内航班</li>
                    <li>第三国出发 → 土耳其，由非欧盟航司执飞</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断自己的航班有没有机会索赔？</h2>
            <p className="mb-6 text-blue-100">
              如果您的航班涉及土耳其、欧盟或伊斯坦布尔转机，现在就可以先做一次免费资格检查。
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
              <Map className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              6 个最常见场景，直接看结论
            </h2>
            <div className="overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white">
                    <th className="p-4">航线场景</th>
                    <th className="p-4">实际承运人</th>
                    <th className="p-4">EU261 结论</th>
                    <th className="p-4">原因</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4">巴黎 → 伊斯坦布尔</td>
                    <td className="p-4">任意航空公司</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常受保护</td>
                    <td className="p-4">从欧盟机场起飞</td>
                  </tr>
                  <tr>
                    <td className="p-4">柏林 → 安塔利亚</td>
                    <td className="p-4">包机或定期航班</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常受保护</td>
                    <td className="p-4">关键是欧盟出发，不是航班类型</td>
                  </tr>
                  <tr>
                    <td className="p-4">伊斯坦布尔 → 阿姆斯特丹</td>
                    <td className="p-4">KLM</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常受保护</td>
                    <td className="p-4">第三国起飞，但承运人为欧盟航司</td>
                  </tr>
                  <tr>
                    <td className="p-4">伊斯坦布尔 → 罗马</td>
                    <td className="p-4">Turkish Airlines</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不受保护</td>
                    <td className="p-4">第三国起飞，承运人不是欧盟航司</td>
                  </tr>
                  <tr>
                    <td className="p-4">伊斯坦布尔 → 伊兹密尔</td>
                    <td className="p-4">任意航空公司</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">不受保护</td>
                    <td className="p-4">纯土耳其国内航班</td>
                  </tr>
                  <tr>
                    <td className="p-4">法兰克福 → 伊斯坦布尔 → 曼谷</td>
                    <td className="p-4">联程票</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">常常仍受保护</td>
                    <td className="p-4">行程从欧盟起飞，看最终到达延误</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              为什么土耳其航线最容易让人判断错误？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为土耳其不是欧盟成员国，但和欧洲之间的航班量极大。很多乘客会下意识地认为：
                “只要目的地在欧洲附近”或者“只要飞去欧盟”，就一定能用 EU261。
              </p>
              <p>
                实际上，EU261 并不是看距离或地理位置，而是看
                <strong>法规适用范围</strong>。核心规则来自 EU261 第 3 条：
              </p>
              <ul className="space-y-2">
                <li>从欧盟机场起飞的航班，通常受保护。</li>
                <li>从第三国起飞到欧盟的航班，只有在实际承运人为欧盟航空公司时，通常才受保护。</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                明确受保护的情况
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>西班牙 → 伊斯坦布尔，Vueling 或 Turkish Airlines 执飞</li>
                <li>维也纳 → 安塔利亚，包机延误 4 小时</li>
                <li>伊斯坦布尔 → 巴黎，Air France 执飞</li>
                <li>米兰 → 伊兹密尔，廉航延误导致整段晚点 3 小时以上</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                明确不受保护的情况
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>伊斯坦布尔 → 柏林，Turkish Airlines 执飞</li>
                <li>安塔利亚 → 伦敦，Pegasus 执飞</li>
                <li>达拉曼 → 伊斯坦布尔，土耳其国内段</li>
                <li>伊斯坦布尔 → 迪拜，非欧盟航司执飞</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              包机、旅游航班、All Inclusive，会改变结论吗？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                通常不会。很多乘客误以为“这是旅行社包机，所以不适用 EU261”。
                这并不准确。只要航班从欧盟出发，或者从第三国飞往欧盟且由欧盟航空公司实际执飞，
                包机也可能受到 EU261 保护。
              </p>
              <p>
                对乘客来说，真正重要的是：
              </p>
              <ul className="space-y-2">
                <li>您从哪里起飞；</li>
                <li>谁是实际承运人；</li>
                <li>最终到达时间是否比原计划晚了 3 小时以上；</li>
                <li>取消是否在出发前不足 14 天才通知；</li>
                <li>是否属于真正的特殊情况。</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-amber-600 dark:text-amber-400" />
              如果不受 EU261 保护，是否就完全没有权利？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                不是。只是意味着您<strong>通常不能依据 EU261</strong> 要求固定金额 €250、€400 或 €600 赔偿。
              </p>
              <p>
                在这种情况下，您可能仍需要查看：
              </p>
              <ul className="space-y-2">
                <li>土耳其本地乘客权利规则；</li>
                <li>航空公司运输条款；</li>
                <li>蒙特利尔公约下的实际损失赔偿；</li>
                <li>旅行社套餐责任或保险条款。</li>
              </ul>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                这篇文章聚焦 EU261 的边界判断。如果您的航班不在欧盟规则保护范围内，后续索赔路径会不同。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              FAQ：土耳其与欧盟航班最常问的问题
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  1. 从波兰飞土耳其，Pegasus 延误了 5 小时，可以索赔吗？
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  通常可以。因为航班从欧盟机场起飞，EU261 通常适用，即使承运人不是欧盟航空公司。
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  2. 从伊斯坦布尔飞德国，Turkish Airlines 延误了 6 小时，可以拿 €600 吗？
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  通常不行。因为航班从第三国土耳其起飞，且承运人不是欧盟航空公司，这类情况通常不在 EU261 范围内。
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  3. 从伊斯坦布尔飞阿姆斯特丹，KLM 延误了，能走 EU261 吗？
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  通常可以。因为虽然从第三国起飞，但实际承运人是欧盟航空公司。
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  4. 包机飞安塔利亚是不是只能找旅行社，不能找航司？
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  不一定。包机航班也可能直接触发 EU261 责任，尤其是从欧盟起飞时。是否还要追究旅行社责任，是另一个问题。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              相关文章
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/zh/blog/flight-cancellation-compensation-guide"
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:ring-blue-300 dark:bg-gray-800 dark:ring-gray-700"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  航班取消如何索赔？
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  如果您的土耳其航线不是延误，而是临时取消，这篇更适合。
                </p>
              </Link>
              <Link
                href="/zh/blog/eu261-complete-guide-protected-flights"
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:ring-blue-300 dark:bg-gray-800 dark:ring-gray-700"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  哪些航班受 EU261 保护？
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  如果您想看更完整的总规则，可以接着读这篇。
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
