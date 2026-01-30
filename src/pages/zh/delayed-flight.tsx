import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { Clock, Euro, CheckCircle2 } from "lucide-react";

export default function ZhDelayedFlightPage() {
  return (
    <LayoutZh>
      <SEO
        title="航班延误 – 该怎么办以及能获得多少赔偿？"
        description="了解当航班延误时该怎么做，以及何时您有权获得高达 600 € 的赔偿。"
        url="https://problemlot.com/zh/delayed-flight"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              航班延误
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              航班延误 – 您有权获得多少赔偿？
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              查看您的权利并了解何时可以因航班延误获得高达 <span className="font-bold text-blue-600 dark:text-blue-400">600 €</span> 的赔偿。
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
            {/* What is a delayed flight */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                什么是航班延误？
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                当航班到达最终目的地的时间晚于原计划时间时，即视为延误。根据欧盟法规 261/2004，如果延误时间超过 3 小时，您可能有权获得经济赔偿。
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                重要的是<strong>到达时间</strong>，而不是起飞时间。即使您的航班准时起飞但晚点到达，您仍然可以获得赔偿。
              </p>
            </div>

            {/* When you're entitled */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                何时有权获得延误赔偿？
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                当满足以下条件时，您有权获得赔偿：
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      航班从欧盟起飞或降落在欧盟（欧盟航空公司）
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      欧盟法规 261/2004 保护从欧盟机场起飞的航班以及由欧洲航空公司运营的飞往欧盟的航班。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      到达延误超过 3 小时
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      延误时间从飞机门打开的那一刻算起。延误必须至少为 3 小时才能获得赔偿。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      延误不是由特殊情况造成的
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      只有在极端天气条件、空中交通管制罢工或安全威胁等情况下，航空公司才能免除支付赔偿的责任。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compensation amounts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                延误航班的赔偿金额是多少？
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
                检查您是否有权因航班延误获得赔偿
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