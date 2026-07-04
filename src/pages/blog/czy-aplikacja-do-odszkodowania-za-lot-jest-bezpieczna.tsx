import { ClaimWingerAppSeoArticlePage } from "@/components/ClaimWingerAppSeoArticlePage";
import { getRequiredClaimWingerAppSeoArticle } from "@/lib/claimWingerAppSeoArticles";

const article = getRequiredClaimWingerAppSeoArticle(
  "czy-aplikacja-do-odszkodowania-za-lot-jest-bezpieczna",
);

export default function FlightCompensationAppSafetyArticle() {
  return <ClaimWingerAppSeoArticlePage article={article} />;
}
