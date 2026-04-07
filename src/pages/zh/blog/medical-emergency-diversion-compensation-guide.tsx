import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  Ambulance,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  ShieldAlert,
} from "lucide-react";

export default function MedicalEmergencyDiversionCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="机上紧急医疗情况就一定免赔吗？Medical Emergency 改降指南【2026】"
        description="航空公司说因 passenger medical emergency 或 emergency landing 所以不能赔？本文讲清机上急症、备降、后续延误和 EU261 的关键边界。"
        url="https://problemlot.com/zh/blog/medical-emergency-diversion-compensation-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "机上紧急医疗情况就一定免赔吗？Medical Emergency 改降指南【2026】",
            description:
              "解释 passenger medical emergency、emergency landing 与 EU261 赔偿边界的中文指南。",
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
                "https://problemlot.com/zh/blog/medical-emergency-diversion-compensation-guide",
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
                name: "航空公司说因机上乘客突发疾病改降，我一定拿不到赔偿吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。真正的医疗紧急情况通常更接近外部性事件，但这并不意味着所有后续延误、次日改签和地面安排问题都自动免赔，仍需看时间线和航空公司的后续应对。",
                },
              },
              {
                "@type": "Question",
                name: "如果我是被拖累的其他乘客，也可能有权利吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "有可能。关键不只是最初是否发生紧急情况，还包括航司是否合理地减少了后续影响，以及这趟航班本身是否落在 EU261 适用范围内。",
                },
              },
              {
                "@type": "Question",
                name: "即使现金赔偿有争议，航空公司还要安排酒店和餐饮吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常仍要。照护义务与现金赔偿并不是同一件事，乘客仍应主张餐饮、酒店、必要交通和合理改签。",
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
            <span className="text-slate-900 dark:text-white">医疗紧急情况与改降</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ShieldAlert className="h-4 w-4" />
              特殊情况
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              机上紧急医疗情况就一定免赔吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              航空公司如果写着 <strong>medical emergency</strong>、<strong>passenger illness</strong>、
              <strong> emergency diversion</strong>，很多乘客会立刻觉得自己完全没机会。
              但真正要分清的是：
              <strong> 紧急救助本身、临时改降决定，以及其后几小时甚至一整夜的运营处置，并不一定都被同一套逻辑覆盖</strong>。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-07</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <HeartPulse className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  更接近真实例外的部分
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>飞行途中真实发生的急症或生命风险</li>
                  <li>为救治乘客进行的紧急改降或返航</li>
                  <li>必要的医疗与安全处置</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  仍值得继续核查的部分
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>后续替代飞机或改签是否合理</li>
                  <li>航司是否把次生运营混乱全推给最初急症</li>
                  <li>次日重飞和过夜等待是否本来可减少</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">航司已经用“medical emergency”拒绝您了吗？</h2>
            <p className="mb-6 text-blue-100">
              真实急症值得尊重，但这不等于航空公司后续所有处置都不需要再解释。
              先做免费检查，别因为一个标签就提前放弃。
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
              为什么这类案件不能只看“有没有急症”？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为最初的医疗紧急情况通常只解释了某一个决定，例如临时返航、备降或长时间停机。
                但对其他乘客来说，后面的关键问题还包括：
                航空公司有没有迅速安排替代航班、是否及时沟通、是否合理提供酒店和餐饮、以及为什么额外等待会继续扩大。
              </p>
              <p>
                换句话说，<strong>真实急症</strong>和<strong>之后整条延误链都自动免赔</strong>之间，
                仍然可能存在明显差别。
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
                在这些基础条件满足后，哪怕航司主张是医疗紧急情况，乘客仍然可以继续核查最终到达延误和后续处置是否合理。
              </p>
              <p>
                <strong>不一定受欧洲法规保护：</strong>
                如果航班本来就不落在 EU261 范围内，例如第三国承运人从土耳其飞回欧盟，
                那么争议不只是“原因是否特殊”，还包括能否适用欧洲规则本身。这时可能要转看
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
              三种最常见的 medical emergency 场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 飞行途中乘客突发急症，飞机临时改降
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最典型、也最容易被理解的外部性场景。改降本身通常很合理，但乘客仍应保留完整时间线和后续安排证据。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 上一程飞机发生医疗改降，拖累到您这班
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类案件最容易被一句 previous flight medical emergency 概括过去。
                  但对您而言，还应继续核查航司是否采取了合理替代措施，是否把整个后续链条都推给了前序事件。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 被迫过夜或改到次日
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这时即使现金赔偿存在争议，照护义务通常也仍然存在。酒店、餐饮、必要交通和合理改签都不应被忽视。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">因为 medical emergency 被拖到次日，还没人给清楚解释？</h2>
            <p className="mb-6 text-slate-300">
              这种情况下最容易被忽略的，就是后续运营安排本身是否合理。
              现在就先核查资格，再决定是否继续追。
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
                第一，要求航司明确说明是本航班还是前序航班发生医疗紧急情况，以及为什么最终造成了当前这段延误。
                第二，保留改签时间、到达时间、酒店餐饮票据和所有通知截图。第三，不要因为航司用了 medical emergency 这个词，就默认后续所有损失都无法再谈。
              </p>
              <p>
                如果您还没拿到书面原因，先读
                <Link
                  href="/zh/blog/flight-delay-written-reason-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《为什么一定要拿书面原因》
                </Link>
                。如果这次还涉及改降或地面接驳，也可以看
                <Link
                  href="/zh/blog/diverted-flight-greece-turkey-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《改降别的机场怎么办》
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
                  机上有人突发疾病，我作为其他乘客还值得查赔偿吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  值得。虽然最初事件可能是正当急救原因，但后续延误是否合理扩大、照护是否到位，仍然值得核查。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  航司只写 operational reasons，没有明确写 medical emergency，怎么办？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这更说明您需要追问更具体的书面理由。模糊标签通常不足以让乘客自己做出可靠判断。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果这趟航班本身不受 EU261 保护，还需要继续查吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  仍然可能需要，因为照护费用、改签责任和其他制度下的权利仍可能存在，只是分析路径不同。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您还想先确认这趟航班是否在 EU261 范围内，可继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果案件还涉及过夜、餐饮或交通费用，再看
                <Link
                  href="/zh/blog/airport-meal-voucher-delay-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Meal Voucher 指南》
                </Link>
                和
                <Link
                  href="/zh/blog/airport-taxi-hotel-reimbursement-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《酒店和出租车报销指南》
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
