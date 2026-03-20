import React from 'react';
import Head from 'next/head';

const BiletSluzbowyFirmaReklamacja = () => {
  const articleData = {
    title: "Bilet służbowy kupiony przez firmę — kto składa reklamację",
    description: "Bilet służbowy kupiony przez firmę budzi wątpliwości co do uprawnień. Sprawdź kto ma prawo składać reklamację i dochodzić odszkodowania za lot służbowy.",
    slug: "bilet-sluzbowy-firma-reklamacja-kto-sklada",
    cluster: "K1",
    keyword_primary: "bilet służbowy firma reklamacja",
    keywords_secondary: "odszkodowanie bilet firmowy, kto składa reklamację lot służbowy, EC 261 bilet kupiony przez pracodawcę",
    reading_time: "7 min",
    internal_links: ["EC 261/2004 a loty służbowe — co obejmuje rozporządzenie", "Overbooking na locie służbowym — prawa pracownika i pracodawcy"],
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
        "name": "Kto składa reklamację gdy bilet służbowy kupiła firma?",
        "acceptedAnswer": {"@type": "Answer", "text": "Reklamację za bilet służbowy składa pracownik jako pasażer, ponieważ odszkodowanie z EC 261/2004 należy się osobie fizycznej która poniósła niedogodności podróży."}
      },
      {
        "@type": "Question",
        "name": "Czy pracodawca może odmówić zgody na reklamację?",
        "acceptedAnswer": {"@type": "Answer", "text": "Nie, pracodawca nie może odmówić zgody na reklamację ponieważ odszkodowanie jest osobistym prawem pracownika i nie zależy od zgody pracodawcy."}
      },
      {
        "@type": "Question",
        "name": "Czy odszkodowanie przysługuje firmie czy pracownikowi?",
        "acceptedAnswer": {"@type": "Answer", "text": "Odszkodowanie z EC 261/2004 przysługuje wyłącznie pracownikowi jako osobie fizycznej. Firma może dochodzić jedynie zwrotu kosztów poniesionych na delegację."}
      },
      {
        "@type": "Question",
        "name": "Jakie dokumenty potrzebne są do reklamacji biletu służbowego?",
        "acceptedAnswer": {"@type": "Answer", "text": "Do reklamacji biletu służbowego potrzebne są: kopia biletu, karta pokładowa, dokument tożsamości oraz dowód problemu z lotem (zdjęcie tablicy, komunikat linii)."}
      },
      {
        "@type": "Question",
        "name": "Czy pracodawca może zająć sobie odszkodowanie pracownika?",
        "acceptedAnswer": {"@type": "Answer", "text": "Nie, pracodawca nie może zająć sobie odszkodowania pracownika ponieważ jest to osobiste prawo pasażera i nie podlega egzekucji przez pracodawcę."}
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
            Bilet służbowy kupiony przez firmę to częsta sytuacja która budzi wątpliwości 
            co do uprawnień do odszkodowania. Kluczowa zasada jest prosta: odszkodowanie z EC 261/2004 
            należy się pracownikowi jako osobie fizycznej, niezależnie od tego kto finansował podróż. 
            W tym artykule wyjaśniamy kto ma prawo składać reklamację i jak dochodzić swoich praw.
          </p>
          <div className="article-highlights">
            <div className="highlight-item">✓ Reklamację składa pracownik jako pasażer</div>
            <div className="highlight-item">✓ Odszkodowanie należy się pracownikowi, nie firmie</div>
            <div className="highlight-item">✓ Pracodawca nie może odmówić zgody na reklamację</div>
          </div>
        </header>

        <div className="key-takeaways">
          <h3>Najważniejsze informacje</h3>
          <ul>
            <li>Odszkodowanie z EC 261/2004 należy się pracownikowi jako osobie fizycznej</li>
            <li>Reklamację składa pracownik niezależnie od tego kto kupił bilet</li>
            <li>Pracodawca może dochodzić jedynie zwrotu kosztów delegacji</li>
            <li>Odszkodowanie jest osobistym prawem i nie podlega egzekucji przez pracodawcę</li>
          </ul>
        </div>

        <section className="article-section">
          <h2>Kto jest pasażerem w rozumieniu prawa lotniczego?</h2>
          <p>
            W rozumieniu prawa lotniczego i rozporządzenia WE 261/2004, pasażerem jest osoba fizyczna 
            która jest przewożona lub ma być przewożona na podstawie umowy przewozu. Kluczowe jest to że 
            uprawnienia przysługują osobie fizycznej, a nie podmiotowi który finansował podróż. 
            Oznacza to że nawet gdy bilet służbowy kupiła firma, to pracownik jako pasażer zachowuje 
            wszystkie prawa przewidziane dla pasażerów, w tym prawo do odszkodowania.
          </p>
          
          <div className="callout callout--info">
            <span className="callout__icon">ℹ</span>
            <div className="callout__content">
              <strong>Ważne:</strong> Status pasażera nie zależy od celu podróży, ceny biletu ani tego kto jest płatnikiem. 
              Liczy się tylko fakt bycia osobą przewożoną.
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Podstawa prawna — EC 261/2004 a osoba fizyczna</h2>
          <p>
            Rozporządzenie Parlamentu Europejskiego i Rady (WE) nr 261/2004 wprost odnosi się do "pasażerów" 
            jako osób fizycznych. W preambule i przepisach rozporządzenia wielokrotnie podkreśla się że 
            ochroną objęte są osoby fizyczne podróżujące samolotem. Trybunał Sprawiedliwości UE w licznych 
            orzeczeniach potwierdził że uprawnienia z EC 261/2004 mają charakter osobisty i przysługują 
            wyłącznie osobie fizycznej która poniósła niedogodności podróży.
          </p>
        </section>

        <section className="article-section">
          <h2>Reklamacja — kto formalnie składa roszczenie</h2>
          <p>
            Reklamację za problemy z lotem służbowym składa wyłącznie pracownik jako pasażer. 
            To pracownik jest stroną umowy przewozu i to on poniósł niedogodności podróży. 
            Pracodawca, nawet jako płatnik, nie ma legitymacji procesowej do składania reklamacji 
            w imieniu pracownika o odszkodowanie z EC 261/2004. Pracownik może oczywiście skorzystać 
            z pomocy pracodawcy w przygotowaniu reklamacji, ale musi być jej formalnym autorem.
          </p>
        </section>

        <section className="article-section">
          <h2>Rola pracodawcy — pomoc i wsparcie pracownika</h2>
          <p>
            Pracodawca odgrywa ważną rolę w procesie dochodzenia praw przez pracownika. 
            Może i powinien zapewnić pracownikowi: dostęp do dokumentacji podróży (bilet, rezerwacja), 
            pomoc w przygotowaniu reklamacji, potwierdzenie statusu podróży służbowej, 
            oraz zwrot kosztów poniesionych w wyniku problemów z lotem. 
            Pracodawca nie może jednak ograniczać prawa pracownika do składania reklamacji 
            ani żądać przelewu odszkodowania na konto firmy.
          </p>
        </section>

        <section className="article-section">
          <h2>Odszkodowanie pracownika vs zwrot kosztów firmy</h2>
          
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Rodzaj roszczenia</th>
                  <th>Uprawniony</th>
                  <th>Podstawa prawna</th>
                  <th>Maksymalna kwota</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Odszkodowanie za niedogodności</td>
                  <td>Pracownik</td>
                  <td>EC 261/2004</td>
                  <td>250-600 EUR</td>
                </tr>
                <tr>
                  <td>Zwrot kosztów delegacji</td>
                  <td>Pracodawca</td>
                  <td>Umowa o pracę, przepisy pracy</td>
                  <td>Rzeczywiste koszty</td>
                </tr>
                <tr>
                  <td>Straty biznesowe</td>
                  <td>Pracodawca</td>
                  <td>Kodeks cywilny</td>
                  <td>Udowodnione straty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="article-section">
          <h2>Orzecznictwo TSUE — potwierdzenie praw pracownika</h2>
          <p>
            Trybunał Sprawiedliwości Unii Europejskiej w licznych orzeczeniach potwierdził że 
            uprawnienia z EC 261/2004 mają charakter osobisty i przysługują wyłącznie pasażerom 
            jako osobom fizycznym. Kluczowe wyroki, particularly w sprawach C-402/07 (Sturgeon) 
            oraz C-549/07 (Wallentin-Hermann), jednoznacznie stwierdzają że status pasażera 
            i związane z nim prawa nie zależą od tego kto finansował podróż ani jaki był jej cel. 
            To solidna podstawa prawna dla pracowników dochodzących swoich praw.
          </p>
        </section>

        <section className="article-section">
          <h2>Praktyczne problemy — jak sobie z nimi radzić</h2>
          <p>
            W praktyce pracownicy spotykają się z różnymi problemami przy dochodzeniu praw 
            za bilety służbowe. Najczęstsze to: brak dokumentacji (bilet jest na firmę), 
            presja pracodawcy aby nie składać reklamacji, obawa o konsekwencje w pracy, 
            oraz nieznajomość procedur. Rozwiązaniem jest: prośba o kopie dokumentów od działu HR, 
            skorzystanie z pomocy prawnej, złożenie reklamacji prywatnie, oraz poinformowanie się 
            o swoich prawach z EC 261/2004.
          </p>
        </section>

        <section className="article-section">
          <h2>Procedura reklamacyjna krok po kroku</h2>
          
          <ol className="steps-list">
            <li className="step">
              <span className="step__number">1</span>
              <div className="step__content">
                <strong>Zbierz dokumentację</strong>
                <p>Poproś dział HR o kopię biletu, rezerwacji i potwierdzenia podróży służbowej. 
                Zbierz dowody problemu z lotem (zdjęcia, komunikaty).</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">2</span>
              <div className="step__content">
                <strong>Wypełnij formularz reklamacji</strong>
                <p>Wypełnij formularz reklamacji linii lotniczej jako osoba fizyczna. 
                Podaj swoje dane osobowe, nie dane firmy.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">3</span>
              <div className="step__content">
                <strong>Wyślij reklamację</strong>
                <p>Wyślij reklamację listem poleconym lub przez formularz online. 
                  Dołącz kopie dokumentów i dowody problemu z lotem.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">4</span>
              <div className="step__content">
                <strong>Odbierz odszkodowanie</strong>
                <p>Odszkodowanie zostanie wypłacone bezpośrednio na Twoje konto. 
                Nie musisz przelewać go pracodawcy — to Twoje osobiste prawo.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="article-section">
          <h2>Aspekty podatkowe odszkodowania pracownika</h2>
          <p>
            Odszkodowanie z EC 261/2004 wypłacone pracownikowi jest zazwyczaj zwolnione 
            z podatku dochodowego od osób fizycznych. Zgodnie z art. 21 ust. 1 pkt 3b ustawy 
            o PIT, zwolnione z podatku są odszkodowania za szkody osobiste poniesione 
            w związku z wypadkami lub chorobami. Niedogodności podróży lotniczej 
            kwalifikują się jako szkoda osobista. Odszkodowanie nie jest również przychodem 
            pracownika w rozumieniu przepisów prawa pracy.
          </p>
        </section>

        <section className="article-section">
          <h2>Firmy odszkodowawcze a bilety służbowe</h2>
          <p>
            Firmy specjalizujące się w odzyskiwaniu odszkodowań lotniczych często mają 
            doświadczenie w sprawach z biletami służbowymi. Mogą pomóc w: przygotowaniu 
            profesjonalnej reklamacji, zebraniu odpowiedniej dokumentacji, prowadzeniu 
            negocjacji z linią lotniczą, oraz reprezentowaniu pracownika przed sądem. 
            Większość z tych firm działa na zasadzie no win no fee, więc pracownik 
            nie ponosi żadnych kosztów początkowych.
          </p>
        </section>

        <section className="faq-section" id="faq">
          <h2>Najczęstsze pytania</h2>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Kto składa reklamację gdy bilet służbowy kupiła firma?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Reklamację za bilet służbowy składa pracownik jako pasażer, ponieważ odszkodowanie z EC 261/2004 
                  należy się osobie fizycznej która poniósła niedogodności podróży, niezależnie od tego kto kupił bilet.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy pracodawca może odmówić zgody na reklamację?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Nie, pracodawca nie może odmówić zgody na reklamację ponieważ odszkodowanie jest osobistym 
                  prawem pracownika i nie zależy od zgody pracodawcy ani celu podróży.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy odszkodowanie przysługuje firmie czy pracownikowi?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Odszkodowanie z EC 261/2004 przysługuje wyłącznie pracownikowi jako osobie fizycznej. 
                  Firma może dochodzić jedynie zwrotu kosztów poniesionych na delegację, ale nie odszkodowania za niedogodności.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jakie dokumenty potrzebne są do reklamacji biletu służbowego?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Do reklamacji biletu służbowego potrzebne są: kopia biletu, karta pokładowa, dokument tożsamości 
                  oraz dowód problemu z lotem (zdjęcie tablicy odlotów, komunikat linii lotniczej).
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy pracodawca może zająć sobie odszkodowanie pracownika?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Nie, pracodawca nie może zająć sobie odszkodowania pracownika ponieważ jest to osobiste prawo 
                  pasażera i nie podlega egzekucji przez pracodawcę ani potrąceniu z wynagrodzenia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="article-cta">
          <h3>Twój bilet służbowy był opóźniony lub odwołany?</h3>
          <p>
            Sprawdź bezpłatnie, czy należy Ci się odszkodowanie do 600 EUR. ClaimWinger pomoże Ci odzyskać 
            należności niezależnie od tego kto kupił bilet — prawo do odszkodowania jest Twoje jako pasażera.
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

export default BiletSluzbowyFirmaReklamacja;
