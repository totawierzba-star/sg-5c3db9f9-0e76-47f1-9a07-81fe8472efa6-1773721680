import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { Calendar, Euro, Ticket, AlertCircle, CheckCircle, XCircle, DollarSign, FileText, TrendingUp, Clock } from "lucide-react";

export default function CompensationVsRefundDifference() {
  return (
    <LayoutZh>
      <SEO 
        title="赔偿金vs退票款区别【2026】€600补偿≠机票退款！中国乘客必读"
        description="航班取消/延误后能拿多少钱？赔偿金€250-€600与退票款的关键区别详解。多数情况可以同时申请两者！3分钟搞懂你的全部权利"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/zh" className="hover:text-blue-600">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">赔偿金与退票款的区别</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              赔偿金与退票款的区别——哪个更合适？💰🎫
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                最后更新：2026年2月25日
              </span>
              <span>⏱️ 阅读时间：8 分钟</span>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong className="text-blue-900">重要发现：</strong>很多乘客误以为"赔偿金"和"退票款"是同一回事。实际上，它们是<strong>完全独立的两种权利</strong>，而且<strong>多数情况下可以同时申请！</strong>本文用3分钟帮你搞清楚所有关键区别。
              </p>
            </div>
          </header>

          {/* CTA Top */}
          <div className="my-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">💡 不确定能拿多少钱？</h3>
            <p className="text-lg mb-6 opacity-90">让专家免费评估您的案件——2分钟在线表格，立即知道能拿多少</p>
            <a 
              href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_compensation_vs_refund"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-md"
            >
              免费检查能拿多少钱 →
            </a>
          </div>

          {/* Core Difference Explanation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-blue-600" />
              核心区别：两种完全不同的权利
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Compensation Card */}
              <div className="bg-green-50 border-2 border-green-600 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Euro className="w-10 h-10 text-green-600" />
                  <h3 className="text-2xl font-bold text-green-900">赔偿金 (Compensation)</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">📋 <strong>定义：</strong></p>
                    <p className="text-sm text-gray-700">
                      基于<strong>EU 261/2004法规</strong>的<strong>固定金额补偿</strong>，因航空公司造成的延误/取消而支付。
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">💰 <strong>金额：</strong></p>
                    <p className="text-sm text-gray-700">
                      <strong>€250 / €400 / €600</strong>（根据距离）
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      与机票价格<strong>无关</strong>！€50的廉价机票也能拿€600
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">⚖️ <strong>法律依据：</strong></p>
                    <p className="text-sm text-gray-700">
                      欧盟乘客权益保护法规 (EU 261/2004)
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">✅ <strong>触发条件：</strong></p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• 延误≥3小时到达目的地</li>
                      <li>• 航班取消（非特殊情况）</li>
                      <li>• 被拒绝登机（超售）</li>
                    </ul>
                  </div>

                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-sm font-bold text-green-900">
                      ✅ 这是<strong>"惩罚性"赔偿</strong>，目的是让航空公司承担延误责任
                    </p>
                  </div>
                </div>
              </div>

              {/* Refund Card */}
              <div className="bg-blue-50 border-2 border-blue-600 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Ticket className="w-10 h-10 text-blue-600" />
                  <h3 className="text-2xl font-bold text-blue-900">退票款 (Refund)</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">📋 <strong>定义：</strong></p>
                    <p className="text-sm text-gray-700">
                      <strong>机票原价的退还</strong>（如果您选择不继续旅行）
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">💰 <strong>金额：</strong></p>
                    <p className="text-sm text-gray-700">
                      <strong>您实际支付的机票价格</strong>
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      包括税费，但不包括额外服务（座位选择、行李等）
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">⚖️ <strong>法律依据：</strong></p>
                    <p className="text-sm text-gray-700">
                      合同法（机票即购票合同）
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-2">✅ <strong>触发条件：</strong></p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• 航班取消且您不想改签</li>
                      <li>• 延误≥5小时且您放弃旅行</li>
                      <li>• 航空公司拒绝您登机</li>
                    </ul>
                  </div>

                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="text-sm font-bold text-blue-900">
                      ✅ 这是<strong>"合同退款"</strong>，因服务未提供而返还购买价
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Visual Comparison Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📊 快速对比表</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="border border-gray-700 px-4 py-3 text-left font-bold">对比项</th>
                    <th className="border border-gray-700 px-4 py-3 text-center font-bold bg-green-800">💰 赔偿金</th>
                    <th className="border border-gray-700 px-4 py-3 text-center font-bold bg-blue-800">🎫 退票款</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">金额标准</td>
                    <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">
                      固定：€250/€400/€600
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">
                      变动：机票实际价格
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">与票价关系</td>
                    <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">
                      <strong>无关</strong>（€50机票也能拿€600）
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">
                      <strong>相等</strong>（退多少取决于买多少）
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">法律依据</td>
                    <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">
                      EU 261/2004
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">
                      合同法
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">是否需要放弃旅行？</td>
                    <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">
                      <strong>不需要</strong>（改签后仍可申请）
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">
                      <strong>需要</strong>（退票=放弃这段行程）
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">延误也能拿？</td>
                    <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">
                      ✅ 能（≥3小时）
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">
                      ✅ 能（≥5小时且放弃旅行）
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">取消也能拿？</td>
                    <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">
                      ✅ 能（非特殊情况）
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">
                      ✅ 能（任何取消都可以）
                    </td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-3 font-bold">能否同时申请？</td>
                    <td colSpan={2} className="border border-gray-300 px-4 py-3 text-center font-bold text-green-700">
                      ✅ 大多数情况下<strong>可以同时拿！</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* When Can You Get Both */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              什么情况下可以同时拿到两者？
            </h2>

            <div className="bg-green-50 border-2 border-green-600 rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-8 h-8" />
                ✅ 最常见的"双重赔偿"情况
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">📅 情况1：航班取消且您不想改签</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>场景：</strong>汉莎航空取消了您上海→法兰克福的航班，您决定放弃旅行。
                  </p>
                  <div className="ml-4 space-y-1 text-sm text-gray-700">
                    <p>✅ <strong>退票款：</strong>€800（您机票的实际价格）</p>
                    <p>✅ <strong>赔偿金：</strong>€600（因航班取消的EU261补偿）</p>
                    <p className="font-bold text-green-700 mt-2">💰 <strong>总计：€1,400</strong></p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">⏱️ 情况2：延误≥5小时且您选择不继续</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>场景：</strong>法航航班延误7小时，您有重要会议决定放弃这次旅行。
                  </p>
                  <div className="ml-4 space-y-1 text-sm text-gray-700">
                    <p>✅ <strong>退票款：</strong>€650（机票价格）</p>
                    <p>✅ <strong>赔偿金：</strong>€600（因延误≥3小时的EU261补偿）</p>
                    <p className="font-bold text-green-700 mt-2">💰 <strong>总计：€1,250</strong></p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">🚫 情况3：被拒绝登机（超售）</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>场景：</strong>KLM超售，您在机场被告知无座位且不接受改签。
                  </p>
                  <div className="ml-4 space-y-1 text-sm text-gray-700">
                    <p>✅ <strong>退票款：</strong>€500（机票价格）</p>
                    <p>✅ <strong>赔偿金：</strong>€400（因拒绝登机的EU261补偿）</p>
                    <p className="font-bold text-green-700 mt-2">💰 <strong>总计：€900</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-yellow-900">⚠️ 关键规则：</strong>如果您<strong>接受航空公司的改签航班并继续旅行</strong>，通常<strong>无法申请退票款</strong>（因为您还是飞了），但<strong>仍可申请赔偿金</strong>（因为原航班延误/取消）。
              </p>
            </div>
          </section>

          {/* CTA Middle */}
          <div className="my-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <FileText className="w-16 h-16 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🎯 航班取消或延误？检查能拿多少钱</h3>
                <p className="text-gray-700 mb-4">
                  让ClaimWinger专家免费评估您的案件——可能同时拿到赔偿金+退票款！
                </p>
                <a 
                  href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_compensation_vs_refund_mid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  免费提交索赔 →
                </a>
              </div>
            </div>
          </div>

          {/* When You Can Only Get One */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              什么情况下只能拿一种？
            </h2>

            <div className="space-y-6">
              
              <div className="border border-orange-200 rounded-lg p-6 bg-orange-50">
                <h3 className="text-xl font-bold text-orange-900 mb-4">🔄 只能拿赔偿金（不能拿退票款）</h3>
                
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">场景：延误≥3小时但&lt;5小时，您接受改签</p>
                    <p className="text-sm text-gray-700 mb-2">
                      例：汉莎航班延误4小时，航空公司安排您改签下一班，您接受了。
                    </p>
                    <div className="ml-4 space-y-1 text-sm text-gray-700">
                      <p>✅ <strong>赔偿金：</strong>€600（因延误≥3小时）</p>
                      <p>❌ <strong>退票款：</strong>不能拿（因为您接受了改签并完成旅行）</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">场景：航班取消，您接受改签</p>
                    <p className="text-sm text-gray-700 mb-2">
                      例：KLM取消航班，您接受第二天的替代航班。
                    </p>
                    <div className="ml-4 space-y-1 text-sm text-gray-700">
                      <p>✅ <strong>赔偿金：</strong>€400（因航班取消）</p>
                      <p>❌ <strong>退票款：</strong>不能拿（您使用了替代航班）</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                <h3 className="text-xl font-bold text-blue-900 mb-4">🎫 只能拿退票款（不能拿赔偿金）</h3>
                
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">场景：延误&lt;3小时，您放弃旅行</p>
                    <p className="text-sm text-gray-700 mb-2">
                      例：航班延误2小时，您决定不飞了（例如个人原因）。
                    </p>
                    <div className="ml-4 space-y-1 text-sm text-gray-700">
                      <p>❌ <strong>赔偿金：</strong>不能拿（延误&lt;3小时不符合EU261）</p>
                      <p>❓ <strong>退票款：</strong>取决于机票条款（多数情况可以，但可能扣手续费）</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">场景："特殊情况"导致取消</p>
                    <p className="text-sm text-gray-700 mb-2">
                      例：严重暴风雪导致航班取消（真实的不可抗力）。
                    </p>
                    <div className="ml-4 space-y-1 text-sm text-gray-700">
                      <p>❌ <strong>赔偿金：</strong>不能拿（特殊情况豁免）</p>
                      <p>✅ <strong>退票款：</strong>可以拿（合同未履行，必须退款）</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Real Case Study */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              真实案例：李女士的€1,400双重赔偿
            </h2>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 案件详情</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">乘客</p>
                    <p className="font-bold text-gray-900">李女士（商务旅客）</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">航班</p>
                    <p className="font-bold text-gray-900">法航 AF116 上海PVG → 巴黎CDG</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">机票价格</p>
                    <p className="font-bold text-gray-900">€800（商务舱）</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">问题</p>
                    <p className="font-bold text-red-600">航班取消（技术故障）</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🔍 情况分析</h3>
                <div className="bg-white p-4 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">✅ 航班取消</p>
                      <p className="text-sm text-gray-600">法航提前12小时通知，原因：技术故障（非特殊情况）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">✅ 李女士拒绝改签</p>
                      <p className="text-sm text-gray-600">因为巴黎会议已取消，她决定放弃这次旅行</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">✅ 通过ClaimWinger申请</p>
                      <p className="text-sm text-gray-600">填写在线表格，上传机票和取消通知</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 text-white p-6 rounded-lg mb-6">
                <p className="text-lg mb-2">💰 <strong>最终结果</strong></p>
                <div className="space-y-2">
                  <p className="text-xl font-bold">1️⃣ 退票款：€800（法航直接退到原支付方式）</p>
                  <p className="text-xl font-bold">2️⃣ 赔偿金：€600（ClaimWinger帮助索取，扣除30%服务费后实际€420）</p>
                  <p className="text-3xl font-bold mt-4 pt-4 border-t border-green-400">总计：€1,220</p>
                </div>
                <p className="text-sm opacity-90 mt-4">
                  （机票€800全额 + EU261赔偿€420到手 = 比原机票价格多拿€420）
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>📝 李女士的评价：</strong>"我一开始以为只能拿退票款，没想到还能额外拿€420的赔偿金！ClaimWinger处理了所有手续，法航在18天内就支付了。真的很值得。"
                </p>
              </div>
            </div>
          </section>

          {/* Decision Flowchart */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              决策流程图：我能拿什么？
            </h2>

            <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-300">
              <div className="space-y-6">
                
                {/* Step 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">❓ 第1步：航班发生了什么？</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg text-center">
                      <p className="font-bold text-red-900">取消</p>
                    </div>
                    <div className="p-4 bg-orange-50 border-2 border-orange-300 rounded-lg text-center">
                      <p className="font-bold text-orange-900">延误≥3小时</p>
                    </div>
                    <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg text-center">
                      <p className="font-bold text-yellow-900">延误&lt;3小时</p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">❓ 第2步：您的选择？</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                      <p className="font-bold text-green-900 mb-2">✅ 接受改签/继续旅行</p>
                      <p className="text-sm text-gray-700">→ 可能获得<strong>赔偿金</strong></p>
                    </div>
                    <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                      <p className="font-bold text-blue-900 mb-2">🎫 放弃旅行/要求退票</p>
                      <p className="text-sm text-gray-700">→ 可能获得<strong>退票款+赔偿金</strong></p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">💰 第3步：您能拿到什么？</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-100 rounded-lg border-l-4 border-green-600">
                      <p className="font-bold text-green-900 mb-2">✅ 取消+放弃旅行</p>
                      <p className="text-sm text-gray-700">
                        → <strong>退票款€X</strong>（机票价格）+ <strong>赔偿金€250-€600</strong>
                      </p>
                    </div>

                    <div className="p-4 bg-green-100 rounded-lg border-l-4 border-green-600">
                      <p className="font-bold text-green-900 mb-2">✅ 延误≥5h+放弃旅行</p>
                      <p className="text-sm text-gray-700">
                        → <strong>退票款€X</strong> + <strong>赔偿金€250-€600</strong>
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-600">
                      <p className="font-bold text-yellow-900 mb-2">⚠️ 延误≥3h+接受改签</p>
                      <p className="text-sm text-gray-700">
                        → <strong>只有赔偿金€250-€600</strong>（无退票款）
                      </p>
                    </div>

                    <div className="p-4 bg-blue-100 rounded-lg border-l-4 border-blue-600">
                      <p className="font-bold text-blue-900 mb-2">ℹ️ 延误&lt;3h</p>
                      <p className="text-sm text-gray-700">
                        → <strong>可能只有退票款</strong>（如果您放弃且机票允许退）
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Common Airline Tactics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              警惕航空公司的混淆战术
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              航空公司经常故意混淆"赔偿金"和"退票款"的概念，试图让您放弃部分权利。以下是最常见的误导手法：
            </p>

            <div className="space-y-4">
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">❌ 战术1："我们已经给您退款了"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>航司话术：</strong>"您的机票已经退款到原支付方式，我们已经履行义务了。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong>✅ 真相：</strong>退票款（Refund）<strong>不等于</strong>赔偿金（Compensation）。即使拿到退款，您<strong>仍有权</strong>申请€250-€600的EU261赔偿！
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">❌ 战术2："接受代金券就等于放弃赔偿"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>航司话术：</strong>"我们给您€100代金券作为补偿，这已经是额外的善意了。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong>✅ 真相：</strong>代金券（Voucher）<strong>不是</strong>法定赔偿。您有权拒绝代金券并要求<strong>现金赔偿</strong>€250-€600。
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">❌ 战术3："您改签了就无法要求赔偿"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>航司话术：</strong>"您已经接受了我们的替代航班，因此无权再申请赔偿。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong>✅ 真相：</strong>接受改签<strong>不影响</strong>您申请赔偿金的权利。只要原航班延误≥3小时或被取消，您<strong>仍可</strong>申请€250-€600。
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">❌ 战术4："选择退票就无法拿赔偿金"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>航司话术：</strong>"退票和赔偿是二选一，您只能选择其中一个。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong>✅ 真相：</strong>这是<strong>彻头彻尾的谎言</strong>！退票款和赔偿金是<strong>独立的两种权利</strong>，大多数情况下<strong>可以同时申请</strong>。
                </p>
              </div>

            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-6">
              <p className="text-gray-700">
                <strong>💡 专业建议：</strong>如果航空公司试图用退票款、代金券或改签权利来<strong>抵消</strong>您的赔偿金权利，<strong>立即拒绝</strong>并通过ClaimWinger等专业平台申请。航司的客服可能不熟悉法律，但专业平台会确保您拿到<strong>所有应得的钱</strong>。
              </p>
            </div>
          </section>

          {/* How to Apply for Both */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              如何同时申请退票款和赔偿金？
            </h2>

            <div className="space-y-6">
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📝 步骤1：立即要求退票款</h3>
                <p className="text-gray-700 mb-4">
                  如果您决定放弃旅行（因航班取消或延误≥5小时）：
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>在机场直接联系航空公司柜台或客服</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>明确说明"我要求全额退票（Full Refund）"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>索取<strong>书面确认</strong>（邮件或纸质文件）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>退款通常7-14天到账（退回原支付方式）</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">💰 步骤2：单独申请EU261赔偿金</h3>
                <p className="text-gray-700 mb-4">
                  退票款是航空公司直接处理，但赔偿金需要<strong>单独申请</strong>：
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
                    <h4 className="font-bold text-blue-900 mb-3">✅ 推荐：通过ClaimWinger</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ 在线表格2分钟完成</li>
                      <li>✓ 无需自己联系航空公司</li>
                      <li>✓ 成功后收费（约30%）</li>
                      <li>✓ 平均14-28天拿到钱</li>
                      <li>✓ 拒绝就不收费</li>
                    </ul>
                    <a 
                      href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_compensation_vs_refund_step2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition-colors w-full text-center"
                    >
                      立即提交索赔 →
                    </a>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-300">
                    <h4 className="font-bold text-gray-900 mb-3">自行申请</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ 不支付佣金</li>
                      <li>✗ 需填写英文/德文表格</li>
                      <li>✗ 可能需要多次催促</li>
                      <li>✗ 平均2-6个月</li>
                      <li>✗ 航司可能拒绝/拖延</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>⚠️ 重要提示：</strong>退票款和赔偿金是<strong>两个独立的流程</strong>。即使您已经拿到退票款，<strong>仍需单独申请</strong>赔偿金。航空公司<strong>不会主动</strong>支付赔偿金。
                </p>
              </div>

            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ 常见问题</h2>
            
            <div className="space-y-6">
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q1: 我已经拿到退票款了，还能申请赔偿金吗？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> 可以！退票款和赔偿金是<strong>完全独立的两种权利</strong>。即使航空公司已经退款，您<strong>仍有权</strong>申请€250-€600的EU261赔偿金（前提是航班延误≥3小时或被取消且非特殊情况）。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q2: 航空公司给了我代金券，我还能要求现金赔偿吗？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> 可以！代金券（Voucher）<strong>不能代替</strong>法定的现金赔偿。您有权<strong>拒绝代金券</strong>并要求€250-€600的现金赔偿。即使您已经接受了代金券，仍可以事后申请现金赔偿。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q3: 我接受了改签航班，还能拿赔偿金吗？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> 可以！接受改签<strong>不影响</strong>您申请赔偿金的权利。只要原航班延误≥3小时或被取消（非特殊情况），即使您接受了替代航班，<strong>仍可</strong>申请€250-€600赔偿金。但您<strong>无法</strong>同时拿退票款（因为您使用了替代航班）。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q4: 退票款和赔偿金可以同时申请吗？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> 大多数情况下可以！条件：
                </p>
                <ul className="mt-2 space-y-1 text-gray-700 ml-6">
                  <li>• 航班取消且您<strong>不接受改签</strong> → 可以同时拿</li>
                  <li>• 延误≥5小时且您<strong>放弃旅行</strong> → 可以同时拿</li>
                  <li>• 被拒绝登机（超售）且不接受改签 → 可以同时拿</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  如果您接受改签并完成旅行，通常只能拿赔偿金（无退票款）。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q5: 哪个金额更高——退票款还是赔偿金？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> 取决于机票价格：
                </p>
                <ul className="mt-2 space-y-1 text-gray-700 ml-6">
                  <li>• 如果机票&lt;€250 → 赔偿金更高（最高€600）</li>
                  <li>• 如果机票&gt;€600 → 退票款更高（退回实际价格）</li>
                  <li>• <strong>最佳情况：同时拿两者</strong>（例：€800机票+€600赔偿=€1,400）</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q6: 航空公司说"退票就等于放弃赔偿"，这是真的吗？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> <strong className="text-red-600">假的！</strong>这是航空公司常用的误导话术。退票款（Refund）和赔偿金（Compensation）是<strong>两个独立的法律权利</strong>，申请退票<strong>不影响</strong>您申请赔偿金。如果航司这样说，可以直接拒绝并通过ClaimWinger等平台申请。
                </p>
              </div>

            </div>
          </section>

          {/* CTA Bottom */}
          <div className="my-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-10 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">💰 航班取消或延误？立即检查能拿多少钱</h3>
            <p className="text-lg mb-6 opacity-90">
              很多乘客不知道可以同时拿退票款+赔偿金。让ClaimWinger帮您最大化权益
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_compensation_vs_refund_bottom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-md"
              >
                免费提交索赔表格 →
              </a>
              <span className="text-sm opacity-75">2分钟完成 | 成功后付费 | 拒绝不收费</span>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 相关文章推荐</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              <Link href="/zh/blog/how-many-hours-delay-compensation" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                  航班延误几小时能索赔？€250/€400/€600赔偿标准详解
                </h3>
                <p className="text-gray-600 text-sm">
                  了解EU261规定的3小时延误门槛，以及如何根据航程距离计算赔偿金额
                </p>
              </Link>

              <Link href="/zh/blog/flight-cancellation-compensation-guide" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                  航班取消能赔多少钱？€250-€600索赔指南
                </h3>
                <p className="text-gray-600 text-sm">
                  航班突然取消？了解14天通知规则、替代航班权利和现金赔偿申请流程
                </p>
              </Link>

              <Link href="/zh/blog/which-flights-qualify-compensation" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                  哪些航班有资格申请延误赔偿？
                </h3>
                <p className="text-gray-600 text-sm">
                  完整解释EU 261保护范围，包括出发地、航司、目的地规则
                </p>
              </Link>

              <Link href="/zh/blog/eu261-regulation-explained-chinese-passengers" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                  EU 261/2004法规详解——中国乘客版
                </h3>
                <p className="text-gray-600 text-sm">
                  欧盟乘客权益保护法规的中文完整指南
                </p>
              </Link>

            </div>
          </section>

          {/* JSON-LD Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "我已经拿到退票款了，还能申请赔偿金吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "可以！退票款和赔偿金是完全独立的两种权利。即使航空公司已经退款，您仍有权申请€250-€600的EU261赔偿金（前提是航班延误≥3小时或被取消且非特殊情况）。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "航空公司给了我代金券，我还能要求现金赔偿吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "可以！代金券（Voucher）不能代替法定的现金赔偿。您有权拒绝代金券并要求€250-€600的现金赔偿。即使您已经接受了代金券，仍可以事后申请现金赔偿。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "我接受了改签航班，还能拿赔偿金吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "可以！接受改签不影响您申请赔偿金的权利。只要原航班延误≥3小时或被取消（非特殊情况），即使您接受了替代航班，仍可申请€250-€600赔偿金。但您无法同时拿退票款（因为您使用了替代航班）。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "退票款和赔偿金可以同时申请吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "大多数情况下可以！条件：航班取消且您不接受改签、延误≥5小时且您放弃旅行、被拒绝登机（超售）且不接受改签。如果您接受改签并完成旅行，通常只能拿赔偿金（无退票款）。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "航空公司说'退票就等于放弃赔偿'，这是真的吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "假的！这是航空公司常用的误导话术。退票款（Refund）和赔偿金（Compensation）是两个独立的法律权利，申请退票不影响您申请赔偿金。如果航司这样说，可以直接拒绝并通过ClaimWinger等平台申请。"
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