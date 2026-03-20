import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { AlertCircle, XCircle, CheckCircle, Plane, ArrowRight, Scale, FileText, MessageCircle } from "lucide-react";

export default function ChineseAirlinesChinaDepartureNoEU261() {
  return (
    <LayoutZh>
      <SEO 
        title="中国航司从中国出发无法申请EU261【2026】国航/东航/南航延误为何不受保护？"
        description="为什么从中国出发乘坐中国航空公司的航班（国航、东航、南航）即使飞往欧洲也无法申请EU 261/2004赔偿？完整法律解释+替代方案指南"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⚠️ 法律限制
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            从中国出发乘坐中国航空公司<br/>
            <span className="text-red-600">为什么无法申请EU 261/2004赔偿？</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              法律解读
            </span>
            <span>•</span>
            <span>阅读时间：8分钟</span>
            <span>•</span>
            <span>更新于：2026年2月</span>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>核心问题：</strong>即使您乘坐的是从北京/上海/广州飞往巴黎/法兰克福/阿姆斯特丹的航班，如果运营航空公司是<strong className="text-red-600">中国航空公司</strong>（国航、东航、南航等），您<strong className="text-red-600">无法申请€250-€600的EU 261赔偿</strong>。本文将详细解释法律原因和替代方案。
            </p>
          </div>
        </header>

        {/* Quick Answer */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <AlertCircle className="w-7 h-7 text-red-600" />
            快速回答：为什么中国航司不受EU 261保护？
          </h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed mb-4">
                <strong>EU 261/2004第3条第1款明确规定：</strong>
              </p>
              <div className="bg-white p-4 rounded-lg border border-red-200 italic text-gray-700 mb-4">
                "本法规适用于：<br/>
                (a) 从成员国境内机场出发的航班；<br/>
                <span className="text-red-600 font-semibold">(b) 从第三国机场出发飞往成员国的航班，前提是运营航空公司是欧盟航空公司。</span>"
              </div>
              <p className="text-gray-800 leading-relaxed">
                这意味着：中国航空公司从中国出发的航班<strong className="text-red-600">不符合(a)条款</strong>（因为不是从EU出发），也<strong className="text-red-600">不符合(b)条款</strong>（因为不是EU航空公司）。因此<strong>完全不受EU 261保护</strong>。
              </p>
            </div>
          </div>
        </section>

        {/* Visual Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Scale className="w-8 h-8 text-blue-600" />
            视觉对比：为什么同一家航司待遇不同？
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Not Protected */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-red-300 overflow-hidden">
              <div className="bg-red-500 text-white p-4">
                <div className="flex items-center justify-center gap-2 font-bold text-lg">
                  <XCircle className="w-6 h-6" />
                  ❌ 不受保护
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-center">
                  <Plane className="w-12 h-12 mx-auto text-red-500 mb-3" />
                  <p className="font-bold text-lg text-gray-900 mb-2">
                    🇨🇳 中国航司 · 从中国出发
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <p><strong>国航 CA934：</strong>北京→慕尼黑</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <p><strong>东航 MU551：</strong>上海→法兰克福</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <p><strong>南航 CZ347：</strong>广州→阿姆斯特丹</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <p className="text-gray-700 font-medium">
                    ⚠️ <strong>不符合EU 261/2004任何条款</strong>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    既不是从EU出发 (条款a)，<br/>
                    也不是EU航空公司 (条款b)
                  </p>
                </div>
              </div>
            </div>

            {/* Protected */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-green-300 overflow-hidden">
              <div className="bg-green-500 text-white p-4">
                <div className="flex items-center justify-center gap-2 font-bold text-lg">
                  <CheckCircle className="w-6 h-6" />
                  ✅ 受保护
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-center">
                  <Plane className="w-12 h-12 mx-auto text-green-500 mb-3 transform rotate-180" />
                  <p className="font-bold text-lg text-gray-900 mb-2">
                    🇨🇳 同一家航司 · 从欧洲出发
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p><strong>国航 CA933：</strong>慕尼黑→北京</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p><strong>东航 MU552：</strong>法兰克福→上海</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p><strong>南航 CZ348：</strong>阿姆斯特丹→广州</p>
                  </div>
                </div>
                <div className="bg-green-100 rounded-lg p-4 text-center">
                  <p className="text-green-800 font-medium">
                    ✅ <strong>完全受EU 261/2004保护！</strong>
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    符合条款(a)：从EU成员国出发<br/>
                    延误≥3小时→€250-€600赔偿
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-gray-800 leading-relaxed">
              <strong>💡 关键区别：</strong>同一家航空公司（如国航CA）、同一条航线（北京↔慕尼黑），仅因为<strong className="text-blue-600">出发地点不同</strong>，法律保护就完全不同！这就是EU 261属地管辖原则的体现。
            </p>
          </div>
        </section>

        {/* All Chinese Airlines */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Plane className="w-7 h-7 text-gray-700" />
            所有中国主要航空公司从中国出发均不受保护
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "中国国际航空 (Air China)", code: "CA", example: "CA934 北京→慕尼黑" },
              { name: "中国东方航空 (China Eastern)", code: "MU", example: "MU551 上海→法兰克福" },
              { name: "中国南方航空 (China Southern)", code: "CZ", example: "CZ347 广州→阿姆斯特丹" },
              { name: "海南航空 (Hainan Airlines)", code: "HU", example: "HU481 北京→布鲁塞尔" },
              { name: "四川航空 (Sichuan Airlines)", code: "3U", example: "3U8101 成都→布拉格" },
              { name: "厦门航空 (Xiamen Air)", code: "MF", example: "MF861 厦门→阿姆斯特丹" }
            ].map((airline, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{airline.name}</p>
                    <p className="text-sm text-gray-600">代码：{airline.code}</p>
                    <p className="text-sm text-red-600 mt-1">示例：{airline.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>⚠️ 注意：</strong>即使这些航空公司与欧洲航司代码共享（Codeshare），如果<strong>实际运营航班的是中国航司</strong>（Operating Carrier），从中国出发仍不受EU 261保护。检查机票上的"Operated by"！
            </p>
          </div>
        </section>

        {/* Alternative Rights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <FileText className="w-8 h-8 text-orange-600" />
            替代方案：您仍有其他权利！
          </h2>

          <div className="space-y-6">
            {/* Chinese Law */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                🇨🇳 中国法律保护（有限）
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">《民航旅客国内运输服务管理规定》（2020）</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>航班延误≥4小时：航空公司应提供<strong>餐食和住宿</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>航班取消：可选择<strong>全额退票或改签</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong className="text-red-600">无固定现金赔偿标准</strong>（与EU 261最大区别）</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    <strong>⚠️ 现实问题：</strong>中国法律对"延误赔偿金额"无明确规定，各航司自主决定（通常为¥200-800代金券），远低于EU 261的€250-€600现金标准。
                  </p>
                </div>
              </div>
            </div>

            {/* Airline Policy */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                ✈️ 航空公司自愿政策
              </h3>
              <div className="space-y-3">
                <p className="text-gray-700">部分中国航司在国际航线上提供自愿补偿（但不保证）：</p>
                <div className="grid gap-3">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">🎫 代金券补偿</p>
                    <p className="text-sm text-gray-600">延误≥4小时：¥200-500代金券（需在1年内使用）</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">🏨 住宿和餐食</p>
                    <p className="text-sm text-gray-600">过夜延误：提供酒店和次日餐食</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">💰 现金补偿（罕见）</p>
                    <p className="text-sm text-gray-600">仅限特殊情况协商，金额通常¥300-1000</p>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>💡 提示：</strong>这些补偿<strong>不是法律义务</strong>，航司可以拒绝。与EU 261的法定€600赔偿相比，差距巨大。
                  </p>
                </div>
              </div>
            </div>

            {/* Travel Insurance */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                🛡️ 旅行保险索赔
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  如果您购买了<strong>航班延误险</strong>，可能可以获得保险理赔（通常¥200-2000）：
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-3">常见理赔条件：</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>延误时间≥4-6小时（具体看保单）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>提供航司延误证明（盖章）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>登机牌、机票行程单等原始凭证</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-red-600">不覆盖恶劣天气等"不可抗力"</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <p className="text-sm text-gray-700">
                    <strong>⚠️ 注意：</strong>保险理赔<strong>不能替代EU 261赔偿</strong>。如果您的航班实际上受EU 261保护（如欧洲航司从中国出发），应优先申请€600赔偿，保险作为补充。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Avoid */}
        <section className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <MessageCircle className="w-7 h-7 text-blue-600" />
            💡 未来如何避免这个问题？
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">购票时优先选择欧洲航空公司</h3>
              <p className="text-gray-700 mb-4">
                如果您希望获得<strong>完整EU 261保护</strong>（€250-€600现金赔偿），建议选择：
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { airline: "汉莎航空 (Lufthansa)", code: "LH", route: "北京/上海→欧洲" },
                  { airline: "法国航空 (Air France)", code: "AF", route: "北京/上海→巴黎" },
                  { airline: "荷兰航空 (KLM)", code: "KL", route: "上海/广州→阿姆斯特丹" },
                  { airline: "芬兰航空 (Finnair)", code: "AY", route: "北京/上海→赫尔辛基" },
                  { airline: "波兰航空 (LOT)", code: "LO", route: "北京→华沙" },
                  { airline: "英国航空 (British Airways)", code: "BA", route: "上海→伦敦" }
                ].map((item, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="font-semibold text-gray-900 text-sm">{item.airline}</p>
                    <p className="text-xs text-gray-600">代码：{item.code} | {item.route}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-green-100 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>✅ 双向保护：</strong>这些欧洲航司的中国↔欧洲航线，<strong>无论哪个方向</strong>都受EU 261保护！
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">检查代码共享航班的实际运营商</h3>
              <p className="text-gray-700 mb-3">
                有时您购买的是"汉莎航空LH"机票，但实际运营商（Operating Carrier）是国航CA：
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-sm text-gray-800 mb-2">
                  <strong>示例：</strong>LH9999 北京→法兰克福<br/>
                  <span className="text-red-600">Operated by: Air China CA9999</span>
                </p>
                <p className="text-sm text-gray-700">
                  → 因为实际运营商是中国航司且从中国出发，<strong className="text-red-600">不受EU 261保护</strong>！
                </p>
              </div>
              <div className="mt-3 bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>💡 如何检查：</strong>预订时查看"Operated by"字段，或致电航司确认实际执飞公司。只有<strong>实际运营商是EU航司</strong>才受保护。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Case */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            💼 真实案例：为什么无法申请赔偿
          </h2>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-100 rounded-full p-3">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-2">
                  乘客王先生 · 2025年12月 · 国航CA934
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>航线：</strong>北京首都机场 (PEK) → 慕尼黑机场 (MUC)</p>
                  <p><strong>延误：</strong>5小时20分（机械故障）</p>
                  <p><strong>期望：</strong>根据距离4000公里，申请€600赔偿</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-red-300">
              <p className="font-semibold text-red-600 mb-2">❌ 申请被拒原因：</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                国航回复："您的航班<strong>从中国境内出发</strong>，且运营航空公司为<strong>非欧盟注册航司</strong>（中国国际航空），根据<strong>EU 261/2004第3条</strong>，本航班<strong>不在该法规管辖范围内</strong>。我们仅根据中国民航局相关规定提供¥300代金券作为服务补偿。"
              </p>
            </div>
            <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-sm text-gray-700">
                <strong>💡 如果王先生购买的是同一航线的<span className="text-blue-600">返程航班 CA933（慕尼黑→北京）</span></strong>，因为<strong>从欧盟出发</strong>，他将获得完整€600赔偿权利！
              </p>
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            📊 总结对比：中国航司 vs. 欧洲航司
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">对比项目</th>
                  <th className="px-6 py-4 text-left font-semibold">🇨🇳 中国航司从中国出发</th>
                  <th className="px-6 py-4 text-left font-semibold">🇪🇺 欧洲航司从中国出发</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">EU 261保护</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-red-600 font-semibold">
                      <XCircle className="w-4 h-4" /> 不受保护
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
                      <CheckCircle className="w-4 h-4" /> 完全保护
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">赔偿金额</td>
                  <td className="px-6 py-4 text-gray-700">
                    ¥200-800代金券<br/>
                    <span className="text-sm text-gray-500">（航司自愿，无保证）</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    €250-€600现金<br/>
                    <span className="text-sm text-green-600">（法律强制，有保证）</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">法律依据</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">
                    中国民航局规定<br/>
                    （无固定金额标准）
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">
                    EU 261/2004<br/>
                    （明确金额标准）
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">申请难度</td>
                  <td className="px-6 py-4 text-gray-700">
                    🔴 困难<br/>
                    <span className="text-sm text-gray-600">需反复协商</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    🟢 简单<br/>
                    <span className="text-sm text-gray-600">ClaimWinger代办</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-yellow-50">
                  <td className="px-6 py-4 font-medium text-gray-900">示例航班</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">
                    CA934 北京→慕尼黑<br/>
                    MU551 上海→法兰克福<br/>
                    CZ347 广州→阿姆斯特丹
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-sm">
                    LH720 北京→法兰克福<br/>
                    AF116 上海→巴黎<br/>
                    KL891 广州→阿姆斯特丹
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ❓ 常见问题
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "如果我的机票是在汉莎官网购买的，但实际是国航执飞，受保护吗？",
                a: "❌ 不受保护。EU 261第3条明确规定，保护基于\"运营航空公司\"（Operating Carrier），而非售票公司。如果实际执飞的是国航且从中国出发，不受EU 261保护。购票前务必检查\"Operated by\"字段！"
              },
              {
                q: "中国航司从欧洲出发的返程航班受保护吗？",
                a: "✅ 受保护！根据EU 261第3条(a)款，\"从成员国境内机场出发的航班\"均受保护，无论航空公司国籍。例如：CA933（慕尼黑→北京）延误≥3小时，可申请€600赔偿。"
              },
              {
                q: "我可以同时申请中国补偿和EU 261赔偿吗？",
                a: "❌ 不行。如果您的航班不受EU 261保护（中国航司从中国出发），只能根据中国法律或航司政策索赔（通常为代金券）。如果受EU 261保护（欧洲航司或从欧洲出发），您应优先申请EU 261（€600现金），不能双重索赔。"
              },
              {
                q: "我已经接受了航司的代金券，还能申请EU 261吗？",
                a: "如果您的航班实际上不受EU 261保护（中国航司从中国出发），接受代金券不影响任何权利（因为本身就没有EU 261权利）。如果实际上受保护但您误以为不受保护而接受代金券，理论上仍可申请EU 261，但实践中较复杂，建议咨询ClaimWinger。"
              },
              {
                q: "为什么同样延误5小时，中国只赔¥500，欧洲赔€600？",
                a: "这是两个不同法律体系的差异。EU 261/2004是欧盟统一立法，明确规定固定金额（€250-€600）和强制执行机制。中国民航法规对延误赔偿金额无明确标准，航司可自行决定，通常远低于欧洲标准。这也是为什么建议中国乘客优先选择欧洲航司。"
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-start gap-2">
                  <MessageCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              🇪🇺 您的航班受EU 261保护吗？
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              如果您乘坐的是<strong>欧洲航空公司从中国出发</strong>的航班，或任何<strong>从欧洲出发</strong>的航班（包括中国航司），您可能有权获得€250-€600赔偿！
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=chinese-airlines-china-departure"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                免费检查资格
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-blue-100">
              ⚡ ClaimWinger专业团队 · 2分钟在线评估 · No Win No Fee
            </p>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📚 相关文章推荐
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/zh/blog/european-airline-china-departure-compensation"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                欧洲航司从中国出发能索赔吗？
              </h3>
              <p className="text-sm text-gray-600">
                详解Lufthansa/Air France等欧洲航司从中国出发的EU261保护规则
              </p>
            </Link>
            <Link 
              href="/zh/blog/which-flights-qualify-compensation"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                哪些航班符合赔偿资格？
              </h3>
              <p className="text-sm text-gray-600">
                完整解析EU261保护范围：出发地、目的地、航司类型
              </p>
            </Link>
            <Link 
              href="/zh/blog/lufthansa-delay-cancellation-compensation"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                汉莎航空延误取消赔偿指南
              </h3>
              <p className="text-sm text-gray-600">
                针对Lufthansa航班的详细索赔流程和成功案例
              </p>
            </Link>
            <Link 
              href="/zh/blog/eu261-regulation-explained-chinese-passengers"
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                EU261法规完整解读
              </h3>
              <p className="text-sm text-gray-600">
                中国乘客必读：欧洲航班权益保护全面指南
              </p>
            </Link>
          </div>
        </section>

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
                  name: '如果我的机票是在汉莎官网购买的，但实际是国航执飞，受保护吗？',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '不受保护。EU 261第3条明确规定，保护基于\'运营航空公司\'（Operating Carrier），而非售票公司。如果实际执飞的是国航且从中国出发，不受EU 261保护。购票前务必检查\'Operated by\'字段！'
                  }
                },
                {
                  '@type': 'Question',
                  name: '中国航司从欧洲出发的返程航班受保护吗？',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '受保护！根据EU 261第3条(a)款，\'从成员国境内机场出发的航班\'均受保护，无论航空公司国籍。例如：CA933（慕尼黑→北京）延误≥3小时，可申请€600赔偿。'
                  }
                },
                {
                  '@type': 'Question',
                  name: '我可以同时申请中国补偿和EU 261赔偿吗？',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '不行。如果您的航班不受EU 261保护（中国航司从中国出发），只能根据中国法律或航司政策索赔（通常为代金券）。如果受EU 261保护（欧洲航司或从欧洲出发），您应优先申请EU 261（€600现金），不能双重索赔。'
                  }
                },
                {
                  '@type': 'Question',
                  name: '为什么同样延误5小时，中国只赔¥500，欧洲赔€600？',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '这是两个不同法律体系的差异。EU 261/2004是欧盟统一立法，明确规定固定金额（€250-€600）和强制执行机制。中国民航法规对延误赔偿金额无明确标准，航司可自行决定，通常远低于欧洲标准。这也是为什么建议中国乘客优先选择欧洲航司。'
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
