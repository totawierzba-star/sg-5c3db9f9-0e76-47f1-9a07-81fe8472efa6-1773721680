import Link from "next/link";
import { CheckCircle2, FileText, FolderOpen, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "istanbul-cikisli-ucusta-hangi-belgeler-saklanmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-documents-istanbul-departure&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-documents-istanbul-departure&utm_content=text_link";

export default function TrIstanbulDepartureDocumentsArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Istanbul cikisli ucusta hangi belgeler saklanmali?"
        description="Istanbul cikisli ucusta hangi belgeler saklanmali? Turk yolcular icin PNR, boarding pass, app ekranlari, mesajlar ve masraf fislerini anlatan rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Istanbul cikisli ucusta hangi belgeler saklanmali?",
            description:
              "Istanbul cikisli ucusta hangi belgeler saklanmali? Turk yolcular icin PNR, boarding pass, app ekranlari, mesajlar ve masraf fislerini anlatan rehber.",
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
                name: "En onemli belge hangisidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tek bir belge genelde yeterli olmaz. En guclu dosya; PNR, boarding pass, app ekranlari, mesajlar, e-postalar ve gercek varis sonucunu birlikte saklayan dosyadir.",
                },
              },
              {
                "@type": "Question",
                name: "Istanbul cikisli dosyalarda uygulama ekranlari neden onemlidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku saat degisimi, gate bilgisi, iptal, yeni rota veya yeniden rezerve ayrintilari cogu zaman ilk once uygulama veya e-posta ekranlarinda net sekilde gorulur.",
                },
              },
              {
                "@type": "Question",
                name: "Masraf fisleri de saklanmali mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Yemek, otel, transfer veya yeni bilet gibi ek masraflar varsa fis ve faturalar mutlaka saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Istanbul cikisli belgeler</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Belge Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Istanbul cikisli ucusta hangi belgeler saklanmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Istanbul cikisli dosyalarda en buyuk hata, belgeleri ancak problem buyudugunde dusunmektir. Oysa guclu
              claim veya guclu masraf dosyasi, daha havaalanindayken toplanan kayitlarla kurulur. Burada asil onemli
              olan; <strong>PNR</strong>, <strong>boarding pass</strong>, <strong>app ve mesaj kayitlari</strong> ile
              <strong> masraf fislerinin</strong> ayni zincirde tutulmasidir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <FolderOpen className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>En guclu Istanbul cikisli dosya, tek belgeye degil belge setine dayanir.</strong> PNR,
              boarding pass, uygulama ekranlari, e-postalar, degisiklik mesajlari, varsa yeni rota ve masraf fisleri
              birlikte saklanmalidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger belge analizi"
            title="Istanbul cikisli dosyanizdaki belge setinin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bir cok yolcu tek bir ekran goruntusunun yeterli oldugunu saniyor. Oysa guclu dosya, zaman cizelgesi ve belge zinciri birlikte kurulunca ortaya cikiyor."
            ctaHref={CLAIM_URL}
            ctaLabel="Belgelerimi kontrol et"
            placement="tr_istanbul_departure_documents_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mutlaka saklanmasi gerekenler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>PNR ve rezervasyon detaylari.</li>
                <li>Boarding pass veya check-in kaydi.</li>
                <li>Uygulama ekranlari, SMS ve e-postalar.</li>
                <li>Masraf fisleri ve yeni rota kayitlari.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece boarding pass'i yeterli sanmak.</li>
                <li>Mesaj ve uygulama ekranlarini silmek.</li>
                <li>Masraf fislerini atmamak ama sonra kaybetmek.</li>
                <li>Gercek varis saatini hic not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. PNR ve boarding pass, dosyanin ilk omurgasini kurar
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                PNR rezervasyon yapisini, boarding pass ise gercek yolculuk akisina temas eden ilk temel belgelerdir.
                Bunlar olmadan dosya kurulamaz demek fazla sert olur; ama bu belgeler oldugunda dosya cok daha temiz
                okunur.
              </p>
              <p>
                Bu nedenle PDF, ekran goruntusu veya uygulama kaydi ne sekildeyse kaybolmadan saklanmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Istanbul cikisli dosyalarda uygulama ekranlari ve mesajlar ayri bir deger tasir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Saat kaymasi, gate degisikligi, iptal, yeni rota veya yeniden rezerve gibi detaylar cogu zaman ilk
                once uygulama bildirimlerinde, e-postalarda veya SMS akislari icinde gorunur. Bu bilgiler sonradan
                kaybolursa olay akisini ispatlamak daha zor hale gelebilir.
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
                      placement: "tr_istanbul_departure_documents_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  belge zincirini zaman cizelgesiyle birlikte incelemek
                </a>{" "}
                dosyanin gercek gucunu daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <FileText className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Masraf fisleri ve gercek varis sonucu, “zarar” tarafini guclendirir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yemek, otel, transfer veya yeni bilet gibi ek giderler varsa bunlar da mutlaka dosyaya eklenmelidir.
                Istanbul cikisli dosyalarda asıl sorun sadece hakki okumak degil; kullanicinin maruz kaldigi toplam
                etkileri de gostermektir.
              </p>
              <p>
                Bu nedenle fisler, faturalar ve son hedefe gercek varis zamani ayni dosya mantiginda bir araya
                getirilmelidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, tek bir ekran goruntusunu veya sadece boarding pass'i yeterli sanmaktir. Oysa en guclu
              Istanbul cikisli dosya, belgelerin birbirini tamamladigi bir zincir olarak kurulur.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En onemli belge hangisi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Tek bir belge yeterli olmaz. En guclu dosya; PNR, boarding pass, app ekranlari, mesajlar ve gercek
                  varis sonucunu birlikte saklar.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Uygulama ekranlari neden onemli?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku saat degisimi, gate bilgisi, iptal veya yeni rota gibi kritik detaylar cogu zaman ilk once bu
                  ekranlarda net sekilde gorulur.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Masraf fisleri de saklanmali mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet. Yemek, otel, transfer veya yeni bilet gibi ek masraflar varsa fis ve faturalar mutlaka
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
