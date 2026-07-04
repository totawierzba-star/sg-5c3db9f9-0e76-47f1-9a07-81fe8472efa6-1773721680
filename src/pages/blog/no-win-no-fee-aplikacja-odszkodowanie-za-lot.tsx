import { ClaimWingerAppSeoArticlePage } from "@/components/ClaimWingerAppSeoArticlePage";
import { getRequiredClaimWingerAppSeoArticle } from "@/lib/claimWingerAppSeoArticles";

const article = getRequiredClaimWingerAppSeoArticle(
  "no-win-no-fee-aplikacja-odszkodowanie-za-lot",
);

export default function NoWinNoFeeAppFlightCompensationArticle() {
  return <ClaimWingerAppSeoArticlePage article={article} />;
}
