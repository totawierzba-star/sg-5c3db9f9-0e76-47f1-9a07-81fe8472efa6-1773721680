import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-yanlis-hotele-teslim-edildiyse-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-delivered-to-wrong-hotel&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-delivered-to-wrong-hotel&utm_content=text_link";

export default function TrBaggageDeliveredToWrongHotelArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj yanlis hotele teslim edildiyse ne yapmali?"
        description="Bagaj yanlis hotele teslim edildiyse ne yapmali? Turk yolcular icin teslim saati, otel teyidi, yeni yonlendirme ve belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj yanlis hotele teslim edildiyse ne yapmali?",
            description:
              "Bagaj yanlis hotele teslim edildiyse ne yapmali? Turk yolcular icin teslim saati, otel teyidi, yeni yonlendirme ve belge zincirini anlatan net rehber.",
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
                name: "Bagaj yanlis hotele gittiyse sorun kapandi mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Bagajin bulunmus olmasi yeterli degildir; dogru yolcuya ve dogru teslim noktasina yeniden yonlendirilmesi gerekir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu durumda ilk ne teyit edilmeli?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Teslimin yapildigi otelin adi, teslim saati, teslim alan kisi ve bagajin hangi yeni planla dogru otele ya da size yonlendirilecegi hizla teyit edilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tracking screeni, yanlis otelin teyidi, gorusme notlari, yeni yonlendirme bilgisi ve varsa e-posta veya telefon zinciri saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Bagaj yanlis hotele teslim edildiyse ne yapmali</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj yanlis hotele teslim edildiyse ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, hotel delivery akisinin en sinir bozucu varyantlarindan biridir: sistem teslimi gosterir ama
              valiz sizin otelinize degil, baska bir otele gitmistir. Dogru analiz, sadece "yanlis yere gitmis"
              demekten degil, <strong>teslimin tam nereye ve kime yapildigini teyit etmekten</strong>,
              <strong> yeni yonlendirme planini hizla kurmaktan</strong> ve <strong>bu sapmanin timeline icinde
              nasil belgeye donusturuldugunu gostermekten</strong> dogar.
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
              <strong>Bagaj yanlis hotele gittiyse sorun kapanmis sayilmaz; teslim zinciri sadece sapmis demektir.</strong>
              Bu noktada yanlis otel, teslim saati, teslim alan kisi ve yeni yonlendirme akisi ayni dosyada toplanmalidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger wrong hotel analizi"
            title="Yanlis otele giden bagaj dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, valiz bir yerde bulundugu icin isin kendiliginden cozuldugunu sanmaktir. Yanlis teslim noktasi, yeni yonlendirme ve belge zinciri birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_baggage_delivered_to_wrong_hotel_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Yanlis otelin adini ve teslim saatini net kaydetmek.</li>
                <li>Bagaji kimin teslim aldigini sormak.</li>
                <li>Dogru otel veya yeni adres icin yeni plan istemek.</li>
                <li>Tracking screeni ve arama notlarini birlikte saklamak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Yanlis teslimi sadece sozlu seviyece birakmak.</li>
                <li>Yeni yonlendirme plani istemeden beklemek.</li>
                <li>Yalnizca kendi oteliyle konusup diger oteli teyit etmemek.</li>
                <li>Trackingteki teslim zamanini saklamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Yanlis hotel teslimi neden ayri bir problemdir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Burada bagaj teknik olarak "bulunmus" olabilir, ama hala size ulasmamistir. Yani sorun kayip
                evresinden ciksa bile dogru teslim noktasina gecis bozulmustur. Bu nedenle dosya kapanmaz, sadece
                farkli bir teslim sorunu evresine girer.
              </p>
              <p>
                Asil mesele valizin bir binada olmasi degil, dogru kisinin kontrolune girmesidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ilk hangi bilgiler teyit edilmelidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yanlis otelin adi, teslim saati, teslim alan kisi, guest name ve sonraki tasima plani ayni anda
                netlestirilmelidir. Yalnizca "diger otele gitmis" bilgisi yetmez; oradan size nasil donecegi de
                timeline icinde kurulmalidir.
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
                      placement: "tr_baggage_delivered_to_wrong_hotel_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  yanlis hotel teslimini ve yeni plani birlikte incelemek
                </a>{" "}
                surecin ne kadar saglam ilerledigini daha net gosterir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Hangi belge zinciri en degerlidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Trackingteki teslim kaydi, yanlis hotelin teyidi, arama notlari ve yeni yonlendirme plani ayni
                timeline icinde tutulmalidir. Boylece problem soyut kalmaz; bagajin yanlis noktaya gittigi ve ne
                zaman yeniden yola cikmasi gerektigi somutlasir.
              </p>
              <p>
                Guclu dosya, sapmanin nerede oldugunu ve duzeltmenin ne zaman basladigini gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, valiz bir yerde bulundugu icin artik sorunun cozuldugunu sanmaktir. Yanlis hotel
              teslimi, teslim zincirinin hala kirik oldugu anlamina gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj yanlis hotele gittiyse sorun kapandi mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Bagajin bulunmus olmasi yeterli degildir; dogru yolcuya ve dogru teslim noktasina yeniden yonlendirilmesi gerekir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu durumda ilk ne teyit edilmeli?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Teslimin yapildigi otelin adi, teslim saati, teslim alan kisi ve bagajin hangi yeni planla dogru otele ya da size yonlendirilecegi hizla teyit edilmelidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Tracking screeni, yanlis otelin teyidi, gorusme notlari, yeni yonlendirme bilgisi ve varsa e-posta veya telefon zinciri saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
