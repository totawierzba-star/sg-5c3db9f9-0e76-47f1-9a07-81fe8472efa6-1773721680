import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "pir-nedir-ve-nasil-yapilir";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-pir-baggage-report&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-pir-baggage-report&utm_content=text_link";

export default function TrPirGuideArticle() {
  return (
    <LayoutTr>
      <SEO
        title="PIR nedir ve nasil yapilir? Bagaj raporu rehberi"
        description="PIR nedir ve nasil yapilir? Turk yolcular icin bagaj raporu, havalimaninda ilk adimlar, rapor numarasi ve belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "PIR nedir ve nasil yapilir? Bagaj raporu rehberi",
            description:
              "PIR nedir ve nasil yapilir? Turk yolcular icin bagaj raporu, havalimaninda ilk adimlar, rapor numarasi ve belge zincirini anlatan net rehber.",
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
                name: "PIR nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PIR, bagajin gec gelmesi, kaybolmasi veya hasar gormesi gibi durumlarda havalimaninda acilan resmi bagaj raporudur.",
                },
              },
              {
                "@type": "Question",
                name: "PIR ne zaman yapilmalidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En guclu senaryo, bagaj teslim edilmeden once ve havalimanindan ayrilmadan hemen kayit acmaktir.",
                },
              },
              {
                "@type": "Question",
                name: "PIR numarasi neden onemlidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PIR numarasi, sonradan yapilacak takip, teslimat, masraf ve bagaj yazismalarinin ortak referansi haline gelir.",
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
            <span className="text-slate-900 dark:text-white">PIR rehberi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              PIR nedir ve nasil yapilir? Bagaj raporu rehberi
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              PIR, bircok yolcunun adini ilk kez bagaji cikmadiginda duydugu belgedir. Ama pratikte bu, sadece bir
              form degil, dosyanin ilk ve en onemli iskeletidir. Dogru analiz, sadece 'valizim yok' demekten degil,
              <strong> raporun ne zaman acildigi</strong>, <strong>nasil dolduruldugu</strong> ve
              <strong> hangi belgelerle baglandigi</strong> uzerinden kurulur.
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
              <strong>PIR, bagaj dosyasinin resmi baslangic kaydidir.</strong> Ne kadar hizli acilir, ne kadar temiz
              doldurulur ve ne kadar iyi saklanirsa, sonraki surec o kadar savunulabilir hale gelir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger bagaj kaydi analizi"
            title="PIR kaydiniz dosyayi guclendiriyor mu hizli kontrol edin"
            description="Bagaj dosyalarinda en buyuk hata, raporun gec acilmasi veya eksik belgeyle birakilmasidir. PIR, bagaj etiketi ve teslim bilgisi birlikte okunursa tablo cok daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj kaydimi kontrol et"
            placement="tr_pir_baggage_report_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Havalimanindan ayrilmadan once kayit acilmasi.</li>
                <li>Bagaj etiketi, boarding pass ve rapor numarasinin saklanmasi.</li>
                <li>Rapor aciklamasinda renk, marka ve ayirt edici detaylarin yazilmasi.</li>
                <li>Sonradan gelen e-posta ve teslimat ekranlarinin kaydedilmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Raporu havalimanindan ayrildiktan sonra dusunmek.</li>
                <li>Rapor numarasini veya bagaj etiketini kaybetmek.</li>
                <li>Valizi cok genel tarif etmek.</li>
                <li>PIR'i klasik EU261 dosyasi gibi okumak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. PIR tam olarak neyi kayda gecirir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                PIR, havalimaninda bagajla ilgili resmi bir sorun kaydi acildigini gosterir. Yani gec gelen, cikmayan
                veya hasarli bagaj icin sistemde ilk iz burada olusur. Bu kayit, sonraki yazismalarda 'sorun gercekten
                o anda acildi mi?' sorusuna cevap veren temel belge haline gelir.
              </p>
              <p>
                Bu nedenle PIR, sadece masa basinda doldurulmus bir formalite degil, bagaj dosyasinin baslangic
                zamani ve baglamidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. PIR nasil yapilir ve hangi detaylar yazilmalidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En dogru akis, bagaj bandinda sorun netlesir netlesmez bagaj hizmet noktasina gitmek, bagaj etiketi ve
                boarding pass ile kayit actirmaktir. Valizin rengi, markasi, boyutu, varsa etiketleri ve ayirt edici
                detaylari yazdirilmalidir. Belirsiz anlatim, sonraki takibi zayiflatabilir.
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
                      placement: "tr_pir_baggage_report_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  bagaj raporu ve belge zincirini birlikte okumak
                </a>{" "}
                dosyanin ne kadar saglam kuruldugunu daha hizli gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. PIR sonrasi hangi belgeler saklanmali?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                PIR numarasi alindiktan sonra is bitmis sayilmaz. Teslimat mesajlari, havayolu e-postalari, bagajin ne
                zaman bulunduguna dair ekranlar ve gerekiyorsa makul temel harcama fisleri ayni dosyada tutulmalidir.
                Guclu dosya, sadece ilk raporu degil, sonraki akisi da net gosterir.
              </p>
              <p>
                Ozellikle sonradan 'rapor var ama devaminda ne oldu' sorusu geldiginde, bu zincir belirleyici olur.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, PIR'i sadece formalite sanmak veya 'sonra online hallederim' diye dusunmektir.
              Bagaj dosyasinda guc, ilk resmi kaydin ne kadar hizli ve ne kadar temiz olusturuldugundan gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">PIR nedir?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  PIR, bagajin gec gelmesi, kaybolmasi veya hasar gormesi gibi durumlarda havalimaninda acilan resmi
                  bagaj raporudur.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  PIR ne zaman yapilmalidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En guclu senaryo, bagaj teslim edilmeden once ve havalimanindan ayrilmadan hemen kayit acmaktir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  PIR numarasi neden onemlidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  PIR numarasi, sonradan yapilacak takip, teslimat, masraf ve bagaj yazismalarinin ortak referansi
                  haline gelir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
