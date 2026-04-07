import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Camera,
  CheckCircle2,
  FileText,
  Receipt,
} from "lucide-react";

export default function HowToDocumentDelayCostsGuide() {
  return (
    <LayoutZh>
      <SEO
        title="航班延误后，怎么证明酒店、餐饮和出租车费用？【2026】"
        description="自己垫付了酒店、餐饮、出租车和机场交通后，怎样保留证据最有效？本文讲清票据、截图、书面原因和索赔时最容易缺失的证明。"
        url="https://problemlot.com/zh/blog/how-to-document-delay-costs-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "航班延误后，怎么证明酒店、餐饮和出租车费用？【2026】",
            description:
              "解释航班延误后如何保存酒店、餐饮、出租车和交通报销证据的中文指南。",
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
                "https://problemlot.com/zh/blog/how-to-document-delay-costs-guide",
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
                name: "只有信用卡账单，没有纸质小票，够吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "有时能作为辅助证据，但通常不如正式小票或电子发票稳定。最好同时保留付款记录、酒店确认邮件和现场照片。",
                },
              },
              {
                "@type": "Question",
                name: "拍航显和登机牌真的有用吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "很有用。它们能帮助把延误、改签和您发生费用的时间串起来，形成完整证据链。",
                },
              },
              {
                "@type": "Question",
                name: "什么样的花费最容易被质疑？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "通常是没有票据、金额过高、与延误关联不清、或者明显超出合理必要范围的消费。",
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
            <span className="text-slate-900 dark:text-white">费用取证指南</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <FileText className="h-4 w-4" />
              取证重点
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              航班延误后，怎么证明酒店、餐饮和出租车费用？
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              很多乘客真正输掉的不是案件本身，而是证据。花了钱却没留下足够清楚的记录，
              到后面就很难把“这笔费用”和“这次延误”牢牢绑定在一起。
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>更新于 2026-04-06</span>
              <span>•</span>
              <span>阅读时间 7 分钟</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Receipt className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">先看最短答案</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  最重要的 4 类证据
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>正式小票或电子发票</li>
                  <li>支付记录和预订确认</li>
                  <li>航显、改签短信、邮件截图</li>
                  <li>登机牌和现场照片</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  最常见缺口
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>没有票据只有口头回忆</li>
                  <li>有消费但缺少时间线</li>
                  <li>费用明显超出合理必要范围</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">想先判断这次自付费用还能不能追？</h2>
            <p className="mb-6 text-blue-100">
              如果您已经因为延误、取消或过夜垫付了酒店、餐食、出租车或机场交通，
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
              <Camera className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              先把时间线拍完整
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                很多乘客以为只要留好饭店发票就够了。其实真正强的证据链，不只是“花了钱”，
                而是能证明为什么在那个时间、那个地点、因为那趟延误而不得不花这笔钱。
              </p>
              <p>
                所以除了小票，航显、改签短信、值机柜台照片、登机牌和时间截图，
                都能帮您把整件事连成一条完整证据链。
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">4 种最值得保留的材料</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  1. 正式票据
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  酒店发票、出租车收据、餐厅小票、电子支付单据，能拿正式单据就尽量不要只留口头记录。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  2. 付款证明
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  银行卡记录、App 支付截图、预订确认邮件，可以辅助证明您真的支付了这笔费用。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  3. 延误和改签证据
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  航显照片、短信、邮件、改签确认，帮助解释为什么您必须发生这些支出。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  4. 基本现场照片
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  候机区、排队、值机柜台或酒店入住记录，能让时间线更完整、更可信。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              费用最容易被质疑的 3 种情况
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>金额明显过高，超过一般合理需要。</li>
              <li>没有任何票据，只能靠口头描述。</li>
              <li>看不出这笔消费和航班异常有什么直接联系。</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">不确定手里的票据够不够？</h2>
            <p className="mb-6 text-slate-300">
              只要把您已有的小票、截图和改签信息整理出来，通常就能先判断证据链强不强。
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
                  只有信用卡账单，没有酒店发票，够吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  能当辅助证据，但通常不如正式发票稳定。最好同时保留预订确认和支付记录。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  没拍航显照片会怎样？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  不一定致命，但会削弱时间线。只要还能补齐短信、邮件和改签记录，也能增强证据。
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  打车去酒店没有收据，只能用 App 截图，可以吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  很多时候可以作为有力辅助证据，尤其是能清楚显示时间、路线和金额时。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">延伸阅读</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                如果您更关心出租车和酒店能不能报，继续看
                <Link
                  href="/zh/blog/airport-taxi-hotel-reimbursement-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《航班延误后出租车和酒店能报销吗？》
                </Link>
                。
              </p>
              <p>
                如果您想知道为什么一定要拿书面说明，也建议继续读
                <Link
                  href="/zh/blog/flight-delay-written-reason-guide"
                  className="ml-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  《航班延误后，为什么一定要拿书面原因？》
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
