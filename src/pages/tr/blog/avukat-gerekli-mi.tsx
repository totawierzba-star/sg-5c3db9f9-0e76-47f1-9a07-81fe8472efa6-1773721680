import Link from "next/link";
import {
  CheckCircle2,
  Gavel,
  Scale,
  ShieldAlert,
  Sparkles,
  XCircle,
} from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const SLUG = "avukat-gerekli-mi";
const CLAIM_URL =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=article&utm_campaign=tr-lawyer-needed&utm_content=cta_high";
const CLAIM_URL_TEXT =
  "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=context_link&utm_campaign=tr-lawyer-needed&utm_content=text_link";

export default function TrLawyerNeededArticle() {
  return (
    <LayoutTr>
      <SEO
        title="Ucus tazminati icin avukat gerekli mi?"
        description="Ucus tazminati icin avukat gerekli mi? Turk yolcular icin ne zaman gereksiz, ne zaman faydali olabilecegini anlatan net rehber."
        url={`https://problemlot.com/tr/blog/${SLUG}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ucus tazminati icin avukat gerekli mi?",
            description:
              "Ucus tazminati icin avukat gerekli mi? Turk yolcular icin ne zaman gereksiz, ne zaman faydali olabilecegini anlatan net rehber.",
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
                name: "Her claim icin avukat gerekir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayir. Bircok dosyada avukat zorunlu degildir. Asil onemli sey, dosyanin gucu, belge duzeni ve hangi asamada olundugudur.",
                },
              },
              {
                "@type": "Question",
                name: "Ne zaman avukat dusunmek daha mantikli olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dosya karmasiklasmis, red gerekceleri yogunlasmis veya daha sert bir asamaya gecilmis durumlarda profesyonel destek daha anlamli hale gelebilir.",
                },
              },
              {
                "@type": "Question",
                name: "En buyuk hata nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En buyuk hata, ya cok erken panikle avukat aramak ya da dosya belirgin sekilde karmasiklasmisken hala hic destek dusunmemektir.",
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
            <span className="text-slate-900 dark:text-white">Avukat gerekli mi?</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              <Sparkles className="h-4 w-4" />
              Prosedur Rehberi
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ucus tazminati icin avukat gerekli mi?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Bu soru genelde kullanici iki durumda sorar: ya daha ilk adimda korktugu icin, ya da dosya uzadigi icin.
              Dogru cevap ise tek kelimelik degildir. <strong>Her claim icin avukat gerekmez</strong>, ama bazi
              dosyalarda profesyonel destek daha mantikli hale gelebilir.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Guncellendi: 2026-04-10</span>
              <span>•</span>
              <span>Okuma suresi: 8 dk</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kisa cevap</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Hayir, bircok ucus tazminati dosyasi icin avukat zorunlu degildir.</strong> Ama dosya karmasik,
              uzun veya belirgin sekilde cekismeli hale geldiyse, profesyonel destek daha anlamli olabilir.
            </p>
          </section>

          <ClaimWingerTrSection
            className="mb-10"
            badge="ClaimWinger dosya gucu kontrolu"
            title="Dosyanizin avukatlik seviyesinde karmasik olup olmadigini simdi kontrol edin"
            description="Bazen avukat gereksiz yere erken dusunulur, bazen de dosya belirgin sekilde zorlasmisken destek gecikir. ClaimWinger ile ilk gucu ve sonraki mantikli adimi hizla gorun."
            ctaHref={CLAIM_URL}
            ctaLabel="Dosya gucumu kontrol et"
            placement="tr_lawyer_needed_article_embed_high"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Avukat olmadan da guclu olabilecek dosyalar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Belgeleri duzgun olan sade dosyalar.</li>
                <li>Nihai varis etkisi net gorulen vakalar.</li>
                <li>Acik bir rota ve tasiyici yapisi olan dosyalar.</li>
                <li>Yuzeysel veya kalip red cevaplari alan dosyalar.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Destegi daha mantikli kilan durumlar
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Uzayan ve karmasiklasan yazisma zinciri.</li>
                <li>Red gerekcelerinin giderek sertlesmesi.</li>
                <li>Baglantili ve teknik olarak daha zor rota yapilari.</li>
                <li>Bir ust seviyeye tasinacak claimler.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Gavel className="h-7 w-7 text-red-600 dark:text-red-400" />
              1. Bircok yolcu dosyayi avukatsiz da baslatabilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kullanici bazen daha ilk gunden “avukat gerekir mi?” diye korkar. Oysa pratikte bircok dosyada once
                olay zincirini kurmak, belgeyi toplamak ve talebin temel mantigini netlestirmek daha onemlidir. Her
                claim otomatik olarak hukuk ofisine gitmek zorunda degildir.
              </p>
              <p>
                Asil soru sununla ilgilidir: dosya su anda ne kadar karmasik ve ne kadar cekismeli?
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Erken panik de gecikmis destek de zarar verebilir
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                En yaygin iki hata vardir. Birincisi, daha ilk adimda gereksiz yere en sert yola gitmektir. Ikincisi
                ise dosya belirgin sekilde karmasiklasmisken hala ayni zayif mesajlari tekrar etmektir. Dogru zamanlama,
                hem sureci hem de beklentiyi daha saglikli hale getirir.
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
                      placement: "tr_lawyer_needed_article_text_link",
                      destination: CLAIM_URL_TEXT,
                      page_slug: SLUG,
                    })
                  }
                  className="font-semibold text-red-600 hover:underline dark:text-red-400"
                >
                  dosyanin mevcut agirligini once duzgunce okumak
                </a>{" "}
                avukat sorusuna daha gercekci cevap verir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Destek gerekip gerekmedigini dosyanin seviyesi belirler
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bazi dosyalarda mesele sadece iyi bir timeline ve duzgun belge setidir. Bazilarinda ise red gerekceleri,
                baglantili rota yapisi veya uzun sureli yazisma zinciri sureci daha ciddi hale getirir. Bu ikinci
                grupta profesyonel destek dusunmek daha mantikli olabilir.
              </p>
              <p>
                Yani avukat sorusunun tek cevabi yoktur; cevap, dosyanin nerede durduguna baglidir.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">En buyuk hata</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              En buyuk hata, ya cok erken panikle avukat aramak ya da dosya belirgin sekilde karmasiklasmisken hala
              hic destek dusunmemektir. Dogru karar, dosyanin olgunluguna gore verilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Sik sorulan sorular</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Her claim icin avukat gerekir mi?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Hayir. Bircok dosyada avukat zorunlu degildir. Dosyanin gucu ve asamasi daha belirleyicidir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ne zaman avukat dusunmek daha mantikli olur?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Dosya karmasiklasmis, red gerekceleri sertlesmis veya surec bir ust seviyeye tasiniyorsa profesyonel
                  destek daha mantikli hale gelebilir.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">En buyuk hata nedir?</h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Cok erken panikle avukat aramak ya da dosya ciddi sekilde zorlasmisken hala hic destek dusunmemektir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutTr>
  );
}
