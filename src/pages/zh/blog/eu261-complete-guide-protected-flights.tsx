import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { Plane, Shield, AlertCircle, CheckCircle, XCircle, Clock, Globe, ArrowRight } from "lucide-react";

export default function EU261CompleteGuideProtectedFlights() {
  return (
    <LayoutZh>
      <SEO 
        title="欧盟航班延误赔偿完整指南——哪些航班受EU 261/2004保护？"
        description="详细解读EU 261/2004法规，了解哪些航班有资格申请赔偿，中国乘客如何获得最高600欧元赔偿。"
        url="https://problemlot.com/zh/blog/eu261-complete-guide-protected-flights"
        image="https://problemlot.com/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/zh/blog" className="hover:text-blue-600">博客</Link>
              <span>→</span>
              <span>EU261指南</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              欧盟航班延误赔偿完整指南——哪些航班受EU 261/2004保护？
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 2026年2月24日</span>
              <span>⏱️ 12分钟阅读</span>
              <span>✈️ 乘客权益</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              在欧洲遭遇航班延误或取消？根据<strong>EU 261/2004法规</strong>，您可能有权获得最高
              <strong>600欧元</strong>的赔偿。但并非所有航班都受此法规保护。本指南将详细解释哪些航班
              符合赔偿条件，以及中国乘客如何成功申请。
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">您的航班是否符合赔偿条件？</h3>
            <p className="text-blue-100 mb-6 text-lg">
              使用ClaimWinger免费检查您的航班资格——<strong>2分钟即可完成</strong>
            </p>
            <a 
              href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-xl no-underline"
            >
              免费检查航班资格 →
            </a>
          </div>

          {/* Section 1: What is EU 261/2004 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              什么是EU 261/2004法规？
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              EU 261/2004是<strong>欧盟乘客权益保护法规</strong>，于2004年生效。该法规规定，当航班
              延误、取消或超售时，航空公司必须向乘客支付赔偿。
            </p>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-green-900">✅ 法规保护的赔偿金额：</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                  <div className="text-3xl font-bold text-green-700 mb-2">€250</div>
                  <div className="text-sm text-gray-600">航程 ≤ 1,500公里</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                  <div className="text-3xl font-bold text-green-700 mb-2">€400</div>
                  <div className="text-sm text-gray-600">航程 1,500-3,500公里</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                  <div className="text-3xl font-bold text-green-700 mb-2">€600</div>
                  <div className="text-sm text-gray-600">航程 &gt; 3,500公里</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="mb-0">
                <strong>💡 重要提示：</strong>赔偿金额与机票价格<strong>无关</strong>。即使您购买了
                特价机票，仍然有权获得全额赔偿。
              </p>
            </div>
          </section>

          {/* Section 2: Which flights are protected */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-600" />
              哪些航班受EU 261/2004保护？
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              这是最关键的问题。EU 261/2004法规<strong>仅适用于特定航班</strong>：
            </p>

            <div className="space-y-6">
              <div className="bg-white border-2 border-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-900">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  ✅ 受保护的航班（可申请赔偿）
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>从欧盟机场出发的所有航班</strong>
                      <p className="text-gray-600 text-sm">无论航空公司是哪国的。例如：巴黎→北京（中国国航）✅</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>飞往欧盟的欧洲航空公司航班</strong>
                      <p className="text-gray-600 text-sm">例如：北京→法兰克福（汉莎航空）✅</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-red-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-red-900">
                  <XCircle className="w-6 h-6 text-red-600" />
                  ❌ 不受保护的航班（不可申请赔偿）
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>从中国出发的非欧洲航空公司航班</strong>
                      <p className="text-gray-600 text-sm">例如：上海→巴黎（中国东方航空）❌</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>从中国出发的非欧洲航空公司航班</strong>
                      <p className="text-gray-600 text-sm">例如：北京→东京（日本航空）❌</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Common scenarios for Chinese passengers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Globe className="w-8 h-8 text-blue-600" />
              中国乘客常见场景分析
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🛫 场景1：北京 → 法兰克福（汉莎航空）</h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">✅ 可申请</span>
                  <span className="text-gray-700">欧洲航空公司飞往欧盟</span>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>赔偿金额：</strong>最高€600（航程超过3,500公里）
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🛫 场景2：上海 → 伦敦（中国东方航空）</h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">❌ 不可申请</span>
                  <span className="text-gray-700">非欧洲航空公司从中国出发</span>
                </div>
                <p className="text-gray-600 text-sm">
                  EU 261/2004不适用，需查看中国东航自己的赔偿政策。
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🛫 场景3：巴黎 → 上海（中国国航）</h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">✅ 可申请</span>
                  <span className="text-gray-700">从欧盟机场出发</span>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>赔偿金额：</strong>最高€600（航程超过3,500公里）
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🛫 场景4：阿姆斯特丹 → 北京（荷兰皇家航空KLM）</h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">✅ 可申请</span>
                  <span className="text-gray-700">从欧盟机场出发的欧洲航空公司</span>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>赔偿金额：</strong>最高€600（航程超过3,500公里）
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Delay requirements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              延误多久可以申请赔偿？
            </h2>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
              <p className="mb-0 text-lg">
                <strong>关键规则：</strong>航班必须延误<strong>至少3小时</strong>（到达目的地时间）才能申请赔偿。
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded font-bold text-xl">2.5小时</div>
                <div>
                  <div className="font-semibold">❌ 无赔偿</div>
                  <div className="text-sm text-gray-600">延误未达到3小时门槛</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded font-bold text-xl">3.5小时</div>
                <div>
                  <div className="font-semibold">✅ 有赔偿</div>
                  <div className="text-sm text-gray-600">根据航程距离获得€250-€600</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded font-bold text-xl">取消</div>
                <div>
                  <div className="font-semibold">✅ 有赔偿</div>
                  <div className="text-sm text-gray-600">航班取消通常可获得全额赔偿</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Extraordinary circumstances */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              什么是"特殊情况"？
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              航空公司在某些<strong>"特殊情况"</strong>下可以拒绝支付赔偿。但这些情况有严格定义：
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-red-900">❌ 有效的特殊情况（无赔偿）：</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 恶劣天气（暴风雪、台风等）</li>
                  <li>• 政治动荡或罢工（非航空公司员工）</li>
                  <li>• 安全威胁</li>
                  <li>• 空中交通管制限制</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-900">✅ 无效的借口（仍需赔偿）：</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 航空公司员工罢工</li>
                  <li>• 常规技术故障</li>
                  <li>• 机组人员调度问题</li>
                  <li>• 前一航班延误（多米诺效应）</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
              <p className="mb-0">
                <strong>💡 重要：</strong>航空公司必须<strong>举证证明</strong>特殊情况的存在。如果他们只是
                声称"技术问题"但未提供详细证据，您仍然有权获得赔偿。
              </p>
            </div>
          </section>

          {/* Section 6: How to claim */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              如何申请赔偿？
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              申请欧盟航班赔偿有两种主要方式：
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">1️⃣ 自行申请</h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li>✅ 无需支付佣金</li>
                  <li>❌ 需要自己研究法规</li>
                  <li>❌ 航空公司可能拒绝或拖延</li>
                  <li>❌ 需要流利的英语/德语</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-300 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">2️⃣ 通过ClaimWinger</h3>
                <ul className="space-y-2 text-gray-600 text-sm mb-4">
                  <li>✅ 无风险（不成功不收费）</li>
                  <li>✅ 法律专家代理</li>
                  <li>✅ 中文服务支持</li>
                  <li>✅ 对亚洲乘客友好的服务</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mt-6">
              <h3 className="text-2xl font-bold mb-3">为什么选择ClaimWinger？</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>专注于亚洲乘客，理解中国旅客的需求</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>灵活的小型团队，快速响应</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>个性化服务，不是流水线处理</span>
                </li>
              </ul>
              <a 
                href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors no-underline"
              >
                立即检查航班资格 →
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              常见问题解答
            </h2>

            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  从中国购买的机票可以申请欧盟赔偿吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  可以！只要航班符合EU 261/2004的保护范围（从欧盟出发或欧洲航空公司），无论您在哪里
                  购买机票，都有权申请赔偿。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  用积分兑换的免费机票能申请赔偿吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  可以！赔偿金额与您支付的票价无关。即使是积分兑换的机票，只要航班延误超过3小时，
                  您仍然有权获得全额赔偿。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  申请赔偿有时间限制吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  有的。时效期限取决于您起诉的国家法律。一般来说，德国为3年，法国为2年，英国为6年。
                  建议尽快申请。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  航空公司提供代金券代替现金可以吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  不可以！根据EU 261/2004，航空公司必须支付<strong>现金赔偿</strong>。代金券只有在
                  您主动同意的情况下才能接受。
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              您的航班延误或取消了吗？
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              立即检查您的航班是否符合赔偿条件——最高可获得600欧元
            </p>
            <a 
              href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl no-underline"
            >
              免费检查航班 →
            </a>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
