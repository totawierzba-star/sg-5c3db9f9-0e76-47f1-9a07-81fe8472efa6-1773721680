import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hotel, CheckCircle2, AlertTriangle, Receipt } from "lucide-react";
import Link from "next/link";

export default function NorwegianForsinkelseOvernattingHotell() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian forsinkelse med overnatting – hotell, måltider og kontanterstatning"
        description="Norwegian må dekke hotell, transport og måltider hvis forsinkelsen krever overnatting. Lær dine rettigheter + få opptil 600 € i kompensasjon."
        url="https://problemlot.com/no/blog/norwegian-forsinkelse-overnatting-hotell"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian forsinkelse med overnatting – hotell, måltider og kontanterstatning
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>7 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Hotel className="w-6 h-6" />
            Raskt svar: Ja, Norwegian MÅ dekke overnatting + du får erstatning
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Hvis Norwegian-forsinkelsen krever overnatting, har du rett til <strong>to separate rettigheter:</strong>
            </p>
            <ul className="ml-4 space-y-1">
              <li>🏨 <strong>Omsorg (care):</strong> Hotell, transport til/fra flyplassen, måltider (dekkes av Norwegian)</li>
              <li>💰 <strong>Kontanterstatning (kompensasjon):</strong> 250-600 € hvis flyet var forsinket 3+ timer ved ankomst</li>
            </ul>
            <p className="text-sm border-t border-blue-200 dark:border-blue-800 pt-3 mt-3">
              💡 <strong>Viktig:</strong> Disse er kumulative – du får både hotell/mat <em>og</em> kontanterstatning under EU261.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Hotel className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian forsinkelse krevde overnatting?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til både hotell-refusjon OG opptil 600 € i erstatning. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk min forsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hva er "omsorg" (care) under EU261?</h2>
          <p>
            <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>) krever at Norwegian gir deg <strong>"omsorg"</strong> (care) hvis forsinkelsen er lang nok til at du må overnatte før neste avgang.
          </p>
          <p>
            <strong>Omsorg inkluderer:</strong>
          </p>
          <ul>
            <li><strong>Hotell:</strong> Norwegian må dekke et rimelig hotell i nærheten av flyplassen</li>
            <li><strong>Transport:</strong> Drosje eller buss til/fra hotellet</li>
            <li><strong>Måltider:</strong> Mat og drikke tilpasset lengden på forsinkelsen</li>
            <li><strong>Kommunikasjon:</strong> 2 telefonsamtaler, e-poster eller meldinger</li>
          </ul>
          <p>
            <strong>Viktig:</strong> Omsorg gjelder <strong>uansett årsak</strong> til forsinkelsen – selv om Norwegian hevder "ekstraordinære omstendigheter", må de dekke hotell og mat.
          </p>
          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <h2>Når må Norwegian tilby hotell?</h2>
          <p>
            Norwegian har plikt til å tilby hotell hvis:
          </p>
          <ol>
            <li>Det alternative flyet går neste dag (du må overnatte)</li>
            <li>Forsinkelsen er så lang at en overnatting blir nødvendig (f.eks. hvis flyet går klokken 03:00 neste dag)</li>
            <li>Du ikke bor i byen flyplassen ligger i (hvis du bor i Oslo og flyet går fra Oslo, slipper Norwegian å dekke hotell)</li>
          </ol>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Hva hvis Norwegian ikke tilbyr hotell på flyplassen?
            </h3>
            <p className="text-sm mb-2">
              Hvis Norwegian ikke tilbyr hotell når du har krav på det, har du rett til å <strong>bestille selv og kreve refusjon</strong>. Men vær rimelig:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>✓ Velg et 3-4 stjerners hotell i nærheten av flyplassen</li>
              <li>✓ Ikke book 5-stjerners luksushotell (Norwegian kan nekte)</li>
              <li>✓ Ta vare på <strong>alle kvitteringer</strong> (hotell, drosje, mat)</li>
              <li>✓ Send kvitteringene til Norwegian etterpå og krev refusjon</li>
            </ul>
          </div>

          <h2>Hvor mye kontanterstatning får du i tillegg?</h2>
          <p>
            <strong>Viktig:</strong> Hotell/mat er <strong>ikke</strong> kompensasjon – det er bare "omsorg". Du har fortsatt rett til <strong>kontanterstatning</strong> hvis flyet var forsinket 3+ timer ved ankomst.
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
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">4+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p><strong>Eksempel:</strong></p>
          <p>
            Du fløy Oslo–New York. Flyet ble forsinket 12 timer, og du måtte overnatte på et hotell som kostet 1500 NOK. Du tok drosje til/fra hotellet for 600 NOK. Du har rett til:
          </p>
          <ul>
            <li>1500 NOK refusjon for hotellet</li>
            <li>600 NOK refusjon for transport</li>
            <li>600 € kontanterstatning (~7000 NOK) under EU261</li>
            <li><strong>Totalt: ~9100 NOK</strong></li>
          </ul>

          <h2>Hvordan krever du refusjon for hotell/måltider?</h2>
          <ol>
            <li>Ta vare på <strong>alle kvitteringer</strong> (hotellregning, drosjebon, restaurantkvittering)</li>
            <li>Send kvitteringene til Norwegian via <strong>Norwegian.com → Kundeservice</strong></li>
            <li>Krev både <strong>refusjon av utlegg</strong> og <strong>EU261-kompensasjon</strong> samtidig</li>
            <li>Hvis Norwegian nekter: Send klage til <strong>Forbrukerrådet</strong> eller bruk ClaimWinger</li>
          </ol>
          <p>
            Les mer: <Link href="/no/blog/norwegian-hvordan-soke-erstatning-steg-for-steg" className="text-blue-600 hover:underline">Hvordan søker du om erstatning fra Norwegian steg for steg?</Link>
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <Receipt className="w-5 h-5" />
              Hvor mye kan du kreve for måltider?
            </h3>
            <p className="text-sm mb-2">
              Norwegian må dekke "rimelige" utgifter til mat og drikke. Retningslinjer:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>✓ Frokost: 100-200 NOK</li>
              <li>✓ Lunsj/middag: 200-400 NOK</li>
              <li>✓ Drikke: 50-100 NOK</li>
              <li>✗ <strong>Ikke</strong> champagne, kaviar eller alkohol i overdreven mengde</li>
            </ul>
            <p className="text-sm mt-2">
              Hvis Norwegian nekter å refundere, kan ClaimWinger vurdere om beløpene var "rimelige".
            </p>
          </div>

          <h2>Hva hvis Norwegian tilbyr voucher i stedet for hotell?</h2>
          <p>
            Norwegian tilbyr ofte voucher (gavekort) til mat på flyplassen i stedet for hotell. Du har <strong>rett til å nekte</strong> hvis voucher-beløpet ikke dekker overnatting. Hvis du må overnatte, må Norwegian dekke <strong>faktisk hotell</strong>, ikke bare mat.
          </p>
          <p>
            Les mer: <Link href="/no/blog/norwegian-voucher-i-stedet-for-penger" className="text-blue-600 hover:underline">Norwegian tilbyr voucher i stedet for penger – må du akseptere det?</Link>
          </p>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg hotell selv om Norwegian hevder "ekstraordinære omstendigheter"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> Omsorg (hotell, mat, transport) gjelder <strong>uansett årsak</strong> til forsinkelsen. Selv om Norwegian kan slippe å betale EU261-kompensasjon, må de dekke hotell/mat.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis jeg bor i byen flyplassen ligger i?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Da kan Norwegian nekte å dekke hotell (du kan jo bo hjemme). Men de må fortsatt dekke transport hjem og mat/drikke på flyplassen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg bestille hotell selv hvis Norwegian ikke tilbyr?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> Hvis Norwegian ikke tilbyr hotell når du har krav på det, kan du bestille selv og kreve refusjon. Velg et rimelig hotell (3-4 stjerner) og ta vare på alle kvitteringer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg både hotell-refusjon og EU261-kompensasjon?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> Disse er separate rettigheter. Hotell/mat er "omsorg", mens EU261-kompensasjon er en straff til flyselskapet for forsinkelsen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvor lang tid har jeg på meg til å kreve refusjon?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I Norge er foreldelsesfristen <strong>3 år</strong> fra flydatoen. Les mer: <Link href="/no/blog/krave-erstatning-fly-3-ar-siden" className="text-blue-600 hover:underline">Kan jeg kreve erstatning for et fly for 3 år siden?</Link>
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Forsinkelse med overnatting? Få både refusjon og erstatning</h3>
            <p className="text-xl mb-8 text-blue-100">
              ClaimWinger krever både hotell-refusjon og opptil 600 € i EU261-kompensasjon på dine vegne. No Win, No Fee.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Krev begge rettigheter nå
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling | ✓ Ingen risiko
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Hvis Norwegian-forsinkelsen krevde overnatting, har du rett til <strong>to separate rettigheter:</strong> (1) Omsorg (hotell, transport, mat) som Norwegian må dekke uansett årsak, og (2) kontanterstatning 250-600 € hvis flyet var forsinket 3+ timer ved ankomst. Disse er kumulative – du får både hotell-refusjon og EU261-kompensasjon. ClaimWinger krever automatisk begge på dine vegne og har høy suksessrate mot Norwegian.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}