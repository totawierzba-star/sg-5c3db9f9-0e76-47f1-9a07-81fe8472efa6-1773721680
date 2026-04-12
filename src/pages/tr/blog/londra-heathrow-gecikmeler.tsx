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

const SLUG = "londra-heathrow-gecikmeler";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-heathrow-airport-rights&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-heathrow-airport-rights&utm_content=text_link";

export default function TrHeathrowAirportDelaysArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Londra Heathrow gecikmeler"
        description="Londra Heathrow'da gecikme, iptal veya kacan baglanti yasarsan hangi haklara odaklanmalisin? Turk yolcular icin UK261, EU261, British Airways baglantilari ve nihai varis etkisini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Londra Heathrow gecikmeler",
            description:
              "Londra Heathrow'da gecikme, iptal veya kacan baglanti yasarsan hangi haklara odaklanmalisin? Turk yolcular icin UK261, EU261, British Airways baglantilari ve nihai varis etkisini anlatan net rehber.",
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
                name: "Londra Heathrow'da gecikme yasamak otomatik olarak UK261 veya EU261 dogurur mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Sorunun Heathrow'da yasanmasi tek basina yeterli degildir. Asil soru, ucusun yapisi, kalkis noktasi, isleten tasiyici ve son hedefe ne kadar gec varildigidir. Heathrow dosyalarinda bazen UK261, bazen EU261 mantigi daha onemli hale gelir.",
                },
              },
              {
                "@type": "Question",
                name: "Heathrow'da kacan baglanti neden bu kadar kritik olabilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku LHR gibi buyuk bir hub'da ilk segmentteki kisa bir gecikme bile tum zinciri bozup son hedefe ciddi gec varisa yol acabilir. Asil dosya gucu genelde burada ortaya cikar.",
                },
              },
              {
                "@type": "Question",
                name: "British Airways veya partner baglantisi varsa neye bakilmali?",
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
            <span className="text-slate-900 dark:text-white">Londra Heathrow gecikmeler</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <MapPin className="h-4 w-4" />
              Havalimani Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Londra Heathrow gecikmeler
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Londra Heathrow&apos;da sorun yasandiginda en sik hata, her dosyayi sadece ilk ucusun dakikasi ile
              okumaktir. Oysa LHR gibi buyuk bir hub&apos;da asil konu, <strong>baglanti zinciri</strong>,
              <strong> UK261 ve EU261 sinirlari</strong>, <strong>British Airways ve partner rota yapisi</strong> ve
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
              <strong>LHR&apos;de gecikme yasamak tek basina para anlamina gelmez, ama guclu bir claim yapisina sikca
              baglanir.</strong> En onemli sorular: segmentler tek rezervasyonda miydi, kacan baglanti final varisi ne
              kadar etkiledi ve dosya daha cok `UK261` mi, `EU261` mi mantigi ile okunmali?
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger LHR analizi"
            title="Londra Heathrow dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="LHR'de sorun yasandiginda en buyuk hata, sadece ilk delay'e bakmaktir. Hub mantigi, kapsam siniri ve nihai varis sonucu birlikte okunmalidir."
            ctaHref={CLAIM_URL}
            ctaLabel="LHR dosyami analiz et"
            placement="tr_heathrow_airport_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Tek rezervasyonda kacan baglanti.</li>
                <li>Long-haul veya sonraki segmentin dusmesi.</li>
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
                <li>`UK261` ile `EU261` farkini hic kontrol etmemek.</li>
                <li>Tek rezervasyon olup olmadigini kontrol etmemek.</li>
                <li>Gercek nihai varis saatini not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Londra Heathrow dosyalarinda ilk soru: sorun tum yolculugu ne kadar bozdu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                LHR gibi bir hub&apos;da sorun bazen sadece "ilk ucus biraz gecikti" gibi gorunur. Ama pratikte asil
                etki, baglantinin dusmesi, yeni rotaya kalinmasi veya son hedefe ciddi gec varis ile ortaya cikar.
              </p>
              <p>
                Bu nedenle ilk segmentteki dakika tek basina yetmez. Dosya, yolculugun tamaminda yarattigi gercek
                sonuca gore okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Heathrow'da en kritik konu: hub mantigi, kacan baglanti ve kapsam siniri
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Heathrow dosyalarinda ilk bakista sorun kucuk gibi durabilir. Ama baglanti bozuldugunda ve tum rota
                kaydiginda, final varis farki cok daha buyuk hale gelir. Buna ek olarak, dosyanin `UK261` mi yoksa
                `EU261` mantigi ile okunacagi da sonucu ciddi sekilde etkiler.
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
                      placement: "tr_heathrow_airport_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  ilk gecikmeyi degil, baglanti zincirini, kapsam sinirini ve nihai varisi analiz etmek
                </a>{" "}
                tek bir delay bilgisinden daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. British Airways, partner zinciri ve terminal akisi neden onemlidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Heathrow dosyalarinda bazen kullanici farkli terminal, partner ucus, yeni boarding ve app bildirimi
                yuzunden hangi parcaya odaklanacagini sasirir. Tam da bu yuzden boarding pass, PNR, yeni plan, email
                ve masraf fisleri birlikte saklanmalidir.
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
              En buyuk hata, Londra Heathrow&apos;daki problemi sadece ilk segmentin dakikasi gibi okumaktir. LHR
              dosyalarinda karar, genelde `baglanti zinciri`, `kapsam siniri` ve `nihai varis` mantigi ile verilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Londra Heathrow&apos;da gecikme yasamak otomatik olarak UK261 veya EU261 dogurur mu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Sorunun Heathrow&apos;da yasanmasi tek basina yeterli degildir. Asil soru, ucusun yapisi,
                  kalkis noktasi, isleten tasiyici ve son hedefe ne kadar gec varildigidir. Heathrow dosyalarinda bazen
                  UK261, bazen EU261 mantigi daha onemli hale gelir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Heathrow&apos;da kacan baglanti neden bu kadar kritik olabilir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku LHR gibi buyuk bir hub&apos;da ilk segmentteki kisa bir gecikme bile tum zinciri bozup son
                  hedefe ciddi gec varisa yol acabilir. Asil dosya gucu genelde burada ortaya cikar.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  British Airways veya partner baglantisi varsa neye bakilmali?
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
