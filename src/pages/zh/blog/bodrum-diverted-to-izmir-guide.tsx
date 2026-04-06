import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, Bus, CheckCircle2, MapPinned, Plane, AlertTriangle } from "lucide-react";

export default function BodrumDivertedToIzmirGuide() {
  return (
    <LayoutZh>
      <SEO
        title="原本飞博德鲁姆却降落伊兹密尔，怎么办？【2026 指南】"
        description="飞博德鲁姆 BJV 却被改降到伊兹密尔后，航空公司必须安排什么？本文讲清大巴、出租车、最终到达时间和赔偿边界。"
        url="https://problemlot.com/zh/blog/bodrum-diverted-to-izmir-guide"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"原本飞博德鲁姆却降落伊兹密尔，怎么办？【2026 指南】",
        description:"解释飞博德鲁姆却改降伊兹密尔时的转运、最终到达时间和赔偿边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/bodrum-diverted-to-izmir-guide"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"飞博德鲁姆却降在伊兹密尔，还算准点到达吗？","acceptedAnswer":{"@type":"Answer","text":"不一定。关键更在于您什么时候真正到达博德鲁姆或被约定的替代地点，而不是飞机落地伊兹密尔的时刻。"}},
          {"@type":"Question","name":"航空公司必须安排大巴或出租车吗？","acceptedAnswer":{"@type":"Answer","text":"通常应提供把乘客送往原定目的地或合理替代点的交通安排。如果您自费，也应保留票据。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">博德鲁姆改降伊兹密尔</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPinned className="h-4 w-4" />
              改降场景
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              原本飞博德鲁姆却降落伊兹密尔，怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              这是最典型也最让乘客崩溃的 diverted flight 场景之一。飞机看似“到了土耳其”，但您离真正的目的地还远着。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><CheckCircle2 className="h-5 w-5" />先看核心</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>真正到达博德鲁姆的时间</li>
                  <li>航司是否安排转运</li>
                  <li>自己垫付的交通与酒店票据</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400"><AlertTriangle className="h-5 w-5" />最容易误区</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>把伊兹密尔落地时间当成最终到达时间</li>
                  <li>没保留大巴、出租车票据</li>
                  <li>只听口头说“我们会处理”</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次改降还有没有赔偿空间？</h2>
            <p className="mb-6 text-blue-100">如果您原本飞 BJV 却落在别处，现在就可以先做一次免费资格检查。</p>
            <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50">免费检查我的航班<ArrowRight className="h-5 w-5" /></a>
          </section>

          <section className="mb-10 space-y-4 text-slate-700 dark:text-slate-300">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">先别纠结落地了没，先算真正到达时间</h2>
            <p>
              改降案件里，飞机在伊兹密尔触地，不代表您已经“到达了博德鲁姆”。很多时候真正耽误的是后面的 3 到 4 小时地面转运。
            </p>
            <p>
              也正因为如此，这类案件一定要记下自己真正到达酒店、港口或博德鲁姆市区的时间。
            </p>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
