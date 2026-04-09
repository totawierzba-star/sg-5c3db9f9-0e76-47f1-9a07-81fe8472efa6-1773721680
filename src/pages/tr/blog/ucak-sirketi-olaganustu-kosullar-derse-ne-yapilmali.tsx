import Link from "next/link";
import { AlertTriangle, CheckCircle2, ShieldAlert, Sparkles, TextSearch, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "ucak-sirketi-olaganustu-kosullar-derse-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-extraordinary-circumstances&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-extraordinary-circumstances&utm_content=text_link";

export default function TrExtraordinaryCircumstancesArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Ucak sirketi 'olaganustu kosullar' derse ne yapilmali?"
        description="Havayolu olaganustu kosullar diyorsa ne yapilmali? Turk yolcular icin bu savunmanin ne zaman zayif kalabilecegini ve sonraki dogru adimi anlatan rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ucak sirketi 'olaganustu kosullar' derse ne yapilmali?",
            description:
              "Havayolu olaganustu kosullar diyorsa ne yapilmali? Turk yolcular icin bu savunmanin ne zaman zayif kalabilecegini ve sonraki dogru adimi anlatan rehber.",
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
                name: "Havayolu 'olaganustu kosullar' diyorsa dosya otomatik olarak biter mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Bu ifade tek basina dosyayi bitirmez. Onemli olan, havayolunun hangi olayi kastettigi, bunu ne kadar somut anlattigi ve bunun yolcunun nihai varisina nasil yansidigidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu savunmaya karsi en kritik veri nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik veri genellikle tek bir belge degil; zaman cizelgesi, yazismalar, yeniden yonlendirme bilgisi ve nihai varis farkinin birlikte okunmasidir.",
                },
              },
              {
                "@type": "Question",
                name: "Her teknik veya operasyonel aciklama 'olaganustu' sayilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Havayolunun kullandigi kelime ile dosyanin gercek gucu ayni sey degildir. Savunmanin somutlugu ve olayla kurdugu bag cok onemlidir.",
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
            <span className="text-slate-900 dark:text-white">Olaganustu kosullar</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Savunma Analizi Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ucak sirketi "olaganustu kosullar" derse ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu ifade, yolcunun en sik gordugu ama en kolay yanlis yorumladigi savunmalardan biridir. Bir mailde
              `olaganustu kosullar` yazmasi, dosyanin otomatik olarak kapandigi anlamina gelmez. Asil analiz,
              <strong> olayin ne oldugu</strong>, <strong>havayolunun bunu ne kadar somut anlattigi</strong> ve
              <strong> bunun `nihai varis` uzerindeki etkisi</strong> birlikte okundugunda yapilir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>`Olaganustu kosullar` ifadesi tek basina yeterli degildir.</strong> Bu savunmanin gercekten
              ne kadar guclu oldugunu anlamak icin olay tipi, yazismanin kalitesi, zaman cizelgesi, yeni rota ve
              `nihai varis` farki birlikte degerlendirilmelidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger savunma analizi"
            title="'Olaganustu kosullar' denilen dosyanizin gercekte ne kadar guclu oldugunu hizli kontrol edin"
            description="Bir cok yolcu bu ifadeyi gorunce dosyanin bittigini saniyor. Oysa bazen sorun kelimede degil, havayolunun bu savunmayi ne kadar somut kurabildigindedir."
            ctaHref={CLAIM_URL}
            ctaLabel="Dosyami savunma acisindan kontrol et"
            placement="tr_extraordinary_circumstances_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren unsurlar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Savunmanin genel ve yuzeysel kalmasi.</li>
                <li>Rota degisikligi ve `nihai varis` farkinin net belgelenmesi.</li>
                <li>Mesajlar, uygulama ekranlari ve yeniden yonlendirme kayitlari.</li>
                <li>Havayolunun olay tipini somut baglamda aciklayamamasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Bu ifadeyi kesin son karar gibi okumak.</li>
                <li>Olayin ne oldugunu hic ayirmamak.</li>
                <li>Sadece ilk gecikmeye bakip `nihai varis`i unutmak.</li>
                <li>Yazisma zincirini ve timeline'i zayif birakmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Kelime guclu gorunebilir, ama asıl mesele somutluk
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                `Olaganustu kosullar` ifadesi resmi ve kesin gorundugu icin kullaniciyi hizla geri cektirebilir. Ama
                iyi incelemede bakilan sey tek kelime degildir. Havayolu ne oldugunu, ne zaman oldugunu ve bunun sizin
                yolculugunuza nasil yansidigini ne kadar net anlatiyor, asil soru budur.
              </p>
              <p>
                Bazen savunma sadece genel bir kalip olur. Bu durumda mailin resmi tonu, dosyanin gercek gucunden daha
                buyuk gorunebilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. `Nihai varis` ve tam zaman cizelgesi burada da merkezde kalir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Savunma ne olursa olsun, yolcunun sonunda hedefe ne zaman vardigi ve bu surecte nasil bir toplam zaman
                kaybi yasandigi dosyanin agirligini belirler. Ilk gecikme kisa gorunebilir ama yeni rota, bekleme ve
                aktarma kaybi toplam resmi buyutebilir.
              </p>
              <p>
                Bu yuzden{" "}
                <a
                  href={CLAIM_URL_TEXT}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    pushClaimWingerEvent("claimwinger_cta_click", {
                      locale: "tr",
                      placement: "tr_extraordinary_circumstances_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  savunmayi tam rota ve nihai varis etkisiyle birlikte okumak
                </a>{" "}
                cok daha gercekci sonuc verir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <TextSearch className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Sonraki adim nasil daha guclu hale getirilir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En iyi sonraki adim, havayolunun kullandigi kalibi sadece tekrar etmek degil; o kalibin eksikaktigi
                yeri gormektir. Zaman cizelgesini, mesajlari, yeni rotayi, boarding pass ve ek masraflari tek duzende
                toplamak dosyayi ciddi sekilde guclendirir.
              </p>
              <p>
                Boylece tartisma kelime uzerinden degil, denetlenebilir olay akisi uzerinden kurulur. Bu da ozellikle
                karisik veya birden fazla degisiklige ugrayan yolculuklarda fark yaratir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, `olaganustu kosullar` kelimesini dosyanin nihai kaderi gibi okumaktir. Oysa bir cok
              durumda asil mesele kelime degil, havayolunun bunu olayla ne kadar somut baglayabildigi ve sizin belge
              tarafinizin ne kadar duzgun oldugudur.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  `Olaganustu kosullar` yaziyorsa dosya biter mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Bu ifade tek basina yeterli degildir. Savunmanin somutlugu ve olayla kurdugu bag dikkatle
                  okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En guclu veri hangisidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cogu zaman tek belge degil; `nihai varis`, yazisma zinciri, rota degisikligi ve tum zaman cizelgesi
                  birlikte en guclu resmi verir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Her teknik veya operasyonel sorun `olaganustu` mudur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Havayolunun kullandigi ifade ile dosyanin gercek gucu ayni sey degildir; detaylar ve olay
                  akisi birlikte degerlendirilmelidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
