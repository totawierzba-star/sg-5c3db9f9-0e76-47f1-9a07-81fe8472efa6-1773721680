import { useRouter } from "next/router";
import { Globe } from "lucide-react";

import { useLocale } from "@/contexts/LocaleContext";
import { Button } from "./ui/button";

const pathMap: Record<string, string> = {
  "/pracodawca-a-odszkodowanie": "/en/blog/eu261-complete-guide-passenger-rights",
  "/anulowany-lot-delegacja": "/en/cancelled-flight",
  "/opozniony-lot-delegacja": "/en/delayed-flight",
  "/bilet-firmowy-prawa": "/en/blog/eu261-complete-guide-passenger-rights",
  "/odszkodowanie-lot-sluzbowy": "/en/compensation-calculator",
  "/o-autorze": "/en/about",
  "/artykuly": "/en/blog",

  "/en/employer-compensation": "/pracodawca-a-odszkodowanie",
  "/en/cancelled-business-trip": "/anulowany-lot-delegacja",
  "/en/delayed-business-trip": "/opozniony-lot-delegacja",
  "/en/corporate-ticket-rights": "/bilet-firmowy-prawa",
  "/en/business-flight-compensation": "/odszkodowanie-lot-sluzbowy",
  "/en/about": "/o-autorze",
  "/en/articles": "/artykuly",
  "/en/blog": "/artykuly",
  "/en": "/",
};

export function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = useLocale();

  const toggleLanguage = () => {
    const currentPath = router.asPath;
    const mappedPath = pathMap[currentPath];

    if (mappedPath) {
      router.push(mappedPath);
      return;
    }

    if (currentPath.startsWith("/en/articles") || currentPath.startsWith("/en/blog")) {
      router.push("/artykuly");
      return;
    }

    if (currentPath.startsWith("/artykuly")) {
      router.push("/en/blog");
      return;
    }

    const newLocale = locale === "pl" ? "en" : "pl";
    const pathWithoutLocale = currentPath.replace(/^\/en/, "");

    if (newLocale === "en") {
      const newPath = `/en${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
      router.push(newPath);
      return;
    }

    router.push(pathWithoutLocale || "/");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 transition-colors hover:bg-slate-100"
      aria-label={locale === "pl" ? "Switch to English" : "Przelacz na polski"}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{locale === "pl" ? "EN" : "PL"}</span>
    </Button>
  );
}
