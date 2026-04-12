import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-baska-yolcuya-teslim-edildiyse-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-delivered-to-another-passenger&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-delivered-to-another-passenger&utm_content=text_link";

export default function TrBaggageDeliveredToAnotherPassengerArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj baska yolcuya teslim edildiyse ne yapmali?"
        description="Bagaj baska yolcuya teslim edildiyse ne yapmali? Turk yolcular icin teslim hatasi, bagaj etiketi, yanlis alici ve belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj baska yolcuya teslim edildiyse ne yapmali?",
            description:
              "Bagaj baska yolcuya teslim edildiyse ne yapmali? Turk yolcular icin teslim hatasi, bagaj etiketi, yanlis alici ve belge zincirini anlatan net rehber.",
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
                name: "Bagaj baska yolcuya verildiyse sorun kesin midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet, bu ciddi bir teslim hatasidir. Bagajin bulunmus olmasi tek basina yetmez; yanlis kisiden geri alinmasi ve size guvenli sekilde yeniden ulastirilmasi gerekir.",
                },
              },
              {
                "@type": "Question",
                name: "Ilk hangi bilgileri istemeliyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Teslim hatasinin ne zaman anlasildigi, bagajin hangi ucusta gorundugu, etiketteki bilgi ve geri alma planinin ne oldugu ayni dosyada netlestirilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bagaj etiketi, PIR kaydi, tracking ekranlari, havayolunun yazili teyidi ve yapilan gorusmelerin tarih-saat notlari saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Bagaj baska yolcuya teslim edildiyse ne yapmali</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj baska yolcuya teslim edildiyse ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, bagaj surecindeki en sinir bozucu hatalardan biridir: valiziniz kayip gorunmez, ama dogru kiside de
              degildir. Sorun artik sadece "nerede?" degil, <strong>kime teslim edildigi</strong>,
              <strong> yanlis eslesmenin nasil dogdugu</strong> ve <strong>geri alma zincirinin ne kadar hizli ve
              temiz kurulabildigi</strong> sorusudur.
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
              <strong>Bagaj baska yolcuya verildiyse sorun kapanmis sayilmaz; teslim zinciri dogrudan yanlis kisiye
              sapmistir.</strong> Bu durumda bagaj etiketi, teslim hatasinin fark edildigi an ve geri alma planinin
              ayni timeline icinde netlestirilmesi gerekir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger delivery mismatch analizi"
            title="Bagajiniz yanlis yolcuya gittiyse dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, valiz bir yerde gorundugu icin isin kendiliginden cozulacagini sanmaktir. Yanlis alici, geri alma adimi ve belge zinciri birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_baggage_delivered_to_another_passenger_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Bagaj etiketini ve PNR bilgisini saklamak.</li>
                <li>Teslim hatasinin ne zaman fark edildigini net not etmek.</li>
                <li>Havayolundan yazili geri alma plani istemek.</li>
                <li>Tracking ekranlarini ve gorusme zincirini ayni dosyada tutmak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sozlu bilgiyle yetinip yazili teyit istememek.</li>
                <li>Bagaj etiketi ya da PIR kaydini hemen bulamamak.</li>
                <li>Yanlis teslimin sadece "gecikme" oldugunu sanmak.</li>
                <li>Geri alma sureci icin net bir saat veya plan istememek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Neden bu ayri bir teslim hatasidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Burada bagajiniz sistemde bazen "teslim edildi" ya da "alindi" gibi gorunebilir. Ancak esas sorun,
                valizin havayolu ile yolcu arasindaki son eslesmesinin yanlis kiside bitmesidir. Yani sorun
                kayipliktan cok kimlik ve teslim uyumsuzlugudur.
              </p>
              <p>
                Bu nedenle dosya, klasik geciken bagaj mantigindan biraz farkli okunur.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ilk hangi bilgiler teyit edilmelidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Teslim hatasinin ne zaman anlasildigi, bagajin hangi etiketle eslestigi, yanlis alicinin ucus ya da
                teslim baglami ve geri alma planinin kim tarafindan kuruldugu ayni anda netlestirilmelidir.
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
                      placement: "tr_baggage_delivered_to_another_passenger_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  teslim hatasini ve geri alma planini birlikte incelemek
                </a>{" "}
                surecin ne kadar kontrol altinda oldugunu daha net gosterir.
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
                Bagaj etiketi, PIR kaydi, tracking ekranlari ve havayolunun yazili teyidi ayni timeline icinde
                tutulmalidir. Boylece sorun soyut kalmaz; valizin size degil, baska bir yolcuya gittigi ve bunun ne
                zaman fark edilip nasil duzeltilmeye calisildigi somutlasir.
              </p>
              <p>
                Guclu dosya, yalnizca hatayi degil, hatanin nerede ve ne zaman teslim zincirini bozdugunu gosteren
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
              En buyuk yanilgi, bagajinizin bir sekilde "bulunmus" olmasi nedeniyle dosyanin kapandigini sanmaktir.
              Yanlis yolcuya teslim, teslim zincirinin hala kirik oldugu anlamina gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj baska yolcuya verildiyse sorun kesin midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet, bu ciddi bir teslim hatasidir. Valizin geri alinip size guvenli sekilde ulastirilmasi gerekir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ilk hangi bilgileri istemeliyim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Teslim hatasinin fark edildigi saat, bagaj etiket bilgisi ve havayolunun kurdugu geri alma plani ilk
                  sorulmasi gereken seylerdir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bagaj etiketi, PIR, tracking ekranlari ve havayolunun yazili teyitleri birlikte saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
