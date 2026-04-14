import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  FolderOpen,
  Mail,
  Receipt,
  Ticket,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/poia-engrafa-chreiazomai-gia-tin-apozimiosi";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=documents_needed";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=documents_needed";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=documents_needed";

const faqItems = [
  {
    question: "Ποια έγγραφα χρειάζομαι για την αποζημίωση;",
    answer:
      "Συνήθως χρειάζεστε βασικά στοιχεία της κράτησης, όπως PNR ή email επιβεβαίωσης, τα στοιχεία της πτήσης και οτιδήποτε αποδεικνύει τι συνέβη, όπως email ακύρωσης, αλλαγής ή καθυστέρησης. Το boarding pass βοηθά πολύ, αλλά δεν είναι πάντα το μοναδικό αποδεικτικό.",
  },
  {
    question: "Το boarding pass είναι απαραίτητο σε κάθε υπόθεση;",
    answer:
      "Όχι πάντα, αλλά είναι πολύ χρήσιμο. Σε ορισμένες υποθέσεις, ειδικά όταν υπάρχει θέμα check-in ή άρνησης επιβίβασης, το βάρος του γίνεται μεγαλύτερο.",
  },
  {
    question: "Τι άλλο βοηθά πέρα από τα έγγραφα της κράτησης;",
    answer:
      "Βοηθούν επίσης μηνύματα της αεροπορικής, screenshots της κατάστασης της πτήσης, αποδείξεις πληρωμής και κάθε σαφές ίχνος που δείχνει τη σύνδεσή σας με τη συγκεκριμένη πτήση και το πρόβλημα που προέκυψε.",
  },
  {
    question: "Είναι τα ίδια έγγραφα για compensation και για έξοδα;",
    answer:
      "Όχι ακριβώς. Για την αποζημίωση μετρά κυρίως η σύνδεσή σας με την πτήση και το disruption, ενώ για έξοδα όπως ξενοδοχείο, γεύματα ή taxi χρειάζονται και αποδείξεις ή τιμολόγια των ίδιων των εξόδων.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function DocumentsNeededElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Ποια έγγραφα χρειάζομαι για την αποζημίωση;"
        description="Μάθετε ποια έγγραφα χρειάζεστε για αποζημίωση πτήσης, ποια είναι τα βασικά αποδεικτικά, πότε το boarding pass είναι κρίσιμο και πώς να ξεχωρίζετε τα έγγραφα της διεκδίκησης από τα έξοδα."
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
            headline: "Ποια έγγραφα χρειάζομαι για την αποζημίωση;",
            description:
              "Εξηγούμε ποια έγγραφα χρειάζονται για μια διεκδίκηση αποζημίωσης πτήσης, πότε το boarding pass είναι πολύ ισχυρό στοιχείο και ποια πρόσθετα αποδεικτικά βοηθούν όταν λείπει.",
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
                name: "Ποια έγγραφα χρειάζομαι για την αποζημίωση;",
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
            <span>Ποια έγγραφα χρειάζομαι για την αποζημίωση;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός για αποδεικτικά και έγγραφα
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ποια έγγραφα χρειάζομαι για την αποζημίωση;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η σωστή απάντηση δεν είναι μια τεράστια λίστα χαρτιών, αλλά μια
              <strong> καλά οργανωμένη αλυσίδα αποδεικτικών</strong>. Θέλουμε πρώτα να δείξουμε ότι
              ήσασταν συνδεδεμένοι με τη συγκεκριμένη πτήση και μετά τι ακριβώς συνέβη: καθυστέρηση,
              ακύρωση, rerouting ή άλλο disruption.
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
                  Τα πιο βασικά έγγραφα είναι συνήθως το <strong>PNR</strong>, το email επιβεβαίωσης
                  της κράτησης και οτιδήποτε δείχνει τι συνέβη στην πτήση.
                </p>
                <p>
                  Το <strong>boarding pass</strong> είναι πολύ δυνατό αποδεικτικό, αλλά δεν είναι
                  πάντα το μοναδικό που μπορεί να στηρίξει την υπόθεση.
                </p>
                <p>
                  Για έξοδα όπως ξενοδοχείο, φαγητό ή taxi, χρειάζεστε επιπλέον
                  <strong> αποδείξεις πληρωμής</strong>, γιατί αυτά είναι διαφορετική κατηγορία από
                  το ίδιο το claim αποζημίωσης.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ελέγξτε αν τα έγγραφά σας αρκούν για το ClaimWinger"
            description="Αν έχετε μόνο μέρος των εγγράφων ή δεν είστε σίγουροι ποια αποδεικτικά είναι ουσιαστικά και ποια απλώς βοηθητικά, το ClaimWinger Ελλάδα μπορεί να βοηθήσει με μια πρώτη πρακτική αξιολόγηση."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=documents_needed"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της υπόθεσής σας."
            placement="el_blog_documents_needed_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. Τα βασικά αποδεικτικά της κράτησης
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Mail className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Email επιβεβαίωσης</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Το email με την αρχική κράτηση δείχνει ότι υπήρχε συγκεκριμένη διαδρομή, ημερομηνία
                  και επιβάτης συνδεδεμένος με την πτήση.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Ticket className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">PNR και στοιχεία πτήσης</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ο κωδικός κράτησης, ο αριθμός πτήσης και τα στοιχεία της διαδρομής είναι από τα
                  πιο χρήσιμα θεμέλια για κάθε διεκδίκηση.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              2. Το boarding pass: πολύ σημαντικό, αλλά όχι πάντα μοναδικό
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Το boarding pass είναι εξαιρετικά χρήσιμο γιατί συνδέει καθαρά τον επιβάτη με τη
                συγκεκριμένη πτήση και συχνά βοηθά πολύ όταν υπάρχει ζήτημα για το check-in ή για το
                αν παρουσιάστηκε έγκαιρα στο αεροδρόμιο.
              </p>
              <p>
                Παρ’ όλα αυτά, η απουσία του δεν σκοτώνει πάντα αυτόματα την υπόθεση. Σε αρκετές
                περιπτώσεις μπορούν να λειτουργήσουν συνδυαστικά άλλα στοιχεία, όπως επιβεβαίωση
                κράτησης, αποδείξεις πληρωμής και επίσημη επικοινωνία της αεροπορικής.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Τι αποδεικνύει το ίδιο το disruption
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "email ακύρωσης ή αλλαγής από την αεροπορική",
                "μήνυμα για καθυστέρηση ή rerouting",
                "screenshots από την κατάσταση της πτήσης ή της κράτησης",
                "οποιαδήποτε επίσημη επιβεβαίωση του προβλήματος",
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
              4. Άλλα έγγραφα για compensation, άλλα για έξοδα
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <FolderOpen className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Για τη διεκδίκηση αποζημίωσης</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Εδώ μετρά κυρίως η απόδειξη της κράτησης, η σχέση σας με την πτήση και το τι
                  ακριβώς συνέβη στο ταξίδι.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Receipt className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Για έξοδα και επιστροφές</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν ζητάτε ξεχωριστά έξοδα για φαγητό, ξενοδοχείο, μεταφορά ή άλλα απαραίτητα
                  έξοδα, χρειάζονται αποδείξεις ή τιμολόγια για τις ίδιες αυτές δαπάνες.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              5. Πότε η τεκμηρίωση είναι πιο ευαίσθητη
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "όταν λείπει το boarding pass και η αεροπορική αμφισβητεί το check-in",
                "όταν υπάρχουν ανταποκρίσεις ή αλλαγές διαδρομής",
                "όταν η αεροπορική λέει ότι δεν ήσασταν σωστά καταγεγραμμένος επιβάτης",
                "όταν η υπόθεση είναι παλιά και λείπουν βασικά ίχνη της κράτησης",
              ].map((item) => (
                <Card key={item} className="p-5">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-1 h-5 w-5 text-amber-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-900 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Δεν είστε σίγουροι αν τα έγγραφά σας αρκούν;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν έχετε μερικά μόνο έγγραφα ή δεν ξέρετε ποια είναι κρίσιμα και ποια απλώς
                βοηθητικά, το πιο χρήσιμο είναι να γίνει ένας πρακτικός έλεγχος πριν χαθεί χρόνος σε
                λάθος κατεύθυνση.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("el_blog_documents_needed_home_button", claimWingerHomeHref)
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
                        "el_blog_documents_needed_cancelled_button",
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
                    Ο οδηγός για το τι γίνεται όταν λείπει ένα από τα βασικά αποδεικτικά.
                  </p>
                </Link>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_documents_needed_inline_cancelled_link",
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
                      "el_blog_documents_needed_inline_delayed_link",
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
