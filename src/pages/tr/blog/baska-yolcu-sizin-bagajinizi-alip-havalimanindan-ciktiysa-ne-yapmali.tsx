import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "baska-yolcu-sizin-bagajinizi-alip-havalimanindan-ciktiysa-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-another-passenger-left-airport-with-your-baggage&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-another-passenger-left-airport-with-your-baggage&utm_content=text_link";

export default function TrAnotherPassengerLeftAirportWithYourBaggageArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Baska yolcu sizin bagajinizi alip havalimanindan ciktiysa ne yapmali?"
        description="Baska yolcu sizin bagajinizi alip havalimanindan ciktiysa ne yapmali? Turk yolcular icin bagaj etiketi, band cikisi, ilk bildirim ve belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Baska yolcu sizin bagajinizi alip havalimanindan ciktiysa ne yapmali?",
            description:
              "Baska yolcu sizin bagajinizi alip havalimanindan ciktiysa ne yapmali? Turk yolcular icin bagaj etiketi, band cikisi, ilk bildirim ve belge zincirini anlatan net rehber.",
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
                name: "Bu durumda ilk ne yapilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hemen bagaj ofisine veya havayoluna bildirim yapilmali, bagaj etiketi ve boarding pass gosterilerek durum resmi kayda baglanmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu yine de kayip bagaj dosyasi gibi mi ilerler?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pratikte evet, ama burada sorun bagajin tamamen izsiz kaybolmasi degil, yanlis yolcuyla havaalanindan cikmis olmasidir. Bu nedenle zamanlama ve ilk bildirim daha da onem kazanir.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bagaj etiketi, boarding pass, bagaj fisi, ilk bildirim saati ve bagaj bandinda fark edilen durumla ilgili notlar saklanmalidir.",
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
              Baska yolcu sizin bagajinizi alip havalimanindan ciktiysa ne yapmali
            </span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Baska yolcu sizin bagajinizi alip havalimanindan ciktiysa ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, bagaj bandindaki en sinir bozucu senaryolardan biridir: sizin valiziniz artik bandda yoktur, ama
              sistemsel bir kayip da olmayabilir; biri etikete bakmadan bavulu alip cikmistir. Dogru analiz, sadece
              <strong> bagajin gorunmedigini fark etmekten</strong> degil, <strong>ilk bildirimi hizla acmaktan</strong>,
              <strong> bagaj etiketiyle sahipligi temiz gostermekten</strong> ve <strong>yanlis alici ihtimalini bagaj
              ofisiyle ayni timeline icinde kurmaktan</strong> dogar.
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
              <strong>Baska yolcu sizin bavulunuzu alip ciktiysa hemen bagaj ofisine resmi bildirim vermek gerekir.</strong>
              Bu dosyada guc, bagaj etiketini, boarding passi ve ilk fark etme anini ayni belge zincirinde toplamakla
              olusur.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger wrong pickup analizi"
            title="Baska yolcunun sizin bavulunuzla cikmis olabilecegi dosyayi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, biraz daha bekleyip belki bavul gelir diye oyalamaktir. Etiket, bildirim saati ve bagaj ofisi kaydi birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_another_passenger_left_airport_with_your_baggage_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Bagaj etiketini ve bagaj fisini hemen gosterebilmek.</li>
                <li>Band bosaldigi anda resmi bildirim acmak.</li>
                <li>Ilk fark etme saatini not etmek.</li>
                <li>Bagaj ofisinin size verdigi referans veya takip kaydini saklamak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Bir sure daha bekleyip resmi kaydi geciktirmek.</li>
                <li>Bagaj etiketini veya boarding passi bulamamak.</li>
                <li>Sorunu sadece sozlu seviyede birakmak.</li>
                <li>Yanlis alici ihtimalini net anlatmadan genel "kayip bagaj" demek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Neden bu klasik kayip bagajdan biraz farklidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Burada bagajiniz teknik olarak sistemden dusmemis olabilir; sadece banddan yanlis kisi tarafindan
                alinmis ve havaalanindan cikarilmis olabilir. Yani sorun tamamen izsiz kaybolma degil, gec cikisli bir
                teslim uyumsuzlugudur.
              </p>
              <p>
                Bu nedenle ilk saatlerde kurulan resmi kayit, dosyanin omurgasi haline gelir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ilk hangi bilgiler teyit edilmelidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bagaj etiketi, sizin boarding passiniz, bagaj fisiniz ve band bosaldiginda fark edilen saat ayni anda
                netlestirilmelidir. Boylece konu soyut bir kayip yerine, yanlis alici ihtimali olan somut bir teslim
                problemi olarak anlatilabilir.
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
                      placement: "tr_another_passenger_left_airport_with_your_baggage_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  yanlis alici ihtimali olan bagaj dosyasini birlikte incelemek
                </a>{" "}
                surecin ne kadar temiz yonetildigini daha net gosterir.
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
                Bagaj etiketi, bagaj fisi, boarding pass, ilk bildirim saati ve size verilen bagaj ofisi kaydi ayni
                timeline icinde tutulmalidir. Boylece durum soyut kalmaz; bagajin banddan sonra size gelmedigi ve ne
                kadar hizli resmi surece alindigi somutlasir.
              </p>
              <p>
                Guclu dosya, bavulun yoklugunu degil, yanlis cikis ihtimaline karsi ne kadar hizli reaksiyon verdiginizi
                gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, band bosaldiktan sonra biraz daha bekleyip sonra ilgilenmektir. Bu senaryoda hizli
              resmi bildirim, konunun dagilmasini engeller.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu durumda ilk ne yapilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hemen bagaj ofisine veya havayoluna bildirim yapilmali ve bagaj etiketiyle dosya resmi kayda alinmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu yine de kayip bagaj dosyasi gibi mi ilerler?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Pratikte evet, ama burada bagajin yanlis yolcuyla cikmis olmasi ihtimali dosyanin ana farkidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bagaj etiketi, boarding pass, bagaj fisi ve ilk bildirim kaydi birlikte saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
