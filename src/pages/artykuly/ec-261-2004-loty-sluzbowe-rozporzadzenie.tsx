import React from 'react';
import Head from 'next/head';

const EC261LotySluzbowe = () => {
  const articleData = {
    title: "EC 261/2004 a loty służbowe — co obejmuje rozporządzenie",
    description: "Rozporządzenie EC 261/2004 chroni pracowników w podróży służbowej. Sprawdź jakie prawa przysługują przy opóźnionych, odwołanych lotach i overbookingu.",
    slug: "ec-261-2004-loty-sluzbowe-rozporzadzenie",
    cluster: "K1",
    keyword_primary: "EC 261/2004 loty służbowe",
    keywords_secondary: "prawa pasażera delegacja, rozporządzenie WE 261 podróże służbowe, odszkodowanie lot biznesowy UE",
    reading_time: "10 min",
    internal_links: ["Overbooking na locie służbowym — prawa pracownika i pracodawcy", "Odwołany lot służbowy — jak odzyskać koszty hotelu i przesiadki"],
    cta_url: "https://claimwinger.com/pl/opozniony-lot"
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
        "name": "Czy EC 261/2004 dotyczy lotów służbowych?",
        "acceptedAnswer": {"@type": "Answer", "text": "Tak, rozporządzenie EC 261/2004 w pełni dotyczy lotów służbowych niezależnie od tego kto finansuje podróż i celu wyjazdu."}
      },
      {
        "@type": "Question",
        "name": "Kiedy przysługuje odszkodowanie z EC 261/2004?",
        "acceptedAnswer": {"@type": "Answer", "text": "Odszkodowanie z EC 261/2004 przysługuje przy odwołanym lotu, opóźnieniu powyżej 3 godzin oraz odmowie przyjęcia na pokład z powodu overbookingu."}
      },
      {
        "@type": "Question",
        "name": "Czy pracodawca może przejąć odszkodowanie z EC 261/2004?",
        "acceptedAnswer": {"@type": "Answer", "text": "Nie, pracodawca nie może przejąć odszkodowania z EC 261/2004 ponieważ należy ono pracownikowi jako osoba fizyczna która poniosła niedogodności podróży."}
      },
      {
        "@type": "Question",
        "name": "Jakie loty obejmuje EC 261/2004?",
        "acceptedAnswer": {"@type": "Answer", "text": "EC 261/2004 obejmuje wszystkie loty wylatujące z UE oraz loty przylatujące do UE wykonywane przez linie lotnicze z UE, w tym wszystkie loty służbowe."}
      },
      {
        "@type": "Question",
        "name": "Jakie są wyjątki w EC 261/2004?",
        "acceptedAnswer": {"@type": "Answer", "text": "Wyjątki w EC 261/2004 to nadzwyczajne okoliczności jak warunki pogodowe, niestabilność polityczna, strajki oraz ukryte wady konstrukcyjne samolotu."}
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
            <span className="category">Prawa pasażera w podróży służbowej</span>
            <span className="reading-time">{articleData.reading_time} czytania</span>
          </div>
          <h1>{articleData.title}</h1>
          <p className="lead">
            Rozporządzenie WE 261/2004 to fundament ochrony praw pasażerów w Unii Europejskiej, 
            w pełni zastosowalny do podróży służbowych. Niezależnie od tego kto finansuje bilet, pracownik 
            zachowuje wszystkie prawa pasażera i może dochodzić odszkodowania do 600 EUR. 
            W tym przewodniku szczegółowo wyjaśniamy zakres i zastosowanie rozporządzenia w kontekście biznesowym.
          </p>
          <div className="article-highlights">
            <div className="highlight-item">✓ Pełne prawa pasażera również w podróżach służbowych</div>
            <div className="highlight-item">✓ Odszkodowanie do 600 EUR niezależnie od celu podróży</div>
            <div className="highlight-item">✓ Obejmuje loty z UE oraz do UE liniami europejskimi</div>
          </div>
        </header>

        <div className="key-takeaways">
          <h3>Najważniejsze informacje</h3>
          <ul>
            <li>EC 261/2004 w pełni chroni pracowników w podróżach służbowych</li>
            <li>Odszkodowanie należy się pracownikowi, nie pracodawcy</li>
            <li>Rozporządzenie obejmuje opóźnienia, odwołania i overbooking</li>
            <li>Pomoc natychmiastowa przysługuje zawsze, nawet przy nadzwyczajnych okolicznościach</li>
          </ul>
        </div>

        <section className="article-section">
          <h2>Czym jest rozporządzenie WE 261/2004?</h2>
          <p>
            Rozporządzenie Parlamentu Europejskiego i Rady (WE) nr 261/2004 z dnia 11 lutego 2004 roku 
            ustanawia wspólne zasady odszkodowania i pomocy dla pasażerów w przypadku odmowy przyjęcia na pokład 
            albo odwołania lub dużego opóźnienia lotów. Jest to akt prawa unijnego który ma bezpośrednie zastosowanie 
            we wszystkich państwach członkowskich UE. Rozporządzenie tworzy jednolity system ochrony pasażerów 
            niezależnie od ich obywatelstwa, miejsca zamieszkania czy celu podróży, w tym celów służbowych.
          </p>
          
          <div className="callout callout--info">
            <span className="callout__icon">ℹ</span>
            <div className="callout__content">
              <strong>Ważne:</strong> Rozporządzenie WE 261/2004 ma wyższość nad prawem krajowym i musi być stosowane 
              przez wszystkie linie lotnicze operujące w UE.
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Zakres terytorialny — które loty obejmuje rozporządzenie</h2>
          <p>
            Rozporządzenie WE 261/2004 ma zastosowanie do trzech kategorii lotów: wszystkich lotów wylatujących 
            z lotnisk znajdujących się na terytorium państwa członkowskiego UE, lotów przylatujących do lotnisk 
            UE z państw trzecich wykonywanych przez przewoźników lotniczych z UE oraz lotów między państwami 
            członkowskimi UE. Oznacza to że pracownik podróżujący służbowo z Warszawy do Nowego Jorku liniami 
            LOT jest chroniony, podobnie jak podróżujący z Londynu do Warszawy liniami British Airways. 
            Rozporządzenie nie ma zastosowania do lotów spoza UE wykonywanych przez linie lotnicze spoza Unii.
          </p>
        </section>

        <section className="article-section">
          <h2>Podróż służbowa a cel podróży — czy to ma znaczenie?</h2>
          <p>
            Rozporządzenie WE 261/2004 nie dokonuje żadnego rozróżnienia między podróżami prywatnymi a służbowymi. 
            Prawa pasażera są identyczne niezależnie od celu podróży, ceny biletu czy tego kto go finansuje. 
            Pracownik w delegacji ma dokładnie takie same prawa jak turysta na wakacjach. Oznacza to że 
            odszkodowanie za opóźniony czy odwołany lot służbowy przysługuje pracownikowi jako osobie fizycznej, 
            a nie pracodawcy który finansował podróż.
          </p>
        </section>

        <section className="article-section">
          <h2>Podstawa prawna odszkodowania — kiedy przysługuje rekompensata</h2>
          
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Sytuacja</th>
                  <th>Wysokość odszkodowania</th>
                  <th>Warunki</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Odwołany lot</td>
                  <td>250-600 EUR</td>
                  <td>Zawsze, chyba że pasażer został poinformowany co najmniej 2 tygodnie wcześniej</td>
                </tr>
                <tr>
                  <td>Opóźnienie powyżej 3 godzin</td>
                  <td>250-600 EUR</td>
                  <td>Jeśli linia lotnicza nie oferuje alternatywnego połączenia</td>
                </tr>
                <tr>
                  <td>Odmowa przyjęcia (overbooking)</td>
                  <td>250-600 EUR</td>
                  <td>Zawsze, niezależnie od przyczyny</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="callout callout--warning">
            <span className="callout__icon">⚠</span>
            <div className="callout__content">
              <strong>Uwaga:</strong> Odszkodowanie nie przysługuje w przypadku nadzwyczajnych okoliczności których nie można było uniknąć.
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Pomoc natychmiastowa — co zawsze przysługuje pasażerowi</h2>
          <p>
            Pomoc natychmiastowa przysługuje zawsze, nawet w przypadku nadzwyczajnych okoliczności. 
            Obejmuje ona posiłki i napoje odpowiednie do czasu oczekiwania, zakwaterowanie w hotelu gdy 
            konieczny jest nocleg, transport z lotniska do hotelu i z powrotem oraz możliwość bezpłatnego 
            przekazania dwóch wiadomości fax lub e-mail. Pomoc ta przysługuje niezależnie od przyczyny 
            problemów z lotem i stanowi minimum obowiązkowe które linia lotnicza musi zapewnić.
          </p>
        </section>

        <section className="article-section">
          <h2>Nadzwyczajne okoliczności — kiedy odszkodowanie nie przysługuje</h2>
          <p>
            Rozporządzenie przewiduje wyjątek od obowiązku wypłaty odszkodowania w przypadku nadzwyczajnych 
            okoliczności których nie można było uniknąć nawet przy zachowaniu wszelkich racjonalnych środków ostrożności. 
            Do takich okoliczności zalicza się: niestabilność sytuacji politycznej w państwie trzecim, 
            warunki meteorologiczne niekompatybilne z bezpieczeństwem lotu, ryzyko bezpieczeństwa, 
            nagłe strajki personelu lotniskowego oraz ukryte wady konstrukcyjne samolotu ujawnione przez producenta. 
            Ważne: nawet w tych przypadkach pomoc natychmiastowa wciąż przysługuje.
          </p>
        </section>

        <section className="article-section">
          <h2>Procedura dochodzenia praw krok po kroku</h2>
          
          <ol className="steps-list">
            <li className="step">
              <span className="step__number">1</span>
              <div className="step__content">
                <strong>Zgłoś roszczenie bezpośrednio do linii lotniczej</strong>
                <p>W pierwszej kolejności złożyć reklamację bezpośrednio u przewoźnika. Linia ma 6 tygodni na odpowiedź. 
                W reklamacji podaj numer lotu, dane personalne i żądanie odszkodowania.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">2</span>
              <div className="step__content">
                <strong>Skorzystaj z formularza UE</strong>
                <p>Jeśli linia lotnicza nie odpowiada lub odmawia, można skorzystać ze standardowego formularza 
                skargi dostępnego na stronach Komisji Europejskiej.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">3</span>
              <div className="step__content">
                <strong>Zwróć się do organu nadzoru lotniczego</strong>
                <p>W Polsce jest to Urząd Lotnictwa Cywilnego. Organ może mediatować w sporze i wydać 
                wiążącą dla linii lotniczej decyzję.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">4</span>
              <div className="step__content">
                <strong>Droga sądowa lub firma odszkodowawcza</strong>
                <p>Ostateczną opcją jest pozew sądowy lub skorzystanie z firm specjalizujących się 
                w odzyskiwaniu odszkodowań lotniczych na zasadzie no win no fee.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="article-section">
          <h2>Pracodawca a prawa pracownika z EC 261/2004</h2>
          <p>
            Pracodawca nie ma żadnych praw do odszkodowania z tytułu EC 261/2004, nawet jeśli finansował podróż służbową. 
            Odszkodowanie należy się wyłącznie pracownikowi jako osobie która poniósła niedogodności podróży. 
            Pracodawca ma jednak obowiązek zwrócić pracownikowi koszty delegacji poniesione w wyniku problemów 
          </p>
        </section>

        <section className="article-section">
          <h2>Dokumentacja konieczna do dochodzenia praw</h2>
          <p>
            Aby skutecznie dochodzić praw z EC 261/2004 niezbędna jest odpowiednia dokumentacja. 
            Należy zachować: bilet lotniczy i potwierdzenie rezerwacji, kartę pokładową, 
            dokument tożsamości, korespondencję z linią lotniczą, rachunki za dodatkowe wydatki 
            oraz ewentualne zaświadczenia lekarskie w przypadku problemów zdrowotnych. 
            Im lepsza dokumentacja, tym większa szansa na pozytywne rozstrzygnięcie sprawy.
          </p>
        </section>

        <section className="article-section">
          <h2>Orzecznictwo sądów UE — kluczowe wyroki</h2>
          <p>
            Orzecznictwo Trybunału Sprawiedliwości UE precyzuje wiele kwestii związanych z EC 261/2004. 
            Kluczowy wyrok w sprawie C-549/07 (Wallentin-Hermann) określił kiedy opóźnienie lotu 
            staje się odwołaniem w rozumieniu rozporządzenia. Wyrok w sprawie C-402/07 (Sturgeon) 
            potwierdził prawo do odszkodowania przy długich opóźnieniach. Orzecznictwo to 
            systematycznie rozszerza ochronę pasażerów i precyzuje obowiązków linii lotniczych.
          </p>
        </section>

        <section className="article-section">
          <h2>Praktyczne wskazówki dla podróżnych służbowych</h2>
          <p>
            Pracownicy podróżujący służbowo powinni zawsze: sprawdzać status lotu przed wyjazdem na lotnisko, 
            przybyć na lotnisko z odpowiednim wyprzedzeniem, zachować wszystkie dokumenty podróży, 
            robić zdjęcia tablic odlotów w przypadku problemów, natychmiast zgłaszać roszczenia 
            do linii lotniczej oraz informować pracodawcę o problemach z podróżą. 
            Warto również mieć numer telefonu do działu HR lub osoby odpowiedzialnej za podróże służbowe.
          </p>
        </section>

        <section className="faq-section" id="faq">
          <h2>Najczęstsze pytania</h2>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy EC 261/2004 dotyczy lotów służbowych?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Tak, rozporządzenie EC 261/2004 w pełni dotyczy lotów służbowych niezależnie od tego kto finansuje podróż 
                  i celu wyjazdu. Pracownik zachowuje wszystkie prawa pasażera.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Kiedy przysługuje odszkodowanie z EC 261/2004?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Odszkodowanie z EC 261/2004 przysługuje przy odwołanym lotu, opóźnieniu powyżej 3 godzin 
                  oraz odmowie przyjęcia na pokład z powodu overbookingu, z wyjątkiem nadzwyczajnych okoliczności.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy pracodawca może przejąć odszkodowanie z EC 261/2004?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Nie, pracodawca nie może przejąć odszkodowania z EC 261/2004 ponieważ należy ono pracownikowi 
                  jako osoba fizyczna która poniosła niedogodności podróży.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jakie loty obejmuje EC 261/2004?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  EC 261/2004 obejmuje wszystkie loty wylatujące z UE oraz loty przylatujące do UE wykonywane 
                  przez linie lotnicze z UE, w tym wszystkie loty służbowe na tych trasach.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jakie są wyjątki w EC 261/2004?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Wyjątki w EC 261/2004 to nadzwyczajne okoliczności jak warunki pogodowe, niestabilność polityczna, 
                  strajki oraz ukryte wady konstrukcyjne samolotu. Pomoc natychmiastowa przysługuje zawsze.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="article-cta">
          <h3>Twój lot służbowy był opóźniony lub odwołany?</h3>
          <p>
            Sprawdź bezpłatnie, czy należy Ci się odszkodowanie do 600 EUR z tytułu EC 261/2004. 
            ClaimWinger działa na zasadzie no win, no fee — płacisz tylko gdy wygrasz.
          </p>
          <a href="https://claimwinger.com/pl/opozniony-lot" className="cta-button">
            Sprawdź odszkodowanie za opóźniony lot →
          </a>
          <a href="https://claimwinger.com/pl/odwolany-lot" className="cta-button cta-button--secondary">
            Sprawdź odszkodowanie za odwołany lot →
          </a>
        </div>
      </article>
    </>
  );
};

export default EC261LotySluzbowe;
