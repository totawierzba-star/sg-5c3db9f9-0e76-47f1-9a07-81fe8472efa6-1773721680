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

const SLUG = "berlin-havalimani-gecikmeler";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-berlin-airport-rights&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-berlin-airport-rights&utm_content=text_link";

export default function TrBerlinAirportDelaysArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Berlin Havalimani gecikmeler"
        description="Berlin Havalimani'nda gecikme, iptal veya kacan baglanti yasarsan hangi haklara odaklanmalisin? Turk yolcular icin EU261, short-haul rotalar, terminal akisi ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Berlin Havalimani gecikmeler",
            description:
              "Berlin Havalimani'nda gecikme, iptal veya kacan baglanti yasarsan hangi haklara odaklanmalisin? Turk yolcular icin EU261, short-haul rotalar, terminal akisi ve nihai varis mantigini anlatan net rehber.",
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
                name: "Berlin Havalimani'nda gecikme yasamak otomatik olarak EU261 dogurur mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Sorunun Berlin'de yasanmasi tek basina yeterli degildir. Asil soru, ucusun yapisi, isleten tasiyici ve son hedefe ne kadar gec varildigidir. Ama BER kalkisli bircok dosya EU261 ile dogrudan baglantili olabilir.",
                },
              },
              {
                "@type": "Question",
                name: "BER'de short-haul gecikme dosyasi neden bazen sandigindan daha guclu olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku kisa veya orta mesafeli bir rota da son hedefte 3 saat ustu kayip yaratabilir. Short-haul olmasi, dosyanin otomatik olarak zayif oldugu anlamina gelmez.",
                },
              },
              {
                "@type": "Question",
                name: "Berlin Havalimani'nda terminal ve yeni gate degisikligi neden yine de kayda degerdir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bunlar tek basina hak yaratmaz ama zaman cizgisini, havayolunun yeni planini ve yolcunun gercek hareket akisini anlamaya yardim eder. Ozellikle uygulama ekranlari ve boarding kayitlari bu yuzden faydalidir.",
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
            <span className="text-slate-900 dark:text-white">Berlin Havalimani gecikmeler</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <MapPin className="h-4 w-4" />
              Havalimani Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Berlin Havalimani gecikmeler
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Berlin Havalimani&apos;nda sorun yasandiginda en sik hata, her dosyayi basit bir Avrupa ici ucus gibi
              okumaktir. Oysa BER gibi yogun bir noktada asil konu, <strong>short-haul rotanin gercek etkisi</strong>,
              <strong> ayni gun planin bozulmasi</strong>, <strong>terminal akisi</strong> ve
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
              <strong>BER&apos;de gecikme yasamak tek basina para anlamina gelmez, ama guclu bir dosya yapisina sikca
              baglanir.</strong> En onemli sorular: rota tek rezervasyonda miydi, son hedefte ne kadar kayip oldu ve
              sorun sadece kalkista mi kaldi, yoksa tum yolculugu mu bozdu?
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger BER analizi"
            title="Berlin Havalimani dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="BER'de sorun yasandiginda en buyuk hata, sadece ilk delay'e bakmaktir. Rota akisi, yeni plan ve nihai varis sonucu birlikte okunmalidir."
            ctaHref={CLAIM_URL}
            ctaLabel="BER dosyami analiz et"
            placement="tr_berlin_airport_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Son hedefte belirgin zaman kaybi.</li>
                <li>Tek rezervasyonda kopan ucus zinciri.</li>
                <li>Yeni rota, app bildirimi ve boarding kayitlarinin net durmasi.</li>
                <li>Masraf, bekleme ve reroute detaylarinin belgelenmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Kisa rota diye dosyayi otomatik zayif sanmak.</li>
                <li>Ilk segment ile final varisi ayri dusunmek.</li>
                <li>Yeni plan ve gercek varis saatini not etmemek.</li>
                <li>Terminal akisi ve uygulama ekranlarini saklamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock3 className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Berlin Havalimani dosyalarinda ilk soru: sorun tum yolculugu ne kadar bozdu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                BER gibi bir havalimaninda sorun bazen sadece "ucus biraz gecikti" gibi gorunur. Ama pratikte asil
                etki, ayni gun toplantinin kacmasi, yeni ucusa kalinmasi, uzun bekleme veya son hedefe ciddi gec
                varis ile ortaya cikar.
              </p>
              <p>
                Bu nedenle ilk kalkis farki tek basina yetmez. Dosya, yolculugun tamaminda yarattigi gercek sonuca
                gore okunmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. BER'de en kritik konu: short-haul gorunumunun seni yaniltmasi
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Berlin dosyalarinda ilk bakista her sey basit gibi durabilir. Ama kisa veya orta mesafeli bir rota da
                final variste buyuk kayip yaratabilir. Bazen tek ucus vardir, bazen de ayni gun icinde zincir bozulur
                ve tum plan kayar.
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
                      placement: "tr_berlin_airport_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  ilk gecikmeyi degil, yeni planla birlikte nihai varisi analiz etmek
                </a>{" "}
                tek bir delay bilgisinden daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Terminal akisi, app bildirimleri ve belge duzeni neden onemlidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                BER dosyalarinda bazen kullanici yeni gate, yeni boarding, uygulama bildirimi ve alternatif plan
                arasinda hangi parcayi saklayacagini bilemez. Tam da bu yuzden boarding pass, PNR, yeni plan,
                ekran goruntuleri ve masraf fisleri birlikte tutulmalidir.
              </p>
              <p>
                Ozellikle ayni gun yeni ucus verildiyse veya uzun bekleme olustuysa, belge akisi zayifsa dosya
                gereksiz yere belirsiz gorunebilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, Berlin Havalimani&apos;ndaki problemi "zaten kisa bir Avrupa ici ucus" diye okumaktir.
              BER dosyalarinda karar, genelde `nihai varis` ve `rota akisi` mantigi ile verilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Berlin Havalimani&apos;nda gecikme yasamak otomatik olarak EU261 dogurur mu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Sorunun Berlin&apos;de yasanmasi tek basina yeterli degildir. Asil soru, ucusun yapisi,
                  isleten tasiyici ve son hedefe ne kadar gec varildigidir. Ama BER kalkisli bircok dosya EU261 ile
                  dogrudan baglantili olabilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  BER&apos;de short-haul gecikme dosyasi neden bazen sandigindan daha guclu olur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku kisa veya orta mesafeli bir rota da son hedefte 3 saat ustu kayip yaratabilir. Short-haul
                  olmasi, dosyanin otomatik olarak zayif oldugu anlamina gelmez.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Berlin Havalimani&apos;nda terminal ve yeni gate degisikligi neden yine de kayda degerdir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bunlar tek basina hak yaratmaz ama zaman cizgisini, havayolunun yeni planini ve yolcunun gercek
                  hareket akisini anlamaya yardim eder. Ozellikle uygulama ekranlari ve boarding kayitlari bu yuzden
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
