import { ClaimWingerAppSeoArticlePage } from "@/components/ClaimWingerAppSeoArticlePage";
import { getRequiredClaimWingerAppSeoArticle } from "@/lib/claimWingerAppSeoArticles";

const article = getRequiredClaimWingerAppSeoArticle(
  "aplikacja-czy-formularz-online-odszkodowanie-za-lot",
);

export default function AppOrOnlineFormFlightCompensationArticle() {
  return <ClaimWingerAppSeoArticlePage article={article} />;
}
