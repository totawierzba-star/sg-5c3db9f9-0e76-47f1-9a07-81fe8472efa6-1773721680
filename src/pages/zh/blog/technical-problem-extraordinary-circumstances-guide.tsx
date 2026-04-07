import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Wrench,
} from "lucide-react";

export default function TechnicalProblemExtraordinaryCircumstancesGuide() {
  return (
    <LayoutZh>
      <SEO
        title="技术故障就一定免赔吗？航空公司最常见借口解析【2026】"
        description="航空公司说是技术故障、维护问题、零件故障，就一定属于特殊情况吗？本文讲清 ordinary technical problems 和 extraordinary circumstances 的关键边界。"
        url="https://problemlot.com/zh/blog/technical-problem-extraordinary-circumstances-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "技术故障就一定免赔吗？航空公司最常见借口解析【2026】",
            description:
              "解释航司技术故障、维护问题与 extraordinary circumstances 之间边界的中文指南。",
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
              "@id":
                "https://problemlot.com/zh/blog/technical-problem-extraordinary-circumstances-guide",
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
                name: "航空公司说是技术故障，我是不是就不能索赔了？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。很多普通技术故障、维护失误、前序飞机连锁问题，并不会自动构成 extraordinary circumstances。",
                },
              },
              {
                "@type": "Question",
                name: "什么样的技术问题更可能被视为真正例外？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常更接近外部、异常且非航司日常运营风险范围内的问题，才更可能被视为真正例外，而不是所有常见机械故障。",
                },
              },
              {
                "@type": "Question",
                name: "如果航司只口头说“technical issue”，够吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不够。乘客应尽量索要更具体的书面说明，并保留时间线和现场证据。",
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
            <span className="text-slate-900 dark:text-white">技术故障借口</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ShieldAlert className="h-4 w-4" />
              特殊情况
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              技术故障就一定免赔吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              这是航空公司最常见、也最容易让乘客直接放弃的一类说法。可现实里，
              “technical issue” 往往只是一个很宽泛的标签，远远不等于法律上当然免赔。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-07</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Wrench className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  常见不自动免赔的情况
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>普通机械故障</li>
                  <li>日常维护和零件问题</li>
                  <li>前序飞机晚点带来的连锁影响</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  更接近真正例外的方向
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>极少见且外部性的异常事件</li>
                  <li>不属于航司日常运营风险范围的问题</li>
                  <li>可被具体说明、而非泛泛而谈的特殊情形</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次 technical issue 是真例外还是借口？</h2>
            <p className="mb-6 text-blue-100">
              如果航空公司已经用技术故障、零件问题或维护原因拒绝了您，
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
              为什么“technical issue” 这么容易被滥用？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为这个词听起来很专业，也很难让普通乘客当场反驳。
                但从法律和索赔逻辑看，关键不在于用了什么词，
                而在于这个问题到底是不是航空公司日常经营和维护中本就应承担的风险。
              </p>
              <p>
                如果航司只是笼统说“technical issue”，
                却不给更具体的书面说明，那往往正说明还需要继续核实。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              必须说清楚：不是所有技术问题都叫 extraordinary circumstances
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                很多乘客一看到“技术故障”就以为自己已经输掉了。
                其实在不少案件里，真正的问题反而是航司在尝试把普通运营风险包装成特殊情况。
              </p>
              <p>
                这也是为什么书面原因、前序航班信息和完整时间线非常关键。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定这次 technical issue 到底能不能挡赔偿？</h2>
            <p className="mb-6 text-slate-300">
              只要您有航司说明、航班号和大致时间线，就能先判断这是不是值得继续追的案件。
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

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您还没拿到书面说明，先读
                <Link
                  href="/zh/blog/flight-delay-written-reason-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《航班延误后，为什么一定要拿书面原因？》
                </Link>
                。
              </p>
              <p>
                如果航司还提到特殊情况，也建议继续看
                <Link
                  href="/zh/blog/extraordinary-circumstances-explained"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《特殊情况解释》
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
