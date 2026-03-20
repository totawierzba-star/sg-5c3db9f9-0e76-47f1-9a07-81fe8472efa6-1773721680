# Instrukcja Obsługi: Statyczna Mapa Witryny (Sitemap)

Projekt używa **statycznej mapy witryny** (`public/sitemap.xml`). Oznacza to, że plik ten jest tworzony ręcznie, a nie generowany automatycznie. Daje to 100% pewności, że Google zawsze otrzyma poprawny plik.

## Jak dodać nowy artykuł/stronę?

Za każdym razem, gdy dodajesz nową stronę lub artykuł, wykonaj te proste kroki:

1. Otwórz plik `public/sitemap.xml`.
2. Skopiuj ostatni wpis `<url>...</url>` z odpowiedniej sekcji (np. "English Articles").
3. Wklej go poniżej i zaktualizuj:
   - `<loc>`: Wpisz pełny adres URL nowej strony.
   - `<lastmod>`: Zmień na dzisiejszą datę (format RRRR-MM-DD).
4. Zapisz plik.

### Przykład wpisu:

```xml
<url>
  <loc>https://bizneslot.info/en/articles/nowy-artykul</loc>
  <lastmod>2025-02-27</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

## Dlaczego tak robimy?
Statyczna mapa eliminuje błędy "Nie udało się pobrać" w Google Search Console, które mogą występować przy dynamicznym generowaniu podczas procesu budowania (build) na platformach takich jak Vercel.

## Plik robots.txt
Plik `public/robots.txt` automatycznie wskazuje na tę mapę:
`Sitemap: https://bizneslot.info/sitemap.xml`