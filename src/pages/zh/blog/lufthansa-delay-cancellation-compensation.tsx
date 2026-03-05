import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import { Plane, Clock, Euro, CheckCircle2, XCircle, AlertTriangle, ArrowRight, Scale, FileText } from "lucide-react";
import Link from "next/link";

export default function LufthansaCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="🇩🇪汉莎航空Lufthansa延误/取消索赔攻略【2026】€250-€600赔偿"
        description="✈️ 汉莎延误3小时+？立即索赔€600！法兰克福/慕尼黑转机中国乘客专用指南。真实案例分析、拒赔应对策略。3分钟了解全部流程 →"
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "汉莎航空Lufthansa延误/取消索赔攻略【2026】",
            "description": "汉莎航空航班延误或取消时，中国护照持有者如何获得 €250-€600 欧盟赔偿的完整指南。",
            "image": "https://lotproblem.pl/og-image.png",
            "author": {
              "@type": "Organization",
              "name": "LotProblem.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lotproblem.pl/og-image.png"
              }
            },
            "datePublished": "2026-02-25",
            "dateModified": "2026-02-25"
          })
        }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">首页</Link>
          <span className="mx-2">/</span>
          <Link href="/zh/blog/eu261-uk261-passenger-rights" className="hover:text-blue-600 dark:hover:text-blue-400">博客</Link>
          <span className="mx-2">/</span>
          <span>汉莎航空赔偿指南</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🇩🇪 汉莎航空Lufthansa延误/取消索赔攻略【2026】
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            法兰克福、慕尼黑飞中国航班的中国乘客如何获得 €250–€600 欧盟赔偿
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
            <span>📅 更新于：2026年2月25日</span>
            <span>⏱️ 阅读时间：8 分钟</span>
          </div>
        </header>

        {/* AI Overview - Featured Snippet Optimized */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 mb-8 border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-600" />
            🎯 核心真相（立即了解）
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p className="text-lg font-semibold">
              <strong>汉莎航空</strong>是欧盟航空公司（德国），受 <strong>EU 261/2004 法规</strong>保护。
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  ✅ 何时受保护
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• 所有<strong>从欧洲出发</strong>的汉莎航班</li>
                  <li>• 所有<strong>飞往欧洲</strong>的汉莎航班</li>
                  <li>• <strong>国籍不影响</strong> - 中国护照同样受保护</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                  <Euro className="w-5 h-5" />
                  💰 赔偿金额
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• 短途（≤1,500 km）：<strong>€250</strong></li>
                  <li>• 中途（1,500-3,500 km）：<strong>€400</strong></li>
                  <li>• 长途（&gt;3,500 km）：<strong>€600</strong></li>
                  <li className="text-green-600 dark:text-green-400 font-semibold">✓ 所有中国航线 = €600！</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📋 目录</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><a href="#when-protected" className="hover:text-blue-600 dark:hover:text-blue-400">1. 何时受 EU261 保护？</a></li>
            <li><a href="#china-routes" className="hover:text-blue-600 dark:hover:text-blue-400">2. 汉莎航空中国航线赔偿金额</a></li>
            <li><a href="#conditions" className="hover:text-blue-600 dark:hover:text-blue-400">3. 延误/取消赔偿条件</a></li>
            <li><a href="#not-eligible" className="hover:text-blue-600 dark:hover:text-blue-400">4. 哪些情况不能索赔？</a></li>
            <li><a href="#claimwinger" className="hover:text-blue-600 dark:hover:text-blue-400">5. 为什么选择 ClaimWinger？</a></li>
            <li><a href="#claim-process" className="hover:text-blue-600 dark:hover:text-blue-400">6. 索赔流程（5 步）</a></li>
            <li><a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400">7. 常见问题</a></li>
          </ul>
        </nav>

        {/* Section 1: When Protected */}
        <section id="when-protected" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Scale className="w-8 h-8 text-blue-600" />
            1. 何时受 EU261 保护？
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>汉莎航空（Lufthansa）</strong>是德国航空公司，总部位于科隆，属于<strong>欧盟成员国航空公司</strong>。
              根据 <a href="https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EU 261/2004 法规</a>，
              汉莎航空的所有航班都受到欧盟乘客权利保护。
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                ✅ 汉莎航空航班受保护的情况
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>所有从欧盟出发的汉莎航班</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      例如：法兰克福 → 北京、慕尼黑 → 上海、法兰克福 → 广州
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>所有飞往欧盟的汉莎航班</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      例如：北京 → 法兰克福、上海 → 慕尼黑、广州 → 法兰克福
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>汉莎代码共享航班（由汉莎执飞）</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      例如：国航航班号，但由汉莎飞机执飞（LH 开头的航班号）
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>无论乘客国籍</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      中国护照、美国护照、任何国籍 - 权利完全相同！
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-6">
              <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-3">
                📖 法律依据
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                "本条例适用于从位于成员国领土内的机场出发的航班的乘客……或从第三国机场出发飞往位于成员国领土内的机场的航班的乘客，
                如果该航班由共同体承运人运营。"
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-2">
                来源：<a href="https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EU 261/2004，第 3 条</a>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: China Routes Compensation */}
        <section id="china-routes" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Plane className="w-8 h-8 text-blue-600" />
            2. 汉莎航空中国航线赔偿金额
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>好消息：</strong>所有汉莎航空的中国航线距离均超过 3,500 公里，属于<strong>长途航班类别</strong>，
              符合赔偿条件时可获得<strong>最高 €600 赔偿</strong>！
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-3 text-left">航线</th>
                    <th className="p-3 text-left">航班号示例</th>
                    <th className="p-3 text-left">距离</th>
                    <th className="p-3 text-left">赔偿金额</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <td className="p-3">
                      <strong>法兰克福 ↔ 北京</strong>
                      <div className="text-sm text-gray-600 dark:text-gray-400">FRA ↔ PEK</div>
                    </td>
                    <td className="p-3">LH720 / LH721</td>
                    <td className="p-3">~7,800 km</td>
                    <td className="p-3">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full font-bold">
                        €600
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <td className="p-3">
                      <strong>慕尼黑 ↔ 北京</strong>
                      <div className="text-sm text-gray-600 dark:text-gray-400">MUC ↔ PEK</div>
                    </td>
                    <td className="p-3">LH722 / LH723</td>
                    <td className="p-3">~7,800 km</td>
                    <td className="p-3">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full font-bold">
                        €600
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <td className="p-3">
                      <strong>法兰克福 ↔ 上海</strong>
                      <div className="text-sm text-gray-600 dark:text-gray-400">FRA ↔ PVG</div>
                    </td>
                    <td className="p-3">LH728 / LH729</td>
                    <td className="p-3">~8,900 km</td>
                    <td className="p-3">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full font-bold">
                        €600
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <td className="p-3">
                      <strong>慕尼黑 ↔ 上海</strong>
                      <div className="text-sm text-gray-600 dark:text-gray-400">MUC ↔ PVG</div>
                    </td>
                    <td className="p-3">LH726 / LH727</td>
                    <td className="p-3">~8,700 km</td>
                    <td className="p-3">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full font-bold">
                        €600
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <td className="p-3">
                      <strong>法兰克福 ↔ 广州</strong>
                      <div className="text-sm text-gray-600 dark:text-gray-400">FRA ↔ CAN</div>
                    </td>
                    <td className="p-3">LH732 / LH733</td>
                    <td className="p-3">~9,200 km</td>
                    <td className="p-3">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full font-bold">
                        €600
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <td className="p-3">
                      <strong>慕尼黑 ↔ 南京</strong>
                      <div className="text-sm text-gray-600 dark:text-gray-400">MUC ↔ NKG</div>
                    </td>
                    <td className="p-3">LH780 / LH781</td>
                    <td className="p-3">~8,400 km</td>
                    <td className="p-3">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full font-bold">
                        €600
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <td className="p-3">
                      <strong>慕尼黑 ↔ 青岛</strong>
                      <div className="text-sm text-gray-600 dark:text-gray-400">MUC ↔ TAO</div>
                    </td>
                    <td className="p-3">LH786 / LH787</td>
                    <td className="p-3">~8,600 km</td>
                    <td className="p-3">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full font-bold">
                        €600
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    <td className="p-3">
                      <strong>法兰克福 ↔ 沈阳</strong>
                      <div className="text-sm text-gray-600 dark:text-gray-400">FRA ↔ SHE</div>
                    </td>
                    <td className="p-3">LH782 / LH783</td>
                    <td className="p-3">~7,700 km</td>
                    <td className="p-3">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full font-bold">
                        €600
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 my-6">
              <h3 className="text-xl font-bold mb-3">💡 重要提示</h3>
              <p className="text-purple-100">
                <strong>所有上述航线均属于长途类别（距离超过 3,500 km）</strong>，这意味着如果您的汉莎航空航班延误到达超过 3 小时或被取消（且非特殊情况），
                您有权获得<strong>最高 €600 赔偿</strong> - 这是 EU261 法规下的最高金额。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Conditions */}
        <section id="conditions" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Clock className="w-8 h-8 text-blue-600" />
            3. 延误/取消赔偿条件
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Delay Conditions */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                延误赔偿条件
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>到达延误 ≥ 3 小时</strong>（非起飞延误）</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>航班由<strong>汉莎航空运营</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>非"<strong>特殊情况</strong>"导致</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>您按时<strong>办理值机</strong></span>
                </li>
              </ul>
              <div className="mt-4 bg-white dark:bg-gray-800 rounded p-4">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">💰 长途赔偿金额（所有中国航线）：</p>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• 延误 3–4 小时：<strong>€300</strong>（50% 减免）</li>
                  <li>• 延误 4+ 小时：<strong>€600</strong>（全额）</li>
                </ul>
              </div>
            </div>

            {/* Cancellation Conditions */}
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                取消赔偿条件
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>航班<strong>被汉莎取消</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>提前<strong>少于 14 天</strong>通知</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>未提供<strong>合理替代航班</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>非"<strong>特殊情况</strong>"导致</span>
                </li>
              </ul>
              <div className="mt-4 bg-white dark:bg-gray-800 rounded p-4">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">💰 取消赔偿金额（所有中国航线）：</p>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• 取消且无合理替代：<strong>€600</strong></li>
                  <li>• 加：改签费用/退票权利</li>
                  <li>• 加：免费照顾（餐饮、酒店等）</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              什么是"特殊情况"？
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              "特殊情况"是指航空公司无法控制的情况，即使采取所有合理措施也无法避免。这些情况下，汉莎航空<strong>不需要支付赔偿</strong>（但仍需提供照顾）。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ 常见特殊情况：</h4>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• 恶劣天气（暴风雪、台风等）</li>
                  <li>• 机场罢工（非汉莎员工）</li>
                  <li>• 空中交通管制限制</li>
                  <li>• 政治动荡、安全威胁</li>
                  <li>• 鸟击等突发事件</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">❌ 不是特殊情况：</h4>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• 技术故障（计划维护）</li>
                  <li>• 汉莎员工罢工</li>
                  <li>• 机组人员生病/延误</li>
                  <li>• 燃料不足</li>
                  <li>• 航班调度问题</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Not Eligible */}
        <section id="not-eligible" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <XCircle className="w-8 h-8 text-red-600" />
            4. 哪些情况不能索赔？
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              诚实很重要 - 并非所有延误或取消都能获得赔偿。以下是<strong>不符合赔偿条件</strong>的常见情况：
            </p>

            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ 特殊情况导致的延误/取消
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>示例：</strong>法兰克福机场因暴风雪关闭，导致您的汉莎航班取消。这属于"特殊情况"，汉莎无需支付赔偿（但需提供免费照顾：餐饮、酒店等）。
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ 到达延误少于 3 小时
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>示例：</strong>您的 LH720（法兰克福-北京）延误 2 小时 45 分钟到达。虽然令人沮丧，但不符合 3 小时阈值，无金钱赔偿。
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ 您错过登机
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>示例：</strong>您迟到未能按时办理值机或登机，导致错过航班。这是乘客责任，无赔偿。
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ 取消前 14+ 天收到通知
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>示例：</strong>汉莎在起飞前 20 天通知您航班取消并提供替代航班。提前通知超过 14 天，通常无赔偿（除非替代航班时间差异很大）。
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ 您接受了替代航班且到达时间差异小
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>示例：</strong>您的航班被取消，但汉莎提供了替代航班，到达时间仅比原计划晚 2 小时。这可能减少或免除赔偿义务。
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">💡 不确定您的情况？</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                航空法规复杂，每种情况都不同。如果您不确定是否有资格获得赔偿，<strong>免费检查您的航班</strong> - 只需 3 分钟！
              </p>
              <a
                href="https://claimwinger.com/delayed-flight"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                免费检查我的航班 <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 5: ClaimWinger Benefits */}
        <section id="claimwinger" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            5. 为什么选择 ClaimWinger 帮助索赔？
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              虽然您可以自己向汉莎航空索赔，但航空公司通常会拒绝或延迟处理个人索赔。
              <strong>ClaimWinger 专门帮助像您这样的乘客对抗航空公司</strong>，成功率高达 98%。
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-2 border-green-200 dark:border-green-800">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">98% 成功率</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  我们法律团队拥有处理数千起汉莎案件的经验，熟悉航空公司的所有拒赔套路和反驳策略。
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-2 border-blue-200 dark:border-blue-800">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">无风险 - 只在成功后收费</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  我们的服务费仅在成功获得赔偿后收取（通常为 25% + 增值税）。<strong>不成功不收费</strong> - 您没有任何损失！
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border-2 border-purple-200 dark:border-purple-800">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">8–12 周获得赔偿</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  我们处理所有法律程序，包括与汉莎沟通、必要时提起法院诉讼。您只需等待赔偿到账。
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">✅ 专为中国乘客设计的服务</h3>
              <ul className="space-y-3 text-blue-50">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">中文支持</strong> - 我们与提供中文咨询的合作伙伴合作，消除语言障碍
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">接受中国银行账户</strong> - 赔偿可直接转账至您的中国银行账户
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">无需欧盟身份</strong> - 只需护照复印件和登机牌，无需居留证或签证
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">我们处理所有沟通</strong> - 您无需与汉莎直接交涉，我们代表您处理
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">对抗"国籍拒赔"</strong> - 我们熟悉针对中国乘客的常见非法拒赔理由
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="https://claimwinger.com/delayed-flight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  开始索赔流程 <ArrowRight className="w-6 h-6" />
                </a>
                <p className="text-blue-200 text-sm mt-3">✓ 3 分钟快速检查　✓ 无风险　✓ 98% 成功率</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Claim Process */}
        <section id="claim-process" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-600" />
            6. 索赔流程（5 步）
          </h2>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-blue-600 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">免费检查您的航班</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    访问 <a href="https://claimwinger.com/delayed-flight" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">ClaimWinger</a>，
                    输入您的航班信息（航班号、日期）。系统会立即告诉您是否有资格获得赔偿以及金额。<strong>完全免费，无需注册。</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-blue-600 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">提交索赔</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    如果有资格，填写简短表格并上传文件：<br />
                    • 登机牌或电子客票<br />
                    • 护照复印件<br />
                    • 汉莎的延误/取消通知（邮件/短信）<br />
                    <strong>只需 5 分钟！</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-blue-600 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">我们与汉莎交涉</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    ClaimWinger 的法律团队代表您向汉莎航空提出正式索赔。我们处理所有沟通、法律文件和谈判。<strong>您无需做任何事情！</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-blue-600 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">必要时提起法律诉讼</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    如果汉莎拒绝或忽视索赔，我们会在法院提起诉讼（无需您出庭）。<strong>这一切都包含在我们的无风险服务中 - 对您没有额外费用。</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 border-l-4 border-green-700 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-white text-green-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">您收到赔偿！</h3>
                  <p className="text-green-50">
                    通常在 8–12 周内，赔偿金（€250–€600）会转入您的银行账户。我们扣除服务费（通常为 25% + 增值税），剩余部分全部归您！
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>💡 提示：</strong>保留所有与航班相关的文件（登机牌、汉莎邮件、机场公告照片）。
              这些是证明延误/取消的关键证据，会加快索赔流程。
            </p>
            <a
              href="https://claimwinger.com/delayed-flight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              立即开始索赔 <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            7. 常见问题（FAQ）
          </h2>

          <div className="space-y-4">
            <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md group">
              <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                <span>我持中国护照，乘坐汉莎航空从北京到法兰克福的航班延误了 5 小时，能索赔吗？</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>可以！</strong>汉莎航空是欧盟航空公司，飞往欧盟（德国），因此您的航班受 EU261 保护。到达延误超过 3 小时且非特殊情况，您有权获得 <strong>€600 赔偿</strong>（北京-法兰克福距离超过 3,500 公里）。您的中国护照完全不影响您的索赔权利。
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md group">
              <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                <span>我的航班号是 CA 开头（国航），但由汉莎执飞，能索赔吗？</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>取决于实际执飞航空公司。</strong>如果您的机票显示航班号为 CA（国航），但实际由汉莎航空的飞机执飞（代码共享），<strong>通常适用执飞航空公司的法规</strong>。如果汉莎执飞且航班符合 EU261 路线条件，您受保护。检查登机牌上的"操作承运人"（Operating Carrier）字段 - 如果是 LH（汉莎），您受 EU261 保护。
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md group">
              <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                <span>汉莎会因为我是中国公民而拒绝赔偿吗？</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>不会，这是违法的！</strong>根据 EU261 法规第 3 条，赔偿权利<strong>不受乘客国籍影响</strong>。如果您的航班符合条件，汉莎航空必须支付赔偿 - 无论您持有哪国护照。若汉莎以国籍为由拒赔，这是违反欧盟法律的，您可向德国民航局（LBA）或欧洲消费者中心投诉。<strong>ClaimWinger 熟悉这种非法拒赔套路，会代表您坚决对抗。</strong>
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md group">
              <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                <span>如果汉莎说延误是因为"技术问题"，还能索赔吗？</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>通常可以！</strong>大多数技术问题<strong>不属于"特殊情况"</strong>，因为航空公司有责任维护飞机。只有"突发且不可预见"的技术故障（如飞行中突然损坏的关键部件）才可能免除赔偿义务。<strong>计划维护、已知故障、备件短缺等都不是特殊情况。</strong>汉莎常以此为由拒赔，但 ClaimWinger 会要求他们提供详细证据证明故障的"特殊"性质。
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md group">
              <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                <span>我需要提供什么文件来索赔？</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>需要以下文件：</strong><br />
                1. <strong>登机牌</strong>或电子客票确认（PDF 或照片）<br />
                2. <strong>护照复印件</strong>（显示您的姓名和国籍）<br />
                3. <strong>航班延误/取消证明</strong>（汉莎的邮件、短信、机场公告照片等）<br />
                4. <strong>银行账户信息</strong>（接收赔偿转账）<br />
                <strong>不需要：</strong>欧盟签证、居留证、旅行保险单。ClaimWinger 会指导您准备所有必要文件。
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md group">
              <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                <span>如果我已经接受了汉莎的代金券或改签，还能索赔吗？</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>通常可以！</strong>接受改签或代金券<strong>不放弃您的赔偿权利</strong> - 除非您明确签署了"放弃赔偿"的文件（很少见）。EU261 赔偿是<strong>法定权利</strong>，与航空公司提供的照顾（餐饮、酒店、改签）或代金券<strong>分开且独立</strong>。即使您已改签到其他航班，只要原航班延误/取消符合条件，您仍可索赔。
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md group">
              <summary className="font-bold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                <span>索赔有时间限制吗？</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>有，但时间很长。</strong>索赔时效取决于航班出发国/到达国的法律。在<strong>德国（汉莎总部）</strong>，时效为<strong>3 年</strong>。这意味着即使您的航班是几年前的，只要在时效内，仍可索赔。<strong>建议尽早索赔</strong>，因为越早提交，证据越充分，处理越快。
              </p>
            </details>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📚 相关文章</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/zh/blog/eu261-uk261-passenger-rights" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                EU261/UK261 乘客权利完整指南
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                了解欧盟和英国航班赔偿法规的所有细节，包括资格条件、赔偿金额和索赔流程。
              </p>
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">阅读更多 →</span>
            </Link>

            <Link href="/zh/blog/chinese-citizens-eu261-compensation-guide" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                中国公民 EU261 赔偿完整指南
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                打破最大误解：护照国籍不影响赔偿权利！了解中国公民如何获得欧盟航班赔偿。
              </p>
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">阅读更多 →</span>
            </Link>

            <Link href="/zh/blog/beijing-capital-delayed-flight-compensation" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                北京首都机场延误航班赔偿
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                从北京首都机场出发或到达的航班延误？了解何时可以获得 €250-€600 赔偿。
              </p>
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">阅读更多 →</span>
            </Link>

            <Link href="/zh/blog/beijing-capital-cancelled-flight-compensation" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                北京首都机场取消航班赔偿
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                北京首都机场航班被取消？了解您的权利和如何获得最高 €600 赔偿。
              </p>
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">阅读更多 →</span>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">准备索赔您的汉莎航空赔偿了吗？</h2>
          <p className="text-xl text-blue-100 mb-6">
            免费检查您的航班资格 - 只需 3 分钟！无风险，只在成功后收费。
          </p>
          <div className="text-center">
            <Link
              href="https://claimwinger.com/zh?utm_source=blog&utm_medium=article&utm_campaign=lufthansa_china"
              className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              立即查询
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            ✓ 无风险 - 只在成功后收费　✓ 3 分钟快速检查　✓ 98% 成功率
          </p>
        </div>
      </article>

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
                "name": "我持中国护照，乘坐汉莎航空从北京到法兰克福的航班延误了 5 小时，能索赔吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以！汉莎航空是欧盟航空公司，飞往欧盟（德国），因此您的航班受 EU261 保护。到达延误超过 3 小时且非特殊情况，您有权获得 €600 赔偿（北京-法兰克福距离超过 3,500 公里）。您的中国护照完全不影响您的索赔权利。"
                }
              },
              {
                "@type": "Question",
                "name": "我的航班号是 CA 开头（国航），但由汉莎执飞，能索赔吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "取决于实际执飞航空公司。如果您的机票显示航班号为 CA（国航），但实际由汉莎航空的飞机执飞（代码共享），通常适用执飞航空公司的法规。如果汉莎执飞且航班符合 EU261 路线条件，您受保护。检查登机牌上的操作承运人字段 - 如果是 LH（汉莎），您受 EU261 保护。"
                }
              },
              {
                "@type": "Question",
                "name": "汉莎会因为我是中国公民而拒绝赔偿吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "不会，这是违法的！根据 EU261 法规第 3 条，赔偿权利不受乘客国籍影响。如果您的航班符合条件，汉莎航空必须支付赔偿 - 无论您持有哪国护照。若汉莎以国籍为由拒赔，这是违反欧盟法律的，您可向德国民航局或欧洲消费者中心投诉。"
                }
              },
              {
                "@type": "Question",
                "name": "如果汉莎说延误是因为技术问题，还能索赔吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "通常可以！大多数技术问题不属于特殊情况，因为航空公司有责任维护飞机。只有突发且不可预见的技术故障（如飞行中突然损坏的关键部件）才可能免除赔偿义务。计划维护、已知故障、备件短缺等都不是特殊情况。"
                }
              },
              {
                "@type": "Question",
                "name": "我需要提供什么文件来索赔？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "需要以下文件：1. 登机牌或电子客票确认；2. 护照复印件；3. 航班延误/取消证明（汉莎的邮件、短信、机场公告照片等）；4. 银行账户信息（接收赔偿转账）。不需要欧盟签证、居留证或旅行保险单。"
                }
              },
              {
                "@type": "Question",
                "name": "如果我已经接受了汉莎的代金券或改签，还能索赔吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "通常可以！接受改签或代金券不放弃您的赔偿权利 - 除非您明确签署了放弃赔偿的文件。EU261 赔偿是法定权利，与航空公司提供的照顾或代金券分开且独立。即使您已改签到其他航班，只要原航班延误/取消符合条件，您仍可索赔。"
                }
              },
              {
                "@type": "Question",
                "name": "索赔有时间限制吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "有，但时间很长。在德国（汉莎总部），时效为 3 年。这意味着即使您的航班是几年前的，只要在时效内，仍可索赔。建议尽早索赔，因为越早提交，证据越充分，处理越快。"
                }
              }
            ]
          })
        }}
      />
    </LayoutZh>
  );
}