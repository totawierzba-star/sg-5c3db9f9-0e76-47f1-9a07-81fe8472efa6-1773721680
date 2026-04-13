import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2, Clock3, Plane, ShieldCheck, XCircle } from "lucide-react";

import { ClaimWingerLogo } from "@/components/ClaimWingerLogo";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const claimLinks = {
  home: "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=homepage_cta&utm_campaign=locale_launch",
  delayed:
    "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=homepage_cta&utm_campaign=delayed_flight",
  cancelled:
    "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=homepage_cta&utm_campaign=cancelled_flight",
};

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function HomeEl() {
  return (
    <LayoutEl>
      <SEO
        title="Αποζημίωση για καθυστερημένη ή ακυρωμένη πτήση στην Ελλάδα | ProblemLot"
        description="Μάθετε πότε μπορείτε να ζητήσετε έως 600 € για καθυστερημένη ή ακυρωμένη πτήση. Οδηγοί στα ελληνικά, σύνδεση με ClaimWinger και πρακτικές εξηγήσεις για το EU261."
        url="https://problemlot.com/el"
        canonicalUrl="https://problemlot.com/el"
        locale="el_GR"
        language="Greek"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-50 py-20 dark:from-slate-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                EU261 για επιβάτες από και προς την ΕΕ
              </div>
              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl">
                Καθυστέρησε ή ακυρώθηκε η πτήση σας;
                <span className="block text-sky-600 dark:text-sky-400">Δείτε πότε δικαιούστε έως 600 €.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
                Η ελληνική έκδοση του ProblemLot συγκεντρώνει τους βασικούς κανόνες του EU261 με
                καθαρή γλώσσα, τεχνική ακρίβεια και πρακτική σύνδεση με το ClaimWinger για έλεγχο
                της υπόθεσής σας.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimLinks.delayed}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("el_home_hero_delayed", claimLinks.delayed)
                    }
                  >
                    Καθυστερημένη πτήση
                    <Clock3 className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={claimLinks.cancelled}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("el_home_hero_cancelled", claimLinks.cancelled)
                    }
                  >
                    Ακυρωμένη πτήση
                    <XCircle className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <Link href="/el/blog">Οδηγοί στα ελληνικά</Link>
                </Button>
              </div>
            </div>

            <Card className="border-sky-200 p-8 shadow-xl dark:border-sky-900">
              <div className="mb-5">
                <ClaimWingerLogo />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                Άμεση μετάβαση στο ClaimWinger Ελλάδα
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-600 dark:text-slate-300">
                Αν θέλετε να περάσετε κατευθείαν από τη θεωρία στον έλεγχο της υπόθεσης, μπορείτε
                να ανοίξετε τη φόρμα του ClaimWinger στα ελληνικά.
              </p>
              <div className="space-y-3">
                <a
                  href={claimLinks.home}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClaimClick("el_home_card_home", claimLinks.home)}
                  className="flex items-center justify-between rounded-2xl bg-sky-600 px-5 py-4 font-semibold text-white transition hover:bg-sky-700"
                >
                  Γενικός έλεγχος υπόθεσης
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href={claimLinks.delayed}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClaimClick("el_home_card_delayed", claimLinks.delayed)}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4 font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-700 dark:hover:text-sky-400"
                >
                  Φόρμα για καθυστέρηση
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href={claimLinks.cancelled}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClaimClick("el_home_card_cancelled", claimLinks.cancelled)}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4 font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-700 dark:hover:text-sky-400"
                >
                  Φόρμα για ακύρωση
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                <Clock3 className="h-6 w-6" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                Καθυστέρηση άφιξης 3+ ωρών
              </h2>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Το βασικό όριο για χρηματική αποζημίωση είναι συνήθως οι 3 ώρες ή περισσότερο στην
                τελική άφιξη, όχι απλώς στην αναχώρηση.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                <Plane className="h-6 w-6" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                Ακύρωση με καθυστερημένη ειδοποίηση
              </h2>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Στις ακυρωμένες πτήσεις παίζει ρόλο το πότε ενημερωθήκατε, τι εναλλακτική δόθηκε και
                πόσο αργά φτάσατε τελικά στον προορισμό.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                ClaimWinger με ελληνική ροή
              </h2>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Για πιο άμεσο έλεγχο, μπορείτε να ανοίξετε τη φόρμα του ClaimWinger στα ελληνικά και
                να δείτε αν αξίζει να προχωρήσετε την υπόθεση.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Βασικές διαδρομές για να ξεκινήσετε
              </h2>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
                Επιλέξτε τη σωστή σελίδα ανάλογα με το πρόβλημα της πτήσης σας.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/el/kathysterimeni-ptisi" className="group">
              <Card className="h-full p-6 transition group-hover:-translate-y-1 group-hover:shadow-xl">
                <Clock3 className="mb-4 h-8 w-8 text-sky-600" />
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Καθυστερημένη πτήση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ο βασικός οδηγός για 3 ώρες καθυστέρησης, τελική άφιξη, φροντίδα και αποζημίωση.
                </p>
                <span className="inline-flex items-center font-medium text-sky-600">
                  Μετάβαση
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Card>
            </Link>

            <Link href="/el/akyromeni-ptisi" className="group">
              <Card className="h-full p-6 transition group-hover:-translate-y-1 group-hover:shadow-xl">
                <XCircle className="mb-4 h-8 w-8 text-sky-600" />
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ακυρωμένη πτήση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Δείτε πότε υπάρχει επιστροφή χρημάτων, αναδρομολόγηση και πότε μπορεί να προκύψει
                  και αποζημίωση.
                </p>
                <span className="inline-flex items-center font-medium text-sky-600">
                  Μετάβαση
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Card>
            </Link>

            <Link href="/el/blog/poses-ores-kathysterisis-chreiazontai-gia-apozimiosi" className="group">
              <Card className="h-full p-6 transition group-hover:-translate-y-1 group-hover:shadow-xl">
                <Calculator className="mb-4 h-8 w-8 text-sky-600" />
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Πρώτος οδηγός στα ελληνικά
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ξεκινήσαμε τη βάση γνώσης στα ελληνικά με το πιο υψηλό intent ερώτημα για τον κανόνα
                  των ωρών καθυστέρησης.
                </p>
                <span className="inline-flex items-center font-medium text-sky-600">
                  Ανάγνωση
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </LayoutEl>
  );
}
