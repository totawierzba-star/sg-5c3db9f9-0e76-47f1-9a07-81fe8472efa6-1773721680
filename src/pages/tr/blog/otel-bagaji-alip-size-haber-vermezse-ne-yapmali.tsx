import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "otel-bagaji-alip-size-haber-vermezse-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-hotel-received-bag-no-notice&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-hotel-received-bag-no-notice&utm_content=text_link";

export default function TrHotelReceivedBagNoNoticeArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Otel bagaji alip size haber vermezse ne yapmali?"
        description="Otel bagaji alip size haber vermezse ne yapmali? Turk yolcular icin resepsiyon kaydi, teslim saati, vardiya degisimi ve belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Otel bagaji alip size haber vermezse ne yapmali?",
            description:
              "Otel bagaji alip size haber vermezse ne yapmali? Turk yolcular icin resepsiyon kaydi, teslim saati, vardiya degisimi ve belge zincirini anlatan net rehber.",
            author: {
              "@type": "Organization",
              name: "ProblemLot.com",
            },
            publisher: {
              "@type": "Organization",
              name: "ProblemLot.com",
              logo: {
                "@type": "ImageObject",
                url: "https://problemlot.com/og-image.png",
              },
            },
            datePublished: "2026-04-12",
            dateModified: "2026-04-12",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://problemlot.com/tr/blog/${SLUG}`,
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Otel bagaji aldiysa ama size haber vermediyse sorun kapanmis mi sayilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Fiili teslim bilgisi size ulasmadiysa sorun pratikte devam eder. Teslim saati, teslim alan kisi ve resepsiyon zinciri yine netlestirilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu durumda ilk kimle gorusmek gerekir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Resepsiyon, vardiya sorumlusu ve bagaji teslim alan personel bilgisi ilk kontrol edilmesi gereken noktalardir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tracking ekran goruntusu, teslim saati, resepsiyonla gorusme notlari, varsa ic notlar ve arama ya da e-posta zinciri saklanmalidir.",
                },
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/tr" className="hover:text-red-600 dark:hover:text-red-400">
              Ana sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/tr/blog" className="hover:text-red-600 dark:hover:text-red-400">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">Otel bagaji alip size haber vermezse ne yapmali</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Otel bagaji alip size haber vermezse ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, bagaj teslim zincirindeki en sessiz ama en kafa karistirici senaryolardan biridir: valiz otele
              gelmistir, resepsiyon onu teslim almistir, ama bu bilgi size ulasmamistir. Dogru analiz, sadece
              "kimse haber vermedi" demekten degil, <strong>teslimin ne zaman ve kime yapildigini bulmaktan</strong>,
              <strong> vardiya ve resepsiyon akisini kontrol etmekten</strong> ve <strong>bu iletisim kopuklugunu
              timeline icinde net gostermekten</strong> dogar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-12</span>
              <span>&bull;</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Otel valizi almis olsa bile, size haber ulasmadiysa problem kapanmis sayilmaz.</strong> Bu durumda
              teslim saati, teslim alan kisi ve resepsiyon icindeki bilgi akisi hizla netlestirilmelidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger hotel notice analizi"
            title="Otele ulasan ama size bildirilmemis bagaj dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, valiz otelde olduguna gore isin kapandigini sanmaktir. Teslim saati, resepsiyon kaydi ve fiili haberlesme zinciri birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_hotel_received_bag_no_notice_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Trackingteki teslim zamanini kaydetmek.</li>
                <li>Resepsiyonla gorusmenin tarih ve saatini not etmek.</li>
                <li>Bagaji teslim alan kisiyi veya vardiyayi sormak.</li>
                <li>Ic not, telefon veya e-posta izini ayni dosyada tutmak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Haber verilmediyse valiz hala yolda sanmak.</li>
                <li>Resepsiyonun ilk cevabiyla yetinmek.</li>
                <li>Vardiya degisimini hesaba katmamak.</li>
                <li>Teslim screeni ile fiili haberlesmeyi eslestirmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu durum neden ayri bir senaryodur?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Burada lojistik taraf teknik olarak tamamlanmis olabilir; yani bagaj bir teslim noktasina ulasmistir.
                Ama bilgi size ulasmadigi icin, pratikte teslim gercegi ile sizin deneyiminiz arasinda bir kopukluk
                vardir. Bu da dosyayi sirf "teslim oldu" diye kapatmayi riskli hale getirir.
              </p>
              <p>
                Asil sorun, valizin nerede oldugundan cok, bu bilginin neden size aktarilmadigidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Resepsiyon tarafinda hangi noktalar kontrol edilmeli?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Vardiya degisimi, bagaj odasi, teslim alan personel, ic not sistemi ve size ulasilmaya calisilip
                calisilmadigi tek tek netlestirilmelidir. Cunku bazen valiz gercekten resepsiyondadir ama bilgi bir
                noktada takilir.
              </p>
              <p>
                Bu noktada{" "}
                <a
                  href={CLAIM_URL_TEXT}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    pushClaimWingerEvent("claimwinger_cta_click", {
                      locale: "tr",
                      placement: "tr_hotel_received_bag_no_notice_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  otel teslim kaydini ve haberlesme zincirini birlikte incelemek
                </a>{" "}
                kopuklugun tam yerini daha net gosterebilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En degerli belge zinciri hangisidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Trackingteki teslim saati, resepsiyonla gorusme saati, kimin teslim aldigi ve size ne zaman bilgi
                verildigi ayni timeline'da tutulmalidir. Boylece sorun soyut bir "kimse haber vermedi" durumundan
                cikarak olgusal bir teslim-kopukluk dosyasina donusur.
              </p>
              <p>
                Guclu dosya, teslimin oldugu anla yolcunun bunu ogrendigi an arasindaki farki gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, haber gelmediyse valiz kesin hala yolda diye dusunmektir. Bazen sorun artik tasimada
              degil, tamamen hotel icindeki iletisim kopuklugundadir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Otel bagaji aldiysa ama size haber vermediyse sorun kapanmis mi sayilir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Fiili teslim bilgisi size ulasmadiysa sorun pratikte devam eder. Teslim saati, teslim alan kisi ve resepsiyon zinciri yine netlestirilmelidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu durumda ilk kimle gorusmek gerekir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Resepsiyon, vardiya sorumlusu ve bagaji teslim alan personel bilgisi ilk kontrol edilmesi gereken noktalardir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Tracking ekran goruntusu, teslim saati, resepsiyonla gorusme notlari, varsa ic notlar ve arama ya da e-posta zinciri saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
