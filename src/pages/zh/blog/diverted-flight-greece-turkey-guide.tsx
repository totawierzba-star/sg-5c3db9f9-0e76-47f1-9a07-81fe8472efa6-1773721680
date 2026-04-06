import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bus,
  CheckCircle2,
  MapPinned,
  Plane,
} from "lucide-react";

export default function DivertedFlightGreeceTurkeyGuide() {
  return (
    <LayoutZh>
      <SEO
        title="航班改降别的机场怎么办？希腊和土耳其 diverted flight 指南【2026】"
        description="原本飞博德鲁姆却降落伊兹密尔，原本飞希腊岛屿却改到别的城市，这种 diverted flight 能赔吗？本文讲清替代交通、最终到达时间和 EU261 边界。"
        url="https://problemlot.com/zh/blog/diverted-flight-greece-turkey-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "航班改降别的机场怎么办？希腊和土耳其 diverted flight 指南【2026】",
            description:
              "解释希腊和土耳其 diverted flight、替代交通、最终到达时间和赔偿边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/diverted-flight-greece-turkey-guide",
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
                name: "飞机改降到别的机场后，还算准点到达吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。很多案件里，更关键的是您什么时候真正到达原定目的地或其合理替代点，而不是飞机什么时候触地。",
                },
              },
              {
                "@type": "Question",
                name: "如果我飞博德鲁姆却被降在伊兹密尔，航空公司必须安排大巴吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常应提供把乘客送到原定目的地或与其约定的替代地点的合理交通安排。若您自费前往，也应尽量保留票据。",
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
            <span className="text-slate-900 dark:text-white">改降别的机场</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPinned className="h-4 w-4" />
              特殊场景
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              航班改降别的机场怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              希腊和土耳其最让乘客崩溃的情况之一，就是飞机“到了”，却根本没到您买票时的那个机场。
              真正的关键不是落地了没，而是您最终什么时候真正到达原定目的地。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  先看真正核心
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>您最终到达原目的地的时间</li>
                  <li>航司是否安排了替代交通</li>
                  <li>改降原因到底是什么</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最容易误区
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>把轮子着地时间当成到达时间</li>
                  <li>没保留大巴、出租车和转运票据</li>
                  <li>默认天气就一定免赔</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次改降别的机场还有没有赔偿空间？</h2>
            <p className="mb-6 text-blue-100">
              如果您原本飞博德鲁姆、希腊岛屿或其他海岛机场，却被改降到别的城市，
              现在就可以先做一次免费资格检查。
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">为什么改降案件经常被低估？</h2>
            <p>
              因为乘客和航司都容易盯着“飞机已经降落”，却忽略了真正的问题：
              您是不是还要再坐 2 到 4 小时大巴，甚至自己想办法去原定机场或酒店。
            </p>
            <p>
              这类案件里，延误不一定体现在空中，而是体现在最后一段地面转运。
            </p>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">一定要说清楚：着陆不等于真正到达</h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>如果航司把您降在别的机场，通常还要负责合理转运。</li>
              <li>最终延误应结合您真正到达原定目的地的时间来评估。</li>
              <li>如果您自己垫付大巴、出租车或酒店，务必保留票据。</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">现场先做什么？</h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li>确认改降原因和新的落地机场名称。</li>
              <li>询问航司如何把您送到原定目的地。</li>
              <li>保存大巴、出租车、酒店和餐饮票据。</li>
              <li>记录自己真正到达原目的地的时间。</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定这次改降到底算普通晚点还是可赔案件？</h2>
            <p className="mb-6 text-slate-300">
              只要有原定机场、实际降落机场和最终到达时间，就能先把案件方向判断清楚。
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
