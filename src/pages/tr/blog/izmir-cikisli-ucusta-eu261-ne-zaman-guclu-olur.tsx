import Link from "next/link";
import { CheckCircle2, MapPin, PlaneTakeoff, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "izmir-cikisli-ucusta-eu261-ne-zaman-guclu-olur";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-izmir-departure-eu261&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-izmir-departure-eu261&utm_content=text_link";

export default function TrIzmirDepartureEu261Article() {
  return (
    <LayoutTr>
      <SEO
        title="Izmir cikisli ucusta EU261 ne zaman guclu olur?"
        description="Izmir cikisli ucuslarda EU261 ne zaman guclu olabilir? Turk yolcular icin kalkis noktasi, tasiyici ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Izmir cikisli ucusta EU261 ne zaman guclu olur?",
            description:
              "Izmir cikisli ucuslarda EU261 ne zaman guclu olabilir? Turk yolcular icin kalkis noktasi, tasiyici ve nihai varis mantigini anlatan net rehber.",
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
                name: "Izmir cikisli bir ucus otomatik olarak EU261 disinda mi kalir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Izmir cikisli olmasi tek basina otomatik sonuc vermez. Tasiyici yapisi, rota zinciri ve nihai varis birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Izmir cikisli dosyalarda en onemli nokta nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En onemli nokta, sadece kalkis sehrine degil; isleten tasiyiciye, baglanti yapisina ve yolcunun son hedefe gercekte ne zaman vardigina bakmaktir.",
                },
              },
              {
                "@type": "Question",
                name: "Izmir cikisli bir dosya neden yine de guclu olabilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku bazi diaspora, tatil ve karmasik baglanti rotalarinda tasiyici yapisi ile final varis etkisi birlikte okundugunda dosya sanildigindan daha guclu olabilir.",
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
            <span className="text-slate-900 dark:text-white">Izmir cikisli ucus ve EU261</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              GEO Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Izmir cikisli ucusta EU261 ne zaman guclu olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Izmir cikisli dosyalar, `TR + diaspora EU` icin cok degerli bir GEO klastri olusturur, cunku burada
              sadece tatil hareketi degil; aile ziyareti, diaspora donusu ve Avrupa baglantili seyahatler de gucludur.
              Oysa gercek analiz, <strong>kalkis noktasi</strong>, <strong>isleten tasiyici</strong> ve
              <strong> nihai varis sonucu</strong> birlikte okundugunda anlam kazanir.
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
              <strong>Izmir cikisli bir dosya otomatik olarak ne disarda ne de otomatik guclu sayilir.</strong>{" "}
              Asil farki yaratan sey, ucusun hangi tasiyici tarafindan isletildigi, rota zinciri ve yolcunun son
              hedefe gercekte ne zaman vardigidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Izmir kalkis analizi"
            title="Izmir cikisli dosyanizin EU261 acisindan ne kadar guclu oldugunu hizli kontrol edin"
            description="Bir cok yolcu sadece Izmir kalkisini gorup dosyayi erken kapatiyor. Oysa tasiyici, rota ve final yolculuk sonucu birlikte okununca tablo degisebilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Izmir cikisli dosyami kontrol et"
            placement="tr_izmir_departure_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Dosyaya sadece kalkis sehrinden degil, tum rotadan bakmak.</li>
                <li>Isleten tasiyiciyi netlestirmek.</li>
                <li>Nihai varis zamanini belgelemek.</li>
                <li>Baglanti ve yeniden rota bilgilerini saklamak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece “Izmir cikisli” diye dosyayi kapatmak.</li>
                <li>Bilet markasi ile isleten tasiyiciyi karistirmak.</li>
                <li>Son hedefe etkisini kaydetmemek.</li>
                <li>Karmasik baglantili rotalari tek segment gibi okumak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Izmir cikisi tek satirlik cevap vermez
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En yaygin kisayol su olur: “Izmir'den kalktiysa EU261 zaten yok.” Pratikte bu kadar sert yorumlar cok
                sayida dosyayi yanlis okutur. Cunku bazen farki yaratan sey sadece kalkis yeri degil, operator yapisi
                ile tum yolculugun nasil kuruldugudur.
              </p>
              <p>
                Bu nedenle Izmir cikisi, analizin baslangic noktasi olabilir ama tek karari vermez.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Diaspora, tatil ve baglantili Avrupa rotalari ayni aramada bulusur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Izmir cikisli ucuslarin bir kismi dogrudan Avrupa'ya, bir kismi da karmasik baglanti zincirleriyle
                devam eder. Kullanici bunu tek tip yolculuk sanabilir. Oysa dosyanin gucu, isleten tasiyici ve rota
                zinciri netlestiginde cok daha dogru okunur.
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
                      placement: "tr_izmir_departure_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  tasiyici ve nihai varis analizini birlikte yapmak
                </a>{" "}
                dosyanin gercek gucunu daha dogru gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <PlaneTakeoff className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Asil agirlik, son hedefe ne oldugunda ortaya cikar
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Izmir cikisli dosyalarda da belirleyici olan sey, yolcunun son hedefe ne kadar gec vardigidir. Bazen
                ilk segmentte sorun kucuk gorunebilir ama baglanti koptugunda veya yeni rota uzadiginda toplam zaman
                kaybi ciddi sekilde buyuyebilir.
              </p>
              <p>
                Bu yuzden PNR, boarding pass, e-posta, yeni rota ve gercek nihai varis saati birlikte saklanmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, Izmir cikisini dosyanin son cevabi sanmaktir. Oysa claimin gucu, kalkis noktasi kadar
              tasiyici ve son hedefe etkide de gizlidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Izmir cikisli dosya otomatik zayif midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Dosya sadece kalkis sehrine bakilarak kesin yorumlanmamalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Baglantili Izmir rotalari neden daha karmasik gorunur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku ilk segment, operator ve son hedefteki gecikme birlikte okunmadiginda dosya fazla erken
                  yorumlanabilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En kritik belge hangisidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Tek bir belge yetmez; PNR, boarding pass, mesajlar, yeni rota ve gercek nihai varis zamani birlikte
                  dosyayi guclendirir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
