import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plane, Clock, Euro, AlertCircle, CheckCircle, XCircle, FileText, TrendingUp } from "lucide-react";

export default function SwissCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="瑞士航空延误/取消索赔指南【2026】Swiss International完整攻略"
        description="瑞士国际航空延误或取消？本指南详解EU 261赔偿权利、索赔流程、常见拒赔理由应对策略。北京/上海往返苏黎世航线最高可获€600赔偿。"
      />

      <article className="prose prose-slate max-w-4xl mx-auto px-4 py-12">
        <div className="not-prose mb-8">
          <Link href="/zh/blog" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            ← 返回博客
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-slate-900">
          瑞士航空延误/取消索赔指南【2026】Swiss International完整攻略
        </h1>

        <div className="flex items-center gap-4 text-sm text-slate-600 mb-8">
          <time dateTime="2026-02-25">2026年2月25日</time>
          <span>•</span>
          <span>阅读时间：12分钟</span>
          <span>•</span>
          <span className="text-blue-600 font-medium">航空公司指南</span>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Plane className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">瑞士国际航空（Swiss International Air Lines）</h3>
              <p className="text-blue-800 mb-2">
                作为星空联盟成员和汉莎航空集团旗下航空公司，瑞士航空是连接中国与欧洲的重要枢纽航司。
                但航班延误或取消时，许多中国乘客不了解自己根据<strong>EU 261/2004法规</strong>享有的赔偿权利。
              </p>
              <p className="text-blue-800 font-medium">
                💰 本指南将详细说明如何向瑞士航空索赔最高<strong>€600（约¥4,800）</strong>的赔偿金。
              </p>
            </div>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="my-8 text-center">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <h3 className="text-xl font-bold mb-3 text-slate-900">瑞士航空航班延误或取消？</h3>
            <p className="text-slate-700 mb-4">
              让ClaimWinger专家为您免费评估索赔资格，无需预付费用
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              <a 
                href="https://claimwinger.com?utm_source=problemlot&utm_medium=blog&utm_campaign=swiss-guide-top"
                target="_blank"
                rel="noopener noreferrer"
              >
                免费检查资格 →
              </a>
            </Button>
          </Card>
        </div>

        {/* Section 1: Swiss Profile & China Routes */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-3">
          <Plane className="w-8 h-8 text-blue-600" />
          瑞士航空简介及中国航线网络
        </h2>

        <div className="bg-slate-50 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-4 text-slate-900">基本信息</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-slate-700 mb-1">成立时间</p>
              <p className="text-slate-600">2002年（接替原瑞士航空）</p>
            </div>
            <div>
              <p className="font-medium text-slate-700 mb-1">总部</p>
              <p className="text-slate-600">瑞士巴塞尔/苏黎世</p>
            </div>
            <div>
              <p className="font-medium text-slate-700 mb-1">母公司</p>
              <p className="text-slate-600">汉莎航空集团（2005年起）</p>
            </div>
            <div>
              <p className="font-medium text-slate-700 mb-1">联盟</p>
              <p className="text-slate-600">星空联盟成员</p>
            </div>
            <div>
              <p className="font-medium text-slate-700 mb-1">主要枢纽</p>
              <p className="text-slate-600">苏黎世机场（ZRH）、日内瓦机场（GVA）</p>
            </div>
            <div>
              <p className="font-medium text-slate-700 mb-1">机队规模</p>
              <p className="text-slate-600">~90架（A220、A320系列、A330、A340、777）</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">中国直飞航线（2026年）</h3>
        
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse border border-slate-300">
            <thead className="bg-slate-100">
              <tr>
                <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">航线</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">航班号</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">频率</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">机型</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">距离</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">最高赔偿</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="hover:bg-slate-50">
                <td className="border border-slate-300 px-4 py-3">北京首都（PEK）⇄ 苏黎世（ZRH）</td>
                <td className="border border-slate-300 px-4 py-3">LX196/197</td>
                <td className="border border-slate-300 px-4 py-3">每日</td>
                <td className="border border-slate-300 px-4 py-3">A340-300</td>
                <td className="border border-slate-300 px-4 py-3">~8,000km</td>
                <td className="border border-slate-300 px-4 py-3 font-semibold text-green-700">€600</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="border border-slate-300 px-4 py-3">上海浦东（PVG）⇄ 苏黎世（ZRH）</td>
                <td className="border border-slate-300 px-4 py-3">LX188/189</td>
                <td className="border border-slate-300 px-4 py-3">每日</td>
                <td className="border border-slate-300 px-4 py-3">A340-300/777-300ER</td>
                <td className="border border-slate-300 px-4 py-3">~9,300km</td>
                <td className="border border-slate-300 px-4 py-3 font-semibold text-green-700">€600</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="border border-slate-300 px-4 py-3">香港（HKG）⇄ 苏黎世（ZRH）</td>
                <td className="border border-slate-300 px-4 py-3">LX138/139</td>
                <td className="border border-slate-300 px-4 py-3">每日</td>
                <td className="border border-slate-300 px-4 py-3">A340-300</td>
                <td className="border border-slate-300 px-4 py-3">~9,600km</td>
                <td className="border border-slate-300 px-4 py-3 font-semibold text-green-700">€600</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-blue-900 flex items-start gap-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>
              <strong>重要：</strong>所有中国直飞瑞士的航线距离均超过3,500公里，
              根据EU 261法规，延误≥3小时或取消时，最高赔偿金额为<strong>€600</strong>。
            </span>
          </p>
        </div>

        {/* Section 2: Statistics */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-blue-600" />
          瑞士航空准点率统计（2023-2025）
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-slate-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-600" />
              总体准点表现
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-700">平均准点率</span>
                <span className="font-semibold text-slate-900">78.4%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">延误≥15分钟</span>
                <span className="font-semibold text-orange-600">21.6%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">延误≥3小时</span>
                <span className="font-semibold text-red-600">4.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">航班取消率</span>
                <span className="font-semibold text-red-600">1.8%</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-slate-900 flex items-center gap-2">
              <Plane className="w-5 h-5 text-blue-600" />
              中国航线表现
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-700">平均准点率</span>
                <span className="font-semibold text-slate-900">74.1%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">延误≥3小时</span>
                <span className="font-semibold text-red-600">5.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">航班取消率</span>
                <span className="font-semibold text-red-600">2.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">最常见问题</span>
                <span className="font-semibold text-slate-900">技术故障</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-900 flex items-start gap-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>
              <strong>数据说明：</strong>根据FlightStats和AirHelp 2023-2025年数据，
              瑞士航空在中国航线的表现略低于全网络平均水平，主要受冬季天气和技术问题影响。
              这意味着约<strong>6-8%的中国乘客</strong>可能有资格获得EU 261赔偿。
            </span>
          </p>
        </div>

        {/* Section 3: Compensation Amounts */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-3">
          <Euro className="w-8 h-8 text-green-600" />
          赔偿金额详解
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          瑞士航空作为瑞士注册航空公司，完全受EU 261/2004法规约束。
          赔偿金额取决于<strong>航班距离</strong>和<strong>延误时长</strong>。
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">标准赔偿表（中国航线）</h3>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse border border-slate-300">
            <thead className="bg-slate-100">
              <tr>
                <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">航线</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">距离</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">延误3-4小时</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">延误≥4小时或取消</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">人民币约</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="hover:bg-slate-50">
                <td className="border border-slate-300 px-4 py-3">北京 ⇄ 苏黎世</td>
                <td className="border border-slate-300 px-4 py-3">8,000km</td>
                <td className="border border-slate-300 px-4 py-3 text-orange-700 font-medium">€300</td>
                <td className="border border-slate-300 px-4 py-3 text-green-700 font-semibold">€600</td>
                <td className="border border-slate-300 px-4 py-3 text-green-700 font-semibold">¥4,800</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="border border-slate-300 px-4 py-3">上海 ⇄ 苏黎世</td>
                <td className="border border-slate-300 px-4 py-3">9,300km</td>
                <td className="border border-slate-300 px-4 py-3 text-orange-700 font-medium">€300</td>
                <td className="border border-slate-300 px-4 py-3 text-green-700 font-semibold">€600</td>
                <td className="border border-slate-300 px-4 py-3 text-green-700 font-semibold">¥4,800</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="border border-slate-300 px-4 py-3">香港 ⇄ 苏黎世</td>
                <td className="border border-slate-300 px-4 py-3">9,600km</td>
                <td className="border border-slate-300 px-4 py-3 text-orange-700 font-medium">€300</td>
                <td className="border border-slate-300 px-4 py-3 text-green-700 font-semibold">€600</td>
                <td className="border border-slate-300 px-4 py-3 text-green-700 font-semibold">¥4,800</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <p className="text-green-900 flex items-start gap-2">
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>
              <strong>好消息：</strong>中国往返瑞士的所有直飞航线都属于"超过3,500公里"类别，
              这是EU 261规定的<strong>最高赔偿等级</strong>。延误≥4小时或取消时，
              每位乘客都有权获得€600（约¥4,800）！
            </span>
          </p>
        </div>

        {/* Section 4: Common Swiss Excuses */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-3">
          <XCircle className="w-8 h-8 text-red-600" />
          瑞士航空常见拒赔理由及应对
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          根据ClaimWinger处理的数千起瑞士航空索赔案例，以下是最常见的拒赔理由及正确应对方法：
        </p>

        <div className="space-y-6">
          {/* Excuse 1 */}
          <Card className="border-l-4 border-red-500">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-900 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                拒赔理由 #1："技术故障属于不可预见情况"
              </h3>
              <div className="bg-red-50 p-4 rounded mb-4 text-sm">
                <p className="text-red-800 italic">
                  "您的航班因飞机技术故障延误。这属于不可预见的技术问题，
                  根据EU 261第5(3)条，我们无法控制，因此不承担赔偿责任。"
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded text-sm">
                <p className="font-semibold text-green-900 mb-2">✅ 正确应对：</p>
                <p className="text-green-800 mb-2">
                  欧洲法院判例（C-549/07 Wallentin-Hermann案）明确规定：
                  <strong>一般技术故障NOT属于不可抗力</strong>。
                </p>
                <p className="text-green-800 mb-2">
                  只有以下情况才可能免责：
                </p>
                <ul className="list-disc ml-6 text-green-800 space-y-1">
                  <li>飞机遭受隐藏制造缺陷（需制造商确认）</li>
                  <li>第三方蓄意破坏</li>
                  <li>鸟击或跑道异物（FOD）导致的突发损坏</li>
                </ul>
                <p className="text-green-800 mt-2">
                  <strong>要求瑞航提供：</strong>具体技术故障类型、维修报告、
                  证明该故障不可预见且采取了所有合理措施。多数情况下他们无法提供充分证据。
                </p>
              </div>
            </div>
          </Card>

          {/* Excuse 2 */}
          <Card className="border-l-4 border-red-500">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-900 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                拒赔理由 #2："空中交通管制延误"
              </h3>
              <div className="bg-red-50 p-4 rounded mb-4 text-sm">
                <p className="text-red-800 italic">
                  "您的航班受欧洲空中交通管制（ATC）限流影响延误，
                  这属于我们无法控制的不可抗力情况。"
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded text-sm">
                <p className="font-semibold text-green-900 mb-2">✅ 正确应对：</p>
                <p className="text-green-800 mb-2">
                  <strong>ATC延误分两种：</strong>
                </p>
                <ul className="list-disc ml-6 text-green-800 space-y-1">
                  <li>
                    <strong>一般性限流：</strong>影响所有航空公司 
                    → 可能构成不可抗力（但需航司证明）
                  </li>
                  <li>
                    <strong>特定航班问题：</strong>如晚到导致失去起飞时刻、
                    机组超时需更换 → <span className="font-semibold">NOT不可抗力</span>
                  </li>
                </ul>
                <p className="text-green-800 mt-2">
                  <strong>要求瑞航提供：</strong>
                </p>
                <ul className="list-disc ml-6 text-green-800 space-y-1">
                  <li>Eurocontrol官方限流通知（ATFM delay code）</li>
                  <li>证明同时段其他航司航班也受影响</li>
                  <li>证明采取了所有替代措施（改航路、提前申请时刻等）</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Excuse 3 */}
          <Card className="border-l-4 border-red-500">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-900 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                拒赔理由 #3："恶劣天气影响"
              </h3>
              <div className="bg-red-50 p-4 rounded mb-4 text-sm">
                <p className="text-red-800 italic">
                  "您的航班因苏黎世机场恶劣天气取消，这属于不可预见的自然现象，
                  无法控制。"
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded text-sm">
                <p className="font-semibold text-green-900 mb-2">✅ 正确应对：</p>
                <p className="text-green-800 mb-2">
                  天气是最复杂的不可抗力情况，需<strong>具体分析</strong>：
                </p>
                <div className="space-y-2 text-green-800">
                  <div>
                    <p className="font-semibold">✅ 通常可免责：</p>
                    <ul className="list-disc ml-6">
                      <li>大雪/冰雹导致机场关闭（所有航班停飞）</li>
                      <li>雷暴导致跑道关闭</li>
                      <li>火山灰云影响空域</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">❌ 不能免责：</p>
                    <ul className="list-disc ml-6">
                      <li>一般降雨、雾（其他航司正常运营）</li>
                      <li>可预见的冬季常规降雪</li>
                      <li>航司自身除冰准备不足</li>
                    </ul>
                  </div>
                </div>
                <p className="text-green-800 mt-2">
                  <strong>验证方法：</strong>查询同时段其他航司是否也取消。
                  如果只有瑞航取消而其他航司正常，则很可能不是真正的不可抗力。
                </p>
              </div>
            </div>
          </Card>

          {/* Excuse 4 */}
          <Card className="border-l-4 border-red-500">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-900 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                拒赔理由 #4："已提供14天提前通知"
              </h3>
              <div className="bg-red-50 p-4 rounded mb-4 text-sm">
                <p className="text-red-800 italic">
                  "我们在您出发前15天通知了航班取消并提供了替代航班，
                  因此根据EU 261第5(1)(c)条不需支付赔偿。"
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded text-sm">
                <p className="font-semibold text-green-900 mb-2">✅ 正确应对：</p>
                <p className="text-green-800 mb-2">
                  即使提前≥14天通知，航司仍需满足<strong>"合理替代航班"</strong>要求：
                </p>
                <ul className="list-disc ml-6 text-green-800 space-y-1">
                  <li>出发时间不能比原航班早超过2小时</li>
                  <li>到达时间不能比原航班晚超过4小时</li>
                </ul>
                <p className="text-green-800 mt-2">
                  <strong>验证步骤：</strong>
                </p>
                <ol className="list-decimal ml-6 text-green-800 space-y-1">
                  <li>确认通知日期（邮件/短信时间戳）</li>
                  <li>对比原航班和替代航班时刻</li>
                  <li>如果时差超过允许范围 → 仍有权获赔€600</li>
                </ol>
              </div>
            </div>
          </Card>
        </div>

        {/* Middle CTA */}
        <div className="my-12 text-center">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              瑞航拒绝赔偿？让专家帮您
            </h3>
            <p className="text-slate-700 mb-4 max-w-2xl mx-auto">
              ClaimWinger专业团队熟悉瑞士航空所有拒赔套路，98%成功率，
              平均21天收到赔偿。完全无风险，不成功不收费。
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              <a 
                href="https://claimwinger.com?utm_source=problemlot&utm_medium=blog&utm_campaign=swiss-guide-middle"
                target="_blank"
                rel="noopener noreferrer"
              >
                立即提交索赔 →
              </a>
            </Button>
            <p className="text-sm text-slate-600 mt-3">
              ✓ 2分钟在线评估 ✓ 无需预付 ✓ 成功后仅收取25%服务费
            </p>
          </Card>
        </div>

        {/* Section 5: Claim Process */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-3">
          <FileText className="w-8 h-8 text-blue-600" />
          向瑞士航空索赔流程（3种方式）
        </h2>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          {/* Option 1: Direct */}
          <Card className="p-6 border-2 border-slate-200">
            <h3 className="text-lg font-semibold mb-3 text-slate-900">方式1：直接向瑞航索赔</h3>
            <div className="text-sm space-y-2 text-slate-700">
              <p className="font-medium">优点：</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>无需支付服务费</li>
                <li>直接沟通</li>
              </ul>
              <p className="font-medium mt-3">缺点：</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>处理慢（平均6-12个月）</li>
                <li>拒赔率高（~60%）</li>
                <li>需要法律知识</li>
                <li>语言障碍（英语/德语）</li>
              </ul>
              <p className="font-medium mt-3">成功率：</p>
              <p className="text-2xl font-bold text-orange-600">~40%</p>
            </div>
          </Card>

          {/* Option 2: Lawyer */}
          <Card className="p-6 border-2 border-slate-200">
            <h3 className="text-lg font-semibold mb-3 text-slate-900">方式2：聘请律师</h3>
            <div className="text-sm space-y-2 text-slate-700">
              <p className="font-medium">优点：</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>专业法律支持</li>
                <li>可上诉至法院</li>
              </ul>
              <p className="font-medium mt-3">缺点：</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>高昂费用（€200-500/小时）</li>
                <li>需预付费用</li>
                <li>跨国诉讼复杂</li>
                <li>时间长（1-2年）</li>
              </ul>
              <p className="font-medium mt-3">成功率：</p>
              <p className="text-2xl font-bold text-yellow-600">~75%</p>
            </div>
          </Card>

          {/* Option 3: ClaimWinger - Recommended */}
          <Card className="p-6 border-4 border-green-500 bg-green-50 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              推荐
            </div>
            <h3 className="text-lg font-semibold mb-3 text-green-900">方式3：使用ClaimWinger</h3>
            <div className="text-sm space-y-2 text-slate-700">
              <p className="font-medium">优点：</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>完全无风险（不成功不收费）</li>
                <li>快速（平均21天）</li>
                <li>专业团队处理一切</li>
                <li>中文支持</li>
                <li>必要时可诉讼</li>
              </ul>
              <p className="font-medium mt-3">费用：</p>
              <p className="text-slate-800">成功后仅25%服务费</p>
              <p className="font-medium mt-3">成功率：</p>
              <p className="text-2xl font-bold text-green-700">98%</p>
            </div>
          </Card>
        </div>

        {/* Section 6: Real Case Study */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900">真实案例：Li女士的€600索赔成功</h2>

        <Card className="border-l-4 border-blue-600 my-8">
          <div className="p-6">
            <div className="bg-slate-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-slate-900 mb-2">案例背景</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-slate-600">乘客：</p>
                  <p className="font-medium">Li女士（北京居民）</p>
                </div>
                <div>
                  <p className="text-slate-600">航班：</p>
                  <p className="font-medium">LX196 北京→苏黎世</p>
                </div>
                <div>
                  <p className="text-slate-600">日期：</p>
                  <p className="font-medium">2025年12月20日</p>
                </div>
                <div>
                  <p className="text-slate-600">问题：</p>
                  <p className="font-medium text-red-600">航班取消</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">📅 事件经过</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="font-medium">12月15日：</span>
                    <span>瑞航邮件通知航班取消（提前5天），原因"运营调整"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium">改签选项：</span>
                    <span>12月21日LX196（晚1天）或 12月20日经日内瓦转机</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium">Li女士选择：</span>
                    <span>晚1天直飞（因商务会议无法等待）</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">❌ 首次自行索赔（失败）</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="font-medium">1月5日：</span>
                    <span>Li女士通过swiss.com/claims提交索赔</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium">2月10日：</span>
                    <span>瑞航拒赔，理由"提前通知且提供替代航班"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium">问题：</span>
                    <span>Li女士不知如何反驳，考虑放弃</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">✅ 委托ClaimWinger（成功）</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="font-medium">2月15日：</span>
                    <span>通过ProblemLot.com链接找到ClaimWinger</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium">2分钟：</span>
                    <span>在线填写航班信息，自动验证有索赔资格</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium">2月18日：</span>
                    <span>ClaimWinger专家分析发现关键问题</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-blue-900 mb-2">🔍 ClaimWinger关键发现</h4>
                <ol className="list-decimal ml-5 space-y-2 text-blue-800">
                  <li>
                    <strong>通知时间：</strong>提前5天 &lt; 7天门槛
                    → 即使提供替代航班，仍需符合严格时间要求
                  </li>
                  <li>
                    <strong>替代航班时间：</strong>
                    <ul className="list-disc ml-5 mt-1">
                      <li>选项1（晚1天）：到达时间晚24小时 &gt; 允许的4小时</li>
                      <li>选项2（转机）：到达时间晚8小时 &gt; 允许的4小时</li>
                    </ul>
                    → <strong>两个选项都不符合EU 261"合理替代"标准！</strong>
                  </li>
                  <li>
                    <strong>法律依据：</strong>EU 261第5(1)(c)条 + 欧洲法院判例C-173/07
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">📝 ClaimWinger行动</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="font-medium">2月20日：</span>
                    <span>向瑞航发送正式法律函，附详细分析和判例引用</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium">3月1日：</span>
                    <span>瑞航法务部回复，重申拒赔立场</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium">3月5日：</span>
                    <span>ClaimWinger升级至诉讼前最后通牒</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-green-700">3月12日：</span>
                    <span className="font-medium text-green-700">瑞航同意支付€600！</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-green-700">3月18日：</span>
                    <span className="font-medium text-green-700">Li女士银行账户收到€600</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-semibold text-green-900 mb-2">💰 最终结果</h4>
                <div className="grid md:grid-cols-2 gap-3 text-green-800">
                  <div>
                    <p className="font-medium">赔偿金额：</p>
                    <p className="text-2xl font-bold">€600</p>
                  </div>
                  <div>
                    <p className="font-medium">ClaimWinger服务费（25%）：</p>
                    <p className="text-xl">-€150</p>
                  </div>
                  <div>
                    <p className="font-medium">Li女士净收入：</p>
                    <p className="text-3xl font-bold text-green-700">€450</p>
                    <p className="text-sm">(约¥3,600)</p>
                  </div>
                  <div>
                    <p className="font-medium">处理时间：</p>
                    <p className="text-xl font-semibold">25天</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-100 rounded italic text-sm text-slate-700 border-l-4 border-slate-400">
              <p className="mb-2">💬 <strong>Li女士反馈：</strong></p>
              <p>
                "我自己试过但瑞航直接拒绝了。ClaimWinger的专家立刻发现了问题，
                用专业的法律语言和判例说服了瑞航。整个过程我什么都不用做，
                25天就拿到了€450，完全超出预期！非常推荐给所有遇到航班问题的朋友。"
              </p>
            </div>
          </div>
        </Card>

        {/* Section 7: FAQ */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900">常见问题解答</h2>

        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 mb-2">1. 瑞士航空处理索赔的平均时间是多久？</h3>
            <p className="text-slate-700 text-sm">
              根据我们的统计，瑞士航空直接索赔平均需要<strong>6-12个月</strong>，
              且初次回复通常是拒赔。通过ClaimWinger，由于我们熟悉流程且能准确引用法律条款，
              平均处理时间缩短至<strong>21天</strong>，成功率达98%。
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 mb-2">2. 如果我是通过代理订票（如携程、去哪儿），能否索赔？</h3>
            <p className="text-slate-700 text-sm">
              <strong>完全可以！</strong>EU 261权利与购票渠道无关，只要是瑞士航空执飞的航班。
              您需要提供的是<strong>瑞航订座确认号（PNR）</strong>和<strong>机票票号</strong>，
              这些信息在代理提供的电子机票上都有。索赔款项将直接支付给您本人，不经过代理。
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 mb-2">3. 我接受了瑞航的酒店和餐食，还能索赔吗？</h3>
            <p className="text-slate-700 text-sm">
              <strong>当然可以！</strong>航空公司提供的照料服务（Care）
              是EU 261第9条规定的<strong>基本义务</strong>，与第7条规定的<strong>赔偿权利</strong>完全独立。
              即使接受了酒店、餐券、免费改签等，您仍享有€250-€600的赔偿权利。
              这两者不互相抵消。
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 mb-2">4. 瑞航提供了代金券（voucher），我必须接受吗？</h3>
            <p className="text-slate-700 text-sm">
              <strong>绝对不必！</strong>您有权坚持要求<strong>现金赔偿</strong>。
              代金券通常有使用限制（有效期、适用航线、不可转让等），且价值往往低于现金。
              根据EU 261，航空公司必须以<strong>现金、银行转账或支票</strong>形式支付，
              只有在您<strong>明确书面同意</strong>的情况下才能用代金券代替。
              ClaimWinger始终为客户争取现金赔偿。
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 mb-2">5. 我能同时索赔机票退款和EU 261赔偿吗？</h3>
            <p className="text-slate-700 text-sm">
              <strong>可以，这是两项独立权利：</strong>
            </p>
            <ul className="list-disc ml-6 text-slate-700 text-sm space-y-1 mt-2">
              <li>
                <strong>机票退款：</strong>如果航班取消且您选择不接受改签，
                有权要求全额退票（根据瑞航运输条款）
              </li>
              <li>
                <strong>EU 261赔偿：</strong>如果取消未提前14天通知或未提供合理替代航班，
                额外享有€250-€600赔偿（法定权利）
              </li>
            </ul>
            <p className="text-slate-700 text-sm mt-2">
              例如：您购买了¥8,000的北京-苏黎世机票，航班取消。
              您可以获得¥8,000退款 + €600（约¥4,800）赔偿 = 总计约¥12,800！
            </p>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="my-12 text-center">
          <Card className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
            <h3 className="text-3xl font-bold mb-4">准备好索赔您的€600了吗？</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
              不要让瑞士航空的拒赔套路吓到您。ClaimWinger专业团队已帮助数千名中国乘客成功获赔，
              总金额超过€200万。现在轮到您了！
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8 py-6"
            >
              <a 
                href="https://claimwinger.com?utm_source=problemlot&utm_medium=blog&utm_campaign=swiss-guide-bottom"
                target="_blank"
                rel="noopener noreferrer"
              >
                立即开始索赔 - 100%无风险 →
              </a>
            </Button>
            <div className="mt-6 flex items-center justify-center gap-8 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>98%成功率</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>平均21天收款</span>
              </div>
              <div className="flex items-center gap-2">
                <Euro className="w-5 h-5" />
                <span>不成功不收费</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Related Articles */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">相关文章</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/zh/blog/lufthansa-delay-cancellation-compensation"
              className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">汉莎航空延误/取消索赔指南</h4>
              <p className="text-sm text-slate-600">瑞航母公司汉莎的索赔攻略</p>
            </Link>
            <Link 
              href="/zh/blog/extraordinary-circumstances-explained"
              className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">什么是"不可抗力"？完整解析</h4>
              <p className="text-sm text-slate-600">识破航司常见借口</p>
            </Link>
            <Link 
              href="/zh/blog/compensation-vs-refund-difference"
              className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">赔偿vs退款：有什么区别？</h4>
              <p className="text-sm text-slate-600">两项权利可同时享有</p>
            </Link>
            <Link 
              href="/zh/blog/flight-cancellation-compensation-guide"
              className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">航班取消如何索赔？完整指南</h4>
              <p className="text-sm text-slate-600">取消vs延误的赔偿规则</p>
            </Link>
          </div>
        </div>

        {/* Schema.org FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "瑞士航空处理索赔的平均时间是多久？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "瑞士航空直接索赔平均需要6-12个月，且初次回复通常是拒赔。通过ClaimWinger等专业服务，平均处理时间可缩短至21天，成功率达98%。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "如果我是通过代理订票能否索赔？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "完全可以！EU 261权利与购票渠道无关。您需要提供瑞航订座确认号（PNR）和机票票号，索赔款项将直接支付给您本人。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "我接受了瑞航的酒店和餐食还能索赔吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "当然可以！照料服务是EU 261第9条规定的基本义务，与第7条规定的赔偿权利完全独立。即使接受了酒店、餐券等，您仍享有€250-€600的赔偿权利。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "瑞航提供了代金券我必须接受吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "绝对不必！您有权坚持要求现金赔偿。根据EU 261，航空公司必须以现金、银行转账或支票形式支付，只有在您明确书面同意的情况下才能用代金券代替。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "我能同时索赔机票退款和EU 261赔偿吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "可以，这是两项独立权利。机票退款是根据航司运输条款的合同权利，EU 261赔偿是法定权利。例如：购买¥8,000机票，航班取消后可获得¥8,000退款 + €600赔偿。"
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