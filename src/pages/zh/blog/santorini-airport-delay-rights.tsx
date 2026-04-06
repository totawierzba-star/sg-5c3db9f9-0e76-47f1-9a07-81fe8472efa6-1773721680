import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, MapPin, Plane, Wind } from "lucide-react";

export default function SantoriniAirportDelayRights() {
  return (
    <LayoutZh>
      <SEO
        title="圣托里尼机场延误怎么办？JTR 航班赔偿指南【2026】"
        description="在圣托里尼机场 JTR 遇到航班延误、取消或大风导致混乱时，什么时候还能拿 EU261？本文讲清天气理由、岛屿航线和过夜安置边界。"
        url="https://problemlot.com/zh/blog/santorini-airport-delay-rights"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"圣托里尼机场延误怎么办？JTR 航班赔偿指南【2026】",
        description:"解释圣托里尼机场 JTR 延误、取消、大风与 EU261 边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/santorini-airport-delay-rights"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"圣托里尼机场大风延误时，一定不能拿赔偿吗？","acceptedAnswer":{"@type":"Answer","text":"不一定。真正恶劣天气可能构成例外，但并不是所有“风大”说法都自动免赔。"}},
          {"@type":"Question","name":"JTR 取消后如果被改到次日，酒店谁负责？","acceptedAnswer":{"@type":"Answer","text":"在很多场景里，航空公司仍需承担照护义务，包括住宿和必要交通安排。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">圣托里尼机场延误</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              机场指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              圣托里尼机场延误怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              JTR 的麻烦往往不是普通晚点，而是“大风、岛屿运行能力、次日改签和酒店爆满”一起出现。
              所以这里最重要的不是只听一句“weather”，而是把证据和现场安置都抓住。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><CheckCircle2 className="h-5 w-5" />先看关键</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>是否真的因天气无法运行</li>
                  <li>是否被改到次日</li>
                  <li>酒店和交通是否被安排</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400"><Wind className="h-5 w-5" />最容易误区</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>风大就一定免赔</li>
                  <li>岛屿机场就没有照护权利</li>
                  <li>没保留改签和酒店票据</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断 JTR 这次延误还有没有赔偿空间？</h2>
            <p className="mb-6 text-blue-100">如果您已经在圣托里尼被改到次日或取消，现在就可以先做一次免费资格检查。</p>
            <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50">免费检查我的航班<ArrowRight className="h-5 w-5" /></a>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
