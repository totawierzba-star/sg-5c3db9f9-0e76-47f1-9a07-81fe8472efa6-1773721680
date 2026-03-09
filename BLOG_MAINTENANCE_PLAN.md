# 📋 Plan Diagnozy i Rozwiązania Problemu z Widocznością Artykułów na Blogu

## 🔍 DIAGNOZA PROBLEMU

### Krok 1: Weryfikacja Pliku Źródłowego
**Cel:** Sprawdzić czy wszystkie artykuły są w `src/lib/blogArticles.ts`

**Akcje:**
1. ✅ Otworzyć plik `src/lib/blogArticles.ts`
2. ✅ Policzyć wszystkie wpisy w tablicy `blogArticles`
3. ✅ Zweryfikować strukturę każdego wpisu (slug, title, date, etc.)
4. ✅ Sprawdzić czy nie ma duplikatów slug

**Oczekiwany wynik:** 45 unikalnych wpisów

---

### Krok 2: Weryfikacja Plików Artykułów
**Cel:** Upewnić się, że wszystkie pliki .tsx istnieją w `src/pages/blog/`

**Akcje:**
1. ✅ Porównać listę slug z blogArticles.ts z rzeczywistymi plikami
2. ✅ Sprawdzić czy każdy plik ma poprawną strukturę
3. ✅ Zweryfikować czy wszystkie pliki kompilują się bez błędów

**Oczekiwany wynik:** Każdy slug ma odpowiadający plik .tsx

---

### Krok 3: Weryfikacja Strony Blog Index
**Cel:** Sprawdzić jak strona `/blog` pobiera i wyświetla artykuły

**Akcje:**
1. ✅ Otworzyć plik `src/pages/blog/index.tsx`
2. ✅ Sprawdzić import z `@/lib/blogArticles`
3. ✅ Zweryfikować filtrowanie/mapowanie artykułów
4. ✅ Sprawdzić czy nie ma limitów wyświetlania

**Potencjalne problemy:**
- Limit `.slice(0, 39)` gdzieś w kodzie
- Filtrowanie po kategoriach
- Problem z paginacją

---

## 🔧 ROZWIĄZANIE PROBLEMU

### Opcja A: Brak Artykułów w blogArticles.ts
**Jeśli:** Plik zawiera < 45 wpisów

**Akcja:**
1. Zidentyfikować brakujące artykuły (porównać z listą plików)
2. Dodać brakujące wpisy do tablicy
3. Użyć chronologicznej kolejności dat
4. Sprawdzić czy nie ma duplikatów slug

---

### Opcja B: Problem z Renderowaniem Strony Blog
**Jeśli:** blogArticles.ts ma 45 wpisów, ale strona pokazuje 39

**Akcja:**
1. Sprawdzić `src/pages/blog/index.tsx` pod kątem:
   ```typescript
   // ❌ ŹLE - limit
   const displayedArticles = blogArticles.slice(0, 39);
   
   // ✅ DOBRZE - wszystkie
   const displayedArticles = blogArticles;
   ```

2. Zweryfikować filtry kategorii:
   ```typescript
   // Upewnić się że nie filtrujemy przypadkowo
   const filtered = selectedCategory === "all" 
     ? blogArticles 
     : blogArticles.filter(a => a.category === selectedCategory);
   ```

3. Sprawdzić paginację (jeśli jest)

---

### Opcja C: Problem z Cache/Build
**Jeśli:** Wszystko wygląda dobrze w kodzie

**Akcja:**
1. Kliknąć "Restart Server" w Softgen (prawy górny róg)
2. Odświeżyć preview (⟳ w lewym górnym rogu preview)
3. Hard refresh w przeglądarce (Ctrl+Shift+R lub Cmd+Shift+R)

---

## 🛡️ PROCEDURA NA PRZYSZŁOŚĆ

### ✅ Checklist Dodawania Nowych Artykułów

#### 1. Utwórz Plik Artykułu (5 min)
```bash
src/pages/blog/[slug].tsx
```

**Wymagania:**
- [ ] Poprawna struktura TSX
- [ ] Import Layout i SEO
- [ ] Unikalne meta title/description
- [ ] H1 heading
- [ ] Structured content
- [ ] JSON-LD schema
- [ ] CTA do ClaimWinger
- [ ] Internal links

---

#### 2. Dodaj do blogArticles.ts (2 min)
```typescript
// src/lib/blogArticles.ts

export const blogArticles: BlogArticle[] = [
  // ... existing articles ...
  
  // ✅ NOWY ARTYKUŁ - dodaj na końcu tablicy
  {
    slug: "nazwa-artykulu",                    // ⚠️ MUSI być identyczny z nazwą pliku
    title: "Tytuł Artykułu",                  // Krótki, chwytliwy
    excerpt: "Krótki opis artykułu...",       // 120-150 znaków
    date: "2025-02-27",                       // Data publikacji (chronologicznie)
    readTime: "7 min",                        // Szacowany czas czytania
    category: "LOT Polish Airlines",          // Kategoria (musi istnieć w filtrach)
    featured: false,                          // true tylko dla najważniejszych
    color: "blue"                             // blue, green, red, purple
  },
];
```

