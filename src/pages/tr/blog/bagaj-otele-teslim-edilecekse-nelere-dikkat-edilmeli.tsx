import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-otele-teslim-edilecekse-nelere-dikkat-edilmeli";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-hotel-delivery&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-hotel-delivery&utm_content=text_link";

export default function TrBaggageHotelDeliveryArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj otele teslim edilecekse nelere dikkat edilmeli?"
        description="Bagaj otele teslim edilecekse nelere dikkat edilmeli? Turk yolcular icin resepsiyon, guest name, check-out zamani ve teslim zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj otele teslim edilecekse nelere dikkat edilmeli?",
            description:
              "Bagaj otele teslim edilecekse nelere dikkat edilmeli? Turk yolcular icin resepsiyon, guest name, check-out zamani ve teslim zincirini anlatan net rehber.",
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
                name: "Bagaj otele birakilacaksa resepsiyona ne soylenmeli?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik sey guest name, oda bilgisi varsa oda numarasi, telefon numarasi ve otelin bagaj kabul prosedurunun netlesmesidir.",
                },
              },
              {
                "@type": "Question",
                name: "Check-out zamani yakinsa ne yapmak gerekir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bu durumda teslim adresi ve zamanlamasi tekrar teyit edilmelidir. Cunku check-out sonrasi otelde kalmiyorsaniz teslimin bosa cikma riski artar.",
                },
              },
              {
                "@type": "Question",
                name: "Resepsiyon bagaji teslim alirsa hangi kayitlar saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Teslim saati, teslim alan kisi veya resepsiyon notu, tracking statusu ve varsa telefon ya da e-posta kaydi saklanmalidir.",
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
              Bagaj otele teslim edilecekse nelere dikkat edilmeli
            </span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj otele teslim edilecekse nelere dikkat edilmeli?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, ozellikle tatil veya kisa seyahatte cok kritik bir senaryodur: bagaj bulunmustur, ama size dogrudan
              degil otele gonderecektir. Dogru analiz, sadece "otele gelsin yeter" demekten degil, <strong>resepsiyonun
              bagaji nasil kabul ettigini bilmekten</strong>, <strong>guest name ve check-out bilgisini net
              vermekten</strong> ve <strong>teslim anini sonradan kanitlayabilecek bir zincir kurmaktan</strong>
              dogar.
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
              <strong>Bagaj otele teslim edilecekse en kritik sey, teslim bilgisinin otel gercegine gore duzgun kurulmasidir.</strong>
              Yani resepsiyon kabul ediyor mu, guest name dogru mu, check-out ne zaman ve teslimi kim kayda gececek
              sorulari netlesmelidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger hotel delivery analizi"
            title="Otele yonelecek bagaj teslim surecini hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, otelin bagaji otomatik ve sorunsuz kabul edecegini varsaymaktir. Teslim bilgisi, resepsiyon akisi ve check-out zamani birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim surecimi kontrol et"
            placement="tr_baggage_hotel_delivery_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Guest name ve otel adini tam ve net vermek.</li>
                <li>Resepsiyonun bagaj kabul edip etmedigini teyit etmek.</li>
                <li>Check-out tarihini ve saatini tekrar kontrol etmek.</li>
                <li>Teslim alan kisi veya resepsiyon bilgisini kayda gecirmek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece otel adini verip guest name detayini atlamak.</li>
                <li>Check-out saatini kurye sureciyle eslestirmemek.</li>
                <li>Resepsiyon notu veya teslim saati kaydi almamak.</li>
                <li>Otelde bagaji kimin teslim aldigini hic ogrenmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Otele teslim neden ev tesliminden farklidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Otel tesliminde bagaji sizin yerinize resepsiyon veya baska bir otel gorevlisi teslim alabilir. Bu da
                sureci kolaylastirabilir, ama ayni anda yeni bir belirsizlik yaratir: teslim size mi oldu, yoksa
                otelde bir noktaya mi birakildi? Bu nedenle otel teslimi, isim ve kayit disiplini istiyen ayri bir
                senaryodur.
              </p>
              <p>
                Burada asil soru, bagajin sadece binaya ulasmasi degil, size guvenli ve izlenebilir sekilde
                teslim edilmesidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Guest name, oda bilgisi ve check-out zamani neden kritik?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ozellikle buyuk otellerde veya kisa konaklamalarda isim uyumsuzlugu ve check-out zamani ciddi sorun
                yaratabilir. Bagaj siz ayrildiktan sonra otele gelirse veya resepsiyon ismi bulamazsa surec yeniden
                uzayabilir. Bu yuzden kurye akisi ile konaklama akisinin ayni cizgide bulusturulmasi gerekir.
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
                      placement: "tr_baggage_hotel_delivery_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  otel teslimini ve belge zincirini birlikte incelemek
                </a>{" "}
                surecin neden aksayabilecegini daha net gosterebilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Teslim otele yapildiysa hangi kayitlar saklanmali?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Tracking statusu, teslim saati, resepsiyondan alinan bilgi, varsa teslim alan kisinin adi ve telefon
                ya da e-posta zinciri ayni dosyada tutulmalidir. Cunku sonradan sorun cikarsa "otele birakilmisti"
                demek tek basina yeterli olmaz; o teslimin ne zaman ve kime yapildigini gosteriyor olmaniz gerekir.
              </p>
              <p>
                Guclu dosya, bagajin otelin kapisina kadar geldigini degil, teslimin izlenebilir oldugunu gosteren
                dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, "otel var, nasil olsa resepsiyon halleder" diye dusunmektir. Oysa guest name,
              check-out saati ve teslim kaydi net degilse en son asamada bile yeni karisikliklar cikabilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj otele birakilacaksa resepsiyona ne soylenmeli?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik sey guest name, oda bilgisi varsa oda numarasi, telefon numarasi ve otelin bagaj kabul
                  prosedurunun netlesmesidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Check-out zamani yakinsa ne yapmak gerekir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bu durumda teslim adresi ve zamanlamasi tekrar teyit edilmelidir. Cunku check-out sonrasi otelde
                  kalmiyorsaniz teslimin bosa cikma riski artar.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Resepsiyon bagaji teslim alirsa hangi kayitlar saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Teslim saati, teslim alan kisi veya resepsiyon notu, tracking statusu ve varsa telefon ya da e-posta
                  kaydi saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
