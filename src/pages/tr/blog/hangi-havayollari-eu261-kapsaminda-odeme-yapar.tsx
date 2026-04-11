import Link from "next/link";
import {
  CheckCircle2,
  Globe2,
  Plane,
  ShieldAlert,
  Sparkles,
  XCircle,
} from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "hangi-havayollari-eu261-kapsaminda-odeme-yapar";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-covered-airlines&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-covered-airlines&utm_content=text_link";

export default function TrCoveredAirlinesArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Hangi havayollari EU261 kapsaminda odeme yapar?"
        description="Hangi havayollari EU261 kapsaminda odeme yapar? Turk yolcular icin marka, isleten tasiyici, kalkis noktasi ve rota mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hangi havayollari EU261 kapsaminda odeme yapar?",
            description:
              "Hangi havayollari EU261 kapsaminda odeme yapar? Turk yolcular icin marka, isleten tasiyici, kalkis noktasi ve rota mantigini anlatan net rehber.",
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
            datePublished: "2026-04-10",
            dateModified: "2026-04-10",
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
                name: "EU261 sadece Avrupa havayollarina mi uygulanir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Sadece marka veya havayolunun milliyeti yeterli degildir. Kalkis noktasi, isleten tasiyici ve rota yapisi birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Turk havayolu oldugu icin otomatik olarak kapsam disi midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Turk havayolu olmak tek basina otomatik kapsam disi anlamina gelmez. Asil analiz, ucusun nereden basladigi ve gercekten hangi tasiyici tarafindan isletildigi uzerinden yapilir.",
                },
              },
              {
                "@type": "Question",
                name: "En kritik soru hangisidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik soru sadece hangi havayolu oldugu degil, hangi rotada, hangi kalkis noktasi ile ve hangi isleten tasiyiciyle uculdugudur.",
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
            <span className="text-slate-900 dark:text-white">
              Hangi havayollari EU261 kapsaminda odeme yapar?
            </span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Kapsam Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Hangi havayollari EU261 kapsaminda odeme yapar?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              En yaygin yanlis varsayim sudur: <strong>“Sadece Avrupa havayollari oder.”</strong> Gercekte marka tek
              basina yetmez. Dosyanin gucu cogu zaman havayolunun adindan cok{" "}
              <strong>kalkis noktasi, isleten tasiyici ve rota mantigi</strong> ile belirlenir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Globe2 className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>EU261 kapsaminda odeme yapan sey marka degil, uygun hukuki senaryodur.</strong> Bazi Avrupa
              havayollari bu alanda daha sik gorunur, ama dosya analizi her zaman ucusun nereden kalktigina, kimin
              islettigine ve yolculugun nasil kurulduguna bakilarak yapilir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger havayolu kontrolu"
            title="Havayolunuzun ve rotanizin claim gucunu simdi kontrol edin"
            description="Makalenin sonuna gelmeden de dosyanin ilk gucunu gorebilirsiniz. ClaimWinger, Turkce olarak rota, tasiyici ve kapsam mantigini hizla kontrol etmenize yardim eder."
            ctaHref={CLAIM_URL}
            ctaLabel="Havayolu ve rota kontrolunu ac"
            placement="tr_covered_airlines_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Guclu sinyaller
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Avrupa cikisli bir rota.</li>
                <li>Isleten tasiyicinin net sekilde belirlenebilmesi.</li>
                <li>Tek rezervasyon altinda okunan baglantili yolculuk.</li>
                <li>Nihai varis zamaninin iyi dokumante edilmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Siklikla yapilan hata
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece logoya veya marka adina bakmak.</li>
                <li>Bilette yazan pazarlama markasini esas almak.</li>
                <li>Rota yerine havayolunun ulkesine odaklanmak.</li>
                <li>Baglantili yolculugu gereksiz yere parcalamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Plane className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. “Hangi havayolu?” sorusu tek basina yetmez
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yolcularin cogu once markaya bakar: Turkish Airlines, Pegasus, Lufthansa, Ryanair veya KLM. Bu
                anlasilir bir refleks, ama hukuki degerlendirme icin eksik kalir. Cunku EU261 analizi cogu zaman
                havayolunun adindan once <strong>ucusun nereden basladigina</strong> ve gercekte kim tarafindan
                isletildigine bakar.
              </p>
              <p>
                Yani dogru soru “Hangi havayolu oder?” degil, “Bu rota bu tasiyici ile hangi kapsam mantigina
                giriyor?” olmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Avrupa havayolu olmak guclu bir isaret olabilir, ama garanti degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Avrupa merkezli veya AB baglantili tasiyicilar pek cok dosyada onemli rol oynar. Ancak bu, her
                ucuslarinda otomatik odeme oldugu anlamina gelmez. Gecikme seviyesi, iptalin yapisi, `nihai varis`
                etkisi ve dosyanin kapsam alani hala birlikte okunmalidir.
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
                      placement: "tr_covered_airlines_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  somut rota ve tasiyici kontrolu
                </a>{" "}
                yapmak, marka uzerinden tahminde bulunmaktan daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Turk havayoluysa otomatik disari demek de yanlistir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                TR pazarinda en sik hata, Turk markali bir havayolunu gorur gormez dosyayi tamamen kapatmaktir. Oysa
                bazi durumlarda ucusun yapisi, kalkis noktasi ve baglantili zincir yine detayli inceleme gerektirir.
                Yani “Turk havayolu = kesin kapsam disi” seklindeki kisa yol, gereksiz lead kaybina neden olur.
              </p>
              <p>
                Ozellikle diaspora rotalarinda, baglantili ucuslarda ve pazarlama markasi ile isleten tasiyicinin
                ayrildigi senaryolarda yuzeysel okuma yerine detayli analiz gerekir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, odeme sorusunu “hangi havayolu?” basligina kilitlemektir. Gercekte odeme gucu; marka,
              kalkis noktasi, isleten tasiyici ve `nihai varis` etkisinin birlikte okunmasiyla ortaya cikar.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  EU261 sadece Avrupa havayollarina mi uygulanir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Avrupa markasi tek basina yeterli degildir. Ucusun nereden kalktigi ve gercekte hangi
                  tasiyici tarafindan isletildigi birlikte incelenmelidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Turk havayolu oldugu icin otomatik olarak kapsam disi midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Bazi dosyalarda marka ilk bakista olumsuz gorunse bile rota ve tasiyici mantigi daha ayrintili
                  okunmalidir. Otomatik varsayim yapmak yanlistir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En kritik soru hangisidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik soru sadece hangi havayoluyla uculdugu degil; hangi rotada, hangi kalkis noktasi ile ve
                  hangi isleten tasiyiciyle uculdugudur.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
