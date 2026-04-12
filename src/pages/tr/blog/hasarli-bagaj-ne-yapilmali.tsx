import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "hasarli-bagaj-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-damaged-baggage&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-damaged-baggage&utm_content=text_link";

export default function TrDamagedBaggageArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Hasarli bagaj ne yapilmali? Bavul kirik gelirse haklar"
        description="Hasarli bagaj ne yapilmali? Turk yolcular icin havalimaninda ilk adimlar, foto cekimi, resmi kayit ve belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hasarli bagaj ne yapilmali? Bavul kirik gelirse haklar",
            description:
              "Hasarli bagaj ne yapilmali? Turk yolcular icin havalimaninda ilk adimlar, foto cekimi, resmi kayit ve belge zincirini anlatan net rehber.",
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
                name: "Hasarli bagajda ilk ne yapilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En guclu ilk adim, havalimanindan ayrilmadan once resmi kayit acmak, hasari foto ile belgelemek ve bagaj etiketini saklamaktir.",
                },
              },
              {
                "@type": "Question",
                name: "Kucuk ciziklerle ciddi hasar ayni sekilde mi okunur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Dosyanin gucu genelde hasarin kullanimi nasil etkiledigi, ne kadar net gorundugu ve ne kadar hizli raporlandigiyla degisir.",
                },
              },
              {
                "@type": "Question",
                name: "Hasarli bagaj da EU261 tazminati gibi mi ilerler?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Hasarli bagaj tarafinda odak daha cok resmi rapor, foto, bagaj etiketi ve belge zinciridir.",
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
            <span className="text-slate-900 dark:text-white">Hasarli bagaj</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Hasarli bagaj ne yapilmali? Bavul kirik gelirse haklar
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bagaj bandinda valizin kirik, catlak veya kullanilamaz halde geldigini gormek, yolcunun en hizli cevap
              aradigi anlardan biridir. Dogru analiz, sadece 'hasar var' demekten degil, <strong>hasarin ne kadar net
              belgelediginden</strong>, <strong>ne kadar hizli raporlandigindan</strong> ve <strong>bagaj etiketinin
              korunmasindan</strong> dogar.
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
              <strong>Hasarli bagaj dosyasinda ilk odak, hasari aninda belgelemek ve resmi kaydi havalimaninda acmaktir.</strong>
              Bu tip dosyalarda guc, hasarin foto ile netlesmesi, bagaj etiketinin saklanmasi ve gecikmeden rapor
              verilmesiyle olusur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger bagaj hasar analizi"
            title="Hasarli bagaj dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, hasari havalimaninda kayda gecirmemek veya sadece sozlu sikayetle yetinmektir. Foto, bagaj etiketi ve resmi rapor birlikte okunursa tablo cok daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj hasar dosyami kontrol et"
            placement="tr_damaged_baggage_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Hasarin bagaj bandinda veya cikista hemen foto ile kaydedilmesi.</li>
                <li>Havalimanindan ayrilmadan once resmi kayit veya rapor acilmasi.</li>
                <li>Bagaj etiketi ve boarding passin saklanmasi.</li>
                <li>Hasarin kullanimi nasil etkilediginin net anlatilmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Havalimanindan cikinca sonra rapor acmaya calismak.</li>
                <li>Foto cekmeden sadece sozlu sikayet etmek.</li>
                <li>Yuzeysel cizigi, ciddi kirik hasar gibi anlatmak.</li>
                <li>Bagaj etiketini ve teslim baglamini kaybetmek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Hasarli bagaj dosyasinda ilk dakikalar neden bu kadar onemlidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Hasarli bagaj dosyasinda en kritik an, yolcunun valizi ilk gordugu andir. Cunku sonradan ortaya cikan
                her tartisma, hasarin ne zaman fark edildigi sorusuna doner. Bu nedenle foto, video ve bagaj bandi
                baglami ne kadar erken kayit altina alinirse, dosya o kadar savunulabilir olur.
              </p>
              <p>
                Burada mesele sadece gorsel bir kirik gostermek degil, hasarin teslim aninda mevcut oldugunu net
                kurmaktir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Foto, rapor ve bagaj etiketi birlikte okunmalidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Tek basina foto bazen yeterli olmaz, tek basina rapor da zayif kalabilir. Guclu dosya, hasarin
                goruntusunu, resmi kaydi ve bagajin size ait oldugunu gosteren etiketi ayni zincirde toplar. Boylece
                'hasar vardi ama ne zaman olustu' tartismasi daha zayif hale gelir.
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
                      placement: "tr_damaged_baggage_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  hasar dosyasini belge zinciriyle birlikte incelemek
                </a>{" "}
                tabloyu daha hizli netlestirir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Her hasar ayni agirlikta okunmaz
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Cizik, kozmetik asinma ve kullanimi ciddi etkileyen kirik ayni dosya gucunu yaratmaz. Bu nedenle en
                onemli sey, hasarin valizi gercekten kullanilamaz, zor kullanilir veya belirgin sekilde deger
                kaybina ugrar hale getirip getirmedigini net anlatmaktir.
              </p>
              <p>
                Belirsiz tarifler yerine kirik tekerlek, catlak govde, kirilan fermuar veya kapanmayan valiz gibi somut
                tarifler daha saglam bir cizgi kurar.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, hasari sadece eve gidince fark edilmis bir sorun gibi ele almak veya foto cekmeden
              havalimanindan cikmaktir. Hasarli bagaj dosyasinda guc, ilk dakika belgelendirmesinden gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hasarli bagajda ilk ne yapilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En guclu ilk adim, havalimanindan ayrilmadan once resmi kayit acmak, hasari foto ile belgelemek ve
                  bagaj etiketini saklamaktir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Kucuk ciziklerle ciddi hasar ayni sekilde mi okunur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Dosyanin gucu genelde hasarin kullanimi nasil etkiledigi, ne kadar net gorundugu ve ne kadar
                  hizli raporlandigiyla degisir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hasarli bagaj da EU261 tazminati gibi mi ilerler?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Hasarli bagaj tarafinda odak daha cok resmi rapor, foto, bagaj etiketi ve belge zinciridir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
