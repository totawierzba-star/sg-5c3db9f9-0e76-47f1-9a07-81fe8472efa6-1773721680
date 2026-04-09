import Link from "next/link";
import { CheckCircle2, Clock3, Plane, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "geciken-ucusta-ne-zaman-tazminat-dogar";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-delay-eligibility&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-delay-eligibility&utm_content=text_link";

export default function TrDelayEligibilityArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Geciken ucusta ne zaman tazminat dogar? 3 saat kurali ve EU261"
        description="Geciken ucusta ne zaman tazminat dogabilir? 3 saatlik varis mantigi, EU261 kapsami, Turk yolcular ve Avrupa diasporasi icin en kritik noktalar."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Geciken ucusta ne zaman tazminat dogar? 3 saat kurali ve EU261",
            description:
              "Geciken ucusta ne zaman tazminat dogabilir? 3 saatlik varis mantigi, EU261 kapsami, Turk yolcular ve Avrupa diasporasi icin en kritik noktalar.",
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
                name: "Geciken ucusta her zaman tazminat dogar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Gecikmenin tek basina uzun olmasi yetmez. Ucusun EU261 kapsamina girip girmedigi, nihai varis gecikmesi ve dosyanin nedeni birlikte incelenmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "3 saat kurali neden bu kadar onemli?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku bircok dosyada ana esik kalkis degil, nihai varis noktasina 3 saat veya daha fazla gec ulasmaktir. Bu nokta tazminat analizinin merkezinde yer alir.",
                },
              },
              {
                "@type": "Question",
                name: "Turkiye ile Avrupa arasindaki rotalarda neden dikkatli analiz gerekir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku TR ile Avrupa arasindaki yogun diasporik trafik nedeniyle bircok rota EU261 ile temas eder, ancak uygunluk rota ve tasiyici mantigina gore degisir. Tek bir basit kural her dosyaya uymaz.",
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
            <span className="text-slate-900 dark:text-white">Geciken ucusta tazminat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              EU261 Temelleri
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Geciken ucusta ne zaman tazminat dogar?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Turk yolcularin en sik sordugu soru budur, ama yanlis cevap da en cok burada verilir. Cunku dosyanin gucu
              sadece “ucus gecikti” demekten gelmez. Asıl mesele, <strong>nihai varis gecikmesi</strong>, ucusun
              <strong>EU261 kapsami</strong> ve havayolunun hangi kosullarda gecikmeye yol actigidir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Clock3 className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Geciken bir ucusta tazminat, cogu zaman nihai varis noktasina en az 3 saat gec ulasilmasi ve
              dosyanin EU261 alanina girmesi halinde gundeme gelir.</strong> Ama bu, her 3 saat gecikmenin otomatik
              olarak para tazminati anlamina geldigi anlamina gelmez.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger erken kontrol alani"
            title="Makalenin ortasina gelmeden dosyanizi kontrol etmek ister misiniz?"
            description="Bircok kullanici tam bu noktada karar verir. Ucusunuz Avrupa ile baglantiliysa veya nihai varis ciddi sekilde sarktıysa, dosyanin gucunu ClaimWinger ile simdi kontrol etmek zaman kazandirir."
            ctaHref={CLAIM_URL}
            ctaLabel="Gecikmis ucus kontrolunu ac"
            placement="tr_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren unsurlar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Nihai varista 3 saat ve uzeri kayip.</li>
                <li>Avrupa cikisli veya EU261 ile temas eden rota yapisi.</li>
                <li>Temiz PNR, boarding pass ve zaman cizelgesi.</li>
                <li>Zayif veya tutarsiz havayolu aciklamasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yanlis okumalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece kalkis panosuna bakmak.</li>
                <li>3 saati tek ve yeterli kural sanmak.</li>
                <li>Rotayi ve tasiyiciyi birlikte analiz etmemek.</li>
                <li>Baglantili yolculukta final sonucu gormezden gelmek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. 3 saat mantigi kalkis degil, cogu zaman varisla ilgilidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En buyuk karisiklik burada baslar. Yolcular “ucak 3 saat gec kalkti mi?” diye dusunur, ama bircok
                dosyada asıl soru budur: final hedefe ne zaman vardiniz? Bazen ucus gec kalkar ama fark kapanir; bazen
                ise daha kisa bir kalkis gecikmesi final varista cok daha buyuk kayip yaratir.
              </p>
              <p>
                Bu nedenle dosya degerlendirmesinde asıl odak, tum seyahat zincirinin son sonucudur.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. TR + diaspora EU rotalarinda kapsami hizli ama dikkatli okumak gerekir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Turkiye ile Almanya, Hollanda, Belcika, Fransa ve Avusturya arasindaki trafik o kadar yogundur ki,
                “bu pazar zaten EU261 icin ideal” demek cazip gorunur. Ama dogru analiz, her dosyada rota ve tasiyiciyi
                birlikte okumayi gerektirir.
              </p>
              <p>
                Ornegin ayni gecikme, farkli havayolu yapisinda veya farkli kalkis mantiginda tamamen baska bir sonuca
                gidebilir. Bu noktada{" "}
                <a
                  href={CLAIM_URL_TEXT}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    pushClaimWingerEvent("claimwinger_cta_click", {
                      locale: "tr",
                      placement: "tr_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  ClaimWinger uzerinden somut dosya kontrolu
                </a>{" "}
                cok daha anlamlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Plane className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Belgeler gecikmenin kendisi kadar onemlidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bir dosya sadece sure ile degil, ispat kalitesiyle de guclenir. PNR, boarding pass, havayolu
                mesajlari, yeniden rota bilgisi ve nihai varis saati ne kadar temizse, dosyanin degerlendirilmesi de o
                kadar saglam olur.
              </p>
              <p>
                En zayif dosyalar genelde en az belgeye sahip olanlar degil, en daginik belgeye sahip olanlardir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, gecikmeyi yalnizca bir saat sayaci gibi okumaktir. Asıl soru, final varis sonucu, rota
              mantigi ve havayolunun savunmasinin dosyayi nasil etkiledigidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  3 saatten az gecikmede hic sans yok mu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bircok para tazminati analizinde 3 saat esik rol oynar, ancak dosyanin tam yapisi ve sorunun turu
                  yine de birlikte incelenmelidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Sadece kalkis gecikmesini gosteren ekran goruntusu yeterli mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Genelde hayir. Nihai varis sonucu ve tum yolculuk akisina dair kanitlar dosyayi daha guclu hale getirir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Turk yolcular icin neden bu kadar iyi bir SEO/GEO konusu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku niyet cok yuksek: hem Turkiye cikisli hem Avrupa baglantili yogun yolcu akisi vardir ve
                  kullanicilar dogrudan “hak dogar mi?” sorusuna cevap arar.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
