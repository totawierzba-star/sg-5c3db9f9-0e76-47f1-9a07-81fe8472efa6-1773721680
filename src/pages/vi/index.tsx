import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Euro,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { ClaimWingerViSection } from "@/components/ClaimWingerViSection";
import { LayoutVi } from "@/components/LayoutVi";
import { SEO } from "@/components/SEO";
import { ViSeoHead } from "@/components/ViSeoHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogArticlesViSorted } from "@/lib/blogArticlesVi";
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

const canonicalUrl = "https://problemlot.com/vi";

const homeFaqs = [
  {
    question: "Hành khách Việt có thể được bồi thường EU261 trong trường hợp nào?",
    answer:
      "Thường là khi chuyến bay khởi hành từ EU, hoặc khi chặng từ ngoài EU vào EU do hãng hàng không EU khai thác. Điểm khởi hành, hãng khai thác thực tế và thời gian đến cuối cùng đều rất quan trọng.",
  },
  {
    question: "Chuyến bay bị hoãn bao nhiêu giờ thì có thể phát sinh bồi thường?",
    answer:
      "Trong nhiều hồ sơ EU261, mốc then chốt là đến điểm đến cuối cùng chậm từ 3 giờ trở lên. Đây không phải là quy tắc duy nhất, nhưng là mốc quan trọng nhất với hồ sơ delay.",
  },
  {
    question: "Chuyến bay bị hủy có luôn được nhận tiền không?",
    answer:
      "Không phải lúc nào cũng vậy. Cần xem hãng thông báo trước bao lâu, có chuyến thay thế hay không, và bạn đến cuối cùng chậm bao nhiêu so với lịch ban đầu.",
  },
  {
    question: "Bay từ Việt Nam sang châu Âu với hãng ngoài EU có được EU261 không?",
    answer:
      "Không phải là ca mạnh điển hình cho chính chặng đó. Với hành trình từ ngoài EU vào EU, quyền theo EU261 thường mạnh hơn khi hãng khai thác thực tế là hãng hàng không EU.",
  },
];

const homepageHighlights = [
  {
    title: "3 giờ tại điểm đến cuối cùng",
    description:
      "Với hồ sơ delay, đây thường là mốc quan trọng nhất để đánh giá khả năng phát sinh bồi thường.",
    icon: Clock3,
  },
  {
    title: "€250 / €400 / €600",
    description:
      "Mức tiền thường phụ thuộc vào khoảng cách và loại hành trình, không chỉ nhìn vào giá vé.",
    icon: Euro,
  },
  {
    title: "EU → Việt Nam và transit qua hub EU",
    description:
      "Đây là nhóm hồ sơ rất quan trọng với người dùng Việt vì dễ phát sinh long-haul, missed connection và rerouting.",
    icon: Plane,
  },
];

const journeyScenarios = [
  {
    title: "Bay từ châu Âu về Việt Nam",
    description:
      "Đây thường là nhóm hồ sơ mạnh nhất vì chuyến bay khởi hành từ EU. Điều quan trọng là xác định đúng chặng, giờ đến cuối cùng và bằng chứng thay đổi hành trình.",
  },
  {
    title: "Bay từ Việt Nam sang EU bằng hãng EU",
    description:
      "Nhiều hành khách Việt bỏ lỡ cơ hội ở nhóm này. Nếu chặng từ ngoài EU vào EU do hãng EU khai thác thực tế, EU261 có thể vẫn áp dụng.",
  },
  {
    title: "Nối chuyến qua Frankfurt, Paris, Amsterdam, Vienna",
    description:
      "Transit qua các hub lớn của châu Âu tạo ra nhiều hồ sơ missed connection. Ở đây, một booking duy nhất và giờ đến cuối cùng là chi tiết cực kỳ quan trọng.",
  },
];

const claimLinks = [
  {
    label: "Kiểm tra hồ sơ tổng quát",
    href: buildClaimWingerViLink("home", {
      medium: "context_link",
      campaign: "vi_home",
      content: "general_claim_check",
    }),
    placement: "vi_home_general_claim_check",
    description:
      "Phù hợp nếu bạn chưa chắc vấn đề chính là delay, cancellation hay đổi lịch đáng kể.",
  },
  {
    label: "Mở form cho chuyến bay bị hoãn",
    href: buildClaimWingerViLink("delayed", {
      medium: "context_link",
      campaign: "vi_home",
      content: "delayed_claim_check",
    }),
    placement: "vi_home_delayed_claim_check",
    description:
      "Dùng khi vấn đề lớn nhất là đến muộn, missed connection hoặc chậm hơn 3 giờ tại điểm đến cuối cùng.",
  },
  {
    label: "Mở form cho chuyến bay bị hủy",
    href: buildClaimWingerViLink("cancelled", {
      medium: "context_link",
      campaign: "vi_home",
      content: "cancelled_claim_check",
    }),
    placement: "vi_home_cancelled_claim_check",
    description:
      "Dùng khi hãng thông báo hủy chuyến, đổi sang chuyến khác hoặc thay đổi lịch bay đáng kể gần ngày khởi hành.",
  },
];