**KRYTYCZNE:** 
- `slug` musi być **identyczny** z nazwą pliku (bez .tsx)
- `date` w formacie YYYY-MM-DD
- `category` musi pasować do istniejących kategorii

---

#### 3. Weryfikacja (3 min)
**Po dodaniu nowego artykułu ZAWSZE:**

1. [ ] Uruchom check_for_errors
   ```
   Sprawdzi: TypeScript errors, linting, kompilacja
   ```

2. [ ] Policz wpisy w blogArticles.ts
   ```typescript
   // Wyszukaj w pliku:
   console.log(blogArticles.length); // Powinno być +1
   ```

3. [ ] Sprawdź stronę `/blog` w preview
   ```
   - Czy licznik się zwiększył?
   - Czy nowy artykuł jest widoczny?
   - Czy kategoria działa poprawnie?
   ```

4. [ ] Sprawdź stronę artykułu `/blog/[slug]`
   ```
   - Czy artykuł się ładuje?
   - Czy nie ma błędów 404?
   - Czy meta tags są poprawne?
   ```

---

### 📊 Tracking Artykułów

#### Metoda 1: Spreadsheet (Zalecana)
Utwórz plik `BLOG_ARTICLES_TRACKER.md`:

```markdown
# Blog Articles Tracker

| # | Slug | Title | Category | Date | Status |
|---|------|-------|----------|------|--------|
| 1 | odszkodowanie-lot | Odszkodowanie LOT | LOT | 2025-01-10 | ✅ |
| 2 | odszkodowanie-ryanair | Odszkodowanie Ryanair | Ryanair | 2025-01-12 | ✅ |
| ... | ... | ... | ... | ... | ... |
| 45 | nowy-artykul | Nowy Artykuł | LOT | 2025-02-27 | ✅ |

**Total:** 45 artykułów
**Last updated:** 2025-02-27
```

---

#### Metoda 2: Automatyczny Counter
Dodaj do `src/pages/blog/index.tsx`:

```typescript
// Debug mode - wyświetla liczbę artykułów
const ArticleCounter = () => {
  return (
    <div className="text-sm text-gray-500">
      Debug: {blogArticles.length} artykułów w bazie
    </div>
  );
};
```

---

### 🚨 Częste Błędy i Jak Ich Unikać

#### ❌ Błąd 1: Niepasujący Slug
```typescript
// Plik: lot-opoznienie-nocne.tsx
// blogArticles.ts:
slug: "lot-opoznienie-nocny"  // ❌ ŹLE - literówka

// FIX:
slug: "lot-opoznienie-nocne"  // ✅ DOBRZE
```

---

#### ❌ Błąd 2: Duplikat Slug
```typescript
// ❌ ŹLE - dwa artykuły z tym samym slug
{ slug: "odszkodowanie-lot", ... },
{ slug: "odszkodowanie-lot", ... },  // Duplikat!

// FIX: Użyj unikalnych slugs
{ slug: "odszkodowanie-lot-podstawy", ... },
{ slug: "odszkodowanie-lot-przewodnik", ... },
```

---

#### ❌ Błąd 3: Zapomnienie o Dodaniu do blogArticles.ts
```
✅ Utworzono: src/pages/blog/nowy-artykul.tsx
❌ Brak wpisu w: src/lib/blogArticles.ts

Efekt: Artykuł istnieje, ale nie jest widoczny na liście bloga
```

**ROZWIĄZANIE:** Zawsze dodawaj artykuł do blogArticles.ts!

---

#### ❌ Błąd 4: Zła Kategoria
```typescript
// ❌ ŹLE - kategoria nie istnieje w filtrach
category: "Polish Airlines"

// ✅ DOBRZE - użyj istniejącej kategorii
category: "LOT Polish Airlines"
```

**Istniejące kategorie:**
- "LOT Polish Airlines"
- "Ryanair"
- "Wizz Air"
- "Lufthansa"
- "easyJet"
- "Enter Air"
- "Prawo lotnicze"
- "Lotniska"
- "Case Studies"

---

### 🔄 Workflow Dodawania Paczki Artykułów

**Przykład: Dodawanie 10 nowych artykułów o Wizz Air**

#### Faza 1: Planowanie (10 min)
1. [ ] Lista tematów artykułów
2. [ ] Określenie slug dla każdego
3. [ ] Przypisanie kategorii
4. [ ] Określenie dat publikacji (chronologicznie)

---

#### Faza 2: Tworzenie Plików (60 min)
**Dla każdego artykułu:**
1. [ ] Utwórz plik `src/pages/blog/[slug].tsx`
2. [ ] Dodaj pełną treść (min. 300 linii)
3. [ ] Sprawdź kompilację (`check_for_errors`)

---

#### Faza 3: Aktualizacja blogArticles.ts (5 min)
1. [ ] Otwórz `src/lib/blogArticles.ts`
2. [ ] Dodaj WSZYSTKIE 10 wpisów na końcu tablicy
3. [ ] Sprawdź chronologię dat
4. [ ] Policz total (powinno być +10)

