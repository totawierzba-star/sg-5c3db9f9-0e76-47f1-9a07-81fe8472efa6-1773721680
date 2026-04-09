import Link from "next/link";
import { CheckCircle2, Globe, Map, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "eu261-hangi-ucuslarda-gecerli";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-flight-scope&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-flight-scope&utm_content=text_link";

export default function TrFlightScopeArticle() {
  return (
    <LayoutTr>
      <SEO
        title="EU261 hangi ucuslarda gecerli? TR–EU rotalari icin net rehber"
        description="EU261 hangi ucuslarda gecerli, hangilerinde gecerli olmayabilir? Turk yolcular ve Avrupa diasporasi icin rota, kalkis noktasi ve tasiyici mantigini anlatan rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "EU261 hangi ucuslarda gecerli? TR–EU rotalari icin net rehber",
            description:
              "EU261 hangi ucuslarda gecerli, hangilerinde gecerli olmayabilir? Turk yolcular ve Avrupa diasporasi icin rota, kalkis noktasi ve tasiyici mantigini anlatan rehber.",
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
                name: "EU261 her Turkiye–Avrupa ucusunda gecerli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. TR ile Avrupa arasindaki bircok rota EU261 ile temas eder, ancak her dosyada kalkis noktasi, tasiyici tipi ve tam rota yapisi birlikte incelenmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Kalkis noktasi neden bu kadar onemlidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku bircok durumda EU261 analizinin gucu ucusun nereden basladigina baglidir. Avrupa cikisli hatlar genellikle daha guclu bir temas yaratir.",
                },
              },
              {
                "@type": "Question",
                name: "Sadece havayolu markasina bakmak yeterli mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Bilette gorunen marka tek basina yeterli degildir. Ucusun gercek yapisi, isleten tasiyici ve rotanin butunu birlikte okunmalidir.",
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
            <span className="text-slate-900 dark:text-white">EU261 hangi ucuslarda gecerli?</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              EU261 Temelleri
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              EU261 hangi ucuslarda gecerli?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Turk yolcular icin en kritik sorulardan biri budur, cunku dosyanin gucu cogu zaman burada belirlenir.
              Ucus gecikmis veya iptal olmus olabilir, ama asıl degerlendirme once burada baslar:
              <strong> bu rota EU261 alanina giriyor mu?</strong> Yanlis cevap, guclu bir dosyayi hic baslamadan
              kaybetmeye neden olabilir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Globe className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>EU261 her ucusta otomatik olarak gecerli degildir.</strong> En guclu analiz genelde kalkis
              noktasi, tasiyici tipi ve tum rota zincirinin birlikte okunmasiyla yapilir. TR ile Avrupa arasindaki
              dosyalarda bu fark cok buyuktur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger kapsam kontrolu"
            title="Ucusunuzun EU261 alanina girip girmedigini simdi kontrol edin"
            description="Makaleyi sonuna kadar okumadan da dosyanin ilk gucunu gorebilirsiniz. ClaimWinger, rota ve tasiyici mantigini Turkce olarak hizla degerlendirmenize yardim eder."
            ctaHref={CLAIM_URL}
            ctaLabel="EU261 kapsam kontrolunu ac"
            placement="tr_scope_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                EU261 temasini guclendiren durumlar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Avrupa&apos;dan kalkan rotalar.</li>
                <li>AB tasiyicisi ile isleyen belirli ucuslar.</li>
                <li>Baglantili seyahatin birlikte okunabilmesi.</li>
                <li>Net rota ve tasiyici bilgisi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yanlis kestirmeler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>“Turk havayoluysa bitti” demek.</li>
                <li>Yalnizca bilette yazan markaya bakmak.</li>
                <li>Baglantili yolculugu parcalayarak okumak.</li>
                <li>Kalkis noktasinin etkisini hafife almak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Map className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. En guclu soru: rota nereden basliyor?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yolcular cogu zaman once havayolunun milliyetine bakar. Ama bircok dosyada asıl belirleyici baslangic
                noktasi olur. Avrupa cikisli bir rota ile Avrupa disindan baslayan bir rota ayni gibi gorunse de hukuki
                analiz farkli yone gidebilir.
              </p>
              <p>
                Bu nedenle kapsam sorusunu “hangi havayoluydu?” diye degil, “ucus tam olarak nereden basladi?” diye
                okumak cok daha sagliklidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Tasiyici tipi hala kritik ama tek basina yeterli degil
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bircok kullanici sadece “AB havayolu mu degil mi?” sorusuna takilir. Oysa bu soru onemli olsa da tek
                basina dosyayi kapatmaz. Isleten tasiyici, codeshare yapisi ve tum yolculugun hangi cati altinda
                ilerledigi birlikte degerlendirilmelidir.
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
                      placement: "tr_scope_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  dosyanin somut rota kontrolu
                </a>{" "}
                teorik tahminden daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Baglantili yolculuklarda parcaya degil, zincire bakmak gerekir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                TR + diaspora EU pazarinda baglantili seyahatler cok yaygindir. Bu yuzden tek bir ucus segmentine
                bakmak yerine, tum yolculuk zincirinin nasil kuruldugunu gormek gerekir. Bazi dosyalarda guc, ilk
                problemli segmentten cok nihai varis noktasinda ortaya cikar.
              </p>
              <p>
                Dogru kapsam analizi, yolculugu parcalamadan ama gerektiginde tasiyici sorumlulugunu ayirarak yapilmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, kapsam sorusunu tek bir kurala indirgemektir. Oysa rota, kalkis noktasi, tasiyici ve
              baglantilar birlikte okunmadiginda, guclu bir dosya kolayca gozden kacabilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  TR–AB rotalari neden bu kadar degerli?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku Avrupa ile Turkiye arasinda cok yuksek diaspora ve ziyaret trafigi vardir. Bu da kapsam ve tazminat sorularini cok yuksek niyetli hale getirir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bilette gorunen marka yeterli degil mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cogu zaman hayir. Isleten tasiyici ve rota yapisi birlikte okunmadan saglam bir sonuc cikarilamaz.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Avrupa disindan Avrupa&apos;ya ucuyorsam yine de sans olabilir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bazi dosyalarda evet, ama bu soru tek cumlelik cevapla kapanmaz. Rota ve tasiyici mantigi birlikte incelenmelidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
