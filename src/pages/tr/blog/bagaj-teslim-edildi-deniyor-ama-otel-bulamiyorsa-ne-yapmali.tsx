import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "bagaj-teslim-edildi-deniyor-ama-otel-bulamiyorsa-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-delivered-but-hotel-cant-find&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-delivered-but-hotel-cant-find&utm_content=text_link";

export default function TrBaggageDeliveredButHotelCannotFindArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Bagaj teslim edildi deniyor ama otel bulamiyorsa ne yapmali?"
        description="Bagaj teslim edildi deniyor ama otel bulamiyorsa ne yapmali? Turk yolcular icin resepsiyon kaydi, teslim alani kisi, guest name ve screen zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bagaj teslim edildi deniyor ama otel bulamiyorsa ne yapmali?",
            description:
              "Bagaj teslim edildi deniyor ama otel bulamiyorsa ne yapmali? Turk yolcular icin resepsiyon kaydi, teslim alani kisi, guest name ve screen zincirini anlatan net rehber.",
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
                name: "Tracking teslim edildi diyorsa dosya kapanmis mi sayilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Eger otel bagaji fiilen bulamiyorsa sorun devam ediyor demektir. Bu durumda tracking screeni, teslim saati ve teslim alan kisi bilgisi cok onemli hale gelir.",
                },
              },
              {
                "@type": "Question",
                name: "Otelde kimle kontrol etmek gerekir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Resepsiyon, lost and found benzeri ic kayitlar, vardiya degisimi ve bagaji teslim alan gorevli ya da not birakilan masa kontrol edilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu durumda hangi belgeler saklanmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tracking ekran goruntusu, teslim saati, guest name bilgisi, resepsiyonla gorusme notlari ve varsa arama ya da e-posta zinciri saklanmalidir.",
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
              Bagaj teslim edildi deniyor ama otel bulamiyorsa ne yapmali
            </span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bagaj teslim edildi deniyor ama otel bulamiyorsa ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, bagaj dosyasinda en kafa karistiran senaryolardan biridir: tracking ya da havayolu sistemi teslim
              edildi der, ama otel resepsiyonu ortada valiz olmadigini soyler. Dogru analiz, sadece "sistem yanlis"
              demekten degil, <strong>teslimin kime yapildiginin izini surmekten</strong>, <strong>resepsiyon ve
              vardiya kayitlarini kontrol etmekten</strong> ve <strong>bu catisan bilgiyi belge zincirinde net
              gostermekten</strong> dogar.
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
              <strong>Tracking teslim edildi diyorsa bile dosya bitmis sayilmaz, eger otel bagaji fiilen bulamiyorsa.</strong>
              Bu durumda en kritik sey, teslim saati, teslim alan kisi, guest name ve resepsiyon icindeki kontrol
              zincirini hizla netlestirmektir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger hotel handoff analizi"
            title="Teslim edildi gorunen ama otelde bulunamayan bagaj dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, sistem teslim dedi diye surecin kapandigini sanmaktir. Tracking kaydi, resepsiyon bilgisi ve fiili teslim zinciri birlikte okunursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_baggage_delivered_but_hotel_cant_find_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Tracking ekraninda gorunen teslim saatini kaydetmek.</li>
                <li>Resepsiyonla yapilan gorusmenin tarihini ve kisiyi not etmek.</li>
                <li>Guest name ve oda bilgisinin dogru kullanildigini kontrol etmek.</li>
                <li>Teslim alan kisi veya otel ic notunun izini surmek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sistem teslim dedi diye otelle derin kontrol yapmamak.</li>
                <li>Resepsiyondaki vardiya degisimini hesaba katmamak.</li>
                <li>Kimin teslim aldigini sormadan genel cevapla yetinmek.</li>
                <li>Screen, saat ve gorusme notlarini saklamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Neden tracking ile otel gercegi birbiriyle celisebilir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bazen kurye teslimi sisteme isler, ama otel icinde bagaj hemen dogru yere ulasmaz. Resepsiyon masasi,
                bagaj odasi, vardiya degisimi veya guest name karisikligi bu catiskiyi yaratabilir. Yani sorun her
                zaman bagajin otele hic gelmemesi degil, teslim bilgisinin otel icinde izlenemez hale gelmesidir.
              </p>
              <p>
                Bu nedenle ilk reflex, trackinge ya da resepsiyona koru korune inanmak degil, iki tarafi ayni zaman
                cizgisinde karsilastirmak olmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Otelde hangi noktalar tek tek kontrol edilmelidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Sadece "resepsiyonda yok" cevabi yeterli degildir. Vardiya listesi, back office, bagaj odasi, gece
                personeli, teslim alan gorevli ve guest name benzerlikleri tek tek kontrol edilmelidir. Ozellikle ayni
                soyad veya benzer rezervasyon ismi varsa bagaj yanlis notla farkli bir yere alinmis olabilir.
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
                      placement: "tr_baggage_delivered_but_hotel_cant_find_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  teslim kaydini ve otel zincirini birlikte incelemek
                </a>{" "}
                catisan bilgiyi daha hizli netlestirebilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Bu catiski nasil belgeye donusturulmeli?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En degerli sey, teslim edildi gorunen ekranin kaydini almak ve ayni anda otelin bagaji bulamadigini
                gosteren notlari toplamaktir. Kiminle, ne zaman konusuldugu; resepsiyonun ne soyledigi; teslim alan
                kisi adinin bulunup bulunmadigi ayni dosyada tutulmalidir. Boylece problem "bavul ortada yok" gibi
                soyut kalmaz, iki catisan bilgi seti ayni timeline'a oturur.
              </p>
              <p>
                Guclu dosya, sadece sistemin teslim dedigini degil, buna ragmen fiili teslimin neden teyit
                edilemedigini gosteren dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, tracking teslim dedi diye artik hicbir sorun kalmadigini sanmaktir. Oysa otel bagaji
              fiilen bulamiyorsa sorun halen aciktir ve tam da bu anda belge disiplini en cok deger kazanir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Tracking teslim edildi diyorsa dosya kapanmis mi sayilir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Eger otel bagaji fiilen bulamiyorsa sorun devam ediyor demektir. Bu durumda tracking screeni,
                  teslim saati ve teslim alan kisi bilgisi cok onemli hale gelir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Otelde kimle kontrol etmek gerekir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Resepsiyon, lost and found benzeri ic kayitlar, vardiya degisimi ve bagaji teslim alan gorevli ya da
                  not birakilan masa kontrol edilmelidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu durumda hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Tracking ekran goruntusu, teslim saati, guest name bilgisi, resepsiyonla gorusme notlari ve varsa
                  arama ya da e-posta zinciri saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
