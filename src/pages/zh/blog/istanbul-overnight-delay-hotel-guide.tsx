import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, Bed, Clock3, Hotel, Plane, AlertTriangle } from "lucide-react";

export default function IstanbulOvernightDelayHotelGuide() {
  return (
    <LayoutZh>
      <SEO
        title="伊斯坦布尔延误过夜，酒店该谁出？IST / SAW 指南【2026】"
        description="在伊斯坦布尔因延误或取消被迫过夜，航空公司必须提供酒店吗？本文讲清 IST / SAW 的酒店、餐饮、交通与赔偿边界。"
        url="https://problemlot.com/zh/blog/istanbul-overnight-delay-hotel-guide"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"伊斯坦布尔延误过夜，酒店该谁出？IST / SAW 指南【2026】",
        description:"解释伊斯坦布尔机场延误过夜时酒店、餐饮、交通与赔偿边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/istanbul-overnight-delay-hotel-guide"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"在伊斯坦布尔被迫过夜，航空公司一定要给酒店吗？","acceptedAnswer":{"@type":"Answer","text":"在很多场景里需要。尤其当延误或取消使您无法当日成行时，航空公司通常仍负有照护义务，包括住宿和必要交通。"}},
          {"@type":"Question","name":"如果航司不安排酒店，我自己订还能追吗？","acceptedAnswer":{"@type":"Answer","text":"很多时候可以后续主张，但要尽量先向航司要求安排，并保留所有票据和沟通记录。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">伊斯坦布尔过夜酒店</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Hotel className="h-4 w-4" />
              过夜安置
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              伊斯坦布尔延误过夜，酒店该谁出？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              在 IST 或 SAW 最耗人的，不只是误机，而是被拖到深夜后还没人明确告诉您今晚住哪儿、明天怎么回机场。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><Bed className="h-5 w-5" />先看核心</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>是否已被明确改到次日</li>
                  <li>是否需要过夜</li>
                  <li>航司是否提供书面安置方案</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400"><AlertTriangle className="h-5 w-5" />最容易误区</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>只听口头说“等一等”</li>
                  <li>没保留自己订酒店的票据</li>
                  <li>以为没有赔偿就没有酒店权利</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断今晚酒店和交通该不该由航司承担？</h2>
            <p className="mb-6 text-blue-100">如果您已经在伊斯坦布尔被拖到次日，现在就可以先做一次免费资格检查。</p>
            <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50">
              免费检查我的航班
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 space-y-4 text-slate-700 dark:text-slate-300">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">必须分清：赔偿和照护不是一回事</h2>
            <p>
              很多乘客一听到“这班不一定有 EU261 赔偿”，就以为酒店也没了。其实这是两件不同的事。
              即便最终现金赔偿存在争议，航司在很多延误与取消场景下仍要面对照护义务。
            </p>
            <p>
              对您来说，最重要的是让航司先明确：今晚酒店在哪、怎么去、明天怎么回机场。
            </p>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
