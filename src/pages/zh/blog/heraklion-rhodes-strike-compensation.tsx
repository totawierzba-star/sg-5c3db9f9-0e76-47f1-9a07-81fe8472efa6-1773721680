import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Plane,
  ShieldAlert,
} from "lucide-react";

export default function HeraklionRhodesStrikeCompensation() {
  return (
    <LayoutZh>
      <SEO
        title="伊拉克利翁和罗得岛机场混乱：罢工时还能索赔吗？【2026】"
        description="在 HER 或 RHO 遇到航班取消、延误、机场混乱或空管罢工时，什么时候还能拿 EU261，什么时候很难？本文讲清罢工、天气和航司责任边界。"
        url="https://problemlot.com/zh/blog/heraklion-rhodes-strike-compensation"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "伊拉克利翁和罗得岛机场混乱：罢工时还能索赔吗？【2026】",
            description:
              "中文乘客版 HER 与 RHO 机场混乱指南，解释罢工、空管、天气、EU261 和实际航司责任边界。",
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
              "@id": "https://problemlot.com/zh/blog/heraklion-rhodes-strike-compensation",
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
                name: "伊拉克利翁或罗得岛机场罢工时，一定不能拿赔偿吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。真正的空管或机场外部罢工可能构成例外，但并不是所有被航司称为“罢工”的情况都自动免赔。",
                },
              },
              {
                "@type": "Question",
                name: "如果航司说是机场混乱或地勤问题，我还该继续追吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常值得继续核实。并非所有运营混乱都属于真正的 extraordinary circumstances，很多案件仍可能保留索赔空间。",
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
            <span className="text-slate-900 dark:text-white">HER / RHO 机场混乱</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              机场指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              伊拉克利翁和罗得岛机场混乱：罢工时还能索赔吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              HER 和 RHO 的问题往往不是普通延误，而是“机场一片混乱，所有人都在说是罢工或天气”。
              真正困难的地方，是区分哪些情况真的是外部例外，哪些只是航司把运营混乱包装成免赔理由。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  可能仍有索赔空间
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>上一段飞机晚点</li>
                  <li>机组或地面运营问题</li>
                  <li>航司只泛泛说“机场混乱”</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400">
                  <ShieldAlert className="h-5 w-5" />
                  常见真正例外
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>空管罢工</li>
                  <li>真正恶劣天气关闭运行</li>
                  <li>外部安保或机场管理限制</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次 HER / RHO 混乱到底还有没有赔偿机会？</h2>
            <p className="mb-6 text-blue-100">
              如果您已经遇到罢工、取消、长延误或改到次日，现在就可以先做一次免费资格检查。
            </p>
            <a
              href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              免费检查我的航班
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 space-y-4 text-slate-700 dark:text-slate-300">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">什么时候要立刻警惕航司的“罢工”说法？</h2>
            <p>
              如果航司不给具体书面原因，只笼统说“机场罢工”“岛上很乱”“天气不好”，那就不该直接放弃。
              对乘客来说，最好的做法是拿到书面解释，并保存航显、机场公告和改签信息。
            </p>
            <p>
              这类案件里，真正的关键不只是有没有罢工，而是
              <strong>罢工属于谁</strong>、<strong>是否外部不可控</strong>，以及航司是否已采取合理措施。
            </p>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">必须说清楚：不是所有“罢工”都自动免赔</h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>外部空管或机场管理罢工，常更接近真正例外。</li>
              <li>航司内部排班、地面组织、前序连锁问题，不应轻易被包装成例外。</li>
              <li>即便最终免赔，航司通常仍要面对改签、退款和照护义务。</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">在机场现场先做什么？</h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li>拍下航显、机场公告和排队情况。</li>
              <li>要求书面原因，而不是只听口头解释。</li>
              <li>索要改签、酒店和餐饮安排。</li>
              <li>保留自己垫付的酒店、出租车和餐饮票据。</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定这次机场混乱是不是航司在滥用“特殊情况”？</h2>
            <p className="mb-6 text-slate-300">
              只要有航班号、日期和航司给出的理由，就能先初步判断这是不是还值得继续追。
            </p>
            <a
              href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              立即免费检查资格
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
