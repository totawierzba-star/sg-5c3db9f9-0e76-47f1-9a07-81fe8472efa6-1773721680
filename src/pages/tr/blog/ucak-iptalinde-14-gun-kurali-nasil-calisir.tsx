import Link from "next/link";
import { AlertTriangle, CalendarClock, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "ucak-iptalinde-14-gun-kurali-nasil-calisir";
const CLAIM_URL =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-14-day-cancellation-rule&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-14-day-cancellation-rule&utm_content=text_link";

export default function TrCancellation14DayRuleArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Ucak iptalinde 14 gun kurali nasil calisir?"
        description="Ucak iptalinde 14 gun kurali nasil calisir? Turk yolcular icin bildirim zamani, yeni rota kalitesi ve EU261 mantigini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ucak iptalinde 14 gun kurali nasil calisir?",
            description:
              "Ucak iptalinde 14 gun kurali nasil calisir? Turk yolcular icin bildirim zamani, yeni rota kalitesi ve EU261 mantigini anlatan net rehber.",
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
                name: "14 gun icinde yapilan iptal otomatik olarak tazminat anlamina gelir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. 14 gun kurali cok onemlidir ama tek basina yeterli degildir. Bildirim zamani ile birlikte sunulan yeni rota ve yolcunun toplam zaman kaybi birlikte okunmalidir.",
                },
              },
              {
                "@type": "Question",
                name: "14 gunun disinda bildirim gelirse dosya otomatik guclu mudur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Genellikle daha guclu bir sinyal olusturur, ancak yeni rota kalitesi ve nihai varis sonucu yine de kritik olmaya devam eder.",
                },
              },
              {
                "@type": "Question",
                name: "Iptal dosyasinda en cok hangi hata yapilir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En cok yapilan hata, sadece takvim gunune bakmak ve havayolunun sundugu yeni rota cozumunun kalitesini hic degerlendirmemektir.",
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
            <span className="text-slate-900 dark:text-white">14 gun kurali</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Iptal Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ucak iptalinde 14 gun kurali nasil calisir?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu, iptal edilen ucuslarda en cok aranan ve en cok yanlis anlasilan konulardan biridir. Cunku bircok
              yolcu 14 gun kuralini tek satirlik bir otomatik para formulu sanir. Oysa pratikte
              <strong> bildirim zamani</strong>, <strong>sunulan yeni rota</strong> ve <strong>nihai varis sonucu</strong>
              birlikte okunmadan dogru sonuca varilamaz.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-09</span>
              <span>•</span>
              <span>Okuma suresi: 9 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <CalendarClock className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>14 gun kurali cok guclu bir sinyaldir, ama tek basina yeterli degildir.</strong> Gercek analiz,
              iptalin ne zaman bildirildigiyle birlikte, havayolunun sundugu cozumun yolcuyu son hedefe nasil ve ne
              kadar gec goturdugune bakilarak yapilir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger iptal analizi"
            title="Iptal edilen ucusunuzda 14 gun kuralinin dosyanizi ne kadar guclendirdigini kontrol edin"
            description="Iptal dosyalarinda sadece tarih degil, yeni rota cozumunun kalitesi ve son hedefe etkisi de cok onemlidir. Bunlar birlikte okununca tablo netlesir."
            ctaHref={CLAIM_URL}
            ctaLabel="Iptal dosyami kontrol et"
            placement="tr_14_day_rule_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Dosyayi guclendiren seyler
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Iptalin son 14 gun icinde bildirilmesi.</li>
                <li>Sunulan yeni rotanin belirgin zaman kaybi yaratmasi.</li>
                <li>Nihai varis saatinin net sekilde belgelenmesi.</li>
                <li>Iptal mesajlari ve yeniden rezerve bilgileri saklanmasi.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                En sik yapilan hatalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sadece 14 sayisina bakmak.</li>
                <li>Yeni rota kalitesini hic degerlendirmemek.</li>
                <li>Nihai varis etkisini kaydetmemek.</li>
                <li>Iptal bildirimini ve saatini saklamamak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. 14 gun kurali neden bu kadar populer, ama neden tek basina yeterli degil?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Cunku kullanici hizli bir cevap ister: “14 gunden azsa para var mi?” Fakat gercek hayatta iptal
                dosyalari bu kadar duz bir mantikla calismaz. Bildirim zamani onemlidir, ama havayolunun size ne
                sundugu ve bunun yolculuk sonucunu ne kadar etkiledigi de ayni derecede kritiktir.
              </p>
              <p>
                Yani takvim guclu bir isaret verir, fakat dosyanin son gucu tek basina bundan ibaret degildir.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Iptal dosyasinda asil farki, yeni rota cozumunun kalitesi yaratir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bazen iptal son anda gelir ama havayolu nispeten iyi bir cozum sunar. Bazen de kullaniciya teoride
                alternatif verilir, fakat son hedefe ciddi gecikmeyle ulastirir. Iste dosyanin agirligi de tam burada
                belirginlesir.
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
                      placement: "tr_14_day_rule_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  bildirim zamani ve yeni rota analizini
                </a>{" "}
                birlikte yapmak, kullaniciya cok daha gercekci bir sonuc verir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
              3. Nihai varis ve bildirim saati birlikte saklanmalidir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Iptal dosyasinda sadece “ucusum iptal oldu” demek yeterli olmaz. En guclu dosyalar, iptal bildiriminin
                hangi saat ve hangi kanalda geldigiyle birlikte, yeni ucusun sizi son hedefe ne zaman ulastirdigini
                gosteren kayitlarla desteklenir.
              </p>
              <p>
                Yani iyi bir iptal claimi, tarih + saat + yeni rota + gercek varis dengesini birlikte ister.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk yanilgi</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk yanilgi, 14 gun kuralini tek basina otomatik sonuc veren bir formül sanmaktir. Oysa bildirim
              zamani kadar yeni rota kalitesi ve son hedefe etkisi de belirleyicidir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  14 gun icinde iptal varsa para kesin midir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Bu cok guclu bir sinyal olsa da, yeni rota ve nihai varis sonucu yine de birlikte
                  degerlendirilmelidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bildirim zamani neden onemlidir?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cunku iptalin ne kadar onceden haber verildigi, dosyanin hukuki agirligini de etkileyen temel
                  noktalardan biridir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hangi belgeler saklanmali?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Iptal mesaji, e-posta, SMS, yeni bilet bilgisi ve gercek nihai varis saati birlikte saklanmalidir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
