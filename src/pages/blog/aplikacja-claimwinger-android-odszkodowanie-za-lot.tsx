import { ClaimWingerAppSeoArticlePage } from "@/components/ClaimWingerAppSeoArticlePage";
import { getRequiredClaimWingerAppSeoArticle } from "@/lib/claimWingerAppSeoArticles";

const article = getRequiredClaimWingerAppSeoArticle(
  "aplikacja-claimwinger-android-odszkodowanie-za-lot",
);

export default function ClaimWingerAndroidAppArticle() {
  return <ClaimWingerAppSeoArticlePage article={article} />;
}
