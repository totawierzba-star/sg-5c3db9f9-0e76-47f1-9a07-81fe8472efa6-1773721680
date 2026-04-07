import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Flag,
  Route,
  Scale,
} from "lucide-react";

export default function FinalDestinationDelayRuleGuide() {
  return (
    <LayoutZh>
      <SEO
        title="什么叫最终目的地？EU261 里最容易被误解的规则【2026】"
        description="赔偿为什么看最终目的地晚点，而不是第一段晚了多久？本文讲清 final destination、联程票、转机失败和单独出票之间的关键区别。"
        url="https://problemlot.com/zh/blog/final-destination-delay-rule-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "什么叫最终目的地？EU261 里最容易被误解的规则【2026】",
            description:
              "解释 EU261 中 final destination、最终到达延误、联程票和单独出票差别的中文指南。",
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
            datePublished: "2026-04-06",
            dateModified: "2026-04-06",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://problemlot.com/zh/blog/final-destination-delay-rule-guide",
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
                name: "为什么第一段只晚了 40 分钟，也可能拿到赔偿？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "因为很多联程案件看的是最终目的地的到达延误，而不是单独某一段晚了多久。若第一段延误导致错过转机并最终晚到数小时，仍可能触发赔偿。",
                },
              },
              {
                "@type": "Question",
                name: "什么情况下不看最终目的地，而看单独一段？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "如果您是分开买票、独立出票，很多时候第二段并不和第一段构成同一联程，风险和赔偿判断就会分开。",
                },
              },
              {
                "@type": "Question",
                name: "最终目的地是不是指转机机场？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常不是。最终目的地一般是您这张联程票约定的最后到达城市，而不是中途转机点。",
                },
              },
              {
                "@type": "Question",
                name: "如果我在伊斯坦布尔或阿姆斯特丹转机失败，最终目的地怎么计算？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常看您原本这张联程票最后应到达的城市，以及您实际抵达那里时晚了多久，而不是只看转机机场发生了什么。",
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
            <span className="text-slate-900 dark:text-white">最终目的地规则</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Scale className="h-4 w-4" />
              赔偿基础
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              什么叫最终目的地？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              这是 EU261 里最容易被误解、却最决定结果的概念之一。很多乘客一直盯着第一段晚了多久，
              但法律上真正关键的，常常是您最后到底什么时候到达整张票写好的终点。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 8 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Flag className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  联程票常见逻辑
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>看整张票的最后目的地</li>
                  <li>看您最终实际到达时晚了多久</li>
                  <li>第一段小延误也可能引发整案赔偿</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见误区
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>把转机机场当成最终目的地</li>
                  <li>只看第一段晚点时长</li>
                  <li>分开买票却误以为仍按联程计算</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次到底该看哪一段延误？</h2>
            <p className="mb-6 text-blue-100">
              如果您的航班涉及转机、联程票或错过下一段，现在就可以先做一次免费资格检查。
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
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Route className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              为什么最终目的地比第一段更重要？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为很多案件真正造成损失的，不是第一段本身，而是第一段把后面的整条链条都拖坏了。
                您可能只晚了 35 分钟，但因此错过下一段，最终晚到 7 小时。
              </p>
              <p>
                在这种情况下，法律通常不会只盯着前面那 35 分钟，
                而是更看整段联程的最终到达结果。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">4 个最常见场景</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  1. 柏林 → 伊斯坦布尔 → 曼谷，同一张票
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  关键通常看曼谷，也就是最终目的地，而不是只看伊斯坦布尔这一段发生了什么。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  2. 上海 → 阿姆斯特丹 → 里斯本，同一张票
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  如果阿姆斯特丹误机，很多时候仍会看您最终到达里斯本的时间。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  3. 伦敦 → SAW 一张票，SAW → 迪拜另一张票
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这类分开出票通常不再当然按整个“最终目的地迪拜”计算，第二段风险常常是您自己承担。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  4. 雅典 → 罗得岛，单段直飞
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  这种没有后续联程时，最终目的地就是这一段本身的终点。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              必须说清楚：联程票和分开买票不是同一种游戏
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                如果您是联程票，最终目的地的概念通常更强，第一段误机更容易被看成整段失败。
              </p>
              <p>
                如果您是分开买票，第二段很多时候不会自动被纳入第一段的保护逻辑里，
                这也是为什么 self-transfer 风险明显更高。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定这次到底该看第一段还是最终目的地？</h2>
            <p className="mb-6 text-slate-300">
              只要有您的订票结构、转机点和最终实际到达时间，就能先把判断逻辑理顺。
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
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">常见问题 FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  最终目的地就是转机机场吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  通常不是。最终目的地一般是整张票约定的最后一站，而不是中途换乘点。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  为什么只晚了 30 到 40 分钟也可能有赔偿？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  因为小延误可能导致错过联程，最终在真正的目的地晚到数小时。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  分开买票时还会看最终目的地吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  很多时候不会按同样逻辑看待，因为第二段不当然属于第一段的联程保护范围。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您的问题更像分开买票误机，继续看
                <Link
                  href="/zh/blog/self-transfer-risk-istanbul"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《在伊斯坦布尔自己分开买票转机，错过下一段怎么办？》
                </Link>
                。
              </p>
              <p>
                如果您是标准联程误机，也建议继续读
                <Link
                  href="/zh/blog/istanbul-missed-connection-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《在伊斯坦布尔错过转机怎么办？》
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
