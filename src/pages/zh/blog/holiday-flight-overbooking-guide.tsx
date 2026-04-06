import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Ban,
  CheckCircle2,
  Plane,
  Users,
} from "lucide-react";

export default function HolidayFlightOverbookingGuide() {
  return (
    <LayoutZh>
      <SEO
        title="度假航班超售被拒载怎么办？Overbooking 赔偿指南【2026】"
        description="在暑期包机、返程航班或度假机场遇到 overbooking 被拒绝登机，什么时候能拿标准赔偿？本文讲清自愿放弃座位、强制拒载、酒店和改签权利。"
        url="https://problemlot.com/zh/blog/holiday-flight-overbooking-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "度假航班超售被拒载怎么办？Overbooking 赔偿指南【2026】",
            description:
              "解释暑期与度假航班 overbooking、强制拒载、自愿放弃座位和赔偿边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/holiday-flight-overbooking-guide",
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
                name: "被拒绝登机就一定能拿赔偿吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "如果属于非自愿拒载，且航班处于适用法规范围内，很多时候可以。若您是自愿放弃座位，则通常会走与航司协商的补偿条件，而不是标准拒载赔偿。",
                },
              },
              {
                "@type": "Question",
                name: "包机或度假航班也会 overbooking 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "会，而且旺季时并不少见。包机身份本身不自动排除拒载赔偿权利，关键仍是航班适用哪套规则以及是否属于非自愿拒载。",
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
            <span className="text-slate-900 dark:text-white">Overbooking 指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Ban className="h-4 w-4" />
              拒载赔偿
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              度假航班超售被拒载怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              在旺季机场最崩溃的瞬间之一，就是明明已经值机、已经到登机口，却被告知没有座位。
              这类 overbooking 案件常常比普通延误更直截了当，也更容易产生标准化赔偿。
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  非自愿拒载
                </h2>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  如果不是您自愿让出座位，而是被航空公司强制拒绝登机，通常更容易触发标准化赔偿。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400">
                  <Users className="h-5 w-5" />
                  自愿放弃座位
                </h2>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  如果您主动接受补偿换取改签，很多时候就不再是标准拒载赔偿，而是双方协商条件。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次 overbooking 属不属于可赔拒载？</h2>
            <p className="mb-6 text-blue-100">
              如果您已经在值机、安检或登机口被拦下，现在就可以先做一次免费资格检查。
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">先分清：自愿还是非自愿</h2>
            <p>
              航司最常见的策略是先在广播里找“志愿者”。如果您接受了代金券、酒店或改签到第二天，
              后面很多权利路径就会和强制拒载不同。
            </p>
            <p>
              但如果您已经按时到达、证件齐全、没有安全或签证问题，却被强制拒载，
              那通常更接近标准拒载赔偿的核心场景。
            </p>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">哪些情况最容易被乘客误解？</h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>在登机口被说“没有座位”，却没有拿到书面拒载说明。</li>
              <li>被“劝”改签后，以为自己仍保留完全相同的赔偿路径。</li>
              <li>包机或旅游航班发生超售时，以为没有标准赔偿。</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">现场先做什么？</h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li>确认航司是否把您标记为 involuntary denied boarding。</li>
              <li>要求书面说明、改签方案和补偿条款。</li>
              <li>不要在没看清条件时匆忙签字接受 voucher。</li>
              <li>保留登机牌、值机记录和机场照片。</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定这是自愿放弃还是强制拒载？</h2>
            <p className="mb-6 text-slate-300">
              只要有当时的通知内容和改签条件，就能先判断您是否仍有标准拒载赔偿空间。
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
