import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import { Scale, CheckCircle, XCircle, AlertTriangle, FileText, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function BeijingCapitalCancelledFlightCompensation() {
  return (
    <LayoutZh>
      <SEO
        title="北京首都机场取消航班赔偿指南 2026 | 何时有权索赔 €600？"
        description="您的北京首都机场航班被取消了吗？了解何时可以获得最高 €600 赔偿、哪些情况不能索赔，以及如何通过 ClaimWinger 快速获得赔偿。"
        url="https://problemlot.com/zh/blog/beijing-capital-cancelled-flight-compensation"
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
              <span className="text-gray-900 dark:text-white">北京首都机场取消航班赔偿</span>
            </nav>

            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                北京首都机场取消航班赔偿指南 2026
              </h1>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
                <span>作者：ProblemLot.com 法律团队</span>
                <span>•</span>
                <time>2026-01-30</time>
                <span>•</span>
                <span>8 分钟阅读</span>
              </div>
            </header>

            {/* AI Overview - Featured Snippet */}
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6 mb-12 border-l-4 border-blue-600">
              <div className="flex items-start gap-3">
                <Scale className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    AI 概览 - 快速理解您的权利
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>从北京首都国际机场（PEK）出发的航班被取消？</strong> 如果您的航班受 <strong>EU261 或 UK261</strong> 保护（即从欧盟/英国出发，或由欧盟/英国航空公司执飞并到达欧盟/英国），您可能有权获得 <strong>€250–€600</strong> 的赔偿。关键条件：(1) 航空公司未提前 ≥14 天通知；(2) 取消原因非"特殊情况"（如极端天气、战争）；(3) 您持有确认订座。<strong>重要：从中国出发由中国航司执飞的航班通常不受 EU261 保护</strong>，但转机至欧盟/英国时可能适用。本指南逐条解释何时可以、何时不能索赔，以及如何通过 <a href="https://claimwinger.com/cancelled-flight" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">ClaimWinger 专业服务</a> 快速获得赔偿（无前期费用，只在成功后收费）。
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <nav className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-12">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">目录</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><a href="#when-eligible" className="hover:text-blue-600 dark:hover:text-blue-400">1. 何时可以索赔赔偿？</a></li>
                <li><a href="#when-not-eligible" className="hover:text-blue-600 dark:hover:text-blue-400">2. 哪些情况不能索赔？</a></li>
                <li><a href="#compensation-amounts" className="hover:text-blue-600 dark:hover:text-blue-400">3. 赔偿金额是多少？</a></li>
                <li><a href="#beijing-capital-specifics" className="hover:text-blue-600 dark:hover:text-blue-400">4. 北京首都机场特别说明</a></li>
                <li><a href="#claimwinger-benefits" className="hover:text-blue-600 dark:hover:text-blue-400">5. 为什么选择 ClaimWinger？</a></li>
                <li><a href="#claim-process" className="hover:text-blue-600 dark:hover:text-blue-400">6. 索赔流程（6 步）</a></li>
                <li><a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400">7. 常见问题解答（FAQ）</a></li>
              </ul>
            </nav>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              {/* Section 1: When Eligible */}
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
                      <span><strong>航班从欧盟/英国出发</strong>（例如：北京 → 法兰克福 → 巴黎，法兰克福-巴黎段被取消）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>由欧盟/英国航空公司执飞并到达欧盟/英国</strong>（例如：汉莎航空 北京 → 慕尼黑）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>航空公司未提前 ≥14 天通知取消</strong>（晚通知 = 更高赔偿权利）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>取消原因是航空公司可控因素</strong>（机务故障、人员调度、超售等）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>您持有确认订座并按时办理值机</strong></span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  根据 <a href="https://eur-lex.europa.eu/eli/reg/2004/261/oj" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">EU 法规 261/2004</a> 和 <a href="https://www.caa.co.uk/passengers" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">英国 UK261</a>，当航班取消且航空公司无法证明"特殊情况"时，乘客有权获得标准化赔偿。这是您的<strong>法定权利</strong>，与机票价格无关。
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    💡 实际案例（北京首都机场）
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>案例：</strong>张女士预订了 <strong>汉莎航空 LH720</strong>（北京 PEK → 法兰克福 FRA），起飞前 6 小时接到取消通知。汉莎以"机组调度问题"为由取消。
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>结果：</strong>通过 <a href="https://claimwinger.com/cancelled-flight" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">ClaimWinger</a>，张女士在 8 周内获得 <strong>€600 赔偿</strong>（航程 &gt; 3,500 km），因为：(1) 航班受 EU261 保护（欧盟航司到达欧盟）；(2) 未提前 14 天通知；(3) 非特殊情况。
                  </p>
                </div>
              </section>

              {/* Section 2: When NOT Eligible */}
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
                      <span><strong>从中国出发，由中国航司执飞</strong>（例如：国航 CA 北京 → 纽约）— 不受 EU261/UK261 保护</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>特殊情况（extraordinary circumstances）</strong>：极端天气、战争、恐怖袭击、空域关闭、航空管制罢工、国家级安全风险</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>航空公司提前 ≥14 天通知</strong>并提供合理替代航班</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>乘客自身原因</strong>：未按时值机、未通过安全检查、证件问题</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>从欧盟/英国出发，但由非欧盟/英国航司执飞到第三国</strong>（例如：巴黎 → 北京，国航执飞）— 通常不适用</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 my-6 border-l-4 border-yellow-600">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        ⚠️ 北京首都机场乘客注意事项
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>重要：</strong>大多数从北京首都机场出发的国际航班（如国航、东航、南航）<strong>不受 EU261/UK261 保护</strong>，除非：
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>航班由<strong>欧盟/英国航司执飞并到达欧盟/英国</strong>（如汉莎、英航、法航）</li>
                        <li>您在欧盟/英国转机且转机段被取消（该段受保护）</li>
                      </ul>
                      <p className="text-gray-700 dark:text-gray-300 mt-3">
                        如不确定是否适用，<a href="https://claimwinger.com/cancelled-flight" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">免费检查您的航班资格</a>（30 秒）。
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Compensation Amounts */}
              <section id="compensation-amounts" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  赔偿金额是多少？
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  根据 EU261，赔偿金额取决于<strong>航程距离</strong>（不是机票价格）：
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-4xl font-bold mb-2">€250</div>
                    <div className="text-sm opacity-90">航程 ≤ 1,500 公里</div>
                    <div className="text-xs mt-2 opacity-75">例如：法兰克福 → 罗马</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-4xl font-bold mb-2">€400</div>
                    <div className="text-sm opacity-90">航程 1,500–3,500 公里</div>
                    <div className="text-xs mt-2 opacity-75">例如：伦敦 → 雅典</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-4xl font-bold mb-2">€600</div>
                    <div className="text-sm opacity-90">航程 &gt; 3,500 公里</div>
                    <div className="text-xs mt-2 opacity-75">例如：北京 → 法兰克福</div>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    📏 北京首都机场常见航线距离参考
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• 北京 PEK → 法兰克福 FRA：<strong>7,800 km</strong> → €600</li>
                    <li>• 北京 PEK → 伦敦 LHR：<strong>8,150 km</strong> → €600</li>
                    <li>• 北京 PEK → 巴黎 CDG：<strong>8,200 km</strong> → €600</li>
                    <li>• 北京 PEK → 慕尼黑 MUC：<strong>7,600 km</strong> → €600</li>
                  </ul>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    💡 <strong>提示：</strong>所有从北京首都机场直飞欧洲的航线均属 &gt; 3,500 km 类别，符合条件时可获最高 €600 赔偿。
                  </p>
                </div>
              </section>

              {/* Section 4: Beijing Capital Specifics */}
              <section id="beijing-capital-specifics" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  北京首都机场特别说明
                </h2>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    🛫 从北京首都机场（PEK）出发的航班
                  </h3>
                  
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">✅ 受 EU261/UK261 保护的航班：</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>汉莎航空（LH）- 北京 → 法兰克福/慕尼黑</li>
                        <li>英国航空（BA）- 北京 → 伦敦</li>
                        <li>法国航空（AF）- 北京 → 巴黎</li>
                        <li>芬兰航空（AY）- 北京 → 赫尔辛基</li>
                        <li>奥地利航空（OS）- 北京 → 维也纳</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">❌ 通常不受保护的航班：</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>中国国际航空（CA）- 所有航线</li>
                        <li>中国东方航空（MU）- 所有航线</li>
                        <li>中国南方航空（CZ）- 所有航线</li>
                        <li>海南航空（HU）- 所有航线</li>
                        <li>其他非欧盟/英国航司</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-6 border-l-4 border-amber-500">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    🔗 官方资源链接
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      • <a href="http://en.bcia.com.cn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">北京首都国际机场官网</a> - 航班信息与航空公司联系方式
                    </li>
                    <li>
                      • <a href="https://eur-lex.europa.eu/eli/reg/2004/261/oj" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">EU 法规 261/2004 原文</a> - 官方法律文本
                    </li>
                    <li>
                      • <a href="https://www.caa.co.uk/passengers" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">英国民航局（CAA）</a> - UK261 官方指南
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5: ClaimWinger Benefits */}
              <section id="claimwinger-benefits" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white m-0">
                    为什么选择 ClaimWinger？
                  </h2>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  航空公司经常以"特殊情况"为由拒绝赔偿，或要求您填写复杂的表格。<a href="https://claimwinger.com/cancelled-flight" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">ClaimWinger</a> 是专业的航空乘客权利服务平台，为您处理整个索赔流程 — <strong>无前期费用，只在成功后收取服务费</strong>。
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-green-500">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">✅ 无风险 - 不成功不收费</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          只在成功获得赔偿后收取服务费（通常为赔偿金额的 25–30%）。如果索赔失败，您无需支付任何费用。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                    <div className="flex items-start gap-3">
                      <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">📄 法律专家处理</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          我们的法律团队熟悉 EU261/UK261，知道如何应对航空公司的拒赔策略，必要时可提起法律诉讼。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">📈 98% 成功率</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          我们已帮助超过 2 百万乘客获得赔偿，成功率高达 98%。平均赔偿周期 8–12 周。
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
                          只需输入航班号和日期，即可在 30 秒内知道您是否有权索赔以及预估金额。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">
                    您的北京航班被取消了吗？
                  </h3>
                  <p className="text-lg mb-6 text-blue-100">
                    立即检查您是否有权获得最高 €600 赔偿
                  </p>
                  <a
                    href="https://claimwinger.com/cancelled-flight"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    免费检查我的航班 →
                  </a>
                  <p className="text-xs text-blue-200 mt-3">
                    只需 30 秒 · 无需信用卡
                  </p>
                </div>
              </section>

              {/* Section 6: Claim Process */}
              <section id="claim-process" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  索赔流程（6 步）
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "收集证据",
                      description: "保存登机牌、电子客票、取消通知（邮件/短信）、航班延误证明、任何额外费用收据（酒店、餐饮、交通）。",
                    },
                    {
                      step: 2,
                      title: "检查资格",
                      description: "访问 ClaimWinger，输入航班号、日期、出发/到达机场，系统会自动判断是否受 EU261/UK261 保护。",
                    },
                    {
                      step: 3,
                      title: "提交索赔",
                      description: "填写简短表格（3 分钟），上传证据。ClaimWinger 会代表您向航空公司发送正式索赔信。",
                    },
                    {
                      step: 4,
                      title: "航空公司审核",
                      description: "航空公司有 6–8 周时间回应。若拒绝，ClaimWinger 会分析理由并准备进一步行动。",
                    },
                    {
                      step: 5,
                      title: "法律行动（如需）",
                      description: "若航空公司拒赔且理由不成立，ClaimWinger 的法律团队会提起诉讼（无需您出庭）。",
                    },
                    {
                      step: 6,
                      title: "收到赔偿",
                      description: "成功后，赔偿金直接打入您的银行账户。ClaimWinger 扣除服务费（通常 25–30%），您无需支付其他费用。",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
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
                    href="https://claimwinger.com/cancelled-flight"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    开始索赔流程 →
                  </a>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  常见问题解答（FAQ）
                </h2>

                <div className="space-y-4">
                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q1: 我乘坐国航从北京飞往伦敦，航班被取消。我能获得赔偿吗？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-blue-600">
                      <strong>通常不能。</strong>国航（CA）是中国航司，从中国出发到英国的航班通常不受 EU261/UK261 保护。但如果您在欧盟/英国有转机段（如法兰克福 → 伦敦）且该段被取消，转机段可能受保护。建议通过 <a href="https://claimwinger.com/cancelled-flight" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">ClaimWinger 免费检查</a>。
                    </p>
                  </details>

                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q2: 汉莎航空以"天气原因"拒绝赔偿，但当时北京天气正常。我该怎么办？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-blue-600">
                      要求汉莎提供证据（如气象局报告、空管通知）。若无法提供，您可以通过 <a href="https://claimwinger.com/cancelled-flight" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">ClaimWinger</a> 提起正式索赔。我们的法律团队会审查证据并代表您与航空公司交涉。
                    </p>
                  </details>

                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q3: 航班取消前 10 天收到通知，还能索赔吗？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-blue-600">
                      <strong>可能可以。</strong>如果航空公司提前 7–14 天通知但未提供合理替代航班（如到达时间延误超过 4 小时），您仍可能有权获得部分或全额赔偿。
                    </p>
                  </details>

                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q4: ClaimWinger 收费多少？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-blue-600">
                      ClaimWinger 采用 <strong>"不成功不收费"</strong> 模式。只在成功获得赔偿后收取服务费（通常为赔偿金额的 25–30%，具体以平台显示为准）。检查航班资格和提交索赔完全免费，无隐藏费用。
                    </p>
                  </details>

                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q5: 索赔需要多长时间？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-blue-600">
                      <strong>平均 8–12 周。</strong>时间取决于航空公司的回应速度。若航空公司快速同意，可能 4–6 周。若需法律行动，可能 3–6 个月。ClaimWinger 会持续跟进并通知您进展。
                    </p>
                  </details>

                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q6: 我需要提供哪些证据？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-blue-600">
                      基本证据：<strong>(1) 登机牌或电子客票</strong>；<strong>(2) 取消通知</strong>（邮件/短信/机场公告照片）；<strong>(3) 身份证件复印件</strong>。额外有帮助的：航班延误证明、额外费用收据（酒店、餐饮、交通）。若无完整证据，ClaimWinger 也可帮助调查航班数据。
                    </p>
                  </details>

                  <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
                      Q7: 事件已过去 1 年，还能索赔吗？
                    </summary>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-blue-600">
                      <strong>可以！</strong>EU261/UK261 的索赔时效通常为 2–6 年（取决于航空公司所在国法律）。德国 3 年，英国 6 年，法国 5 年。即使事件已过去一段时间，仍可尝试索赔。
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
                    href="/zh/blog/beijing-capital-delayed-flight-compensation"
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      北京首都机场延误航班赔偿指南
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      了解航班延误 ≥3 小时时的赔偿权利与索赔流程。
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
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-2xl p-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  不要让航空公司逃避责任
                </h2>
                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                  数百万乘客不知道自己有权获得赔偿。检查您的航班，3 分钟可能为您赢得 €600。
                </p>
                <a
                  href="https://claimwinger.com/cancelled-flight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105"
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
            "headline": "北京首都机场取消航班赔偿指南 2026 | 何时有权索赔 €600？",
            "description": "您的北京首都机场航班被取消了吗？了解何时可以获得最高 €600 赔偿、哪些情况不能索赔，以及如何通过 ClaimWinger 快速获得赔偿。",
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
                "name": "我乘坐国航从北京飞往伦敦，航班被取消。我能获得赔偿吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "通常不能。国航（CA）是中国航司，从中国出发到英国的航班通常不受 EU261/UK261 保护。但如果您在欧盟/英国有转机段（如法兰克福 → 伦敦）且该段被取消，转机段可能受保护。"
                }
              },
              {
                "@type": "Question",
                "name": "汉莎航空以天气原因拒绝赔偿，但当时北京天气正常。我该怎么办？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "要求汉莎提供证据（如气象局报告、空管通知）。若无法提供，您可以通过 ClaimWinger 提起正式索赔。我们的法律团队会审查证据并代表您与航空公司交涉。"
                }
              },
              {
                "@type": "Question",
                "name": "ClaimWinger 收费多少？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ClaimWinger 采用不成功不收费模式。只在成功获得赔偿后收取服务费（通常为赔偿金额的 25–30%）。检查航班资格和提交索赔完全免费。"
                }
              },
              {
                "@type": "Question",
                "name": "索赔需要多长时间？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "平均 8–12 周。时间取决于航空公司的回应速度。若航空公司快速同意，可能 4–6 周。若需法律行动，可能 3–6 个月。"
                }
              },
              {
                "@type": "Question",
                "name": "航班取消前 10 天收到通知，还能索赔吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可能可以。如果航空公司提前 7–14 天通知但未提供合理替代航班（如到达时间延误超过 4 小时），您仍可能有权获得部分或全额赔偿。"
                }
              },
              {
                "@type": "Question",
                "name": "事件已过去 1 年，还能索赔吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以！EU261/UK261 的索赔时效通常为 2–6 年（取决于航空公司所在国法律）。德国 3 年，英国 6 年，法国 5 年。"
                }
              }
            ]
          })
        }}
      />
    </LayoutZh>
  );
}