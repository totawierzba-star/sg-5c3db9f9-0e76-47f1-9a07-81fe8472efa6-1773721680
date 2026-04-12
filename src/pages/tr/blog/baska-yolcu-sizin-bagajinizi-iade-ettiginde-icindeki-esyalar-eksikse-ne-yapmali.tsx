import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "baska-yolcu-sizin-bagajinizi-iade-ettiginde-icindeki-esyalar-eksikse-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-returned-baggage-after-wrong-pickup-missing-items&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-returned-baggage-after-wrong-pickup-missing-items&utm_content=text_link";

export default function TrReturnedBaggageAfterWrongPickupMissingItemsArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Baska yolcu sizin bagajinizi iade ettiginde icindeki esyalar eksikse ne yapmali?"
        description="Baska yolcu sizin bagajinizi iade ettiginde icindeki esyalar eksikse ne yapmali? Turk yolcular icin wrong pickup zinciri, eksik icerik kaydi ve belge duzenini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Baska yolcu sizin bagajinizi iade ettiginde icindeki esyalar eksikse ne yapmali?",
            description:
              "Baska yolcu sizin bagajinizi iade ettiginde icindeki esyalar eksikse ne yapmali? Turk yolcular icin wrong pickup zinciri, eksik icerik kaydi ve belge duzenini anlatan net rehber.",
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
                name: "Bavul geri geldiyse ama icindeki bazi seyler eksikse ilk ne yapilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk adim, eksik icerigi hizla not etmek, bagajin geri teslim saatini kaydetmek ve wrong pickup dosyasini eksik esya kaydiyla birlikte ayni zincirde tutmaktir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu durum normal eksik esya dosyasiyla ayni mi okunur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kismen benzer, ama burada once wrong pickup, sonra gecikmeli geri donus ve en sonda eksik icerik vardir. Bu nedenle zaman cizgisi ve teslim baglami daha merkezi hale gelir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Geri teslim saati, eksik esya listesi, bagaj etiketi, boarding pass, ilk wrong pickup bildirimi ve varsa yazili aciklamalar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">
              Baska yolcu sizin bagajinizi iade ettiginde icindeki esyalar eksikse ne yapmali
            </span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Baska yolcu sizin bagajinizi iade ettiginde icindeki esyalar eksikse ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, wrong pickup zincirindeki en tatsiz varyantlardan biridir: bavul geri gelir ama acildiginda ya da
              kontrol edildiginde icinden bazi seylerin eksik oldugu anlasilir. Dogru analiz, sadece
              <strong> eksik esyaya</strong> degil, <strong>wrong pickup zincirine</strong>,
              <strong> geri teslim zamanina</strong> ve <strong>eksik icerigin bu teslim baglaminda nasil kayda
              girdigine</strong> bakar.
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
              <strong>Bavul geri geldiyse ama icindeki seyler eksikse, eksik icerigi hemen listelemek ve wrong pickup
              dosyasiyla birlikte kayda almak gerekir.</strong> Bu dosyada guc, geri teslim saati, eksik esya listesi
              ve ilk bildirim zincirinin ayni yerde tutulmasindan gelir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger missing items after return analizi"
            title="Wrong pickup sonrasi eksik icerikli donen bavul dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, bavul geri geldiginde sadece rahatlamak ve eksik icerigi duzensiz not etmektir. Wrong pickup, geri donus saati ve eksik esya listesi birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_returned_baggage_after_wrong_pickup_missing_items_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Geri teslim saatini net kaydetmek.</li>
                <li>Eksik esya listesini hemen hazirlamak.</li>
                <li>Wrong pickup bildirimiyle yeni eksik icerik kaydini ayni dosyada tutmak.</li>
                <li>Bagaj etiketini ve boarding passi saklamak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Bavul geldi diye onceki kayitlari kapatmak.</li>
                <li>Eksik icerigi genel ve daginik tarif etmek.</li>
                <li>Geri teslim saatini not etmemek.</li>
                <li>Wrong pickup ile eksik esya dosyasini birbirinden koparmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Neden bu sadece "eksik esya" dosyasi degildir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Cunku burada once teslim hatasi, sonra gecikmeli geri donus ve en sonda eksik icerik vardir. Yani eksik
                esya sorunu tek basina ortaya cikmamistir; wrong pickup zincirinin icinde gelmistir. Bu da zaman
                cizgisini her zamankinden daha degerli hale getirir.
              </p>
              <p>
                Bu nedenle geri donus anini ve bavulun icerik durumunu ayni anda net kaydetmek cok onemlidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ilk hangi bilgiler teyit edilmelidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilk wrong pickup bildirimi, geri teslim saati, bagaj etiketi, boarding pass ve eksik esya listesi ayni
                anda netlestirilmelidir. Boylece konu soyut bir "bir seyler eksik" anlatimi degil, teslim zincirine
                oturan somut bir dosya haline gelir.
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
                      placement: "tr_returned_baggage_after_wrong_pickup_missing_items_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  wrong pickup sonrasi eksik icerikli donen bavul dosyasini birlikte incelemek
                </a>{" "}
                surecin ne kadar temiz yonetildigini daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Hangi belge zinciri en degerlidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Geri teslim saati, eksik esya listesi, bagaj etiketi, boarding pass ve ilk wrong pickup bildirimi ayni
                timeline icinde tutulmalidir. Boylece problem soyut kalmaz; hem teslim hatasi hem de eksik icerik net bir
                zincir halinde gorunur.
              </p>
              <p>
                Guclu dosya, bavulun sadece eksik icerikle geldigini degil, bu eksigin hangi teslim baglaminda ortaya
                ciktigini gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, bavul geri geldigi icin onceki wrong pickup dosyasini kapatip yalnizca eksik esyalara
              bakmaktir. Asil guc, bu iki katmani ayni dosyada tutmaktan gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bavul geri geldiyse ama icindeki bazi seyler eksikse ilk ne yapilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Eksik icerigi hemen listelemek ve wrong pickup dosyasiyla birlikte kayda almak gerekir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu durum normal eksik esya dosyasiyla ayni mi okunur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Kismen benzer, ama burada once wrong pickup sonra gecikmeli geri donus ve en sonunda eksik icerik vardir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Geri teslim saati, eksik esya listesi, bagaj etiketi, boarding pass ve ilk bildirim kaydi birlikte
                  saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
