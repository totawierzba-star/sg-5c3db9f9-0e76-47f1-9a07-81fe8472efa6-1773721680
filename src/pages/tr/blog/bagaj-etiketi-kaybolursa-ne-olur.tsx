import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-etiketi-kaybolursa-ne-olur";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-tag-lost&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-tag-lost&utm_content=text_link";

export default function TrLostBaggageTagArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj etiketi kaybolursa ne olur?"
        description="Bagaj etiketi kaybolursa ne olur? Turk yolcular icin PIR, boarding pass, PNR ve alternatif belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj etiketi kaybolursa ne olur?",
            description:
              "Bagaj etiketi kaybolursa ne olur? Turk yolcular icin PIR, boarding pass, PNR ve alternatif belge zincirini anlatan net rehber.",
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
                name: "Bagaj etiketi kaybolursa dosya otomatik olarak biter mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Bagaj etiketi cok onemli bir belgedir ama tek dayanak her zaman o degildir. PIR, boarding pass, PNR ve uygulama ekranlari dosyayi destekleyebilir.",
                },
              },
              {
                "@type": "Question",
                name: "En guclu alternatif belgeler hangileridir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PIR numarasi, boarding pass, rezervasyon kaydi, check-in ekrani, e-posta bildirimleri ve varsa bagaj etiketinin fotografi en guclu alternatifler arasindadir.",
                },
              },
              {
                "@type": "Question",
                name: "Bagaj etiketi kaybolduysa ilk ne yapilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk odak, elde kalan tum belge izlerini toparlamak ve bunlari tek bir net zincirde birlestirmektir. Daginik belge yapisi dosyayi zayiflatir.",
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
            <span className="text-slate-900 dark:text-white">Bagaj etiketi kaybolursa ne olur</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj etiketi kaybolursa ne olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bagaj dosyalarinda bircok yolcu en kritik kagitlardan birini sonradan kaybettigini fark eder: bagaj
              etiketi. Bu durumda panik kolayca artar, cunku yolcu dosyanin artik tamamen coktugunu dusunebilir.
              Dogru analiz, sadece 'etiket yok' demekten degil, <strong>elde kalan baska izlerin ne kadar guclu
              oldugundan</strong>, <strong>PIR ve rezervasyon zincirinin ne kadar temiz korundugundan</strong> ve
              <strong> belge akisinin ne kadar hizli toparlandigindan</strong> dogar.
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
              <strong>Bagaj etiketi kaybolursa dosya otomatik olarak bitmez, ama belge gucu zayiflayabilir.</strong>
              Bu tip durumda ilk odak, PIR, boarding pass, PNR, check-in izleri ve varsa etiket fotografi gibi kalan
              belgeleri ayni zincirde toplamaktir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger belge zinciri analizi"
            title="Bagaj etiketi kaybolduysa dosyanizin ne kadar saglam kaldigini hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, sadece tek belgeye takilip kalmaktir. PIR, boarding pass, PNR ve bagaj takip izleri birlikte okunursa durum daha net gorunur."
            ctaHref={CLAIM_URL}
            ctaLabel="Belge zincirimi kontrol et"
            placement="tr_lost_baggage_tag_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>PIR numarasinin ve resmi kaydin elde olmasi.</li>
                <li>Boarding pass ve PNR zincirinin korunmasi.</li>
                <li>Bagaj etiketinin daha once cekilmis fotografi veya ekran izi.</li>
                <li>E-posta, uygulama ve check-in kayitlarinin saklanmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Etiket yoksa dosya tamamen bitti diye dusunmek.</li>
                <li>PIR ve rezervasyon zincirini toparlamamak.</li>
                <li>Telefon galerisi ve e-posta izlerini kontrol etmemek.</li>
                <li>Kalan belgeleri daginik sekilde birakmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bagaj etiketi neden bu kadar onemlidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bagaj etiketi, bagajin size ait oldugunu ve hangi yolculuk zincirine baglandigini gosteren en pratik
                belgelerden biridir. Bu yuzden kaybolmasi moral bozucu olur. Ama guclu dosya bazen tek bir etikete
                degil, birden fazla izin birlikte okunmasina dayanir.
              </p>
              <p>
                Buradaki asil soru, etiketin yoklugunda hangi kalan belgelerin dosyayi ayakta tutabilecegidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Etiket yoksa hangi alternatifler devreye girer?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                PIR numarasi, boarding pass, PNR, check-in ekrani, havayolu e-postalari, uygulama bildirimleri ve
                hatta bazen galeride kalmis etiket fotografi bu dosyada yeni omurga haline gelebilir. Tek tek zayif
                gorunen belgeler, birlikte dusunuldugunde hala guclu bir akil yurutme cizgisi kurabilir.
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
                      placement: "tr_lost_baggage_tag_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  belge zincirini birlikte incelemek
                </a>{" "}
                dosyanin ne kadar kurtarilabilir oldugunu daha hizli gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Bu dosyada hizli toplama, bazen ilk belgeden daha onemli olur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Etiket kayboldugunda zaman aleyhinize calisabilir, cunku kalan izler de dagilabilir. E-posta kutusu,
                telefon galerisi, mobil uygulama gecmisi ve check-in ekranlari ne kadar erken toparlanirsa, dosya o
                kadar daha duzgun kurulur.
              </p>
              <p>
                En buyuk farki yaratan sey, eksik belgeye uzulmekten cok kalan belgeleri hizla tek yerde toplamaktir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, bagaj etiketi kaybolunca butun dosyanin otomatik olarak coptugunu dusunmektir. Oysa
              pratikte asil farki, elde kalan izleri ne kadar hizli ve ne kadar tutarli sekilde topladiginiz yaratir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj etiketi kaybolursa dosya otomatik olarak biter mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Bagaj etiketi cok onemli bir belgedir ama tek dayanak her zaman o degildir. PIR, boarding
                  pass, PNR ve uygulama ekranlari dosyayi destekleyebilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En guclu alternatif belgeler hangileridir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  PIR numarasi, boarding pass, rezervasyon kaydi, check-in ekrani, e-posta bildirimleri ve varsa
                  bagaj etiketinin fotografi en guclu alternatifler arasindadir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj etiketi kaybolduysa ilk ne yapilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk odak, elde kalan tum belge izlerini toparlamak ve bunlari tek bir net zincirde birlestirmektir.
                  Daginik belge yapisi dosyayi zayiflatir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
