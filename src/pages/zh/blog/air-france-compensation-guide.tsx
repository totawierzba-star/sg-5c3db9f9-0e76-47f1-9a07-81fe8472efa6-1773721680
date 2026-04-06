import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { 
  Plane, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Euro,
  MapPin,
  Scale,
  ShieldCheck,
  TrendingUp,
  Users,
  Award
} from "lucide-react";

export default function AirFranceCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="法国航空延误/取消赔偿完整指南 2026 | 中国乘客权利 €600"
        description="法国航空航班延误或取消？中国乘客如何获得 €250-€600 欧盟赔偿。巴黎-北京/上海/广州航线完整指南 + 专业索赔服务。"
        url="https://problemlot.com/zh/blog/air-france-compensation-guide"
        image="https://problemlot.com/og-image.png"
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Breadcrumb Navigation */}
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">
              首页
            </Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog/eu261-uk261-passenger-rights" className="hover:text-blue-600 dark:hover:text-blue-400">
              博客
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-slate-100">法国航空赔偿指南</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4 text-sm text-slate-600 dark:text-slate-400">
              <Plane className="w-5 h-5 text-blue-600" />
              <span>法国航空（Air France）</span>
              <span>•</span>
              <time dateTime="2026-02-01">2026年2月1日</time>
              <span>•</span>
              <span>约 10 分钟阅读</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              法国航空延误或取消航班赔偿完整指南 2026
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              中国乘客如何获得 <strong className="text-blue-600 dark:text-blue-400">€250-€600</strong> 欧盟赔偿 | 巴黎-北京/上海/广州航线权利详解
            </p>
          </header>

          {/* AI Overview - Featured Snippet Optimized */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8 mb-12 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600 rounded-full p-3">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  🎯 核心真相（立即了解）
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  为 AI 搜索和 Google Featured Snippets 优化
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 space-y-4 shadow-sm">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  法国航空 = 欧盟航空公司（法国） = 受 EU 261/2004 法规完全保护
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    何时受保护：
                  </h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>所有从欧盟出发的法航航班</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>所有到达欧盟的法航航班</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>巴黎戴高乐机场（CDG）转机航班</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>国籍不影响 - 中国护照同样受保护</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <Euro className="w-5 h-5 text-blue-600" />
                    赔偿金额：
                  </h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-center justify-between bg-slate-50 dark:bg-slate-700 px-3 py-2 rounded">
                      <span>短途 (≤1,500 km)</span>
                      <strong className="text-blue-600">€250</strong>
                    </li>
                    <li className="flex items-center justify-between bg-slate-50 dark:bg-slate-700 px-3 py-2 rounded">
                      <span>中途 (1,500-3,500 km)</span>
                      <strong className="text-blue-600">€400</strong>
                    </li>
                    <li className="flex items-center justify-between bg-slate-50 dark:bg-slate-700 px-3 py-2 rounded">
                      <span>长途 (&gt;3,500 km)</span>
                      <strong className="text-blue-600 text-lg">€600</strong>
                    </li>
                    <li className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded border border-green-300 dark:border-green-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <strong className="text-green-700 dark:text-green-400">所有中国航线 = €600！</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mt-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>重要提示：</strong> 延误必须 ≥3 小时到达，或航班被取消且非"特殊情况"导致。
                </p>
              </div>
            </div>
          </div>

          {/* CTA 1 - After AI Overview */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 mb-12 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">您的法航航班延误或取消了吗？</h3>
                <p className="text-blue-100">
                  立即免费检查您是否有权获得 €250-€600 欧盟赔偿 - 无风险，只需 2 分钟
                </p>
              </div>
              <a
                href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
              >
                免费检查我的航班 →
              </a>
            </div>
          </div>

          {/* Air France China Routes Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-blue-600" />
              法国航空中国航线及赔偿金额
            </h2>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-100 dark:bg-slate-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 dark:text-slate-100">航线</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 dark:text-slate-100">航班号</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 dark:text-slate-100">距离</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 dark:text-slate-100">赔偿金额</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 dark:text-slate-100">备注</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                      <td className="px-6 py-4 text-slate-900 dark:text-slate-100 font-medium">
                        巴黎 ↔ 北京<br />
                        <span className="text-sm text-slate-500">(CDG-PEK)</span>
                      </td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">AF382/383</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">~8,200 km</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                          €600
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">每日直飞</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                      <td className="px-6 py-4 text-slate-900 dark:text-slate-100 font-medium">
                        巴黎 ↔ 上海<br />
                        <span className="text-sm text-slate-500">(CDG-PVG)</span>
                      </td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">AF116/117</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">~9,200 km</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                          €600
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">每日直飞</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                      <td className="px-6 py-4 text-slate-900 dark:text-slate-100 font-medium">
                        巴黎 ↔ 广州<br />
                        <span className="text-sm text-slate-500">(CDG-CAN)</span>
                      </td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">AF188/189</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">~9,600 km</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                          €600
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">南方航线</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                      <td className="px-6 py-4 text-slate-900 dark:text-slate-100 font-medium">
                        巴黎 ↔ 武汉<br />
                        <span className="text-sm text-slate-500">(CDG-WUH)</span>
                      </td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">AF398/399</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">~8,900 km</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                          €600
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">中部航线</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                      <td className="px-6 py-4 text-slate-900 dark:text-slate-100 font-medium">
                        巴黎 ↔ 香港<br />
                        <span className="text-sm text-slate-500">(CDG-HKG)</span>
                      </td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">AF188</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">~9,600 km</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                          €600
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">经广州或直飞</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 px-6 py-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>关键洞察：</strong> 所有法国航空中国航线都属于长途航线（&gt;3,500 km），因此延误 ≥3 小时或取消时，赔偿金额均为最高档 <strong className="text-blue-600">€600</strong>！
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* Real-World Scenarios */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              中国乘客真实案例分析
            </h2>

            <div className="space-y-6">
              {/* Scenario 1 - Protected */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      场景 1：巴黎返回北京延误 ✅ 受保护
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      <strong>王女士</strong>（中国护照）从巴黎戴高乐机场乘坐 <strong>法航 AF383</strong> 返回北京。航班延误 5 小时到达。
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      航班信息
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li><strong>出发地：</strong> 巴黎（法国 = 欧盟）</li>
                      <li><strong>目的地：</strong> 北京（中国）</li>
                      <li><strong>航空公司：</strong> 法国航空（欧盟航司）</li>
                      <li><strong>距离：</strong> ~8,200 km</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                      <Scale className="w-4 h-4 text-green-600" />
                      法律分析
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li><strong>适用规则：</strong> EU261 ✓</li>
                      <li><strong>理由：</strong> 从欧盟出发</li>
                      <li><strong>到达延误：</strong> 5 小时 (≥3h) ✓</li>
                      <li><strong>赔偿金额：</strong> <strong className="text-green-600">€600</strong></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong className="text-green-700 dark:text-green-400">✓ 为什么受保护？</strong> 
                    航班从欧盟境内（法国）出发，无论航空公司飞往何处、乘客持有哪国护照，都受 EU261 完全保护。王女士的中国护照<strong>完全不影响</strong>她的 €600 赔偿权利。
                  </p>
                </div>
              </div>

              {/* Scenario 2 - Not Protected */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 dark:bg-red-900 rounded-full p-3">
                    <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      场景 2：中国东航飞巴黎延误 ❌ 不受保护
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      <strong>李先生</strong>（中国护照）从上海浦东机场乘坐 <strong>东航 MU569</strong> 飞往巴黎。航班延误 6 小时到达。
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      航班信息
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li><strong>出发地：</strong> 上海（中国 ≠ 欧盟）</li>
                      <li><strong>目的地：</strong> 巴黎（法国）</li>
                      <li><strong>航空公司：</strong> 中国东方航空（非欧盟航司）</li>
                      <li><strong>距离：</strong> ~9,200 km</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      法律分析
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li><strong>适用规则：</strong> 不受 EU261 保护 ✗</li>
                      <li><strong>理由：</strong> 非欧盟航司 + 从中国出发</li>
                      <li><strong>替代方案：</strong> 中国民航法规</li>
                      <li><strong>欧盟赔偿：</strong> <strong className="text-red-600">€0</strong></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong className="text-red-700 dark:text-red-400">✗ 为什么不受保护？</strong> 
                    中国东方航空不是欧盟航空公司，且航班从非欧盟国家（中国）出发。EU261 不适用于此类航班。李先生需要根据<strong>东航运输条款</strong>或<strong>中国民航法规</strong>寻求补偿。
                  </p>
                </div>
              </div>

              {/* Scenario 3 - Paris Transfer */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      场景 3：巴黎转机错过最终航班 ✅ 受保护
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      <strong>陈女士</strong>预订了北京 → 巴黎 (AF382) → 伦敦 (AF1680) 的<strong>单张联程票</strong>。第一段延误导致她错过巴黎到伦敦的航班，最终到达伦敦延误 5 小时。
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      航班信息
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li><strong>完整行程：</strong> 北京 → 巴黎 → 伦敦</li>
                      <li><strong>航空公司：</strong> 法国航空（两段）</li>
                      <li><strong>订票：</strong> 单张联程票 ✓</li>
                      <li><strong>最终延误：</strong> 5 小时</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                      <Scale className="w-4 h-4 text-green-600" />
                      法律分析
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li><strong>适用规则：</strong> EU261 - 整个行程 ✓</li>
                      <li><strong>理由：</strong> 欧盟航司飞往欧盟</li>
                      <li><strong>计算方式：</strong> 北京-伦敦总距离</li>
                      <li><strong>赔偿金额：</strong> <strong className="text-green-600">€600</strong></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    <strong className="text-green-700 dark:text-green-400">✓ 关键点：</strong>
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>单张票</strong> = 整个行程视为一个航班，受 EU261 保护</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>最终到达延误 ≥3h = 有权获得赔偿</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>即使第一段从中国出发，法航是欧盟航司且到达欧盟 = 受保护</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Scenario 4 - Cancellation */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-3">
                    <AlertCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      场景 4：法航取消航班当天通知 ✅ 受保护
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      <strong>张先生</strong>预订了上海 → 巴黎 (AF116)。起飞当天，法航通知航班取消，改签到次日航班。
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      航班信息
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li><strong>航线：</strong> 上海 → 巴黎</li>
                      <li><strong>问题：</strong> 航班取消（起飞当天通知）</li>
                      <li><strong>改签：</strong> 次日同一航线</li>
                      <li><strong>通知时间：</strong> &lt;14 天</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                      <Scale className="w-4 h-4 text-green-600" />
                      权利与赔偿
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li><strong>现金赔偿：</strong> <strong className="text-green-600">€600</strong></li>
                      <li><strong>酒店住宿：</strong> 免费提供 ✓</li>
                      <li><strong>餐饮券：</strong> 免费提供 ✓</li>
                      <li><strong>机场交通：</strong> 免费提供 ✓</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong className="text-green-700 dark:text-green-400">✓ 法航必须提供：</strong> 
                    取消航班且提前 &lt;14 天通知时，航空公司必须支付 €600 现金赔偿 <strong>+</strong> 照顾义务（酒店、餐饮、交通）。接受改签<strong>不影响</strong>您的现金赔偿权利。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* When NOT Eligible */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              何时不能索赔？特殊情况详解
            </h2>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  EU261 法规规定的"特殊情况"（Extraordinary Circumstances）
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  如果延误或取消是由于"特殊情况"导致，且航空公司已采取所有合理措施，则可能免除赔偿义务。但<strong>航空公司必须证明</strong>这些情况。
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                  <h4 className="font-bold text-green-800 dark:text-green-300 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    ✅ 通常属于"特殊情况"
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">•</span>
                      <span><strong>极端天气：</strong> 飓风、暴风雪、火山灰（如 2010 年冰岛火山）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">•</span>
                      <span><strong>空中交通管制：</strong> ATC 罢工、空域限制</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">•</span>
                      <span><strong>安全威胁：</strong> 恐怖袭击警告、政治动荡</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">•</span>
                      <span><strong>突发外部事件：</strong> 鸟撞导致引擎损坏、跑道异物</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">•</span>
                      <span><strong>医疗紧急情况：</strong> 乘客突发疾病需紧急降落</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
                  <h4 className="font-bold text-red-800 dark:text-red-300 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    ❌ 通常不属于"特殊情况"
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">•</span>
                      <span><strong>技术故障：</strong> 常规维护未完成、可预见的机械问题</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">•</span>
                      <span><strong>法航员工罢工：</strong> 飞行员、空乘、地勤人员罢工</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">•</span>
                      <span><strong>机组问题：</strong> 机组人员生病、未按时到岗</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">•</span>
                      <span><strong>航班调度问题：</strong> 前序航班延误、飞机轮换问题</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-0.5">•</span>
                      <span><strong>燃油短缺：</strong> 航空公司计划不周</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  🔍 灰色地带：需具体分析
                </h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    <span><strong>"隐藏制造缺陷"：</strong> 起飞后发现的未知缺陷 - 法航需详细证明</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    <span><strong>"轻微天气"：</strong> 小雨、一般风力 - 通常不算特殊情况</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">→</span>
                    <span><strong>"第三方罢工"：</strong> 机场地勤罢工（非法航员工）- 可能算特殊情况</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">
                  💡 关键提示：
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>举证责任在法航：</strong> 如果法航声称"特殊情况"，他们必须提供详细证据（天气报告、ATC 通知、技术日志等）。<strong>ClaimWinger 会要求法航提供这些文件</strong>，如果证据不足，我们将挑战拒赔决定。
                </p>
              </div>
            </div>
          </section>

          {/* Other Non-Eligible Cases */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              其他无法索赔的情况
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <Clock className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                      到达延误 &lt; 3 小时
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      EU261 只保护到达延误 ≥3 小时的航班。即使起飞延误很久，只要最终到达延误 &lt;3h，无赔偿。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                      提前 14+ 天通知取消
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      法航提前 14 天或更早通知取消 + 提供合理替代航班 = 无现金赔偿（但您有权改签或退款）。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                      您错过了值机时间
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      如果您未按时值机或未按时到达登机口，航空公司不承担赔偿责任（即使航班后来延误）。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                      您已签署"放弃赔偿"协议
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      如果您明确签署文件放弃赔偿权利（极少见），则无法索赔。<strong>注意：</strong>接受改签或代金券通常<strong>不算</strong>放弃。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA 2 - After Scenarios */}
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 mb-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold">不确定您的航班是否符合条件？</h3>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                让 ClaimWinger 的专家团队为您<strong>免费评估</strong>。我们拥有 <strong className="text-white">98% 成功率</strong>，已帮助数千名中国乘客成功获得欧盟赔偿。
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">98%</div>
                  <div className="text-sm text-blue-100">成功率</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">€450</div>
                  <div className="text-sm text-blue-100">平均赔偿金额（扣费后）</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">8-12周</div>
                  <div className="text-sm text-blue-100">平均处理时间</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                >
                  免费检查我的航班 →
                </a>
                <a
                  href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all text-center"
                >
                  了解工作流程
                </a>
              </div>
            </div>
          </div>

          {/* Why ClaimWinger Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-blue-600" />
              为什么选择 ClaimWinger 处理法航赔偿？
            </h2>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg mb-8">
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                法国航空是欧洲最大的航空公司之一，处理他们的赔偿案件需要<strong>专业法律知识</strong>和<strong>法语/英语沟通能力</strong>。ClaimWinger 专为国际乘客（包括中国公民）提供<strong>无风险、专业高效</strong>的索赔服务。
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                  <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                    🎯 98% 成功率
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>专业法律团队，数千成功案例</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>熟悉法航拒赔策略和应对方法</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>必要时在法国法院提起诉讼</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                  <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Euro className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                    💰 无风险 - 只在成功后收费
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>不成功不收费</strong> - 零风险</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>通常收取 25% + 增值税（从赔偿中扣除）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>€600 赔偿 → 您净得 ~€450</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                  <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                    ⚡ 8-12 周获得赔偿
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>我们处理所有法律程序</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>与法航直接沟通（法语/英语）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>您无需做任何事 - 坐等收钱</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* China-Specific Benefits */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-8 shadow-lg border-2 border-amber-200 dark:border-amber-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                <Users className="w-7 h-7 text-amber-600" />
                专为中国乘客提供的服务
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">中文咨询支持</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        通过合作伙伴提供中文沟通服务，无语言障碍
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-amber-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">接受中国银行账户收款</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        SWIFT 银行转账直接到您的中国银行账户
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-amber-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">无需欧盟身份或居留证</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        只需护照复印件和登机牌 - 游客、学生、商务旅客均可
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">处理所有语言障碍</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        我们用法语/英语与法航沟通 - 您无需直接联系航空公司
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-amber-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">对抗"国籍拒赔"</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        我们熟悉中国乘客常遇到的问题，并知道如何应对
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-amber-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">熟悉法航拒赔套路</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        技术问题、天气、特殊情况 - 我们知道如何挑战这些借口
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Air France Common Refusal Tactics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              法航常见拒赔策略及 ClaimWinger 应对方法
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 dark:bg-red-900 rounded-full p-3 flex-shrink-0">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      拒赔理由 #1："技术问题属于特殊情况"
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      法航经常声称延误是由于"不可预见的技术故障"，因此免除赔偿责任。
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    ClaimWinger 应对策略：
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">→</span>
                      <span>要求法航提供<strong>详细技术日志</strong>和维护记录</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">→</span>
                      <span>证明故障是否<strong>真正"不可预见"</strong>且非例行维护问题</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">→</span>
                      <span>如果是常见故障，法航应有<strong>备用飞机或预防措施</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">→</span>
                      <span>根据欧洲法院判例（Wallentin-Hermann 案），大多数技术问题<strong>不属于</strong>特殊情况</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 dark:bg-red-900 rounded-full p-3 flex-shrink-0">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      拒赔理由 #2："您接受了改签，因此放弃赔偿"
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      法航声称您接受改签或替代航班就意味着放弃了现金赔偿权利。
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    ClaimWinger 应对策略：
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">→</span>
                      <span>引用 <strong>EU261 第 8 条</strong>：照顾义务（改签、酒店）<strong>不影响</strong>赔偿权利</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">→</span>
                      <span>改签是航空公司的<strong>义务</strong>，不是"补偿"或"交换条件"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">→</span>
                      <span>只有明确签署<strong>"放弃赔偿"文件</strong>才算放弃（极少见）</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 dark:bg-red-900 rounded-full p-3 flex-shrink-0">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      拒赔理由 #3："空中交通管制导致，不是我们的错"
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      法航声称延误是由于 ATC（空中交通管制）限制，因此属于特殊情况。
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    ClaimWinger 应对策略：
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">→</span>
                      <span>要求法航提供 <strong>ATC 官方通知</strong>或证明文件</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">→</span>
                      <span>检查<strong>同一时段其他航班</strong>是否也受影响（如果只有法航延误 → 不是 ATC 原因）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">→</span>
                      <span>区分"一般性 ATC 延误"（航空公司应预见并管理）vs"ATC 罢工"（真正的特殊情况）</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <p className="text-slate-700 dark:text-slate-300 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-blue-800 dark:text-blue-300">ClaimWinger 的优势：</strong> 
                  我们处理了数千起法航案件，熟知他们的所有拒赔策略。我们拥有专业法律团队和法语母语律师，可以直接与法航法国总部交涉，必要时在法国法院提起诉讼。<strong>您无需担心语言障碍或法律复杂性</strong> - 我们全权处理。
                </span>
              </p>
            </div>
          </section>

          {/* How to Claim - Step by Step */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              如何通过 ClaimWinger 索赔法航赔偿？5 步流程
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg flex items-start gap-6">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    免费检查您的航班
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    访问 ClaimWinger 网站，输入您的航班信息（航班号、日期、延误/取消情况）。系统将立即告诉您是否符合索赔条件以及预估赔偿金额。
                  </p>
                  <a
                    href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    立即检查航班 →
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg flex items-start gap-6">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    提交必要文件
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    上传以下文件（拍照或扫描即可）：
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span><strong>登机牌</strong>或电子客票确认（PDF/照片）</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span><strong>护照复印件</strong>（姓名和照片页）</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span><strong>延误/取消证明</strong>（法航邮件、短信或机场公告截图）</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span><strong>银行账户信息</strong>（接收赔偿 - SWIFT 转账至中国银行）</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg flex items-start gap-6">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    ClaimWinger 与法航交涉
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    我们的法律团队将用<strong>法语/英语</strong>直接与法国航空法国总部联系，提交正式索赔。您无需做任何事 - 我们处理所有沟通、文件准备和法律程序。
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg flex items-start gap-6">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    处理拒赔（如有）
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    如果法航拒绝赔偿，我们将：
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>分析拒赔理由，要求法航提供详细证据</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>向<strong>法国民航局（DGAC）</strong>投诉</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>必要时在<strong>法国法院</strong>提起诉讼（我们承担法律费用）</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg flex items-start gap-6">
                <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    收到赔偿！
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    平均 <strong>8-12 周</strong>后，法航支付赔偿。ClaimWinger 扣除服务费（通常 25% + 增值税）后，将剩余金额通过 <strong>SWIFT 银行转账</strong>直接汇入您的中国银行账户。
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mt-4">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>示例：</strong> 您获得 €600 赔偿 → ClaimWinger 扣除 ~€150 → 您净得 <strong className="text-green-600">~€450</strong>（约 ¥3,500）直接到账！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-blue-600" />
              常见问题解答（FAQ）
            </h2>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Q1: 我持中国护照，乘坐法航从巴黎回北京延误了 5 小时，能索赔吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong className="text-blue-600">A: 可以！</strong> 法国航空是欧盟航空公司，航班从欧盟（法国）出发，因此受 EU261 完全保护。到达延误 ≥3 小时且非特殊情况，您有权获得 <strong>€600</strong> 赔偿（巴黎-北京距离 &gt;3,500 km）。您的中国护照<strong>完全不影响</strong>赔偿权利 - EU261 第 3 条明确规定赔偿权利不受乘客国籍影响。
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Q2: 我的航班号是 MU（东航），但实际由法航执飞，能索赔吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong className="text-blue-600">A: 取决于实际运营方！</strong> 如果您的登机牌底部显示 <strong>"Operating Carrier: AF"</strong>（法航执飞），且符合 EU261 路线条件（从欧盟出发或法航飞往欧盟），您就受保护。
                </p>
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    <strong>如何确认：</strong>
                  </p>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                    <li>• 查看登机牌底部 "Operated by / 实际承运人"</li>
                    <li>• 查看机票确认邮件中的 "Operating Carrier" 字段</li>
                    <li>• 登机时检查飞机机身是否有法航标志</li>
                  </ul>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Q3: 法航会因为我是中国公民而拒绝赔偿吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong className="text-blue-600">A: 不会，这是违法的！</strong> EU261 法规第 3 条明确规定：赔偿权利<strong>"不受乘客国籍影响"</strong>。如果法航以您的中国国籍为由拒绝赔偿，这是明显违反欧盟法律的行为。
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mt-3">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>如果发生：</strong> ClaimWinger 会立即向<strong>法国民航局（DGAC）</strong>或<strong>欧洲消费者中心（ECC-France）</strong>投诉，并在必要时提起法律诉讼。您的护照国籍完全不影响您的法律权利。
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Q4: 如果法航说延误是因为"技术问题"，还能索赔吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong className="text-blue-600">A: 通常可以！</strong> 大多数技术问题<strong>不属于"特殊情况"</strong>，因为航空公司有责任维护飞机并准备备用飞机。
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">✅ 可索赔的技术问题：</p>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• 定期维护延误</li>
                      <li>• 常见机械故障</li>
                      <li>• 计划不周导致的问题</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                    <p className="text-sm font-bold text-red-800 dark:text-red-300 mb-2">❌ 可能免除赔偿：</p>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• 鸟撞后引擎受损</li>
                      <li>• 隐藏制造缺陷（极罕见）</li>
                      <li>• 起飞后突发严重故障</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                  <strong>ClaimWinger 会：</strong> 要求法航提供技术日志、维护记录和故障详细说明。如果证据不足，我们将挑战拒赔决定。
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Q5: 我在巴黎转机时错过了第二段航班，能索赔吗？
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong className="text-blue-600">A: 取决于订票方式！</strong>
                </p>
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                    <p className="font-bold text-slate-900 dark:text-slate-100 mb-2">✅ 单张联程票（一次预订）：</p>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• 整个行程视为一个航班</li>
                      <li>• 最终到达延误 ≥3h → 可索赔</li>
                      <li>• 赔偿按总距离计算（例如：北京-巴黎-伦敦 = 北京到伦敦总距离）</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
                    <p className="font-bold text-slate-900 dark:text-slate-100 mb-2">❌ 分开购买的独立机票：</p>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• 每段航班单独计算</li>
                      <li>• 第一段延误导致错过第二段 → 第二段可能无赔偿（您"no-show"）</li>
                      <li>• 但第二段自身延误 ≥3h → 可单独索赔</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                  <strong>建议：</strong> 始终购买联程票以获得更好的保护！
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Q6: 法航提供了代金券，我是否必须接受？能否要求现金？
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong className="text-blue-600">A: 您有权要求现金！</strong> EU261 明确规定赔偿可以是<strong>现金、银行转账或支票</strong>（您选择）。
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>您可以<strong>拒绝代金券</strong>并要求现金</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>如果您自愿接受代金券（价值 ≥ 现金赔偿）→ OK</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>法航<strong>不能强迫</strong>您接受代金券代替现金</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>接受代金券<strong>不影响</strong>您的现金赔偿权利（除非明确签署放弃文件）</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* FAQ 7 */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Q7: 索赔法航有时间限制吗？过了多久就不能索赔了？
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                  <strong className="text-blue-600">A: 时效取决于法航总部所在国法律 = 法国</strong>
                </p>
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <div className="mb-3">
                    <p className="font-bold text-slate-900 dark:text-slate-100 mb-2">⏰ 法国法律时效：</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong className="text-blue-600">5 年</strong>（从航班日期起算）
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      例如：2026年1月1日的航班 → 2031年1月1日前可索赔
                    </p>
                  </div>
                  <div className="border-t border-slate-300 dark:border-slate-600 pt-3">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2"><strong>对比其他国家：</strong></p>
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      <li>• 🇩🇪 德国（汉莎）: 3 年</li>
                      <li>• 🇵🇱 波兰（LOT）: 3 年</li>
                      <li>• 🇬🇧 英国（英航）: 6 年</li>
                      <li>• 🇫🇷 法国（法航）: <strong className="text-green-600">5 年</strong> ✓</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                  <strong>建议：</strong> 尽早索赔（证据更完整，处理更快），但即使已过 1-2 年，仍可尝试。
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Q8: ClaimWinger 如何收费？中国乘客如何收款？
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100 mb-2">💰 收费模式：</p>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>无风险 - 只在成功后收费</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>通常为赔偿金额的 <strong>25% + 增值税</strong>（从赔偿中扣除）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>例如：€600 赔偿 → ClaimWinger 收取 ~€150 → 您净得 <strong className="text-green-600">~€450</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span><strong>不成功不收费</strong> - 零风险</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <p className="font-bold text-slate-900 dark:text-slate-100 mb-2">💳 中国乘客收款方式：</p>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>银行电汇（SWIFT）</strong> - 转账至中国银行账户</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>需提供：银行名称、SWIFT 代码、账户号码、姓名（英文）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>通常 3-5 个工作日到账</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>银行可能收取小额电汇费（~€10-20）</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                    <p className="font-bold text-slate-900 dark:text-slate-100 mb-2">📋 流程：</p>
                    <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-decimal list-inside">
                      <li>您提交材料 → ClaimWinger 评估</li>
                      <li>ClaimWinger 与法航交涉（2-3 个月）</li>
                      <li>法航支付 → ClaimWinger 扣除费用后转账给您</li>
                      <li>您无需与法航直接沟通（我们处理所有法语/英语沟通）</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Authority Links Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              官方资料与权威来源
            </h2>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                以下是关于欧盟航空乘客权利和法国航空赔偿的官方权威资料，供您参考和验证：
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                    1. 欧盟法规 261/2004 官方文本（EUR-Lex）
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    完整的 EU261 法规原文，包括所有条款和乘客权利说明。这是航空赔偿的法律基础。
                  </p>
                  <a
                    href="https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center gap-2"
                  >
                    访问 EUR-Lex 官方法规 →
                  </a>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                    2. 法国民航局（DGAC）- 乘客权利指南
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    法国民航局是法国航空的监管机构，负责处理航空公司投诉和执行 EU261 法规。
                  </p>
                  <a
                    href="https://www.ecologie.gouv.fr/DGAC-en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center gap-2"
                  >
                    访问 DGAC 官网 →
                  </a>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                    3. 欧洲消费者中心法国（ECC-France）
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    跨境消费者保护组织，提供免费航班索赔咨询和投诉帮助（多语言支持）。
                  </p>
                  <a
                    href="https://www.europe-consommateurs.eu/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center gap-2"
                  >
                    访问 ECC-France →
                  </a>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                    4. Your Europe - 航空乘客权利概览
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    欧盟官方的乘客权利信息门户，提供简明的权利说明和投诉指南（多语言）。
                  </p>
                  <a
                    href="https://europa.eu/youreurope/citizens/travel/passenger-rights/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center gap-2"
                  >
                    访问 Your Europe →
                  </a>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>提示：</strong> 这些官方资料证实了本文中的所有法律信息。如果法航或任何航空公司拒绝赔偿，您可以引用这些官方来源支持您的索赔。ClaimWinger 的法律团队会为您处理所有文件准备和沟通。
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-12 text-white shadow-2xl relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <Plane className="w-8 h-8" />
              </div>
              
              <h2 className="text-4xl font-bold mb-4">
                准备好索赔您的法航赔偿了吗？
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                不要让法国航空的延误或取消成为您的损失。<br />
                <strong className="text-white">ClaimWinger 帮您争取应得的 €250-€600 欧盟赔偿。</strong>
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-bold">98% 成功率</span>
                  </div>
                  <p className="text-sm text-slate-300">数千成功案例</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Euro className="w-5 h-5 text-green-400" />
                    <span className="font-bold">无风险</span>
                  </div>
                  <p className="text-sm text-slate-300">不成功不收费</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span className="font-bold">8-12 周</span>
                  </div>
                  <p className="text-sm text-slate-300">快速获得赔偿</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-3"
                >
                  <span>免费检查我的赔偿</span>
                  <span className="text-2xl">→</span>
                </a>
              </div>

              <p className="text-sm text-slate-400 mt-6">
                ✓ 2 分钟免费评估 &nbsp;|&nbsp; ✓ 无需信用卡 &nbsp;|&nbsp; ✓ 中文支持
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              相关文章
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/zh/blog/chinese-citizens-eu261-compensation-guide"
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                  中国公民 EU261 完整指南
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  打破最大误解：护照国籍不影响赔偿权利！了解中国乘客的欧盟航班赔偿权利。
                </p>
              </Link>

              <Link
                href="/zh/blog/lufthansa-delay-cancellation-compensation"
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                  汉莎航空赔偿指南
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  德国最大航空公司的延误/取消赔偿完整指南，所有中国航线均为 €600。
                </p>
              </Link>

              <Link
                href="/zh/blog/lot-polish-airlines-compensation-guide"
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                  LOT 波兰航空赔偿指南
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  华沙-北京直飞及转机航班的赔偿权利详解，包含 Star Alliance 联程票。
                </p>
              </Link>

              <Link
                href="/zh/blog/eu261-uk261-passenger-rights"
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                  EU261/UK261 权利指南
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  欧盟和英国航空乘客权利的基础知识，所有航空公司通用。
                </p>
              </Link>
            </div>
          </section>

          {/* Article Footer */}
          <footer className="border-t border-slate-200 dark:border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div>
                <p className="mb-1">
                  <strong>最后更新：</strong> 2026年2月1日
                </p>
                <p>
                  本文信息基于 EU 261/2004 法规及相关欧洲法院判例。
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/zh"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  返回首页
                </Link>
                <span>•</span>
                <a
                  href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  开始索赔
                </a>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "headline": "法国航空延误或取消航班赔偿完整指南 2026",
                "description": "中国乘客如何获得 €250-€600 欧盟赔偿。巴黎-北京/上海/广州航线权利详解，包含实际案例和专业索赔服务。",
                "image": "https://problemlot.com/og-image.png",
                "author": {
                  "@type": "Organization",
                  "name": "LotProblem.pl"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "LotProblem.pl",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://problemlot.com/og-image.png"
                  }
                },
                "datePublished": "2026-02-01",
                "dateModified": "2026-02-01",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://problemlot.com/zh/blog/air-france-compensation-guide"
                },
                "articleBody": "法国航空是欧洲最大的航空公司之一，为中国乘客提供巴黎-北京、上海、广州等多条直飞航线。作为欧盟航空公司，法航受 EU 261/2004 法规完全保护。本指南详细解释中国护照持有者如何获得 €250-€600 欧盟赔偿，包含真实案例、常见拒赔策略应对方法以及 ClaimWinger 专业索赔服务介绍。"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "我持中国护照，乘坐法航从巴黎回北京延误了 5 小时，能索赔吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "可以！法国航空是欧盟航空公司，航班从欧盟（法国）出发，因此受 EU261 完全保护。到达延误 ≥3 小时且非特殊情况，您有权获得 €600 赔偿（巴黎-北京距离 >3,500 km）。您的中国护照完全不影响赔偿权利 - EU261 第 3 条明确规定赔偿权利不受乘客国籍影响。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "我的航班号是 MU（东航），但实际由法航执飞，能索赔吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "取决于实际运营方！如果您的登机牌底部显示 'Operating Carrier: AF'（法航执飞），且符合 EU261 路线条件（从欧盟出发或法航飞往欧盟），您就受保护。查看登机牌底部 'Operated by / 实际承运人' 或机票确认邮件中的 'Operating Carrier' 字段确认。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "法航会因为我是中国公民而拒绝赔偿吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "不会，这是违法的！EU261 法规第 3 条明确规定：赔偿权利'不受乘客国籍影响'。如果法航以您的中国国籍为由拒绝赔偿，这是明显违反欧盟法律的行为。ClaimWinger 会立即向法国民航局（DGAC）或欧洲消费者中心（ECC-France）投诉，并在必要时提起法律诉讼。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "如果法航说延误是因为'技术问题'，还能索赔吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "通常可以！大多数技术问题不属于'特殊情况'，因为航空公司有责任维护飞机并准备备用飞机。可索赔的包括：定期维护延误、常见机械故障、计划不周导致的问题。只有极罕见的情况（如鸟撞后引擎受损、隐藏制造缺陷）可能免除赔偿。ClaimWinger 会要求法航提供技术日志、维护记录和故障详细说明，如果证据不足将挑战拒赔决定。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "我在巴黎转机时错过了第二段航班，能索赔吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "取决于订票方式！单张联程票（一次预订）：整个行程视为一个航班，最终到达延误 ≥3h 可索赔，赔偿按总距离计算。分开购买的独立机票：每段航班单独计算，第一段延误导致错过第二段可能无赔偿（您 no-show），但第二段自身延误 ≥3h 可单独索赔。建议：始终购买联程票以获得更好的保护！"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "法航提供了代金券，我是否必须接受？能否要求现金？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "您有权要求现金！EU261 明确规定赔偿可以是现金、银行转账或支票（您选择）。您可以拒绝代金券并要求现金。如果您自愿接受代金券（价值 ≥ 现金赔偿）也可以。法航不能强迫您接受代金券代替现金。接受代金券不影响您的现金赔偿权利（除非明确签署放弃文件）。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "索赔法航有时间限制吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "时效取决于法航总部所在国法律 = 法国。法国法律时效：5 年（从航班日期起算）。例如：2026年1月1日的航班可在2031年1月1日前索赔。对比：德国（汉莎）3年、波兰（LOT）3年、英国（英航）6年、法国（法航）5年。建议尽早索赔（证据更完整，处理更快），但即使已过1-2年仍可尝试。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "ClaimWinger 如何收费？中国乘客如何收款？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "收费模式：无风险 - 只在成功后收费。通常为赔偿金额的 25% + 增值税（从赔偿中扣除）。例如：€600 赔偿 → ClaimWinger 收取 ~€150 → 您净得 ~€450。不成功不收费 - 零风险。中国乘客收款：银行电汇（SWIFT）转账至中国银行账户，需提供银行名称、SWIFT 代码、账户号码、姓名（英文），通常 3-5 个工作日到账，银行可能收取小额电汇费（~€10-20）。"
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
