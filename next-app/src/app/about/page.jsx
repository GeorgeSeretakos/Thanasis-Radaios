'use client';

import PageHeader from "../components/general/PageHeader";

export default function Page() {
  return (
    <main className="bg-[#0B0B0C] text-white overflow-x-hidden">
      {/* Header */}
      <PageHeader title="Ποιοί Είμαστε" lead="Σύντομες πληροφορίες" />

      {/* Thanasis section */}
      <section className="pb-8 md:pb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            {/* Photo + Name/Profession side by side */}
            <div className="flex items-center gap-6 md:gap-10">
              {/* Rounded photo (show full image, not cropped) */}
              <div className="relative w-[9.5rem] sm:w-[10.5rem] md:w-[12rem] lg:w-[13rem] h-[12rem] sm:h-[13rem] md:h-[14rem] lg:h-[15rem] rounded-lg shrink-0 bg-white/[0.03] flex items-center justify-center">
                <img
                  src="/images/thanasis/1.jpg"
                  alt="Πορτρέτο: Θανάσης Γ. Ραδαίος"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Name & title vertically centered */}
              <div className="leading-tight text-left">
                <h3 className="text-lg md:text-xl font-semibold">Θανάσης Γ. Ραδαίος</h3>
                <p className="mt-1 text-white/75 text-sm md:text-base">
                  Πολιτικός Μηχανικός <br /> ΕΜΠ MSc
                </p>
              </div>
            </div>

            {/* Text blocks — justified, narrower */}
            <div className="mt-6 w-full max-w-2xl space-y-4 leading-relaxed text-white/85">
              <p>Ονομάζομαι Θανάσης Γ. Ραδαίος και είμαι διπλωματούχος Πολιτικός Μηχανικός.</p>
              <p>Μαζί με έμπειρους συνεργάτες όλων των ειδικοτήτων παρέχουμε ολοκληρωμένες τεχνικές υπηρεσίες, με σεβασμό στις ανάγκες και τις δυνατότητες κάθε πελάτη.</p>
              <p>Στόχος μας είναι να προσφέρουμε τεχνικές υπηρεσίες υψηλής ποιότητας, αντιμετωπίζοντας κάθε περίπτωση ξεχωριστά, με σεβασμό στις ανάγκες, τις επιθυμίες και τις οικονομικές δυνατότητες του κάθε πελάτη.</p>
              <p>Παράλληλα, επενδύουμε στη συνεχή επιμόρφωση και στην παρακολούθηση των επιστημονικών και νομοθετικών εξελίξεων, ενώ αξιοποιούμε τα πιο σύγχρονα εργαλεία λογισμικού και τεχνολογίας, ώστε να παρέχουμε καινοτόμες και αξιόπιστες λύσεις.</p>
            </div>

            {/* Bio toggle */}
            <details className="mt-6 w-full max-w-2xl group">
              <summary className="list-none cursor-pointer w-full inline-flex items-center justify-between gap-3 rounded-xl border border-white/20 px-4 py-2 text-white/90 hover:text-white hover:border-white/40 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
                <span className="text-base font-medium">Βιογραφικό</span>
                <span
                  className="shrink-0 rounded-full border border-white/25 px-2 py-0.5 text-xs text-white/80 group-open:hidden"
                  aria-hidden="true"
                >
                  +
                </span>
                <span
                  className="shrink-0 rounded-full border border-white/25 px-2 py-0.5 text-xs text-white/80 hidden group-open:inline"
                  aria-hidden="true"
                >
                  −
                </span>
              </summary>

              {/* Inside a framed box, font size 11px */}
              <div className="mt-4 rounded-xl border border-white/20 bg-white/[0.03] p-4 text-[11px] leading-6 text-white/85">
                <p>Ονομάζομαι Θανάσης Γ. Ραδαίος και είμαι Διπλωματούχος Πολιτικός Μηχανικός του Εθνικού Μετσόβιου Πολυτεχνείου (2006).</p>
                <p className="mt-3">Από το έτος 2007 δραστηριοποιούμαι ως ελεύθερος επαγγελματίας εκπονώντας μελέτες δημόσιων και ιδιωτικών έργων στην Ελλάδα και το εξωτερικό.</p>
                <p className="mt-3">Διαθέτω πολυετή εμπειρία σε κτιριακά έργα (κατοικίες, εκπαιδευτήρια, καταστήματα, ξενοδοχεία), αλλά και σε μεγάλα έργα υποδομής. Στην πορεία της επαγγελματικής μου δραστηριότητας έχω ολοκληρώσει πλήθος μελετών και αδειοδοτήσεων, ενώ έχω αναλάβει και την επίβλεψη της κατασκευής πολλών από αυτά τα έργα.</p>
                <p className="mt-3">Το 2016 απέκτησα Μεταπτυχιακό Δίπλωμα Ειδίκευσης στη Σεισμική Μηχανική και Αντισεισμικές Κατασκευές από το Ελληνικό Ανοιχτό Πανεπιστήμιο. Παράλληλα, είμαι Ενεργειακός Επιθεωρητής Α΄ τάξης, Ελεγκτής Δόμησης και κατέχω πτυχίο Μελετητή Δημοσίων Έργων Β΄ τάξης.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Office image — smaller width, show full height (no crop) */}
      <section className="mt-4">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <img
              src="/images/office/1.webp"
              alt="Χώρος γραφείου — γενική άποψη"
              className="block w-full h-auto object-contain rounded-none"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center text-center">
        <h3 className="text-lg font-medium">Χρειάζεστε περισσότερες πληροφορίες;</h3>
        <p className="mt-2 text-white/80">
          Είμαστε στη διάθεσή σας για κάθε διευκρίνιση σχετικά με τη δική σας περίπτωση.
        </p>
        <div className="mt-4">
          <a
            href="/contact"
            className="inline-flex items-center rounded-xl border border-white/20 px-4 py-2 text-white/90 hover:text-white hover:border-white/40 transition focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Επικοινωνία
          </a>
        </div>
      </section>
    </main>
  );
}
