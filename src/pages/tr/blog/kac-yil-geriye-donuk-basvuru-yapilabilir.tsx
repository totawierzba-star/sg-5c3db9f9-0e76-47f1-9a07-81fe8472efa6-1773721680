import Link from "next/link";
import { CheckCircle2, ClockArrowUp, Files, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "kac-yil-geriye-donuk-basvuru-yapilabilir";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-lookback-period&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-lookback-period&utm_content=text_link";

export default function TrLookbackPeriodArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Kac yil geriye donuk ucus icin basvuru yapilabilir?"
        description="Kac yil geriye donuk ucus icin tazminat basvurusu yapilabilir? Turk yolcular icin eski ucuslar, belge bulma ve claim gucunu anlatan rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Kac yil geriye donuk ucus icin basvuru yapilabilir?",
            description:
              "Kac yil geriye donuk ucus icin tazminat basvurusu yapilabilir? Turk yolcular icin eski ucuslar, belge bulma ve claim gucunu anlatan rehber.",
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
            datePublished: "2026-04-10",
            dateModified: "2026-04-10",
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
                name: "2-3 yil onceki ucus icin hala basvuru yapilabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bircok durumda kullanicilar daha eski ucuslar icin de hala dosya acilip acilamayacagini merak eder. Burada asil farki rota, ilgili hukuk ve elde kalan belgeler yaratir.",
                },
              },
              {
                "@type": "Question",
                name: "Eski ucuslarda en kritik sorun nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik sorun genelde belgelerdir. PNR, boarding pass, e-posta ve gercek aksaklik kayitlari ne kadar korunmussa dosya o kadar daha saglam okunur.",
                },
              },
              {
                "@type": "Question",
                name: "Belge eksikse dosya tamamen biter mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir, her zaman degil. Ama belge eksikligi eski ucuslarda claim gucunu ciddi etkileyebilir, bu nedenle elde kalan izlerin erken toparlanmasi cok onemlidir.",
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
            <span className="text-slate-900 dark:text-white">Geriye donuk basvuru</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Eski Ucus Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Kac yil geriye donuk ucus icin basvuru yapilabilir?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bircok kullanici problemli ucusu yasadigi anda degil, aylar hatta yillar sonra “acaba hala basvurabilir
              miyim?” diye dusunur. Bu noktada en buyuk hata, eski oldugu icin dosyanin otomatik olarak bittigini
              sanmaktir. Asil soru sudur:
              <strong> bu eski ucusta hala yeterli belge ve yeterli hukuki temas var mi?</strong>
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ClockArrowUp className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Bazi eski ucuslar icin hala basvuru imkani olabilir, ama tek bir evrensel yil sayisiyla dusunmek saglikli degildir.</strong>
              Asil farki, ilgili rota, hukuki baglam ve en cok da elde kalan belgeler yaratir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger eski ucus analizi"
            title="Eski ucus dosyanizin hala guclu olup olmadigini simdi kontrol edin"
            description="Bir cok yolcu eski ucusu tamamen kayip sayar. Oysa bazen kritik olan sure degil, hala elde hangi belge ve rota verisinin kaldigidir."
            ctaHref={CLAIM_URL}
            ctaLabel="Eski ucus dosyami kontrol et"
            placement="tr_lookback_period_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Eski dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>PNR ve rezervasyon kaydinin hala bulunmasi.</li>
                <li>Boarding pass veya e-posta zincirinin korunmasi.</li>
                <li>Aksakligi gosteren mesajlarin durmasi.</li>
                <li>Rota ve `nihai varis` etkisinin yeniden kurulabilmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Eski dosyayi zayiflatan seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Belge zincirinin tamamen kaybolmasi.</li>
                <li>Rota ve tasiyici yapisinin hatirlanmamasi.</li>
                <li>Yalnizca genel aniya dayanmak.</li>
                <li>Eski ucusu hic kontrol etmeden kapatmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Files className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Eski ucuslarda en kritik mesele genelde belgedir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Eski dosyalarda kullanici once yil sayisina odaklanir. Oysa pratikte en buyuk farki cogu zaman belge
                yaratir. Elinizde PNR, mail, boarding pass veya aksaklik mesajlari kaldiysa dosya cok daha net okunabilir.
              </p>
              <p>
                Buna karsilik hic veri kalmayan eski ucuslarda, teori olarak ilgi cekici gorunen dosya pratikte cok
                zayif olabilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Eski olmasi ile zayif olmasi ayni sey degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bircok kullanici 2-3 yil onceki ucusu otomatik olarak kapatir. Oysa bazen sorun zaman degil, dosyanin
                yeniden kurulup kurulamayacagidir. Rota, isleten tasiyici, aksaklik tipi ve `nihai varis` etkisi tekrar
                kurulabiliyorsa dosya hala anlamli olabilir.
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
                      placement: "tr_lookback_period_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  eski ucusun elde kalan verilerle yeniden okunmasi
                </a>{" "}
                “artik cok gec” hissinden daha gercekci bir sonuc verir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <ClockArrowUp className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Eski dosyada hizli hareket etmek hala fark yaratir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici eski ucusu hatirladigi anda en iyi adim, once ne kaldigini toplamak olur: e-posta aramalari,
                banka kaydi, rezervasyon numarasi, uygulama ekranlari veya takvim notlari. Cunku zaman gectikce veri
                daginikligi daha da artar.
              </p>
              <p>
                Eski dosyalarda kayip zaman kadar kayip belge de risk yaratir; bu nedenle farki genelde ilk kontrol
                asamasi belirler.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, eski ucusun otomatik olarak “artik imkansiz” oldugunu sanmaktir. Oysa asıl soru, dosyanin
              hala kurulup kurulamayacagi ve elde ne kadar saglam veri kaldigidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  2-3 yil onceki ucus icin hala basvuru yapilabilir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bircok durumda kullanicilar daha eski ucuslar icin de hala dosya acilip acilamayacagini merak eder.
                  Burada asil farki rota, ilgili hukuk ve elde kalan belgeler yaratir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Eski ucuslarda en kritik sorun nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik sorun genelde belgelerdir. PNR, boarding pass, e-posta ve gercek aksaklik kayitlari ne kadar
                  korunmussa dosya o kadar daha saglam okunur.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Belge eksikse dosya tamamen biter mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir, her zaman degil. Ama belge eksikligi eski ucuslarda claim gucunu ciddi etkileyebilir, bu nedenle
                  elde kalan izlerin erken toparlanmasi cok onemlidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
