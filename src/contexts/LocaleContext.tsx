import { createContext, useContext, ReactNode } from "react";
import { Locale, defaultLocale } from "@/lib/i18n";

interface LocaleContextType {
  locale: Locale;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
});

export function LocaleProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
