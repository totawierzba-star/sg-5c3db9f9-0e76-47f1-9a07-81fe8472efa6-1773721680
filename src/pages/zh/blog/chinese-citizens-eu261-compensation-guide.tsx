import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { 
  Scale, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  FileText, 
  Plane,
  MapPin,
  Shield,
  HelpCircle,
  ArrowRight,
  Info
} from "lucide-react";

export default function ChineseCitizensEU261Guide() {
  return (
    <LayoutZh>
      <SEO
        title="中国护照也能获得欧盟航班赔偿？完整指南 EU261 | 2026"
        description="许多中国乘客不知道：持中国护照也能获得 €250-€600 欧盟航班赔偿！国籍不重要 - 重要的是航班路线。了解您的权利。"
        url="https://problemlot.com/zh/blog/chinese-citizens-eu261-compensation-guide"
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "中国护照也能获得欧盟航班赔偿？完整指南 EU261 | 2026",
            "description": "许多中国乘客不知道：持中国护照也能获得 €250-€600 欧盟航班赔偿！国籍不重要 - 重要的是航班路线。了解您的权利。",
            "image": "https://problemlot.com/og-image.png",
            "author": {
              "@type": "Organization",
              "name": "ProblemLot.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ProblemLot.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://problemlot.com/og-image.png"
              }
            },
            "datePublished": "2026-01-30",
            "dateModified": "2026-01-30"
          })
        }}
      />

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
                "name": "我持中国护照，真的可以获得欧盟航班赔偿吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "是的！EU261 法规不看护照国籍，只看航班路线和承运航空公司。只要您的航班从欧盟或英国出发，或由欧盟/英国航空公司执飞并到达欧盟/英国，您就受到保护 - 无论您持有哪国护照。"
                }
              },
              {
                "@type": "Question",
                "name": "我从北京飞往法兰克福的汉莎航空航班延误了 5 小时，能索赔吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以！汉莎航空是欧盟航空公司，飞往欧盟（德国），因此受 EU261 保护。到达延误超过 3 小时且非特殊情况，您有权获得 €600 赔偿（北京-法兰克福距离超过 3,500 公里）。"
                }
              },
              {
                "@type": "Question",
                "name": "我从上海飞往伦敦的中国东方航空航班被取消，能索赔欧盟赔偿吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "不能。中国东方航空不是欧盟/英国航空公司，且航班从中国出发（不在欧盟/英国境内），因此不受 EU261/UK261 保护。您需要查看东航的运输条款或中国民航法规。"
                }
              },
              {
                "@type": "Question",
                "name": "航空公司会因为我是中国公民而拒绝赔偿吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "不会！根据 EU261 法规，航空公司不能以乘客国籍为由拒绝赔偿。如果您符合赔偿条件（航班路线 + 延误/取消原因），您的护照国籍完全不重要。若航空公司以此为由拒赔，您可向欧盟消费者中心（ECC-Net）或民航局投诉。"
                }
              },
              {
                "@type": "Question",
                "name": "我需要欧盟居留证或签证才能索赔吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "不需要！EU261 不要求任何居留证、签证或欧盟身份。只要您有有效机票、登机牌和航班延误/取消证明，就可以索赔 - 无论您是游客、商务旅客还是转机乘客。"
                }
              },
              {
                "@type": "Question",
                "name": "我的航班从欧洲返回中国时被取消，能索赔吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "可以！从欧盟/英国出发的所有航班都受 EU261 保护 - 无论航空公司国籍、乘客国籍或目的地。例如：巴黎→北京（国航）被取消，您有权索赔欧盟赔偿。"
                }
              },
              {
                "@type": "Question",
                "name": "ClaimWinger 能帮助中国公民索赔吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "当然！ClaimWinger 为全球乘客（包括中国公民）提供索赔服务。我们处理所有法律程序、与航空公司沟通，并在 8-12 周内帮您获得赔偿。只在成功后收费（通常为赔偿金额的 25% + 增值税），无风险。"
                }
              },
              {
                "@type": "Question",
                "name": "索赔时需要提供哪些文件？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "需要：1) 登机牌或电子客票确认；2) 护照复印件；3) 航班延误/取消的书面证明（航空公司邮件/短信/机场公告）；4) 银行账户信息（接收赔偿）。不需要欧盟签证或居留证。"
                }
              }
            ]
          })
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">
              首页
            </Link>
            <span className="mx-2">/</span>
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400">
              博客
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-gray-100">中国公民 EU261 赔偿指南</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              中国护照也能获得欧盟航班赔偿？<br />
              <span className="text-blue-600">完整指南 EU261</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              许多中国乘客不知道：持中国护照也能获得 €250-€600 欧盟航班赔偿！<br />
              <strong className="text-gray-900 dark:text-white">国籍不重要 - 重要的是航班路线。</strong>
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <time dateTime="2026-01-30">2026年1月30日更新</time>
              <span>•</span>
              <span>阅读时间：8 分钟</span>
            </div>
          </header>

          {/* AI Overview - Myth Buster */}
          <div className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-700 rounded-xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-600 text-white p-3 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  🎯 核心真相（立即了解）
                </h2>
                <p className="text-green-800 dark:text-green-200 font-semibold text-lg">
                  打破最大误解：护照国籍不影响赔偿权利！
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p className="text-lg leading-relaxed">
                <strong>EU261 法规</strong>（欧盟航班赔偿条例）保护<strong>所有乘客</strong> - 无论国籍。
                决定您是否受保护的<strong>唯一因素</strong>是：
              </p>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>航班从欧盟/英国出发</strong>（任何航空公司、任何乘客国籍）
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="text-lg">
                    <strong>或</strong>：由欧盟/英国航空公司执飞并<strong>到达</strong>欧盟/英国
                  </p>
                </div>
              </div>

              <p className="text-lg font-semibold text-green-900 dark:text-green-100">
                ✅ 示例：持中国护照从法兰克福飞往北京的汉莎航空航班延误 → 您有权获得 €600 赔偿！<br />
                ❌ 示例：持中国护照从北京飞往伦敦的国航航班延误 → 不受 EU261 保护。
              </p>
            </div>
          </div>

          {/* Myth vs Reality Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              误解 vs 真相
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* MYTH */}
              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-8 h-8 text-red-600" />
                  <h3 className="text-xl font-bold text-red-900 dark:text-red-100">❌ 常见误解</h3>
                </div>
                <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">×</span>
                    <span>"我没有欧盟护照，所以不能索赔"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">×</span>
                    <span>"只有欧洲人才能获得欧盟赔偿"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">×</span>
                    <span>"我需要欧盟签证才能索赔"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">×</span>
                    <span>"航空公司可以因为我是中国人拒绝赔偿"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">×</span>
                    <span>"我只是转机，所以不受保护"</span>
                  </li>
                </ul>
              </div>

              {/* REALITY */}
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-100">✅ 法律真相</h3>
                </div>
                <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>护照国籍完全不重要</strong> - 法规明确规定</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>所有乘客</strong>享有同等权利 - 游客、学生、商务人士</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>不需要签证或居留证</strong> - 只需有效机票</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>以国籍拒赔是违法的</strong> - 可向当局投诉</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>转机乘客同样受保护</strong> - 只要符合路线条件</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 dark:text-gray-200">
                <strong className="text-blue-900 dark:text-blue-100">法律依据：</strong>
                EU261 第 3 条明确规定："本条例适用于<strong>所有乘客</strong>……无论其国籍。"
                （<a 
                  href="https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  EUR-Lex 官方文本
                </a>）
              </p>
            </div>
          </section>

          {/* 3 Simple Rules */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-blue-600" />
              3 条简单规则判断您是否受保护
            </h2>

            <div className="space-y-6">
              {/* Rule 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      航班从欧盟或英国出发
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                      如果您的航班从欧盟或英国机场起飞，您<strong>自动受保护</strong> - 
                      无论航空公司是哪家、您飞往哪里、您持有哪国护照。
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <p className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ 受保护示例：</p>
                      <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                        <li>• 法兰克福 → 北京（汉莎航空）- 中国护照 ✓</li>
                        <li>• 巴黎 → 上海（国航）- 中国护照 ✓</li>
                        <li>• 伦敦 → 迪拜 → 香港（阿联酋航空）- 中国护照 ✓</li>
                        <li>• 阿姆斯特丹 → 纽约（达美航空）- 中国护照 ✓</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rule 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      欧盟/英国航空公司到达欧盟/英国
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                      如果由<strong>欧盟或英国航空公司</strong>执飞并<strong>到达</strong>欧盟/英国，
                      您也受保护 - 即使从非欧盟国家出发。
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
                      <p className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ 受保护示例：</p>
                      <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                        <li>• 北京 → 慕尼黑（汉莎航空 LH720）- 中国护照 ✓</li>
                        <li>• 上海 → 巴黎（法航 AF117）- 中国护照 ✓</li>
                        <li>• 香港 → 伦敦（英航 BA31）- 中国护照 ✓</li>
                        <li>• 东京 → 法兰克福（汉莎航空）- 中国护照 ✓</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <p className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ 不受保护示例：</p>
                      <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                        <li>• 北京 → 伦敦（<strong>国航</strong> CA937）- 非欧盟航司 ✗</li>
                        <li>• 上海 → 法兰克福（<strong>东航</strong> MU219）- 非欧盟航司 ✗</li>
                        <li>• 广州 → 阿姆斯特丹（<strong>南航</strong> CZ307）- 非欧盟航司 ✗</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rule 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-indigo-200 dark:border-indigo-800">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      符合延误/取消条件
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                      除了路线条件，您还需要满足：
                    </p>
                    <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <strong>到达延误 ≥ 3 小时</strong>（延误）或航班被取消
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <strong>非"特殊情况"</strong>导致（如极端天气、战争、恐袭等）
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          您<strong>按时办理值机</strong>并持有有效机票
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Real Scenarios for Chinese Passengers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-600" />
              中国乘客真实场景分析
            </h2>

            <div className="space-y-6">
              {/* Scenario 1 - Protected */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border-2 border-green-300 dark:border-green-700">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
                      场景 1：受保护 ✅
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
                      <strong>李先生</strong>（中国护照）预订了<strong>汉莎航空 LH720</strong> 从北京首都机场飞往法兰克福。
                      航班延误 6 小时到达。
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <p><strong>出发地：</strong>北京（中国） → 目的地：法兰克福（德国）</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Plane className="w-5 h-5 text-blue-600" />
                        <p><strong>航空公司：</strong>汉莎航空（德国 = 欧盟航司）</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-green-600" />
                        <p><strong>适用规则：</strong>EU261 - 欧盟航司到达欧盟 ✓</p>
                      </div>
                      <div className="mt-4 bg-green-100 dark:bg-green-900/30 rounded-lg p-4">
                        <p className="text-xl font-bold text-green-900 dark:text-green-100">
                          💰 赔偿金额：<span className="text-3xl">€600</span>
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                          （距离超过 3,500 km + 到达延误 ≥ 3 小时）
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-800 dark:text-gray-200">
                      <strong>为什么受保护？</strong>汉莎航空是欧盟航空公司，航班到达欧盟境内（德国）。
                      李先生的中国护照<strong>完全不影响</strong>他的赔偿权利。
                    </p>
                  </div>
                </div>
              </div>

              {/* Scenario 2 - Not Protected */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-8 border-2 border-red-300 dark:border-red-700">
                <div className="flex items-start gap-4 mb-4">
                  <XCircle className="w-10 h-10 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-2">
                      场景 2：不受保护 ❌
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
                      <strong>王女士</strong>（中国护照）预订了<strong>中国国际航空 CA937</strong> 从北京飞往伦敦。
                      航班延误 5 小时到达。
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <p><strong>出发地：</strong>北京（中国） → 目的地：伦敦（英国）</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Plane className="w-5 h-5 text-blue-600" />
                        <p><strong>航空公司：</strong>中国国际航空（中国航司）</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <XCircle className="w-5 h-5 text-red-600" />
                        <p><strong>适用规则：</strong>不受 EU261/UK261 保护 ✗</p>
                      </div>
                      <div className="mt-4 bg-red-100 dark:bg-red-900/30 rounded-lg p-4">
                        <p className="text-xl font-bold text-red-900 dark:text-red-100">
                          ❌ 无欧盟/英国赔偿
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                          需查看国航运输条款或中国民航法规
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-800 dark:text-gray-200">
                      <strong>为什么不受保护？</strong>国航不是欧盟/英国航空公司，且航班从非欧盟国家（中国）出发。
                      即使到达英国，也不受 EU261/UK261 保护。
                    </p>
                  </div>
                </div>
              </div>

              {/* Scenario 3 - Return Flight Protected */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border-2 border-green-300 dark:border-green-700">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
                      场景 3：返程航班受保护 ✅
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
                      <strong>张先生</strong>（中国护照）从巴黎戴高乐机场乘坐<strong>中国国际航空 CA934</strong> 返回北京。
                      航班被取消。
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <p><strong>出发地：</strong>巴黎（法国 = 欧盟） → 目的地：北京（中国）</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Plane className="w-5 h-5 text-blue-600" />
                        <p><strong>航空公司：</strong>中国国际航空（中国航司）</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-green-600" />
                        <p><strong>适用规则：</strong>EU261 - 从欧盟出发 ✓</p>
                      </div>
                      <div className="mt-4 bg-green-100 dark:bg-green-900/30 rounded-lg p-4">
                        <p className="text-xl font-bold text-green-900 dark:text-green-100">
                          💰 赔偿金额：<span className="text-3xl">€600</span>
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                          （距离超过 3,500 km + 航班取消）
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-800 dark:text-gray-200">
                      <strong>为什么受保护？</strong>航班从欧盟境内（法国）出发 - 无论航空公司国籍或目的地。
                      所有从欧盟/英国起飞的航班都受 EU261 保护！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Check Decision Tree */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-blue-600" />
              快速判断：我能索赔吗？
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 border-2 border-blue-300 dark:border-blue-700">
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">1</span>
                    您的航班从欧盟或英国出发吗？
                  </p>
                  <div className="ml-11 space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <p className="text-gray-800 dark:text-gray-200">
                        <strong>是</strong> → 您受保护！直接跳到"如何索赔"部分 ✅
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                      <p className="text-gray-800 dark:text-gray-200">
                        <strong>否</strong> → 继续下一步
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">2</span>
                    航空公司是欧盟或英国航空公司吗？
                  </p>
                  <div className="ml-11 space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-3">
                      <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">常见欧盟/英国航空公司：</p>
                      <p className="text-sm text-gray-800 dark:text-gray-200">
                        汉莎航空（德国）、法航（法国）、荷航（荷兰）、英航（英国）、
                        瑞安航空（爱尔兰）、西班牙国家航空、奥地利航空、瑞士航空、
                        北欧航空（SAS）、芬兰航空、意大利航空（ITA）等
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                      <p className="text-gray-800 dark:text-gray-200">
                        <strong>是</strong> → 继续下一步
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <XCircle className="w-6 h-6 text-red-600" />
                      <p className="text-gray-800 dark:text-gray-200">
                        <strong>否</strong>（如国航、东航、南航）→ 不受 EU261 保护 ❌
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">3</span>
                    航班到达欧盟或英国吗？
                  </p>
                  <div className="ml-11 space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <p className="text-gray-800 dark:text-gray-200">
                        <strong>是</strong> → 您受保护！✅
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <XCircle className="w-6 h-6 text-red-600" />
                      <p className="text-gray-800 dark:text-gray-200">
                        <strong>否</strong> → 不受 EU261 保护 ❌
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-green-100 dark:bg-green-900/30 rounded-lg p-6">
                <p className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                  ✅ 如果上述任一条件满足 + 延误/取消符合条件
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                  恭喜！您有权获得 €250-€600 赔偿 - <strong>无论您的护照国籍</strong>。
                </p>
              </div>
            </div>
          </section>

          {/* CTA - ClaimWinger Benefits */}
          <div className="mb-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-4">为什么选择 ClaimWinger 帮助索赔？</h2>
            <p className="text-xl mb-6 text-blue-100">
              我们专为国际乘客（包括中国公民）提供专业索赔服务，无语言障碍，无风险。
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-bold mb-2">98% 成功率</h3>
                <p className="text-blue-100">
                  专业法律团队，数千成功案例，熟悉航空公司拒赔套路
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-xl font-bold mb-2">无风险 - 只在成功后收费</h3>
                <p className="text-blue-100">
                  不成功不收费。通常收取 25% + 增值税（成功后从赔偿中扣除）
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold mb-2">8-12 周获得赔偿</h3>
                <p className="text-blue-100">
                  我们处理所有法律程序、与航空公司沟通、法院诉讼（如需）
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">✅ 专为中国乘客提供：</h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>中文咨询支持（通过合作伙伴）</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>接受中国银行账户收款（银行转账）</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>无需欧盟身份或居留证 - 只需护照复印件和登机牌</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>处理所有语言障碍 - 您无需与航空公司直接沟通</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>对抗"国籍拒赔"等非法理由 - 我们熟悉中国乘客常见问题</span>
                </li>
              </ul>
            </div>

            <a
              href="https://claimwinger.com/delayed-flight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              免费检查我的航班 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-xs text-blue-200 mt-3">只在成功获得赔偿后收费 • 3 分钟快速检查</p>
          </div>

          {/* How to Claim Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              如何索赔？（5 个步骤）
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "收集证据",
                  content: "保存登机牌、电子客票确认、护照复印件、航空公司关于延误/取消的邮件或短信、机场公告照片。"
                },
                {
                  step: 2,
                  title: "使用 ClaimWinger 检查资格",
                  content: "在 ClaimWinger 网站输入航班信息，系统自动判断您是否符合 EU261 条件。完全免费检查。"
                },
                {
                  step: 3,
                  title: "提交索赔委托",
                  content: "上传文件（登机牌、护照、延误证明），签署电子委托书。ClaimWinger 代表您向航空公司索赔。"
                },
                {
                  step: 4,
                  title: "ClaimWinger 处理一切",
                  content: "我们与航空公司沟通、反驳拒赔理由、必要时提起法律诉讼。您无需做任何事。"
                },
                {
                  step: 5,
                  title: "获得赔偿",
                  content: "8-12 周内收到赔偿（转账至您的银行账户）。ClaimWinger 从赔偿中扣除服务费（通常 25% + 增值税）。"
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-blue-600" />
              常见问题解答
            </h2>

            <div className="space-y-4">
              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 transition-colors">
                  我持中国护照,真的可以获得欧盟航班赔偿吗？
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>是的！</strong>EU261 法规不看护照国籍，只看航班路线和承运航空公司。
                  只要您的航班从欧盟或英国出发，或由欧盟/英国航空公司执飞并到达欧盟/英国，
                  您就受到保护 - 无论您持有哪国护照。这在法规第 3 条中明确规定。
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 transition-colors">
                  我从北京飞往法兰克福的汉莎航空航班延误了 5 小时，能索赔吗？
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>可以！</strong>汉莎航空是欧盟航空公司（德国），飞往欧盟（德国），
                  因此受 EU261 保护。到达延误超过 3 小时且非特殊情况（如极端天气），
                  您有权获得 €600 赔偿（北京-法兰克福距离超过 3,500 公里）。
                  您的中国护照完全不影响您的索赔权利。
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 transition-colors">
                  我从上海飞往伦敦的中国东方航空航班被取消，能索赔欧盟赔偿吗？
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>不能。</strong>中国东方航空不是欧盟/英国航空公司，
                  且航班从中国出发（不在欧盟/英国境内），因此不受 EU261/UK261 保护。
                  您需要查看东航的运输条款或中国民航法规（《民用航空法》第 126 条等）。
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 transition-colors">
                  航空公司会因为我是中国公民而拒绝赔偿吗？
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>不会！</strong>根据 EU261 法规，航空公司不能以乘客国籍为由拒绝赔偿。
                  如果您符合赔偿条件（航班路线 + 延误/取消原因），您的护照国籍完全不重要。
                  若航空公司以此为由拒赔，这是<strong>违法行为</strong>，您可以向欧盟消费者中心（ECC-Net）
                  或目的地国家民航局投诉。ClaimWinger 熟悉此类非法拒赔，会代您对抗。
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 transition-colors">
                  我需要欧盟居留证或签证才能索赔吗？
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>不需要！</strong>EU261 不要求任何居留证、签证或欧盟身份。
                  只要您有有效机票、登机牌和航班延误/取消证明，就可以索赔 - 
                  无论您是游客、商务旅客还是转机乘客。唯一需要的身份证明是护照（用于身份验证和收款）。
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 transition-colors">
                  我的航班从欧洲返回中国时被取消，能索赔吗？
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>可以！</strong>从欧盟/英国出发的所有航班都受 EU261 保护 - 
                  无论航空公司国籍、乘客国籍或目的地。例如：巴黎→北京（国航 CA934）被取消，
                  您有权索赔欧盟赔偿，因为航班从欧盟境内（法国）出发。
                  这是许多中国乘客不知道的重要权利！
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 transition-colors">
                  ClaimWinger 能帮助中国公民索赔吗？
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>当然！</strong>ClaimWinger 为全球乘客（包括中国公民）提供索赔服务。
                  我们处理所有法律程序、与航空公司沟通（用航空公司本地语言），
                  并在 8-12 周内帮您获得赔偿。服务包括：中文咨询支持（合作伙伴）、
                  接受中国银行账户收款、无需欧盟身份。<strong>只在成功后收费</strong>
                  （通常为赔偿金额的 25% + 增值税），无风险。
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 transition-colors">
                  索赔时需要提供哪些文件？
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  需要：<strong>1)</strong> 登机牌或电子客票确认（显示航班号、日期）；
                  <strong>2)</strong> 护照复印件（身份验证）；
                  <strong>3)</strong> 航班延误/取消的书面证明（航空公司邮件/短信、机场公告照片）；
                  <strong>4)</strong> 银行账户信息（IBAN/SWIFT 或中国银行账户，用于接收赔偿）。
                  <strong>不需要</strong>欧盟签证、居留证或其他身份文件。
                </p>
              </details>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">相关文章</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/zh/blog/eu261-uk261-passenger-rights"
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  EU261 与 UK261 完整赔偿指南
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  深入了解欧盟和英国航班赔偿法规的所有细节和条件
                </p>
                <span className="text-blue-600 font-semibold flex items-center gap-2">
                  阅读更多 <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/zh/blog/beijing-capital-delayed-flight-compensation"
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  北京首都机场延误航班赔偿
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  了解从北京首都机场出发或到达的航班延误赔偿权利
                </p>
                <span className="text-blue-600 font-semibold flex items-center gap-2">
                  阅读更多 <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </section>

          {/* Trust Links */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Info className="w-8 h-8 text-blue-600" />
              官方资料与权威来源
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg space-y-4">
              <div>
                <a
                  href="https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  欧盟法规 261/2004 官方文本（EUR-Lex）
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-1 ml-7">
                  完整的 EU261 法规原文，包括所有条款和乘客权利说明
                </p>
              </div>

              <div>
                <a
                  href="https://www.caa.co.uk/passengers-and-public/resolving-travel-problems/delays-and-cancellations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center gap-2"
                >
                  <Shield className="w-5 h-5" />
                  英国民航局（UK CAA）- 延误与取消指南
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-1 ml-7">
                  英国官方的航班延误和取消乘客权利指南
                </p>
              </div>

              <div>
                <a
                  href="https://www.eccnet.eu/consumer-rights/what-are-my-consumer-rights/travel-and-passenger-rights/air-passenger-rights/flight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center gap-2"
                >
                  <HelpCircle className="w-5 h-5" />
                  欧洲消费者中心网络（ECC-Net）
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-1 ml-7">
                  跨境消费者保护组织，提供免费航班索赔咨询和投诉帮助
                </p>
              </div>

              <div>
                <a
                  href="https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center gap-2"
                >
                  <Info className="w-5 h-5" />
                  Your Europe - 航空乘客权利概览
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-1 ml-7">
                  欧盟官方的乘客权利信息门户，多语言支持
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl p-10 shadow-2xl text-center">
            <h2 className="text-4xl font-bold mb-4">准备好索赔了吗？</h2>
            <p className="text-xl mb-8 text-blue-100">
              记住：<strong>国籍不重要，航班路线才重要！</strong><br />
              持中国护照的您也享有完整的欧盟航班赔偿权利。
            </p>
            <a
              href="https://claimwinger.com/delayed-flight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              免费检查我的赔偿 <ArrowRight className="w-6 h-6" />
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ 无风险 - 只在成功后收费　✓ 3 分钟快速检查　✓ 98% 成功率
            </p>
          </div>
        </div>
      </article>
    </LayoutZh>
  );
}
