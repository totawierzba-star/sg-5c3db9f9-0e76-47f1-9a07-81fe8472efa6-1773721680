import React from 'react';
import Head from 'next/head';

const DutyOfCarePodroze = () => {
  const articleData = {
    title: "Duty of care — obowiązek pracodawcy wobec podróżującego pracownika",
    description: "Duty of care w podróżach służbowych to obowiązek pracodawcy dbania o bezpieczeństwo i wellbeing pracowników. Sprawdź jakie są prawa i obowiązki.",
    slug: "duty-of-care-obowiazek-pracodawcy-podrozujacy-pracownik",
    cluster: "K2",
    keyword_primary: "duty of care pracodawca podróże służbowe",
    keywords_secondary: "bezpieczeństwo podróży służbowych, obowiązki pracodawcy delegacje, wellbeing pracowników travel",
    reading_time: "9 min",
    internal_links: ["Zarządzanie wydatkami na loty służbowe — narzędzia i systemy", "Polityka zrównoważonych podróży służbowych — jak wdrożyć"],
    cta_url: "https://claimwinger.com/pl/firmy"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "author": {"@type": "Organization", "name": "bizneslot.info"},
    "publisher": {"@type": "Organization", "name": "bizneslot.info"},
    "datePublished": "2025-03-20",
    "inLanguage": "pl-PL"
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Co to jest duty of care w podróżach służbowych?",
        "acceptedAnswer": {"@type": "Answer", "text": "Duty of care to prawny i moralny obowiązek pracodawcy zapewnienia bezpieczeństwa, ochrony zdrowia i wellbeing pracownikom podczas podróży służbowych. Obejmuje przygotowanie, wsparcie podczas podróży i pomoc w sytuacjach kryzysowych."}
      },
      {
        "@type": "Question",
        "name": "Jakie są podstawowe obowiązki pracodawcy w zakresie duty of care?",
        "acceptedAnswer": {"@type": "Answer", "text": "Podstawowe obowiązki to: ocena ryzyka podróży, dostarczenie informacji o zagrożeniach, ubezpieczenie podróży, dostęp do pomocy medycznej, wsparcie w sytuacjach awaryjnych, oraz monitoring bezpieczeństwa pracowników."}
      },
      {
        "@type": "Question",
        "name": "Czy duty of care jest prawnie wymagane w Polsce?",
        "acceptedAnswer": {"@type": "Answer", "text": "Tak, obowiązek dbania o bezpieczeństwo pracowników wynika z Kodeksu Pracy, dyrektyw UE i przepisów BHP. Choć termin 'duty of care' nie jest bezpośrednio używany w polskim prawie, jego zasady są prawnie wiążące."}
      },
      {
        "@type": "Question",
        "name": "Jakie ubezpieczenie jest wymagane w podróżach służbowych?",
        "acceptedAnswer": {"@type": "Answer", "text": "Wymagane jest ubezpieczenie kosztów leczenia, NNW, ubezpieczenie bagażu i odpowiedzialności cywilnej. Dla podróży międzynarodowych konieczne jest również ubezpieczenie transportu medycznego i assistance."}
      },
      {
        "@type": "Question",
        "name": "Jakie są konsekwencje naruszenia duty of care?",
        "acceptedAnswer": {"@type": "Answer", "text": "Konsekwencje mogą obejmować odpowiedzialność cywilną, karną, administracyjne kary, wypłaty odszkodowań, utratę reputacji firmy, oraz negatywny wpływ na morale pracowników i rekrutację."}
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{articleData.title}</title>
        <meta name="description" content={articleData.description} />
        <meta name="keywords" content={`${articleData.keyword_primary}, ${articleData.keywords_secondary}`} />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </Head>

      <article className="article">
        <header className="article-header">
          <div className="article-meta">
            <span className="category">Travel Policy</span>
            <span className="reading-time">{articleData.reading_time} czytania</span>
          </div>
          <h1>{articleData.title}</h1>
          <p className="lead">
            Duty of care to fundamentalny obowiązek pracodawcy który zakłada dbałość o bezpieczeństwo, 
            zdrowie i dobrostan pracowników podczas podróży służbowych. W erze globalnych delegacji 
            i rosnących zagrożeń, odpowiedzialność ta staje się coraz bardziej złożona i wymaga 
            strategicznego podejścia. W tym artykule omawiamy kluczowe aspekty duty of care, 
            obowiązki prawne i najlepsze praktyki ochrony podróżujących pracowników.
          </p>
          <div className="article-highlights">
            <div className="highlight-item">✓ Definicja i zakres obowiązków duty of care</div>
            <div className="highlight-item">✓ Wymagania prawne i konsekwencje naruszeń</div>
            <div className="highlight-item">✓ Praktyczne strategie ochrony pracowników</div>
          </div>
        </header>

        <div className="key-takeaways">
          <h3>Najważniejsze informacje</h3>
          <ul>
            <li>Duty of care to prawny i moralny obowiązek ochrony pracowników</li>
            <li>Obejmuje przygotowanie, wsparcie podczas podróży i pomoc kryzysową</li>
            <li>Naruszenie może prowadzić do odpowiedzialności prawnej i finansowej</li>
            <li>Nowoczesne technologie ułatwiają monitorowanie i wsparcie pracowników</li>
          </ul>
        </div>

        <section className="article-section">
          <h2>Co to jest duty of care — definicja i zakres</h2>
          <p>
            Duty of care (obowiązek staranności) to prawny i moralny obowiązek pracodawcy 
            zapewnienia bezpiecznych warunków pracy i ochrony zdrowia pracowników. W kontekście 
            podróży służbowych obejmuje to wszystkie aspekty od momentu planowania delegacji 
            do bezpiecznego powrotu pracownika. Zakres obowiązków jest bardzo szeroki i 
            obejmuje: ocenę ryzyka podróży, przygotowanie pracownika, monitoring bezpieczeństwa, 
            wsparcie w sytuacjach kryzysowych, oraz opiekę po powrocie z delegacji.
          </p>
          
          <div className="callout callout--warning">
            <span className="callout__icon">⚠</span>
            <div className="callout__content">
              <strong>Ważne:</strong> Brak odpowiednich procedur duty of care może prowadzić 
              do poważnych konsekwencji prawnych i finansowych dla firmy.
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Podstawa prawna duty of care w Polsce i UE</h2>
          <p>
            Choć termin "duty of care" pochodzi z common law, jego zasady są obecne w polskim 
            prawie pracy. Podstawowe akty prawne to: Kodeks Pracy (art. 237, 304), dyrektywy 
            UE dotyczące bezpieczeństwa pracy, ustawa o bezpieczeństwie i higienie pracy, 
            oraz rozporządzenia dotyczące delegacji pracowników. Pracodawca ma obowiązek 
            zapewnić bezpieczne i higieniczne warunki pracy, co obejmuje również podróże służbowe. 
            W przypadku podróży międzynarodowych dodatkowo stosuje się przepisy lokalne i 
            międzynarodowe konwencje.
          </p>
        </section>

        <section className="article-section">
          <h2>Kluczowe elementy programu duty of care</h2>
          
          <ol className="steps-list">
            <li className="step">
              <span className="step__number">1</span>
              <div className="step__content">
                <strong>Ocena ryzyka podróży</strong>
                <p>Przed każdą delegacją należy ocenić potencjalne zagrożenia: bezpieczeństwa 
                publicznego, zdrowotne, polityczne, klimatyczne, oraz logistyczne. Ocena 
                uwzględnia destynację, profil pracownika, charakter podróży i aktualną 
                sytuację w regionie.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">2</span>
              <div className="step__content">
                <strong>Przygotowanie pracownika</strong>
                <p>Kompleksowe przygotowanie obejmuje: szkolenie bezpieczeństwa, informacje 
                o zagrożeniach, kontakty alarmowe, wymagane szczepienia, wizy, oraz 
                wyposażenie w niezbędne środki ochrony. Pracownik musi znać procedury 
                postępowania w sytuacjach awaryjnych.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">3</span>
              <div className="step__content">
                <strong>Ubezpieczenie i assistance</strong>
                <p>Odpowiednie ubezpieczenie to fundament ochrony. Musi obejmować: koszty 
                leczenia, NNW, transport medyczny, assistance 24/7, oraz ewakuację. 
                Polisa powinna być dostosowana do destynacji i charakteru podróży.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">4</span>
              <div className="step__content">
                <strong>Monitoring i wsparcie</strong>
                <p>Ciągły monitoring bezpieczeństwa pracownika podczas podróży, regularny 
                kontakt, dostęp do pomocy 24/7, oraz szybka reakcja na sytuacje kryzysowe. 
                Nowoczesne technologie ułatwiają śledzenie i komunikację.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="article-section">
          <h2>Ryzyka w podróżach służbowych — klasyfikacja i zarządzanie</h2>
          
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Rodzaj ryzyka</th>
                  <th>Przykłady</th>
                  <th>Środki zaradcze</th>
                  <th>Poziom zagrożenia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bezpieczeństwo publiczne</td>
                  <td>Terroryzm, przestępczość, protesty</td>
                  <td>Monitoring, unikanie stref ryzyka, ochrona</td>
                  <td>Wysoki</td>
                </tr>
                <tr>
                  <td>Zdrowotne</td>
                  <td>Choroby zakaźne, wypadki, stres</td>
                  <td>Szczepienia, ubezpieczenie, telemedycyna</td>
                  <td>Średni-Wysoki</td>
                </tr>
                <tr>
                  <td>Logistyczne</td>
                  <td>Opóźnienia, odwołania, stracony bagaż</td>
                  <td>Plany awaryjne, rezerwacje, tracking</td>
                  <td>Średni</td>
                </tr>
                <tr>
                  <td>Klimatyczne</td>
                  <td>Katastrofy naturalne, ekstrema pogodowe</td>
                  <td>Monitoring, plany ewakuacji, ostrzeżenia</td>
                  <td>Zmienny</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="article-section">
          <h2>Ubezpieczenie podróży służbowych — kluczowe aspekty</h2>
          <p>
            Odpowiednie ubezpieczenie to fundament programu duty of care. Polisa musi być 
            kompleksowa i dostosowana do specyfiki podróży. Kluczowe elementy to: ubezpieczenie 
            kosztów leczenia z wysokimi limitami (minimum 500 000 EUR w Europie, 1 000 000 EUR 
            globalnie), ubezpieczenie NNW, assistance 24/7 z polskojęzycznym wsparciem, 
            transport medyczny, ewakuacja medyczna, oraz ubezpieczenie odpowiedzialności 
            cywilnej. Dla podróży do stref wysokiego ryzyka konieczne jest dodatkowe 
            ubezpieczenie kidnapping and ransom (K&R).
          </p>
        </section>

        <section className="article-section">
          <h2>Technologie wspierające duty of care</h2>
          <p>
            Nowoczesne technologie znacząco ułatwiają realizację obowiązków duty of care. 
            Kluczowe rozwiązania to: aplikacje mobilne z alertami bezpieczeństwa, systemy 
            GPS tracking, platformy monitoringu ryzyka (np. International SOS, Riskline), 
            automatyczne powiadomienia o zagrożeniach, narzędzia komunikacji kryzysowej, 
            oraz systemy zarządzania podróżami zintegrowane z danymi o bezpieczeństwie. 
            AI i machine learning pozwalają na predykcję zagrożeń i proaktywne działania.
          </p>
        </section>

        <section className="article-section">
          <h2>Procedury kryzysowe i komunikacja awaryjna</h2>
          <p>
            Skuteczne procedury kryzysowe są kluczowe dla ochrony pracowników. Muszą obejmować: 
            jasno zdefiniowany łańcuch komunikacji, listę kontaktów awaryjnych, procedury 
            ewakuacji, plany działania w różnych scenariuszach (atak terrorystyczny, 
            katastrofa naturalna, nagła choroba), oraz regularne testy procedur. Komunikacja 
            musi być szybka, klarowna i wielokanałowa. Kluczowe jest również wsparcie 
            psychologiczne dla pracowników po przeżyciu sytuacji kryzysowej.
          </p>
        </section>

        <section className="article-section">
          <h2>Szkolenia i przygotowanie pracowników</h2>
          <p>
            Dobrze przygotowany pracownik jest bezpieczniejszy. Szkolenia powinny obejmować: 
            podstawy bezpieczeństwa podróży, pierwszą pomoc, kulturowe aspekty delegacji, 
            procedury awaryjne, oraz specyficzne zagrożenia destynacji. Szkolenia powinny 
            być obowiązkowe dla wszystkich podróżujących pracowników i regularnie odświeżane. 
            Dodatkowo warto przygotować materiały informacyjne i checklists podróży.
          </p>
        </section>

        <section className="article-section">
          <h2>Monitoring i wsparcie podczas podróży</h2>
          <p>
            Aktywny monitoring bezpieczeństwa pracownika podczas podróży jest kluczowy. 
            Obejmuje: regularny kontakt, śledzenie lokalizacji (za zgodą pracownika), 
            monitoring sytuacji w destynacji, oraz szybkie reagowanie na zagrożenia. 
            Pracownik musi mieć dostęp do pomocy 24/7 i znać procedury zgłaszania 
            problemów. Warto również wyznaczyć koordynatora bezpieczeństwa podróży 
            w firmie.
          </p>
        </section>

        <section className="article-section">
          <h2>Opieka po powrocie z delegacji</h2>
          <p>
            Duty of care nie kończy się z powrotem pracownika. Opieka powrotna obejmuje: 
            debriefing podróży, ocenę doświadczeń, wsparcie心理ologiczne (jeśli potrzebne), 
            aktualizację procedur na podstawie wniosków, oraz monitorowanie zdrowia 
            pracownika po podróży do stref wysokiego ryzyka. Feedback od pracowników 
            jest cennym źródłem informacji do ulepszania programu bezpieczeństwa.
          </p>
        </section>

        <section className="article-section">
          <h2>Konsekwencje naruszenia duty of care</h2>
          <p>
            Naruszenie obowiązków duty of care może prowadzić do poważnych konsekwencji. 
            Aspekty prawne: odpowiedzialność cywilna z tytułu szkód na zdrowiu lub życiu, 
            odpowiedzialność karna za narażenie na niebezpieczeństwo, administracyjne kary 
            od inspekcji pracy, oraz postępowania sądowe. Aspekty finansowe: odszkodowania, 
            zadośćuczynienia, koszty procesów sądowych, oraz wzrost składek ubezpieczeniowych. 
            Aspekty biznesowe: utrata reputacji, problemy z rekrutacją, spadek morale, 
            oraz utrata zaufania pracowników.
          </p>
        </section>

        <section className="article-section">
          <h2>Najlepsze praktyki i benchmarking</h2>
          <p>
            Liderzy w zakresie duty of care stosują sprawdzone praktyki: holistyczne podejście 
            do bezpieczeństwa, zaangażowanie najwyższego zarządu, regularne audyty i 
            aktualizacje procedur, wykorzystanie nowoczesnych technologii, partnerstwo 
            z profesjonalnymi firmami security, oraz kulturę bezpieczeństwa w organizacji. 
            Warto benchmarkować swoje rozwiązania wobec najlepszych praktyk branżowych 
            i regularnie mierzyć efektywność programu.
          </p>
        </section>

        <section className="faq-section" id="faq">
          <h2>Najczęstsze pytania</h2>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Co to jest duty of care w podróżach służbowych?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Duty of care to prawny i moralny obowiązek pracodawcy zapewnienia bezpieczeństwa, 
                  ochrony zdrowia i wellbeing pracownikom podczas podróży służbowych. Obejmuje 
                  przygotowanie, wsparcie podczas podróży i pomoc w sytuacjach kryzysowych.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jakie są podstawowe obowiązki pracodawcy w zakresie duty of care?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Podstawowe obowiązki to: ocena ryzyka podróży, dostarczenie informacji o zagrożeniach, 
                  ubezpieczenie podróży, dostęp do pomocy medycznej, wsparcie w sytuacjach awaryjnych, 
                  oraz monitoring bezpieczeństwa pracowników.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy duty of care jest prawnie wymagane w Polsce?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Tak, obowiązek dbania o bezpieczeństwo pracowników wynika z Kodeksu Pracy, 
                  dyrektyw UE i przepisów BHP. Choć termin 'duty of care' nie jest bezpośrednio 
                  używany w polskim prawie, jego zasady są prawnie wiążące.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jakie ubezpieczenie jest wymagane w podróżach służbowych?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Wymagane jest ubezpieczenie kosztów leczenia, NNW, ubezpieczenie bagażu i 
                  odpowiedzialności cywilnej. Dla podróży międzynarodowych konieczne jest również 
                  ubezpieczenie transportu medycznego i assistance.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jakie są konsekwencje naruszenia duty of care?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Konsekwencje mogą obejmować odpowiedzialność cywilną, karną, administracyjne kary, 
                  wypłaty odszkodowań, utratę reputacji firmy, oraz negatywny wpływ na morale 
                  pracowników i rekrutację.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="article-cta">
          <h3>Chcesz wdrożyć kompleksowy program duty of care?</h3>
          <p>
            Skontaktuj się z nami aby uzyskać profesjonalne doradztwo w zakresie ochrony 
            pracowników podczas podróży służbowych. Pomożemy Ci opracować i wdrożyć 
            skuteczny program bezpieczeństwa zgodny z najlepszymi praktykami.
          </p>
          <a href="https://claimwinger.com/pl/firmy" className="cta-button">
            Doradztwo duty of care →
          </a>
          <a href="https://claimwinger.com/pl/kontakt" className="cta-button cta-button--secondary">
            Audyt bezpieczeństwa podróży →
          </a>
        </div>
      </article>
    </>
  );
};

export default DutyOfCarePodroze;
