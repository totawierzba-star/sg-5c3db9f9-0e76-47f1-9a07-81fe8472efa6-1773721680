import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Route,
  ShieldAlert,
  Ticket,
} from "lucide-react";

export default function AirlineReroutedWithoutConsentGuide() {
  return (
    <LayoutZh>
      <SEO
        title="航司没问我就改到别的航班，合法吗？Rerouting 指南【2026】"
        description="航空公司未经明确同意就把你改到别的日期、别的航班或更长转机路线，怎么办？本文讲清 rerouting、consent、refund 与 EU261 边界。"
        url="https://problemlot.com/zh/blog/airline-rerouted-without-consent-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "航司没问我就改到别的航班，合法吗？Rerouting 指南【2026】",
            description:
              "解释 airline rerouting、未经同意改签、refund、最终目的地与 EU261 边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/airline-rerouted-without-consent-guide",
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
                name: "航空公司没问我就把我改到别的航班，这正常吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "航司在中断行程后可以提出替代路线，但是否合理、是否等同于您已接受，以及是否还能主张退款或其他权利，要看改签质量和通知方式。",
                },
              },
              {
                "@type": "Question",
                name: "如果新航班改到第二天，或者转机时间特别长，我可以拒绝吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多情况下值得认真评估。替代方案并不一定因为“有航班”就自动合理，尤其当它显著恶化您的到达时间或行程结构时。",
                },
              },
              {
                "@type": "Question",
                name: "未经同意改签后，我还可以走 EU261 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "有可能。关键还是原始航班是否落在欧洲规则范围内，以及新的替代方案是否造成明显晚到、改到次日或其他权利争议。",
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
            <span className="text-slate-900 dark:text-white">未经同意改签与替代路线</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Route className="h-4 w-4" />
              改签边界
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              航司没问我就改到别的航班，合法吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客打开邮件或 App 时才发现，原来的直飞没了，系统已经自动把自己改到
              <strong> 第二天</strong>、<strong>更长转机</strong>、<strong>别的机场</strong>
              或完全不同的时间。最常见的困惑是：航司是不是只要帮你“找了个替代航班”，就算已经解决问题？
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
                  先判断这些点
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>新路线是否显著更差</li>
                  <li>您是否真的明确同意过</li>
                  <li>最终目的地到达时间被推迟了多久</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>系统改签了就等于我接受了</li>
                  <li>只要有替代航班，航司就没问题</li>
                  <li>改到次日也不影响 EU261 判断</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">被自动改到更差路线，不确定还能不能拒绝？</h2>
            <p className="mb-6 text-blue-100">
              先免费检查这次 rerouting 是合理替代，还是已经明显改变了您的到达时间、机场或整段行程价值。
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
              为什么“已经帮你改到别的航班”不一定就够了？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为替代路线的质量差异可能非常大。原本的直飞，如果被改成两次转机；原本的上午到达，如果被改到深夜甚至第二天；
                原本到市区近的机场，如果被改到另一个城市或远端机场，乘客实际遭受的影响就不只是“换了一班飞机”。
              </p>
              <p>
                很多案件的关键并不是航司有没有给出某个替代选项，而是：
                <strong> 这个替代方案是否合理</strong>、<strong> 您是否真的同意</strong>、
                <strong> 最终到达损失有多大</strong>。所以自动改签不应被理解成自动终局。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-700 dark:text-amber-300" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                什么时候更可能受欧洲法规保护，什么时候不一定？
              </h2>
            </div>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                <strong>更可能受欧洲法规保护：</strong>
                如果原始航班本身满足欧洲乘客规则的适用条件，而新的 rerouting 又导致您明显晚到、
                改到次日、转机大幅拉长或到达不同机场，那么这类案件通常值得继续按欧洲规则分析。
              </p>
              <p>
                <strong>不一定受欧洲法规保护：</strong>
                如果航班本身不在相关规则适用范围内，或者变化只是较小的运营调整，
                那么争议更可能落在合同履行、退款选择或服务质量层面，而不是直接进入 EU261 金额赔偿逻辑。
              </p>
              <p>
                也就是说，关键不是“有没有被改签”，而是
                <strong> 原始航班是否受保护</strong> 以及
                <strong> 新路线到底差了多少</strong>。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的自动改签争议
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 原本直飞，被改成长转机
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最典型的“表面有替代方案，实际体验大幅下降”的情况，尤其会直接影响最终目的地到达时间。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 被改到第二天或更晚
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类情况往往已经不只是“换班次”，而是会直接带来住宿、接送、工作计划和后续行程的连锁损失。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 被改到别的机场或不同承运结构
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  一旦目的机场、转机机场或实际承运人变化，争议就不再只是时间问题，还会影响地面交通和责任识别。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">自动改签不等于自动接受</h2>
            <p className="mb-6 text-slate-300">
              越是这种系统已经替你“选好新航班”的情况，越应该先确认它到底是在帮你，还是在明显降低你的行程价值。
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
              乘客现在最该保留哪些证据？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                请保留原始行程、自动改签后的新路线、通知邮件或 App 截图、是否点击接受的记录、最终到达时间，以及新增的酒店、交通和餐饮开支凭证。
                如果到达机场也变了，更要记录地面交通差异和额外成本。
              </p>
              <p>
                如果您还没搞清楚这更接近取消、重大改时间还是退款/改签选择问题，也建议继续看
                <Link
                  href="/zh/blog/flight-time-change-notification-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《航司改了起飞时间，算取消吗》
                </Link>
                、
                <Link
                  href="/zh/blog/refund-vs-rerouting-choice-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《退款还是改签到最终目的地》
                </Link>
                和
                <Link
                  href="/zh/blog/cancellation-vs-major-schedule-change-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《取消 vs 重大时间变更》
                </Link>
                。
              </p>
            </div>
          </section>

          <section
            id="faq"
            className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">常见问题 FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  我没点确认，但系统已经显示新航班了，这算我接受了吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不应简单这样理解。系统层面的重排和乘客明确同意，并不是同一回事，尤其当替代方案明显更差时。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  新航班还是把我送到终点，只是晚很多小时，这还重要吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  很重要。最终目的地的实际到达时间，本来就是很多乘客权利分析里的核心因素。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果改到其他机场，我可以要求地面交通费用吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类费用非常值得保留证据，因为到达机场变化通常会直接带来额外成本和时间损失。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您想先快速判断一趟航班本身是否落在欧洲规则范围内，继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果您的问题还叠加了不同承运人、代码共享或 OTA 渠道，也建议继续看
                <Link
                  href="/zh/blog/codeshare-operating-carrier-compensation-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《代码共享航班延误找谁赔》
                </Link>
                和
                <Link
                  href="/zh/blog/ota-travel-agent-airline-responsibility-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《OTA、平台、代理责任指南》
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
