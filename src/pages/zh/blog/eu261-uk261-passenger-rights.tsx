import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import { AlertCircle, CheckCircle, FileText, Scale, Plane } from "lucide-react";
import Link from "next/link";

export default function EU261Article() {
  return (
    <LayoutZh>
      <SEO
        title="EU261 与 UK261：航班延误与取消赔偿指南 | 您的权利与索赔流程"
        description="在欧盟/英国航班被延误或取消时，了解 EU261/UK261 下的免费照顾与现金赔偿（€250–€600）。本文为中国旅客逐条说明适用情形、拒赔常见理由与实用索赔流程并附权威官方链接。"
        url="https://problemlot.com/zh/blog/eu261-uk261-passenger-rights"
      />

      {/* JSON-LD Schema for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "EU261 与 UK261：航班延误与取消赔偿指南",
            "description": "当您的航班被延误或取消时，若航班受 EU261（欧盟法规 261/2004）或 UK261（英国相应规则）保护，您在特定条件下可获得免费照顾与固定金额的金钱赔偿。",
            "author": {
              "@type": "Organization",
              "name": "ProblemLot.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ProblemLot.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://problemlot.com/og-image.png"
              }
            },
            "datePublished": "2026-01-30",
            "dateModified": "2026-01-30",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://problemlot.com/zh/blog/eu261-uk261-passenger-rights"
            },
            "inLanguage": "zh-CN"
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "我在中国登机、飞往欧洲，航班被严重延误，我能否根据 EU261 要求赔偿？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "通常不能直接适用 EU261，除非承运航空公司为欧盟航空公司且到达欧盟境内时适用。若承运人为中国或其他非欧盟航空公司，优先查看航空公司的运输条款或目的地国家法律。若航班在欧盟出发或由欧盟航空公司执飞并到达欧盟/英国，则受 EU261/UK261 保护。"
                }
              },
              {
                "@type": "Question",
                "name": "到达晚 3 小时，如何计算赔偿金额？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "按 EU261 经典标准（€250、€400、€600），具体取决于航程距离与原定到达延迟。若适用 UK261，则按英镑标准计算。建议用航空公司给出的原定到达时间与实际到达时间为准，并保留证据。"
                }
              },
              {
                "@type": "Question",
                "name": "航空公司以"天气"为由拒赔，但当时天气并不差，我该怎么办？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "要求航空公司提供证据证明天气确实构成"特殊情况"（例如气象局报告、空管通知）。若航空公司无法提供有力证据，您可以向国家主管机关或 ECC-Net 投诉并寻求仲裁。"
                }
              },
              {
                "@type": "Question",
                "name": "UK261 与 EU261 有何重要差别？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "总体框架相似（赔偿/照顾/退款等），但 UK261 由英国法律体系实施并由 CAA 解释，赔偿数额以英镑为单位，且英国在细节上有独立裁量。"
                }
              },
              {
                "@type": "Question",
                "name": "如果航空公司拖延不回应，是否需要律师？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "小额赔偿可通过消费者中心、ECC-Net 或小额索赔程序处理。若航空公司抗辩复杂，可考虑法律咨询或专业索赔服务。"
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumbs */}
        <nav className="text-sm text-muted-foreground mb-6" aria-label="面包屑导航">
          <ol className="flex items-center space-x-2">
            <li><Link href="/zh" className="hover:text-primary transition-colors">首页</Link></li>
            <li>/</li>
            <li><Link href="/zh/blog" className="hover:text-primary transition-colors">博客</Link></li>
            <li>/</li>
            <li className="text-foreground">EU261 与 UK261 赔偿指南</li>
          </ol>
        </nav>

        {/* AI Overview / Summary Box */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                AI 概览 - 快速理解您的权利
              </h2>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                当您的航班被延误或取消时，若航班受 <strong>EU261（欧盟法规 261/2004）</strong>或 <strong>UK261（英国相应规则）</strong>保护，您在特定条件下可获得免费照顾（餐饮、住宿、交通）与固定金额的金钱赔偿（<strong>€250–€600</strong> 或相应英镑数额）。这些权利适用于：从欧盟/英国起飞的航班，或由欧盟/英国航空公司执飞并到达欧盟/英国的航班。非航空公司可控的"特殊情况"（如极端天气、军事行动、空域关闭等）通常可免除赔偿责任。
              </p>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            EU261 与 UK261：航班延误与取消赔偿指南
          </h1>
          <p className="text-lg text-muted-foreground">
            您的权利、赔偿金额与实用索赔流程
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <time dateTime="2026-01-30">发布日期：2026年1月30日</time>
            <span>•</span>
            <span>阅读时间：12分钟</span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-secondary/50 rounded-lg p-6 mb-12" aria-label="文章目录">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            目录
          </h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#section-1" className="text-primary hover:underline">一、什么是 EU261 与 UK261？</a></li>
            <li><a href="#section-2" className="text-primary hover:underline">二、哪些情况下乘客有权获得金钱赔偿？</a></li>
            <li><a href="#section-3" className="text-primary hover:underline">三、什么情况不能获得赔偿？</a></li>
            <li><a href="#section-4" className="text-primary hover:underline">四、中国乘客应如何判断自己是否受保护？</a></li>
            <li><a href="#section-5" className="text-primary hover:underline">五、常见拒赔理由与应对</a></li>
            <li><a href="#section-6" className="text-primary hover:underline">六、实用索赔流程</a></li>
            <li><a href="#faq" className="text-primary hover:underline">七、常见问答（FAQ）</a></li>
            <li><a href="#resources" className="text-primary hover:underline">八、权威资源与信任链接</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="section-1" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Scale className="h-7 w-7 text-primary" />
            一、什么是 EU261 与 UK261？
          </h2>
          
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-lg mb-2">EU261 / Regulation (EC) No 261/2004</h3>
              <p>
                欧盟对登机被拒、航班取消或重大延误的统一赔偿与照顾规则（2004 年通过，2005 年生效）。适用于某些从欧盟境内起飞的航班，以及到达欧盟境内且由欧盟航空公司执飞的航班。
                {" "}<a href="https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[EUR-Lex 官方文本]</a>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">UK261</h3>
              <p>
                英国脱欧后保留并本土化的乘客保护规则（适用于从英国起飞或由英国航空公司执飞到英国的航班），在细节上与 EU261 类似，但由英国民航局（CAA）负责实施和解释。
                {" "}<a href="https://www.caa.co.uk/passengers-and-public/resolving-travel-problems/delays-and-cancellations/delays/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[UK CAA 官方指南]</a>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <CheckCircle className="h-7 w-7 text-green-600" />
            二、哪些情况下乘客有权获得金钱赔偿？
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">基本条件（须同时满足）</h3>
              <ol className="list-decimal list-inside space-y-3 text-foreground/90">
                <li>航班属于 EU261/UK261 覆盖范围（出发地或航空公司属性）。</li>
                <li>到达目的地的实际到达时间比原定到达时间晚达规定阈值以上：通常为<strong>延误 ≥3 小时</strong>才可就 EU261 要求金钱赔偿。</li>
                <li>航空公司无法证明延误/取消是由"特殊/不可抗力情况"（extraordinary circumstances）造成。若是航空公司可控的原因（如机务故障、人为调度/超售等），通常应承担赔偿责任。</li>
              </ol>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-100">赔偿金额（概览）</h3>
              <p className="text-sm text-muted-foreground mb-4">按 EU261 的经典标准：</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 font-bold">
                    €250
                  </div>
                  <div className="pt-2">
                    <p className="font-semibold">航程 ≤ 1,500 公里</p>
                    <p className="text-sm text-muted-foreground">欧盟境内短途航班</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 font-bold">
                    €400
                  </div>
                  <div className="pt-2">
                    <p className="font-semibold">航程 1,500–3,500 公里</p>
                    <p className="text-sm text-muted-foreground">中程航班或欧盟内超过 1,500 公里</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 font-bold">
                    €600
                  </div>
                  <div className="pt-2">
                    <p className="font-semibold">航程 &gt; 3,500 公里</p>
                    <p className="text-sm text-muted-foreground">长途国际航班</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                UK261 的数额为英镑级别，对应距离/延误规则也类似。详细条款请参见官方文本。
                {" "}<a href="https://www.consumerlawready.eu/sites/default/files/2025-05/Fiche_Passenger%20Rights%202024%20%281%29.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[赔偿金额详情]</a>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <AlertCircle className="h-7 w-7 text-red-600" />
            三、什么情况<strong>不</strong>能获得赔偿？
          </h2>

          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2 text-red-900 dark:text-red-100">
                1. 特殊情况（Extraordinary Circumstances）
              </h3>
              <p className="text-sm text-red-800 dark:text-red-200">
                如极端天气、战事、恐怖袭击、空域关闭、航空管制事故、国家级安全风险等。在这些情形下航空公司通常免责。
                <strong>注意：</strong>普通机务技术故障一般不被认定为"特殊情况"，法院案例也常支持乘客。
                {" "}<a href="https://www.eccnet.eu/consumer-rights/what-are-my-consumer-rights/travel-and-passenger-rights/air-passenger-rights/flight" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[ECC-Net 说明]</a>
              </p>
            </div>

            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>航空公司提前按法规告知并提供合适改签或退款方案，且乘客接受并在合理时间内到达目的地。</li>
              <li>若延误/取消与乘客自身行为相关（例：未按时办理值机、未通过安全检查等）。</li>
              <li>航班不在 EU/UK 规则的适用范围内（例如：中国境内起飞、由非欧盟/英国航空公司降落于欧盟/英国且出发地为中国）。</li>
            </ul>
          </div>
        </section>

        {/* Section 4 - Chinese Passengers */}
        <section id="section-4" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Plane className="h-7 w-7 text-primary" />
            四、中国乘客应如何判断自己是否受保护？
          </h2>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-lg p-6 border border-amber-200 dark:border-amber-800 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-100">实用步骤</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. 确认航班路线与承运人</h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/90 ml-4">
                  <li>若航班<strong>从欧盟/英国出发</strong>，则 EU261/UK261 适用（无论乘客国籍）。</li>
                  <li>若航班<strong>从中国出发、飞往欧盟/英国</strong>，但承运航空公司为欧盟/英国航空公司，EU261/UK261 也适用于到达欧盟/英国的情形。</li>
                  <li>若航班从中国到欧盟并由非欧盟/非英国航空公司执飞，通常不适用 EU261/UK261。</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. 记录时间点与证据</h4>
                <p className="text-sm text-foreground/90 ml-4">
                  保留登机牌、电子客票、延误/取消书面证明、航空公司邮件/短信、现场公告、照片（显示航班信息牌）及任何费用收据（如酒店、餐饮、交通）以便索赔和补偿/报销。
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. 向航空公司提出书面索赔</h4>
                <p className="text-sm text-foreground/90 ml-4">
                  按照航空公司网站的官方流程提交索赔，明确要求赔偿金额并附证据。若被拒，可向目的地/出发地的国家主管机关或 ECC-Net 投诉或寻求帮助。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>重要提示：</strong>中国旅客往返欧洲时，务必检查承运航空公司是否为欧盟/英国航空公司。这是决定您是否享有 EU261/UK261 保护的关键因素。
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            五、常见拒赔理由与应对
          </h2>

          <div className="space-y-4">
            <div className="border border-border rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">"特殊情况"解释过宽</h3>
              <p className="text-sm text-muted-foreground">
                <strong>应对：</strong>若航空公司以"特殊情况"拒赔，请索取具体事实证明（例如天气报告、空管通知）。若理由为机务技术故障，乘客通常可坚持索赔（司法中多有支持）。
              </p>
            </div>

            <div className="border border-border rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">未按规定时间提交索赔</h3>
              <p className="text-sm text-muted-foreground">
                <strong>应对：</strong>多数法律并未限定极短的时效，但航空公司会设置申诉窗口。即便被拒，亦可向国家主管机关或法院进一步追索。
              </p>
            </div>

            <div className="border border-border rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">航空公司提供代替航班并减少赔偿</h3>
              <p className="text-sm text-muted-foreground">
                <strong>应对：</strong>在某些条件下（如提前通知、提供可接受的改签时刻），赔偿金额可减少或不予支付。请对照法规第 5–7 条的通知与替代方案规定。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 - Claims Process */}
        <section id="section-6" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            六、实用索赔流程（步骤化）
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">机场现场</h3>
                <p className="text-sm text-muted-foreground">
                  立刻向航空公司柜台/机组索取书面延误/取消说明。若无法获取，随后保存所有电子通知。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">提交索赔</h3>
                <p className="text-sm text-muted-foreground">
                  回家后按航空公司官网索赔表提交：提供票号、航班号、证据（登机牌、通知、费用收据等）。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">若航空公司拒绝或不回应</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>向出发或到达国家的民航主管部门/消费者保护组织投诉（在欧盟可联系 ECC-Net；在英国可联系 CAA）。</li>
                  <li>可考虑使用法律服务或专业索赔公司（注意：部分公司收取成功费用）。</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">复杂案件</h3>
                <p className="text-sm text-muted-foreground">
                  若案件复杂（例如航空公司以"特殊情况"为由拒赔），保存所有证据并考虑法律咨询。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-3">需要帮助索赔？</h3>
            <p className="mb-4 text-blue-100">
              我们的合作伙伴可以帮助您快速、无风险地获得应得的赔偿
            </p>
            <a
              href="https://claimwinger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              立即检查您的航班
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <p className="text-xs text-blue-200 mt-3">只在成功获得赔偿后收费</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            七、常见问答（FAQ）
          </h2>

          <div className="space-y-4">
            <details className="border border-border rounded-lg p-5 hover:shadow-md transition-shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Q1：我在中国登机、飞往欧洲，航班被严重延误，我能否根据 EU261 要求赔偿？</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                通常<strong>不能</strong>直接适用 EU261，除非承运航空公司为欧盟航空公司且到达欧盟境内时适用（也有特殊判例）。若承运人为中国或其他非欧盟航空公司，优先查看航空公司的运输条款或目的地国家法律。若航班在欧盟出发或由欧盟航空公司执飞并到达欧盟/英国，则受 EU261/UK261 保护。
              </p>
            </details>

            <details className="border border-border rounded-lg p-5 hover:shadow-md transition-shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Q2：到达晚 3 小时，如何计算赔偿金额？</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                按 EU261 经典标准（€250、€400、€600），具体取决于航程距离与原定到达延迟。若适用 UK261，则按英镑标准计算。建议用航空公司给出的原定到达时间与实际到达时间为准，并保留证据。
              </p>
            </details>

            <details className="border border-border rounded-lg p-5 hover:shadow-md transition-shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Q3：航空公司以"天气"为由拒赔，但当时天气并不差，我该怎么办？</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                要求航空公司提供证据证明天气确实构成"特殊情况"（例如气象局报告、空管通知）。若航空公司无法提供有力证据，您可以向国家主管机关或 ECC-Net 投诉并寻求仲裁。
              </p>
            </details>

            <details className="border border-border rounded-lg p-5 hover:shadow-md transition-shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Q4：UK261 与 EU261 有何重要差别？</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                总体框架相似（赔偿/照顾/退款等），但 UK261 由英国法律体系实施并由 CAA 解释，赔偿数额以英镑为单位，且英国在细节上有独立裁量（例如某些程序性差别）。发布前请以英国 CAA 的最新指南为准。
              </p>
            </details>

            <details className="border border-border rounded-lg p-5 hover:shadow-md transition-shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                <span>Q5：如果航空公司拖延不回应，是否需要律师？</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">
                小额赔偿可通过消费者中心、ECC-Net 或小额索赔程序处理。若航空公司抗辩复杂（如"特殊情况"争议），可考虑法律咨询或专业索赔服务（注意费用与成功分成）。
              </p>
            </details>
          </div>
        </section>

        {/* Authoritative Resources */}
        <section id="resources" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            八、权威资源与信任链接
          </h2>

          <div className="bg-secondary/50 rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-4">
              以下链接为官方权威来源，可帮助您深入了解相关法规与权利：
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                    欧盟法规原文（EUR-Lex: Regulation (EC) No 261/2004）
                  </a>
                  <p className="text-xs text-muted-foreground">官方法律文本</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                    欧盟官方乘客权利概览（Your Europe / EU）
                  </a>
                  <p className="text-xs text-muted-foreground">欧盟委员会官方指南</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="https://www.caa.co.uk/passengers-and-public/resolving-travel-problems/delays-and-cancellations/delays/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                    英国民航局（CAA）关于延误与取消的官方指南
                  </a>
                  <p className="text-xs text-muted-foreground">UK261 实施机构</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="https://www.eccnet.eu/consumer-rights/what-are-my-consumer-rights/travel-and-passenger-rights/air-passenger-rights/flight" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                    欧洲消费者中心网络（ECC-Net）关于航班延误的说明
                  </a>
                  <p className="text-xs text-muted-foreground">跨境投诉帮助</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="https://www.consumerlawready.eu/sites/default/files/2025-05/Fiche_Passenger%20Rights%202024%20%281%29.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                    汇总型政策与赔偿金额说明（Consumer Law Ready）
                  </a>
                  <p className="text-xs text-muted-foreground">赔偿金额详细指南</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">相关文章</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/zh/delayed-flight" className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow group">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                航班延误赔偿指南
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                了解航班延误时您的权利以及如何获得赔偿
              </p>
              <span className="text-sm text-primary font-medium">阅读更多 →</span>
            </Link>

            <Link href="/zh/cancelled-flight" className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow group">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                航班取消处理方法
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                航班取消后您应该采取的步骤和可获得的补偿
              </p>
              <span className="text-sm text-primary font-medium">阅读更多 →</span>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            准备好索赔了吗？
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            不要让航空公司忽视您的权利。我们的合作伙伴已帮助数千名乘客成功获得超过 5000 万欧元的赔偿。
          </p>
          <a
            href="https://claimwinger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            免费检查您的航班
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <p className="text-xs text-blue-200 mt-4">
            ✓ 无风险 - 只在成功后收费　✓ 3 分钟快速检查　✓ 98% 成功率
          </p>
        </div>
      </article>
    </LayoutZh>
  );
}