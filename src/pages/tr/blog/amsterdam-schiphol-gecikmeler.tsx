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

const SLUG = "amsterdam-schiphol-gecikmeler";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-amsterdam-airport-rights&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-amsterdam-airport-rights&utm_content=text_link";

export default function TrAmsterdamSchipholDelaysArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Amsterdam Schiphol gecikmeler"
        description="Amsterdam Schiphol'de gecikme, iptal veya kacan baglanti yasarsan hangi haklara odaklanmalisin? Turk yolcular icin EU261, hub mantigi, KLM baglantilari ve nihai varis etkisini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Amsterdam Schiphol gecikmeler",
            description:
              "Amsterdam Schiphol'de gecikme, iptal veya kacan baglanti yasarsan hangi haklara odaklanmalisin? Turk yolcular icin EU261, hub mantigi, KLM baglantilari ve nihai varis etkisini anlatan net rehber.",
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
                name: "Amsterdam Schiphol'de gecikme yasamak otomatik olarak EU261 dogurur mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Sorunun Schiphol'de yasanmasi tek basina yeterli degildir. Asil soru, ucusun yapisi, isleten tasiyici ve son hedefe ne kadar gec varildigidir. Ama AMS kalkisli bircok dosya EU261 ile dogrudan baglantili olabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Schiphol'de kacan baglanti neden bu kadar kritik olabilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku AMS gibi bir hub'da ilk segmentteki kisa bir gecikme bile tum zinciri bozup son hedefe ciddi gec varisa yol acabilir. Asil dosya gucu genelde burada ortaya cikar.",
                },
              },
              {
                "@type": "Question",
                name: "Schengen ve non-Schengen akisi dosyayi etkiler mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bunlar tek basina hak yaratmaz ama baglanti riskini, zaman cizgisini ve yeni planin gercekte nasil isledigini anlamaya yardim eder. Ozellikle yeni boarding pass ve uygulama ekranlari bu yuzden faydalidir.",
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
            <span className="text-slate-900 dark:text-white">Amsterdam Schiphol gecikmeler</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <MapPin className="h-4 w-4" />
              Havalimani Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Amsterdam Schiphol gecikmeler
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Amsterdam Schiphol&apos;de sorun yasandiginda en sik hata, her dosyayi sadece ilk ucusun dakikasi ile
              okumaktir. Oysa AMS gibi buyuk bir hub&apos;da asil konu, <strong>baglanti zinciri</strong>,
              <strong> KLM ve partner rota yapisi</strong>, <strong>Schengen/non-Schengen akisi</strong> ve
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
              <strong>AMS&apos;te gecikme yasamak tek basina para anlamina gelmez, ama guclu bir claim yapisina sikca
              baglanir.</strong> En onemli sorular: segmentler tek rezervasyonda miydi, kacan baglanti final varisi ne
              kadar etkiledi ve sorun sadece ilk bacakta mi kaldi, yoksa tum plan mi kaydi?
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger AMS analizi"
            title="Amsterdam Schiphol dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="AMS'te sorun yasandiginda en buyuk hata, sadece ilk delay'e bakmaktir. Hub mantigi, baglanti yapisi ve nihai varis sonucu birlikte okunmalidir."
            ctaHref={CLAIM_URL}
            ctaLabel="AMS dosyami analiz et"
            placement="tr_amsterdam_airport_article_embed_high"
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
                <li>Tek rezervasyon olup olmadigini kontrol etmemek.</li>
                <li>Gercek nihai varis saatini not etmemek.</li>
                <li>Yeni plan, gate ve app ekranlarini saklamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Amsterdam Schiphol dosyalarinda ilk soru: sorun tum yolculugu ne kadar bozdu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                AMS gibi bir hub&apos;da sorun bazen sadece "ilk ucus biraz gecikti" gibi gorunur. Ama pratikte asil
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
              2. AMS'te en kritik konu: hub mantigi, kacan baglanti ve nihai varis
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Schiphol dosyalarinda ilk bakista sorun kucuk gibi durabilir. Ama baglanti bozuldugunda ve tum rota
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
                      placement: "tr_amsterdam_airport_article_text_link",
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
              3. Schengen akisi, yeni gate ve belge duzeni neden onemlidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                AMS gibi buyuk bir merkezde Schengen ve non-Schengen akisi, yeni gate, yeniden yonlendirme ve uygulama
                bildirimleri pratikte stresi buyutur. Bunlar tek basina sonucu belirlemez ama zaman cizgisini anlamada
                yardimci olur.
              </p>
              <p>
                Ozellikle yeni boarding pass, reroute bilgisi, uygulama ekranlari ve final varis saati saklanirsa,
                dosya daha net okunur. Hub vakalarinda duzenli belge akisi gercekten fark yaratir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, Amsterdam Schiphol&apos;deki problemi sadece ilk segmentin dakikasi gibi okumaktir. AMS
              dosyalarinda karar, genelde `baglanti zinciri` ve `nihai varis` mantigi ile verilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Amsterdam Schiphol&apos;de gecikme yasamak otomatik olarak EU261 dogurur mu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Sorunun Schiphol&apos;de yasanmasi tek basina yeterli degildir. Asil soru, ucusun yapisi,
                  isleten tasiyici ve son hedefe ne kadar gec varildigidir. Ama AMS kalkisli bircok dosya EU261 ile
                  dogrudan baglantili olabilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Schiphol&apos;de kacan baglanti neden bu kadar kritik olabilir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku AMS gibi bir hub&apos;da ilk segmentteki kisa bir gecikme bile tum zinciri bozup son hedefe
                  ciddi gec varisa yol acabilir. Asil dosya gucu genelde burada ortaya cikar.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Schengen ve non-Schengen akisi dosyayi etkiler mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bunlar tek basina hak yaratmaz ama baglanti riskini, zaman cizgisini ve yeni planin gercekte nasil
                  isledigini anlamaya yardim eder. Ozellikle yeni boarding pass ve uygulama ekranlari bu yuzden
                  faydalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
