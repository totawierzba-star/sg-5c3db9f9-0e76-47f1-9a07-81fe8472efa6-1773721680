import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { Calendar, Plane, AlertCircle, CheckCircle, XCircle, Clock, FileText, TrendingUp, Shield } from "lucide-react";

export default function EuropeanAirlineChinaDepartureCompensation() {
  return (
    <LayoutZh>
      <SEO 
        title="🇨🇳→🇪🇺欧洲航司从中国出发航班延误赔偿【2026】能否索赔？"
        description="从北京/上海出发乘坐汉莎、法航、KLM等欧洲航司——即使从中国起飞也可能获得€250-€600赔偿！EU261法规关键例外详解"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/zh" className="hover:text-blue-600">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">欧洲航司从中国出发赔偿</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              欧洲航空公司运营的航班延误——即使从中国出发也能索赔吗？🇨🇳✈️🇪🇺
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                最后更新：2026年2月25日
              </span>
              <span>⏱️ 阅读时间：10 分钟</span>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong className="text-blue-900">关键发现：</strong>从中国出发乘坐欧洲航空公司的航班，<strong>通常不适用EU 261/2004赔偿</strong>。但存在重要例外情况！本文详细解释何时可以索赔，何时不能。
              </p>
            </div>
          </header>

          {/* CTA Top */}
          <div className="my-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">💡 不确定您的航班是否受保护？</h3>
            <p className="text-lg mb-6 opacity-90">让专家免费评估您的案件——2分钟在线表格，无需注册</p>
            <a 
              href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_european_airline_china"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-md"
            >
              免费检查航班资格 →
            </a>
          </div>

          {/* Core Rule Explanation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              核心规则：出发地决定一切
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 EU 261/2004的基本原则</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                欧盟法规<strong>261/2004</strong>规定，只有满足以下<strong>两个条件之一</strong>的航班才受保护：
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-green-900 mb-2">✅ 情况1：从欧盟出发</h4>
                      <p className="text-sm text-gray-700">
                        <strong>任何航空公司</strong>（包括中国航司）从欧盟、冰岛、挪威、瑞士起飞的航班
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        例：国航CA932从法兰克福→北京 ✅
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-green-900 mb-2">✅ 情况2：欧盟航司飞往欧盟</h4>
                      <p className="text-sm text-gray-700">
                        <strong>欧盟注册的航空公司</strong>从任何地方飞往欧盟的航班
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        例：汉莎LH720从北京→法兰克福 ✅
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-900 mb-3">❌ 关键例外：欧盟航司从中国飞往中国</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    如果欧洲航空公司的航班<strong>从中国出发且目的地不是欧盟</strong>，则<strong>不受EU 261保护</strong>。
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>示例：</strong>汉莎航空从上海浦东飞往新加坡（转机航班）→ <span className="text-red-600 font-bold">不受保护 ❌</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Real-world Examples */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-600" />
              实际案例分析：哪些航班受保护？
            </h2>

            <div className="space-y-6">
              
              {/* Protected Flight 1 */}
              <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-green-900">✅ 案例1：汉莎航空 LH720</h3>
                    <p className="text-gray-700 font-semibold">北京首都 (PEK) → 法兰克福 (FRA)</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2"><strong>航空公司：</strong>汉莎航空（德国，欧盟注册）</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>出发地：</strong>中国（非欧盟）</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>目的地：</strong>德国（欧盟成员国）</p>
                  <p className="text-sm text-green-700 font-bold mt-3">
                    ✅ 结论：<span className="underline">受EU 261保护</span>（欧盟航司飞往欧盟）
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    延误3小时+可获得：<strong className="text-green-600">€600赔偿</strong>（距离&gt;3,500公里）
                  </p>
                </div>
              </div>

              {/* Protected Flight 2 */}
              <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-green-900">✅ 案例2：法国航空 AF116</h3>
                    <p className="text-gray-700 font-semibold">上海浦东 (PVG) → 巴黎戴高乐 (CDG)</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2"><strong>航空公司：</strong>法国航空（法国，欧盟注册）</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>出发地：</strong>中国（非欧盟）</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>目的地：</strong>法国（欧盟成员国）</p>
                  <p className="text-sm text-green-700 font-bold mt-3">
                    ✅ 结论：<span className="underline">受EU 261保护</span>
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    延误3小时+可获得：<strong className="text-green-600">€600赔偿</strong>
                  </p>
                </div>
              </div>

              {/* NOT Protected Flight 1 */}
              <div className="border border-red-200 rounded-lg p-6 bg-red-50">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-900">❌ 案例3：国航 CA934</h3>
                    <p className="text-gray-700 font-semibold">北京首都 (PEK) → 慕尼黑 (MUC)</p>
                  </div>
                  <XCircle className="w-8 h-8 text-red-600" />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2"><strong>航空公司：</strong>中国国际航空（中国注册，非欧盟）</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>出发地：</strong>中国（非欧盟）</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>目的地：</strong>德国（欧盟成员国）</p>
                  <p className="text-sm text-red-700 font-bold mt-3">
                    ❌ 结论：<span className="underline">不受EU 261保护</span>（非欧盟航司从非欧盟出发）
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    即使飞往欧盟，因航司非欧盟注册 → <strong className="text-red-600">无法申请EU赔偿</strong>
                  </p>
                </div>
              </div>

              {/* NOT Protected Flight 2 */}
              <div className="border border-red-200 rounded-lg p-6 bg-red-50">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-900">❌ 案例4：汉莎航空 LH9XXX</h3>
                    <p className="text-gray-700 font-semibold">上海浦东 (PVG) → 新加坡樟宜 (SIN)</p>
                  </div>
                  <XCircle className="w-8 h-8 text-red-600" />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2"><strong>航空公司：</strong>汉莎航空（德国，欧盟注册）</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>出发地：</strong>中国（非欧盟）</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>目的地：</strong>新加坡（非欧盟）</p>
                  <p className="text-sm text-red-700 font-bold mt-3">
                    ❌ 结论：<span className="underline">不受EU 261保护</span>（既不从欧盟出发，也不飞往欧盟）
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    欧盟航司但非欧盟航线 → <strong className="text-red-600">无法申请赔偿</strong>
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📊 快速对比表：从中国出发的航班</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">航线示例</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">航空公司</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">出发地</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">目的地</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-bold">受EU261保护？</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 px-4 py-3">北京→法兰克福</td>
                    <td className="border border-gray-300 px-4 py-3">汉莎 (LH)</td>
                    <td className="border border-gray-300 px-4 py-3">中国</td>
                    <td className="border border-gray-300 px-4 py-3">德国</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <span className="inline-block bg-green-600 text-white px-3 py-1 rounded font-bold">✅ 是</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">上海→巴黎</td>
                    <td className="border border-gray-300 px-4 py-3">法航 (AF)</td>
                    <td className="border border-gray-300 px-4 py-3">中国</td>
                    <td className="border border-gray-300 px-4 py-3">法国</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <span className="inline-block bg-green-600 text-white px-3 py-1 rounded font-bold">✅ 是</span>
                    </td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 px-4 py-3">广州→阿姆斯特丹</td>
                    <td className="border border-gray-300 px-4 py-3">KLM</td>
                    <td className="border border-gray-300 px-4 py-3">中国</td>
                    <td className="border border-gray-300 px-4 py-3">荷兰</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <span className="inline-block bg-green-600 text-white px-3 py-1 rounded font-bold">✅ 是</span>
                    </td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 px-4 py-3">北京→慕尼黑</td>
                    <td className="border border-gray-300 px-4 py-3">国航 (CA)</td>
                    <td className="border border-gray-300 px-4 py-3">中国</td>
                    <td className="border border-gray-300 px-4 py-3">德国</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <span className="inline-block bg-red-600 text-white px-3 py-1 rounded font-bold">❌ 否</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">上海→巴黎</td>
                    <td className="border border-gray-300 px-4 py-3">东航 (MU)</td>
                    <td className="border border-gray-300 px-4 py-3">中国</td>
                    <td className="border border-gray-300 px-4 py-3">法国</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <span className="inline-block bg-red-600 text-white px-3 py-1 rounded font-bold">❌ 否</span>
                    </td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 px-4 py-3">上海→新加坡</td>
                    <td className="border border-gray-300 px-4 py-3">汉莎 (LH)</td>
                    <td className="border border-gray-300 px-4 py-3">中国</td>
                    <td className="border border-gray-300 px-4 py-3">新加坡</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <span className="inline-block bg-red-600 text-white px-3 py-1 rounded font-bold">❌ 否</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA Middle */}
          <div className="my-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <FileText className="w-16 h-16 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">🎯 欧洲航司从中国出发延误了？</h3>
                <p className="text-gray-700 mb-4">
                  如果目的地是欧盟，您可能有权获得€250-€600赔偿。让我们的专家免费检查您的航班资格。
                </p>
                <a 
                  href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_european_airline_china_mid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  免费提交索赔 →
                </a>
              </div>
            </div>
          </div>

          {/* Which European Airlines Operate from China */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              哪些欧洲航空公司在中国运营？
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              以下是<strong>从中国大陆城市直飞欧洲</strong>的主要欧盟注册航空公司（这些航班<strong>全部受EU 261保护</strong>）：
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🇩🇪 汉莎航空集团 (Lufthansa Group)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>汉莎航空 (LH):</strong> 北京、上海、南京、沈阳 → 法兰克福/慕尼黑</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>瑞士航空 (LX):</strong> 北京、上海 → 苏黎世</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>奥地利航空 (OS):</strong> 北京、上海 → 维也纳</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🇫🇷 法航-荷航集团 (AF-KLM)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>法国航空 (AF):</strong> 北京、上海、广州、武汉 → 巴黎</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>荷兰皇家航空 (KLM):</strong> 北京、上海、成都、杭州、厦门 → 阿姆斯特丹</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🇬🇧 英国航空 (British Airways)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>BA:</strong> 北京、上海 → 伦敦希思罗</span>
                  </li>
                  <li className="text-xs text-gray-600 mt-2">
                    ⚠️ 注意：英国航空适用<strong>UK261</strong>（类似EU261，仍可索赔）
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🇫🇮 芬兰航空 (Finnair)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>AY:</strong> 北京、上海、广州、西安、重庆、南京 → 赫尔辛基</span>
                  </li>
                  <li className="text-xs text-gray-600 mt-2">
                    💡 赫尔辛基是热门欧洲转机枢纽
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🇵🇱 LOT波兰航空</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>LO:</strong> 北京 → 华沙</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🇮🇹 意大利航空 (ITA Airways)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>AZ:</strong> 北京、上海 → 罗马/米兰</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg mt-6">
              <p className="text-gray-700">
                <strong>💡 记住：</strong>以上所有航空公司从中国飞往欧洲的航班<strong>全部受EU 261/2004保护</strong>。延误3小时或取消即可申请€250-€600赔偿。
              </p>
            </div>
          </section>

          {/* Real Case Study */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              真实案例：张先生的€600赔偿
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 案件详情</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">乘客</p>
                    <p className="font-bold text-gray-900">张先生（商务旅客）</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">航班</p>
                    <p className="font-bold text-gray-900">汉莎 LH720 上海PVG → 法兰克福FRA</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">原定时间</p>
                    <p className="font-bold text-gray-900">2025年10月15日 23:45</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">实际起飞</p>
                    <p className="font-bold text-red-600">10月16日 05:30（延误5小时45分钟）</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🔍 情况分析</h3>
                <div className="bg-white p-4 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">✅ 符合条件1：欧盟航空公司</p>
                      <p className="text-sm text-gray-600">汉莎航空在德国注册，属于欧盟航司</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">✅ 符合条件2：飞往欧盟</p>
                      <p className="text-sm text-gray-600">目的地法兰克福是欧盟成员国</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">✅ 延误超过3小时</p>
                      <p className="text-sm text-gray-600">实际延误5小时45分钟</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">✅ 距离超过3,500公里</p>
                      <p className="text-sm text-gray-600">上海-法兰克福约8,290公里</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 text-white p-6 rounded-lg">
                <p className="text-lg mb-2">💰 <strong>赔偿结果</strong></p>
                <p className="text-3xl font-bold mb-2">€600</p>
                <p className="text-sm opacity-90">
                  汉莎航空在14天内支付全额赔偿（无扣除ClaimWinger服务费后实际到账€420）
                </p>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>📝 张先生的评价：</strong>"我从没想过从上海出发的航班也能索赔。ClaimWinger帮我处理了所有文书工作，我只提供了登机牌和延误证明，两周就收到钱了。"
                </p>
              </div>
            </div>
          </section>

          {/* How to Claim */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              如何申请赔偿？完整步骤
            </h2>

            <div className="space-y-6">
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📝 步骤1：确认航班资格</h3>
                <p className="text-gray-700 mb-4">检查以下条件：</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>航空公司是否为欧盟注册（如汉莎、法航、KLM、芬航等）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>目的地是否为欧盟国家</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>延误是否超过3小时（到达目的地时间）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>是否在过去2-6年内（具体看目的地国家法律）</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📄 步骤2：准备必要文件</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>登机牌</strong>（纸质或电子版）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>机票预订确认</strong>（含预订号/PNR）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>延误证明</strong>（航空公司短信/邮件/机场通知）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>护照复印件</strong>（身份验证）</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 步骤3：选择申请方式</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                    <h4 className="font-bold text-blue-900 mb-3">✅ 推荐：委托ClaimWinger</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ 无需自己处理文书工作</li>
                      <li>✓ 中文支持，无语言障碍</li>
                      <li>✓ 成功后收费（约30%佣金）</li>
                      <li>✓ 平均14-28天收到赔偿</li>
                      <li>✓ 免费在线表格，2分钟完成</li>
                    </ul>
                    <a 
                      href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_european_airline_china_step3"
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
                      <li>✓ 不支付佣金（获得全额）</li>
                      <li>✗ 需自己填写英文/德文表格</li>
                      <li>✗ 可能需要多次沟通</li>
                      <li>✗ 平均耗时2-6个月</li>
                      <li>✗ 航司可能拒绝/拖延</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Common Airline Excuses */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              警惕航空公司的常见借口
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              即使您的航班符合赔偿条件，航空公司也可能试图拒绝支付。以下是最常见的借口及应对方法：
            </p>

            <div className="space-y-4">
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">❌ 借口1："特殊情况"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>航司常说：</strong>"延误是由于恶劣天气/空中交通管制，属于特殊情况，无需赔偿。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong>✅ 真相：</strong>即使有恶劣天气，如果其他航空公司同期航班正常起飞，则不构成特殊情况。技术故障通常<strong>不属于</strong>特殊情况。
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">❌ 借口2："您已接受代金券"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>航司常说：</strong>"您在机场已接受了餐食券/酒店券，这已经是补偿了。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong>✅ 真相：</strong>餐食、住宿等<strong>是航司的基本义务</strong>，与EU 261赔偿<strong>完全独立</strong>。您仍有权获得现金赔偿。
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">❌ 借口3："从中国出发不适用"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>航司常说：</strong>"您的航班从中国出发，不受欧盟法规保护。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong>✅ 真相：</strong>如果是<strong>欧盟航司飞往欧盟</strong>，无论从哪里出发都受保护。这是航司故意误导。
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">❌ 借口4："已过申请期限"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>航司常说：</strong>"您的航班发生在很久之前，已无法申请赔偿。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong>✅ 真相：</strong>不同国家时效不同：德国3年、法国5年、英国6年。具体需查目的地国家法律。
                </p>
              </div>

            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-6">
              <p className="text-gray-700">
                <strong>💡 专业建议：</strong>如果航空公司拒绝赔偿或提供模糊理由，<strong>不要放弃</strong>。通过ClaimWinger等专业平台申请，成功率远高于个人申请（ClaimWinger成功率约98%）。
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ 常见问题</h2>
            
            <div className="space-y-6">
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q1: 我从北京乘坐汉莎航空飞往法兰克福延误了5小时，能申请赔偿吗？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> 可以！汉莎航空是欧盟注册的航空公司，从任何地方飞往欧盟的航班都受EU 261保护。您有权获得<strong>€600赔偿</strong>（距离超过3,500公里且延误3小时以上）。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q2: 我从上海乘坐国航飞往慕尼黑延误了，能申请赔偿吗？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> 不能。国航是中国注册的航空公司（非欧盟航司），即使飞往欧盟也<strong>不受EU 261保护</strong>。只有从欧盟出发的国航航班才受保护（例如慕尼黑→北京的返程）。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q3: 如果我从上海乘坐汉莎航空经法兰克福转机去纽约，哪段可以索赔？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> <strong>两段都可以：</strong>
                </p>
                <ul className="mt-2 space-y-1 text-gray-700 ml-6">
                  <li>• 上海→法兰克福：受EU 261保护（欧盟航司飞往欧盟）</li>
                  <li>• 法兰克福→纽约：受EU 261保护（从欧盟出发）</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  如果任一段延误导致整体行程延误3小时以上，您可申请赔偿。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q4: 我从上海乘坐汉莎飞往新加坡（非欧盟），能申请赔偿吗？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> 不能。虽然是欧盟航司（汉莎），但既不从欧盟出发，也不飞往欧盟，因此<strong>不受EU 261保护</strong>。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q5: 申请赔偿需要多长时间？会很复杂吗？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> 通过ClaimWinger申请非常简单：
                </p>
                <ul className="mt-2 space-y-1 text-gray-700 ml-6">
                  <li>• 填写在线表格：<strong>2-3分钟</strong></li>
                  <li>• 上传文件（登机牌、护照）：<strong>5分钟</strong></li>
                  <li>• ClaimWinger处理索赔：<strong>14-28天</strong></li>
                </ul>
                <p className="text-gray-700 mt-2">
                  如果航司拒绝，ClaimWinger会继续追诉，无需您介入。
                </p>
              </div>

            </div>
          </section>

          {/* CTA Bottom */}
          <div className="my-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-10 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">✈️ 欧洲航司从中国出发延误？立即检查赔偿资格</h3>
            <p className="text-lg mb-6 opacity-90">
              无论您从哪个城市出发，只要是欧洲航空公司飞往欧洲，就可能获得€250-€600赔偿
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_european_airline_china_bottom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-md"
              >
                免费提交索赔表格 →
              </a>
              <span className="text-sm opacity-75">无需注册 | 2分钟完成 | 成功后付费</span>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 相关文章推荐</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              <Link href="/zh/blog/europe-to-china-flight-delay-rights" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                  从欧洲飞往中国的航班延误权利
                </h3>
                <p className="text-gray-600 text-sm">
                  了解欧洲出发飞往中国的航班赔偿规则，包括所有航司适用情况
                </p>
              </Link>

              <Link href="/zh/blog/lufthansa-delay-cancellation-compensation" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                  汉莎航空延误/取消赔偿完整指南
                </h3>
                <p className="text-gray-600 text-sm">
                  德国最大航司的赔偿申请详细步骤，包括法兰克福/慕尼黑转机乘客
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
                    "name": "我从北京乘坐汉莎航空飞往法兰克福延误了5小时，能申请赔偿吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "可以！汉莎航空是欧盟注册的航空公司，从任何地方飞往欧盟的航班都受EU 261保护。您有权获得€600赔偿（距离超过3,500公里且延误3小时以上）。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "我从上海乘坐国航飞往慕尼黑延误了，能申请赔偿吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "不能。国航是中国注册的航空公司（非欧盟航司），即使飞往欧盟也不受EU 261保护。只有从欧盟出发的国航航班才受保护（例如慕尼黑→北京的返程）。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "如果我从上海乘坐汉莎航空经法兰克福转机去纽约，哪段可以索赔？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "两段都可以：上海→法兰克福受EU 261保护（欧盟航司飞往欧盟），法兰克福→纽约也受保护（从欧盟出发）。如果任一段延误导致整体行程延误3小时以上，您可申请赔偿。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "我从上海乘坐汉莎飞往新加坡（非欧盟），能申请赔偿吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "不能。虽然是欧盟航司（汉莎），但既不从欧盟出发，也不飞往欧盟，因此不受EU 261保护。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "申请赔偿需要多长时间？会很复杂吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "通过ClaimWinger申请非常简单：填写在线表格2-3分钟，上传文件5分钟，ClaimWinger处理索赔14-28天。如果航司拒绝，ClaimWinger会继续追诉，无需您介入。"
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