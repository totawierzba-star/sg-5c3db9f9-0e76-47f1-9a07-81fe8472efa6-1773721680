import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle, Info, DollarSign, RefreshCw, FileText, Calculator } from "lucide-react";

export default function CompensationVsRefundDifference() {
  return (
    <LayoutZh>
      <SEO
        title="航班补偿vs退款【完整区别】Compensation vs Refund Difference Explained"
        description="航班补偿(€250-€600)和机票退款是两回事！详解何时可以同时获得、航司陷阱、实际案例、如何正确索赔双重赔偿。"
        url="https://lotproblem.pl/zh/blog/compensation-vs-refund-difference"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            <span>赔偿知识</span>
            <span>•</span>
            <span className="text-slate-600">阅读时间: 12分钟</span>
            <span>•</span>
            <span className="text-blue-600 font-medium">基础必读</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            航班补偿 vs 机票退款<br/>
            <span className="text-blue-600">【完整区别】你可能同时获得两者</span>
          </h1>

          <p className="text-xl text-slate-700 leading-relaxed mb-8">
            95%的乘客混淆这两个概念，损失数千欧元！补偿(Compensation €250-€600)和退款(Refund)是<strong>完全不同的权利</strong>，许多情况下你可以<strong>同时获得两者</strong>。本文彻底澄清所有误区。
          </p>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              ⚠️ 最常见的昂贵错误
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span><strong>错误认知：</strong>"航司退了我的机票(€300)，所以不再有其他赔偿了"</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>正确理解：</strong>退款€300 <strong>+</strong> 补偿€600 = <strong>共€900！</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span><strong>错误认知：</strong>"我接受了抵用券(voucher)，所以失去了补偿权利"</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>正确理解：</strong>抵用券€600 <strong>+</strong> 补偿€600 = <strong>共€1,200！</strong></span>
              </div>
            </div>
          </div>
        </header>

        {/* 目录 */}
        <nav className="bg-slate-50 p-6 rounded-lg mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">本文导航</h2>
          <ul className="space-y-2 text-slate-700">
            <li><a href="#definitions" className="hover:text-blue-600">📖 基本定义：补偿 vs 退款</a></li>
            <li><a href="#key-differences" className="hover:text-blue-600">🔍 核心区别（附可视化图表）</a></li>
            <li><a href="#8-scenarios" className="hover:text-blue-600">📊 8种场景：你能得到什么</a></li>
            <li><a href="#airline-traps" className="hover:text-blue-600">⚠️ 航司常用5大陷阱</a></li>
            <li><a href="#when-both" className="hover:text-blue-600">💰 何时可以同时获得两者</a></li>
            <li><a href="#voucher-confusion" className="hover:text-blue-600">🎫 抵用券 vs 退款 vs 补偿</a></li>
            <li><a href="#case-studies" className="hover:text-blue-600">💡 真实案例：成功与失败</a></li>
            <li><a href="#common-mistakes" className="hover:text-blue-600">❌ 7个昂贵的错误</a></li>
            <li><a href="#how-to-claim" className="hover:text-blue-600">📝 如何正确索赔双重赔偿</a></li>
            <li><a href="#decision-tree" className="hover:text-blue-600">🎯 决策树：该选什么</a></li>
            <li><a href="#calculator" className="hover:text-blue-600">🧮 计算器：你能得到多少</a></li>
            <li><a href="#faq" className="hover:text-blue-600">❓ 常见问题</a></li>
          </ul>
        </nav>

        {/* 基本定义 */}
        <section id="definitions" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-600" />
            基本定义：补偿 vs 退款
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Compensation */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6" />
                补偿 (Compensation)
              </h3>
              <div className="space-y-3 text-slate-700">
                <p><strong className="text-blue-900">定义：</strong>欧盟对航司的<strong>罚款</strong>，因延误/取消给乘客造成不便</p>
                <p><strong className="text-blue-900">法律依据：</strong>EU 261/2004 规定</p>
                <p><strong className="text-blue-900">金额：</strong>固定的€250、€400或€600（取决于距离）</p>
                <p><strong className="text-blue-900">条件：</strong>延误≥3小时 或 航班取消（非特殊情况）</p>
                <p><strong className="text-blue-900">支付方：</strong>航空公司（作为惩罚）</p>
                <p><strong className="text-blue-900">与机票价格无关：</strong>即使你的机票只花€100，也能获得€600补偿！</p>
              </div>
            </div>

            {/* Refund */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <RefreshCw className="w-6 h-6" />
                退款 (Refund)
              </h3>
              <div className="space-y-3 text-slate-700">
                <p><strong className="text-green-900">定义：</strong>返还你已支付的<strong>机票费用</strong></p>
                <p><strong className="text-green-900">法律依据：</strong>合同法 + EU 261（取消时）</p>
                <p><strong className="text-green-900">金额：</strong>变动的 = 你实际支付的机票价格</p>
                <p><strong className="text-green-900">条件：</strong>航班取消 且 你拒绝替代航班 或 延误&gt;5小时且你放弃旅行</p>
                <p><strong className="text-green-900">支付方：</strong>航空公司（返还购买款）</p>
                <p><strong className="text-green-900">基于购买价：</strong>如果机票€800，退款就是€800；如果€150，退款就是€150</p>
              </div>
            </div>
          </div>

          {/* 关键理解 */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-yellow-900 mb-3 flex items-center gap-2">
              <Info className="w-6 h-6" />
              🔑 关键理解
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>补偿</strong> = 对<strong>不便</strong>的赔偿（固定金额€250-€600）</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>退款</strong> = 返还<strong>机票费用</strong>（变动金额 = 购买价）</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>这是<strong>两个独立的权利</strong>，不是"二选一"！</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>在许多情况下，你可以<strong>同时获得两者</strong>！</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 核心区别可视化 */}
        <section id="key-differences" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🔍 核心区别（可视化对比）
          </h2>

          <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 text-left font-bold text-slate-900">特征</th>
                  <th className="p-4 text-left font-bold text-blue-900">补偿 (Compensation)</th>
                  <th className="p-4 text-left font-bold text-green-900">退款 (Refund)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 font-semibold text-slate-700">性质</td>
                  <td className="p-4 text-slate-700">对航司的<strong className="text-blue-600">罚款</strong></td>
                  <td className="p-4 text-slate-700">返还<strong className="text-green-600">购买款</strong></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700">金额</td>
                  <td className="p-4 text-slate-700"><strong className="text-blue-600">固定</strong>：€250/€400/€600</td>
                  <td className="p-4 text-slate-700"><strong className="text-green-600">变动</strong>：= 机票价格</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-700">触发条件</td>
                  <td className="p-4 text-slate-700">延误≥3h 或 取消</td>
                  <td className="p-4 text-slate-700">取消+拒绝替代 或 延误&gt;5h+放弃</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700">是否需要飞行</td>
                  <td className="p-4 text-slate-700">不需要（即使你飞了也有权）</td>
                  <td className="p-4 text-slate-700">不飞才有（飞了就无退款）</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-700">处理速度</td>
                  <td className="p-4 text-slate-700">较慢（通常30-90天）</td>
                  <td className="p-4 text-slate-700">较快（通常7-14天）</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700">可以同时获得吗</td>
                  <td className="p-4 text-green-600 font-bold" colSpan={2}>✅ 是的！在许多情况下可以同时获得两者</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Venn diagram concept */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center">
              💡 可视化理解：两个独立的权利
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-blue-100 p-6 rounded-lg border-2 border-blue-300">
                <div className="text-4xl font-bold text-blue-900 mb-2">€600</div>
                <div className="text-sm text-blue-800 font-semibold">补偿<br/>(Compensation)</div>
                <div className="text-xs text-blue-700 mt-2">因不便的固定罚款</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-6xl text-purple-600">+</div>
              </div>
              <div className="bg-green-100 p-6 rounded-lg border-2 border-green-300">
                <div className="text-4xl font-bold text-green-900 mb-2">€300</div>
                <div className="text-sm text-green-800 font-semibold">退款<br/>(Refund)</div>
                <div className="text-xs text-green-700 mt-2">返还机票购买款</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-block bg-white px-8 py-4 rounded-lg border-2 border-purple-300">
                <div className="text-5xl font-bold text-purple-900 mb-2">= €900</div>
                <div className="text-sm text-purple-800 font-semibold">总共可获得！</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 1 */}
        <div className="my-12 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-xl text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              不确定你有权获得什么？免费检查！
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              输入航班信息，我们会告诉你能获得<strong>补偿 + 退款</strong>的总金额
            </p>
            <a
              href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_compensation_vs_refund_cta1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              免费检查我的权利
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-blue-100 mt-4">
              ⚡ 2分钟评估 • 完全免费 • 无风险
            </p>
          </div>
        </div>

        {/* 8种场景 */}
        <section id="8-scenarios" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Calculator className="w-8 h-8 text-blue-600" />
            8种场景：你能得到什么
          </h2>

          <p className="text-slate-700 mb-6">
            以下是最常见的8种场景。假设：<strong>机票价格€300</strong>，<strong>航线距离&gt;3,500km</strong>（如北京↔法兰克福），使用<strong>欧盟航司</strong>。
          </p>

          <div className="space-y-6">
            {/* Scenario 1 */}
            <div className="bg-white border-2 border-green-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <span className="text-2xl font-bold text-green-900">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-900 mb-2">
                    ✅ 航班取消，你拒绝替代航班
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-green-700 mb-1">补偿</div>
                      <div className="text-2xl font-bold text-green-900">€600</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-green-700 mb-1">退款</div>
                      <div className="text-2xl font-bold text-green-900">€300</div>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg border-2 border-green-400">
                      <div className="text-sm text-green-700 mb-1">总计</div>
                      <div className="text-2xl font-bold text-green-900">€900</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    <strong>解释：</strong>航班取消给你补偿权（€600），拒绝替代航班给你退款权（€300）。两者都能拿！
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white border-2 border-blue-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <span className="text-2xl font-bold text-blue-900">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    ✅ 航班取消，你接受了替代航班
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-700 mb-1">补偿</div>
                      <div className="text-2xl font-bold text-blue-900">€600</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-700 mb-1">退款</div>
                      <div className="text-2xl font-bold text-blue-900">€0</div>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-400">
                      <div className="text-sm text-blue-700 mb-1">总计</div>
                      <div className="text-2xl font-bold text-blue-900">€600</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    <strong>解释：</strong>你飞了替代航班，所以没有退款。但补偿权仍然存在（因为原航班取消了）。
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-white border-2 border-indigo-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <span className="text-2xl font-bold text-indigo-900">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">
                    ✅ 航班延误≥3小时，你乘坐了延误的航班
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <div className="text-sm text-indigo-700 mb-1">补偿</div>
                      <div className="text-2xl font-bold text-indigo-900">€600</div>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <div className="text-sm text-indigo-700 mb-1">退款</div>
                      <div className="text-2xl font-bold text-indigo-900">€0</div>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg border-2 border-indigo-400">
                      <div className="text-sm text-indigo-700 mb-1">总计</div>
                      <div className="text-2xl font-bold text-indigo-900">€600</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    <strong>解释：</strong>最常见场景。延误≥3h = 有补偿权。但你飞了 = 无退款权（机票已使用）。
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 4 */}
            <div className="bg-white border-2 border-purple-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <span className="text-2xl font-bold text-purple-900">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-900 mb-2">
                    ✅ 航班延误&gt;5小时，你决定不飞了
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-sm text-purple-700 mb-1">补偿</div>
                      <div className="text-2xl font-bold text-purple-900">€600</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-sm text-purple-700 mb-1">退款</div>
                      <div className="text-2xl font-bold text-purple-900">€300</div>
                    </div>
                    <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-400">
                      <div className="text-sm text-purple-700 mb-1">总计</div>
                      <div className="text-2xl font-bold text-purple-900">€900</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    <strong>解释：</strong>延误&gt;5h时你有权放弃旅行并获得退款。补偿权也存在（因为≥3h）。双重胜利！
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 5 */}
            <div className="bg-white border-2 border-slate-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <span className="text-2xl font-bold text-slate-900">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    ❌ 航班延误&lt;3小时，你乘坐了航班
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-sm text-slate-700 mb-1">补偿</div>
                      <div className="text-2xl font-bold text-slate-900">€0</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-sm text-slate-700 mb-1">退款</div>
                      <div className="text-2xl font-bold text-slate-900">€0</div>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-lg border-2 border-slate-400">
                      <div className="text-sm text-slate-700 mb-1">总计</div>
                      <div className="text-2xl font-bold text-slate-900">€0</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    <strong>解释：</strong>延误未达到3小时门槛 = 无补偿权。飞了 = 无退款权。不幸，但这是规则。
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 6 */}
            <div className="bg-white border-2 border-green-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <span className="text-2xl font-bold text-green-900">6</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-900 mb-2">
                    ✅ 中转航班：错过连接，最终延误≥3h
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-green-700 mb-1">补偿</div>
                      <div className="text-2xl font-bold text-green-900">€600</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-green-700 mb-1">退款</div>
                      <div className="text-2xl font-bold text-green-900">€0</div>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg border-2 border-green-400">
                      <div className="text-sm text-green-700 mb-1">总计</div>
                      <div className="text-2xl font-bold text-green-900">€600</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    <strong>解释：</strong>错过连接导致最终目的地延误≥3h = 有补偿权。航司安排替代航班 = 无退款。
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 7 */}
            <div className="bg-white border-2 border-blue-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <span className="text-2xl font-bold text-blue-900">7</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    ⚠️ 接受了抵用券（voucher）而不是退款
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-700 mb-1">补偿</div>
                      <div className="text-2xl font-bold text-blue-900">€600</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-700 mb-1">抵用券</div>
                      <div className="text-2xl font-bold text-blue-900">€350</div>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-400">
                      <div className="text-sm text-blue-700 mb-1">总计</div>
                      <div className="text-2xl font-bold text-blue-900">€950</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    <strong>解释：</strong>抵用券≠退款，但也不影响补偿权！许多乘客接受抵用券后就忘记补偿了。别犯这个错误！
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 8 */}
            <div className="bg-white border-2 border-red-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <span className="text-2xl font-bold text-red-900">8</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-red-900 mb-2">
                    ❌ 特殊情况（如恶劣天气）导致延误
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="text-sm text-red-700 mb-1">补偿</div>
                      <div className="text-2xl font-bold text-red-900">€0</div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="text-sm text-red-700 mb-1">退款</div>
                      <div className="text-2xl font-bold text-red-900">€300</div>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg border-2 border-red-400">
                      <div className="text-sm text-red-700 mb-1">总计</div>
                      <div className="text-2xl font-bold text-red-900">€300</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    <strong>解释：</strong>特殊情况 = 航司无需支付补偿。但如果你拒绝替代航班，仍有权退款。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
            <p className="text-slate-700">
              <strong className="text-yellow-900">💡 关键要点：</strong>场景1、4、7是<strong>"双赢"情况</strong>——你可以同时获得补偿和退款/抵用券！大多数乘客不知道这一点，错失数百欧元。
            </p>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="my-12 bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-xl text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              最大化您的赔偿！让专家帮您索赔
            </h3>
            <p className="text-lg text-green-100 mb-6">
              ClaimWinger专门处理<strong>补偿(€600)</strong>，您自己处理退款。两者同时进行，效率最高！
            </p>
            <a
              href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_compensation_vs_refund_cta2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
            >
              立即索赔我的€600补偿
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-green-100 mt-4">
              🎯 成功后才收费(25%) • 无风险 • 3年追溯期
            </p>
          </div>
        </div>

        {/* 航司陷阱 */}
        <section id="airline-traps" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            航空公司常用的5大陷阱
          </h2>

          <p className="text-slate-700 mb-6">
            航空公司<strong>非常清楚</strong>补偿和退款是两回事。但他们经常故意混淆这两个概念，希望你只拿一样就满足了。以下是最常见的操纵手法：
          </p>

          <div className="space-y-6">
            {/* Trap 1 */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                陷阱 #1: "我们已经退款了，所以没有其他赔偿"
              </h3>
              <div className="space-y-3 text-slate-700">
                <p><strong className="text-red-900">航司说法：</strong>"尊敬的旅客，我们已将€300退回您的账户。根据我们的条款，这已经解决了您的索赔。"</p>
                <p><strong className="text-green-900">真相：</strong>退款(€300)和补偿(€600)是<strong>完全独立的权利</strong>！收到退款不影响您的补偿权。</p>
                <p><strong className="text-blue-900">正确回应：</strong>"感谢退款。但根据EU 261，我还有权获得€600补偿，因为航班[延误≥3h/取消]。请在14天内支付。"</p>
              </div>
            </div>

            {/* Trap 2 */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                陷阱 #2: "您接受了抵用券，所以失去了补偿权"
              </h3>
              <div className="space-y-3 text-slate-700">
                <p><strong className="text-red-900">航司说法：</strong>"您已接受我们的€400抵用券作为善意补偿，因此您的案件已解决，无权进一步索赔。"</p>
                <p><strong className="text-green-900">真相：</strong><strong>抵用券不是补偿</strong>！抵用券是替代退款的选项（通常金额更高）。补偿(€600)是<strong>独立的EU 261权利</strong>。</p>
                <p><strong className="text-blue-900">正确回应：</strong>"抵用券和EU 261补偿是不同的。根据法规，延误≥3h仍应支付€600补偿。"</p>
              </div>
            </div>

            {/* Trap 3 */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                陷阱 #3: "请选择：退款 或 补偿"
              </h3>
              <div className="space-y-3 text-slate-700">
                <p><strong className="text-red-900">航司说法：</strong>"您可以选择：(A)全额退款€300，或(B)保留航班+€250补偿。请告知您的选择。"</p>
                <p><strong className="text-green-900">真相：</strong>这是<strong>虚假的二选一</strong>！如果您拒绝替代航班，您有权获得<strong>退款(€300)+ 补偿(€600)= €900</strong>！</p>
                <p><strong className="text-blue-900">正确回应：</strong>"根据EU 261，我有权获得退款(€300)和补偿(€600)。两者都是我的合法权利，不是二选一。"</p>
              </div>
            </div>

            {/* Trap 4 */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                陷阱 #4: "签署这份协议接受退款"
              </h3>
              <div className="space-y-3 text-slate-700">
                <p><strong className="text-red-900">航司说法：</strong>发送一份文件标题为"退款协议"，其中包含小字："签署即表示您放弃所有进一步索赔权利。"</p>
                <p><strong className="text-green-900">真相：</strong>这是法律陷阱！签署"<strong>full and final settlement</strong>"（完全和最终解决）意味着您<strong>永久放弃补偿权</strong>（€600）！</p>
                <p><strong className="text-blue-900">正确回应：</strong><strong>绝不签署</strong>包含"final settlement"/"放弃进一步索赔"的文件。坚持要求单独的退款（无附加条件）。</p>
              </div>
            </div>

            {/* Trap 5 */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                陷阱 #5: "我们提供了酒店/餐食，所以没有补偿"
              </h3>
              <div className="space-y-3 text-slate-700">
                <p><strong className="text-red-900">航司说法：</strong>"我们已为您提供酒店住宿(€120)和餐食(€50)，总价值€170。因此我们已履行义务，无需进一步赔偿。"</p>
                <p><strong className="text-green-900">真相：</strong>酒店/餐食是<strong>基本照顾义务</strong>（根据EU 261 Article 9），<strong>不是补偿</strong>！补偿(€600)是<strong>额外的独立权利</strong>。</p>
                <p><strong className="text-blue-900">正确回应：</strong>"感谢提供酒店和餐食。但根据EU 261，这些是航司的基本义务，不影响€600补偿权。"</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-red-100 border-2 border-red-400 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-red-900 mb-3">🚨 黄金规则：绝不签署"Full and Final Settlement"</h3>
            <p className="text-slate-700">
              如果航司要求您签署任何包含以下词语的文件，<strong>立即停止</strong>并咨询专业人士：
            </p>
            <ul className="list-disc list-inside text-slate-700 mt-3 space-y-1">
              <li>"Full and final settlement"（完全和最终解决）</li>
              <li>"Waive all further claims"（放弃所有进一步索赔）</li>
              <li>"In full satisfaction"（完全满足）</li>
              <li>"Final resolution"（最终解决）</li>
            </ul>
            <p className="text-slate-700 mt-3">
              签署这些文件后，您将<strong>永久失去</strong>索赔€600补偿的权利！即使延误明确符合条件。
            </p>
          </div>
        </section>

        {/* 何时可以同时获得 */}
        <section id="when-both" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <DollarSign className="w-8 h-8 text-green-600" />
            何时可以同时获得补偿 + 退款
          </h2>

          <p className="text-slate-700 mb-6">
            以下是<strong>明确可以同时获得</strong>补偿(€600)和退款(€300)的情况：
          </p>

          <div className="space-y-6">
            {/* Case 1 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-900 mb-3">
                ✅ 情况1：航班取消，您拒绝替代航班
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                  <div className="text-sm text-green-700 mb-2">补偿权基础</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• 航班取消 = 自动触发补偿权</li>
                    <li>• 除非有特殊情况</li>
                    <li>• 金额：€250-€600（依距离）</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                  <div className="text-sm text-green-700 mb-2">退款权基础</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• 拒绝替代航班 = 触发退款权</li>
                    <li>• 航司必须在7天内退款</li>
                    <li>• 金额：机票全额(€300)</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                <strong>结果：</strong>€600补偿 + €300退款 = <strong className="text-green-900">€900总计</strong>
              </p>
            </div>

            {/* Case 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                ✅ 情况2：延误&gt;5小时，您放弃旅行
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                  <div className="text-sm text-blue-700 mb-2">补偿权基础</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• 延误≥3小时 = 补偿权</li>
                    <li>• 延误5小时已远超3小时</li>
                    <li>• 放弃旅行不影响补偿</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                  <div className="text-sm text-blue-700 mb-2">退款权基础</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• EU 261 Article 8: 延误&gt;5h可放弃</li>
                    <li>• 放弃 = 触发全额退款</li>
                    <li>• 必须明确告知航司</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                <strong>结果：</strong>€600补偿 + €300退款 = <strong className="text-blue-900">€900总计</strong>
              </p>
            </div>

            {/* Case 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-3">
                ✅ 情况3：取消+接受抵用券（而非退款）
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                  <div className="text-sm text-purple-700 mb-2">补偿权基础</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• 航班取消 = 补偿权</li>
                    <li>• 抵用券≠补偿</li>
                    <li>• 补偿权独立存在</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                  <div className="text-sm text-purple-700 mb-2">抵用券</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• 抵用券 = 退款的替代形式</li>
                    <li>• 通常金额更高(€350 vs €300)</li>
                    <li>• 不影响补偿权</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                <strong>结果：</strong>€600补偿 + €350抵用券 = <strong className="text-purple-900">€950总价值</strong>
              </p>
            </div>

            {/* Case 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-orange-900 mb-3">
                ✅ 情况4：取消24小时以上通知，拒绝替代
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
                  <div className="text-sm text-orange-700 mb-2">补偿权基础</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• 通知&lt;14天 = 补偿权</li>
                    <li>• 除非提供合理替代</li>
                    <li>• 拒绝替代 = 补偿仍有效</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
                  <div className="text-sm text-orange-700 mb-2">退款权基础</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• 取消 = 有权拒绝替代</li>
                    <li>• 拒绝 = 自动触发退款</li>
                    <li>• 7天内必须退款</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                <strong>结果：</strong>€600补偿 + €300退款 = <strong className="text-orange-900">€900总计</strong>
              </p>
            </div>
          </div>

          <div className="mt-6 bg-green-100 border-2 border-green-400 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-900 mb-3">💡 专业建议：如何最大化您的赔偿</h3>
            <ol className="list-decimal list-inside text-slate-700 space-y-2">
              <li><strong>航班取消？</strong>立即决定是否接受替代航班。如果时间不合适 → 拒绝 → 获得退款+补偿。</li>
              <li><strong>延误&gt;5小时？</strong>如果旅行不再有意义，正式告知航司放弃 → 触发退款+补偿。</li>
              <li><strong>抵用券还是退款？</strong>如果抵用券明显更高（如€350 vs €300）且你会使用 → 选抵用券。仍可索赔补偿！</li>
              <li><strong>同时索赔：</strong>退款直接向航司申请（快速），补偿通过ClaimWinger索赔（专业处理）。</li>
            </ol>
          </div>
        </section>

        {/* 抵用券混淆 */}
        <section id="voucher-confusion" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🎫 抵用券 vs 退款 vs 补偿：三角关系
          </h2>

          <p className="text-slate-700 mb-6">
            这是乘客<strong>最容易混淆</strong>的部分。让我们彻底澄清三者的关系：
          </p>

          <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 text-left font-bold text-slate-900">特征</th>
                  <th className="p-4 text-left font-bold text-purple-900">抵用券</th>
                  <th className="p-4 text-left font-bold text-green-900">退款</th>
                  <th className="p-4 text-left font-bold text-blue-900">补偿</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 font-semibold text-slate-700">是什么</td>
                  <td className="p-4 text-slate-700">未来航班的信用额度</td>
                  <td className="p-4 text-slate-700">返还现金到原支付方式</td>
                  <td className="p-4 text-slate-700">对不便的法定罚款</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700">金额</td>
                  <td className="p-4 text-slate-700">通常€300-€400（≈机票价+奖励）</td>
                  <td className="p-4 text-slate-700">精确€300（机票价）</td>
                  <td className="p-4 text-slate-700">固定€600（长途）</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-700">形式</td>
                  <td className="p-4 text-slate-700">代码/积分（仅限该航司）</td>
                  <td className="p-4 text-slate-700">现金（银行账户）</td>
                  <td className="p-4 text-slate-700">现金（银行账户）</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700">有效期</td>
                  <td className="p-4 text-slate-700">通常12个月</td>
                  <td className="p-4 text-slate-700">永久（现金）</td>
                  <td className="p-4 text-slate-700">永久（现金）</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-700">灵活性</td>
                  <td className="p-4 text-slate-700">仅限该航司</td>
                  <td className="p-4 text-slate-700">任意使用</td>
                  <td className="p-4 text-slate-700">任意使用</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700">处理速度</td>
                  <td className="p-4 text-slate-700">即时（现场提供）</td>
                  <td className="p-4 text-slate-700">7-14天</td>
                  <td className="p-4 text-slate-700">30-90天（需索赔）</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-700">影响补偿权？</td>
                  <td className="p-4 text-green-600 font-bold">❌ 不影响</td>
                  <td className="p-4 text-green-600 font-bold">❌ 不影响</td>
                  <td className="p-4 text-slate-600">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Decision helper */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200 mb-6">
            <h3 className="text-xl font-bold text-purple-900 mb-4">🎯 何时选择抵用券，何时选择退款？</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-900 mb-3">✅ 选择抵用券如果：</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>金额明显高于退款（如€400 vs €300）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>你确定会在12个月内再次使用该航司</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>立即需要重新预订（抵用券现场可用）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>你<strong>仍然会索赔€600补偿</strong>（不要忘记！）</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-red-900 mb-3">❌ 选择现金退款如果：</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>不确定是否会再次使用该航司</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>对该航司失去信任</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>需要现金灵活性</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>担心12个月内不会旅行</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
            <p className="text-slate-700 mb-3">
              <strong className="text-yellow-900">⚠️ 关键提醒：</strong>
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>无论选择抵用券还是退款，你的<strong>€600补偿权</strong>仍然存在！</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>航司常在提供抵用券时故意不提补偿，希望你忘记。<strong>不要上当！</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>即使抵用券价值€700，也不要放弃索赔€600补偿。总共€1,300！</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA 3 */}
        <div className="my-12 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-xl text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              别让航司的混淆手法骗走你的€600！
            </h3>
            <p className="text-lg text-indigo-100 mb-6">
              ClaimWinger帮你索赔补偿，你自己处理退款。<strong>两者同时进行，最大化回报！</strong>
            </p>
            <a
              href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_compensation_vs_refund_cta3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-colors"
            >
              立即索赔€600补偿
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-indigo-100 mt-4">
              ✅ 成功后才收费 • 无前期费用 • 3年追溯期
            </p>
          </div>
        </div>

        {/* 真实案例 */}
        <section id="case-studies" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            💡 真实案例：成功与失败的故事
          </h2>

          <div className="space-y-8">
            {/* Success Case 1 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900">成功案例 #1: 王先生 - 上海商人</h3>
                  <p className="text-sm text-green-700">获得总计€1,400（退款+补偿）</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 border-green-200 mb-4">
                <h4 className="font-bold text-slate-900 mb-3">情况：</h4>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>航班：</strong>Air France AF116 上海浦东(PVG)→巴黎戴高乐(CDG)</li>
                  <li><strong>机票价格：</strong>€800（商务舱）</li>
                  <li><strong>问题：</strong>航班在起飞前2小时突然取消（机械故障）</li>
                  <li><strong>替代方案：</strong>航司提供第二天早上的航班</li>
                  <li><strong>王先生决定：</strong>拒绝替代航班（会议已取消，旅行无意义）</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-green-200 mb-4">
                <h4 className="font-bold text-slate-900 mb-3">行动：</h4>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  <li>机场柜台明确告知拒绝替代航班，要求书面确认</li>
                  <li>当天提交退款申请（直接向Air France）</li>
                  <li>第二天通过ClaimWinger提交补偿索赔</li>
                  <li>收集证据：取消通知、登机牌、拒绝替代的书面确认</li>
                </ol>
              </div>

              <div className="bg-green-100 p-6 rounded-lg border-2 border-green-300">
                <h4 className="font-bold text-green-900 mb-3">结果：</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-green-700 mb-1">退款</div>
                    <div className="text-3xl font-bold text-green-900">€800</div>
                    <div className="text-xs text-green-700 mt-1">12天收到</div>
                  </div>
                  <div>
                    <div className="text-sm text-green-700 mb-1">补偿</div>
                    <div className="text-3xl font-bold text-green-900">€600</div>
                    <div className="text-xs text-green-700 mt-1">35天收到</div>
                  </div>
                  <div className="bg-green-200 p-4 rounded-lg">
                    <div className="text-sm text-green-700 mb-1">总计</div>
                    <div className="text-3xl font-bold text-green-900">€1,400</div>
                    <div className="text-xs text-green-700 mt-1">约¥11,200</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-green-200 p-4 rounded-lg">
                <p className="text-sm text-green-900">
                  <strong>💡 关键成功因素：</strong>王先生清楚知道退款和补偿是两个独立的权利。他同时申请两者，没有被航司误导放弃任何一项。
                </p>
              </div>
            </div>

            {/* Success Case 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">成功案例 #2: 李女士 - 北京学生</h3>
                  <p className="text-sm text-blue-700">获得总计€950（抵用券+补偿）</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 border-blue-200 mb-4">
                <h4 className="font-bold text-slate-900 mb-3">情况：</h4>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>航班：</strong>Lufthansa LH720 北京首都(PEK)→法兰克福(FRA)</li>
                  <li><strong>机票价格：</strong>€350（经济舱，学生票）</li>
                  <li><strong>问题：</strong>航班取消（罢工）</li>
                  <li><strong>替代方案：</strong>航司提供(A)€350现金退款，或(B)€500抵用券</li>
                  <li><strong>李女士决定：</strong>接受€500抵用券（计划寒假再次回国）</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-blue-200 mb-4">
                <h4 className="font-bold text-slate-900 mb-3">行动：</h4>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  <li>接受€500抵用券（仔细阅读条款，确保无"最终解决"条款）</li>
                  <li>通过ClaimWinger索赔€600补偿（罢工通常不是特殊情况）</li>
                  <li>收集证据：取消通知、抵用券代码、登机牌</li>
                </ol>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg border-2 border-blue-300">
                <h4 className="font-bold text-blue-900 mb-3">结果：</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-blue-700 mb-1">抵用券</div>
                    <div className="text-3xl font-bold text-blue-900">€500</div>
                    <div className="text-xs text-blue-700 mt-1">当场获得</div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-700 mb-1">补偿</div>
                    <div className="text-3xl font-bold text-blue-900">€600</div>
                    <div className="text-xs text-blue-700 mt-1">42天收到（扣除25%手续费后€450）</div>
                  </div>
                  <div className="bg-blue-200 p-4 rounded-lg">
                    <div className="text-sm text-blue-700 mb-1">总价值</div>
                    <div className="text-3xl font-bold text-blue-900">€950</div>
                    <div className="text-xs text-blue-700 mt-1">约¥7,600</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-blue-200 p-4 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>💡 关键成功因素：</strong>李女士知道抵用券不影响补偿权。她选择了价值更高的抵用券（因为确定会使用），同时索赔补偿。
                </p>
              </div>
            </div>

            {/* Failure Case */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  ✗
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-900">失败案例: 张先生 - 深圳工程师</h3>
                  <p className="text-sm text-red-700">损失€600补偿（本可获得€1,050）</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-2 border-red-200 mb-4">
                <h4 className="font-bold text-slate-900 mb-3">情况：</h4>
                <ul className="space-y-2 text-slate-700">
                  <li><strong>航班：</strong>KLM KL887 香港(HKG)→阿姆斯特丹(AMS)</li>
                  <li><strong>机票价格：</strong>€450</li>
                  <li><strong>问题：</strong>航班延误6小时</li>
                  <li><strong>航司行动：</strong>提供酒店(€150)、餐食(€50)、€200"善意补偿"</li>
                  <li><strong>张先生决定：</strong>接受了€200，签署了"Full and Final Settlement"（完全和最终解决）</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-red-200 mb-4">
                <h4 className="font-bold text-slate-900 mb-3">错误：</h4>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  <li><strong className="text-red-600">误以为€200是补偿：</strong>实际上这只是航司的"善意"，不是EU 261补偿</li>
                  <li><strong className="text-red-600">签署"Final Settlement"：</strong>放弃了所有进一步索赔权</li>
                  <li><strong className="text-red-600">没有咨询专业人士：</strong>如果用ClaimWinger，会被告知€200远低于€600权利</li>
                </ol>
              </div>

              <div className="bg-red-100 p-6 rounded-lg border-2 border-red-300">
                <h4 className="font-bold text-red-900 mb-3">结果对比：</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-red-200">
                    <div className="text-sm text-red-700 mb-2">实际获得</div>
                    <div className="text-2xl font-bold text-red-900 mb-2">€200</div>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• 酒店/餐食(€200 - 航司义务，不算)</li>
                      <li>• "善意补偿"€200</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                    <div className="text-sm text-green-700 mb-2">本应获得</div>
                    <div className="text-2xl font-bold text-green-900 mb-2">€600</div>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• EU 261补偿(延误6h)</li>
                      <li>• + 酒店/餐食(航司义务)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-red-200 p-4 rounded-lg text-center">
                  <div className="text-sm text-red-700 mb-1">净损失</div>
                  <div className="text-4xl font-bold text-red-900">€400</div>
                  <div className="text-xs text-red-700 mt-1">约¥3,200 损失！</div>
                </div>
              </div>

              <div className="mt-4 bg-red-200 p-4 rounded-lg">
                <p className="text-sm text-red-900">
                  <strong>⚠️ 教训：</strong>航司利用信息不对称，提供低于法定补偿的"善意"金额，诱导签署"final settlement"。张先生因不了解权利，损失了€400（约¥3,200）。<strong>绝不签署包含"final"/"waive claims"的文件！</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7个错误 */}
        <section id="common-mistakes" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <XCircle className="w-8 h-8 text-red-600" />
            7个昂贵的错误（及如何避免）
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ 错误 #1: 认为退款 = 补偿</h3>
              <p className="text-slate-700 mb-3">
                <strong>错误认知：</strong>"航司退了我的钱，所以我已经得到了所有应得的。"
              </p>
              <p className="text-slate-700 mb-3">
                <strong>真相：</strong>退款只是返还你的购买款。补偿是<strong>额外的</strong>对不便的赔偿。
              </p>
              <p className="text-green-700">
                <strong>如何避免：</strong>总是分别考虑：(1)我有权退款吗？(2)我有权补偿吗？两者独立！
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ 错误 #2: 接受抵用券后忘记补偿</h3>
              <p className="text-slate-700 mb-3">
                <strong>错误认知：</strong>"我拿了€500抵用券，应该够了。"
              </p>
              <p className="text-slate-700 mb-3">
                <strong>真相：</strong>抵用券≠补偿！你仍有权获得€600补偿（总共€1,100价值）。
              </p>
              <p className="text-green-700">
                <strong>如何避免：</strong>接受抵用券后立即提醒自己"这不是补偿，还要索赔€600！"
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ 错误 #3: 签署"Full and Final Settlement"</h3>
              <p className="text-slate-700 mb-3">
                <strong>错误行为：</strong>在机场匆忙签署文件以获得退款，没注意小字"放弃所有进一步索赔"。
              </p>
              <p className="text-slate-700 mb-3">
                <strong>后果：</strong><strong className="text-red-600">永久失去</strong>€600补偿权！即使延误明确符合条件。
              </p>
              <p className="text-green-700">
                <strong>如何避免：</strong><strong>仔细阅读所有文件</strong>。拒绝签署包含"final settlement"/"waive claims"的任何文件。坚持要求无条件退款。
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ 错误 #4: 太快接受航司的"善意"金额</h3>
              <p className="text-slate-700 mb-3">
                <strong>场景：</strong>航班延误5小时，航司主动提供"€150善意补偿"。你立即接受。
              </p>
              <p className="text-slate-700 mb-3">
                <strong>问题：</strong>€150远低于你的€600 EU 261权利！航司利用你的不知情。
              </p>
              <p className="text-green-700">
                <strong>如何避免：</strong>任何航司主动提供的金额，先暂停并检查EU 261权利。通常航司提供的只有真实权利的20-40%。
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ 错误 #5: 认为酒店/餐食 = 补偿</h3>
              <p className="text-slate-700 mb-3">
                <strong>错误认知：</strong>"航司提供了酒店(€120)和餐食(€50)，总共€170。这应该是补偿了。"
              </p>
              <p className="text-slate-700 mb-3">
                <strong>真相：</strong>酒店/餐食是航司的<strong>基本义务</strong>（EU 261 Article 9），不是补偿！你仍有权€600。
              </p>
              <p className="text-green-700">
                <strong>如何避免：</strong>记住：<strong>照顾(care) ≠ 补偿(compensation)</strong>。酒店/餐食是最低要求，补偿是额外的。
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ 错误 #6: 延迟索赔（拖延症）</h3>
              <p className="text-slate-700 mb-3">
                <strong>想法：</strong>"我很忙，等有空再索赔补偿..."
              </p>
              <p className="text-slate-700 mb-3">
                <strong>风险：</strong>(1)证据丢失/遗忘细节 (2)接近3年时效 (3)航司更容易拒绝旧案件
              </p>
              <p className="text-green-700">
                <strong>如何避免：</strong>延误/取消后<strong>30天内</strong>提交索赔。ClaimWinger只需2分钟在线提交，无需复杂流程。
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ 错误 #7: 不保留证据</h3>
              <p className="text-slate-700 mb-3">
                <strong>错误行为：</strong>延误后直接离开机场，扔掉登机牌，不拍照，不要延误证明。
              </p>
              <p className="text-slate-700 mb-3">
                <strong>后果：</strong>索赔时难以证明延误时长、航班号、日期。航司可能拒绝赔付。
              </p>
              <p className="text-green-700">
                <strong>如何避免：</strong>立即保存：(1)登机牌 (2)航班状态截图 (3)延误证明(如果提供) (4)酒店/餐食收据 (5)FlightRadar24记录
              </p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-100 border-2 border-yellow-400 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">💡 专业建议：避免所有这些错误的简单方法</h3>
            <p className="text-slate-700 mb-3">
              使用<strong>ClaimWinger</strong>等专业服务。他们：
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>知道所有权利（退款 vs 补偿 vs 抵用券）</li>
              <li>帮你最大化总赔偿</li>
              <li>处理航司的拒绝/操纵</li>
              <li>只有成功才收费（25%）- 失败无费用</li>
              <li>你专注于获得退款，他们处理补偿</li>
            </ul>
          </div>
        </section>

        {/* 如何索赔 */}
        <section id="how-to-claim" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📝 如何正确索赔双重赔偿（补偿+退款）
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200 mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">🎯 最优策略：平行处理</h3>
            <p className="text-slate-700 mb-4">
              <strong>关键原则：</strong>退款和补偿是<strong>独立流程</strong>，可以同时进行！不要等一个完成再开始另一个。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                <h4 className="font-bold text-green-900 mb-2">Track 1: 退款（你自己）</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• 直接向航司申请</li>
                  <li>• 通常7-14天</li>
                  <li>• 相对简单快速</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                <h4 className="font-bold text-blue-900 mb-2">Track 2: 补偿（ClaimWinger）</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• 通过专业服务</li>
                  <li>• 通常30-90天</li>
                  <li>• 需要专业处理</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Step-by-step for Refund */}
            <div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">💰 如何索赔退款（自己处理）</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">机场现场（如果可能）</h4>
                    <p className="text-slate-700 mb-2">如果航班取消/严重延误：</p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>前往航司柜台</li>
                      <li>明确表示："I refuse the alternative flight and request a full refund"（我拒绝替代航班并要求全额退款）</li>
                      <li><strong>要求书面确认</strong>（拍照或要求打印）</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">在线提交退款请求</h4>
                    <p className="text-slate-700 mb-2">航班后24小时内：</p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>访问航司官网 → "Refund" / "退款" 页面</li>
                      <li>填写表格：预订号、航班号、日期</li>
                      <li>选择原因："Flight cancelled" or "Flight delayed &gt;5 hours"</li>
                      <li>上传证据：登机牌、取消通知、拒绝确认</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">跟进</h4>
                    <p className="text-slate-700 mb-2">如果7天无回复：</p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>发送跟进邮件（引用案件号）</li>
                      <li>引用EU 261 Article 8（退款义务）</li>
                      <li>威胁向民航局投诉（如果14天仍无响应）</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">收到退款</h4>
                    <p className="text-slate-700 mb-2">通常7-14天：</p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>退款到原支付方式（信用卡/银行账户）</li>
                      <li>确认金额正确（全额机票价格）</li>
                      <li><strong>保存退款记录</strong>（不影响补偿索赔）</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step-by-step for Compensation */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">💰 如何索赔补偿（使用ClaimWinger）</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">访问ClaimWinger（2分钟）</h4>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>访问 <a href="https://claimwinger.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">claimwinger.com</a></li>
                      <li>输入航班信息：航班号、日期、出发地、目的地</li>
                      <li>系统自动计算你的权利（€250/€400/€600）</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">提交案件（3分钟）</h4>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>上传文件：登机牌、身份证/护照</li>
                      <li>填写联系信息和银行账户</li>
                      <li>授权ClaimWinger代表你索赔</li>
                      <li><strong>无前期费用</strong> - 只有成功才支付25%</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">ClaimWinger处理（30-90天）</h4>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>ClaimWinger向航司发送正式索赔</li>
                      <li>处理航司的拒绝/拖延</li>
                      <li>必要时诉诸法律（包含在服务中）</li>
                      <li>你随时可以在线追踪进度</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2">收到补偿</h4>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>成功：收到75%的补偿金额（25%给ClaimWinger）</li>
                      <li>例如：€600补偿 → 你收到€450</li>
                      <li>失败：€0费用（完全无风险）</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-purple-900 mb-3">💡 专业建议：为什么两轨并行最优</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>速度：</strong>退款7-14天，补偿30-90天。并行意味着你更快拿到部分钱（退款）。</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>专业分工：</strong>退款简单（你自己），补偿复杂（ClaimWinger专家）。</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>最大化：</strong>确保你获得<strong>全部</strong>应得的（退款+补偿），而不只是其中之一。</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>证据独立：</strong>两个索赔使用相同的证据，无需额外工作。</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 决策树 */}
        <section id="decision-tree" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🎯 决策树：我应该选择什么？
          </h2>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg border-2 border-slate-300">
            <div className="text-center mb-8">
              <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg">
                航班有问题
              </div>
            </div>

            <div className="space-y-6">
              {/* Level 1 */}
              <div className="text-center">
                <div className="inline-block bg-blue-100 border-2 border-blue-400 px-6 py-3 rounded-lg font-bold text-slate-900">
                  问题类型？
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Branch 1: Cancelled */}
                <div className="bg-white p-6 rounded-lg border-2 border-green-300">
                  <div className="text-center font-bold text-green-900 mb-4">航班取消</div>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="font-bold text-sm text-green-900 mb-2">选项A: 拒绝替代航班</div>
                      <div className="text-xs text-slate-700 mb-2">结果：</div>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• 退款: ✅ 全额</li>
                        <li>• 补偿: ✅ €250-€600</li>
                        <li className="font-bold text-green-900">总计: 最大化！</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="font-bold text-sm text-green-900 mb-2">选项B: 接受替代航班</div>
                      <div className="text-xs text-slate-700 mb-2">结果：</div>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• 退款: ❌ €0（飞了）</li>
                        <li>• 补偿: ✅ €250-€600</li>
                        <li className="font-bold text-green-900">总计: 仍然不错</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="font-bold text-sm text-green-900 mb-2">选项C: 接受抵用券</div>
                      <div className="text-xs text-slate-700 mb-2">结果：</div>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• 抵用券: ✅ €350-€500</li>
                        <li>• 补偿: ✅ €250-€600</li>
                        <li className="font-bold text-green-900">总计: 如果会用，很好！</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Branch 2: Delayed */}
                <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                  <div className="text-center font-bold text-blue-900 mb-4">航班延误</div>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-bold text-sm text-blue-900 mb-2">延误≥3小时，继续飞</div>
                      <div className="text-xs text-slate-700 mb-2">结果：</div>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• 退款: ❌ €0（飞了）</li>
                        <li>• 补偿: ✅ €250-€600</li>
                        <li className="font-bold text-blue-900">索赔补偿！</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-bold text-sm text-blue-900 mb-2">延误&gt;5小时，放弃旅行</div>
                      <div className="text-xs text-slate-700 mb-2">结果：</div>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• 退款: ✅ 全额</li>
                        <li>• 补偿: ✅ €250-€600</li>
                        <li className="font-bold text-blue-900">双赢！</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-bold text-sm text-blue-900 mb-2">延误&lt;3小时</div>
                      <div className="text-xs text-slate-700 mb-2">结果：</div>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• 退款: ❌ €0</li>
                        <li>• 补偿: ❌ €0</li>
                        <li className="font-bold text-red-900">不幸，无权利</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Branch 3: Missed Connection */}
                <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
                  <div className="text-center font-bold text-purple-900 mb-4">错过连接</div>
                  <div className="space-y-3">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="font-bold text-sm text-purple-900 mb-2">最终目的地延误≥3h</div>
                      <div className="text-xs text-slate-700 mb-2">结果：</div>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• 退款: ❌ €0（航司安排替代）</li>
                        <li>• 补偿: ✅ €250-€600</li>
                        <li className="font-bold text-purple-900">索赔补偿！</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="font-bold text-sm text-purple-900 mb-2">最终延误&lt;3h</div>
                      <div className="text-xs text-slate-700 mb-2">结果：</div>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• 退款: ❌ €0</li>
                        <li>• 补偿: ❌ €0</li>
                        <li className="font-bold text-red-900">无权利</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="font-bold text-sm text-purple-900 mb-2">拒绝等待，要求退款</div>
                      <div className="text-xs text-slate-700 mb-2">结果：</div>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• 退款: ✅ 剩余航段</li>
                        <li>• 补偿: ✅ €250-€600</li>
                        <li className="font-bold text-purple-900">双重！</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-100 border-2 border-yellow-400 p-6 rounded-lg">
              <h3 className="font-bold text-yellow-900 mb-3">🔑 决策黄金规则</h3>
              <ol className="list-decimal list-inside text-slate-700 space-y-2">
                <li><strong>航班取消？</strong>评估替代航班时间。如果不合适 → 拒绝 → 获得退款+补偿。</li>
                <li><strong>延误≥5h？</strong>如果旅行已无意义 → 正式放弃 → 退款+补偿。</li>
                <li><strong>延误3-5h？</strong>如果继续飞 → 索赔补偿（无退款，但仍€600！）。</li>
                <li><strong>抵用券offer？</strong>如果金额高+确定会用 → 接受。<strong>但记得索赔补偿！</strong></li>
                <li><strong>任何情况：</strong>绝不签署"full and final settlement"！</li>
              </ol>
            </div>
          </div>
        </section>

        {/* 计算器 */}
        <section id="calculator" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Calculator className="w-8 h-8 text-green-600" />
            快速计算器：你能得到多少？
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-300">
              <h3 className="text-xl font-bold text-green-900 mb-4">场景1: 取消+拒绝替代</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-slate-600 mb-1">机票价格</div>
                  <div className="text-2xl font-bold text-slate-900">€400</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-slate-600 mb-1">航线距离</div>
                  <div className="text-xl font-bold text-slate-900">&gt;3,500km (北京↔欧洲)</div>
                </div>
                <div className="border-t-2 border-green-300 pt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700">退款:</span>
                    <span className="font-bold text-green-900">€400</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700">补偿:</span>
                    <span className="font-bold text-green-900">€600</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-green-200">
                    <span className="font-bold text-green-900">总计:</span>
                    <span className="text-3xl font-bold text-green-900">€1,000</span>
                  </div>
                  <div className="text-xs text-green-700 text-right mt-1">约¥8,000</div>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-300">
              <h3 className="text-xl font-bold text-blue-900 mb-4">场景2: 延误3h+继续飞</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-slate-600 mb-1">机票价格</div>
                  <div className="text-2xl font-bold text-slate-900">€250</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-slate-600 mb-1">航线距离</div>
                  <div className="text-xl font-bold text-slate-900">&gt;3,500km (上海↔欧洲)</div>
                </div>
                <div className="border-t-2 border-blue-300 pt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700">退款:</span>
                    <span className="font-bold text-slate-500">€0 (飞了)</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700">补偿:</span>
                    <span className="font-bold text-blue-900">€600</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-blue-200">
                    <span className="font-bold text-blue-900">总计:</span>
                    <span className="text-3xl font-bold text-blue-900">€600</span>
                  </div>
                  <div className="text-xs text-blue-700 text-right mt-1">约¥4,800 (补偿 &gt; 机票价!)</div>
                </div>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-bold text-purple-900 mb-4">场景3: 取消+抵用券</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-slate-600 mb-1">机票价格</div>
                  <div className="text-2xl font-bold text-slate-900">€300</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-slate-600 mb-1">抵用券提供</div>
                  <div className="text-2xl font-bold text-purple-900">€400</div>
                </div>
                <div className="border-t-2 border-purple-300 pt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700">抵用券:</span>
                    <span className="font-bold text-purple-900">€400</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700">补偿:</span>
                    <span className="font-bold text-purple-900">€600</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-purple-200">
                    <span className="font-bold text-purple-900">总价值:</span>
                    <span className="text-3xl font-bold text-purple-900">€1,000</span>
                  </div>
                  <div className="text-xs text-purple-700 text-right mt-1">约¥8,000 (如果会使用抵用券)</div>
                </div>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border-2 border-orange-300">
              <h3 className="text-xl font-bold text-orange-900 mb-4">场景4: 延误&gt;5h+放弃</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-slate-600 mb-1">机票价格</div>
                  <div className="text-2xl font-bold text-slate-900">€500</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-slate-600 mb-1">航线距离</div>
                  <div className="text-xl font-bold text-slate-900">&gt;3,500km (香港↔欧洲)</div>
                </div>
                <div className="border-t-2 border-orange-300 pt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700">退款:</span>
                    <span className="font-bold text-orange-900">€500</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700">补偿:</span>
                    <span className="font-bold text-orange-900">€600</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-orange-200">
                    <span className="font-bold text-orange-900">总计:</span>
                    <span className="text-3xl font-bold text-orange-900">€1,100</span>
                  </div>
                  <div className="text-xs text-orange-700 text-right mt-1">约¥8,800</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-green-100 border-2 border-green-400 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-900 mb-3">💰 关键洞察</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>补偿独立于机票价格：</strong>即使机票€250，补偿仍是€600！你可能赚取超过票价。</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>最高组合：</strong>取消+拒绝替代+长途 = 退款+€600 = 可能超过€1,000。</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>抵用券值得吗？</strong>如果抵用券比退款高€100+，且你确定会用 → 值得。补偿仍可索赔！</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>延误3h+：</strong>即使继续飞行，€600补偿仍是你的权利。不要忘记索赔！</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            ❓ 常见问题（10个最常问的）
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">1. 我可以同时获得退款和补偿吗？</h3>
              <p className="text-slate-700">
                <strong className="text-green-600">是的！</strong>这是两个<strong>完全独立的权利</strong>。退款是返还你的购买款，补偿是对不便的法定罚款。在航班取消且你拒绝替代航班，或延误&gt;5小时且你放弃旅行的情况下，你有权同时获得两者。许多乘客不知道这一点，损失数百欧元。
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">2. 如果我接受了抵用券，还能获得补偿吗？</h3>
              <p className="text-slate-700">
                <strong className="text-green-600">可以！</strong>抵用券是<strong>退款的替代形式</strong>（通常金额更高），但<strong>不是补偿</strong>。你的€250-€600补偿权仍然完全有效。这是航司常用的混淆手法——提供抵用券后，暗示"事情已解决"。不要上当！接受抵用券后立即索赔补偿。
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">3. 航司说"要么退款，要么补偿"，这是真的吗？</h3>
              <p className="text-slate-700">
                <strong className="text-red-600">绝对是假的！</strong>这是航司最常用的操纵手法。EU 261明确规定补偿和退款是<strong>独立权利</strong>，不是二选一。如果航司这样说，明确回应："根据EU 261，我有权同时获得退款和补偿。这不是选择题。" 如果他们坚持，威胁向民航局投诉或使用ClaimWinger等专业服务。
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">4. 我已经收到退款，现在还能索赔补偿吗？</h3>
              <p className="text-slate-700">
                <strong className="text-green-600">当然可以！</strong>收到退款<strong>不影响</strong>你的补偿权。它们是完全独立的。你有<strong>3年</strong>时间索赔补偿（从航班日期算起）。即使你6个月前收到退款，现在仍可索赔补偿。退款证明不会削弱补偿索赔——它们是两个不同的法律权利。
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">5. 抵用券€700 vs 补偿€600，我应该选哪个？</h3>
              <p className="text-slate-700">
                <strong className="text-purple-600">两者都要！</strong>这<strong>不是二选一</strong>。正确策略：(1)接受€700抵用券（比退款高），(2)同时索赔€600补偿。总价值：€1,300！许多乘客错误地认为选了抵用券就失去补偿权。绝对不是。抵用券和补偿是<strong>独立的</strong>，可以同时获得。
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">6. 如果我接受抵用券后改变主意，可以要求现金退款吗？</h3>
              <p className="text-slate-700">
                <strong className="text-orange-600">取决于时机。</strong>如果你<strong>刚刚</strong>接受抵用券（几小时内），立即联系航司并引用EU 261 Article 8："我改变主意，要求现金退款而不是抵用券。"许多航司会同意（特别是如果你尚未离开机场）。但如果已经过了几天或你已使用抵用券的一部分，可能无法更改。<strong>好消息：</strong>无论如何，你的€600补偿权仍然有效！
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">7. 航司提供了酒店和餐食，这算作补偿吗？</h3>
              <p className="text-slate-700">
                <strong className="text-red-600">绝对不算！</strong>酒店、餐食、交通是航司的<strong>基本照顾义务</strong>（EU 261 Article 9），不是补偿。无论延误多长，航司都<strong>必须</strong>提供这些（延误&gt;2h餐食，延误需要过夜则酒店）。这些<strong>不减少</strong>你的€250-€600补偿权。如果航司说"我们提供了酒店，所以没有补偿"，那是在撒谎。明确回应："照顾义务和补偿是不同的。我仍有权获得€600补偿。"
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">8. 我签署了"final settlement"，现在还能索赔补偿吗？</h3>
              <p className="text-slate-700">
                <strong className="text-red-600">非常困难。</strong>如果文件明确包含"full and final settlement"/"waive all further claims"等词语，并且你签署了，你可能<strong>失去了</strong>补偿权。这是一个法律陷阱，许多乘客落入。<strong>但有例外：</strong>如果签署时你不知情（如文件是其他语言），或航司使用欺骗手段（如隐藏条款），你可以尝试争辩签署无效。联系ClaimWinger等专业服务——他们有处理这类案件的经验。<strong>教训：</strong>永远不要在不完全理解的情况下签署文件！
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">9. 退款和补偿哪个会更快收到？</h3>
              <p className="text-slate-700">
                <strong>退款通常更快。</strong>根据EU 261，航司必须在<strong>7天内</strong>退款（但实际通常7-14天）。补偿则较慢：如果航司合作，30-60天；如果抵抗，可能60-90天甚至需要法律程序。<strong>策略：</strong>同时申请两者。退款直接向航司（快速），补偿通过ClaimWinger（专业但慢）。这样你更快拿到部分钱（退款），同时专家处理补偿索赔。
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">10. 如果航司破产了，我还能获得补偿和退款吗？</h3>
              <p className="text-slate-700">
                <strong className="text-orange-600">复杂情况。</strong>如果航司破产：<strong>退款：</strong>如果用信用卡支付，立即联系银行申请chargeback（拒付）。如果现金/借记卡，你可能需要作为债权人排队（可能只拿回一部分）。<strong>补偿：</strong>EU 261补偿也是一种债务，但优先级较低。你可能需要排队很久且只拿回一部分。<strong>保险：</strong>如果你有旅行保险，它可能覆盖破产损失。<strong>建议：</strong>优先使用信用卡订票（有chargeback保护），并考虑旅行保险。
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="my-12 bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-xl text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              不要让混淆的概念让你损失€600！
            </h3>
            <p className="text-lg text-green-100 mb-6">
              现在你知道了：<strong>补偿 ≠ 退款 ≠ 抵用券</strong>。在许多情况下，你有权同时获得多项！让ClaimWinger帮你最大化回报。
            </p>
            <a
              href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_compensation_vs_refund_final"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
            >
              免费检查我的权利（2分钟）
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-green-100 mt-4">
              ✅ 无前期费用 • 成功后才收费25% • 完全无风险 • 3年追溯期
            </p>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-12 bg-slate-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">📚 相关文章</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/zh/blog/3-hour-delay-compensation-rule" className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">航班延误3小时补偿规则</h3>
              <p className="text-sm text-slate-600">详解3小时门槛、如何正确计算延误时间、及所有距离的补偿金额。</p>
            </Link>
            <Link href="/zh/blog/extraordinary-circumstances-explained" className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">特殊情况详解</h3>
              <p className="text-sm text-slate-600">何时航司可以拒绝补偿？恶劣天气、罢工、技术故障——哪些算特殊情况？</p>
            </Link>
            <Link href="/zh/blog/europe-to-china-flight-delay-rights" className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">欧洲飞中国航班权利</h3>
              <p className="text-sm text-slate-600">从欧洲飞往中国的航班是否受EU 261保护？欧盟航司 vs 中国航司对比。</p>
            </Link>
            <Link href="/zh/blog/european-airline-china-departure-compensation" className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">欧洲航司从中国出发补偿</h3>
              <p className="text-sm text-slate-600">从中国飞往欧洲使用欧盟航司？你的权利和补偿金额详解。</p>
            </Link>
            <Link href="/zh/blog/chinese-citizens-eu261-compensation-guide" className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">中国公民EU 261完整指南</h3>
              <p className="text-sm text-slate-600">中国护照持有者的欧盟航班权利、索赔流程、及成功率提升技巧。</p>
            </Link>
            <Link href="/zh/blog/which-flights-qualify-compensation" className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">哪些航班符合补偿资格</h3>
              <p className="text-sm text-slate-600">完整清单：哪些航线、航司、情况下你有权获得€250-€600补偿。</p>
            </Link>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "我可以同时获得退款和补偿吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "是的！退款和补偿是两个完全独立的权利。退款是返还你的购买款，补偿是对不便的法定罚款(€250-€600)。在航班取消且你拒绝替代航班，或延误>5小时且你放弃旅行的情况下，你有权同时获得两者。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "如果我接受了抵用券，还能获得补偿吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "可以！抵用券是退款的替代形式，但不是补偿。你的€250-€600补偿权仍然完全有效。接受抵用券后立即索赔补偿，两者可以同时获得。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "航司说'要么退款，要么补偿'，这是真的吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "绝对是假的！这是航司最常用的操纵手法。EU 261明确规定补偿和退款是独立权利，不是二选一。根据EU 261，你有权同时获得退款和补偿。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "我已经收到退款，现在还能索赔补偿吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "当然可以！收到退款不影响你的补偿权。你有3年时间索赔补偿(从航班日期算起)。即使你6个月前收到退款，现在仍可索赔补偿。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "抵用券€700 vs 补偿€600，我应该选哪个？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "两者都要！这不是二选一。正确策略：(1)接受€700抵用券(比退款高)，(2)同时索赔€600补偿。总价值：€1,300！抵用券和补偿是独立的，可以同时获得。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "如果我接受抵用券后改变主意，可以要求现金退款吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "取决于时机。如果你刚刚接受抵用券(几小时内)，立即联系航司并引用EU 261 Article 8要求现金退款。许多航司会同意。但如果已经过了几天或已使用抵用券的一部分，可能无法更改。无论如何，你的€600补偿权仍然有效。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "航司提供了酒店和餐食，这算作补偿吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "绝对不算！酒店、餐食、交通是航司的基本照顾义务(EU 261 Article 9)，不是补偿。无论延误多长，航司都必须提供这些。这些不减少你的€250-€600补偿权。照顾义务和补偿是完全不同的权利。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "我签署了'final settlement'，现在还能索赔补偿吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "非常困难。如果文件明确包含'full and final settlement'/'waive all further claims'等词语，你可能失去了补偿权。但如果签署时你不知情或航司使用欺骗手段，你可以尝试争辩签署无效。联系ClaimWinger等专业服务寻求帮助。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "退款和补偿哪个会更快收到？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "退款通常更快。根据EU 261，航司必须在7天内退款(实际通常7-14天)。补偿则较慢：如果航司合作30-60天；如果抵抗可能60-90天。策略：同时申请两者——退款直接向航司，补偿通过ClaimWinger专业处理。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "如果航司破产了，我还能获得补偿和退款吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "如果航司破产：退款方面，如果用信用卡支付立即申请chargeback。补偿方面，你可能需要作为债权人排队，可能只拿回一部分。建议优先使用信用卡订票(有chargeback保护)，并考虑旅行保险。"
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
