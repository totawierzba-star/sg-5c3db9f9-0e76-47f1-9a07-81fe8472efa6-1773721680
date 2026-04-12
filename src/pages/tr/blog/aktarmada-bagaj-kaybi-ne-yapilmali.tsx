import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "aktarmada-bagaj-kaybi-ne-yapilmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-lost-transfer&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-lost-transfer&utm_content=text_link";

export default function TrLostBaggageOnTransferArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Aktarmada bagaj kaybi ne yapilmali?"
        description="Aktarmada bagaj kaybi olursa ne yapilmali? Turk yolcular icin son havalimani, PIR, bagaj etiketi ve aktarma zincirinde belge duzenini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Aktarmada bagaj kaybi ne yapilmali?",
            description:
              "Aktarmada bagaj kaybi olursa ne yapilmali? Turk yolcular icin son havalimani, PIR, bagaj etiketi ve aktarma zincirinde belge duzenini anlatan net rehber.",
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
                name: "Aktarmada bagaj kaybi olursa ilk kayit nerede acilmalidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Genelde bagajin cikmasi gereken son havalimaninda, bagaj teslim edilmeden once PIR veya esdeger resmi kayit acilmasi en guclu ilk adimdir.",
                },
              },
              {
                "@type": "Question",
                name: "Aktarmada hangi belge daha da onemli hale gelir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bagaj etiketi, boarding passler, segment zinciri ve varsa through-check bilgisi aktarmali bagaj dosyalarinda cok daha kritik hale gelir.",
                },
              },
              {
                "@type": "Question",
                name: "Ilk ucusu yapan havayolu mu, son tasiyici mi onemlidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aktarmali bagaj dosyalarinda tek bir segmente bakmak genelde yetersizdir. Son havalimani kaydi, segment akisi ve fiili bagaj zinciri birlikte okunmalidir.",
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
            <span className="text-slate-900 dark:text-white">Aktarmada bagaj kaybi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Aktarmada bagaj kaybi ne yapilmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Aktarmali yolculukta bagaj sorunu yasandiginda kafa karisikligi iki katina cikar, cunku yolcu hem
              segment zincirini hem de bagajin nerede koptugunu anlamaya calisir. Dogru analiz, sadece 'hangi ucakta
              kayboldu?' sorusundan degil, <strong>son havalimani kaydi</strong>, <strong>bagaj etiketi</strong> ve
              <strong> aktarma akisi</strong> uzerinden kurulur.
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
              <strong>Aktarmada bagaj kaybindaki ilk odak, son varis havalimaninda resmi kayit acmak ve zinciri belgelemektir.</strong>
              Bu dosyalarda guc, sadece tek bir segmente suc bulmaktan degil, bagajin tum aktarim akisini ve eldeki
              belgeleri netlestirmekten gelir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger aktarmali bagaj analizi"
            title="Aktarmali bagaj dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, sadece ilk ucaga odaklanmak veya son havalimaninda resmi kayit acmamaktir. Bagaj etiketi, segment zinciri ve teslimat akisi birlikte okunursa tablo cok daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Aktarmali bagaj dosyami kontrol et"
            placement="tr_lost_baggage_transfer_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Son varis havalimaninda hemen PIR veya esdeger kayit acilmasi.</li>
                <li>Butun boarding passler ve bagaj etiketlerinin saklanmasi.</li>
                <li>Through-check veya segment zincirini gosteren belge akisi.</li>
                <li>Bagajin ne zaman bulundugu ya da teslim edildiginin kaydedilmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece ilk ucusu yapan havayoluna bakmak.</li>
                <li>Son varis noktasinda resmi kayit acmadan havalimanindan ayrilmak.</li>
                <li>Bagaj etiketi ve aktarma belgelerini saklamamak.</li>
                <li>Aktarmali bagaj sorununu normal bagaj gecikmesiyle ayni duz cizgide okumak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Aktarmada kaybolan bagaj dosyasinda asil soru, nerede kopus oldugudur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Aktarmali yolculukta bagaj bazen ilk segmentten hic yuklenmez, bazen ara havalimaninda kalir, bazen de
                son noktaya gunler sonra gelir. Bu nedenle dosyayi tek bir anda dondurmek zor olur. Guclu okuma,
                bagajin yolculuk zincirini ve son nerede goruldugunu belgelemekle baslar.
              </p>
              <p>
                Yolcu icin pratikte en onemli konu, suclu segmenti tahmin etmekten once kaydi resmi hale getirmektir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Son havalimaninda acilan PIR, aktarmali dosyada daha da kritik hale gelir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Aktarmali bagaj dosyasinda, son varis noktasinda 'bagaj burada yok' kaydini acmak cok onemlidir.
                Cunku sorun, ancak bagajin cikmasi gereken yerde netlesir. Burada acilan PIR, segment zincirinin hangi
                noktada koptuguna dair ilk resmi zemin olur.
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
                      placement: "tr_lost_baggage_transfer_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  aktarmali bagaj zincirini birlikte incelemek
                </a>{" "}
                dosyanin hangi belgeyle guclenebilecegini daha hizli gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Bagaj etiketi ve segment belgeleri, bu dosyanin bel kemigidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Aktarmali bagaj dosyalarinda boarding passler, bagaj etiketi, mobil uygulama ekranlari ve varsa
                teslimat takip mesajlari ayni dosyada tutulmalidir. Cunku mesele sadece bagajin gelmemesi degil,
                hangi zincirde ve hangi anda koptugunun gosterilebilmesidir.
              </p>
              <p>
                Ayrica yolcu evinden uzakta kaldigi durumlarda yapilan makul temel alislar da fislerle birlikte
                saklanmalidir. Bu taraf, gecikme uzadikca daha anlamli hale gelir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, aktarmada kaybolan bagaj dosyasini sadece 'ilk ucak yuklememis' gibi tek cizgili bir
              hikayeye indirmektir. Oysa guc, son havalimani kaydi, bagaj etiketi ve tum segment akisinin birlikte
              okunmasindan gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Aktarmada bagaj kaybi olursa ilk kayit nerede acilmalidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Genelde bagajin cikmasi gereken son havalimaninda, bagaj teslim edilmeden once PIR veya esdeger resmi
                  kayit acilmasi en guclu ilk adimdir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Aktarmada hangi belge daha da onemli hale gelir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bagaj etiketi, boarding passler, segment zinciri ve varsa through-check bilgisi aktarmali bagaj
                  dosyalarinda cok daha kritik hale gelir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ilk ucusu yapan havayolu mu, son tasiyici mi onemlidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Aktarmali bagaj dosyalarinda tek bir segmente bakmak genelde yetersizdir. Son havalimani kaydi,
                  segment akisi ve fiili bagaj zinciri birlikte okunmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
