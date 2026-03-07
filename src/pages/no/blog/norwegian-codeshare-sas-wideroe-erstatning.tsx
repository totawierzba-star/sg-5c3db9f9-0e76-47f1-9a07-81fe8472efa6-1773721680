import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NorwegianCodeshareSASWideroeErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian codeshare med SAS eller Widerøe – hvem betaler erstatningen?"
        description="Booket du hos Norwegian men flyet ble operert av SAS/Widerøe? Lær hvem som er ansvarlig for erstatning ved codeshare-flygninger."
        url="https://problemlot.com/no/blog/norwegian-codeshare-sas-wideroe-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian codeshare med SAS eller Widerøe – hvem betaler erstatningen?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>4 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Plane className="w-6 h-6" />
            Raskt svar: Flyselskapet du kjøpte billetten fra betaler
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Hvis du kjøpte billetten fra <strong>Norwegian</strong> men flyet ble operert av <strong>SAS</strong> eller <strong>Widerøe</strong> (codeshare), er det <strong>Norwegian</strong> som må betale erstatningen. Under EU261 (gjelder i Norge gjennom EØS-avtalen) er det "utstedende flyselskap" som har ansvaret – ikke det operative.
            </p>
            <p className="text-sm border-t border-blue-200 dark:border-blue-800 pt-3 mt-3">
              💡 <strong>Viktig:</strong> Send alltid kravet til flyselskapet du kjøpte billetten fra, ikke det som faktisk fløy ruten.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Plane className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Codeshare-fly forsinket eller kansellert?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ClaimWinger vet nøyaktig hvilket flyselskap som skal betale. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk mitt codeshare-krav
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hva er en codeshare-flyvning?</h2>
          <p>
            En <strong>codeshare-avtale</strong> betyr at ett flyselskap (f.eks. Norwegian) selger billetter på en rute som faktisk opereres av et annet flyselskap (f.eks. SAS eller Widerøe). Dette er vanlig på regionale ruter eller internasjonale partnerforbindelser.
          </p>
          <p><strong>Eksempel:</strong></p>
          <p>
            Du booker en billett fra <strong>Norwegian.com</strong> for ruten Oslo→Tromsø. På bookingbekreftelsen står det:
          </p>
          <ul>
            <li><strong>Flynummer:</strong> DY123 (Norwegian)</li>
            <li><strong>Operert av:</strong> Widerøe</li>
          </ul>
          <p>
            Dette betyr at Norwegian solgte billetten, men Widerøe faktisk flyr ruten. Hvis flyet er forsinket, er det <strong>Norwegian</strong> du skal kreve erstatning fra – ikke Widerøe.
          </p>

          <h2>Hvem er ansvarlig for erstatning?</h2>
          <p>
            Under <strong>EU-forordning 261/2004</strong> (gjelder i Norge gjennom <strong>EØS-avtalen</strong>) er det <strong>"utstedende flyselskap"</strong> (marketing carrier) som er ansvarlig for:
          </p>
          <ul>
            <li>Erstatning ved forsinkelse (3+ timer)</li>
            <li>Erstatning ved kansellering (250–600 €)</li>
            <li>Omsorg på flyplassen (mat, hotell)</li>
          </ul>
          <p>
            <strong>Regelen:</strong> Send kravet til flyselskapet du kjøpte billetten fra – <strong>ikke</strong> det som opererte flyet.
          </p>
          <p>
            Les mer: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Vanlig feil passasjerer gjør
            </h3>
            <p className="text-sm mb-0">
              Mange sender kravet til det operative flyselskapet (Widerøe/SAS) fordi det var de som faktisk hadde forsinkelsen. Dette er <strong>feil</strong> – kravet vil bli avvist. Du må alltid kontakte flyselskapet som står på bookingbekreftelsen (Norwegian).
            </p>
          </div>

          <h2>Vanlige codeshare-kombinasjoner i Norge</h2>
          <p>
            Norwegian har codeshare-avtaler med flere flyselskap. Her er de vanligste:
          </p>
          <ul>
            <li><strong>Norwegian + Widerøe:</strong> Regionale ruter i Nord-Norge (Tromsø, Bodø, etc.)</li>
            <li><strong>Norwegian + SAS:</strong> Europeiske ruter (via København/Stockholm)</li>
            <li><strong>Norwegian + Lufthansa:</strong> Interkontinentale ruter (via Frankfurt/München)</li>
          </ul>
          <p>
            <strong>Hvordan vet du om det er codeshare?</strong> Sjekk bookingbekreftelsen – hvis det står "Operert av [annet flyselskap]", er det codeshare.
          </p>

          <h2>Hvordan krever du erstatning for codeshare-fly?</h2>
          <ol>
            <li>Sjekk bookingbekreftelsen: Hvilket flyselskap solgte billetten? (Det er de som skal betale)</li>
            <li>Samle bevis: Boardingkort, flynummer, dato, forsinkelsestid</li>
            <li>Send krav til <strong>Norwegian</strong> (hvis du kjøpte fra dem) via kundeservice</li>
            <li>Hvis Norwegian nekter: Eskalere til <strong>Forbrukerrådet</strong> eller bruk ClaimWinger</li>
          </ol>
          <p>
            Les mer: <Link href="/no/blog/norwegian-hvordan-soke-erstatning-steg-for-steg" className="text-blue-600 hover:underline">Hvordan søker du om erstatning fra Norwegian steg for steg?</Link>
          </p>

          <h2>Hva hvis du kjøpte billetten gjennom en tredjepartstjeneste?</h2>
          <p>
            Hvis du kjøpte billetten via <strong>Momondo</strong>, <strong>Kiwi.com</strong> eller <strong>Expedia</strong>, spiller det ingen rolle. Du sender fortsatt kravet direkte til <strong>Norwegian</strong> (eller det flyselskapet som står på bookingbekreftelsen). Tredjepartstjenesten har ingen juridisk ansvar for erstatning.
          </p>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier "kontakt Widerøe"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Dette er <strong>ulovlig</strong>. Under EU261 er Norwegian fullt ansvarlig selv om Widerøe opererte flyet. Norwegian prøver ofte å skyve ansvaret over – ikke godta dette.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis begge flyselskapene nekter ansvar?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Da har du et typisk "svarteper-spill" – Norwegian skylder på Widerøe, Widerøe skylder på Norwegian. Løsningen er å bruke ClaimWinger som har juridisk ekspertise til å identifisere det ansvarlige selskapet og tvinge dem til å betale.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Gjelder de samme erstatningsbeløpene?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> Codeshare-flygninger har samme kompensasjon som vanlige flygninger: 250 €, 400 € eller 600 € avhengig av distanse. Les mer: <Link href="/no/blog/norwegian-hvor-mye-erstatning" className="text-blue-600 hover:underline">Hvor mye erstatning kan du kreve fra Norwegian?</Link>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis jeg har tilkoblingsfly fra ulike flyselskap?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Hvis begge flyene var booket på <strong>én billett</strong> fra Norwegian, er Norwegian ansvarlig for hele reisen – selv om tilkoblingsflyet var operert av SAS. Les mer: <Link href="/no/blog/norwegian-misset-tilkoblingsflyg" className="text-blue-600 hover:underline">Mistet tilkoblingsflyg på grunn av Norwegian-forsinkelse</Link>
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Codeshare-fly forsinket? Vi tar saken</h3>
            <p className="text-xl mb-8 text-blue-100">
              ClaimWinger har erfaring med codeshare-krav og identifiserer automatisk riktig ansvarlig flyselskap. No Win, No Fee.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
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
            Ved codeshare-flygninger er det alltid <strong>flyselskapet du kjøpte billetten fra</strong> som er ansvarlig for erstatning – ikke det operative flyselskapet. Hvis du kjøpte fra Norwegian men flyet ble operert av SAS/Widerøe, sender du kravet til Norwegian. Norwegian prøver ofte å skyve ansvaret over på det operative selskapet – ClaimWinger har juridisk ekspertise til å bekjempe denne unnskyldningen og tvinge Norwegian til å betale.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}