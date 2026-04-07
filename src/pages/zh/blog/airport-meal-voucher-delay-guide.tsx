import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, Coffee, Plane, ReceiptText, AlertTriangle } from "lucide-react";

export default function AirportMealVoucherDelayGuide() {
  return (
    <LayoutZh>
      <SEO
        title="航班延误后餐饮券该给吗？Meal Voucher 指南【2026】"
        description="航班延误、取消或过夜时，航空公司什么时候该给餐饮券？如果不给，乘客自己买饭还能报吗？本文讲清 meal voucher 和票据保留重点。"
        url="https://problemlot.com/zh/blog/airport-meal-voucher-delay-guide"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"航班延误后餐饮券该给吗？Meal Voucher 指南【2026】",
        description:"解释航班延误、取消时 meal voucher、餐饮照护与票据保留的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/airport-meal-voucher-delay-guide"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"航班延误后，航空公司一定要给 meal voucher 吗？","acceptedAnswer":{"@type":"Answer","text":"在很多场景里，只要达到相应延误门槛，航空公司通常仍负有餐饮照护义务。具体形式可能是餐券、现金报销或统一安排。"}},
          {"@type":"Question","name":"如果航空公司不给餐饮券，我自己买饭还能报吗？","acceptedAnswer":{"@type":"Answer","text":"很多时候可以后续主张，但要保留小票，并尽量证明消费合理且与延误直接相关。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">餐饮券指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Coffee className="h-4 w-4" />
              现场照护
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              航班延误后餐饮券该给吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客会先想到赔偿，却忘了最先能抓住的常常是餐饮照护。真正痛苦的不是等 4 小时，而是 4 小时里没人告诉您饭谁来管。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><ReceiptText className="h-5 w-5" />先做的事</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>先问有没有 meal voucher</li>
                  <li>保留所有消费票据</li>
                  <li>记录延误时长和现场沟通</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400"><AlertTriangle className="h-5 w-5" />最容易误区</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>没票据就很难追</li>
                  <li>豪华消费未必都能报</li>
                  <li>把餐饮照护和现金赔偿混为一谈</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次餐饮和照护能不能追？</h2>
            <p className="mb-6 text-blue-100">如果您已经因延误、取消或过夜自己垫付了餐食，现在就可以先做一次免费资格检查。</p>
            <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50">免费检查我的航班<ArrowRight className="h-5 w-5" /></a>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
