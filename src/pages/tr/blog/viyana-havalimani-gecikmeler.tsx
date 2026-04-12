import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  MapPin,
  PlaneTakeoff,
  ShieldAlert,
  XCircle,
} from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "viyana-havalimani-gecikmeler";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-vienna-airport-rights&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-vienna-airport-rights&utm_content=text_link";

export default function TrViennaAirportDelaysArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Viyana Havalimani gecikmeler"
        description="Viyana Havalimani'nda gecikme, iptal veya kacan baglanti yasarsan hangi haklara odaklanmalisin? Turk yolcular icin EU261, Austrian baglantilari ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Viyana Havalimani gecikmeler",
            description:
              "Viyana Havalimani'nda gecikme, iptal veya kacan baglanti yasarsan hangi haklara odaklanmalisin? Turk yolcular icin EU261, Austrian baglantilari ve nihai varis mantigini anlatan net rehber.",
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
                name: "Viyana Havalimani'nda gecikme yasamak otomatik olarak EU261 dogurur mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Sorunun Viyana'da yasanmasi tek basina yeterli degildir. Asil soru, ucusun yapisi, isleten tasiyici ve son hedefe ne kadar gec varildigidir. Ama VIE kalkisli bircok dosya EU261 ile dogrudan baglantili olabilir.",
                },
              },
              {
                "@type": "Question",
                name: "VIE'de kacan baglanti neden bu kadar kritik olabilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku VIE gibi baglanti odakli bir noktada ilk segmentteki kisa bir gecikme bile tum zinciri bozup son hedefe ciddi gec varisa yol acabilir. Asil dosya gucu genelde burada ortaya cikar.",
                },
              },
              {
                "@type": "Question",
                name: "Austrian veya partner baglantisi varsa neye bakilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Burada en kritik konu, segmentlerin tek rezervasyonda olup olmadigi, isleten tasiyicinin kim oldugu ve son hedefe gercekte ne kadar gec varildigidir. Partner baglantilari ve yeniden rota analizi sonucu ciddi sekilde degistirebilir.",
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
            <span className="text-slate-900 dark:text-white">Viyana Havalimani gecikmeler</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <MapPin className="h-4 w-4" />
              Havalimani Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Viyana Havalimani gecikmeler
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Viyana Havalimani&apos;nda sorun yasandiginda en sik hata, her dosyayi sadece ilk ucusun dakikasi ile
              okumaktir. Oysa VIE gibi baglanti odakli bir noktada asil konu, <strong>baglanti zinciri</strong>,
              <strong> Austrian ve partner rota yapisi</strong>, <strong>bilet akisi</strong> ve
              <strong> nihai varis sonucu</strong>dur.
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
              <strong>VIE&apos;de gecikme yasamak tek basina para anlamina gelmez, ama guclu bir claim yapisina sikca
              baglanir.</strong> En onemli sorular: segmentler tek rezervasyonda miydi, kacan baglanti final varisi ne
              kadar etkiledi ve sorun sadece ilk bacakta mi kaldi, yoksa tum plan mi kaydi?
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger VIE analizi"
            title="Viyana Havalimani dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="VIE'de sorun yasandiginda en buyuk hata, sadece ilk delay'e bakmaktir. Baglanti mantigi, bilet yapisi ve nihai varis sonucu birlikte okunmalidir."
            ctaHref={CLAIM_URL}
            ctaLabel="VIE dosyami analiz et"
            placement="tr_vienna_airport_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Tek rezervasyonda kacan baglanti.</li>
                <li>Sonraki segmentin dusmesi veya yeni rota verilmesi.</li>
                <li>Son hedefte belirgin zaman kaybi.</li>
                <li>Yeni boarding ve reroute kayitlarinin net durmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece ilk ucusun dakika farkina bakmak.</li>
                <li>Tek rezervasyon olup olmadigini kontrol etmemek.</li>
                <li>Austrian markasini tek basina yeterli sanmak.</li>
                <li>Gercek nihai varis saatini not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Viyana Havalimani dosyalarinda ilk soru: sorun tum yolculugu ne kadar bozdu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                VIE gibi baglanti odakli bir noktada sorun bazen sadece "ilk ucus biraz gecikti" gibi gorunur. Ama
                pratikte asil etki, baglantinin dusmesi, yeni rotaya kalinmasi veya son hedefe ciddi gec varis ile
                ortaya cikar.
              </p>
              <p>
                Bu nedenle ilk segmentteki dakika tek basina yetmez. Dosya, yolculugun tamaminda yarattigi gercek
                sonuca gore okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. VIE'de en kritik konu: baglanti zinciri ve nihai varis
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Viyana dosyalarinda ilk bakista sorun kucuk gibi durabilir. Ama baglanti bozuldugunda ve tum rota
                kaydiginda, final varis farki cok daha buyuk hale gelir. Asil agirlik genelde burada ortaya cikar.
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
                      placement: "tr_vienna_airport_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  ilk gecikmeyi degil, baglanti zincirini ve nihai varisi analiz etmek
                </a>{" "}
                tek bir delay bilgisinden daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Austrian, partner segmenti ve belge duzeni neden onemlidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                VIE dosyalarinda bazen kullanici farkli marka, partner segment, yeni boarding ve app bildirimi yuzunden
                hangi parcaya odaklanacagini sasirir. Tam da bu yuzden boarding pass, PNR, yeni plan, email ve masraf
                fisleri birlikte saklanmalidir.
              </p>
              <p>
                Ozellikle partner segment, ayni gun yeniden rota veya alternatif ucus verildiyse, belge akisi zayifsa
                dosya gereksiz yere belirsiz gorunebilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, Viyana Havalimani&apos;ndaki problemi sadece ilk segmentin dakikasi gibi okumaktir. VIE
              dosyalarinda karar, genelde `baglanti zinciri` ve `nihai varis` mantigi ile verilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Viyana Havalimani&apos;nda gecikme yasamak otomatik olarak EU261 dogurur mu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Sorunun Viyana&apos;da yasanmasi tek basina yeterli degildir. Asil soru, ucusun yapisi,
                  isleten tasiyici ve son hedefe ne kadar gec varildigidir. Ama VIE kalkisli bircok dosya EU261 ile
                  dogrudan baglantili olabilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  VIE&apos;de kacan baglanti neden bu kadar kritik olabilir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku VIE gibi baglanti odakli bir noktada ilk segmentteki kisa bir gecikme bile tum zinciri bozup
                  son hedefe ciddi gec varisa yol acabilir. Asil dosya gucu genelde burada ortaya cikar.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Austrian veya partner baglantisi varsa neye bakilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Burada en kritik konu, segmentlerin tek rezervasyonda olup olmadigi, isleten tasiyicinin kim oldugu
                  ve son hedefe gercekte ne kadar gec varildigidir. Partner baglantilari ve yeniden rota analizi sonucu
                  ciddi sekilde degistirebilir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
