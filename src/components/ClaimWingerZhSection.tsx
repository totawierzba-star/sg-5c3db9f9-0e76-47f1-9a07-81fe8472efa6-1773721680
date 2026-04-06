import { ShieldCheck, Sparkles } from "lucide-react";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";

type ClaimWingerZhSectionProps = {
  className?: string;
  title?: string;
  description?: string;
  badge?: string;
  loadingLabel?: string;
  loadingDescription?: string;
};

export function ClaimWingerZhSection({
  className = "",
  title = "立即检查您的航班是否可以索赔",
  description = "只需填写航班信息，ClaimWinger 就会帮助您初步判断是否符合赔偿条件，并接手后续索赔流程。",
  badge = "ClaimWinger 中文索赔入口",
  loadingLabel = "正在加载 ClaimWinger 表单...",
  loadingDescription = "稍后您将看到中文索赔表单，可直接提交航班信息。",
}: ClaimWingerZhSectionProps) {
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");

  return (
    <section className={wrapperClassName}>
      <div className="mb-6 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 shadow-sm dark:border-blue-900 dark:from-blue-950/40 dark:via-gray-900 dark:to-gray-900">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          <Sparkles className="h-4 w-4" />
          {badge}
        </div>
        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
        <p className="max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            免费初步检查
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            无前期费用
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            中文友好流程
          </span>
        </div>
      </div>

      <ClaimWingerHeroEmbed
        className="mb-8"
        lang="zh"
        title="ClaimWinger 中文表单"
        loadingLabel={loadingLabel}
        loadingDescription={loadingDescription}
      />
    </section>
  );
}
