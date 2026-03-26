import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import Head from "next/head";
import { Plane, MapPin, CheckCircle, XCircle, AlertTriangle, Globe, ArrowRight, HelpCircle } from "lucide-react";

export default function WhichFlightsQualifyCompensation() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "从欧洲出发的所有航班都受保护吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "是的！只要航班从欧盟、挪威、冰岛或瑞士的机场起飞，无论是哪家航空公司运营（包括中国、美国、中东航空公司），都受EU 261/2004保护。"
        }
      },
      {
        "@type": "Question",
        "name": "从中国飞往欧洲的欧洲航空公司航班受保护吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "是的！如果是欧洲航空公司（如汉莎、法航、英航、荷航等）运营的航班，即使从中国出发飞往欧洲，也受EU 261/2004保护。"
        }
      },
      {
        "@type": "Question",
        "name": "中国航空公司从中国飞往欧洲的航班受保护吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不受保护。如果是中国航空公司（国航、东航、南航等）从中国出发，即使飞往欧洲，也不适用EU 261/2004。但返程从欧洲出发时则受保护。"
        }
      },
      {
        "@type": "Question",
        "name": "在欧洲转机的航班如何判断？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "如果是单一订票（一张票），整个行程被视为一个整体。如果最终目的地是欧洲且总延误超过3小时，您可以申请赔偿。如果分开购票，则每段航班单独评估。"
        }
      },
      {
        "@type": "Question",
        "name": "英国脱欧后，从英国出发的航班还受保护吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "是的！英国实施了UK261法规，与EU 261/2004几乎相同。从英国出发或英国航空公司运营的航班仍然受保护。"
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
        title="哪些航班有资格申请EU261赔偿？2026完整判断指南 | 欧洲出发vs欧洲航司"
        description="【2026最新】搞不清哪些航班能索赔？从欧洲出发vs欧洲航空公司详细对比！中国乘客必读，附真实案例+快速判断表✈️"
        url="https://problemlot.com/zh/blog/which-flights-qualify-compensation"
        image="https://problemlot.com/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/zh/blog" className="hover:text-blue-600">博客</Link>
              <span>→</span>
              <span>航班资格判断</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              哪些航班有资格申请延误赔偿？欧洲出发 vs. 欧洲航空公司
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 2026年2月24日</span>
              <span>⏱️ 12分钟阅读</span>
              <span>✈️ 资格判断</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              这是中国乘客最常问的问题：<strong>"我的航班能申请欧盟赔偿吗？"</strong> 
              EU 261/2004法规的适用范围有明确规定，但很多人搞不清楚。本文将用<strong>最简单的方式</strong>
              解释哪些航班受保护，哪些不受保护，帮您快速判断自己的航班是否有资格申请赔偿。
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">不确定您的航班是否符合条件？</h3>
            <p className="text-blue-100 mb-6 text-lg">
              使用ClaimWinger免费检查工具——<strong>30秒即可知道结果</strong>
            </p>
            <a 
              href="https://claimwinger.com/zh?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_content" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-xl no-underline"
            >
              立即检查航班资格 →
            </a>
          </div>

          {/* Section 1: Two main rules */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-600" />
              两条核心规则决定一切
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              EU 261/2004保护的航班必须满足以下<strong>两条规则之一</strong>：
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  规则1：从欧洲出发
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>任何从欧盟/EEA机场起飞的航班</strong>，无论航空公司国籍。
                </p>
                <div className="bg-white p-4 rounded text-sm text-gray-600">
                  <p className="mb-2"><strong>✅ 示例（受保护）：</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• 巴黎→北京（中国国航）</li>
                    <li>• 法兰克福→上海（中国东航）</li>
                    <li>• 伦敦→纽约（美国航空）</li>
                    <li>• 阿姆斯特丹→迪拜（阿联酋航空）</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-900 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-green-600" />
                  规则2：欧洲航空公司飞往欧洲
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>欧洲航空公司运营的航班</strong>飞往欧盟/EEA，无论从哪里出发。
                </p>
                <div className="bg-white p-4 rounded text-sm text-gray-600">
                  <p className="mb-2"><strong>✅ 示例（受保护）：</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• 北京→法兰克福（汉莎航空）</li>
                    <li>• 上海→巴黎（法国航空）</li>
                    <li>• 香港→伦敦（英国航空）</li>
                    <li>• 纽约→阿姆斯特丹（荷兰皇家航空）</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
              <p className="mb-0">
                <strong>⚠️ 关键区别：</strong>"欧洲航空公司"指的是在欧盟/EEA国家注册的航空公司
                （如汉莎、法航、英航、荷航、瑞航等），而不是任何"飞往欧洲"的航空公司。
              </p>
            </div>
          </section>

          {/* Section 2: NOT protected */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              哪些航班不受保护？
            </h2>

            <div className="bg-red-50 border-2 border-red-400 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-red-900">❌ 明确不受保护的情况：</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>非欧洲航空公司从非欧洲出发</strong>
                    <p className="text-gray-600 text-sm">例如：上海→巴黎（中国东航）❌</p>
                    <p className="text-gray-600 text-sm">原因：既不是从欧洲出发，也不是欧洲航空公司</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>非欧洲航空公司的非欧洲航线</strong>
                    <p className="text-gray-600 text-sm">例如：纽约→东京（日本航空）❌</p>
                    <p className="text-gray-600 text-sm">例如：迪拜→新加坡（阿联酋航空）❌</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>欧洲航空公司从欧洲出发飞往非欧洲</strong>
                    <p className="text-gray-600 text-sm">等等，这种情况<strong>其实受保护</strong>！（规则1适用）</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Real scenarios for Chinese passengers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-blue-600" />
              中国乘客常见场景判断表
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">🛫 北京 → 法兰克福（汉莎航空）</h3>
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">✅ 受保护</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>原因：</strong>汉莎是欧洲航空公司，飞往欧洲（规则2）
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>赔偿金额：</strong>延误3小时+ → 最高€600
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">🛫 上海 → 巴黎（中国东方航空）</h3>
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">❌ 不受保护</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>原因：</strong>中国东航不是欧洲航空公司，从中国出发
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>替代方案：</strong>查看中国东航自己的赔偿政策
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">🛫 巴黎 → 北京（中国国航）</h3>
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">✅ 受保护</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>原因：</strong>从欧洲（巴黎）出发（规则1）
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>赔偿金额：</strong>延误3小时+ → 最高€600
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">🛫 伦敦 → 迪拜 → 北京（阿联酋航空）</h3>
                  <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold">⚠️ 部分保护</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>原因：</strong>伦敦→迪拜段受保护（从欧洲出发），迪拜→北京段不受保护
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>注意：</strong>如果是单一订票且最终到达北京延误3小时+，可能可以申请全程赔偿
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">🛫 法兰克福 → 纽约（汉莎航空）</h3>
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">✅ 受保护</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>原因：</strong>从欧洲（法兰克福）出发（规则1）
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>注意：</strong>即使飞往美国也受保护！
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">🛫 香港 → 伦敦（英国航空）</h3>
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">✅ 受保护</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>原因：</strong>英国航空是欧洲航空公司（Brexit后仍适用UK261）
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>赔偿金额：</strong>延误3小时+ → 最高€600（或等值英镑）
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Quick decision tree */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              快速判断流程图
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border-2 border-blue-300">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-lg mb-2">航班是否从欧盟/EEA/瑞士/英国出发？</p>
                    <div className="ml-6 space-y-2">
                      <p className="text-gray-700">→ <strong>是</strong> → ✅ 受保护（无论航空公司）</p>
                      <p className="text-gray-700">→ <strong>否</strong> → 继续下一步</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-lg mb-2">航空公司是否在欧盟/EEA/瑞士/英国注册？</p>
                    <div className="ml-6 space-y-2">
                      <p className="text-gray-700">→ <strong>是</strong> → 继续下一步</p>
                      <p className="text-gray-700">→ <strong>否</strong> → ❌ 不受保护</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-lg mb-2">航班是否飞往欧盟/EEA/瑞士/英国？</p>
                    <div className="ml-6 space-y-2">
                      <p className="text-gray-700">→ <strong>是</strong> → ✅ 受保护</p>
                      <p className="text-gray-700">→ <strong>否</strong> → ❌ 不受保护</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Special cases */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
              特殊情况说明
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🔄 转机航班如何判断？</h3>
                <p className="text-gray-700 mb-3">
                  <strong>单一订票（一张票）：</strong>整个行程被视为一个整体。如果最终目的地延误超过3小时，
                  可以根据整个行程距离申请赔偿。
                </p>
                <p className="text-gray-700">
                  <strong>分开购票：</strong>每段航班单独评估，只有符合规则1或规则2的航段可以申请。
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🇬🇧 Brexit后英国航班怎么办？</h3>
                <p className="text-gray-700">
                  英国实施了<strong>UK261法规</strong>，与EU 261/2004几乎相同。从英国出发或英国航空公司
                  运营的航班仍然受保护。赔偿金额相同（€或等值英镑）。
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🇨🇭 瑞士不是欧盟成员国，怎么办？</h3>
                <p className="text-gray-700">
                  瑞士虽然不是欧盟成员，但作为<strong>EEA协议国</strong>，完全适用EU 261/2004。
                  从瑞士出发或瑞士航空公司运营的航班都受保护。
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🇹🇷 土耳其航空算欧洲航空公司吗？</h3>
                <p className="text-gray-700">
                  <strong>不算。</strong>土耳其不是欧盟或EEA成员，土耳其航空不受EU 261/2004保护。
                  但如果从欧洲出发（如伊斯坦布尔→巴黎土航航班），仍然受保护（规则1）。
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: How ClaimWinger helps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              不确定？让ClaimWinger帮您判断
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-300">
              <p className="text-gray-700 mb-6 text-lg">
                搞不清楚您的航班是否符合条件？ClaimWinger提供<strong>免费资格检查工具</strong>，
                只需输入航班信息，30秒内就能知道结果。
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-blue-900 mb-3">✅ ClaimWinger的优势：</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>专注亚洲市场</strong> - 理解中国乘客的特殊需求</li>
                    <li>• <strong>中文客户服务</strong> - 无需担心语言障碍</li>
                    <li>• <strong>灵活小团队</strong> - 个性化服务，非流水线处理</li>
                    <li>• <strong>无风险模式</strong> - 不成功不收费，前期零成本</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-3">📝 检查流程：</h3>
                  <ol className="space-y-2 text-gray-700 text-sm list-decimal ml-4">
                    <li>访问ClaimWinger网站</li>
                    <li>输入航班号和日期</li>
                    <li>系统自动判断资格</li>
                    <li>如符合条件，提交申请</li>
                    <li>等待赔偿到账</li>
                  </ol>
                </div>
              </div>

              <a 
                href="https://claimwinger.com/zh?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_content" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors no-underline"
              >
                免费检查航班资格 →
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
                  从欧洲出发的所有航班都受保护吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  是的！只要航班从欧盟、挪威、冰岛或瑞士的机场起飞，无论是哪家航空公司运营
                  （包括中国、美国、中东航空公司），都受EU 261/2004保护。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  从中国飞往欧洲的欧洲航空公司航班受保护吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  是的！如果是欧洲航空公司（如汉莎、法航、英航、荷航等）运营的航班，即使从中国出发飞往欧洲，
                  也受EU 261/2004保护。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  中国航空公司从中国飞往欧洲的航班受保护吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  不受保护。如果是中国航空公司（国航、东航、南航等）从中国出发，即使飞往欧洲，
                  也不适用EU 261/2004。但返程从欧洲出发时则受保护。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  在欧洲转机的航班如何判断？
                </summary>
                <p className="mt-4 text-gray-700">
                  如果是单一订票（一张票），整个行程被视为一个整体。如果最终目的地是欧洲且总延误超过3小时，
                  您可以申请赔偿。如果分开购票，则每段航班单独评估。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  英国脱欧后，从英国出发的航班还受保护吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  是的！英国实施了UK261法规，与EU 261/2004几乎相同。从英国出发或英国航空公司运营的航班仍然受保护。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  如何快速判断我的航班是否受保护？
                </summary>
                <p className="mt-4 text-gray-700">
                  使用我们的快速判断流程：1) 是否从欧洲出发？是→受保护。否→2) 是否欧洲航空公司？
                  否→不受保护。是→3) 是否飞往欧洲？是→受保护。否→不受保护。
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              还是不确定您的航班是否符合条件？
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              使用ClaimWinger免费检查工具，30秒即可知道答案
            </p>
            <a 
              href="https://claimwinger.com/zh?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_content" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl no-underline"
            >
              立即检查航班 →
            </a>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
