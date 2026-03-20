import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { Navigation } from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";
import { useRouter } from "next/router";
import { Locale } from "@/lib/i18n";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Determine locale from URL path
  const locale: Locale = router.pathname.startsWith("/en") ? "en" : "pl";

  return (
    <ThemeProvider>
      <LocaleProvider locale={locale}>
        <Navigation />
        <Component {...pageProps} />
        <Toaster />
      </LocaleProvider>
    </ThemeProvider>
  );
}
