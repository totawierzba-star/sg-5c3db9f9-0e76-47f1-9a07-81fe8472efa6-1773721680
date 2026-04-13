import { Calculator, CheckCircle2, Euro, Plane } from "lucide-react";

import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

export default function CompensationCalculatorEl() {
  return (
    <LayoutEl>
      <SEO
        title="Υπολογισμός αποζημίωσης πτήσης: 250 €, 400 € ή 600 €;"
        description="Δείτε πώς υπολογίζεται η αποζημίωση για καθυστέρηση ή ακύρωση πτήσης και πότε ισχύουν τα ποσά 250 €, 400 € ή 600 €."
        url="https://problemlot.com/el/ypologismos-apozimiosis"
        canonicalUrl="https://problemlot.com/el/ypologismos-apozimiosis"
        locale="el_GR"
        language="Greek"
      />

      <section className="bg-gradient-to-br from-sky-600 to-sky-800 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Calculator className="mx-auto mb-6 h-16 w-16 text-sky-100" />
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Υπολογισμός αποζημίωσης πτήσης
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-sky-100">
            Τα βασικά ποσά του EU261 είναι 250 €, 400 € και 600 €. Η σωστή κατηγορία εξαρτάται από
            την απόσταση της πτήσης και από το αν η καθυστέρηση ή η ακύρωση πληροί τις προϋποθέσεις.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-white text-sky-700 hover:bg-slate-100">
              <a href="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=calculator_cta&utm_campaign=compensation_calculator" target="_blank" rel="noopener noreferrer">
                Έλεγχος ποσού μέσω ClaimWinger
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-900">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 p-8 text-center dark:border-slate-700">
            <Plane className="mx-auto mb-4 h-10 w-10 text-sky-600" />
            <div className="mb-2 text-5xl font-extrabold text-slate-900 dark:text-white">250 €</div>
            <p className="font-semibold text-slate-700 dark:text-slate-300">Πτήσεις έως 1.500 χλμ.</p>
          </div>
          <div className="rounded-3xl border border-sky-300 bg-sky-50 p-8 text-center shadow-lg dark:border-sky-800 dark:bg-sky-950/30">
            <Euro className="mx-auto mb-4 h-10 w-10 text-sky-600" />
            <div className="mb-2 text-5xl font-extrabold text-slate-900 dark:text-white">400 €</div>
            <p className="font-semibold text-slate-700 dark:text-slate-300">
              Πτήσεις άνω των 1.500 χλμ. εντός ΕΕ και άλλες έως 3.500 χλμ.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8 text-center dark:border-slate-700">
            <Plane className="mx-auto mb-4 h-10 w-10 text-sky-600" />
            <div className="mb-2 text-5xl font-extrabold text-slate-900 dark:text-white">600 €</div>
            <p className="font-semibold text-slate-700 dark:text-slate-300">Πτήσεις άνω των 3.500 χλμ.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
            Τι άλλο επηρεάζει το ποσό
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "η τελική άφιξη και όχι μόνο η καθυστέρηση στην αναχώρηση",
              "η τελική απόσταση της διαδρομής όταν υπάρχει μία ενιαία κράτηση",
              "η ύπαρξη αναδρομολόγησης και το πόσο αργότερα φτάσατε",
              "το αν η αεροπορική αποδείξει έκτακτες περιστάσεις",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-gray-900">
                <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayoutEl>
  );
}
