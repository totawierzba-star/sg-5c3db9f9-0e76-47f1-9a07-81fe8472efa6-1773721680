import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, CarTaxiFront, Hotel, ReceiptText, AlertTriangle } from "lucide-react";

export default function AirportTaxiHotelReimbursementGuide() {
  return (
    <LayoutZh>
      <SEO
        title="航班延误后出租车和酒店能报销吗？【2026 指南】"
        description="因为航班延误、取消或过夜而自付出租车、酒店和机场交通，后面还能追吗？本文讲清合理费用、票据和照护边界。"
        url="https://problemlot.com/zh/blog/airport-taxi-hotel-reimbursement-guide"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"航班延误后出租车和酒店能报销吗？【2026 指南】",
        description:"解释航班延误后出租车、酒店和交通报销边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/airport-taxi-hotel-reimbursement-guide"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"自己先打车去酒店，后面还能报吗？","acceptedAnswer":{"@type":"Answer","text":"很多时候可以，但前提通常是费用合理、与延误直接相关，并且您保留了票据与沟通记录。"}},
          {"@type":"Question","name":"五星级酒店和高价专车也都能报吗？","acceptedAnswer":{"@type":"Answer","text":"未必。通常更强调合理、必要和与事件直接相关的费用。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">交通和酒店报销</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <CarTaxiFront className="h-4 w-4" />
              费用报销
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              航班延误后出租车和酒店能报销吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              现实里最常见的不是拿到完美 hotel voucher，而是乘客先自己掏钱把问题解决了。真正关键的是，您有没有把这些钱花在“合理且可证明”的范围里。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><ReceiptText className="h-5 w-5" />更容易追的费用</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>机场到酒店的合理交通</li>
                  <li>必要住宿</li>
                  <li>基础餐饮消费</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400"><AlertTriangle className="h-5 w-5" />最容易争议</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>过高档次酒店</li>
                  <li>高价专车或非必要消费</li>
                  <li>没有票据的现金支出</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
