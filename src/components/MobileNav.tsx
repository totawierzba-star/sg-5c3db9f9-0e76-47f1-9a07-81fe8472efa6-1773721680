"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Plane, Shield, FileText, User } from "lucide-react";
import { getTranslations } from "@/lib/translations";
import { type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { MobileLanguageList } from "@/components/LanguageMenu";

interface MobileNavProps {
  isOpen?: boolean;
  onClose?: () => void;
  locale?: Locale;
  currentPath?: string; // For legacy compatibility
}

export function MobileNav({ 
  isOpen: externalIsOpen, 
  onClose: externalOnClose, 
  locale = "pl",
  currentPath 
}: MobileNavProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const t = getTranslations(locale);

  const localizedRoute = (plPath: string, enPath: string) =>
    locale === "en" ? enPath : plPath;

  // Determine if controlled or uncontrolled
  const isControlled = externalIsOpen !== undefined;
  const isOpen = isControlled ? externalIsOpen : internalIsOpen;
  
  const handleClose = () => {
    if (isControlled && externalOnClose) {
      externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const handleOpen = () => {
    setInternalIsOpen(true);
  };

  // Content for the menu
  const menuContent = (
    <div className={`fixed inset-0 z-50 md:hidden ${isOpen ? "" : "pointer-events-none"}`}>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`} 
        onClick={handleClose} 
      />
      
      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-slate-900 shadow-2xl transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-white">problemlot.com</h2>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-lg text-white hover:bg-slate-800 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              <li>
                <Link
                  href={locale === "en" ? "/en" : "/"}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors ${currentPath === "/" ? "bg-slate-800" : ""}`}
                  onClick={handleClose}
                >
                  <Plane className="h-5 w-5" />
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedRoute("/opozniony-lot", "/en/delayed-flight")}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors ${currentPath?.includes("opozniony") || currentPath?.includes("delayed") ? "bg-slate-800" : ""}`}
                  onClick={handleClose}
                >
                  <Plane className="h-5 w-5" />
                  {t.nav.delayedFlight}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedRoute("/odwolany-lot", "/en/cancelled-flight")}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors ${currentPath?.includes("odwolany") || currentPath?.includes("cancelled") ? "bg-slate-800" : ""}`}
                  onClick={handleClose}
                >
                  <Plane className="h-5 w-5" />
                  {t.nav.cancelledFlight}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedRoute("/ile-mozesz-dostac", "/en/compensation-calculator")}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors ${currentPath?.includes("ile-mozesz") || currentPath?.includes("calculator") ? "bg-slate-800" : ""}`}
                  onClick={handleClose}
                >
                  <Shield className="h-5 w-5" />
                  {t.nav.compensation}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedRoute("/blog", "/en/blog")}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors ${currentPath?.includes("blog") ? "bg-slate-800" : ""}`}
                  onClick={handleClose}
                >
                  <FileText className="h-5 w-5" />
                  {t.nav.articles}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedRoute("/o-autorze", "/en/about")}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors ${currentPath?.includes("autor") || currentPath?.includes("about") ? "bg-slate-800" : ""}`}
                  onClick={handleClose}
                >
                  <User className="h-5 w-5" />
                  {t.nav.about}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="p-6 border-t border-slate-700 space-y-4">
            <MobileLanguageList
              currentLocale={locale === "en" ? "en" : "pl"}
              title="Język / Language"
              onNavigate={handleClose}
              titleClassName="text-sm text-slate-400"
              itemClassName="block rounded-lg px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-800"
              activeItemClassName="block rounded-lg bg-slate-800 px-3 py-2 text-sm font-semibold text-white"
            />
            <p className="text-sm text-slate-400 text-center">
              {t.footer.tagline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // If controlled, only return the drawer (parent renders trigger)
  if (isControlled) {
    return menuContent;
  }

  // If uncontrolled (legacy), render Button + Drawer
  return (
    <>
      <div className="md:hidden flex items-center gap-2">
         {/* We don't need LanguageSwitcher here if it is already in the header of legacy pages, 
             but typically legacy pages put MobileNav as the last item. 
             We'll render just the trigger button here. 
         */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleOpen}
          className="text-slate-900 hover:bg-slate-100" // Legacy headers usually have white bg/dark text
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      {menuContent}
    </>
  );
}
