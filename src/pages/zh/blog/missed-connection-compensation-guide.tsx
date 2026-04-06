import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { ArrowRight, Plane, Clock, AlertTriangle, CheckCircle2, XCircle, HelpCircle, FileText, Hotel } from "lucide-react";

export default function MissedConnectionGuide() {
  return (
    <LayoutZh>
      <SEO
        title="错过转机赔偿指南【2026】Missed Connection Compensation - Claim €600"
        description="第一程只延误40分钟却导致错过转机？您可能获得€600赔偿！详解联程机票权益、转机延误计算规则、食宿安排及索赔流程。北京/上海经欧洲转机乘客必读。"
        url="https://problemlot.com/zh/blog/missed-connection-compensation-guide"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-4">
            <Link href="/zh/blog" className="hover:underline">博客</Link>
            <span>›</span>
            <span className="text-slate-600">转机指南</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            错过转机赔偿指南【2026】
            <span className="block text-2xl md:text-3xl text-blue-600 mt-2">
              第一程小延误导致错过第二程？您有权获€600！
            </span>
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              14分钟阅读
            </span>
            <span className="flex items-center gap-1">
              <Plane className="w-4 h-4" />
              转机权益
            </span>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-xl text-slate-700 leading-relaxed">
              这是大多数乘客不知道的<strong className="text-blue-600">"隐藏金矿"</strong>：
              即使您的第一程航班只延误了<strong>20-30分钟</strong>，如果导致您错过转机并在最终目的地延误超过3小时，
              <strong className="text-green-600">您就有资格获得全额€600赔偿！</strong>
            </p>
          </div>
        </header>

        {/* 核心案例场景 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            典型场景：这是否发生在你身上？
          </h2>
          
          <div className="bg-white border shadow-lg rounded-xl overflow-hidden mb-8">
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
              <span className="font-bold text-lg">真实案例：北京 → 法兰克福 → 伦敦</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">赔偿获批 €600</span>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative">
                {/* Leg 1 */}
                <div className="text-center relative z-10 w-full md:w-1/3">
                  <div className="font-bold text-xl mb-1">航班 LH721</div>
                  <div className="text-slate-500 mb-2">北京 PEK → 法兰克福 FRA</div>
                  <div className="bg-yellow-100 text-yellow-800 p-3 rounded-lg border border-yellow-300">
                    <p className="font-bold">延误 45 分钟</p>
                    <p className="text-xs">未达3小时赔偿标准</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex flex-col items-center justify-center text-slate-400 z-0">
                  <ArrowRight className="w-8 h-8" />
                  <span className="text-xs font-bold text-red-500">错过转机！</span>
                </div>

                {/* Leg 2 */}
                <div className="text-center relative z-10 w-full md:w-1/3">
                  <div className="font-bold text-xl mb-1">航班 LH904</div>
                  <div className="text-slate-500 mb-2">法兰克福 FRA → 伦敦 LHR</div>
                  <div className="bg-red-100 text-red-800 p-3 rounded-lg border border-red-300">
                    <p className="font-bold">改签下一班</p>
                    <p className="text-xs">最终晚到 5 小时</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-bold text-green-900 mb-1">为什么获得€600？</p>
                <p className="text-slate-700">
                  虽然第一程只延误45分钟（通常无赔偿），但因为这是<strong>联程机票</strong>，法律看的是<strong>最终目的地到达时间</strong>。
                  因为最终晚到5小时（&gt;3小时），且总航程&gt;3500km，所以赔偿最高额€600！
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 关键条件 */}
        <section id="conditions" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
            获得赔偿的3大关键条件
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">1. 必须是"联程机票" (Single Ticket)</h3>
              <p className="text-slate-700 mb-3">
                所有航段必须在<strong>同一个预订号（PNR）</strong>下。如果您在携程/去哪儿网分开购买了两张独立机票，则无法索赔。
              </p>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-1 text-green-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>联程票 (One Booking) ✅</span>
                </div>
                <div className="flex items-center gap-1 text-red-700">
                  <XCircle className="w-4 h-4" />
                  <span>拼凑票 (Self-transfer) ❌</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">2. 符合EU 261管辖范围</h3>
              <p className="text-slate-700 mb-3">
                这取决于您的出发地和航空公司：
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li><strong>从欧盟出发：</strong>所有航空公司的联程航班都受保护。</li>
                <li><strong>从中国出发：</strong>只有<strong>欧盟航空公司</strong>（汉莎、法航、荷航等）受保护。国航/东航等不受保护。</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">3. 最终延误超过3小时</h3>
              <p className="text-slate-700">
                计算的是到达<strong>最终目的地</strong>（Final Destination）的时间，而不是中转站的时间。
              </p>
            </div>
          </div>
        </section>

        {/* 赔偿金额 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            能赔多少钱？
          </h2>
          <p className="text-slate-700 mb-6">
            对于中国往返欧洲的航班，由于距离几乎总是超过3,500公里，赔偿通常是最高档：
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="text-3xl font-bold text-slate-400 mb-2">€250</div>
              <p className="text-sm text-slate-500">航程 &lt; 1,500km</p>
              <p className="text-xs text-slate-400 mt-2">（欧洲内部短途）</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="text-3xl font-bold text-slate-400 mb-2">€400</div>
              <p className="text-sm text-slate-500">航程 1,500-3,500km</p>
              <p className="text-xs text-slate-400 mt-2">（中距离航班）</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-500 shadow-lg transform scale-105">
              <div className="text-4xl font-bold text-green-600 mb-2">€600</div>
              <p className="text-sm text-green-800 font-bold">航程 &gt; 3,500km</p>
              <p className="text-xs text-green-600 mt-2">（中国 ⇄ 欧洲 几乎所有航班）</p>
            </div>
          </div>
        </section>

        {/* 权利保障：食宿 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Hotel className="w-8 h-8 text-blue-600" />
            不仅是钱：您的食宿权利 (Right to Care)
          </h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100">
            <p className="text-slate-700 mb-4">
              如果您因为错过转机而不得不等待下一班航班，航空公司<strong>必须免费提供</strong>：
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <span className="font-medium text-slate-700">酒店住宿（如需过夜）</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="font-medium text-slate-700">往返酒店交通</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="font-medium text-slate-700">餐饮券 / 餐食</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <span className="font-medium text-slate-700">2次电话或电邮</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-4 p-4 bg-yellow-50 rounded text-sm text-yellow-800 border border-yellow-200">
              <strong>重要提示：</strong>如果航空公司没有主动提供，您可以自己支付保留收据。航空公司必须报销合理费用（不含酒类）。
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="my-12 bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-xl text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">错过转机了？立即检查赔偿资格！</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            即使第一程延误很短，只要导致您最终晚到超过3小时，您就可能获得€600。
            ClaimWinger专业团队帮您处理复杂的联程机票索赔。
          </p>
          <a 
            href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
          >
            免费检查您的航班
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-blue-200 mt-4">不成功不收费 • 30%成功费 • 3分钟提交</p>
        </div>

        {/* 常见问题 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            常见问题解答
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Q: 我买的是往返票，回程错过转机能赔吗？</h3>
              <p className="text-slate-700">
                <strong>可以。</strong>往返票被视为一个合同。如果您的回程（例如 伦敦→法兰克福→北京）由欧盟航空公司运营，或者从欧盟机场出发，那么整个回程段都受保护。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Q: 转机时间只有1小时，是不是太短了？</h3>
              <p className="text-slate-700">
                如果航空公司卖给您这张联程票，就意味着他们认为这个转机时间是足够的（符合MCT - Minimum Connection Time）。如果因为前一班延误导致时间不够，那是<strong>航空公司的责任</strong>，不是您的错。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Q: 航空公司给了我食品券，是不是就不能索赔现金了？</h3>
              <p className="text-slate-700">
                <strong>绝对不是！</strong>食品券（Right to Care）和现金赔偿（Compensation）是<strong>两回事</strong>。您完全可以接受食品券，然后另外申请€600现金赔偿。千万不要签署任何放弃赔偿权利的文件。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Q: 我在携程上买的票，怎么知道是不是联程？</h3>
              <p className="text-slate-700">
                检查您的电子机票确认单。如果您只有一个<strong>电子票号 (E-Ticket Number)</strong>（通常是13位数字）涵盖所有航段，那就是联程票。如果有两个不同的票号，或者是"Self-transfer / 需重新托运"标签，通常不是联程票。
              </p>
            </div>
          </div>
        </section>

        {/* 底部总结 */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="font-bold text-xl text-blue-900 mb-4">总结：错过转机赔偿清单</h3>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>确认是联程机票（一个预订号）</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>最终到达目的地延误超过3小时</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>第一程航班是造成问题的原因（非不可抗力）</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>保留所有登机牌和延误证明</span>
            </li>
          </ul>
        </div>
      </article>
    </LayoutZh>
  );
}