export default function ViHomePage() {
  const latestArticle = blogArticlesViSorted[0];

  const schemas = combineSchemas(
    generateOrganizationSchema({ url: canonicalUrl }),
    generateWebPageSchema({
      title: "Chuyến bay bị hoãn hoặc bị hủy? Hành khách Việt có thể đòi đến €600",
      description:
        "Hướng dẫn bằng tiếng Việt về EU261 cho hành khách bay giữa châu Âu và Việt Nam: delay, cancellation, missed connection, refund và cách kiểm tra hồ sơ bồi thường.",
      url: canonicalUrl,
      inLanguage: "vi-VN",
    }),
    generateFAQSchema(homeFaqs),
    generateBreadcrumbSchema([{ name: "Trang chủ", url: canonicalUrl }]),
  );

  return (
    <LayoutVi>
      <SEO
        title="Chuyến bay bị hoãn hoặc bị hủy? Hành khách Việt có thể đòi đến €600"
        description="EU261 bằng tiếng Việt cho hành khách bay giữa châu Âu và Việt Nam. Kiểm tra khi nào chuyến bay bị hoãn, bị hủy hoặc nối chuyến lỡ có thể phát sinh bồi thường."
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
        <section className="px-4 pb-16 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">
              <Sparkles className="h-4 w-4" />
              EU261 bằng tiếng Việt cho hành khách bay châu Âu - Việt Nam
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl">
              Chuyến bay bị hoãn hoặc bị hủy?
              <span className="mt-3 block text-emerald-600 dark:text-emerald-400">
                Hành khách Việt có thể đòi đến €600 trong đúng trường hợp.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Trang này giúp bạn hiểu nhanh logic EU261 cho các hành trình giữa châu Âu
              và Việt Nam: khi nào delay thực sự tạo ra quyền lợi, khi nào cancellation
              dẫn tới refund hoặc compensation, và vì sao cùng một tuyến bay có thể cho
              kết quả khác nhau tùy hãng khai thác.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {homepageHighlights.map((item) => {
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
              badge="Kiểm tra hồ sơ ngay"
              title="Mở form ClaimWinger tiếng Việt ngay trên đầu trang"
              description="Nếu bạn đã có sẵn mã đặt chỗ hoặc chi tiết chuyến bay, cách nhanh nhất là kiểm tra hồ sơ thật ngay bây giờ. Form tiếng Việt này phù hợp cho cả delay, cancellation và đổi lịch đáng kể."
              ctaHref={buildClaimWingerViLink("home", {
                medium: "homepage_cta",
                campaign: "vi_home",
                content: "hero_embed",
              })}
              ctaLabel="Kiểm tra hồ sơ bằng tiếng Việt"
              placement="vi_home_hero_embed"
              loadingLabel="Đang tải form kiểm tra hồ sơ..."
              loadingDescription="Biểu mẫu ClaimWinger tiếng Việt sẽ xuất hiện ngay bên dưới."
            />
          </div>
        </section>

        <section className="border-y border-emerald-100 bg-white/80 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <ShieldCheck className="h-4 w-4" />
                Câu trả lời ngắn cho intent cao
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                EU261 mạnh nhất với hành khách Việt trong những bối cảnh nào?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {journeyScenarios.map((scenario) => (
                <Card key={scenario.title} className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                    {scenario.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {scenario.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Chọn đúng luồng ngay từ đầu
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                  Nếu bạn vào đúng trang theo tình huống thực tế, việc đọc và kiểm tra hồ
                  sơ sẽ nhanh hơn nhiều.
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/vi/blog">
                  Vào blog tiếng Việt
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <Link
                href="/vi/chuyen-bay-bi-hoan"
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-emerald-300 dark:bg-gray-900 dark:ring-slate-800 dark:hover:ring-emerald-700"
              >
                <Clock3 className="mb-4 h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Chuyến bay bị hoãn
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dành cho hồ sơ delay, đến muộn hơn 3 giờ và missed connection.
                </p>
              </Link>

              <Link
                href="/vi/chuyen-bay-bi-huy"
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-emerald-300 dark:bg-gray-900 dark:ring-slate-800 dark:hover:ring-emerald-700"
              >
                <Plane className="mb-4 h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Chuyến bay bị hủy
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dành cho hồ sơ cancellation, đổi lịch sát ngày và refund hoặc rerouting.
                </p>
              </Link>

              <Link
                href="/vi/kiem-tra-boi-thuong"
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-emerald-300 dark:bg-gray-900 dark:ring-slate-800 dark:hover:ring-emerald-700"
              >
                <Euro className="mb-4 h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Kiểm tra bồi thường
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Xem nhanh logic €250 / €400 / €600 và chuẩn bị hồ sơ trước khi gửi claim.
                </p>
              </Link>

              <Link
                href={latestArticle ? `/vi/blog/${latestArticle.slug}` : "/vi/blog"}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-emerald-300 dark:bg-gray-900 dark:ring-slate-800 dark:hover:ring-emerald-700"
              >
                <BookOpen className="mb-4 h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Bắt đầu từ bài nền tảng
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hiểu phạm vi áp dụng EU261 trước khi đi sâu vào route, airline hay edge case.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Card className="border-emerald-200 bg-emerald-50/70 p-8 dark:border-emerald-900 dark:bg-emerald-950/10">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Liên kết ngữ cảnh để kiểm tra hồ sơ ngay
              </h2>
              <p className="mb-6 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">
                Mỗi link dưới đây đều dùng UTM riêng để phân biệt nguồn traffic và gửi event
                về GTM khi có lượt nhấp. Bạn có thể đi thẳng vào luồng phù hợp nhất với case
                của mình.
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
            </Card>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Câu hỏi thường gặp
            </h2>
            <div className="space-y-4">
              {homeFaqs.map((faq) => (
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
