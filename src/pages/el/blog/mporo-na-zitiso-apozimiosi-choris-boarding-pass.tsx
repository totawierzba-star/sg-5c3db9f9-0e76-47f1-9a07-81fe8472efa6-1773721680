import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Clock,
  FileText,
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
  "https://problemlot.com/el/blog/mporo-na-zitiso-apozimiosi-choris-boarding-pass";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=no_boarding_pass";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=no_boarding_pass";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=no_boarding_pass";

const faqItems = [
  {
    question: "Μπορώ να ζητήσω αποζημίωση χωρίς boarding pass;",
    answer:
      "Ναι, σε πολλές περιπτώσεις μπορείτε, αρκεί να μπορείτε να αποδείξετε την κράτηση και τη σχέση σας με την πτήση με άλλα στοιχεία, όπως PNR, email επιβεβαίωσης, αποδείξεις πληρωμής ή επικοινωνία της αεροπορικής. Όμως σε ορισμένες υποθέσεις το θέμα του check-in γίνεται πιο κρίσιμο.",
  },
  {
    question: "Είναι απαραίτητο το boarding pass σε κάθε υπόθεση;",
    answer:
      "Όχι πάντα. Ο κανονισμός μιλά κυρίως για επιβεβαιωμένη κράτηση και, εκτός από την ακύρωση, για έγκαιρη παρουσία στο check-in. Το boarding pass είναι πολύ χρήσιμο αποδεικτικό, αλλά δεν είναι το μόνο πιθανό στοιχείο.",
  },
  {
    question: "Ποια άλλα έγγραφα μπορώ να χρησιμοποιήσω;",
    answer:
      "Συνήθως βοηθούν το email επιβεβαίωσης, ο κωδικός κράτησης PNR, η απόδειξη πληρωμής, SMS ή email αλλαγής πτήσης, screenshot από την κράτηση ή οποιαδήποτε επίσημη επικοινωνία της αεροπορικής.",
  },
  {
    question: "Πότε ο έλεγχος του check-in γίνεται καθοριστικός;",
    answer:
      "Κυρίως όταν υπάρχει διαφωνία για το αν παρουσιαστήκατε έγκαιρα ή όταν η υπόθεση δεν αφορά ακύρωση αλλά καθυστέρηση, άρνηση επιβίβασης ή άλλη κατάσταση όπου η αεροπορική μπορεί να αμφισβητήσει την παρουσία σας στην πτήση.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function NoBoardingPassElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Μπορώ να ζητήσω αποζημίωση χωρίς boarding pass;"
        description="Δείτε αν μπορείτε να ζητήσετε αποζημίωση χωρίς boarding pass, ποια αποδεικτικά στοιχεία βοηθούν περισσότερο και πότε η αεροπορική μπορεί να αμφισβητήσει το check-in ή τη σχέση σας με την πτήση."
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
            headline: "Μπορώ να ζητήσω αποζημίωση χωρίς boarding pass;",
            description:
              "Εξηγούμε πότε η αποζημίωση μπορεί να ζητηθεί χωρίς boarding pass, ποια άλλα στοιχεία έχουν βάρος και πότε το check-in γίνεται καθοριστικό.",
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
                name: "Μπορώ να ζητήσω αποζημίωση χωρίς boarding pass;",
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
            <span>Μπορώ να ζητήσω αποζημίωση χωρίς boarding pass;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Πρακτικός οδηγός αποδεικτικών στοιχείων
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Μπορώ να ζητήσω αποζημίωση χωρίς boarding pass;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η πιο σωστή απάντηση είναι <strong>ναι, συχνά μπορείτε</strong>, αλλά όχι με τον ίδιο
              βαθμό ευκολίας σε κάθε υπόθεση. Το boarding pass είναι πολύ χρήσιμο αποδεικτικό, όμως
              δεν είναι πάντα το μοναδικό χαρτί που μπορεί να δείξει ότι είχατε επιβεβαιωμένη
              κράτηση και ότι η πτήση αφορά πράγματι εσάς.
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
                  Το ότι δεν έχετε το <strong>boarding pass</strong> δεν σημαίνει αυτόματα ότι
                  χάνετε κάθε πιθανότητα αποζημίωσης.
                </p>
                <p>
                  Αν μπορείτε να αποδείξετε την <strong>επιβεβαιωμένη κράτηση</strong> και τη σχέση
                  σας με την πτήση με άλλα στοιχεία, η υπόθεση μπορεί να παραμένει απολύτως
                  λειτουργική.
                </p>
                <p>
                  Εκεί που το θέμα γίνεται πιο ευαίσθητο είναι όταν η αεροπορική αμφισβητεί το
                  <strong> check-in</strong> ή το αν παρουσιαστήκατε εγκαίρως.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ελέγξτε αν η υπόθεσή σας στέκεται και χωρίς boarding pass"
            description="Αν δεν βρίσκετε το boarding pass αλλά έχετε άλλα στοιχεία, το ClaimWinger Ελλάδα μπορεί να βοηθήσει σε μια πρώτη εκτίμηση για το αν η υπόθεσή σας παραμένει αρκετά καθαρή ή αν χρειάζεται ισχυρότερη τεκμηρίωση."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=no_boarding_pass"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της υπόθεσής σας."
            placement="el_blog_no_boarding_pass_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. Τι ζητά πραγματικά ο κανονισμός
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Ο κανονισμός δεν μιλά κυρίως για το boarding pass ως μοναδική βάση του claim. Το
                βασικό σημείο είναι ότι ο επιβάτης πρέπει να έχει <strong>επιβεβαιωμένη κράτηση</strong>
                και, εκτός από τις ακυρωμένες πτήσεις, να έχει παρουσιαστεί έγκαιρα στο
                <strong> check-in</strong>.
              </p>
              <p>
                Αυτό σημαίνει ότι το boarding pass είναι πολύ δυνατό αποδεικτικό, αλλά δεν είναι
                απαραίτητα το μόνο που μπορεί να χρησιμοποιηθεί. Σε πολλές περιπτώσεις, ένα καθαρό
                σύνολο από άλλα έγγραφα αρκεί για να στηρίξει την υπόθεση.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ποια στοιχεία μπορούν να το αντικαταστήσουν
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Mail className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Email επιβεβαίωσης και PNR</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Το email κράτησης, ο κωδικός PNR και τα στοιχεία της πτήσης βοηθούν πολύ στο να
                  αποδειχθεί ότι πράγματι ήσασταν συνδεδεμένοι με το συγκεκριμένο δρομολόγιο.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Receipt className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Απόδειξη πληρωμής</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η πληρωμή δεν αποδεικνύει πάντα από μόνη της το check-in, αλλά συχνά ενισχύει πολύ
                  την εικόνα της κράτησης όταν συνδυάζεται με άλλα επίσημα στοιχεία.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Ticket className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Screenshot κράτησης</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Screenshots από την εφαρμογή ή το website της αεροπορικής μπορούν να είναι χρήσιμα,
                  ειδικά όταν εμφανίζουν το όνομα του επιβάτη, τον αριθμό πτήσης και την κατάσταση
                  της κράτησης.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Mail className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Επικοινωνία της αεροπορικής</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Email για καθυστέρηση, ακύρωση, αλλαγή ώρας ή rerouting μπορεί να είναι ιδιαίτερα
                  χρήσιμα, γιατί συνδέουν τον επιβάτη με τη συγκεκριμένη προβληματική πτήση.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Πότε η έλλειψη boarding pass δεν είναι μεγάλο πρόβλημα
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Αν η αεροπορική έχει ήδη παραδεχτεί ότι η πτήση ακυρώθηκε ή σας έστειλε rerouting,
                συχνά το βάρος μετατοπίζεται από το boarding pass στα γενικά στοιχεία της κράτησης.
              </p>
              <p>
                Το ίδιο ισχύει όταν έχετε επαρκή αλληλογραφία, κωδικό κράτησης και σαφή σύνδεση με
                το περιστατικό. Σε τέτοιες περιπτώσεις, η απουσία του boarding pass μπορεί να είναι
                απλώς μια αδυναμία τεκμηρίωσης, όχι θανατηφόρο πρόβλημα.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Πότε το θέμα του check-in γίνεται κρίσιμο
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "όταν η αεροπορική αμφισβητεί ότι παρουσιαστήκατε έγκαιρα",
                "όταν η υπόθεση αφορά καθυστέρηση και όχι καθαρή ακύρωση",
                "όταν υπήρξε no-show ή μπέρδεμα με αλλαγή πτήσης",
                "όταν λείπουν και άλλα βασικά έγγραφα πέρα από το boarding pass",
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
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              5. Η πιο πρακτική προσέγγιση
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Αν σας λείπει το boarding pass, το καλύτερο βήμα δεν είναι να θεωρήσετε αμέσως ότι
                η υπόθεση χάθηκε. Πρώτα συγκεντρώστε όλα τα υπόλοιπα έγγραφα που δείχνουν την
                κράτηση, την πληρωμή, τις αλλαγές της πτήσης και την επικοινωνία της αεροπορικής.
              </p>
              <p>
                Όσο πιο καθαρή είναι αυτή η αλυσίδα αποδείξεων, τόσο πιο εύκολα μπορεί να σταθεί το
                claim ακόμη και χωρίς το αρχικό boarding pass.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-900 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Θέλετε να δείτε αν τα διαθέσιμα στοιχεία σας αρκούν;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν δεν βρίσκετε το boarding pass αλλά έχετε PNR, email, αποδείξεις πληρωμής ή
                επικοινωνία της αεροπορικής, μπορείτε να ξεκινήσετε από μια πρακτική εκτίμηση για το
                αν η υπόθεση δείχνει ακόμη αξιοποιήσιμη.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("el_blog_no_boarding_pass_home_button", claimWingerHomeHref)
                    }
                  >
                    Άνοιγμα ClaimWinger
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_no_boarding_pass_delayed_button",
                        delayedFlightHref,
                      )
                    }
                  >
                    Έλεγχος καθυστερημένης πτήσης
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
                  href="/el/blog/poses-ores-kathysterisis-chreiazontai-gia-apozimiosi"
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Πόσες ώρες καθυστέρησης χρειάζονται;
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Βασικός οδηγός για το όριο των 3 ωρών και τη σημασία της τελικής άφιξης.
                  </p>
                </Link>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_no_boarding_pass_cancelled_link",
                      cancelledFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για ακυρωμένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν η υπόθεση αφορά ακύρωση, αυτό είναι το σωστό σημείο για γρήγορο έλεγχο.
                  </p>
                </a>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("el_blog_no_boarding_pass_delayed_link", delayedFlightHref)
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για καθυστερημένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν πρόκειται για μεγάλη καθυστέρηση, εδώ μπορείτε να περάσετε άμεσα στον έλεγχο.
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
