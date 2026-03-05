import { LayoutIt } from "@/components/LayoutIt";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Plane, Clock, Euro, AlertCircle, CheckCircle, FileText, Scale } from "lucide-react";

export default function AeroportoNapoliCapodichinoRisarcimento() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Aeroporto di Napoli Capodichino: Risarcimenti per Ritardi e Cancellazioni",
        "description": "Guida completa ai diritti dei passeggeri e alle procedure di risarcimento per voli in ritardo o cancellati dall'Aeroporto di Napoli Capodichino.",
        "image": "https://lotproblem.pl/og-image.png",
        "datePublished": "2026-03-05",
        "dateModified": "2026-03-05",
        "author": {
          "@type": "Organization",
          "name": "LotProblem.pl"
        },
        "publisher": {
          "@type": "Organization",
          "name": "LotProblem.pl",
          "logo": {
            "@type": "ImageObject",
            "url": "https://lotproblem.pl/og-image.png"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quali sono i diritti dei passeggeri all'Aeroporto di Napoli?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I passeggeri che partono da Napoli Capodichino hanno diritto a un risarcimento fino a 600€ per ritardi superiori a 3 ore o cancellazioni, secondo il Regolamento CE 261/2004. Include anche assistenza gratuita (pasti, bevande, comunicazioni) durante l'attesa."
            }
          },
          {
            "@type": "Question",
            "name": "Quanto tempo ho per richiedere il risarcimento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Italia hai 2 anni dalla data del volo per presentare la richiesta di risarcimento. È consigliabile agire il prima possibile per facilitare la raccolta della documentazione necessaria."
            }
          },
          {
            "@type": "Question",
            "name": "Quali compagnie operano più frequentemente da Napoli?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le principali compagnie a Napoli Capodichino sono: Ryanair, easyJet, Wizz Air, ITA Airways, Lufthansa, Volotea e Eurowings. Tutte sono soggette al Regolamento CE 261/2004 per i voli in partenza dall'UE."
            }
          },
          {
            "@type": "Question",
            "name": "Cosa fare immediatamente in caso di ritardo a Napoli?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "1) Chiedi assistenza al banco della compagnia; 2) Conserva la carta d'imbarco e tutte le ricevute; 3) Fotografa i tabelloni degli orari; 4) Richiedi per iscritto il motivo del ritardo; 5) Documenta tutto con foto e testimoni."
            }
          }
        ]
      }
    ]
  };

  return (
    <LayoutIt>
      <SEO
        title="Aeroporto Napoli Capodichino: Risarcimento Voli in Ritardo e Cancellati | Guida 2026"
        description="Volo in ritardo o cancellato da Napoli Capodichino? Scopri come ottenere fino a 600€ di risarcimento. Guida completa ai tuoi diritti e procedura passo-passo."
        url="https://lotproblem.pl/it/blog/aeroporto-napoli-capodichino-risarcimento"
        schema={JSON.stringify(schemaData)}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
            <Link href="/it/blog" className="hover:underline">Blog</Link>
            <span>→</span>
            <span>Aeroporto Napoli Capodichino</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aeroporto di Napoli Capodichino: Guida Completa ai Risarcimenti per Voli in Ritardo e Cancellati
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>📅 Aggiornato: 5 marzo 2026</span>
            <span>⏱️ Lettura: 8 minuti</span>
            <span>✈️ Aeroporto: NAP</span>
          </div>
        </header>

        {/* CTA Box 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <Euro className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Il tuo volo da Napoli è in ritardo o cancellato?</h3>
              <p className="text-gray-700 mb-4">
                Potresti avere diritto fino a <strong>600€ di risarcimento</strong>. Verifica gratuitamente in 2 minuti.
              </p>
              <a
                href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=napoli_risarcimento&utm_content=cta_top"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Verifica il Risarcimento Gratis
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            L'<strong>Aeroporto di Napoli-Capodichino</strong> (codice IATA: NAP) è il principale gateway aeroportuale della Campania e uno degli scali più trafficati del Sud Italia. Con oltre 11 milioni di passeggeri all'anno, Capodichino gestisce voli domestici e internazionali verso tutta Europa.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Come per tutti gli aeroporti europei, anche i passeggeri in partenza da Napoli sono protetti dal <strong>Regolamento CE 261/2004</strong>, che garantisce il diritto a risarcimenti sostanziali in caso di ritardi significativi o cancellazioni.
          </p>
        </section>

        {/* Sezione Diritti */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Scale className="w-6 h-6 text-blue-600" />
            I Tuoi Diritti all'Aeroporto di Napoli
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" />
                Ritardi Superiori a 3 Ore
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ <strong>250€</strong> - Voli fino a 1.500 km</li>
                <li>✅ <strong>400€</strong> - Voli UE oltre 1.500 km</li>
                <li>✅ <strong>600€</strong> - Voli extra-UE oltre 3.500 km</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Voli Cancellati
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Stesso risarcimento dei ritardi</li>
                <li>✅ Rimborso completo del biglietto</li>
                <li>✅ Volo alternativo gratuito</li>
                <li>✅ Assistenza durante l'attesa</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">Assistenza Gratuita Durante l'Attesa</h3>
            <p className="text-gray-700 mb-3">
              La compagnia aerea deve fornire gratuitamente:
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
              <li>🍽️ Pasti e bevande adeguati</li>
              <li>📞 Due chiamate o email</li>
              <li>🏨 Hotel se necessario pernottamento</li>
              <li>🚕 Trasferimento aeroporto-hotel</li>
            </ul>
          </div>
        </section>

        {/* Compagnie Aeree */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-600" />
            Principali Compagnie Aeree a Napoli Capodichino
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">Ryanair</h3>
              <p className="text-gray-700 mb-2">
                La principale compagnia low-cost a Napoli, con collegamenti verso decine di destinazioni europee. Frequenti ritardi e cancellazioni danno diritto a risarcimento.
              </p>
              <Link href="/it/blog/ryanair-italia-risarcimento" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                Guida completa Ryanair <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">easyJet</h3>
              <p className="text-gray-700 mb-2">
                Altra compagnia low-cost molto presente a Capodichino, soprattutto su rotte verso Regno Unito e Francia.
              </p>
              <Link href="/it/blog/easyjet-italia-risarcimento" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                Diritti passeggeri easyJet <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">ITA Airways</h3>
              <p className="text-gray-700 mb-2">
                La compagnia di bandiera italiana opera principalmente su collegamenti domestici da Napoli verso Milano, Roma e altre città italiane.
              </p>
              <Link href="/it/blog/ita-airways-risarcimento" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                Risarcimenti ITA Airways <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">Wizz Air</h3>
              <p className="text-gray-700 mb-2">
                Compagnia ungherese low-cost in forte espansione, con voli verso Est Europa e oltre.
              </p>
              <Link href="/it/blog/wizz-air-italia-risarcimento" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                Procedura Wizz Air <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Box 2 */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-6 rounded-lg mb-12">
          <h3 className="font-bold text-xl mb-3">Non perdere i tuoi diritti!</h3>
          <p className="text-gray-700 mb-4">
            Hai <strong>2 anni</strong> dalla data del volo per richiedere il risarcimento. Non aspettare che sia troppo tardi.
          </p>
          <a
            href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=napoli_risarcimento&utm_content=cta_middle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Richiedi Risarcimento Ora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Come Agire */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            Cosa Fare in Caso di Problema a Napoli Capodichino
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Richiedi Assistenza Immediata</h3>
                  <p className="text-gray-700">
                    Vai immediatamente al banco della compagnia aerea all'aeroporto di Napoli e chiedi assistenza (pasti, bevande, hotel se necessario). È tuo diritto e deve essere fornita gratuitamente.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Documenta Tutto</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>📸 Fotografia i tabelloni con orari di partenza e arrivo</li>
                    <li>🎫 Conserva carta d'imbarco e biglietto</li>
                    <li>🧾 Raccogli tutte le ricevute di spese extra</li>
                    <li>👥 Chiedi contatti ad altri passeggeri come testimoni</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Richiedi Conferma Scritta del Motivo</h3>
                  <p className="text-gray-700">
                    Chiedi alla compagnia una <strong>conferma scritta del motivo del ritardo o cancellazione</strong>. Questo documento è fondamentale per la tua richiesta di risarcimento.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Presenta la Richiesta di Risarcimento</h3>
                  <p className="text-gray-700">
                    Puoi farlo direttamente alla compagnia aerea oppure tramite un servizio specializzato che gestisce tutto per te. Il risarcimento può arrivare fino a 600€ a passeggero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande Frequenti (FAQ)</h2>
          
          <div className="space-y-4">
            <details className="bg-white border border-gray-200 rounded-lg p-5">
              <summary className="font-bold text-lg cursor-pointer">
                Quali sono i diritti dei passeggeri all'Aeroporto di Napoli?
              </summary>
              <p className="text-gray-700 mt-3">
                I passeggeri che partono da Napoli Capodichino hanno diritto a un risarcimento fino a 600€ per ritardi superiori a 3 ore o cancellazioni, secondo il Regolamento CE 261/2004. Include anche assistenza gratuita (pasti, bevande, comunicazioni) durante l'attesa.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-5">
              <summary className="font-bold text-lg cursor-pointer">
                Quanto tempo ho per richiedere il risarcimento?
              </summary>
              <p className="text-gray-700 mt-3">
                In Italia hai <strong>2 anni</strong> dalla data del volo per presentare la richiesta di risarcimento. È consigliabile agire il prima possibile per facilitare la raccolta della documentazione necessaria.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-5">
              <summary className="font-bold text-lg cursor-pointer">
                Quali compagnie operano più frequentemente da Napoli?
              </summary>
              <p className="text-gray-700 mt-3">
                Le principali compagnie a Napoli Capodichino sono: <strong>Ryanair, easyJet, Wizz Air, ITA Airways, Lufthansa, Volotea e Eurowings</strong>. Tutte sono soggette al Regolamento CE 261/2004 per i voli in partenza dall'UE.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-5">
              <summary className="font-bold text-lg cursor-pointer">
                Cosa fare immediatamente in caso di ritardo a Napoli?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Passaggi immediati:</strong>
              </p>
              <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-1">
                <li>Chiedi assistenza al banco della compagnia</li>
                <li>Conserva la carta d'imbarco e tutte le ricevute</li>
                <li>Fotografa i tabelloni degli orari</li>
                <li>Richiedi per iscritto il motivo del ritardo</li>
                <li>Documenta tutto con foto e testimoni</li>
              </ol>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-5">
              <summary className="font-bold text-lg cursor-pointer">
                Il risarcimento è compatibile con il rimborso del biglietto?
              </summary>
              <p className="text-gray-700 mt-3">
                No, <strong>devi scegliere</strong>: puoi richiedere il rimborso completo del biglietto OPPURE accettare un volo alternativo e ricevere il risarcimento per il disagio. Non puoi avere entrambi per lo stesso volo.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-5">
              <summary className="font-bold text-lg cursor-pointer">
                Le circostanze straordinarie escludono sempre il risarcimento?
              </summary>
              <p className="text-gray-700 mt-3">
                Sì, se il ritardo o la cancellazione sono dovuti a <strong>circostanze straordinarie</strong> (condizioni meteorologiche estreme, scioperi, emergenze mediche, restrizioni di controllo del traffico aereo), la compagnia non è obbligata a pagare il risarcimento. Tuttavia, deve comunque fornire assistenza.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Box 3 - Final */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ottieni il Tuo Risarcimento in 3 Semplici Passaggi
            </h2>
            <p className="text-lg mb-6 text-blue-100">
              ClaimWinger gestisce tutto per te - nessun rischio, paghi solo se vinciamo.
            </p>
            <a
              href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=napoli_risarcimento&utm_content=cta_bottom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Verifica Gratis il Tuo Risarcimento
              <ArrowRight className="w-6 h-6" />
            </a>
            <p className="text-sm text-blue-100 mt-4">
              ✅ Nessun costo anticipato • ✅ Processo 100% online • ✅ Esperti legali a tua disposizione
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Articoli Correlati</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/it/blog/aeroporto-roma-fiumicino-ritardi" className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-2">Aeroporto Roma Fiumicino</h3>
              <p className="text-gray-600 text-sm">Diritti e risarcimenti per ritardi e cancellazioni da FCO</p>
            </Link>
            <Link href="/it/blog/aeroporto-milano-malpensa-ritardi" className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-2">Aeroporto Milano Malpensa</h3>
              <p className="text-gray-600 text-sm">Guida completa ai risarcimenti per voli da MXP</p>
            </Link>
            <Link href="/it/blog/regolamento-ce-261-2004-spiegato" className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-2">Regolamento CE 261/2004</h3>
              <p className="text-gray-600 text-sm">Tutto quello che devi sapere sulla normativa europea</p>
            </Link>
            <Link href="/it/blog/ryanair-italia-risarcimento" className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-600 transition-colors">
              <h3 className="font-bold text-lg mb-2">Risarcimento Ryanair</h3>
              <p className="text-gray-600 text-sm">Come ottenere il risarcimento da Ryanair in Italia</p>
            </Link>
          </div>
        </section>
      </article>
    </LayoutIt>
  );
}