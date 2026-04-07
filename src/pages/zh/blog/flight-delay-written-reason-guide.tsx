import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, FileText, MessageSquareWarning, Plane } from "lucide-react";

export default function FlightDelayWrittenReasonGuide() {
  return (
    <LayoutZh>
      <SEO
        title="航班延误后，为什么一定要拿书面原因？【2026】"
        description="航空公司口头说是天气、罢工、技术故障，为什么不够？本文讲清为什么书面原因在 EU261 和后续索赔里很关键。"
        url="https://problemlot.com/zh/blog/flight-delay-written-reason-guide"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"航班延误后，为什么一定要拿书面原因？【2026】",
        description:"解释航班延误后书面原因、口头说明与后续索赔证据关系的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/flight-delay-written-reason-guide"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"口头说是天气，不就够了吗？","acceptedAnswer":{"@type":"Answer","text":"通常不够。后续索赔中，书面原因、时间记录和现场证据往往比口头说法更重要。"}},
          {"@type":"Question","name":"如果航司不愿意给书面原因怎么办？","acceptedAnswer":{"@type":"Answer","text":"至少应保留航显、短信、邮件、录音摘要和现场沟通记录，尽量形成可验证的证据链。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">书面原因指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <FileText className="h-4 w-4" />
              取证重点
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              航班延误后，为什么一定要拿书面原因？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客在机场只听到一句“天气不好”或“技术问题”，然后就走了。可真正到了索赔阶段，最有价值的不是回忆，而是可验证的书面记录。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><MessageSquareWarning className="h-5 w-5" />口头说明的问题</h2>
                <p className="text-sm text-slate-700 dark:text-slate-300">容易变、难证明、后续常被改口。</p>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-blue-700 dark:text-blue-400"><Plane className="h-5 w-5" />书面记录的价值</h2>
                <p className="text-sm text-slate-700 dark:text-slate-300">能和短信、邮件、航显照片一起形成更稳定的证据链。</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
