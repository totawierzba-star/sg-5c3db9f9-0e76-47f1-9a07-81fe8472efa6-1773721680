import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import Link from "next/link";

export default function NorwegianStreikForsinkelseErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian streik og flyforsinkelse – kan du fortsatt kreve erstatning?"
        description="Norwegian hevder streik er ekstraordinært? Lær forskjellen mellom Norwegian-streik (du får erstatning) og flygelederstreik (ekstraordinært)."
        url="https://problemlot.com/no/blog/norwegian-streik-forsinkelse-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian streik og flyforsinkelse – kan du fortsatt kreve erstatning?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Raskt svar: Avhenger av HVEM som streiker
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Hvis Norwegian-flyet ditt var forsinket på grunn av streik, avhenger erstatningen av <strong>hvem som streiker:</strong>
            </p>
            <ul className="ml-4 space-y-1">
              <li>✅ <strong>Norwegian-ansatte streiker:</strong> Norwegian MÅ betale erstatning (ikke ekstraordinært)</li>
              <li>❌ <strong>Flygeleder-/ATC-streik:</strong> Ekstraordinært – Norwegian slipper å betale</li>
              <li>✅ <strong>Bakkemannskaps-streik (Norwegian):</strong> Norwegian MÅ betale</li>
              <li>❌ <strong>Nasjonal flyplassstreik:</strong> Ekstraordinært – ingen erstatning</li>
            </ul>
            <p className="text-sm border-t border-yellow-200 dark:border-yellow-800 pt-3 mt-3">
              💡 <strong>Viktig:</strong> Norwegian prøver ofte å klassifisere alle streiker som "ekstraordinære" – dette er ulovlig ifølge EU-domstolen.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Users className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian hevder streik var ekstraordinær?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ClaimWinger har juridisk ekspertise til å avgjøre om Norwegian-streik gir deg rett til erstatning. Sjekk gratis på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8 py-6">
              Sjekk min streik-forsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor er Norwegian-streik IKKE ekstraordinær?</h2>
          <p>
            <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>) definerer <strong>"ekstraordinære omstendigheter"</strong> som hendelser utenfor flyselskapets kontroll. Norwegian prøver ofte å klassifisere alle streiker som ekstraordinære – men dette er <strong>ulovlig</strong> ifølge EU-domstolen.
          </p>
          <p>
            I saken <strong>C-195/17 Krüsemann (2018)</strong> avgjorde EU-domstolen:
          </p>
          <ul>
            <li>Streik blant flyselskapets <strong>egne ansatte</strong> (piloter, kabinpersonale, bakkepersonell) er <strong>IKKE ekstraordinær</strong></li>
            <li>Norwegian har ansvar for å forhandle med sine ansatte og unngå arbeidskonflikter</li>
            <li>Kun hvis streiken er hos en <strong>tredjepart</strong> (flygeleder, nasjonale flyplassarbeidere) kan det regnes som ekstraordinært</li>
          </ul>
          <p>
            <strong>Konklusjon:</strong> Norwegian-streik = Norwegian må betale. Flygelederstreik = ekstraordinært.
          </p>
          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <h2>Oversikt: Hvilke streiker gir erstatning?</h2>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="border-2 border-green-300 bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                ✅ Norwegian MÅ betale (IKKE ekstraordinært)
              </h4>
              <ul className="text-sm space-y-1">
                <li>✓ Norwegian-piloter</li>
                <li>✓ Norwegian kabinpersonale</li>
                <li>✓ Norwegian bakkepersonell</li>
                <li>✓ Norwegian teknisk personell</li>
                <li>✓ Norwegian sikkerhetsarbeidere</li>
              </ul>
            </div>

            <div className="border-2 border-red-300 bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                ❌ Ekstraordinært (lovlig å nekte)
              </h4>
              <ul className="text-sm space-y-1">
                <li>✓ Flygeleder (ATC)</li>
                <li>✓ Nasjonal flyplassstreik</li>
                <li>✓ Politisk generalstreik</li>
                <li>✓ Avinor-ansatte (flyplassdrift)</li>
              </ul>
            </div>
          </div>

          <h2>Hvordan beviser du at det var Norwegian-streik?</h2>
          <p>
            Hvis Norwegian hevder streiken var "ekstraordinær", må de bevise følgende:
          </p>
          <ol>
            <li>At streiken var hos en <strong>tredjepart</strong> (ikke deres egne ansatte)</li>
            <li>At de tok alle rimelige forholdsregler for å unngå forsinkelsen (f.eks. hadde reservefly klart)</li>
          </ol>
          <p>
            <strong>Du kan motbevise dette ved å:</strong>
          </p>
          <ul>
            <li>Sjekke <strong>medieoppslag</strong> om streiken (NTB, VG, Aftenposten, E24)</li>
            <li>Finne <strong>offisielle uttalelser</strong> fra Norwegian eller fagforeningene (Parat, NTL)</li>
            <li>Sjekke om <strong>andre flyselskap</strong> fløy samme rute samtidig (hvis ja, var ikke streiken nasjonal)</li>
            <li>Be ClaimWinger om juridisk vurdering – de har tilgang til streikdatabaser</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Hva hvis Norwegian ikke spesifiserer hvem som streiket?
            </h3>
            <p className="text-sm mb-0">
              Hvis Norwegian bare skriver "streik var ekstraordinær" uten å spesifisere hvem som streiket, har de <strong>ikke oppfylt bevisbyrden</strong>. I slike tilfeller har du rett til erstatning. ClaimWinger kan fremtvinge denne informasjonen gjennom formell klage eller rettsak.
            </p>
          </div>

          <h2>Hvor mye erstatning får du?</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Distanse</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Forsinkelse ved ankomst</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Opp til 1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">250 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">400 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">4+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Hvordan krever du erstatning for Norwegian-streik?</h2>
          <ol>
            <li>Samle bevis: boardingkort, bookingbekreftelse, medieoppslag om streiken</li>
            <li>Send krav til <strong>Norwegian.com → Kundeservice</strong></li>
            <li>Hvis Norwegian avviser med "ekstraordinær streik", krev spesifisering av hvem som streiket</li>
            <li>Ved fortsatt avslag: Send klage til <strong>Forbrukerrådet</strong> (Transportklagenemnda) eller bruk ClaimWinger</li>
          </ol>
          <p>
            Les mer: <Link href="/no/blog/norwegian-nektet-erstatning-hva-gjore" className="text-blue-600 hover:underline">Norwegian nektet erstatning – hva gjør du videre?</Link>
          </p>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian-piloter streiket?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Norwegian MÅ betale.</strong> Pilotstreik er ikke ekstraordinær ifølge EU-domstolen (C-195/17 Krüsemann). Norwegian har ansvar for å forhandle med sine ansatte.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis flygeleder streiket?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Flygelederstreik (ATC) er <strong>ekstraordinær</strong> fordi det er en tredjepart utenfor Norwegians kontroll. Da slipper Norwegian å betale erstatning.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian bare skriver "streik" uten å spesifisere?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Da har de <strong>ikke oppfylt bevisbyrden</strong>. Krev at Norwegian spesifiserer hvem som streiket. ClaimWinger kan fremtvinge denne informasjonen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis det var en nasjonal generalstreik?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Politisk generalstreik som stenger flyplasser kan være <strong>ekstraordinær</strong> – men sjekk om andre flyselskap fløy samtidig. Hvis ja, var streiken ikke så omfattende.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvor lang tid har jeg på meg til å kreve?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I Norge er foreldelsesfristen <strong>3 år</strong> fra flydatoen. Les mer: <Link href="/no/blog/krave-erstatning-fly-3-ar-siden" className="text-blue-600 hover:underline">Kan jeg kreve erstatning for et fly for 3 år siden?</Link>
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Norwegian-streik? Få erstatning nå</h3>
            <p className="text-xl mb-8 text-yellow-100">
              ClaimWinger har juridisk ekspertise til å bevise at Norwegian-streik IKKE er ekstraordinær. No Win, No Fee.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-yellow-700 hover:bg-gray-100 text-lg px-8 py-6">
                Krev erstatning nå
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-yellow-200 mt-4">
              ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling | ✓ Ingen risiko
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Hvis Norwegian-flyet ditt var forsinket på grunn av streik blant Norwegians egne ansatte (piloter, kabinpersonale, bakkepersonell), har du full rett til erstatning opptil 600 €. Kun hvis streiken var hos en tredjepart (flygeleder, nasjonale flyplassarbeidere) kan Norwegian lovlig nekte. Norwegian prøver ofte å klassifisere alle streiker som "ekstraordinære" – ClaimWinger har juridisk ekspertise til å bekjempe denne unnskyldningen.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
