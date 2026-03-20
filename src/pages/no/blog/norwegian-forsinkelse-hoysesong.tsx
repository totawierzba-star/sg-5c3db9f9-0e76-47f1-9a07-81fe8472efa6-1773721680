import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, CheckCircle2, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";

export default function NorwegianForsinkelseHoysesong() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian forsinkelse i høysesong – statistikk og erstatningskrav"
        description="Hvorfor er Norwegian-flygninger oftere forsinket i høysesong? Lær om dine rettigheter og hvordan du krever opptil 600 € erstatning."
        url="https://problemlot.com/no/blog/norwegian-forsinkelse-hoysesong"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian forsinkelse i høysesong – statistikk og hvordan kreve erstatning
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Raskt svar: Høysesong = mer forsinkelser, samme rettigheter
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Norwegian-flygninger er <strong>statistisk oftere forsinket</strong> i sommersesongen (juni–august) og juleferien, men dine rettigheter under <strong>EU261</strong> gjelder uansett årstid. Hvis flyet er mer enn <strong>3 timer forsinket</strong> ved ankomst, har du rett til opptil <strong>600 € erstatning</strong> – selv om Norwegian påberoper seg "høy trafikk" som unnskyldning.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Calendar className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Var Norwegian-flyet ditt forsinket i sommer?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til opptil 600 € erstatning. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">
              Sjekk min sommerforsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor er Norwegian oftere forsinket i høysesong?</h2>
          <p>
            Statistikk fra <strong>Avinor</strong> og <strong>FlightRadar24</strong> viser at Norwegian har høyere forsinkelsesrater i:
          </p>
          <ul>
            <li><strong>Sommersesong (juni–august):</strong> 25-30% av avgangene forsinket mer enn 15 minutter</li>
            <li><strong>Juleferie (uke 51-52, uke 1-2):</strong> 20-25% forsinkelser</li>
            <li><strong>Påskeferie:</strong> 15-20% forsinkelser</li>
          </ul>

          <p><strong>Hovedårsaker til høysesongens forsinkelser:</strong></p>
          <ol>
            <li><strong>Overbelastede flyplasser:</strong> Lengre ventetider på rullebane, gate-forsinkelser</li>
            <li><strong>Kortere turnaround-tid:</strong> Norwegian kjører "tight schedule" for å maksimere flytningstall</li>
            <li><strong>Manglende reserver:</strong> I høysesong har Norwegian færre reserve-fly og besetning tilgjengelig</li>
            <li><strong>Akkumulerte forsinkelser:</strong> Første forsinkelse på dagen skaper kjedeeffekt</li>
          </ol>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Viktig: "Høy trafikk" er IKKE en ekstraordinær omstendighet
            </h3>
            <p className="text-sm mb-0">
              Norwegian prøver ofte å nekte erstatning ved å påberope seg "høy trafikk på flyplassen" eller "sesongmessige forsinkelser". Dette er <strong>ulovlig</strong> under EU261. Flyselskapet må planlegge for høysesong og ha tilstrekkelige reserver – manglende forberedelse er ikke en gyldig unnskyldning.
            </p>
          </div>

          <h2>Statistikk: Mest forsinkede Norwegian-ruter i høysesong</h2>
          <p>
            Basert på data fra 2024 (juni–august):
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Rute</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Forsinkelsesrate</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Gjennomsnittlig forsinkelse</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Oslo–Alicante</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">32%</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">2t 15min</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Oslo–Barcelona</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">28%</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1t 50min</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Oslo–London</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">26%</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1t 40min</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Oslo–New York</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">24%</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3t 10min</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Les mer om disse rutene:
          </p>
          <ul>
            <li><Link href="/no/blog/norwegian-oslo-alicante-erstatning" className="text-blue-600 hover:underline">Erstatning for Norwegian Oslo–Alicante</Link></li>
            <li><Link href="/no/blog/norwegian-oslo-barcelona-erstatning" className="text-blue-600 hover:underline">Erstatning for Norwegian Oslo–Barcelona</Link></li>
            <li><Link href="/no/blog/norwegian-oslo-london-erstatning" className="text-blue-600 hover:underline">Erstatning for Norwegian Oslo–London</Link></li>
            <li><Link href="/no/blog/norwegian-oslo-new-york-erstatning" className="text-blue-600 hover:underline">Erstatning for Norwegian Oslo–New York</Link></li>
          </ul>

          <h2>Hvor mye erstatning får du?</h2>
          <p>
            Erstatningen avhenger av <strong>flydistansen</strong> (ikke prisen på billetten):
          </p>

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
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvor-mye-erstatning" className="text-blue-600 hover:underline">Hvor mye erstatning kan du kreve fra Norwegian?</Link>
          </p>

          <h2>Hvordan krever du erstatning for høysesongsforsinkelser?</h2>
          <ol>
            <li>Samle bevis: Boardingkort, bookingbekreftelse, skjermbilde av forsinkelsestid</li>
            <li>Send krav til <strong>Norwegian.com → Kundeservice</strong></li>
            <li>Hvis Norwegian nekter (påberoper seg "høy trafikk"): Eskalere til <strong>Forbrukerrådet</strong> eller bruk ClaimWinger</li>
          </ol>

          <p>
            <strong>ClaimWinger fordel:</strong> De har tilgang til historiske trafikkdata som beviser at Norwegian <em>kunne</em> ha planlagt bedre – dette svekker Norwegians "høy trafikk"-unnskyldning juridisk.
          </p>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvordan-soke-erstatning-steg-for-steg" className="text-blue-600 hover:underline">Hvordan søker du om erstatning fra Norwegian steg for steg?</Link>
          </p>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg mindre erstatning fordi det var høysesong?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Nei!</strong> Erstatningen er den samme uansett årstid. Norwegian må betale 250–600 € avhengig av distanse hvis forsinkelsen var mer enn 3 timer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier "alle flyselskap var forsinket på flyplassen"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Dette er <strong>ikke</strong> en gyldig unnskyldning. Hvis andre flyselskap klarte å holde tidsplanen, må Norwegian betale. ClaimWinger har verktøy for å sjekke om konkurrerende flyselskap hadde forsinkelser samtidig.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg kreve erstatning for en forsinkelse fra sommeren 2023?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ja, foreldelsesfristen i Norge er <strong>3 år</strong> fra flydatoen. Les mer: <Link href="/no/blog/krave-erstatning-fly-3-ar-siden" className="text-blue-600 hover:underline">Kan jeg kreve erstatning for et fly for 3 år siden?</Link>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvor lang tid tar det å få pengene?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Direkte til Norwegian: 3-6 måneder (ofte avslag). Via ClaimWinger: <strong>4-8 uker</strong> gjennomsnittlig utbetaling. Les mer: <Link href="/no/blog/hvor-lang-tid-flyerstatning-utbetalt" className="text-blue-600 hover:underline">Hvor lang tid tar det å få flyerstatning utbetalt?</Link>
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Høysesongsforsinkelse? Krev pengene nå</h3>
            <p className="text-xl mb-8 text-orange-100">
              ClaimWinger har juridisk ekspertise til å bekjempe Norwegians "høy trafikk"-unnskyldning. No Win, No Fee.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100 text-lg px-8 py-6">
                Beregn min erstatning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-orange-200 mt-4">
              ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling | ✓ Ingen risiko
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Norwegian-flygninger er statistisk oftere forsinket i høysesongen, men dine rettigheter under EU261 (gjelder i Norge gjennom EØS-avtalen) er de samme året rundt. Hvis forsinkelsen var mer enn 3 timer ved ankomst, har du rett til opptil 600 € kompensasjon – selv om Norwegian påberoper seg "høy trafikk" eller "sesongmessige forsinkelser". ClaimWinger har verktøy og juridisk ekspertise til å bekjempe denne unnskyldningen effektivt.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
