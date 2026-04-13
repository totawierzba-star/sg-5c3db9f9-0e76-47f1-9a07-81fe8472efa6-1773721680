import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Euro, ShieldCheck } from "lucide-react";

import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const delayedHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=landing_cta&utm_campaign=delayed_flight";

function trackClaimClick(placement: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination: delayedHref,
  });
}

export default function DelayedFlightEl() {
  return (
    <LayoutEl>
      <SEO
        title="Καθυστερημένη πτήση: πότε δικαιούστε αποζημίωση έως 600 €;"
        description="Μάθετε πότε μια καθυστέρηση πτήσης οδηγεί σε αποζημίωση, πότε μετράει η τελική άφιξη, τι ισχύει στις ανταποκρίσεις και πότε υπάρχει μόνο δικαίωμα φροντίδας ή επιστροφής χρημάτων."
        url="https://problemlot.com/el/kathysterimeni-ptisi"
        canonicalUrl="https://problemlot.com/el/kathysterimeni-ptisi"
        locale="el_GR"
        language="Greek"
      />

      <section className="bg-gradient-to-br from-sky-50 via-white to-slate-50 py-16 dark:from-slate-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
            EU261 για καθυστερήσεις πτήσεων
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Καθυστερημένη πτήση:
            <span className="block text-sky-600 dark:text-sky-400">πότε δικαιούστε αποζημίωση έως 600 €;</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
            Το βασικό κριτήριο είναι συνήθως η καθυστέρηση στην τελική άφιξη. Αν φτάσατε με 3 ώρες
            ή περισσότερο αργότερα, μπορεί να υπάρχει δικαίωμα αποζημίωσης, εφόσον δεν πρόκειται για
            έκτακτες περιστάσεις.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
              <a
                href={delayedHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClaimClick("el_delayed_landing_hero")}
              >
                Έλεγχος καθυστερημένης πτήσης
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-900">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3 sm:px-6 lg:px-8">
          <Card className="p-6">
            <Clock3 className="mb-4 h-8 w-8 text-sky-600" />
            <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">3 ώρες στην άφιξη</h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Για τη χρηματική αποζημίωση μετράει κυρίως η τελική άφιξη, όχι απλώς η ώρα αναχώρησης.
            </p>
          </Card>
          <Card className="p-6">
            <Euro className="mb-4 h-8 w-8 text-sky-600" />
            <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">250 € / 400 € / 600 €</h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Το ποσό εξαρτάται από την απόσταση της πτήσης και το αν ισχύει πλήρως το EU261.
            </p>
          </Card>
          <Card className="p-6">
            <ShieldCheck className="mb-4 h-8 w-8 text-sky-600" />
            <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Φροντίδα πριν από την αποζημίωση</h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Ακόμα και όταν δεν υπάρχει τελικά αποζημίωση, μπορεί να έχετε δικαίωμα σε φροντίδα,
              γεύματα, επικοινωνία και σε κάποιες περιπτώσεις ξενοδοχείο.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
            Τι να προσέξετε πρώτα
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "αν η πτήση αναχώρησε από κράτος της ΕΕ ή εκτελέστηκε από αερομεταφορέα της ΕΕ",
              "αν η καθυστέρηση στην τελική άφιξη ήταν 3 ώρες ή περισσότερο",
              "αν υπήρχε μία ενιαία κράτηση σε περίπτωση ανταπόκρισης",
              "αν η αεροπορική επικαλείται πράγματι έκτακτες περιστάσεις",
            ].map((item) => (
              <Card key={item} className="p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/el/blog/poses-ores-kathysterisis-chreiazontai-gia-apozimiosi"
              className="inline-flex items-center font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
            >
              Διαβάστε τον πρώτο αναλυτικό οδηγό για τις ώρες καθυστέρησης
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </LayoutEl>
  );
}
