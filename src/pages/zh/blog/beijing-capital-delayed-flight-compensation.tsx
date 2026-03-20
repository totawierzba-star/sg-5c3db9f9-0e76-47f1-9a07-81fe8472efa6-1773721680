import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import { Clock, CheckCircle, XCircle, AlertTriangle, Calculator, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function BeijingCapitalDelayedFlightCompensation() {
  return (
    <LayoutZh>
      <SEO
        title="北京首都机场延误航班赔偿 2026 | 延误 3 小时可获 €600？"
        description="北京首都机场航班延误超过 3 小时？了解您的赔偿权利、哪些情况可以索赔 €250-€600，以及如何通过 ClaimWinger 快速获得赔偿。"
        url="https://problemlot.com/zh/blog/beijing-capital-delayed-flight-compensation"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <article className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">
                首页
              </Link>
              <span className="mx-2">/</span>
              <Link href="/zh/blog/eu261-uk261-passenger-rights" className="hover:text-blue-600 dark:hover:text-blue-400">
                博客
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 dark:text-white">北京首都机场延误航班赔偿</span>
            </nav>

            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                北京首都机场延误航班赔偿指南 2026
              </h1>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
                <span>作者：ProblemLot.com 法律团队</span>
                <span>•</span>
                <time>2026-01-30</time>
                <span>•</span>
                <span>9 分钟阅读</span>
              </div>
            </header>

            {/* AI Overview */}
            <div className="bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-xl p-6 mb-12 border-l-4 border-indigo-600">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    AI 概览 - 延误赔偿核心要点
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>从北京首都国际机场（PEK）出发的航班延误超过 3 小时？</strong> 根据 <strong>EU261 和 UK261</strong>，若您的航班受保护（从欧盟/英国出发，或由欧盟/英国航司执飞到达欧盟/英国），<strong>实际到达时间比原定晚 ≥3 小时</strong>时，您可能有权获得 <strong>€250–€600</strong> 赔偿。关键条件：(1) 延误原因非&quot;特殊情况&quot;（如极端天气、战争、空管罢工）；(2) 航空公司可控因素（机务故障、人员调度等）；(3) 您按时值机且持有确认订座。<strong>重要：从中国出发由中国航司执飞的航班通常不受 EU261 保护</strong>。通过 <a href="https://claimwinger.com/delayed-flight" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline font-semibold">ClaimWinger 专业服务</a>，3 分钟即可检查资格并开始索赔（无前期费用，98% 成功率）。
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <nav className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-12">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">目录</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><a href="#delay-threshold" className="hover:text-blue-600 dark:hover:text-blue-400">1. 延误多久才能索赔？</a></li>
                <li><a href="#when-eligible" className="hover:text-blue-600 dark:hover:text-blue-400">2. 何时可以索赔赔偿？</a></li>
                <li><a href="#when-not-eligible" className="hover:text-blue-600 dark:hover:text-blue-400">3. 哪些情况不能索赔？</a></li>
                <li><a href="#compensation-amounts" className="hover:text-blue-600 dark:hover:text-blue-400">4. 赔偿金额计算</a></li>
                <li><a href="#beijing-cases" className="hover:text-blue-600 dark:hover:text-blue-400">5. 北京首都机场实际案例</a></li>
                <li><a href="#claimwinger-benefits" className="hover:text-blue-600 dark:hover:text-blue-400">6. ClaimWinger 如何帮助您？</a></li>
                <li><a href="#claim-steps" className="hover:text-blue-600 dark:hover:text-blue-400">7. 索赔流程（5 步）</a></li>
                <li><a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400">8. 常见问题（FAQ）</a></li>
              </ul>
            </nav>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              {/* Section 1: Delay Threshold */}
              <section id="delay-threshold" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white m-0">
                    延误多久才能索赔？
                  </h2>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    ⏱️ 关键时间点：到达延误 ≥3 小时
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    根据 <a href="https://eur-lex.europa.eu/eli/reg/2004/261/oj" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">EU 法规 261/2004</a> 和 UK261，赔偿权利基于<strong>实际到达时间</strong>（飞机舱门打开时刻）与原定到达时间的差值：
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>延误 &lt;3 小时</strong>：通常无金钱赔偿（但有权获得免费照顾：餐饮、通讯、住宿）</li>
                    <li>• <strong>延误 ≥3 小时</strong>：有权获得标准化金钱赔偿（€250–€600，取决于距离）</li>
                    <li>• <strong>延误 ≥5 小时</strong>：除赔偿外，还可选择全额退款并取消行程</li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 border-l-4 border-amber-500">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        ⚠️ 重要：计算到达延误，非起飞延误
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        <strong>错误示例：</strong>航班起飞晚 4 小时，但飞行途中追回时间，实际到达只晚 2 小时 → <strong>无赔偿</strong>。
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>正确示例：</strong>航班起飞晚 2 小时，飞行途中遇逆风，实际到达晚 3.5 小时 → <strong>有赔偿</strong>（€250–€600）。
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: When Eligible */}
              <section id="when-eligible" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white m-0">
                    何时可以索赔赔偿？
                  </h2>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    ✅ 您可能有权获得 €250–€600 赔偿，如果：
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>航班从欧盟/英国出发</strong>（任何航司）且到达延误 ≥3 小时</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>由欧盟/英国航司执飞并到达欧盟/英国</strong>（例如：汉莎 北京 → 法兰克福）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>延误原因是航空公司可控因素</strong>：机务故障、人员调度、超售、前序航班延误</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>您持有确认订座并按时值机</strong></span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  根据欧洲法院判例（<strong>Sturgeon v Condor，C-402/07</strong>），长时间延误与取消在赔偿权利上等同处理。这意味着若延误 ≥3 小时，乘客权利与航班被取消时相同。
                </p>
              </section>

              {/* Section 3: When NOT Eligible */}
              <section id="when-not-eligible" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-8 h-8 text-red-600" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white m-0">
                    哪些情况不能索赔？
                  </h2>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 mb-6 border-l-4 border-red-600">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    ❌ 以下情况通常无法获得赔偿：
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>从中国出发，由中国航司执飞</strong>（国航、东航、南航等）— 不受 EU261/UK261 保护</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>特殊情况</strong>：极端天气、战争、恐怖袭击、空域关闭、航空管制罢工、国家级安全风险</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>到达延误 &lt;3 小时</strong>（但仍有权获得免费照顾：餐饮、通讯等）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>乘客自身原因</strong>：未按时值机、证件问题、安全检查未通过</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-600">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        💡 "特殊情况"常见争议
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        航空公司常以&quot;技术故障&quot;为由拒赔，但<strong>普通机务维护故障通常不属于特殊情况</strong>（欧洲法院判例支持）。只有&quot;不可预见的技术问题且航空公司已尽合理维护义务&quot;才可能免责。
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        若被拒赔，<a href="https://claimwinger.com/delayed-flight" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">ClaimWinger 的法律团队</a> 会审查证据并代表您与航空公司交涉。
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Compensation Amounts */}
              <section id="compensation-amounts" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-8 h-8 text-purple-600" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white m-0">
                    赔偿金额计算
                  </h2>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  赔偿金额基于<strong>航程距离</strong>（大圆距离，不是实际飞行距离）：
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-4xl font-bold mb-2">€250</div>
                    <div className="text-sm opacity-90 mb-2">≤ 1,500 公里</div>
                    <div className="text-xs opacity-75 border-t border-white/30 pt-2 mt-2">
                      到达延误 ≥3 小时
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-4xl font-bold mb-2">€400</div>
                    <div className="text-sm opacity-90 mb-2">1,500–3,500 公里</div>
                    <div className="text-xs opacity-75 border-t border-white/30 pt-2 mt-2">
                      到达延误 ≥3 小时
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-4xl font-bold mb-2">€600</div>
                    <div className="text-sm opacity-90 mb-2">&gt; 3,500 公里</div>
                    <div className="text-xs opacity-75 border-t border-white/30 pt-2 mt-2">
                      到达延误 ≥3 小时
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    📏 北京首都机场 → 欧洲常见航线
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300">
                      <thead className="bg-gray-200 dark:bg-gray-700">
                        <tr>
                          <th className="p-3">航线</th>
                          <th className="p-3">距离</th>
                          <th className="p-3">赔偿金额（延误 ≥3h）</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b dark:border-gray-700">
                          <td className="p-3">北京 PEK → 法兰克福 FRA</td>
                          <td className="p-3">7,800 km</td>
                          <td className="p-3 font-bold text-purple-600">€600</td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                          <td className="p-3">北京 PEK → 伦敦 LHR</td>
                          <td className="p-3">8,150 km</td>
                          <td className="p-3 font-bold text-purple-600">€600</td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                          <td className="p-3">北京 PEK → 巴黎 CDG</td>
                          <td className="p-3">8,200 km</td>
                          <td className="p-3 font-bold text-purple-600">€600</td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                          <td className="p-3">北京 PEK → 慕尼黑 MUC</td>
                          <td className="p-3">7,600 km</td>
                          <td className="p-3 font-bold text-purple-600">€600</td>
                        </tr>
                        <tr>
                          <td className="p-3">北京 PEK → 赫尔辛基 HEL</td>
                          <td className="p-3">6,600 km</td>
                          <td className="p-3 font-bold text-purple-600">€600</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    💡 <strong>结论：</strong>所有从北京首都机场直飞欧洲的航线均属 &gt; 3,500 km 类别，符合条件时可获<strong>最高 €600 赔偿</strong>。
                  </p>
                </div>
              </section>

              {/* Section 5: Beijing Cases */}
              <section id="beijing-cases" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  北京首都机场实际案例
                </h2>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-green-600">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        ✅ 成功案例：汉莎航空 LH720 延误
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>情况：</strong>李先生预订汉莎航空 LH720（北京 PEK → 法兰克福 FRA），原定 13:30 起飞。因&quot;机组调度问题&quot;延误，实际 18:00 起飞，到达法兰克福晚 3 小时 40 分钟。
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>结果：</strong>通过 <a href="https://claimwinger.com/delayed-flight" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">ClaimWinger</a>，李先生在 6 周内收到 <strong>€600 赔偿</strong>（航程 &gt;3,500 km，延误 ≥3 小时，非特殊情况）。
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-600">
                    <div className="flex items-start gap-3 mb-3">
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        ❌ 不符合条件：国航 CA 北京 → 伦敦
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>情况：</strong>王女士乘坐国航 CA855（北京 PEK → 伦敦 LHR），因&quot;机械故障&quot;延误 4 小时，到达伦敦晚 3.5 小时。
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>结果：</strong><strong>无 EU261 赔偿</strong>。国航是中国航司，从中国出发到英国的航班不受 EU261/UK261 保护。王女士只能根据国航自身政策索赔（通常仅提供积分或代金券）。
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-amber-600">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        ⚠️ 争议案例：芬兰航空 AY &quot;天气&quot;延误
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>情况：</strong>赵女士乘坐芬兰航空 AY086（北京 PEK → 赫尔辛基 HEL），到达晚 4 小时。芬兰航空以&quot;赫尔辛基降雪&quot;为由拒赔。
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>结果：</strong>ClaimWinger 调查发现赫尔辛基当天降雪<strong>属于正常冬季天气</strong>，非&quot;极端&quot;情况。通过法律团队交涉，赵女士最终获得 <strong>€600 赔偿</strong>。
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: ClaimWinger Benefits */}
              <section id="claimwinger-benefits" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white m-0">
                    ClaimWinger 如何帮助您？
                  </h2>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  航班延误索赔可能复杂且耗时。<a href="https://claimwinger.com/delayed-flight" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">ClaimWinger</a> 是专业的航空乘客权利平台，为您处理整个索赔流程 — <strong>无前期费用，只在成功后收取服务费</strong>。
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-green-500">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">✅ 不成功不收费</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          只在成功获得赔偿后收取服务费（通常 25–30%）。索赔失败，您无需支付任何费用。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">📈 98% 成功率</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          已帮助超过 2 百万乘客，平均赔偿周期 8–12 周，成功率高达 98%。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">⚖️ 法律专家团队</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          熟悉 EU261/UK261，知道如何应对航空公司的拒赔策略，必要时提起诉讼。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-indigo-500">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">⚡ 3 分钟快速检查</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          输入航班号和日期，30 秒知道是否有权索赔及预估金额。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl p-8 text-center shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">
                    您的航班延误超过 3 小时吗？
                  </h3>
                  <p className="text-lg mb-6 text-blue-100">
                    立即检查您是否有权获得最高 €600 赔偿
                  </p>
                  <a
                    href="https://claimwinger.com/delayed-flight"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    免费检查我的航班 →
                  </a>
                  <p className="text-xs text-blue-200 mt-3">
                    只需 30 秒 · 无需信用卡
                  </p>
                </div>
              </section>

              {/* Section 7: Claim Steps */}
              <section id="claim-steps" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  索赔流程（5 步）
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "记录延误信息",
                      description: "保存登机牌、电子客票、延误通知、航班延误证明（可在机场柜台索取或拍摄显示屏）、任何额外费用收据。",
                    },
                    {
                      step: 2,
                      title: "检查资格（30 秒）",
                      description: "访问 ClaimWinger，输入航班号、日期、出发/到达机场。系统自动判断是否受 EU261/UK261 保护并显示预估赔偿金额。",
                    },
                    {
                      step: 3,
                      title: "提交索赔（3 分钟）",
                      description: "填写简短表格，上传证据。ClaimWinger 会代表您向航空公司发送正式索赔信并跟进。",
                    },
                    {
                      step: 4,
                      title: "ClaimWinger 处理索赔",
                      description: "法律团队与航空公司交涉，审查拒赔理由（如\"特殊情况\"），必要时提起法律诉讼。您无需做任何事。",
                    },
                    {
                      step: 5,
                      title: "收到赔偿",
                      description: "成功后，赔偿金直接打入您的银行账户。ClaimWinger 扣除服务费（通常 25–30%），您保留剩余部分（€175–€420）。",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                      <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <a
                    href="https://claimwinger.com/delayed-flight"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
                  >
                    开始索赔流程 →
                  </a>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  常见问题（FAQ）
                </h2>

                <div className="space-y-4">
                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q1: 起飞延误 5 小时，但到达只晚 2 小时，能索赔吗？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-indigo-600">
                      <strong>不能。</strong>赔偿基于<strong>到达延误</strong>，非起飞延误。若到达延误 &lt;3 小时，无金钱赔偿（但起飞延误时有权获得免费照顾：餐饮、通讯等）。
                    </p>
                  </details>

                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q2: 国航从北京飞伦敦延误 4 小时，能索赔 EU261 吗？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-indigo-600">
                      <strong>通常不能。</strong>国航是中国航司，从中国出发到英国不受 EU261/UK261 保护。您只能根据国航自身政策索赔（通常仅提供积分/代金券）。
                    </p>
                  </details>

                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q3: 汉莎以&quot;技术故障&quot;拒赔，这属于特殊情况吗？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-indigo-600">
                      <strong>通常不属于。</strong>欧洲法院判例表明，普通机务维护故障不属于&quot;特殊情况&quot;。只有&quot;不可预见的技术问题且航空公司已尽合理维护义务&quot;才可能免责。通过 <a href="https://claimwinger.com/delayed-flight" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">ClaimWinger</a> 可以挑战此类拒赔。
                    </p>
                  </details>

                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q4: ClaimWinger 收费多少？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-indigo-600">
                      <strong>不成功不收费。</strong>只在成功获得赔偿后收取服务费（通常 25–30%）。例如：€600 赔偿，您收到约 €420–€450。检查资格和提交索赔完全免费。
                    </p>
                  </details>

                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q5: 索赔需要多长时间？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-indigo-600">
                      <strong>平均 8–12 周。</strong>若航空公司快速同意，可能 4–6 周。若需法律行动，可能 3–6 个月。ClaimWinger 持续跟进并通知您进展。
                    </p>
                  </details>

                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q6: 延误 2 年前发生，还能索赔吗？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-indigo-600">
                      <strong>可以！</strong>索赔时效为 2–6 年（取决于航空公司所在国）。德国 3 年，英国 6 年，法国 5 年。即使事件已过去一段时间，仍可尝试索赔。
                    </p>
                  </details>

                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q7: 我需要提供哪些证据？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-indigo-600">
                      基本：<strong>(1) 登机牌/电子客票</strong>；<strong>(2) 延误通知</strong>（邮件/短信/机场显示屏照片）；<strong>(3) 身份证件</strong>。额外有帮助：延误证明（机场柜台索取）、额外费用收据。若证据不全，ClaimWinger 也可帮助调查航班数据。
                    </p>
                  </details>
                </div>
              </section>

              {/* Related Articles */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  相关文章
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/zh/blog/beijing-capital-cancelled-flight-compensation"
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      北京首都机场取消航班赔偿指南
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      了解航班取消时的赔偿权利与索赔流程。
                    </p>
                  </Link>
                  <Link
                    href="/zh/blog/eu261-uk261-passenger-rights"
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      EU261 与 UK261 完整指南
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      深入了解欧盟和英国乘客权利法规的所有细节。
                    </p>
                  </Link>
                </div>
              </section>

              {/* Final CTA */}
              <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-2xl shadow-2xl p-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  不要让您的权利被忽视
                </h2>
                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                  每年数百万乘客因不知道自己的权利而错失赔偿。3 分钟检查可能为您赢得 €600。
                </p>
                <a
                  href="https://claimwinger.com/delayed-flight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-indigo-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  免费检查我的赔偿 →
                </a>
                <p className="mt-6 text-sm text-blue-200">
                  ✓ 无风险 - 只在成功后收费　✓ 3 分钟快速检查　✓ 98% 成功率
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "北京首都机场延误航班赔偿 2026 | 延误 3 小时可获 €600？",
            "description": "北京首都机场航班延误超过 3 小时？了解您的赔偿权利、哪些情况可以索赔 €250-€600，以及如何通过 ClaimWinger 快速获得赔偿。",
            "image": "https://problemlot.com/og-image.png",
            "author": {
              "@type": "Organization",
              "name": "ProblemLot.com 法律团队"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ProblemLot.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://problemlot.com/og-image.png"
              }
            },
            "datePublished": "2026-01-30",
            "dateModified": "2026-01-30"
          })
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "起飞延误 5 小时，但到达只晚 2 小时，能索赔吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "不能。赔偿基于到达延误，非起飞延误。若到达延误小于 3 小时，无金钱赔偿（但起飞延误时有权获得免费照顾：餐饮、通讯等）。"
                }
              },
              {
                "@type": "Question",
                "name": "国航从北京飞伦敦延误 4 小时，能索赔 EU261 吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "通常不能。国航是中国航司，从中国出发到英国不受 EU261/UK261 保护。您只能根据国航自身政策索赔（通常仅提供积分/代金券）。"
                }
              },
              {
                "@type": "Question",
                "name": "汉莎以技术故障拒赔，这属于特殊情况吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "通常不属于。欧洲法院判例表明，普通机务维护故障不属于特殊情况。只有不可预见的技术问题且航空公司已尽合理维护义务才可能免责。"
                }
              },
              {
                "@type": "Question",
                "name": "ClaimWinger 收费多少？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "不成功不收费。只在成功获得赔偿后收取服务费（通常 25–30%）。例如：€600 赔偿，您收到约 €420–€450。检查资格和提交索赔完全免费。"
                }
              },
              {
                "@type": "Question",
                "name": "索赔需要多长时间？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "平均 8–12 周。若航空公司快速同意，可能 4–6 周。若需法律行动，可能 3–6 个月。ClaimWinger 持续跟进并通知您进展。"
                }
              },
              {
                "@type": "Question",
                "name": "延误 2 年前发生，还能索赔吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以！索赔时效为 2–6 年（取决于航空公司所在国）。德国 3 年，英国 6 年，法国 5 年。即使事件已过去一段时间，仍可尝试索赔。"
                }
              }
            ]
          })
        }}
      />
    </LayoutZh>
  );
}
