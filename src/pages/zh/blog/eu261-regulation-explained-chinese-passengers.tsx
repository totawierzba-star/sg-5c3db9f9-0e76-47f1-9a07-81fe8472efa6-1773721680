import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import Head from "next/head";
import { Scale, BookOpen, AlertCircle, CheckCircle, Globe, Users, FileText, ArrowRight, HelpCircle } from "lucide-react";

export default function EU261RegulationExplainedChinesePassengers() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "EU 261/2004法规适用于中国公民吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "是的！EU 261/2004法规适用于所有乘客，无论国籍。只要您乘坐的航班符合条件（从欧盟出发或欧洲航空公司运营），作为中国公民您享有与欧洲公民相同的权利。"
        }
      },
      {
        "@type": "Question",
        "name": "从中国出发的航班可以申请EU赔偿吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "取决于航空公司。如果是欧洲航空公司（如汉莎、法航、英航），即使从中国出发也可以申请。但如果是中国航空公司（如国航、东航、南航）从中国出发，则不适用EU 261/2004。"
        }
      },
      {
        "@type": "Question",
        "name": "赔偿金额与机票价格有关吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "完全无关！即使您购买了特价机票或使用里程兑换，只要航班延误超过3小时，您仍然有权获得€250-€600的全额赔偿。"
        }
      },
      {
        "@type": "Question",
        "name": "申请赔偿有时间限制吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "有的。时效期限取决于您起诉的国家法律。德国为3年，法国为2年，英国为6年。建议尽快申请以避免超过时效。"
        }
      },
      {
        "@type": "Question",
        "name": "航空公司可以用代金券代替现金吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不可以！根据EU 261/2004，航空公司必须支付现金赔偿。代金券只有在您主动同意的情况下才能接受。"
        }
      }
    ]
  };

  return (
    <LayoutZh>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      
      <SEO 
        title="EU261法规详解2026 | 中国乘客欧洲航班赔偿完整指南 - 最高€600"
        description="【2026最新】EU 261/2004法规全解读！中国乘客如何获得欧洲航班延误/取消赔偿？哪些航班受保护？申请流程+成功案例+常见问题✈️"
        url="https://lotproblem.pl/zh/blog/eu261-regulation-explained-chinese-passengers"
        image="https://lotproblem.pl/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/zh/blog" className="hover:text-blue-600">博客</Link>
              <span>→</span>
              <span>EU261法规</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              EU 261/2004法规详解——中国乘客如何获得欧洲航班赔偿？
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 2026年2月24日</span>
              <span>⏱️ 15分钟阅读</span>
              <span>⚖️ 法规解读</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              <strong>EU 261/2004</strong>是欧盟最重要的乘客权益保护法规之一。许多中国旅客不知道，
              在欧洲遭遇航班延误或取消时，他们也可能有权获得<strong>最高600欧元</strong>的赔偿。
              本文将为中国乘客详细解读这项法规的所有要点。
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">您的航班延误了吗？</h3>
            <p className="text-blue-100 mb-6 text-lg">
              立即检查您是否有权获得赔偿——<strong>2分钟免费评估</strong>
            </p>
            <a 
              href="https://claimwinger.com/zh?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_content" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-xl no-underline"
            >
              免费检查航班 →
            </a>
          </div>

          {/* Section 1: What is EU 261/2004 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              什么是EU 261/2004法规？
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              <strong>EU 261/2004</strong>（全称：Regulation (EC) No 261/2004）是欧盟议会和理事会于
              <strong>2004年2月11日</strong>通过的一项法规，旨在保护航空乘客的权益。
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">📜 法规的核心目标：</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>当航班延误、取消或超售时，保障乘客获得公平赔偿</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>确保航空公司提供必要的援助（食物、住宿、通讯）</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>建立统一的赔偿标准，防止航空公司任意拒赔</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>适用于所有乘客，无论国籍（包括中国公民）</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="mb-0">
                <strong>💡 重要提示：</strong>这项法规不仅保护欧洲公民，<strong>任何乘坐符合条件航班的乘客</strong>
                （包括中国、美国、日本等国公民）都享有同等权利。
              </p>
            </div>
          </section>

          {/* Section 2: Coverage scope */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Globe className="w-8 h-8 text-blue-600" />
              法规适用范围——哪些航班受保护？
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              这是中国乘客最关心的问题。EU 261/2004<strong>只适用于特定航班</strong>：
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-900">✅ 受保护的航班：</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>从欧盟机场出发的所有航班</strong>
                      <p className="text-sm text-gray-600">无论航空公司国籍。例如：巴黎→北京（中国国航）✅</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>欧洲航空公司飞往欧盟</strong>
                      <p className="text-sm text-gray-600">例如：北京→法兰克福（汉莎航空）✅</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border-2 border-red-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-red-900">❌ 不受保护的航班：</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>从中国出发的非欧洲航空公司</strong>
                      <p className="text-sm text-gray-600">例如：上海→巴黎（中国东航）❌</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>非欧洲航线的非欧洲航空公司</strong>
                      <p className="text-sm text-gray-600">例如：纽约→东京（日本航空）❌</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Compensation amounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-blue-600" />
              赔偿金额——您可以获得多少钱？
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              赔偿金额取决于<strong>航程距离</strong>，而非机票价格：
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white border-2 border-blue-300 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-3">€250</div>
                <div className="text-gray-700 font-semibold mb-2">短途航班</div>
                <div className="text-sm text-gray-600">≤ 1,500公里</div>
                <div className="text-xs text-gray-500 mt-2">例如：巴黎→马德里</div>
              </div>

              <div className="bg-white border-2 border-blue-400 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-3">€400</div>
                <div className="text-gray-700 font-semibold mb-2">中途航班</div>
                <div className="text-sm text-gray-600">1,500-3,500公里</div>
                <div className="text-xs text-gray-500 mt-2">例如：巴黎→莫斯科</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-3">€600</div>
                <div className="font-semibold mb-2">长途航班</div>
                <div className="text-sm text-blue-100">&gt; 3,500公里</div>
                <div className="text-xs text-blue-200 mt-2">例如：法兰克福→北京</div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
              <p className="mb-0">
                <strong>⚠️ 特别注意：</strong>如果航空公司提供替代航班，且到达时间延误不超过2/3/4小时
                （取决于距离），赔偿金额可能减半。但这种情况较少见。
              </p>
            </div>
          </section>

          {/* Section 4: When can you claim */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-blue-600" />
              什么情况下可以申请赔偿？
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  1. 航班延误
                </h3>
                <p className="text-gray-700 mb-3">
                  当您的航班<strong>到达目的地时延误超过3小时</strong>，您就有权申请赔偿。
                </p>
                <div className="bg-gray-50 p-4 rounded text-sm text-gray-600">
                  <strong>示例：</strong>原定19:00到达，实际23:30到达 = 延误4.5小时 ✅ 有权赔偿
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  2. 航班取消
                </h3>
                <p className="text-gray-700 mb-3">
                  如果航班被取消，且航空公司未提前至少14天通知，或提供的替代航班不合理，您可以申请赔偿。
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  3. 拒绝登机（超售）
                </h3>
                <p className="text-gray-700 mb-3">
                  如果因为超售而被拒绝登机（除非您主动放弃座位），您同样有权获得赔偿。
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Extraordinary circumstances */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              "特殊情况"例外——何时无法获得赔偿？
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              航空公司可以援引<strong>"特殊情况"</strong>（Extraordinary Circumstances）来拒绝支付赔偿。
              但这些情况必须是真正无法控制的：
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-red-900">❌ 有效的特殊情况：</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 恶劣天气（暴风雪、火山灰、飓风）</li>
                  <li>• 政治动荡或战争</li>
                  <li>• 罢工（非航空公司员工）</li>
                  <li>• 安全威胁</li>
                  <li>• 空中交通管制限制</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-900">✅ 无效的借口（仍需赔偿）：</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 航空公司员工罢工</li>
                  <li>• 技术故障（正常维护范畴）</li>
                  <li>• 机组人员短缺</li>
                  <li>• 前一航班延误导致的连锁反应</li>
                  <li>• "运营原因"（含糊其辞）</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="mb-0">
                <strong>💡 重要：</strong>航空公司必须<strong>举证证明</strong>特殊情况的存在。
                如果他们只是声称"技术问题"但未提供详细证据，您仍然有权获得赔偿。
              </p>
            </div>
          </section>

          {/* Section 6: How to claim */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              中国乘客如何申请赔偿？
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              作为中国乘客，您有两种主要方式申请EU 261/2004赔偿：
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">1️⃣ 自行申请</h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li>✅ 无需支付佣金</li>
                  <li>❌ 需要流利的英语或德语</li>
                  <li>❌ 航空公司可能拖延或拒绝</li>
                  <li>❌ 需要自己研究法规和流程</li>
                  <li>❌ 平均处理时间：3-6个月</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-300 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">2️⃣ 通过ClaimWinger</h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li>✅ 中文客户服务</li>
                  <li>✅ 无风险（不成功不收费）</li>
                  <li>✅ 专业法律团队处理</li>
                  <li>✅ 平均处理时间：1-3个月</li>
                  <li>✅ 对亚洲客户友好</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">为什么中国乘客选择ClaimWinger？</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>专注于亚洲市场，理解中国乘客需求</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>灵活的小型团队，快速响应</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>个性化服务，不是流水线处理</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>透明的费用结构和流程</span>
                  </li>
                </ul>
              </div>
              <a 
                href="https://claimwinger.com/zh?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_content" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors no-underline"
              >
                立即申请赔偿 →
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-blue-600" />
              常见问题解答
            </h2>

            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  EU 261/2004法规适用于中国公民吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  是的！EU 261/2004法规适用于所有乘客，无论国籍。只要您乘坐的航班符合条件
                  （从欧盟出发或欧洲航空公司运营），作为中国公民您享有与欧洲公民相同的权利。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  从中国出发的航班可以申请EU赔偿吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  取决于航空公司。如果是欧洲航空公司（如汉莎、法航、英航），即使从中国出发也可以申请。
                  但如果是中国航空公司（如国航、东航、南航）从中国出发，则不适用EU 261/2004。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  赔偿金额与机票价格有关吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  完全无关！即使您购买了特价机票或使用里程兑换，只要航班延误超过3小时，
                  您仍然有权获得€250-€600的全额赔偿。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  申请赔偿有时间限制吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  有的。时效期限取决于您起诉的国家法律。德国为3年，法国为2年，英国为6年。
                  建议尽快申请以避免超过时效。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  航空公司可以用代金券代替现金吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  不可以！根据EU 261/2004，航空公司必须支付现金赔偿。代金券只有在您主动同意的情况下才能接受。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  人在中国可以申请欧洲航班赔偿吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  当然可以！您不需要亲自前往欧洲。通过ClaimWinger，您可以在线完成整个申请流程，
                  我们会处理所有与航空公司的沟通和法律程序。
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              您的欧洲航班延误或取消了吗？
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              立即检查您的赔偿资格——最高可获得€600，100%无风险
            </p>
            <a 
              href="https://claimwinger.com/zh?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_content" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl no-underline"
            >
              免费检查航班 →
            </a>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}