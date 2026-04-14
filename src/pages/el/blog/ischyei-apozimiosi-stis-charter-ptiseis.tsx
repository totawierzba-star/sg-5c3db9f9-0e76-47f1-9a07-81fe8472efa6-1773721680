import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Package,
  Plane,
  ShieldCheck,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/ischyei-apozimiosi-stis-charter-ptiseis";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=charter_flights";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=charter_flights";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=charter_flights";

const faqItems = [
  {
    question: "Ισχύει αποζημίωση στις charter πτήσεις;",
    answer:
      "Ναι, συχνά ισχύει. Το ότι μια πτήση είναι charter δεν την βγάζει αυτόματα έξω από το EU261. Αν η διαδρομή εμπίπτει στους κανόνες και πληρούνται οι προϋποθέσεις καθυστέρησης ή ακύρωσης, μπορεί να υπάρχει αποζημίωση όπως και σε μια τακτική πτήση.",
  },
  {
    question: "Αν η πτήση ήταν μέρος πακέτου διακοπών, σε ποιον απευθύνομαι;",
    answer:
      "Για την αποζημίωση πτήσης κοιτάμε κυρίως την αεροπορική που εκτέλεσε το σκέλος. Αν όμως το ταξίδι ήταν πακέτο, μπορεί να υπάρχουν και ξεχωριστά δικαιώματα απέναντι στον οργανωτή για την ορθή εκτέλεση των υπηρεσιών του πακέτου.",
  },
  {
    question: "Σημαίνει το charter ότι δεν ισχύουν τα 250 €, 400 € ή 600 €;",
    answer:
      "Όχι. Αν υπάρχει δικαίωμα αποζημίωσης, τα ποσά συνήθως ακολουθούν την ίδια λογική του EU261, ανάλογα με την απόσταση και τον τύπο της διαδρομής.",
  },
  {
    question: "Ποιο είναι το πιο συχνό μπέρδεμα στις charter πτήσεις;",
    answer:
      "Το πιο συχνό μπέρδεμα είναι ότι οι επιβάτες θεωρούν πως επειδή αγόρασαν πακέτο από ταξιδιωτικό γραφείο, δεν έχουν ξεχωριστά δικαιώματα απέναντι στην αεροπορική. Στην πράξη, οι δύο στρώσεις δικαιωμάτων μπορεί να συνυπάρχουν.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function CharterFlightsCompensationElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Ισχύει αποζημίωση στις charter πτήσεις;"
        description="Μάθετε πότε οι charter πτήσεις καλύπτονται από αποζημίωση, γιατί το πακέτο διακοπών δεν ακυρώνει αυτόματα το EU261 και πώς ξεχωρίζουν τα δικαιώματα απέναντι στην αεροπορική από εκείνα απέναντι στον οργανωτή."
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
            headline: "Ισχύει αποζημίωση στις charter πτήσεις;",
            description:
              "Πρακτικός οδηγός για το πότε οι charter πτήσεις οδηγούν σε αποζημίωση και πώς συνδέονται τα δικαιώματα της πτήσης με τα δικαιώματα ενός πακέτου διακοπών.",
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
                name: "Ισχύει αποζημίωση στις charter πτήσεις;",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Ισχύει αποζημίωση στις charter πτήσεις;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              Οδηγός για charter πτήσεις
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ισχύει αποζημίωση στις charter πτήσεις;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η σύντομη απάντηση είναι <strong>ναι, συχνά ισχύει</strong>. Το ότι μια πτήση είναι
              charter ή ότι αγοράστηκε μέσα από πακέτο διακοπών δεν σημαίνει αυτόματα ότι χάνετε τα
              δικαιώματα του επιβάτη. Το κλειδί είναι να ξεχωρίσουμε τι ισχύει απέναντι στην
              <strong> αεροπορική που εκτέλεσε το σκέλος</strong> και τι μπορεί να ισχύει ξεχωριστά
              απέναντι στον <strong>οργανωτή του πακέτου</strong>.
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
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-600 to-sky-700 p-8 text-white shadow-xl dark:border-cyan-800">
              <h2 className="mb-4 text-2xl font-bold">Σύντομη απάντηση</h2>
              <div className="space-y-3 text-base leading-7 text-cyan-50">
                <p>
                  Το charter δεν βγάζει από μόνο του μια πτήση έξω από το <strong>EU261</strong>.
                </p>
                <p>
                  Αν η διαδρομή εμπίπτει στους ευρωπαϊκούς κανόνες και υπάρχει μεγάλη καθυστέρηση ή
                  ακύρωση, μπορεί να υπάρχει αποζημίωση όπως και σε μια τακτική πτήση.
                </p>
                <p>
                  Αν το ταξίδι ήταν μέρος οργανωμένου πακέτου, μπορεί να υπάρχουν παράλληλα και
                  <strong> ξεχωριστά δικαιώματα</strong> απέναντι στον οργανωτή.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Η charter πτήση σας είχε καθυστέρηση ή ακυρώθηκε;"
            description="Το ClaimWinger Ελλάδα μπορεί να βοηθήσει να φανεί αν η συγκεκριμένη charter πτήση εμπίπτει στο EU261 και αν η υπόθεση πρέπει να διαβαστεί μόνο απέναντι στην αεροπορική ή και σε συνδυασμό με δικαιώματα από πακέτο διακοπών."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=charter_flights"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της περίπτωσής σας."
            placement="el_blog_charter_flights_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Γιατί το charter δεν ακυρώνει αυτόματα τα δικαιώματα πτήσης
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Ένα από τα πιο συχνά λάθη είναι η ιδέα ότι οι charter πτήσεις λειτουργούν έξω από
                κάθε κανονικό πλαίσιο. Στην πράξη, αυτό δεν είναι σωστό. Αν μια πτήση καλύπτεται από
                το πεδίο εφαρμογής του EU261, το ότι ήταν charter δεν αρκεί για να χαθούν τα
                δικαιώματα του επιβάτη.
              </p>
              <p>
                Αυτό σημαίνει ότι μια μεγάλη καθυστέρηση ή μια ακύρωση charter πτήσης μπορεί να
                ανοίγει ακριβώς τα ίδια βασικά ερωτήματα που ανοίγει και μια τακτική πτήση:
                καθυστέρηση στην τελική άφιξη, χρόνος ενημέρωσης, πιθανές έκτακτες περιστάσεις και
                ποια αεροπορική εκτέλεσε πραγματικά το σκέλος.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Plane className="h-5 w-5 text-cyan-600" />
                  <h3 className="text-lg font-semibold">Η πτήση μετράει</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Το πιο κρίσιμο δεν είναι η εμπορική μορφή του ταξιδιού, αλλά αν το συγκεκριμένο
                  σκέλος και η διαδρομή μπαίνουν στο πεδίο του EU261.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Package className="h-5 w-5 text-cyan-600" />
                  <h3 className="text-lg font-semibold">Το πακέτο είναι ξεχωριστό θέμα</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν το ταξίδι ήταν οργανωμένο πακέτο, μπορεί να υπάρχει δεύτερη στρώση δικαιωμάτων
                  απέναντι στον διοργανωτή.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <ShieldCheck className="h-5 w-5 text-cyan-600" />
                  <h3 className="text-lg font-semibold">Η αεροπορική παραμένει σημαντική</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Για την αποζημίωση της πτήσης, κοιτάμε συνήθως την αεροπορική που εκτέλεσε το σκέλος
                  και όχι μόνο το ταξιδιωτικό γραφείο που πούλησε το πακέτο.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Ποιο είναι το πιο συχνό μπέρδεμα στα πακέτα διακοπών
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Όταν ένα ταξίδι αγοράζεται από tour operator ή ταξιδιωτικό γραφείο, πολλοί επιβάτες
                νομίζουν ότι όλη η ευθύνη πηγαίνει μόνο εκεί. Αυτό όμως δεν είναι πάντα η σωστή
                ανάγνωση. Υπάρχει συχνά μια <strong>διπλή λογική</strong>.
              </p>
              <p>
                Από τη μία, μπορεί να υπάρχουν δικαιώματα που αφορούν την ίδια την πτήση, δηλαδή
                καθυστέρηση ή ακύρωση όπως τις βλέπει το EU261. Από την άλλη, αν το ταξίδι ήταν
                μέρος οργανωμένου πακέτου, μπορεί να υπάρχουν και δικαιώματα για την κακή εκτέλεση
                των υπηρεσιών του πακέτου απέναντι στον διοργανωτή.
              </p>
              <p>
                Αυτές οι δύο στρώσεις δεν είναι το ίδιο πράγμα. Το σωστό είναι να μη χαθεί καμία από
                τις δύο επειδή αντιμετωπίσατε την υπόθεση μονόπλευρα.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Τα ποσά αλλάζουν επειδή η πτήση ήταν charter;
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Όχι από μόνο του. Αν υπάρχει δικαίωμα αποζημίωσης, η λογική παραμένει η ίδια:
                συνήθως μιλάμε για <strong>250 €, 400 € ή 600 €</strong>, ανάλογα με την απόσταση
                και τη δομή της διαδρομής.
              </p>
              <p>
                Η μεγάλη διαφορά στις charter πτήσεις δεν είναι συνήθως το ποσό, αλλά το ότι οι
                επιβάτες μπερδεύουν πιο εύκολα ποιος είναι ο σωστός αποδέκτης του αιτήματος και ποια
                δικαιώματα τρέχουν παράλληλα.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-6 dark:border-sky-900/50 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Πότε το ClaimWinger έχει περισσότερο νόημα
              </h2>
              <div className="space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                <p>
                  Στις charter πτήσεις το μεγαλύτερο πρόβλημα είναι συνήθως η σωστή ταξινόμηση της
                  υπόθεσης: αεροπορική, διοργανωτής, πακέτο, καθυστέρηση, ακύρωση, τελική άφιξη και
                  έγκαιρη ενημέρωση.
                </p>
                <p>
                  Σε αυτό το σημείο το <strong>ClaimWinger</strong> μπορεί να βοηθήσει να διαβαστεί
                  σωστά η περίπτωση. Η προμήθεια του ClaimWinger είναι <strong>30%</strong>,
                  ανεξάρτητα από το αν η πορεία είναι εξωδικαστική ή δικαστική.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick("el_blog_charter_flights_inline", claimWingerHomeHref)
                    }
                  >
                    Έλεγχος υπόθεσης με ClaimWinger
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href={cancelledFlightHref}
                    onClick={() =>
                      trackClaimClick("el_blog_charter_flights_cancelled", cancelledFlightHref)
                    }
                  >
                    Δείτε και τα δικαιώματα σε ακυρωμένη πτήση
                  </Link>
                </Button>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Τι να κρατήσετε ως αποδεικτικά
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Σε μια charter υπόθεση βοηθούν ιδιαίτερα:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-cyan-600">
                <li>η επιβεβαίωση του πακέτου ή της κράτησης,</li>
                <li>τα στοιχεία της αεροπορικής που εκτέλεσε το σκέλος,</li>
                <li>τα μηνύματα για την καθυστέρηση ή την ακύρωση,</li>
                <li>η τελική ώρα άφιξης, αν το ζήτημα ήταν μεγάλη καθυστέρηση.</li>
              </ul>
              <p>
                Όσο πιο καθαρά φαίνεται ποιος εκτέλεσε την πτήση και τι ακριβώς συνέβη χρονικά, τόσο
                πιο εύκολα ξεχωρίζετε τη διεκδίκηση για την πτήση από οποιοδήποτε παράλληλο θέμα πακέτου.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Σχετικοί οδηγοί
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ακυρωμένη πτήση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ο βασικός οδηγός για τα ποσά και τη λογική των ακυρώσεων στο EU261.
                </p>
                <Link
                  href="/el/blog/posa-chrimata-pairno-gia-akyromeni-ptisi"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε τα ποσά
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Καθυστερημένη πτήση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο όταν το charter θέμα αφορά κυρίως μεγάλη καθυστέρηση στην άφιξη.
                </p>
                <Link
                  href="/el/blog/poses-ores-kathysterisis-chreiazontai-gia-apozimiosi"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε τον κανόνα των 3 ωρών
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Χωρίς boarding pass
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο όταν η υπόθεση είναι πακέτο και δεν έχετε όλα τα αποδεικτικά όσο καθαρά θα
                  θέλατε.
                </p>
                <Link
                  href="/el/blog/mporo-na-zitiso-apozimiosi-choris-boarding-pass"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε τι άλλο βοηθά
                </Link>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-slate-200 p-8 dark:border-slate-700">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                Συμπέρασμα
              </h2>
              <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                <p>
                  Οι charter πτήσεις δεν βρίσκονται αυτόματα έξω από το ευρωπαϊκό πλαίσιο
                  αποζημίωσης. Αν η πτήση εμπίπτει στο EU261 και πληρούνται οι βασικές προϋποθέσεις,
                  μπορεί να υπάρχει αποζημίωση όπως και σε μια τακτική γραμμή.
                </p>
                <p>
                  Η ουσιαστική διαφορά είναι ότι στα πακέτα διακοπών μπαίνει συχνά και δεύτερο επίπεδο
                  δικαιωμάτων απέναντι στον διοργανωτή. Το σωστό είναι να μη χαθεί ούτε το ένα ούτε
                  το άλλο, επειδή αντιμετωπίσατε την υπόθεση σαν να αφορά μόνο μία πλευρά.
                </p>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Συχνές ερωτήσεις</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <Card key={item.question} className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                    {item.question}
                  </h3>
                  <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                    {item.answer}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <Card className="border-sky-200 bg-white p-8 shadow-sm dark:border-sky-900/40 dark:bg-slate-950/60">
              <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                Θέλετε να δείτε αν η charter πτήση σας έχει πραγματική βάση για αποζημίωση;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Μπορείτε να ξεκινήσετε από το <strong>ClaimWinger</strong> στα ελληνικά ή να δείτε
                ξεχωριστά και τις σελίδες για <strong>καθυστερημένη πτήση</strong> και
                <strong> ακυρωμένη πτήση</strong>, ανάλογα με το πώς μοιάζει περισσότερο η περίπτωσή
                σας.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick("el_blog_charter_flights_footer_home", claimWingerHomeHref)
                    }
                  >
                    ClaimWinger Ελλάδα
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href={delayedFlightHref}
                    onClick={() =>
                      trackClaimClick("el_blog_charter_flights_footer_delayed", delayedFlightHref)
                    }
                  >
                    Καθυστερημένη πτήση
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href={cancelledFlightHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_charter_flights_footer_cancelled",
                        cancelledFlightHref,
                      )
                    }
                  >
                    Ακυρωμένη πτήση
                  </Link>
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </article>
    </LayoutEl>
  );
}
