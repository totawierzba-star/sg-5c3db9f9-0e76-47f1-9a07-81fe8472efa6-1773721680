import Link from "next/link";
import { CheckCircle2, Clock3, MapPin, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "amsterdam-istanbul-ucusunda-gecikme-olursa-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-amsterdam-istanbul-delay&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-amsterdam-istanbul-delay&utm_content=text_link";

export default function TrAmsterdamIstanbulDelayArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Amsterdam-Istanbul ucusunda gecikme olursa ne yapilmali?"
        description="Amsterdam-Istanbul ucusunda gecikme olursa ne yapilmali? Turk yolcular icin nihai varis, belge duzeni ve tazminat mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Amsterdam-Istanbul ucusunda gecikme olursa ne yapilmali?",
            description:
              "Amsterdam-Istanbul ucusunda gecikme olursa ne yapilmali? Turk yolcular icin nihai varis, belge duzeni ve tazminat mantigini anlatan net rehber.",
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
            datePublished: "2026-04-09",
            dateModified: "2026-04-09",
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
                name: "Amsterdam-Istanbul hattinda gecikme olursa ilk neye bakilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk olarak Istanbul'a nihai varis zamanina, havayolunun verdigi bilgilere ve varsa yeni rota ya da saat degisikligi kayitlarina bakilmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Sadece kalkis gecikmesi yeterli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Asil agirlik, yolcunun Istanbul'a gercekte ne zaman vardiginda ortaya cikar.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmalidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Boarding pass, PNR, mesajlar, uygulama ekranlari, yeni saat bilgileri ve Istanbul'a gercek varis zamanini gosteren kayitlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Amsterdam-Istanbul gecikme rehberi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Rota Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Amsterdam-Istanbul ucusunda gecikme olursa ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu rota, Avrupa'dan Turkiye'ye donen yolcular icin hem duygusal hem de pratik olarak yuksek onem tasir.
              Kullanici genelde hemen iki sey sorar: “Simdi ne yapayim?” ve “Bu dosya ne kadar guclu olabilir?” Dogru
              analiz, <strong>Istanbul'a nihai varis</strong>, <strong>hava yolu mesajlari</strong> ve
              <strong> belge duzeni</strong> birlikte okundugunda yapilir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Amsterdam-Istanbul hattinda gecikmede ilk odak noktasi, Istanbul'a gercek varis zamanidir.</strong>
              Sadece kalkis panosundaki gecikme degil, final etkisi ve dosyanin nasil belgelendigi sonuc belirler.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Amsterdam-Istanbul analizi"
            title="Amsterdam-Istanbul gecikme dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu hatta en buyuk hata, sadece ilk saat farkina bakmaktir. Oysa final varis, mesajlasma ve saat degisimlerinin tam kaydi daha buyuk fark yaratir."
            ctaHref={CLAIM_URL}
            ctaLabel="Amsterdam-Istanbul dosyami kontrol et"
            placement="tr_amsterdam_istanbul_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Istanbul'a nihai varista net zaman kaybi olusmasi.</li>
                <li>Mesajlar ve uygulama bildirimlerinin korunmasi.</li>
                <li>Yeni saat veya rota bilgisi varsa bunun saklanmasi.</li>
                <li>Boarding pass ve PNR kayitlarinin eksiksiz olmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece kalkis dakikasina odaklanmak.</li>
                <li>Istanbul'a gercek varis saatini kaydetmemek.</li>
                <li>Havayolunun mesajlarini saklamamak.</li>
                <li>Sonradan hatirlamaya calismak yerine o anda not almamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu hatta asil soru, kalkis degil Istanbul'a varis sonucudur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici Amsterdam'da panoya bakarken dosyayi orada bitirmeye calisir. Oysa gecikme dosyalarinda asıl
                agirlik, son hedefe gercekte ne zaman varildiginda ortaya cikar. Bu rota icin de ayni mantik gecerlidir.
              </p>
              <p>
                Yani ilk dakika farki, tek basina tum hukuki ve pratik sonucu anlatmaz.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mesajlasma ve uygulama kayitlari bu hatta cok degerlidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Havayolunun saat degisikligi, yeni kapı bilgisi, yeniden rota veya iptal sonrasi degisiklikleri bu
                dosyalarda cok onemlidir. Cunku daha sonra olay akisinin nasil gelistigini net gosteren en guclu
                pratik veri bunlardir.
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
                      placement: "tr_amsterdam_istanbul_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  final varis ve belge akisini birlikte incelemek
                </a>{" "}
                dosyanin gucunu daha netlestirir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En guclu dosyalar, final sonucu net belgeleyen dosyalardir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Amsterdam-Istanbul gecikme dosyasinda en degerli belgeler cogu zaman basittir: boarding pass, PNR,
                havayolu mesajlari, varsa yeni saat bilgisi ve Istanbul'a gercek varis saati. Bu zincir ne kadar duzenli
                tutulursa, dosyanin agirligi o kadar net gorulur.
              </p>
              <p>
                Cunku iyi bir gecikme dosyasi, sadece “gecikti” demekten cok daha fazlasini gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, sadece kalkis panosuna bakmak ve son hedefe etkisini ikinci plana atmaktir. Oysa bu
              hatta dosyanin gucu, Istanbul'a final etkide saklidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Amsterdam-Istanbul gecikmesinde en onemli saat hangisidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En onemli saat, Istanbul'a gercekte hangi saatte vardiginizdir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Boarding pass, PNR, mesajlar, uygulama ekranlari ve gercek varis saati saklanmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ilk ne yapilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Saat degisimlerini not almak, mesajlari saklamak ve final varis zamanini belgelemek en iyi ilk
                  adimlardandir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
