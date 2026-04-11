import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  MapPin,
  PlaneTakeoff,
  ShieldAlert,
  Sparkles,
  XCircle,
} from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "istanbul-havalimani-gecikmeler-ve-haklar";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-istanbul-airport-rights&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-istanbul-airport-rights&utm_content=text_link";

export default function TrIstanbulAirportDelaysArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Istanbul Havalimani gecikmeler ve haklar"
        description="Istanbul Havalimani'nda gecikme, iptal veya kacan baglanti yasarsan hangi haklara odaklanmalisin? Turk yolcular icin EU261 sinirlari, nihai varis ve pratik adimlari anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Istanbul Havalimani gecikmeler ve haklar",
            description:
              "Istanbul Havalimani'nda gecikme, iptal veya kacan baglanti yasarsan hangi haklara odaklanmalisin? Turk yolcular icin EU261 sinirlari, nihai varis ve pratik adimlari anlatan net rehber.",
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
            datePublished: "2026-04-11",
            dateModified: "2026-04-11",
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
                name: "Istanbul Havalimani'nda gecikme yasamak otomatik olarak EU261 dogurur mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Sorunun Istanbul Havalimani'nda yasanmasi tek basina yeterli degildir. Asil soru, ucusun nereden kalktigi, isleten tasiyici ve son hedefe ne kadar gec varildigidir.",
                },
              },
              {
                "@type": "Question",
                name: "IST'de baglanti kacarsa ilk neye bakilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk bakilacak sey, segmentlerin tek rezervasyonda olup olmadigi ve yeni planin son hedefe varisi ne kadar etkiledigidir. Gercek zarar genelde burada ortaya cikar.",
                },
              },
              {
                "@type": "Question",
                name: "Istanbul Havalimani'nda gece beklemek zorunda kalirsam hangi kayitlari tutmaliyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Boarding pass, PNR, uygulama ekranlari, mesajlar, yeni ucus bilgileri ve varsa makul masraf fisleri mutlaka saklanmalidir. Zaman cizgisi ne kadar netse dosya o kadar kolay okunur.",
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
            <span className="text-slate-900 dark:text-white">Istanbul Havalimani gecikmeler ve haklar</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <MapPin className="h-4 w-4" />
              Havalimani Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Istanbul Havalimani gecikmeler ve haklar
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Istanbul Havalimani&apos;nda sorun yasandiginda en sik hata, herkes icin ayni haklarin gecerli oldugunu
              sanmaktir. Oysa burada asil konu, <strong>ucusun kapsamı</strong>, <strong>baglanti zinciri</strong> ve
              <strong> nihai varis sonucu</strong>dur. Sorun ayni yerde yasansa bile hukuki guc her dosyada farkli
              olabilir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-11</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <PlaneTakeoff className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>IST&apos;de gecikme veya iptal yasamak tek basina EU261 anlamina gelmez.</strong> En onemli
              sorular: ucus nereden basladi, isleten tasiyici kim, baglanti tek rezervasyonda miydi ve son hedefe ne
              kadar gec varildi?
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger IST analizi"
            title="Istanbul Havalimani dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="IST'de sorun yasandiginda en buyuk hata, sadece panoya bakip karar vermektir. Ucus kapsami, baglanti mantigi ve nihai varis sonucu birlikte okunmalidir."
            ctaHref={CLAIM_URL}
            ctaLabel="IST dosyami analiz et"
            placement="tr_istanbul_airport_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Tek rezervasyonda kopan baglanti.</li>
                <li>Son hedefte belirgin zaman kaybi.</li>
                <li>E-posta, uygulama ve boarding kayitlarinin durmasi.</li>
                <li>Yeni planin veya gecelemenin net sekilde belgelenmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sorunun IST'de olmasini tek basina yeterli sanmak.</li>
                <li>Sadece kalkis saatine veya panoya odaklanmak.</li>
                <li>Tek rezervasyon olup olmadigini kontrol etmemek.</li>
                <li>Gercek nihai varis saatini not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Istanbul Havalimani dosyalarinda ilk soru: sorun size gercekte neye mal oldu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                IST gibi buyuk bir merkezde sorun bazen sadece “ucus gecikti” gibi gorunur. Ama pratikte asil etki,
                baglantinin kacmasi, gece beklemesi, yeni rota verilmesi veya son hedefe ciddi gec varis ile ortaya
                cikar.
              </p>
              <p>
                Bu nedenle havalimani ekranindaki bilgi yetmez. Dosya, yolculugun tamaminda yarattigi gercek sonuca
                gore okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. IST'de en kritik konu: airport degil, kapsamin kendisi
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen “sorun Avrupa standardinda buyuk bir havalimaninda olduysa claim de otomatik gucludur”
                diye dusunur. Oysa burada esas konu, ucusun hukuki kapsamidir. Yani kalkis noktasi, isleten tasiyici
                ve yolculugun hangi parcada bozuldugu birlikte okunmalidir.
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
                      placement: "tr_istanbul_airport_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  havaalanindaki sorunu degil, tum yolculugun sonucunu analiz etmek
                </a>{" "}
                tek bir delay bilgisinden daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. IST'de pratik olarak hangi kayitlar dosyayi kurtarir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En degerli kayitlar genelde cok basittir: boarding pass, PNR, uygulama ekranlari, SMS veya e-posta,
                yeni ucus bilgisi, kapidaki veya desk'teki yonlendirme ve varsa makul masraf fisleri. Bunlar yoksa
                dosya bazen gereksiz yere zayif gorunur.
              </p>
              <p>
                Ozellikle geceleme, transfer veya yeni bilet gibi durumlarda karar aninin ve zaman cizgisinin net
                olmasi cok yardim eder.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, Istanbul Havalimani&apos;nda sorun yasandigi icin dosyanin otomatik olarak guclu ya da
              otomatik olarak zayif oldugunu sanmaktir. Karari veren sey, her zaman rota kapsami ve `nihai varis`
              mantigidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Istanbul Havalimani&apos;nda gecikme yasamak otomatik olarak EU261 dogurur mu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Sorunun Istanbul Havalimani&apos;nda yasanmasi tek basina yeterli degildir. Asil soru, ucusun
                  nereden kalktigi, isleten tasiyici ve son hedefe ne kadar gec varildigidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  IST&apos;de baglanti kacarsa ilk neye bakilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk bakilacak sey, segmentlerin tek rezervasyonda olup olmadigi ve yeni planin son hedefe varisi ne
                  kadar etkiledigidir. Gercek zarar genelde burada ortaya cikar.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Istanbul Havalimani&apos;nda gece beklemek zorunda kalirsam hangi kayitlari tutmaliyim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Boarding pass, PNR, uygulama ekranlari, mesajlar, yeni ucus bilgileri ve varsa makul masraf fisleri
                  mutlaka saklanmalidir. Zaman cizgisi ne kadar netse dosya o kadar kolay okunur.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
