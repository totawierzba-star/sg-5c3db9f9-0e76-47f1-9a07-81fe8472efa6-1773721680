import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "yanlis-valizi-eve-goturduysen-ne-yapmali";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-took-wrong-baggage-home&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-took-wrong-baggage-home&utm_content=text_link";

export default function TrTookWrongBaggageHomeArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Yanlis valizi eve goturduysen ne yapmali?"
        description="Yanlis valizi eve goturduysen ne yapmali? Turk yolcular icin etiket kontrolu, gecikmis bildirim, bagaj ofisi ve belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Yanlis valizi eve goturduysen ne yapmali?",
            description:
              "Yanlis valizi eve goturduysen ne yapmali? Turk yolcular icin etiket kontrolu, gecikmis bildirim, bagaj ofisi ve belge zincirini anlatan net rehber.",
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
                name: "Yanlis valizi eve goturduysem ne kadar hizli bildirmeliyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mumkun olan en kisa surede. Etiketi fark ettiginiz anda havayoluna veya bagaj ofisine haber vermek, hem sizin dosyanizi hem de diger yolcunun bagaj surecini temiz tutar.",
                },
              },
              {
                "@type": "Question",
                name: "Valizi actiysam durum daha mi kotu olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Asil onemli nokta geciktirmeden resmi bildirim yapmaktir. Ancak valizi gereksiz yere kurcalamamak ve oldugu haliyle iade akisina sokmak daha dogru olur.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi belgeleri saklamaliyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yanlis valizin etiketi, sizin boarding passiniz, bagaj fisiniz, ilk bildirim saati ve varsa cektiginiz fotograflar saklanmalidir.",
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
            <span className="text-slate-900 dark:text-white">Yanlis valizi eve goturduysen ne yapmali</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Yanlis valizi eve goturduysen ne yapmali?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu senaryo genelde kapidan iceri girdikten sonra fark edilir: etiket, renk ya da isim tutmaz ve elinizdeki
              bavulun size ait olmadigi netlesir. Dogru analiz, sadece <strong>yanlis valizi fark etmekten</strong>
              degil, <strong>gecikmeden resmi bildirim yapmak</strong>, <strong>etiket ve boarding pass zincirini
              korumak</strong> ve <strong>kendi bagaj dosyanizin da ayni anda takipte kalmasini saglamaktan</strong>
              dogar.
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
              <strong>Yanlis valizi eve goturduyseniz durumu fark ettiginiz anda havayoluna veya bagaj ofisine haber
              vermelisiniz.</strong> Bu dosyada guc, geciken bildirimi olabildigince kisa tutmak, etiketi kaybetmemek
              ve kendi bagaj kaydinizla bu hatayi ayni timeline icinde gostermekten gelir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger delayed wrong baggage analizi"
            title="Yanlis valizi eve goturma dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, biraz bekleyip sonra aramaktir. Fark etme saati, etiket ve ilk bildirim ayni zincirde tutulursa tablo daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_took_wrong_baggage_home_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Yanlisligi fark eder etmez bildirim yapmak.</li>
                <li>Bagaj etiketini ve bagaj fisini saklamak.</li>
                <li>Fark etme saatini ve ilk arama saatini not etmek.</li>
                <li>Kendi kayip bagaj dosyanizi da ayni anda takip etmek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sabaha kadar bekleyip sonra bildirmek.</li>
                <li>Etiketi koparmak veya atmak.</li>
                <li>Yanlis valizi kendi bavulunuzla karistirip kurcalamak.</li>
                <li>Kendi bagajiniz icin ayri resmi kayit acmamayi unutmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Buradaki asil risk neden gecikmis bildirimdir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Havalimaninda fark edilen yanlis teslim ile evde fark edilen yanlis teslim ayni degildir. Eve goturulen
                yanlis valizde zaman kaybi devreye girer ve hem sizin dosyaniz hem de diger yolcunun bagaj sureci daha
                fazla uzar. Bu nedenle fark etme aniyla bildirim aninin birbirine yakin olmasi cok onemlidir.
              </p>
              <p>
                Dosyanin gucu burada "ne kadar cabuk duzeltme aksiyonuna girdiniz" sorusuna baglanir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ilk hangi bilgiler teyit edilmelidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Yanlis valizin etiketi, isim bilgisi, sizin boarding passiniz, bagaj fisiniz ve ilk bildirim saati
                ayni anda netlestirilmelidir. Sadece "yanlis bavul almisim" demek yetmez; hangi bavulu ne zaman fark
                ettiginizi ve nasil bildirdiginizi de temiz gostermek gerekir.
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
                      placement: "tr_took_wrong_baggage_home_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  gecikmis bildirimle yanlis bagaj teslimini birlikte incelemek
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
                Yanlis valizin etiketi, sizin boarding passiniz, bagaj fisiniz, ilk telefon veya e-posta bildirimi ve
                varsa cektiginiz fotograflar ayni timeline icinde tutulmalidir. Boylece durum soyut kalmaz; hatanin
                ne zaman fark edildigi ve ne kadar hizli raporlandigi somutlasir.
              </p>
              <p>
                Guclu dosya, sadece yanlis valizin sizde oldugunu degil, bu hataya gecikmeden dogru tepki verdiginizi
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
              En buyuk yanilgi, yorgunluk veya zaman baskisi yuzunden bir sure bekleyip sonra aramaktir. Yanlis valiz
              eve gittikce dosya daha temiz degil, daha daginik hale gelir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Yanlis valizi eve goturduysem ne kadar hizli bildirmeliyim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mumkun olan en kisa surede. Fark ettiginiz anda bildirim yapmak en dogru akistir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Valizi actiysam durum daha mi kotu olur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Asil kritik nokta, geciktirmeden resmi bildirim yapmaktir. Yine de valizi gereksiz yere kurcalamamak
                  daha dogru olur.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeleri saklamaliyim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Yanlis valizin etiketi, boarding pass, bagaj fisi ve ilk bildirim kaydi birlikte saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
