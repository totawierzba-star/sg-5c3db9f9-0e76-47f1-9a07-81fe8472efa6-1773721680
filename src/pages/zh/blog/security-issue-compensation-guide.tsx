import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Shield,
  ShieldAlert,
  Siren,
} from "lucide-react";

export default function SecurityIssueCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="安全问题就一定免赔吗？Security Issue 延误与取消指南【2026】"
        description="航空公司说因为 security issue、security alert 或 safety reason 所以不能赔？本文讲清真实安全事件、机场安保决定和后续延误之间的 EU261 边界。"
        url="https://problemlot.com/zh/blog/security-issue-compensation-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "安全问题就一定免赔吗？Security Issue 延误与取消指南【2026】",
            description:
              "解释 security issue、security alert 与 EU261 赔偿边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/security-issue-compensation-guide",
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
                name: "航空公司说 security issue，我一定拿不到赔偿吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。真实的安全威胁、机场安保事件或官方安全决定通常更接近外部性事件，但这不代表所有后续延误、调机失败、次日改签和地面安排问题都自动免赔。",
                },
              },
              {
                "@type": "Question",
                name: "security issue 和普通运营问题有什么区别？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "安全问题通常意味着外部安保、机场、警方或官方安全流程介入；而普通运营问题更多发生在航空公司自身调度、机组和替代安排层面。两者不能混为一谈。",
                },
              },
              {
                "@type": "Question",
                name: "即使现金赔偿有争议，航司还要提供酒店和餐饮吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常仍要。照护义务与现金赔偿不同，餐饮、酒店、必要交通和合理改签仍然很重要。",
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
            <span className="text-slate-900 dark:text-white">安全问题与赔偿</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ShieldAlert className="h-4 w-4" />
              特殊情况
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              安全问题就一定免赔吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              当航空公司写着 <strong>security issue</strong>、<strong>security alert</strong>、
              <strong> safety reason</strong> 或 <strong>security concern</strong> 时，
              很多乘客会马上放弃。但真正要分清的是：
              <strong> 真实安全事件本身</strong>，以及
              <strong> 航司之后如何处理替代航班、改签到次日和地面照护</strong>，并不一定是一回事。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-07</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  更接近真实外部安全事件
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>真实安保威胁或安检事件</li>
                  <li>警方、机场或官方安全介入</li>
                  <li>正式安全程序导致的停飞或检查</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  仍值得继续核查的部分
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>后续调机和改签是否合理</li>
                  <li>航司是否把运营失败都归到 security</li>
                  <li>次日延误和过夜等待是否本可缩短</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">航空公司已经用“security issue”拒绝您了吗？</h2>
            <p className="mb-6 text-blue-100">
              很多被拒案件的问题不只是安全事件本身，而是航司把之后所有额外等待都一并算成“不可抗力”。
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
              为什么这类案件不能只看“有没有安全问题”？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为真实安全事件通常只解释了某个时间点为什么飞机不能放行、为什么需要安检复查、
                或为什么需要临时停飞。但对乘客来说，真正的损失往往来自后面的部分：
                航司有没有尽快安排替代航班、是否及时提供餐饮和酒店、以及为什么等待会从几小时扩大成一天。
              </p>
              <p>
                所以在很多案件里，<strong>真实安全事件</strong> 和
                <strong> 之后整条延误链都自动免赔</strong>，并不完全等同。
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
                在这些基础条件满足后，即便航司主张是 security issue，乘客仍应继续核查最终到达延误和后续处置。
              </p>
              <p>
                <strong>不一定受欧洲法规保护：</strong>
                如果这趟航班本来就不落在 EU261 范围，例如第三国承运人从土耳其飞回欧盟，
                那么问题不只是原因是否特殊，还包括欧洲规则本身能不能适用。这时可能要转看
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
              三种最常见的 security 场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 机场或官方安保介入
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最典型的外部事件。若警方、机场安保或官方安全程序介入，航司当然可能受到直接影响，但乘客仍要保留后续安排记录。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 安全检查结束后仍长期混乱
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这种场景下，真实安全原因和航司自身调度问题经常混在一起。乘客应继续核查后续等待到底有多少来自外部安全程序，多少是后续运营放大。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 被改到次日或错过联程
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这时即便现金赔偿有争议，酒店、餐饮、必要交通和合理改签通常仍在乘客权利范围内，不应被一句 security issue 全部带过。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">只收到一句“security issue”，却被拖到次日？</h2>
            <p className="mb-6 text-slate-300">
              这种情况下最容易被忽略的，是安全流程结束之后，航司是否合理减少了您的额外等待。
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
                第一，要求航司在书面说明里明确写出是官方安保、机场安全程序还是一般性的 safety issue，而不是只有一句笼统标签。
                第二，保留起飞时间、改签通知、最终到达时间、酒店餐饮票据和所有截图。第三，不要把次日延误自动视作都由安全事件造成。
              </p>
              <p>
                如果您还没有正式原因说明，先读
                <Link
                  href="/zh/blog/flight-delay-written-reason-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《为什么一定要拿书面原因》
                </Link>
                。如果案件还涉及外部限制或 ATC 问题，也建议继续看
                <Link
                  href="/zh/blog/airspace-closure-atc-restriction-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《空域关闭或 ATC 限制指南》
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
                  security issue 和 safety issue 是一回事吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。两者都可能指向真实外部事件，也可能被用作很宽泛的说明，所以更需要书面原因和完整时间线。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  安全检查已经结束后，我还被拖很久，这部分也要查吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  要查。很多争议恰恰在这里，因为后续等待是否合理，未必完全属于最初安全事件本身。
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
                如果案件还涉及 ATC、空域或外部限制，继续看
                <Link
                  href="/zh/blog/airspace-closure-atc-restriction-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《空域关闭或 ATC 限制指南》
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
