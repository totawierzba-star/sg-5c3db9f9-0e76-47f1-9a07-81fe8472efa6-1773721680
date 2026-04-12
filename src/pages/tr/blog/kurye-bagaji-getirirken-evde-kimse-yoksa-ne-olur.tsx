import Link from "next/link";
import { AlertTriangle, Briefcase, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "kurye-bagaji-getirirken-evde-kimse-yoksa-ne-olur";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-baggage-delivery-no-one-home&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-baggage-delivery-no-one-home&utm_content=text_link";

export default function TrBaggageCourierNoOneHomeArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Kurye bagaji getirirken evde kimse yoksa ne olur?"
        description="Kurye bagaji getirirken evde kimse yoksa ne olur? Turk yolcular icin teslim denemesi, yeniden planlama, adres teyidi ve belge zincirini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Kurye bagaji getirirken evde kimse yoksa ne olur?",
            description:
              "Kurye bagaji getirirken evde kimse yoksa ne olur? Turk yolcular icin teslim denemesi, yeniden planlama, adres teyidi ve belge zincirini anlatan net rehber.",
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
                name: "Kurye geldiyse ama evde kimse yoksa dosya kapanir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Genelde hayir. Bu durum daha cok basarisiz teslim denemesi gibi okunur. Ama tarih, saat, arama kaydi ve yeni plan bilgisi mutlaka korunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "Bu durumda adresi ve telefonu tekrar teyit etmek gerekir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Yanlis adres, eksik telefon veya ulasilamama sorunu yeniden teslimi gereksiz sekilde uzatabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Yeniden teslim tarihi verilmezse ne yapilmali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Takip ekraninin screeni alinmali, teslim denemesi not edilmeli, arama veya e-postalar saklanmali ve surecin ne zaman yeniden planlandigi acik sekilde kayda gecirilmelidir.",
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
              Kurye bagaji getirirken evde kimse yoksa ne olur
            </span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Bagaj Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Kurye bagaji getirirken evde kimse yoksa ne olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, bagaj dosyasinin en sinir bozucu son virajlarindan biridir: takip olumlu gorunur, kurye asamasina
              gecilir, ama teslim aninda evde kimse yoktur. Dogru analiz, sadece "teslim olmadi" demekten degil,
              <strong> bunun bir basarisiz teslim denemesi mi yoksa daha buyuk bir iletisim sorunu mu
              oldugunu</strong>, <strong>adres ve telefon bilgilerinin ne kadar net oldugunu</strong> ve
              <strong> yeniden planlama surecinin nasil belgelendigini</strong> anlamaktan dogar.
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
              <strong>Evde kimse olmamasi genelde dosyanin bittigi anlamina gelmez; daha cok basarisiz teslim denemesi gibi okunur.</strong>
              Ama bu noktadan sonra adres, telefon, arama kaydi ve yeni teslim plani cok daha onemli hale gelir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger yeniden teslim analizi"
            title="Basarisiz teslim denemesi sonrasi bagaj dosyanizi hizli kontrol edin"
            description="Bu tip dosyalarda en buyuk hata, kurye geldikten sonra is otomatik duzelir diye dusunmektir. Teslim denemesi, iletisim bilgisi ve yeni plan birlikte okunursa surec daha netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Bagaj teslim dosyami kontrol et"
            placement="tr_baggage_delivery_no_one_home_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Teslim denemesinin tarihini ve saatini not etmek.</li>
                <li>Kurye aradiysa arama kaydini veya mesaji saklamak.</li>
                <li>Adres ve telefon bilgisini hemen yeniden dogrulamak.</li>
                <li>Yeniden teslim tarihini veya yeni yonlendirmeyi kayda gecirmek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Kurye denemesi oldugunu belgelememek.</li>
                <li>Adresin hala dogru oldugunu varsaymak.</li>
                <li>Gelen arama veya SMS kayitlarini saklamamak.</li>
                <li>Yeniden teslim plani olmadan pasif sekilde beklemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Bu durum neyi gosterir: kayip mi, yoksa teslim denemesi mi?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Eger bagaj kurye surecine girmis ve siz sadece teslim aninda evde yoktuysaniz, mesele genelde yeniden
                kayip degil, basarisiz teslim denemesidir. Yani dosya tamamen basa donmez, ama iletisim ve teslim
                koordinasyonu tarafinda yeni bir mini surec acilir.
              </p>
              <p>
                Bu fark onemlidir; cunku bundan sonra odak, bagajin bulunup bulunmadigindan cok size ne zaman ve nasil
                yeniden ulastirilacagidir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Neden adres ve ulasilabilirlik tekrar kontrol edilmelidir?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bu tip durumda iki ihtimal birbirine karisabilir: gercekten siz evde olmayabilirsiniz ya da kurye sizi
                bulmakta zorlanmis olabilir. Eksik daire numarasi, yanlis telefon, gecici konaklama bilgisi veya cevap
                verilemeyen arama yeniden teslimi gereksiz yere uzatabilir.
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
                      placement: "tr_baggage_delivery_no_one_home_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  teslim denemesini ve belge zincirini birlikte incelemek
                </a>{" "}
                surecin neden uzadigini daha net gosterebilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Yeniden teslim plani net degilse ne yapilmali?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En degerli sey, basarisiz teslim denemesini kaybetmeden belgelemektir. Tracking screeni, arama kaydi,
                varsa kurye notu ve havayolu e-postalari ayni dosyada tutulmalidir. Yeni tarih verilmezse veya surec
                tekrar belirsizlesirse bu kayitlar kritik hale gelir.
              </p>
              <p>
                Guclu dosya, sadece "kurye gelmis" bilgisini degil, bu denemeden sonra ne kadar sure daha beklendiginin
                de izini tutan dosyadir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, "evde yoktum, demek ki hata bende ve dosya kapandi" diye dusunmektir. Oysa bu durum
              daha cok teslim koordinasyonu sorunu gibi okunur ve dogru belgeyle surec halen net sekilde takip
              edilebilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Kurye geldiyse ama evde kimse yoksa dosya kapanir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Genelde hayir. Bu durum daha cok basarisiz teslim denemesi gibi okunur. Ama tarih, saat, arama kaydi
                  ve yeni plan bilgisi mutlaka korunmalidir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bu durumda adresi ve telefonu tekrar teyit etmek gerekir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet. Yanlis adres, eksik telefon veya ulasilamama sorunu yeniden teslimi gereksiz sekilde
                  uzatabilir.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Yeniden teslim tarihi verilmezse ne yapilmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Takip ekraninin screeni alinmali, teslim denemesi not edilmeli, arama veya e-postalar saklanmali ve
                  surecin ne zaman yeniden planlandigi acik sekilde kayda gecirilmelidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
