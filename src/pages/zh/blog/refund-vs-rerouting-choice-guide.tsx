import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  RefreshCcw,
  RotateCcw,
  Scale,
} from "lucide-react";

export default function RefundVsReroutingChoiceGuide() {
  return (
    <LayoutZh>
      <SEO
        title="退款还是改签到最终目的地？一文看懂怎么选【2026】"
        description="航班取消、大延误或改到次日后，乘客该选退款还是 rerouting？本文讲清两条权利路径的差别、隐藏代价和最容易选错的场景。"
        url="https://problemlot.com/zh/blog/refund-vs-rerouting-choice-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "退款还是改签到最终目的地？一文看懂怎么选【2026】",
            description:
              "解释航班取消、大延误或次日改签后，退款与 rerouting 两条权利路径差别的中文指南。",
            author: {
              "@type": "Organization",
              name: "ProblemLot.com",
            },
            publisher: {
              "@type": "Organization",
              name: "ProblemLot.com",
              logo: {
                "@type": "ImageObject",
                url: "https://problemlot.com/og-image.png",
              },
            },
            datePublished: "2026-04-06",
            dateModified: "2026-04-06",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://problemlot.com/zh/blog/refund-vs-rerouting-choice-guide",
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
                name: "航班取消后，我能同时保留退款和改签两个选择吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多时候不能无限期同时保留。退款和改签到最终目的地通常是不同路径，乘客在接受其中一种后，另一种空间可能缩小甚至消失。",
                },
              },
              {
                "@type": "Question",
                name: "如果我急着到目的地，为什么不该太快点退款？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "因为一旦接受退款，很多时候航空公司不再继续负责把您送到最终目的地。您可能需要自己重新购买后续机票或承担更高成本。",
                },
              },
              {
                "@type": "Question",
                name: "选了改签，还能再谈赔偿吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多案件里仍可以继续分析。改签和现金赔偿并不总是互相排斥，但具体仍要看航班适用哪套规则和案件原因。",
                },
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">
              首页
            </Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              博客
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">退款 vs 改签</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Scale className="h-4 w-4" />
              赔偿基础
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              退款还是改签到最终目的地？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              乘客最容易做错的决定之一，不是赔偿金额，而是太快点击了“接受退款”。
              很多时候，看起来简单的一键退款，后面会带来更贵、更慢、也更被动的后果。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400">
                  <RefreshCcw className="h-5 w-5" />
                  选择改签时，通常更适合
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>您必须尽快到达目的地</li>
                  <li>您后面还有酒店、邮轮、活动或转机</li>
                  <li>自己重买机票成本会很高</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-700 dark:text-amber-400">
                  <RotateCcw className="h-5 w-5" />
                  选择退款时，通常更适合
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>您已经不想继续该行程</li>
                  <li>后续安排可以自行重做</li>
                  <li>目的地已失去实际意义</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次该选退款还是改签？</h2>
            <p className="mb-6 text-blue-100">
              如果您的航班已经取消、被改到次日，或者航司正在让您二选一，
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

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              为什么乘客最容易过早选错退款？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为退款按钮看起来像是最快结束麻烦的方式。可一旦接受退款，
                很多时候航空公司就不再继续负责把您送去最终目的地。
              </p>
              <p>
                如果您当时其实更需要的是“今天或明天必须到达”，
                那么退款反而可能让您进入更被动、更昂贵的局面。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">4 个常见场景</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  1. 明天还有邮轮、婚礼或商务会议
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这类情况下，很多人更需要的是尽快被送到目的地，而不是一笔退款。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  2. 假期已经被改坏，不想再去了
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这种情况下，退款路径往往更贴近您的真实目标。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  3. 航司说三天后才有下一班
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这时不要只机械接受安排，仍应认真比较替代方案是否合理、是否有更早 rerouting 可能。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  4. 已经接受改签，但后续还是晚到很多
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这并不当然等于放弃所有赔偿空间，很多案件里仍要继续判断现金赔偿和照护权利。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              必须说清楚：退款和现金赔偿不是同一个概念
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                很多乘客会把“票款退款”和“法定赔偿”混成一件事。其实这两者经常是不同的层次。
              </p>
              <p>
                您在某些案件里需要先决定的是: 我要不要继续这段旅行。
                而赔偿问题，则要再结合法规适用范围、延误原因和最终结果继续判断。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定自己该点“refund”还是坚持 rerouting？</h2>
            <p className="mb-6 text-slate-300">
              只要您把航司给的选项、目的地需求和后续安排整理出来，通常就能先判断哪条路径更适合您。
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

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">常见问题 FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  接受退款后，航司还要继续送我到目的地吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  很多时候不会，这正是为什么退款选择必须谨慎。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  接受改签后，还能继续谈赔偿吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  很多案件里仍然可以继续分析，改签不自动消灭所有赔偿空间。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  如果航司只给一个很晚的替代方案，我能坚持更早的吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  在很多案件里值得继续争取，尤其当更早方案客观存在且对您影响巨大时。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您的问题更偏向取消后的替代航班，继续看
                <Link
                  href="/zh/blog/athens-cancelled-flight-rerouting-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《雅典航班取消后，怎么逼航空公司安排替代航班？》
                </Link>
                。
              </p>
              <p>
                如果您还在区分退款和赔偿，也建议继续读
                <Link
                  href="/zh/blog/compensation-vs-refund-difference"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《航班补偿 vs 退款》
                </Link>
                。
              </p>
            </div>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
