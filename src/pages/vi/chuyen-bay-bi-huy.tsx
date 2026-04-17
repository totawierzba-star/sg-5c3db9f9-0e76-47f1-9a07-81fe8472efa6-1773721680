import Head from "next/head";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CalendarClock,
  Euro,
  Plane,
  RefreshCcw,
} from "lucide-react";

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

const canonicalUrl = "https://problemlot.com/vi/chuyen-bay-bi-huy";
const cancelledClaimHref = buildClaimWingerViLink("cancelled", {
  medium: "page_cta",
  campaign: "vi_cancelled_flight",
  content: "hero_embed",
});

const cancelledFaqs = [
  {
    question: "Chuyến bay bị hủy có luôn được nhận tiền bồi thường không?",
    answer:
      "Không phải lúc nào cũng vậy. Cần xem hãng thông báo trước bao lâu, có chuyến thay thế phù hợp hay không, và bạn đến cuối cùng chậm bao nhiêu so với lịch ban đầu.",
  },
  {
    question: "Quy tắc 14 ngày hoạt động như thế nào?",
    answer:
      "Nếu hãng thông báo quá sớm, hồ sơ thường nghiêng nhiều hơn về refund hoặc rerouting. Khi thông báo sát ngày bay hơn, khả năng phát sinh compensation có thể mạnh hơn, nhưng vẫn phải xem chất lượng chuyến thay thế.",
  },
  {
    question: "Tôi có thể chọn hoàn tiền thay vì voucher không?",
    answer:
      "Trong nhiều hồ sơ cancellation, hành khách có quyền chọn giữa refund và rerouting theo điều kiện áp dụng. Việc hãng đề nghị voucher không đồng nghĩa bạn buộc phải nhận voucher.",
  },
  {
    question: "Bay từ Việt Nam sang châu Âu mà bị hủy có được EU261 không?",
    answer:
      "Có thể, nhưng phải xem hãng khai thác thực tế có phải hãng EU hay không. Đây là điểm đặc biệt quan trọng với các chặng từ ngoài EU vào EU.",
  },
  {
    question: "Nếu hãng đổi sang chuyến khác thì còn được bồi thường không?",
    answer:
      "Có thể vẫn được. Hồ sơ cần được xem kỹ về thời điểm thông báo, lịch thay thế và mức chậm ở điểm đến cuối cùng sau khi rerouting.",
  },
];

const coreCards = [
  {
    title: "Refund",
    description:
      "Trả lại tiền vé hoặc phần vé chưa sử dụng khi bạn không tiếp tục hành trình theo phương án hãng đưa ra.",
    icon: RefreshCcw,
  },
  {
    title: "Compensation",
    description:
      "Khoản tiền bổ sung theo EU261 nếu hồ sơ cancellation đáp ứng đúng điều kiện pháp lý.",
    icon: Euro,
  },
  {
    title: "Rerouting",
    description:
      "Hãng phải đưa ra lựa chọn thay thế hợp lý để bạn vẫn đến được điểm đến cuối cùng.",
    icon: Plane,
  },
];

const noticeWindows = [
  {
    title: "Thông báo rất sát ngày bay",
    description:
      "Đây thường là nhóm hồ sơ cancellation mạnh nhất. Tuy nhiên, kết quả cuối cùng vẫn phụ thuộc vào chuyến thay thế và giờ đến cuối cùng thực tế.",
  },
  {
    title: "Thông báo trong khoảng trung gian",
    description:
      "Hồ sơ cần nhìn kỹ vào khung giờ rerouting. Chỉ riêng việc bị hủy chưa đủ để kết luận ngay mức tiền hoặc việc có compensation hay không.",
  },
  {
    title: "Thông báo khá sớm",
    description:
      "Nhóm này thường thiên về refund hoặc quyền đổi chuyến hơn là compensation tiền mặt, nhưng vẫn nên kiểm tra hồ sơ cụ thể trước khi kết luận.",
  },
];

const scenarioCards = [
  {
    title: "EU → Việt Nam bị hủy",
    description:
      "Đây là nhóm hồ sơ rất đáng kiểm tra vì chặng khởi hành từ EU. Nếu hãng đổi sang chuyến khác và bạn đến muộn đáng kể, hồ sơ có thể vẫn mạnh.",
  },
  {
    title: "Việt Nam → EU với hãng EU bị hủy",
    description:
      "Hành khách Việt bay với hãng EU thường có lợi thế lớn hơn về phạm vi áp dụng so với trường hợp hãng khai thác là hãng ngoài EU.",
  },
  {
    title: "Hủy chuyến kéo theo transit vỡ",
    description:
      "Nếu việc hủy làm vỡ toàn bộ hành trình qua hub châu Âu, cần xem lại điểm đến cuối cùng, một booking hay nhiều booking và hãng khai thác thật sự.",
  },
];

