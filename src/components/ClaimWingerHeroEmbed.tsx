import { useState } from "react";

type ClaimWingerHeroEmbedProps = {
  className?: string;
};

export function ClaimWingerHeroEmbed({
  className = "",
}: ClaimWingerHeroEmbedProps) {
  const [isClaimFormLoaded, setIsClaimFormLoaded] = useState(false);
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");

  return (
    <div className={wrapperClassName}>
      {!isClaimFormLoaded && (
        <div
          aria-live="polite"
          role="status"
          className="flex min-h-[220px] items-center justify-center rounded-3xl border border-primary/20 bg-white/80 p-8 text-center shadow-xl backdrop-blur"
        >
          <div>
            <p className="text-lg font-semibold text-foreground">
              Ladowanie formularza...
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Za chwile zobaczysz formularz ClaimWinger do weryfikacji sprawy.
            </p>
          </div>
        </div>
      )}

      <iframe
        src="https://claimwinger.com/embed?lang=pl"
        width="100%"
        height="900"
        style={{ display: isClaimFormLoaded ? "block" : "none" }}
        onLoad={() => setIsClaimFormLoaded(true)}
        title="Formularz ClaimWinger"
        className="w-full rounded-3xl border-0 bg-white shadow-2xl"
      />
    </div>
  );
}
