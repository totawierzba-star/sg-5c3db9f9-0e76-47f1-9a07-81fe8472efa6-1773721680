import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Ban,
  CheckCircle2,
  FileWarning,
  ShieldAlert,
} from "lucide-react";

export default function DeniedBoardingDocumentVisaGuide() {
  return (
    <LayoutZh>
      <SEO
        title="因证件或签证被拒载怎么办？Denied Boarding 指南【2026】"
        description="因为 passport、visa、travel document 或 check-in issue 被拒绝登机，就一定能拿赔偿吗？本文讲清证件问题、拒载赔偿和 EU261 的关键边界。"
        url="https://problemlot.com/zh/blog/denied-boarding-document-visa-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "因证件或签证被拒载怎么办？Denied Boarding 指南【2026】",
            description:
              "解释 passport、visa、travel document 与 denied boarding 赔偿边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/denied-boarding-document-visa-guide",
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
                name: "因为签证或证件问题被拒绝登机，也一定能拿拒载赔偿吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。如果航空公司基于真实的证件、签证或入境要求问题拒绝登机，这通常不属于标准 overbooking 型拒载赔偿。关键是先分清到底是乘客材料问题，还是航司误判或流程错误。",
                },
              },
              {
                "@type": "Question",
                name: "证件问题和 overbooking 有什么不同？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "overbooking 通常是航司卖超座位导致的非自愿拒载；证件或签证问题则涉及乘客能否被合法运输和入境。两者的法律路径完全不同。",
                },
              },
              {
                "@type": "Question",
                name: "如果是航司自己误判我的文件，还值得继续追吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "值得。若文件本身有效、规则理解无误，而航司错误拒绝登机，案件就可能进入完全不同的争议路径，需要尽快保留书面说明和证据。",
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
            <span className="text-slate-900 dark:text-white">证件与签证拒载</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Ban className="h-4 w-4" />
              拒载边界
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              因证件或签证被拒载怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客一听到 denied boarding，就会立刻想到标准拒载赔偿。
              但如果问题涉及 <strong>passport</strong>、<strong>visa</strong>、
              <strong> residence permit</strong>、<strong> travel document</strong> 或值机合规，
              路径往往完全不同。真正关键是先分清：
              <strong> 到底是文件本身真的不合格，还是航空公司错误判断、错误执行或沟通不清</strong>。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-07</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <FileWarning className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  更像乘客文件问题的场景
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>签证或证件明显不满足入境要求</li>
                  <li>护照有效期确实不足</li>
                  <li>必需文件缺失且无法现场补足</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  更值得继续核查的场景
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>文件本身有效，但地勤或系统判断错误</li>
                  <li>航司没有给出清楚书面说明</li>
                  <li>您怀疑真实原因其实是 overbooking 或流程失误</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">您是因文件问题被挡下，还是怀疑航司判断错了？</h2>
            <p className="mb-6 text-blue-100">
              如果您手上还有护照照片、签证页、值机记录或拒载说明，
              现在就可以先做一次免费资格检查，判断这是不是值得继续追的案件。
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
              先分清：这是 overbooking，还是 document refusal？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                如果您已经到达登机口，却被告知“文件有问题”，第一反应通常会很慌。
                但从法律路径看，证件/签证拒载和超售型拒载并不是一回事。
                前者通常围绕您是否满足运输和入境条件，后者则是航司卖超了座位。
              </p>
              <p>
                也正因为如此，<strong>不是所有 denied boarding 都能直接套用标准拒载赔偿</strong>。
                关键在于拒载理由本身是否真实、准确、可被书面证明。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              什么时候更可能和 EU261 有关，什么时候不一定？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                <strong>更可能进入 EU261 拒载分析：</strong>
                当问题并不是真实的文件不合格，而是航司误判、错误拒载，或者所谓 document issue 实际掩盖了别的原因，例如超售或流程失败。
                此时即便案件复杂，也值得继续核查。
              </p>
              <p>
                <strong>不一定能走 EU261 标准拒载赔偿：</strong>
                如果乘客确实没有满足签证、护照有效期、目的地入境规则或其他必要文件要求，
                那通常并不是标准可赔的 overbooking 型拒载。
                也就是说，这类场景首先不是“欧盟保护不保护”，而是拒载理由本身是否成立。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的 document / visa 拒载场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 文件确实不满足规则
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  例如护照有效期不足、签证种类错误、入境许可缺失。此时航司通常会更强调自身有义务避免运输不合规乘客。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 文件本身没问题，但航司或地勤误判
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最值得继续追的场景之一。尤其当您持有有效签证、居留卡或转机资格，却仍被拒载时，书面说明和现场证据非常关键。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 航司口头说是文件问题，但书面理由模糊
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这时就要特别警惕。因为有时 document issue 只是一个宽泛说法，真正问题可能另有原因，甚至涉及超售或值机流程错误。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">被挡在值机柜台或登机口，却拿不到清楚解释？</h2>
            <p className="mb-6 text-slate-300">
              这种情况下最重要的不是先争吵，而是尽快固定证据：
              您的文件是什么、航司说了什么、是否有书面拒载说明。
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
                第一，要求书面说明到底是哪一项文件不合格，或者依据哪条入境规则拒绝运输。
                第二，保留护照、签证、居留卡、值机记录、登机口截图和聊天记录。第三，若您怀疑真实原因不是文件问题，而是超售或系统错误，必须尽快把这个怀疑固定在书面证据里。
              </p>
              <p>
                如果您怀疑这更像超售型拒载，可以继续看
                <Link
                  href="/zh/blog/holiday-flight-overbooking-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《度假航班超售被拒载怎么办？》
                </Link>
                。如果您还想先确认航班本身是否落在 EU261 范围内，也可看
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

          <section id="faq" className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">常见问题 FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  只要被拒绝登机，就一定有标准赔偿吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。先要分清是超售型非自愿拒载，还是证件、签证、安保或其他合规问题。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果我的文件其实没问题，但地勤不让我飞，还值得查吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  值得。这类误判案件往往很依赖书面说明和您手上当时的证件证据。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  航司不给书面说明怎么办？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  仍然要尽量保留柜台对话、短信、邮件、APP 通知和现场照片，因为这些会直接影响后续能否还原真实原因。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您怀疑真实原因其实是超售或非自愿拒载，继续看
                <Link
                  href="/zh/blog/holiday-flight-overbooking-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Overbooking 赔偿指南》
                </Link>
                。
              </p>
              <p>
                如果您还想先确认航班是否落在欧盟规则内，再看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                和
                <Link
                  href="/zh/blog/flight-delay-written-reason-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《为什么一定要拿书面原因》
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
