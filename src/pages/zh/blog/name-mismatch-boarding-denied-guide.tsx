import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeAlert,
  CheckCircle2,
  ShieldAlert,
  Ticket,
} from "lucide-react";

export default function NameMismatchBoardingDeniedGuide() {
  return (
    <LayoutZh>
      <SEO
        title="机票名字写错了怎么办？拼写错误、缺少中间名与拒载指南【2026】"
        description="机票姓名和护照不完全一致，会被拒绝登机吗？本文讲清 typo、middle name、surname mismatch、denied boarding 与 EU261 的关键边界。"
        url="https://problemlot.com/zh/blog/name-mismatch-boarding-denied-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "机票名字写错了怎么办？拼写错误、缺少中间名与拒载指南【2026】",
            description:
              "解释机票姓名错误、middle name、surname mismatch、拒载与 EU261 边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/name-mismatch-boarding-denied-guide",
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
                name: "机票上少了 middle name，一定会被拒绝登机吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。很多情况下，是否真的会被拒绝要看具体航司、航线、证件要求和姓名差异的程度，但绝不能想当然。",
                },
              },
              {
                "@type": "Question",
                name: "如果是姓和名顺序错误，或有明显拼写错误，还能改吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多时候应尽快联系出票渠道或航司申请更正。是否免费、是否能原地修复，要看票规、渠道和错误性质。",
                },
              },
              {
                "@type": "Question",
                name: "因为名字不符被拒绝登机，就一定能拿 EU261 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不一定。如果拒载的核心原因是证件或姓名问题，这往往不属于典型的 involuntary denied boarding 赔偿路径，仍需具体分析。",
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
            <span className="text-slate-900 dark:text-white">姓名错误与拒载</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <BadgeAlert className="h-4 w-4" />
              登机边界
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              机票名字写错了怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客直到值机柜台才发现，机票姓名和护照并不完全一致。可能只是少了
              <strong> middle name</strong>、多了一个字母、姓和名顺序颠倒，或者拼写出现 typo。
              这类问题看起来很小，但一旦被拒绝登机，代价往往很高。
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
                  先做这三件事
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>立刻对照护照和电子客票全文</li>
                  <li>保留出票渠道和航司回复记录</li>
                  <li>尽快判断是小 typo 还是核心身份不符</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>少一个中间名一定没问题</li>
                  <li>只差一个字母绝对能过</li>
                  <li>被拒载就自动能拿赔偿</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">已经遇到姓名不符或值机被卡住？</h2>
            <p className="mb-6 text-blue-100">
              先免费检查这次问题更像证件与票规争议，还是已经延伸成错误拒载、改签或额外损失案件。
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
              哪些姓名问题最常见？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                最常见的是少写 middle name、姓名顺序颠倒、拼写少一两个字母、姓氏多空格或连字符处理不同。
                还有些问题出现在中文拼音、双姓、婚后姓氏变化或护照旧名和新名之间。
              </p>
              <p>
                真正麻烦的地方在于，这些错误并不是都能一概而论。
                有些航司和航线对小差异较宽松，有些则严格按证件核对。
                所以最危险的不是“名字错了”，而是
                <strong> 乘客自己假设问题不大，结果拖到机场才处理</strong>。
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
                <strong>更可能需要继续分析 EU261：</strong>
                如果问题不只是单纯姓名不符，而是航司、OTA 或代理在更名、更正、通知或替代安排上又造成了额外错误，
                或者后续还叠加了改签、取消、错误拒载等因素，那么案件可能不能只停留在“名字写错了”这一层。
              </p>
              <p>
                <strong>不一定受 EU261 保护：</strong>
                如果拒绝登机的核心原因是乘客证件信息和机票信息不匹配，
                这通常不属于最典型的强制拒载赔偿路径。也就是说，
                <strong> 因姓名或证件问题被拒载</strong>，并不自动等于可以按欧盟拒载赔偿标准处理。
              </p>
              <p>
                换句话说，关键在于这到底是
                <strong> 乘客信息问题</strong>，还是后续已经演变成
                <strong> 航司或出票链路处理失当</strong>。这会直接改变分析方向。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见的高风险场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 少 middle name，以为一定没问题
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  很多情况下确实不一定致命，但绝不能一概而论。国际线、签证要求严格的航线和某些航司规则会让风险放大。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 姓名顺序或拼写明显不符
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类错误比少一个空格更危险，尤其当系统或边检看上去会把您识别成不同的人时，值机和登机都可能被卡住。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. OTA 或代理承诺“机场再说”
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最危险的拖延方式之一。很多姓名错误如果要改，越接近起飞越贵，甚至根本来不及。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">先分清“小差异”还是“身份不匹配”</h2>
            <p className="mb-6 text-slate-300">
              这一步判断几乎决定后面是简单更正、票规争议，还是已经变成更严重的拒载和损失问题。
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
                请保留护照照片页、电子客票、订单确认、值机失败截图、柜台或客服回复，以及所有要求更名或更正的聊天和邮件记录。
                如果您已经被迫重买机票，也要保存付款凭证和时间线。
              </p>
              <p>
                如果您还没搞清楚这更像证件问题、票规问题还是拒载边界问题，可以继续看
                <Link
                  href="/zh/blog/denied-boarding-document-visa-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《因证件或签证被拒载怎么办》
                </Link>
                、
                <Link
                  href="/zh/blog/ota-travel-agent-airline-responsibility-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《OTA、平台、代理责任指南》
                </Link>
                和
                <Link
                  href="/zh/blog/holiday-flight-overbooking-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Overbooking 被拒载指南》
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
                  中文拼音少一个字母，一定上不了飞机吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定，但这绝不是可以赌的事情。差异看似很小，也可能在值机、安检或边检节点被放大。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  机场柜台说不能改名，这就完全没办法了吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  要看具体错误类型和出票渠道。有些问题本来就必须通过原出票方或特定流程处理，柜台不能改并不代表前面就没有别的处理机会。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  因姓名问题被拒载，和超售拒载一样吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  通常不一样。超售更接近典型的 involuntary denied boarding，而姓名或证件不符更常涉及资格和文件审核问题。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您想先判断这趟航班本身是否受欧洲法规保护，继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果您的问题已经延伸到 missed check-in、登机口关闭或票务链条错误，也建议继续看
                <Link
                  href="/zh/blog/missed-check-in-gate-closure-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《错过值机或登机口关闭怎么办》
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
