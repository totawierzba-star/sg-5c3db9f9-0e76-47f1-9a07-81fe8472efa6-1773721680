import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, Clock3, FileText, Plane, Shield } from "lucide-react";

export default function ShanghaiPudongDelayedFlightCompensation() {
  return (
    <LayoutZh>
      <SEO
        title="上海浦东机场航班延误赔偿指南【2026】飞欧洲如何判断能否拿到 €600"
        description="从上海浦东机场飞往法兰克福、巴黎、阿姆斯特丹或华沙时航班延误了？了解哪些航班受 EU261 保护、何时能拿到 €600、应该保存哪些证据。"
        url="https://problemlot.com/zh/blog/shanghai-pudong-delayed-flight-compensation"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "上海浦东机场航班延误赔偿指南【2026】飞欧洲如何判断能否拿到 €600",
            description:
              "从上海浦东机场飞往欧洲的航班延误后，中国乘客如何判断是否受 EU261 保护的实用指南。",
            datePublished: "2026-03-12",
            dateModified: "2026-03-12",
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
                name: "从上海浦东飞法兰克福的航班延误 4 小时，能拿到赔偿吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "如果是汉莎、法航、KLM、LOT 等欧盟航空公司执飞，并且到达延误超过 3 小时，通常可以根据 EU261 申请 €600 赔偿。",
                },
              },
              {
                "@type": "Question",
                name: "从上海浦东乘坐中国航空公司的航班飞欧洲，EU261 适用吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不适用。如果航班从中国出发，且实际承运人不是欧盟航空公司，EU261 一般不会保护该航班。",
                },
              },
              {
                "@type": "Question",
                name: "我需要保存哪些材料？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "请保留登机牌、电子客票、航班延误通知、机场屏幕照片、重订航班信息以及因延误产生的餐饮和酒店票据。",
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
            <span className="text-slate-900 dark:text-white">上海浦东机场延误赔偿</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              机场指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              上海浦东机场航班延误赔偿指南
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              重点不是您是不是中国乘客，而是这趟航班是否由欧盟航空公司执飞，以及最终到达时间是否晚了 3 小时以上。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-03-12</span>
              <span>•</span>
              <span>阅读时间 11 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看结论</h2>
            </div>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                从上海浦东机场出发的欧洲航线，<strong>只有部分航班</strong>受 EU261 保护。
                最关键的判断标准是：实际承运人是否为欧盟航空公司。
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                  <h3 className="mb-2 font-bold text-green-700 dark:text-green-400">
                    可以重点关注
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>汉莎、法航、KLM、LOT、芬兰航空等欧盟航司</li>
                    <li>到达最终目的地延误超过 3 小时</li>
                    <li>延误原因不是极端天气或机场关闭</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                  <h3 className="mb-2 font-bold text-red-700 dark:text-red-400">
                    常见误区
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>中国出发就一定不能索赔</li>
                    <li>只看起飞延误，不看最终到达时间</li>
                    <li>拿了代金券就一定不能再要现金赔偿</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              哪些浦东出发航班最可能符合条件？
            </h2>
            <div className="overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white">
                    <th className="p-4">航线示例</th>
                    <th className="p-4">实际承运人</th>
                    <th className="p-4">EU261 概率</th>
                    <th className="p-4">常见金额</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4">PVG → FRA</td>
                    <td className="p-4">Lufthansa</td>
                    <td className="p-4">高</td>
                    <td className="p-4">€600</td>
                  </tr>
                  <tr>
                    <td className="p-4">PVG → CDG</td>
                    <td className="p-4">Air France</td>
                    <td className="p-4">高</td>
                    <td className="p-4">€600</td>
                  </tr>
                  <tr>
                    <td className="p-4">PVG → AMS</td>
                    <td className="p-4">KLM</td>
                    <td className="p-4">高</td>
                    <td className="p-4">€600</td>
                  </tr>
                  <tr>
                    <td className="p-4">PVG → WAW</td>
                    <td className="p-4">LOT</td>
                    <td className="p-4">高</td>
                    <td className="p-4">€600</td>
                  </tr>
                  <tr>
                    <td className="p-4">PVG → FRA</td>
                    <td className="p-4">Air China</td>
                    <td className="p-4">通常不适用</td>
                    <td className="p-4">取决于航司政策</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <CheckCircle2 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              延误当天应该立刻做什么？
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  1. 保存登机牌和航变通知
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  电子邮件、短信、App 推送和机场大屏照片都可以帮助证明延误事实和时间线。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  2. 记录最终到达时间
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  EU261 看的是最终目的地的到达延误，而不是单纯的起飞延误。联程票尤其要注意。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  3. 保留支出凭证
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  饮食、交通、住宿等合理支出，除了固定赔偿外，还可能单独报销。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-amber-600 dark:text-amber-400" />
              航空公司最常用的拒赔说法
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>“这是空管问题，所以我们不承担责任。”</li>
              <li>“您已经接受改签，因此没有赔偿资格。”</li>
              <li>“这是运营调整，不属于取消。”</li>
              <li>“您是从中国出发，所以 EU261 不适用。”</li>
            </ul>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              这些说法并不总是成立。是否属于特殊情况，要看具体原因和航空公司是否已采取合理措施。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <FileText className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              与本文一起阅读
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/zh/blog/air-china-eu261-compensation-rules"
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:ring-blue-300 dark:bg-gray-800 dark:ring-gray-700"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  中国国际航空 Air China 能申请 EU261 吗？
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  适合对“从中国出发但承运人不同”还有疑问的读者。
                </p>
              </Link>
              <Link
                href="/zh/blog/amsterdam-schiphol-missed-connection-compensation"
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:ring-blue-300 dark:bg-gray-800 dark:ring-gray-700"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  史基浦机场错过转机怎么办？
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  如果浦东出发后在阿姆斯特丹误机，这篇会更具体。
                </p>
              </Link>
            </div>
          </section>

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">想直接检查自己的航班？</h2>
            <p className="mb-6 text-blue-100">
              如果您是从上海飞欧洲或经欧洲转机的乘客，现在就可以先做一次免费资格判断。
            </p>
            <a
              href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              免费检查赔偿资格
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </article>
    </LayoutZh>
  );
}
