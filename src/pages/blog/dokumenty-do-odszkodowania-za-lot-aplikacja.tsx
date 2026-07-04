import { ClaimWingerAppSeoArticlePage } from "@/components/ClaimWingerAppSeoArticlePage";
import { getRequiredClaimWingerAppSeoArticle } from "@/lib/claimWingerAppSeoArticles";

const article = getRequiredClaimWingerAppSeoArticle(
  "dokumenty-do-odszkodowania-za-lot-aplikacja",
);

export default function FlightCompensationDocumentsAppArticle() {
  return <ClaimWingerAppSeoArticlePage article={article} />;
}
