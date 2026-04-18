import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Clock3, Euro, FileText, Plane } from "lucide-react";

import { ClaimWingerViSection } from "@/components/ClaimWingerViSection";
import { LayoutVi } from "@/components/LayoutVi";
import { SEO } from "@/components/SEO";
import { ViSeoHead } from "@/components/ViSeoHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  buildClaimWingerViLink,
  trackClaimWingerViClick,
} from "@/lib/claimwingerLinksVi";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/vi/chuyen-bay-bi-hoan";
const delayedClaimHref = buildClaimWingerViLink("delayed", {
  medium: "page_cta",
  campaign: "vi_delayed_flight",
  content: "hero_embed",
});

const delayedFaqs = [
  {
    question: "Chậm bao nhiêu giờ thì có thể được bồi thường?",
    answer:
      "Với nhiều hồ sơ EU261, mốc quan trọng nhất là đến điểm đến cuối cùng chậm từ 3 giờ trở lên. Thời gian cất cánh chậm chỉ là một phần của bức tranh.",
  },
  {
    question: "Bay từ Việt Nam sang châu Âu mà bị hoãn có được EU261 không?",
    answer:
      "Có thể, nhưng cần xem hãng khai thác thực tế có phải hãng hàng không EU hay không. Đây là điểm rất quan trọng với các chặng từ ngoài EU vào EU.",
  },
  {
    question: "Bị lỡ nối chuyến vì chặng đầu bị hoãn có thể được bồi thường không?",
    answer:
      "Có thể. Trong nhiều hồ sơ transit, yếu tố quyết định là bạn đến điểm đến cuối cùng chậm bao nhiêu và toàn bộ hành trình có nằm trên cùng một booking hay không.",
  },
  {
    question: "Nếu hãng nói là do thời tiết hoặc đình công thì sao?",
    answer:
      "Không phải mọi lời giải thích của hãng đều tự động loại trừ bồi thường. Hồ sơ vẫn cần được xem kỹ để phân biệt đâu là hoàn cảnh bất thường thật sự, đâu là lý do vận hành nội bộ.",
  },
  {
    question: "Chậm hơn 5 giờ thì có thể yêu cầu gì?",
    answer:
      "Trong nhiều trường hợp, hành khách có thể có thêm quyền lựa chọn không tiếp tục hành trình và yêu cầu hoàn tiền cho phần vé chưa sử dụng, ngoài việc vẫn phải đánh giá riêng khả năng phát sinh bồi thường.",
  },
];

const quickChecks = [
  {
    title: "Delay chỉ bắt đầu mạnh khi nhìn vào giờ đến",
    description:
      "Mốc thường được xem trước tiên là thời gian bạn đến điểm đến cuối cùng, không phải thời điểm máy bay rời cổng.",
    icon: Clock3,
  },
  {
    title: "EU → Việt Nam thường là nhóm hồ sơ tốt",
    description:
      "Chuyến bay khởi hành từ EU thường là nhóm được bảo vệ mạnh nhất theo EU261, đặc biệt ở các hành trình long-haul.",
    icon: Plane,
  },
  {
    title: "Giữ chứng cứ càng sớm càng tốt",
    description:
      "Boarding pass, email delay, ảnh bảng giờ bay, dữ liệu booking và biên lai chi phí phát sinh đều có giá trị.",
    icon: FileText,
  },
];

const delayStages = [
  {
    title: "Dưới 3 giờ tại điểm đến cuối cùng",
    description:
      "Thường chưa phải là ngưỡng điển hình để phát sinh compensation tiền mặt, nhưng vẫn có thể liên quan tới quyền chăm sóc tại sân bay tùy khoảng cách chuyến bay.",
  },
  {
    title: "Từ 3 giờ trở lên tại điểm đến cuối cùng",
    description:
      "Đây là mốc quan trọng nhất với hồ sơ delay theo EU261. Sau mốc này, hồ sơ cần được đánh giá tiếp về phạm vi áp dụng và lý do hãng đưa ra.",
  },
  {
    title: "Từ 5 giờ trở lên",
    description:
      "Ngoài câu chuyện compensation, nhóm này thường kéo theo câu hỏi về refund, tiếp tục hành trình hay bảo lưu chi phí phát sinh hợp lý.",
  },
];

