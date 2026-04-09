import Link from "next/link";
import { CheckCircle2, Clock3, MapPin, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "ankara-amsterdam-ucusunda-gecikme-olursa-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-ankara-amsterdam-delay&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-ankara-amsterdam-delay&utm_content=text_link";

export default function TrAnkaraAmsterdamDelayArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Ankara-Amsterdam ucusunda gecikme olursa ne yapilmali?"
        description="Ankara-Amsterdam ucusunda gecikme olursa ne yapilmali? Turk yolcular icin nihai varis, belge duzeni ve tazminat mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ankara-Amsterdam ucusunda gecikme olursa ne yapilmali?",
            description:
              "Ankara-Amsterdam ucusunda gecikme olursa ne yapilmali? Turk yolcular icin nihai varis, belge duzeni ve tazminat mantigini anlatan net rehber.",
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
                name: "Ankara-Amsterdam hattinda gecikme olursa ilk neye bakilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk olarak Amsterdam'a nihai varis saatine, havayolunun verdigi mesajlara ve varsa yeni rota ya da saat degisikligi kayitlarina bakilmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Sadece Ankara kalkisindaki gecikme yeterli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Asil agirlik, yolcunun Amsterdam'a gercekte ne zaman vardiginda ortaya cikar.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmalidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Boarding pass, PNR, mesajlar, uygulama ekranlari, yeni saat bilgileri ve Amsterdam'a gercek varis zamanini gosteren kayitlar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Ankara-Amsterdam gecikme rehberi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Rota Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ankara-Amsterdam ucusunda gecikme olursa ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu hat, Hollanda'ya giden Turk yolcular icin hem duzenli aile ziyareti hem de is seyahati tarafinda guclu
              bir arama niyeti tasir. Kullanici genelde ilk anda sadece “ucak kac saat sarkti” sorusuna odaklanir.
              Oysa saglam analiz, <strong>Amsterdam'a nihai varis</strong>, <strong>hava yolu mesajlari</strong> ve
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
              <strong>Ankara-Amsterdam hattinda gecikmede ilk odak noktasi, Amsterdam'a gercek varis zamanidir.</strong>
              Sadece kalkis panosundaki fark degil, final etki ve dosyanin nasil belgelendigi sonuc belirler.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Ankara-Amsterdam analizi"
            title="Ankara-Amsterdam gecikme dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu hatta en sik hata, sadece ilk kalkis farkina bakmaktir. Oysa final varis, mesajlasma ve saat degisikliklerinin tam kaydi daha buyuk fark yaratir."
            ctaHref={CLAIM_URL}
            ctaLabel="Ankara-Amsterdam dosyami kontrol et"
            placement="tr_ankara_amsterdam_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Amsterdam'a nihai varista net zaman kaybi olusmasi.</li>
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
                <li>Sadece Ankara kalkis saatine odaklanmak.</li>
                <li>Amsterdam'a gercek varis saatini kaydetmemek.</li>
                <li>Havayolunun mesajlarini saklamamak.</li>
                <li>Sonradan hatirlamaya calismak yerine o anda not almamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu hatta asil soru, kalkis degil Amsterdam'a varis sonucudur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici Ankara'da panoya bakarken dosyayi orada bitirmeye calisir. Oysa gecikme dosyalarinda asil
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
                Havayolunun saat degisikligi, yeni kapi bilgisi, yeniden rota veya gecikme sonrasi guncellemeleri bu
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
                      placement: "tr_ankara_amsterdam_article_text_link",
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
                Ankara-Amsterdam gecikme dosyasinda en degerli belgeler cogu zaman basittir: boarding pass, PNR,
                havayolu mesajlari, varsa yeni saat bilgisi ve Amsterdam'a gercek varis saati. Bu zincir ne kadar duzenli
                tutulursa, dosyanin agirligi o kadar net gorulur.
              </p>
              <p>
                Cunku iyi bir gecikme dosyasi, sadece “gecikti” demekten cok daha fazlasini gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-amber-800 dark:text-amber-300">
              <ShieldAlert className="h-6 w-6" />
              Pratik not
            </h2>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Hollanda hatlarinda kullanici bazen sadece ilk ekran goruntusunu saklayip sonra tum resmi unutuyor.
              Oysa bu hatta en degerli sey, olay akisini bastan sona gosteren duzenli bir kayittir: ilk gecikme,
              varsa yeni saat, yeni rota ve Amsterdam'a gercek varis.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Ankara-Amsterdam hattinda gecikme olursa ilk neye bakilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk olarak Amsterdam'a nihai varis saatine, havayolunun verdigi mesajlara ve varsa yeni rota ya da
                  saat degisikligi kayitlarina bakilmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Sadece Ankara kalkisindaki gecikme yeterli midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Asil agirlik, yolcunun Amsterdam'a gercekte ne zaman vardiginda ortaya cikar.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmalidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Boarding pass, PNR, mesajlar, uygulama ekranlari, yeni saat bilgileri ve Amsterdam'a gercek varis
                  zamanini gosteren kayitlar saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
