import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, Bed, Hotel, MapPin, AlertTriangle } from "lucide-react";

export default function AntalyaOvernightDelayHotelGuide() {
  return (
    <LayoutZh>
      <SEO
        title="安塔利亚延误过夜，酒店该谁出？AYT 指南【2026】"
        description="在安塔利亚机场 AYT 因延误或取消被迫过夜时，航空公司必须安排酒店吗？本文讲清返程、包机、餐饮和票据保留重点。"
        url="https://problemlot.com/zh/blog/antalya-overnight-delay-hotel-guide"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"安塔利亚延误过夜，酒店该谁出？AYT 指南【2026】",
        description:"解释安塔利亚 AYT 延误过夜时酒店、餐饮和照护义务边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/antalya-overnight-delay-hotel-guide"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"在 AYT 被拖到次日，航空公司一定要给酒店吗？","acceptedAnswer":{"@type":"Answer","text":"在很多场景里需要。只要乘客被迫过夜，航空公司通常仍负有住宿、餐饮和必要交通的照护义务。"}},
          {"@type":"Question","name":"如果我自己先订了酒店，还能后续追偿吗？","acceptedAnswer":{"@type":"Answer","text":"很多时候可以，但要尽量先向航司要求安排，并完整保留票据和沟通记录。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">AYT 过夜酒店</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Hotel className="h-4 w-4" />
              过夜安置
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              安塔利亚延误过夜，酒店该谁出？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              在 AYT 最让人崩溃的时刻，通常不是航班本身取消，而是深夜才被告知“明天再飞”，却没人明确说今晚住哪儿、怎么去酒店、明天怎么回机场。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><Bed className="h-5 w-5" />先盯住</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>是否已明确改到次日</li>
                  <li>是否有书面酒店安排</li>
                  <li>交通和餐饮是否一起提供</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400"><AlertTriangle className="h-5 w-5" />最容易误区</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>以为没赔偿就没酒店</li>
                  <li>自己订房后不留票据</li>
                  <li>只听口头承诺</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断 AYT 这次过夜安置该不该由航司承担？</h2>
            <p className="mb-6 text-blue-100">如果您已经在安塔利亚被拖到次日，现在就可以先做一次免费资格检查。</p>
            <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50">免费检查我的航班<ArrowRight className="h-5 w-5" /></a>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
