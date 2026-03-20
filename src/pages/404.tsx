import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.split("-")[0].toLowerCase();
    setLocale(browserLang === "pl" ? "pl" : "en");
  }, []);

  const content = {
    pl: {
      title: "404 - Strona nie znaleziona",
      heading: "404",
      message: "Przepraszamy, nie mogliśmy znaleźć strony, której szukasz. Ta strona mogła zostać przeniesiona, usunięta lub nigdy nie istniała.",
      button: "Powrót do strony głównej"
    },
    en: {
      title: "404 - Page Not Found",
      heading: "404",
      message: "Sorry, we couldn't find the page you requested. This page may have been moved, deleted, or never existed.",
      button: "Return to home page"
    }
  };

  const t = content[locale as keyof typeof content];
  const homeUrl = `/${locale}`;

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content="Page not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md">
          <h1 className="text-6xl font-bold text-gray-900">{t.heading}</h1>
          <p className="text-lg text-gray-600">{t.message}</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
            <Link href={homeUrl}>
              {t.button}
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
}
