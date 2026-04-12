import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-gecikmesinde-hangi-masraflar-geri-istenebilir";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-delayed-baggage-expenses&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-delayed-baggage-expenses&utm_content=text_link";

export default function TrDelayedBaggageExpensesArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj gecikmesinde hangi masraflar geri istenebilir?"
        description="Bagaj gecikmesinde hangi masraflar geri istenebilir? Turk yolcular icin makul gecici alislar, fis duzeni ve zayif giderleri anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj gecikmesinde hangi masraflar geri istenebilir?",
            description:
              "Bagaj gecikmesinde hangi masraflar geri istenebilir? Turk yolcular icin makul gecici alislar, fis duzeni ve zayif giderleri anlatan net rehber.",
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
            datePublished: "2026-04-12",
            dateModified: "2026-04-12",
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
                name: "Bagaj gecikmesinde en guclu masraflar hangileridir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En guclu masraflar genelde gerekli ve makul gecici alislardir. Temel kiyafet, hijyen urunleri ve acik ihtiyaclar daha savunulabilir gorunur.",
                },
              },
              {
                "@type": "Question",
                name: "Luks veya asiri yuksek alislar zayiflayabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Bagaj gecikmesi dosyalarinda en guclu cizgi genelde zaruri ihtiyaclar olur. Asiri yuksek veya baglamdan kopuk alislar daha zayif gorunebilir.",
                },
              },
              {
                "@type": "Question",
                name: "Fis olmadan masraf dosyasi zayiflar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cogu durumda evet. Fis, fatura, tarih ve odeme izi ne kadar netse, masraf zinciri o kadar daha okunabilir hale gelir.",
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
            <span className="text-slate-900 dark:text-white">Bagaj gecikmesinde masraflar</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj gecikmesinde hangi masraflar geri istenebilir?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, yolcunun bagaji gelmediginde en hizli cevap aradigi pratik sorulardan biridir: neyi almak mantikli,
              neyi almak gereksiz ve neyin parasini sonradan savunmak daha kolay olur? Dogru analiz, sadece
              'harcadim' demekten degil, <strong>masrafin ne kadar gerekli oldugundan</strong>, <strong>ne kadar
              makul kaldigindan</strong> ve <strong>fis zincirinin ne kadar temiz oldugundan</strong> dogar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-12</span>
              <span>&bull;</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Bagaj gecikmesinde en guclu masraflar genelde gerekli, makul ve gecici alislardir.</strong>
              Temel kiyafet, hijyen ve acik ihtiyaclar daha savunulabilir olur; luks, asiri pahali veya baglamdan kopuk
              alislar ise dosyayi zayiflatabilir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger bagaj masraf analizi"
            title="Bagaj gecikmesi masraflarinizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, ihtiyacla ilgisiz harcamalari ayni torbaya koymaktir. Makul alislar, fis duzeni ve zaman akisi birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Masraf dosyami kontrol et"
            placement="tr_delayed_baggage_expenses_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Daha guclu gorunen giderler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Temel kiyafet ve ic camasiri gibi acik gecici ihtiyaclar.</li>
                <li>Hijyen urunleri ve gunluk zorunlu malzemeler.</li>
                <li>Kisa sureli ve bagaja erisilemedigi icin yapilan makul alislar.</li>
                <li>Fis, tarih ve odeme iziyle net belgelenen giderler.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Daha zayif gorunebilen giderler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Luks, asiri pahali veya acik ihtiyac baglamindan kopuk alislar.</li>
                <li>Fis veya odeme izi olmayan harcamalar.</li>
                <li>Bagaj gelmeden once yapildigi belli olmayan giderler.</li>
                <li>Toplu ve karisik sekilde anlatilan, ayristirilmamis masraflar.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu dosyada guclu masraf, genelde zaruri ve gecici masraftir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bagaj gecikmesinde mantik genelde sudur: yolcu, valizine ulasamadigi icin temel ihtiyaclarini gecici
                olarak karsilamak zorunda kalmistir. Bu yuzden makul kiyafet, ic camasiri, temel kozmetik ve hijyen
                urunleri daha dogal bir zemine oturur. Sorun, bu cizginin luksia veya baglam disi harcamaya kaymasiyla
                baslar.
              </p>
              <p>
                Yani burada savunulan sey, konfor alisi degil, gecici ihtiyacin mantikli karsilanmasidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Fis ve zaman cizgisi yoksa, iyi masraf bile zayiflayabilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bazen alinmis urunler makul olsa bile dosya yine de zayif kalir; cunku harcamanin ne zaman ve hangi
                baglamda yapildigi net degildir. Bu nedenle fis, fatura, kart hareketi veya odeme izi kadar tarih ve
                bagajin teslim edilmedigi zaman araligi da onemlidir.
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
                      placement: "tr_delayed_baggage_expenses_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  masraf zincirini belge akisi ile birlikte incelemek
                </a>{" "}
                tabloyu daha hizli netlestirir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En buyuk farki, toplama sekli yaratir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Daginik fisler, birbirine karismis alislar ve genel ifadelerle yazilmis gider listeleri, dogru
                masraflari bile zayif gosterebilir. Daha guclu dosya, her gideri kisa aciklamayla, tutarla ve tarihle
                netlestirir. Yani fark bazen alinan urunden cok, bunun nasil sunuldugunda ortaya cikar.
              </p>
              <p>
                Toplu ve acik dosyalar, 'gercekten ihtiyac miydi?' sorusuna daha rahat cevap verebilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, bagaj gecikmesini acik cek gibi gormektir. Oysa burada guc, ne kadar para harcandiginda
              degil, harcamanin ne kadar gerekli, makul ve belgeli gorundugunde yatar.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj gecikmesinde en guclu masraflar hangileridir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En guclu masraflar genelde gerekli ve makul gecici alislardir. Temel kiyafet, hijyen urunleri ve
                  acik ihtiyaclar daha savunulabilir gorunur.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Luks veya asiri yuksek alislar zayiflayabilir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet. Bagaj gecikmesi dosyalarinda en guclu cizgi genelde zaruri ihtiyaclar olur. Asiri yuksek veya
                  baglamdan kopuk alislar daha zayif gorunebilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Fis olmadan masraf dosyasi zayiflar mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cogu durumda evet. Fis, fatura, tarih ve odeme izi ne kadar netse, masraf zinciri o kadar daha
                  okunabilir hale gelir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
