import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { Calendar, Shield, XCircle, CheckCircle, AlertTriangle, Scale, FileText, ThumbsDown, ThumbsUp, Zap } from "lucide-react";

export default function ExtraordinaryCircumstancesExplained() {
  return (
    <LayoutZh>
      <SEO 
        title="什么是特殊情况？航空公司何时可拒赔【2026】EU261例外条款详解"
        description="航司说'特殊情况'拒绝赔偿？90%是借口！完整解析EU261例外条款：技术故障能拒赔吗？天气延误算吗？如何反驳航司借口"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/zh" className="hover:text-blue-600">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">特殊情况详解</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              什么是"特殊情况"？航空公司何时可以拒绝赔偿？⚖️
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                最后更新：2026年2月25日
              </span>
              <span>⏱️ 阅读时间：12 分钟</span>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong className="text-red-900">⚠️ 重要警告：</strong>约<strong>90%的航空公司"特殊情况"拒赔理由是假的</strong>！本文教你如何识别虚假借口，以及何时航空公司真的可以合法拒绝赔偿€250-€600。
              </p>
            </div>
          </header>

          {/* CTA Top */}
          <div className="my-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🛡️ 航司用"特殊情况"拒赔？</h3>
            <p className="text-lg mb-6 opacity-90">让ClaimWinger专家免费审查——90%的拒赔理由不成立！</p>
            <a 
              href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_extraordinary_top"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-md"
            >
              免费提交申诉 →
            </a>
          </div>

          {/* Definition Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              "特殊情况"的法律定义
            </h2>

            <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📜 EU 261/2004 第5条第3款</h3>
              
              <div className="bg-white p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed italic border-l-4 border-blue-600 pl-4">
                  "如果航空公司能够证明取消或延误是由<strong className="text-blue-900">特殊情况</strong>引起的，即使采取一切合理措施也无法避免的情况，则可以免除赔偿义务。"
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">关键条件1：无法控制</p>
                    <p className="text-sm text-gray-700">情况必须完全<strong>超出航空公司的控制范围</strong></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">关键条件2：无法避免</p>
                    <p className="text-sm text-gray-700">即使采取<strong>一切合理措施</strong>也无法避免延误/取消</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">关键条件3：举证责任</p>
                    <p className="text-sm text-gray-700"><strong>航空公司</strong>必须提供证据证明符合上述两个条件</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong className="text-yellow-900">💡 关键要点：</strong>航空公司不能简单地说"特殊情况"就拒赔。他们必须<strong>提供具体证据</strong>证明：(1) 情况超出控制，(2) 无法通过合理措施避免。
              </p>
            </div>
          </section>

          {/* Red vs Green Lists */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🚦 什么算/不算特殊情况？</h2>

            <div className="grid md:grid-cols-2 gap-6">
              
              {/* GREEN: NOT Extraordinary */}
              <div className="bg-green-50 border-2 border-green-600 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <ThumbsUp className="w-10 h-10 text-green-600" />
                  <h3 className="text-2xl font-bold text-green-900">✅ 不算特殊情况<br/><span className="text-lg font-normal">(航司必须赔偿)</span></h3>
                </div>

                <div className="space-y-4">
                  
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">🔧 技术故障/机械问题</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>原因：</strong>飞机维护是航司的核心责任
                    </p>
                    <p className="text-xs text-gray-600">
                      ✅ 欧洲法院判例：发动机故障、液压系统问题、轮胎爆裂等<strong>均需赔偿</strong>
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">👨‍✈️ 机组人员短缺</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>原因：</strong>人员调度是航司运营责任
                    </p>
                    <p className="text-xs text-gray-600">
                      ✅ 包括：飞行员生病、乘务员不足、机组超时
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">✈️ 飞机调度问题</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>原因：</strong>机队管理属于运营范围
                    </p>
                    <p className="text-xs text-gray-600">
                      ✅ 包括：前序航班延误、飞机晚到、机型临时更换
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">⛽ 燃油/餐食/物资短缺</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>原因：</strong>物资准备是航司的基本职责
                    </p>
                    <p className="text-xs text-gray-600">
                      ✅ 即使供应商延误，航司也应提前准备
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">🎫 超售/Overbooking</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>原因：</strong>超售是航司的商业决策
                    </p>
                    <p className="text-xs text-gray-600">
                      ✅ 必须赔偿且提供替代航班
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">🧳 行李装载延误</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>原因：</strong>地面操作属于航司控制范围
                    </p>
                    <p className="text-xs text-gray-600">
                      ✅ 即使由第三方处理，航司仍需负责
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">🖥️ 系统/IT故障</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>原因：</strong>信息系统维护属于运营范围
                    </p>
                    <p className="text-xs text-gray-600">
                      ✅ 包括值机系统、预订系统崩溃
                    </p>
                  </div>

                </div>
              </div>

              {/* RED: IS Extraordinary */}
              <div className="bg-red-50 border-2 border-red-600 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <ThumbsDown className="w-10 h-10 text-red-600" />
                  <h3 className="text-2xl font-bold text-red-900">❌ 算特殊情况<br/><span className="text-lg font-normal">(航司可能不赔)</span></h3>
                </div>

                <div className="space-y-4">
                  
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">🌪️ 极端恶劣天气</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>条件：</strong>必须严重到<strong>机场关闭</strong>或<strong>无法安全飞行</strong>
                    </p>
                    <p className="text-xs text-gray-600">
                      ✅ 例：飓风、严重暴风雪、火山灰（如2010年冰岛火山）
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      ❌ 轻微降雨/降雪、能见度正常的雾、常见雷暴<strong>不算</strong>
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">✈️ 空中交通管制限制</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>条件：</strong>ATC系统故障或<strong>非航司</strong>能控制的空域管制
                    </p>
                    <p className="text-xs text-gray-600">
                      ✅ 例：空域拥堵、军事演习、ATC罢工
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      ❌ 航司自己的时刻安排不当<strong>不算</strong>
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">🔒 安全威胁</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>条件：</strong>真实、具体的安全风险
                    </p>
                    <p className="text-xs text-gray-600">
                      ✅ 例：恐怖袭击、炸弹威胁、劫机风险
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      ❌ 常规安全检查延误<strong>不算</strong>
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">🏛️ 政治不稳定</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>条件：</strong>目的地国家战争、政变、严重骚乱
                    </p>
                    <p className="text-xs text-gray-600">
                      ✅ 例：机场被军方占领、领空关闭
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">🐦 鸟击（特殊情况）</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>条件：</strong>无法预见且造成<strong>严重损害</strong>
                    </p>
                    <p className="text-xs text-gray-600">
                      ✅ 例：发动机吞入鸟群导致停机
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      ❌ 常见地区的常规鸟击风险<strong>不一定算</strong>
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-gray-900 mb-2">💥 隐藏制造缺陷</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>条件：</strong>制造商召回且航司<strong>无法预见</strong>
                    </p>
                    <p className="text-xs text-gray-600">
                      ✅ 例：波音737 MAX全球停飞（2019）
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      ❌ 常规维护能发现的问题<strong>不算</strong>
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* Common False Excuses */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              航空公司的5大虚假借口
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              以下是航空公司最常用的<strong>不成立</strong>拒赔理由——如果你遇到，请立即提出异议：
            </p>

            <div className="space-y-4">
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">❌ 借口1："技术故障无法预见"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>航司话术：</strong>"这次延误是由突发技术故障引起的，这属于特殊情况。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong>✅ 真相：</strong>欧洲法院<strong>Wallentin-Hermann案（C-549/07）</strong>明确判决：<strong>技术故障不属于特殊情况</strong>，因为飞机维护是航司的核心责任。即使是"突发"故障也不例外。
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">❌ 借口2："轻微天气影响也算特殊情况"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>航司话术：</strong>"由于目的地有雾/小雨，我们决定延误起飞以确保安全。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong>✅ 真相：</strong>只有<strong>极端恶劣天气导致机场关闭</strong>才算特殊情况。轻微降雨、常见的雾、或航司自己决定的"预防性延误"<strong>不算</strong>。如果其他航班同时段正常起飞，这绝对不是特殊情况。
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">❌ 借口3："前序航班延误导致连锁反应"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>航司话术：</strong>"您的飞机因前一班航班延误未能按时到达，这是特殊情况。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong>✅ 真相：</strong>航空公司的<strong>机队调度和运营计划</strong>属于其控制范围。前序航班延误、飞机晚到、机组超时等都<strong>不属于</strong>特殊情况。航司应该有备用飞机和机组。
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">❌ 借口4："机场/ATC问题不归我们管"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>航司话术：</strong>"延误是因为机场地面处理延误/空中交通管制，不是我们的责任。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong>✅ 真相：</strong>只有<strong>ATC系统性故障</strong>或<strong>非常规空域管制</strong>才算特殊情况。常规的地面服务延误、行李装载慢、登机门分配延迟等<strong>不算</strong>。航司应该提前协调好这些服务。
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 mb-3">❌ 借口5："COVID-19/疫情相关都是特殊情况"</h3>
                <p className="text-gray-700 mb-3">
                  <strong>航司话术：</strong>"由于疫情相关的人员/物资短缺，这属于不可抗力。"
                </p>
                <p className="text-sm text-gray-700">
                  <strong>✅ 真相：</strong>2023年后，疫情已经<strong>不再是普遍的特殊情况</strong>。如果延误是因为航司自己的人员安排不当、机组短缺等，<strong>必须赔偿</strong>。只有政府直接禁飞令才可能免责。
                </p>
              </div>

            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-6">
              <p className="text-gray-700">
                <strong>💡 专业建议：</strong>如果航司用上述任何理由拒赔，<strong>不要轻易接受</strong>。通过ClaimWinger提交申诉——专业团队会审查航司的证据，并在必要时诉诸法律。
              </p>
            </div>
          </section>

          {/* CTA Middle */}
          <div className="my-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <Scale className="w-16 h-16 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">⚖️ 航司拒赔理由不合理？</h3>
                <p className="text-gray-700 mb-4">
                  让ClaimWinger法律专家免费审查——我们处理过数千起"虚假特殊情况"案件
                </p>
                <a 
                  href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_extraordinary_mid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  立即提交案件审查 →
                </a>
              </div>
            </div>
          </div>

          {/* How to Challenge */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-600" />
              如何反驳航司的"特殊情况"说法？
            </h2>

            <div className="space-y-6">
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📝 步骤1：要求书面说明和证据</h3>
                <p className="text-gray-700 mb-4">
                  根据EU 261第14条，航空公司<strong>必须提供书面说明</strong>解释拒赔原因。
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-bold text-gray-900 mb-2">📧 你可以这样写邮件：</p>
                  <div className="bg-white p-3 rounded border border-gray-300 text-sm text-gray-700 font-mono">
                    <p>尊敬的 [航空公司名称]：</p>
                    <p className="mt-2">关于航班 [航班号] ([日期])，您声称延误/取消是由"特殊情况"引起。</p>
                    <p className="mt-2">根据EU 261/2004第14条，我要求您提供：</p>
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>1. 具体的"特殊情况"描述</li>
                      <li>2. 相关证据（气象报告、ATC文件、技术报告等）</li>
                      <li>3. 说明为何"一切合理措施"仍无法避免延误</li>
                    </ul>
                    <p className="mt-2">请在14天内以书面形式回复。</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🔍 步骤2：验证航司提供的证据</h3>
                <p className="text-gray-700 mb-4">
                  如果航司提供了"证据"，你可以自行验证：
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">天气：</p>
                      <p className="text-sm text-gray-700">查询 <a href="https://www.aviationweather.gov/" target="_blank" rel="noopener" className="text-blue-600 underline">Aviation Weather Center</a> 或 <a href="https://www.metoffice.gov.uk/" target="_blank" rel="noopener" className="text-blue-600 underline">Met Office</a> 的历史天气数据</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">其他航班：</p>
                      <p className="text-sm text-gray-700">查询 <a href="https://www.flightradar24.com/" target="_blank" rel="noopener" className="text-blue-600 underline">FlightRadar24</a> 看同时段其他航司是否正常起飞</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">ATC延误：</p>
                      <p className="text-sm text-gray-700">检查 <a href="https://www.eurocontrol.int/" target="_blank" rel="noopener" className="text-blue-600 underline">Eurocontrol</a> 的空域管制公告</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">⚖️ 步骤3：提出反驳</h3>
                <p className="text-gray-700 mb-4">
                  如果证据不足或理由不成立，明确指出：
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-bold text-gray-900 mb-2">📧 反驳模板：</p>
                  <div className="bg-white p-3 rounded border border-gray-300 text-sm text-gray-700 font-mono">
                    <p>根据您提供的说明，我认为您的拒赔理由<strong>不符合EU 261第5条第3款</strong>：</p>
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>• [具体反驳理由，例如："技术故障属于航司维护责任范围"]</li>
                      <li>• [引用法律条款或判例，例如："欧洲法院Wallentin-Hermann案明确排除技术故障"]</li>
                      <li>• [指出证据不足，例如："您未提供气象报告证明天气严重到无法飞行"]</li>
                    </ul>
                    <p className="mt-2">因此，我坚持申请€[金额]的赔偿。请在14天内支付，否则我将通过法律途径解决。</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">💡 步骤4：委托专业平台</h3>
                <p className="text-gray-700 mb-4">
                  自己反驳太复杂？让ClaimWinger专家接手：
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    法律团队审查航司证据真实性
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    撰写专业法律反驳信
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    必要时提起法律诉讼
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    成功后收费（通常30%），失败不收费
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* Real Case Studies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              真实案例：成功反驳"特殊情况"
            </h2>

            <div className="space-y-6">
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ 案例1：技术故障不算特殊情况</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">航班</p>
                    <p className="font-bold text-gray-900">汉莎航空 LH720 北京→法兰克福</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">延误时间</p>
                    <p className="font-bold text-red-600">6小时15分钟</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg mb-4">
                  <p className="text-sm font-bold text-gray-900 mb-3">📋 情况：</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 汉莎声称："发动机突发故障，属于无法预见的特殊情况"</li>
                    <li>• 航司提供了技术报告，但拒绝支付赔偿</li>
                    <li>• 乘客王先生通过ClaimWinger提出申诉</li>
                  </ul>
                </div>

                <div className="bg-green-600 text-white p-6 rounded-lg">
                  <p className="text-lg mb-2"><strong>✅ 结果：</strong></p>
                  <p className="text-xl font-bold mb-3">ClaimWinger引用欧洲法院判例，成功获得€600赔偿</p>
                  <p className="text-sm opacity-90">
                    关键论据：技术故障属于航司维护责任，即使"突发"也不构成特殊情况（Wallentin-Hermann案）
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ 案例2：轻微天气不算特殊情况</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">航班</p>
                    <p className="font-bold text-gray-900">法航 AF116 上海→巴黎</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">延误时间</p>
                    <p className="font-bold text-red-600">4小时30分钟</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg mb-4">
                  <p className="text-sm font-bold text-gray-900 mb-3">📋 情况：</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 法航声称："目的地有雷暴，属于恶劣天气"</li>
                    <li>• 但FlightRadar24显示同时段其他航班正常降落巴黎</li>
                    <li>• 乘客陈女士通过ClaimWinger调取气象数据</li>
                  </ul>
                </div>

                <div className="bg-green-600 text-white p-6 rounded-lg">
                  <p className="text-lg mb-2"><strong>✅ 结果：</strong></p>
                  <p className="text-xl font-bold mb-3">气象数据证明天气未达"极端"标准，获得€600赔偿</p>
                  <p className="text-sm opacity-90">
                    关键证据：巴黎CDG机场当日正常运营，只有法航少数航班延误
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ 常见问题</h2>
            
            <div className="space-y-6">
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q1: 航空公司说"特殊情况"就一定不能赔吗？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> 不一定！航司必须<strong>提供证据</strong>证明：(1) 情况超出控制，(2) 采取一切合理措施仍无法避免。约90%的"特殊情况"声明经不起法律审查。建议通过ClaimWinger等专业平台审查航司的理由是否成立。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q2: 技术故障算特殊情况吗？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> <strong className="text-red-600">不算</strong>！欧洲法院在<strong>Wallentin-Hermann案（C-549/07）</strong>中明确判决：技术故障不属于特殊情况，因为飞机维护是航司的核心责任。即使是"突发"、"无法预见"的故障也<strong>必须赔偿</strong>。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q3: 下雨/下雪算特殊情况吗？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> 通常<strong className="text-red-600">不算</strong>。只有<strong>极端恶劣天气</strong>导致机场关闭或严重到无法安全飞行才算特殊情况（如飓风、严重暴风雪）。轻微降雨、降雪、常见雾、或航司自己决定的"预防性延误"<strong>不构成</strong>特殊情况。判断标准：同时段其他航班是否正常起飞？
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q4: 前序航班延误导致我的航班晚点，这算特殊情况吗？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> <strong className="text-red-600">不算</strong>！航司的机队调度、飞机周转、机组安排都属于其运营控制范围。前序航班延误、飞机晚到、机组超时等<strong>不属于</strong>特殊情况。航司应该有备用飞机和应急预案。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q5: 如何证明航司的"特殊情况"说法不成立？
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A:</strong> 你可以：
                </p>
                <ul className="mt-2 space-y-1 text-gray-700 ml-6">
                  <li>1. <strong>要求书面说明</strong>（根据EU 261第14条）</li>
                  <li>2. <strong>自行验证</strong>：查询历史天气数据、FlightRadar24同时段其他航班情况</li>
                  <li>3. <strong>对比航司证据</strong>：是否提供了具体的气象/ATC/技术报告？</li>
                  <li>4. <strong>委托专业平台</strong>：ClaimWinger有法律团队专门审查这类案件</li>
                </ul>
              </div>

            </div>
          </section>

          {/* CTA Bottom */}
          <div className="my-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-10 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">🛡️ 航司用"特殊情况"拒赔？别轻易放弃！</h3>
            <p className="text-lg mb-6 opacity-90">
              让ClaimWinger法律专家免费审查——90%的拒赔理由不成立
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=zh_extraordinary_bottom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-md"
              >
                免费提交案件审查 →
              </a>
              <span className="text-sm opacity-75">成功后付费 | 失败不收费</span>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 相关文章推荐</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              <Link href="/zh/blog/which-flights-qualify-compensation" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                  哪些航班有资格申请EU261赔偿？
                </h3>
                <p className="text-gray-600 text-sm">
                  完整解释EU 261保护范围，包括出发地、航司、目的地规则
                </p>
              </Link>

              <Link href="/zh/blog/how-many-hours-delay-compensation" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                  航班延误几小时能索赔？€250/€400/€600标准详解
                </h3>
                <p className="text-gray-600 text-sm">
                  了解EU261规定的3小时延误门槛和赔偿金额计算方法
                </p>
              </Link>

              <Link href="/zh/blog/compensation-vs-refund-difference" className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                  赔偿金与退票款的区别——哪个更合适？
                </h3>
                <p className="text-gray-600 text-sm">
                  了解赔偿和退款的区别，以及如何同时申请两者
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
                    "name": "航空公司说"特殊情况"就一定不能赔吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "不一定！航司必须提供证据证明：(1) 情况超出控制，(2) 采取一切合理措施仍无法避免。约90%的"特殊情况"声明经不起法律审查。建议通过ClaimWinger等专业平台审查航司的理由是否成立。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "技术故障算特殊情况吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "不算！欧洲法院在Wallentin-Hermann案（C-549/07）中明确判决：技术故障不属于特殊情况，因为飞机维护是航司的核心责任。即使是"突发"、"无法预见"的故障也必须赔偿。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "下雨/下雪算特殊情况吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "通常不算。只有极端恶劣天气导致机场关闭或严重到无法安全飞行才算特殊情况（如飓风、严重暴风雪）。轻微降雨、降雪、常见雾、或航司自己决定的"预防性延误"不构成特殊情况。判断标准：同时段其他航班是否正常起飞？"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "前序航班延误导致我的航班晚点，这算特殊情况吗？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "不算！航司的机队调度、飞机周转、机组安排都属于其运营控制范围。前序航班延误、飞机晚到、机组超时等不属于特殊情况。航司应该有备用飞机和应急预案。"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "如何证明航司的"特殊情况"说法不成立？",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "你可以：1. 要求书面说明（根据EU 261第14条），2. 自行验证：查询历史天气数据、FlightRadar24同时段其他航班情况，3. 对比航司证据：是否提供了具体的气象/ATC/技术报告？4. 委托专业平台：ClaimWinger有法律团队专门审查这类案件。"
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