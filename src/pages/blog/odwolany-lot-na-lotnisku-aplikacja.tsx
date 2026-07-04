import { ClaimWingerAppSeoArticlePage } from "@/components/ClaimWingerAppSeoArticlePage";
import { getRequiredClaimWingerAppSeoArticle } from "@/lib/claimWingerAppSeoArticles";

const article = getRequiredClaimWingerAppSeoArticle("odwolany-lot-na-lotnisku-aplikacja");

export default function CancelledFlightAtAirportAppArticle() {
  return <ClaimWingerAppSeoArticlePage article={article} />;
}
