import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Plane,
  Scale,
  ShieldAlert,
  XCircle,
} from "lucide-react";

export default function CharterVsScheduledFlightCompensation() {
  return (
    <LayoutZh>
      <SEO
        title="包机延误了该找旅行社还是航空公司？一文看懂赔偿责任【2026】"
        description="包机、旅游航班、All Inclusive 套餐延误后，到底谁负责赔偿？本文讲清 EU261 适用边界、旅行社与航空公司的责任分工，以及什么时候根本不受欧洲法规保护。"
        url="https://problemlot.com/zh/blog/charter-vs-scheduled-flight-compensation"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "包机延误了该找旅行社还是航空公司？一文看懂赔偿责任【2026】",
            description:
              "面向中文乘客的包机延误赔偿指南，解释包机与定期航班在 EU261 下的区别、旅行社和航空公司的责任边界，以及旅游套餐中的额外损失。",
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
                "https://problemlot.com/zh/blog/charter-vs-scheduled-flight-compensation",
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
                name: "包机延误后，我是不是只能找旅行社，不能找航空公司？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不是。若您的航班本身落入 EU261 或其他适用乘客权益规则，法定航班赔偿通常应向实际承运航空公司主张，而不是先找旅行社。",
                },
              },
              {
                "@type": "Question",
                name: "包机航班会不会因为是旅游套餐就自动失去 EU261 保护？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不会。包机并不自动排除 EU261。关键看航班从哪里起飞、飞往哪里、以及由谁实际执飞。",
                },
              },
              {
                "@type": "Question",
                name: "如果我因为包机延误损失了一晚酒店，能向谁追？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "法定航班赔偿通常针对航空公司；而丢失酒店、地接、行程缩水等打包旅游损失，往往要另外评估旅行社或套餐组织者的责任。",
                },
              },
              {
                "@type": "Question",
                name: "从土耳其飞回欧洲的包机，一定受 EU261 保护吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。如果航班从土耳其起飞且实际承运人不是欧盟航空公司，通常不受 EU261 保护，这类案件往往要改看土耳其乘客权益规则。",
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
            <span className="text-slate-900 dark:text-white">包机赔偿责任</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Scale className="h-4 w-4" />
              包机权益
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              包机延误了该找旅行社还是航空公司？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              这是暑期和节假日最常见的误区之一。很多乘客一听到“包机”“旅游套餐”“All Inclusive”，
              就以为只能找旅行社吵，不能直接向航空公司索赔。实际上，这往往正好错过了最有力的法律路径。
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
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">最短答案</h2>
            </div>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                包机和定期航班在乘客权益上最大的区别，
                <strong>通常不是赔偿规则本身</strong>，而是乘客更容易搞错
                <strong>谁是实际承运人</strong>、<strong>谁该承担哪一类责任</strong>。
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                  <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                    <CheckCircle2 className="h-5 w-5" />
                    常见正确方向
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>法定航班赔偿通常找实际执飞的航空公司</li>
                    <li>旅行社更多涉及套餐合同和额外损失</li>
                    <li>包机也可能完全受 EU261 保护</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                  <h3 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                    <XCircle className="h-5 w-5" />
                    常见错误方向
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>以为“旅游航班”就没有赔偿</li>
                    <li>只追旅行社，忽略实际航司责任</li>
                    <li>把“套餐损失”和“航班法定赔偿”混成一件事</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先确认这趟包机该找谁索赔？</h2>
            <p className="mb-6 text-blue-100">
              如果您的包机、旅游航班或假日航线已经延误、取消或拒载，
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
              <Briefcase className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              包机和定期航班，法律上到底差在哪？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                对乘客来说，“包机”和“定期航班”首先是销售方式的差别，不一定意味着权利更少。
                您可能是在旅行社网站、OTA、线下门店或者全包旅游套餐里买到这张票，
                但真正执行航班的仍然是一家航空公司。
              </p>
              <p>
                在 EU261 的逻辑下，乘客法定赔偿通常是针对
                <strong>实际承运航空公司</strong>，也就是实际执飞这趟航班的那家公司。
                所以，一个打着旅行社品牌售卖的包机，仍可能由 Smartwings、Corendon、SunExpress、
                Enter Air 或其他航司执飞，而索赔责任通常也会落在这家航司身上。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              什么时候包机受欧洲法规保护，什么时候根本不受保护？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                这里一定要说清楚：
                <strong>是否是包机，不决定 EU261 适不适用</strong>。
                真正决定结果的，是航班的出发地、目的地以及实际承运人。
              </p>
              <ul className="space-y-2">
                <li>从欧盟机场出发的包机，通常受 EU261 保护。</li>
                <li>从欧盟外飞回欧盟的包机，只有在实际承运人为欧盟航司时，通常才受 EU261 保护。</li>
                <li>从土耳其、埃及等第三国飞回欧盟、由当地或非欧盟航司执飞的包机，通常不受 EU261 保护。</li>
                <li>不受 EU261 保护，不代表完全没有权利，可能仍受当地乘客权益规则约束。</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">6 个高频场景，直接看谁负责</h2>
            <div className="overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white">
                    <th className="p-4">场景</th>
                    <th className="p-4">EU261 是否常适用</th>
                    <th className="p-4">法定航班赔偿先找谁</th>
                    <th className="p-4">额外损失可能找谁</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4">华沙 → 安塔利亚，旅游包机延误 5 小时</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">实际执飞航空公司</td>
                    <td className="p-4">套餐组织者可另行评估</td>
                  </tr>
                  <tr>
                    <td className="p-4">安塔利亚 → 华沙，Pegasus 包机延误 6 小时</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不适用</td>
                    <td className="p-4">先看土耳其规则与承运航司</td>
                    <td className="p-4">旅行社套餐责任可另行分析</td>
                  </tr>
                  <tr>
                    <td className="p-4">布拉格 → 罗得岛，旅游包机被取消</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">实际承运航司</td>
                    <td className="p-4">旅行社对酒店缩水可另看合同</td>
                  </tr>
                  <tr>
                    <td className="p-4">赫拉克利翁 → 维也纳，欧盟航司包机大延误</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">实际承运航司</td>
                    <td className="p-4">若有打包套餐，可另外分析组织者责任</td>
                  </tr>
                  <tr>
                    <td className="p-4">沙姆沙伊赫 → 柏林，非欧盟航司包机取消</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不适用</td>
                    <td className="p-4">看当地规则与合同路径</td>
                    <td className="p-4">套餐组织者责任更重要</td>
                  </tr>
                  <tr>
                    <td className="p-4">巴黎 → 博德鲁姆，旅行社售卖但由 Corendon 执飞</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">Corendon 等实际执飞航司</td>
                    <td className="p-4">套餐减损可另向组织者追究</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              为什么很多人错把旅行社当成第一责任人？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为乘客在购买时看到的往往是旅游品牌，而不是最终执飞航司。
                再加上短信、值机信息、旅行单据上可能出现多个公司名字，
                乘客很容易把“卖给我套餐的人”和“真正造成航班延误的人”混为一谈。
              </p>
              <p>
                但在大多数航班赔偿案件里，核心问题仍是：
                <strong>哪家公司实际运营了这趟飞机</strong>。
                如果延误、取消、拒载触发的是 EU261 下的法定赔偿，
                通常首先要找的不是旅行社，而是实际承运人。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              旅行社什么时候仍然可能要负责？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                这部分必须和“航班法定赔偿”分开看。旅行社、旅游组织者或套餐销售方，
                常常不替代航空公司承担 EU261 赔偿，但他们仍可能对以下问题负有合同层面的责任：
              </p>
              <ul className="space-y-2">
                <li>因航班异常导致第一晚酒店、接送或已付活动无法使用。</li>
                <li>打包旅游整体服务明显缩水。</li>
                <li>在套餐改签、住宿安置、替代方案沟通上存在违约或误导。</li>
              </ul>
              <p>
                换句话说，乘客经常不是“二选一”，而是要把
                <strong>航空公司的航班赔偿责任</strong>和
                <strong>旅行社的套餐合同责任</strong>拆开处理。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
              3 个最危险的判断错误
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>看见“包机”就直接放弃 EU261。</li>
              <li>只向旅行社投诉，却完全不向实际航司保留索赔记录。</li>
              <li>从土耳其、埃及等地返欧时，以为所有返程都自动受欧盟法规保护。</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不知道该先找旅行社还是航空公司？</h2>
            <p className="mb-6 text-slate-300">
              先确认法律路径，再决定索赔对象，通常能避免最常见的时间浪费和证据断层。
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
                  包机航班也能拿到 €250、€400、€600 吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  可以，前提是这趟航班本身落入 EU261 适用范围，且延误、取消或拒载满足相应条件。
                  包机身份不会自动剥夺这项权利。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  我在旅行社买的票，为什么还要找航空公司？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  因为法定航班赔偿通常是针对实际承运航司，而不是售票方。谁卖给您机票，不一定等于谁对延误承担法定赔偿责任。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  All Inclusive 套餐少住一晚酒店，EU261 会赔吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  EU261 主要解决航班延误、取消、拒载带来的标准化航班赔偿与照护，不自动覆盖所有后续度假损失。
                  丢失酒店晚数、接送或活动损失，往往要另外从套餐合同角度评估。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  从安塔利亚飞回波兰的包机，一定没有欧盟赔偿吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不能一概而论。要看实际承运人是不是欧盟航司。如果由非欧盟航司执飞，通常不受 EU261 保护；
                  如果由欧盟航司执飞，则可能仍在保护范围内。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您的航线涉及土耳其返欧，先读
                <Link
                  href="/zh/blog/eu261-turkey-flights-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《土耳其航班也能拿 EU261 赔偿吗？》
                </Link>
                。
              </p>
              <p>
                如果航司是 Turkish Airlines、Pegasus 或土耳其包机，也建议继续看
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
