import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "check-out-sonrasi-otele-gelen-bagaj-ne-olur";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-arrives-after-checkout&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-arrives-after-checkout&utm_content=text_link";

export default function TrBaggageAfterCheckoutArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Check-out sonrasi otele gelen bagaj ne olur?"
        description="Check-out sonrasi otele gelen bagaj ne olur? Turk yolcular icin teslim sorumlulugu, yeni adres, resepsiyon notu ve bagaj zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Check-out sonrasi otele gelen bagaj ne olur?",
            description:
              "Check-out sonrasi otele gelen bagaj ne olur? Turk yolcular icin teslim sorumlulugu, yeni adres, resepsiyon notu ve bagaj zincirini anlatan net rehber.",
            author: { "@type": "Organization", name: "ProblemLot.com" },
            publisher: {
              "@type": "Organization",
              name: "ProblemLot.com",
              logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" },
            },
            datePublished: "2026-04-12",
            dateModified: "2026-04-12",
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://problemlot.com/tr/blog/${SLUG}` },
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
                name: "Check-out sonrasi gelen bagaji otel saklamak zorunda midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bu tamamen otomatik degildir. Otelin politikasi, resepsiyon notu ve teslimin kime yapildigi cok onemlidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu durumda yeni adres vermek gerekir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, eger artik otelde kalmiyorsaniz yeni adres veya yeni teslim plani netlestirilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi kayitlar saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Check-out saati, tracking screeni, resepsiyonla gorusme notu, yeni adres bilgisi ve teslimi yoneten tarafla yazismalar saklanmalidir.",
                },
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/tr" className="hover:text-red-600 dark:hover:text-red-400">Ana sayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/tr/blog" className="hover:text-red-600 dark:hover:text-red-400">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">Check-out sonrasi otele gelen bagaj ne olur</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Check-out sonrasi otele gelen bagaj ne olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, tatil bitiminde panik yaratan cok pratik bir senaryodur: siz otelden ayrilmissinizdir ama valiz daha
              sonra otele ulasir. Dogru analiz, sadece "otel saklar herhalde" demekten degil, <strong>otelin kabul
              politikasini</strong>, <strong>yeni teslim planinin ne kadar hizli kuruldugunu</strong> ve
              <strong> check-out sonrasi sorumlulugun nasil kayda baglandigini</strong> anlamaktan dogar.
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
              <strong>Check-out sonrasi gelen bagaj otomatik olarak size ulasmis sayilmaz.</strong> Bu noktada otelin
              neyi kabul ettigi, yeni adresin ne zaman verildigi ve teslimin nasil yeniden planlandigi kritik hale gelir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger post-check-out analizi"
            title="Check-out sonrasi uzayan bagaj teslim surecini hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, otelin valizi sinirsiz sure saklayacagini varsaymaktir. Check-out saati, yeni adres ve teslim zinciri birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_baggage_arrives_after_checkout_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Check-out saatini ve tarihini net saklamak.</li>
                <li>Otelin valizi kabul edip etmedigini yazili teyit etmek.</li>
                <li>Yeni adres veya yeni teslim planini hizla iletmek.</li>
                <li>Tracking screeni ve resepsiyon notlarini ayni dosyada tutmak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Check-out sonrasi hala oteli aktif teslim noktasi sanmak.</li>
                <li>Yeni adres vermeyi geciktirmek.</li>
                <li>Otelin valizi aldigina dair teyit istememek.</li>
                <li>Eski ve yeni teslim planini karistirmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">1. Check-out sonrasi neden durum hemen karmasiklasir?</h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Otel sizin icin aktif konaklama noktasi olmaktan ciktigi anda teslim mantigi degisir. Bagaj bina icine
                ulassa bile artik bunu size ulastiracak koordinator ayrilasabilir. Bu da "otel aldi mi, sakliyor mu,
                size nasil verecek?" sorularini beraber getirir.
              </p>
              <p>
                Yani burada sorun yalnizca bagajin nerede oldugu degil, kimin sorumlulugunda devam ettigidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">2. Yeni plan nasil kurulmalidir?</h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En guclu yol, eski otel bilgisini acikca kapatip yeni adresi veya yeni teslim seklini netlestirmektir.
                Ucus sonrasi baska sehre gectiyseniz ya da havalimanina donecekseniz bu bilgi ayni gun iletilmelidir.
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
                      placement: "tr_baggage_arrives_after_checkout_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  check-out sonrasi teslim zincirini birlikte incelemek
                </a>{" "}
                surecin neden uzadigini daha net gosterebilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En kritik belge hangileridir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Check-out saati, trackingte gorunen teslim zamani, resepsiyonla yapilan teyit ve yeni adres bilgisi
                ayni dosyada tutulmalidir. Bu zincir olmadan surec kolayca "otel ile yolcu arasinda bir yerde"
                belirsizlige doner.
              </p>
              <p>
                Guclu dosya, eski teslim noktasindan yeni noktaya gecisin ne zaman yapildigini gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, check-out sonrasinda da her seyin eski otel uzerinden kendiliginden yuruyecigini
              sanmaktir. Oysa bu anda teslim zinciri yeniden kurulmalidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Check-out sonrasi gelen bagaji otel saklamak zorunda midir?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bu tamamen otomatik degildir. Otelin politikasi, resepsiyon notu ve teslimin kime yapildigi cok onemlidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Bu durumda yeni adres vermek gerekir mi?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet, eger artik otelde kalmiyorsaniz yeni adres veya yeni teslim plani netlestirilmelidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Hangi kayitlar saklanmali?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Check-out saati, tracking screeni, resepsiyonla gorusme notu, yeni adres bilgisi ve teslimi yoneten tarafla yazismalar saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
