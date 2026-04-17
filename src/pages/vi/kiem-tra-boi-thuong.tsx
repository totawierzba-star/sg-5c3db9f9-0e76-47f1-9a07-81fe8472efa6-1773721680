import Head from "next/head";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Euro, FileText, Sparkles } from "lucide-react";

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

const canonicalUrl = "https://problemlot.com/vi/kiem-tra-boi-thuong";
const generalClaimHref = buildClaimWingerViLink("home", {
  medium: "page_cta",
  campaign: "vi_compensation_check",
  content: "hero_embed",
});

const compensationFaqs = [
  {
    question: "Bồi thường €250 / €400 / €600 được tính như thế nào?",
    answer:
      "Các mức này thường gắn với khoảng cách chuyến bay và loại hành trình. Đây là logic khung của EU261, nhưng để kết luận hồ sơ thật cần xem thêm phạm vi áp dụng và nguyên nhân gián đoạn.",
  },
  {
    question: "Có phải mọi chuyến bay bị trễ hoặc bị hủy đều được €600 không?",
    answer:
      "Không. €600 thường gắn với long-haul đủ điều kiện. Nhiều hồ sơ thực tế sẽ rơi vào €250 hoặc €400, và cũng có trường hợp không phát sinh compensation dù chuyến bay bị gián đoạn.",
  },
  {
    question: "Tôi cần chuẩn bị gì để kiểm tra hồ sơ nhanh nhất?",
    answer:
      "Bạn nên có mã đặt chỗ, tuyến bay, ngày bay, hãng khai thác thực tế, giờ đến cuối cùng hoặc thông báo hủy chuyến, cùng các email hoặc ảnh chụp liên quan nếu còn giữ được.",
  },
  {
    question: "Nếu đã nhận voucher thì còn có thể kiểm tra lại không?",
    answer:
      "Nên kiểm tra lại hồ sơ trước khi tự loại trừ cơ hội. Việc đã nhận voucher có thể ảnh hưởng đến kết quả, nhưng không nên kết luận chỉ dựa trên một chi tiết mà chưa xem toàn bộ bối cảnh.",
  },
];

const amountCards = [
  {
    amount: "€250",
    title: "Chặng ngắn",
    description:
      "Thường gắn với các chuyến bay ngắn đủ điều kiện theo EU261. Đây là mức cơ bản nhưng vẫn rất đáng kiểm tra.",
  },
  {
    amount: "€400",
    title: "Chặng trung bình",
    description:
      "Thường xuất hiện ở nhiều hành trình châu Âu hoặc các chặng tầm trung đủ điều kiện và có mức gián đoạn phù hợp.",
  },
  {
    amount: "€600",
    title: "Long-haul",
    description:
      "Thường gắn với các chặng dài như Europe → Việt Nam hoặc Việt Nam → Europe khi case thực sự nằm trong phạm vi EU261.",
  },
];

const qualificationPoints = [
  "Điểm khởi hành có nằm trong EU hay không.",
  "Hãng khai thác thực tế có phải hãng hàng không EU hay không.",
  "Bạn đến điểm đến cuối cùng chậm bao nhiêu.",
  "Case là delay, cancellation, denied boarding hay đổi lịch đáng kể.",
  "Hãng viện dẫn lý do gì và lý do đó có thực sự loại trừ compensation hay không.",
];

const documentChecklist = [
  "PNR hoặc mã đặt chỗ.",
  "Vé điện tử và email xác nhận.",
  "Boarding pass nếu còn giữ được.",
  "Thông báo delay, cancellation hoặc reschedule.",
  "Ảnh bảng điện tử và giờ đến cuối cùng nếu có.",
  "Biên lai ăn uống, khách sạn, taxi hoặc vé mua lại hợp lý.",
];

