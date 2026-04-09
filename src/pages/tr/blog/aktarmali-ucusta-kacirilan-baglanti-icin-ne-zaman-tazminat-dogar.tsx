import Link from "next/link";
import { CheckCircle2, GitBranch, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "aktarmali-ucusta-kacirilan-baglanti-icin-ne-zaman-tazminat-dogar";
const CLAIM_URL =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-missed-connection&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-missed-connection&utm_content=text_link";

export default function TrMissedConnectionArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Aktarmali ucusta kacirilan baglanti icin ne zaman tazminat dogar?"
        description="Aktarmali ucusta baglanti kacirildiginda ne zaman tazminat dogabilir? Turk yolcular icin tek rezervasyon, nihai varis ve EU261 mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Aktarmali ucusta kacirilan baglanti icin ne zaman tazminat dogar?",
            description:
              "Aktarmali ucusta baglanti kacirildiginda ne zaman tazminat dogabilir? Turk yolcular icin tek rezervasyon, nihai varis ve EU261 mantigini anlatan net rehber.",
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
                name: "Kacirilan baglanti oldugunda tazminat otomatik olarak dogar mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Baglanti kacirmak tek basina yeterli degildir. Tek rezervasyon, tum rota yapisi ve nihai varista olusan zaman kaybi birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "En kritik nokta ilk ucus mu, son hedef mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En kritik nokta son hedeftir. Cunku dosyanin gercek agirligi, yolcunun nihai varis saatinde netlesir.",
                },
              },
              {
                "@type": "Question",
                name: "Tek rezervasyon neden bu kadar onemlidir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cunku aktarmali dosyalarda yolculugun butun zincir olarak okunabilmesi, claimin gucunu ciddi sekilde etkiler.",
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
            <span className="text-slate-900 dark:text-white">Kacirilan baglanti</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Aktarmali Ucus Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Aktarmali ucusta kacirilan baglanti icin ne zaman tazminat dogar?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu konu, hem Turk yolcular hem de Avrupa diasporasi icin en karisik alanlardan biridir. Cunku bircok
              kisi sadece ilk ucusun gecikmesine bakar. Oysa aktarmali dosyalarda asil soru, <strong>tek rezervasyon
              yapisi</strong>, <strong>tum yolculuk zinciri</strong> ve <strong>nihai varis sonucu</strong> birlikte
              okundugunda cevap bulur.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 10 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <GitBranch className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Kacirilan baglanti tek basina otomatik tazminat anlamina gelmez.</strong> Fakat tek rezervasyonlu
              seyahatlerde ve son hedefe belirgin gec varis varsa dosya ciddi sekilde guclenebilir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger baglanti analizi"
            title="Kacirilan baglanti dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Aktarmali dosyalarda en buyuk hata, sadece ilk ucusa bakmaktir. Oysa tek rezervasyon, yeni rota ve son hedefe varis saati birlikte degerlendirilmelidir."
            ctaHref={CLAIM_URL}
            ctaLabel="Baglanti dosyami kontrol et"
            placement="tr_missed_connection_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Butun segmentlerin tek rezervasyon icinde olmasi.</li>
                <li>Nihai varista belirgin zaman kaybi olusmasi.</li>
                <li>Yeni rota ve boarding pass bilgilerinin saklanmasi.</li>
                <li>Gecikmenin tum yolculuk zinciri uzerinden okunabilmesi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece ilk ucusun dakikalarina bakmak.</li>
                <li>Son hedef yerine ara havalimani sonucuna odaklanmak.</li>
                <li>Tek rezervasyon farkini gozden kacirmak.</li>
                <li>Yeni rota belgelerini saklamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Kacirilan baglantida asil soru, ilk ucus degil butun yolculuktur
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Cogu yolcu ilk biniş kapisinda yasanan gecikmeye odaklanir. Oysa aktarmali dosyalarda claimin agirligi,
                bir segmentteki problemden cok butun seyahatin nasil etkilendiginde ortaya cikar. Ilk gecikme kucuk
                gorunebilir, ama baglanti kacirildigi anda toplam kayip ciddi sekilde buyuyebilir.
              </p>
              <p>
                Bu nedenle sadece ilk ucusun kac dakika gec kaldigini degil, son hedefe ne zaman vardiginizi esas
                almak gerekir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Tek rezervasyon, missed connection dosyalarinda oyunu degistirebilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Aktarmali seyahatte en kritik ayrimlardan biri, tum segmentlerin ayni rezervasyon mantigi icinde olup
                olmadigidir. Cunku yolculugun zincir olarak okunup okunamayacagi, dosyanin gucunu ciddi sekilde
                etkiler.
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
                      placement: "tr_missed_connection_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  dosyanin baglanti ve nihai varis analizi
                </a>{" "}
                birlikte yapildiginda, yuzeysel yorumlardan cok daha isabetli bir sonuc elde edilir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Yeni rota ve gercek varis saati, dosyanin bel kemiğidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Baglanti kacirildiginda asıl tablo, havayolunun sizi nasil yeniden yonlendirdigiyle netlesir. Yeni
                rota ayni gun icinde cozulmus olabilir veya ciddi saat kaybi yaratmis olabilir. Bu fark, claimin
                pratik agirligini buyuk olcude degistirir.
              </p>
              <p>
                Bu yuzden yeni bilet, e-posta bildirimleri, mobil uygulama ekranlari ve gercek nihai varis saati
                saklanmalidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, missed connection dosyasini sadece ilk ucusun gecikmesi olarak okumaktir. Oysa gercek
              agirlik, tek rezervasyon mantigi ve son hedefe ulasim sonucu ile belirlenir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Baglantiyi kacirmak otomatik hak dogurur mu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Tek rezervasyon, rota yapisi ve son hedefe varis zamani birlikte degerlendirilmelidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En onemli veri nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En onemli veri, son hedefe gercekte hangi saatte vardiginizdir. Cunku claimin agirligi orada
                  netlesir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Boarding pass, PNR, yeni rota bilgisi, mesajlar ve gercek varis saati birlikte saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
