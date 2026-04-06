import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { Clock, PlaneTakeoff, Euro, AlertCircle, CheckCircle, XCircle, ArrowRight, FileText, Users } from "lucide-react";

export default function EuropeToChinaFlightDelayRights() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "从法兰克福飞往北京的航班延误，我能获得赔偿吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "是的！从欧洲出发飞往中国的航班延误超过3小时，根据EU 261/2004法规，您有权获得€250-€600的赔偿。无论您的国籍如何，只要航班从欧盟机场出发，该法规都适用。"
        }
      },
      {
        "@type": "Question",
        "name": "中国航空公司从欧洲飞往中国的航班适用EU 261吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "是的！即使是中国国航、东方航空或南方航空，只要航班从欧洲机场（如法兰克福、巴黎、阿姆斯特丹）出发，就受EU 261保护。航空公司国籍不影响您的赔偿权利。"
        }
      },
      {
        "@type": "Question",
        "name": "延误多少小时才能申请赔偿？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "到达目的地延误超过3小时即可申请赔偿。赔偿金额取决于飞行距离：短途（<1500km）€250，中途（1500-3500km）€400，长途（>3500km，如欧洲-中国）€600。"
        }
      },
      {
        "@type": "Question",
        "name": "航空公司说延误是天气原因，还能获得赔偿吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不一定。如果延误确实由恶劣天气等'特殊情况'造成，且航空公司已采取一切合理措施，可能无法获得赔偿。但如果是技术故障、机组问题或航空公司内部原因，您仍有权获得赔偿。建议通过ClaimWinger等专业平台评估您的案件。"
        }
      },
      {
        "@type": "Question",
        "name": "我应该如何申请从欧洲飞往中国航班的延误赔偿？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "最简单的方法是通过ClaimWinger在线提交申请。只需填写航班信息和联系方式，无需注册账户。ClaimWinger将代表您向航空公司索赔，仅在成功获赔后收取25%佣金（不含税）。整个过程无需您支付任何前期费用。"
        }
      }
    ]
  };

  return (
    <LayoutZh>
      <SEO 
        title="🇪🇺→🇨🇳从欧洲飞往中国航班延误索赔【2026】€600赔偿权利详解"
        description="法兰克福/巴黎/阿姆斯特丹飞北京/上海航班延误？中国乘客完整赔偿指南💰EU 261保护所有欧洲出发航班⏱️3分钟了解您的权利"
        image="https://problemlot.com/og-image.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <header className="mb-12">
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <PlaneTakeoff className="w-5 h-5" />
              <span className="text-sm font-medium">欧洲出发航班权利</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              从欧洲飞往中国的航班延误<br/>你的赔偿权利完整指南
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                更新时间：2026年2月25日
              </span>
              <span>⏱️ 阅读时间：6 分钟</span>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong className="text-green-700">重要提示：</strong>从欧洲任何机场飞往中国的航班，无论您的国籍或航空公司国籍，只要延误超过3小时到达，您都有权根据<strong>EU 261/2004法规</strong>获得最高<strong className="text-green-600">€600</strong>的赔偿。
              </p>
            </div>
          </header>

          <div className="bg-blue-600 text-white p-6 rounded-lg mb-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Euro className="w-6 h-6" />
              立即检查您的赔偿资格
            </h2>
            <p className="mb-4 text-blue-50">
              您的航班从法兰克福、巴黎、阿姆斯特丹、慕尼黑或其他欧洲城市飞往北京、上海、广州或成都时延误了吗？只需2分钟即可提交索赔申请！
            </p>
            <a
              href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              免费提交索赔申请
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-xs text-blue-100 mt-3">
              ✓ 无前期费用 ✓ 仅在成功后付款 ✓ 25%佣金（不含税）
            </p>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-blue-600" />
              为什么从欧洲飞往中国的航班受EU 261保护？
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🛫 核心原则：出发地决定适用法规</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                EU 261/2004法规的适用不取决于<strong>航空公司国籍</strong>或<strong>乘客国籍</strong>，而是取决于<strong>航班出发地</strong>。
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <strong className="text-green-800">受保护的航班</strong>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1 ml-7">
                    <li>✓ 从欧盟机场出发的所有航班</li>
                    <li>✓ 包括中国航空公司运营的航班</li>
                    <li>✓ 无论最终目的地在哪里</li>
                    <li>✓ 无论乘客国籍</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <strong className="text-red-800">不受保护的航班</strong>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1 ml-7">
                    <li>✗ 从中国出发的航班</li>
                    <li>✗ 即使飞往欧洲</li>
                    <li>✗ 即使是欧洲航空公司运营</li>
                    <li>✗ 需在欧洲出发段申请</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">📍 常见欧洲出发航线示例</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="pb-2 font-semibold text-gray-900">航线示例</th>
                    <th className="pb-2 font-semibold text-gray-900">航空公司示例</th>
                    <th className="pb-2 font-semibold text-gray-900 text-center">受EU 261保护</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200">
                    <td className="py-3">法兰克福 → 北京</td>
                    <td className="py-3">汉莎航空 LH720</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-600 inline" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">法兰克福 → 上海</td>
                    <td className="py-3">中国国航 CA932</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-600 inline" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">巴黎 → 上海</td>
                    <td className="py-3">法国航空 AF116</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-600 inline" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">阿姆斯特丹 → 北京</td>
                    <td className="py-3">荷兰皇家航空 KL897</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-600 inline" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">慕尼黑 → 上海</td>
                    <td className="py-3">东方航空 MU219</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-600 inline" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">伦敦 → 北京</td>
                    <td className="py-3">英国航空 BA39</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-600 inline" /></td>
                  </tr>
                  <tr>
                    <td className="py-3">赫尔辛基 → 上海</td>
                    <td className="py-3">芬兰航空 AY88</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-green-600 inline" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600" />
              赔偿金额：您能获得多少？
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 mb-6 shadow-md">
              <p className="text-lg font-semibold text-gray-900 mb-6">
                从欧洲飞往中国的所有航班属于<strong className="text-green-600">长途航线（超过3500公里）</strong>，延误超过3小时到达即可获得：
              </p>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-600 mb-2">€600</div>
                  <p className="text-gray-600">每位乘客标准赔偿金额</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">📋 重要说明：</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>赔偿金额<strong>不受机票价格影响</strong>——无论您支付了多少钱或使用了里程</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>赔偿金额<strong>不受舱位影响</strong>——经济舱和商务舱乘客获得相同金额</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>儿童和婴儿</strong>也享有同等赔偿权利（每位€600）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>赔偿是<strong>额外补偿</strong>——不影响您的机票退款权利</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h4 className="font-semibold text-blue-900 mb-2">💡 实际案例</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                张先生一家三口（2名成人+1名8岁儿童）从法兰克福飞往北京的汉莎航空航班延误了4小时。根据EU 261，他们总共获得了<strong>€1,800的赔偿</strong>（€600 × 3人），这与他们的机票价格无关。
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-orange-600" />
              延误时间要求：何时有权获得赔偿？
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">⏱️ 关键时间节点</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <strong className="text-red-700">到达延误 &lt; 3小时</strong>
                  <p className="text-sm text-gray-600 mt-1">无赔偿权利（但您仍有权获得航空公司提供的餐饮和住宿服务）</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <strong className="text-green-700">到达延误 ≥ 3小时</strong>
                  <p className="text-sm text-gray-600 mt-1">有权获得€600赔偿（针对欧洲-中国航线）</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <strong className="text-blue-700">航班取消</strong>
                  <p className="text-sm text-gray-600 mt-1">无论何时取消，通常都有权获得赔偿（除非提前14天以上通知）</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                重要提醒：计算的是到达时间
              </h4>
              <p className="text-yellow-800 text-sm leading-relaxed">
                EU 261法规基于<strong>到达延误时间</strong>，而非起飞延误时间。例如，如果您的航班起飞延误了4小时，但由于顺风或其他原因，到达目的地只延误了2小时50分钟，您将<strong>无权获得赔偿</strong>。相反，如果起飞延误2小时，但到达延误3小时15分钟，您<strong>有权获得赔偿</strong>。
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              "特殊情况"：何时无法获得赔偿？
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                如果延误是由<strong>"特殊情况"</strong>（Extraordinary Circumstances）造成的，且航空公司已采取一切合理措施，您可能无法获得赔偿。但航空公司必须<strong>提供证据</strong>证明延误确实由特殊情况造成。
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    常见"特殊情况"（通常无赔偿）
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>恶劣天气（暴风雪、台风、雷暴）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>空中交通管制限制</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>政治不稳定、罢工（非航空公司员工）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>安全威胁（如鸟击）</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    常见"非特殊情况"（有权赔偿）
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>技术故障（常规维护问题）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>机组人员问题（疾病、调度失误）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>航空公司运营问题（超售、飞机调度）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>航空公司员工罢工</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h4 className="font-semibold text-orange-900 mb-2">⚠️ 航空公司常用借口</h4>
              <p className="text-orange-800 text-sm leading-relaxed mb-3">
                许多航空公司会声称延误是由"特殊情况"造成的，即使实际上并非如此。例如，他们可能会说"技术故障"是不可预见的，但实际上常规维护问题<strong>不属于特殊情况</strong>。
              </p>
              <p className="text-orange-800 text-sm leading-relaxed">
                <strong>建议：</strong>不要轻易接受航空公司的解释。通过<a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ClaimWinger</a>等专业平台评估您的案件，他们有丰富的经验识别航空公司的不合理拒绝。
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              如何申请赔偿：完整步骤
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">方法1：通过ClaimWinger申请（推荐）</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">访问ClaimWinger网站</h4>
                      <p className="text-sm text-gray-600">打开 <a href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">claimwinger.com</a>，点击"提交索赔"按钮</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">填写航班信息</h4>
                      <p className="text-sm text-gray-600">输入航班号、日期和您的联系方式（无需注册账户）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">上传文件</h4>
                      <p className="text-sm text-gray-600">上传登机牌、航班延误证明（短信、邮件）等支持文件</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">ClaimWinger处理</h4>
                      <p className="text-sm text-gray-600">他们将代表您向航空公司索赔，处理所有法律和沟通事宜</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">获得赔偿</h4>
                      <p className="text-sm text-gray-600">成功后，赔偿金额将直接转入您的银行账户（扣除25%佣金+税）</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-green-700 mb-2">✅ ClaimWinger的优势：</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>无前期费用，仅在成功后付款</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>专业法律团队处理复杂案件</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>中文客服支持（如有需要）</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>平均3-6个月完成索赔</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">方法2：自行向航空公司申请</h3>
                <p className="text-sm text-gray-600 mb-4">
                  您也可以直接联系航空公司索赔，但这通常更耗时且成功率较低，因为：
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>航空公司可能会拖延或拒绝您的申请</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>需要用英语或德语沟通</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>需要了解复杂的法律条款</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>如果被拒绝，需要自行采取法律行动</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600">
                  <strong>建议：</strong>对于国际航班和复杂案件，使用专业平台如ClaimWinger通常更高效且成功率更高。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-purple-600" />
              常见问题解答（FAQ）
            </h2>
            
            <div className="space-y-4">
              <details className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                  从法兰克福飞往北京的航班延误，我能获得赔偿吗？
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  是的！从欧洲出发飞往中国的航班延误超过3小时，根据EU 261/2004法规，您有权获得€250-€600的赔偿。无论您的国籍如何，只要航班从欧盟机场出发，该法规都适用。
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                  中国航空公司从欧洲飞往中国的航班适用EU 261吗？
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  是的！即使是中国国航、东方航空或南方航空，只要航班从欧洲机场（如法兰克福、巴黎、阿姆斯特丹）出发，就受EU 261保护。航空公司国籍不影响您的赔偿权利。
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                  延误多少小时才能申请赔偿？
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  到达目的地延误超过3小时即可申请赔偿。赔偿金额取决于飞行距离：短途（&lt;1500km）€250，中途（1500-3500km）€400，长途（&gt;3500km，如欧洲-中国）€600。
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                  航空公司说延误是天气原因，还能获得赔偿吗？
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  不一定。如果延误确实由恶劣天气等"特殊情况"造成，且航空公司已采取一切合理措施，可能无法获得赔偿。但如果是技术故障、机组问题或航空公司内部原因，您仍有权获得赔偿。建议通过ClaimWinger等专业平台评估您的案件。
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                  我应该如何申请从欧洲飞往中国航班的延误赔偿？
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  最简单的方法是通过ClaimWinger在线提交申请。只需填写航班信息和联系方式，无需注册账户。ClaimWinger将代表您向航空公司索赔，仅在成功获赔后收取25%佣金（不含税）。整个过程无需您支付任何前期费用。
                </p>
              </details>
            </div>
          </section>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg shadow-xl mb-8">
            <h2 className="text-2xl font-bold mb-4">立即申请您的€600赔偿</h2>
            <p className="mb-6 text-blue-50">
              不要错过您应得的赔偿！从欧洲飞往中国的航班延误超过3小时？您有权获得最高€600的赔偿。
            </p>
            <a
              href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              免费提交索赔 →
            </a>
            <p className="text-xs text-blue-100 mt-4">
              ✓ 2分钟快速提交 ✓ 无风险 ✓ 成功率98%
            </p>
          </div>

          <section className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">相关文章</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/zh/blog/lufthansa-delay-cancellation-compensation" className="text-blue-600 hover:underline text-sm">
                → 汉莎航空延误/取消赔偿指南
              </Link>
              <Link href="/zh/blog/air-france-compensation-guide" className="text-blue-600 hover:underline text-sm">
                → 法国航空赔偿完整攻略
              </Link>
              <Link href="/zh/blog/klm-compensation-guide" className="text-blue-600 hover:underline text-sm">
                → 荷兰皇家航空KLM赔偿指南
              </Link>
              <Link href="/zh/blog/which-flights-qualify-compensation" className="text-blue-600 hover:underline text-sm">
                → 哪些航班有资格申请赔偿？
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutZh>
  );
}
