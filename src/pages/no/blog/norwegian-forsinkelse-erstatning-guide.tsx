import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, AlertTriangle, Clock, Plane, Shield, Euro } from "lucide-react";
import Link from "next/link";

export default function NorwegianDelayCompensationGuide() {
  return (
    <LayoutNo>
      <SEO 
        title="Erstatning for forsinket Norwegian-fly – komplett guide 2025"
        description="Alt du trenger å vite om Norwegian-forsinkelse og erstatning: EU261-regler, 250-600 € kompensasjon, klagefrister, dokumenter og hvordan ClaimWinger kan hjelpe deg."
        url="https://problemlot.com/no/blog/norwegian-forsinkelse-erstatning-guide"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Erstatning for forsinket Norwegian-fly – komplett guide 2025 for norske reisende
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>12 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Plane className="w-6 h-6" />
            Raskt svar: Ja, du har rett til opptil 600 € i erstatning
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Hvis ditt Norwegian-fly er <strong>forsinket mer enn 3 timer</strong> ved ankomst til destinasjonen, har du rett til økonomisk kompensasjon på <strong>250 €, 400 € eller 600 €</strong> avhengig av flydistansen – beskyttet av <strong>EU-forordning 261/2004</strong> som gjelder i Norge gjennom EØS-avtalen.
            </p>
            <p className="text-sm border-t border-blue-200 dark:border-blue-800 pt-3 mt-3">
              💡 <strong>Viktig:</strong> Norwegian må betale selv om du kom frem til slutt. Erstatningen er i tillegg til eventuelle refusjoner eller rebookinger.
            </p>
          </div>
        </div>

        {/* CTA 1 - After first paragraph */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Var ditt Norwegian-fly forsinket?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til opptil 600 € erstatning på 2 minutter. Gratis, ingen risiko.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk min Norwegian-forsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor gjelder EU261 i Norge? (EØS-avtalen forklart)</h2>
          <p>
            Mange norske passasjerer spør: "Vi er jo ikke med i EU – gjelder disse reglene for oss?"
          </p>
          <p>
            Svaret er <strong>ja</strong>. Norge er medlem av <strong>Det europeiske økonomiske samarbeidsområdet (EØS)</strong>, og gjennom <strong>EØS-avtalen</strong> gjelder <strong>EU-forordning 261/2004</strong> fullt ut for alle flyreiser til, fra eller innenfor Norge. Det betyr at du som norsk passasjer har nøyaktig de samme rettighetene som en svensk, tysk eller fransk borger.
          </p>
          <p>
            Forordningen håndheves i Norge av <strong>Luftfartstilsynet</strong>, mens klagesaker behandles av <strong>Transportklagenemnda</strong> (gjennom Forbrukerrådet).
          </p>

          <h2>Hvor mye erstatning får du fra Norwegian?</h2>
          <p>
            Kompensasjonen avhenger utelukkende av <strong>flydistansen</strong> (ikke prisen på billetten). Her er tabellen:
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
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3–4 timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-yellow-600">300 € (halvering)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p><strong>Eksempler på Norwegian-ruter:</strong></p>
          <ul>
            <li><strong>Oslo–København:</strong> ~600 km → 250 €</li>
            <li><strong>Oslo–London:</strong> ~1200 km → 250 €</li>
            <li><strong>Oslo–Barcelona:</strong> ~2300 km → 400 €</li>
            <li><strong>Oslo–New York:</strong> ~5900 km → 600 € (hvis mer enn 4 timer forsinket)</li>
            <li><strong>Oslo–Bangkok:</strong> ~8600 km → 600 €</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Viktig: Målt ved ankomst, ikke avgang
            </h3>
            <p className="text-sm mb-0">
              EU261 måler forsinkelsen ved <strong>landing</strong> på destinasjonen (når dørene åpnes), ikke når flyet lettet. Hvis flyet startet 2 timer forsinket men hentet inn tid underveis og landet bare 2t 45min sent, får du <strong>ingen erstatning</strong>. Grensen er <strong>3 timer ved ankomst</strong>.
            </p>
          </div>

          <h2>Når har Norwegian rett til å nekte erstatning?</h2>
          <p>
            Norwegian slipper å betale kun hvis forsinkelsen skyldtes <strong>"ekstraordinære omstendigheter"</strong> utenfor deres kontroll, og de har tatt alle rimelige forholdsregler for å unngå forsinkelsen.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="border-2 border-red-300 bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                ❌ IKKE ekstraordinært (Norwegian MÅ betale)
              </h4>
              <ul className="text-sm space-y-1">
                <li>✓ Teknisk feil på flyet</li>
                <li>✓ Manglende reservedeler</li>
                <li>✓ Syk besetning (Norwegian har ansvaret for å ha reserver)</li>
                <li>✓ Operasjonelle forsinkelser (overbooking, bakkehåndtering)</li>
                <li>✓ Norwegian-streik (egen ansatte)</li>
              </ul>
            </div>

            <div className="border-2 border-green-300 bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                ✅ Ekstraordinært (Lovlig å nekte)
              </h4>
              <ul className="text-sm space-y-1">
                <li>✓ Flygelederstreik</li>
                <li>✓ Ekstremvær (tyfon, kraftig snøstorm)</li>
                <li>✓ Sikkerhetstrussel / terrorvarsel</li>
                <li>✓ Politisk uro / flystenging</li>
              </ul>
            </div>
          </div>

          <p>
            <strong>Advarselen:</strong> Norwegian prøver ofte å klassifisere tekniske feil som "uforutsigbare" for å slippe å betale. Dette er <strong>ulovlig</strong> ifølge EU-domstolen (C-549/07 Wallentin-Hermann). Alle tekniske feil faller inn under flyselskapets vedlikeholdsansvar.
          </p>

          <h2>Rett til omsorg på flyplassen (Mat, hotell, transport)</h2>
          <p>
            I tillegg til kontanterstatning har du rett til <strong>"omsorg"</strong> (care) hvis forsinkelsen er lang:
          </p>
          <ul>
            <li><strong>2+ timer</strong> forsinkelse (korte flyvninger under 1500 km): Gratis mat og drikke</li>
            <li><strong>3+ timer</strong> forsinkelse (mellomruter 1500-3500 km): Gratis mat og drikke</li>
            <li><strong>4+ timer</strong> forsinkelse (langdistanse over 3500 km): Gratis mat og drikke</li>
            <li><strong>Overnatting nødvendig:</strong> Norwegian må dekke hotell + transport til/fra flyplassen</li>
            <li><strong>2 telefonsamtaler eller e-poster</strong></li>
          </ul>
          <p>
            Hvis Norwegian ikke tilbyr dette på flyplassen, <strong>kan du kjøpe det selv og kreve refusjon</strong> – <strong>MEN</strong> beløpene må være rimelige (ikke champagne og 5-stjerners hotell). Ta vare på alle kvitteringer.
          </p>

          <h2>Hvordan søker du om erstatning fra Norwegian?</h2>
          <p>Du har to alternativer:</p>

          <h3>Alternativ 1: Direkte til Norwegian (gratis, men tidkrevende)</h3>
          <ol>
            <li>Gå til <strong>Norwegian.com → Kundeservice → Klagebrev</strong></li>
            <li>Fyll ut skjemaet med flynummer, dato, PNR-kode</li>
            <li>Last opp boardingkort og bookingbekreftelse</li>
            <li>Norwegian har <strong>30 dager</strong> på å svare (men svarer ofte ikke)</li>
            <li>Hvis avslag eller ingen respons etter 60 dager: Send klage til <strong>Forbrukerrådet</strong> (Transportklagenemnda)</li>
            <li>Saksbehandlingstid hos nemnda: <strong>6–12 måneder</strong></li>
          </ol>

          <h3>Alternativ 2: Bruk ClaimWinger (25% provisjon, 98% suksessrate)</h3>
          <ol>
            <li>Legg inn flynummer og dato på <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener" className="text-blue-600 hover:underline">claimwinger.com/no/forsinket-fly</a></li>
            <li>Systemet sjekker automatisk om du har et gyldig krav (tar 2 minutter)</li>
            <li>ClaimWinger tar all kommunikasjon med Norwegian</li>
            <li>Hvis Norwegian nekter: ClaimWingers advokater tar saken til retten</li>
            <li>Du betaler <strong>ingenting</strong> hvis kravet tapes ("No Win, No Fee")</li>
            <li>Gjennomsnittlig utbetalingstid: <strong>4–8 uker</strong></li>
          </ol>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-2">💡 ClaimWinger vs. Gjøre det selv</h4>
            <p className="text-sm mb-0">
              Norwegian avviser private krav systematisk og håper du gir opp. <strong>Statistikk fra Transportklagenemnda</strong> viser at Norwegian tapte over 60% av sakene som gikk til nemndabehandling i 2024 – det betyr at de opprinnelig nektet gyldige krav. ClaimWinger har tilgang til radardata, værlogger og juridisk kompetanse som tvinger Norwegian til å betale raskt.
            </p>
          </div>

          <h2>Hvilke dokumenter trenger du?</h2>
          <p>For å fremme kravet ditt, samle følgene:</p>
          <ul>
            <li><strong>Boardingkort</strong> (fysisk eller skjermbilde fra appen)</li>
            <li><strong>Bookingbekreftelse</strong> (e-post med PNR-kode)</li>
            <li><strong>ID/Pass</strong> (for identitetsverifisering)</li>
            <li><strong>Kvitteringer for utlegg</strong> (hvis du kjøpte mat/hotell selv)</li>
          </ul>
          <p>
            Hvis du mangler boardingkortet, kan ClaimWinger fortsatt hjelpe – de har tilgang til globale flydatabaser som FlightRadar24 som beviser at du var om bord.
          </p>

          <h2>Foreldelsesfrist: Hvor lenge har du på deg?</h2>
          <p>
            I Norge er foreldelsesfristen <strong>3 år</strong> fra flydatoen (Foreldelsesloven § 2). Det betyr at du kan kreve erstatning for et fly som var forsinket så langt tilbake som 2022 – <strong>MEN</strong> vent ikke til siste minutt. Jo eldre saken er, desto vanskeligere er det å finne dokumentasjon.
          </p>
          <p>
            Les mer: <Link href="/no/blog/krave-erstatning-fly-3-ar-siden" className="text-blue-600 hover:underline">Kan jeg kreve erstatning for et fly for 3 år siden?</Link>
          </p>

          <h2>Hva gjør du hvis Norwegian nekter?</h2>
          <p>
            Hvis Norwegian avviser kravet ditt med begrunnelsen "ekstraordinære omstendigheter", har du følgende muligheter:
          </p>
          <ol>
            <li><strong>Sjekk deres begrunnelse</strong> – Er det teknisk feil? Da lyver de. Er det vær? Sjekk om andre flyselskap landet samtidig.</li>
            <li><strong>Send klage til Forbrukerrådet:</strong> <a href="https://www.forbrukerradet.no" target="_blank" rel="noopener" className="text-blue-600 hover:underline">forbrukerradet.no</a> → Transportklagenemnda (gratis, men 6-12 mnd saksbehandling)</li>
            <li><strong>Bruk ClaimWinger:</strong> De tar saken direkte til retten hvis nødvendig.</li>
          </ol>
          <p>
            Les mer: <Link href="/no/blog/norwegian-nektet-erstatning-hva-gjore" className="text-blue-600 hover:underline">Norwegian nektet erstatning – hva gjør du videre?</Link>
          </p>

          <h2>Norwegian-spesifikke problemområder</h2>
          <h3>1. Voucher i stedet for penger</h3>
          <p>
            Norwegian tilbyr ofte voucher (gavekort) i stedet for kontanter. Du har <strong>rett til å nekte</strong> og kreve pengene. EU261 krever kontant utbetaling.
          </p>
          <p>
            Les mer: <Link href="/no/blog/norwegian-voucher-i-stedet-for-penger" className="text-blue-600 hover:underline">Norwegian tilbyr voucher – må du akseptere det?</Link>
          </p>

          <h3>2. Tidsendring uten varsel</h3>
          <p>
            Hvis Norwegian endrer avgangstiden med mer enn 2 timer mindre enn 14 dager før avreise, regnes det som en kansellering – du har rett til full erstatning.
          </p>

          <h3>3. Codeshare-flygninger (Norwegian operert av Widerøe eller SAS)</h3>
          <p>
            Hvis du kjøpte billetten fra Norwegian men flyet ble operert av Widerøe, er det <strong>Norwegian</strong> som må betale erstatningen (det "utstedende" flyselskapet er ansvarlig under EU261).
          </p>
          <p>
            Les mer: <Link href="/no/blog/norwegian-codeshare-sas-wideroe-erstatning" className="text-blue-600 hover:underline">Norwegian codeshare med SAS eller Widerøe – hvem betaler?</Link>
          </p>

          {/* FAQ Section */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg erstatning hvis jeg hadde en LowFare-billett?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ja! EU261 gjelder for <strong>alle billetttyper</strong> – det spiller ingen rolle om du kjøpte den billigste LowFare-billetten eller en Flex-billett. Erstatningen er den samme.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis jeg kjøpte billetten gjennom Momondo eller Expedia?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Det spiller ingen rolle hvor du kjøpte billetten. Kravet skal rettes mot <strong>flyselskapet</strong> (Norwegian), ikke bookingsiden. Du har de samme rettighetene.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg kreve erstatning hvis jeg fikk refundert billetten?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ja! Refusjon av billettpris og EU261-erstatning er <strong>to separate rettigheter</strong>. Selv om du fikk pengene tilbake for billetten, har du fortsatt rett til kompensasjon hvis flyet var forsinket 3+ timer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvem får erstatningen hvis firmaet mitt betalte for billetten?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Passasjeren</strong> (altså deg) får erstatningen – ikke firmaet som kjøpte billetten. EU261 beskytter den som faktisk fløy og opplevde forsinkelsen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg kreve erstatning for barn og spedbarn?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ja, <strong>hvis barnet hadde en egen billett</strong> med sete. Spedbarn som sitter på fanget (infant ticket) har dessverre ikke rett til EU261-erstatning.
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 - Before FAQ */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <Euro className="w-20 h-20 mx-auto mb-4 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Klar til å kreve din erstatning?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Var ditt Norwegian-fly forsinket mer enn 3 timer? Du kan ha rett til opptil 600 €. Sjekk gratis på 2 minutter.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Beregn min Norwegian-erstatning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ No Win, No Fee | ✓ 98% suksessrate | ✓ Gjennomsnittstid: 4-8 uker
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Som norsk passasjer er du fullt beskyttet av EU-forordning 261/2004 gjennom EØS-avtalen. Hvis Norwegian-flyet ditt var forsinket mer enn 3 timer ved ankomst, har du rett til opptil 600 € i kompensasjon – uansett billettpris, uansett årsak (med mindre det virkelig var ekstraordinære omstendigheter som flyselskapstreik eller ekstremvær).
          </p>
          <p>
            Norwegian prøver ofte å nekte gyldige krav. Derfor anbefaler vi å bruke <strong>ClaimWinger</strong>, som har juridisk ekspertise, tilgang til tekniske databaser og høy suksessrate mot Norwegian.
          </p>
          <p>
            Lykke til med kravet ditt!
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
