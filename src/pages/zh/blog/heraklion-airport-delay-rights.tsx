import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Plane, Wind } from "lucide-react";

export default function HeraklionAirportDelayRights() {
  return (
    <LayoutZh>
      <SEO
        title="伊拉克利翁机场延误怎么办？HER 航班赔偿指南【2026】"
        description="在克里特伊拉克利翁机场 HER 遇到航班延误、取消或改到次日，什么时候还能拿 EU261？本文讲清岛屿机场、大风、过夜和赔偿边界。"
        url="https://problemlot.com/zh/blog/heraklion-airport-delay-rights"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"伊拉克利翁机场延误怎么办？HER 航班赔偿指南【2026】",
        description:"解释伊拉克利翁机场 HER 延误、取消、大风与 EU261 边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/heraklion-airport-delay-rights"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"HER 延误时，大风就一定免赔吗？","acceptedAnswer":{"@type":"Answer","text":"不一定。真正恶劣天气可能构成例外，但并不是所有“风大”都自动让航司免责。"}},
          {"@type":"Question","name":"如果我在 HER 被改到次日，酒店谁负责？","acceptedAnswer":{"@type":"Answer","text":"在很多场景里，航空公司仍应承担照护义务，包括住宿、餐饮和必要交通。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">HER 延误指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              机场指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              伊拉克利翁机场延误怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              HER 最常见的问题是岛屿机场典型组合：大风、旺季高流量、返程排队和“今晚到底飞不飞”。越是这种场景，越要把天气理由和航司照护义务分开看。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><CheckCircle2 className="h-5 w-5" />先盯住</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>书面延误原因</li>
                  <li>最终改签到何时</li>
                  <li>酒店和交通是否已安排</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400"><Wind className="h-5 w-5" />最容易误区</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>听到天气就立刻放弃</li>
                  <li>没拿到任何书面说明</li>
                  <li>自己订酒店却不留票据</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断 HER 这次延误还有没有赔偿空间？</h2>
            <p className="mb-6 text-blue-100">如果您已经在伊拉克利翁被延误、取消或改到次日，现在就可以先做一次免费资格检查。</p>
            <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50">免费检查我的航班<ArrowRight className="h-5 w-5" /></a>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
