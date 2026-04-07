import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Plane,
  Scale,
} from "lucide-react";

export default function CancellationVsMajorScheduleChangeGuide() {
  return (
    <LayoutZh>
      <SEO
        title="取消航班和大改时是一回事吗？赔偿区别指南【2026】"
        description="航司把航班提前很多小时、推迟到第二天，算取消还是普通改时？本文讲清 cancellation、major schedule change、退款与改签权利的区别。"
        url="https://problemlot.com/zh/blog/cancellation-vs-major-schedule-change-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "取消航班和大改时是一回事吗？赔偿区别指南【2026】",
            description:
              "解释航班取消、大幅改时、次日改签与赔偿边界的中文指南，帮助乘客区分 cancellation 和 major schedule change。",
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
              "@id":
                "https://problemlot.com/zh/blog/cancellation-vs-major-schedule-change-guide",
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
                name: "航班没被标记为 cancelled，只是改到第二天，还算取消吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多时候需要具体分析。某些大幅改时在法律效果上可能非常接近取消，不能只看航司邮件里用了哪个词。",
                },
              },
              {
                "@type": "Question",
                name: "大改时后，我还能要求退款或改签吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多场景下仍可以。关键要看改动幅度、通知时间和您是否接受了替代方案。",
                },
              },
              {
                "@type": "Question",
                name: "改时和取消在赔偿上差别很大吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "可能有明显差别。是否触发赔偿，往往取决于通知时间、替代航班安排以及最终实际到达结果。",
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
            <span className="text-slate-900 dark:text-white">取消 vs 大改时</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Scale className="h-4 w-4" />
              赔偿基础
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              取消航班和大改时是一回事吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              这是乘客最容易被“文字游戏”误导的地方之一。航司邮件里可能写的是
              “schedule change”，但对您来说，影响已经和真正取消几乎一样:
              行程被打碎、酒店要重订、甚至航班被挪到了第二天。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
                  <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  乘客该看什么
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>原始时间改了多少</li>
                  <li>航司是在什么时候通知您的</li>
                  <li>替代航班把您送到终点晚了多久</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>只看邮件标题是取消还是改时</li>
                  <li>以为只要没写 cancelled 就不能赔</li>
                  <li>没保存最初确认的原始起飞时间</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次到底算取消还是大改时？</h2>
            <p className="mb-6 text-blue-100">
              如果您的航班被提前很多小时、推迟到次日，或者被换成完全不同的时刻，
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
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <CalendarClock className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              为什么 “只是改了时间” 也可能非常重要？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为乘客真正在乎的，不是航司内部系统用哪个标签，
                而是自己的行程是否已经被实质性打碎。
              </p>
              <p>
                如果一趟上午航班被改到第二天凌晨、下午被改到深夜、
                或者直接导致您少住一晚酒店、错过活动、错过转机，
                那这件事的法律后果往往不能轻描淡写地理解成“只是改时”。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">4 个典型场景</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  1. 航班提前 8 小时
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  对航司来说可能叫 schedule change，但对乘客来说很可能已经等于原行程被取消并重排。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  2. 原定今天飞，结果改到明天
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这类案件通常不能只按“轻微改时”理解，因为过夜安置、终点延误和替代运输都变得关键。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  3. 航司提前两周通知您换了时间
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这时要重点看通知时间和替代方案，而不是只看 “航班有没有飞”。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  4. 临近出发才被大幅改时
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这种情况通常更敏感，因为对乘客的实际影响已经非常接近取消。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              必须说清楚：退款和改签是两条不同路径
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                当航班被大幅改时或接近取消时，乘客往往会面临两个核心方向：
                要么接受退款，要么坚持被改送到最终目的地。
              </p>
              <p>
                这两条路在很多案件里并不完全兼容，所以不要在没想清楚前，
                仅仅因为航司发来一个按钮就立刻点“accept refund”。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定这次邮件到底是取消还是大改时？</h2>
            <p className="mb-6 text-slate-300">
              只要您有原始航班时间、航司通知时间和替代方案，就能先把案件方向判断清楚。
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
                  没写 cancelled，就一定不是取消吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。某些大幅改时在法律效果上可能已经非常接近取消。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  改到第二天就一定有赔偿吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。还要结合通知时间、替代航班、适用法规和具体原因一起判断。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  为什么一定要保留原始确认时间？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  因为一旦航司改时，后续判断影响大小和通知时点时，原始时间就是最核心的比较基准。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您的航班已经被改到第二天，继续看
                <Link
                  href="/zh/blog/charter-flight-rebooked-next-day-rights"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《包机被改到第二天，乘客有哪些权利？》
                </Link>
                。
              </p>
              <p>
                如果您更关注取消后的替代航班，也建议读
                <Link
                  href="/zh/blog/athens-cancelled-flight-rerouting-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《雅典航班取消后，怎么逼航空公司安排替代航班？》
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
