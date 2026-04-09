import Link from "next/link";
import { CheckCircle2, Plane, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "turkish-airlines-ucusunda-eu261-ne-zaman-gecerli-olur";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-turkish-airlines-eu261&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-turkish-airlines-eu261&utm_content=text_link";

export default function TrTurkishAirlinesEu261Article() {
  return (
    <LayoutTr>
      <SEO
        title="Turkish Airlines ucusunda EU261 ne zaman gecerli olur?"
        description="Turkish Airlines ucusunda EU261 ne zaman gecerli olabilir? Turk yolcular icin kalkis noktasi, baglanti yapisi ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Turkish Airlines ucusunda EU261 ne zaman gecerli olur?",
            description:
              "Turkish Airlines ucusunda EU261 ne zaman gecerli olabilir? Turk yolcular icin kalkis noktasi, baglanti yapisi ve nihai varis mantigini anlatan net rehber.",
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
                name: "Turkish Airlines oldugu icin EU261 otomatik olarak dislanir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Dosya sadece marka ismine bakilarak kapanmaz. En kritik nokta ucusun nereden kalktigi, baglanti yapisinin nasil kuruldugu ve yolcunun nihai varis sonucunun ne oldugudur.",
                },
              },
              {
                "@type": "Question",
                name: "Istanbul cikisli bir Turkish Airlines ucusunda tazminat sansi olabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bazen olabilir, bazen olmayabilir. Bunu belirleyen sey tek basina Istanbul cikisi degil; tum rota, baglanti ve hukuki kapsam mantigidir.",
                },
              },
              {
                "@type": "Question",
                name: "Turkish Airlines baglantili seyahatlerinde en kritik analiz noktasi nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik analiz noktasi, tek bir segment yerine butun yolculuk zincirine bakmak ve nihai varistaki gecikme ya da zaman kaybini dogru okumaktir.",
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
            <span className="text-slate-900 dark:text-white">Turkish Airlines ve EU261</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Turkish Airlines ucusunda EU261 ne zaman gecerli olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu soru, Turk yolcular ve Avrupa diasporasi icin en degerli aramalardan biridir. Cunku bircok kisi
              Turkish Airlines gorunce dosyayi ya otomatik guclu ya da otomatik zayif sanir. Oysa gercek analiz,
              <strong> kalkis noktasi</strong>, <strong>baglanti yapisi</strong> ve <strong>nihai varis sonucu</strong>
              birlikte okundugunda ortaya cikar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Turkish Airlines markasi tek basina dosyanin sonucunu belirlemez.</strong> En kritik soru,
              ucusun hangi noktadan basladigi, yolculugun Avrupa ile nasil bag kurdugu ve yolcunun nihai olarak ne
              kadar gec vardigidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Turkish Airlines analizi"
            title="Turkish Airlines dosyanizin EU261 acisindan guclu olup olmadigini hizli kontrol edin"
            description="Ozellikle Turkiye cikisli ve Avrupa baglantili dosyalarda hizli tahminler cok yaniltici olabilir. Rota zincirini ve nihai varisi birlikte okumak daha dogru sonuc verir."
            ctaHref={CLAIM_URL}
            ctaLabel="Turkish Airlines dosyami kontrol et"
            placement="tr_turkish_airlines_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Kalkis noktasinin kapsam acisindan avantajli olmasi.</li>
                <li>Baglantili seyahatte tum zincirin okunabilmesi.</li>
                <li>Nihai varista belirgin zaman kaybi olusmasi.</li>
                <li>Mesajlar, boarding pass ve rota degisikliginin saklanmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece marka adina bakip sonucu tahmin etmek.</li>
                <li>Tek segmenti okuyup tum seyahati gormemek.</li>
                <li>Istanbul cikisini otomatik ret sebebi sanmak.</li>
                <li>Nihai varis saatini kaydetmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Turkish Airlines dosyalarinda ilk soru marka degil, kalkis noktasidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici aramalarinda en buyuk kisayol su olur: “Turkish Airlines ise EU261 olmaz.” Bu kadar sert
                bir kural pratikte cok fazla yanlis sonuca yol acar. Cunku ilk okunmasi gereken sey, ucusun hangi
                noktadan basladigi ve bu baslangicin Avrupa baglantisi icinde nasil yer aldigidir.
              </p>
              <p>
                Yani marka tek basina karar vermez. Asil analiz, ucusun hukuki kapsama nereden temas ettigiyle baslar.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Istanbul veya baska bir baglanti noktasi, tek satirlik cevap uretmez
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Turkish Airlines dosyalarinin cogu tek parca duz ucustan degil, baglantili seyahatten olusur. Bu da
                demektir ki soruyu tek segment uzerinden okumak yerine tum yolculuk zincirini gormek gerekir.
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
                      placement: "tr_turkish_airlines_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  gecikme ve nihai varis analizini
                </a>{" "}
                birlikte yapmak, yuzeysel yorumlardan cok daha sagliklidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Nihai varis, Turkish Airlines dosyalarinda en kritik olculerden biridir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bircok yolcu ilk kalkis gecikmesine cok odaklanir. Oysa baglantili Turkish Airlines seyahatlerinde
                asil agirlik, yolcunun son hedefe ne kadar gec vardiginda ortaya cikar. Bazi dosyalarda ilk sorun
                kucuk gorunur ama baglanti koptugu anda tum zaman kaybi buyur.
              </p>
              <p>
                Bu yuzden sadece kalkis panosunu degil, son boarding, yeni bilet ve gercek varis saatini birlikte
                saklamak gerekir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, Turkish Airlines adini gorur gormez dosyayi ya otomatik kapatmak ya da otomatik guclu
              sanmaktir. Oysa gercek guc, marka isminden degil rota yapisi ve nihai varis sonucundan gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Turkish Airlines oldugu icin otomatik ret gelir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Dosya marka uzerinden degil, kalkis noktasi, rota yapisi ve nihai varis sonucu uzerinden
                  okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Baglantili Turkish Airlines yolculuklarinda en onemli veri nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En onemli veri, yolcunun nihai hedefe gercekte ne zaman vardigidir. Cunku asil zaman kaybi orada
                  netlesir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu tip dosyalarda hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Boarding pass, PNR, SMS ya da e-posta bildirimleri, yeni rota bilgisi ve gercek varis saati mutlaka
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
