import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, CheckCircle2, AlertTriangle, Clock } from "lucide-react";
import Link from "next/link";

export default function NorwegianMissetTilkoblingsflygErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Mistet tilkoblingsflyg på grunn av Norwegian-forsinkelse – hvem betaler?"
        description="Fikk du forsinket tilkoblingsfly eller mistet den på grunn av Norwegian? Lær om erstatning, ansvar og hvordan ClaimWinger kan hjelpe deg."
        url="https://problemlot.com/no/blog/norwegian-misset-tilkoblingsflyg"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mistet tilkoblingsflyg på grunn av Norwegian-forsinkelse – hvem er ansvarlig?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Plane className="w-6 h-6" />
            Raskt svar: Ja, Norwegian er ansvarlig – og du får erstatning
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Hvis du mistet tilkoblingsflyet ditt på grunn av at første Norwegian-fly var forsinket, har du rett til opptil <strong>600 € i erstatning</strong> – men bare hvis begge flyene var booket på <strong>samme billett</strong> (én booking). Norwegian har ansvar for hele reisen og må dekke både rebooking og kompensasjon.
            </p>
            <p className="text-sm border-t border-blue-200 dark:border-blue-800 pt-3 mt-3">
              💡 <strong>Kritisk:</strong> Hvis du kjøpte to separate billetter, har du <strong>ikke</strong> automatisk rett til erstatning fra Norwegian.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Mistet tilkoblingsfly på grunn av Norwegian?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til opptil 600 € erstatning + rebooking på neste fly. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk min mistede tilkobling
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Når er Norwegian ansvarlig for mistet tilkoblingsfly?</h2>
          <p>
            <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>) definerer ansvar for mistede tilkoblinger basert på hvordan du booket billetten:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="border-2 border-green-300 bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3">✅ Norwegian ER ansvarlig</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Begge flyene booket på <strong>samme billett</strong></li>
                <li>✓ Én booking (ett PNR-nummer)</li>
                <li>✓ Kjøpt fra Norwegian direkte eller én reisebyrå</li>
                <li>✓ Norwegian "garanterer" tilkoblingen</li>
              </ul>
            </div>

            <div className="border-2 border-red-300 bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-3">❌ Norwegian IKKE ansvarlig</h4>
              <ul className="text-sm space-y-1">
                <li>✓ To separate billetter</li>
                <li>✓ Uavhengige bookinger</li>
                <li>✓ Du planla selv overgangen</li>
                <li>✓ Norwegian advarte om for kort tid mellom flyene</li>
              </ul>
            </div>
          </div>

          <p>
            <strong>Eksempel:</strong> Du booket Oslo→København→New York på <strong>én Norwegian-billett</strong>. Første fly var forsinket 1 time, og du mistet tilkoblingen i København. Norwegian MÅ booke deg på neste fly til New York + betale 600 € kompensasjon.
          </p>
          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <h2>Hvor mye erstatning får du?</h2>
          <p>
            Erstatningen avhenger av den <strong>totale distansen</strong> fra opprinnelig avreise til endelig destinasjon (ikke mellomlandingen):
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Total distanse</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Forsinkelse ved endelig ankomst</th>
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
            Oslo→København→New York (total distanse ~5900 km). Du kom frem 6 timer senere enn planlagt. Du får <strong>600 €</strong> erstatning.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Måles ved endelig ankomst
            </h3>
            <p className="text-sm mb-0">
              EU261 måler forsinkelsen ved <strong>endelig destinasjon</strong>, ikke mellomlandingen. Selv om du mistet tilkoblingen, må du ha kommet frem 3+ timer sent til slutten for å få erstatning.
            </p>
          </div>

          <h2>Hva må Norwegian dekke i tillegg til erstatning?</h2>
          <p>
            Hvis du mistet tilkoblingen, har Norwegian plikt til å:
          </p>
          <ol>
            <li><strong>Booke deg på neste tilgjengelige fly</strong> til destinasjonen (gratis)</li>
            <li><strong>Dekke hotell og transport</strong> hvis overnatting er nødvendig</li>
            <li><strong>Gi deg mat og drikke</strong> mens du venter</li>
            <li><strong>Betale 600 € kompensasjon</strong> hvis du kom frem 3+ timer sent</li>
          </ol>
          <p>
            Les mer: <Link href="/no/blog/norwegian-forsinkelse-overnatting-hotell" className="text-blue-600 hover:underline">Norwegian forsinkelse med overnatting – hotell og erstatning</Link>
          </p>

          <h2>Hva hvis jeg kjøpte to separate billetter?</h2>
          <p>
            Hvis du kjøpte <strong>to uavhengige billetter</strong> (f.eks. Oslo→København hos Norwegian + København→New York hos SAS), har du <strong>ikke</strong> automatisk rett til erstatning fra Norwegian. Men:
          </p>
          <ul>
            <li>Du kan kreve erstatning for det <strong>første flyet</strong> hvis det var forsinket 3+ timer</li>
            <li>Du kan kreve refusjon av den <strong>tapte billetten</strong> (København→New York) fra SAS hvis du ikke nådde den</li>
            <li>Norwegian slipper å dekke hotell/rebooking fordi det ikke var én booking</li>
          </ul>
          <p>
            <strong>Anbefaling:</strong> Book alltid tilkoblingsfly på <strong>én billett</strong> for å være beskyttet under EU261.
          </p>

          <h2>Hvordan krever du erstatning?</h2>
          <ol>
            <li>Samle bevis: boardingkort fra begge flyene, bookingbekreftelse (viser at det var én billett), nytt boardingkort for rebooket fly</li>
            <li>Send krav til <strong>Norwegian.com → Kundeservice</strong></li>
            <li>Hvis Norwegian nekter: Send klage til <strong>Forbrukerrådet</strong> eller bruk ClaimWinger</li>
          </ol>
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
                  Hva hvis Norwegian booket meg på et SAS-fly som tilkobling?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Hvis begge flyene var på <strong>én Norwegian-billett</strong>, er Norwegian ansvarlig selv om det andre flyet ble operert av SAS (codeshare). Norwegian må betale erstatningen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis jeg nådde tilkoblingen, men bagasjen min ikke gjorde det?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Da får du <strong>ikke</strong> EU261-erstatning (du kom frem i tide). Men du kan kreve kompensasjon for <strong>forsinket bagasje</strong> under Montreal-konvensjonen (opp til ~1500 €).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian hevder "ekstraordinære omstendigheter"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Teknisk feil, syk besetning eller operasjonelle forsinkelser er <strong>ikke</strong> ekstraordinære. Kun flygelederstreik, ekstremvær eller sikkerhetstrusler er gyldige unntak. ClaimWinger kan bekjempe falske påstander.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg kreve erstatning hvis Norwegian ikke tilbød meg alternativt fly?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> Norwegian har plikt til å booke deg på neste fly. Hvis de nektet, kan du kreve både erstatning <em>og</em> refusjon av utgifter du hadde for å komme frem (rimelig alternativ flybillett).
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
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Mistet tilkoblingsflyg? Få erstatning nå</h3>
            <p className="text-xl mb-8 text-blue-100">
              ClaimWinger krever både rebooking-kostnader og opptil 600 € i EU261-kompensasjon på dine vegne. No Win, No Fee.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Krev erstatning nå
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling | ✓ Ingen risiko
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Hvis du mistet tilkoblingsflyet ditt på grunn av Norwegian-forsinkelse og begge flyene var booket på <strong>én billett</strong>, har du full rett til opptil 600 € erstatning + rebooking på neste fly + hotell/mat hvis nødvendig. Norwegian prøver ofte å nekte gyldige krav ved å påberope seg "ekstraordinære omstendigheter" – ClaimWinger har juridisk ekspertise til å bekjempe denne unnskyldningen og høy suksessrate mot Norwegian.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}