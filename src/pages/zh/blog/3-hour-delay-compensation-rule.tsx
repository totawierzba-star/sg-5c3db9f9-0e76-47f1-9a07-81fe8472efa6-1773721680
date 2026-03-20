import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { Clock, AlertTriangle, CheckCircle2, XCircle, Calendar, Info, Award } from "lucide-react";

export default function ThreeHourDelayRule() {
  return (
    <LayoutZh>
      <SEO
        title="航班延误3小时补偿规则【2026最新】3小时延误赔偿详解"
        description="详解欧盟EU 261/2004航班延误3小时补偿规则。了解如何正确计算延误时间、不同距离补偿金额、证据收集方法。最高可获€600赔偿。"
        url="https://problemlot.com/zh/blog/3-hour-delay-compensation-rule"
      />

      <article className="prose prose-slate max-w-4xl mx-auto px-4 py-12">
        <div className="not-prose mb-8">
          <Link 
            href="/zh/blog"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            ← 返回博客
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-slate-900">
          航班延误3小时补偿规则【2026最新】3小时延误赔偿详解
        </h1>

        <div className="flex items-center gap-4 text-sm text-slate-600 mb-8">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            2026年2月25日
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            15分钟阅读
          </span>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-blue-900 mb-2 text-lg">为什么3小时是关键门槛？</h3>
              <p className="text-blue-800 leading-relaxed">
                根据欧盟法规EU 261/2004，航班延误<strong>≥3小时到达目的地</strong>时，乘客有权获得与航班取消相同的赔偿金。这个"3小时规则"是欧洲法院2009年判决确立的重要权利（案例C-402/07 Sturgeon）。本指南详细解释如何正确计算延误时间、确定赔偿金额以及收集关键证据。
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-2">
          <Clock className="w-7 h-7 text-blue-600" />
          一、3小时延误规则的法律基础
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800">📜 EU 261/2004 + Sturgeon判决</h3>

        <div className="bg-slate-50 p-6 rounded-lg mb-6">
          <h4 className="font-bold text-slate-900 mb-3">法律演变时间线：</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-20 flex-shrink-0 font-bold text-blue-600">2004年</div>
              <div className="text-slate-700">
                EU 261/2004法规生效，明确规定<strong>航班取消</strong>的赔偿权利，但对<strong>延误</strong>的规定模糊（仅提到"照顾义务"）
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-20 flex-shrink-0 font-bold text-blue-600">2009年</div>
              <div className="text-slate-700">
                <strong>欧洲法院Sturgeon判决（C-402/07）</strong>：确立"延误≥3小时 = 取消"原则，乘客有权获得相同金额的赔偿
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-20 flex-shrink-0 font-bold text-blue-600">2013年</div>
              <div className="text-slate-700">
                航空公司协会（IATA）挑战Sturgeon判决，但被欧洲法院驳回（C-581/10, C-629/10）
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-20 flex-shrink-0 font-bold text-blue-600">2024-2026年</div>
              <div className="text-slate-700">
                所有欧盟成员国（包括英国UK 261）一致执行3小时规则，这已成为<strong>不可撼动的乘客权利</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 p-5 rounded-lg mb-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-green-900 mb-2">核心法律原则</h4>
              <p className="text-green-800 text-sm leading-relaxed">
                <strong>"延误≥3小时到达目的地 = 等同于航班取消"</strong><br/>
                这意味着：相同的赔偿金额（€250/€400/€600）、相同的权利义务、相同的举证规则。航空公司不能因为是"延误"而非"取消"拒绝赔偿。
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-orange-600" />
          二、如何正确计算延误时间？（关键！）
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          <strong>很多乘客因为不了解正确的计算方法而错失赔偿。</strong>EU 261明确规定延误时间的计算标准：
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6 rounded-r-lg">
          <h3 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            延误时间 = 实际到达时间 - 计划到达时间
          </h3>
          <div className="space-y-3 text-sm text-yellow-800">
            <div>
              <strong className="text-yellow-900">关键定义：</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li><strong>"计划到达时间"</strong>：机票/订单上显示的原始到达时间</li>
                <li><strong>"实际到达时间"</strong>：<span className="underline">飞机舱门打开的时刻</span>（不是降落时刻！）</li>
              </ul>
            </div>
            <div className="bg-yellow-100 p-3 rounded">
              <strong className="text-yellow-900">⚠️ 常见误区：</strong>
              <p className="mt-1">很多乘客错误地以"降落时刻"计算，但EU 261明确规定以<strong>"舱门打开时刻"</strong>为准（因为乘客此时才能真正离开飞机）。这可能导致10-30分钟的差异！</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800">🔍 实际案例对比：</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-green-300 bg-green-50 p-5 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <h4 className="font-bold text-green-900">✅ 正确计算方法</h4>
            </div>
            <div className="text-sm text-green-800 space-y-2">
              <div>
                <strong>航班：</strong>LX188 Shanghai→Zurich<br/>
                <strong>计划到达：</strong>14:30<br/>
                <strong>实际降落：</strong>17:15（<span className="text-green-700">延误2h 45min</span>）<br/>
                <strong>舱门打开：</strong>17:35（<span className="text-green-700 font-bold">延误3h 05min</span>）
              </div>
              <div className="bg-green-100 p-3 rounded mt-3">
                <strong className="text-green-900">计算结果：</strong><br/>
                按<strong>舱门打开时间</strong>计算 = 3h 05min延误<br/>
                → <strong className="text-lg">有权获得€600赔偿！</strong> ✅
              </div>
            </div>
          </div>

          <div className="border border-red-300 bg-red-50 p-5 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-6 h-6 text-red-600" />
              <h4 className="font-bold text-red-900">❌ 错误计算方法</h4>
            </div>
            <div className="text-sm text-red-800 space-y-2">
              <div>
                <strong>同一航班，但错误计算：</strong><br/>
                <strong>计划到达：</strong>14:30<br/>
                <strong>实际降落：</strong>17:15<br/>
                <strong>错误结论：</strong>"延误2h 45min，不满3小时"
              </div>
              <div className="bg-red-100 p-3 rounded mt-3">
                <strong className="text-red-900">问题所在：</strong><br/>
                忽略了<strong>滑行和舱门打开</strong>时间（通常10-30分钟）<br/>
                → <strong className="text-lg">错失€600赔偿！</strong> ❌
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg mb-8">
          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" />
            💡 实用技巧：如何获取准确的"舱门打开"时间？
          </h4>
          <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800 ml-2">
            <li><strong>登机牌上的时间戳</strong>：有些航空公司会在登机牌上打印"Arrival at gate"（到达登机口）时间</li>
            <li><strong>航班追踪网站</strong>：FlightRadar24、FlightAware等通常记录"In-Block"（到达停机位）时间</li>
            <li><strong>拍照证据</strong>：到达后立即拍摄手机屏幕（显示时间）+ 舱门或登机口标识</li>
            <li><strong>机场WiFi日志</strong>：连接机场WiFi的时间可作为参考（通常在舱门打开后数分钟内）</li>
            <li><strong>航空公司系统</strong>：索赔时要求航空公司提供official arrival report（官方到达报告）</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-2">
          <Award className="w-7 h-7 text-blue-600" />
          三、3小时延误赔偿金额表（完整版）
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          延误≥3小时的赔偿金额<strong>完全等同于航班取消</strong>，根据<strong>航班距离</strong>和<strong>实际延误时长</strong>确定：
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-slate-300 text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">航班距离</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">延误3-4小时</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">延误≥4小时</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">常见中欧航线示例</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-slate-300 px-4 py-3 font-semibold text-slate-800">
                  ≤1,500公里<br/>
                  <span className="text-xs text-slate-600">（欧洲内短途）</span>
                </td>
                <td className="border border-slate-300 px-4 py-3">
                  <strong className="text-green-700 text-lg">€250</strong><br/>
                  <span className="text-xs text-slate-600">≈ ¥2,000</span>
                </td>
                <td className="border border-slate-300 px-4 py-3">
                  <strong className="text-green-700 text-lg">€250</strong><br/>
                  <span className="text-xs text-slate-600">≈ ¥2,000</span>
                </td>
                <td className="border border-slate-300 px-4 py-3 text-slate-700 text-xs">
                  • London→Paris (344km)<br/>
                  • Amsterdam→Brussels (174km)<br/>
                  • Frankfurt→Munich (304km)
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-300 px-4 py-3 font-semibold text-slate-800">
                  1,501-3,500公里<br/>
                  <span className="text-xs text-slate-600">（欧洲内长途）</span>
                </td>
                <td className="border border-slate-300 px-4 py-3">
                  <strong className="text-green-700 text-lg">€400</strong><br/>
                  <span className="text-xs text-slate-600">≈ ¥3,200</span>
                </td>
                <td className="border border-slate-300 px-4 py-3">
                  <strong className="text-green-700 text-lg">€400</strong><br/>
                  <span className="text-xs text-slate-600">≈ ¥3,200</span>
                </td>
                <td className="border border-slate-300 px-4 py-3 text-slate-700 text-xs">
                  • London→Rome (1,434km)<br/>
                  • Paris→Istanbul (2,243km)<br/>
                  • Frankfurt→Athens (1,804km)
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-3 font-semibold text-slate-800">
                  &gt;3,500公里<br/>
                  <span className="text-xs text-slate-600">（欧盟内或国际）</span>
                </td>
                <td className="border border-slate-300 px-4 py-3">
                  <strong className="text-orange-600 text-lg">€300</strong><br/>
                  <span className="text-xs text-slate-600">≈ ¥2,400</span><br/>
                  <span className="text-xs text-orange-700 italic">（50%减免）</span>
                </td>
                <td className="border border-slate-300 px-4 py-3">
                  <strong className="text-green-700 text-lg">€600</strong><br/>
                  <span className="text-xs text-slate-600">≈ ¥4,800</span>
                </td>
                <td className="border border-slate-300 px-4 py-3 text-slate-700 text-xs">
                  • <strong>北京↔欧洲</strong> (8,000km+)<br/>
                  • <strong>上海↔欧洲</strong> (9,300km+)<br/>
                  • <strong>香港↔欧洲</strong> (9,600km+)<br/>
                  • London→New York (5,585km)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
          <h3 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            ⚠️ 特别注意：&gt;3,500km航线的"50%减免"规则
          </h3>
          <div className="text-sm text-orange-800 space-y-3">
            <p>
              对于<strong>超过3,500公里的长途航班</strong>，如果延误在<strong>3-4小时之间</strong>，赔偿金额会减半至€300（原本€600的50%）。这是EU 261的特殊规定，旨在平衡航空公司在长途航线上的运营压力。
            </p>
            <div className="bg-orange-100 p-4 rounded mt-2">
              <strong className="text-orange-900">实际案例：</strong>
              <ul className="mt-2 space-y-1 list-disc list-inside ml-2">
                <li><strong>延误3h 15min</strong>（上海→法兰克福）→ 赔偿<strong>€300</strong></li>
                <li><strong>延误4h 05min</strong>（同一航线）→ 赔偿<strong>€600</strong>（翻倍！）</li>
              </ul>
              <p className="mt-3 text-xs italic">
                💡 提示：如果你的长途航班延误接近4小时（比如3h 50min），值得等到4小时后再下飞机（如果可能），因为赔偿金额会从€300跃升至€600！
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-2">
          <CheckCircle2 className="w-7 h-7 text-green-600" />
          四、中国乘客常见航线赔偿金额速查
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-slate-300 text-sm">
            <thead className="bg-blue-50">
              <tr>
                <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">出发地→目的地</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">航空公司示例</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">距离</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">延误3-4h</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">延误≥4h</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-slate-300 px-4 py-3 font-semibold">北京 ⇄ 法兰克福</td>
                <td className="border border-slate-300 px-4 py-3 text-slate-700">汉莎、国航</td>
                <td className="border border-slate-300 px-4 py-3 text-slate-600">~8,100km</td>
                <td className="border border-slate-300 px-4 py-3"><strong className="text-orange-600">€300</strong></td>
                <td className="border border-slate-300 px-4 py-3"><strong className="text-green-700 text-lg">€600</strong></td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-300 px-4 py-3 font-semibold">上海 ⇄ 巴黎</td>
                <td className="border border-slate-300 px-4 py-3 text-slate-700">法航、东航</td>
                <td className="border border-slate-300 px-4 py-3 text-slate-600">~9,200km</td>
                <td className="border border-slate-300 px-4 py-3"><strong className="text-orange-600">€300</strong></td>
                <td className="border border-slate-300 px-4 py-3"><strong className="text-green-700 text-lg">€600</strong></td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-3 font-semibold">北京 ⇄ 伦敦</td>
                <td className="border border-slate-300 px-4 py-3 text-slate-700">英航、国航</td>
                <td className="border border-slate-300 px-4 py-3 text-slate-600">~8,150km</td>
                <td className="border border-slate-300 px-4 py-3"><strong className="text-orange-600">€300</strong></td>
                <td className="border border-slate-300 px-4 py-3"><strong className="text-green-700 text-lg">€600</strong></td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-300 px-4 py-3 font-semibold">香港 ⇄ 阿姆斯特丹</td>
                <td className="border border-slate-300 px-4 py-3 text-slate-700">KLM、国泰</td>
                <td className="border border-slate-300 px-4 py-3 text-slate-600">~9,300km</td>
                <td className="border border-slate-300 px-4 py-3"><strong className="text-orange-600">€300</strong></td>
                <td className="border border-slate-300 px-4 py-3"><strong className="text-green-700 text-lg">€600</strong></td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-3 font-semibold">上海 ⇄ 苏黎世</td>
                <td className="border border-slate-300 px-4 py-3 text-slate-700">瑞航</td>
                <td className="border border-slate-300 px-4 py-3 text-slate-600">~9,300km</td>
                <td className="border border-slate-300 px-4 py-3"><strong className="text-orange-600">€300</strong></td>
                <td className="border border-slate-300 px-4 py-3"><strong className="text-green-700 text-lg">€600</strong></td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-300 px-4 py-3 font-semibold">成都 ⇄ 赫尔辛基</td>
                <td className="border border-slate-300 px-4 py-3 text-slate-700">芬航</td>
                <td className="border border-slate-300 px-4 py-3 text-slate-600">~6,500km</td>
                <td className="border border-slate-300 px-4 py-3"><strong className="text-orange-600">€300</strong></td>
                <td className="border border-slate-300 px-4 py-3"><strong className="text-green-700 text-lg">€600</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border border-green-200 p-5 rounded-lg mb-8">
          <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            ✅ 重要结论：所有中欧直飞航线都是&gt;3,500km
          </h4>
          <p className="text-green-800 text-sm leading-relaxed">
            这意味着：如果你的<strong>中国↔欧洲直飞航班延误≥4小时</strong>到达，你有权获得<strong>最高档€600赔偿</strong>（约¥4,800）。如果延误在3-4小时之间，赔偿为€300（约¥2,400）。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-red-600" />
          五、2小时59分钟 vs 3小时01分钟——临界情况处理
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          <strong>延误时间接近3小时</strong>是最常见的争议场景。航空公司经常试图将2h 59min延误记录为"未达到赔偿门槛"，但实际上有很多技巧可以帮助你争取权益。
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-red-300 bg-red-50 p-5 rounded-lg">
            <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              ❌ 案例A：2小时58分钟延误
            </h4>
            <div className="text-sm text-red-800 space-y-2">
              <div>
                <strong>情况：</strong><br/>
                计划到达：10:00<br/>
                实际舱门打开：12:58
              </div>
              <div className="bg-red-100 p-3 rounded">
                <strong>延误时长：</strong>2h 58min<br/>
                <strong>赔偿：</strong><span className="text-lg font-bold">€0</span> ❌<br/>
                <span className="text-xs italic">差2分钟未达到3小时门槛</span>
              </div>
              <div className="mt-3">
                <strong className="text-red-900">是否有转机机会？</strong><br/>
                • 如果你的延误导致<strong>错过转机</strong>，且最终目的地延误≥3小时，<strong>仍可获得赔偿</strong>（见下文"连接航班"部分）
              </div>
            </div>
          </div>

          <div className="border border-green-300 bg-green-50 p-5 rounded-lg">
            <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              ✅ 案例B：3小时02分钟延误
            </h4>
            <div className="text-sm text-green-800 space-y-2">
              <div>
                <strong>情况：</strong><br/>
                计划到达：10:00<br/>
                实际舱门打开：13:02
              </div>
              <div className="bg-green-100 p-3 rounded">
                <strong>延误时长：</strong>3h 02min<br/>
                <strong>赔偿：</strong><span className="text-lg font-bold">€600</span> ✅<br/>
                <span className="text-xs italic">超过3小时门槛（长途航线）</span>
              </div>
              <div className="mt-3">
                <strong className="text-green-900">即使只超过2分钟：</strong><br/>
                • 法律规定"≥3小时"，<strong>没有最小超过量要求</strong><br/>
                • 3h 01min = 3h 59min = 同等权利
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
          <h3 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" />
            💡 临界情况生存指南：如何确保获得赔偿？
          </h3>
          <ol className="space-y-3 text-sm text-yellow-800">
            <li className="flex items-start gap-2">
              <span className="font-bold text-yellow-900 flex-shrink-0">1.</span>
              <div>
                <strong>保留所有时间证据：</strong>
                <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                  <li>登机牌（可能显示实际到达时间）</li>
                  <li>手机截图（显示时间 + 位置/登机口）</li>
                  <li>航班追踪网站记录（FlightRadar24等）</li>
                  <li>机场WiFi连接日志</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-yellow-900 flex-shrink-0">2.</span>
              <div>
                <strong>主动要求航空公司提供书面确认：</strong><br/>
                在机场柜台或通过官方渠道索取"Flight Delay Certificate"（航班延误证明），要求写明<strong>实际到达时间（gate arrival time）</strong>。
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-yellow-900 flex-shrink-0">3.</span>
              <div>
                <strong>不要立即接受航空公司的"补偿voucher"：</strong><br/>
                很多航空公司在2h 50min延误时会主动提供€50-100 voucher，试图让你放弃3小时赔偿的潜在权利。<strong>先确认准确延误时间再决定是否接受。</strong>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-yellow-900 flex-shrink-0">4.</span>
              <div>
                <strong>使用专业索赔服务：</strong><br/>
                对于临界情况（2h 45min - 3h 15min），<Link href="https://claimwinger.com" className="text-blue-600 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">ClaimWinger</Link>等专业服务能够：
                <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                  <li>从航空公司系统获取精确到达时间</li>
                  <li>交叉验证多个数据源</li>
                  <li>如有必要，通过法律手段强制航空公司披露记录</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-2">
          <Clock className="w-7 h-7 text-blue-600" />
          六、连接航班（转机）的3小时规则
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          如果你预订的是<strong>带转机的行程</strong>（例如：北京→法兰克福→巴黎），3小时规则的应用会稍有不同：
        </p>

        <div className="bg-blue-50 border border-blue-200 p-6 mb-6 rounded-lg">
          <h3 className="font-bold text-blue-900 mb-3">连接航班延误计算规则</h3>
          <div className="space-y-4 text-sm text-blue-800">
            <div>
              <strong className="text-blue-900">核心原则：</strong>
              <p className="mt-1">
                延误时间 = <strong>最终目的地实际到达时间</strong> - <strong>最终目的地计划到达时间</strong>
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded">
              <strong className="text-blue-900">实际案例：</strong>
              <div className="mt-2 space-y-2">
                <div>
                  <strong>行程：</strong>北京→法兰克福→巴黎（同一订单）
                </div>
                <div>
                  <strong>第一段：</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>计划：08:00-14:00（准点）</li>
                    <li>实际：08:00-14:00（无延误）✅</li>
                  </ul>
                </div>
                <div>
                  <strong>转机等待：</strong>计划2小时，但第二段延误
                </div>
                <div>
                  <strong>第二段：</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>计划：16:00-17:30</li>
                    <li>实际：19:00-20:30（<span className="text-blue-700 font-bold">延误3小时</span>）</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded mt-3 border border-blue-300">
                  <strong className="text-blue-900">计算结果：</strong><br/>
                  计划到达巴黎：17:30<br/>
                  实际到达巴黎：20:30<br/>
                  → <strong className="text-lg">延误3小时，有权获得€400赔偿！</strong> ✅<br/>
                  <span className="text-xs italic">(北京→巴黎约2,850km，属于€400档位)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
          <h3 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            ⚠️ 重要前提：必须是同一订单
          </h3>
          <p className="text-sm text-yellow-800 leading-relaxed">
            连接航班的3小时规则<strong>仅适用于同一预订订单</strong>（即：单次购买的往返或多程票）。如果你分别购买了两张单独的机票，则两段航班分别独立计算延误，不能合并。
          </p>
          <div className="mt-3 grid md:grid-cols-2 gap-3 text-xs">
            <div className="bg-green-100 p-3 rounded">
              <strong className="text-green-900">✅ 适用情况：</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>通过航空公司官网购买的联程票</li>
                <li>旅行社/OTA购买的打包行程</li>
                <li>航空联盟的联运航班</li>
              </ul>
            </div>
            <div className="bg-red-100 p-3 rounded">
              <strong className="text-red-900">❌ 不适用情况：</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>分别购买的两张独立机票</li>
                <li>"自行拼接"的转机行程</li>
                <li>不同航空公司的独立预订</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-2">
          <CheckCircle2 className="w-7 h-7 text-green-600" />
          七、如何收集延误证据？（实战指南）
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          成功获得赔偿的关键在于<strong>充分的证据</strong>。以下是系统化的证据收集清单：
        </p>

        <div className="space-y-6 mb-8">
          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              登机牌和行程单
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-8">
              <li><strong>登机牌（Boarding Pass）：</strong>保留原件或高清照片，某些航空公司会打印实际到达时间</li>
              <li><strong>电子机票（E-Ticket）：</strong>显示原始计划时间的官方文件</li>
              <li><strong>订单确认邮件：</strong>来自航空公司/OTA的预订确认（含航班号、时间）</li>
            </ul>
          </div>

          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              时间戳照片/截图
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-8">
              <li><strong>到达时拍摄：</strong>舱门打开后立即用手机拍摄，确保照片中包含：
                <ul className="list-circle list-inside ml-6 mt-1">
                  <li>手机屏幕显示的时间</li>
                  <li>登机口标识或机场环境</li>
                  <li>（最好）飞机舱门或机身编号</li>
                </ul>
              </li>
              <li><strong>航班信息屏幕：</strong>机场到达大厅的Flight Information Display（显示实际到达时间）</li>
              <li><strong>行李提取凭证：</strong>某些机场会在行李标签上打印提取时间</li>
            </ul>
          </div>

          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
              在线航班追踪记录
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-8">
              <li><strong>FlightRadar24.com：</strong>输入航班号+日期，查看历史飞行记录（包括"In-Block Time"即到达停机位时间）</li>
              <li><strong>FlightAware.com：</strong>类似功能，某些航线记录更详细</li>
              <li><strong>航空公司App：</strong>很多App会保留历史航班状态，截图保存</li>
              <li><strong>机场官网：</strong>部分机场提供历史到达查询（如法兰克福FRA、慕尼黑MUC）</li>
            </ul>
          </div>

          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
              航空公司官方文件
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-8">
              <li><strong>Flight Delay Certificate（延误证明）：</strong>在机场柜台主动索取，或事后通过客服申请</li>
              <li><strong>Irregular Operation Report：</strong>某些航空公司会自动发送延误/取消通知邮件</li>
              <li><strong>SMS/推送通知：</strong>保留航空公司App发送的实时更新消息</li>
            </ul>
          </div>

          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
              其他辅助证据
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-8">
              <li><strong>WiFi连接记录：</strong>连接机场WiFi的时间可作为参考（通常在舱门打开后数分钟）</li>
              <li><strong>出租车/Uber订单：</strong>离开机场的打车订单时间</li>
              <li><strong>社交媒体帖子：</strong>如果你在到达时发了朋友圈/微博（带时间戳）</li>
              <li><strong>信用卡消费记录：</strong>机场商店消费的时间戳</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 p-5 rounded-lg mb-8">
          <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            💡 专业建议：证据越多越好，但这些是核心
          </h4>
          <p className="text-green-800 text-sm leading-relaxed mb-3">
            虽然上述清单很全面，但实际上<strong>最关键的3样证据</strong>是：
          </p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-green-800 ml-2">
            <li><strong>登机牌/电子机票</strong>（证明你确实是该航班乘客）</li>
            <li><strong>航班追踪网站记录</strong>（客观第三方时间数据）</li>
            <li><strong>航空公司延误证明</strong>（最有力的直接证据）</li>
          </ol>
          <p className="text-green-800 text-sm mt-3 leading-relaxed">
            如果你有以上3样，<Link href="https://claimwinger.com" className="text-green-700 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">ClaimWinger</Link>的成功率接近100%。其他证据作为补充，能增强索赔的可信度。
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-2">
          <XCircle className="w-7 h-7 text-red-600" />
          八、航空公司常见拒赔理由及应对
        </h2>

        <p className="text-slate-700 leading-relaxed mb-6">
          即使延误明确超过3小时，航空公司仍可能试图拒绝赔偿。以下是最常见的4种借口及专业应对策略：
        </p>

        <div className="space-y-6 mb-8">
          <div className="border-l-4 border-red-500 bg-red-50 p-5 rounded-r-lg">
            <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              拒赔理由 #1："技术故障是不可预见情况"
            </h3>
            <div className="text-sm text-red-800 space-y-2">
              <div className="bg-red-100 p-3 rounded">
                <strong className="text-red-900">航空公司说法：</strong><br/>
                "您的航班因飞机技术故障延误，这属于EU 261第5(3)条规定的不可预见情况（extraordinary circumstances），因此我们不承担赔偿责任。"
              </div>
              <div className="bg-white border border-red-200 p-3 rounded">
                <strong className="text-green-900">✅ 正确应对：</strong>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                  <li><strong>引用判例：</strong>欧洲法院判决C-549/07 Wallentin-Hermann明确："普通技术故障不构成不可预见情况"</li>
                  <li><strong>要求详细说明：</strong>具体是什么故障？是否属于"隐藏的制造缺陷"或"破坏行为"？</li>
                  <li><strong>举证责任：</strong>航空公司必须证明故障<strong>完全不可避免</strong>且已采取所有合理措施</li>
                  <li><strong>关键论据：</strong>定期维护就应该发现的问题 = 不属于不可预见</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-5 rounded-r-lg">
            <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              拒赔理由 #2："空中交通管制延误"
            </h3>
            <div className="text-sm text-red-800 space-y-2">
              <div className="bg-red-100 p-3 rounded">
                <strong className="text-red-900">航空公司说法：</strong><br/>
                "延误是由于欧洲空域拥堵导致的空中交通管制（ATC）限制，这超出我们的控制范围。"
              </div>
              <div className="bg-white border border-red-200 p-3 rounded">
                <strong className="text-green-900">✅ 正确应对：</strong>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                  <li><strong>区分两类ATC延误：</strong>
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li><strong>系统性限制</strong>（影响所有航班）→ 可能免责</li>
                      <li><strong>个案延误</strong>（仅该航班，如前序延误导致错过起飞窗口）→ <strong>不免责</strong></li>
                    </ul>
                  </li>
                  <li><strong>要求证据：</strong>Eurocontrol的官方ATFM Delay Code（如果是真正的ATC问题会有记录）</li>
                  <li><strong>交叉验证：</strong>检查同时段其他航空公司是否也延误（FlightRadar24可查）</li>
                  <li><strong>替代措施：</strong>航空公司是否尝试申请替代航线或优先起飞？</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-5 rounded-r-lg">
            <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              拒赔理由 #3："恶劣天气"
            </h3>
            <div className="text-sm text-red-800 space-y-2">
              <div className="bg-red-100 p-3 rounded">
                <strong className="text-red-900">航空公司说法：</strong><br/>
                "由于起飞/到达机场的恶劣天气条件，我们被迫延误/取消航班。这是不可抗力因素。"
              </div>
              <div className="bg-white border border-red-200 p-3 rounded">
                <strong className="text-green-900">✅ 正确应对：</strong>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                  <li><strong>验证天气严重性：</strong>查询当天气象记录（METAR/TAF报告，Aviation Weather网站）</li>
                  <li><strong>对比其他航班：</strong>
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>如果其他航空公司<strong>正常起降</strong> → 不太可能是真正的不可抗力</li>
                      <li>如果所有航班都延误/取消 → 可能确实免责</li>
                    </ul>
                  </li>
                  <li><strong>季节性天气：</strong>冬季例行降雪、夏季常规雷暴 → <strong>可预见</strong>，不免责</li>
                  <li><strong>航空公司准备：</strong>是否有足够的除冰设备？是否提前调整运营？</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-5 rounded-r-lg">
            <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              拒赔理由 #4："延误未达到3小时"
            </h3>
            <div className="text-sm text-red-800 space-y-2">
              <div className="bg-red-100 p-3 rounded">
                <strong className="text-red-900">航空公司说法：</strong><br/>
                "根据我们的记录，航班延误2小时48分钟，未达到3小时的赔偿门槛。"
              </div>
              <div className="bg-white border border-red-200 p-3 rounded">
                <strong className="text-green-900">✅ 正确应对：</strong>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                  <li><strong>明确计算标准：</strong>EU 261规定以<strong>舱门打开时间</strong>为准，不是降落时间</li>
                  <li><strong>提供第三方证据：</strong>
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>FlightRadar24的"In-Block Time"</li>
                      <li>你自己的时间戳照片</li>
                      <li>机场WiFi连接日志</li>
                    </ul>
                  </li>
                  <li><strong>要求官方记录：</strong>航空公司内部系统有准确的gate arrival time，要求提供</li>
                  <li><strong>专业协助：</strong><Link href="https://claimwinger.com" className="text-blue-600 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">ClaimWinger</Link>可以通过法律渠道获取航空公司系统数据</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg mb-8">
          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" />
            💼 专业建议：何时需要法律支持？
          </h4>
          <p className="text-blue-800 text-sm leading-relaxed mb-3">
            如果航空公司以上述理由拒绝赔偿，<strong>不要轻易放弃</strong>。根据统计，约60-70%的初次拒绝实际上是不正当的。建议：
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 ml-2">
            <li><strong>第一次拒绝：</strong>回复正式信函，引用相关判例和证据</li>
            <li><strong>第二次拒绝：</strong>考虑使用<Link href="https://claimwinger.com" className="text-blue-700 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">ClaimWinger</Link>等专业服务（成功率98%，无风险）</li>
            <li><strong>航空公司坚持拒绝：</strong>ClaimWinger会代表你走法律程序（成本由他们承担）</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-orange-600" />
          九、常见错误：乘客容易犯的5个失误
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-orange-300 bg-orange-50 p-5 rounded-lg">
            <h3 className="font-bold text-orange-900 mb-2">❌ 错误 #1：混淆"降落时间"和"到达时间"</h3>
            <p className="text-sm text-orange-800 leading-relaxed">
              <strong>问题：</strong>很多人以飞机接地（touchdown）时刻计算延误，但EU 261明确规定以<strong>舱门打开</strong>为准。这通常有10-30分钟差距。<br/>
              <strong>解决：</strong>始终以"gate arrival"或"in-block time"为准确时间。
            </p>
          </div>

          <div className="border border-orange-300 bg-orange-50 p-5 rounded-lg">
            <h3 className="font-bold text-orange-900 mb-2">❌ 错误 #2：过早接受航空公司的"补偿voucher"</h3>
            <p className="text-sm text-orange-800 leading-relaxed">
              <strong>问题：</strong>航空公司可能在2h 30min延误时提供€50 voucher，试图让你放弃潜在的€600索赔权。<br/>
              <strong>解决：</strong>在<strong>确认准确延误时间之前</strong>，不要签署任何"放弃进一步索赔"的文件或接受现金补偿。Voucher ≠ EU 261赔偿。
            </p>
          </div>

          <div className="border border-orange-300 bg-orange-50 p-5 rounded-lg">
            <h3 className="font-bold text-orange-900 mb-2">❌ 错误 #3：未保留足够证据</h3>
            <p className="text-sm text-orange-800 leading-relaxed">
              <strong>问题：</strong>依赖航空公司"主动承认"延误，但实际上他们可能事后否认或缩短延误时长。<br/>
              <strong>解决：</strong>在到达机场后立即：(1) 拍摄时间戳照片 (2) 查询并截图FlightRadar24 (3) 保留登机牌和所有通知。
            </p>
          </div>

          <div className="border border-orange-300 bg-orange-50 p-5 rounded-lg">
            <h3 className="font-bold text-orange-900 mb-2">❌ 错误 #4：延迟提交索赔</h3>
            <p className="text-sm text-orange-800 leading-relaxed">
              <strong>问题：</strong>虽然索赔时效通常为2-6年（各国不同），但拖延会导致：证据丢失、记忆模糊、航空公司更容易拒绝。<br/>
              <strong>解决：</strong>建议在<strong>航班后30天内</strong>提交索赔，越快越好。使用<Link href="https://claimwinger.com" className="text-orange-700 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">ClaimWinger</Link>可在2分钟内在线提交。
            </p>
          </div>

          <div className="border border-orange-300 bg-orange-50 p-5 rounded-lg">
            <h3 className="font-bold text-orange-900 mb-2">❌ 错误 #5：轻易相信航空公司的"免责声明"</h3>
            <p className="text-sm text-orange-800 leading-relaxed">
              <strong>问题：</strong>航空公司客服可能简单声称"技术故障/天气"就拒绝赔偿，但很多情况下这些理由<strong>不符合法律标准</strong>。<br/>
              <strong>解决：</strong>要求航空公司<strong>详细书面解释</strong>为何认为情况属于"不可预见"，并附上证据。如有疑问，咨询专业服务验证其说法的合法性。
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">航班延误超过3小时？让我们帮您索赔最高€600</h2>
            <p className="text-blue-100 mb-6 text-lg">
              ClaimWinger专业团队处理所有文书工作和与航空公司的沟通。<strong className="text-white">98%成功率，完全无风险</strong>——只有成功获赔后才收取25%服务费。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://claimwinger.com?utm_source=problemlot&utm_medium=blog&utm_campaign=3hour_rule_cta1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-md inline-flex items-center gap-2"
              >
                <Award className="w-5 h-5" />
                免费检查我的航班资格
              </a>
              <span className="text-blue-100 text-sm">⚡ 2分钟在线申请 · 平均21天内收款</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900">❓ 常见问题解答（FAQ）</h2>

        <div className="space-y-4 mb-12">
          <details className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <summary className="font-semibold text-slate-900 cursor-pointer flex items-center gap-2">
              <span className="text-blue-600">Q1:</span>
              如果延误恰好是3小时整（180分钟），算不算达到赔偿门槛？
            </summary>
            <div className="mt-3 text-sm text-slate-700 pl-8 leading-relaxed">
              <strong className="text-green-700">✅ 算！</strong>EU 261规定的是"≥3小时"（greater than or equal to 3 hours），所以<strong>3小时00分00秒</strong>已经满足条件。不需要"超过"3小时，达到即可。例如：
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li>3h 00min → <strong>有权获赔</strong> ✅</li>
                <li>2h 59min 59s → <strong>无权获赔</strong> ❌（差1秒）</li>
              </ul>
            </div>
          </details>

          <details className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <summary className="font-semibold text-slate-900 cursor-pointer flex items-center gap-2">
              <span className="text-blue-600">Q2:</span>
              我的航班提前到达了，但登机口没有空位，在停机坪等了2小时才打开舱门。这算延误吗？
            </summary>
            <div className="mt-3 text-sm text-slate-700 pl-8 leading-relaxed">
              <strong className="text-orange-700">⚠️ 这是复杂情况。</strong>EU 261的延误时间以<strong>舱门打开</strong>为准，所以如果最终舱门打开时间比计划到达时间晚≥3小时，<strong>技术上你有权获赔</strong>。但航空公司可能辩称：
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li>"飞机准点到达，登机口延误是机场责任"</li>
                <li>这种情况下，建议咨询<Link href="https://claimwinger.com" className="text-blue-600 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">ClaimWinger</Link>专业评估，因为判例法仍在演变中。</li>
              </ul>
              <strong className="text-slate-900 mt-2 block">关键：</strong>如果延误原因是<strong>航空公司可控</strong>（如：他们自己的前序航班延误占用了登机口），则应该获赔。
            </div>
          </details>

          <details className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <summary className="font-semibold text-slate-900 cursor-pointer flex items-center gap-2">
              <span className="text-blue-600">Q3:</span>
              航空公司主动改签了我的航班（提前通知），新航班延误3小时。我能索赔吗？
            </summary>
            <div className="mt-3 text-sm text-slate-700 pl-8 leading-relaxed">
              <strong className="text-green-700">✅ 通常可以。</strong>关键在于<strong>最终到达目的地的时间</strong>：
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li>如果改签后的航班使你<strong>比原计划晚≥3小时到达</strong> → 有权获赔</li>
                <li>如果改签后准点或仅晚1-2小时 → 无权获赔</li>
              </ul>
              <strong className="text-slate-900 mt-2 block">补充：</strong>如果航空公司提前≥14天通知改签，且新航班符合"合理替代"标准（起飞不早于2h，到达不晚于4h），则可能免责。但如果改签后延误≥3小时到达，这个免责不适用。
            </div>
          </details>

          <details className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <summary className="font-semibold text-slate-900 cursor-pointer flex items-center gap-2">
              <span className="text-blue-600">Q4:</span>
              我的航班因罢工延误3小时，能获得赔偿吗？
            </summary>
            <div className="mt-3 text-sm text-slate-700 pl-8 leading-relaxed">
              <strong className="text-orange-700">⚠️ 取决于罢工类型：</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li><strong>✅ 可获赔：</strong>
                  <ul className="list-circle list-inside ml-6 mt-1">
                    <li><strong>航空公司员工罢工</strong>（飞行员、空乘、地勤）→ 这是公司内部管理问题，<strong>不属于不可预见</strong></li>
                    <li>欧洲法院判决（C-195/17 等）明确：公司员工罢工不免责</li>
                  </ul>
                </li>
                <li><strong>❌ 可能不获赔：</strong>
                  <ul className="list-circle list-inside ml-6 mt-1">
                    <li><strong>机场/ATC/安检人员罢工</strong>（非航空公司员工）→ 可能构成不可预见情况</li>
                    <li>但需要航空公司证明已采取所有合理措施（如：提前调配飞机、申请优先起飞）</li>
                  </ul>
                </li>
              </ul>
              <strong className="text-slate-900 mt-2 block">建议：</strong>罢工情况复杂，建议通过<Link href="https://claimwinger.com" className="text-blue-600 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">ClaimWinger</Link>进行专业评估（免费检查资格）。
            </div>
          </details>

          <details className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <summary className="font-semibold text-slate-900 cursor-pointer flex items-center gap-2">
              <span className="text-blue-600">Q5:</span>
              延误时航空公司提供了餐食和酒店，我还能索赔€600吗？
            </summary>
            <div className="mt-3 text-sm text-slate-700 pl-8 leading-relaxed">
              <strong className="text-green-700">✅ 完全可以！</strong>这是一个常见误解。EU 261规定的两项权利是<strong>独立的</strong>：
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li><strong>即时照顾义务</strong>（Right to Care）：延误2小时以上，航空公司<strong>必须</strong>提供餐食、通讯、必要时住宿</li>
                <li><strong>经济赔偿</strong>（Compensation）：延误≥3小时到达，你有权获得€250-600现金赔偿</li>
              </ul>
              <strong className="text-slate-900 mt-2 block">关键：</strong>
              <ul className="list-disc list-inside mt-1 space-y-1 ml-2">
                <li>接受餐食/酒店 ≠ 放弃现金赔偿权利</li>
                <li>除非你<strong>明确签署了"放弃索赔"的文件</strong>（通常航空公司不会主动要求签）</li>
                <li>这两项权利<strong>同时享有</strong>，互不冲突</li>
              </ul>
            </div>
          </details>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" />
            相关阅读推荐
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/zh/blog/how-many-hours-delay-compensation" className="text-blue-600 hover:underline flex items-center gap-2">
                <span>→</span> 航班延误几小时有赔偿？完整时间门槛指南（2h/3h/5h规则详解）
              </Link>
            </li>
            <li>
              <Link href="/zh/blog/compensation-vs-refund-difference" className="text-blue-600 hover:underline flex items-center gap-2">
                <span>→</span> 航空赔偿 vs 退款：区别、权利、如何同时申请
              </Link>
            </li>
            <li>
              <Link href="/zh/blog/extraordinary-circumstances-explained" className="text-blue-600 hover:underline flex items-center gap-2">
                <span>→</span> 什么是"非常情况"？航空公司常用免责理由详解
              </Link>
            </li>
            <li>
              <Link href="/zh/blog/which-flights-qualify-compensation" className="text-blue-600 hover:underline flex items-center gap-2">
                <span>→</span> 哪些航班符合EU 261赔偿？完整资格判断指南
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">✈️ 不确定是否有权获得赔偿？免费检查只需2分钟</h2>
            <p className="text-green-100 mb-6">
              输入航班信息，我们的AI系统立即告诉你是否符合€250-600赔偿条件。完全免费，无需注册。
            </p>
            <a
              href="https://claimwinger.com?utm_source=problemlot&utm_medium=blog&utm_campaign=3hour_rule_cta2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-md inline-flex items-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              立即检查资格（免费）
            </a>
            <p className="mt-4 text-green-100 text-sm">
              🔒 无风险 · 成功才收费 · 98%成功率 · 平均21天收款
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 mt-12">
          <p className="text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-900">法律声明：</strong>本文提供的信息仅供教育参考，不构成法律建议。EU 261/2004的具体应用可能因个案情况和司法管辖区而异。如需专业法律意见，建议咨询持牌航空法律师或使用<Link href="https://claimwinger.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ClaimWinger</Link>等专业航空乘客权利服务。本文最后更新于2026年2月。
          </p>
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
                  "name": "如果延误恰好是3小时整（180分钟），算不算达到赔偿门槛？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "算！EU 261规定的是'≥3小时'，所以3小时00分00秒已经满足条件。不需要'超过'3小时，达到即可。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "我的航班提前到达了，但登机口没有空位，在停机坪等了2小时才打开舱门。这算延误吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "EU 261的延误时间以舱门打开为准，所以如果最终舱门打开时间比计划到达时间晚≥3小时，技术上你有权获赔。但如果延误原因是航空公司可控（如前序航班延误占用登机口），则应该获赔。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "航空公司主动改签了我的航班，新航班延误3小时。我能索赔吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "通常可以。关键在于最终到达目的地的时间：如果改签后的航班使你比原计划晚≥3小时到达，你有权获赔。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "我的航班因罢工延误3小时，能获得赔偿吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "取决于罢工类型。航空公司员工罢工（飞行员、空乘、地勤）不属于不可预见情况，可以获赔。机场/ATC/安检人员罢工可能构成不可预见情况，但航空公司需证明已采取所有合理措施。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "延误时航空公司提供了餐食和酒店，我还能索赔€600吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "完全可以！即时照顾义务（餐食、住宿）和经济赔偿是独立的两项权利。接受餐食/酒店不等于放弃现金赔偿权利，除非你明确签署了'放弃索赔'的文件。"
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
