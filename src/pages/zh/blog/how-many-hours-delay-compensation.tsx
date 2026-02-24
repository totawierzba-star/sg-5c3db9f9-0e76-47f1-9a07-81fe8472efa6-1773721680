import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import Head from "next/head";
import { Clock, Euro, Plane, AlertCircle, CheckCircle, Calculator, ArrowRight, HelpCircle } from "lucide-react";

export default function HowManyHoursDelayCompensation() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "航班延误必须达到多少小时才能申请赔偿？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "根据EU 261/2004法规，航班必须延误至少3小时（到达目的地时间）才能申请赔偿。延误2小时59分钟不符合条件，但3小时及以上可以申请€250-€600的赔偿。"
        }
      },
      {
        "@type": "Question",
        "name": "赔偿金额如何计算？是按延误时间还是航程距离？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "赔偿金额主要根据航程距离计算，而非延误时间长短。≤1,500公里€250，1,500-3,500公里€400，>3,500公里€600。延误3小时和10小时获得的赔偿金额相同。"
        }
      },
      {
        "@type": "Question",
        "name": "如何计算延误时间？是起飞时间还是到达时间？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "延误时间以到达目的地时间为准（飞机舱门打开时间）。即使起飞只延误1小时，但如果到达延误超过3小时，仍然可以申请赔偿。"
        }
      },
      {
        "@type": "Question",
        "name": "航班取消算延误吗？可以获得赔偿吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "航班取消通常比延误更容易获得赔偿。除非航空公司提前14天通知并提供替代航班，否则乘客有权获得全额赔偿（€250-€600）加上食宿和改签费用。"
        }
      },
      {
        "@type": "Question",
        "name": "延误超过5小时可以退票吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以！如果延误超过5小时，您有权选择：1) 获得全额退票款，或 2) 改签其他航班。即使选择退票，您仍然可能有权获得€250-€600的赔偿（如果航空公司无有效理由）。"
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
        title="航班延误几小时能索赔？€250/€400/€600赔偿标准详解【2026最新】"
        description="✈️延误3小时=最高€600！完整赔偿计算公式+真实案例。中国乘客必读，搞懂欧洲航班赔偿门槛⏰"
        url="https://lotproblem.pl/zh/blog/how-many-hours-delay-compensation"
        image="https://lotproblem.pl/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/zh/blog" className="hover:text-blue-600">博客</Link>
              <span>→</span>
              <span>延误时间计算</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              航班延误多少小时可以申请赔偿？（250欧元、400欧元、600欧元）
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 2026年2月24日</span>
              <span>⏱️ 10分钟阅读</span>
              <span>💰 赔偿计算</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              您的欧洲航班延误了，但不确定是否有资格申请赔偿？关键问题是：<strong>延误了多少小时？</strong>
              根据EU 261/2004法规，航班必须延误<strong>至少3小时</strong>才能申请赔偿。但赔偿金额不是按
              延误时间计算，而是根据<strong>航程距离</strong>：最高可达<strong>€600</strong>。
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">不确定您能获得多少赔偿？</h3>
            <p className="text-blue-100 mb-6 text-lg">
              使用ClaimWinger赔偿计算器——<strong>30秒算出准确金额</strong>
            </p>
            <a 
              href="https://claimwinger.com/zh?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_content" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-xl no-underline"
            >
              立即计算赔偿金额 →
            </a>
          </div>

          {/* Section 1: The 3-hour rule */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              3小时门槛——关键规则
            </h2>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
              <p className="text-lg mb-0">
                <strong>⏰ 黄金规则：</strong>航班必须延误<strong>至少3小时</strong>（到达目的地时间）
                才能申请赔偿。这是硬性门槛，无法商量。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white border-2 border-red-400 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">2:59</div>
                <div className="text-sm text-gray-600 mb-2">延误小时</div>
                <div className="flex items-center justify-center gap-2 text-red-700 font-bold">
                  <AlertCircle className="w-5 h-5" />
                  <span>无赔偿</span>
                </div>
              </div>

              <div className="bg-white border-2 border-green-400 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">3:00</div>
                <div className="text-sm text-gray-600 mb-2">延误小时</div>
                <div className="flex items-center justify-center gap-2 text-green-700 font-bold">
                  <CheckCircle className="w-5 h-5" />
                  <span>有赔偿</span>
                </div>
              </div>

              <div className="bg-white border-2 border-green-400 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">10:00</div>
                <div className="text-sm text-gray-600 mb-2">延误小时</div>
                <div className="flex items-center justify-center gap-2 text-green-700 font-bold">
                  <CheckCircle className="w-5 h-5" />
                  <span>有赔偿</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="mb-0">
                <strong>💡 重要：</strong>延误时间以<strong>到达时间</strong>为准（飞机舱门打开时刻），
                而非起飞时间。即使起飞只延误1小时，但到达延误3小时+，仍然可以申请赔偿。
              </p>
            </div>
          </section>

          {/* Section 2: Compensation amounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600" />
              赔偿金额计算——距离决定一切
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              许多人误以为延误时间越长，赔偿越多。<strong>这是错误的！</strong>赔偿金额主要根据
              <strong>航程距离</strong>计算，而非延误时长。
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-400 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-blue-900">€250</h3>
                  <Plane className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-700 mb-2">
                  <strong>短途航班</strong> - 航程 ≤ 1,500公里
                </p>
                <p className="text-sm text-gray-600">
                  示例：巴黎→柏林、阿姆斯特丹→伦敦、罗马→维也纳
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-400 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-green-900">€400</h3>
                  <Plane className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-gray-700 mb-2">
                  <strong>中程航班</strong> - 航程 1,500-3,500公里
                </p>
                <p className="text-sm text-gray-600">
                  示例：伦敦→雅典、巴黎→莫斯科、法兰克福→迪拜
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-400 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-purple-900">€600</h3>
                  <Plane className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-gray-700 mb-2">
                  <strong>长途航班</strong> - 航程 > 3,500公里
                </p>
                <p className="text-sm text-gray-600">
                  示例：法兰克福→北京、巴黎→上海、伦敦→香港、阿姆斯特丹→纽约
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
              <p className="mb-0">
                <strong>⚠️ 重要规则：</strong>延误3小时和延误10小时获得的赔偿金额<strong>完全相同</strong>！
                赔偿只取决于航程距离，不取决于延误时长。
              </p>
            </div>
          </section>

          {/* Section 3: Real examples for Chinese passengers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calculator className="w-8 h-8 text-blue-600" />
              中国乘客常见航线赔偿金额
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">🛫 北京 → 法兰克福（汉莎航空）</h3>
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold">€600</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 航程距离：约7,800公里（长途）</li>
                  <li>• 延误3小时+ → €600赔偿</li>
                  <li>• 延误时间不影响金额（3小时=10小时）</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">🛫 上海 → 阿姆斯特丹（荷航KLM）</h3>
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold">€600</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 航程距离：约8,800公里（长途）</li>
                  <li>• 延误3小时+ → €600赔偿</li>
                  <li>• 即使购买特价票也可获得全额赔偿</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">🛫 巴黎 → 罗马（法航）</h3>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold">€250</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 航程距离：约1,100公里（短途）</li>
                  <li>• 延误3小时+ → €250赔偿</li>
                  <li>• 欧洲内部短途航班金额较低</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">🛫 法兰克福 → 迪拜（汉莎）</h3>
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full font-bold">€400</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 航程距离：约5,000公里（但属于"中程"类别）</li>
                  <li>• EU法规特殊规定：欧盟外航班>3,500km但<6,000km只赔€400</li>
                  <li>• 延误3小时+ → €400赔偿</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: How delay time is calculated */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              如何正确计算延误时间？
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-lg mb-0">
                <strong>关键规则：</strong>延误时间以<strong>到达目的地时间</strong>为准，
                而非起飞时间。具体为飞机舱门打开的时刻。
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">✅ 正确计算示例：</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">原定航班：</p>
                    <p className="text-sm">• 起飞时间：10:00</p>
                    <p className="text-sm">• 到达时间：14:00</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">实际航班：</p>
                    <p className="text-sm">• 起飞时间：11:30（延误1.5小时）</p>
                    <p className="text-sm">• 到达时间：17:30（延误3.5小时）✅</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded">
                    <p className="text-green-800 font-bold mb-0">
                      ✅ 结论：延误3.5小时，符合赔偿条件！
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">❌ 常见误解：</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>❌ "起飞延误2小时" → 不够，要看到达时间</p>
                  <p>❌ "飞机降落就算到达" → 错误，要等舱门打开</p>
                  <p>❌ "延误5小时赔偿更多" → 错误，3小时和10小时赔偿相同</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Special situations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              特殊情况处理
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🔄 转机航班延误怎么算？</h3>
                <p className="text-gray-700 mb-3">
                  如果是单一订票（一张票），以<strong>最终到达时间</strong>为准：
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 第一段延误1小时，第二段延误2小时 → 总延误3小时 ✅</li>
                  <li>• 错过转机导致最终延误4小时 → 符合赔偿条件 ✅</li>
                  <li>• 如果分开购票，每段单独计算</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">❌ 航班取消算延误吗？</h3>
                <p className="text-gray-700 mb-3">
                  航班取消<strong>不算延误</strong>，但通常更容易获得赔偿：
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 提前14天以内通知 → 有权获得€250-€600赔偿</li>
                  <li>• 提前7天以内通知 → 赔偿几乎确定</li>
                  <li>• 未提前通知 → 全额赔偿 + 食宿 + 改签</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">⏰ 延误超过5小时的特殊权利</h3>
                <p className="text-gray-700 mb-3">
                  如果延误超过5小时，您有权选择：
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>选项1：</strong>获得全额退票款（放弃行程）</li>
                  <li>• <strong>选项2：</strong>改签其他航班（继续行程）</li>
                  <li>• 无论选择哪个，仍可能获得€250-€600赔偿</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: ClaimWinger calculator */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              不想自己计算？使用ClaimWinger赔偿计算器
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-300">
              <p className="text-gray-700 mb-6 text-lg">
                搞不清楚自己能获得多少赔偿？ClaimWinger提供<strong>免费在线计算器</strong>，
                只需输入航班信息，30秒内就能知道准确金额。
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-blue-900 mb-3">✅ 计算器优势：</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>准确无误</strong> - 基于EU法规精确计算</li>
                    <li>• <strong>即时结果</strong> - 无需等待，立即显示</li>
                    <li>• <strong>中文界面</strong> - 无需担心语言障碍</li>
                    <li>• <strong>完全免费</strong> - 无需注册或付费</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-3">📝 使用步骤：</h3>
                  <ol className="space-y-2 text-gray-700 text-sm list-decimal ml-4">
                    <li>输入航班号和日期</li>
                    <li>系统自动查询延误时间</li>
                    <li>计算航程距离</li>
                    <li>显示准确赔偿金额</li>
                    <li>一键提交申请</li>
                  </ol>
                </div>
              </div>

              <a 
                href="https://claimwinger.com/zh?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_content" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors no-underline"
              >
                免费计算赔偿金额 →
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
                  航班延误必须达到多少小时才能申请赔偿？
                </summary>
                <p className="mt-4 text-gray-700">
                  根据EU 261/2004法规，航班必须延误<strong>至少3小时</strong>（到达目的地时间）才能申请赔偿。
                  延误2小时59分钟不符合条件，但3小时及以上可以申请€250-€600的赔偿。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  赔偿金额如何计算？是按延误时间还是航程距离？
                </summary>
                <p className="mt-4 text-gray-700">
                  赔偿金额主要根据<strong>航程距离</strong>计算，而非延误时间长短。≤1,500公里€250，
                  1,500-3,500公里€400，>3,500公里€600。<strong>延误3小时和10小时获得的赔偿金额相同</strong>。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  如何计算延误时间？是起飞时间还是到达时间？
                </summary>
                <p className="mt-4 text-gray-700">
                  延误时间以<strong>到达目的地时间</strong>为准（飞机舱门打开时间）。即使起飞只延误1小时，
                  但如果到达延误超过3小时，仍然可以申请赔偿。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  航班取消算延误吗？可以获得赔偿吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  航班取消通常<strong>比延误更容易获得赔偿</strong>。除非航空公司提前14天通知并提供替代航班，
                  否则乘客有权获得全额赔偿（€250-€600）加上食宿和改签费用。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  延误超过5小时可以退票吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  可以！如果延误超过5小时，您有权选择：1) 获得全额退票款，或 2) 改签其他航班。
                  即使选择退票，您仍然可能有权获得€250-€600的赔偿（如果航空公司无有效理由）。
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              您的航班延误了吗？
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              立即计算您的赔偿金额——延误3小时就能获得€250-€600
            </p>
            <a 
              href="https://claimwinger.com/zh?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_content" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl no-underline"
            >
              免费计算赔偿 →
            </a>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}