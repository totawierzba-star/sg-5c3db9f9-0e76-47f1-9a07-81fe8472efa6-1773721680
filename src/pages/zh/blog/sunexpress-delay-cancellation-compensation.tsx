import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Plane,
  Scale,
  Sun,
  XCircle,
} from "lucide-react";

export default function SunExpressDelayCancellationCompensation() {
  return (
    <LayoutZh>
      <SEO
        title="SunExpress 延误或取消怎么办？度假航班索赔指南【2026】"
        description="SunExpress 航班在安塔利亚、伊兹密尔、达拉曼等航线延误或取消后，什么时候能拿 EU261，什么时候要改看土耳其规则？本文讲清返程、包机和度假损失边界。"
        url="https://problemlot.com/zh/blog/sunexpress-delay-cancellation-compensation"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "SunExpress 延误或取消怎么办？度假航班索赔指南【2026】",
            description:
              "中文乘客版 SunExpress 索赔指南，覆盖土耳其度假航线、返欧航班、EU261 适用边界和常见套餐损失。",
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
                "https://problemlot.com/zh/blog/sunexpress-delay-cancellation-compensation",
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
                name: "SunExpress 的度假航班一定受 EU261 保护吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。关键不是是不是度假航班，而是出发地和实际承运人。欧盟出发的 SunExpress 航班通常更容易受 EU261 保护；从土耳其返欧的航班则要具体看承运人和路线。",
                },
              },
              {
                "@type": "Question",
                name: "安塔利亚飞德国的 SunExpress 航班延误 5 小时，为什么结论可能和去程相反？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "因为返程从土耳其起飞，法律适用边界可能与去程完全不同。很多案件在返程阶段不再当然受 EU261 保护，需要进一步分析承运结构和当地规则。",
                },
              },
              {
                "@type": "Question",
                name: "SunExpress 取消航班后，少住一晚酒店也能一起追吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "可以分别评估。航班层面的法定赔偿通常针对航空公司；而丢失酒店晚数、接送和套餐缩水，往往还要另外看旅行社或套餐组织者责任。",
                },
              },
              {
                "@type": "Question",
                name: "如果我买的是包机或旅游套餐，SunExpress 还算实际承运人吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "只要是 SunExpress 实际执飞，很多案件里它仍然是航班法定赔偿的首要责任主体。售票方或旅行社不自动替代这一责任。",
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
            <span className="text-slate-900 dark:text-white">SunExpress 指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              航空公司指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              SunExpress 延误或取消怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              SunExpress 是土耳其和地中海度假航线里最容易制造“规则错觉”的航空公司之一。
              很多乘客去程能走 EU261，返程却突然发现同样的延误、同样的航线方向，法律结论已经完全不同。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 12 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最关键的判断逻辑</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  常见更容易受保护
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>欧盟出发去安塔利亚、伊兹密尔、达拉曼</li>
                  <li>欧盟机场起飞的 SunExpress 包机或度假航班</li>
                  <li>同一联程从欧盟起飞并最终严重晚点</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                  <XCircle className="h-5 w-5" />
                  常见最容易失去 EU261
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>土耳其返欧、由非欧盟结构执飞的返程航班</li>
                  <li>土耳其国内 SunExpress 航班</li>
                  <li>乘客只看目的地在欧洲，却不看起飞地和承运人</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断 SunExpress 这趟能不能索赔？</h2>
            <p className="mb-6 text-blue-100">
              如果您的 SunExpress 航班在安塔利亚、达拉曼、伊兹密尔或返欧途中延误、取消、拒载，
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
              <Sun className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              SunExpress 为什么在暑期问题特别多？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为它高度暴露在旺季旅游流量、机场拥堵、机队轮换和短时运营波动里。
                对乘客来说，这意味着最常见的问题不是单纯“晚点一点”，
                而是整趟假期被打乱：错过接送、酒店首晚缩水、返程改到第二天。
              </p>
              <p>
                但从法律上说，最重要的依然不是“度假被毁”，而是这趟航班
                <strong>是否受欧洲法规保护</strong>，以及
                <strong>实际承运人和出发地</strong>到底是什么组合。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">6 个 SunExpress 高频场景</h2>
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
                    <td className="p-4">慕尼黑 → 安塔利亚，延误 4 小时</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">EU261</td>
                    <td className="p-4">欧盟出发</td>
                  </tr>
                  <tr>
                    <td className="p-4">安塔利亚 → 慕尼黑，延误 5 小时</td>
                    <td className="p-4 font-semibold text-amber-700 dark:text-amber-400">需具体分析</td>
                    <td className="p-4">看承运结构 + 土耳其规则</td>
                    <td className="p-4">返程不当然等于去程</td>
                  </tr>
                  <tr>
                    <td className="p-4">维也纳 → 达拉曼，包机取消</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">EU261</td>
                    <td className="p-4">包机不排除欧盟保护</td>
                  </tr>
                  <tr>
                    <td className="p-4">伊兹密尔 → 柏林，次日到达</td>
                    <td className="p-4 font-semibold text-amber-700 dark:text-amber-400">常需重判</td>
                    <td className="p-4">土耳其规则 / 具体承运分析</td>
                    <td className="p-4">第三国返欧边界复杂</td>
                  </tr>
                  <tr>
                    <td className="p-4">安塔利亚 → 伊斯坦布尔，国内航班大延误</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">不适用</td>
                    <td className="p-4">土耳其规则</td>
                    <td className="p-4">纯土耳其国内航班</td>
                  </tr>
                  <tr>
                    <td className="p-4">法兰克福 → 安塔利亚，延误导致少住一晚</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">EU261 + 套餐损失分开评估</td>
                    <td className="p-4">航班赔偿与酒店缩水不是一回事</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              一定要讲清楚：返程经常不是 EU261 的“自动延续”
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                很多乘客最容易误解的一点是：
                “我去程受 EU261 保护，所以返程也一样。”
                实际上，这常常不成立。
              </p>
              <ul className="space-y-2">
                <li>去程从欧盟出发，通常更容易受 EU261 保护。</li>
                <li>返程从土耳其出发时，必须重新判断承运人和法规边界。</li>
                <li>如果返程不受 EU261 保护，并不代表完全没有权利，往往只是路径换成当地规则。</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">航班赔偿和“坏掉的假期”为什么要分开处理？</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                对 SunExpress 乘客来说，这个区分尤其重要。因为很多案件都带着明显的度假属性：
                晚到后少住酒店、接机失败、首日晚餐和活动损失。
              </p>
              <p>
                但航空公司层面的法定赔偿，通常只解决
                <strong>航班异常本身</strong>；而酒店缩水、接送失败和套餐价值下降，
                往往还要另外评估旅行社或组织者责任。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定 SunExpress 返程到底能不能追？</h2>
            <p className="mb-6 text-slate-300">
              返程航班最容易判断错。先确认是否仍在欧洲法规保护内，再决定走哪条索赔路径。
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
                  SunExpress 是度假航司，所以赔偿更难拿吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。关键不是航司“看起来像度假航司”，而是航线结构、起飞地、承运人和最终晚点结果。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  SunExpress 包机也可以用 EU261 吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  可以，前提是该包机本身落入 EU261 的适用范围。是否是包机，并不自动剥夺欧盟法保护。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  安塔利亚返欧航班晚到 6 小时，为什么不能直接照去程那样索赔？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  因为返程从土耳其起飞，法律适用边界必须重新判断。去程和返程不一定由同一套法规覆盖。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  少住一晚酒店能不能一起算进 SunExpress 索赔？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  需要拆开看。航班法定赔偿通常针对航空公司；酒店、接送和套餐缩水则常常要另外分析旅行社或组织者责任。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您还没分清返欧航班什么时候失去 EU261，先看
                <Link
                  href="/zh/blog/eu261-turkey-flights-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《土耳其航班也能拿 EU261 赔偿吗？》
                </Link>
                。
              </p>
              <p>
                如果案件里还有包机和酒店损失，也建议继续读
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
