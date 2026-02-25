import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { AlertCircle, CheckCircle, XCircle, Clock, Euro, ArrowRight, Calendar, Plane, FileText, Shield } from "lucide-react";

export default function FlightCancellationCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="航班取消如何索赔？取消vs延误赔偿规则对比【2026】EU261完整指南"
        description="航班取消与延误有何不同？了解EU 261/2004取消航班赔偿规则、14天通知规则、再安排权利。中国乘客必读完整指南。"
        url="https://lotproblem.pl/zh/blog/flight-cancellation-compensation-guide"
        image="https://lotproblem.pl/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/zh/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← 返回博客
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            航班取消如何索赔？取消vs延误赔偿规则对比【2026】
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <time dateTime="2026-02-25">2026年2月25日</time>
            <span>•</span>
            <span>12分钟阅读</span>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            航班取消与延误在EU 261/2004法规下有重要区别。本文详细解释取消航班的赔偿规则、14天通知规则、再安排权利，以及如何最大化您的索赔权益。
          </p>
        </header>

        {/* CTA Top */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 rounded-full p-3 flex-shrink-0">
              <Euro className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                航班被取消？立即检查您的赔偿权利
              </h3>
              <p className="text-gray-700 mb-4">
                无论是提前取消还是当天取消，您可能有权获得€250-€600赔偿 + 全额退款。ClaimWinger帮您快速索赔。
              </p>
              <a
                href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_cancellation_guide_top"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                免费检查赔偿金额
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Section 1: 什么是航班取消 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-600" />
              什么是"航班取消"？与延误的法律区别
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                EU 261/2004 Article 5(1)(c) 定义
              </h3>
              <p className="text-gray-700 italic mb-2">
                "取消航班"是指原定航班未执行，且：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-0">
                <li>乘客被告知航班不会执行（无论何时通知）</li>
                <li>或航班未按照原计划的航班号和时间表执行</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔵 取消 vs. 延误：关键区别</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  航班取消 (Cancellation)
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>定义：</strong>航班完全不执行</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>航班号：</strong>可能改变（例如LH720→LH722）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>时间：</strong>完全不同的起降时间</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>赔偿触发：</strong>立即（除非14天前通知+合理再安排）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>您的选择：</strong>退款 OR 再安排航班</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  航班延误 (Delay)
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>定义：</strong>航班执行但晚于计划</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>航班号：</strong>保持不变（LH720仍是LH720）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>时间：</strong>起降时间推迟</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>赔偿触发：</strong>到达目的地≥3小时晚点</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span><strong>您的选择：</strong>必须等待（或选择退款如果延误≥5h）</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                ⚠️ 重要：边界案例
              </h4>
              <p className="text-gray-700 mb-3">
                <strong>问：</strong>航空公司说"延误12小时"但实际上更改了航班号和时间——这是延误还是取消？
              </p>
              <p className="text-gray-700 mb-0">
                <strong className="text-green-600">答：</strong>这是<strong>取消</strong>！即使航空公司称其为"延误"，如果航班号或计划时间实质性改变，EU261将其视为取消。您有权获得<strong>更多权利</strong>（退款选择+赔偿）。
              </p>
            </div>
          </section>

          {/* Section 2: 取消航班的赔偿规则 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600" />
              取消航班的赔偿规则：何时可以索赔？
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✅ 基本规则：立即有权获得赔偿</h3>
              <p className="text-gray-700 mb-4">
                与延误不同（需要≥3小时才能索赔），<strong>航班取消立即触发赔偿权利</strong>——无论航空公司多早通知您。
              </p>
              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-900 font-semibold mb-2">赔偿金额（与延误相同）：</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>≤1,500公里：</strong>€250（例如：Berlin→Paris）</li>
                  <li>• <strong>1,500-3,500公里：</strong>€400（例如：London→Athens）</li>
                  <li>• <strong>&gt;3,500公里（欧盟内）：</strong>€600</li>
                  <li>• <strong className="text-blue-600">&gt;3,500公里（欧盟外）：€600</strong>（例如：<strong>北京↔法兰克福，上海↔巴黎</strong>）</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔴 例外：14天提前通知规则</h3>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                EU 261 Article 5(1)(c)(iii)：航空公司可以避免赔偿的唯一方式
              </h4>
              <p className="text-gray-700 mb-4">
                如果航空公司满足以下<strong>两个条件</strong>，则无需支付赔偿：
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li className="pl-2">
                  <strong>提前≥14天通知您</strong>取消（在计划出发日期前）
                </li>
                <li className="pl-2">
                  <strong>提供合理的替代航班</strong>（"再安排"）满足以下时间要求：
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>出发时间：不早于原航班2小时</li>
                    <li>到达时间：不晚于原航班4小时</li>
                  </ul>
                </li>
              </ol>
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-4">📊 14天规则详解表</h4>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left">通知时间</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">替代航班要求</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">赔偿责任</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>≥14天前</strong><br/>
                      <span className="text-sm">(出发日前)</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <strong className="text-green-600">任何替代航班</strong><br/>
                      <span className="text-sm">无时间限制</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <strong className="text-green-600">✅ 无需赔偿</strong>
                    </td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>7-13天前</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <strong className="text-orange-600">有条件</strong><br/>
                      • 出发：不早于原航班2小时<br/>
                      • 到达：不晚于原航班4小时
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <strong className="text-orange-600">⚠️ 取决于替代航班</strong><br/>
                      如满足时间要求→无需赔偿<br/>
                      如不满足→<strong>€250-€600</strong>
                    </td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 px-4 py-3">
                      <strong>&lt;7天前</strong><br/>
                      <span className="text-sm">（包括当天取消）</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <strong className="text-red-600">更严格</strong><br/>
                      • 出发：不早于原航班1小时<br/>
                      • 到达：不晚于原航班2小时
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <strong className="text-red-600">❌ 几乎总是必须赔偿</strong><br/>
                      时间窗口太窄，航空公司很难满足
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                💡 中国乘客实用提示
              </h4>
              <p className="text-gray-700 mb-3">
                对于<strong>中国↔欧洲长途航班</strong>，即使航空公司提前14天通知取消：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li><strong>如果没有提供替代航班</strong>（只是取消+退款）→ 您仍有权获得€600赔偿</li>
                <li><strong>如果提供的替代航班时间很差</strong>（例如延误6小时）→ 您仍有权获得赔偿</li>
                <li><strong>您可以拒绝替代航班并要求全额退款</strong> + 赔偿</li>
              </ul>
              <p className="text-gray-700 font-semibold mb-0">
                ⚖️ 记住：举证责任在航空公司！他们必须证明提供了"合理的替代安排"。
              </p>
            </div>
          </section>

          {/* CTA Middle */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 my-12">
            <div className="text-center">
              <div className="bg-green-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                航班被取消？让专家帮您索赔
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                ClaimWinger专业团队处理所有法律细节——14天规则、替代航班评估、举证责任。您只需提供航班信息，我们负责其余工作。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span><strong>98%</strong> 成功率</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span><strong>21天</strong> 平均处理时间</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span><strong>€0</strong> 预付费用</span>
                </div>
              </div>
              <a
                href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_cancellation_guide_middle"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                立即开始免费索赔
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Section 3: 您的权利选择 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              航班取消时的3个权利选择
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                EU 261 Article 8：再安排或退款的权利
              </h3>
              <p className="text-gray-700 mb-0 italic">
                "当航班被取消时，航空公司应向乘客提供以下选择..."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔵 选项详解</h3>

            <div className="space-y-6 mb-6">
              <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">1</span>
                  接受航空公司提供的替代航班（再安排）
                </h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>免费</strong>重新预订到相同目的地</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>航空公司必须提供<strong>最早可用航班</strong>（可能是竞争对手航空公司）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>您保留<strong>€250-€600赔偿的权利</strong>（如果不满足14天规则）</span>
                  </li>
                </ul>
                <div className="bg-white rounded-lg p-4 border border-blue-300">
                  <p className="text-gray-900 font-semibold mb-2">💡 重要细节：</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• 如果新航班仍然导致≥3小时延误到达 → 您<strong>仍有权获得赔偿</strong></li>
                    <li>• 您可以要求<strong>升舱</strong>如果原舱位不可用（航空公司不得额外收费）</li>
                    <li>• 如果等待时间很长，航空公司必须提供<strong>餐饮、住宿、交通</strong></li>
                  </ul>
                </div>
              </div>

              <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                <h4 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">2</span>
                  要求全额退款（放弃旅行）
                </h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>7天内全额退款</strong>机票价格（包括税费）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>如果已部分旅行，还可获得<strong>返回原出发点的免费航班</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>您保留<strong>€250-€600赔偿的权利</strong>（如果不满足14天规则）</span>
                  </li>
                </ul>
                <div className="bg-white rounded-lg p-4 border border-green-300">
                  <p className="text-gray-900 font-semibold mb-2">💰 关键点：</p>
                  <p className="text-gray-700 text-sm mb-0">
                    <strong className="text-green-600">退款≠赔偿！</strong>您可以<strong>同时获得两者</strong>：<br/>
                    例如：€800机票退款 + €600 EU261赔偿 = <strong className="text-xl">总计€1,400</strong>
                  </p>
                </div>
              </div>

              <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
                <h4 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">3</span>
                  要求在稍后日期重新预订
                </h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>免费重新预订到<strong>您方便的日期</strong>（视座位可用性）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>保持<strong>原票价和舱位</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>您保留<strong>€250-€600赔偿的权利</strong>（如果不满足14天规则）</span>
                  </li>
                </ul>
                <div className="bg-white rounded-lg p-4 border border-purple-300">
                  <p className="text-gray-900 font-semibold mb-2">⚠️ 实用建议：</p>
                  <p className="text-gray-700 text-sm mb-0">
                    如果您仍想旅行但当前时间不合适，这是<strong>最佳选择</strong>。确保获得<strong>书面确认</strong>新预订不会额外收费。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                ⚠️ 航空公司常见误导
              </h4>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold mb-1">❌ 误导："您必须接受我们的替代航班"</p>
                  <p className="text-sm pl-4">✅ 真相：<strong>您有权选择退款</strong>而不是替代航班，无论航空公司说什么。</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">❌ 误导："退款就是您的全部补偿"</p>
                  <p className="text-sm pl-4">✅ 真相：<strong>退款是合同义务</strong>（您付钱购买了服务）。<strong>EU261赔偿是额外的</strong>法定权利。</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">❌ 误导："接受代金券可以获得更多价值"</p>
                  <p className="text-sm pl-4">✅ 真相：代金券有使用限制（有效期、航线）。<strong>坚持要求现金退款</strong> + EU261赔偿。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: 真实案例 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              💼 真实案例：取消航班索赔成功
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-600 rounded-full p-3 flex-shrink-0">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    案例：张先生 - Lufthansa LH720 北京→法兰克福
                  </h3>
                  <p className="text-gray-600 text-sm">2025年12月 | 商务舱 €2,400</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">📅 情况：</h4>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li><strong>取消通知：</strong>出发前6天（2025年12月18日通知，12月24日起飞）</li>
                    <li><strong>原因：</strong>汉莎称"机组人员问题"</li>
                    <li><strong>提供替代航班：</strong>12月25日 LH722（延误24小时）</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">⚖️ 法律分析：</h4>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li><strong>14天规则：</strong>6天前通知 &lt; 7天 → <span className="text-red-600 font-semibold">必须赔偿</span></li>
                    <li><strong>替代航班：</strong>延误24小时 &gt; 允许的2小时 → <span className="text-red-600 font-semibold">不满足"合理替代"</span></li>
                    <li><strong>距离：</strong>北京→法兰克福 = 7,368公里 → <span className="text-green-600 font-semibold">€600赔偿</span></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">🎯 张先生的行动：</h4>
                  <ol className="list-decimal list-inside space-y-1 pl-4">
                    <li><strong>拒绝</strong>LH722替代航班</li>
                    <li><strong>要求</strong>全额退款€2,400（7天内收到）</li>
                    <li><strong>委托</strong>ClaimWinger索赔EU261赔偿</li>
                    <li><strong>自行预订</strong>Air China当天航班（价格€1,800）</li>
                  </ol>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-green-500">
                  <h4 className="font-bold text-gray-900 mb-3">💰 最终结果：</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>原机票退款：</span>
                      <span className="font-semibold">€2,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>新机票成本：</span>
                      <span className="font-semibold text-red-600">-€1,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>EU261赔偿（ClaimWinger处理）：</span>
                      <span className="font-semibold">€600</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ClaimWinger服务费（25%）：</span>
                      <span className="font-semibold text-red-600">-€150</span>
                    </div>
                    <div className="border-t-2 border-green-500 pt-2 flex justify-between text-lg">
                      <span className="font-bold">净收益：</span>
                      <span className="font-bold text-green-600">+€1,050</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-gray-700 italic mb-2">
                    💬 <strong>张先生的反馈：</strong>
                  </p>
                  <p className="text-gray-700 mb-0">
                    "汉莎最初只想给我代金券。ClaimWinger帮我争取到全额退款+€600赔偿。我不仅及时到达，还净赚了€1,050。强烈推荐他们的专业服务！"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                💡 案例关键要点
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">1.</span>
                  <span><strong>不要被"6天前"误导：</strong>航空公司说"提前通知"，但6天仍触发赔偿义务</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">2.</span>
                  <span><strong>评估替代航班：</strong>24小时延误完全不合理，您有权拒绝</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">3.</span>
                  <span><strong>立即行动：</strong>先保证退款，然后专注于赔偿索赔</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">4.</span>
                  <span><strong>专业帮助值得：</strong>ClaimWinger费用仅€150，但争取到总计€1,050净收益</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ❓ 航班取消常见问题
            </h2>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  1. 航班取消与延误，哪个赔偿更多？
                </h3>
                <p className="text-gray-700 mb-0">
                  <strong className="text-blue-600">赔偿金额相同</strong>（€250-€600），但<strong>取消给您更多权利</strong>：<br/><br/>
                  ✅ <strong>取消：</strong>您可以选择退款OR替代航班 + 赔偿<br/>
                  ✅ <strong>延误：</strong>您必须等待原航班（或放弃旅行如果延误≥5h） + 赔偿<br/><br/>
                  实际上，<strong>取消对乘客更有利</strong>，因为您有更灵活的选择。
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  2. 航空公司提前60天通知取消，我还能索赔吗？
                </h3>
                <p className="text-gray-700 mb-0">
                  <strong className="text-red-600">取决于替代航班</strong>：<br/><br/>
                  ❌ 如果航空公司提供了合理的替代航班（任何时间，因为≥14天前通知）→ <strong>无赔偿</strong><br/>
                  ✅ 如果航空公司<strong>没有提供替代航班</strong>，只是取消+退款 → <strong>您仍有权获得€250-€600！</strong><br/><br/>
                  💡 <strong>关键点：</strong>14天规则的目的是给航空公司时间<strong>重新安排您</strong>，而不是简单取消。如果他们不重新安排，您仍然有权获得赔偿。
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  3. 我接受了替代航班，还能索赔赔偿吗？
                </h3>
                <p className="text-gray-700 mb-0">
                  <strong className="text-green-600">是的！</strong>接受替代航班<strong>不会放弃</strong>您的赔偿权利。<br/><br/>
                  ✅ 如果取消通知不满足14天规则 → 您有权获得赔偿<br/>
                  ✅ 如果替代航班仍导致≥3小时延误到达 → 您有权获得赔偿<br/><br/>
                  <strong className="text-blue-600">重要：</strong>航空公司可能会说"您接受了新航班，所以没有赔偿"——这是<strong>谎言</strong>。您的EU261权利受法律保护，不能因接受替代航班而放弃。
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  4. 航空公司说取消是"特殊情况"，我还能索赔吗？
                </h3>
                <p className="text-gray-700 mb-0">
                  <strong className="text-orange-600">需要仔细评估</strong>：<br/><br/>
                  ✅ <strong>"特殊情况"不能免除14天通知规则</strong>：即使是恶劣天气，如果&lt;14天前通知 → 必须赔偿<br/>
                  ❌ <strong>只有真正不可避免的情况</strong>才能免除赔偿：极端天气导致机场关闭、政治动荡、安全威胁<br/>
                  ❌ <strong>常见借口不算</strong>："机组问题"、"技术故障"、"运营困难" → 这些都必须赔偿<br/><br/>
                  <strong className="text-blue-600">ClaimWinger帮您验证：</strong>我们有专家团队评估航空公司的"特殊情况"声明是否合法。许多情况下，这只是拒绝赔偿的借口。
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  5. 我选择了退款，会失去赔偿权利吗？
                </h3>
                <p className="text-gray-700 mb-0">
                  <strong className="text-green-600">绝对不会！</strong>这是航空公司最常见的误导之一。<br/><br/>
                  ✅ <strong>退款</strong> = 您的合同权利（航空公司未提供服务）<br/>
                  ✅ <strong>赔偿</strong> = 您的法定权利（EU261规定的不便补偿）<br/>
                  ✅ <strong>您可以同时获得两者！</strong><br/><br/>
                  <strong className="text-blue-600">实例：</strong><br/>
                  • €800机票退款（合同）<br/>
                  • +€600 EU261赔偿（法律）<br/>
                  • =<strong className="text-2xl text-green-600">总计€1,400</strong><br/><br/>
                  💡 <strong>永远记住：</strong>退款和赔偿是<strong>两个独立的权利</strong>，互不影响。
                </p>
              </div>
            </div>
          </section>

          {/* CTA Bottom */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 my-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">
                航班取消？立即索赔€250-€600赔偿
              </h3>
              <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                ClaimWinger专业团队处理所有复杂的法律工作——14天规则、替代航班评估、航空公司谈判。您只需3分钟提交信息，我们负责其余一切。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg"><strong>无预付费用</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg"><strong>21天</strong>快速处理</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg"><strong>98%</strong>成功率</span>
                </div>
              </div>
              <a
                href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_cancellation_guide_bottom"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-xl hover:bg-blue-50 transition-colors shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                免费开始索赔
                <ArrowRight className="w-7 h-7" />
              </a>
              <p className="text-blue-200 text-sm mt-4">
                ⚡ 平均处理时间21天 | 💰 成功后才收费 | 🛡️ 无风险保证
              </p>
            </div>
          </div>

          {/* Internal Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              📚 相关阅读
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/zh/blog/compensation-vs-refund-difference"
                className="block p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">赔偿金 vs 退票款：有何不同？</h3>
                <p className="text-gray-600 text-sm">了解这两个独立权利以及如何同时获得</p>
              </Link>
              <Link
                href="/zh/blog/how-many-hours-delay-compensation"
                className="block p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">航班延误几小时可以索赔？</h3>
                <p className="text-gray-600 text-sm">3小时规则完整解释</p>
              </Link>
              <Link
                href="/zh/blog/extraordinary-circumstances-explained"
                className="block p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">什么是"特殊情况"？</h3>
                <p className="text-gray-600 text-sm">航空公司何时可以拒绝赔偿</p>
              </Link>
              <Link
                href="/zh/blog/eu261-regulation-explained-chinese-passengers"
                className="block p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">EU 261/2004完整指南</h3>
                <p className="text-gray-600 text-sm">中国乘客的欧洲航班权益全解</p>
              </Link>
            </div>
          </section>
        </div>

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: '航班取消与延误，哪个赔偿更多？',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '赔偿金额相同（€250-€600），但取消给您更多权利：您可以选择退款OR替代航班 + 赔偿。延误时您必须等待原航班（或放弃旅行如果延误≥5h）+ 赔偿。实际上，取消对乘客更有利，因为您有更灵活的选择。'
                  }
                },
                {
                  '@type': 'Question',
                  name: '航空公司提前60天通知取消，我还能索赔吗？',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '取决于替代航班。如果航空公司提供了合理的替代航班（任何时间，因为≥14天前通知）→ 无赔偿。如果航空公司没有提供替代航班，只是取消+退款 → 您仍有权获得€250-€600！14天规则的目的是给航空公司时间重新安排您，而不是简单取消。'
                  }
                },
                {
                  '@type': 'Question',
                  name: '我接受了替代航班，还能索赔赔偿吗？',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '是的！接受替代航班不会放弃您的赔偿权利。如果取消通知不满足14天规则或替代航班仍导致≥3小时延误到达，您有权获得赔偿。您的EU261权利受法律保护，不能因接受替代航班而放弃。'
                  }
                },
                {
                  '@type': 'Question',
                  name: '航空公司说取消是特殊情况，我还能索赔吗？',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '需要仔细评估。特殊情况不能免除14天通知规则：即使是恶劣天气，如果<14天前通知必须赔偿。只有真正不可避免的情况（极端天气导致机场关闭、政治动荡、安全威胁）才能免除赔偿。常见借口如机组问题、技术故障、运营困难都必须赔偿。'
                  }
                },
                {
                  '@type': 'Question',
                  name: '我选择了退款，会失去赔偿权利吗？',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '绝对不会！退款是您的合同权利（航空公司未提供服务），赔偿是您的法定权利（EU261规定的不便补偿）。您可以同时获得两者！例如：€800机票退款 + €600 EU261赔偿 = 总计€1,400。退款和赔偿是两个独立的权利，互不影响。'
                  }
                }
              ]
            })
          }}
        />
      </article>
    </LayoutZh>
  );
}