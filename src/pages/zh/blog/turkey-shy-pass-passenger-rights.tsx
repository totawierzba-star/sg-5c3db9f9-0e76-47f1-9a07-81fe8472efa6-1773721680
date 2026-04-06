import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Scale,
  Shield,
  XCircle,
} from "lucide-react";

export default function TurkeyShyPassPassengerRights() {
  return (
    <LayoutZh>
      <SEO
        title="SHY-PASS 是什么？土耳其航班延误取消赔偿全指南【2026】"
        description="EU261 不适用时，土耳其的 SHY-PASS / SHY-YOLCU 能赔多少？本文讲清楚 Turkish Airlines、Pegasus、包机和安塔利亚、伊斯坦布尔航班的赔偿规则。"
        url="https://problemlot.com/zh/blog/turkey-shy-pass-passenger-rights"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "SHY-PASS 是什么？土耳其航班延误取消赔偿全指南【2026】",
            description:
              "面向中文乘客的土耳其航班乘客权益指南，解释 SHY-YOLCU 适用范围、赔偿金额、延误照护和与 EU261 的差别。",
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
                "https://problemlot.com/zh/blog/turkey-shy-pass-passenger-rights",
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
                name: "SHY-PASS 和 SHY-YOLCU 是同一套规则吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "中文搜索中很多乘客会把土耳其乘客权益规则称为 SHY-PASS，但官方法规名称是 SHY-YOLCU。本文用 SHY-PASS 作为搜索关键词，同时按官方规则解释权利。",
                },
              },
              {
                "@type": "Question",
                name: "从伊斯坦布尔飞柏林、由 Turkish Airlines 执飞，受哪套规则保护？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "这类航班通常不受 EU261 保护，但通常落入土耳其 SHY-YOLCU 的范围，因为承运人为土耳其航空公司且航班从土耳其起飞。",
                },
              },
              {
                "@type": "Question",
                name: "从柏林飞安塔利亚、由 Pegasus 执飞，能用 SHY-PASS 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不能单独依赖 SHY-YOLCU，因为该航班从欧盟机场出发。此时更常见的是优先按 EU261 评估。",
                },
              },
              {
                "@type": "Question",
                name: "土耳其航班延误 5 小时以上时，我可以放弃行程并退款吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常可以。根据土耳其乘客权益规则，达到长时间延误门槛后，乘客通常可以选择退款或改签到最终目的地。",
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
            <span className="text-slate-900 dark:text-white">土耳其 SHY-PASS</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Scale className="h-4 w-4" />
              法规指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              SHY-PASS 是什么？土耳其航班延误取消赔偿全指南
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客只知道 EU261，却不知道从伊斯坦布尔、安塔利亚、达拉曼飞回欧洲时，
              往往适用的不是欧盟法规，而是土耳其自己的乘客权益规则。
              这正是 Turkish Airlines、Pegasus、SunExpress 和包机纠纷里最常被忽略的一层。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 13 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                先说结论：不要把 SHY-PASS 和 EU261 混为一谈
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  更常见适用 EU261 的情况
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>从欧盟机场出发飞往土耳其</li>
                  <li>从土耳其飞往欧盟，且实际承运人是欧盟航司</li>
                  <li>欧盟出发，经伊斯坦布尔联程转机去第三国</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-blue-700 dark:text-blue-400">
                  <Shield className="h-5 w-5" />
                  更常见适用土耳其规则的情况
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>Turkish Airlines 或 Pegasus 从土耳其飞往欧洲</li>
                  <li>土耳其国内航班</li>
                  <li>外国航司从土耳其机场起飞的国际航班</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-200">
              说明一下：很多中文搜索会写成 <strong>SHY-PASS</strong>，
              但土耳其官方法规名称是 <strong>SHY-YOLCU</strong>。
              本文保留 SHY-PASS 这个关键词，是为了覆盖乘客真实搜索习惯。
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断自己的土耳其航班适用哪套法规？</h2>
            <p className="mb-6 text-blue-100">
              如果您刚被 Turkish Airlines、Pegasus 或假日包机延误、取消、拒载，
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
              <FileText className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              SHY-PASS 的官方适用范围，到底覆盖哪些航班？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                按土耳其民航局发布的 <strong>SHY-YOLCU</strong> 规则，保护范围并不是“所有飞土耳其的航班”，
                而是更具体的三类：
              </p>
              <ul className="space-y-2">
                <li>土耳其航空公司在土耳其机场之间、以及往返土耳其机场的航班。</li>
                <li>外国航空公司从土耳其机场起飞的航班。</li>
                <li>既包括定期航班，也包括包机和旅游航班，只要乘客有确认预订并按时值机。</li>
              </ul>
              <p>
                这意味着一个特别重要的边界：
                <strong>从柏林飞安塔利亚</strong>和<strong>从安塔利亚飞柏林</strong>，
                可能根本不是同一套法律逻辑。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              6 个最容易搞错的实战场景
            </h2>
            <div className="overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white">
                    <th className="p-4">航线场景</th>
                    <th className="p-4">更可能适用</th>
                    <th className="p-4">结论</th>
                    <th className="p-4">原因</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4">柏林 → 安塔利亚（Pegasus）</td>
                    <td className="p-4">EU261</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常受欧盟保护</td>
                    <td className="p-4">因为从欧盟机场出发</td>
                  </tr>
                  <tr>
                    <td className="p-4">安塔利亚 → 柏林（Pegasus）</td>
                    <td className="p-4">SHY-YOLCU</td>
                    <td className="p-4 font-semibold text-blue-700 dark:text-blue-400">通常按土耳其规则判断</td>
                    <td className="p-4">土耳其航司从土耳其机场起飞</td>
                  </tr>
                  <tr>
                    <td className="p-4">伊斯坦布尔 → 巴黎（Turkish Airlines）</td>
                    <td className="p-4">SHY-YOLCU</td>
                    <td className="p-4 font-semibold text-blue-700 dark:text-blue-400">通常不走 EU261</td>
                    <td className="p-4">第三国起飞且非欧盟航司</td>
                  </tr>
                  <tr>
                    <td className="p-4">伊斯坦布尔 → 阿姆斯特丹（KLM）</td>
                    <td className="p-4">EU261 + 土耳其规则分析</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">常可优先按 EU261 评估</td>
                    <td className="p-4">第三国起飞到欧盟，承运人为欧盟航司</td>
                  </tr>
                  <tr>
                    <td className="p-4">伊斯坦布尔 → 安塔利亚</td>
                    <td className="p-4">SHY-YOLCU</td>
                    <td className="p-4 font-semibold text-blue-700 dark:text-blue-400">土耳其国内航班</td>
                    <td className="p-4">可适用国内赔偿标准</td>
                  </tr>
                  <tr>
                    <td className="p-4">伦敦 → 达拉曼（英国包机）</td>
                    <td className="p-4">视出发法域而定</td>
                    <td className="p-4 font-semibold text-amber-700 dark:text-amber-400">不当然落入 SHY-YOLCU</td>
                    <td className="p-4">关键不是目的地在土耳其，而是航班从哪里起飞</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Scale className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              SHY-PASS 下常见赔偿金额是多少？
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">国际航班</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>1500 公里及以下：通常为 250 欧元等值土耳其里拉</li>
                  <li>1500 至 3500 公里：通常为 400 欧元等值土耳其里拉</li>
                  <li>3500 公里以上：通常为 600 欧元等值土耳其里拉</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">土耳其国内航班</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>通常为 100 欧元等值土耳其里拉</li>
                  <li>以购票当天的土耳其央行外汇卖出价换算</li>
                  <li>若改签到替代航班、到达时间差较小，赔偿可能被减半</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              这里最值得注意的是：土耳其规则在赔偿结构上看起来很像 EU261，
              但适用边界不一样。乘客最容易犯的错误，就是看到 “250/400/600 欧元”
              就以为自己一定在走欧盟法。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              延误时，你可以要求哪些照护和改签？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>土耳其规则对长时间延误也规定了航空公司的照护义务，大致逻辑如下：</p>
              <ul className="space-y-2">
                <li>短程或国内航班达到约 2 小时起，乘客通常应获得基本照护。</li>
                <li>1500 至 3500 公里航班达到约 3 小时起，应提供更完整的餐饮照护。</li>
                <li>3500 公里以上航班达到约 4 小时起，也进入照护范围。</li>
                <li>如果延误达到 5 小时，乘客通常可以选择放弃旅行并要求退款，或要求改签到最终目的地。</li>
                <li>如需过夜，航空公司通常还应承担酒店和机场往返交通。</li>
              </ul>
              <p>
                这些权利对在 <strong>伊斯坦布尔 IST</strong>、<strong>萨比哈 SAW</strong>、
                <strong>安塔利亚 AYT</strong> 机场滞留的乘客尤其关键，因为旺季时航司最容易先口头安抚，
                却不主动给书面权利说明。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
              哪些情况常常根本不受 EU261 保护？
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>伊斯坦布尔 → 法兰克福，由 Turkish Airlines 执飞。</li>
              <li>安塔利亚 → 慕尼黑，由 Pegasus 或 SunExpress 执飞。</li>
              <li>土耳其国内航班，例如伊斯坦布尔 → 博德鲁姆。</li>
            </ul>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-200">
              这些航班里，乘客常被航司一句 “EU261 不适用” 打发走，
              于是误以为自己完全没有权利。实际上，很多案件只是
              <strong>不受欧盟法规保护</strong>，并不等于
              <strong>不受任何规则保护</strong>。这正是 SHY-YOLCU 最有价值的地方。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              遇到取消、拒载或大延误后，正确索赔顺序是什么？
            </h2>
            <ol className="list-decimal space-y-3 pl-6 text-slate-700 dark:text-slate-300">
              <li>先确认航班适用的是 EU261、SHY-YOLCU，还是两者都需要比较。</li>
              <li>保留登机牌、订票确认、改签通知、短信、邮件和机场消费票据。</li>
              <li>要求航空公司书面说明延误或取消原因，并确认是否提供餐饮、酒店和地面交通。</li>
              <li>向实际承运航司提交索赔或申诉。</li>
              <li>如果航空公司在合理周期内不处理，或回复明显错误，再升级到正式投诉渠道。</li>
            </ol>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              按土耳其民航局公开说明，乘客通常应先向航空公司申诉；若约 6 周内未收到回复，
              或对回复不满意，才进一步向主管机构提交投诉。
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定自己该走 EU261 还是 SHY-PASS？</h2>
            <p className="mb-6 text-slate-300">
              这是土耳其航班索赔里最常见、也最容易出错的一步。先确认法律路径，
              再决定是主张赔偿、退款、改签还是酒店餐饮费用。
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
                  SHY-PASS 和 EU261 可以同时主张吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不是所有案件都能“双重索赔”。多数时候要先判断哪套规则更直接适用。
                  某些土耳其出发飞欧盟、由欧盟航司执飞的航班，需要先看 EU261 是否已覆盖。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  包机航班能不能用 SHY-YOLCU？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  通常可以。土耳其官方规则覆盖定期和非定期航班，但前提仍然是该航班落入其地域和承运人范围。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Turkish Airlines 说是天气原因，我还可以索赔吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  可能仍需继续核实。真正的恶劣天气、空管限制等情形可能构成例外，但很多案件里，
                  航司给出的理由并不完整，仍需结合实际航班记录和前序航班情况判断。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  从安塔利亚飞回欧洲，旅游公司要负责赔偿吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  造成航班延误、取消或拒载的直接责任主体，通常仍是实际承运航空公司。
                  旅行社或打包旅游公司不自动替代航司承担这类法定航班赔偿。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您还不确定土耳其航班应先按哪套规则分析，可以先阅读
                <Link
                  href="/zh/blog/eu261-turkey-flights-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《土耳其航班也能拿 EU261 赔偿吗？》
                </Link>
                。
              </p>
              <p>
                如果您的问题属于转机失败，也可以继续看
                <Link
                  href="/zh/blog/amsterdam-schiphol-missed-connection-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《错过转机赔偿指南》
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
