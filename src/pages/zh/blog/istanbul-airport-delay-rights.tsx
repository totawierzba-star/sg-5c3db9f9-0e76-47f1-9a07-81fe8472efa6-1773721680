import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, MapPin, Plane, XCircle } from "lucide-react";

export default function IstanbulAirportDelayRights() {
  return (
    <LayoutZh>
      <SEO
        title="伊斯坦布尔机场 IST 航班延误怎么办？乘客权利指南【2026】"
        description="在伊斯坦布尔机场 IST 遇到 Turkish Airlines 或其他航班延误、取消、错过联程后，什么时候受 EU261 保护，什么时候不受？本文讲清终点延误、过夜和赔偿边界。"
        url="https://problemlot.com/zh/blog/istanbul-airport-delay-rights"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"伊斯坦布尔机场 IST 航班延误怎么办？乘客权利指南【2026】",
        description:"解释伊斯坦布尔机场 IST 延误、取消、联程失败与赔偿边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/istanbul-airport-delay-rights"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"在 IST 延误就一定能拿 EU261 吗？","acceptedAnswer":{"@type":"Answer","text":"不一定。机场不是决定性因素。真正关键的是行程起点、实际承运人和最终目的地的延误结果。"}},
          {"@type":"Question","name":"Turkish Airlines 在 IST 延误后，什么时候常能走 EU261？","acceptedAnswer":{"@type":"Answer","text":"如果整段联程从欧盟起飞，很多案件仍可能适用 EU261；若从土耳其起飞返欧，则通常要改看土耳其规则。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">IST 延误指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              机场指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              伊斯坦布尔机场 IST 航班延误怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              IST 的问题通常不是一段航班晚一点，而是整个长途联程因此失控。对乘客来说，真正重要的是最终目的地是否严重晚到，以及今晚会不会被困在机场。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><CheckCircle2 className="h-5 w-5" />更可能有赔偿空间</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>欧盟起点联程</li>
                  <li>最终目的地晚到超过 3 小时</li>
                  <li>同一张订单的中转失败</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-red-700 dark:text-red-400"><XCircle className="h-5 w-5" />最容易失去 EU261</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>土耳其起点返欧</li>
                  <li>非欧盟航司从第三国出发</li>
                  <li>单独出票的自行中转</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断 IST 这趟延误有没有赔偿机会？</h2>
            <p className="mb-6 text-blue-100">如果您已经在 IST 晚点、误机、被改签到次日或长时间排队等待，现在就可以先做一次免费资格检查。</p>
            <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50">
              免费检查我的航班
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 space-y-4 text-slate-700 dark:text-slate-300">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">在 IST 最先判断什么？</h2>
            <ul className="space-y-3">
              <li>您的整段行程起点是不是欧盟。</li>
              <li>实际承运人是谁。</li>
              <li>是不是同一张联程票。</li>
              <li>真正到达最终目的地的时间。</li>
            </ul>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
