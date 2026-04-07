import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Stethoscope,
  Users,
} from "lucide-react";

export default function CrewShortageSickCrewGuide() {
  return (
    <LayoutZh>
      <SEO
        title="机组生病或人员不足就一定免赔吗？航司常见拒赔理由解析【2026】"
        description="航空公司说因为 crew sickness、crew shortage 或 operational reasons 所以不能赔？本文讲清机组生病、缺人和排班问题何时仍可能受 EU261 保护。"
        url="https://problemlot.com/zh/blog/crew-shortage-sick-crew-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "机组生病或人员不足就一定免赔吗？航司常见拒赔理由解析【2026】",
            description:
              "解释 crew sickness、crew shortage 与 EU261 赔偿边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/crew-shortage-sick-crew-guide",
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
                name: "航空公司说机组成员突然生病，我是不是就拿不到赔偿？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。关键不是口头说 crew sickness，而是该情况是否属于航空公司日常运营和备班安排本应覆盖的风险，以及航司是否采取了合理替代措施。",
                },
              },
              {
                "@type": "Question",
                name: "人员不足和排班错误也算 extraordinary circumstances 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多情况下并不当然算。crew shortage、roster problem、last-minute operational issue 往往更接近日常运营管理问题，而非真正外部性的特殊情况。",
                },
              },
              {
                "@type": "Question",
                name: "即使现金赔偿有争议，航空公司还必须安排酒店和餐饮吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常仍然要。照护义务与现金赔偿并不是同一件事，乘客仍应要求餐饮、酒店、必要交通和合理改签。",
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
            <span className="text-slate-900 dark:text-white">机组生病与缺员</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ShieldAlert className="h-4 w-4" />
              特殊情况
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              机组生病或人员不足就一定免赔吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              这也是航空公司很爱用的一类说法。短信里常写着
              <strong> crew sickness、crew shortage、operational reasons</strong>，
              让乘客误以为只要和机组有关，就一定属于特殊情况。现实里并没有这么简单。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-07</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Stethoscope className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  更常见的现实
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>排班失误不一定能挡赔偿</li>
                  <li>备班不足通常更像运营管理问题</li>
                  <li>单纯写 crew shortage 往往证据不够</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  真正要看什么
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>事件是否超出航司正常组织范围</li>
                  <li>是否已采取合理替代措施</li>
                  <li>这趟航班本身是否落在 EU261 适用范围内</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">航司用“机组问题”拒绝您了吗？</h2>
            <p className="mb-6 text-blue-100">
              很多这类拒赔并不是因为案件真的没希望，而是乘客被一个模糊理由吓退了。
              先做免费检查，再判断要不要继续追偿。
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
              为什么“crew shortage” 不能自动等于特殊情况？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为航空公司本来就负有组织航班、安排备班、处理临时缺员和控制轮班风险的责任。
                如果一个问题本质上属于日常运营管理的一部分，航司往往不能只用一句
                crew shortage 就把它包装成 extraordinary circumstances。
              </p>
              <p>
                这也是为什么很多案件里，乘客需要追问更细的信息：
                到底是单个机组成员突发健康事件？还是本来就排班过紧、备用人员不足、前序延误连锁导致这一班飞不出去？
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              什么时候更可能受欧洲法规保护，什么时候不受？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                <strong>更可能受 EU261 保护：</strong>
                航班从欧盟出发，不论航空公司国籍；或者由欧盟承运人执飞并飞往欧盟。
                只要基础适用条件满足，机组缺员、排班错乱、前序班机拖累等原因通常都值得继续核查，而不是直接认定免赔。
              </p>
              <p>
                <strong>不一定受欧洲法规保护：</strong>
                如果整趟航班本来就不落在 EU261 适用范围，例如第三国航司从土耳其飞回欧盟，
                那么争议就不只是“原因算不算特殊情况”，还涉及这趟航班是否能使用欧洲规则。
                这时可能要转看
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
              三种常见“机组问题”其实差别很大
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 突发个体健康事件
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  例如临飞前某位机组成员突发身体不适。即便如此，航司是否可完全免赔，
                  仍要看是否存在合理替补、是否能通过调度减少影响，以及延误最终为何扩大。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 备班不足与排班失衡
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这更像运营组织能力问题。很多乘客收到的短信会写 operational reasons 或 crew unavailable，
                  但这类表述本身并不足以证明航司当然免赔。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 前序延误引发的连锁缺员
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  如果前一班已经晚点，导致本班机组超时或来不及到位，
                  乘客还要继续追问根源到底是什么。很多时候，真正需要判断的是前序问题是否本来就属于航司可控的日常风险。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">只收到一句“due to crew shortage”？</h2>
            <p className="mb-6 text-slate-300">
              这类说明通常太模糊，不足以让乘客自己安全判断是否应放弃赔偿。
              先核查航班适用范围和延误原因，再决定下一步。
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
              现在最值得做的取证动作
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                要求更具体的书面原因，而不是只有 crew issue 这类模糊标签；保存登机口广播、短信、APP 推送和改签时间线；
                如果因为过夜或改到次日产生了酒店、餐饮、出租车费用，也要把票据留好。
              </p>
              <p>
                如果您还没有书面说明，先读
                <Link
                  href="/zh/blog/flight-delay-written-reason-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《为什么一定要拿书面原因》
                </Link>
                。如果航司同时还提到“特殊情况”，再看
                <Link
                  href="/zh/blog/technical-problem-extraordinary-circumstances-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《技术故障借口解析》
                </Link>
                和
                <Link
                  href="/zh/blog/strike-extraordinary-circumstances-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《罢工就一定免赔吗？》
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
                  航司短信写 operational reasons，是不是就默认属于特殊情况？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不是。operational reasons 反而常常说明问题仍在航空公司自身运营范围内，需要继续核查。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  机组成员生病和技术故障哪个更容易争议？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  两者都常被航司当作泛化标签使用。真正争议点不是词本身，而是是否属于日常运营风险，以及证据能否支撑航司的说法。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果这趟航班本来不受 EU261 保护，还值得查吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  仍值得。因为您可能还有其他规则路径或照护费用问题，但这就不是简单套用 EU261 了。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                想先判断这趟航班是否根本落在 EU261 里，可以继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果案件还涉及过夜和照护费用，再看
                <Link
                  href="/zh/blog/airport-taxi-hotel-reimbursement-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《出租车和酒店报销指南》
                </Link>
                和
                <Link
                  href="/zh/blog/airport-meal-voucher-delay-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Meal Voucher 指南》
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
