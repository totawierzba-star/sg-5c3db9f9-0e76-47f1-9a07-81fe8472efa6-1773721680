import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-takip-ekraninda-teslimata-cikti-yaziyorsa-ne-anlama-gelir";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-out-for-delivery-status&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-out-for-delivery-status&utm_content=text_link";

export default function TrBaggageOutForDeliveryArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj takip ekraninda teslimata cikti yaziyorsa ne anlama gelir?"
        description="Bagaj takip ekraninda teslimata cikti yaziyorsa ne anlama gelir? Turk yolcular icin kurye asamasi, adres teyidi, teslim zamani ve screen zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj takip ekraninda teslimata cikti yaziyorsa ne anlama gelir?",
            description:
              "Bagaj takip ekraninda teslimata cikti yaziyorsa ne anlama gelir? Turk yolcular icin kurye asamasi, adres teyidi, teslim zamani ve screen zincirini anlatan net rehber.",
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
                name: "Teslimata cikti yazisi bagajin ayni gun kesin gelecegi anlamina gelir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Bu status genelde bagajin kurye veya teslim surecine girdigini gosterir, ama ayni gun kesin teslim garantisi vermez. Ekran goruntusu, arama kaydi ve teslim saati notu yine onemlidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu asamada adresi tekrar kontrol etmek gerekir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Yanlis veya eksik adres, dogru status gorunse bile teslimi geciktirebilir. Adres, telefon ve ulasilabilirlik bilgileri tekrar kontrol edilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Teslimata cikti dedikten sonra yine teslim olmazsa ne yapilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ekran goruntusu alinmali, tarih ve saat not edilmeli, e-posta veya telefon kayitlari saklanmali ve surecin gercekten nasil ilerledigi belge zinciriyle korunmalidir.",
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
            <span className="text-slate-900 dark:text-white">
              Bagaj takip ekraninda teslimata cikti yaziyorsa ne anlama gelir
            </span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj takip ekraninda teslimata cikti yaziyorsa ne anlama gelir?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, geciken bagaj dosyasinda moral veren ama yine de kafa karistiran bir andir: takip bir anda hareket
              eder ve ekranda `teslimata cikti` benzeri bir status gorunur. Dogru analiz, sadece buna sevinmekten
              degil, <strong>kurye asamasinin neyi garanti edip etmedigini anlamaktan</strong>, <strong>adres ve
              telefon bilgilerinin dogrulugunu kontrol etmekten</strong> ve <strong>teslim hala gecikirse bunu nasil
              belgelemek gerektigini bilmekten</strong> dogar.
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
              <strong>`Teslimata cikti` genelde bagajin kurye veya dagitim asamasina girdigini gosterir.</strong>
              Ama bu, ayni gun kesin teslim demek degildir. Adres, telefon, teslim zamani ve sonraki ekran
              degisiklikleri yine dikkatle kayda alinmalidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger teslim sureci analizi"
            title="Kurye asamasina gecen bagaj dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, takipte hareket gorununce tum surecin kapandigini sanmaktir. Teslim statusu, adres bilgisi ve gercek teslim zamani birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim surecimi kontrol et"
            placement="tr_baggage_out_for_delivery_status_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Teslimata cikti statusunun tarihli ekran goruntusunu almak.</li>
                <li>Adres ve telefon bilgisini yeniden teyit etmek.</li>
                <li>Kurye aramasi, SMS veya e-posta geldiyse saklamak.</li>
                <li>Gercek teslim saati ile tracking statusunu karsilastirmak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Bu statusu kesin ve hemen teslim garantisi gibi okumak.</li>
                <li>Adresin veya telefonun hala dogru oldugunu kontrol etmemek.</li>
                <li>Kurye asamasinda gelen arama veya mesajlari kaydetmemek.</li>
                <li>Teslim gecikirse onceki status ekranini saklamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. `Teslimata cikti` tam olarak neyi gosterir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bu status genelde bagajin artik sadece aranmadigini, bir teslim surecine girdigini gosterir. Yani
                dosya ilk belirsizlik evresinden cikmis olabilir. Ama bu hala pratik bir surectir; kurye yogunlugu,
                adres teyidi veya operasyon akisina bagli olarak gercek teslim daha sonra da olabilir.
              </p>
              <p>
                Bu nedenle statusu olumlu ama son asama garantisi vermeyen bir isaret gibi okumak daha dogrudur.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Bu asamada neden adres ve iletisim bilgisi onemli olur?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Tracking olumlu gorunse bile yanlis adres, eksik telefon veya ulamama durumu teslimi yeniden
                geciktirebilir. Ozellikle otel, gecici konaklama veya yazim hatasi varsa bu asamada dosya yeniden
                karmasiklasabilir. Bu yuzden teslim surecinde kullanicinin erisilebilir oldugundan emin olmak
                pratikte cok degerlidir.
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
                      placement: "tr_baggage_out_for_delivery_status_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  teslim statusunu ve belge zincirini birlikte incelemek
                </a>{" "}
                surecin gercekten kapanip kapanmadigini daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Status gorunup teslim yine gecikirse ne yapilmali?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bu durumda en degerli sey, statusu kaybetmeden belgelemektir. `Teslimata cikti` yazan ekranin
                goruntusu alinmali, beklenen saat not edilmeli ve sonrasinda arama, SMS, e-posta veya yeni screenler
                ayni akista tutulmalidir. Boylece olumlu gorunen status ile gercek teslim arasindaki fark somut hale
                gelir.
              </p>
              <p>
                Guclu dosya, sadece iyi haberi degil, o iyi haberin gercekte ne zaman sonuca donustugunu da gosteren
                dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, `teslimata cikti` ifadesini dosyanin tamamen kapandigi an gibi okumaktir. Oysa gercek
              kapanis, bagajin fiilen teslim edilmesi ve bu teslimin zaman cizgisinde net sekilde gorulebilmesidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Teslimata cikti yazisi bagajin ayni gun kesin gelecegi anlamina gelir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Bu status genelde bagajin kurye veya teslim surecine girdigini gosterir, ama ayni gun kesin
                  teslim garantisi vermez. Ekran goruntusu, arama kaydi ve teslim saati notu yine onemlidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu asamada adresi tekrar kontrol etmek gerekir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet. Yanlis veya eksik adres, dogru status gorunse bile teslimi geciktirebilir. Adres, telefon ve
                  ulasilabilirlik bilgileri tekrar kontrol edilmelidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Teslimata cikti dedikten sonra yine teslim olmazsa ne yapilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ekran goruntusu alinmali, tarih ve saat not edilmeli, e-posta veya telefon kayitlari saklanmali ve
                  surecin gercekten nasil ilerledigi belge zinciriyle korunmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
