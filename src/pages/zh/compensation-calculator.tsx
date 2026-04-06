import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import { ClaimWingerZhSection } from "@/components/ClaimWingerZhSection";
import { Euro } from "lucide-react";

export default function ZhCompensationCalculatorPage() {
  return (
    <LayoutZh>
      <SEO
        title="延误航班能获得多少赔偿？250 €、400 €、600 €"
        description="查看因延误或取消的航班可以获得多少赔偿。"
        url="https://problemlot.com/zh/compensation-calculator"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Euro className="w-4 h-4" />
              赔偿计算器
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              您能获得多少赔偿？
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              根据欧盟法规 261/2004，赔偿金额取决于航班距离。查看您可以获得多少。
            </p>
            <ClaimWingerZhSection
              className="mt-8 text-left"
              badge="免费赔偿资格检查"
              title="知道赔偿区间后，下一步就是检查您的具体航班"
              description="表格中的 €250、€400、€600 只是基础区间。是否真的可以领取，还取决于航线、承运人、延误时长和取消原因。"
            />
          </div>
        </section>

        {/* Compensation Table */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                赔偿金额表
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">250 €</h3>
                      <p className="text-gray-600 dark:text-gray-300">短途航班</p>
                    </div>
                    <Euro className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>距离：</strong>最多 1500 公里
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    示例：华沙 - 伦敦，柏林 - 罗马，巴黎 - 马德里
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">400 €</h3>
                      <p className="text-gray-600 dark:text-gray-300">中程航班</p>
                    </div>
                    <Euro className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>距离：</strong>1500 - 3500 公里
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    示例：华沙 - 迪拜，伦敦 - 特拉维夫，柏林 - 雷克雅未克
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">600 €</h3>
                      <p className="text-gray-600 dark:text-gray-300">长途航班</p>
                    </div>
                    <Euro className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>距离：</strong>超过 3500 公里
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    示例：欧洲 - 美国，欧洲 - 亚洲，欧洲 - 澳大利亚
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">重要信息：</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• 赔偿金额不取决于机票价格</li>
                  <li>• 每位乘客都有权获得独立赔偿</li>
                  <li>• 儿童和婴儿也有权获得赔偿</li>
                  <li>• 即使使用积分或促销优惠购买机票，您也有权获得赔偿</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl shadow-xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                检查您的航班
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                看看您是否有权获得赔偿
              </p>
              <a
                href="https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_content&utm_campaign=claim_entry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                检查我的赔偿
              </a>
              <p className="mt-4 text-sm text-blue-100">
                无风险 – 只在成功时付款
              </p>
            </div>
          </div>
        </section>
      </div>
    </LayoutZh>
  );
}
