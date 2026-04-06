import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, Bed, Hotel, Plane, CheckCircle2, AlertTriangle } from "lucide-react";

export default function TurkishAirlinesHotelVoucherIstanbul() {
  return (
    <LayoutZh>
      <SEO
        title="Turkish Airlines 在伊斯坦布尔不给酒店怎么办？【2026】"
        description="Turkish Airlines 在 IST 延误、取消或错过转机后，如果不给 hotel voucher 怎么办？本文讲清过夜安置、餐饮和票据保留重点。"
        url="https://problemlot.com/zh/blog/turkish-airlines-hotel-voucher-istanbul"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"Turkish Airlines 在伊斯坦布尔不给酒店怎么办？【2026】",
        description:"解释 Turkish Airlines 在 IST 过夜安置、hotel voucher 和照护义务的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/turkish-airlines-hotel-voucher-istanbul"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"Turkish Airlines 延误过夜时一定要给 hotel voucher 吗？","acceptedAnswer":{"@type":"Answer","text":"在很多场景里，若乘客被迫过夜，航空公司通常仍负有住宿、餐饮和必要交通照护义务。"}},
          {"@type":"Question","name":"如果 TK 不给酒店，我自己订还能追吗？","acceptedAnswer":{"@type":"Answer","text":"很多时候可以后续主张，但要先尝试要求航司安排，并保留票据与沟通记录。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">TK 酒店 voucher</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Hotel className="h-4 w-4" />
              过夜安置
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Turkish Airlines 在伊斯坦布尔不给酒店怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              对很多乘客来说，真正的难题不是“这班能不能赔”，而是凌晨一点还在 IST 排队，却拿不到明确 hotel voucher。
              这时最重要的是知道该盯哪些权利、保留哪些证据。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><CheckCircle2 className="h-5 w-5" />先盯住</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>是否已被明确改到次日</li>
                  <li>是否有书面安置说明</li>
                  <li>是否给出酒店、餐饮和交通安排</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400"><AlertTriangle className="h-5 w-5" />最容易误区</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>只听口头说“等等看”</li>
                  <li>自己订酒店却没留票据</li>
                  <li>以为没有赔偿就没有 hotel voucher</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断 TK 这次过夜酒店该不该由航司承担？</h2>
            <p className="mb-6 text-blue-100">如果您已经在伊斯坦布尔被拖到次日，现在就可以先做一次免费资格检查。</p>
            <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50">免费检查我的航班<ArrowRight className="h-5 w-5" /></a>
          </section>

          <section className="mb-10 space-y-4 text-slate-700 dark:text-slate-300">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">先分清：现金赔偿和过夜安置不是同一回事</h2>
            <p>
              很多乘客被告知“这班不一定适用 EU261”，于是误以为酒店也不能要。其实在很多场景里，
              即便现金赔偿存在争议，航司的照护义务仍然存在。
            </p>
            <p>
              所以在 TK 队伍里最重要的不是争论法律术语，而是先拿到明确的住宿和交通安排。
            </p>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