const routeLogic = [
  {
    title: "Châu Âu → Việt Nam",
    description:
      "Nếu chặng bị hoãn khởi hành từ EU, đây thường là nhóm hồ sơ delay mạnh. Bạn nên tập trung vào giờ đến cuối cùng và xem liệu việc hoãn có làm bạn lỡ transit hay không.",
  },
  {
    title: "Việt Nam → châu Âu với hãng EU",
    description:
      "Nhiều hành khách Việt bay với Air France, KLM, Lufthansa, SWISS hoặc Austrian không biết rằng chính hãng khai thác có thể tạo ra khác biệt lớn cho EU261.",
  },
  {
    title: "Transit qua hub EU",
    description:
      "Frankfurt, Paris CDG, Amsterdam Schiphol và Vienna là các điểm transit phổ biến. Một delay nhỏ ở chặng đầu có thể biến thành arrival delay lớn ở điểm đến cuối cùng.",
  },
];

const claimLinks = [
  {
    label: "Kiểm tra hồ sơ delay ngay",
    href: buildClaimWingerViLink("delayed", {
      medium: "context_link",
      campaign: "vi_delayed_flight",
      content: "delay_primary_flow",
    }),
    placement: "vi_delayed_primary_flow",
    description:
      "Dành cho case đến muộn, missed connection hoặc nghi ngờ chậm hơn 3 giờ tại điểm đến cuối cùng.",
  },
  {
    label: "Kiểm tra hồ sơ tổng quát",
    href: buildClaimWingerViLink("home", {
      medium: "context_link",
      campaign: "vi_delayed_flight",
      content: "general_check",
    }),
    placement: "vi_delayed_general_check",
    description:
      "Phù hợp nếu bạn chưa chắc case của mình là delay thuần túy hay đã chuyển thành cancellation hoặc schedule change lớn.",
  },
  {
    label: "Nếu hãng đã đổi sang chuyến khác",
    href: buildClaimWingerViLink("cancelled", {
      medium: "context_link",
      campaign: "vi_delayed_flight",
      content: "reroute_or_cancelled_flow",
    }),
    placement: "vi_delayed_reroute_flow",
    description:
      "Dùng khi tình huống thực tế đã chuyển từ hoãn đơn thuần sang hủy chuyến hoặc đổi lịch sát giờ bay.",
  },
];

