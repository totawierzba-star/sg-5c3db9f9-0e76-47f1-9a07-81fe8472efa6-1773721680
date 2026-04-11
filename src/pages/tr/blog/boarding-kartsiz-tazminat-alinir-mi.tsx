import Link from "next/link";
import {
  CheckCircle2,
  FileSearch,
  ShieldAlert,
  Sparkles,
  TicketX,
  XCircle,
} from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "boarding-kartsiz-tazminat-alinir-mi";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-no-boarding-pass&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-no-boarding-pass&utm_content=text_link";

export default function TrNoBoardingPassArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Boarding kartsiz tazminat alinir mi? Eksik belge rehberi"
        description="Boarding kartsiz tazminat alinir mi? Turk yolcular icin PNR, e-posta, uygulama kayitlari ve eksik belgeyle claim kurma mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Boarding kartsiz tazminat alinir mi? Eksik belge rehberi",
            description:
              "Boarding kartsiz tazminat alinir mi? Turk yolcular icin PNR, e-posta, uygulama kayitlari ve eksik belgeyle claim kurma mantigini anlatan net rehber.",
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
                name: "Boarding kart olmadan dosya otomatik olarak biter mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Boarding kart cok degerli bir belgedir ama yoklugu tek basina dosyanin bittiği anlamina gelmez. PNR, e-posta, uygulama kayitlari ve zaman cizelgesi de onemli olabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Boarding kart yerine hangi belgeler yardimci olabilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PNR, rezervasyon onayi, check-in kayitlari, uygulama ekran goruntuleri, e-postalar ve havayolu mesajlari yardimci olabilir.",
                },
              },
              {
                "@type": "Question",
                name: "En buyuk hata nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En buyuk hata, boarding karti yok diye hic denememek veya eldeki diger belgeleri duzensiz bir sekilde saklamaktir.",
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
            <span className="text-slate-900 dark:text-white">Boarding kartsiz tazminat alinir mi?</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Belge Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Boarding kartsiz tazminat alinir mi?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, en sik sorulan kisa sorulardan biridir, cunku bircok yolcu sorunu yasadiktan sonra boarding karti
              kaybettigini fark eder. Dogru cevap sunudur: <strong>evet, bazen yine de guclu bir dosya kurulabilir</strong>.
              Ama bu durumda diger belgelerin duzgun sekilde toplanmasi cok daha onemli hale gelir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <TicketX className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Boarding kart olmadan da bazen tazminat dosyasi kurulabilir.</strong> Ancak bu durumda PNR,
              check-in izleri, e-postalar, uygulama ekran goruntuleri ve olay zaman cizelgesi daha da kritik hale
              gelir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger belge gucu kontrolu"
            title="Boarding kartiniz yoksa dosyanizin hala ne kadar guclu oldugunu kontrol edin"
            description="Eksik belge otomatik olarak dosyanin bittigi anlamina gelmez. ClaimWinger ile elinizdeki PNR, e-posta ve zaman cizelgesinin ne kadar guclu oldugunu hizla gorun."
            ctaHref={CLAIM_URL}
            ctaLabel="Belge gucumu kontrol et"
            placement="tr_no_boarding_pass_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Yardimci olabilecek belgeler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>PNR ve rezervasyon onayi.</li>
                <li>Check-in kaydi veya mobil check-in izi.</li>
                <li>E-posta, SMS ve uygulama bildirimleri.</li>
                <li>Masraf fisleri ve nihai varis bilgisi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Boarding kart yok diye dosyadan vazgecmek.</li>
                <li>Diger belgeleri da silmek veya duzensiz saklamak.</li>
                <li>Sadece tek ekran goruntusune guvenmek.</li>
                <li>Zaman cizelgesini hic kurmamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <FileSearch className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Boarding kart cok degerlidir ama tek belge degildir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Boarding kart dosyanin gucunu artiran belgelerden biridir, cunku yolcunun fiilen o ucusa bagli oldugunu
                gostermede yardim eder. Ama yoklugu her seyin bittiği anlamina gelmez. Bircok durumda rezervasyon izi,
                check-in kaydi ve havayolu mesajlari da tabloyu kurabilir.
              </p>
              <p>
                Asil mesele, eksik belgeyi diger belgelerle telafi edecek temiz bir belge zinciri olusturmaktir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. PNR ve zaman cizelgesi daha da kritik hale gelir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Boarding kart yoksa dosyanin omurgasi daha cok PNR, e-posta gecmisi, uygulama ekran goruntuleri ve
                olay siralamasina dayanir. Hangi saatte ne oldu, ne zaman check-in yapildi, ne zaman mesaj geldi gibi
                detaylar dosyayi ayakta tutar.
              </p>
              <p>
                Bu nedenle{" "}
                <a
                  href={CLAIM_URL_TEXT}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    pushClaimWingerEvent("claimwinger_cta_click", {
                      locale: "tr",
                      placement: "tr_no_boarding_pass_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  eksik belgeyle bile dosya gucunu kontrol etmek
                </a>{" "}
                “boarding kart yok, o zaman bitti” demekten daha akilli bir yaklasimdir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. En buyuk risk eksik belge degil, daginik belge yapisidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bazen boarding kart kaybolur ama diger belgeler duzgunce durur. Bazen ise asıl sorun, kullanicinin elinde
                bircok sey olmasina ragmen bunlari duzenli bir sekilde toplayamamasidir. Guclu dosya, eksiksiz olmak
                kadar tutarli ve okunabilir olmak zorundadir.
              </p>
              <p>
                PNR, mesajlar, check-in izi ve gercek varis sonucu birlikte durdugunda dosya hala anlamli olabilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, boarding karti kaybedince hic denememektir. Diger belgeler hala guclu olabilir; asıl
              farki yaratan sey, bu belgelerin duzenli ve inandirici bir sekilde bir araya getirilmesidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Boarding kart olmadan dosya otomatik olarak biter mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Boarding kart cok degerli bir belge olsa da yoklugu tek basina dosyanin bittiği anlamina
                  gelmez.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Boarding kart yerine hangi belgeler yardimci olabilir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  PNR, rezervasyon onayi, check-in kayitlari, uygulama ekran goruntuleri, e-postalar ve havayolu
                  mesajlari dosyayi destekleyebilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">En buyuk hata nedir?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Boarding kart yok diye hic denememek veya eldeki diger belgeleri daginik bir sekilde birakmaktir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
