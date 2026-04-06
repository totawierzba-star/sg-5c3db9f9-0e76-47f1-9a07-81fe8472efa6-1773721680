import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bed,
  CheckCircle2,
  Hotel,
  Plane,
  Scale,
  WalletCards,
} from "lucide-react";

export default function AllInclusiveDelayedFlightHotelLoss() {
  return (
    <LayoutZh>
      <SEO
        title="All Inclusive 套餐遇上航班延误：少住一晚酒店谁赔？【2026】"
        description="包机或旅游套餐延误后，丢掉第一晚酒店、接送和度假时间，应该找航空公司还是旅行社？本文讲清 EU261、套餐合同责任和不受欧洲法规保护的情形。"
        url="https://problemlot.com/zh/blog/all-inclusive-delayed-flight-hotel-loss"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "All Inclusive 套餐遇上航班延误：少住一晚酒店谁赔？【2026】",
            description:
              "解释度假套餐中航班延误、酒店晚数损失、接送失败和 EU261 / 套餐责任边界的中文指南。",
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
                "https://problemlot.com/zh/blog/all-inclusive-delayed-flight-hotel-loss",
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
                name: "航班延误导致我少住一晚 All Inclusive 酒店，EU261 会赔这晚房费吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不会直接按酒店实际损失金额赔付。EU261 主要提供标准化航班赔偿和照护义务；丢失酒店晚数、接送和套餐缩水，往往要另外评估套餐组织者或旅行社的责任。",
                },
              },
              {
                "@type": "Question",
                name: "如果是包机延误，我应该先找航空公司还是旅行社？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "若您主张的是航班法定赔偿，通常先找实际承运航空公司；若您主张的是少住酒店、接送失败或假期缩水，则通常要再评估旅行社或套餐组织者的责任。",
                },
              },
              {
                "@type": "Question",
                name: "从土耳其飞回欧洲的返程延误，为什么有时不能用 EU261？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "因为从第三国飞往欧盟的航班，通常只有在实际承运人为欧盟航司时才受 EU261 保护。若由非欧盟航司执飞，常常需要改看当地乘客权益规则。",
                },
              },
              {
                "@type": "Question",
                name: "旅行社是不是必须补回我损失的第一晚度假？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定自动成立，但若套餐整体未按约定履行，组织者通常可能承担合同层面的减价、补偿或协助义务，需要结合套餐合同和实际损失分析。",
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
            <span className="text-slate-900 dark:text-white">All Inclusive 航班延误</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Scale className="h-4 w-4" />
              度假套餐
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              All Inclusive 套餐遇上航班延误：少住一晚酒店谁赔？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              对很多乘客来说，真正刺痛的不是飞机晚到 4 小时，而是本来 7 晚的假期一下变成 6 晚，
              接机没了、晚餐没了、第一天海边度假也没了。问题是，这些损失到底该找谁？
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
                如果航班延误触发 EU261 或其他乘客权益规则，
                <strong>航空公司</strong>通常负责标准化的航班赔偿与照护；
                如果您损失的是酒店晚数、接送、行程缩水或套餐价值，
                <strong>旅行社 / 套餐组织者</strong>往往才是另外一条责任路径。
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                  <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                    <CheckCircle2 className="h-5 w-5" />
                    航空公司通常负责
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>延误、取消、拒载下的标准化航班赔偿</li>
                    <li>餐饮、酒店、地面交通等照护</li>
                    <li>改签或退款的航班层面义务</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                  <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                    <WalletCards className="h-5 w-5" />
                    旅行社常要另行评估
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>第一晚酒店损失</li>
                    <li>接机、地接、活动和餐食缩水</li>
                    <li>套餐整体未按约履行</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次度假损失能不能一起追？</h2>
            <p className="mb-6 text-blue-100">
              如果您已经因为航班延误错过酒店入住、接机或套餐项目，
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
              <Hotel className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              为什么 “少住一晚酒店” 不是单纯的航班赔偿问题？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为这里实际上叠了两层问题。第一层是航班本身是否延误、取消或拒载，
                第二层是这个航班异常有没有把整个旅游套餐一起拖坏。
              </p>
              <p>
                比如您买的是“航班 + 酒店 + 接送”的 All Inclusive 套餐，
                飞机晚到 8 小时后，您凌晨才进酒店，第一天午餐、接机服务和酒店晚数都受影响。
                这时，<strong>航班法定赔偿</strong>和<strong>套餐履约问题</strong>往往需要分开看。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              什么时候受 EU261 保护，什么时候不受？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                这里必须讲得非常清楚：
                <strong>您买的是不是 All Inclusive</strong>，并不决定 EU261 是否适用。
                决定因素仍然是航班本身的出发地、目的地和实际承运人。
              </p>
              <ul className="space-y-2">
                <li>欧盟出发去土耳其、希腊、埃及等度假地的航班，通常受 EU261 保护。</li>
                <li>从第三国飞回欧盟，只有实际承运人为欧盟航司时，通常才受 EU261 保护。</li>
                <li>从土耳其或其他第三国返欧、由非欧盟航司执飞时，通常不受 EU261 保护。</li>
                <li>即便不受 EU261 保护，仍可能适用当地乘客权益规则或套餐合同责任。</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">5 个典型场景，直接看怎么拆责任</h2>
            <div className="overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white">
                    <th className="p-4">场景</th>
                    <th className="p-4">EU261 常是否适用</th>
                    <th className="p-4">航班层面先找谁</th>
                    <th className="p-4">酒店/套餐损失另找谁</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4">柏林 → 安塔利亚，包机延误 7 小时</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">实际承运航司</td>
                    <td className="p-4">套餐组织者另行评估</td>
                  </tr>
                  <tr>
                    <td className="p-4">安塔利亚 → 柏林，Pegasus 返程延误过夜</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不适用</td>
                    <td className="p-4">先看土耳其规则和实际航司</td>
                    <td className="p-4">旅行社 / 组织者另行评估</td>
                  </tr>
                  <tr>
                    <td className="p-4">华沙 → 罗得岛，度假首日完全损失</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">航空公司</td>
                    <td className="p-4">套餐合同路径</td>
                  </tr>
                  <tr>
                    <td className="p-4">赫尔格达 → 巴黎，非欧盟航司返程取消</td>
                    <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不适用</td>
                    <td className="p-4">看当地规则 / 承运人</td>
                    <td className="p-4">组织者责任更关键</td>
                  </tr>
                  <tr>
                    <td className="p-4">伊拉克利翁 → 维也纳，欧盟航司返程大延误</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">航空公司</td>
                    <td className="p-4">如有额外缩水，再看套餐路径</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Bed className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              哪些损失更可能属于套餐组织者责任？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                根据欧盟包价旅游规则的一般逻辑，组织者要对套餐中各项旅游服务的正常履行负责。
                所以如果问题不只是“飞机晚到”，而是整个套餐明显变差，常常就不止一条索赔路径。
              </p>
              <ul className="space-y-2">
                <li>第一晚或第一整天假期价值损失。</li>
                <li>接送服务未履行或需自行额外支付交通。</li>
                <li>因晚到导致已付晚餐、活动、Spa 或 экскурсии 无法使用。</li>
                <li>酒店天数缩水，但套餐总价未调整。</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              航空公司又必须承担什么？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                如果航班落入 EU261 或其他适用乘客权益规则，航空公司通常至少要面对三类义务：
              </p>
              <ul className="space-y-2">
                <li>达到门槛时的标准化赔偿，例如 €250、€400、€600。</li>
                <li>餐饮、住宿、地面交通等照护。</li>
                <li>改签至最终目的地或退款的选择。</li>
              </ul>
              <p>
                但这里也要说清楚：
                <strong>EU261 本身并不自动按您少住的酒店实际价格来赔</strong>。
                它更多是标准化保护，而不是完整覆盖所有度假损失。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
              最容易踩坑的 3 个误区
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>以为只要有 All Inclusive 套餐，就一切都只能找旅行社。</li>
              <li>以为拿了 EU261 赔偿，就不能再评估套餐缩水损失。</li>
              <li>以为从第三国返欧的所有度假航班都自动受欧洲法规保护。</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定该先追航司还是套餐组织者？</h2>
            <p className="mb-6 text-slate-300">
              先把航班法定权利和套餐合同损失拆开，通常才能把这类“少住一晚酒店”的案件做对。
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
                  航班延误 6 小时，我可以同时追航司和旅行社吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  很多案件里可以分别评估两条路径。航司负责航班层面的法定赔偿和照护，
                  而旅行社或组织者负责套餐整体是否按约履行，这不是完全相同的一种损失。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  第一晚酒店房费能不能直接按发票金额全额向航司要？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  通常不能简单这样理解。EU261 不是按酒店实际价格逐项赔付的制度；
                  如果这部分是套餐损失，更常见的是从套餐合同责任角度另行主张。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  从安塔利亚返欧的航班晚到了，为什么说可能不受 EU261 保护？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  因为土耳其属于欧盟外国家。从土耳其飞往欧盟时，若实际承运人不是欧盟航司，
                  则通常不在 EU261 的保护范围内。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  旅行社说“这是航空公司的问题”，这样就结束了吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。航班层面的责任确实通常先看航空公司，但如果您的套餐服务整体没有按约履行，
                  旅行社或组织者仍可能负有自己的合同责任。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您还没分清包机和实际承运人的关系，先读
                <Link
                  href="/zh/blog/charter-vs-scheduled-flight-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《包机延误了该找旅行社还是航空公司？》
                </Link>
                。
              </p>
              <p>
                如果返程涉及土耳其，也建议继续看
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
