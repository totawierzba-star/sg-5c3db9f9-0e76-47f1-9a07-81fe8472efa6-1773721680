import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  ShieldAlert,
  Ticket,
} from "lucide-react";

export default function OpenJawMixedCarriersPnrGuide() {
  return (
    <LayoutZh>
      <SEO
        title="Open-jaw、不同航司、不同 PNR，还是一段行程吗？【2026】"
        description="不同航司、多个 PNR、open-jaw 或 interline 结构下，误机后到底谁负责？本文讲清 mixed carriers、PNR 和 EU261 的关键边界。"
        url="https://problemlot.com/zh/blog/open-jaw-mixed-carriers-pnr-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Open-jaw、不同航司、不同 PNR，还是一段行程吗？【2026】",
            description:
              "解释 open-jaw、mixed carriers、多个 PNR 与 EU261 责任边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/open-jaw-mixed-carriers-pnr-guide",
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
                name: "不同航司、多个航班号，还可能算一段联程吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "可能。关键不是品牌看起来有多复杂，而是是否存在统一运输结构，例如同一张票、同一合同安排、系统认可的连接或 interline 关系。",
                },
              },
              {
                "@type": "Question",
                name: "不同 PNR 就一定不是联程吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多时候风险会更大，但不能只看单一标签。真正关键仍是合同结构、出票方式、重签责任和实际承运关系。",
                },
              },
              {
                "@type": "Question",
                name: "open-jaw 会不会影响 EU261 计算？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "会影响分析方式。尤其要先分清哪些段仍属于同一运输安排，哪些只是乘客自己拼接出来的路线。",
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
            <span className="text-slate-900 dark:text-white">Open-jaw 与多个 PNR</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <GitBranch className="h-4 w-4" />
              结构判断
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Open-jaw、不同航司、不同 PNR，还是一段行程吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客最困惑的不是延误本身，而是
              “我这到底算一张票、两张票，还是半联程半自助？”
              当行程里出现 <strong>mixed carriers</strong>、<strong>interline</strong>、
              <strong> 多个 PNR</strong>、<strong>open-jaw</strong> 或不同城市进出时，
              <strong> 责任边界会立刻变复杂</strong>。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-07</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Ticket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  更像统一运输结构
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>统一出票或明确 interline / 联程安排</li>
                  <li>后续误机通常更看最终目的地</li>
                  <li>责任链条更可能连续</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  更像乘客自己拼接
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>多个独立 PNR 且责任分散</li>
                  <li>不同机场/城市跳转由自己承担</li>
                  <li>open-jaw 外观不代表自动联程保护</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这趟复杂行程到底该找谁负责？</h2>
            <p className="mb-6 text-blue-100">
              如果您的行程里有多个航司、多个 PNR、不同进出城市或奇怪的转机结构，
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
              为什么外观看起来像“一整趟”，法律上却可能不是？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为乘客看到的是完整路线，而法律常常先看的是合同结构。
                您可能从上海飞阿姆斯特丹，再从布鲁塞尔回北京，中间还有另一家航司；
                看起来像一整套安排，但实际责任链条可能已经被拆开。
              </p>
              <p>
                这也是为什么 <strong>多个航司</strong> 不一定等于 <strong>多个独立合同</strong>，
                但 <strong>多个 PNR</strong> 也不代表一定毫无连接。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              什么时候更可能受欧洲法规保护，什么时候不一定？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                <strong>更可能受 EU261 保护：</strong>
                当相关航段本身满足 EU261 条件，而且整段仍可被视作同一运输结构时，
                错过转机、最终目的地延误和后续重签就更可能沿着同一责任链分析。
              </p>
              <p>
                <strong>不一定受完整保护：</strong>
                如果 open-jaw、不同 PNR、不同机场或不同航司只是乘客自己拼接出来的路线，
                那么即便视觉上像一整趟，也不自动意味着整段都按同一逻辑保护。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的复杂票务结构
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 多个航司，但仍是统一联程
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最容易让乘客误判的场景。不同品牌并不自动打断责任链，关键要看出票和运输结构。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. open-jaw 或不同城市进出
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这会让“最终目的地”和“原计划行程”判断变复杂，需要更仔细拆开哪些段属于同一运输安排。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 多个 PNR、多个票号、多个机场
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这通常会显著削弱统一责任结构。乘客要特别小心，不要因为路线看起来连续就误以为一定有联程保护。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">您的行程看起来很复杂，不知道该找哪一家？</h2>
            <p className="mb-6 text-slate-300">
              这种情况下最重要的不是先猜谁负责，而是先把票号、PNR、实际承运人和最终到达延误拆开来看。
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
                第一，整理全部票号、PNR、出票确认和登机牌。第二，标记哪些段是统一出票、哪些段是自己后加的。第三，确认实际承运人是谁，以及最终到底晚到了哪一站。
              </p>
              <p>
                如果您还没搞清楚谁才是实际负责的一方，可以继续看
                <Link
                  href="/zh/blog/actual-carrier-charter-flight-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《谁才是实际承运人》
                </Link>
                。如果您更困惑的是最终目的地和误机计算，也建议继续看
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《最终目的地规则》
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
                  多个航司就一定不是一张受保护的联程吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。关键不是品牌数量，而是运输结构、出票方式和实际责任链条。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  多个 PNR 就一定说明我要自己承担全部风险吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  风险通常更大，但仍应先看实际合同和承运结构，不能只凭一个字段下结论。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  open-jaw 会让最终目的地判断更复杂吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  会，所以更需要把每一段是如何被出售和运输的拆开来看。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您更想先弄清楚到底谁在运营层面真正负责，继续看
                <Link
                  href="/zh/blog/actual-carrier-charter-flight-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《实际承运人指南》
                </Link>
                。
              </p>
              <p>
                如果您还想先看单独一段航班是否可能落在 EU261 范围内，再看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
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
