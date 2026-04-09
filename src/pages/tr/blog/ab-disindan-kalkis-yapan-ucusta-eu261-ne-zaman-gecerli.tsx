import Link from "next/link";
import { CheckCircle2, Globe2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "ab-disindan-kalkis-yapan-ucusta-eu261-ne-zaman-gecerli";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-non-eu-departure&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-non-eu-departure&utm_content=text_link";

export default function TrNonEuDepartureArticle() {
  return (
    <LayoutTr>
      <SEO
        title="AB disindan kalkan ucusta EU261 ne zaman gecerli olur?"
        description="AB disindan kalkan ucuslarda EU261 ne zaman gecerli olabilir? Turk yolcular icin rota, tasiyici ve nihai yolculuk mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AB disindan kalkan ucusta EU261 ne zaman gecerli olur?",
            description:
              "AB disindan kalkan ucuslarda EU261 ne zaman gecerli olabilir? Turk yolcular icin rota, tasiyici ve nihai yolculuk mantigini anlatan net rehber.",
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
                name: "AB disindan kalkan bir ucusta EU261 hic uygulanmaz mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir, bu kadar basit degildir. AB disindan kalkis yapan dosyalarda da tasiyici yapisi, rota zinciri ve yolculugun tamamı birlikte okundugunda EU261 ile temas eden guclu senaryolar cikabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu tip dosyalarda en kritik nokta nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik nokta, sadece kalkis noktasina bakmamak ve isleten tasiyiciyi, baglantili seyahati ve nihai yolculuk sonucunu birlikte degerlendirmektir.",
                },
              },
              {
                "@type": "Question",
                name: "Turk yolcular neden bu konuda cok arama yapiyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku Turkiye cikisli ama Avrupa ile baglantili cok fazla rota vardir. Yolcular bu nedenle AB disindan baslayan ucuslarda hak dogup dogmadigini ogrenmek ister.",
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
            <span className="text-slate-900 dark:text-white">AB disindan kalkis ve EU261</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              EU261 Temelleri
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              AB disindan kalkan ucusta EU261 ne zaman gecerli olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, Turk yolcularin en sik takildigi konulardan biridir. Cunku bircok kisi “AB disindan kalktiysa EU261
              biter” diye dusunur. Oysa gercek analiz bundan daha karmaşıktır. Asıl soru sadece ucusun nereden
              kalktigi degil, <strong>hangi tasiyicinin islettigi</strong>, <strong>rota zincirinin nasil kuruldugu</strong> ve
              <strong> yolculugun final sonucunun ne oldugu</strong> sorularidir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Globe2 className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>AB disindan kalkan bir ucus, sadece bu nedenle otomatik olarak EU261 disina dusmez.</strong>
              Ancak dosya gucu, kalkis noktasindan cok daha fazlasina baglidir: tasiyici tipi, rota yapisi, baglanti
              mantigi ve tum yolculugun birlikte okunmasi gerekir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger kapsam analizi"
            title="AB disindan kalkan dosyanizin yine de guclu olup olmadigini kontrol edin"
            description="Bir cok kullanici bu tip dosyalari daha baslamadan zayif sanir. Oysa rota ve tasiyici mantigi birlikte okundugunda sonucun sandiginizdan daha guclu olmasi mumkundur."
            ctaHref={CLAIM_URL}
            ctaLabel="Dosya kapsam kontrolunu ac"
            placement="tr_non_eu_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Analizi guclendiren sorular
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ucusu hangi tasiyici gercekten isletti?</li>
                <li>Rota zinciri tek parca mi, baglantili mi?</li>
                <li>Nihai varis sonucu ne kadar etkilendi?</li>
                <li>Yolculuk Avrupa ile hangi noktada temas ediyor?</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatali kisa yollar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece kalkis ulkesine bakmak.</li>
                <li>Bilet markasini gercek tasiyici sanmak.</li>
                <li>Baglantili yapilari tek segment gibi okumak.</li>
                <li>Final yolculuk etkisini hesaplamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Kalkis noktasi onemlidir, ama tek basina karar vermez
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yolcularin cogu ilk olarak kalkis noktasina bakar ve oradan hizli karar vermek ister. Bu mantik kismen
                dogru olsa da, AB disindan kalkan dosyalarda tek basina yeterli degildir. Cunku bazi rotalarda gercek
                sonuca etki eden asil unsur tasiyici yapisidir.
              </p>
              <p>
                Bu nedenle “AB disi kalkis = bitti” formulu, SEO olarak populer olsa da hukuki olarak fazla kabadir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Tasiyici tipi, Turkish Airlines ve benzeri dosyalarda oyunu degistirebilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Turk yolcular acisindan bu konu ozellikle onemlidir, cunku Turkish Airlines, Pegasus veya farkli
                codeshare yapilarinda kullanicilar tek bir kuralla karar vermeye calisir. Oysa dosyanin gucu, bilette
                yazan marka ile gercek isleten tasiyicinin ayriminda ortaya cikabilir.
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
                      placement: "tr_non_eu_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  dosyanin somut tasiyici ve rota analizi
                </a>{" "}
                tahminden daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Baglantili yolculuklarda final sonuc her seyi degistirebilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                AB disindan baslayan ama Avrupa ile guclu bag kuran baglantili seyahatlerde, tek bir segment yerine
                tum zinciri okumak gerekir. Bazen ilk problem gozle gorunur ama gercek agirlik nihai varis sonucunda
                ortaya cikar.
              </p>
              <p>
                Bu nedenle dosyanin gucu, yalnizca ilk kalkis havaalanina degil, butun yolculuk yapisina baglanir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, AB disindan kalkisi nihai ve tek kriter sanmaktir. Oysa tasiyici ve tum rota zinciri birlikte
              okunmadiginda, guclu dosyalar gereksiz yere elenebilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Istanbul cikisli bir ucusta yine de sans olabilir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet, ama bu soru tek satirlik cevapla kapanmaz. Tasiyici ve rota zinciri birlikte incelenmelidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bilette AB havayolu yaziyorsa yeterli mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Her zaman degil. Isleten tasiyici ve fiili ucus yapisi daha belirleyici olabilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu neden TR + diaspora EU pazari icin cok iyi bir konu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku kullanicilar en cok burada yanlis karar verir: “AB disindan kalkti, bitti” varsayimi cok yaygindir ve duzeltildiginde yuksek niyetli trafik dogurur.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
