import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Plane,
  XCircle,
} from "lucide-react";

export default function Eu261FlightEligibilityChecklist() {
  return (
    <LayoutZh>
      <SEO
        title="怎么快速判断一趟航班是否受 EU261 保护？【检查清单】"
        description="不知道自己的航班能不能走 EU261？本文用最实用的 checklist 讲清出发地、承运人、最终目的地、联程票和第三国返欧的核心判断顺序。"
        url="https://problemlot.com/zh/blog/eu261-flight-eligibility-checklist"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "怎么快速判断一趟航班是否受 EU261 保护？【检查清单】",
            description:
              "用 checklist 解释 EU261 适用范围、出发地、承运人、联程票和第三国返欧判断顺序的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/eu261-flight-eligibility-checklist",
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
                name: "是不是只要飞欧洲就受 EU261 保护？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不是。关键不是地理上“靠近欧洲”，而是出发地、目的地和实际承运人是否落入法规适用范围。",
                },
              },
              {
                "@type": "Question",
                name: "第三国飞欧盟时，为什么承运人身份这么重要？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "因为很多第三国出发飞欧盟的案件里，是否受 EU261 保护，往往取决于实际承运人是不是欧盟航空公司。",
                },
              },
              {
                "@type": "Question",
                name: "联程票和分开买票会改变判断吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "会。联程票通常更容易按整段行程和最终目的地来分析；分开买票则常常要分段判断，保护明显更弱。",
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
            <span className="text-slate-900 dark:text-white">EU261 检查清单</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ClipboardList className="h-4 w-4" />
              赔偿基础
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              怎么快速判断一趟航班是否受 EU261 保护？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客不是不懂赔偿金额，而是从第一步就卡住了: 这趟航班到底有没有进入 EU261 的范围。
              下面这份清单，就是给这个问题准备的。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 7 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">最短判断公式</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  通常更容易受保护
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>从欧盟机场起飞</li>
                  <li>第三国起飞到欧盟，且实际承运人为欧盟航司</li>
                  <li>欧盟起点的联程票</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                  <XCircle className="h-5 w-5" />
                  通常不受保护
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>第三国起飞到欧盟，非欧盟航司执飞</li>
                  <li>纯第三国内部航班</li>
                  <li>很多分开买票的自助中转组合</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想用这份清单快速判断自己的航班？</h2>
            <p className="mb-6 text-blue-100">
              如果您不确定自己的航班到底在不在 EU261 范围内，
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
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">5 步检查清单</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  1. 先看起飞地
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  如果航班从欧盟机场起飞，通常更容易进入 EU261 范围，无论承运人是哪国航司。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  2. 再看是不是从第三国飞回欧盟
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这类案件里，实际承运人是不是欧盟航司往往非常关键。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  3. 确认 actual carrier
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  票面品牌和实际执飞方不一定相同，而法律结论常常取决于后者。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  4. 判断是不是联程票
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  联程票通常更容易按整段行程和最终目的地来分析；分开买票则常常只能分段看。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  5. 最后再看延误原因和最终结果
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  进了适用范围，不代表一定能赔；还要继续判断最终到达晚点、取消、拒载和理由是否满足门槛。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              必须说清楚：不是“飞欧洲”就自动受保护
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                很多乘客会自然地把“目的地在欧洲”理解成“适用欧盟规则”。
                这在法律上并不总成立。
              </p>
              <p>
                真正关键的是：
                您从哪里起飞、谁实际执飞、是不是联程票，以及整段结构怎么组合。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定自己现在卡在清单的哪一步？</h2>
            <p className="mb-6 text-slate-300">
              只要您有航线、承运人和订票结构，我们就能先把这趟航班是否进入 EU261 保护范围判断清楚。
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
                  只要飞欧洲就一定能走 EU261 吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。第三国返欧时，实际承运人身份常常会直接影响结论。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  实际承运人为什么这么重要？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  因为很多法规适用边界和索赔对象，最终都围绕实际执飞方来判断。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  联程票和分开买票会改变 EU261 判断吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  会。联程通常更容易按整段来分析，分开买票则常常保护明显更弱。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您还没分清实际承运人，继续看
                <Link
                  href="/zh/blog/actual-carrier-charter-flight-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《包机里谁才是实际承运人？》
                </Link>
                。
              </p>
              <p>
                如果您的问题更偏向转机结构，也建议继续读
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《什么叫最终目的地？》
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
