import Link from "next/link";
import { CheckCircle2, FileText, FolderOpen, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "turkiyeden-almanyaya-ucusta-hangi-belgeler-saklanmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-documents-turkey-germany-flight&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-documents-turkey-germany-flight&utm_content=text_link";

export default function TrTurkeyGermanyDocumentsArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Turkiyeden Almanya'ya ucusta hangi belgeler saklanmali?"
        description="Turkiyeden Almanya'ya ucusta hangi belgeler saklanmali? Turk yolcular icin PNR, boarding pass, mesajlar ve masraf belgelerini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Turkiyeden Almanya'ya ucusta hangi belgeler saklanmali?",
            description:
              "Turkiyeden Almanya'ya ucusta hangi belgeler saklanmali? Turk yolcular icin PNR, boarding pass, mesajlar ve masraf belgelerini anlatan net rehber.",
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
                  text: "Tek bir belge genelde yeterli olmaz. En guclu dosyalar, PNR, boarding pass, mesajlar, e-postalar ve gercek varis bilgisini birlikte saklayan dosyalardir.",
                },
              },
              {
                "@type": "Question",
                name: "Sadece boarding pass yeterli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Boarding pass cok onemlidir ama tek basina yeterli olmayabilir. Saat degisiklikleri, yeni rota ve yazisma kayitlari da gerekir.",
                },
              },
              {
                "@type": "Question",
                name: "Masraf fisleri saklanmali midir?",
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
            <span className="text-slate-900 dark:text-white">Ucus belgeleri</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Belge Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Turkiyeden Almanya'ya ucusta hangi belgeler saklanmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, en pratik ama en cok ihmal edilen sorulardan biridir. Cunku bircok yolcu belgeyi ancak sorun
              yasandiktan sonra dusunur. Oysa guclu dosya, <strong>PNR</strong>, <strong>boarding pass</strong>,
              <strong> mesajlasma kayitlari</strong> ve <strong>masraf belgeleri</strong> birlikte saklandiginda
              kurulabilir.
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
              <strong>En guclu ucus dosyasi, tek belgeye degil belge setine dayanir.</strong> PNR, boarding pass,
              saat degisimi mesajlari, e-postalar, varsa yeni rota detaylari ve masraf fisleri birlikte saklanmalidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger belge analizi"
            title="Dosyanizdaki belge setinin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bircok yolcu tek bir ekran goruntusunun yeterli oldugunu sanar. Oysa guclu claimler, zaman cizelgesi ve belge zinciri birlikte kuruldugunda daha net hale gelir."
            ctaHref={CLAIM_URL}
            ctaLabel="Belgelerimi kontrol et"
            placement="tr_documents_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mutlaka saklanmasi gerekenler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>PNR ve rezervasyon detayi.</li>
                <li>Boarding pass veya check-in kaydi.</li>
                <li>E-posta, SMS ve uygulama bildirimleri.</li>
                <li>Masraf fisleri ve faturalar.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece boarding pass'i yeterli sanmak.</li>
                <li>Mesajlari silmek.</li>
                <li>Masraf fislerini atmak.</li>
                <li>Gercek varis saatini not almamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. PNR ve boarding pass, dosyanin omurgasidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                PNR, rezervasyon yapisini; boarding pass ise gercek yolculuk akisini gosteren iki temel unsurdur.
                Bu ikisi olmadan dosya tamamen kurulamaz demek yanlis olur, ama bu iki belge dosyanin ilk omurgasini
                olusturur.
              </p>
              <p>
                Bu nedenle ekran goruntusu, PDF, e-posta veya uygulama kaydi ne sekildeyse saklanmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mesajlar ve saat degisimleri, olayin zaman cizelgesini kurar
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Iptal, gecikme, yeni kapı, yeni saat veya yeniden rota gibi bilgiler genelde mesajlar ve uygulama
                bildirimleri uzerinden gelir. Bu kayitlar daha sonra “ne oldu, ne zaman oldu” sorusunun en temiz
                cevabini verir.
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
                      placement: "tr_documents_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  belge zincirini zaman cizelgesiyle birlikte incelemek
                </a>{" "}
                dosyanin gucunu daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <FileText className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Masraf fisleri, “yardim” ve “zarar” tarafini guclendirir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yemek, otel, transfer veya yeni bilet masraflari varsa bunlar da mutlaka saklanmalidir. Cunku ucus
                dosyasinin sadece ucus bileseni degil, kullanicinin maruz kaldigi ek masraflar da onemlidir.
              </p>
              <p>
                Fis ve fatura yoksa sonradan hatirlamak veya tahmini rakam soylemek cok daha zayif kalir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, tek bir ekran goruntusunun veya sadece boarding pass'in yeterli olacagini sanmaktir.
              Oysa guclu dosya, belge seti ve zaman cizelgesi birlikte kurulunca ortaya cikar.
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
                  Tek belge yerine belge zinciri daha onemlidir: PNR, boarding pass, mesajlar ve gercek varis saati
                  birlikte daha guclu olur.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Masraf fisleri gerekli mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet. Yemek, otel, transfer veya yeni bilet gibi kalemler varsa fis ve fatura mutlaka saklanmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Sadece boarding pass yeterli mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Çok degerlidir ama tek basina yeterli olmayabilir; mesajlar ve zaman akisi de gereklidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
