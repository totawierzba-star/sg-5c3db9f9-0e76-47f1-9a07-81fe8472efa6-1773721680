import Link from "next/link";
import { CheckCircle2, Clock3, Coins, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "tazminat-ne-kadar-surede-odenir";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-payment-timing&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-payment-timing&utm_content=text_link";

export default function TrPaymentTimingArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Ucus tazminati ne kadar surede odenir? TR yolcular icin net rehber"
        description="Ucus tazminati ne kadar surede odenir? Turk yolcular icin havayolu cevabi, kabul, odeme asamasi ve tipik bekleme mantigini anlatan rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ucus tazminati ne kadar surede odenir? TR yolcular icin net rehber",
            description:
              "Ucus tazminati ne kadar surede odenir? Turk yolcular icin havayolu cevabi, kabul, odeme asamasi ve tipik bekleme mantigini anlatan rehber.",
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
            datePublished: "2026-04-10",
            dateModified: "2026-04-10",
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
                name: "Tazminat odemesi icin tek bir standart gun sayisi var mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Tek bir sabit gun sayisi yoktur. Cevap suresi, kabul asamasi ve paranin fiilen hesaba gecmesi farkli zamanlarda olabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Otomatik cevap almak odeme surecinin basladigi anlamina gelir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Otomatik teyit, genelde sadece talebin alindigini gosterir. Bu, dosyanin kabul edildigi veya odemenin planlandigi anlamina gelmez.",
                },
              },
              {
                "@type": "Question",
                name: "En kritik ayrim nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik ayrim, havayolunun talebi aldigini soylemesi ile dosyayi kabul edip odemeye yaklastigini gostermesi arasindaki farktir.",
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
            <span className="text-slate-900 dark:text-white">Tazminat odeme suresi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Odeme Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ucus tazminati ne kadar surede odenir?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu soru, claim surecinde en yuksek intentli sorulardan biridir, cunku kullanici artik teoriyi degil
              sonucu bekler. Ama en buyuk hata, <strong>talebin alinmasi</strong>, <strong>dosyanin kabul edilmesi</strong>
              ve <strong>paranin fiilen odemeye donusmesi</strong> arasindaki farki ayirmamaktir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Clock3 className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Tazminat odemesi icin tek bir standart gun sayisi yoktur.</strong> Dosyanin alinmasi, cevap
              verilmesi, kabul edilmesi ve bankaya fiilen dusmesi farkli asamalardir. Bu farklar bilinmezse kullanici
              gereksiz panik veya gereksiz iyimserlik yasayabilir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger odeme sureci kontrolu"
            title="Dosyanizin odeme asamasina ne kadar yakin oldugunu hizli kontrol edin"
            description="Bir cok yolcu otomatik maili, sablon cevabi veya inceleme altinda bilgisini odeme yaklasti diye yorumlar. ClaimWinger ile dosyanin gercek asamasini daha net okuyabilirsiniz."
            ctaHref={CLAIM_URL}
            ctaLabel="Odeme surecimi kontrol et"
            placement="tr_payment_timing_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Odemeye yaklasildigini gosteren sinyaller
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Talebin somut olarak kabul edilmesi.</li>
                <li>Odeme detaylarinin veya IBAN bilgisinin istenmesi.</li>
                <li>Net bir odeme mesajinin gelmesi.</li>
                <li>Yazismalarda incelemeden odemeye gecildiginin anlasilmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Yanlis yorumlanan sinyaller
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Otomatik teyidi kabul sanmak.</li>
                <li>Her cevap mailini odeme adimi sanmak.</li>
                <li>Sablon inceleme metnini final karar sanmak.</li>
                <li>Bankaya dusmeden odendi varsaymak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Coins className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. “Cevap geldi” ile “para geliyor” ayni sey degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanicilarin en sik yaptigi hata, havayolundan gelen ilk mesaji odeme adimi sanmaktir. Oysa cevap
                maili bazen sadece dosyanin alindigini, bazen de halen incelendigini gosterir. Bu nedenle her cevap,
                ayni degerde okunmamalidir.
              </p>
              <p>
                Asil onemli olan, mesajin icinde odeme iradesi, kabul, hesap bilgisi isteme veya net bir sonraki para
                adimi olup olmadigidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Odemeye giden surec genelde inceleme, kabul ve transfer olarak ayrilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Uygulamada kullanici icin tek bir bekleme suresi var gibi gorunur. Ama gercekte surec parcali ilerler:
                once dosya alinir, sonra incelenir, sonra kabul edilirse odeme planina yaklasir. Son asamada ise
                paranin hesaba gecmesi ayrica zaman alabilir.
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
                      placement: "tr_payment_timing_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  dosyanin tam olarak hangi asamada oldugunu ayirmak
                </a>{" "}
                kullanicinin sureci daha saglikli yorumlamasini saglar.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Coins className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. En kritik ayrim: odeme vaadi mi, odeme sonucu mu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bazi dosyalarda kullanici “odenecek” gibi bir mesaj alir ve sureci bitmis sayar. Oysa gercekte en
                son asama, paranin fiilen hesabina gecmesidir. Bu nedenle yazismadaki ifade ile banka sonucunu ayirmak
                gerekir.
              </p>
              <p>
                En iyi okuma, havayolunun kabul sinyalini, odeme adimini ve fiili sonucu tek timeline uzerinden gormektir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, talebin alindigina dair mesaj ile paranin yakinda yatacagini gosteren mesaji ayni sey
              sanmaktir. Oysa aradaki fark, kullanicinin beklentisini en cok bozan noktadir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Tazminat odemesi icin tek bir standart gun sayisi var mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Tek bir sabit gun sayisi yoktur. Cevap suresi, kabul asamasi ve paranin fiilen hesaba gecmesi
                  farkli zamanlarda olabilir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Otomatik cevap almak odeme surecinin basladigi anlamina gelir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Otomatik teyit, genelde sadece talebin alindigini gosterir. Bu, dosyanin kabul edildigi veya
                  odemenin planlandigi anlamina gelmez.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">En kritik ayrim nedir?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik ayrim, havayolunun talebi aldigini soylemesi ile dosyayi kabul edip odemeye yaklastigini
                  gostermesi arasindaki farktir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
