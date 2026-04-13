type ClaimWingerLogoProps = {
  className?: string;
  compact?: boolean;
  textClassName?: string;
};

export function ClaimWingerLogo({
  className = "",
  compact = false,
  textClassName,
}: ClaimWingerLogoProps) {
  const wrapperClassName = ["inline-flex items-center gap-3", className]
    .filter(Boolean)
    .join(" ");
  const wordmarkClassName = [
    compact ? "text-lg" : "text-2xl",
    "font-extrabold tracking-tight",
    textClassName ?? "text-slate-900 dark:text-white",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={wrapperClassName} aria-label="ClaimWinger">
      <svg
        viewBox="0 0 64 64"
        className={compact ? "h-8 w-8" : "h-10 w-10"}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="claimwinger-logo-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1FA0FF" />
            <stop offset="100%" stopColor="#0C6FD8" />
          </linearGradient>
          <linearGradient id="claimwinger-logo-bottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FCBFF" />
            <stop offset="100%" stopColor="#1FA0FF" />
          </linearGradient>
        </defs>
        <path
          d="M8 50c3-20 19-31 44-35 2 0 3 2 2 4-8 17-20 18-34 20-7 1-10 2-12 11 0 1-1 1-2 0z"
          fill="url(#claimwinger-logo-top)"
        />
        <path
          d="M11 49c8-13 18-20 36-23 2 0 3 1 2 3-6 12-15 13-25 14-6 1-9 2-12 7 0 1-1 1-1-1z"
          fill="url(#claimwinger-logo-bottom)"
        />
      </svg>
      <span className={wordmarkClassName}>
        ClaimWinger
      </span>
    </span>
  );
}
