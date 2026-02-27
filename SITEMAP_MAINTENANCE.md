# 📋 SITEMAP MAINTENANCE GUIDE

## 🎯 ZASADA GŁÓWNA
**KAŻDY NOWY ARTYKUŁ = AKTUALIZACJA SITEMAP!**

---

## 📝 PROCEDURA PRZY TWORZENIU NOWEGO ARTYKUŁU

### KROK 1: Utwórz artykuł
```tsx
// Przykład: src/pages/cs/blog/nowy-artykul.tsx
export default function NowyArtykul() {
  return (
    <LayoutCs>
      <SEO
        title="Tytuł artykułu"
        description="Opis"
        url="https://lotproblem.pl/cs/blog/nowy-artykul"
      />
      {/* ... content ... */}
    </LayoutCs>
  );
}
```

### KROK 2: Dodaj do listy artykułów
```typescript
// src/lib/blogArticlesCs.ts (lub inny język)
export const blogArticlesCs: BlogArticleCs[] = [
  {
    id: "nowy-artykul",
    slug: "/cs/blog/nowy-artykul",
    title: "Tytuł artykułu",
    excerpt: "Krótki opis (160-180 znaków)",
    publishDate: "2026-02-27", // Format: YYYY-MM-DD
    category: "foundation", // foundation|airline|airport|situations|tips
    wordCount: 3500,
    readTime: 12,
    featured: false, // true tylko dla TOP 3 artykułów
    color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
  },
  // ... existing articles
];
```

### KROK 3: ⚠️ AKTUALIZUJ SITEMAP (KRYTYCZNE!)
```xml
<!-- public/sitemap.xml -->

<!-- Znajdź odpowiednią sekcję językową -->
<!-- Czech Blog -->
<url>
  <loc>https://lotproblem.pl/cs/blog/nowy-artykul</loc>
  <lastmod>2026-02-27</lastmod> <!-- Data publikacji -->
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>

<!-- Dodaj PRZED końcową tagiem następnej sekcji (np. "Hindi blog") -->
```

---

## 📍 STRUKTURA SITEMAP - SEKCJE

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- 1️⃣ POLISH PAGES (Priority: 1.0 - 0.8) -->
  <url><loc>https://lotproblem.pl/</loc></url>
  <url><loc>https://lotproblem.pl/opozniony-lot</loc></url>
  <!-- ... inne polskie strony -->
  
  <!-- 2️⃣ POLISH BLOG (Priority: 0.6-0.7) -->
  <url><loc>https://lotproblem.pl/blog/artykul</loc></url>
  
  <!-- 3️⃣ CHINESE PAGES (Priority: 0.9 - 0.7) -->
  <url><loc>https://lotproblem.pl/zh</loc></url>
  <!-- ... -->
  
  <!-- 4️⃣ CHINESE BLOG (Priority: 0.7) -->
  <url><loc>https://lotproblem.pl/zh/blog</loc></url>
  <url><loc>https://lotproblem.pl/zh/blog/artykul</loc></url>
  
  <!-- 5️⃣ CZECH PAGES (Priority: 0.9 - 0.7) -->
  <url><loc>https://lotproblem.pl/cs</loc></url>
  <!-- ... -->
  
  <!-- 6️⃣ CZECH BLOG (Priority: 0.8 - 0.7) -->
  <url><loc>https://lotproblem.pl/cs/blog</loc></url>
  <url><loc>https://lotproblem.pl/cs/blog/artykul</loc></url>
  
  <!-- 7️⃣ HINDI PAGES (Priority: 0.9 - 0.7) -->
  <url><loc>https://lotproblem.pl/hi</loc></url>
  <!-- ... -->
  
  <!-- 8️⃣ HINDI BLOG (Priority: 0.8 - 0.7) -->
  <url><loc>https://lotproblem.pl/hi/blog</loc></url>
  
  <!-- 9️⃣ SLOVAK PAGES (Priority: 0.9 - 0.7) -->
  <url><loc>https://lotproblem.pl/sk</loc></url>
  <!-- ... -->
  
  <!-- 🔟 SLOVAK BLOG (Priority: 0.8 - 0.7) -->
  <url><loc>https://lotproblem.pl/sk/blog</loc></url>
  
