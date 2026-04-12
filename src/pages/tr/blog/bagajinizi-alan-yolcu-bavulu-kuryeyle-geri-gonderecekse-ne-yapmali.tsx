import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagajinizi-alan-yolcu-bavulu-kuryeyle-geri-gonderecekse-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-passenger-returning-bag-by-courier&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-passenger-returning-bag-by-courier&utm_content=text_link";

export default function TrPassengerReturningBagByCourierArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagajinizi alan yolcu bavulu kuryeyle geri gonderecekse ne yapmali?"
        description="Bagajinizi alan yolcu bavulu kuryeyle geri gonderecekse ne yapmali? Turk yolcular icin wrong pickup, tracking, teslim kaniti ve resmi kayit zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagajinizi alan yolcu bavulu kuryeyle geri gonderecekse ne yapmali?",
            description:
              "Bagajinizi alan yolcu bavulu kuryeyle geri gonderecekse ne yapmali? Turk yolcular icin wrong pickup, tracking, teslim kaniti ve resmi kayit zincirini anlatan net rehber.",
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
                name: "Diger yolcu bavulu kuryeye verirse dosya kapanir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Kurye sureci baslamis olabilir ama resmi bagaj dosyasi, tracking numarasi ve teslim kaniti olusmadan dosyanin kapandigi varsayilmamalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Tracking numarasi olmadan beklemek mantikli mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zayif bir yaklasimdir. Tracking numarasi, gonderim saati ve kimin teslim ettigine dair iz olmadan surec fazla sozlu kalir.",
                },
              },
              {
                "@type": "Question",
                name: "Kurye teslim ettigini soyler ama bavul size ulasmazsa ne olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bu durumda teslim kaniti, adres bilgisi, kurye kaydi ve resmi dosya numarasi kritik hale gelir. Sorun artik sadece wrong pickup degil, ayni zamanda eksik teslim zinciri haline gelir.",
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
              Bagajinizi alan yolcu bavulu kuryeyle geri gonderecekse ne yapmali
            </span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagajinizi alan yolcu bavulu kuryeyle geri gonderecekse ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Wrong pickup dosyalarinda bazen en hizli cozum, bavulu alan yolcunun onu kurye ile geri gondermesidir.
              Dogru analiz, sadece <strong>kurye vaadine</strong> degil, <strong>tracking numarasina</strong>,
              <strong> resmi dosyanin acik kalmasina</strong> ve <strong>teslim kanitinin nasil kurulacagina</strong>
              bakar.
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
              <strong>Kurye ile geri gonderim mantikli olabilir, ama resmi wrong pickup dosyasinin yerine gecmemelidir.</strong>
              En guclu model, tracking numarasi, gonderim saati ve teslim kanitini resmi kayitla ayni zincirde tutmaktir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger courier return analizi"
            title="Diger yolcu bavulu kuryeyle gonderecekse dosyanizi resmi zeminde tutun"
            description="Bu tip dosyalarda en buyuk hata, kargo numarasi gelince sorunun tamamen kapandigini sanmaktir. Asil kritik nokta, tracking, adres ve teslim kanitinin resmi bagaj dosyasiyla birlikte okunmasidir."
            ctaHref={CLAIM_URL}
            ctaLabel="Wrong pickup dosyami kontrol et"
            placement="tr_passenger_returning_bag_by_courier_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Tracking numarasini ve gonderim saatini yazili almak.</li>
                <li>Bagaj etiketi ve dosya numarasini acik tutmak.</li>
                <li>Adres bilgisini ve teslim alacak kisiyi netlestirmek.</li>
                <li>Teslim sonrasi imza, foto veya kurye ekran kaydini saklamak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece sozlu "gonderdim" sozuyle yetinmek.</li>
                <li>Tracking numarasi olmadan beklemek.</li>
                <li>Yanlis adres veya eksik alici bilgisini son ana birakmak.</li>
                <li>Bavul size ulasmadan dosyayi kapatilmis saymak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Neden kurye vaadi tek basina yeterli degildir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Cunku "yarin kargoya verecegim" ile gercek gonderim ayni sey degildir. Wrong pickup dosyalarinda en
                guclu ayrim, soylenen ile gercekten kayda gecen teslim asamasini ayirmaktir. Tracking numarasi ve
                gonderim saati olmadan surec hala fazla soyut kalir.
              </p>
              <p>
                Bu nedenle resmi bagaj kaydi kapanmamis olmali ve kurye akisinin her adimi yazili iz uretmelidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Gonderim oncesi hangi seyler netlestirilmelidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gonderimden once alici adresi, telefon, teslim alacak kisi, takip numarasinin nasil paylasilacagi ve
                bavulun hangi sirketle gonderilecegi net olmali. Mumkunse bu bilgiler havayolu, bagaj ofisi veya e-posta
                zinciri icinde teyit edilmelidir. Boylece olay iki kisi arasinda kaybolmaz.
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
                      placement: "tr_passenger_returning_bag_by_courier_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  kurye ile geri gonderilen bavul dosyasini birlikte incelemek
                </a>{" "}
                teslim zincirinin hangi halkasinin zayif kaldigini hizla gosterir.
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
                Bagaj etiketi, boarding pass, resmi bagaj referansi, tracking numarasi, gonderim saati, teslim ekrani ve
                aliciya ulasim kaniti ayni timeline icinde tutulmalidir. Boylece dosya, sadece "biri bavulu kargoladi"
                seviyesinde kalmaz.
              </p>
              <p>
                Guclu dosya, hem wrong pickup olayini hem de kurye ile geri teslim asamasini birlikte gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, tracking numarasi gelmeden once bile dosyanin cozuldugunu varsaymaktir. Diger buyuk
              hata ise bavul size fiilen ulasmadan resmi zinciri kapatmaktir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Diger yolcu bavulu kuryeye verirse dosya kapanir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Tracking ve teslim kaniti olmadan dosyanin kapandigi varsayilmamalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Tracking numarasi olmadan beklemek mantikli mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zayif bir yaklasimdir. Gonderim saati ve takip izi olmadan surec fazla sozlu kalir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Kurye teslim ettigini soyler ama bavul size ulasmazsa ne olur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bu durumda teslim kaniti, adres bilgisi, kurye kaydi ve resmi dosya numarasi birlikte kritik hale gelir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
