import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Plane, XCircle } from "lucide-react";

export default function DalamanAirportDelayRights() {
  return (
    <LayoutZh>
      <SEO
        title="达拉曼机场延误怎么办？DLM 航班赔偿指南【2026】"
        description="在达拉曼机场 DLM 遇到返欧航班延误、取消、包机混乱或被改到次日时，什么时候受 EU261 保护，什么时候不受？本文讲清返程边界与照护义务。"
        url="https://problemlot.com/zh/blog/dalaman-airport-delay-rights"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"达拉曼机场延误怎么办？DLM 航班赔偿指南【2026】",
        description:"解释达拉曼机场 DLM 延误、取消、返程和照护边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/dalaman-airport-delay-rights"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"DLM 返程延误后一定能拿 EU261 吗？","acceptedAnswer":{"@type":"Answer","text":"不一定。返程从土耳其起飞时，必须重新判断承运人和法规边界。"}},
          {"@type":"Question","name":"如果在 DLM 被拖到次日，酒店和餐饮谁负责？","acceptedAnswer":{"@type":"Answer","text":"在很多场景里，航空公司仍负有照护义务，包括住宿、餐饮和必要交通。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">DLM 延误指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              机场指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              达拉曼机场延误怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              DLM 最常见的问题是返程延误、包机改点和整晚滞留。真正难点不是机场广播说了什么，而是您这趟返程到底受哪套规则保护。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><CheckCircle2 className="h-5 w-5" />先看这些</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>实际承运人</li>
                  <li>返程是否从土耳其起飞</li>
                  <li>是否已过夜</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-red-700 dark:text-red-400"><XCircle className="h-5 w-5" />最容易误区</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>返程自动等于去程规则</li>
                  <li>没保留酒店和交通票据</li>
                  <li>没索要书面原因</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
