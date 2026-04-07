import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Plane,
  ShieldAlert,
  Ticket,
} from "lucide-react";

export default function CodeshareOperatingCarrierCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="代码共享航班延误找谁赔？营销航司 vs 实际承运人指南【2026】"
        description="代码共享航班延误、取消或误机后，到底该找出票航司还是实际执飞航司？本文讲清 codeshare、marketing carrier、operating carrier 与 EU261 的关键边界。"
        url="https://problemlot.com/zh/blog/codeshare-operating-carrier-compensation-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "代码共享航班延误找谁赔？营销航司 vs 实际承运人指南【2026】",
            description:
              "解释 codeshare、marketing carrier、operating carrier、EU261 和索赔责任路径的中文指南。",
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
              "@id": "https://problemlot.com/zh/blog/codeshare-operating-carrier-compensation-guide",
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
                name: "代码共享航班延误后，应该找出票航司还是实际执飞航司？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很多 EU261 案件里，关键对象通常是实际承运人，也就是当天真正执行航班的航空公司，而不是只看票面代码属于谁。",
                },
              },
              {
                "@type": "Question",
                name: "票面是欧盟航空公司代码，但实际执飞是非欧盟航司，还一定受 EU261 保护吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。是否受 EU261 保护，仍要看出发地、实际承运人和航段结构，不能只看营销代码或订票页面上的品牌。",
                },
              },
              {
                "@type": "Question",
                name: "代码共享就一定比 self-transfer 更安全吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常结构上更强，但仍要看是否为统一运输安排、是否同一 PNR、以及最终是谁实际执行航班。代码共享不等于所有争议都会自动简化。",
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
            <span className="text-slate-900 dark:text-white">代码共享与承运责任</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              责任判断
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              代码共享航班延误找谁赔？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客的机票上写着一家熟悉的航空公司代码，但到了机场才发现，
              <strong>真正执飞的其实是另一家航空公司</strong>。一旦发生延误、取消或误机，
              最容易出错的第一步就是找错对象。
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
                  关键判断
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>先看谁是实际执飞航司</li>
                  <li>再看航班是否满足 EU261 适用条件</li>
                  <li>最后再分析 PNR、转机和最终目的地</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>只看票面代码，不看实际承运人</li>
                  <li>把营销品牌当成自动赔偿主体</li>
                  <li>误以为代码共享一定等于欧盟保护</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">不确定该找哪家航空公司索赔？</h2>
            <p className="mb-6 text-blue-100">
              代码共享案件最容易在第一步就走错方向。先免费检查实际承运人、票面代码和航班适用规则。
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
              什么是代码共享，为什么它会影响索赔？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                代码共享的意思是，您在订票时看到的是 A 航空公司的航班号，但当天真正飞这趟航班的可能是 B 航空公司。
                这在联盟航司、跨洲转机和区域支线航班里非常常见。
              </p>
              <p>
                对乘客来说，订票页面看上去像是“我买的是某家大航司的票”，但在 EU261 争议里，
                <strong>真正重要的往往是实际承运人</strong>。这就是为什么很多人明明记得自己买的是某个品牌，
                最后却发现索赔对象并不是它。
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
                <strong>更可能受 EU261 保护：</strong>
                如果航班从欧盟机场出发，通常保护范围更广；或者如果相关航段满足 EU261 的承运和路线条件，也可能落入欧洲法规保护。
                在代码共享结构里，分析时不能只看票面代码，而要看
                <strong> 谁是实际执飞航司</strong>。
              </p>
              <p>
                <strong>不一定受 EU261 保护：</strong>
                如果航班是从欧盟外起飞、实际承运人也不是欧盟航司，仅仅因为票面上挂了某个欧盟品牌代码，
                并不自动意味着整段都受 EU261 保护。营销代码和法律适用范围，不是一回事。
              </p>
              <p>
                同样地，代码共享虽然往往比 self-transfer 结构更强，但仍然要继续判断是否是一张统一运输安排、是否同一 PNR、
                是否看最终目的地，以及谁才是实际承运人。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              三个最常见的判断错误
            </h2>
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  1. 票面是欧盟航空公司代码，就自动受 EU261 保护
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定。EU261 的适用不能只看 marketing carrier，还要看出发地和实际承运人。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  2. 订票网站显示的是大航司品牌，所以理赔一定找它
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  这在代码共享案子里特别容易错。很多情况下，真正应被重点分析的对象是当天执行航班的航空公司。
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  3. 代码共享就不需要再看 PNR 和联程结构
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  也不对。是否同一运输安排、是否看最终目的地、是否为统一行程，仍然会直接影响误机和赔偿分析。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">代码共享、联程、误机责任，一次看清楚</h2>
            <p className="mb-6 text-slate-300">
              如果您已经看到机票上写着“operated by ...”，这通常就是判断责任方向的关键线索之一。
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
              乘客现在最该保留什么证据？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                请优先保留订票确认邮件、电子客票、登机牌，以及所有写着
                <strong> “operated by”</strong> 的截图或文件。很多案件的第一步，就是确认您买的是谁卖的票、谁实际飞、谁拒赔。
              </p>
              <p>
                如果您还不确定谁是正确索赔对象，也建议继续看
                <Link
                  href="/zh/blog/actual-carrier-charter-flight-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《谁才是真正负责的承运人》
                </Link>
                、
                <Link
                  href="/zh/blog/open-jaw-mixed-carriers-pnr-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《不同航司、不同 PNR 还是一段行程吗》
                </Link>
                和
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

          <section
            id="faq"
            className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">常见问题 FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  “Operated by” 这行字为什么这么重要？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  因为它通常揭示了当天真正执行航班的是谁，而这在很多 EU261 案件里正是责任判断的核心。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  代码共享航班也能按最终目的地算延误吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  如果它属于统一运输安排并满足相关条件，通常仍可能按最终目的地分析；但不能跳过对承运结构和适用范围的判断。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  如果客服让我去找出票平台，我还值得继续核查吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  值得。平台、营销航司和实际承运人并不总是同一个角色，很多拒绝都只是把您推向错误对象。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您想先快速判断航班是否落在欧洲法规范围内，继续看
                <Link
                  href="/zh/blog/eu261-flight-eligibility-checklist"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《EU261 适用检查清单》
                </Link>
                。
              </p>
              <p>
                如果您的问题更接近自助转机、独立机票或行李直挂，也建议继续看
                <Link
                  href="/zh/blog/self-transfer-separate-tickets-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《Self-transfer 指南》
                </Link>
                和
                <Link
                  href="/zh/blog/through-checked-baggage-vs-through-ticket-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《行李直挂不等于完整联程保护》
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
