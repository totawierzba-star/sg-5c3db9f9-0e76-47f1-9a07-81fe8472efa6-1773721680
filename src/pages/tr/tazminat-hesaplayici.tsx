import { Euro } from "lucide-react";

import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";

export default function TrCompensationCalculatorPage() {
  return (
    <LayoutTr>
      <SEO
        title="Tazminat hesaplayici: 250, 400 veya 600 EUR neye gore degisir?"
        description="EU261 kapsamindaki tipik 250, 400 ve 600 EUR bantlari hangi rota ve durumlarda gundeme gelir? Turk yolcular icin kisa hesaplayici ozeti."
        url="https://problemlot.com/tr/tazminat-hesaplayici"
      />

      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
        <section className="px-4 pb-16 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
              <Euro className="h-4 w-4" />
              Tazminat Hesaplayici
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              250, 400 veya 600 EUR neye gore degisir?
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              Bu bantlar sadece genel bir baslangic noktasi verir. Gercek uygunluk; rota, tasiyici, varis gecikmesi ve
              dosyanin yapisina gore belirlenir.
            </p>

            <ClaimWingerTrSection
              className="mt-8 text-left"
              badge="Turkce uygunluk kontrolu"
              title="Tabloyu gordunuz, simdi kendi dosyanizi kontrol edin"
              description="Bantlari bilmek faydali, ama esas soru sizin rotanizin ve havayolunuzun gercekte EU261 kapsaminda guclu olup olmadigidir."
              ctaHref="https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=calculator_cta&utm_campaign=compensation_bands"
              ctaLabel="Kendi dosyami kontrol et"
              placement="tr_calculator_hero"
            />
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
                Tipik tazminat seviyeleri
              </h2>

              <div className="space-y-6">
                <div className="rounded-lg bg-red-50 p-6 dark:bg-red-900/20">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">250 EUR</h3>
                      <p className="text-gray-600 dark:text-gray-300">Kisa mesafe senaryolari</p>
                    </div>
                    <Euro className="h-12 w-12 text-red-600 dark:text-red-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Genellikle daha kisa rotalarda ortaya cikan tazminat seviyesidir.
                  </p>
                </div>

                <div className="rounded-lg bg-red-50 p-6 dark:bg-red-900/20">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">400 EUR</h3>
                      <p className="text-gray-600 dark:text-gray-300">Orta mesafe senaryolari</p>
                    </div>
                    <Euro className="h-12 w-12 text-red-600 dark:text-red-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Orta mesafe ve Avrupa baglantili dosyalarda sik gorulen orta seviye banttir.
                  </p>
                </div>

                <div className="rounded-lg bg-red-50 p-6 dark:bg-red-900/20">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">600 EUR</h3>
                      <p className="text-gray-600 dark:text-gray-300">Uzun mesafe senaryolari</p>
                    </div>
                    <Euro className="h-12 w-12 text-red-600 dark:text-red-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Daha uzun rotalarda ve guclu uygunluk durumlarinda gundeme gelen en yuksek tipik banttir.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Onemli not</h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Tutar bilet fiyatina gore degil, rota mantigina gore degerlenir.</li>
                  <li>• Varis gecikmesi bircok dosyada temel faktordur.</li>
                  <li>• Her ucus sadece sureye degil, kapsama ve kosullara gore incelenmelidir.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutTr>
  );
}
