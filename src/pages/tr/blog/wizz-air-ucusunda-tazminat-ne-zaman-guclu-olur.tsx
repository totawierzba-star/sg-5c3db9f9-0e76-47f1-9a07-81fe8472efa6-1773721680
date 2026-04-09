import Link from "next/link";
import { CheckCircle2, Plane, ShieldAlert, Sparkles, Ticket, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "wizz-air-ucusunda-tazminat-ne-zaman-guclu-olur";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-wizz-air-compensation&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-wizz-air-compensation&utm_content=text_link";

export default function TrWizzAirCompensationArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Wizz Air ucusunda tazminat ne zaman guclu olur?"
        description="Wizz Air ucuslarinda tazminat ne zaman guclu olur? Turk yolcular icin low-cost yanilgisi, nihai varis ve EU261 mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Wizz Air ucusunda tazminat ne zaman guclu olur?",
            description:
              "Wizz Air ucuslarinda tazminat ne zaman guclu olur? Turk yolcular icin low-cost yanilgisi, nihai varis ve EU261 mantigini anlatan net rehber.",
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
                name: "Wizz Air low-cost oldugu icin tazminat sansi dusuk mudur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Low-cost model tek basina dosyayi zayif yapmaz. Asil belirleyici olan sey, rota yapisi, kalkis noktasi, nihai varis ve olayin nasil belgelenmis oldugudur.",
                },
              },
              {
                "@type": "Question",
                name: "Wizz Air dosyalarinda en onemli veri nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En onemli veri, yolcunun son hedefe gercekte ne zaman vardigi ve havayolunun sundugu aciklamanin ne kadar somut oldugudur.",
                },
              },
              {
                "@type": "Question",
                name: "Wizz Air mesajlari ve uygulama ekranlari onemli midir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Ozellikle degisen saatler, yeni rota, gecikme nedenleri ve kullaniciya verilen tekliflerin ekranda nasil gorundugu belgelenmelidir.",
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
            <span className="text-slate-900 dark:text-white">Wizz Air ve tazminat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Havayolu Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Wizz Air ucusunda tazminat ne zaman guclu olur?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Wizz Air, Turk yolcular ve Avrupa diasporasi icin en yogun aranan havayollarindan biridir. Ancak bir cok
              kullanici low-cost etiketini dosyanin sonucu zanneder. Oysa gercek analiz,
              <strong> kalkis noktasi</strong>, <strong>nihai varis</strong> ve <strong>belge gucu</strong> birlikte
              okundugunda ortaya cikar.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Wizz Air low-cost oldugu icin dosya ne otomatik guclu ne de otomatik zayif sayilir.</strong>
              Asil belirleyici olan sey, son hedefe gercek varis zamani, rota yapisi ve havayolunun neyi nasil
              acikladigidir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger Wizz Air analizi"
            title="Wizz Air dosyanizin ne kadar guclu oldugunu hizli kontrol edin"
            description="Wizz Air dosyalarinda en buyuk hata, markaya bakip sonucu bastan tahmin etmektir. Oysa iyi analiz, rota, bildirim ve nihai varis uzerinden yapilir."
            ctaHref={CLAIM_URL}
            ctaLabel="Wizz Air dosyami kontrol et"
            placement="tr_wizz_air_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Nihai varista belirgin zaman kaybi olusmasi.</li>
                <li>Wizz Air uygulama ve e-posta kayitlarinin saklanmasi.</li>
                <li>Yeni rota ve saat degisimlerinin belgelenmesi.</li>
                <li>Kalkis noktasi ve rota mantiginin net kurulmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Low-cost oldugu icin dosyayi bastan zayif sanmak.</li>
                <li>Sadece ilk gecikmeye odaklanmak.</li>
                <li>Uygulama ekranlarini ve mesajlari saklamamak.</li>
                <li>Son hedefe gercek varis saatini kaydetmemek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Wizz Air dosyalarinda en buyuk hata, markaya bakip sonucu bastan tahmin etmektir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Wizz Air aramalarinda kullanicilar genelde iki uca gider: ya dosyayi otomatik zayif sayar ya da
                markayi gorunce direkt para gelecegini dusunur. Oysa EU261 mantigi marka refleksiyle degil, olayin
                sonucu ve yolculugun tam zinciriyle okunur.
              </p>
              <p>
                Bu yuzden ilk soru “Wizz Air mi?” degil, “dosya nasil bir yapida ve son hedef ne oldu?” sorusudur.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Wizz Air uygulama akisi ve bildirimler belge tarafinda altin degerindedir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Wizz Air dosyalarinda kullaniciya giden uygulama ekranlari, e-postalar ve anlik degisiklikler pratikte
                cok degerlidir. Saat degisimi, iptal, yeni rota ya da voucher teklifleri bu kayitlar uzerinden cok
                daha net okunabilir.
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
                      placement: "tr_wizz_air_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  dosyanin bildirim ve nihai varis analizini
                </a>{" "}
                birlikte yapmak, daha gercekci sonuc verir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Ticket className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Asil agirlik, son hedefe ne oldugunda ortaya cikar
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Wizz Air dosyalarinda da, diger havayollarinda oldugu gibi, asıl soru son hedefe ne zaman vardiginizdir.
                Bazen ilk gecikme kucuk gorunur ama sonraki zincir buyuk zaman kaybina donusur. Bazen de iptal veya
                yeniden rota teklifinin gercek etkisi ancak final sonucta netlesir.
              </p>
              <p>
                Bu nedenle boarding pass, uygulama ekranlari, e-posta, yeni bilet ve gercek varis saati birlikte
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
              En buyuk yanilgi, Wizz Air dosyasini sadece low-cost etiketiyle okumaktir. Oysa gercek sonuc, markadan
              cok rota, bildirim ve nihai varis sonucunda gizlidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Wizz Air oldugu icin hak ihtimali dusuk mudur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Asil farki yaratan sey marka degil, dosyanin yapisi ve son hedefe etkisidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Wizz Air uygulama ekranlari onemli mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Evet. Saat degisimi, iptal, yeni rota ve kullaniciya yapilan teklifleri belgelemek acisindan cok
                  onemlidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  En kritik veri nedir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  En kritik veri, son hedefe gercekte ne zaman vardiginiz ve havayolunun neyi nasil acikladigidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
