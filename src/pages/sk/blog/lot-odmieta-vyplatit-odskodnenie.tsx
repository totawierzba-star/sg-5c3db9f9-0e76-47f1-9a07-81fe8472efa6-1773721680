import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  XCircle, 
  AlertTriangle, 
  CheckCircle2, 
  Shield,
  FileText,
  ArrowRight,
  Scale,
  MessageSquare
} from "lucide-react";
import Link from "next/link";

export default function LOTOdmietaVyplatitOdskodnenie() {
  return (
    <LayoutSk>
      <SEO
        title="LOT Odmieta Vyplatiť Odškodnenie – Čo Robiť Ďalej? [Riešenia 2026]"
        description="LOT zamietol vašu žiadosť o odškodnenie? ✓ Pozrite si 5 krokov ako bojovať ✓ Najčastejšie výhovorky LOT ✓ Ako ich prelomiť ✓ 98% úspešnosť s ClaimWinger"
        url="https://lotproblem.pl/sk/blog/lot-odmieta-vyplatit-odskodnenie"
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "LOT Odmieta Vyplatiť Odškodnenie – Čo Robiť Ďalej?",
            "description": "Kompletný sprievodca riešením situácie, keď LOT Polish Airlines zamietne vašu žiadosť o odškodnenie.",
            "image": "https://lotproblem.pl/og-image.png",
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
            },
            "datePublished": "2026-03-05",
            "dateModified": "2026-03-05"
          })
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>LOT odmieta vyplatiť odškodnenie</span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              LOT Odmieta Vyplatiť Odškodnenie – Čo Robiť Ďalej?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              LOT zamietol vašu žiadosť o odškodnenie? Zistite, prečo to robia a ako sa proti tomu brániť – krok za krokom.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Aktualizované: 5. marca 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Čítanie: 13 minút</span>
              </div>
            </div>
          </header>

          {/* AI Overview */}
          <div className="mb-12 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">🎯 Kľúčová pravda (okamžitý prehľad)</h2>
                <p className="text-red-100 text-lg">
                  LOT zamietne 70-80% individuálnych žiadostí → ale to NEZNAMENÁ, že nemáte nárok!
                </p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold mb-4 text-xl">⚠️ Najčastejšie výhovorky LOT (a pravda):</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">❌ LOT tvrdí:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• "Technická porucha = mimoriadna okolnosť"</li>
                    <li>• "Informovali sme vás viac ako 14 dní vopred"</li>
                    <li>• "Neposkytli ste dostatočné dôkazy"</li>
                    <li>• "Vaša žiadosť je premlčaná"</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-green-300">✅ Realita:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Väčšina technických porúch NIE JE mimoriadna</li>
                    <li>• Časté klamstvo – overte si dátum</li>
                    <li>• LOT má povinnosť overiť si údaje</li>
                    <li>• Slovensko: 2 roky, Poľsko: 3 roky</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA 1 */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold mb-4 text-center">LOT zamietol vašu žiadosť?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                ClaimWinger dokáže prelomiť 98% zamietnutí LOT – bez rizika, platíte len pri úspechu
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="https://claimwinger.com/sk?utm_source=blog&utm_medium=article&utm_campaign=lot_odmieta_cta1" target="_blank" rel="noopener noreferrer">
                    Prelomiť zamietnutie LOT <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                ✓ 98% úspešnosť ✓ Bez rizika ✓ Súdne konanie v cene
              </p>
            </Card>
          </div>

          {/* Table of Contents */}
          <Card className="mb-12 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Obsah článku
            </h2>
            <ul className="space-y-2">
              <li><a href="#preco-odmieta" className="text-blue-600 hover:underline">1. Prečo LOT odmieta vyplatiť odškodnenie?</a></li>
              <li><a href="#najcastejsie-vyhovorky" className="text-blue-600 hover:underline">2. Najčastejšie výhovorky LOT a ako ich prelomiť</a></li>
              <li><a href="#5-krokov" className="text-blue-600 hover:underline">3. 5 krokov po zamietnutí žiadosti</a></li>
              <li><a href="#kedy-sa-vzdat" className="text-blue-600 hover:underline">4. Kedy má LOT skutočne pravdu?</a></li>
              <li><a href="#claimwinger" className="text-blue-600 hover:underline">5. Prečo ClaimWinger dokáže prelomiť zamietnutia?</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">6. Často kladené otázky</a></li>
            </ul>
          </Card>

          {/* Section 1: Prečo LOT odmieta */}
          <section id="preco-odmieta" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-red-600" />
              Prečo LOT odmieta vyplatiť odškodnenie?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                <strong>Tvrdá pravda:</strong> LOT Polish Airlines (ako väčšina leteckých spoločností) <strong>systematicky zamieta 70-80% individuálnych žiadostí o odškodnenie</strong> – aj keď cestujúci má 100% nárok. Prečo?
              </p>

              <Card className="p-6 mb-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600">
                <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-300">💰 Ekonomická motivácia LOT:</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Zamietnutie individuálnych žiadostí = nižšie náklady</p>
                      <p className="text-sm mt-1">
                        LOT vie, že <strong>80-90% ľudí sa vzdá</strong> po prvom zamietnutí. Ak LOT automaticky zamietne 1000 žiadostí, len 100-200 ľudí bude pokračovať ďalej.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Zdĺhavý proces = odradzuje cestujúcich</p>
                      <p className="text-sm mt-1">
                        LOT často nereaguje 2-3 mesiace, potom pošle vágne zamietnutie. Mnohí ľudia si povedia "nie je to mi za to" a vzdajú sa.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Žiadna sankcia za nesprávne zamietnutie</p>
                      <p className="text-sm mt-1">
                        Ak LOT zamietne žiadosť nesprávne a cestujúci to nenapadne, <strong>LOT nič neplatí</strong>. Ak cestujúci ide na súd a vyhráva, LOT musí zaplatiť len odškodnenie (žiadne penále).
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded-lg p-6 my-6">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                  💡 Dôležité: Zamietnutie ≠ Nemáte nárok!
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Zamietnutie žiadosti LOT je len prvý krok.</strong> Väčšina zamietnutí je založená na <strong>nesprávnej interpretácii EU261</strong> alebo <strong>priamom klamstve</strong>. Nikdy sa nevzdávajte po prvom zamietnutí – existujú ďalšie kroky!
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Najčastejšie výhovorky */}
          <section id="najcastejsie-vyhovorky" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
              Najčastejšie výhovorky LOT a ako ich prelomiť
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                LOT používa niekoľko <strong>štandardných výhovoriek</strong> na zamietnutie žiadostí. Tu sú najčastejšie + ako ich napadnúť:
              </p>

              <div className="space-y-6">
                {/* Výhovorka 1 */}
                <Card className="p-6 bg-white dark:bg-gray-800 border-l-4 border-red-600">
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-3">
                    ❌ Výhovorka #1: "Technická porucha = mimoriadna okolnosť"
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                    <strong>Čo LOT tvrdí:</strong> "Oneskorenie/zrušenie bolo spôsobené nepredvídateľnou technickou poruchou, ktorá je mimo našej kontroly, preto nemáme povinnosť vyplatiť odškodnenie."
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <p className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Ako to prelomiť:</p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Európsky súdny dvor rozhodol, že <strong>technická porucha je mimoriadna okolnosť len ak je "nepredvídateľná a nezistiteľná bežnou údržbou"</strong></li>
                      <li>• LOT má povinnosť dokázať, že išlo o skrytú výrobnú chybu – to sa im málokedy podarí</li>
                      <li>• Požadujte <strong>podrobný technický report</strong> – LOT ho zvyčajne neposkytne, čo oslabuje ich argumentáciu</li>
                      <li>• ClaimWinger má databázu tisícov prípadov a vie, kedy je technická porucha platná výhovorka (zriedka!)</li>
                    </ul>
                  </div>
                </Card>

                {/* Výhovorka 2 */}
                <Card className="p-6 bg-white dark:bg-gray-800 border-l-4 border-red-600">
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-3">
                    ❌ Výhovorka #2: "Informovali sme vás 14+ dní vopred"
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                    <strong>Čo LOT tvrdí:</strong> "Zrušenie letu bolo oznámené viac ako 14 dní pred plánovaným odletom, preto nemáte nárok na odškodnenie."
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <p className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Ako to prelomiť:</p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Skontrolujte <strong>presný dátum emailu/SMS o zrušení</strong> – LOT často klamú!</li>
                      <li>• Aj ak LOT informoval 14+ dní vopred, <strong>stále máte nárok na odškodnenie, ak náhradný let prichádza/odlieta v úplne inom čase</strong></li>
                      <li>• Požadujte od LOT <strong>dôkaz o odoslaní notifikácie</strong> (email headers, SMS timestamp)</li>
                      <li>• Ak notifikácia prišla po rezervácii (napr. kúpili ste letenku 6 mesiacov vopred, LOT zrušil let a oznámil to 15 dní pred odletom), máte nárok!</li>
                    </ul>
                  </div>
                </Card>

                {/* Výhovorka 3 */}
                <Card className="p-6 bg-white dark:bg-gray-800 border-l-4 border-red-600">
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-3">
                    ❌ Výhovorka #3: "Neposkytli ste dostatočné dôkazy"
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                    <strong>Čo LOT tvrdí:</strong> "Vaša žiadosť neobsahuje všetky potrebné dokumenty alebo informácie, preto ju nemôžeme spracovať."
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <p className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Ako to prelomiť:</p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• <strong>LOT má povinnosť overiť si údaje vo svojom systéme</strong> – boarding pass, booking, oneskorenie sú všetky v ich databáze!</li>
                      <li>• Ak LOT tvrdí, že chýba dokument, pýtajte sa konkrétne: "Ktorý dokument?" a pošlite ho znova</li>
                      <li>• ClaimWinger vie presne, aké dokumenty LOT akceptuje a ako ich formátovať</li>
                      <li>• V najhoršom prípade: súd môže nariadiť LOT poskytnúť dôkazy z ich vlastného systému</li>
                    </ul>
                  </div>
                </Card>

                {/* Výhovorka 4 */}
                <Card className="p-6 bg-white dark:bg-gray-800 border-l-4 border-red-600">
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-3">
                    ❌ Výhovorka #4: "Vaša žiadosť je premlčaná"
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                    <strong>Čo LOT tvrdí:</strong> "Od dátumu letu uplynulo príliš veľa času, vaša žiadosť je premlčaná."
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <p className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Ako to prelomiť:</p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• <strong>Slovensko: 2 roky</strong> premlčacia lehota (od dátumu letu)</li>
                      <li>• <strong>Poľsko (LOT sídlo): 3 roky</strong> premlčacia lehota</li>
                      <li>• LOT často tvrdí premlčanie, aj keď lehota ešte neuplynula – skontrolujte si presný dátum!</li>
                      <li>• Ak ste poslali prvú žiadosť LOT pred uplynutím lehoty, premlčanie sa <strong>prerušuje</strong> a máte ďalší čas</li>
                    </ul>
                  </div>
                </Card>

                {/* Výhovorka 5 */}
                <Card className="p-6 bg-white dark:bg-gray-800 border-l-4 border-red-600">
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-3">
                    ❌ Výhovorka #5: "Nebolo to v našej kontrole"
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                    <strong>Čo LOT tvrdí:</strong> "Oneskorenie/zrušenie bolo spôsobené okolnosťami mimo našej kontroly (počasie, štrajk, bezpečnostná hrozba)."
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <p className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Ako to prelomiť:</p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Požadujte <strong>konkrétne dôkazy</strong>: meteorologické správy, oznámenia letiskového úradu o štrajku, bezpečnostné výstrahy</li>
                      <li>• Skontrolujte <strong>iné lety v rovnakom čase</strong> – ak odlietali bez problémov, LOT klame!</li>
                      <li>• <strong>Štrajk LOT zamestnancov NIE JE mimoriadna okolnosť</strong> (iba štrajk letiskového personálu mimo LOT)</li>
                      <li>• Extrémne počasie musí byť <strong>skutočne extrémne</strong> (hurikán, snežná kalamita) – bežný dážď/vietor nestačí</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 3: 5 krokov */}
          <section id="5-krokov" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              5 krokov po zamietnutí žiadosti
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Dostali ste zamietnutie od LOT? <strong>Nevzdávajte sa!</strong> Postupujte podľa týchto krokov:
              </p>

              <div className="space-y-4">
                <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Analyzujte dôvod zamietnutia</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Prečítajte si zamietnutie LOT pozorne a identifikujte, ktorú výhovorku použili (technická porucha, mimoriadne okolnosti, premlčanie, atď.)
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        <strong>Tip:</strong> Uložte si email o zamietnutí – budete ho potrebovať ako dôkaz, ak pôjdete na súd.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Zhromaždite protiargumenty</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Použite informácie z predchádzajúcej sekcie "Najčastejšie výhovorky" a pripravte si odpoveď. Zhromaždite všetky relevantné dôkazy (boarding pass, email o zrušení, meteorologické údaje, atď.)
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Pošlite formálnu námietku LOT</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Napíšte email na <strong>customerrelations@lot.pl</strong> s názvom "Formálna námietka proti zamietnutiu odškodnenia – [vaše PNR]". Uveďte prečo nesúhlasíte s ich zamietnutím a požadujte prehodnotenie.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Kontaktujte národný orgán (CAA)</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Ak LOT nereaguje alebo opäť zamietne, kontaktujte <strong>Úrad civilného letectva Slovenskej republiky</strong> (CAA SR) alebo poľský CAA. Môžu sprostredkovať medzi vami a LOT.
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Poznámka:</strong> CAA nemôže nariadiť LOT platiť, ale často pomáhajú vyriešiť spor mimosúdne.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-r from-red-500 to-red-600 text-white border-l-4 border-red-700">
                  <div className="flex items-start gap-4">
                    <div className="bg-white text-red-600 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Súdne konanie (alebo použite ClaimWinger)</h3>
                      <p className="text-red-50 mb-3">
                        Ak všetko zlyhá, máte právo ísť na súd. Ale <strong>oveľa jednoduchšie je použiť ClaimWinger</strong> – oni sa postarajú o celý proces, vrátane súdneho konania, ak je potrebné.
                      </p>
                      <p className="text-sm text-red-100">
                        <strong>Výhoda ClaimWinger:</strong> Platíte len pri úspechu (zvyčajne 25% + DPH). Ak nevymôžime odškodnenie, neplatíte nič!
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">
                  ⚠️ UPOZORNENIE: Nekomunikujte emóciami!
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Pri komunikácii s LOT buďte <strong>vždy profesionálni a vecní</strong>. Nehrožte súdom, nenadávajte, nepoužívajte emócie. Jednoducho uvádzajte <strong>fakty a právnu argumentáciu</strong>. LOT vás berie vážnejšie, ak píšete ako "právny odborník", nie ako "nahnevaný zákazník".
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Kedy má LOT pravdu */}
          <section id="kedy-sa-vzdat" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-gray-600" />
              Kedy má LOT skutočne pravdu?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Hoci LOT často klamú, <strong>niekedy majú skutočne pravdu</strong>. Tu sú situácie, kedy sa oplatí uznať, že nemáte nárok:
              </p>

              <Card className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-600">
                <h3 className="text-xl font-bold mb-4">❌ Kedy skutočne nemáte nárok:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Preukázateľné extrémne počasie</p>
                      <p className="text-sm">LOT poskytol meteorologickú správu ukazujúcu hurikán/snežnú kalamitu na letisku v čase letu + žiadne iné lety neodlietali.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Oneskorenie príchodu menej ako 3 hodiny</p>
                      <p className="text-sm">Let priletěl s oneskorením 2 hodiny 45 minút = žiadne hotovostné odškodnenie (ale stále právo na starostlivosť).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Notifikácia 14+ dní + primeraná alternatíva</p>
                      <p className="text-sm">LOT vás informoval 20 dní vopred a ponúkol náhradný let, ktorý prichádza maximálne 2 hodiny po pôvodnom čase.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Vy ste zmeškali check-in</p>
                      <p className="text-sm">Prišli ste príliš neskoro na check-in (menej ako 45 min pred odletom) a LOT vás nepustil na palubu.</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded-lg p-6 my-6">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                  💡 Stále neistý? Nechajte to na odborníkov
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ak si nie ste istí, či máte nárok, <strong>najlepšie je nechať posúdiť prípad ClaimWinger</strong>. Ich právnici majú skúsenosti s tisíckami prípadov LOT a vedia presne, kedy je možné vyhrať a kedy nie. Overenie je zadarmo a trvá 2 minúty!
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: ClaimWinger */}
          <section id="claimwinger" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-600" />
              Prečo ClaimWinger dokáže prelomiť zamietnutia?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                ClaimWinger má <strong>98% úspešnosť</strong> pri vymáhaní odškodnení od LOT – aj v prípadoch, ktoré LOT predtým zamietol. Prečo?
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 text-center hover:shadow-xl transition-shadow border-2 border-green-200 dark:border-green-800">
                  <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Právna expertíza</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Tím právnikov špecializovaných na EU261 a LOT Polish Airlines
                  </p>
                </Card>

                <Card className="p-6 text-center hover:shadow-xl transition-shadow border-2 border-blue-200 dark:border-blue-800">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scale className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Súdne konanie v cene</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Ak LOT odmietne, ideme na súd – bez extra poplatku pre vás
                  </p>
                </Card>

                <Card className="p-6 text-center hover:shadow-xl transition-shadow border-2 border-purple-200 dark:border-purple-800">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Databáza prípadov</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Tisíce úspešných prípadov LOT – vieme všetky ich triky
                  </p>
                </Card>
              </div>

              <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
                <h3 className="text-xl font-bold mb-4">🎯 Ako ClaimWinger prelomí zamietnutie LOT:</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Formálna právna žiadosť</p>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">LOT berie ClaimWinger vážnejšie než individuálneho cestujúceho – vedia, že máme právnikov a pôjdeme na súd ak je potrebné.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Požiadavka na podrobné dôkazy</p>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">Vyžadujeme technické reporty, meteorologické údaje, interné záznamy LOT – väčšinu prípadov vyhráme už tu, pretože LOT nemôže dokázať svoj argument.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Súdne konanie</p>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">Ak LOT naďalej odmieta, podáme žalobu. Súdy spravidla rozhodujú v prospech cestujúcich, ak je nárok jasný.</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">
                  💰 Koľko zaplatíte ClaimWinger?
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  ClaimWinger si účtuje <strong>25% + DPH</strong> z vymôženého odškodnenia – ale len <strong>pri úspechu</strong>! Ak nevymôžime odškodnenie, neplatíte nič.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Príklad:</strong> Odškodnenie 400 € → ClaimWinger dostane približne 100 € + DPH → vám zostane približne 300 €. Ak by ste išli sami a LOT by odmietal, mohli by ste stratiť 6+ mesiacov času a nakoniec nič nedostať!
                </p>
              </div>
            </div>
          </section>

          {/* CTA 2 */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Nechajte ClaimWinger prelomiť zamietnutie LOT</h3>
              <p className="text-xl text-blue-100 mb-6">
                98% úspešnosť – aj v prípadoch, ktoré LOT zamietol
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Bez rizika</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Súdne konanie v cene</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>8-12 týždňov</span>
                </div>
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <a href="https://claimwinger.com/sk?utm_source=blog&utm_medium=article&utm_campaign=lot_odmieta_cta2" target="_blank" rel="noopener noreferrer">
                    Začať teraz <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">❓ Často kladené otázky</h2>

            <div className="space-y-4">
              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Môžem podať žiadosť znova, aj keď LOT už zamietol?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Áno!</strong> Môžete podať žiadosť znova s novými argumentami alebo dodatočnými dôkazmi. LOT nemá právnu obrancu "už sme zamietli raz, takže nemusíme prehodnotiť". Ale prakticky je lepšie použiť ClaimWinger, ktorý má skúsenosti s prelomením zamietnutí.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Ako dlho mám čas po zamietnutí LOT?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Premlčacia lehota je 2 roky (Slovensko) alebo 3 roky (Poľsko) <strong>od dátumu letu, nie od dátumu zamietnutia</strong>. Takže aj keď LOT zamietol vašu žiadosť pred rokom, stále máte čas ísť na súd.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  LOT nereaguje vôbec – čo robiť?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>To je tiež bežná taktika!</strong> LOT má zákonný limit 2 mesiace na odpoveď na sťažnosti. Ak nereagujú po 2 mesiacoch, máte právo ísť na súd alebo kontaktovať CAA. ClaimWinger túto situáciu rieši automaticky – ak LOT nereaguje, ideme rovno na súd.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Môžem ísť na súd sám bez ClaimWinger?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Áno, môžete!</strong> Máte právo podať žalobu na súd sami. Ale zvážte: potrebujete poznať právnu argumentáciu EU261, formálne podanie žaloby, prípadne fyzickú účasť na pojednávaní. ClaimWinger sa o toto všetko postará za vás – a platíte len pri úspechu.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Čo ak LOT ponúkne menšiu sumu než nárok?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Neakceptujte!</strong> LOT niekedy ponúka "čiastočné odškodnenie" (napr. 150 € namiesto 250 €) ako kompromis. To je taktika – ak akceptujete, už nemôžete požadovať zvyšok. Trvajte na plnej sume alebo použite ClaimWinger.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Môže LOT čierny zoznam ma za žiadosť o odškodnenie?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Nie, to je nezákonné!</strong> LOT nemôže vás zabanovať alebo zhoršiť váš profil frequent flyer za žiadosť o odškodnenie. Ak by to urobili, je to diskriminácia a môžete to nahlásiť na CAA.
                </p>
              </details>
            </div>
          </section>

          {/* FAQPage Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Môžem podať žiadosť znova, aj keď LOT už zamietol?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Áno! Môžete podať žiadosť znova s novými argumentami. LOT nemá právnu obrancu už sme zamietli raz."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Ako dlho mám čas po zamietnutí LOT?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Premlčacia lehota je 2 roky (Slovensko) alebo 3 roky (Poľsko) od dátumu letu, nie od dátumu zamietnutia."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "LOT nereaguje vôbec – čo robiť?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "LOT má zákonný limit 2 mesiace na odpoveď. Ak nereagujú po 2 mesiacoch, máte právo ísť na súd alebo kontaktovať CAA."
                    }
                  }
                ]
              })
            }}
          />

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">📚 Súvisiace články</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/sk/blog/lot-zrusil-let-odskodnenie">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="font-bold mb-2">LOT zrušil let - odškodnenie</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ako získať odškodnenie krok za krokom
                  </p>
                </Card>
              </Link>
              <Link href="/sk/blog/lot-oneskoreny-let-odskodnenie">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="font-bold mb-2">LOT oneskorený let</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Kompletný sprievodca
                  </p>
                </Card>
              </Link>
            </div>
          </section>

          {/* Final note */}
          <div className="text-center text-sm text-gray-600 dark:text-gray-400 space-y-2 mb-8">
            <p>
              <strong>Oficiálne zdroje:</strong>
              <a href="https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">
                Nariadenie EÚ 261/2004 (EUR-Lex)
              </a>
            </p>
            <p>
              Tento sprievodca je založený na nariadení EÚ 261/2004 a poľských právach cestujúcich. ClaimWinger je nezávislá spoločnosť, nie je pridružená k LOT Polish Airlines.
            </p>
          </div>
        </div>
      </article>
    </LayoutSk>
  );
}
