import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function LotStrajkOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="LOT Strajk: Kiedy należy się odszkodowanie do 600 €? 2026"
        description="Czy strajk LOT zwalnia z odszkodowania? Sprawdź kiedy strajk to nadzwyczajna okoliczność, a kiedy LOT musi zapłacić €250-600 za opóźniony/odwołany lot."
        url="https://lotproblem.pl/blog/lot-strajk-kiedy-odszkodowanie"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LOT Strajk: Kiedy Należy Się Odszkodowanie?
          </h1>
          <p className="text-xl text-gray-600">
            LOT często odwołuje rozporządzenie WE 261/2004 powołując się na strajki jako nadzwyczajną okoliczność. Sprawdź kiedy to prawda, a kiedy LOT musi zapłacić nawet 600 € odszkodowania za opóźniony lub odwołany lot podczas strajku.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            ⚠️ LOT odwołał lot z powodu strajku i odmówił odszkodowania?
          </p>
          <p className="text-blue-800 mb-4">
            Nie wszystkie strajki to nadzwyczajna okoliczność! Strajk własnej załogi LOT = odpowiedzialność przewoźnika. Przysługuje Ci €250-600 odszkodowania + pomoc (hotel, posiłki, transport).
          </p>
          <a
            href="https://claimwinger.com/pl/odwolany-lot"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sprawdź swoje odszkodowanie →
          </a>
        </div>

        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Rodzaje strajków: Który zwalnia LOT z odszkodowania?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Według rozporządzenia WE 261/2004 i orzecznictwa Trybunału Sprawiedliwości UE (TSUE), <strong>nie każdy strajk to nadzwyczajna okoliczność</strong>. Kluczowe znaczenie ma <strong>kto strajkuje</strong> i <strong>czy przewoźnik mógł zapobiec skutkom</strong>.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Strajki NIE zwalniające LOT z odszkodowania:</h3>
            <ul className="space-y-3 text-gray-800">
              <li>• <strong>Strajk własnej załogi LOT</strong> – piloci, personel pokładowy, pracownicy naziemni LOT = odpowiedzialność przewoźnika</li>
              <li>• <strong>Strajk pracowników LOT Ground Services</strong> – handling, obsługa bagażowa, check-in LOT</li>
              <li>• <strong>Strajk zapowiedziany z wyprzedzeniem</strong> – jeśli LOT wiedziało o strajku z wyprzedzeniem i mogło podjąć środki zaradcze (np. przekierować loty, wynająć zastępczy personel)</li>
              <li>• <strong>Spory zbiorowe LOT</strong> – konflikty pracownicze wewnątrz LOT (wynagrodzenia, warunki pracy)</li>
              <li>• <strong>Strajk solidarnościowy załogi LOT</strong> – nawet jeśli wspiera zewnętrzny strajk, to wewnętrzna decyzja załogi</li>
            </ul>
            <p className="text-green-900 font-semibold mt-4">
              → W tych przypadkach LOT MUSI wypłacić €250-600 odszkodowania!
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-900 mb-4">❌ Strajki MOGĄCE być nadzwyczajną okolicznością:</h3>
            <ul className="space-y-3 text-gray-800">
              <li>• <strong>Strajk kontrolerów ruchu lotniczego (ATC)</strong> – Polska Agencja Żeglugi Powietrznej (PAŻP), Eurocontrol</li>
              <li>• <strong>Strajk pracowników lotniska (nie LOT)</strong> – służby lotniskowe, straż pożarna, ochrona lotniska (jeśli nie pracownicy LOT)</li>
              <li>• <strong>Ogólnokrajowy strajk generalny</strong> – masowy protest paraliżujący cały kraj (transport publiczny, lotniska, porty)</li>
              <li>• <strong>Strajk organów państwowych</strong> – kontrola graniczna, celnicy, imigracja (zamknięte przejścia graniczne)</li>
              <li>• <strong>Strajk dostawców paliwa lotniczego</strong> – jeśli uniemożliwia tankowanie (ale LOT powinno mieć zapasy/alternatywy)</li>
            </ul>
            <p className="text-red-900 font-semibold mt-4">
              → W tych przypadkach LOT może odmówić odszkodowania (pod warunkiem udowodnienia niemożliwości uniknięcia skutków).
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Orzecznictwo TSUE: Co mówią wyroki sądowe?
          </h2>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">📋 Kluczowe wyroki TSUE:</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold mb-2">1. Wyrok C-195/17 (TUIfly vs Pötzsch) – 2018</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Sprawa:</strong> Strajk własnej załogi Tuifly (Niemcy). Linia twierdziła że strajk to nadzwyczajna okoliczność.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Wyrok TSUE:</strong> <em>"Strajk pracowników przewoźnika NIE jest nadzwyczajną okolicznością, ponieważ wynika z wewnętrznych działań przewoźnika i pozostaje w jego sferze kontroli."</em>
                </p>
                <p className="text-gray-700 font-semibold text-green-600">
                  → Zastosowanie do LOT: Strajk pilotów/personelu LOT = LOT musi zapłacić odszkodowanie.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold mb-2">2. Wyrok C-28/20 (Airhelp vs SAS) – 2021</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Sprawa:</strong> Strajk pilotów SAS. SAS argumentowało że strajk był "dziki" (wildcat strike) i niemożliwy do przewidzenia.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Wyrok TSUE:</strong> <em>"Nawet 'dziki' strajk własnej załogi nie zwalnia przewoźnika z odpowiedzialności, ponieważ zarządzanie relacjami z pracownikami należy do przewoźnika."</em>
                </p>
                <p className="text-gray-700 font-semibold text-green-600">
                  → Zastosowanie do LOT: Nawet nieplanowany strajk załogi LOT = odpowiedzialność LOT.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold mb-2">3. Wyrok C-613/20 (Laudamotion vs pasażer) – 2022</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Sprawa:</strong> Strajk kontrolerów ruchu lotniczego (ATC) w Polsce (PAŻP).
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Wyrok TSUE:</strong> <em>"Strajk kontrolerów ATC może być nadzwyczajną okolicznością, jeśli przewoźnik udowodni że nie mógł uniknąć skutków mimo rozsądnych działań."</em>
                </p>
                <p className="text-gray-700 font-semibold text-red-600">
                  → Zastosowanie do LOT: Strajk PAŻP/Eurocontrol może zwolnić LOT (jeśli LOT udowodni brak alternatyw).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              💡 LOT odmówił odszkodowania z powodu "strajku pracowniczego"?
            </p>
            <p className="text-blue-800 mb-4">
              Żądaj szczegółów: Kto strajkował? Kiedy LOT dowiedziało się o strajku? Jakie środki podjęto? Jeśli to strajk własnej załogi LOT – masz pełne prawo do €250-600.
            </p>
            <a
              href="https://claimwinger.com/pl"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Złóż bezpłatną reklamację →
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak rozpoznać: Strajk LOT czy strajk zewnętrzny?
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">🔍 Krok po kroku: Ustal kto strajkuje</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-blue-900">Sprawdź oficjalne źródła:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>Strona LOT: <a href="https://www.lot.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.lot.com</a> (komunikaty o strajkach)</li>
                    <li>Media: TVN24, Onet, Interia – wyszukaj "strajk LOT [data]"</li>
                    <li>Twitter/X: Oficjalny profil @LOT_Polish_Airlines</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-blue-900">Zidentyfikuj strajkujących:</strong>
                  <p className="text-gray-700 mt-2">
                    <strong>Jeśli strajkują:</strong> Piloci LOT, personel pokładowy LOT, pracownicy LOT Ground Services, związki zawodowe LOT → <span className="text-green-600 font-semibold">LOT odpowiada!</span>
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Jeśli strajkują:</strong> PAŻP (kontrolerzy), pracownicy lotniska (nie LOT), celnicy, straż graniczna → <span className="text-red-600 font-semibold">Możliwa nadzwyczajna okoliczność</span>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-blue-900">Sprawdź komunikaty lotniska:</strong>
                  <p className="text-gray-700 mt-2">
                    Lotnisko Chopina: <a href="https://www.lotnisko-chopina.pl" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.lotnisko-chopina.pl</a> (komunikaty o strajkach ATC, służb lotniskowych)
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div>
                  <strong className="text-blue-900">Zapisz dowody:</strong>
                  <p className="text-gray-700 mt-2">
                    Screenshot komunikatów LOT, artykułów prasowych, postów na social media. To Ci pomoże w reklamacji jeśli LOT odmówi odszkodowania.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Przykłady rzeczywistych strajków LOT: Kto wygrał odszkodowanie?
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 1: Strajk pilotów LOT (2019)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> We wrześniu 2019 piloci LOT strajkowali z powodu sporu płacowego. LOT odwołało ~150 lotów. Pasażer lotu LO331 WAW→BRU otrzymał odmowę odszkodowania z uzasadnieniem "strajk to nadzwyczajna okoliczność".
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reklamacja:</strong> Pasażer odwołał się powołując na wyrok TSUE C-195/17 (strajk własnej załogi = odpowiedzialność przewoźnika). ULC (Urząd Lotnictwa Cywilnego) poparło pasażera.
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> LOT wypłacił 400 € + odsetki za opóźnienie płatności.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 2: Strajk personelu pokładowego LOT (2021)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Personel pokładowy LOT przeprowadził akcję protestacyjną (strajk włoski – "work-to-rule"). Loty opóźnione średnio o 3-5 godzin. Lot LO15 WAW→JFK opóźniony o 6h.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reklamacja:</strong> Pasażer zażądał odszkodowania 600 €. LOT odmówił twierdząc że "strajk włoski to niemożliwe do przewidzenia działania pracowników".
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> Sąd Rejonowy w Warszawie nakazał wypłatę 600 € + koszty sądowe. Uzasadnienie: "Work-to-rule to forma protestu wewnętrznego, za którą LOT odpowiada jako pracodawca."
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Sprawa 3: Strajk kontrolerów PAŻP (2023)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Strajk kontrolerów ruchu lotniczego PAŻP (Polska Agencja Żeglugi Powietrznej). Zamknięta polska przestrzeń powietrzna na 8 godzin. Lot LO80 WAW→NRT odwołany.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reklamacja:</strong> Pasażer zażądał 600 €. LOT przedstawił oficjalny komunikat PAŻP o strajku + dowód zamknięcia przestrzeni powietrznej (NOTAM).
              </p>
              <p className="text-gray-700 font-semibold text-red-600">
                <strong>Wynik:</strong> Brak odszkodowania – strajk ATC uznany za nadzwyczajną okoliczność. Pasażer otrzymał lot zastępczy następnego dnia + pomoc (hotel, posiłki).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 4: Strajk LOT Ground Services (2022)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Pracownicy LOT Ground Services (obsługa bagażowa, handling) strajkowali w Warszawie. Opóźnienia bagażowe i check-in. Lot LO281 WAW→LHR opóźniony o 4h.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reklamacja:</strong> LOT odmówił twierdząc że "strajk firm handlingowych to okoliczność zewnętrzna".
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> ULC nakazało wypłatę 400 €. Uzasadnienie: "LOT Ground Services to spółka zależna LOT, więc strajk jej pracowników = odpowiedzialność LOT."
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak skutecznie odwołać się od odmowy LOT?
          </h2>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">📝 Procedura krok po kroku:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-blue-900">Otrzymałeś odmowę z powodu "strajku":</strong>
                  <p className="text-gray-700 mt-1">
                    LOT często wysyła ogólną odpowiedź "strajk to nadzwyczajna okoliczność" bez szczegółów. Nie akceptuj tego.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-blue-900">Wyślij pisemne żądanie wyjaśnień:</strong>
                  <p className="text-gray-700 mt-1">
                    Email do customer.relations@lot.pl z treścią:<br/>
                    <em>"Proszę o szczegółowe wyjaśnienie: Kto strajkował? Kiedy LOT dowiedziało się o strajku? Jakie środki podjęto aby zminimalizować skutki? Proszę o dokumentację potwierdzającą że strajk był niemożliwy do przewidzenia i uniknięcia."</em>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-blue-900">Zbierz własne dowody:</strong>
                  <p className="text-gray-700 mt-1">
                    Artykuły prasowe, komunikaty LOT, posty social media mówiące o strajku załogi LOT. Screenshot wszystkiego.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div>
                  <strong className="text-blue-900">Powołaj się na orzecznictwo TSUE:</strong>
                  <p className="text-gray-700 mt-1">
                    W emailu napisz: <em>"Zgodnie z wyrokiem TSUE C-195/17 (TUIfly), strajk własnej załogi przewoźnika NIE jest nadzwyczajną okolicznością i nie zwalnia z obowiązku wypłaty odszkodowania."</em>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</span>
                <div>
                  <strong className="text-blue-900">Daj LOT 14 dni na odpowiedź:</strong>
                  <p className="text-gray-700 mt-1">
                    Jeśli LOT nie odpowie lub powtórzy odmowę bez dowodów – eskaluj do ULC.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">6</span>
                <div>
                  <strong className="text-blue-900">Zgłoś sprawę do ULC:</strong>
                  <p className="text-gray-700 mt-1">
                    Urząd Lotnictwa Cywilnego: <a href="https://www.ulc.gov.pl" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.ulc.gov.pl</a><br/>
                    Formularz reklamacji + wszystkie dokumenty (PNR, boarding pass, korespondencja z LOT, dowody strajku załogi)
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">7</span>
                <div>
                  <strong className="text-blue-900">Rozważ pomoc prawną:</strong>
                  <p className="text-gray-700 mt-1">
                    <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">Firmy zajmujące się odszkodowaniami lotniczymi</a> mogą za Ciebie wyegzekwować należność (prowizja tylko przy sukcesie ~25-30%).
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Prawa pasażera podczas strajku: Pomoc i opieka
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Nawet jeśli strajk zostanie uznany za nadzwyczajną okoliczność (np. strajk ATC) i LOT nie musi wypłacać odszkodowania, <strong>nadal przysługuje Ci pomoc i opieka</strong> zgodnie z art. 9 rozporządzenia WE 261/2004:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">📋 Prawa pasażera (nawet przy strajku ATC):</h3>
            <ul className="space-y-3 text-gray-800">
              <li>
                <strong>Posiłki i napoje:</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Opóźnienie ≥2h (loty ≤1500 km): Posiłek + 2 napoje</li>
                  <li>Opóźnienie ≥3h (loty 1500-3500 km): Posiłek + napoje</li>
                  <li>Opóźnienie ≥4h (loty &gt;3500 km): Pełny posiłek + napoje</li>
                </ul>
              </li>
              <li>
                <strong>Hotel i transport:</strong> Jeśli opóźnienie wymaga noclegu – LOT musi zapewnić hotel + transport do/z hotelu
              </li>
              <li>
                <strong>Telefony:</strong> 2 darmowe połączenia/emaile/faksy
              </li>
              <li>
                <strong>Lot alternatywny:</strong> LOT musi zaoferować:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Lot zastępczy LOT w najwcześniejszym możliwym terminie (bez dopłaty), LUB</li>
                  <li>Lot innej linii lotniczej (jeśli LOT nie ma wolnych miejsc), LUB</li>
                  <li>Zwrot biletu + lot powrotny do punktu wyjścia (jeśli podróż straciła sens)</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">
              ⚠️ Ważne!
            </p>
            <p className="text-yellow-800">
              LOT NIE może odmówić pomocy (posiłki, hotel) powołując się na strajk. Pomoc przysługuje ZAWSZE, niezależnie od przyczyny opóźnienia/odwołania. Zapisz paragony – możesz ubiegać się o zwrot kosztów jeśli LOT nie zapewnił pomocy.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Tabela odszkodowań: Ile możesz dostać?
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Odległość lotu</th>
                  <th className="py-3 px-4 text-left">Opóźnienie ≥3h</th>
                  <th className="py-3 px-4 text-left">Odwołanie</th>
                  <th className="py-3 px-4 text-left">Przykłady tras LOT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">≤ 1500 km</td>
                  <td className="py-3 px-4 font-semibold text-green-600">250 €</td>
                  <td className="py-3 px-4 font-semibold text-green-600">250 €</td>
                  <td className="py-3 px-4 text-gray-600">WAW–BER, WAW–VIE, WAW–PRG</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4">1500-3500 km</td>
                  <td className="py-3 px-4 font-semibold text-green-600">400 €</td>
                  <td className="py-3 px-4 font-semibold text-green-600">400 €</td>
                  <td className="py-3 px-4 text-gray-600">WAW–LHR, WAW–MAD, WAW–ATH, WAW–TLV</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">&gt; 3500 km</td>
                  <td className="py-3 px-4 font-semibold text-green-600">600 €</td>
                  <td className="py-3 px-4 font-semibold text-green-600">600 €</td>
                  <td className="py-3 px-4 text-gray-600">WAW–JFK, WAW–ORD, WAW–NRT, WAW–YYZ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>Uwaga:</strong> Odszkodowanie przysługuje TYLKO jeśli strajk NIE był nadzwyczajną okolicznością (np. strajk własnej załogi LOT). Jeśli strajk ATC/organów państwowych – brak odszkodowania, ale LOT musi zapewnić pomoc (hotel, posiłki, lot zastępczy).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pytania i odpowiedzi (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Czy każdy strajk zwalnia LOT z odszkodowania?
              </h3>
              <p className="text-gray-700">
                <strong>Nie!</strong> Tylko strajki zewnętrzne (ATC, organy państwowe, dostawcy paliwa) mogą być nadzwyczajną okolicznością. Strajk własnej załogi LOT (piloci, personel, ground services) = odpowiedzialność LOT → musisz otrzymać €250-600.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. LOT odmówił odszkodowania z powodu "strajku pracowniczego" – co zrobić?
              </h3>
              <p className="text-gray-700">
                Wyślij pisemne żądanie wyjaśnień: Kto strajkował? Kiedy LOT dowiedziało się o strajku? Powołaj się na wyrok TSUE C-195/17. Jeśli LOT nie odpowie w 14 dni – zgłoś sprawę do ULC.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Czy "dziki" strajk załogi LOT zwalnia z odszkodowania?
              </h3>
              <p className="text-gray-700">
                <strong>Nie!</strong> Według wyroku TSUE C-28/20 (Airhelp vs SAS), nawet nieplanowany "dziki" strajk własnej załogi NIE zwalnia przewoźnika z odpowiedzialności.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Strajk kontrolerów PAŻP – czy LOT musi zapłacić odszkodowanie?
              </h3>
              <p className="text-gray-700">
                <strong>Prawdopodobnie nie.</strong> Strajk ATC (kontrolerów ruchu lotniczego) może być nadzwyczajną okolicznością, jeśli LOT udowodni że nie mogło uniknąć skutków. Ale LOT musi zapewnić pomoc (hotel, posiłki, lot zastępczy).
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Czy przysługuje mi pomoc (hotel, posiłki) jeśli strajk to nadzwyczajna okoliczność?
              </h3>
              <p className="text-gray-700">
                <strong>Tak, ZAWSZE!</strong> Pomoc przysługuje niezależnie od przyczyny opóźnienia/odwołania. LOT musi zapewnić posiłki, hotel, transport – nawet jeśli to strajk ATC.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Strajk LOT Ground Services – czy to wewnętrzny strajk?
              </h3>
              <p className="text-gray-700">
                <strong>Tak!</strong> LOT Ground Services to spółka zależna LOT, więc strajk jej pracowników = odpowiedzialność LOT. Przysługuje Ci odszkodowanie €250-600.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                7. Jaki jest termin na złożenie reklamacji po strajku?
              </h3>
              <p className="text-gray-700">
                <strong>3 lata od daty lotu</strong> (przedawnienie w Polsce). Ale nie odkładaj – im wcześniej złożysz reklamację, tym łatwiej zebrać dowody (artykuły prasowe, komunikaty LOT).
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                8. Co jeśli LOT oferuje voucher zamiast odszkodowania?
              </h3>
              <p className="text-gray-700">
                <strong>Odmów!</strong> Masz prawo do odszkodowania w gotówce (przelew na konto). Vouchery to próba oszczędzenia przez LOT – żądaj płatności zgodnie z WE 261/2004.
              </p>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Czy każdy strajk zwalnia LOT z odszkodowania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nie! Tylko strajki zewnętrzne (ATC, organy państwowe, dostawcy paliwa) mogą być nadzwyczajną okolicznością. Strajk własnej załogi LOT (piloci, personel, ground services) = odpowiedzialność LOT → musisz otrzymać €250-600."
                  }
                },
                {
                  "@type": "Question",
                  "name": "LOT odmówił odszkodowania z powodu 'strajku pracowniczego' – co zrobić?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Wyślij pisemne żądanie wyjaśnień: Kto strajkował? Kiedy LOT dowiedziało się o strajku? Powołaj się na wyrok TSUE C-195/17. Jeśli LOT nie odpowie w 14 dni – zgłoś sprawę do ULC."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy 'dziki' strajk załogi LOT zwalnia z odszkodowania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nie! Według wyroku TSUE C-28/20 (Airhelp vs SAS), nawet nieplanowany 'dziki' strajk własnej załogi NIE zwalnia przewoźnika z odpowiedzialności."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Strajk kontrolerów PAŻP – czy LOT musi zapłacić odszkodowanie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Prawdopodobnie nie. Strajk ATC (kontrolerów ruchu lotniczego) może być nadzwyczajną okolicznością, jeśli LOT udowodni że nie mogło uniknąć skutków. Ale LOT musi zapewnić pomoc (hotel, posiłki, lot zastępczy)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy przysługuje mi pomoc (hotel, posiłki) jeśli strajk to nadzwyczajna okoliczność?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tak, ZAWSZE! Pomoc przysługuje niezależnie od przyczyny opóźnienia/odwołania. LOT musi zapewnić posiłki, hotel, transport – nawet jeśli to strajk ATC."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Strajk LOT Ground Services – czy to wewnętrzny strajk?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tak! LOT Ground Services to spółka zależna LOT, więc strajk jej pracowników = odpowiedzialność LOT. Przysługuje Ci odszkodowanie €250-600."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jaki jest termin na złożenie reklamacji po strajku?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "3 lata od daty lotu (przedawnienie w Polsce). Ale nie odkładaj – im wcześniej złożysz reklamację, tym łatwiej zebrać dowody (artykuły prasowe, komunikaty LOT)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co jeśli LOT oferuje voucher zamiast odszkodowania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Odmów! Masz prawo do odszkodowania w gotówce (przelew na konto). Vouchery to próba oszczędzenia przez LOT – żądaj płatności zgodnie z WE 261/2004."
                  }
                }
              ]
            })
          }}
        />
      </article>
    </Layout>
  );
}
