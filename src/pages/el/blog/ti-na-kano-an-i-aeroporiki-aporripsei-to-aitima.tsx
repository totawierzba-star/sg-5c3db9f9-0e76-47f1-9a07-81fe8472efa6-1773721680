import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  ShieldAlert,
  Stamp,
  XCircle,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/ti-na-kano-an-i-aeroporiki-aporripsei-to-aitima";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=claim_rejected";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=claim_rejected";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=claim_rejected";

const faqItems = [
  {
    question: "Τι να κάνω αν η αεροπορική απορρίψει το αίτημα;",
    answer:
      "Πρώτα διαβάστε προσεκτικά τον λόγο της απόρριψης. Δεν είναι κάθε απόρριψη οριστική ή σωστή. Συχνά πρέπει να ελέγξετε αν η αεροπορική εξηγεί συγκεκριμένα τις έκτακτες περιστάσεις, αν μιλά για τον σωστό αερομεταφορέα και αν η υπόθεση διαβάζεται σωστά με βάση τον τελικό προορισμό.",
  },
  {
    question: "Αν η αεροπορική λέει 'extraordinary circumstances', σημαίνει ότι τελείωσε η υπόθεση;",
    answer:
      "Όχι. Η γενική επίκληση έκτακτων περιστάσεων δεν αρκεί από μόνη της. Χρειάζεται να εξεταστεί αν ο λόγος είναι πραγματικά σχετικός και επαρκώς τεκμηριωμένος.",
  },
  {
    question: "Πρέπει να ξαναστείλω το ίδιο αίτημα από την αρχή;",
    answer:
      "Όχι πάντα. Πιο χρήσιμο είναι συνήθως ένα στοχευμένο επόμενο μήνυμα που απαντά στην αιτιολογία της απόρριψης, αντί να ξεκινήσετε μηχανικά την ίδια διαδικασία από το μηδέν.",
  },
  {
    question: "Πότε αξίζει να προχωρήσω σε κλιμάκωση;",
    answer:
      "Αν η απόρριψη είναι γενική, αδύναμα τεκμηριωμένη ή αγνοεί βασικά στοιχεία της υπόθεσής σας, συνήθως αξίζει να προχωρήσετε σε πιο οργανωμένο επόμενο βήμα αντί να θεωρήσετε ότι η υπόθεση χάθηκε.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function ClaimRejectedElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Τι να κάνω αν η αεροπορική απορρίψει το αίτημα;"
        description="Μάθετε τι να κάνετε αν η αεροπορική απορρίψει το αίτημα αποζημίωσης, πώς να διαβάσετε σωστά την αιτιολογία και πότε πρέπει να περάσετε σε επόμενο μήνυμα ή κλιμάκωση."
        url={articleUrl}
        canonicalUrl={articleUrl}
        locale="el_GR"
        language="Greek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Τι να κάνω αν η αεροπορική απορρίψει το αίτημα;",
            description:
              "Εξηγούμε πώς να διαβάσετε σωστά μια απόρριψη από αεροπορική εταιρεία, ποια σημεία πρέπει να ελέγξετε και πότε η υπόθεση αξίζει να κλιμακωθεί.",
            mainEntityOfPage: articleUrl,
            datePublished: "2026-04-13",
            dateModified: "2026-04-13",
            author: {
              "@type": "Organization",
              name: "problemlot.com",
            },
            publisher: {
              "@type": "Organization",
              name: "problemlot.com",
              logo: {
                "@type": "ImageObject",
                url: "https://problemlot.com/og-image.png",
              },
            },
            image: "https://problemlot.com/og-image.png",
            inLanguage: "el-GR",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Αρχική",
                item: "https://problemlot.com/el",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://problemlot.com/el/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Τι να κάνω αν η αεροπορική απορρίψει το αίτημα;",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/el" className="hover:text-sky-600">
              Αρχική
            </Link>
            <span>/</span>
            <Link href="/el/blog" className="hover:text-sky-600">
              Blog
            </Link>
            <span>/</span>
            <span>Τι να κάνω αν η αεροπορική απορρίψει το αίτημα;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός για απόρριψη και επόμενο βήμα
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Τι να κάνω αν η αεροπορική απορρίψει το αίτημα;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η απόρριψη δεν σημαίνει πάντα ότι η υπόθεση είναι χαμένη. Πολύ συχνά σημαίνει απλώς
              ότι πρέπει να διαβάσετε προσεκτικά την αιτιολογία και να δείτε αν η αεροπορική
              απαντά συγκεκριμένα ή αν απλώς χρησιμοποιεί ένα γενικό, αδύναμο σχήμα άρνησης.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Ενημέρωση: 13 Απριλίου 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Χρόνος ανάγνωσης: 8 λεπτά</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-indigo-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Σύντομη απάντηση</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>
                  Μια <strong>απόρριψη</strong> δεν είναι πάντα το τέλος της υπόθεσης.
                </p>
                <p>
                  Το πρώτο βήμα είναι να δείτε <strong>γιατί</strong> απορρίφθηκε το αίτημα και αν η
                  αιτιολογία στέκεται πραγματικά ή είναι υπερβολικά γενική.
                </p>
                <p>
                  Αν ο λόγος απόρριψης είναι αδύναμος, ασαφής ή αγνοεί βασικά στοιχεία της υπόθεσής
                  σας, συνήθως έχει νόημα ένα πιο στοχευμένο επόμενο βήμα και όχι παθητική αποδοχή.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ελέγξτε την απόρριψη της αεροπορικής με το ClaimWinger"
            description="Αν η αεροπορική απέρριψε ήδη το αίτημά σας, το ClaimWinger Ελλάδα μπορεί να βοηθήσει να εκτιμηθεί αν η αιτιολογία φαίνεται σοβαρή ή αν η υπόθεση μοιάζει να αξίζει επόμενο μήνυμα και κλιμάκωση."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=claim_rejected"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της υπόθεσής σας."
            placement="el_blog_claim_rejected_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. Πρώτα διαβάστε τον λόγο της απόρριψης, όχι μόνο το “όχι”
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Stamp className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Συγκεκριμένη αιτιολογία</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν η αεροπορική δίνει καθαρή και συγκεκριμένη εξήγηση, έχετε κάτι πραγματικό να
                  αξιολογήσετε. Αυτό είναι πολύ πιο χρήσιμο από μια γενική απάντηση μιας γραμμής.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <XCircle className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Γενική ή πρόχειρη άρνηση</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν βλέπετε γενικόλογες διατυπώσεις χωρίς πραγματική σύνδεση με τα γεγονότα της
                  πτήσης, η απόρριψη δεν πρέπει να θεωρείται αυτόματα πειστική.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              2. Το πιο συχνό μοτίβο: “extraordinary circumstances”
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Ένας από τους πιο συνηθισμένους λόγους απόρριψης είναι η γενική αναφορά σε
                <strong> extraordinary circumstances</strong>. Αυτό όμως δεν αρκεί από μόνο του.
              </p>
              <p>
                Το πραγματικό ερώτημα είναι αν η αεροπορική εξηγεί καθαρά ποιο γεγονός επικαλείται,
                πώς συνδέεται με τη συγκεκριμένη πτήση και γιατί αυτό το γεγονός θα έπρεπε να
                εξαιρεί πραγματικά την υποχρέωση αποζημίωσης.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Τι άλλο πρέπει να ελέγξετε στην απόρριψη
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "αν η αεροπορική μιλά για τον σωστό operating carrier",
                "αν η υπόθεση διαβάζεται σωστά με βάση τον τελικό προορισμό",
                "αν υπάρχει μπέρδεμα ανάμεσα σε μία κράτηση και ξεχωριστά εισιτήρια",
                "αν η απάντηση αγνοεί βασικά έγγραφα ή γεγονότα που είχατε ήδη στείλει",
              ].map((item) => (
                <Card key={item} className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Πότε έχει νόημα το επόμενο βήμα
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <FileText className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Στοχευμένη απάντηση</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν η άρνηση είναι αδύναμη ή ελλιπής, συνήθως είναι πιο σωστό να απαντήσετε
                  στοχευμένα στην αιτιολογία αντί να στείλετε ξανά το ίδιο αίτημα χωρίς καμία αλλαγή.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <ShieldAlert className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Κλιμάκωση</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν η απόρριψη επιμένει να είναι γενική ή η αεροπορική απλώς κλείνει την υπόθεση
                  χωρίς επαρκή εξήγηση, τότε συνήθως υπάρχει νόημα για επόμενο βήμα κλιμάκωσης.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-900 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Η αεροπορική απέρριψε το αίτημα και δεν ξέρετε αν η αιτιολογία στέκει;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν το “όχι” της αεροπορικής φαίνεται γενικό, ασαφές ή αποσυνδεδεμένο από τα
                πραγματικά γεγονότα της πτήσης, αξίζει πρώτα ένας πρακτικός έλεγχος πριν θεωρήσετε
                ότι η υπόθεση έκλεισε οριστικά.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("el_blog_claim_rejected_home_button", claimWingerHomeHref)
                    }
                  >
                    Άνοιγμα ClaimWinger
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_claim_rejected_cancelled_button",
                        cancelledFlightHref,
                      )
                    }
                  >
                    Έλεγχος ακυρωμένης πτήσης
                  </a>
                </Button>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Συχνές ερωτήσεις
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <Card key={item.question} className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {item.question}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.answer}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Σχετικά επόμενα βήματα
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="/el/blog/ti-na-kano-an-i-aeroporiki-den-apanta"
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Αν η αεροπορική δεν απαντά
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Ο οδηγός για σιωπή, υπενθύμιση και το όριο των 2 μηνών.
                  </p>
                </Link>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_claim_rejected_inline_cancelled_link",
                      cancelledFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για ακυρωμένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν η υπόθεση αφορά ακύρωση, εδώ μπορείτε να περάσετε στον έλεγχο.
                  </p>
                </a>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_claim_rejected_inline_delayed_link",
                      delayedFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για καθυστερημένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν το πρόβλημα ήταν μεγάλη καθυστέρηση, μπορείτε να ξεκινήσετε από εδώ.
                  </p>
                </a>
              </div>
            </Card>
          </section>
        </div>
      </article>
    </LayoutEl>
  );
}
