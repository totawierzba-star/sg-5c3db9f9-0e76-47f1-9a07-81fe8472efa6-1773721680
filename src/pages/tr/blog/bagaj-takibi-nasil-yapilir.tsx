import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-takibi-nasil-yapilir";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-tracking-guide&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-tracking-guide&utm_content=text_link";

export default function TrBaggageTrackingGuideArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj takibi nasil yapilir?"
        description="Bagaj takibi nasil yapilir? Turk yolcular icin PIR numarasi, takip ekrani, durum yorumlama ve ekran goruntusu zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj takibi nasil yapilir?",
            description:
              "Bagaj takibi nasil yapilir? Turk yolcular icin PIR numarasi, takip ekrani, durum yorumlama ve ekran goruntusu zincirini anlatan net rehber.",
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
            datePublished: "2026-04-12",
            dateModified: "2026-04-12",
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
                name: "Bagaj takibi icin hangi numara gerekir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pratikte en kritik referans PIR dosya numarasidir. Buna bagaj etiketi, boarding pass ve PNR eklendiginde takip zinciri daha guclu okunur.",
                },
              },
              {
                "@type": "Question",
                name: "Takip ekraninda guncelleme yoksa dosya zayif mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Guncelleme olmamasi tek basina dosyanin zayif oldugu anlamina gelmez. Ama ekran goruntusu almak, tarihleri not etmek ve e-posta akisini saklamak cok onemlidir.",
                },
              },
              {
                "@type": "Question",
                name: "Takip ekraninin ekran goruntusu neden onemlidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku sonradan status degisirse onceki gorunumu kaybetmemis olursunuz. Bu da zaman cizgisini ve bekleme surecini daha net gostermeye yarar.",
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
            <span className="text-slate-900 dark:text-white">Bagaj takibi nasil yapilir</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj takibi nasil yapilir?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bagaj takibi, bircok yolcunun PIR kaydindan sonra elindeki tek somut ipucu gibi gorunur. Ama pratikte
              guclu analiz, sadece bir ekrana bakmaktan degil, <strong>hangi referansla takip yaptiginizdan</strong>,
              <strong> status satirlarini nasil yorumladiginizdan</strong> ve <strong>ekran goruntusu ile zaman
              cizgisini nasil korudugunuzdan</strong> dogar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-12</span>
              <span>&bull;</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Bagaj takibi genelde PIR dosya numarasi uzerinden yapilir.</strong> Ama takip ekranina bakmak
              tek basina yetmez; status degisikliklerini kaydetmek, ekran goruntusu almak ve bagaj etiketi ile belge
              zincirini bir arada tutmak dosyayi daha saglam hale getirir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger bagaj takip analizi"
            title="Takip ekraninizi ve belge zincirinizi hizli kontrol edin"
            description="Bagaj dosyalarinda en buyuk hata, ekranda bir satir gormeyi yeterli sanmaktir. PIR, takip kaydi, teslimat akisi ve e-posta zinciri birlikte okunursa tablo cok daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj takibimi kontrol et"
            placement="tr_baggage_tracking_guide_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>PIR numarasi, bagaj etiketi ve boarding pass belgelerini bir arada tutmak.</li>
                <li>Takip ekraninin her onemli asamasinda ekran goruntusu almak.</li>
                <li>E-posta ve teslimat mesajlarini ayni dosyada saklamak.</li>
                <li>Status degisse bile onceki zaman cizgisini kaybetmemek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece tek bir guncel ekrana bakip onceki adimlari silmek.</li>
                <li>Takipte update yoksa dosyanin bittigini sanmak.</li>
                <li>PIR numarasini ve bagaj etiketini birbirinden koparmak.</li>
                <li>Teslimat mesajlarini veya aranma kayitlarini saklamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bagaj takibi genelde hangi bilgiyle baslar?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Pratikte takip akisinin merkezi genelde PIR dosya numarasidir. Ama bu numaranin tek basina guclu
                olmasi icin bagaj etiketi, boarding pass ve mumkunse rezervasyon bilgileriyle ayni klasorde tutulmasi
                gerekir. Boylece 'hangi valiz', 'hangi ucus' ve 'hangi yolcu' sorulari ayni zincirde cevap bulur.
              </p>
              <p>
                Yani takip, sadece bir web sayfasina girmek degil, belge referanslarini ayni dosyada duzenli
                tutmaktir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Takip ekranindaki status satirlari nasil okunmali?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Takip ekraninda bir hareket gormek faydalidir, ama her satiri asiri kesin yorumlamak yanlis olabilir.
                Bazen ekran uzun sure degismez, bazen de kisa sureli bir hareket gorulur ama teslim hemen gerceklesmez.
                Bu nedenle en dogru yaklasim, ekrani tek basina 'iyi haber' veya 'kotu haber' diye okumak degil,
                diger mesajlar ve teslim akisi ile birlikte degerlendirmektir.
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
                      placement: "tr_baggage_tracking_guide_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  takip ekranini ve belge zincirini birlikte incelemek
                </a>{" "}
                dosyanin gercekten guclu olup olmadigini daha hizli gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Neden ekran goruntusu almak bu kadar onemlidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Takip ekranlari zamanla degisebilir. Bugun gorulen bir status yarin kaybolabilir veya farkli bir
                metinle degisebilir. Ekran goruntusu almak, o anki gorunumu zaman damgasi gibi saklamaya yarar.
                Sonradan dosya uzadiginda, hangi tarihte hangi bilgi gorunuyordu sorusuna bu kayitlar cevap verir.
              </p>
              <p>
                Ozellikle uzun gecikmelerde, ekran goruntusu ve e-posta zinciri birlikte tutulursa bekleme sureci cok
                daha net okunur.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, takip ekranindaki tek bir satiri tum dosyanin ozeti sanmaktir. Oysa guclu bagaj
              dosyasi, PIR kaydi, ekran goruntuleri, teslimat mesajlari ve zaman cizgisinin birlikte okunmasiyla
              olusur.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj takibi icin hangi numara gerekir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Pratikte en kritik referans PIR dosya numarasidir. Buna bagaj etiketi, boarding pass ve PNR
                  eklendiginde takip zinciri daha guclu okunur.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Takip ekraninda guncelleme yoksa dosya zayif mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Guncelleme olmamasi tek basina dosyanin zayif oldugu anlamina gelmez. Ama ekran goruntusu
                  almak, tarihleri not etmek ve e-posta akisini saklamak cok onemlidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Takip ekraninin ekran goruntusu neden onemlidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku sonradan status degisirse onceki gorunumu kaybetmemis olursunuz. Bu da zaman cizgisini ve
                  bekleme surecini daha net gostermeye yarar.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