export default function DelayedFlightViPage() {
  const schemas = combineSchemas(
    generateOrganizationSchema({ url: canonicalUrl }),
    generateWebPageSchema({
      title: "Chuyến bay bị hoãn 3+ giờ? Khi nào hành khách Việt có thể đòi đến €600",
      description:
        "Hướng dẫn bằng tiếng Việt cho chuyến bay bị hoãn: mốc 3 giờ, missed connection, quyền chăm sóc tại sân bay và khi nào hồ sơ delay có thể phát sinh bồi thường theo EU261.",
      url: canonicalUrl,
      inLanguage: "vi-VN",
    }),
    generateFAQSchema(delayedFaqs),
    generateBreadcrumbSchema([
      { name: "Trang chủ", url: "https://problemlot.com/vi" },
      { name: "Chuyến bay bị hoãn", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutVi>
      <SEO
        title="Chuyến bay bị hoãn 3+ giờ? Khi nào hành khách Việt có thể đòi đến €600"
        description="Chuyến bay bị hoãn, đến muộn hoặc lỡ nối chuyến? Xem khi nào hành khách Việt có thể yêu cầu bồi thường EU261 và kiểm tra hồ sơ bằng form tiếng Việt."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="vi_VN"
        language="Vietnamese"
      />
      <ViSeoHead canonicalUrl={canonicalUrl} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 pb-14 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">
              <Clock3 className="h-4 w-4" />
              Delay, arrival delay và missed connection theo EU261
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl">
              Chuyến bay bị hoãn?
              <span className="mt-3 block text-emerald-600 dark:text-emerald-400">
                Mốc then chốt thường là chậm từ 3 giờ tại điểm đến cuối cùng.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Đây là trang dành cho hành khách Việt có chuyến bay đến muộn, lỡ nối chuyến
              hoặc bị kéo dài hành trình qua các hub như Frankfurt, Paris CDG, Amsterdam
              Schiphol hay Vienna. Với EU261, điều quan trọng nhất thường không phải là giờ
              cất cánh, mà là giờ bạn thực sự đến nơi cuối cùng.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {quickChecks.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="p-5">
                    <Icon className="mb-4 h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h2>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            <ClaimWingerViSection
              className="mt-10"
              badge="Form delay bằng tiếng Việt"
              title="Kiểm tra ngay hồ sơ chuyến bay bị hoãn"
              description="Nếu chuyến bay của bạn bị hoãn, đến muộn hoặc làm lỡ chuyến nối, hãy dùng ngay form đúng luồng delay. Đây là cách nhanh nhất để xem hồ sơ có dấu hiệu phát sinh compensation theo EU261 hay không."
              ctaHref={delayedClaimHref}
              ctaLabel="Mở form cho chuyến bay bị hoãn"
              placement="vi_delayed_hero_embed"
              loadingLabel="Đang tải form cho chuyến bay bị hoãn..."
              loadingDescription="Biểu mẫu ClaimWinger tiếng Việt cho case delay sẽ xuất hiện ngay bên dưới."
            />
          </div>
        </section>

        <section className="border-y border-emerald-100 bg-white/80 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <Euro className="h-4 w-4" />
                Quick answer cho intent cao
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Delay được nhìn theo ba tầng rất khác nhau
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {delayStages.map((stage) => (
                <Card key={stage.title} className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                    {stage.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {stage.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Logic áp dụng mạnh nhất cho hành khách Việt
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                Không phải mọi delay đều giống nhau. Với thị trường Việt Nam, ba bối cảnh dưới
                đây quan trọng nhất về mặt hồ sơ và doanh thu tìm kiếm.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {routeLogic.map((item) => (
                <Card key={item.title} className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Nên giữ gì khi chuyến bay bị hoãn?
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Mã đặt chỗ, vé điện tử và email xác nhận hành trình.",
                  "Boarding pass, kể cả boarding pass chặng transit nếu còn giữ được.",
                  "Thông báo delay, reschedule hoặc rerouting từ app, email hay SMS.",
                  "Ảnh bảng điện tử, ảnh chụp giờ đến và biên lai chi phí phát sinh hợp lý.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 p-4 text-sm leading-6 text-slate-700 dark:border-slate-800 dark:text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Card className="border-emerald-200 bg-emerald-50/70 p-8 dark:border-emerald-900 dark:bg-emerald-950/10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Liên kết ngữ cảnh để mở đúng claim flow
              </h2>
              <p className="mb-6 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">
                Những link dưới đây đều dùng UTM riêng và gửi event về GTM, giúp phân biệt rõ
                traffic đến từ trang delay.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                {claimLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerViClick(link.placement, link.href)}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-gray-900 dark:hover:border-emerald-700"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                      {link.label}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {link.description}
                    </p>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <a
                    href={delayedClaimHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerViClick("vi_delayed_bottom_primary", delayedClaimHref)}
                  >
                    Kiểm tra hồ sơ delay ngay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/vi/kiem-tra-boi-thuong">Xem logic bồi thường</Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href="/vi/blog/eu261-la-gi-va-khi-nao-duoc-ap-dung">
                    Đọc bài nền tảng EU261
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Câu hỏi thường gặp
            </h2>
            <div className="space-y-4">
              {delayedFaqs.map((faq) => (
                <Card key={faq.question} className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </LayoutVi>
  );
}
