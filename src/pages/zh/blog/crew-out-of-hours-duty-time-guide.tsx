import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  ShieldAlert,
  Users,
} from "lucide-react";

export default function CrewOutOfHoursDutyTimeGuide() {
  return (
    <LayoutZh>
      <SEO
        title="机组超时就一定免赔吗？Crew Out of Hours 指南【2026】"
        description="航空公司说因为 crew out of hours、duty time exceeded 或 crew timed out 所以不能赔？本文讲清机组超时、前序延误和 EU261 的关键边界。"
        url="https://problemlot.com/zh/blog/crew-out-of-hours-duty-time-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "机组超时就一定免赔吗？Crew Out of Hours 指南【2026】",
            description:
              "解释 crew out of hours、duty time exceeded 与 EU261 赔偿边界的中文指南。",
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
            datePublished: "2026-04-07",
            dateModified: "2026-04-07",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://problemlot.com/zh/blog/crew-out-of-hours-duty-time-guide",
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
                name: "航空公司说机组超时，我一定拿不到赔偿吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。机组超时本身通常不是自动免赔的万能理由，关键要看为什么会超时，以及这是否源于航空公司本来就应管理的前序延误、排班和备班问题。",
                },
              },
              {
                "@type": "Question",
                name: "crew out of hours 和 crew shortage 是一回事吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不完全一样。crew shortage 更偏向缺人或备班不足，而 crew out of hours 是法定飞行或值勤时限被触发。两者都常与航司自身运营安排密切相关。",
                },
              },
              {
                "@type": "Question",
                name: "即使现金赔偿有争议，酒店和餐饮还要给吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常仍要。照护义务与现金赔偿不同，酒店、餐饮、必要交通和合理改签仍是乘客的重要权利。",
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
            <span className="text-slate-900 dark:text-white">机组超时与赔偿</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ShieldAlert className="h-4 w-4" />
              特殊情况
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              机组超时就一定免赔吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              当航空公司写着 <strong>crew out of hours</strong>、<strong>duty time exceeded</strong>、
              <strong> crew timed out</strong> 或 <strong>flight time limitations</strong> 时，
              很多乘客会马上觉得这一定没法再追。可真正要分清的是：
              <strong> 机组为何触发时限</strong>，以及
              <strong> 航司是否本来就能通过排班、备班和前序调度减少这次结果</strong>，并不一定是一回事。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-07</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Clock3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  更值得继续核查的情况
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>前序航班先发生可控延误</li>
                  <li>航司没有合理备班或替代机组</li>
                  <li>只给出一句 crew timed out 的笼统说明</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  真正要看的核心
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>为何超时，是前因还是结果</li>
                  <li>航司是否已采取合理替代措施</li>
                  <li>这趟航班本身是否落在 EU261 适用范围内</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">航司已经用“crew out of hours”拒绝您了吗？</h2>
            <p className="mb-6 text-blue-100">
              很多被拒案件并不是因为机组时限本身，而是乘客把它误当成了一个自动终局理由。
              先免费检查，再决定要不要继续追。
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
              为什么机组超时不能自动等于特殊情况？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为机组超时往往只是延误链条中的最后一个结果，而不是最初的原因。
                如果前序航班已经因为运营、排班、技术或其他可控问题而拖延，
                最终触发 crew out of hours，航空公司就很难简单地把最后这一环单独包装成当然免赔。
              </p>
              <p>
                也就是说，<strong>超时本身</strong> 很重要，但更重要的是
                <strong> 超时是怎么来的</strong>。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              什么时候明确更可能受欧洲法规保护，什么时候不一定？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                <strong>更可能受 EU261 保护：</strong>
                航班从欧盟机场出发，不论航空公司国籍；或者由欧盟承运人执飞并飞往欧盟。
                在这些基础条件满足后，如果 crew timed out 是由前序可控延误、排班失衡或备班不足引发，乘客通常更值得继续核查。
              </p>
              <p>
                <strong>不一定受欧洲法规保护：</strong>
                如果这趟航班本来就不落在 EU261 范围，例如第三国承运人从土耳其飞回欧盟，
                那么争议不只是“原因算不算特殊情况”，还涉及能否适用欧洲规则本身。这时可能要转看
                <Link
                  href="/zh/blog/eu261-turkey-flights-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  欧盟与土耳其航班边界
                </Link>
                或
                <Link
                  href="/zh/blog/turkey-shy-pass-passenger-rights"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  SHY-PASS 指南
                </Link>
                。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的 crew out of hours 场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 前序航班先晚点，导致机组触发时限
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最常见也最需要继续往前追原因的一类。真正的问题往往不只是最后的超时，而是前面那段延误为什么发生。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 备班或替代机组不足
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这更像航司内部运营组织问题。若没有合理备班安排，航司往往更难仅靠一句 duty time exceeded 就结束争议。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 被改到次日或错过联程
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这时即便现金赔偿有争议，酒店、餐饮、必要交通和合理改签通常仍在乘客权利范围内，不应被一句 crew out of hours 全部带过。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">只收到一句“crew timed out”，却被拖到次日？</h2>
            <p className="mb-6 text-slate-300">
              这种情况下最容易被忽略的，是前序问题和后续替代安排是否本来可以做得更好。
              现在就先核查资格。
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
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              乘客现在最该做什么？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                第一，要求航司明确写出是 crew out of hours、duty time exceeded 还是前序延误导致超时，而不是只有一句 operational reasons。
                第二，保留起飞时间、改签通知、最终到达时间、酒店餐饮票据和所有截图。第三，不要把机组超时自动视作一个独立且无法挑战的结论。
              </p>
              <p>
                如果您还没有正式原因说明，先读
                <Link
                  href="/zh/blog/flight-delay-written-reason-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《为什么一定要拿书面原因》
                </Link>
                。如果案件还涉及机组生病或缺员，也建议继续看
                <Link
                  href="/zh/blog/crew-shortage-sick-crew-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《机组生病或人员不足就一定免赔吗？》
                </Link>
                。
              </p>
            </div>
          </section>

          <section id="faq" className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">常见问题 FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  crew out of hours 就等于不可抗力吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不等于。它更常常是结果，而不是最初原因，所以仍要继续看前序链条。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果前一班先晚点，导致本班机组超时，我这部分也要查吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  要查。很多争议恰恰在这里，因为真正关键往往是前序延误为何发生以及航司是否有合理替代方案。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  没有 EU261 现金赔偿时，酒店和吃饭的钱还值得保留吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  值得。照护费用和现金赔偿不是同一层面，票据依然很重要。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果案件更偏向机组缺员或排班问题，继续看
                <Link
                  href="/zh/blog/crew-shortage-sick-crew-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《机组生病或人员不足就一定免赔吗？》
                </Link>
                。
              </p>
              <p>
                如果您想先快速确认航班是否落在 EU261 范围内，再看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                和
                <Link
                  href="/zh/blog/refund-vs-rerouting-choice-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《退款还是改签到最终目的地》
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
