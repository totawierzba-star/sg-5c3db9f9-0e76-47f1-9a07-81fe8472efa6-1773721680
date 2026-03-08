import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Users, Euro, AlertCircle, CheckCircle, ArrowRight, FileText } from "lucide-react";

export default function WizzAirGroupBooking() {
  return (
    <LayoutCs>
      <SEO 
        title="Wizz Air group booking — jak uplatnit hromadný nárok na kompenzaci?"
        description="Letěli jste skupinou s Wizz Air a došlo ke zpoždění? Zjistěte, jak správně uplatnit hromadný nárok na kompenzaci až 600 € na osobu."
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Mohu podat hromadnou reklamaci za skupinovou rezervaci Wizz Air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ano, můžete. Každý člen skupiny má individuální nárok na kompenzaci €250-600. Můžete buď podat jednu společnou reklamaci (s plnými mocemi od všech), nebo každý může podat samostatně."
                }
              },
              {
                "@type": "Question",
                "name": "Kolik dostane každý člen skupiny za zpožděný let Wizz Air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Každý člen skupiny dostane stejnou částku podle vzdálenosti letu: €250 (do 1500km), €400 (1500-3500km), nebo €600 (nad 3500km) při zpoždění ≥3 hodiny."
                }
              },
              {
                "@type": "Question",
                "name": "Potřebuji plnou moc od ostatních členů skupiny?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ano, pokud chcete podat jednu společnou reklamaci za celou skupinu. Každý člen musí podepsat plnou moc, kterou přiložíte k reklamaci. Alternativně může každý podat reklamaci samostatně."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/cs/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-2">
            ← Zpět na blog
          </Link>
        </div>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-10 h-10 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              Wizz Air Group Booking
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wizz Air group booking — jak uplatnit hromadný nárok na kompenzaci?
          </h1>
          <div className="flex items-center text-gray-600 text-sm gap-4">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span>•</span>
            <span>10 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Letěli jste skupinou s Wizz Air a došlo ke zpoždění?</strong> Každý člen skupiny má <strong>individuální nárok na kompenzaci</strong> až 600 € podle EU 261/2004. Skupinová rezervace (group booking) neznamená jednu kompenzaci — každý cestující má samostatné právo. V tomto průvodci se dozvíte, jak správně podat hromadnou reklamaci, jaké dokumenty potřebujete a jak maximalizovat šance na úspěch.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💡 Skupinová rezervace Wizz Air s komplikacemi?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vyřídí hromadný nárok za celou skupinu — zpracujeme plné moci, podáme společnou reklamaci a vymůžeme kompenzaci pro všechny. Platíte jen při úspěchu (obvykle 25 % provize z celkové částky).
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zpozdeny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Podat hromadnou reklamaci
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            Kompenzace při skupinové rezervaci — základní pravidla
          </h2>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🔑 Klíčové body:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Každý člen skupiny = samostatný nárok</strong>: Group booking neznamená jednu kompenzaci rozdělenou na všechny. Každý cestující má nárok na plnou částku €250-600.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Stejná částka pro všechny</strong>: Pokud let měl zpoždění 3h+ na stejné trase, všichni dostávají stejnou částku (např. 10 lidí × €250 = €2,500 celkem).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>2 možnosti podání</strong>: (1) Jedna společná reklamace za celou skupinu (s plnými mocemi), nebo (2) každý podá samostatně.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Děti mají stejný nárok</strong>: I kojenci (infants 0-2 roky) a děti mají plný nárok na kompenzaci, pokud měli palubní vstupenku.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Příklad výpočtu — skupinová rezervace 15 osob
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-4">Scénář:</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Let Wizz Air W6 2481 z Prahy (PRG) do Londýna Luton (LTN)</li>
              <li>• Skupinová rezervace: 15 osob (12 dospělých + 3 děti nad 2 roky)</li>
              <li>• Plánovaný přílet: 18:30, skutečný přílet: <strong>22:15</strong> → zpoždění <strong>3h 45min</strong></li>
              <li>• Vzdálenost PRG-LTN: ~1,050 km → kategorie "do 1,500 km"</li>
            </ul>
            
            <div className="bg-white p-4 rounded border-l-4 border-green-600">
              <p className="text-lg font-bold text-gray-900 mb-2">Výpočet kompenzace:</p>
              <p className="text-gray-700 mb-1">15 osob × €250 = <span className="text-2xl font-bold text-green-600">€3,750</span></p>
              <p className="text-sm text-gray-600 mt-2 italic">
                *Všichni členové skupiny mají nárok na plnou kompenzaci, včetně dětí.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak podat hromadnou reklamaci — 2 možnosti
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            ✅ Možnost 1: Společná reklamace (doporučeno pro skupiny 5+ osob)
          </h3>

          <p className="mb-4">
            Jedna osoba podá reklamaci jménem celé skupiny s přiloženými plnými mocemi od ostatních.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-bold text-gray-900 mb-4">📋 Postup:</h4>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <strong>Určete zástupce skupiny</strong>
                  <p className="text-gray-700 mt-1">Jeden člen skupiny bude komunikovat s Wizz Air jménem všech. Nejlépe osoba, která provedla rezervaci.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <strong>Připravte plné moci</strong>
                  <p className="text-gray-700 mt-1">Každý člen skupiny (kromě zástupce) musí podepsat jednoduchou plnou moc — viz vzor níže.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <strong>Shromážděte dokumenty</strong>
                  <p className="text-gray-700 mt-1">Boarding passes všech cestujících, booking confirmation (group PNR), důkaz o zpoždění.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                <div>
                  <strong>Podejte jednu společnou reklamaci</strong>
                  <p className="text-gray-700 mt-1">V e-mailu uveďte seznam všech cestujících s jejich údaji (jméno, booking reference, platební údaje).</p>
                </div>
              </li>
            </ol>
          </div>

          <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Vzor plné moci (Power of Attorney)</h4>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg my-6 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap font-mono">
{`PLNÁ MOC / POWER OF ATTORNEY

Já, níže podepsaný/á:
Jméno a příjmení: ______________________________
Datum narození: ______________________________
Číslo pasu/OP: ______________________________
Adresa: ______________________________

tímto zmocňuji:
Jméno zástupce: ______________________________
Datum narození: ______________________________
Adresa: ______________________________

aby mým jménem uplatnil/a nárok na kompenzaci podle nařízení (ES) č. 261/2004
za zpožděný/zrušený let:

Číslo letu: W6 _____
Datum letu: ______________________________
Trasa: ______ → ______
Booking reference (PNR): ______________________________

Zástupce je oprávněn:
• Komunikovat s Wizz Air jménem mne
• Podávat reklamace a odvolání
• Přijímat korespondenci
• Přijmout platbu kompenzace na můj účet

Platební údaje pro výplatu kompenzace:
Jméno účtu: ______________________________
IBAN: ______________________________

Datum: ______________________________
Podpis: ______________________________`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            ✅ Možnost 2: Samostatné reklamace (pro menší skupiny {"<"}5 osob)
          </h3>

          <p>
            Každý člen skupiny podá vlastní reklamaci samostatně. Jednodušší administrativně, ale vyžaduje koordinaci.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  🚀 Chcete vymáhat kompenzaci za celou skupinu bez starostí?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vyřídí vše za vás — zpracujeme plné moci, podáme hromadnou reklamaci a v případě odmítnutí eskalujeme k ÚCL/soudu. Specializujeme se na skupinové nároky Wizz Air a máme zkušenost s tisíci případů. Platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zruseny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Podat hromadnou reklamaci bez starostí
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté dotazy (FAQ) — skupinové rezervace Wizz Air
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Mohu podat hromadnou reklamaci za celou skupinu bez plných mocí?
              </h3>
              <p className="text-gray-700">
                NE. Pokud chcete podat jednu společnou reklamaci, Wizz Air vyžaduje plné moci od všech členů skupiny (kromě zástupce). Bez plných mocí musí každý podat samostatně.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Děti a kojenci mají také nárok na kompenzaci?
              </h3>
              <p className="text-gray-700">
                ANO. Každý cestující s palubní vstupenkou má nárok na plnou kompenzaci, včetně dětí a kojenců. Pokud měl kojenec (0-2 roky) vlastní sedadlo a boarding pass, má nárok. Pokud letěl na klíně bez boarding passu, nárok obvykle NEMÁ.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kolik času zabere vyřízení hromadného nároku?
              </h3>
              <p className="text-gray-700">
                Wizz Air má povinnost odpovědět do 30 dnů, ale v praxi to trvá 60-90 dnů (nebo déle při odmítnutí). <Link href="https://claimwinger.com/cs" className="text-blue-600 hover:underline font-semibold">ClaimWinger vyřídí hromadný nárok za 4-8 týdnů</Link> díky zkušenostem s Wizz Air procesem.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Můžeme kompenzaci rozdělit jinak než rovným dílem?
              </h3>
              <p className="text-gray-700">
                Každý cestující má individuální nárok na plnou částku podle vzdálenosti letu. Nemůžete "přesunout" nárok jednoho člena na druhého. Ale po obdržení peněz si je můžete interně rozdělit dle dohody.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr
          </h2>

          <p>
            Skupinové rezervace Wizz Air mají stejná práva jako individuální letenky — každý člen skupiny má nárok na plnou kompenzaci při zpoždění/zrušení.
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4 text-gray-700">
            <li><strong>Každý člen = plný nárok</strong> (€250-600 podle vzdálenosti)</li>
            <li>Můžete podat společnou reklamaci (s plnými mocemi) nebo samostatně</li>
            <li>Děti a kojenci s boarding passem mají také nárok</li>
            <li>Wizz Air často odmítá → <Link href="https://claimwinger.com/cs" className="text-blue-600 hover:underline font-semibold">ClaimWinger vyřídí eskalaci za vás</Link></li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💪 Připraveni vymáhat kompenzaci za celou skupinu?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vyřídí celý proces za celou skupinu — od přípravy plných mocí přes reklamaci až po soudní vymáhání (pokud potřeba). Specializujeme se na Wizz Air a máme zkušenost s hromadnými nároky. Bez rizika, platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Začít vymáhat kompenzaci pro skupinu
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </LayoutCs>
  );
}