</urlset>
```

---

## 🎯 PRIORITY LEVELS - KIEDY UŻYĆ CO?

```
1.0  = Strona główna (/)
0.9  = Homepage językowych wersji (/cs, /zh, /hi, /sk)
0.8  = Główne landing pages (/cs/zpozdeny-let, /zh/delayed-flight)
       Blog index pages (/cs/blog, /zh/blog)
0.7  = Pojedyncze artykuły blogowe
0.6  = Mniej ważne podstrony
```

---

## 📅 LASTMOD - JAK USTAWIĆ?

```xml
<!-- Nowy artykuł -->
<lastmod>2026-02-27</lastmod> <!-- Data publikacji -->

<!-- Zaktualizowany artykuł -->
<lastmod>2026-02-27</lastmod> <!-- Data ostatniej ZNACZĄCEJ zmiany -->

<!-- Zasada: Aktualizuj TYLKO przy DUŻYCH zmianach treści (>20% tekstu) -->
```

---

## ⚙️ CHANGEFREQ - KIEDY UŻYĆ CO?

```xml
weekly  = Homepage, główne landing pages (często aktualizowane)
monthly = Artykuły blogowe (rzadko zmieniane po publikacji)
yearly  = Static pages typu /404
```

---

## ✅ CHECKLIST PRZY DODAWANIU ARTYKUŁU

### 1️⃣ Przed publikacją:
- [ ] Artykuł utworzony w `src/pages/[lang]/blog/`
- [ ] Dodany do `src/lib/blogArticles[Lang].ts`
- [ ] SEO component z prawidłowym URL
- [ ] Testy lokalnie (npm run dev)

### 2️⃣ Aktualizacja Sitemap:
- [ ] Otwórz `public/sitemap.xml`
- [ ] Znajdź odpowiednią sekcję językową
- [ ] Dodaj nowy `<url>` element z:
  - [ ] `<loc>` - pełny URL
  - [ ] `<lastmod>` - dzisiejsza data (YYYY-MM-DD)
  - [ ] `<changefreq>monthly</changefreq>`
  - [ ] `<priority>0.7</priority>`
- [ ] Zachowaj alfabetyczną kolejność (opcjonalnie)
- [ ] Save & commit

### 3️⃣ Po publikacji:
- [ ] Sprawdź w przeglądarce czy strona działa
- [ ] Zweryfikuj sitemap: https://lotproblem.pl/sitemap.xml
- [ ] (Opcjonalnie) Submit do Google Search Console

---

## 🚨 CZĘSTE BŁĘDY - CZEGO UNIKAĆ

### ❌ BŁĄD #1: Zapomnienie o sitemap
```
Problem: Nowy artykuł nie jest w sitemap
Skutek: Google nie znajdzie artykułu przez tygodnie!
Rozwiązanie: ZAWSZE aktualizuj sitemap przy nowym artykule
```

### ❌ BŁĄD #2: Złe URL
```xml
<!-- BŁĄD -->
<loc>lotproblem.pl/cs/blog/artykul</loc> <!-- Brak https:// -->
<loc>https://lotproblem.pl/cs/blog/artykul/</loc> <!-- Slash na końcu -->

<!-- POPRAWNIE -->
<loc>https://lotproblem.pl/cs/blog/artykul</loc>
```

### ❌ BŁĄD #3: Zła data
```xml
<!-- BŁĄD -->
<lastmod>27-02-2026</lastmod> <!-- Zły format -->
<lastmod>2026/02/27</lastmod> <!-- Zły separator -->

<!-- POPRAWNIE -->
<lastmod>2026-02-27</lastmod> <!-- YYYY-MM-DD -->
```

### ❌ BŁĄD #4: Duplikaty
```xml
<!-- BŁĄD - ten sam artykuł 2x -->
<url>
  <loc>https://lotproblem.pl/cs/blog/artykul</loc>
</url>
<url>
  <loc>https://lotproblem.pl/cs/blog/artykul</loc> <!-- DUPLIKAT -->
</url>
```

### ❌ BŁĄD #5: Brak XML encoding
```xml
<!-- BŁĄD -->
<loc>https://lotproblem.pl/cs/blog/kde-&-jak</loc> <!-- & bez encoding -->

