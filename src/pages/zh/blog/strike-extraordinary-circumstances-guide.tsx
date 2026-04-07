import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Plane,
  ShieldAlert,
  TowerControl,
  Users,
} from "lucide-react";

export default function StrikeExtraordinaryCircumstancesGuide() {
  return (
    <LayoutZh>
      <SEO
        title="罢工就一定免赔吗？航司罢工、机场罢工、空管罢工区别【2026】"
        description="航空公司说因为罢工所以不能赔？本文讲清 airline strike、airport strike、ATC strike 的核心区别，以及什么时候 EU261 仍然保护乘客。"
        url="https://problemlot.com/zh/blog/strike-extraordinary-circumstances-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "罢工就一定免赔吗？航司罢工、机场罢工、空管罢工区别【2026】",
            description:
              "面向中文乘客的 EU261 罢工场景指南，解释航空公司罢工、机场罢工与空管罢工的赔偿差异。",
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
                "https://problemlot.com/zh/blog/strike-extraordinary-circumstances-guide",
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
                name: "航空公司自己员工罢工，还能拿 EU261 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多情况下仍然可能。若罢工发生在航空公司自身运营体系内，例如飞行员、乘务员或地勤的内部劳资争议，往往不当然构成 extraordinary circumstances。",
                },
              },
              {
                "@type": "Question",
                name: "空管罢工和机场罢工有什么不同？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "空管罢工通常更接近外部性事件，更可能被航空公司用来主张免赔；机场安保、行李或地服罢工则要看罢工主体、航司控制范围和实际影响，不能一概而论。",
                },
              },
              {
                "@type": "Question",
                name: "罢工时即使没有现金赔偿，航空公司还要管酒店和餐饮吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常仍要。即使现金赔偿最终有争议，航司对乘客的照护义务，例如餐饮、酒店、交通和改签安排，通常不会自动消失。",
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
            <span className="text-slate-900 dark:text-white">罢工与特殊情况</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ShieldAlert className="h-4 w-4" />
              特殊情况
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              罢工就一定免赔吗？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              不一定。很多乘客一听到航空公司说“因为罢工，所以不能赔”，就直接放弃了。
              真正关键不是有没有罢工这两个字，而是
              <strong> 谁在罢工、罢工是否属于航空公司自身控制范围、以及航司是否仍需承担照护和改签义务</strong>。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-07</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <Plane className="h-5 w-5" />
                  航司内部罢工
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-200">
                  往往不自动免赔。飞行员、乘务员、地勤等内部劳资冲突，很多情况下仍可能受 EU261 保护。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <TowerControl className="h-5 w-5" />
                  空管罢工
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-200">
                  更接近外部性事件，更可能被认定为 extraordinary circumstances，但照护与改签义务通常仍在。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-blue-700 dark:text-blue-400">
                  <AlertTriangle className="h-5 w-5" />
                  机场或地服罢工
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-200">
                  不能一概而论。要看罢工主体、影响范围，以及航空公司是否能证明自己已采取合理措施。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">航司已经用“罢工”拒绝您了吗？</h2>
            <p className="mb-6 text-blue-100">
              很多被拒案件，真正争议点不是有没有罢工，而是这个罢工是否真的足以挡住
              EU261 现金赔偿。先免费检查，再决定要不要继续追。
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
              最重要的判断顺序：先问“谁在罢工”
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                同样叫“strike”，法律结果可能完全不同。很多乘客只看新闻标题写着
                strike，就以为案件一定结束了。但在 EU261 的语境里，
                <strong> 罢工主体</strong> 常常比“是否发生罢工”本身更重要。
              </p>
              <p>
                如果是航空公司自己员工的内部劳资纠纷，航司往往更难主张这属于完全无法控制的外部事件。
                相反，如果是空管系统、机场当局或国家层面的外部罢工，航司更可能拿它来主张免赔。
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
                航班从欧盟机场出发，不论航空公司来自哪里；或者航班由欧盟承运人执飞并飞往欧盟。
                在这些基础适用条件满足后，如果争议原因是航司自身员工罢工，乘客通常更有机会继续主张现金赔偿。
              </p>
              <p>
                <strong>不一定受欧洲法规保护：</strong>
                例如从土耳其飞回欧盟但承运人不是欧盟航空公司，或者整段行程本来就不在 EU261 适用范围内。
                这时就算航司说不是特殊情况，您也未必能走 EU261，而可能要看
                <Link
                  href="/zh/blog/turkey-shy-pass-passenger-rights"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  土耳其 SHY-PASS 规则
                </Link>
                或其他制度。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三种最常见罢工场景
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 航空公司内部员工罢工
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  如果是飞行员、乘务员、调度、地勤或其他直接属于该航司运营体系内的人员罢工，
                  航司通常更难把这类争议完全包装成 extraordinary circumstances。
                  这类场景下，很多乘客仍然应该继续核查赔偿资格。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 空管罢工或国家级空域限制
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这类场景更接近航司外部因素，航空公司更可能抗辩自己无法控制。
                  但即使如此，乘客也不应自动放弃，因为航司仍可能在改签、时间沟通和现场照护方面处理不当。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 机场安保、地服、行李系统罢工
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这是最容易出现灰区的一类。因为机场服务链很长，罢工主体未必直接属于航空公司，
                  但航司也不能只说一句 airport strike 就结束。是否免赔，仍需要看影响链条和证据。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定这次 strike 到底能不能挡赔偿？</h2>
            <p className="mb-6 text-slate-300">
              如果您只拿到一条很笼统的说明，例如 “due to strike” 或 “operational disruption”，
              现在就先做一次免费资格检查，别让含糊理由直接终结案件。
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
                第一，要求航司给出更具体的书面原因，而不是只有一句 strike。第二，保留航班通知、
                延误截图、改签时间和所有支出票据。第三，不要因为航司口头说“特殊情况”就默认自己没有权利。
              </p>
              <p>
                如果您还没拿到正式说明，可以先读
                <Link
                  href="/zh/blog/flight-delay-written-reason-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《为什么一定要拿书面原因》
                </Link>
                。如果这次涉及转机失败，也建议同时看
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
                  航空公司说是“industrial action”，是不是就一定拿不到赔偿？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。industrial action 只是一个宽泛标签，关键仍是罢工主体和控制范围。尤其是航司内部员工争议，
                  不能简单等同于当然免赔。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  没有 EU261 现金赔偿时，酒店和餐饮也没有了吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  通常不是。照护义务和现金赔偿是两个层面。很多情况下，即使对现金赔偿存在争议，
                  航司仍需承担餐饮、酒店、必要交通和改签安置。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  从土耳其飞回欧洲遇到罢工，也一定能用 EU261 吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。是否受 EU261 保护，先看出发地和承运人，再看延误原因。很多土耳其返欧场景并不自动落入 EU261，
                  可能要改看其他规则。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果航司说是技术原因又夹杂罢工说法，继续看
                <Link
                  href="/zh/blog/technical-problem-extraordinary-circumstances-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《技术故障就一定免赔吗？》
                </Link>
                。
              </p>
              <p>
                如果您卡在雅典或希腊岛屿机场，也可看
                <Link
                  href="/zh/blog/athens-strike-delay-rights"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《雅典机场罢工延误指南》
                </Link>
                和
                <Link
                  href="/zh/blog/heraklion-rhodes-strike-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《HER / RHO 罢工场景赔偿指南》
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
