import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Plane,
  Scale,
  Ticket,
} from "lucide-react";

export default function ActualCarrierCharterFlightGuide() {
  return (
    <LayoutZh>
      <SEO
        title="包机里谁才是实际承运人？一文看懂该找谁索赔【2026】"
        description="旅行社卖的包机、旅游套餐和代码共享里，谁才是真正负责赔偿的实际承运人？本文讲清 actual carrier、售票方与旅行社的责任边界。"
        url="https://problemlot.com/zh/blog/actual-carrier-charter-flight-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "包机里谁才是实际承运人？一文看懂该找谁索赔【2026】",
            description:
              "解释包机、旅游套餐、代码共享和实际承运人之间关系的中文指南，帮助乘客判断该向谁主张航班赔偿。",
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
                "https://problemlot.com/zh/blog/actual-carrier-charter-flight-guide",
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
                name: "旅行社卖给我的包机，为什么不一定由旅行社负责航班赔偿？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "因为航班法定赔偿通常是针对实际承运航空公司，而不是售票或组织套餐的一方。旅行社可能承担套餐合同责任，但不自动替代航司承担航班赔偿。",
                },
              },
              {
                "@type": "Question",
                name: "actual carrier 到底怎么看？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常要看登机牌、订票确认、值机信息、航班实际运营方和机场显示信息。谁真正运营这架飞机，谁往往就是实际承运人。",
                },
              },
              {
                "@type": "Question",
                name: "代码共享航班里，挂谁的航班号最重要吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。是否适用 EU261、该找谁索赔，很多时候更关键的是实际承运人，而不是营销航司或挂票面的代码。",
                },
              },
              {
                "@type": "Question",
                name: "如果我把索赔发给旅行社而不是实际航司，会怎样？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "最常见的结果是时间被浪费。旅行社可能把您再推回航空公司，导致证据收集和处理节奏被拖慢。",
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
            <span className="text-slate-900 dark:text-white">实际承运人指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Scale className="h-4 w-4" />
              责任边界
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              包机里谁才是实际承运人？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              这是乘客最容易走错的一步。您以为自己是跟旅行社、OTA 或度假品牌“买了航班”，
              但真正决定赔偿责任的，很多时候不是谁卖给您，而是谁真的在运营那架飞机。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 9 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  通常要找的主体
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>实际运营该航班的航空公司</li>
                  <li>值机、登机和执行层面真正执飞的一方</li>
                  <li>在 EU261 下常被视为核心责任主体的一方</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>把旅行社当成航班赔偿第一责任人</li>
                  <li>只看票面品牌，不看实际执飞方</li>
                  <li>把营销航司和实际承运人混为一谈</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先确认这趟包机到底该找谁索赔？</h2>
            <p className="mb-6 text-blue-100">
              如果您的航班是旅行社卖的、套餐里带的、或者出现了多个品牌名字，
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
              <Building2 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              为什么“卖给您的人”不一定是负责赔偿的人？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为一张度假航班机票里，常常同时出现好几类角色：
                旅行社、OTA、旅游组织者、品牌方、营销航司和真正把飞机飞起来的运营航司。
              </p>
              <p>
                从乘客视角看，这些名字都像“对方公司”。但从赔偿逻辑看，
                真正重要的是谁在实际执行该航班。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Ticket className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              4 个地方最容易看出 actual carrier
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">订票确认</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  很多确认页会写明 “operated by …” 或等效说明。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">登机牌</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  实际值机和运营信息常常比营销品牌更可靠。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">机场航显和地勤</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  现场是谁在运营柜台、安排值机和改签，往往很有提示意义。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">航班历史记录</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  同一航班号背后实际长期由谁执飞，也能帮助判断责任方向。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              必须说清楚：旅行社责任和航司责任不是一回事
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                如果您在问的是
                <strong>航班延误、取消、拒载的法定赔偿</strong>，
                很多时候首先该看的仍是实际承运航空公司。
              </p>
              <p>
                如果您在问的是
                <strong>套餐缩水、酒店少住一晚、接送失败</strong>，
                那才更可能涉及旅行社或组织者的合同责任。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              什么时候 EU261 的判断也会受 actual carrier 影响？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                在一些第三国出发飞欧盟的案件里，是否受 EU261 保护，
                很多时候正取决于实际承运人是不是欧盟航空公司。
              </p>
              <p>
                这就是为什么只看“我买的是哪家票”远远不够。
                真正飞这架飞机的是谁，可能直接改变法律结论。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定该先找旅行社还是实际航司？</h2>
            <p className="mb-6 text-slate-300">
              只要您把票面信息、登机牌和航班号整理出来，通常就能先把责任方向判断清楚。
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
                  包机是旅行社打包的，所以一定找旅行社吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。航班赔偿通常先看实际承运航司，旅行社更多是在套餐合同损失层面可能承担责任。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  代码共享里，票面航司和实际执飞不一样怎么办？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  需要优先确认谁是实际执飞方。很多案件里，真正决定责任和法规适用范围的是实际承运人。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  如果我先去找了错误的主体，会有影响吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  最大影响通常是浪费时间，并延迟证据整理和正式索赔节奏。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您还在区分包机和旅行社责任，继续看
                <Link
                  href="/zh/blog/charter-vs-scheduled-flight-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《包机延误了该找旅行社还是航空公司？》
                </Link>
                。
              </p>
              <p>
                如果您的问题更像套餐缩水和少住酒店，也建议继续读
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
