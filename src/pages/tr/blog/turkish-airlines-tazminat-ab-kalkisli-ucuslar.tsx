import Link from "next/link";
import {
  CheckCircle2,
  Plane,
  ShieldAlert,
  Sparkles,
  Timer,
  XCircle,
} from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "turkish-airlines-tazminat-ab-kalkisli-ucuslar";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-turkish-airlines-compensation-eu-departure&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-turkish-airlines-compensation-eu-departure&utm_content=text_link";

export default function TrTurkishAirlinesCompensationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Turkish Airlines tazminat: AB kalkisli ucuslarda ne zaman guclu olur?"
        description="Turkish Airlines tazminat hakki AB kalkisli ucuslarda ne zaman guclu olur? Turk yolcular icin gecikme, iptal, nihai varis ve rota mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Turkish Airlines tazminat: AB kalkisli ucuslarda ne zaman guclu olur?",
            description:
              "Turkish Airlines tazminat hakki AB kalkisli ucuslarda ne zaman guclu olur? Turk yolcular icin gecikme, iptal, nihai varis ve rota mantigini anlatan net rehber.",
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
                name: "Turkish Airlines ucusunda AB'den kalkis varsa tazminat sansi artar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bir cok dosyada evet, bu guclu bir baslangic noktasi yaratir. Ama son karar yine rota yapisi, aksaklik tipi ve nihai varis etkisiyle verilir.",
                },
              },
              {
                "@type": "Question",
                name: "Sadece Turkish Airlines markasi yeterli mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Marka tek basina yetmez. Asil analiz, AB kalkisi, aksakligin tipi, baglanti zinciri ve yolcunun son varis sonucu uzerinden yapilir.",
                },
              },
              {
                "@type": "Question",
                name: "AB kalkisli Turkish Airlines ucusunda en kritik olcu nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik olculerden biri nihai varise ne kadar gec ulasildigidir. Ozellikle baglantili seyahatlerde bu veri dosyanin agirligini belirler.",
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
            <span className="text-slate-900 dark:text-white">Turkish Airlines tazminat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Turkish Airlines tazminat: AB kalkisli ucuslarda ne zaman guclu olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Turk diasporasi icin en degerli aramalardan biri budur, cunku kullanici sadece “EU261 gecerli mi?”
              diye degil, daha dogrudan <strong>“Turkish Airlines ile ne kadar guclu bir dosyam olabilir?”</strong>
              diye dusunur. AB’den kalkan Turkish Airlines ucuslarinda bu soru ozellikle guclu hale gelir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-11</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>AB kalkisli Turkish Airlines ucuslari bircok durumda daha guclu tazminat mantigi tasir.</strong>
              Ama marka tek basina yetmez. Gecikme mi, iptal mi, baglanti kirildi mi ve yolcu nihai varise ne kadar
              farkla ulasti sorulari hala birlikte okunmalidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Turkish Airlines kontrolu"
            title="AB kalkisli Turkish Airlines dosyanizin ne kadar guclu oldugunu hizla kontrol edin"
            description="Ozellikle Almanya, Hollanda, Fransa, Belcika ve Avusturya kalkisli Turkish Airlines dosyalarinda yuzeysel tahminler yerine rota ve nihai varis mantigini birlikte okumak gerekir."
            ctaHref={CLAIM_URL}
            ctaLabel="Turkish Airlines dosyami kontrol et"
            placement="tr_turkish_airlines_comp_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>AB kalkisli bir Turkish Airlines rotasi.</li>
                <li>Net sekilde belgelenmis gecikme veya iptal.</li>
                <li>Baglantili seyahatte nihai varis kaybi.</li>
                <li>Mesajlar, boarding pass ve yeni rota kayitlari.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yanlislar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece marka gorup dosyayi otomatik guclu sanmak.</li>
                <li>Ilk segmenti okuyup tum zinciri gormemek.</li>
                <li>Sadece kalkis gecikmesine odaklanmak.</li>
                <li>Nihai varis saatini kaydetmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Timer className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. AB kalkisi, Turkish Airlines dosyasinda ilk buyuk avantaji yaratir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Turkish Airlines ile uculuyor olmasi kullaniciyi bazen gereksiz yere kararsiz birakir. Ama dosya AB’den
                basliyorsa analiz cogu zaman daha guclu bir zeminde baslar. Bu, ozellikle diaspora rotalarinda en
                onemli farklardan biridir.
              </p>
              <p>
                Yani burada asıl odak, sadece havayolu markasi degil, <strong>ucusun AB’den kalkmasi</strong> ve bunun
                dosyaya ne kattigidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Gecikme, iptal ve baglanti kaybi ayni agirlikta okunmaz
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici “Turkish Airlines tazminat” diye aradiginda tek bir cevap bekler, ama pratikte gecikme,
                iptal ve aktarma kopmasi farkli agirliklarla okunur. Bazen ilk gecikme kucuk gorunur ama baglanti
                kopunca dosya cok daha guclu hale gelir.
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
                      placement: "tr_turkish_airlines_comp_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  sadece gecikme dakikasina degil, tum seyahatin sonucuna bakmak
                </a>{" "}
                cok daha dogru sonuc verir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Nihai varis, AB kalkisli Turkish Airlines dosyalarinda en kritik olculerden biridir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bircok yolcu ilk kalkis ekranina bakar. Oysa baglantili Turkish Airlines seyahatlerinde asıl fark,
                yolcunun son hedefe ne kadar gec vardiginda ortaya cikar. Bu veri, dosyanin agirligini ciddi sekilde
                etkileyebilir.
              </p>
              <p>
                Bu yuzden sadece ilk gecikmeyi degil, son boarding bilgisini, yeni rota varsa onu ve gercek varis
                saatini birlikte saklamak gerekir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, AB kalkisi oldugu icin dosyayi otomatik kazanilmis sanmak veya tam tersi Turkish Airlines
              markasi yuzunden gereksiz yere zayif gormektir. Karar, rota ve nihai varis mantigiyla verilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Turkish Airlines ucusunda AB'den kalkis varsa tazminat sansi artar mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bir cok dosyada evet, bu guclu bir baslangic noktasi yaratir. Ama son karar hala aksakligin tipi ve
                  yolcunun nihai varis sonucuyla verilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Sadece Turkish Airlines markasi yeterli mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Marka tek basina yetmez. AB kalkisi, baglanti yapisi ve nihai varis sonucu birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  AB kalkisli Turkish Airlines ucusunda en kritik olcu nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik olculerden biri yolcunun nihai varise ne kadar gec ulastigidir, ozellikle baglantili
                  seyahatlerde.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
