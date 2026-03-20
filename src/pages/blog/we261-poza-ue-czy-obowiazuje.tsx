import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Plane, Globe, CheckCircle, Map, MapPin, XCircle } from "lucide-react";

export default function We261PozaUeCzyObowiazuje() {
  return (
    <Layout>
      <SEO
        title="Czy rozporządzenie WE 261 obowiązuje poza UE? (Featured Snippet)"
        description="Sprawdź zasady odszkodowań za loty poza UE. Kiedy WE 261/2004 chroni loty z USA, Turcji, Egiptu czy UK."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li className="text-blue-600 font-medium">WE 261 poza UE</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              Zasięg terytorialny
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Czy WE 261 obowiązuje poza UE?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Loty międzynarodowe a unijne prawo pasażera – proste zasady
            </p>
          </header>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Szybka odpowiedź
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Tak, ale tylko w określonych przypadkach.</strong> Rozporządzenie WE 261/2004 (EU261) 
              chroni Cię podczas lotów poza terytorium UE, jeśli spełniony jest <strong>jeden z dwóch</strong> warunków:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-xl font-bold mb-2">Reguła 1: Wylot z UE</div>
                <div className="text-sm opacity-90">
                  Wylatujesz z lotniska w UE, niezależnie od tego, jakiej narodowości jest linia lotnicza.
                  <br/><br/>
                  <span className="bg-green-500/20 px-2 py-1 rounded text-xs">Obejmuje np. Emirates z Warszawy do Dubaju</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-xl font-bold mb-2">Reguła 2: Przylot do UE (Linia z UE)</div>
                <div className="text-sm opacity-90">
                  Lecisz z kraju spoza UE do UE, ale <strong>tylko unijną linią lotniczą</strong>.
                  <br/><br/>
                  <span className="bg-green-500/20 px-2 py-1 rounded text-xs">Obejmuje LOT z Chicago do Warszawy</span>
                </div>
              </div>
            </div>
            <p className="text-sm opacity-90 mt-6 text-center">
              *UE w tym kontekście obejmuje również Szwajcarię, Norwegię, Islandię i kraje EOG.
            </p>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kiedy prawo unijne NIE działa?</h2>
            
            <p className="text-gray-700 mb-6">
              Rozporządzenie <strong>nie ma zastosowania</strong>, jeśli wylatujesz z kraju spoza UE 
              i lecisz <strong>linią lotniczą spoza UE</strong> (nawet jeśli lądujesz w Europie).
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-xl">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                <XCircle className="h-5 w-5" /> Brak ochrony EU261
              </h3>
              <ul className="list-disc list-inside space-y-2 text-red-800">
                <li>Nowy Jork → Warszawa (linia: Delta Airlines)</li>
                <li>Dubaj → Kraków (linia: FlyDubai / Emirates)</li>
                <li>Stambuł → Gdańsk (linia: Turkish Airlines / Pegasus)</li>
                <li>Londyn → Katowice (linia: British Airways / UK261 jednak może działać!)</li>
              </ul>
              <p className="mt-4 text-sm text-red-700">
                W powyższych przypadkach możesz dochodzić praw na podstawie prawa lokalnego (np. UK261, konwencji montrealskiej), ale nie z dyrektywy UE.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Loty z i do Wielkiej Brytanii po Brexicie</h2>
            <p className="text-gray-700 mb-6">
              Wielka Brytania skopiowała prawo EU261 i wdrożyła własne prawo: <strong>UK261</strong>. 
              Dzięki temu, choć UK nie jest już w Unii, pasażerowie na trasach PL-UK zachowali pełną ochronę:
              <br/><br/>
              • Lecąc z UK do Polski z Wizz Air lub Ryanair → ochrona UK261<br/>
              • Kwoty i zasady są niemal identyczne (np. zamiast 250 € dostajesz £220).
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 sm:p-12 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Zgubiłeś się w przepisach?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nasz system w 3 sekundy sprawdzi, które prawo obejmowało Twój lot.
            </p>
            <a
              href="https://claimwinger.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Sprawdź mój lot
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </Layout>
  );
}
