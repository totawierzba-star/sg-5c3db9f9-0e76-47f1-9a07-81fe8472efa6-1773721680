import { ClaimWingerAppSeoArticlePage } from "@/components/ClaimWingerAppSeoArticlePage";
import { getRequiredClaimWingerAppSeoArticle } from "@/lib/claimWingerAppSeoArticles";

const article = getRequiredClaimWingerAppSeoArticle("sledzenie-statusu-odszkodowania-za-lot");

export default function FlightCompensationStatusTrackingArticle() {
  return <ClaimWingerAppSeoArticlePage article={article} />;
}
