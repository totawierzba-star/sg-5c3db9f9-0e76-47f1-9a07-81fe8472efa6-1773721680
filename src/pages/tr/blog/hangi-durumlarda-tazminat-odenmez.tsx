import Link from "next/link";
import { Ban, CheckCircle2, CircleOff, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "hangi-durumlarda-tazminat-odenmez";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-when-no-compensation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-when-no-compensation&utm_content=text_link";

export default function TrWhenNoCompensationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Hangi durumlarda ucus tazminati odenmez? TR yolcular icin net rehber"
        description="Hangi durumlarda ucus tazminati odenmez? Turk yolcular icin kapsam disi dosyalar, zayif senaryolar ve en sik yanlis varsayimlari anlatan rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hangi durumlarda ucus tazminati odenmez? TR yolcular icin net rehber",
            description:
              "Hangi durumlarda ucus tazminati odenmez? Turk yolcular icin kapsam disi dosyalar, zayif senaryolar ve en sik yanlis varsayimlari anlatan rehber.",
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
                name: "Her gecikme veya iptalde tazminat dogar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Bazı dosyalar kapsam disi kalabilir veya pratikte zayif olabilir. Rota, isleten tasiyici, nihai varis ve olayin niteliği birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Tazminat cikmayan dosyalarin en yaygin nedeni nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En yaygin nedenlerden biri dosyanin ilgili yolcu haklari kapsamiyla zayif temas etmesi veya kullanicinin olayi eksik belgeyle anlatmasidir.",
                },
              },
              {
                "@type": "Question",
                name: "Havayolu red verdiyse bu kesin olarak para cikmaz anlamina mi gelir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Red tek basina kesin son anlamina gelmez. Onemli olan red gerekcesinin ne kadar somut oldugu ve dosyanin gercek yapisidir.",
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
            <span className="text-slate-900 dark:text-white">Tazminat odenmeyen durumlar</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Kapsam Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Hangi durumlarda ucus tazminati odenmez?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Kullanici genelde once “param cikiyor mu?” sorusunu sorar. Ama ayni derecede onemli olan baska bir soru
              vardir: <strong>hangi durumlarda tazminat cikmaz veya cok zayif kalir?</strong> Bu ayrimi bilmek, hem
              bos umutlari azaltir hem de guclu dosyalarin daha hizli ayiklanmasini saglar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Ban className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Her gecikme, her iptal ve her rahatsiz edici seyahat otomatik olarak tazminat dogurmaz.</strong>
              Tazminat cikmayan veya zayif kalan dosyalarda genelde sorun; kapsam, rota yapisi, yetersiz belge, zayif
              `nihai varis` etkisi veya olayin yanlis okunmasidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger kapsam ve guc kontrolu"
            title="Dosyanizin neden zayif kalabilecegini simdi kontrol edin"
            description="Bazen en degerli bilgi, dosyanin ne kadar para getirecegini degil, neden zayif kalabilecegini anlamaktir. ClaimWinger ile kapsam, rota ve belge zincirini Turkce gorebilirsiniz."
            ctaHref={CLAIM_URL}
            ctaLabel="Dosyami kapsam acisindan kontrol et"
            placement="tr_when_no_compensation_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi yine de kurtarabilecek seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Rota ve isleten tasiyiciyi dogru ayirmak.</li>
                <li>`Nihai varis` sonucunu net belgelemek.</li>
                <li>Red gerekcesini somut olarak test etmek.</li>
                <li>Zayif gorunen dosyada eksik belgeyi tamamlamak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Tazminati zayiflatan durumlar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Kapsamla zayif temas eden rotalar.</li>
                <li>Final variste belirgin zaman kaybi gosterilememesi.</li>
                <li>Baglanti zincirinin eksik anlatilmasi.</li>
                <li>Belge zincirinin daginik veya eksik olmasi.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <CircleOff className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Bazen sorun olay degil, kapsamdir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yolcu acisindan bakildiginda ucusun bozulmasi yeterli gibi gorunebilir. Ama hukuki ve pratik analizde
                once dosyanin ilgili yolcu haklari rejimiyle ne kadar temas ettigine bakilir. Bazi rotalarda kullanici
                gercek bir magduriyet yasasa bile tazminat mantigi zayif kalabilir.
              </p>
              <p>
                Bu nedenle ilk soru “ucusum bozuldu mu?” degil; “bu dosya gercekten kapsam icine guclu sekilde giriyor mu?”
                olmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. `Nihai varis` etkisi zayifsa dosya da zayiflayabilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen ilk sorunlu ana cok odaklanir. Oysa dosyanin gercek gucu, son hedefe ne zaman varildigi
                ve toplam zaman kaybinin ne kadar net gosterilebildigiyle baglantilidir. Ilk bakista buyuk gorunen bir
                sorun, final sonuc acisindan daha sinirli kalabilir.
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
                      placement: "tr_when_no_compensation_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  dosyanin final sonucunu ve belge yapisini birlikte okumak
                </a>{" "}
                bos yere guclu sanilan dosyalarla, aslinda toparlanabilecek dosyalari ayirmaya yardim eder.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <ShieldAlert className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Red, otomatik olarak “hic para yok” anlamina gelmez
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bazi dosyalarda tazminat gercekten zayif olabilir. Ama bazilarinda sorun, havayolunun ilk cevabinin
                yeterince test edilmemesi ya da kullanicinin belge tarafini eksik birakmasidir. Bu yuzden red gerekcesi,
                nihai gercek gibi degil; incelenmesi gereken bir iddia gibi okunmalidir.
              </p>
              <p>
                En iyi ayrim, kapsam, rota, tasiyici, `nihai varis` ve belge zincirini ayni masada gormektir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, ya her bozuk yolculukta kesin para cikacagini sanmak ya da ilk red cevabindan sonra
              dosyanin tamamen bittiğini dusunmektir. Oysa gercek ayrim, dosyanin neden zayif kaldigini dogru tespit
              etmektir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Her gecikme veya iptalde tazminat dogar mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Bazi dosyalar kapsam disi kalabilir veya pratikte zayif olabilir. Rota, isleten tasiyici,
                  nihai varis ve olayin niteliği birlikte okunmalidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Tazminat cikmayan dosyalarin en yaygin nedeni nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En yaygin nedenlerden biri dosyanin ilgili yolcu haklari kapsamiyla zayif temas etmesi veya
                  kullanicinin olayi eksik belgeyle anlatmasidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Havayolu red verdiyse bu kesin olarak para cikmaz anlamina mi gelir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Red tek basina kesin son anlamina gelmez. Onemli olan red gerekcesinin ne kadar somut oldugu
                  ve dosyanin gercek yapisidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
