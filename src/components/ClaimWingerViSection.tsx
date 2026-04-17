import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import { ClaimWingerLogo } from "@/components/ClaimWingerLogo";
import {
  buildClaimWingerViLink,
  trackClaimWingerViClick,
} from "@/lib/claimwingerLinksVi";

type ClaimWingerViSectionProps = {
  className?: string;
  title?: string;
  description?: string;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  loadingLabel?: string;
  loadingDescription?: string;
  placement?: string;
};

export function ClaimWingerViSection({
  className = "",
  title = "Kiểm tra ngay hồ sơ bồi thường bằng tiếng Việt",
  description = "Nếu chuyến bay của bạn bị hoãn, bị hủy hoặc bị đổi lịch đáng kể, ClaimWinger giúp bạn kiểm tra nhanh khả năng đòi bồi thường theo đúng luồng tiếng Việt.",
  badge = "ClaimWinger tiếng Việt",
  ctaLabel = "Mở form ClaimWinger",
  ctaHref = buildClaimWingerViLink("home", {
    medium: "embedded_cta",
    campaign: "claim_entry",
  }),
  loadingLabel = "Đang tải biểu mẫu ClaimWinger...",
  loadingDescription = "Biểu mẫu tiếng Việt sẽ hiển thị sau ít giây nữa.",
  placement = "embed_section",
}: ClaimWingerViSectionProps) {
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");

  return (
    <section className={wrapperClassName} data-claimwinger-embed="true">
      <div className="mb-6 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-6 shadow-sm dark:border-emerald-900 dark:from-emerald-950/40 dark:via-gray-900 dark:to-gray-900">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
          <Sparkles className="h-4 w-4" />
          {badge}
        </div>

        <div className="mb-4">
          <ClaimWingerLogo />
        </div>

        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
        <p className="max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Kiểm tra miễn phí
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Không trả trước
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Form tiếng Việt
          </span>
        </div>

        <div className="mt-6">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClaimWingerViClick(placement, ctaHref)}
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <ClaimWingerHeroEmbed
        className="mb-8"
        lang="vi"
        title="Form ClaimWinger tiếng Việt"
        loadingLabel={loadingLabel}
        loadingDescription={loadingDescription}
      />
    </section>
  );
}
