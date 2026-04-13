import { ArrowRight, CheckCircle2, RefreshCw, ShieldCheck, XCircle } from "lucide-react";

import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const cancelledHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=landing_cta&utm_campaign=cancelled_flight";

function trackClaimClick(placement: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination: cancelledHref,
  });
}

export default function CancelledFlightEl() {
  return (
    <LayoutEl>
      <SEO
        title="Ακυρωμένη πτήση: επιστροφή χρημάτων, αναδρομολόγηση και αποζημίωση"
        description="Δείτε πότε μια ακυρωμένη πτήση οδηγεί σε επιστροφή χρημάτων, πότε σε αναδρομολόγηση και πότε μπορεί να προκύψει και αποζημίωση βάσει EU261."
        url="https://problemlot.com/el/akyromeni-ptisi"
        canonicalUrl="https://problemlot.com/el/akyromeni-ptisi"
        locale="el_GR"
        language="Greek"
      />

      <section className="bg-gradient-to-br from-rose-50 via-white to-slate-50 py-16 dark:from-slate-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
            EU261 για ακυρωμένες πτήσεις
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Ακυρωμένη πτήση:
            <span className="block text-rose-600 dark:text-rose-400">τι δικαιούστε πραγματικά;</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
            Στις ακυρωμένες πτήσεις το βασικό ερώτημα δεν είναι μόνο αν δικαιούστε αποζημίωση, αλλά
            και πότε πρέπει να σας δοθεί επιστροφή χρημάτων ή νέα διαδρομή.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
              <a
                href={cancelledHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClaimClick("el_cancelled_landing_hero")}
              >
                Έλεγχος ακυρωμένης πτήσης
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-900">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3 sm:px-6 lg:px-8">
          <Card className="p-6">
            <RefreshCw className="mb-4 h-8 w-8 text-rose-600" />
            <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Επιστροφή ή νέα πτήση</h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Η αεροπορική πρέπει να σας δώσει επιλογή μεταξύ επιστροφής χρημάτων και αναδρομολόγησης.
            </p>
          </Card>
          <Card className="p-6">
            <XCircle className="mb-4 h-8 w-8 text-rose-600" />
            <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Ο κανόνας των 14 ημερών</h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Το πότε σας ενημέρωσαν για την ακύρωση επηρεάζει σημαντικά το αν μπορεί να προκύψει και αποζημίωση.
            </p>
          </Card>
          <Card className="p-6">
            <ShieldCheck className="mb-4 h-8 w-8 text-rose-600" />
            <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Έκτακτες περιστάσεις</h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Ακόμα και σε ακύρωση, η αεροπορική μπορεί να αποφύγει την αποζημίωση μόνο αν αποδείξει έκτακτες περιστάσεις.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
            Τι να ελέγξετε στην πράξη
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "πότε ακριβώς ενημερωθήκατε για την ακύρωση",
              "αν σας προσφέρθηκε άλλη πτήση σε λογικό χρόνο",
              "αν η νέα διαδρομή άλλαξε την τελική ώρα άφιξης σημαντικά",
              "αν η αεροπορική επικαλείται γενικά ή συγκεκριμένα έκτακτες περιστάσεις",
            ].map((item) => (
              <Card key={item} className="p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </LayoutEl>
  );
}
