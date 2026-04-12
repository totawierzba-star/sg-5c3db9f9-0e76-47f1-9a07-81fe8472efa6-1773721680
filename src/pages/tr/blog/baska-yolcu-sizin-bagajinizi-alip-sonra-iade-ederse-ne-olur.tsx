import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "baska-yolcu-sizin-bagajinizi-alip-sonra-iade-ederse-ne-olur";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-another-passenger-took-your-baggage-and-returned-it&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-another-passenger-took-your-baggage-and-returned-it&utm_content=text_link";

export default function TrAnotherPassengerTookAndReturnedYourBaggageArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Baska yolcu sizin bagajinizi alip sonra iade ederse ne olur?"
        description="Baska yolcu sizin bagajinizi alip sonra iade ederse ne olur? Turk yolcular icin teslim zamani, belge zinciri, wrong pickup ve devam eden haklari anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Baska yolcu sizin bagajinizi alip sonra iade ederse ne olur?",
            description:
              "Baska yolcu sizin bagajinizi alip sonra iade ederse ne olur? Turk yolcular icin teslim zamani, belge zinciri, wrong pickup ve devam eden haklari anlatan net rehber.",
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
                name: "Bagaj sonradan geri gelirse sorun tamamen kapanir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Bagajin geri donmesi olumlu bir adimdir ama teslimin ne zaman yapildigi, bu surecte hangi masraf veya gecikmenin dogdugu ve dosyanin nasil kayda alindigi yine onemlidir.",
                },
              },
              {
                "@type": "Question",
                name: "Ilk hangi bilgileri saklamaliyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilk bildirim saati, bagajin geri verildigi saat, bagaj etiketi, boarding pass ve size yapilan aciklamanin yazili izi saklanmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu durum valiz sonradan bulundu dosyasi gibi mi okunur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kismen benzer, ama burada temel fark teslim hatasinin kaynagi olarak wrong pickup olmasidir. Bu nedenle teslim zinciri ve iade zamani daha merkezi hale gelir.",
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
              Baska yolcu sizin bagajinizi alip sonra iade ederse ne olur
            </span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Baska yolcu sizin bagajinizi alip sonra iade ederse ne olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu senaryoda ilk panik genelde biraz diner, cunku bavul sonunda geri gelir. Ama dosya yine de kendiliginden
              kapanmaz. Dogru analiz, sadece <strong>bagajin donmus olmasina</strong> degil, <strong>ne zaman donduguna</strong>,
              <strong> bu arada hangi gecikme ve masrafin dogduguna</strong> ve <strong>wrong pickup zincirinin nasil
              belgelendigine</strong> bakar.
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
              <strong>Baska yolcu bavulunuzu alip sonra iade etse bile dosya tamamen anlamsiz hale gelmez.</strong>
              Burada teslim zamani, ilk bildirim, geri verme saati ve bu aralikta dogan etkiler birlikte okunmalidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger returned wrong pickup analizi"
            title="Wrong pickup sonrasi geri donen bagaj dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, bavul geri geldigi icin artik hicbir kayit tutmaya gerek olmadigini sanmaktir. Ilk bildirim, iade saati ve olusan etki birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_another_passenger_took_and_returned_your_baggage_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ilk bildirim saatini saklamak.</li>
                <li>Bagajin ne zaman geri verildigini net not etmek.</li>
                <li>Bagaj etiketini ve boarding passi korumak.</li>
                <li>Iade oncesi olusan masraf veya gecikmeyi belgelemek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Bavul geldigi anda tum kayitlari birakmak.</li>
                <li>Geri donus saatini not etmemek.</li>
                <li>Bu surecte olusan makul masraflari belgelememek.</li>
                <li>Wrong pickup zincirini sadece sozlu seviyede birakmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bavul geri gelirse dosya neden yine de onemli kalir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Cunku asil soru sadece "bavul dondu mu" degildir. Bavulun ne kadar gec dondugu, bu surecte sizin ne
                yasadiginiz ve teslim hatasinin nasil kayda alindigi da onemlidir. Bazi durumlarda bavulun geri gelmesi,
                sadece krizin tam kayip boyutuna ulasmadigini gosterir; ama etkileri yine de devam eder.
              </p>
              <p>
                Bu nedenle geri donus anini net kaydetmek, dosyanin en kritik parcalarindan biridir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ilk hangi bilgiler teyit edilmelidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilk bildirim saati, bagajin size geri verildigi saat, bagaj etiketi, boarding pass ve varsa havayolunun
                yazili aciklamasi ayni anda netlestirilmelidir. Boylece konu soyut bir "geri geldi iste" anlatimi yerine,
                zaman cizgisi olan somut bir teslim hatasi dosyasina doner.
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
                      placement: "tr_another_passenger_took_and_returned_your_baggage_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  wrong pickup sonrasi geri donen bagaj dosyasini birlikte incelemek
                </a>{" "}
                surecin ne kadar saglam kuruldugunu daha net gosterir.
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
                Ilk bildirim kaydi, bagaj etiketi, boarding pass, geri teslim saati ve varsa masraf fisleri ayni
                timeline icinde tutulmalidir. Boylece problem soyut kalmaz; hem wrong pickup hem de geri donus zamani
                net bir cizgiye oturur.
              </p>
              <p>
                Guclu dosya, sadece bavulun geri geldigini degil, bu surecin yolcuya neye mal oldugunu gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, bavul geri geldigi icin ilk raporu, teslim saatini ve ara etkileri artik onemsiz sanmaktir.
              Tam tersine, bu detaylar dosyanin agirligini belirler.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bagaj sonradan geri gelirse sorun tamamen kapanir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Geri gelmesi olumlu bir adimdir ama teslim zamani ve ara etkiler yine de onemlidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ilk hangi bilgileri saklamaliyim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilk bildirim saati, geri teslim saati, bagaj etiketi ve boarding pass birlikte saklanmalidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu durum valiz sonradan bulundu dosyasi gibi mi okunur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Kismen benzer, ama burada ana fark teslim hatasinin wrong pickup kaynakli olmasidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
