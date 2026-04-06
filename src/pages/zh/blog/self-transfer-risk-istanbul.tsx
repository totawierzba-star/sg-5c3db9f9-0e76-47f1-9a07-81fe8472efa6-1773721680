import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Route, Ticket, XCircle } from "lucide-react";

export default function SelfTransferRiskIstanbul() {
  return (
    <LayoutZh>
      <SEO
        title="在伊斯坦布尔自己分开买票转机，错过下一段怎么办？【2026】"
        description="自己分开买票在 IST 或 SAW 转机时，一旦错过下一段通常会发生什么？本文讲清 self-transfer、联程票区别、酒店和赔偿边界。"
        url="https://problemlot.com/zh/blog/self-transfer-risk-istanbul"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"在伊斯坦布尔自己分开买票转机，错过下一段怎么办？【2026】",
        description:"解释伊斯坦布尔 self-transfer、分开买票转机失败与赔偿边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/self-transfer-risk-istanbul"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"自己分开买票在伊斯坦布尔转机，错过第二段还能要求航司改签吗？","acceptedAnswer":{"@type":"Answer","text":"通常更难。若是独立机票，第二段风险很多时候由乘客自己承担，航空公司未必负责把您送到最终目的地。"}},
          {"@type":"Question","name":"self-transfer 案件还能拿 EU261 吗？","acceptedAnswer":{"@type":"Answer","text":"第一段是否有 EU261 空间，要单独看该段本身是否满足条件；但第二段损失和整段联程保护，通常会明显更弱。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">Self-transfer 伊斯坦布尔</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Route className="h-4 w-4" />
              转机风险
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              在伊斯坦布尔自己分开买票转机，错过下一段怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              这是很多乘客最晚才意识到的问题: 两张票看起来像一段行程，但法律上可能根本不是一回事。
              一旦在 IST 或 SAW 误机，风险分配和真正联程票会完全不同。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><Ticket className="h-5 w-5" />联程票</h2>
                <p className="text-sm text-slate-700 dark:text-slate-300">航空公司通常仍需把您送到最终目的地，最终到达时间也更重要。</p>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-red-700 dark:text-red-400"><XCircle className="h-5 w-5" />分开买票</h2>
                <p className="text-sm text-slate-700 dark:text-slate-300">第二段风险很多时候不再由第一家航司承担，酒店、重买机票和误机损失也更难处理。</p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次 self-transfer 损失还有没有可追空间？</h2>
            <p className="mb-6 text-blue-100">如果您是在 IST 或 SAW 自行分票转机失败，现在就可以先做一次免费资格检查。</p>
            <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50">免费检查我的航班<ArrowRight className="h-5 w-5" /></a>
          </section>

          <section className="mb-10 space-y-4 text-slate-700 dark:text-slate-300">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">为什么 self-transfer 风险会突然变大？</h2>
            <p>
              因为表面上看，您只是同一天从 A 飞到 B 再飞 C，但法律上第二段机票并不一定认识第一段的问题。
              这意味着第一家航司未必负责您的后续误机，第二家航司也未必免费改签。
            </p>
            <p>
              这也是为什么“只差 40 分钟”在 self-transfer 里可能代价非常高。
            </p>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
