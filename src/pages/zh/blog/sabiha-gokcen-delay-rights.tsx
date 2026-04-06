import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Plane, CheckCircle2, XCircle } from "lucide-react";

export default function SabihaGokcenDelayRights() {
  return (
    <LayoutZh>
      <SEO
        title="萨比哈机场 SAW 航班延误怎么办？乘客权利指南【2026】"
        description="在伊斯坦布尔萨比哈机场 SAW 遇到 Pegasus 或其他航班延误、过夜和错过转机后，什么时候受 EU261 保护，什么时候不受？本文讲清现场处理与赔偿边界。"
        url="https://problemlot.com/zh/blog/sabiha-gokcen-delay-rights"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        headline:"萨比哈机场 SAW 航班延误怎么办？乘客权利指南【2026】",
        description:"解释伊斯坦布尔萨比哈机场 SAW 延误、过夜、错过转机与赔偿边界的中文指南。",
        author:{ "@type":"Organization", name:"ProblemLot.com"},
        publisher:{ "@type":"Organization", name:"ProblemLot.com", logo:{ "@type":"ImageObject", url:"https://problemlot.com/og-image.png"}},
        datePublished:"2026-04-06", dateModified:"2026-04-06",
        mainEntityOfPage:{ "@type":"WebPage","@id":"https://problemlot.com/zh/blog/sabiha-gokcen-delay-rights"}
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"在 SAW 延误就一定能拿 EU261 吗？","acceptedAnswer":{"@type":"Answer","text":"不一定。真正关键的是整段行程从哪里起飞、由谁实际承运，以及最终目的地延误多久，而不是单看机场本身。"}},
          {"@type":"Question","name":"在 SAW 被迫过夜，航空公司必须安排酒店吗？","acceptedAnswer":{"@type":"Answer","text":"在很多场景里需要。只要达到相应条件，航空公司通常仍有照护义务，包括酒店、餐饮和必要交通。"}}
        ]})}} />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">SAW 延误指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              机场指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              萨比哈机场 SAW 航班延误怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              SAW 最大的问题不是单一延误，而是延误连锁之后的过夜、转机失败和“到底该走 EU261 还是土耳其规则”的混乱。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400"><CheckCircle2 className="h-5 w-5" />更可能有赔偿空间</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>欧盟出发，经 SAW 联程晚到</li>
                  <li>同一张联程票</li>
                  <li>最终目的地晚到超过 3 小时</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-red-700 dark:text-red-400"><XCircle className="h-5 w-5" />最容易失去 EU261</h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>土耳其起点返欧</li>
                  <li>非欧盟航司从土耳其出发</li>
                  <li>自己分开买的两张票</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断 SAW 这趟延误有没有赔偿机会？</h2>
            <p className="mb-6 text-blue-100">如果您已经在 SAW 过夜、错过转机或被改签到次日，现在就可以先做一次免费资格检查。</p>
            <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50">
              免费检查我的航班
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 space-y-4 text-slate-700 dark:text-slate-300">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">在 SAW 现场优先盯什么？</h2>
            <ul className="space-y-3">
              <li>新登机牌或改签邮件。</li>
              <li>酒店、餐饮和地面交通安排。</li>
              <li>是否是同一联程票。</li>
              <li>您真正到达最终目的地的时间。</li>
            </ul>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
