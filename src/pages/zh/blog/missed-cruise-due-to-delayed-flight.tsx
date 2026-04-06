import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, Ship, Plane, Scale } from "lucide-react";

export default function MissedCruiseDueToDelayedFlight() {
  return (
    <LayoutZh>
      <SEO
        title="航班延误错过邮轮登船怎么办？Cruise 高价值索赔指南【2026】"
        description="因为航班延误错过邮轮登船，损失可能远超 €600。本文讲清 EU261、联程结构、后续损失与邮轮行程中哪些能追、哪些不能。"
        url="https://problemlot.com/zh/blog/missed-cruise-due-to-delayed-flight"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "航班延误错过邮轮登船怎么办？Cruise 高价值索赔指南【2026】",
            description: "解释因航班延误错过邮轮登船时的 EU261、后续损失与高价值争议的中文指南。",
            author: { "@type": "Organization", name: "ProblemLot.com" },
            publisher: {
              "@type": "Organization",
              name: "ProblemLot.com",
              logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" },
            },
            datePublished: "2026-04-06",
            dateModified: "2026-04-06",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://problemlot.com/zh/blog/missed-cruise-due-to-delayed-flight",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "航班延误导致我错过邮轮，EU261 会赔整趟邮轮吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不会直接按整趟邮轮总价赔付。EU261 主要提供标准化航班赔偿与照护；邮轮票价、追船费用和后续损失是否可追，需要另外分析因果关系与其他法律路径。",
                },
              },
              {
                "@type": "Question",
                name: "如果我是自己分开买的机票和邮轮，案件是不是更难？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常更难。因为航空公司往往只对航班本身负责，邮轮衔接风险若非联程或同一套餐结构，因果链证明会更复杂。",
                },
              },
              {
                "@type": "Question",
                name: "从欧盟出发飞邮轮母港时，什么情况下还能拿到 EU261？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "只要该航班本身处于 EU261 适用范围内，且最终达到赔偿门槛，通常仍可先主张标准化航班赔偿。这与是否错过邮轮是两个层次的问题。",
                },
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">错过邮轮登船</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Ship className="h-4 w-4" />
              高价值案件
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              航班延误错过邮轮登船怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              这类案件最痛的地方，是损失往往不只是航班晚点，而是整段邮轮行程、追船交通、酒店和假期全部一起塌掉。
              也正因为金额高，越需要把“航班赔偿”和“后续损失”拆开判断。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  先做的第一层
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>判断航班本身是否受 EU261 保护</li>
                  <li>确认最终到达延误是否超过门槛</li>
                  <li>保留所有追船与住宿票据</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最容易误区
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>以为 EU261 自动赔整趟邮轮</li>
                  <li>没区分联程、套餐和完全分开购买</li>
                  <li>只保留登机牌，没保留追船成本</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次错过邮轮有没有可追价值？</h2>
            <p className="mb-6 text-blue-100">
              如果您已经因为航班延误错过登船、补飞下一港口或损失整段邮轮行程，现在就可以先做一次免费资格检查。
            </p>
            <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50">
              免费检查我的航班
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 space-y-4 text-slate-700 dark:text-slate-300">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">先把案件拆成两层</h2>
            <p>
              第一层是航班本身。只要这趟飞机满足 EU261 或其他适用规则，您通常仍可能先拿到标准化航班赔偿。
              第二层才是更复杂的后续损失，比如邮轮票价、追船费用、港口酒店和改签航班。
            </p>
            <p>
              真正的高价值不在于把所有损失都混成一句“我错过了邮轮”，
              而是把哪部分是标准航班赔偿、哪部分是后续损失、哪部分需要额外因果证明讲清楚。
            </p>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <Scale className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              必须说清楚：什么时候受欧洲法规保护，什么时候不受
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>欧盟出发去邮轮母港的航班，通常更容易受 EU261 保护。</li>
              <li>第三国出发、非欧盟航司执飞时，常常不在 EU261 保护范围内。</li>
              <li>就算不受 EU261，仍不等于没有任何权利，只是法律路径会变化。</li>
            </ul>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
