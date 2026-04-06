import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Hotel,
  MapPin,
  Plane,
  XCircle,
} from "lucide-react";

export default function DalamanBodrumCancelledFlightRights() {
  return (
    <LayoutZh>
      <SEO
        title="达拉曼和博德鲁姆航班取消怎么办？返程酒店与赔偿指南【2026】"
        description="在达拉曼 DLM 或博德鲁姆 BJV 返欧时航班取消、改到次日或被迫滞留，什么时候受 EU261 保护，什么时候不受？本文讲清酒店、返程改签和赔偿边界。"
        url="https://problemlot.com/zh/blog/dalaman-bodrum-cancelled-flight-rights"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "达拉曼和博德鲁姆航班取消怎么办？返程酒店与赔偿指南【2026】",
            description:
              "面向中文乘客的达拉曼与博德鲁姆返程航班取消指南，覆盖 DLM、BJV、酒店安置、改签与 EU261 边界。",
            author: { "@type": "Organization", name: "ProblemLot.com" },
            publisher: {
              "@type": "Organization",
              name: "ProblemLot.com",
              logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" },
            },
            datePublished: "2026-04-06",
            dateModified: "2026-04-06",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://problemlot.com/zh/blog/dalaman-bodrum-cancelled-flight-rights",
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
                name: "从达拉曼或博德鲁姆返欧的航班取消后，一定能拿 EU261 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。关键看返程从哪里起飞、由谁实际执飞以及是否仍在 EU261 保护边界内。土耳其返欧时，很多案件并不自动受欧盟法规保护。",
                },
              },
              {
                "@type": "Question",
                name: "航班取消到第二天，航空公司必须提供酒店吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "在很多场景里需要。若乘客被迫过夜，航空公司通常仍负有照护义务，包括住宿、餐饮和必要交通安排。",
                },
              },
              {
                "@type": "Question",
                name: "为什么去程能赔，返程从 DLM/BJV 却可能不能？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "因为 EU261 是按单段行程的起点、终点和实际承运人判断，而不是按整次假期判断。返程从土耳其起飞时，法律结论可能完全不同。",
                },
              },
              {
                "@type": "Question",
                name: "如果是旅游套餐，额外多住一晚酒店费用谁负责？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "航班层面的法定赔偿通常针对航空公司；而套餐相关的酒店和地接损失，很多时候还要另外看旅行社或组织者责任。",
                },
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">达拉曼 / 博德鲁姆返程</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              机场指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              达拉曼和博德鲁姆航班取消怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              在土耳其海岸度假最怕的不是去程，而是返程崩掉。很多乘客在 DLM 或 BJV 被突然改到次日，
              一边担心酒店和接送，一边又不知道这趟返程到底能不能按欧洲法规索赔。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 11 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  常见先看这些
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>实际承运人是谁</li>
                  <li>返程是否从土耳其起飞</li>
                  <li>是否被改到次日并需要过夜</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-red-700 dark:text-red-400">
                  <XCircle className="h-5 w-5" />
                  最常见误区
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>以为返程自动和去程同规则</li>
                  <li>以为不受 EU261 就完全没权利</li>
                  <li>把酒店与航班责任混成一条</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先确认 DLM / BJV 返程这趟有没有赔偿机会？</h2>
            <p className="mb-6 text-blue-100">
              如果您的达拉曼或博德鲁姆返程航班已经取消、改点或被迫过夜，
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

          <section className="mb-10 space-y-4 text-slate-700 dark:text-slate-300">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">为什么这两个机场的返程最容易出麻烦？</h2>
            <p>
              因为它们高度依赖旺季度假流量、包机和返欧潮。航班一旦取消，乘客不只是多等几个小时，
              而是经常直接变成“今晚住哪儿、明天怎么回、旅行社说找航司、航司说等通知”。
            </p>
            <p>
              这类案件里，一定要同时盯住两层问题：一层是航班本身有没有标准化赔偿空间，
              一层是航空公司是否立刻履行了酒店、餐饮和改签义务。
            </p>
          </section>

          <section className="mb-10 overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white">
                  <th className="p-4">场景</th>
                  <th className="p-4">EU261 常是否适用</th>
                  <th className="p-4">重点</th>
                  <th className="p-4">说明</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-gray-700">
                <tr>
                  <td className="p-4">维也纳 → 达拉曼，去程取消</td>
                  <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                  <td className="p-4">欧盟出发</td>
                  <td className="p-4">常可直接按 EU261 分析</td>
                </tr>
                <tr>
                  <td className="p-4">达拉曼 → 维也纳，返程改到次日</td>
                  <td className="p-4 font-semibold text-amber-700 dark:text-amber-400">需重判</td>
                  <td className="p-4">返程边界</td>
                  <td className="p-4">去程逻辑不自动延续</td>
                </tr>
                <tr>
                  <td className="p-4">博德鲁姆 → 柏林，非欧盟航司取消</td>
                  <td className="p-4 font-semibold text-red-700 dark:text-red-400">通常不适用</td>
                  <td className="p-4">第三国返欧</td>
                  <td className="p-4">常需改看土耳其规则</td>
                </tr>
                <tr>
                  <td className="p-4">BJV 返程滞留过夜</td>
                  <td className="p-4 font-semibold text-amber-700 dark:text-amber-400">赔偿另看</td>
                  <td className="p-4">照护义务</td>
                  <td className="p-4">酒店与交通非常关键</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">酒店和改签，先盯住这些权利</h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>若被改到次日，要求书面确认新的航班和出发时间。</li>
              <li>要求酒店、餐饮和往返机场交通，不要只听口头承诺。</li>
              <li>保留自己垫付的酒店、出租车和餐食票据。</li>
              <li>同时保存原始返程时间和航班取消通知。</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定返程酒店和赔偿该先找谁？</h2>
            <p className="mb-6 text-slate-300">
              只要有机场、航线、承运人和改签结果，就能先把航司责任和套餐责任分开判断。
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
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">返程取消后，我一定能拿 EU261 吗？</h3>
                <p className="text-slate-700 dark:text-slate-300">不一定，返程从土耳其起飞时必须重新判断法规边界和承运人结构。</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">酒店谁负责？</h3>
                <p className="text-slate-700 dark:text-slate-300">若被迫过夜，航空公司通常仍有照护义务，包括酒店和必要交通。</p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <p className="text-slate-700 dark:text-slate-300">
              先读
              <Link href="/zh/blog/antalya-charter-delay-guide" className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400">
                《安塔利亚机场包机延误怎么办？》
              </Link>
              ，再配合
              <Link href="/zh/blog/eu261-turkey-flights-compensation" className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400">
                《土耳其航班也能拿 EU261 赔偿吗？》
              </Link>
              一起判断返程边界。
            </p>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
