import Link from "next/link";
import {
  CheckCircle2,
  PlaneTakeoff,
  ShieldAlert,
  Sparkles,
  Timer,
  XCircle,
} from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "ajet-tazminat";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-ajet-compensation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-ajet-compensation&utm_content=text_link";

export default function TrAJetCompensationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="AJet tazminat: ne zaman guclu olur?"
        description="AJet tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, baglanti kaybi ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AJet tazminat: ne zaman guclu olur?",
            description:
              "AJet tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, baglanti kaybi ve nihai varis mantigini anlatan net rehber.",
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
                name: "AJet dosyasinda en kritik olculerden biri nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik olculerden biri nihai varistir. Gecikme, iptal veya yeni rota sonrasinda yolcunun son hedefe ne kadar farkla vardigi dosyanin agirligini belirler.",
                },
              },
              {
                "@type": "Question",
                name: "AJet markasi tek basina dosyayi guclu veya zayif yapar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Marka tek basina yeterli degildir. Rota yapisi, aksakligin tipi ve belgelenmis sonuc birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "AJet dosyasinda sadece ilk gecikme dakikasi yeterli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Ilk gecikme bazen kucuk gorunse de baglanti, yeniden yonlendirme veya toplam zaman kaybi dosyayi cok daha agirlastirabilir.",
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
            <span className="text-slate-900 dark:text-white">AJet tazminat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              AJet tazminat: ne zaman guclu olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              AJet aramalarinda kullanicilar genelde iki hata yapar: ya markanin yeni yapisi yuzunden dosyayi gereksiz
              yere zayif gorur, ya da cok hizli bir sonuca atlar. Oysa claim analizi,
              <strong> marka algisindan</strong> degil, <strong>rota yapisindan</strong>,
              <strong> aksakligin tipinden</strong> ve <strong>nihai varis sonucundan</strong> baslar.
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
              <strong>AJet dosyasinin gucu, marka degil yolculugun sonucu ile okunur.</strong> Gecikme, iptal, baglanti
              kaybi veya yeniden yonlendirme; bunlarin hepsi son hedefe ne kadar farkla ulastiginizla birlikte
              degerlendirilmelidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger AJet analizi"
            title="AJet dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="AJet dosyalarinda en buyuk hata, sadece markaya veya tek bir gecikme bilgisina bakmaktir. Nihai varis ve rota etkisini birlikte okumak gerekir."
            ctaHref={CLAIM_URL}
            ctaLabel="AJet dosyami analiz et"
            placement="tr_ajet_comp_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Net sekilde belgelenmis gecikme veya iptal.</li>
                <li>Baglanti kaybi veya yeni rota ihtiyaci.</li>
                <li>Nihai varista belirgin zaman kaybi.</li>
                <li>E-posta, SMS ve boarding kayitlarinin durmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece markaya bakip hizli sonuc cikarmak.</li>
                <li>Sadece ilk gecikme dakikasina odaklanmak.</li>
                <li>Baglanti zincirini tam okumamak.</li>
                <li>Gercek nihai varis saatini not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Timer className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. AJet dosyalarinda asil soru: yolculuk ne kadar bozuldu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen sadece marka ve ilk ekran bilgisine bakarak karar vermek ister. Ama gercek soru,
                aksakligin yolculugu ne kadar bozdugudur. Bazen ilk sorun kucuk gorunur ama son hedefe varis buyuk
                farkla kayar.
              </p>
              <p>
                Bu nedenle ilk bakista sade gorunen bir dosya, sonucta daha guclu hale gelebilir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Gecikme, iptal ve baglanti kaybi farkli agirliklarla okunur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                AJet dosyalarinda bazen bir ilk gecikme gorunur, bazen iptal veya yeni rota cikar. Bu etiketlerin her
                biri farkli sonuclar yaratir. Bu nedenle dosya tek bir kelimeyle degil, butun aksaklik zinciriyle
                degerlendirilmelidir.
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
                      placement: "tr_ajet_comp_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  olay zincirini ve nihai varisi birlikte analiz etmek
                </a>{" "}
                tek satirlik yorumdan daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Nihai varis, AJet dosyalarinda kilit olculerden biridir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bircok yolcu ilk gecikmeye odaklanir, ama dosyanin asil agirligi son hedefe ne zaman vardiginda ortaya
                cikar. Bazen yeniden yonlendirme veya baglanti kaybi nedeniyle toplam zaman kaybi buyur.
              </p>
              <p>
                Bu yuzden son boarding bilgisi, yeni rota varsa onun ayrintilari ve gercek varis saati birlikte
                saklanmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, AJet markasina bakip dosyayi ya gereksizce zayif gormek ya da fazla hizli sonuc cikarmaktir.
              Karar, rota ve nihai varis mantigi ile verilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  AJet dosyasinda en kritik olculerden biri nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik olculerden biri nihai varistir. Son hedefe ne kadar farkla varildigi dosyanin agirligini belirler.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  AJet markasi tek basina dosyayi guclu veya zayif yapar mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Marka tek basina yeterli degildir. Rota yapisi, aksakligin tipi ve belgelenmis sonuc birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  AJet dosyasinda sadece ilk gecikme dakikasi yeterli midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Ilk gecikme bazen kucuk gorunse de baglanti, yeniden yonlendirme veya toplam zaman kaybi dosyayi cok daha agirlastirabilir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
