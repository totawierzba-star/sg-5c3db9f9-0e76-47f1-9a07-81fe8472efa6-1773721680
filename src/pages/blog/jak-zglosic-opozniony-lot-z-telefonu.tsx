import { ClaimWingerAppSeoArticlePage } from "@/components/ClaimWingerAppSeoArticlePage";
import { getRequiredClaimWingerAppSeoArticle } from "@/lib/claimWingerAppSeoArticles";

const article = getRequiredClaimWingerAppSeoArticle("jak-zglosic-opozniony-lot-z-telefonu");

export default function ReportDelayedFlightFromPhoneArticle() {
  return <ClaimWingerAppSeoArticlePage article={article} />;
}
