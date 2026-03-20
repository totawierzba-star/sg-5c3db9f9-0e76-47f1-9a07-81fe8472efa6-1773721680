import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { AlertCircle, Clock, Euro, Plane, CheckCircle, XCircle, Info } from "lucide-react";

export default function HowManyHoursDelayCompensation() {
  return (
    <LayoutZh>
      <SEO 
        title="航班延误几小时可索赔【2026】3小时规则+€250-€600计算公式详解"
        description="航班延误超过3小时才能索赔吗？了解EU 261/2004的3小时规则、时间计算方式、不同距离的赔偿金额（€250/€400/€600）及常见陷阱"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/zh/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← 返回博客
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            航班延误超过几小时才能索赔？
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            EU 261/2004的3小时规则详解 + 时间计算方式 + €250-€600赔偿金额
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>📅 2026年2月25日</span>
            <span>⏱️ 阅读时间：9分钟</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">法律解读</span>
          </div>
        </header>

        {/* CTA Top */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white">
          <div className="flex items-start gap-4">
            <Euro className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">航班延误超过3小时？立即检查赔偿！</h3>
              <p className="mb-4 text-blue-100">
                使用我们的免费计算器，30秒内了解您可以获得€250-€600的赔偿金额
              </p>
              <a
                href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_hours_delay_top"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                免费检查您的航班 →
              </a>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2">快速回答</h3>
                <p className="mb-0 text-gray-700">
                  根据EU 261/2004法规，航班延误<strong className="text-blue-600">到达目的地超过3小时</strong>（或更长时间），您就有权获得€250至€600的赔偿金。关键是<strong>到达时间</strong>，而不是出发时间！
                </p>
              </div>
            </div>
          </div>

          {/* Critical 3-Hour Rule */}
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mt-12 mb-6">
            <Clock className="w-7 h-7 text-blue-600" />
            关键的"3小时规则"
          </h2>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">EU 261/2004 第7条：赔偿权利</h3>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-4">
              "当乘客到达最终目的地的时间比原定时间<strong>晚3小时或以上</strong>时，应获得赔偿..."
            </blockquote>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 mb-1">&lt; 3小时</div>
                <div className="text-sm text-gray-600">无赔偿权利</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 mb-1">≥ 3小时</div>
                <div className="text-sm text-gray-600">有赔偿权利</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Euro className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 mb-1">€250-600</div>
                <div className="text-sm text-gray-600">根据距离</div>
              </div>
            </div>
          </div>

          {/* How to Calculate */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">如何正确计算延误时间？</h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">重要：计算方式</h4>
                <p className="mb-0 text-gray-700">
                  延误时间的计算基于<strong className="text-yellow-800">到达目的地的时间</strong>（舱门打开时间），而非起飞时间！许多乘客误以为是起飞延误，但实际上EU 261/2004法规明确规定是<strong>"到达时间"</strong>。
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-green-600 rounded-xl p-6 bg-green-50">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-gray-900 m-0">正确方式</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-gray-900">1️⃣ 原定到达时间</div>
                  <div className="text-gray-600">机票上显示的到达时间（舱门打开）</div>
                </div>
                <div className="text-center text-2xl text-gray-400">−</div>
                <div>
                  <div className="font-semibold text-gray-900">2️⃣ 实际到达时间</div>
                  <div className="text-gray-600">飞机舱门实际打开的时间</div>
                </div>
                <div className="text-center text-2xl text-gray-400">=</div>
                <div>
                  <div className="font-semibold text-green-600">延误时间</div>
                  <div className="text-gray-600">如果 ≥ 3小时 = 有赔偿权利</div>
                </div>
              </div>
            </div>

            <div className="border-2 border-red-600 rounded-xl p-6 bg-red-50">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-bold text-gray-900 m-0">错误方式</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-red-600">❌ 出发延误时间</div>
                  <div className="text-gray-600">舱门关闭时间不算！</div>
                </div>
                <div>
                  <div className="font-semibold text-red-600">❌ 登机延误时间</div>
                  <div className="text-gray-600">登机时间不算！</div>
                </div>
                <div>
                  <div className="font-semibold text-red-600">❌ 起飞时间</div>
                  <div className="text-gray-600">飞机离地时间不算！</div>
                </div>
                <div>
                  <div className="font-semibold text-red-600">❌ 降落时间</div>
                  <div className="text-gray-600">轮子着地时间不算！</div>
                </div>
              </div>
            </div>
          </div>

          {/* Compensation Amounts by Distance */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">赔偿金额：根据飞行距离</h2>

          <p className="text-gray-700 mb-6">
            一旦延误达到3小时，赔偿金额取决于<strong>飞行距离</strong>（而非机票价格！）：
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left">距离</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">延误时间</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">赔偿金额</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">航线示例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">≤ 1,500公里</td>
                  <td className="border border-gray-300 px-4 py-3">≥ 3小时</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-blue-600">€250</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">柏林→巴黎，布拉格→伦敦</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1,500 - 3,500公里</td>
                  <td className="border border-gray-300 px-4 py-3">≥ 3小时</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-blue-600">€400</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">伦敦→雅典，巴黎→莫斯科</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">&gt; 3,500公里（EU内）</td>
                  <td className="border border-gray-300 px-4 py-3">≥ 3小时</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-blue-600">€600</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">（不适用于EU内航班）</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">&gt; 3,500公里（EU外）</td>
                  <td className="border border-gray-300 px-4 py-3">≥ 3小时</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-blue-600">€600</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-semibold">北京→法兰克福，上海→巴黎</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">&gt; 3,500公里（EU外）</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">3-4小时</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-orange-600">€300</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">（减半：延误3-4小时）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">中国乘客常见情况</h4>
                <p className="mb-2 text-gray-700">
                  对于从中国往返欧洲的航班（北京/上海/广州 ↔ 法兰克福/巴黎/阿姆斯特丹等），飞行距离通常<strong>&gt; 7,000公里</strong>，因此：
                </p>
                <ul className="space-y-1 text-gray-700 mb-0">
                  <li>✅ 延误 ≥ 4小时 → <strong className="text-blue-600">€600</strong></li>
                  <li>✅ 延误 3小时-3小时59分钟 → <strong className="text-orange-600">€300</strong></li>
                  <li>❌ 延误 &lt; 3小时 → 无赔偿</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Critical Cases */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">临界案例：2小时59分钟 vs. 3小时01分钟</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-red-600 rounded-xl p-6 bg-red-50">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-bold text-gray-900 m-0">案例 A：2小时59分钟</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div><strong>原定到达：</strong> 15:00</div>
                <div><strong>实际到达：</strong> 17:59</div>
                <div><strong>延误时间：</strong> 2小时59分钟</div>
                <div className="pt-3 border-t border-red-300">
                  <div className="font-bold text-red-600 text-base">❌ 无赔偿权利</div>
                  <div className="text-gray-600 mt-1">差1分钟！仅有航空公司自愿协助（可能）</div>
                </div>
              </div>
            </div>

            <div className="border-2 border-green-600 rounded-xl p-6 bg-green-50">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-gray-900 m-0">案例 B：3小时01分钟</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div><strong>原定到达：</strong> 15:00</div>
                <div><strong>实际到达：</strong> 18:01</div>
                <div><strong>延误时间：</strong> 3小时01分钟</div>
                <div className="pt-3 border-t border-green-300">
                  <div className="font-bold text-green-600 text-base">✅ 有赔偿权利</div>
                  <div className="text-gray-600 mt-1">€250-€600（根据距离）</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">重要提示：精确到分钟！</h4>
                <p className="mb-0 text-gray-700">
                  航空公司会精确计算延误时间<strong>到分钟</strong>。如果您的延误时间接近3小时（例如2小时55分钟-3小时05分钟），请务必<strong>保留登机牌、到达时间的照片、机场广播记录</strong>等证据，以确保准确计算！
                </p>
              </div>
            </div>
          </div>

          {/* CTA Middle */}
          <div className="my-12 p-8 bg-gradient-to-r from-green-600 to-green-700 rounded-xl text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">不确定您的延误是否达到3小时？</h3>
              <p className="text-green-100 mb-6 text-lg">
                使用ClaimWinger的免费计算器，输入您的航班信息，我们会自动计算延误时间和赔偿金额
              </p>
              <a
                href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_hours_delay_mid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-green-600 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
              >
                免费检查航班 →
              </a>
            </div>
          </div>

          {/* Airlines' Tricks */}
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mt-12 mb-6">
            <AlertCircle className="w-7 h-7 text-red-600" />
            航空公司的4个常见陷阱
          </h2>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-red-600 bg-red-50 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">❌ 陷阱1："起飞只延误了2小时"</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>航空公司说法：</strong>"起飞只延误2小时，不到3小时，所以没有赔偿。"</p>
                <p><strong className="text-red-600">✅ 真相：</strong>EU 261/2004看的是<strong>到达时间</strong>，不是起飞时间！如果到达延误≥3小时，即使起飞只延误1小时，仍有权获得赔偿。</p>
              </div>
            </div>

            <div className="border-l-4 border-red-600 bg-red-50 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">❌ 陷阱2："飞行中追回了时间"</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>航空公司说法：</strong>"虽然起飞延误3小时，但我们在飞行中加速，最终到达只延误2小时45分钟。"</p>
                <p><strong className="text-red-600">✅ 真相：</strong>这种情况下<strong>确实没有赔偿</strong>（因为到达&lt;3小时）。但如果航空公司没有提供证据（实际到达时间记录），您可以要求他们出示飞行数据。</p>
              </div>
            </div>

            <div className="border-l-4 border-red-600 bg-red-50 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">❌ 陷阱3："计划时间 vs. 实际时间"混淆</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>航空公司说法：</strong>"您的航班按照<strong>修订后的时间表</strong>到达，所以没有延误。"</p>
                <p><strong className="text-red-600">✅ 真相：</strong>赔偿计算基于<strong>机票上的原定时间</strong>，而非航空公司后来修订的时间！如果您的机票显示15:00到达，但实际18:30到达，延误时间是3.5小时，无论航空公司是否修改了时间表。</p>
              </div>
            </div>

            <div className="border-l-4 border-red-600 bg-red-50 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">❌ 陷阱4："舱门打开时间"模糊</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>航空公司说法：</strong>"我们的记录显示舱门在17:58打开，所以延误只有2小时58分钟。"</p>
                <p><strong className="text-red-600">✅ 真相：</strong>如果您有证据（照片、机场时间戳、其他乘客证词）显示舱门实际在18:02打开，您可以反驳！保留<strong>所有时间证据</strong>（登机牌、手机照片、机场广播）非常重要。</p>
              </div>
            </div>
          </div>

          {/* Real Case Study */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">真实案例：3小时1分钟的胜利</h2>

          <div className="bg-white border-2 border-blue-600 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                李
              </div>
              <div>
                <div className="font-bold text-gray-900">乘客：李女士</div>
                <div className="text-sm text-gray-600">Lufthansa LH720：北京→法兰克福</div>
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">航班信息</div>
                  <ul className="text-sm space-y-1">
                    <li>• 日期：2025年11月15日</li>
                    <li>• 原定到达：14:30（法兰克福）</li>
                    <li>• 实际到达：17:31（舱门打开）</li>
                    <li>• <strong className="text-blue-600">延误时间：3小时1分钟</strong></li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">赔偿情况</div>
                  <ul className="text-sm space-y-1">
                    <li>• 飞行距离：7,362公里</li>
                    <li>• 赔偿金额：<strong className="text-green-600">€600</strong></li>
                    <li>• 处理时间：14天</li>
                    <li>• 方式：ClaimWinger代理</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">关键点：</h4>
                <ol className="space-y-2 text-sm">
                  <li><strong>1. 航空公司最初拒绝：</strong>Lufthansa声称延误"不到3小时"（基于他们的内部系统显示17:29舱门打开）</li>
                  <li><strong>2. 李女士的证据：</strong>她拍摄了舱门打开时机场时钟显示17:31的照片</li>
                  <li><strong>3. ClaimWinger介入：</strong>提交了照片证据 + 要求Lufthansa出示官方飞行数据记录</li>
                  <li><strong>4. 结果：</strong>Lufthansa在14天内支付€600（承认延误3小时1分钟）</li>
                </ol>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <p className="text-sm text-gray-700 mb-0 italic">
                  "仅仅1分钟的差别，但价值€600！感谢我保留了照片证据，也感谢ClaimWinger帮我争取。" — 李女士
                </p>
              </div>
            </div>
          </div>

          {/* Special Cases */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">特殊情况说明</h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🔄 转机航班</h3>
              <p className="text-gray-700 mb-2">
                如果您有转机，计算方式是<strong>最终到达目的地的延误时间</strong>，而非第一段航班的延误：
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-2"><strong>示例：</strong>上海→法兰克福→慕尼黑</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• 第一段（上海→法兰克福）：延误2小时</li>
                  <li>• 错过转机，等待下一班</li>
                  <li>• <strong>最终到达慕尼黑：</strong>比原定晚5小时</li>
                  <li>• ✅ 赔偿基于<strong>5小时延误</strong> → €600（如果7000+km总距离）</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">✈️ 分段预订 (Separate Bookings)</h3>
              <p className="text-gray-700 mb-2">
                如果您<strong>分别预订</strong>了两段航班（不是同一张票），则每段航班<strong>单独计算</strong>：
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-2"><strong>示例：</strong>分别预订北京→法兰克福 和 法兰克福→罗马</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• 第一段延误5小时 → ✅ €600赔偿</li>
                  <li>• 错过第二段航班 → ❌ <strong>不是航空公司责任</strong>（因为是分别预订）</li>
                  <li>• ⚠️ 建议：购买<strong>同一张联票</strong>以获得全程保护</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🕐 时区变化</h3>
              <p className="text-gray-700 mb-2">
                延误时间的计算<strong>已考虑时区差异</strong>（使用当地时间）：
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-2"><strong>示例：</strong>北京→巴黎（时差-7小时）</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• 原定到达：巴黎当地时间 18:00</li>
                  <li>• 实际到达：巴黎当地时间 21:30</li>
                  <li>• 延误：3小时30分钟（<strong>无需手动转换时区</strong>）</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">常见问题</h2>

          <div className="space-y-4 mb-8">
            <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Q1: 如果延误正好是3小时整（3:00:00），算不算达到门槛？
              </summary>
              <div className="mt-3 text-gray-700 text-sm">
                <p><strong>✅ 是的！</strong>EU 261/2004规定是"3小时或以上"（3 hours or more），所以3小时整（3:00:00）<strong>满足条件</strong>，您有权获得赔偿。</p>
              </div>
            </details>

            <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Q2: 航空公司说"我们的系统显示只延误2小时58分钟"，我该怎么办？
              </summary>
              <div className="mt-3 text-gray-700 text-sm">
                <p>您可以：</p>
                <ol className="space-y-1 mt-2">
                  <li>1. <strong>提供自己的证据：</strong>登机牌照片、机场时钟照片、手机时间戳</li>
                  <li>2. <strong>要求航空公司出示官方记录：</strong>根据EU 261 Art. 14，他们必须提供书面解释</li>
                  <li>3. <strong>查询第三方数据：</strong>FlightRadar24、机场官方到达时间记录</li>
                  <li>4. <strong>联系ClaimWinger：</strong>我们可以帮助您获取准确的飞行数据并与航空公司交涉</li>
                </ol>
              </div>
            </details>

            <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Q3: 如果延误4小时，赔偿会更多吗？
              </summary>
              <div className="mt-3 text-gray-700 text-sm">
                <p><strong>取决于距离：</strong></p>
                <ul className="space-y-1 mt-2">
                  <li>• <strong>短途（≤1500km）：</strong>延误3h或4h或10h，都是€250（固定）</li>
                  <li>• <strong>中途（1500-3500km）：</strong>延误3h或4h或10h，都是€400（固定）</li>
                  <li>• <strong>长途（&gt;3500km EU外）：</strong>延误<strong>3-4小时</strong> = €300，延误<strong>≥4小时</strong> = €600</li>
                </ul>
                <p className="mt-2"><strong>对于中国↔欧洲航班：</strong>延误≥4小时才能拿到完整的€600；延误3-4小时只能拿€300（减半）。</p>
              </div>
            </details>

            <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Q4: 延误超过24小时，赔偿会更多吗？
              </summary>
              <div className="mt-3 text-gray-700 text-sm">
                <p><strong>❌ 不会。</strong>EU 261/2004的赔偿金额是<strong>固定的</strong>（€250/€400/€600），与延误时长无关。即使延误48小时，赔偿金额仍然是基于飞行距离的固定金额。</p>
                <p className="mt-2"><strong>但您可能还有权获得：</strong></p>
                <ul className="space-y-1 mt-2">
                  <li>• ✅ 餐食、饮料（航空公司必须提供）</li>
                  <li>• ✅ 酒店住宿（如果延误过夜）</li>
                  <li>• ✅ 机场至酒店的交通</li>
                  <li>• ✅ 通讯费用（2次电话/邮件）</li>
                </ul>
                <p className="mt-2">这些费用<strong>额外于€600赔偿金</strong>，可以向航空公司索赔。</p>
              </div>
            </details>

            <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Q5: 如果我接受了航空公司提供的改签，还能要求赔偿吗？
              </summary>
              <div className="mt-3 text-gray-700 text-sm">
                <p><strong>✅ 可以！</strong>接受<strong>改签（rebooking）</strong>不影响您获得€250-€600赔偿的权利。这是两个独立的权利：</p>
                <ul className="space-y-1 mt-2">
                  <li>• <strong>改签：</strong>航空公司必须提供（免费）</li>
                  <li>• <strong>赔偿：</strong>如果到达延误≥3小时，必须支付</li>
                </ul>
                <p className="mt-2 font-semibold text-blue-600">即使您选择了改签并最终到达，只要总延误≥3小时，仍然有权要求赔偿！</p>
              </div>
            </details>
          </div>

          {/* How to Claim */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">如何申请赔偿？</h2>

          <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-600 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">通过ClaimWinger，只需3步：</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">提交航班信息</h4>
                  <p className="text-sm text-gray-700">输入航班号、日期、延误时间 → 我们的系统自动验证资格</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">我们处理所有文书工作</h4>
                  <p className="text-sm text-gray-700">专业律师团队与航空公司交涉，无需您操心</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">收到€250-€600赔偿金</h4>
                  <p className="text-sm text-gray-700">平均14-28天内到账，不成功不收费（No Win No Fee）</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-blue-200">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">成功率</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">21天</div>
                  <div className="text-sm text-gray-600">平均处理时间</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">€0</div>
                  <div className="text-sm text-gray-600">预付费用</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Bottom */}
          <div className="my-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">您的航班延误超过3小时了吗？</h3>
            <p className="text-xl text-blue-100 mb-6">
              立即检查您的赔偿权利 — 免费、快速、无风险
            </p>
            <a
              href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_hours_delay_bottom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-blue-600 rounded-lg font-bold text-xl hover:bg-blue-50 transition-colors shadow-xl"
            >
              免费检查航班 →
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ 30秒获得结果 ✓ 不成功不收费 ✓ 98%成功率
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">相关文章</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/zh/blog/which-flights-qualify-compensation" className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="font-semibold text-blue-600 mb-1">哪些航班有资格获得赔偿？</div>
                <div className="text-sm text-gray-600">了解EU 261/2004覆盖的航班范围</div>
              </Link>
              <Link href="/zh/blog/flight-cancellation-compensation-guide" className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="font-semibold text-blue-600 mb-1">航班取消赔偿指南</div>
                <div className="text-sm text-gray-600">取消航班的赔偿金额和申请流程</div>
              </Link>
              <Link href="/zh/blog/extraordinary-circumstances-explained" className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="font-semibold text-blue-600 mb-1">什么是特殊情况？</div>
                <div className="text-sm text-gray-600">航空公司何时可以拒绝赔偿</div>
              </Link>
              <Link href="/zh/blog/compensation-vs-refund-difference" className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="font-semibold text-blue-600 mb-1">赔偿金 vs 退票款</div>
                <div className="text-sm text-gray-600">了解两者的区别和如何获得</div>
              </Link>
            </div>
          </div>

          {/* JSON-LD Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': '如果延误正好是3小时整（3:00:00），算不算达到门槛？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': '是的！EU 261/2004规定是"3小时或以上"（3 hours or more），所以3小时整（3:00:00）满足条件，您有权获得赔偿。'
                    }
                  },
                  {
                    '@type': 'Question',
                    'name': '航空公司说"我们的系统显示只延误2小时58分钟"，我该怎么办？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': '您可以提供自己的证据（登机牌照片、机场时钟照片），要求航空公司出示官方记录，查询第三方数据（FlightRadar24），或联系ClaimWinger帮助您获取准确数据并交涉。'
                    }
                  },
                  {
                    '@type': 'Question',
                    'name': '如果延误4小时，赔偿会更多吗？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': '取决于距离。对于中国↔欧洲航班（>3500km），延误≥4小时可获得完整的€600；延误3-4小时只能获得€300（减半）。短途和中途航班的赔偿金额（€250/€400）是固定的，与延误时长无关。'
                    }
                  },
                  {
                    '@type': 'Question',
                    'name': '延误超过24小时，赔偿会更多吗？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': '不会。EU 261/2004的赔偿金额是固定的（€250/€400/€600），与延误时长无关。但您有权获得额外的餐食、住宿、交通等费用补偿。'
                    }
                  },
                  {
                    '@type': 'Question',
                    'name': '如果我接受了航空公司提供的改签，还能要求赔偿吗？',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': '可以！接受改签（rebooking）不影响您获得€250-€600赔偿的权利。改签和赔偿是两个独立的权利。即使您选择了改签并最终到达，只要总延误≥3小时，仍然有权要求赔偿。'
                    }
                  }
                ]
              })
            }}
          />

        </div>
      </article>
    </LayoutZh>
  );
}
