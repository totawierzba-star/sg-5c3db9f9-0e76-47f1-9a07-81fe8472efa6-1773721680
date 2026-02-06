# SITEMAP SETUP PROMPT - Copy & Paste for Softgen Projects

## 🎯 CONTEXT
This sitemap structure is based on LotProblem.pl - a multi-language site (Polish, Chinese, Czech, Hindi) that successfully validates in Google Search Console.

---

## 📋 PROMPT FOR SOFTGEN:

```
TASK: Create a production-ready sitemap.xml for my Next.js project

REQUIREMENTS:

1. FILE LOCATION:
   - Create: public/sitemap.xml
   - This makes it accessible at: https://[yourdomain.com]/sitemap.xml

2. XML STRUCTURE:
   - Start with XML declaration: <?xml version="1.0" encoding="UTF-8"?>
   - Use standard sitemap namespace: <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   - Use UTF-8 encoding for multi-language support

3. URL REQUIREMENTS:
   - Use ABSOLUTE URLs (full https://yourdomain.com/path)
   - Include all public pages (homepage, main pages, blog articles)
   - Exclude: /api routes, /admin, /_next, /public assets

4. EACH URL MUST INCLUDE:
   <url>
     <loc>https://yourdomain.com/page</loc>
     <lastmod>YYYY-MM-DD</lastmod>
     <changefreq>weekly</changefreq>
     <priority>0.8</priority>
   </url>

5. PRIORITY GUIDELINES:
   - 1.0 = Main homepage
   - 0.9 = Language homepages (/en, /es, etc.)
   - 0.8 = Key conversion pages
   - 0.7 = Blog articles, secondary pages
   - 0.6 = Tertiary content

6. CHANGEFREQ GUIDELINES:
   - daily = Homepage, news
   - weekly = Main pages, blog hub
   - monthly = Articles, stable content

7. ORGANIZATION:
   - Group URLs by language/section with XML comments
   - Example: <!-- English (EN) -->, <!-- Blog Articles -->
   - Keep clean, readable structure

8. VALIDATION:
   - Ensure proper XML syntax (no unclosed tags)
   - All special characters must be XML-escaped
   - No trailing whitespace in URLs
   - Use current date for lastmod

9. MY SITE STRUCTURE:
   [LIST YOUR PAGES HERE - Example:]
   - Homepage: /
   - About: /about
   - Services: /services
   - Blog: /blog, /blog/article-1, /blog/article-2
   - Contact: /contact

DOMAIN: [YOUR DOMAIN HERE - e.g., https://example.com]

OUTPUT:
Generate complete, valid sitemap.xml file in public/ directory that will pass Google Search Console validation.
```

---

## 🔧 CUSTOMIZATION INSTRUCTIONS:

### **STEP 1: Replace placeholders**
- `[yourdomain.com]` → Your actual domain (e.g., `mysite.com`)
- `[YOUR DOMAIN HERE]` → Full domain with https:// (e.g., `https://mysite.com`)
- `[LIST YOUR PAGES HERE]` → Your actual page structure

### **STEP 2: Add your page structure**
Example for e-commerce:
```
- Homepage: /
- Products: /products
- Product pages: /products/[slug]
- Categories: /category/electronics, /category/clothing
- Blog: /blog, /blog/[article-slug]
- Static: /about, /contact, /privacy-policy
```

Example for SaaS:
```
- Homepage: /
- Features: /features
- Pricing: /pricing
- Docs: /docs, /docs/[section]
- Blog: /blog, /blog/[slug]
- Legal: /terms, /privacy
```

### **STEP 3: Multi-language sites**
Add language structure:
```
LANGUAGES:
- English (EN): /, /about, /services
- Spanish (ES): /es, /es/about, /es/services
- French (FR): /fr, /fr/about, /fr/services
```

---

## ✅ VALIDATION CHECKLIST (After Generation):

1. **File Location Check:**
   ```bash
   ls public/sitemap.xml  # Should exist
   ```

2. **XML Syntax Check:**
   - Open file in browser: `http://localhost:3000/sitemap.xml`
   - Should render as XML (not 404)

