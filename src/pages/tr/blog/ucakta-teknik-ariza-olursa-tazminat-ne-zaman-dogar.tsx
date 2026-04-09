import Link from "next/link";
import { AlertTriangle, CheckCircle2, Settings, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "ucakta-teknik-ariza-olursa-tazminat-ne-zaman-dogar";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-technical-fault&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-technical-fault&utm_content=text_link";

export default function TrTechnicalFaultArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Ucakta teknik ariza olursa tazminat ne zaman dogar?"
        description="Ucakta teknik ariza oldugunda tazminat ne zaman dogabilir? Turk yolcular icin nihai varis, havayolu savunmalari ve EU261 mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ucakta teknik ariza olursa tazminat ne zaman dogar?",
            description:
              "Ucakta teknik ariza oldugunda tazminat ne zaman dogabilir? Turk yolcular icin nihai varis, havayolu savunmalari ve EU261 mantigini anlatan net rehber.",
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
                name: "Teknik ariza varsa havayolu otomatik olarak sorumluluktan cikar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Teknik ariza ifadesi tek basina dosyayi kapatmaz. Asil analiz, nihai varis, olayin niteliği ve havayolunun aciklamasinin ne kadar somut oldugu birlikte okunarak yapilir.",
                },
              },
              {
                "@type": "Question",
                name: "Teknik ariza oldugunda en kritik veri nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik veri, yolcunun son hedefe ne zaman vardigi ve havayolunun teknik ariza aciklamasini nasil destekledigidir.",
                },
              },
              {
                "@type": "Question",
                name: "Havayolu bir teknik neden yazdiysa claim zayif midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Her zaman degil. Bircok dosyada teknik sebep yazilsa da, bunun dosyanin gercek agirligini tek basina belirlemedigi gorulur.",
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
            <span className="text-slate-900 dark:text-white">Teknik ariza</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Teknik Gecikme Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ucakta teknik ariza olursa tazminat ne zaman dogar?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, hem en cok aranan hem de en cok karistirilan konulardan biridir. Cunku kullanici teknik ariza
              duydugunda ya dosyanin otomatik guclu oldugunu ya da tamamen bittigini dusunur. Oysa gercek analiz,
              <strong>nihai varis</strong>, <strong>olayin niteliği</strong> ve <strong>havayolunun savunmasinin
              somutlugu</strong> birlikte okundugunda ortaya cikar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Settings className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Teknik ariza ifadesi, dosyayi tek basina ne otomatik guclu ne de otomatik zayif yapar.</strong>
              Esas bakilmasi gereken sey, yolcunun son hedefe ne kadar gec vardigi ve havayolunun sundugu teknik
              aciklamanin ne kadar ciddi ve somut oldugudur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger teknik ariza analizi"
            title="Teknik ariza yazan dosyanizin gercekte ne kadar guclu oldugunu kontrol edin"
            description="Havayolunun teknik sebep yazmasi, dosyanin otomatik kapanmasi anlamina gelmez. Nihai varis ve olay aciklamasi birlikte okunmadan saglam sonuc cikmaz."
            ctaHref={CLAIM_URL}
            ctaLabel="Teknik ariza dosyami kontrol et"
            placement="tr_technical_fault_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Nihai varista belirgin gecikme olusmasi.</li>
                <li>Havayolunun aciklamasinin genel ve zayif kalmasi.</li>
                <li>Mesajlar, boarding pass ve yeni rota bilgisinin saklanmasi.</li>
                <li>Teknik sebeple verilen yeni zaman cizelgesinin kaydedilmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>“Teknik” kelimesini son karar sanmak.</li>
                <li>Sadece kalkis gecikmesine bakmak.</li>
                <li>Havayolunun ne dedigini saklamamak.</li>
                <li>Nihai varis saatini belgelememek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Teknik ariza, otomatik ret veya otomatik zafer anlamina gelmez
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici teknik ariza ifadesini gorunce cogu zaman iki uca gider: ya “bu durumda kesin para var”
                der ya da “teknik sorun varsa hic sans yok” diye dusunur. Iki yorum da fazla otomatik ve yuzeyseldir.
              </p>
              <p>
                Gercek dosyalarda asil soru, yazilan sebebin ne kadar somut oldugu ve bunun yolculugun son sonucuna
                nasil yansidigidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Nihai varis, teknik ariza dosyalarinda da en kritik olculerden biridir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Teknik problem hangi asamada yasanirsa yasansin, claimin pratik agirligi sonunda yolcunun son hedefe
                ne kadar gec vardigiyla netlesir. Bazen ariza kucuk gorunur, fakat yeni rota ve bekleme zinciri toplam
                zaman kaybini ciddi sekilde buyutur.
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
                      placement: "tr_technical_fault_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  teknik ariza ve nihai varis analizi
                </a>{" "}
                birlikte yapildiginda, kullanici daha gercekci bir tablo gorur.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Havayolunun savunmasi ne kadar somut?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Teknik ariza dosyalarinda en kritik pratik sorulardan biri sudur: havayolu size gercekten somut bir
                aciklama mi verdi, yoksa sadece genel bir ifade mi kullandi? Bircok dosyada “operasyonel” veya
                “teknik” gibi kaliplar yazilir, ama bu tek basina guclu savunma oldugu anlamina gelmez.
              </p>
              <p>
                Bu yuzden e-posta, SMS, uygulama bildirimi ve check-in kayitlari mutlaka saklanmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, teknik ariza kelimesini dosyanin son cevabi sanmaktir. Oysa teknik sebep kadar, bunun
              nasil aciklandigi ve yolcuyu son hedefe nasil etkiledigi de belirleyicidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Teknik ariza varsa hak otomatik biter mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Teknik ariza ifadesi tek basina yeterli degildir; nihai varis ve aciklamanin somutlugu da
                  birlikte okunmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En kritik veri nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik veri, son hedefe gercekte ne zaman vardiginiz ve havayolunun neyi nasil acikladigidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Boarding pass, gecikme ya da iptal mesaji, e-posta, yeni rota bilgisi ve gercek varis saati
                  saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