---

#### Faza 4: Weryfikacja (10 min)
1. [ ] `check_for_errors` - brak błędów
2. [ ] Strona `/blog` - licznik pokazuje +10
3. [ ] Każdy nowy artykuł działa pod swoim URL
4. [ ] Filtry kategorii działają poprawnie
5. [ ] Internal linking działa

---

#### Faza 5: Commit (2 min)
```bash
feat(blog): Add 10 new Wizz Air compensation articles

- wizz-air-opoznienie-zima.tsx
- wizz-air-odszkodowanie-budapest.tsx
- ...
- Updated blogArticles.ts with 10 new entries
```

---

## 🎯 QUICK DIAGNOSTIC COMMANDS

### 1. Sprawdź Liczbę Artykułów w blogArticles.ts
```bash
# Otwórz plik i policz wpisy w tablicy
# Każdy artykuł to obiekt { slug: "...", ... }
```

### 2. Sprawdź Liczbę Plików w src/pages/blog/
```bash
# Powinno być tyle plików .tsx ile wpisów w blogArticles.ts
# (pomijając index.tsx)
```

### 3. Znajdź Duplikaty Slug
```typescript
// Tymczasowo dodaj do blogArticles.ts:
const slugs = blogArticles.map(a => a.slug);
const duplicates = slugs.filter((item, index) => slugs.indexOf(item) !== index);
console.log("Duplikaty:", duplicates); // Powinno być []
```

### 4. Znajdź Brakujące Artykuły
```typescript
// 1. Lista slug z blogArticles.ts
const slugsInDatabase = blogArticles.map(a => a.slug);

// 2. Lista plików w src/pages/blog/ (bez index.tsx)
const filesInFolder = [/* lista plików bez .tsx */];

// 3. Porównaj
const missingInDatabase = filesInFolder.filter(f => !slugsInDatabase.includes(f));
const missingFiles = slugsInDatabase.filter(s => !filesInFolder.includes(s));

console.log("Brak w bazie:", missingInDatabase);
console.log("Brak plików:", missingFiles);
```

---

## 📝 SZABLON COMMIT MESSAGE

### Dodawanie Nowych Artykułów
```bash
feat(blog): Add [N] new [Category] articles

- article-slug-1.tsx: Short description
- article-slug-2.tsx: Short description
- Updated blogArticles.ts (+[N] entries)
- Total articles: [X]
```

### Przykład
```bash
feat(blog): Add 5 new LOT long-haul route articles

- lot-waw-jfk-opoznienie-600-euro.tsx: JFK compensation guide
- lot-waw-ord-chicago-odszkodowanie.tsx: Chicago route delays
- lot-waw-tlv-najczesciej-opozniana-trasa.tsx: Tel Aviv frequent delays
- lot-waw-nrt-tokio-odszkodowanie.tsx: Tokyo route compensation
- lot-waw-yyz-toronto-odszkodowanie.tsx: Toronto delay rights
- Updated blogArticles.ts (+5 entries)
- Total articles: 45
```

---

## 🚀 NAJLEPSZE PRAKTYKI

### 1. Jeden Commit = Jedna Kompletna Paczka
✅ Dodaj wszystkie pliki + wpisy w blogArticles.ts w jednym commicie
❌ Nie commituj plików bez aktualizacji blogArticles.ts

### 2. Zawsze Weryfikuj Po Dodaniu
✅ Check for errors → Preview → Test URLs
❌ Nie zakładaj że "pewnie działa"

### 3. Chronologiczne Daty
✅ Każdy nowy artykuł ma datę późniejszą niż poprzedni
❌ Nie mieszaj dat (utrudnia sortowanie)

### 4. Konsekwentne Nazewnictwo
✅ Użyj kebab-case dla slug
✅ Słowa kluczowe w slug (SEO)
❌ Nie używaj polskich znaków w slug

### 5. Kompletne Wpisy w blogArticles.ts
✅ Wszystkie wymagane pola wypełnione
✅ Opis excerpt 120-150 znaków
❌ Nie zostawiaj pustych pól

---

## 📞 SUPPORT CHECKLIST

Jeśli problem nadal występuje po wykonaniu wszystkich kroków:

1. [ ] Restart Next.js server (button w Softgen)
2. [ ] Hard refresh preview (⟳ + Ctrl+Shift+R)
3. [ ] Sprawdź console errors (F12 w preview)
4. [ ] Sprawdź network tab - czy fetch /blog działa
5. [ ] Zweryfikuj że nie ma błędów TypeScript
6. [ ] Skontaktuj się z Softgen Support z:
   - Screenshot problemu
   - Liczba artykułów w blogArticles.ts
   - Liczba plików w src/pages/blog/
   - Wynik check_for_errors

---

**OSTATNIA AKTUALIZACJA:** 2025-03-09
**WERSJA:** 1.0
**AUTOR:** Softgen AI Assistant