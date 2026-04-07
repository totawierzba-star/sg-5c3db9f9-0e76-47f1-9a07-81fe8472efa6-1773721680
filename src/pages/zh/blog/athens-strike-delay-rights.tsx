import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle2, Plane, ShieldAlert } from "lucide-react";

export default function AthensStrikeDelayRights() {
  return (
    <LayoutZh>
      <SEO
        title="雅典机场罢工延误怎么办？ATH 赔偿与改签指南【2026】"
        description="在雅典 ATH 遇到机场罢工、空管限制、取消或改到次日时，什么时候还能拿 EU261，什么时候很难？本文讲清罢工与照护边界。"
        url="https://problemlot.com/zh/blog/athens-strike-delay-rights"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"雅典机场罢工延误怎么办？ATH 赔偿与改签指南【2026】",
        description:"解释雅典 ATH 罢工、空管限制、取消改签到次日和赔偿边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/athens-strike-delay-rights"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"雅典机场罢工时一定不能拿赔偿吗？","acceptedAnswer":{"@type":"Answer","text":"不一定。真正外部空管或机场罢工可能构成例外，但并不是所有“strike”说法都自动免赔。"}},
          {"@type":"Question","name":"即使最终免赔，航司还要负责酒店和改签吗？","acceptedAnswer":{"@type":"Answer","text":"很多时候仍然要。照护义务与现金赔偿并不是同一回事。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">雅典罢工延误</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              机场指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              雅典机场罢工延误怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              在 ATH，乘客最常见的困惑是：航司说“strike”，那是不是就完全没希望了？真正答案要更细，尤其要把现金赔偿和过夜照护拆开看。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><CheckCircle2 className="h-5 w-5" />仍值得核实</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>航司只笼统说 strike</li>
                  <li>改签到次日但无清晰说明</li>
                  <li>前序飞机连锁晚点</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400"><ShieldAlert className="h-5 w-5" />更接近真正例外</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>空管罢工</li>
                  <li>机场外部管理行动</li>
                  <li>明确可验证的外部限制</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断 ATH 这次 strike 说法到底靠不靠谱？</h2>
            <p className="mb-6 text-blue-100">如果您已经在雅典被取消、改到次日或卡在机场，现在就可以先做一次免费资格检查。</p>
            <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50">免费检查我的航班<ArrowRight className="h-5 w-5" /></a>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
