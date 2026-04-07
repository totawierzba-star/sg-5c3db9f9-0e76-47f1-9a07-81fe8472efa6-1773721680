import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, CalendarClock, CheckCircle2, Hotel, Plane, AlertTriangle } from "lucide-react";

export default function CharterFlightRebookedNextDayRights() {
  return (
    <LayoutZh>
      <SEO
        title="包机被改到第二天，乘客有哪些权利？【2026】"
        description="包机或度假航班被改到第二天后，酒店、餐饮、改签和赔偿该怎么判断？本文讲清包机延误、取消和次日重飞时的权利边界。"
        url="https://problemlot.com/zh/blog/charter-flight-rebooked-next-day-rights"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"包机被改到第二天，乘客有哪些权利？【2026】",
        description:"解释包机被改到第二天后的酒店、餐饮、改签与赔偿边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/charter-flight-rebooked-next-day-rights"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"包机被改到第二天后，航空公司必须给酒店吗？","acceptedAnswer":{"@type":"Answer","text":"在很多场景里需要。若乘客被迫过夜，航空公司通常仍负有住宿、餐饮和必要交通的照护义务。"}},
          {"@type":"Question","name":"改到第二天就一定能拿赔偿吗？","acceptedAnswer":{"@type":"Answer","text":"不一定。是否有现金赔偿还要看航班适用哪套法规、延误原因和通知时间等因素。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">包机改到第二天</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <CalendarClock className="h-4 w-4" />
              次日改签
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              包机被改到第二天，乘客有哪些权利？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              度假乘客最常被一句“我们安排您明天飞”打发走。真正关键的是: 今晚住哪儿、餐饮谁管、明天是不是最早可行航班，以及这次改动到底有没有赔偿空间。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><CheckCircle2 className="h-5 w-5" />先盯住</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>是否有书面改签确认</li>
                  <li>酒店和交通是否已安排</li>
                  <li>明天是否真的是最早可行方案</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400"><AlertTriangle className="h-5 w-5" />最容易误区</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>接受次日改签就以为不能再谈赔偿</li>
                  <li>只要了酒店，没保留票据</li>
                  <li>没区分航班赔偿和套餐缩水</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
