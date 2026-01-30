import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { AlertCircle, Euro, CheckCircle2 } from "lucide-react";

export default function ZhCancelledFlightPage() {
  return (
    <LayoutZh>
      <SEO
        title="航班取消 – 高达 600 € 的赔偿和乘客权利"
        description="您的航班被取消了吗？查看何时您有权获得高达 600 € 的赔偿以及作为航空乘客的权利。"
        url="https://problemlot.com/zh/cancelled-flight"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertCircle className="w-4 h-4" />
              航班取消
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              航班取消 – 您有权获得多少赔偿？
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              查看您的权利并了解何时可以因取消的航班获得高达 <span className="font-bold text-blue-600 dark:text-blue-400">600 €</span> 的赔偿。
            </p>
            <a
              href="https://claimwinger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              检查我的赔偿
            </a>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* What is a cancelled flight */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                什么是航班取消？
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                当航空公司完全取消计划的航班并且不在原定时间执行时，航班被视为取消。这可能由各种原因造成 – 从技术问题到机组人员短缺，再到承运人的商业决策。
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                无论原因如何，<strong>乘客都享有某些权利</strong>，包括获得经济赔偿的可能性。
              </p>
            </div>

            {/* Your rights */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                航班取消时您有哪些权利？
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                根据欧盟法规 261/2004，当您的航班被取消时，您有权获得：
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      退款或替代航班
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      您可以获得全额机票退款或在最早可能的时间获得到目的地的替代航班。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      航空公司的照顾
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      餐食、饮料、打电话的机会，必要时还包括酒店住宿和交通。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      经济赔偿
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      根据航班距离：<strong>250 €、400 € 或 600 €</strong> – 如果您没有得到充分的提前通知。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compensation amounts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                取消航班的赔偿金额是多少？
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                赔偿金额取决于航班距离：
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                  <Euro className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">250 €</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    最多 1500 公里
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                  <Euro className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">400 €</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    1500-3500 公里
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                  <Euro className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">600 €</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    超过 3500 公里
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/zh/compensation-calculator" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  查看详细的赔偿金额表 →
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl shadow-xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                不要让您的权利白白流失
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                检查您是否有权因取消的航班获得赔偿
              </p>
              <a
                href="https://claimwinger.com"
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