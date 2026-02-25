import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import Head from "next/head";
import { XCircle, Euro, AlertCircle, CheckCircle, Calendar, Clock, Shield, ArrowRight, HelpCircle } from "lucide-react";

export default function FlightCancellationCompensationGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "航班取消一定能获得赔偿吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不一定。如果航空公司提前14天通知您，或者因特殊情况（如恶劣天气、政治动荡）取消，可能无需赔偿。但如果是技术故障、人员调度问题，或提前不足14天通知，您有权获得€250-€600赔偿。"
        }
      },
      {
        "@type": "Question",
        "name": "航班取消后，我可以要求什么？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "您有权选择：1) 全额退票，2) 改签其他航班（尽快或您选择的日期），3) 如果符合条件，额外获得€250-€600现金赔偿，4) 等待期间的食宿（如需过夜）。"
        }
      },
      {
        "@type": "Question",
        "name": "航空公司只提供代金券可以吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不可以！根据EU 261/2004，航空公司必须优先支付现金赔偿。代金券只能在您主动同意的情况下接受。不要被误导——坚持要求现金。"
        }
      },
      {
        "@type": "Question",
        "name": "航班取消后多久必须支付赔偿？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "法规没有明确规定时间，但一般航空公司应在6-8周内处理。如果超过8周仍未回复，您可以向民航局投诉或委托ClaimWinger等专业公司追讨。"
        }
      },
      {
        "@type": "Question",
        "name": "取消航班后我自己订了新机票，能报销吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "如果航空公司未提供及时的替代航班，您有权自行订票并要求报销合理费用。但建议先联系航空公司确认，并保留所有收据和沟通记录。"
        }
      }
    ]
  };

  return (
    <LayoutZh>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      
      <SEO 
        title="✈️航班取消能赔多少钱？€250-€600索赔指南【2026中国乘客版】"
        description="欧洲航班取消了？你可能有权获得€250-€600赔偿+全额退票！3分钟了解取消航班的所有权利⚖️"
        url="https://lotproblem.pl/zh/blog/flight-cancellation-compensation-guide"
        image="https://lotproblem.pl/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/zh/blog" className="hover:text-blue-600">博客</Link>
              <span>→</span>
              <span>航班取消</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              航班取消赔偿指南——中国乘客在欧洲的权益
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 2026年2月25日</span>
              <span>⏱️ 12分钟阅读</span>
              <span>❌ 取消航班</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              航班突然取消是旅行中最糟糕的经历之一。但如果是在欧洲，好消息是：根据<strong>EU 261/2004法规</strong>，
              您可能有权获得<strong>€250-€600的现金赔偿</strong>，外加全额退票或免费改签。本指南将告诉您
              取消航班后的所有权利，以及如何成功索赔。
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">您的航班取消了吗？</h3>
            <p className="text-red-100 mb-6 text-lg">
              立即检查是否有权获得赔偿——<strong>最高€600 + 退票</strong>
            </p>
            <a 
              href="https://claimwinger.com/zh/hangban-quxiao?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_content" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-all shadow-md hover:shadow-xl no-underline"
            >
              免费检查取消航班 →
            </a>
          </div>

          {/* Section 1: Cancellation vs Delay */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              取消航班 vs 延误航班——有什么区别？
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              许多乘客混淆这两个概念。实际上，<strong>取消航班通常比延误更容易获得赔偿</strong>：
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 border-2 border-orange-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-900">⏰ 延误航班</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 航班仍然起飞，但晚点</li>
                  <li>• 必须延误≥3小时才有赔偿</li>
                  <li>• 特殊情况可免责</li>
                  <li>• 赔偿：€250-€600（根据距离）</li>
                </ul>
              </div>

              <div className="bg-red-50 border-2 border-red-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-red-900">❌ 取消航班</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 航班根本不飞</li>
                  <li>• 无需3小时门槛</li>
                  <li>• 除非提前14天通知，否则需赔偿</li>
                  <li>• 赔偿：€250-€600 + 退票/改签</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
              <p className="mb-0">
                <strong>💡 关键优势：</strong>取消航班的赔偿门槛<strong>更低</strong>——不需要等3小时，
                只要航空公司提前不足14天通知，您就有权获得赔偿。
              </p>
            </div>
          </section>

          {/* Section 2: When you get compensation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              什么情况下可以获得赔偿？
            </h2>

            <div className="space-y-6">
              <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-900">✅ 必须赔偿的情况：</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>提前不足14天通知</strong>
                      <p className="text-gray-600 text-sm">如果航空公司在起飞前14天内才通知取消，必须赔偿。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>技术故障</strong>
                      <p className="text-gray-600 text-sm">常规技术问题（非意外故障）不是免责理由。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>航空公司员工罢工</strong>
                      <p className="text-gray-600 text-sm">机组人员或地勤罢工属于航空公司责任范围。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>超售或运营问题</strong>
                      <p className="text-gray-600 text-sm">座位不足、人员调度失误等都需要赔偿。</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border-2 border-red-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-red-900">❌ 可能免赔的情况：</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>提前14天以上通知</strong>
                      <p className="text-gray-600 text-sm">如果航空公司提前很久通知，可能无需赔偿（但仍需退票）。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>特殊情况（真正的）</strong>
                      <p className="text-gray-600 text-sm">恶劣天气、政治动荡、安全威胁等不可抗力。</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: 14-day rule */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-blue-600" />
              14天通知规则——关键时间线
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              <strong>14天规则</strong>是判断能否获得赔偿的关键：
            </p>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ 提前不足7天通知</h3>
                <p className="text-gray-700 mb-3">
                  如果航空公司在起飞前<strong>少于7天</strong>才通知取消：
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 必须支付全额赔偿（€250-€600）</li>
                  <li>• 无论是否提供替代航班</li>
                  <li>• 这是最常见的赔偿场景</li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                <h3 className="font-bold text-orange-900 mb-2">⚠️ 提前7-14天通知</h3>
                <p className="text-gray-700 mb-3">
                  如果航空公司在起飞前<strong>7-14天</strong>通知取消：
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 如果提供合理的替代航班，可能免赔</li>
                  <li>• "合理"指：起飞时间相差不超过2小时，到达时间不超过4小时</li>
                  <li>• 否则仍需支付赔偿</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="font-bold text-green-900 mb-2">✅ 提前14天以上通知</h3>
                <p className="text-gray-700 mb-3">
                  如果航空公司在起飞前<strong>超过14天</strong>通知取消：
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 通常无需支付现金赔偿</li>
                  <li>• 但必须提供全额退票或免费改签</li>
                  <li>• 这是最有利于航空公司的情况</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Your rights after cancellation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              航班取消后，您有哪些权利？
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              取消航班后，<strong>您立即拥有以下权利</strong>（无论何时通知）：
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-300 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-blue-900">1️⃣ 选择退票或改签</h3>
                <p className="text-gray-700 mb-3">您可以选择：</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✅ 全额退票（包括未使用的回程票）</li>
                  <li>✅ 改签到尽快的航班（免费）</li>
                  <li>✅ 改签到您选择的日期（免费）</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-300 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-blue-900">2️⃣ 等待期间的照顾</h3>
                <p className="text-gray-700 mb-3">航空公司必须提供：</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✅ 免费餐饮（根据等待时间）</li>
                  <li>✅ 免费通讯（2次电话/邮件）</li>
                  <li>✅ 如需过夜：免费酒店+交通</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-300 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-900">3️⃣ 现金赔偿（如符合条件）</h3>
                <p className="text-gray-700 mb-3">赔偿金额：</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✅ 航程≤1,500km → €250</li>
                  <li>✅ 航程1,500-3,500km → €400</li>
                  <li>✅ 航程&gt;3,500km → €600</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-300 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-900">4️⃣ 额外费用报销</h3>
                <p className="text-gray-700 mb-3">您可能有权要求：</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✅ 自行预订机票的合理费用</li>
                  <li>✅ 额外的酒店和交通费</li>
                  <li>✅ 签证延期费用（如适用）</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
              <p className="mb-0">
                <strong>⚠️ 重要：</strong>这些权利是<strong>累加的</strong>。例如，您可以同时获得：
                退票款 + 现金赔偿€600 + 食宿费用报销。不要让航空公司告诉您"只能选一个"！
              </p>
            </div>
          </section>

          {/* Section 5: Common airline tactics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              航空公司的常见拒赔手段
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              许多航空公司会试图逃避赔偿责任。了解这些常见借口，不要上当：
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">❌ 借口1："技术问题"</h3>
                <p className="text-gray-700 mb-2">
                  <strong>航空公司说：</strong>"飞机出现技术故障，这是特殊情况。"
                </p>
                <p className="text-green-700 font-semibold">
                  <strong>真相：</strong>常规技术维护问题<strong>不是</strong>免责理由！只有突发的、无法预见的
                  重大技术故障才算。
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">❌ 借口2："天气原因"</h3>
                <p className="text-gray-700 mb-2">
                  <strong>航空公司说：</strong>"恶劣天气导致取消，我们无能为力。"
                </p>
                <p className="text-green-700 font-semibold">
                  <strong>真相：</strong>如果同一时间其他航班正常起降，"天气"借口不成立。要求航空公司
                  提供气象证明！
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">❌ 借口3："只能提供代金券"</h3>
                <p className="text-gray-700 mb-2">
                  <strong>航空公司说：</strong>"我们给您价值更高的代金券，比现金更好。"
                </p>
                <p className="text-green-700 font-semibold">
                  <strong>真相：</strong>根据EU 261，您有权要求<strong>现金赔偿</strong>。代金券只能在
                  您主动同意的前提下接受。
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">❌ 借口4："您已经接受了改签"</h3>
                <p className="text-gray-700 mb-2">
                  <strong>航空公司说：</strong>"您已经坐了替代航班，所以无需赔偿。"
                </p>
                <p className="text-green-700 font-semibold">
                  <strong>真相：</strong>改签和赔偿是<strong>分开的权利</strong>！接受替代航班不影响
                  您要求现金赔偿的资格。
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: How to claim */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              如何申请取消航班的赔偿？
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg border-2 border-blue-300 mb-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">✅ 两种申请方式对比</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-900 mb-3">1️⃣ 自行申请：</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✅ 无需支付佣金</li>
                    <li>✅ 完全掌控流程</li>
                    <li>❌ 需要时间和精力</li>
                    <li>❌ 航空公司可能拒绝或拖延</li>
                    <li>❌ 需要流利的英语/德语</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-3">2️⃣ 委托ClaimWinger：</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✅ 无风险（不成功不收费）</li>
                    <li>✅ 法律专家代理</li>
                    <li>✅ 中文服务支持</li>
                    <li>✅ 针对亚洲乘客的灵活服务</li>
                    <li>✅ 小团队，快速响应</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">为什么选择ClaimWinger？</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span><strong>专注亚洲乘客</strong> - 理解中国旅客的需求和沟通方式</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span><strong>灵活响应</strong> - 小型团队，不是流水线式处理</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span><strong>个性化服务</strong> - 每个案例都得到仔细审查</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span><strong>透明收费</strong> - 不成功不收费，成功后收取合理佣金</span>
                </li>
              </ul>
              <a 
                href="https://claimwinger.com/zh/hangban-quxiao?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_content" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors no-underline"
              >
                立即申请取消航班赔偿 →
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-blue-600" />
              常见问题解答
            </h2>

            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  航班取消一定能获得赔偿吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  不一定。如果航空公司提前14天通知您，或者因特殊情况（如恶劣天气、政治动荡）取消，
                  可能无需赔偿。但如果是技术故障、人员调度问题，或提前不足14天通知，您有权获得€250-€600赔偿。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  航班取消后，我可以要求什么？
                </summary>
                <p className="mt-4 text-gray-700">
                  您有权选择：1) 全额退票，2) 改签其他航班（尽快或您选择的日期），3) 如果符合条件，
                  额外获得€250-€600现金赔偿，4) 等待期间的食宿（如需过夜）。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  航空公司只提供代金券可以吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  不可以！根据EU 261/2004，航空公司必须优先支付<strong>现金赔偿</strong>。代金券只能在
                  您主动同意的情况下接受。不要被误导——坚持要求现金。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  航班取消后多久必须支付赔偿？
                </summary>
                <p className="mt-4 text-gray-700">
                  法规没有明确规定时间，但一般航空公司应在6-8周内处理。如果超过8周仍未回复，您可以向
                  民航局投诉或委托ClaimWinger等专业公司追讨。
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  取消航班后我自己订了新机票，能报销吗？
                </summary>
                <p className="mt-4 text-gray-700">
                  如果航空公司未提供及时的替代航班，您有权自行订票并要求报销合理费用。但建议先联系
                  航空公司确认，并保留所有收据和沟通记录。
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              您的航班被取消了吗？
            </h2>
            <p className="text-xl text-red-100 mb-8">
              不要放弃您的权利！立即检查是否有权获得最高€600赔偿
            </p>
            <a 
              href="https://claimwinger.com/zh/hangban-quxiao?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_content" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-red-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-red-50 transition-all shadow-lg hover:shadow-xl no-underline"
            >
              免费申请赔偿 →
            </a>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}