import { LayoutIt } from "@/components/LayoutIt";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Euro, CheckCircle2, AlertTriangle, Plane, Calculator } from "lucide-react";

export default function Ritardo3OreRegolaRisarcimento() {
  return (
    <LayoutIt>
      <SEO
        title="Ritardo di 3 Ore: La Regola del Risarcimento Volo Spiegata [2026]"
        description="Scopri quando scatta il diritto al risarcimento per ritardi superiori a 3 ore. Guida completa con calcoli, eccezioni e procedure per ottenere fino a 600€."
        url="https://problemlot.com/it/blog/ritardo-3-ore-regola-risarcimento"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Ritardo di 3 Ore: La Regola del Risarcimento Volo Spiegata",
            "description": "Guida definitiva alla regola delle 3 ore per il risarcimento voli in ritardo",
            "author": {
              "@type": "Organization",
              "name": "LotProblem.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://problemlot.com/og-image.png"
              }
            },
            "datePublished": "2026-03-05",
            "dateModified": "2026-03-05",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://problemlot.com/it/blog/ritardo-3-ore-regola-risarcimento"
            }
          })
        }}
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
                "name": "Perché 3 ore e non 2 o 4?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Il legislatore europeo ha scelto 3 ore come soglia di equilibrio tra i diritti dei passeggeri e la sostenibilità economica delle compagnie aeree. Ritardi inferiori a 3 ore sono considerati 'inconvenienti tollerabili', mentre oltre 3 ore il disagio giustifica una compensazione economica."
                }
              },
              {
                "@type": "Question",
                "name": "Come si calcolano esattamente le 3 ore di ritardo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Il ritardo si misura dall'orario previsto di arrivo all'orario effettivo di arrivo alla destinazione finale. L'arrivo è quando almeno una porta dell'aereo viene aperta, NON quando l'aereo atterra. Esempio: se dovevi arrivare alle 15:00 e arrivi alle 18:05, hai 3 ore e 5 minuti di ritardo = diritto al risarcimento."
                }
              },
              {
                "@type": "Question",
                "name": "Se il volo parte in ritardo ma arriva in orario, ho diritto al risarcimento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Conta solo l'orario di arrivo alla destinazione finale. Se il pilota recupera il ritardo in volo e arrivi con meno di 3 ore di ritardo, non hai diritto alla compensazione. Tuttavia, se il ritardo alla partenza supera le 2 ore, hai diritto all'assistenza (pasti, bevande)."
                }
              },
              {
                "@type": "Question",
                "name": "Cosa succede se perdo la coincidenza a causa del primo ritardo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Se i voli sono su un'unica prenotazione e arrivi alla destinazione finale con 3+ ore di ritardo, hai diritto al risarcimento. Il calcolo si fa sull'orario finale, non sul singolo volo. Se invece hai prenotazioni separate, purtroppo non hai diritto automatico al risarcimento per il volo perso."
                }
              },
              {
                "@type": "Question",
                "name": "Il risarcimento è automatico o devo richiederlo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Devi richiederlo attivamente. Le compagnie aeree NON pagano automaticamente. Hai fino a 2-3 anni (dipende dal paese) per presentare il reclamo. Prima lo fai, meglio è, perché alcune compagnie potrebbero eliminare i dati del volo dopo qualche mese."
                }
              },
              {
                "@type": "Question",
                "name": "Quanto tempo ci vuole per ricevere il risarcimento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dipende dalla compagnia. Alcune (soprattutto low-cost) possono impiegare 2-6 mesi. Compagnie tradizionali sono generalmente più veloci (4-8 settimane). Se la compagnia rifiuta o non risponde, puoi rivolgerti all'autorità nazionale (ENAC in Italia) o procedere legalmente."
                }
              },
              {
                "@type": "Question",
                "name": "Posso chiedere sia il rimborso del biglietto che il risarcimento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dipende. Se scegli il rimborso completo del biglietto (rinunciando al volo), NON hai diritto al risarcimento. Se invece completi il viaggio (anche in ritardo), puoi chiedere il risarcimento ma NON il rimborso. Devi scegliere: o rimborso completo OPPURE volo + risarcimento."
                }
              },
              {
                "@type": "Question",
                "name": "Il risarcimento è tassabile in Italia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Il risarcimento per ritardo volo secondo CE 261/2004 è considerato 'compensazione per disagio' e NON è soggetto a tassazione IRPEF in Italia. Riceverai l'intero importo (€250, €400 o €600) senza detrazioni fiscali."
                }
              }
            ]
          })
        }}
      />

      <article className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/it" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/it/blog" className="hover:text-blue-600">Blog</Link>
            <span className="mx-2">/</span>
            <span>Ritardo 3 Ore</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Clock className="h-4 w-4" />
              <time dateTime="2026-03-05">5 marzo 2026</time>
              <span className="mx-2">•</span>
              <span>12 min di lettura</span>
              <span className="mx-2">•</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                Guide Pratiche
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ritardo di 3 Ore: La Regola del Risarcimento Volo Spiegata
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Tutto quello che devi sapere sulla soglia delle 3 ore: come si calcola, quando scatta il diritto 
              al risarcimento, quanto puoi ottenere e come richiederlo efficacemente.
            </p>
          </header>

          {/* Key Highlight */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
            <div className="flex items-start gap-3">
              <Euro className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Regola d'Oro del CE 261/2004</h3>
                <p className="text-blue-800">
                  Se il tuo volo arriva a destinazione con <strong>3 ore o più di ritardo</strong>, hai diritto 
                  a un risarcimento da <strong>€250 fino a €600</strong>, a meno che non ci siano circostanze 
                  straordinarie comprovate.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Clock className="h-8 w-8 text-blue-600" />
              Perché Proprio 3 Ore?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Il <strong>Regolamento CE 261/2004</strong> stabilisce che i passeggeri hanno diritto a una compensazione 
              economica quando arrivano a destinazione con un ritardo di <strong>3 ore o superiore</strong>. 
              Ma perché questa soglia specifica?
            </p>

            <div className="bg-gray-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-gray-900 mb-4">🎯 La Logica Dietro le 3 Ore</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Equilibrio tra Diritti e Sostenibilità</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Il legislatore europeo ha bilanciato i diritti dei passeggeri con la sostenibilità economica 
                      delle compagnie aeree. Ritardi minori sono considerati "inconvenienti tollerabili".
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Giurisprudenza Consolidata</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      La Corte di Giustizia UE (sentenza C-402/07) ha equiparato i ritardi di 3+ ore alle 
                      cancellazioni in termini di diritto al risarcimento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Disagio Significativo</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Studi dimostrano che dopo 3 ore di attesa, il disagio psicologico e i danni pratici 
                      (impegni persi, hotel, taxi) diventano significativi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="my-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Il Tuo Volo Ha Avuto 3+ Ore di Ritardo?</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Verifica in 2 minuti se hai diritto al risarcimento e quanto puoi ottenere (fino a €600).
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=3hour_rule"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Calcola il Tuo Risarcimento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Calculator className="h-8 w-8 text-green-600" />
              Come Si Calcolano Esattamente le 3 Ore?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Attenzione:</strong> Molti passeggeri calcolano male il ritardo. Ecco la procedura corretta 
              secondo il CE 261/2004:
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h3 className="font-bold text-yellow-900 mb-4">⚠️ Metodo di Calcolo Ufficiale</h3>
              
              <div className="space-y-4 text-gray-800">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold mb-2">1️⃣ Orario Previsto di Arrivo (Scheduled Arrival Time)</p>
                  <p className="text-sm">
                    L'orario indicato sul biglietto originale quando hai prenotato. Questo è il punto di partenza.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold mb-2">2️⃣ Orario Effettivo di Arrivo (Actual Arrival Time)</p>
                  <p className="text-sm">
                    L'orario in cui <strong>almeno una porta dell'aereo viene aperta</strong> a destinazione. 
                    <span className="text-red-600 font-semibold"> NON quando l'aereo atterra!</span>
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold mb-2">3️⃣ Calcolo del Ritardo</p>
                  <p className="text-sm">
                    <strong>Ritardo = Arrivo Effettivo - Arrivo Previsto</strong>
                  </p>
                  <p className="text-sm mt-2">
                    Se il risultato è <strong>≥ 3 ore</strong>, hai diritto al risarcimento.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Esempi Pratici di Calcolo</h3>

            <div className="space-y-6 my-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h4 className="font-bold text-green-900 mb-3">✅ Esempio 1: Ritardo Semplice</h4>
                <div className="space-y-2 text-gray-800">
                  <p>• <strong>Volo:</strong> Milano Malpensa → Roma Fiumicino</p>
                  <p>• <strong>Arrivo previsto:</strong> 15:00</p>
                  <p>• <strong>Arrivo effettivo:</strong> 18:10 (porta aperta)</p>
                  <p className="font-semibold text-green-800 mt-3">
                    → Ritardo: 3 ore e 10 minuti → <strong>Diritto al risarcimento: €250</strong>
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h4 className="font-bold text-green-900 mb-3">✅ Esempio 2: Volo con Coincidenza</h4>
                <div className="space-y-2 text-gray-800">
                  <p>• <strong>Volo 1:</strong> Napoli → Amsterdam (ritardo 1 ora)</p>
                  <p>• <strong>Volo 2:</strong> Amsterdam → New York (perso a causa del ritardo)</p>
                  <p>• <strong>Arrivo previsto a NY:</strong> 20:00</p>
                  <p>• <strong>Arrivo effettivo a NY:</strong> 02:30 (giorno dopo)</p>
                  <p className="font-semibold text-green-800 mt-3">
                    → Ritardo totale: 6 ore e 30 minuti → <strong>Diritto al risarcimento: €600</strong>
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h4 className="font-bold text-red-900 mb-3">❌ Esempio 3: Ritardo Recuperato in Volo</h4>
                <div className="space-y-2 text-gray-800">
                  <p>• <strong>Volo:</strong> Roma → Barcellona</p>
                  <p>• <strong>Partenza prevista:</strong> 10:00</p>
                  <p>• <strong>Partenza effettiva:</strong> 12:45 (ritardo 2h 45min)</p>
                  <p>• <strong>Arrivo previsto:</strong> 12:30</p>
                  <p>• <strong>Arrivo effettivo:</strong> 15:20</p>
                  <p className="font-semibold text-red-800 mt-3">
                    → Ritardo all'arrivo: 2 ore e 50 minuti → <strong>Nessun risarcimento</strong> 
                    (sotto le 3 ore)
                  </p>
                  <p className="text-sm text-red-700 mt-2">
                    Nota: Hai comunque diritto all'assistenza (pasti/bevande) perché il ritardo alla partenza 
                    era &gt;2 ore.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA 2 */}
            <div className="my-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Non Sei Sicuro di Quanto Hai Diritto?</h3>
              <p className="text-green-100 mb-6 text-lg">
                Inserisci i dettagli del tuo volo e calcoleremo automaticamente l'importo esatto del risarcimento.
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=compensation_calculator"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
              >
                Usa il Calcolatore Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-blue-600" />
              Importi del Risarcimento: Quanto Puoi Ottenere?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              L'importo del risarcimento dipende dalla <strong>distanza del volo</strong>, NON dal prezzo del biglietto:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">€250</div>
                <div className="text-sm text-gray-700 font-semibold mb-3">Voli Corti</div>
                <div className="text-xs text-gray-600">
                  ✈️ Distanza ≤ 1.500 km
                  <br />
                  <span className="text-gray-500">
                    Es: Roma-Barcellona, Milano-Parigi, Napoli-Vienna
                  </span>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">€400</div>
                <div className="text-sm text-gray-700 font-semibold mb-3">Voli Medi</div>
                <div className="text-xs text-gray-600">
                  ✈️ Distanza 1.500-3.500 km
                  <br />
                  <span className="text-gray-500">
                    Es: Roma-Mosca, Milano-Istanbul, Napoli-Marocco
                  </span>
                </div>
              </div>

              <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">€600</div>
                <div className="text-sm text-gray-700 font-semibold mb-3">Voli Lunghi</div>
                <div className="text-xs text-gray-600">
                  ✈️ Distanza &gt; 3.500 km
                  <br />
                  <span className="text-gray-500">
                    Es: Roma-New York, Milano-Dubai, Napoli-Tokyo
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Eccezione per Voli Extra-UE &gt;3.500 km</h3>
                  <p className="text-amber-800 text-sm">
                    Per voli oltre 3.500 km verso destinazioni extra-UE, se il ritardo è tra 3 e 4 ore, 
                    il risarcimento può essere ridotto del 50% (€300 invece di €600). Se supera le 4 ore, 
                    spetta l'intero importo di €600.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Plane className="h-8 w-8 text-blue-600" />
              Casi Particolari e Domande Frequenti
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">🔄 Volo in Ritardo ma Recuperato in Aria</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se il volo parte con grande ritardo ma il pilota recupera tempo e arrivi con meno di 3 ore di ritardo 
              a destinazione, <strong>non hai diritto al risarcimento</strong>. Conta solo l'arrivo finale.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Però:</strong> Se il ritardo alla partenza era superiore a 2 ore, hai comunque diritto 
              all'assistenza (pasti, bevande, hotel se necessario) anche se poi recuperi in volo.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">🔗 Coincidenze Perse</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se perdi una coincidenza a causa del ritardo del primo volo, il calcolo del risarcimento si basa 
              sull'<strong>arrivo alla destinazione finale</strong>, non sul singolo tratto.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl my-6">
              <p className="text-gray-800 font-semibold mb-3">Condizioni per il risarcimento su coincidenze:</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>I voli devono essere su <strong>unica prenotazione</strong> (stesso codice di prenotazione)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>L'arrivo finale deve avere ≥3 ore di ritardo rispetto all'orario previsto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Il ritardo deve essere causato dalla compagnia (non da te che sei arrivato tardi al check-in)</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">🛂 Voli Extra-UE</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Il CE 261/2004 si applica a:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✅ Tutti i voli in partenza da aeroporti UE (qualsiasi compagnia)</li>
              <li>✅ Voli in arrivo nell'UE operati da compagnie UE</li>
              <li>❌ Voli extra-UE → extra-UE (es: New York-Tokyo con compagnia non-UE)</li>
            </ul>

            {/* CTA 3 */}
            <div className="my-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Hai Perso una Coincidenza?</h3>
              <p className="text-purple-100 mb-6 text-lg">
                Verifica se hai diritto al risarcimento per l'arrivo in ritardo alla destinazione finale.
              </p>
              <Link
                href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=missed_connection"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl"
              >
                Verifica il Tuo Caso
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Come Richiedere il Risarcimento: Procedura Passo-Passo
            </h2>

            <div className="bg-gray-50 p-6 rounded-xl my-8">
              <h3 className="font-bold text-gray-900 mb-4">📋 Procedura Completa</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Raccogli i Documenti</h4>
                    <ul className="text-gray-700 text-sm mt-2 space-y-1">
                      <li>• Carta d'imbarco (boarding pass)</li>
                      <li>• Conferma di prenotazione</li>
                      <li>• Certificato di ritardo dalla compagnia (se disponibile)</li>
                      <li>• Screenshot o foto del tabellone partenze/arrivi</li>
                      <li>• Eventuali scontrini di spese sostenute</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Compila il Reclamo</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Scrivi alla compagnia aerea indicando: numero volo, data, orario previsto/effettivo di arrivo, 
                      importo richiesto, coordinate bancarie per il pagamento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Invia il Reclamo</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Via email (raccomandata) o tramite modulo online della compagnia. Conserva sempre una copia 
                      della richiesta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Attendi la Risposta</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Le compagnie hanno generalmente 6-8 settimane per rispondere. Se rifiutano o non rispondono, 
                      puoi rivolgerti all'ENAC o procedere legalmente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Escalation (se necessario)</h4>
                    <p className="text-gray-700 text-sm mt-1">
                      Se la compagnia rifiuta illegittimamente o ignora il reclamo, contatta l'autorità nazionale 
                      (ENAC in Italia) o considera servizi specializzati di recupero crediti.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Eccezioni: Quando NON Hai Diritto al Risarcimento
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Anche con 3+ ore di ritardo, ci sono casi in cui il risarcimento non è dovuto:
            </p>

            <div className="space-y-4 my-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ Circostanze Straordinarie Comprovate</h3>
                <p className="text-gray-800 text-sm">
                  Eventi imprevedibili e inevitabili: maltempo eccezionale (uragano), scioperi ATC, 
                  emergenze di sicurezza, restrizioni spazio aereo. La compagnia deve provarlo documentalmente.
                </p>
                <Link href="/it/blog/circostanze-straordinarie-spiegate" 
                      className="text-sm text-red-700 hover:text-red-900 font-semibold mt-2 inline-block">
                  → Leggi di più sulle circostanze straordinarie
                </Link>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ Notifica Anticipata (14+ giorni)</h3>
                <p className="text-gray-800 text-sm">
                  Se la compagnia ti ha informato del ritardo/cancellazione con almeno 14 giorni di anticipo 
                  e ti ha offerto alternative ragionevoli, non hai diritto al risarcimento.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ Rifiuto di Riprotezione</h3>
                <p className="text-gray-800 text-sm">
                  Se la compagnia ti offre un volo alternativo che ti farebbe arrivare con meno di 3 ore di ritardo 
                  e tu rifiuti, perdi il diritto al risarcimento.
                </p>
              </div>
            </div>

            {/* CTA 4 - Final */}
            <div className="my-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Pronto a Richiedere il Tuo Risarcimento?</h3>
                <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                  Il 78% dei passeggeri con diritto al risarcimento non lo richiede mai. Non lasciare sul tavolo 
                  fino a €600 che ti spettano di diritto.
                </p>
                <Link
                  href="https://claimwinger.com/it?utm_source=blog&utm_medium=article&utm_campaign=final_cta_3hour"
                  className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
                >
                  Inizia la Tua Richiesta Ora
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
                <p className="text-blue-200 text-sm mt-4">
                  ✓ Procedura online in 3 minuti • ✓ Paghi solo se vinciamo • ✓ Nessun rischio
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-16 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Domande Frequenti (FAQ)</h2>
              
              <div className="space-y-6">
                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Perché 3 ore e non 2 o 4?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Il legislatore europeo ha scelto 3 ore come soglia di equilibrio tra i diritti dei passeggeri 
                    e la sostenibilità economica delle compagnie aeree. Ritardi inferiori a 3 ore sono considerati 
                    "inconvenienti tollerabili", mentre oltre 3 ore il disagio giustifica una compensazione economica.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Come si calcolano esattamente le 3 ore di ritardo?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Il ritardo si misura dall'orario previsto di arrivo all'orario effettivo di arrivo alla 
                    destinazione finale. L'arrivo è quando almeno una porta dell'aereo viene aperta, NON quando 
                    l'aereo atterra. Esempio: se dovevi arrivare alle 15:00 e arrivi alle 18:05, hai 3 ore e 5 
                    minuti di ritardo = diritto al risarcimento.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Se il volo parte in ritardo ma arriva in orario, ho diritto al risarcimento?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    No. Conta solo l'orario di arrivo alla destinazione finale. Se il pilota recupera il ritardo 
                    in volo e arrivi con meno di 3 ore di ritardo, non hai diritto alla compensazione. Tuttavia, 
                    se il ritardo alla partenza supera le 2 ore, hai diritto all'assistenza (pasti, bevande).
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Cosa succede se perdo la coincidenza a causa del primo ritardo?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Se i voli sono su un'unica prenotazione e arrivi alla destinazione finale con 3+ ore di ritardo, 
                    hai diritto al risarcimento. Il calcolo si fa sull'orario finale, non sul singolo volo. Se 
                    invece hai prenotazioni separate, purtroppo non hai diritto automatico al risarcimento per il 
                    volo perso.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Il risarcimento è automatico o devo richiederlo?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Devi richiederlo attivamente. Le compagnie aeree NON pagano automaticamente. Hai fino a 2-3 anni 
                    (dipende dal paese) per presentare il reclamo. Prima lo fai, meglio è, perché alcune compagnie 
                    potrebbero eliminare i dati del volo dopo qualche mese.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Quanto tempo ci vuole per ricevere il risarcimento?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Dipende dalla compagnia. Alcune (soprattutto low-cost) possono impiegare 2-6 mesi. Compagnie 
                    tradizionali sono generalmente più veloci (4-8 settimane). Se la compagnia rifiuta o non risponde, 
                    puoi rivolgerti all'autorità nazionale (ENAC in Italia) o procedere legalmente.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Posso chiedere sia il rimborso del biglietto che il risarcimento?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Dipende. Se scegli il rimborso completo del biglietto (rinunciando al volo), NON hai diritto al 
                    risarcimento. Se invece completi il viaggio (anche in ritardo), puoi chiedere il risarcimento 
                    ma NON il rimborso. Devi scegliere: o rimborso completo OPPURE volo + risarcimento.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-xl border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                    Il risarcimento è tassabile in Italia?
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    No. Il risarcimento per ritardo volo secondo CE 261/2004 è considerato "compensazione per disagio" 
                    e NON è soggetto a tassazione IRPEF in Italia. Riceverai l'intero importo (€250, €400 o €600) 
                    senza detrazioni fiscali.
                  </p>
                </details>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articoli Correlati</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/it/blog/regolamento-ce-261-2004-spiegato" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Regolamento CE 261/2004</h3>
                  <p className="text-sm text-gray-600">Guida completa ai diritti dei passeggeri</p>
                </Link>

                <Link href="/it/blog/circostanze-straordinarie-spiegate" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Circostanze Straordinarie</h3>
                  <p className="text-sm text-gray-600">Quando la compagnia può rifiutare il risarcimento</p>
                </Link>

                <Link href="/it/blog/come-presentare-reclamo-guida-completa" 
                      className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Come Presentare Reclamo</h3>
                  <p className="text-sm text-gray-600">Procedura step-by-step per ottenere il risarcimento</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </LayoutIt>
  );
}
