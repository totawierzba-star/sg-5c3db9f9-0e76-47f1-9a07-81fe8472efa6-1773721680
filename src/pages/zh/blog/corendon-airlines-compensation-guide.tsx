import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CalendarRange,
  CheckCircle2,
  Plane,
  Scale,
  XCircle,
} from "lucide-react";

export default function CorendonAirlinesCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="Corendon Airlines 延误、取消、改点怎么索赔？【2026 指南】"
        description="Corendon 航班飞往土耳其、希腊和度假岛屿时，若发生延误、取消或大幅改时，什么时候受 EU261 保护，什么时候不受？本文讲清包机、返程和改签责任。"
        url="https://problemlot.com/zh/blog/corendon-airlines-compensation-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Corendon Airlines 延误、取消、改点怎么索赔？【2026 指南】",
            description:
              "面向中文乘客的 Corendon Airlines 索赔指南，覆盖度假航线、航班取消、大幅改点、包机和返程保护边界。",
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
                "https://problemlot.com/zh/blog/corendon-airlines-compensation-guide",
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
                name: "Corendon 的度假航班延误后，也能拿到 €250、€400、€600 吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "可以，前提是该航班落入 EU261 的适用范围并满足赔偿条件。是否是度假航班或包机，不会自动取消这项权利。",
                },
              },
              {
                "@type": "Question",
                name: "Corendon 提前几天改时间，算取消还是普通改签？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "要看改动幅度和通知时间。对很多乘客来说，大幅提前或推迟的改点，法律效果可能接近取消，需要具体分析通知时间和替代航班安排。",
                },
              },
              {
                "@type": "Question",
                name: "从安塔利亚或希腊岛屿返欧的 Corendon 航班，也一定受 EU261 保护吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "不一定。关键仍是起飞地、目的地和实际承运人。特别是第三国返欧时，很多乘客最容易误判。",
                },
              },
              {
                "@type": "Question",
                name: "如果 Corendon 的航班改到第二天，酒店和餐饮谁负责？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "只要达到相应条件，航空公司通常仍需提供改签、退款和照护义务，包括需要过夜时的住宿与必要交通安排。",
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
            <span className="text-slate-900 dark:text-white">Corendon Airlines 指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              航空公司指南
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Corendon Airlines 延误、取消、改点怎么索赔？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Corendon 的问题不只是在“晚点”，还经常出现在旺季改时间、削减班次、前后挪动航班和度假返程上。
              对乘客来说，最难的不是记住航班号，而是弄清这到底是延误、取消，还是法律上接近取消的大幅改点。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 12 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看结论</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  常见受保护的情况
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>欧盟机场出发的 Corendon 航班</li>
                  <li>飞往土耳其、希腊岛屿的包机和度假航班</li>
                  <li>短时通知取消或大幅改时的欧盟出发行程</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                  <XCircle className="h-5 w-5" />
                  常见最容易误判的情况
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>第三国返欧的返程航班</li>
                  <li>乘客只收到“改时间”通知就以为不能赔</li>
                  <li>以为包机或旅游航班不适用 EU261</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先确认 Corendon 这趟到底算延误还是取消？</h2>
            <p className="mb-6 text-blue-100">
              如果您的 Corendon 航班被临时改时、取消、延误到次日，或者返程出现混乱，
              现在就可以先做一次免费资格检查。
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
              <CalendarRange className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              Corendon 为什么经常引发“改点”纠纷？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为度假航司的排班高度季节化，一旦旺季产能、机场时刻或机队安排收紧，
                航班时间往往会被大幅前移或后移。对乘客来说，收到的可能不是一句“cancelled”，
                而是“您的航班时间有变更”。
              </p>
              <p>
                但法律上，某些大幅改点并不只是普通调整。尤其在临近出发才通知、
                且替代航班时间差很大的情况下，很多案件需要按接近取消的逻辑重新判断。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">6 个 Corendon 高频场景</h2>
            <div className="overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 dark:bg-gray-900 dark:text-white">
                    <th className="p-4">场景</th>
                    <th className="p-4">EU261 常是否适用</th>
                    <th className="p-4">重点问题</th>
                    <th className="p-4">结论方向</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4">阿姆斯特丹 → 安塔利亚，延误 4 小时</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">欧盟出发</td>
                    <td className="p-4">常可走 EU261</td>
                  </tr>
                  <tr>
                    <td className="p-4">安塔利亚 → 阿姆斯特丹，次日到达</td>
                    <td className="p-4 font-semibold text-amber-700 dark:text-amber-400">需具体分析</td>
                    <td className="p-4">返程边界</td>
                    <td className="p-4">不应直接套用去程结论</td>
                  </tr>
                  <tr>
                    <td className="p-4">布鲁塞尔 → 罗得岛，提前 10 天改到凌晨</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">常可分析</td>
                    <td className="p-4">改点幅度 + 通知时间</td>
                    <td className="p-4">可能接近取消逻辑</td>
                  </tr>
                  <tr>
                    <td className="p-4">雅典 → 布鲁塞尔，临时取消</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">欧盟内航班</td>
                    <td className="p-4">常可直接评估 EU261</td>
                  </tr>
                  <tr>
                    <td className="p-4">博德鲁姆 → 德国，返程改到次日</td>
                    <td className="p-4 font-semibold text-amber-700 dark:text-amber-400">需重判</td>
                    <td className="p-4">第三国返欧</td>
                    <td className="p-4">看承运结构与照护义务</td>
                  </tr>
                  <tr>
                    <td className="p-4">巴黎 → 希腊岛屿，旅游包机取消</td>
                    <td className="p-4 font-semibold text-green-700 dark:text-green-400">通常适用</td>
                    <td className="p-4">包机是否受保护</td>
                    <td className="p-4">包机不自动失去 EU261</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              什么时候必须明确说“这趟不一定受欧洲法规保护”？
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                尤其是从土耳其等第三国返欧的 Corendon 航班，最容易被乘客误判为
                “既然目的地是欧洲，就当然受 EU261 保护”。这是错误的。
              </p>
              <ul className="space-y-2">
                <li>欧盟出发的 Corendon 航班，通常更容易受 EU261 保护。</li>
                <li>第三国返欧时，必须重新判断承运人结构和法规边界。</li>
                <li>不受 EU261，不等于航司没有照护、改签或退款义务。</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">大幅改点时，为什么不能只看“有没有起飞”？</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                因为很多案件的关键损失并不是“飞没飞成”，而是航班时间被挪到一个几乎破坏行程的程度。
                例如提前到半夜、推迟到次日、导致接送失效或少住一晚酒店。
              </p>
              <p>
                对 Corendon 这类度假航司来说，这种“不是取消但几乎等于取消”的情况非常常见，
                所以一定要保留最初确认的原始时间、后续所有变更通知和替代航班信息。
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定 Corendon 这次到底算取消还是改点？</h2>
            <p className="mb-6 text-slate-300">
              只要把原始航班时间、改后时间和通知日期整理出来，通常就能先判断案件方向。
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
                  Corendon 改时间但没取消，我还能索赔吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  可能可以。要看改动幅度和通知时点。有些大幅改点在法律效果上可能非常接近取消。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Corendon 包机也能走 EU261 吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  可以，只要该航班本身处于 EU261 适用范围内。包机身份不会自动剥夺乘客权利。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  土耳其返欧的 Corendon 航班为什么常说要重新判断？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  因为从第三国飞回欧盟时，法规边界和去程不一定相同。目的地在欧洲，并不自动等于受 EU261 保护。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  航班被改到第二天，航空公司要负责酒店吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  在很多场景里需要。尤其当乘客被迫过夜时，航空公司通常仍负有照护义务，包括住宿和必要交通安排。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您的问题更偏向包机和旅行社责任，继续看
                <Link
                  href="/zh/blog/charter-vs-scheduled-flight-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《包机延误了该找旅行社还是航空公司？》
                </Link>
                。
              </p>
              <p>
                如果案件涉及土耳其返欧的保护边界，也建议读
                <Link
                  href="/zh/blog/eu261-turkey-flights-compensation"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《土耳其航班也能拿 EU261 赔偿吗？》
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
