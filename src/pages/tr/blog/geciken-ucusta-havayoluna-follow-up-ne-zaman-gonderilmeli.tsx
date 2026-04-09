import Link from "next/link";
import { CheckCircle2, Clock3, MailQuestion, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "geciken-ucusta-havayoluna-follow-up-ne-zaman-gonderilmeli";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-follow-up-timing&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-follow-up-timing&utm_content=text_link";

export default function TrFollowUpTimingArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Geciken ucusta havayoluna follow-up ne zaman gonderilmeli?"
        description="Havayoluna follow-up ne zaman gonderilmeli? Turk yolcular icin bekleme suresi, dogru zamanlama ve guclu takip mantigini anlatan rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Geciken ucusta havayoluna follow-up ne zaman gonderilmeli?",
            description:
              "Havayoluna follow-up ne zaman gonderilmeli? Turk yolcular icin bekleme suresi, dogru zamanlama ve guclu takip mantigini anlatan rehber.",
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
            datePublished: "2026-04-09",
            dateModified: "2026-04-09",
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
                name: "Follow-up icin sabit bir gun sayisi var midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Tek bir sihirli gun sayisi yoktur. Ama cok erken ve cok daginik mesaj atmak yerine, makul bir bekleme suresinden sonra net ve duzenli bir takip yapmak genellikle daha gucludur.",
                },
              },
              {
                "@type": "Question",
                name: "Ayni maili tekrar gondermek iyi fikir midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Genellikle hayir. En iyi follow-up, onceki talebi referanslayan, kisa, net ve belge zincirini koruyan mesajdir.",
                },
              },
              {
                "@type": "Question",
                name: "En kritik nokta nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik nokta zamanlama ile duzendir. Ilk basvuru tarihi, otomatik cevaplar, onceki yazismalar ve talebin son hali birlikte tutulmalidir.",
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
            <span className="text-slate-900 dark:text-white">Follow-up zamanlamasi</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Takip Zamanlamasi Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Geciken ucusta havayoluna follow-up ne zaman gonderilmeli?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Follow-up konusu bir cok yolcu tarafindan ya fazla erken ya da fazla gec ele alinir. Ilk basvuru
              yapildiktan sonra her sessizlikte hemen yeni mesaj atmak da, gerektiginden uzun beklemek de dosyayi
              zayiflatabilir. En saglikli yaklasim, <strong>zamanlama</strong>, <strong>yazisma duzeni</strong> ve
              <strong> onceki talebe net referans</strong> uzerine kurulan takip adimidir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
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
              <strong>En iyi follow-up, ne en erken ne de en gec olandir.</strong> Mesele sadece mesaj atmak degil;
              ilk basvuruyu referanslayan, zamani dogru secen ve sureci karmasiklastirmayan bir takip kurmaktir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger takip zamanlamasi"
            title="Follow-up icin dogru zamanin gelip gelmedigini hizli kontrol edin"
            description="Bazen bir mesaj daha atmak dosyayi guclendirir, bazen de sadece karmasa yaratir. ClaimWinger ile ne zaman beklemek, ne zaman hatirlatmak gerektigini daha net gorebilirsiniz."
            ctaHref={CLAIM_URL}
            ctaLabel="Takip zamanlamami kontrol et"
            placement="tr_follow_up_timing_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Guclu follow-up isaretleri
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ilk basvurunun tarihini ve icerigini net referanslamak.</li>
                <li>Kisa ve tek noktaya odakli mesaj gondermek.</li>
                <li>Yazisma zincirini bozmadan ilerlemek.</li>
                <li>Nihai varis ve temel belgeleri hazir tutmak.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Cok sik ve daginik mail atmak.</li>
                <li>Ayni metni tekrar tekrar yapistirmak.</li>
                <li>Onceki yazismayi koparmak.</li>
                <li>Takip yaparken belge zincirini unutmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Follow-up bir refleks degil, stratejik zamanlama meselesidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bir cok kullanici claimi gonderdikten hemen sonra sessizlik gorunce yeni bir mail yazmak ister.
                Oysa cok erken atilan mesajlar bazen sadece sureci kalabaliklastirir. Ayni sekilde gerektiginden
                fazla beklemek de dosyanin ritmini zayiflatabilir.
              </p>
              <p>
                Bu yuzden iyi follow-up, sabir ile duzenin dengeli karisimi olmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. En iyi takip, onceki talebi net sekilde hatirlatan kisa mesajdir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Guclu bir follow-up uzun olmak zorunda degildir. Tam tersine, onceki talep tarihi, rezervasyon
                numarasi ve beklenen cevap noktasi net verildiginde kisa mesajlar daha okunakli olur. Burada hedef,
                havayoluna yeni bir hikaye anlatmak degil; zaten var olan dosyayi duzenli sekilde yeniden gundeme
                getirmektir.
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
                      placement: "tr_follow_up_timing_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  follow-up zamanlamasini ve metnini birlikte duzgun kurmak
                </a>{" "}
                surecin gereksiz yere dagilmasini onler.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <MailQuestion className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Takip yaparken belge duzeni neden hala cok onemli?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Follow-up yalnizca “hatirlatma” degildir; ayni zamanda dosyanin ne kadar iyi organize oldugunu da
                gosterir. Ilk basvuru, otomatik cevap, yeni yazisma ve varsa ek belgeler tek akista tutulursa hem
                surec daha okunur olur hem de sonraki adimlar daha saglam kurulur.
              </p>
              <p>
                Ozellikle geciken ucuslarda `nihai varis`, mesaj ekran goruntuleri ve onceki talep kaydi ayni zincirde
                korunursa, follow-up sadece bir hatirlatma degil, duzgun bir dosya disiplini haline gelir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, follow-upu sadece “bir mail daha atmak” gibi gormektir. Oysa guclu takip, zamanlama,
              yazisma duzeni ve onceki talebe dogru referans vermekle etkili olur.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Follow-up icin sabit bir gun sayisi var mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Tek sihirli gun yoktur. Ama cok erken ve cok daginik mesaj atmak yerine makul bekleme sonrasi
                  net takip kurmak daha sagliklidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ayni maili tekrar gondermek iyi fikir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Genellikle hayir. Daha iyi olan, onceki talebi referanslayan kisa ve duzenli bir takip mesajidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Takipte en kritik konu nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zamanlama ile duzendir. Ilk talep, otomatik cevaplar, `nihai varis` ve tum yazisma zinciri bir arada
                  tutulmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