<!-- POPRAWNIE -->
<loc>https://lotproblem.pl/cs/blog/kde-a-jak</loc> <!-- Użyj - zamiast & -->
```

---

## 🔧 PRZYKŁAD KOMPLETNEGO WORKFLOW

### Scenariusz: Dodaję nowy czeski artykuł "Jak získat €600"

**1. Tworzę plik:**
```bash
src/pages/cs/blog/jak-ziskat-600-eur.tsx
```

**2. Dodaję do listy:**
```typescript
// src/lib/blogArticlesCs.ts
{
  id: "jak-ziskat-600-eur",
  slug: "/cs/blog/jak-ziskat-600-eur",
  title: "Jak získat €600 za zpoždění letu",
  excerpt: "Kompletní průvodce...",
  publishDate: "2026-02-27",
  category: "tips",
  wordCount: 2800,
  readTime: 10,
  featured: false,
  color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
}
```

**3. Aktualizuję sitemap:**
```xml
<!-- public/sitemap.xml -->

<!-- Czech Blog section -->
<url>
  <loc>https://lotproblem.pl/cs/blog/jak-ziskat-600-eur</loc>
  <lastmod>2026-02-27</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
<!-- Wstawiam PRZED końcową sekcją Czech Blog -->
```

**4. Test & Deploy:**
```bash
npm run dev  # Test lokalnie
git add .
git commit -m "feat(blog/cs): Add €600 compensation guide"
git push
```

✅ GOTOWE!

---

## 📊 MONITORING & WERYFIKACJA

### Narzędzia do sprawdzenia sitemap:

1. **Google Search Console**
   - Submit sitemap: https://search.google.com/search-console
   - Monitoruj coverage errors
   
2. **Bing Webmaster Tools**
   - Submit sitemap: https://www.bing.com/webmasters

3. **Online Validators**
   - https://www.xml-sitemaps.com/validate-xml-sitemap.html
   - https://technicalseo.com/tools/sitemap-validator/

4. **Ręczna weryfikacja**
   - Otwórz: https://lotproblem.pl/sitemap.xml
   - Sprawdź czy wszystkie URLs są dostępne
   - Użyj Ctrl+F do wyszukania konkretnego artykułu

---

## 🎯 BEST PRACTICES

### ✅ DO:
1. Aktualizuj sitemap przy KAŻDYM nowym artykule
2. Używaj YYYY-MM-DD dla dat
3. Zachowaj spójną strukturę (sekcje językowe)
4. Testuj lokalnie przed push
5. Commituj sitemap razem z nowym artykułem

### ❌ DON'T:
1. Nie dodawaj stron 404 lub redirects do sitemap
2. Nie używaj trailing slash (/) na końcu URL
3. Nie zmieniaj lastmod przy małych poprawkach (typos)
4. Nie duplikuj URLs
5. Nie zapominaj o https://

---

## 🚀 PRZYSZŁE USPRAWNIENIA (OPCJONALNE)

### Opcja 1: Automatyczny Sitemap (Next.js)
```javascript
// scripts/generate-sitemap.js
const fs = require('fs');
const articles = require('../src/lib/blogArticlesCs');

// Automatycznie generuj sitemap z listy artykułów
```

### Opcja 2: Dynamic Sitemap Route
```typescript
// src/pages/sitemap.xml.ts
export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return { props: {} };
}
```

**Uwaga:** Obecnie używamy statycznego sitemap.xml - działa dobrze dla małych/średnich projektów.

---

## 📞 W RAZIE PROBLEMÓW

### Problem: Sitemap nie aktualizuje się
```bash
# Wyczyść cache przeglądarki
Ctrl + Shift + R (hard refresh)

# Sprawdź czy plik został zapisany
git status
git diff public/sitemap.xml

# Re-deploy
git push
```

### Problem: Google nie indeksuje nowego artykułu
1. Sprawdź czy jest w sitemap
2. Submit w Google Search Console
3. Użyj "Request Indexing"
4. Poczekaj 24-48h

---

## ✅ KONIEC INSTRUKCJI

**Zapamiętaj:** Ta instrukcja jest żywym dokumentem. Aktualizuj ją gdy zmienia się struktura projektu!

**Ostatnia aktualizacja:** 2026-02-27
**Wersja:** 1.0
**Status:** ✅ AKTYWNA