import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Plane,
  Scale,
  Split,
  XCircle,
} from "lucide-react";

export default function PegasusAirlinesDelayCancellationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="Pegasus Airlines 延误、取消、转机失败怎么索赔？【2026 指南】"
        description="Pegasus 航班在伊斯坦布尔 SAW 延误、取消或错过转机后，什么时候能拿 EU261，什么时候只能走土耳其规则？本文讲清赔偿边界、常见场景与索赔路径。"
        url="https://problemlot.com/zh/blog/pegasus-airlines-delay-cancellation-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Pegasus Airlines 延误、取消、转机失败怎么索赔？【2026 指南】",
            description:
              "面向中文乘客的 Pegasus Airlines 索赔指南，覆盖 SAW 转机、EU261 适用范围、土耳其乘客权益规则和延误取消实战判断。",
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
                "https://problemlot.com/zh/blog/pegasus-airlines-delay-cancellation-guide",
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
                name: "Pegasus Airlines 的航班一定受 EU261 保护吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不是。Pegasus 属于非欧盟航空公司。只有从欧盟机场起飞的 Pegasus 航班通常受 EU261 保护；从土耳其飞往欧盟的 Pegasus 航班通常不受 EU261 保护。",
                },
              },
              {
                "@type": "Question",
                name: "在伊斯坦布尔 SAW 错过 Pegasus 联程转机，能索赔吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "可能可以。关键看整段行程是否为同一联程订位、首段是否受保护，以及最终到达时间是否大幅晚点。若从欧盟出发，经 SAW 转机，很多案件仍可能触发 EU261。",
                },
              },
              {
                "@type": "Question",
                name: "Pegasus 从安塔利亚飞柏林延误 5 小时，为什么常常拿不到 EU261？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "因为该航班从第三国土耳其起飞，且实际承运人为非欧盟航司 Pegasus，通常不在 EU261 的保护范围内。这类案件要优先分析土耳其乘客权益规则。",
                },
              },
              {
                "@type": "Question",
                name: "Pegasus 航班取消后，航空公司还必须提供酒店和改签吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常是的。无论最终走 EU261 还是土耳其规则，只要达到相应条件，航空公司通常仍负有改签、退款和照护义务，尤其是在需要过夜时。",
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
            <span className="text-slate-900 dark:text-white">Pegasus Airlines 指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              航空公司指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Pegasus Airlines 延误、取消、转机失败怎么索赔？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pegasus 的问题通常集中在两个地方：一是从欧洲飞土耳其、再从土耳其返欧时规则完全不同，
              二是很多乘客在伊斯坦布尔萨比哈机场 SAW 转机失败后，不知道该按 EU261 还是土耳其规则判断。
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
                  常见受 EU261 保护
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>柏林 → 伊斯坦布尔（Pegasus 执飞）</li>
                  <li>巴黎 → SAW → 第三国的同一联程票</li>
                  <li>欧盟机场出发、最终晚点超过 3 小时</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                  <XCircle className="h-5 w-5" />
                  常见不受 EU261 保护
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>伊斯坦布尔 → 柏林（Pegasus 执飞）</li>
                  <li>安塔利亚 → 华沙（Pegasus 执飞）</li>
                  <li>土耳其国内 Pegasus 航班</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              关键点只有一个：<strong>Pegasus 是非欧盟航空公司</strong>。
              所以从欧盟起飞的航班，通常更有机会走 EU261；从土耳其起飞返欧的航班，则常常要改看土耳其规则。
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先确认 Pegasus 这趟航班能不能索赔？</h2>
            <p className="mb-6 text-blue-100">
              如果您刚在 SAW、安塔利亚、博德鲁姆或欧洲返程航线上遇到延误、取消、拒载，
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
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">为什么 Pegasus 最容易让人判断错？</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为 Pegasus 的网络结构高度依赖土耳其枢纽，尤其是
                <strong>伊斯坦布尔萨比哈机场 SAW</strong>。
                很多乘客是“去程从欧洲飞土耳其，返程再从土耳其飞回欧洲”，
                表面看像同一趟旅行，实际上去程和返程在法律上可能完全不是一回事。
              </p>
              <p>
                另外，很多人买的是带转机的低成本联程，第一段只晚了 40 分钟，
                但在 SAW 直接错过下一段。此时真正要看的不是“第一段晚了多久”，
                而是整个行程最终到达时间、是否同一联程订位，以及首段是否受法规保护。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Split className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              6 个最常见的 Pegasus 场景
            </h2>
            <div className="overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white">
                    <th className="p-4">场景</th>
                    <th className="p-4">EU261 常是否适用</th>
                    <th className="p-4">更可能走哪套规则</th>
                    <th className="p-4">结论</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4">柏林 → SAW，延误 4 小时</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">EU261</td>
                    <td className="p-4">欧盟出发，Pegasus 也受约束</td>
                  </tr>
                  <tr>
                    <td className="p-4">SAW → 柏林，延误 4 小时</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不适用</td>
                    <td className="p-4">土耳其规则</td>
                    <td className="p-4">第三国起飞、非欧盟航司</td>
                  </tr>
                  <tr>
                    <td className="p-4">巴黎 → SAW → 迪拜，联程转机失败</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">常可适用</td>
                    <td className="p-4">EU261</td>
                    <td className="p-4">从欧盟起飞，看最终到达晚点</td>
                  </tr>
                  <tr>
                    <td className="p-4">安塔利亚 → SAW → 阿姆斯特丹，联程失败</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不适用</td>
                    <td className="p-4">土耳其规则</td>
                    <td className="p-4">土耳其出发，Pegasus 为非欧盟航司</td>
                  </tr>
                  <tr>
                    <td className="p-4">伦敦 → SAW，航班取消</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">EU261 / UK261 视法域</td>
                    <td className="p-4">出发地法域通常决定核心保护</td>
                  </tr>
                  <tr>
                    <td className="p-4">SAW → 安塔利亚，国内航班大延误</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">不适用</td>
                    <td className="p-4">土耳其规则</td>
                    <td className="p-4">纯土耳其国内航班</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              SAW 转机失败，最关键看 3 件事
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>是不是同一张联程订位，而不是自己拆开买的两张票。</li>
              <li>整段行程的首个出发地是不是欧盟。</li>
              <li>最终目的地是否晚到 3 小时以上，或者是否被迫改到次日。</li>
            </ul>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-200">
              这也是为什么“我只晚了 50 分钟”并不能说明问题。
              如果这 50 分钟让您在 SAW 错过下一段并最终晚到 8 小时，
              整体案件价值可能完全不同。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              Pegasus 取消或大延误后，航空公司还要做什么？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                无论最终走 EU261 还是土耳其规则，Pegasus 在很多场景下仍需要面对改签、退款和照护义务。
                如果您在 SAW 或其他机场被迫过夜，通常应重点保留以下证据：
              </p>
              <ul className="space-y-2">
                <li>原始订票确认、联程信息和行李直挂凭证。</li>
                <li>延误通知、取消通知、改签邮件或短信。</li>
                <li>酒店、餐饮、出租车或机场交通票据。</li>
                <li>机场现场排队、值机柜台和 departure board 照片。</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">什么时候根本不该再纠结 EU261？</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                如果您的 Pegasus 航班属于以下几类，就不应把所有精力放在 EU261 上：
              </p>
              <ul className="space-y-2">
                <li>土耳其出发 → 欧盟，由 Pegasus 实际执飞。</li>
                <li>土耳其国内 Pegasus 航班。</li>
                <li>从土耳其出发的非欧盟内返程，且整体行程不以欧盟为起点。</li>
              </ul>
              <p>
                这些案件里，更现实的路径通常是先看
                <strong>土耳其 SHY-YOLCU</strong> 规则，而不是反复和航司争论 EU261。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定 Pegasus 这单该走 EU261 还是土耳其规则？</h2>
            <p className="mb-6 text-slate-300">
              只要有航线、日期和延误结果，先把法律路径判断清楚，通常就能少走很多弯路。
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
                  Pegasus 是廉航，所以一定不能索赔吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不是。廉航身份本身并不排除乘客权利。真正关键的是航班适用哪套法律，以及延误、取消、拒载是否满足门槛。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  在 SAW 转机时，第一段延误 30 分钟也可能有赔偿吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  可能有。关键不是第一段晚了多久，而是这次延误是否导致整个联程最终大幅晚到，尤其是错过下一段后改到很晚甚至次日。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Pegasus 从土耳其飞回德国延误 5 小时，为什么常说不能用 EU261？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  因为该航班从欧盟外的土耳其起飞，且 Pegasus 不是欧盟航司，所以通常不在 EU261 的保护范围内。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Pegasus 取消航班后，我接受改签到第二天，还能要现金赔偿吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  在很多案件里仍然可以进一步分析。接受改签不自动等于放弃赔偿，但仍需看航班是否受保护以及取消原因。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您的 Pegasus 航线涉及土耳其返欧，建议继续看
                <Link
                  href="/zh/blog/eu261-turkey-flights-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《土耳其航班也能拿 EU261 赔偿吗？》
                </Link>
                。
              </p>
              <p>
                如果案件更像土耳其国内或土耳其出发返欧，也建议阅读
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
