import Link from "next/link";
import { Calculator, CheckCircle2, Euro, Ruler, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "250-400-600-euro-tazminat-nasil-hesaplanir";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-compensation-bands&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-compensation-bands&utm_content=text_link";

export default function TrCompensationBandsArticle() {
  return (
    <LayoutTr>
      <SEO
        title="250€, 400€, 600€ tazminat nasil hesaplanir? TR yolcular icin net rehber"
        description="250€, 400€ ve 600€ tazminat neye gore hesaplanir? Turk yolcular icin rota mesafesi, nihai varis ve EU261 mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "250€, 400€, 600€ tazminat nasil hesaplanir? TR yolcular icin net rehber",
            description:
              "250€, 400€ ve 600€ tazminat neye gore hesaplanir? Turk yolcular icin rota mesafesi, nihai varis ve EU261 mantigini anlatan net rehber.",
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
                name: "250€, 400€ ve 600€ neye gore belirlenir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Temel mantik genelde rota mesafesi, nihai varista ortaya cikan zaman kaybi ve dosyanin EU261 ya da ilgili kapsam icine girip girmediginin birlikte okunmasidir.",
                },
              },
              {
                "@type": "Question",
                name: "3 saat gecikme varsa otomatik olarak 600€ alinir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. 3 saat esigi cok onemlidir ama tek basina tutari belirlemez. Sonucun hangi bantta degerlendirilecegi rota ve dosya yapisina gore okunur.",
                },
              },
              {
                "@type": "Question",
                name: "En kritik veri hangisidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik veri sadece kalkis gecikmesi degil, nihai varis saati ve tam yolculuk mesafesidir.",
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
            <span className="text-slate-900 dark:text-white">250€ 400€ 600€ hesaplama</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Tazminat Hesabi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              250€, 400€, 600€ tazminat nasil hesaplanir?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, Turk yolcularin en sik sordugu sorulardan biridir, cunku kullanici once rakami bilmek ister. Ama
              gercekte tutar, sadece “ucusum cok gecikti” demekle belirlenmez. <strong>Rota mesafesi</strong>,
              <strong> nihai varis</strong> ve <strong>dosyanin kapsami</strong> birlikte okunmadan 250€, 400€ veya
              600€ bandi saglikli sekilde yorumlanamaz.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Calculator className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>250€, 400€ ve 600€ bantlari genelde rota mesafesi ve gercek varis kaybiyla birlikte okunur.</strong>
              En buyuk hata, sadece gecikme saatine bakip tutari otomatik sanmaktir. Dogru hesap, tam yolculuk ve nihai
              varis mantigiyla yapilir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger tazminat bandi analizi"
            title="Dosyanizin hangi tazminat bandina daha yakin oldugunu simdi kontrol edin"
            description="Bir cok yolcu 250€, 400€ ve 600€ arasinda hangisine daha yakin oldugunu bilmeden tahmin yurutur. ClaimWinger ile rota, nihai varis ve kapsam mantigini Turkce okuyabilirsiniz."
            ctaHref={CLAIM_URL}
            ctaLabel="Tazminat bandimi kontrol et"
            placement="tr_compensation_bands_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Hesabi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Tam rota mesafesini dogru okumak.</li>
                <li>`Nihai varis` farkini net gostermek.</li>
                <li>Tek rezervasyonlu zinciri birlikte analiz etmek.</li>
                <li>Gecikme, iptal ve yeni rota detaylarini saklamak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece kalkis saatine bakmak.</li>
                <li>Her 3 saat gecikmeyi 600€ sanmak.</li>
                <li>Mesafeyi tek segment gibi okumak.</li>
                <li>Baglantili yolculukta final sonucu atlamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. 250€, 400€ ve 600€ mantigi, “saat kadar mesafe” mantigidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici genelde once gecikme suresine odaklanir. Oysa pratikte tazminat bandini anlamak icin
                <strong> yolculugun mesafesi</strong> de ayni derecede onemlidir. Bu nedenle kisa rota, orta mesafe ve
                daha uzun hatlar ayni gecikme yasasa bile ayni sonuca gitmeyebilir.
              </p>
              <p>
                Yani “kac saat gecikti?” sorusu tek basina eksiktir. “Hangi mesafedeki hangi yolculukta, son hedefe ne
                zaman varildi?” sorusu daha dogru bir baslangictir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Ruler className="h-7 w-7 text-red-600 dark:text-red-400" />
              2. Asil veri: nihai varis ve tam rota mesafesi
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Tutar hesabinda en buyuk sorun, kullanicinin ilk boarding pass uzerinden ya da ilk ucusun ekranindan
                hareket etmesidir. Oysa ozellikle aktarmali dosyalarda asıl tablo, son hedefe ne zaman vardiginiz ve
                butun rota yapisinin nasil kurulduguyla anlasilir.
              </p>
              <p>
                Bu nedenle{" "}
                <a
                  href={CLAIM_URL_TEXT}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    pushClaimWingerEvent("claimwinger_cta_click", {
                      locale: "tr",
                      placement: "tr_compensation_bands_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  tazminat bandini rota ve nihai varis uzerinden okumak
                </a>{" "}
                kaba tahminden cok daha sagliklidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Calculator className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. “Kac euro?” sorusu, once “dosya ne kadar guclu?” sorusuna baglidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Teorik bandi bilmek faydalidir, ama tek basina yeterli degildir. Eger dosyada kapsam, nihai varis
                saati, yeni rota veya ispat zinciri zayifsa, sadece rakam odakli bakis kullaniciyi yanlis yonlendirebilir.
              </p>
              <p>
                En iyi analiz, once dosyanin hukuki ve pratik gucunu okuyup sonra 250€, 400€ veya 600€ bandini
                degerlendirmektir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, 250€, 400€ ve 600€ bandlarini otomatik tablo gibi okumaktir. Oysa gercek hesap, mesafe,
              nihai varis ve dosyanin kapsam mantigi birlikte incelendiginde anlamli hale gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  250€, 400€ ve 600€ neye gore belirlenir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Temel mantik genelde rota mesafesi, nihai varista ortaya cikan zaman kaybi ve dosyanin kapsam icine
                  girip girmediginin birlikte okunmasidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  3 saat gecikme varsa otomatik olarak 600€ alinir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. 3 saat esigi cok onemlidir ama tek basina tutari belirlemez. Sonucun hangi bantta
                  degerlendirilecegi rota ve dosya yapisina gore okunur.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">En kritik veri hangisidir?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik veri sadece kalkis gecikmesi degil, nihai varis saati ve tam yolculuk mesafesidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