const claimLinks = [
  {
    label: "Kiểm tra hồ sơ tổng quát",
    href: buildClaimWingerViLink("home", {
      medium: "context_link",
      campaign: "vi_compensation_check",
      content: "general_claim_check",
    }),
    placement: "vi_compensation_general_claim_check",
    description:
      "Điểm vào tốt nhất nếu bạn muốn kiểm tra toàn bộ hồ sơ mà chưa chốt case thuộc nhóm nào.",
  },
  {
    label: "Đi vào luồng chuyến bay bị hoãn",
    href: buildClaimWingerViLink("delayed", {
      medium: "context_link",
      campaign: "vi_compensation_check",
      content: "delayed_side_flow",
    }),
    placement: "vi_compensation_delayed_side_flow",
    description:
      "Phù hợp nếu vấn đề chính là arrival delay, transit vỡ hoặc đến muộn hơn 3 giờ.",
  },
  {
    label: "Đi vào luồng chuyến bay bị hủy",
    href: buildClaimWingerViLink("cancelled", {
      medium: "context_link",
      campaign: "vi_compensation_check",
      content: "cancelled_side_flow",
    }),
    placement: "vi_compensation_cancelled_side_flow",
    description:
      "Phù hợp nếu hãng đã hủy chuyến, chuyển bạn sang chuyến khác hoặc thay đổi lịch gần ngày bay.",
  },
];

export default function CompensationCheckViPage() {
  const schemas = combineSchemas(
    generateOrganizationSchema({ url: canonicalUrl }),
    generateWebPageSchema({
      title: "Kiểm tra bồi thường EU261 cho hành khách Việt | Từ €250 đến €600",
      description:
        "Trang kiểm tra bồi thường EU261 bằng tiếng Việt: hiểu logic €250 / €400 / €600, chuẩn bị hồ sơ và đi vào đúng luồng delay hoặc cancellation.",
      url: canonicalUrl,
      inLanguage: "vi-VN",
    }),
    generateFAQSchema(compensationFaqs),
    generateBreadcrumbSchema([
      { name: "Trang chủ", url: "https://problemlot.com/vi" },
      { name: "Kiểm tra bồi thường", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutVi>
      <SEO
        title="Kiểm tra bồi thường EU261 cho hành khách Việt | Từ €250 đến €600"
        description="Kiểm tra nhanh logic bồi thường EU261 cho hành khách Việt: các mức €250, €400, €600, giấy tờ cần giữ và cách đi vào đúng claim flow."
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
              <Sparkles className="h-4 w-4" />
              Trang kiểm tra hồ sơ EU261 bằng tiếng Việt
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl">
              Kiểm tra bồi thường EU261
              <span className="mt-3 block text-emerald-600 dark:text-emerald-400">
                Từ €250 đến €600, nhưng chỉ khi case rơi đúng logic.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Trang này giúp bạn nhìn toàn cảnh trước khi gửi claim: mức tiền thường gặp,
              yếu tố nào quyết định việc có compensation hay không, và hồ sơ cần những gì để
              được kiểm tra nhanh và đúng.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {amountCards.map((item) => (
                <Card key={item.amount} className="p-6">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">
                    <Euro className="h-4 w-4" />
                    {item.amount}
                  </div>
                  <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>

            <ClaimWingerViSection
              className="mt-10"
              badge="Claim check tiếng Việt"
              title="Kiểm tra hồ sơ ngay thay vì đoán mức tiền"
              description="Nếu bạn đã có dữ liệu chuyến bay, cách hiệu quả nhất là đi thẳng vào form tiếng Việt để xem case của mình có thuộc nhóm delay, cancellation hay schedule change đáng kể."
              ctaHref={generalClaimHref}
              ctaLabel="Kiểm tra hồ sơ tổng quát"
              placement="vi_compensation_hero_embed"
              loadingLabel="Đang tải form kiểm tra bồi thường..."
              loadingDescription="Biểu mẫu ClaimWinger tiếng Việt sẽ xuất hiện ngay bên dưới."
            />
          </div>
        </section>

        <section className="border-y border-emerald-100 bg-white/80 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Năm yếu tố quyết định việc có compensation hay không
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {qualificationPoints.map((item) => (
                <Card key={item} className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <FileText className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Cần chuẩn bị giấy tờ gì để kiểm tra hồ sơ?
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {documentChecklist.map((item) => (
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
                Chọn đúng điểm vào cho hồ sơ của bạn
              </h2>
              <p className="mb-6 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">
                Mỗi liên kết đều gắn UTM riêng và gửi event về GTM để nhận diện nguồn nhấp
                từ trang kiểm tra bồi thường.
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
                    href={generalClaimHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimWingerViClick("vi_compensation_bottom_primary", generalClaimHref)
                    }
                  >
                    Kiểm tra hồ sơ ngay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/vi/chuyen-bay-bi-hoan">Xem trang delay</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/vi/chuyen-bay-bi-huy">Xem trang cancellation</Link>
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
              {compensationFaqs.map((faq) => (
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
