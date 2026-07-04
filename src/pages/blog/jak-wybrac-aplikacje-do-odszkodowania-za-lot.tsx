import { ClaimWingerAppSeoArticlePage } from "@/components/ClaimWingerAppSeoArticlePage";
import { getRequiredClaimWingerAppSeoArticle } from "@/lib/claimWingerAppSeoArticles";

const article = getRequiredClaimWingerAppSeoArticle(
  "jak-wybrac-aplikacje-do-odszkodowania-za-lot",
);

export default function HowToChooseFlightCompensationAppArticle() {
  return <ClaimWingerAppSeoArticlePage article={article} />;
}
