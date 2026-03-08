import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function SasReserouteringPage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS reseroutering — dina rättigheter vid ombokning 2026"
        description="SAS bokade om dig till annat flyg? Få 250-600 € ersättning om reserouteringen innebär betydande försening. Guide för svenska resenärer."
        url="https://lotproblem.pl/sv/blog/sas-reseroutering"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <Link 
            href="/sv/blog"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Tillbaka till bloggen
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SAS reseroutering — dina rättigheter vid ombokning 2026
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <time dateTime="2026-03-08">8 mars 2026</time>
            <span className="mx-2">•</span>
            <span>11 min läsning</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Snabbt svar:</strong> Ja, du har rätt till ersättning om SAS reseroutering (ombokning till annat flyg) innebär att du når slutdestinationen 3+ timmar försenat jämfört med din ursprungliga bokade ankomsttid. Beloppet är 250-600 € enligt EU261, även om den nya flygningen i sig är punktlig.
          </p>

          <div className="bg-white border-2 border-blue-600 rounded-lg p-8 my-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 SAS reserouterade dig? Kräv ersättning nu
            </h3>
            <p className="text-gray-700 mb-6">
              Kontrollera din rätt till 250-600 € kompensation på 2 minuter. Ingen kostnad om vi inte lyckas.
            </p>
            <Link
              href="https://claimwinger.com/sv"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Kontrollera ersättning gratis →
            </Link>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4">⚡ Vad är reseroutering?</h2>
            <p className="mb-4">
              <strong>Reseroutering (rebooking/rerouting)</strong> betyder att SAS bokar om dig från din ursprungliga flygning till en annan flygning — antingen på samma dag eller senare — på grund av:
            </p>
            <ul className="space-y-2">
              <li>✈️ Inställt flyg</li>
              <li>⏰ Kraftig försening på ursprungligt flyg</li>
              <li>🔧 Teknisk fel eller operativa problem</li>
              <li>🚫 Överbokning (denied boarding)</li>
              <li>🔀 SAS schemaändringar</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
            <p className="text-lg font-semibold mb-2">
              💡 <strong>Avgörande regel:</strong> Det spelar ingen roll om det nya flygningen är punktlig!
            </p>
            <p className="mb-0">
              Om du når slutdestinationen 3+ timmar senare än din <em>ursprungliga</em> bokade ankomsttid har du rätt till ersättning enligt EU261, även om reserouteringen sker flera dagar före avgång.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hur mycket ersättning får du vid SAS reseroutering?
          </h2>

          <p>
            Ersättningsbeloppet beror på <strong>distansen till slutdestinationen</strong> och <strong>hur mycket längre tid reserouteringen innebar</strong> jämfört med ursprunglig ankomst:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Flygsträcka</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Försening vid ankomst</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ersättning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">&le;1500 km</td>
                  <td className="border border-gray-300 px-4 py-3">3+ timmar</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-blue-600">€250</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500-3500 km</td>
                  <td className="border border-gray-300 px-4 py-3">3+ timmar</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-blue-600">€400</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">&gt;3500 km (inom EU)</td>
                  <td className="border border-gray-300 px-4 py-3">3+ timmar</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-blue-600">€400</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">&gt;3500 km (utanför EU)</td>
                  <td className="border border-gray-300 px-4 py-3">4+ timmar</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-blue-600">€600</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">&gt;3500 km (utanför EU)</td>
                  <td className="border border-gray-300 px-4 py-3">3-4 timmar</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-blue-600">€300</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-3">📍 Exempel: Stockholm–New York reseroutering</h3>
            <p className="mb-4">
              <strong>Ursprunglig bokning:</strong><br/>
              • SAS SK903: ARN 17:05 → JFK 19:35 (samma dag)
            </p>
            <p className="mb-4">
              <strong>SAS reserouterar dig:</strong><br/>
              • SAS SK901: ARN 09:40 → JFK 12:10 (nästa dag)
            </p>
            <p className="mb-4">
              <strong>Resultat:</strong><br/>
              • Du ankommer ~16 timmar senare än ursprunglig plan<br/>
              • Distans: 6 302 km (över 3500 km)<br/>
              • Försening &gt;4 timmar vid långdistans
            </p>
            <p className="mb-0 font-bold text-green-700">
              ✅ Du har rätt till <span className="text-2xl">€600</span> ersättning + eventuell hotellkostnad
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Vad räknas som &quot;försening vid ankomst&quot;?
          </h2>

          <p>
            Enligt EU261 och EU-domstolens dom <strong>C-452/13 (Germanwings)</strong> räknas försening från:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
            <p className="text-lg mb-4">
              <strong>✈️ Ankomsttid = när flygplansdörren öppnas på slutdestinationen</strong>
            </p>
            <p className="mb-0">
              Det är <strong>skillnaden mellan din ursprungliga bokade ankomsttid och faktisk tid när dörren öppnas</strong> som avgör om du har rätt till ersättning. Inte när planet landar, utan när du faktiskt får lämna planet.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            🔍 Hur beräknar man förseningen?
          </h3>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="font-semibold mb-3">Steg 1: Hitta ursprunglig planerad ankomst</p>
            <ul className="space-y-2 mb-4">
              <li>• Kolla din bokningsbekräftelse från SAS</li>
              <li>• E-post med &quot;Booking confirmation&quot;</li>
              <li>• SAS app eller EuroBonus-konto</li>
            </ul>

            <p className="font-semibold mb-3">Steg 2: Hitta faktisk ankomst på nya flyget</p>
            <ul className="space-y-2 mb-4">
              <li>• Boardingkort från det nya flyget</li>
              <li>• FlightRadar24 eller FlightStats data</li>
              <li>• SAS bokningsinformation för reserouteringen</li>
            </ul>

            <p className="font-semibold mb-3">Steg 3: Räkna skillnaden</p>
            <p className="mb-0">
              Om skillnaden är <strong>&ge;3 timmar</strong> (eller &ge;4h för långdistans utanför EU) → du har rätt till ersättning!
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            När har du INTE rätt till ersättning vid reseroutering?
          </h2>

          <p>
            Det finns två huvudsakliga undantag när SAS kan slippa betala trots reseroutering:
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            1️⃣ Extraordinära omständigheter
          </h3>

          <p>
            Om orsaken till den ursprungliga inställningen/förseningen var utanför SAS kontroll:
          </p>

          <ul className="space-y-2 mb-6">
            <li>✅ <strong>Extremt väder:</strong> Kraftig snöstorm, orkan, vulkanutbrott</li>
            <li>✅ <strong>Politiska problem:</strong> Strejk hos flygledare, flygförbud, säkerhetsrisk</li>
            <li>✅ <strong>Medicinska nödsituationer:</strong> Passagerare fick akut hjärtattack ombord</li>
            <li>❌ <strong>INTE extraordinärt:</strong> Tekniskt fel, sen ankommande plan från tidigare flyg, kabinpersonalstrejk</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
            <p className="font-semibold mb-2">⚠️ OBS: Bevisbördan ligger på SAS!</p>
            <p className="mb-0">
              Om SAS påstår &quot;extraordinära omständigheter&quot; måste DE bevisa detta med dokumentation. Acceptera aldrig deras påstående utan bevis — de ljuger ofta.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            2️⃣ SAS varnade dig i tid (14 dagar+)
          </h3>

          <p>
            Om SAS meddelar dig om reserouteringen <strong>minst 14 dagar före</strong> ursprunglig avgång OCH erbjuder alternativ som når slutdestinationen inom:
          </p>

          <ul className="space-y-2 mb-6">
            <li>• Max 1 timme tidigare avgång än ursprungligt</li>
            <li>• Max 2 timmar senare ankomst än ursprungligt</li>
          </ul>

          <p>
            ...då har du INTE rätt till ersättning (men du får självklart välja återbetalning istället).
          </p>

          <div className="bg-white border-2 border-green-600 rounded-lg p-8 my-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💰 Säkra din ersättning från SAS
            </h3>
            <p className="text-gray-700 mb-6">
              98% framgångsgrad. Endast 25% provision vid vinst. Ingen risk.
            </p>
            <Link
              href="https://claimwinger.com/sv/forsenat-flyg"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
            >
              Starta ditt krav nu →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hur ansöker du om ersättning för SAS reseroutering?
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Alternativ 1: Direkt till SAS (gratis, 40% framgång)
          </h3>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="font-semibold mb-3">Steg 1: Samla dokumentation</p>
            <ul className="space-y-2 mb-4">
              <li>• Bokningsbekräftelse (ursprunglig flygning)</li>
              <li>• Boardingkort (nya flygningen)</li>
              <li>• E-post om reseroutering från SAS</li>
              <li>• Kvitton för utgifter (hotell, mat, transport)</li>
            </ul>

            <p className="font-semibold mb-3">Steg 2: Skicka krav till SAS</p>
            <p className="mb-3">
              Fyll i formuläret på:{" "}
              <a href="https://www.sas.se/kundservice/reklamation/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                sas.se/kundservice/reklamation
              </a>
            </p>

            <p className="font-semibold mb-3">Steg 3: Vänta 6-8 veckor</p>
            <p className="mb-0">
              SAS svarar ofta inte alls, eller ger standardavslag med falska påståenden om &quot;extraordinära omständigheter&quot;.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Alternativ 2: Via ClaimWinger (98% framgång, ingen risk)
          </h3>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <p className="font-semibold mb-3">✅ Fördelar:</p>
            <ul className="space-y-2 mb-4">
              <li>• <strong>98% vinstchans</strong> (vs 40% själv)</li>
              <li>• <strong>Ingen förskottsbetalning</strong> — betala endast vid vinst</li>
              <li>• <strong>Juridiskt team</strong> som tvingar SAS att betala</li>
              <li>• <strong>4-8 veckors handläggningstid</strong> (vs 6+ månader själv)</li>
              <li>• <strong>Support på svenska</strong></li>
            </ul>

            <p className="font-semibold mb-3">💰 Kostnad:</p>
            <p className="mb-0">
              25-30% provision av erhållen ersättning. Endast om du vinner. Du behåller 70-75% (€175-450).
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Vanliga frågor om SAS reseroutering
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🔹 Kan jag få ersättning om SAS reserouterade mig 2 månader före avgång?
              </h3>
              <p className="text-gray-700">
                <strong>Ja</strong>, om du når slutdestinationen 3+ timmar senare än ursprunglig plan. Det spelar ingen roll när SAS meddelade dig — avgörande är förseningen vid ankomst jämfört med ursprunglig bokad tid.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🔹 Räknas reseroutering som &quot;inställt flyg&quot;?
              </h3>
              <p className="text-gray-700">
                <strong>Ja</strong>, i de flesta fall. Om ditt ursprungliga flygnummer inte längre avgår och du bokas om till annat flygnummer räknas det som inställning enligt EU261. Därmed gäller ersättningsrätt om förseningen är tillräcklig.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🔹 Vad händer om jag accepterar reserouteringen men sen ångrar mig?
              </h3>
              <p className="text-gray-700">
                Du kan <strong>fortfarande</strong> kräva återbetalning istället, så länge du inte har använt biljetten ännu. Kontakta SAS och säg att du ångrat dig och vill ha full återbetalning enligt EU261 Art. 8.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🔹 Kan jag kräva både ersättning OCH återbetalning?
              </h3>
              <p className="text-gray-700">
                <strong>Nej.</strong> Du måste välja:<br/>
                • Antingen accepterar du reserouteringen → rätt till €250-600 om 3+h försening<br/>
                • Eller tar du återbetalning → inga EU261-ersättning, men pengarna tillbaka
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🔹 SAS säger att reserouteringen berodde på &quot;oväntad teknisk fråga&quot; — måste jag acceptera det?
              </h3>
              <p className="text-gray-700">
                <strong>Nej!</strong> Tekniska fel är INTE extraordinära omständigheter enligt EU-domstolen (C-549/07). SAS måste underhålla sina plan ordentligt. Du har fortfarande rätt till ersättning. Ifrågasätt alltid detta påstående.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🔹 Får jag hotell och mat om jag måste vänta på reserouteringen?
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Ja, absolut!</strong> Enligt EU261 Artikel 9 måste SAS erbjuda:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Mat och dryck (proportionellt till väntetid)</li>
                <li>• Hotell om övernattning krävs</li>
                <li>• Transport mellan flygplats och hotell</li>
                <li>• 2 telefonsamtal/e-post</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Detta är <strong>utöver</strong> din rätt till €250-600 kompensation.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🔹 Kan jag boka egen transport via konkurrent och kräva ersättning?
              </h3>
              <p className="text-gray-700">
                <strong>Ja</strong>, men var försiktig. Om SAS erbjuder reseroutering inom rimlig tid och du ändå bokar egen transport, kan du förlora rätten till ersättning. Följ denna regel:
              </p>
              <ul className="space-y-2 text-gray-700 mt-3">
                <li>✅ Om SAS erbjudande når destination 5+ timmar senare → boka själv, SAS betalar</li>
                <li>❌ Om SAS erbjudande når destination 2-3h senare → svårare att motivera egen bokning</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🔹 Vad händer om mitt ursprungliga flyg ändå avgick utan mig?
              </h3>
              <p className="text-gray-700">
                Om SAS reserouterade dig till senare flyg, men det ursprungliga flyget FAKTISKT avgick (t.ex. pga felaktig information från SAS), har du starkare rättsläge. Detta klassas som &quot;denied boarding&quot; och ger automatisk rätt till ersättning + alternativ transport.
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white rounded-lg p-8 my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              🚀 Kräv din ersättning för SAS reseroutering nu
            </h2>
            <p className="text-xl mb-6 opacity-90">
              98% vinstchans • Endast 25% provision vid vinst • Inga risker
            </p>
            <Link
              href="https://claimwinger.com/sv"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Kontrollera ersättning gratis →
            </Link>
            <p className="text-sm mt-4 opacity-75">
              Tar 2 minuter • Inget kreditkort behövs • Betalning endast vid vinst
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Relaterade guider:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sv/blog/sas-forsenat-flyg-ersattning" className="text-blue-600 hover:underline">
                  → SAS försenat flyg — ersättningsguide
                </Link>
              </li>
              <li>
                <Link href="/sv/blog/sas-installt-flyg-ersattning" className="text-blue-600 hover:underline">
                  → SAS inställt flyg — vad har du rätt till?
                </Link>
              </li>
              <li>
                <Link href="/sv/blog/eu261-regler-sverige" className="text-blue-600 hover:underline">
                  → EU261 regler förklarade för svenska resenärer
                </Link>
              </li>
              <li>
                <Link href="/sv/blog/missat-anslutningsflyg-arlanda" className="text-blue-600 hover:underline">
                  → Missat anslutningsflyg på Arlanda — ersättningsguide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Kan jag få ersättning om SAS reserouterade mig 2 månader före avgång?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, om du når slutdestinationen 3+ timmar senare än ursprunglig plan. Det spelar ingen roll när SAS meddelade dig — avgörande är förseningen vid ankomst jämfört med ursprunglig bokad tid."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Räknas reseroutering som inställt flyg?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, i de flesta fall. Om ditt ursprungliga flygnummer inte längre avgår och du bokas om till annat flygnummer räknas det som inställning enligt EU261."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kan jag kräva både ersättning OCH återbetalning?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nej. Du måste välja: Antingen accepterar du reserouteringen och får €250-600 om 3+h försening, eller tar du återbetalning utan EU261-ersättning."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Får jag hotell och mat om jag måste vänta på reserouteringen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, absolut! Enligt EU261 Artikel 9 måste SAS erbjuda mat och dryck, hotell om övernattning krävs, transport mellan flygplats och hotell, samt 2 telefonsamtal/e-post. Detta är utöver din rätt till €250-600 kompensation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "SAS säger att reserouteringen berodde på teknisk fråga — måste jag acceptera det?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nej! Tekniska fel är INTE extraordinära omständigheter enligt EU-domstolen (C-549/07). SAS måste underhålla sina plan ordentligt. Du har fortfarande rätt till ersättning."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kan jag boka egen transport via konkurrent och kräva ersättning?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, men var försiktig. Om SAS erbjudande når destination 5+ timmar senare kan du boka själv och SAS betalar. Om SAS erbjudande når destination 2-3h senare är det svårare att motivera egen bokning."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Vad händer om mitt ursprungliga flyg ändå avgick utan mig?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Om SAS reserouterade dig till senare flyg men det ursprungliga flyget faktiskt avgick (t.ex. pga felaktig information från SAS), har du starkare rättsläge. Detta klassas som denied boarding och ger automatisk rätt till ersättning."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Vad händer om jag accepterar reserouteringen men sen ångrar mig?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Du kan fortfarande kräva återbetalning istället, så länge du inte har använt biljetten ännu. Kontakta SAS och säg att du ångrat dig och vill ha full återbetalning enligt EU261 Art. 8."
                  }
                }
              ]
            })
          }}
        />
      </article>
    </LayoutSv>
  );
}