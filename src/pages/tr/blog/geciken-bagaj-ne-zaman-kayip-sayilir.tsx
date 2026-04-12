import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "geciken-bagaj-ne-zaman-kayip-sayilir";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-delayed-baggage-when-lost&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-delayed-baggage-when-lost&utm_content=text_link";

export default function TrWhenDelayedBaggageBecomesLostArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Geciken bagaj ne zaman kayip sayilir?"
        description="Geciken bagaj ne zaman kayip sayilir? Turk yolcular icin 21 gun esigi, teslim bekleme mantigi ve kalici kayip dosyasini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Geciken bagaj ne zaman kayip sayilir?",
            description:
              "Geciken bagaj ne zaman kayip sayilir? Turk yolcular icin 21 gun esigi, teslim bekleme mantigi ve kalici kayip dosyasini anlatan net rehber.",
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
                name: "Geciken bagaj icin tek bir sihirli saat var midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Kisa gecikme ile kalici kayip arasinda pratikte bir gecis vardir. Bir cok dosyada 21 gun esigi cok onemli hale gelir, ama belge zinciri ve teslim akisi yine de belirleyicidir.",
                },
              },
              {
                "@type": "Question",
                name: "21 gun neden bu kadar onemlidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku bir cok yolcu ve dosya bu esikten sonra bagaji sadece gecikmis gibi degil, artik kalici kayip mantigiyla okumaya baslar.",
                },
              },
              {
                "@type": "Question",
                name: "Bu esige kadar hicbir sey yapmadan beklemek dogru mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. PIR, takip mesajlari, teslimat denemeleri ve belge duzeni ilk gunden itibaren cok onemlidir. Beklemek ama belge toplamamak dosyayi zayiflatir.",
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
            <span className="text-slate-900 dark:text-white">Geciken bagaj ne zaman kayip sayilir</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Geciken bagaj ne zaman kayip sayilir?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, kullanicinin geciken bagaj dosyasinda bir noktadan sonra sormaya basladigi temel sorudur: halen
              sadece beklemeli miyim, yoksa konu artik kalici kayip dosyasina mi donuyor? Dogru analiz, sadece saat
              saymaktan degil, <strong>teslimatin gercekten gelmeyisinden</strong>, <strong>takip akisinin nasil
              ilerlediginden</strong> ve <strong>dosyanin hangi noktada gecikmeden kalici kayip mantigina
              kaydigindan</strong> dogar.
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
              <strong>Geciken bagaj icin tek bir sihirli saat yoktur, ama bir cok dosyada 21 gun esigi cok onemli hale gelir.</strong>
              Bu noktadan sonra konu pratikte sadece gecikme gibi degil, giderek daha fazla kalici kayip dosyasi
              mantigiyla okunmaya baslar.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger gecikme vs kayip analizi"
            title="Geciken bagaj dosyanizin hangi asamada oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, ya erken panik yapmak ya da tam tersine gereksiz beklemektir. PIR, takip akisi, teslimat denemeleri ve zaman cizgisi birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj dosyami kontrol et"
            placement="tr_delayed_baggage_when_lost_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>PIR kaydinin ilk gunden itibaren acik olmasi.</li>
                <li>Takip mesajlari ve teslimat bekleme akisinin korunmasi.</li>
                <li>Bagajin ne zaman hala gelmedigini gosteren net zaman cizgisi.</li>
                <li>Gecikme ile kalici kayip dosyasinin duzenli sekilde ayrilmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Tek bir saat arayip belge toplamayi birakmak.</li>
                <li>21 gun dolana kadar hicbir sey yapmadan beklemek.</li>
                <li>Gecikme surecini kayda baglamamak.</li>
                <li>Kalici kayip mantigina gecisi fark etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Geciken bagaj ile kalici kayip ayni sey degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilk gunlerde dosya genelde 'geciken bagaj' mantiginda okunur: takip vardir, teslim umudu devam eder
                ve odak daha cok ne zaman gelecegidir. Ama zaman uzadikca ve teslimat hala gerceklesmedikce dosya agirlik
                degistirir. Kullanici icin soru artik sadece beklemek degil, dosyayi kalici kayip mantigina ne kadar
                temiz tasiyacagidir.
              </p>
              <p>
                Bu gecis anini anlamak, hem beklentiyi hem de belge stratejisini degistirir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Neden 21 gun esigi sikca onemli gorulur?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bir cok dosyada 21 gun esigi, sadece duygusal bir bekleme limiti degil, pratikte dosyanin artik
                gecikmeden kalici kayip tarafina daha guclu sekilde kaydigi nokta olarak gorulur. Ama bu, ilk 20 gunun
                onemsiz oldugu anlamina gelmez; aksine o surecte belge zinciri ne kadar gucluyse sonraki asama da o
                kadar daha okunabilir olur.
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
                      placement: "tr_delayed_baggage_when_lost_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  gecikme ile kalici kayip cizgisini birlikte incelemek
                </a>{" "}
                tabloyu daha hizli netlestirir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En buyuk farki, bu surecte ne yaptiginiz yaratir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                21 gunu saymak tek basina guclu dosya yaratmaz. Asil fark, bu surecte PIR kaydini, takip mesajlarini,
                teslimat denemelerini ve varsa icerik notlarini ne kadar temiz topladiginizdir. Beklemek ama belge
                uretmemek, dosyayi zayif bir beklenti haline getirebilir.
              </p>
              <p>
                Guclu dosya, zamanla birlikte belgelerini de buyuten dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, ya ilk gunden bagaji kesin kayip sanmak ya da 21 gun dolana kadar hicbir strateji
              kurmamaktir. Oysa en saglam cizgi, ilk gunden itibaren belge toplayip dosyanin evrimini takip etmektir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Geciken bagaj icin tek bir sihirli saat var midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Kisa gecikme ile kalici kayip arasinda pratikte bir gecis vardir. Bir cok dosyada 21 gun
                  esigi cok onemli hale gelir, ama belge zinciri ve teslim akisi yine de belirleyicidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  21 gun neden bu kadar onemlidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku bir cok yolcu ve dosya bu esikten sonra bagaji sadece gecikmis gibi degil, artik kalici kayip
                  mantigiyla okumaya baslar.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu esige kadar hicbir sey yapmadan beklemek dogru mu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. PIR, takip mesajlari, teslimat denemeleri ve belge duzeni ilk gunden itibaren cok onemlidir.
                  Beklemek ama belge toplamamak dosyayi zayiflatir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
