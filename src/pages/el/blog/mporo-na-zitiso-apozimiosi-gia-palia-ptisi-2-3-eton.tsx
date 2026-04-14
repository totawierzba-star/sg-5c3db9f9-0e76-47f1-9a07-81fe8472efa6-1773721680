import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock,
  FileText,
  FolderClock,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/mporo-na-zitiso-apozimiosi-gia-palia-ptisi-2-3-eton";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=old_flight_claim";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=old_flight_claim";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=old_flight_claim";

const faqItems = [
  {
    question: "Μπορώ να ζητήσω αποζημίωση για παλιά πτήση 2-3 ετών;",
    answer:
      "Συχνά ναι, αλλά δεν υπάρχει ένα ενιαίο χρονικό όριο για όλη την ΕΕ. Η προθεσμία για νομική διεκδίκηση αποζημίωσης εξαρτάται από το εθνικό δίκαιο της σχετικής χώρας και πρέπει να εξετάζεται κατά περίπτωση.",
  },
  {
    question: "Υπάρχει ενιαία ευρωπαϊκή προθεσμία;",
    answer:
      "Όχι. Οι επίσημες ευρωπαϊκές πληροφορίες εξηγούν ότι το χρονικό όριο για δικαστική διεκδίκηση αποζημίωσης διαφέρει από χώρα σε χώρα μέσα στην ΕΕ.",
  },
  {
    question: "Αν δεν έχω πια όλα τα έγγραφα, χάθηκε η υπόθεση;",
    answer:
      "Όχι απαραίτητα. Αν και η τεκμηρίωση είναι σημαντική, σε αρκετές περιπτώσεις μπορούν να βοηθήσουν εναλλακτικά στοιχεία όπως email επιβεβαίωσης, PNR, παλαιά μηνύματα της αεροπορικής ή στοιχεία πληρωμής.",
  },
  {
    question: "Τι πρέπει να ελέγξω πρώτο σε μια τόσο παλιά πτήση;",
    answer:
      "Το πιο σημαντικό είναι να ελέγξετε τη χώρα που σχετίζεται με τη διεκδίκηση, το πιθανό χρονικό όριο που ισχύει εκεί και το αν εξακολουθείτε να έχετε βασικά στοιχεία που συνδέουν εσάς και την πτήση με το περιστατικό.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function OldFlightClaimElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Μπορώ να ζητήσω αποζημίωση για παλιά πτήση 2-3 ετών;"
        description="Δείτε αν μπορείτε να ζητήσετε αποζημίωση για παλιά πτήση, γιατί δεν υπάρχει ένα ενιαίο χρονικό όριο για όλη την ΕΕ και ποια στοιχεία πρέπει να ελέγξετε πριν θεωρήσετε ότι η υπόθεση έχει χαθεί."
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
            headline: "Μπορώ να ζητήσω αποζημίωση για παλιά πτήση 2-3 ετών;",
            description:
              "Εξηγούμε γιατί δεν υπάρχει ενιαίο χρονικό όριο για όλες τις χώρες της ΕΕ και τι πρέπει να εξετάσετε πριν θεωρήσετε ότι μια παλιά πτήση δεν μπορεί πλέον να διεκδικηθεί.",
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
                name: "Μπορώ να ζητήσω αποζημίωση για παλιά πτήση 2-3 ετών;",
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
            <span>Μπορώ να ζητήσω αποζημίωση για παλιά πτήση 2-3 ετών;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός για παλαιότερες διεκδικήσεις
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Μπορώ να ζητήσω αποζημίωση για παλιά πτήση 2-3 ετών;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Συχνά <strong>ναι</strong>, αλλά το σωστό σημείο εκκίνησης δεν είναι ένα γενικό
              «έχει περάσει καιρός, άρα τελείωσε». Η πιο ακριβής απάντηση είναι ότι η προθεσμία για
              διεκδίκηση αποζημίωσης δεν είναι ίδια σε όλη την ΕΕ και πρέπει να διαβάζεται με βάση
              το εθνικό δίκαιο της σχετικής χώρας.
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
                  Μια πτήση πριν από <strong>2 ή 3 χρόνια</strong> δεν είναι αυτομάτως «πολύ παλιά»
                  για διεκδίκηση.
                </p>
                <p>
                  Η επίσημη ευρωπαϊκή πληροφορία είναι ότι το χρονικό όριο για δικαστική αξίωση
                  <strong> εξαρτάται από το εθνικό δίκαιο</strong> και δεν είναι ενιαίο για όλη την
                  ΕΕ.
                </p>
                <p>
                  Άρα, πριν θεωρήσετε ότι η υπόθεση χάθηκε, πρέπει να ελέγξετε <strong>τη σχετική
                  χώρα</strong>, τα διαθέσιμα έγγραφα και το πώς ακριβώς συνδέεται η πτήση με το
                  νομικό πλαίσιο της διεκδίκησης.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ελέγξτε αν η παλιά πτήση σας αξίζει ακόμη να εξεταστεί"
            description="Αν η πτήση έγινε πριν από 2 ή 3 χρόνια και δεν ξέρετε αν η υπόθεση έχει ακόμη νόημα, το ClaimWinger Ελλάδα μπορεί να βοηθήσει σε μια πρώτη πρακτική εκτίμηση χωρίς να στηρίζεστε σε έναν μύθο περί ενιαίας προθεσμίας για όλη την Ευρώπη."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=old_flight_claim"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της υπόθεσής σας."
            placement="el_blog_old_flight_claim_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. Δεν υπάρχει ένα κοινό ευρωπαϊκό deadline για όλους
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Αυτή είναι η πιο σημαντική διόρθωση σε σχέση με όσα κυκλοφορούν συχνά online. Δεν
                υπάρχει ένας ενιαίος κανόνας που να λέει ότι όλες οι πτήσεις στην Ευρώπη λήγουν
                μετά από ίδιο ακριβώς διάστημα.
              </p>
              <p>
                Οι επίσημες πληροφορίες της ΕΕ εξηγούν ότι το χρονικό όριο για να ασκήσει κανείς
                νομική δράση σχετικά με αποζημίωση διαφέρει από χώρα σε χώρα. Αυτό σημαίνει ότι η
                σωστή απάντηση δεν είναι «πάντα ναι» ή «πάντα όχι», αλλά «εξαρτάται από τη σχετική
                χώρα και το εφαρμοστέο εθνικό δίκαιο».
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              2. Γιατί το 2-3 χρόνια συχνά παραμένει ρεαλιστικό
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <CalendarClock className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Δεν είναι πάντα αργά</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Για πολλές υποθέσεις, ένα διάστημα 2 ή 3 ετών δεν σημαίνει αυτόματα ότι η
                  διεκδίκηση έχει χαθεί. Χρειάζεται όμως έλεγχος του σωστού νομικού πλαισίου.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <FolderClock className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Η τεκμηρίωση γίνεται πιο σημαντική</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Όσο πιο παλιά είναι η πτήση, τόσο πιο σημαντικό είναι να βρείτε έστω βασικά ίχνη
                  της κράτησης, της επικοινωνίας ή της πληρωμής.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Τι πρέπει να ελέγξετε πριν θεωρήσετε ότι η υπόθεση χάθηκε
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "ποια χώρα συνδέεται με τη νομική διεκδίκηση",
                "αν η πτήση εμπίπτει ακόμη καθαρά στο EU261",
                "αν έχετε βασικά στοιχεία όπως PNR, email ή αποδείξεις πληρωμής",
                "αν υπάρχει παλαιότερη επικοινωνία από την αεροπορική που επιβεβαιώνει το περιστατικό",
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
              4. Το μεγαλύτερο λάθος: να στηρίζεστε σε έναν μύθο «πάντα 3 χρόνια»
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Πολλοί επιβάτες βλέπουν online μια σκληρή και απλή απάντηση ότι «έχεις 3 χρόνια» ή
                αντίστροφα ότι «μετά από 2 χρόνια είναι αργά». Αυτές οι απαντήσεις είναι βολικές,
                αλλά δεν είναι γενικά σωστές για ολόκληρη την Ευρώπη.
              </p>
              <p>
                Αντί για γενικό κανόνα, η σωστή προσέγγιση είναι να αντιμετωπίσετε την παλιά πτήση
                σαν υπόθεση που χρειάζεται <strong>έλεγχο χώρας, χρόνου και τεκμηρίωσης</strong>.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              5. Τι κάνετε αν σας λείπουν έγγραφα
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Μια παλιά πτήση συχνά σημαίνει ότι δεν έχετε πια όλα τα έγγραφα οργανωμένα. Αυτό δεν
                είναι ιδανικό, αλλά δεν ακυρώνει αυτόματα την υπόθεση. Συχνά βοηθούν παλιά email,
                στοιχεία πληρωμής, screenshots, κωδικοί κρατήσεων ή μήνυμα από την αεροπορική για
                καθυστέρηση, ακύρωση ή rerouting.
              </p>
              <p>
                Όσο πιο καθαρά μπορείτε να ξαναχτίσετε αυτή την αλυσίδα, τόσο πιο εύκολα μπορεί να
                αξιολογηθεί αν η υπόθεση παραμένει ρεαλιστική σήμερα.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-900 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Δεν είστε σίγουροι αν η παλιά πτήση σας εξετάζεται ακόμη;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν το περιστατικό έγινε πριν από 2 ή 3 χρόνια, το πιο χρήσιμο βήμα είναι να γίνει
                πρώτα ένας γρήγορος έλεγχος για το αν η υπόθεση μοιάζει ακόμη ζωντανή, αντί να
                στηριχθείτε σε μια υπεραπλουστευμένη απάντηση που μπορεί να είναι λάθος για τη χώρα
                σας.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("el_blog_old_flight_claim_home_button", claimWingerHomeHref)
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
                        "el_blog_old_flight_claim_cancelled_button",
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
                  href="/el/blog/mporo-na-zitiso-apozimiosi-choris-boarding-pass"
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Χωρίς boarding pass
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν η παλιά υπόθεση πάσχει και από αδύναμη τεκμηρίωση, αυτός είναι ο σωστός οδηγός.
                  </p>
                </Link>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_old_flight_claim_inline_cancelled_link",
                      cancelledFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για ακυρωμένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν η παλιά υπόθεση αφορούσε ακύρωση, εδώ είναι το σωστό επόμενο βήμα.
                  </p>
                </a>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_old_flight_claim_inline_delayed_link",
                      delayedFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για καθυστερημένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν το περιστατικό αφορούσε μεγάλη καθυστέρηση, μπορείτε να ξεκινήσετε από εδώ.
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
