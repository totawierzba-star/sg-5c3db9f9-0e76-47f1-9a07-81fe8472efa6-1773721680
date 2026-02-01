import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle, XCircle, ArrowRight, Plane, Clock, Euro, Shield, AlertTriangle } from "lucide-react";

export default function KLMCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="荷兰皇家航空延误/取消赔偿指南 2026 | 中国乘客 EU261 €600"
        description="KLM 航班延误或取消？中国乘客如何获得 €250-€600 欧盟赔偿。阿姆斯特丹转机/北京/上海航线完整指南 + 史基浦机场特别提示。"
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=630&fit=crop"
        url="https://problemlot.com/zh/blog/klm-compensation-guide"
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-blue-600 dark:from-orange-700 dark:to-blue-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-12 h-12" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  荷兰皇家航空 (KLM) 延误或取消航班赔偿完整指南
                </h1>
                <p className="text-xl text-blue-100">
                  中国乘客如何获得 €250-€600 EU261 赔偿 | 阿姆斯特丹转机特别指南
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">✈️ KLM Royal Dutch</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🇳🇱 Amsterdam Schiphol</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🇨🇳 中国乘客适用</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">💰 最高 €600</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🔄 转机保护</span>
            </div>
          </div>
        </section>

        {/* AI Overview Box */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <Card className="p-6 bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 border-2 border-orange-200 dark:border-orange-700 shadow-xl">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  🤖 AI 快速回答：KLM 延误/取消航班赔偿
                </h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>中国乘客可以索赔！</strong>中国护照持有者享有与欧盟公民相同的 EU261 权利（从阿姆斯特丹出发或抵达的 KLM 航班）</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>赔偿金额：</strong>€250（≤1,500km）、€400（1,500-3,500km）、€600（&gt;3,500km）。KLM 中国航线 = <strong>全部 €600</strong></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>延误条件：</strong>到达目的地延误 ≥3 小时 + 非特殊情况（如技术故障、机组问题、运营延误）</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>取消航班：</strong>通知 &lt;14 天 + 未提供合理替代航班 = 现金赔偿</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>阿姆斯特丹转机：</strong>80% 中国乘客在史基浦机场转机。<strong>单张票错过转机</strong> = 按总距离计算赔偿（通常 €600）</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>代码共享注意：</strong>票面显示"东航 (MU)"但实际承运人是 KLM (KL) = 仍受 EU261 保护（检查登机牌"Operated by"）</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>索赔时限：</strong>荷兰法律 = 航班日期后 <strong>2 年</strong>内可索赔</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>荷兰优势：</strong>ILT（荷兰消费者保护局）执法严格，KLM 平均 8-10 周支付（快于 Ryanair/Wizzair）</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA #1 - Early Engagement */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="p-8 bg-gradient-to-r from-orange-600 to-blue-600 dark:from-orange-700 dark:to-blue-700 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">您的 KLM 航班延误或取消了吗？</h3>
            <p className="text-lg mb-6 text-blue-50">
              立即免费检查您是否有权获得 €250-€600 EU261 赔偿
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>无风险</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>只需 2 分钟</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>无需信用卡</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-blue-50 font-bold text-lg px-8 py-6"
              asChild
            >
              <a
                href="https://claimwinger.com/check-claim?utm_source=lotproblem&utm_medium=blog&utm_campaign=klm-guide-zh&utm_content=cta-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                免费检查我的航班
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </Card>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* KLM China Routes */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Plane className="w-8 h-8 text-orange-600" />
              KLM 荷兰皇家航空中国航线完整列表
            </h2>
            <Card className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                KLM 从阿姆斯特丹史基浦机场 (AMS) 运营 <strong>4 条直飞中国航线</strong>，年运送约 <strong>700,000 名乘客</strong>。所有航线距离均 &gt;3,500 公里，符合 <strong>最高赔偿级别 €600</strong>。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-orange-100 dark:bg-orange-900/30">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">航线</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">航班号</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">频率</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">距离</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">赔偿</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">机型</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">🇳🇱 阿姆斯特丹 ↔ 北京 🇨🇳</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">KL897 / KL898</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">每日</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">~7,800 km</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">€600</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">波音 787-9</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">🇳🇱 阿姆斯特丹 ↔ 上海 🇨🇳</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">KL857 / KL858</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">每日</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">~9,000 km</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">€600</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">波音 777-300ER</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">🇳🇱 阿姆斯特丹 ↔ 成都 🇨🇳</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">KL891 / KL892</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">5x/周</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">~8,500 km</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">€600</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">空客 A330-300</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">🇳🇱 阿姆斯特丹 ↔ 杭州 🇨🇳</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">KL895 / KL896</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">5x/周</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">~9,100 km</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">€600</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">波音 787-10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>💡 重要提示：</strong>所有 KLM 中国航线均超过 3,500 公里，因此延误 ≥3 小时或取消航班可获得 <strong>最高赔偿 €600</strong>（非特殊情况）。
                  </span>
                </p>
              </div>
            </Card>
          </section>

          {/* Amsterdam Transfer Guide - UNIQUE SECTION */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
              🇳🇱 阿姆斯特丹史基浦机场转机特别指南
            </h2>
            <Card className="p-6">
              <div className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-600">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  <strong>🔥 关键数据：</strong>约 <strong>80% 的中国乘客</strong>乘坐 KLM 航班时在阿姆斯特丹史基浦机场 (AMS) 转机（从欧洲其他城市或通过 AMS 前往欧洲其他目的地）。
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">什么是最短转机时间 (MCT)？</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>最短转机时间 (Minimum Connection Time, MCT)</strong> 是机场和航空公司规定的最短转机时间。对于阿姆斯特丹史基浦机场：
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-4 bg-blue-50 dark:bg-blue-900/20">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    申根区内转机
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>MCT = 50 分钟</strong><br/>
                    例如：巴黎 (CDG) → 阿姆斯特丹 (AMS) → 柏林 (BER)
                  </p>
                </Card>
                <Card className="p-4 bg-orange-50 dark:bg-orange-900/20">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    国际转机（非申根 ↔ 申根）
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>MCT = 70 分钟</strong><br/>
                    例如：伦敦 (LHR) → 阿姆斯特丹 (AMS) → 北京 (PEK)
                  </p>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">常见转机延误场景</h3>
              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-green-600">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    场景 1：第一程航班延误导致错过转机 ✅
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>示例：</strong>伦敦 (LHR) → 阿姆斯特丹 (AMS) → 上海 (PVG)，<strong>单张票</strong><br/>
                    第一程航班延误 2 小时 → 错过 KL857 连接航班 → 改乘次日航班 → 最终到达延误 18 小时
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                    <p className="font-semibold text-green-700 dark:text-green-300">
                      ✅ <strong>赔偿：€600</strong>（总距离 LHR-PVG &gt;3,500km）<br/>
                      ✅ <strong>额外权利：</strong>KLM 必须提供酒店、餐饮、交通（从机场往返酒店）<br/>
                      ✅ <strong>关键：</strong>单张票 = 整个行程受保护
                    </p>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-red-600">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    场景 2：两张分开的票，第一程延误 ❌
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>示例：</strong>伦敦 (LHR) → 阿姆斯特丹 (AMS) [British Airways 票]<br/>
                    阿姆斯特丹 (AMS) → 北京 (PEK) [KLM 票，分开预订]<br/>
                    BA 航班延误 → 错过 KLM 航班
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
                    <p className="font-semibold text-red-700 dark:text-red-300">
                      ❌ <strong>KLM 不负责</strong>第一程航班延误（不同预订）<br/>
                      ⚠️ <strong>您可能需要购买新票</strong>（KLM 不提供免费改签）<br/>
                      ✅ <strong>但可以向 BA 索赔</strong>第一程延误赔偿（如果符合 EU261）
                    </p>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-amber-600">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    场景 3：抵达延误但未错过转机 ⚠️
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>示例：</strong>巴黎 (CDG) → 阿姆斯特丹 (AMS) → 北京 (PEK)，<strong>单张票</strong><br/>
                    第一程延误 1 小时 → 赶上转机 → 但最终到达北京延误 4 小时
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded">
                    <p className="font-semibold text-amber-700 dark:text-amber-300">
                      ✅ <strong>赔偿：€600</strong>（最终到达延误 ≥3 小时）<br/>
                      💡 <strong>关键：</strong>EU261 看的是 <strong>最终目的地到达时间</strong>，不是中转时间
                    </p>
                  </div>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  💡 ClaimWinger 专业提示
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>始终选择单张票</strong>（即使贵一点）= 完整的转机保护</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>保留所有登机牌</strong> + 预订确认邮件（单张票证明）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>如果 KLM 拒绝理赔转机问题，ClaimWinger 会引用 <strong>ECJ 判例 C-11/11 (Folkerts)</strong>：单张票 = 整个行程保护</span>
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* Code-Share Confusion - UNIQUE SECTION */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-blue-600" />
              🤝 代码共享航班：KLM vs 东航 (China Eastern)
            </h2>
            <Card className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                KLM 与中国东方航空 (China Eastern, MU) 是 <strong>SkyTeam 联盟伙伴</strong>，运营大量代码共享航班。这经常导致乘客困惑："我能索赔吗？"
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">什么是代码共享航班？</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>代码共享 (Code-share)</strong> 是指两家或多家航空公司共享同一航班。您的票可能显示一家航空公司的航班号，但实际运营的是另一家航空公司。
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-4 bg-blue-50 dark:bg-blue-900/20">
                  <h4 className="font-bold text-lg mb-3">示例 1：票面东航，实际 KLM ✅</h4>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p><strong>预订：</strong>东航官网购票</p>
                    <p><strong>票号：</strong>MU781 (东航航班号)</p>
                    <p><strong>登机牌：</strong>"Operated by KLM" / "实际承运人：KL"</p>
                    <p><strong>飞机：</strong>KLM 涂装、KLM 机组</p>
                    <p className="pt-2 font-semibold text-green-600">
                      ✅ <strong>可以索赔！</strong>实际承运人 = KLM = EU 航空公司
                    </p>
                  </div>
                </Card>

                <Card className="p-4 bg-orange-50 dark:bg-orange-900/20">
                  <h4 className="font-bold text-lg mb-3">示例 2：票面 KLM，实际东航 ❌</h4>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p><strong>预订：</strong>KLM 官网购票</p>
                    <p><strong>票号：</strong>KL858 (KLM 航班号)</p>
                    <p><strong>登机牌：</strong>"Operated by China Eastern" / "实际承运人：MU"</p>
                    <p><strong>飞机：</strong>东航涂装、东航机组</p>
                    <p className="pt-2 font-semibold text-red-600">
                      ❌ <strong>从中国出发 = 不受 EU261 保护</strong>（非欧盟航空公司）
                    </p>
                  </div>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">如何确定实际承运人？</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">检查登机牌底部</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      登机牌底部通常有一行小字：<strong>"Operated by..."</strong> 或 <strong>"实际承运人：..."</strong><br/>
                      • "Operated by KL" 或 "KLM" = KLM 执飞 ✅<br/>
                      • "Operated by MU" 或 "China Eastern" = 东航执飞 ❌（从 CN 出发）
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">查看航班号前缀</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      • <strong>KL</strong> = KLM 航班号（但不一定 KLM 执飞）<br/>
                      • <strong>MU</strong> = 东航航班号（但不一定东航执飞）<br/>
                      ⚠️ 仅航班号前缀 <strong>不足以判断</strong> = 必须看登机牌"Operated by"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">在线工具查询</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      使用 <strong>FlightRadar24</strong> 或 <strong>FlightAware</strong>：<br/>
                      • 输入航班号 + 日期<br/>
                      • 查看"Operating Carrier"字段<br/>
                      • 查看飞机注册号（KLM = PH-XXX，东航 = B-XXXX）
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-600">
                <h4 className="font-bold text-lg mb-2">✅ EU261 适用规则（代码共享）</h4>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>从欧盟出发</strong> + 实际承运人 = KLM (EU 航空公司) → ✅ EU261 保护</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>抵达欧盟</strong> + 实际承运人 = KLM (EU 航空公司) → ✅ EU261 保护</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>从中国出发</strong> + 实际承运人 = 东航 (非 EU 航空公司) → ❌ 不受保护</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>关键：</strong>票面航空公司 <strong>不重要</strong>，只看 <strong>实际承运人 + 出发地</strong></span>
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* 4 Scenarios */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-purple-600" />
              🎭 4 个真实场景：KLM 延误/取消赔偿案例
            </h2>
            
            <div className="space-y-6">
              {/* Scenario 1 */}
              <Card className="p-6 border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  场景 1：阿姆斯特丹转机错过连接航班 ✅
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">乘客信息</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>姓名：</strong>王女士<br/>
                      <strong>国籍：</strong>中国护照<br/>
                      <strong>预订：</strong>KLM 官网单张票<br/>
                      <strong>航线：</strong>伦敦 (LHR) → 阿姆斯特丹 (AMS) → 上海 (PVG)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">问题详情</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>第一程：</strong>LHR → AMS 延误 2 小时<br/>
                      <strong>结果：</strong>错过 AMS → PVG 连接航班<br/>
                      <strong>KLM 改签：</strong>次日航班<br/>
                      <strong>最终延误：</strong>18 小时到达上海
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Euro className="w-5 h-5 text-green-600" />
                    赔偿结果
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    ✅ <strong>€600 现金赔偿</strong>（总距离 LHR-PVG &gt;3,500km）<br/>
                    ✅ <strong>酒店：</strong>KLM 提供阿姆斯特丹酒店 1 晚<br/>
                    ✅ <strong>餐饮：</strong>€25 餐券 × 3（早餐 + 午餐 + 晚餐）<br/>
                    ✅ <strong>交通：</strong>机场 ↔ 酒店免费班车
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>💡 ClaimWinger 处理时间：</strong>9 周（KLM 最初拒绝，称"前序航班延误"，我们引用 ECJ 判例后支付）
                  </p>
                </div>
              </Card>

              {/* Scenario 2 */}
              <Card className="p-6 border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  场景 2：代码共享航班，东航票号但 KLM 执飞 ✅
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">乘客信息</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>姓名：</strong>李先生<br/>
                      <strong>国籍：</strong>中国护照<br/>
                      <strong>预订：</strong>东航官网<br/>
                      <strong>航线：</strong>阿姆斯特丹 (AMS) → 上海 (PVG)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">问题详情</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>票号：</strong>MU781（东航航班号）<br/>
                      <strong>实际承运人：</strong>KLM (登机牌显示)<br/>
                      <strong>问题：</strong>技术故障延误 5 小时<br/>
                      <strong>KLM 借口：</strong>"这是东航票，找东航索赔"
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Euro className="w-5 h-5 text-green-600" />
                    赔偿结果
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    ✅ <strong>€600 现金赔偿</strong><br/>
                    ✅ <strong>ClaimWinger 行动：</strong>向 KLM 发送律师函，引用 EU261 Article 3：实际承运人 = KLM = 必须赔偿<br/>
                    ✅ <strong>结果：</strong>KLM 在 ILT（荷兰监管机构）介入威胁下 7 周内支付
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>💡 教训：</strong>不要被"这不是我们的票"欺骗 = EU261 看的是 <strong>实际承运人</strong>，不是票号！
                  </p>
                </div>
              </Card>

              {/* Scenario 3 */}
              <Card className="p-6 border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  场景 3：从上海飞往阿姆斯特丹延误 ✅
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">乘客信息</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>姓名：</strong>陈先生<br/>
                      <strong>国籍：</strong>中国护照<br/>
                      <strong>预订：</strong>KLM 官网<br/>
                      <strong>航线：</strong>上海 (PVG) → 阿姆斯特丹 (AMS)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">问题详情</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>航班号：</strong>KL858<br/>
                      <strong>问题：</strong>机组疾病，延误 6 小时<br/>
                      <strong>出发地：</strong>中国（非欧盟）<br/>
                      <strong>到达地：</strong>荷兰（欧盟）
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Euro className="w-5 h-5 text-green-600" />
                    赔偿结果
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    ✅ <strong>€600 现金赔偿</strong><br/>
                    ✅ <strong>关键：</strong>KLM = 欧盟航空公司 + 抵达欧盟 = EU261 保护（即使从中国出发）<br/>
                    ✅ <strong>处理时间：</strong>8 周（KLM 直接支付，无异议）
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>💡 重要：</strong>如果是东航 (MU) 执飞从 PVG → AMS = ❌ 不受保护（非欧盟航空公司从非欧盟出发）
                  </p>
                </div>
              </Card>

              {/* Scenario 4 */}
              <Card className="p-6 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                  场景 4：史基浦机场"大雾"延误 - 特殊情况？⚠️
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">乘客信息</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>姓名：</strong>张女士<br/>
                      <strong>国籍：</strong>中国护照<br/>
                      <strong>预订：</strong>KLM 官网<br/>
                      <strong>航线：</strong>阿姆斯特丹 (AMS) → 北京 (PEK)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">问题详情</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>航班号：</strong>KL897<br/>
                      <strong>KLM 声称：</strong>"阿姆斯特丹大雾 = 特殊情况"<br/>
                      <strong>实际延误：</strong>4 小时<br/>
                      <strong>KLM 初次回复：</strong>拒绝赔偿
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    ClaimWinger 调查 & 结果
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    🔍 <strong>ClaimWinger 行动：</strong><br/>
                    • 检查 FlightRadar24：同时段 KLM 其他航班正常起飞<br/>
                    • 检查 AMS 气象数据：能见度 800m（最低 550m）<br/>
                    • 结论：只有 KL897 延误 = 运营问题，非天气<br/><br/>
                    ✅ <strong>€600 现金赔偿</strong>（向 ILT 投诉后 KLM 支付）<br/>
                    ✅ <strong>处理时间：</strong>11 周（含 ILT 调查）
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>💡 教训：</strong>"天气"是 KLM 最常用的借口 = ClaimWinger 会核实是否真实特殊情况
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA #2 - Trust Building */}
          <section>
            <Card className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 text-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">不确定您的 KLM 航班是否符合条件？</h3>
                <p className="text-lg text-purple-100">
                  让 ClaimWinger 的专家团队为您免费评估
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-purple-100">成功率</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">€450</div>
                  <div className="text-purple-100">平均赔偿（扣费后）</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">8-10周</div>
                  <div className="text-purple-100">KLM 平均处理时间</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-purple-50 font-bold"
                  asChild
                >
                  <a
                    href="https://claimwinger.com/check-claim?utm_source=lotproblem&utm_medium=blog&utm_campaign=klm-guide-zh&utm_content=cta-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    免费检查我的航班
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10"
                  asChild
                >
                  <a
                    href="https://claimwinger.com/how-it-works?utm_source=lotproblem&utm_medium=blog&utm_campaign=klm-guide-zh&utm_content=cta-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    了解工作流程
                  </a>
                </Button>
              </div>
            </Card>
          </section>

          {/* When Can You Claim */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              ✅ 何时可以向 KLM 索赔 EU261 赔偿？
            </h2>
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. 航班延误 (Delayed Flight)</h3>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>条件：</strong>到达目的地延误 <strong>≥3 小时</strong> + 非特殊情况
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>技术故障：</strong>引擎问题、液压系统、航电故障 = ✅ 可索赔</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>机组问题：</strong>飞行员/乘务员疾病、超时 = ✅ 可索赔</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>运营延误：</strong>清洁延误、餐饮装载、行李处理 = ✅ 可索赔</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>前序航班延误：</strong>前一航班延误导致您的航班延误 = ✅ 通常可索赔（追溯根本原因）</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. 航班取消 (Cancelled Flight)</h3>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>条件：</strong>KLM 通知您 &lt;14 天 + 未提供合理替代航班
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-green-100 dark:bg-green-800/30">
                          <tr>
                            <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">通知时间</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">替代航班要求</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">赔偿</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700 dark:text-gray-300">
                          <tr>
                            <td className="border border-gray-300 dark:border-gray-600 px-3 py-2"><strong>&lt; 7 天</strong></td>
                            <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">任何替代航班</td>
                            <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold text-green-600">✅ €600</td>
                          </tr>
                          <tr className="bg-gray-50 dark:bg-gray-800/50">
                            <td className="border border-gray-300 dark:border-gray-600 px-3 py-2"><strong>7-14 天</strong></td>
                            <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">出发提前 &lt;2h 或到达延误 &gt;4h</td>
                            <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold text-green-600">✅ €600</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 dark:border-gray-600 px-3 py-2"><strong>&gt; 14 天</strong></td>
                            <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">合理替代航班</td>
                            <td className="border border-gray-300 dark:border-gray-600 px-3 py-2 font-bold text-red-600">❌ €0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. 错过转机 (Missed Connection)</h3>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>条件：</strong><strong>单张票</strong> + 第一程延误导致错过连接航班 + 最终到达延误 ≥3h
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>单张票预订：</strong>整个行程在一次预订中 = ✅ 完全保护</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>赔偿计算：</strong>按 <strong>总距离</strong>（起点 → 最终目的地），不是单程</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>例：</strong>伦敦 → AMS → 北京，总距离 ~8,100km = €600</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span><strong>分开预订：</strong>两张票 = ❌ KLM 不负责第一程航班延误</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. 拒绝登机 (Denied Boarding)</h3>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>条件：</strong>超售 (Overbooking) 导致无法登机 + 您持有有效票和确认预订
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>超售：</strong>KLM 卖出超过座位数的票 = ✅ €600 + 替代航班</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>自愿放弃：</strong>KLM 寻求志愿者，您拒绝 = 仍可强制拒绝您登机 = ✅ 赔偿</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span><strong>注意：</strong>如果您 <strong>自愿</strong>接受 KLM 补偿（如现金 + 酒店），可能放弃 EU261 权利（取决于协议）</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* When You CANNOT Claim */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              ❌ 何时 <strong>不能</strong> 向 KLM 索赔？
            </h2>
            <Card className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                EU261 规定，如果延误/取消是由 <strong>"特殊情况"(Extraordinary Circumstances)</strong> 造成，且 KLM 已采取所有合理措施，则 <strong>无需支付赔偿</strong>（但仍需提供关怀义务：餐饮、住宿等）。
              </p>

              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-red-600 bg-red-50 dark:bg-red-900/20">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    1. 恶劣天气 (Severe Weather) ⚠️
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>真实特殊情况：</strong>暴风雪、飓风、火山灰、严重雷暴
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                    <p className="mb-2"><strong>✅ 特殊情况示例：</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• 阿姆斯特丹机场因大雪关闭 6 小时 = ✅ 特殊</li>
                      <li>• 目的地机场因台风关闭 = ✅ 特殊</li>
                    </ul>
                    <p className="mt-2 mb-2"><strong>❌ 非特殊情况示例：</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• 阿姆斯特丹"小雨"或"轻雾"，其他航班正常 = ❌ 非特殊</li>
                      <li>• KLM 称"天气"但未提供气象报告 = ❌ ClaimWinger 会调查</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-red-600 bg-red-50 dark:bg-red-900/20">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    2. 安全威胁 (Security Threats)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>示例：</strong>恐怖威胁、炸弹威胁、机场安全疏散、政治动荡导致空域关闭
                  </p>
                </Card>

                <Card className="p-4 border-l-4 border-red-600 bg-red-50 dark:bg-red-900/20">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    3. 空中交通管制 (ATC) 罢工或限制
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>注意：</strong>只有 <strong>ATC 罢工</strong> 是特殊情况，<strong>KLM 员工罢工 ≠ 特殊</strong>
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                    <p className="mb-2"><strong>✅ 特殊情况：</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• 法国 ATC 罢工导致欧洲航班大面积取消 = ✅ 特殊</li>
                      <li>• 欧控 (Eurocontrol) 空域容量限制 = ✅ 特殊</li>
                    </ul>
                    <p className="mt-2 mb-2"><strong>❌ 非特殊情况：</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• KLM 飞行员罢工 = ❌ 非特殊（航空公司内部问题）</li>
                      <li>• KLM 地勤人员罢工 = ❌ 非特殊</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-red-600 bg-red-50 dark:bg-red-900/20">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    4. 鸟击 (Bird Strike) - 视情况而定 ⚠️
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>ECJ 判例：</strong>鸟击本身 = 特殊情况，但如果 KLM 未能快速修复或提供备用飞机 = 可索赔
                  </p>
                </Card>

                <Card className="p-4 border-l-4 border-amber-600 bg-amber-50 dark:bg-amber-900/20">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    5. "隐藏制造缺陷" (Hidden Manufacturing Defect)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>特殊判例：</strong>制造商未披露的技术缺陷 = 特殊情况
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                    <p className="mb-2"><strong>示例：</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• 波音 737 MAX 全球停飞（制造缺陷）= ✅ 特殊</li>
                      <li>• 劳斯莱斯引擎召回（制造商指令）= ✅ 特殊</li>
                    </ul>
                    <p className="mt-2"><strong>⚠️ 但：</strong>常规技术故障（如液压泄漏、航电故障）= ❌ 非特殊</p>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-green-600 bg-green-50 dark:bg-green-900/20">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    ✅ 这些 <strong>不是</strong> 特殊情况（KLM 常用借口）
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>"技术故障"：</strong>99% 的技术问题 = ❌ 非特殊（KLM 维护责任）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>"机组疾病"：</strong>单个机组成员生病 = ❌ 非特殊（KLM 应有备用机组）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>"前序航班延误"：</strong>前一航班延误导致您的航班延误 = ❌ 非特殊（追溯根本原因）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>"史基浦机场拥堵"：</strong>常规拥堵 = ❌ 非特殊（可预见的运营环境）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>"航班合并"：</strong>KLM 合并两个航班以节省成本 = ❌ 非特殊（商业决策）</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>💡 ClaimWinger 优势：</strong>如果 KLM 声称"特殊情况"拒绝赔偿，我们会：<br/>
                    1. 要求 KLM 提供详细证据（气象报告、技术日志、ATC 文件）<br/>
                    2. 交叉核对 FlightRadar24、机场数据、其他航班状态<br/>
                    3. 如果 KLM 无法证明 = 向 ILT（荷兰监管机构）投诉<br/>
                    4. 必要时在荷兰法院起诉（我们承担法律费用）
                  </span>
                </p>
              </div>
            </Card>
          </section>

          {/* KLM Rejection Tactics */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
              🛡️ KLM 常见拒赔策略及 ClaimWinger 应对
            </h2>
            <Card className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                虽然 KLM 比 Ryanair/Wizzair 更愿意支付赔偿，但仍会使用某些策略拒绝或延迟支付。以下是 3 种最常见的拒赔策略及 ClaimWinger 的专业应对。
              </p>

              <div className="space-y-6">
                <Card className="p-4 border-l-4 border-orange-600">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                    策略 #1："史基浦机场拥堵/时刻限制"
                  </h3>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mb-4">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">KLM 的声称：</p>
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      "由于阿姆斯特丹史基浦机场拥堵和时刻协调限制，航班延误超出我们的控制，属于特殊情况。"
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">ClaimWinger 应对：</p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>论点 1：</strong>史基浦拥堵是 <strong>可预见的运营环境</strong> ≠ 特殊情况（ECJ 判例 C-294/10）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>论点 2：</strong>要求 KLM 提供 <strong>时刻协调员官方文件</strong>（ACNL - Airport Coordinator Netherlands）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>论点 3：</strong>核查 <strong>其他航空公司</strong>同时段是否也延误：只有 KLM 延误 = 运营问题</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>论点 4：</strong>如果 KLM 无法提供证据，向 ILT 投诉（ILT 通常支持乘客）</span>
                      </li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-purple-600">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-purple-600" />
                    策略 #2："我们提供了 Flying Blue 里程积分作为补偿"
                  </h3>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">KLM 的声称：</p>
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      "我们已经在您的 Flying Blue 账户中添加了 10,000 里程积分作为补偿，这已满足您的权利。"
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">ClaimWinger 应对：</p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>引用 EU261 Article 7(3)：</strong>赔偿必须以 <strong>现金、银行转账或支票</strong>形式支付（乘客选择）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>论点：</strong>Flying Blue 里程 = <strong>"商誉姿态"</strong> ≠ 法定赔偿</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>行动：</strong>您有权 <strong>拒绝里程积分</strong> 并要求 <strong>€600 现金</strong>（银行转账）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>法律函：</strong>ClaimWinger 发送正式法律函，要求 14 天内支付现金，否则向 ILT 投诉</span>
                      </li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-blue-600">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-blue-600" />
                    策略 #3："前序航班延误导致连锁反应"
                  </h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">KLM 的声称：</p>
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      "您的航班延误是由前一航班的技术问题引起的连锁反应，属于特殊情况。"
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">ClaimWinger 应对：</p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>追溯根本原因：</strong>如果前序航班延误是技术故障/机组问题 = 整个连锁反应 ≠ 特殊</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>备用飞机责任：</strong>KLM 应有 <strong>备用飞机和机组</strong>应急预案（ECJ 判例 C-549/07）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>引用判例 C-549/07 (Wallentin-Hermann)：</strong>"连锁反应"不自动 = 特殊情况</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>要求证据：</strong>要求 KLM 提供前序航班的 <strong>技术日志</strong> + 解释为何无备用飞机</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>ILT 投诉：</strong>如果 KLM 拒绝提供证据，向 ILT 投诉要求调查</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  为什么选择 ClaimWinger？
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>专业知识：</strong>我们熟悉所有 KLM 拒赔策略 + 应对判例法</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>荷兰法律专长：</strong>了解 ILT 程序和荷兰法院系统</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>98% 成功率：</strong>KLM 通常在 ILT 威胁下支付</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>无风险：</strong>不赢不收费 = 您无任何损失</span>
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* 5-Step Process */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              🚀 通过 ClaimWinger 索赔 KLM 赔偿的 5 步流程
            </h2>
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">免费航班检查 ✅</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      访问 ClaimWinger，输入您的 KLM 航班信息（航班号 + 日期）。我们的系统将立即告诉您：
                    </p>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                      <li>• 是否符合 EU261 条件</li>
                      <li>• 估计赔偿金额（€250/€400/€600）</li>
                      <li>• 成功概率（基于类似案例）</li>
                      <li>• 预计处理时间（通常 8-10 周）</li>
                    </ul>
                    <Button className="mt-4" asChild>
                      <a
                        href="https://claimwinger.com/check-claim?utm_source=lotproblem&utm_medium=blog&utm_campaign=klm-guide-zh&utm_content=step-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        立即免费检查
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">提交文件 📄</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      上传必要文件（我们的系统会指导您）：
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>登机牌或电子票：</strong>证明您乘坐该航班</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>护照复印件：</strong>证明身份（遮盖敏感信息）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>延误/取消证明：</strong>KLM 邮件/短信（如有）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>银行账户：</strong>SWIFT 转账到中国（我们支持中国银行）</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">ClaimWinger 协商 ⚖️</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      我们的法律团队用 <strong>英语和荷兰语</strong>联系 KLM 荷兰总部，处理所有沟通：
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>第 1 周：</strong>向 KLM 发送正式索赔信（引用 EU261 + 证据）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>第 2-4 周：</strong>KLM 回复（批准或拒绝）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>如果批准：</strong>KLM 支付 → 您收到钱（见第 5 步）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>如果拒绝：</strong>进入第 4 步（升级）</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">处理拒赔（如有）🛡️</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      如果 KLM 拒绝赔偿，我们不会放弃：
                    </p>
                    <div className="space-y-3">
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                        <p className="font-semibold mb-1">阶段 1：挑战 KLM 的理由</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          • 要求详细证据（技术日志、气象报告、ATC 文件）<br/>
                          • 交叉核对 FlightRadar24 + 其他数据源<br/>
                          • 引用 ECJ 判例法反驳 KLM 论点
                        </p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                        <p className="font-semibold mb-1">阶段 2：向 ILT 投诉</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          • 向 <strong>ILT（荷兰消费者保护局）</strong>提交正式投诉<br/>
                          • ILT 调查 + 通常站在乘客一方<br/>
                          • KLM 在 ILT 压力下通常支付（避免罚款）
                        </p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                        <p className="font-semibold mb-1">阶段 3：荷兰法院诉讼</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          • 在荷兰法院起诉 KLM（小额索赔法院）<br/>
                          • <strong>ClaimWinger 承担所有法律费用</strong>（您无风险）<br/>
                          • 98% 案件在法院前和解
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">5</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">收到赔偿！💰</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      KLM 支付后，您将收到款项：
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <p className="font-semibold mb-2">时间线：</p>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li><strong>平均 8-10 周：</strong>KLM 支付赔偿到 ClaimWinger</li>
                        <li><strong>24-48 小时：</strong>ClaimWinger 扣除费用后向您转账</li>
                        <li><strong>3-5 工作日：</strong>SWIFT 转账到达您的中国银行账户</li>
                      </ul>
                      <p className="font-semibold mt-4 mb-2">费用结构：</p>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>• <strong>成功费用：</strong>25% + VAT（通常）</li>
                        <li>• <strong>示例：</strong>€600 赔偿 → 扣费后您收到约 <strong>€450</strong></li>
                        <li>• <strong>不成功：</strong>€0 费用（完全无风险）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">准备好开始了吗？</h3>
                <p className="text-lg mb-6 text-blue-100">
                  2 分钟免费检查 → 8-10 周收到 €450+ → 零风险
                </p>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-8"
                  asChild
                >
                  <a
                    href="https://claimwinger.com/check-claim?utm_source=lotproblem&utm_medium=blog&utm_campaign=klm-guide-zh&utm_content=5-step-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    立即免费检查我的 KLM 航班
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </Card>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-purple-600" />
              ❓ 常见问题 (FAQ)
            </h2>
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Q1: 我持中国护照，KLM 阿姆斯特丹飞北京延误 5 小时，能索赔吗？
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> <strong>能！</strong>KLM 是欧盟航空公司，从欧盟（阿姆斯特丹）出发 = EU261 保护。到达延误 ≥3 小时 + 非特殊情况 = <strong>€600</strong>。中国护照不影响您的权利。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Q2: 我在伦敦转机飞北京，错过了 KLM 连接航班，能索赔吗？
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> <strong>取决于预订类型！</strong><br/>
                    • <strong>单张票</strong>（一次预订整个行程）= ✅ 能索赔（按总距离计算，通常 €600）<br/>
                    • <strong>两张分开的票</strong> = ❌ KLM 不负责第一程延误（但可以向第一程航空公司索赔）
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Q3: KLM 说"史基浦机场拥堵"不赔，我能怎么办？
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> <strong>通常可以索赔！</strong>史基浦拥堵是 <strong>可预见的运营环境</strong> ≠ 特殊情况。ClaimWinger 会：<br/>
                    1. 要求 KLM 提供时刻协调员官方文件<br/>
                    2. 核查其他航空公司是否也延误（只有 KLM = 运营问题）<br/>
                    3. 引用 ECJ 判例 C-294/10<br/>
                    4. 必要时向 ILT 投诉
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Q4: 我的票是东航 (MU)，但实际飞机是 KLM，能索赔吗？
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> <strong>能！</strong>关键看 <strong>实际承运人 (Operating Carrier)</strong>。检查登机牌底部："Operated by KLM" = ✅ EU261 保护。票号航空公司不重要，只看实际执飞。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Q5: KLM 提供了 Flying Blue 里程积分，我必须接受吗？
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> <strong>不必！</strong>EU261 Article 7(3) 规定您有权要求 <strong>现金</strong>（银行转账）。Flying Blue 里程 = "商誉姿态" ≠ 法定赔偿。ClaimWinger 会发律师函要求 <strong>€600 现金</strong>。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Q6: 索赔时限是多久？我的航班是 2 年前的。
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> <strong>荷兰法律：2 年。</strong>KLM 航班索赔时限 = 航班日期后 <strong>2 年</strong>内。示例：2024 年 2 月 1 日航班 → 可索赔至 2026 年 2 月 1 日。<strong>立即检查以免过期！</strong>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Q7: 从上海飞阿姆斯特丹（KLM 执飞）延误，能索赔吗？
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> <strong>能！</strong>虽然从中国出发（非欧盟），但因为 KLM = 欧盟航空公司 + 抵达欧盟（阿姆斯特丹）= EU261 保护！延误 ≥3h = €600。注意：如果是东航 (MU) 执飞从上海 → 阿姆斯特丹 = 不受保护（非欧盟航空公司从非欧盟出发）。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Q8: ClaimWinger 费用？中国乘客如何收款？
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> <strong>不赢不收费。</strong>通常 25% + VAT（从赔偿中扣除）。示例：KLM 支付 €600 → ClaimWinger 扣费 → 您收到约 <strong>€450</strong>。收款方式：SWIFT 银行转账到中国银行账户（3-5 工作日）。不成功 = €0 费用（完全无风险）。
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Authority Links */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              🔗 权威链接与资源
            </h2>
            <Card className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                以下是官方来源，您可以验证本指南中的所有信息：
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600">
                  <h3 className="font-bold text-lg mb-2">1. EU Regulation 261/2004 官方文本</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    欧盟 261/2004 法规完整版（荷兰航空公司适用）
                  </p>
                  <a
                    href="https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    → 访问 EUR-Lex 官方网站
                  </a>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-600">
                  <h3 className="font-bold text-lg mb-2">2. ILT（荷兰消费者保护局）- 乘客权利</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    ILT 是 KLM 的监管机构，处理投诉并执行 EU261
                  </p>
                  <a
                    href="https://www.ilent.nl/onderwerpen/passagiersrechten"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline text-sm"
                  >
                    → 访问 ILT 官方网站（荷兰语/英语）
                  </a>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-600">
                  <h3 className="font-bold text-lg mb-2">3. Your Europe - 乘客权利概览</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    欧盟官方乘客权利门户网站（多语言）
                  </p>
                  <a
                    href="https://europa.eu/youreurope/citizens/travel/passenger-rights/index_en.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline text-sm"
                  >
                    → 访问 Your Europe
                  </a>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-600">
                  <h3 className="font-bold text-lg mb-2">4. ECJ 判例法数据库</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    欧洲法院 (ECJ) 关于 EU261 的所有判决
                  </p>
                  <a
                    href="https://curia.europa.eu/juris/recherche.jsf?language=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline text-sm"
                  >
                    → 访问 CURIA（欧洲法院）
                  </a>
                </div>
              </div>
            </Card>
          </section>

          {/* Related Articles */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📚 相关文章</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  EU261/UK261 完整指南
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  了解欧盟和英国乘客权利法规的基础知识
                </p>
                <Button variant="outline" asChild>
                  <a href="/zh/blog/eu261-uk261-passenger-rights">
                    阅读更多 <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  中国公民 EU261 指南
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  中国护照持有者的欧盟航班赔偿权利详解
                </p>
                <Button variant="outline" asChild>
                  <a href="/zh/blog/chinese-citizens-eu261-compensation-guide">
                    阅读更多 <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  汉莎航空赔偿指南
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  汉莎航空延误/取消航班的赔偿流程
                </p>
                <Button variant="outline" asChild>
                  <a href="/zh/blog/lufthansa-delay-cancellation-compensation">
                    阅读更多 <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  英国航空赔偿指南
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  British Airways 航班延误/取消的 UK261 赔偿
                </p>
                <Button variant="outline" asChild>
                  <a href="/zh/blog/british-airways-compensation-guide">
                    阅读更多 <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </Card>
            </div>
          </section>

          {/* Final CTA */}
          <section>
            <Card className="p-8 bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 dark:from-orange-700 dark:via-purple-700 dark:to-blue-700 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">准备好索赔您的 KLM 赔偿了吗？</h2>
              <p className="text-xl mb-6 text-blue-100">
                不要让 KLM 的延误或取消成为您的损失。<br/>
                ClaimWinger 帮您争取应得的 €250-€600 EU261 赔偿。
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-blue-100">成功率</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-4xl font-bold mb-2">€450</div>
                  <div className="text-blue-100">平均赔偿（扣费后）</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-4xl font-bold mb-2">8-10周</div>
                  <div className="text-blue-100">平均处理时间</div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-blue-50 font-bold text-xl px-12 py-6 mb-4"
                asChild
              >
                <a
                  href="https://claimwinger.com/check-claim?utm_source=lotproblem&utm_medium=blog&utm_campaign=klm-guide-zh&utm_content=final-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  免费检查我的赔偿
                  <ArrowRight className="ml-2 w-6 h-6" />
                </a>
              </Button>
              <p className="text-sm text-blue-100">
                ✓ 2 分钟免费评估 | ✓ 无需信用卡 | ✓ 中文支持 | ✓ SWIFT 转账到中国
              </p>
            </Card>
          </section>
        </div>
      </article>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "headline": "荷兰皇家航空 (KLM) 延误或取消航班赔偿完整指南 2026",
                "description": "中国乘客如何获得 €250-€600 EU261 赔偿。阿姆斯特丹转机/北京/上海航线完整指南 + 史基浦机场特别提示。",
                "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=630&fit=crop",
                "datePublished": "2026-02-01",
                "dateModified": "2026-02-01",
                "author": {
                  "@type": "Organization",
                  "name": "ProblemLot.com"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "ProblemLot.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://problemlot.com/og-image.png"
                  }
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "我持中国护照，KLM 阿姆斯特丹飞北京延误 5 小时，能索赔吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "能！KLM 是欧盟航空公司，从欧盟（阿姆斯特丹）出发 = EU261 保护。到达延误 ≥3 小时 + 非特殊情况 = €600。中国护照不影响您的权利。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "我在伦敦转机飞北京，错过了 KLM 连接航班，能索赔吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "取决于预订类型！单张票（一次预订整个行程）= 能索赔（按总距离计算，通常 €600）。两张分开的票 = KLM 不负责第一程延误（但可以向第一程航空公司索赔）。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "KLM 说'史基浦机场拥堵'不赔，我能怎么办？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "通常可以索赔！史基浦拥堵是可预见的运营环境 ≠ 特殊情况。ClaimWinger 会要求 KLM 提供时刻协调员官方文件，核查其他航空公司是否也延误，引用 ECJ 判例，必要时向 ILT 投诉。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "我的票是东航 (MU)，但实际飞机是 KLM，能索赔吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "能！关键看实际承运人 (Operating Carrier)。检查登机牌底部：'Operated by KLM' = EU261 保护。票号航空公司不重要，只看实际执飞。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "KLM 提供了 Flying Blue 里程积分，我必须接受吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "不必！EU261 Article 7(3) 规定您有权要求现金（银行转账）。Flying Blue 里程 = '商誉姿态' ≠ 法定赔偿。ClaimWinger 会发律师函要求 €600 现金。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "索赔时限是多久？我的航班是 2 年前的。",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "荷兰法律：2 年。KLM 航班索赔时限 = 航班日期后 2 年内。示例：2024 年 2 月 1 日航班 → 可索赔至 2026 年 2 月 1 日。立即检查以免过期！"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "从上海飞阿姆斯特丹（KLM 执飞）延误，能索赔吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "能！虽然从中国出发（非欧盟），但因为 KLM = 欧盟航空公司 + 抵达欧盟（阿姆斯特丹）= EU261 保护！延误 ≥3h = €600。注意：如果是东航 (MU) 执飞从上海 → 阿姆斯特丹 = 不受保护（非欧盟航空公司从非欧盟出发）。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "ClaimWinger 费用？中国乘客如何收款？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "不赢不收费。通常 25% + VAT（从赔偿中扣除）。示例：KLM 支付 €600 → ClaimWinger 扣费 → 您收到约 €450。收款方式：SWIFT 银行转账到中国银行账户（3-5 工作日）。不成功 = €0 费用（完全无风险）。"
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
    </LayoutZh>
  );
}