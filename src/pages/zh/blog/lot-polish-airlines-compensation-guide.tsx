import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Clock, 
  Euro, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  FileText,
  ArrowRight,
  Shield,
  TrendingUp,
  Users
} from "lucide-react";
import Link from "next/link";

export default function LOTPolishAirlinesCompensationGuide() {
  return (
    <LayoutZh>
      <SEO
        title="LOT 波兰航空延误或取消赔偿指南 2026 | 华沙-北京航班权利"
        description="LOT 波兰航空航班延误或取消？了解中国乘客如何获得 €250-€600 欧盟赔偿。华沙直飞及转机航班完整指南。"
        url="https://lotproblem.pl/zh/blog/lot-polish-airlines-compensation-guide"
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "LOT 波兰航空延误或取消航班赔偿指南 2026",
            "description": "中国乘客如何获得 LOT 波兰航空 €250-€600 欧盟赔偿的完整指南",
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
            "datePublished": "2026-01-30",
            "dateModified": "2026-01-30"
          })
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <Link href="/zh" className="hover:text-blue-600">首页</Link>
              <span>/</span>
              <Link href="/zh/blog/eu261-uk261-passenger-rights" className="hover:text-blue-600">博客</Link>
              <span>/</span>
              <span>LOT 波兰航空赔偿</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              LOT 波兰航空延误或取消航班赔偿指南 2026
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              华沙-北京直飞航班及欧洲转机的中国乘客权利完整指南 | 如何获得 €250-€600 欧盟赔偿
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>更新：2026年1月30日</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>阅读时间：8 分钟</span>
              </div>
            </div>
          </div>

          {/* AI Overview - Featured Snippet */}
          <div className="mb-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">🎯 核心真相（立即了解）</h2>
                <p className="text-blue-100 text-lg">
                  LOT 波兰航空 = 欧盟航空公司（波兰）受 EU 261/2004 法规保护
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  何时受保护
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>所有从欧盟/波兰出发的 LOT 航班</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>所有飞往欧盟/波兰的 LOT 航班</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>华沙转机延误（符合条件）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>国籍不影响 - 中国护照同样受保护</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Euro className="w-5 h-5" />
                  赔偿金额
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between">
                    <span>短途 (≤1,500 km):</span>
                    <strong className="text-xl">€250</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>中途 (1,500-3,500 km):</span>
                    <strong className="text-xl">€400</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>长途 (大于3,500 km):</span>
                    <strong className="text-xl">€600</strong>
                  </li>
                  <li className="pt-2 border-t border-white/20">
                    <span className="text-green-300 font-bold">✅ 华沙 ↔ 北京 = €600！</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
              <p className="text-sm leading-relaxed">
                <strong>重要提示：</strong>华沙-北京直飞航线（约 7,000+ km）属于长途类别，符合条件时可获<strong>最高 €600 赔偿</strong>。
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="mb-12 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              目录
            </h2>
            <ul className="space-y-2">
              <li><a href="#when-protected" className="text-blue-600 hover:underline">1. 何时可以索赔赔偿？</a></li>
              <li><a href="#when-not-protected" className="text-blue-600 hover:underline">2. 哪些情况不能索赔？</a></li>
              <li><a href="#lot-routes" className="text-blue-600 hover:underline">3. LOT 波兰航空主要航线</a></li>
              <li><a href="#warsaw-hub" className="text-blue-600 hover:underline">4. 华沙转机特别说明</a></li>
              <li><a href="#claimwinger" className="text-blue-600 hover:underline">5. 为什么选择 ClaimWinger？</a></li>
              <li><a href="#claim-process" className="text-blue-600 hover:underline">6. 索赔流程</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">7. 常见问题解答</a></li>
            </ul>
          </Card>

          {/* CTA 1 - Early Conversion */}
          <div className="mb-12 text-center">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold mb-4">您的 LOT 航班延误或取消了吗？</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                免费检查您是否有权获得 €250-€600 赔偿 - 只需 2 分钟
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="https://claimwinger.com/delayed-flight?utm_source=lotproblem&utm_medium=blog&utm_campaign=lot_guide" target="_blank" rel="noopener noreferrer">
                  免费检查我的航班 <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </Card>
          </div>

          {/* Section 1: When Protected */}
          <section id="when-protected" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              何时可以索赔赔偿？
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                LOT 波兰航空作为<strong>欧盟航空公司</strong>（总部位于波兰华沙），所有航班均受 <strong>EU 261/2004</strong> 法规保护。
              </p>

              <Card className="p-6 mb-6 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600">
                <h3 className="text-xl font-bold mb-4">✅ 您受保护的情况：</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Plane className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>所有从欧盟出发的 LOT 航班</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        华沙 → 北京（LO91）、华沙 → 首尔（LO98）、华沙 → 任何欧洲城市
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Plane className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>所有飞往欧盟的 LOT 航班</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        北京 → 华沙（LO92）、首尔 → 华沙（LO99）
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Plane className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>华沙转机航班（符合单一预订条件）</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        北京 → 华沙 → 巴黎（单一预订，最终到达延误 ≥3h）
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>

              <h3 className="text-2xl font-bold mt-8 mb-4">📋 必须符合的条件：</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    延误航班
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    到达目的地延误 <strong>≥ 3 小时</strong>（从舱门打开时刻计算）
                  </p>
                </Card>

                <Card className="p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    取消航班
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    航班被取消，且<strong>未提前 14 天通知</strong>或未提供合理替代航班
                  </p>
                </Card>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">🎬 LOT 真实案例（中国乘客）</h3>

              <Card className="p-6 mb-4 bg-white dark:bg-gray-800 border-l-4 border-green-600">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">案例 1：华沙-北京直飞延误 ✅</h4>
                    <p className="mb-3">
                      <strong>李女士</strong>（中国护照）预订了 <strong>LOT LO92</strong> 从华沙返回北京。航班因技术故障延误 5 小时到达。
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">📍 航线:</span>
                        <span>华沙（WAW）→ 北京（PEK）</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">✈️ 航空公司:</span>
                        <span>LOT 波兰航空（欧盟航司）</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">🛡️ 适用规则:</span>
                        <span>EU261 - 从欧盟出发 ✓</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">⏱️ 延误时长:</span>
                        <span>到达延误 5 小时</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">💰 赔偿金额:</span>
                        <span className="text-green-600 font-bold text-lg">€600</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      <strong>为什么受保护？</strong> 航班从欧盟（波兰）出发，由欧盟航司执飞。距离约 7,000 km（长途类别）+ 延误 ≥3h = €600 赔偿。李女士的中国护照<strong>完全不影响</strong>她的索赔权利。
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-4 bg-white dark:bg-gray-800 border-l-4 border-green-600">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">案例 2：北京-华沙到达航班取消 ✅</h4>
                    <p className="mb-3">
                      <strong>张先生</strong>（中国护照）预订了 <strong>LOT LO92</strong> 从北京飞往华沙。航班被取消，改签至次日航班。
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">📍 航线:</span>
                        <span>北京（PEK）→ 华沙（WAW）</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">✈️ 航空公司:</span>
                        <span>LOT 波兰航空（欧盟航司）</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">🛡️ 适用规则:</span>
                        <span>EU261 - 欧盟航司到达欧盟 ✓</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">❌ 情况:</span>
                        <span>航班取消，未提前 14 天通知</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">💰 赔偿金额:</span>
                        <span className="text-green-600 font-bold text-lg">€600</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      <strong>为什么受保护？</strong> LOT 是欧盟航空公司，航班到达欧盟境内（波兰）。距离约 7,000 km（长途）+ 取消 = €600 赔偿。
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white dark:bg-gray-800 border-l-4 border-green-600">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">案例 3：华沙转机延误 ✅</h4>
                    <p className="mb-3">
                      <strong>王先生</strong>（中国护照）预订了<strong>单一联程票</strong>：北京 → 华沙（LO92）→ 巴黎（LO333）。第一段航班延误导致错过转机，最终到达巴黎延误 4 小时。
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">📍 航线:</span>
                        <span>北京 → 华沙 → 巴黎（单一预订）</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">✈️ 航空公司:</span>
                        <span>LOT 波兰航空（全程）</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">🛡️ 适用规则:</span>
                        <span>EU261 - 欧盟航司到达欧盟 ✓</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">⏱️ 最终延误:</span>
                        <span>到达巴黎延误 4 小时</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">💰 赔偿金额:</span>
                        <span className="text-green-600 font-bold text-lg">€600</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      <strong>为什么受保护？</strong> 单一联程票（one booking）+ LOT 全程执飞 + 最终到达欧盟（法国）延误 ≥3h = €600 赔偿（北京-巴黎距离约 8,200 km）。
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Section 2: When NOT Protected */}
          <section id="when-not-protected" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              哪些情况不能索赔？
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Card className="p-6 mb-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600">
                <h3 className="text-xl font-bold mb-4">❌ 不受 EU261 保护的情况：</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>"特殊情况"（Extraordinary Circumstances）导致的延误/取消</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        极端天气、机场罢工（非 LOT 员工）、空管限制、安全威胁等
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>到达延误 小于 3 小时</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        例如：延误 2 小时 45 分钟 = 无金钱赔偿（但有权获得免费照顾）
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>航空公司提前 14 天以上通知取消</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        若提前 14+ 天通知且提供合理替代航班 = 无赔偿
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>您未按时办理值机或登机</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        错过值机截止时间或登机口关闭后到达 = 无赔偿
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>分开预订的转机航班（separate bookings）</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        例如：单独预订北京→华沙 和 华沙→巴黎 = 第二段延误不受保护
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>

              <h3 className="text-2xl font-bold mt-8 mb-4">⚠️ "特殊情况" 详解</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-4 border-2 border-green-200 dark:border-green-800">
                  <h4 className="font-bold mb-3 text-green-700 dark:text-green-400">✅ 是"特殊情况"（无赔偿）</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>极端天气（暴风雪、台风、雷暴）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>机场罢工（空管、地勤，非 LOT 员工）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>空中交通管制限制（如空域关闭）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>政治动荡、安全威胁、恐怖袭击</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>鸟击等突发不可预见事件</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-4 border-2 border-red-200 dark:border-red-800">
                  <h4 className="font-bold mb-3 text-red-700 dark:text-red-400">❌ 不是"特殊情况"（可索赔）</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>技术故障（计划维护应提前安排）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>LOT 员工罢工（飞行员、空乘、地勤）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>机组人员生病或迟到</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>燃油短缺（航司责任）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>航班调度问题、overbooking</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 3: LOT Routes */}
          <section id="lot-routes" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-600" />
              LOT 波兰航空主要航线
            </h2>

            <Card className="p-6 bg-white dark:bg-gray-800 overflow-x-auto">
              <h3 className="text-xl font-bold mb-4">华沙肖邦机场（WAW）直飞亚洲航线</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                    <th className="text-left p-3">航线</th>
                    <th className="text-left p-3">航班号</th>
                    <th className="text-left p-3">距离</th>
                    <th className="text-left p-3">赔偿金额</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="p-3">华沙 ↔ 北京 (WAW-PEK)</td>
                    <td className="p-3 font-mono">LO91/92</td>
                    <td className="p-3">~7,000 km</td>
                    <td className="p-3 font-bold text-green-600">€600</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="p-3">华沙 ↔ 首尔 (WAW-ICN)</td>
                    <td className="p-3 font-mono">LO98/99</td>
                    <td className="p-3">~8,500 km</td>
                    <td className="p-3 font-bold text-green-600">€600</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="p-3">华沙 ↔ 东京 (WAW-NRT)</td>
                    <td className="p-3 font-mono">LO80/79</td>
                    <td className="p-3">~8,800 km</td>
                    <td className="p-3 font-bold text-green-600">€600</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="p-3">华沙 ↔ 新加坡 (WAW-SIN)</td>
                    <td className="p-3 font-mono">LO68/69</td>
                    <td className="p-3">~10,200 km</td>
                    <td className="p-3 font-bold text-green-600">€600</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm">
                  <strong>💡 重要提示：</strong>所有 LOT 波兰航空飞往亚洲的直飞航线均属<strong>长途类别（大于3,500 km）</strong>，符合条件时可获得<strong>最高 €600 赔偿</strong>。
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 mt-6">
              <h3 className="text-xl font-bold mb-4">热门欧洲转机航线（经华沙）</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">西欧方向</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>• 华沙 → 巴黎 (LO333)</li>
                    <li>• 华沙 → 伦敦 (LO281/283)</li>
                    <li>• 华沙 → 阿姆斯特丹 (LO257)</li>
                    <li>• 华沙 → 布鲁塞尔 (LO391)</li>
                    <li>• 华沙 → 法兰克福 (LO351/353)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">南欧方向</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>• 华沙 → 罗马 (LO421/423)</li>
                    <li>• 华沙 → 米兰 (LO441)</li>
                    <li>• 华沙 → 巴塞罗那 (LO441)</li>
                    <li>• 华沙 → 马德里 (LO455)</li>
                    <li>• 华沙 → 雅典 (LO635)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 4: Warsaw Hub */}
          <section id="warsaw-hub" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              华沙转机特别说明
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Card className="p-6 mb-6 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600">
                <h3 className="text-xl font-bold mb-4">🔄 转机航班的 EU261 保护规则</h3>
                <p className="mb-4">
                  如果您在华沙肖邦机场（WAW）转机，您的赔偿权利取决于<strong>预订方式</strong>和<strong>最终到达延误</strong>。
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      ✅ 受保护（单一预订）
                    </h4>
                    <p className="text-sm mb-3">
                      北京 → 华沙 → 巴黎<br/>
                      <strong>单一订单号（one booking）</strong>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      若第一段延误导致错过转机，最终到达巴黎延误 ≥3h → 有权索赔 €600（基于北京-巴黎总距离）
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      ❌ 不受保护（分开预订）
                    </h4>
                    <p className="text-sm mb-3">
                      北京 → 华沙（订单 A）<br/>
                      华沙 → 巴黎（订单 B）<br/>
                      <strong>两个独立订单</strong>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      若订单 A 延误导致错过订单 B → LOT 对订单 B 不承担赔偿责任。只能分别评估每个航段。
                    </p>
                  </div>
                </div>
              </Card>

              <h3 className="text-2xl font-bold mt-8 mb-4">📋 如何判断是否"单一预订"？</h3>
              <Card className="p-6 bg-white dark:bg-gray-800">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>单一订单号/预订参考号（PNR）</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        例如：PNR ABC123 包含两段航班 → 单一预订 ✓
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>在 LOT 官网/旅行社一次性购买</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        例如：在 lot.com 搜索"北京-巴黎"，显示经华沙转机 → 单一预订 ✓
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>行李直挂到最终目的地</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        行李标签显示最终目的地（如 PEK → CDG），无需在华沙提取 → 通常是单一预订 ✓
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>两个独立的订单号</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        例如：订单 123456（北京-华沙）+ 订单 789012（华沙-巴黎）→ 分开预订 ✗
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>

              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-600">
                <p className="text-sm">
                  <strong>💡 专业建议：</strong>如果计划在华沙转机前往其他欧洲城市，<strong>务必购买单一联程票</strong>（through ticket），以确保转机延误时的 EU261 保护。分开预订可能导致失去赔偿权利。
                </p>
              </div>
            </div>
          </section>

          {/* CTA 2 - Mid Article */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-4">不确定您是否有权索赔？</h3>
              <p className="text-blue-100 mb-6">
                ClaimWinger 提供<strong>免费航班检查</strong> - 2 分钟了解您的赔偿权利
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  <span className="text-sm">98% 成功率</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  <span className="text-sm">无风险 - 只在成功后收费</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  <span className="text-sm">8-12 周获得赔偿</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <a href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=lot_guide_mid" target="_blank" rel="noopener noreferrer">
                  免费检查我的航班 <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </Card>
          </div>

          {/* Section 5: ClaimWinger Benefits */}
          <section id="claimwinger" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-green-600" />
              为什么选择 ClaimWinger？
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
              <p className="text-lg">
                我们专为<strong>国际乘客（包括中国公民）</strong>提供专业的 LOT 波兰航空索赔服务，无语言障碍，无风险。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">98% 成功率</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  数千成功案例<br/>
                  熟悉 LOT 拒赔套路
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">无风险 - 只在成功后收费</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  不成功不收费<br/>
                  通常收取 25% + 增值税
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">8-12 周获得赔偿</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  我们处理所有法律程序<br/>
                  与 LOT 沟通、法院诉讼
                </p>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-indigo-600" />
                专为中国乘客提供
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">中文咨询支持</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">通过合作伙伴提供中文沟通</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">接受中国银行账户</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">银行转账直接到您的账户</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">无需欧盟身份</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">只需护照复印件和登机牌</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">处理所有沟通</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">您无需与 LOT 直接交涉</p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 6: Claim Process */}
          <section id="claim-process" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-orange-600" />
              索赔流程（5 个简单步骤）
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "免费航班检查",
                  description: "访问 ClaimWinger，输入您的 LOT 航班信息（航班号、日期、延误时长）。系统自动评估您的赔偿权利。",
                  color: "blue"
                },
                {
                  step: 2,
                  title: "提交索赔申请",
                  description: "上传所需文件：登机牌、护照复印件、延误证明（LOT 邮件/短信）。填写银行账户信息（接收赔偿）。",
                  color: "green"
                },
                {
                  step: 3,
                  title: "我们与 LOT 交涉",
                  description: "ClaimWinger 法律团队向 LOT 波兰航空提交正式索赔函。处理所有沟通、法律程序（您无需参与）。",
                  color: "purple"
                },
                {
                  step: 4,
                  title: "LOT 审核与回应",
                  description: "LOT 通常在 4-8 周内回应。若拒赔，我们会进一步法律行动（必要时诉诸法院）。",
                  color: "orange"
                },
                {
                  step: 5,
                  title: "获得赔偿",
                  description: "成功后，LOT 将赔偿金支付给 ClaimWinger，扣除服务费后（通常 25% + VAT）转账至您的银行账户。",
                  color: "green"
                }
              ].map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`bg-${item.color}-100 dark:bg-${item.color}-900/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className={`text-${item.color}-600 text-xl font-bold`}>{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-600">
              <p className="text-sm">
                <strong>⏱️ 平均处理时间：8-12 周</strong><br/>
                简单案例（LOT 直接认可）可能 4-6 周完成。复杂案例（需法院诉讼）可能需要 12-18 个月，但我们全程跟进，无需您操心。
              </p>
            </div>
          </section>

          {/* Section 7: FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">❓ 常见问题解答</h2>

            <div className="space-y-4">
              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  我持中国护照，乘坐 LOT 从北京到华沙的航班延误了 5 小时，能索赔吗？
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>可以！</strong>LOT 是欧盟航空公司（波兰），飞往欧盟（波兰华沙），因此受 EU261 保护。到达延误超过 3 小时且非特殊情况，您有权获得 <strong>€600 赔偿</strong>（北京-华沙距离约 7,000 公里，属于长途类别）。您的中国护照<strong>完全不影响</strong>您的索赔权利 - 根据 EU261 第 3 条，赔偿权利不受乘客国籍限制。
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  我的航班号是 CA 开头（国航），但由 LOT 执飞，能索赔吗？
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>取决于实际执飞航司。</strong>LOT 与中国国际航空（Air China）是 Star Alliance 伙伴，有 code-share 航班。关键在于<strong>实际执飞航司（Operating Carrier）</strong>：<br/><br/>
                  • 若登机牌显示 <strong>"Operated by LOT Polish Airlines"</strong> 或 <strong>"Operating Carrier: LO"</strong> → LOT 执飞 → 受 EU261 保护 ✓<br/>
                  • 若国航实际执飞（CA plane, CA crew）→ 不受 EU261 保护 ✗<br/><br/>
                  查看登机牌或预订确认邮件中的 "Operating Carrier" 信息即可判断。
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  LOT 会因为我是中国公民而拒绝赔偿吗？
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>不会，这是违法的！</strong>EU261 法规第 3 条明确规定：赔偿权利<strong>"不受乘客国籍影响"</strong>（"regardless of the nationality of passengers"）。如果 LOT 以您的国籍为由拒绝赔偿，这是<strong>违反欧盟法律</strong>的行为。您可以：<br/><br/>
                  1. 向<strong>波兰民航局（CAA Poland）</strong>投诉<br/>
                  2. 联系<strong>欧洲消费者中心网络（ECC-Net）</strong>寻求免费帮助<br/>
                  3. 通过 ClaimWinger 索赔 - 我们会处理所有法律对抗
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  如果 LOT 说延误是因为"技术问题"，还能索赔吗？
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>通常可以！</strong>大多数技术故障<strong>不属于"特殊情况"</strong> - 航空公司有责任按计划维护飞机，确保其适航。只有<strong>"突发且不可预见"</strong>的故障（如飞行中鸟击导致发动机损坏）才可能免除赔偿。<br/><br/>
                  常见技术问题（<strong>可索赔</strong>）：<br/>
                  • 计划维护延误（应提前安排，不影响航班）<br/>
                  • 零部件更换（定期检查应发现）<br/>
                  • 软件系统故障<br/>
                  • 燃油系统问题<br/><br/>
                  若 LOT 以"技术问题"拒赔，ClaimWinger 会要求他们提供详细证据，证明该故障确属"突发不可预见"。
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  我需要提供什么文件来索赔？
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>所需文件（4 项）：</strong><br/><br/>
                  1. <strong>登机牌或电子客票确认</strong>（PDF 或照片，显示航班号、日期、姓名）<br/>
                  2. <strong>护照复印件</strong>（身份证明页，含照片和签名）<br/>
                  3. <strong>航班延误/取消证明</strong>：<br/>
                     • LOT 发送的邮件或短信<br/>
                     • 机场显示屏照片<br/>
                     • 登机口工作人员公告<br/>
                  4. <strong>银行账户信息</strong>（用于接收赔偿，SWIFT/IBAN 或中国银行账号）<br/><br/>
                  <strong>不需要：</strong><br/>
                  ✗ 欧盟签证或居留证<br/>
                  ✗ 旅行保险单<br/>
                  ✗ 酒店收据或其他费用证明（EU261 赔偿是固定金额，不基于实际损失）
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  如果我已经接受了 LOT 的代金券或改签，还能索赔吗？
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>通常可以！</strong>接受 LOT 提供的改签航班、酒店住宿、餐饮券或代金券<strong>不会自动放弃您的赔偿权利</strong> - 除非您明确签署了"放弃赔偿"的文件（waiver，这种情况很少见）。<br/><br/>
                  <strong>重要区分：</strong><br/>
                  • <strong>照顾义务</strong>（Care）：餐饮、住宿、通讯 = LOT 的法定义务，免费提供，<strong>不影响赔偿权利</strong><br/>
                  • <strong>赔偿</strong>（Compensation）：€250-€600 现金 = <strong>独立的法定权利</strong>，与照顾义务分开<br/><br/>
                  即使您的航班已经过去一段时间（如 1-2 年前），仍可尝试索赔！
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  索赔有时间限制吗？
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>有，但时间较长。</strong>时效期限取决于航司总部所在国法律：<br/><br/>
                  • <strong>波兰（LOT 总部）</strong>：民事诉讼时效 = <strong>3 年</strong><br/>
                  • 从航班日期起算（例如：2024年1月1日的航班 → 可索赔至 2027年1月1日）<br/><br/>
                  <strong>建议：</strong>尽早提交索赔，因为：<br/>
                  1. 证据越新鲜，处理越快<br/>
                  2. LOT 的内部记录可能在一段时间后删除<br/>
                  3. 避免接近时效期限产生的法律复杂性<br/><br/>
                  即使您的航班已经过去一段时间（如 1-2 年前），仍可尝试索赔！
                </p>
              </details>
            </div>
          </section>

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
                    "name": "我持中国护照，乘坐 LOT 从北京到华沙的航班延误了 5 小时，能索赔吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "可以！LOT 是欧盟航空公司（波兰），飞往欧盟（波兰华沙），因此受 EU261 保护。到达延误超过 3 小时且非特殊情况，您有权获得 €600 赔偿（北京-华沙距离约 7,000 公里，属于长途类别）。您的中国护照完全不影响您的索赔权利。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "我的航班号是 CA 开头（国航），但由 LOT 执飞，能索赔吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "取决于实际执飞航司。若登机牌显示 Operating Carrier: LO（LOT 执飞）→ 受 EU261 保护。若国航实际执飞 → 不受保护。查看登机牌或预订确认邮件中的 Operating Carrier 信息。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "LOT 会因为我是中国公民而拒绝赔偿吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "不会，这是违法的！EU261 第 3 条明确规定：赔偿权利不受乘客国籍影响。若 LOT 以此拒赔，可向波兰民航局投诉或通过 ClaimWinger 法律对抗。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "如果 LOT 说延误是因为技术问题，还能索赔吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "通常可以！大多数技术故障不属于特殊情况 - 航空公司有责任维护飞机。只有突发且不可预见的故障才可能免除赔偿。ClaimWinger 会要求 LOT 提供详细证据。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "我需要提供什么文件来索赔？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "需要：1) 登机牌或电子客票；2) 护照复印件；3) 延误/取消证明（LOT 邮件/短信/机场公告）；4) 银行账户信息。不需要：欧盟签证、居留证、旅行保险单。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "如果我已经接受了 LOT 的代金券或改签，还能索赔吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "通常可以！接受改签/代金券不放弃赔偿权利 - 除非明确签署放弃文件。照顾义务（餐饮、住宿）与赔偿是独立的权利。即使接受代金券，仍可索赔现金赔偿。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "索赔有时间限制吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "有。波兰（LOT 总部）民事诉讼时效 = 3 年，从航班日期起算。建议尽早索赔，证据越新鲜处理越快。即使航班过去 1-2 年，仍可尝试索赔！"
                    }
                  }
                ]
              })
            }}
          />

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">📚 相关文章</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/zh/blog/chinese-citizens-eu261-compensation-guide">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="font-bold mb-2">中国公民 EU261 完整指南</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    打破最大误解：护照国籍不影响赔偿权利
                  </p>
                </Card>
              </Link>
              <Link href="/zh/blog/beijing-capital-delayed-flight-compensation">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="font-bold mb-2">北京首都机场延误航班赔偿</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    从北京出发的欧盟航班延误赔偿指南
                  </p>
                </Card>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">准备好索赔您的 LOT 航班赔偿了吗？</h2>
              <p className="text-xl text-green-100 mb-6">
                立即免费检查 - 无风险，只在成功后收费
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>✓ 无风险</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>✓ 98% 成功率</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>✓ 8-12 周获赔</span>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="https://claimwinger.com/zh?utm_source=blog&utm_medium=article&utm_campaign=lot_polish_china"
                  className="inline-flex items-center justify-center bg-white text-green-600 hover:bg-green-50 px-8 py-6 text-lg font-semibold transition-colors"
                >
                  立即查询
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </Card>
          </div>

          {/* Trust Signals Footer */}
          <div className="text-center text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p>
              <strong>官方资料：</strong>
              <a href="https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">
                欧盟法规 261/2004（EUR-Lex）
              </a>
            </p>
            <p>
              本指南基于欧盟法规 EU 261/2004 及波兰民航法规编写。ClaimWinger 是独立的第三方索赔服务商，与 LOT 波兰航空无隶属关系。
            </p>
          </div>
        </div>
      </article>
    </LayoutZh>
  );
}
