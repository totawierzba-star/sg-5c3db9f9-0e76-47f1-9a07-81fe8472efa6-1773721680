import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, Route, Ticket, AlertTriangle, XCircle } from "lucide-react";

export default function PegasusSawSelfTransferGuide() {
  return (
    <LayoutZh>
      <SEO
        title="Pegasus 在 SAW 自己分开买票转机，错过下一段怎么办？【2026】"
        description="在萨比哈机场 SAW 用 Pegasus 自己分开买票转机时，错过下一段会怎样？本文讲清联程票区别、重买机票、酒店和赔偿边界。"
        url="https://problemlot.com/zh/blog/pegasus-saw-self-transfer-guide"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"Pegasus 在 SAW 自己分开买票转机，错过下一段怎么办？【2026】",
        description:"解释 Pegasus 在 SAW self-transfer 转机失败、分开买票和赔偿边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/pegasus-saw-self-transfer-guide"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"Pegasus 自己分开买票错过第二段，航司一定会免费改签吗？","acceptedAnswer":{"@type":"Answer","text":"通常不一定。若是独立机票，第二段风险很多时候不再由第一段承运人承担。"}},
          {"@type":"Question","name":"self-transfer 还能拿 EU261 吗？","acceptedAnswer":{"@type":"Answer","text":"第一段是否受保护要单独判断，但第二段误机损失和整段联程保护通常会明显更弱。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">Pegasus SAW 分票转机</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Route className="h-4 w-4" />
              转机风险
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Pegasus 在 SAW 自己分开买票转机，错过下一段怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              这类案件是 SAW 最典型、也最容易吃亏的一类。表面上只是同一家航司的两段票，实际上如果是分开下单，法律保护可能和真正联程完全不同。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><Ticket className="h-5 w-5" />真正联程</h2>
                <p className="text-sm text-slate-700 dark:text-slate-300">更看最终目的地与整段行程，改签责任通常也更清晰。</p>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-red-700 dark:text-red-400"><XCircle className="h-5 w-5" />分开买票</h2>
                <p className="text-sm text-slate-700 dark:text-slate-300">第二段风险很多时候不再自动由第一段承担，重买机票和过夜风险会明显更高。</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
