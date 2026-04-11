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

const SLUG = "pegasus-airlines-tazminat";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-pegasus-compensation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-pegasus-compensation&utm_content=text_link";

export default function TrPegasusCompensationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Pegasus Airlines tazminat: ne zaman guclu olur?"
        description="Pegasus Airlines tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, baglanti kaybi ve nihai varis mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Pegasus Airlines tazminat: ne zaman guclu olur?",
            description:
              "Pegasus Airlines tazminat hakki ne zaman guclu olur? Turk yolcular icin gecikme, iptal, baglanti kaybi ve nihai varis mantigini anlatan net rehber.",
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
                name: "Pegasus low-cost oldugu icin tazminat sansi dusuk mudur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Low-cost modeli tek basina dosyayi zayif yapmaz. Asil belirleyici olan rota, aksakligin tipi ve yolcunun nihai varis sonucudur.",
                },
              },
              {
                "@type": "Question",
                name: "Pegasus dosyalarinda en kritik olcu nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik olculerden biri nihai varistir. Ozellikle baglantili veya yeniden yonlendirilmis dosyalarda son hedefe ne zaman ulasildigi cok onemlidir.",
                },
              },
              {
                "@type": "Question",
                name: "Pegasus ucusunda sadece gecikme dakikasina bakmak yeterli mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Ilk gecikme bazen kucuk gorunur ama baglanti, yeniden yonlendirme veya uzun zaman kaybi yuzunden dosya agirlasabilir.",
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
            <span className="text-slate-900 dark:text-white">Pegasus Airlines tazminat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Pegasus Airlines tazminat: ne zaman guclu olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pegasus aramalarinda kullanicilarin en buyuk yanilgisi, low-cost modelin otomatik olarak daha zayif hak
              anlami tasidigi dusuncesidir. Oysa saglikli analiz, <strong>ucuz bilet etiketinden</strong> degil,
              <strong> rota yapisindan</strong>, <strong>aksakligin tipinden</strong> ve
              <strong> nihai varis sonucundan</strong> baslar.
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
              <strong>Pegasus low-cost oldugu icin dosya otomatik olarak zayif sayilmaz.</strong> Gecikme, iptal veya
              baglanti kaybinda asıl belirleyici olan sey, yolcunun son hedefe ne kadar gec vardigi ve butun yolculugun
              nasil bozuldugudur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Pegasus analizi"
            title="Pegasus dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Pegasus dosyalarinda en buyuk hata, low-cost etiketi yuzunden ya gereksizce umudu kesmek ya da dosyayi fazla basite indirgemektir. Rota ve nihai varisi birlikte okumak daha dogru sonuc verir."
            ctaHref={CLAIM_URL}
            ctaLabel="Pegasus dosyami analiz et"
            placement="tr_pegasus_comp_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Net sekilde belgelenmis gecikme veya iptal.</li>
                <li>Baglanti kirilmasi veya yeniden yonlendirme.</li>
                <li>Nihai varista belirgin zaman kaybi.</li>
                <li>SMS, e-posta ve boarding belgelerinin durmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Low-cost diye dosyayi bastan zayif gormek.</li>
                <li>Sadece ilk gecikme dakikasina bakmak.</li>
                <li>Baglanti zincirini tam okumamak.</li>
                <li>Gercek nihai varis saatini not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Timer className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Pegasus dosyalarinda ilk soru “ucuz bilet” degil, “sonuc ne oldu?” olmalidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen sadece marka ve fiyat modeli uzerinden hizli bir sonuc bekler. Ama tazminat mantigi,
                biletin ne kadar ucuz olduguna bakmaz. Asil soru, aksakligin yolculugu nasil bozdugu ve yolcunun son
                hedefe ne kadar farkla ulastigidir.
              </p>
              <p>
                Yani marka burada sadece baglamdir; dosyanin agirligini belirleyen sey yolculugun sonucudur.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Gecikme, iptal ve baglanti kaybi ayni sekilde okunmaz
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Pegasus dosyalarinda bazen kucuk gorunen bir ilk gecikme, baglanti koptugu anda buyuk zaman kaybina
                donusebilir. Bazen de iptal, verilen yeni rota yuzunden kullanicinin tum planini bozar. Bu nedenle
                tek bir etiket degil, tum olay zinciri okunmalidir.
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
                      placement: "tr_pegasus_comp_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  gecikme ve nihai varis yapisini birlikte analiz etmek
                </a>{" "}
                yuzeysel yorumlardan daha sagliklidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Pegasus dosyalarinda nihai varis, ilk bakista gorundugunden daha onemlidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bazi vakalarda ilk gecikme kucuktur ama kullanici son hedefe saatler sonra varir. Iste bu fark, dosyanin
                agirligini degistirebilir. Bu yuzden sadece kalkis panosunu degil; yeni bilet, yeni rota ve son varis
                saatini birlikte saklamak gerekir.
              </p>
              <p>
                Ozellikle baglantili Pegasus seyahatlerinde bu detaylar cok daha belirleyici olur.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, low-cost etiketi yuzunden dosyayi bastan zayif gormek ya da tam tersi sadece markaya bakip
              fazla hizli umutlanmaktir. Karar, rota ve nihai varis mantigi ile verilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Pegasus low-cost oldugu icin tazminat sansi dusuk mudur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Low-cost modeli tek basina dosyayi zayif yapmaz. Asil belirleyici rota ve nihai varis sonucudur.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Pegasus dosyalarinda en kritik olcu nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik olculerden biri nihai varistir. Son hedefe ne zaman varildigi dosyanin agirligini ciddi
                  sekilde etkileyebilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Pegasus ucusunda sadece gecikme dakikasina bakmak yeterli mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Ilk gecikme bazen kucuk gorunur ama baglanti, yeniden yonlendirme veya uzun zaman kaybi yuzunden
                  dosya cok daha agirlasabilir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
