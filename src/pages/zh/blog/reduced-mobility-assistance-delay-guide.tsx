import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  Accessibility,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Ticket,
} from "lucide-react";

export default function ReducedMobilityAssistanceDelayGuide() {
  return (
    <LayoutZh>
      <SEO
        title="机场轮椅或特殊协助太晚，导致误机怎么办？PRM 权利指南【2026】"
        description="已申请轮椅、PRM 或特殊协助，但机场或航司安排太晚导致误机、错过登机或改签到次日怎么办？本文讲清 assistance delay、PRM、refund 与 EU261 边界。"
        url="https://problemlot.com/zh/blog/reduced-mobility-assistance-delay-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "机场轮椅或特殊协助太晚，导致误机怎么办？PRM 权利指南【2026】",
            description:
              "解释 PRM assistance、轮椅服务延误、误机、refund 与 EU261 边界的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/reduced-mobility-assistance-delay-guide",
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
                name: "我提前申请了轮椅服务，但机场来得太晚导致误机，这一定是我的责任吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。如果您已按要求提前申请协助、按时到场并等待指定服务，却因协助安排失误导致无法登机，责任不应简单归到乘客身上。",
                },
              },
              {
                "@type": "Question",
                name: "PRM 或特殊协助延误，能按 EU261 索赔吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "有时值得继续分析，但关键仍要看航班本身是否落在欧洲规则范围内，以及误机根因是机场协助链条、航司流程还是乘客自身时间问题。",
                },
              },
              {
                "@type": "Question",
                name: "如果最终被改到第二天，酒店和交通还能追回吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多情况下都值得保留票据并继续核查，尤其当延误协助直接导致额外住宿、餐饮和地面交通成本时。",
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
            <span className="text-slate-900 dark:text-white">PRM 协助延误与误机</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Accessibility className="h-4 w-4" />
              特殊协助
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              机场轮椅或特殊协助太晚，导致误机怎么办？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              对需要轮椅服务、PRM 协助或其他特殊支持的乘客来说，误机的原因有时并不是自己晚到，
              而是<strong> 已经申请好的协助服务没有按时到位</strong>。当机场、地勤或航司之间衔接失灵时，
              后果可能是错过值机、错过登机、错过转机，甚至被迫改到第二天。
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
                  <li>保留协助申请确认、时间和渠道</li>
                  <li>记录到场时间与实际等待时长</li>
                  <li>保存机场、柜台和客服的所有回复</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>只要没赶上，就一定算旅客迟到</li>
                  <li>特殊协助出问题只能投诉，不能追偿</li>
                  <li>这类问题和 EU261 完全无关</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">协助服务没按时到，结果错过航班了？</h2>
            <p className="mb-6 text-blue-100">
              先免费检查这次问题更像机场协助链条失误、航司流程问题，还是已经升级成可追的改签、住宿和误机损失案件。
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
              为什么 PRM 协助延误会特别容易被误判？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为从系统记录看，最终结果常常只是“旅客未及时到达值机口或登机口”，但真正的延误链条可能早在更前面就开始了：
                您已经按时到机场，却一直等不到轮椅、接驳人员或安全陪同。
              </p>
              <p>
                这类案件最关键的，不是最后几分钟发生了什么，而是
                <strong> 您何时申请协助</strong>、
                <strong> 何时到场</strong>、
                <strong> 协助方何时才真正出现</strong>。如果这些时间线清晰，责任分析就会和普通“旅客迟到”完全不同。
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
                <strong>更可能需要继续分析欧洲规则：</strong>
                如果相关航班本身满足欧洲乘客规则的适用范围，而协助服务延误又直接导致错过航班、被改到次日、
                最终目的地明显晚到或产生额外住宿与交通损失，这类案件值得继续往旅客权利方向深挖。
              </p>
              <p>
                <strong>不一定直接进入 EU261 金额赔偿路径：</strong>
                如果问题主要停留在服务安排不佳、等待体验差，但没有实质性影响您的航班结果或最终到达时间，
                那就更可能是服务投诉与照护义务问题，而不一定形成典型 EU261 赔偿案。
              </p>
              <p>
                所以关键在于：协助延误有没有
                <strong> 真正打断您的运输链条</strong>，而不只是让过程变得不舒服。
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
                  1. 已提前申请轮椅，但值机前无人来接
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最常见的起点问题。乘客到了机场，却被迫在约定地点长时间等待，最后整个时间缓冲被吃掉。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 转机时协助衔接失败
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类情况尤其严重，因为乘客可能明明在真实联程结构里，却因接力协助失效而错过下一段。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 机场和航司互相推责
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最容易让案件停在原地的情况。机场说服务外包归地勤，航司说不是自己负责，但对乘客来说时间线证据仍然是核心。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">特殊协助失效，不应自动变成“旅客迟到”</h2>
            <p className="mb-6 text-slate-300">
              这类案件最值得追的地方，往往不是最后关门那一刻，而是此前已经出现的等待、失联和流程断裂。
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
                请保留协助申请邮件或编号、到达机场时间、等待照片、工作人员姓名或岗位、柜台记录、改签到次日的通知，以及酒店、交通和餐饮开支票据。
                如果机场有专门 PRM 电话或服务台，也请保留通话与聊天记录。
              </p>
              <p>
                如果您还没搞清楚这更接近误机、机场排队问题还是后续改签争议，也建议继续看
                <Link
                  href="/zh/blog/gate-change-airport-queue-missed-flight-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《登机口变更或排队太久错过航班》
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
                  href="/zh/blog/how-to-document-delay-costs-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《怎么证明酒店、餐饮和出租车费用》
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
                  我提前很久到了机场，为什么最后还是算“没赶上”？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这正是此类案件最关键的争议点之一。是否真的属于“没赶上”，需要把协助服务链条的延误也一起算进去。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  PRM 协助问题和机场有关，航司就完全没责任吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不应简单这样理解。责任识别往往更复杂，尤其当协助申请、登机流程和改签安排都与航司沟通链条相关时。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果我最后还是飞了，只是一路都非常混乱，还值得留证吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  值得。特别是当您最终到达时间、转机结果或额外费用已经受到影响时，完整证据依然很重要。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您想先快速判断这趟航班本身是否落在欧洲规则范围内，继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果您的问题还叠加了最终目的地晚到、机场地面等待或自动改签到更差路线，也建议继续看
                <Link
                  href="/zh/blog/final-destination-delay-rule-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《最终目的地规则》
                </Link>
                和
                <Link
                  href="/zh/blog/airline-rerouted-without-consent-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《航司没问我就改到别的航班》
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
