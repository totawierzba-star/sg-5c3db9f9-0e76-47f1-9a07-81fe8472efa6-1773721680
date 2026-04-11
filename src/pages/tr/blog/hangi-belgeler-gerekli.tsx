import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  FolderOpen,
  ShieldAlert,
  Sparkles,
  XCircle,
} from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "hangi-belgeler-gerekli";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-required-documents&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-required-documents&utm_content=text_link";

export default function TrRequiredDocumentsArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Ucus tazminati icin hangi belgeler gerekli?"
        description="Ucus tazminati icin hangi belgeler gerekli? Turk yolcular icin PNR, boarding pass, e-posta, masraf fisleri ve temel belge setini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ucus tazminati icin hangi belgeler gerekli?",
            description:
              "Ucus tazminati icin hangi belgeler gerekli? Turk yolcular icin PNR, boarding pass, e-posta, masraf fisleri ve temel belge setini anlatan net rehber.",
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
                name: "En onemli belge hangisidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tek bir belge genelde yeterli olmaz. En guclu dosyalar, PNR, boarding pass, mesajlar, e-postalar ve gercek varis bilgisini birlikte saklayan dosyalardir.",
                },
              },
              {
                "@type": "Question",
                name: "Boarding pass yoksa dosya biter mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Boarding pass cok degerlidir ama tek basina belirleyici degildir. PNR, check-in izleri, e-postalar ve zaman cizelgesi de dosyayi destekleyebilir.",
                },
              },
              {
                "@type": "Question",
                name: "Masraf fisleri gerekli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Yemek, otel, transfer veya yeni bilet gibi masraflar varsa fis ve faturalar mutlaka saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Hangi belgeler gerekli?</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Belge Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ucus tazminati icin hangi belgeler gerekli?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu soru, claim kalitesini en cok etkileyen basliklardan biridir. Cunku guclu dosya genelde “tek bir
              screenshot” ile degil, <strong>birlikte anlamli olan belge seti</strong> ile kurulur. Asil mesele, hangi
              belgelerin minimum olarak elde bulunmasinin dosyayi saglamlastirdigidir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
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
              <strong>En guclu ucus dosyasi, tek belgeye degil belge setine dayanir.</strong> PNR, boarding pass,
              check-in izi, e-posta ve uygulama mesajlari, gercek varis bilgisi ve varsa masraf fisleri birlikte
              tutulmalidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger belge kontrolu"
            title="Elinizdeki belge setinin claim icin ne kadar guclu oldugunu kontrol edin"
            description="Bircok yolcu tek belgeye fazla guvenir veya gerekli olmayan detaylara odaklanir. ClaimWinger ile temel belge setinizin gucunu hizla gorun."
            ctaHref={CLAIM_URL}
            ctaLabel="Belgelerimi kontrol et"
            placement="tr_required_documents_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Temel belge seti
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>PNR ve rezervasyon detayi.</li>
                <li>Boarding pass veya check-in izi.</li>
                <li>E-posta, SMS ve uygulama bildirimleri.</li>
                <li>Masraf fisleri ve nihai varis bilgisi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece boarding pass'i yeterli sanmak.</li>
                <li>Mesajlari ve app bildirimlerini silmek.</li>
                <li>Masraf fislerini atmak.</li>
                <li>Gercek varis saatini hic not etmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <FileText className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. PNR ve rezervasyon kaydi dosyanin temel omurgasidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                PNR, claimin en temel tasiyici ve rota ayagini kurar. Dosyanin hangi ucusa ait oldugunu, kimle ve hangi
                yapida seyahat edildigini anlamak icin ilk bakilan noktalardan biridir. Bu nedenle rezervasyon onayi
                veya PNR kaydi kritik kabul edilmelidir.
              </p>
              <p>
                Tek basina yetmeyebilir, ama onsuz dosya daha kirilgan hale gelir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Boarding pass kadar mesajlar ve zaman cizelgesi de onemlidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen sadece boarding pass'e odaklanir. Oysa pratikte saat degisiklikleri, kapı, gecikme,
                iptal veya yeni rota bilgisi cogu zaman e-posta, SMS ve uygulama uzerinden gelir. Bunlar dosyanin ne
                zaman nasil degistigini gosteren kritik izlerdir.
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
                      placement: "tr_required_documents_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  belge zincirini zaman cizelgesiyle birlikte okumak
                </a>{" "}
                tek belge toplamaktan daha degerlidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Masraf belgeleri yardim ve zarar tarafini guclendirir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yemek, otel, transfer veya yeni bilet gibi ek harcamalar varsa bunlara ait fis ve faturalar da dosyanin
                onemli parcasidir. Ucus dosyasi sadece ucusun kendisini degil, yolcunun maruz kaldigi ek sonucu da
                gostermelidir.
              </p>
              <p>
                Fis ve fatura olmadiginda, sonradan hatirlanan rakamlar cok daha zayif kalir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, tek bir belgeyi her seyin yerine koymaktir. Guclu claim genelde belge setiyle kurulur:
              PNR, yolculuk izi, mesajlar, nihai varis ve varsa masraf belgeleri birlikte okunur.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En onemli belge hangisidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Tek bir belge genelde yeterli olmaz. En guclu dosyalar, birden fazla temel belgeyi birlikte saklar.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Boarding pass yoksa dosya biter mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Boarding pass cok degerlidir ama tek basina belirleyici degildir. PNR ve diger belgeler de
                  dosyayi destekleyebilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Masraf fisleri gerekli midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet. Yemek, otel, transfer veya yeni bilet gibi giderler varsa fis ve faturalar mutlaka saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