const claimLinks = [
  {
    label: "Mở form cho chuyến bay bị hủy",
    href: buildClaimWingerViLink("cancelled", {
      medium: "context_link",
      campaign: "vi_cancelled_flight",
      content: "cancelled_primary_flow",
    }),
    placement: "vi_cancelled_primary_flow",
    description:
      "Dành cho case hãng thông báo hủy chuyến, dời bạn sang chuyến khác hoặc thay đổi lịch đáng kể.",
  },
  {
    label: "Kiểm tra hồ sơ tổng quát",
    href: buildClaimWingerViLink("home", {
      medium: "context_link",
      campaign: "vi_cancelled_flight",
      content: "general_check",
    }),
    placement: "vi_cancelled_general_check",
    description:
      "Phù hợp nếu hồ sơ có cả yếu tố cancellation, delay, rerouting và bạn muốn một điểm vào trung tính hơn.",
  },
  {
    label: "Nếu case thực ra là delay dài",
    href: buildClaimWingerViLink("delayed", {
      medium: "context_link",
      campaign: "vi_cancelled_flight",
      content: "delay_side_flow",
    }),
    placement: "vi_cancelled_delay_side_flow",
    description:
      "Dùng khi hãng không hủy hẳn mà đẩy bạn sang chuyến cùng ngày hoặc hôm sau và vấn đề chính chuyển thành arrival delay lớn.",
  },
];

export default function CancelledFlightViPage() {
  const schemas = combineSchemas(
    generateOrganizationSchema({ url: canonicalUrl }),
    generateWebPageSchema({
      title: "Chuyến bay bị hủy? Khi nào hành khách Việt được hoàn tiền và bồi thường đến €600",
      description:
        "Hướng dẫn bằng tiếng Việt cho chuyến bay bị hủy: quy tắc 14 ngày, refund, rerouting, voucher và khi nào cancellation có thể phát sinh compensation theo EU261.",
      url: canonicalUrl,
      inLanguage: "vi-VN",
    }),
    generateFAQSchema(cancelledFaqs),
    generateBreadcrumbSchema([
      { name: "Trang chủ", url: "https://problemlot.com/vi" },
      { name: "Chuyến bay bị hủy", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutVi>
      <SEO
        title="Chuyến bay bị hủy? Khi nào hành khách Việt được hoàn tiền và bồi thường đến €600"
        description="Chuyến bay bị hủy, bị đổi sang chuyến khác hoặc bị dời lịch sát ngày? Xem khi nào hành khách Việt có thể yêu cầu refund, rerouting và compensation theo EU261."
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
              <AlertCircle className="h-4 w-4" />
              Cancellation, rerouting và refund theo EU261
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl">
              Chuyến bay bị hủy?
              <span className="mt-3 block text-emerald-600 dark:text-emerald-400">
                Điều cần tách rõ là refund, rerouting và compensation.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Khi hãng báo hủy chuyến, nhiều hành khách chỉ tập trung vào câu hỏi “có được
              tiền không”, nhưng thực tế cần tách thành ba quyền khác nhau. Bạn có thể có
              quyền được đổi sang chuyến khác, hoàn tiền vé hoặc trong một số trường hợp là
              bồi thường thêm theo EU261.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {coreCards.map((item) => {
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
              badge="Form cancellation bằng tiếng Việt"
              title="Kiểm tra ngay hồ sơ chuyến bay bị hủy"
              description="Nếu hãng thông báo hủy chuyến, dời bạn sang chuyến khác hoặc thay đổi lịch gần ngày khởi hành, hãy dùng ngay luồng cancellation để xem hồ sơ có đủ điều kiện cho refund, rerouting hoặc compensation hay không."
              ctaHref={cancelledClaimHref}
              ctaLabel="Mở form cho chuyến bay bị hủy"
              placement="vi_cancelled_hero_embed"
              loadingLabel="Đang tải form cho chuyến bay bị hủy..."
              loadingDescription="Biểu mẫu ClaimWinger tiếng Việt cho case cancellation sẽ xuất hiện ngay bên dưới."
            />
          </div>
        </section>

        <section className="border-y border-emerald-100 bg-white/80 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <CalendarClock className="h-4 w-4" />
                Quick answer về quy tắc thông báo
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Không chỉ nhìn vào việc hủy, hãy nhìn vào thời điểm hãng báo
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {noticeWindows.map((item) => (
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

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Những bối cảnh cancellation quan trọng nhất cho người dùng Việt
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                Ba nhóm dưới đây thường có intent rất cao và cần giải thích thật rõ cho cả
                người dùng lẫn AI answer engines.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {scenarioCards.map((item) => (
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
                Trước khi chọn voucher hoặc chuyến thay thế, hãy giữ các chi tiết này
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Email hoặc tin nhắn thông báo hủy chuyến và thời điểm bạn nhận được thông báo.",
                  "Phương án rerouting mà hãng đề nghị, bao gồm giờ khởi hành và giờ đến mới.",
                  "Mã đặt chỗ, vé điện tử, boarding pass của các chặng đã đi hoặc sẽ đi.",
                  "Biên lai chi phí khách sạn, ăn uống, taxi hoặc vé mua lại nếu phát sinh hợp lý.",
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
                Liên kết ngữ cảnh để mở đúng luồng cancellation
              </h2>
              <p className="mb-6 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">
                Những link này dùng UTM riêng cho traffic từ trang cancellation và gửi event
                về GTM để đo chất lượng nhấp.
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
                    href={cancelledClaimHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimWingerViClick("vi_cancelled_bottom_primary", cancelledClaimHref)
                    }
                  >
                    Kiểm tra hồ sơ cancellation ngay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/vi/chuyen-bay-bi-hoan">Xem trang chuyến bay bị hoãn</Link>
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
              {cancelledFaqs.map((faq) => (
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
