import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CloudSun, CheckCircle2 } from "lucide-react";

export default function GreekIslandsWeatherDelayGuide() {
  return (
    <LayoutZh>
      <SEO
        title="希腊群岛航班因天气延误，还能索赔吗？【2026 指南】"
        description="飞圣托里尼、罗得岛、克里特等岛屿时，航空公司说是天气原因就一定免赔吗？本文讲清真正恶劣天气、运营借口和 EU261 边界。"
        url="https://problemlot.com/zh/blog/greek-islands-weather-delay-guide"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"希腊群岛航班因天气延误，还能索赔吗？【2026 指南】",
        description:"解释希腊群岛天气延误、真正恶劣天气与 EU261 边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/greek-islands-weather-delay-guide"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"天气原因就一定免赔吗？","acceptedAnswer":{"@type":"Answer","text":"不一定。真正恶劣天气可能构成例外，但并不是所有“weather”说法都足以自动免赔。"}},
          {"@type":"Question","name":"如果航司只是说风太大，我该怎么办？","acceptedAnswer":{"@type":"Answer","text":"应尽量索要书面原因、保留航显和现场信息，并核实是否真的是外部不可避免情形。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">希腊群岛天气延误</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <CloudSun className="h-4 w-4" />
              天气争议
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              希腊群岛航班因天气延误，还能索赔吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              在希腊群岛，航司最爱用的理由之一就是“天气”。但真正关键不是它有没有提 weather，而是这场天气到底是不是法律上足以免赔的那种例外。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><CheckCircle2 className="h-5 w-5" />仍值得核实</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>航司只笼统说风大</li>
                  <li>前序飞机已经晚点</li>
                  <li>同机场其他航班仍在运行</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400"><AlertTriangle className="h-5 w-5" />更接近真正例外</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>明确的恶劣天气关闭运行</li>
                  <li>可验证的安全限制</li>
                  <li>机场或空管正式限制</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
