import { ClaimWingerAppSeoArticlePage } from "@/components/ClaimWingerAppSeoArticlePage";
import { getRequiredClaimWingerAppSeoArticle } from "@/lib/claimWingerAppSeoArticles";

const article = getRequiredClaimWingerAppSeoArticle("pobierz-claimwinger-google-play-android");

export default function DownloadClaimWingerGooglePlayAndroidArticle() {
  return <ClaimWingerAppSeoArticlePage article={article} />;
}