3. **Google Search Console Test:**
   - Go to: https://search.google.com/search-console
   - Add property: yourdomain.com
   - Submit sitemap: yourdomain.com/sitemap.xml
   - Check for validation errors

4. **Manual Review:**
   ```
   ✓ All URLs use https://
   ✓ All URLs are absolute (not relative)
   ✓ No broken links
   ✓ Priority makes sense (1.0 only for homepage)
   ✓ Lastmod uses current date
   ✓ XML is properly formatted
   ✓ Special characters are escaped
   ```

---

## 🎯 EXAMPLE OUTPUT (What You Should Get):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Main Site -->
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-02-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://example.com/about</loc>
    <lastmod>2026-02-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Blog Articles -->
  <url>
    <loc>https://example.com/blog</loc>
    <lastmod>2026-02-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://example.com/blog/first-article</loc>
    <lastmod>2026-02-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>
```

---

## 🚫 COMMON MISTAKES TO AVOID:

1. **Relative URLs:**
   ```xml
   ❌ <loc>/about</loc>
   ✅ <loc>https://example.com/about</loc>
   ```

2. **Missing XML Declaration:**
   ```xml
   ❌ <urlset xmlns="...">
   ✅ <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="...">
   ```

3. **Wrong Namespace:**
   ```xml
   ❌ <urlset>
   ✅ <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   ```

4. **Invalid Date Format:**
   ```xml
   ❌ <lastmod>02/06/2026</lastmod>
   ✅ <lastmod>2026-02-06</lastmod>
   ```

5. **Multiple Priority 1.0:**
   ```xml
   ❌ Every page has <priority>1.0</priority>
   ✅ Only homepage has 1.0, others 0.9-0.6
   ```

6. **Including Non-Public URLs:**
   ```xml
   ❌ /api/data, /_next/static, /admin
   ✅ Only user-facing pages
   ```

---

## 🔄 UPDATING SITEMAP (After Adding Pages):

### **Option A: Manual Update**
1. Open `public/sitemap.xml`
2. Add new URL entry with current date
3. Save file
4. Resubmit to Google Search Console

### **Option B: Softgen Prompt**
```
Update my sitemap.xml with these new pages:
- [New page URL 1]
- [New page URL 2]

Keep existing structure, use current date (YYYY-MM-DD), set priority to 0.7
```

---

## 🎓 ADDITIONAL RESOURCES:

- **Google Sitemap Documentation:** https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **XML Sitemap Validator:** https://www.xml-sitemaps.com/validate-xml-sitemap.html
- **Google Search Console:** https://search.google.com/search-console

---

## 💡 PRO TIPS:

1. **Start Simple:** Create basic sitemap first, expand later
2. **Test Locally:** Visit localhost:3000/sitemap.xml before deploy
3. **Update Regularly:** When adding pages, update lastmod dates
4. **Submit to GSC:** Always submit to Google Search Console after creation
5. **Monitor Errors:** Check GSC weekly for crawl errors
6. **Multi-language:** Group by language with XML comments for readability
7. **Priority Strategy:** Homepage 1.0, conversion pages 0.8-0.9, content 0.6-0.7

---

## 🎯 QUICK START (Copy This):

```
Create public/sitemap.xml for my Next.js site:
- Domain: https://[YOUR-DOMAIN]
- Pages: [LIST YOUR PAGES]
- Use standard XML sitemap format
- UTF-8 encoding
- Absolute URLs with https://
- Current date for lastmod
- Priority: 1.0 (home), 0.8 (main), 0.7 (content)
- Changefreq: weekly (main), monthly (content)
```

---

**SUCCESS CRITERIA:**
✅ File created in public/sitemap.xml
✅ Accessible at https://yourdomain.com/sitemap.xml
✅ Validates in Google Search Console
✅ No XML syntax errors
✅ All pages indexed

**COPY THE PROMPT ABOVE AND PASTE IN SOFTGEN CHAT TO CREATE YOUR SITEMAP!** 🚀