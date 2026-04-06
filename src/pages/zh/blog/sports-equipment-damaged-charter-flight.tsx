import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, BaggageClaim, CheckCircle2, Plane, Waves, AlertTriangle } from "lucide-react";

export default function SportsEquipmentDamagedCharterFlight() {
  return (
    <LayoutZh>
      <SEO
        title="包机托运风筝板、高尔夫包损坏怎么办？运动装备索赔指南【2026】"
        description="风筝板、冲浪板、高尔夫球包在包机或度假航班中损坏后，除了 EU261 之外还能追什么？本文讲清航班延误与蒙特利尔公约下的行李损失边界。"
        url="https://problemlot.com/zh/blog/sports-equipment-damaged-charter-flight"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "包机托运风筝板、高尔夫包损坏怎么办？运动装备索赔指南【2026】",
            description: "解释包机行李损坏、运动装备损失、EU261 与蒙特利尔公约边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/sports-equipment-damaged-charter-flight",
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
                name: "运动装备损坏，EU261 会赔吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不会。EU261 主要针对延误、取消和拒载。运动装备损坏更常涉及行李损失责任和蒙特利尔公约路径。",
                },
              },
              {
                "@type": "Question",
                name: "包机航班托运的高尔夫包或风筝板损坏，应该先做什么？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "最重要的是在机场立即报损并拿到 PIR 或等效记录，同时拍照、保留装备价值证明和运输标签。",
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
            <span className="text-slate-900 dark:text-white">运动装备损坏</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <BaggageClaim className="h-4 w-4" />
              行李损失
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              包机托运运动装备损坏怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              这类案件的难点在于，乘客常常只知道航班延误能谈 EU261，却不知道高尔夫球包、风筝板或冲浪板损坏，
              根本是另一条法律路径。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  先分清两类
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>航班延误、取消、拒载：更偏 EU261</li>
                  <li>行李或装备损坏：更偏行李损失规则</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最容易误区
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>只盯着延误，不报损装备</li>
                  <li>离开机场才开始拍照取证</li>
                  <li>没有保留装备价值证明</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次装备损坏该走哪条路径？</h2>
            <p className="mb-6 text-blue-100">
              如果您的高尔夫包、风筝板、冲浪板或其他运动器材已经损坏、延误或丢失，现在就可以先做一次免费资格检查。
            </p>
            <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50">
              免费检查我的航班
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 space-y-4 text-slate-700 dark:text-slate-300">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">先别混淆：延误赔偿和装备损失不是同一件事</h2>
            <p>
              如果包机晚点了 6 小时，您可能会先想到 EU261。但如果同时行李舱把风筝板折断，
              那就是另一条独立的损失路径，常常与蒙特利尔公约下的行李责任有关。
            </p>
            <p>
              也就是说，一个案件里可以同时出现航班延误问题和装备损坏问题，但它们的法律依据、证据和赔偿方式并不相同。
            </p>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <Waves className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              在机场必须立刻做的事
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>在离开行李区域前申报损坏。</li>
              <li>索要 PIR 或同等书面记录。</li>
              <li>拍摄装备受损细节、外包装和标签。</li>
              <li>保存购买证明、维修报价和赛事/课程损失记录。</li>
            </ul>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
