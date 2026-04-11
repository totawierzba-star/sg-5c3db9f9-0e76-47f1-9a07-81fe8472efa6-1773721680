import Link from "next/link";
import {
  CheckCircle2,
  ClockArrowUp,
  Files,
  ShieldAlert,
  Sparkles,
  XCircle,
} from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "2-3-yil-onceki-ucus-icin-basvuru-yapilabilir-mi";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-old-flight-2-3-years&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-old-flight-2-3-years&utm_content=text_link";

export default function TrTwoThreeYearsOldFlightArticle() {
  return (
    <LayoutTr>
      <SEO
        title="2-3 yil onceki ucus icin basvuru yapilabilir mi?"
        description="2-3 yil onceki ucus icin basvuru yapilabilir mi? Turk yolcular icin eski ucus dosyasi, belge durumu ve claim gucunu anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "2-3 yil onceki ucus icin basvuru yapilabilir mi?",
            description:
              "2-3 yil onceki ucus icin basvuru yapilabilir mi? Turk yolcular icin eski ucus dosyasi, belge durumu ve claim gucunu anlatan net rehber.",
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
                  text: "Bazi dosyalarda evet. Eski ucusun otomatik olarak bittiğini varsaymak dogru degildir. Asil farki, elde kalan belgeler, rota yapisi ve dosyanin hala okunabilir olup olmamasi yaratir.",
                },
              },
              {
                "@type": "Question",
                name: "Eski ucuslarda en kritik sorun nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik sorun genelde belge kaybidir. PNR, e-posta, boarding pass, uygulama bildirimleri ve aksaklik zaman cizelgesi ne kadar korunmussa dosya o kadar daha anlamli hale gelir.",
                },
              },
              {
                "@type": "Question",
                name: "Belge eksikse dosya tamamen biter mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir, her zaman degil. Ama belge eksikligi eski ucuslarda claim gucunu ciddi sekilde etkiler. Bu nedenle elde kalan izlerin erken toplanmasi cok onemlidir.",
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
              2-3 yil onceki ucus icin basvuru yapilabilir mi?
            </span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Eski Ucus Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              2-3 yil onceki ucus icin basvuru yapilabilir mi?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bircok kullanici problemli ucusu yasadigi anda degil, cok sonra hatirlar. Bu noktada en yaygin duygu
              sudur: <strong>“artik cok gec kalmis olabilirim.”</strong> Oysa 2-3 yil onceki bir ucus, bazen hala
              anlamli bir dosya olabilir. Asil mesele zaman kadar, elde ne kadar veri kaldigidir.
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
              <strong>2-3 yil onceki bir ucus icin bazi durumlarda hala basvuru yapilabilir.</strong> Ama burada tek
              basina yil sayisi degil; elde kalan belgeler, rota yapisi ve olayin tekrar kurulup kurulamayacagi belirleyici olur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger eski ucus kontrolu"
            title="2-3 yil onceki ucus dosyanizin hala guclu olup olmadigini kontrol edin"
            description="Eski ucus otomatik olarak kayip sayilmaz. ClaimWinger ile elinizde kalan PNR, e-posta, rota ve aksaklik bilgileri uzerinden dosyanin ilk gucunu hizla gorun."
            ctaHref={CLAIM_URL}
            ctaLabel="Eski ucus dosyami kontrol et"
            placement="tr_old_flight_2_3_years_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>PNR ve rezervasyon detayinin hala bulunmasi.</li>
                <li>E-posta, SMS veya uygulama bildirimlerinin durmasi.</li>
                <li>Boarding pass veya check-in izlerinin kalmis olmasi.</li>
                <li>Rota ve `nihai varis` etkisinin yeniden kurulabilmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Dosyayi zayiflatan seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Belge zincirinin neredeyse tamamen kaybolmasi.</li>
                <li>Rota ve tasiyici yapisinin hatirlanmamasi.</li>
                <li>Yalnizca genel hatiraya dayanmak.</li>
                <li>Eski ucusu hic kontrol etmeden kapatmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Files className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. 2-3 yil onceki ucusta asıl mesele genelde sure degil, belge olur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici ilk olarak takvime bakar. Ama pratikte daha kritik soru sudur: bu eski ucusa dair hala ne
                kaldi? Eger PNR, mail, boarding pass, app ekranlari veya aksaklik kayitlari duruyorsa, dosya hala
                yeniden okunabilir.
              </p>
              <p>
                Buna karsilik hic veri kalmayan bir olayda, teorik olarak ilgi cekici gorunen dosya pratikte cok daha
                zayif olabilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. “Eski” ile “bitmis” ayni sey degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En yaygin hata, 2-3 yil onceki ucusu hic kontrol etmeden kapatmaktir. Oysa bazen sorun zaman degil,
                dosyanin yeniden kurulup kurulamayacagidir. Rota, isleten tasiyici, aksaklik tipi ve `nihai varis`
                etkisi tekrar kurulabiliyorsa dosya hala anlamli olabilir.
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
                      placement: "tr_old_flight_2_3_years_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  elde kalan verilerle eski ucusun yeniden okunmasi
                </a>{" "}
                otomatik olarak vazgecmekten daha saglikli bir ilk adimdir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <ClockArrowUp className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Eski dosyada hizli toparlama hala fark yaratir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici eski ucusu hatirladigi anda en iyi adim, once ne kaldigini toplamak olur: e-posta aramalari,
                banka kaydi, rezervasyon numarasi, uygulama ekranlari veya takvim notlari. Zaman gectikce veri daginikligi
                artar, bu yuzden ilk kontrol asamasi cok degerlidir.
              </p>
              <p>
                Eski dosyalarda kayip zaman kadar kayip belge de risk yaratir; bu nedenle farki genelde ilk toparlama
                asamasi belirler.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, 2-3 yil onceki ucusu hic incelemeden “artik cok gec” diye kapatmaktir. Bazen dosyanin
              kaderini takvim degil, elde kalan belge zinciri belirler.
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
                  Bazi dosyalarda evet. Eski ucusun otomatik olarak bittiğini varsaymak dogru degildir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Eski ucuslarda en kritik sorun nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik sorun genelde belge kaybidir. PNR, e-posta ve olay zaman cizelgesi ne kadar korunmussa dosya
                  o kadar daha anlamli hale gelir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Belge eksikse dosya tamamen biter mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir, her zaman degil. Ama belge eksikligi eski ucuslarda claim gucunu ciddi sekilde etkiler.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
