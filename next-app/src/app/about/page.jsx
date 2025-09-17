'use client';

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export default function Page() {
  const GALLERY = [
    { src: "/images/office/1.webp", alt: "Χώρος γραφείου — γενική άποψη" },
    { src: "/images/office/2.jpg",  alt: "Γραφείο εργασίας" },
    { src: "/images/office/3.jpg",  alt: "Χώρος συναντήσεων" },
    { src: "/images/office/4.jpg",  alt: "Βιβλιοθήκη / αρχειοθήκη" },
    { src: "/images/office/5.jpg",  alt: "Εξωτερικός χώρος" },
    { src: "/images/office/6.jpg",  alt: "Εξωτερικός χώρος" },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i) => { setIndex(i); setOpen(true); };
  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % GALLERY.length), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <main className="bg-[#0B0B0C] text-white">
      {/* ΝΕΟ header, ίδιο στυλ με Contact */}
      <PageHeader
        eyebrow="Γραφείο"
        title="Ποιοι Είμαστε"
        lead="Σύντομες πληροφορίες"
      />

      {/* Περιεχόμενο */}
      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Χρήση ίδιου card/neutral στυλ με FAQ, ίσα ύψη με CSS var */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start [--cardH:14rem] md:[--cardH:16rem] lg:[--cardH:18rem]">
            {/* Αριστερά: πορτρέτο + κείμενο */}
            <div>
              {/* Πορτρέτο Θανάση — image edge-to-edge, no bottom gap */}
              <figure className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden h-[var(--cardH)]">
                <div className="grid grid-cols-[auto_1fr] items-stretch h-full">
                  {/* Image column: fill full card height */}
                  <div className="relative shrink-0 h-full w-[8.5rem] sm:w-[10rem] md:w-[11rem] lg:w-[12rem] overflow-hidden">
                    <img
                      src="/images/thanasis/1.jpg"
                      alt="Πορτρέτο: Θανάσης Γ. Ραδαίος"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Text side */}
                  <figcaption
                    className="flex items-center justify-center md:border-l border-white/10 p-4 md:p-5 leading-tight h-full text-center">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">Θανάσης Γ. Ραδαίος</h3>
                      <p className="mt-1 text-white/75 text-sm md:text-base">
                        Πολιτικός Μηχανικός <br/> M.Sc. ΕΜΠ
                      </p>
                    </div>
                  </figcaption>
                </div>
              </figure>

              {/* Κύριο κείμενο (παραμένει αυτούσιο) */}
              <div className="mt-4 space-y-4 leading-relaxed text-white/85">
                <p>Ονομάζομαι Θανάσης Γ. Ραδαίος και είμαι διπλωματούχος Πολιτικός Μηχανικός.</p>
                <p>Μαζί με έμπειρους συνεργάτες όλων των ειδικοτήτων παρέχουμε ολοκληρωμένες τεχνικές υπηρεσίες, με σεβασμό στις ανάγκες και τις δυνατότητες κάθε πελάτη.</p>
                <p>Στόχος μας είναι να προσφέρουμε τεχνικές υπηρεσίες υψηλής ποιότητας, αντιμετωπίζοντας κάθε περίπτωση ξεχωριστά, με σεβασμό στις ανάγκες, τις επιθυμίες και τις οικονομικές δυνατότητες του κάθε πελάτη.</p>
                <p>Παράλληλα, επενδύουμε στη συνεχή επιμόρφωση και στην παρακολούθηση των επιστημονικών και νομοθετικών εξελίξεων, ενώ αξιοποιούμε τα πιο σύγχρονα εργαλεία λογισμικού και τεχνολογίας, ώστε να παρέχουμε καινοτόμες και αξιόπιστες λύσεις.</p>
              </div>

              {/* Σύντομο Βιογραφικό — ίδιο στυλ κάρτας με FAQ */}
              <details className="mt-8 group rounded-2xl border border-white/15 bg-white/5 px-5 py-4 open:bg-white/[0.075]">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
                  <span className="text-base font-medium text-white">Σύντομο Βιογραφικό</span>
                  <span className="shrink-0 rounded-full border border-white/25 px-2 py-0.5 text-xs text-white/80 group-open:hidden" aria-hidden="true">+</span>
                  <span className="shrink-0 rounded-full border border-white/25 px-2 py-0.5 text-xs text-white/80 hidden group-open:inline" aria-hidden="true">−</span>
                </summary>
                <div className="mt-4 space-y-4 text-sm leading-7 text-white/85">
                  <p>Ονομάζομαι Θανάσης Γ. Ραδαίος και είμαι Διπλωματούχος Πολιτικός Μηχανικός του Εθνικού Μετσόβιου Πολυτεχνείου (2006).</p>
                  <p>Από το έτος 2007 δραστηριοποιούμαι ως ελεύθερος επαγγελματίας εκπονώντας μελέτες δημόσιων και ιδιωτικών έργων στην Ελλάδα και το εξωτερικό.</p>
                  <p>Διαθέτω πολυετή εμπειρία σε κτιριακά έργα (κατοικίες, εκπαιδευτήρια, καταστήματα, ξενοδοχεία), αλλά και σε μεγάλα έργα υποδομής. Στην πορεία της επαγγελματικής μου δραστηριότητας έχω ολοκληρώσει πλήθος μελετών και αδειοδοτήσεων, ενώ έχω αναλάβει και την επίβλεψη της κατασκευής πολλών από αυτά τα έργα.</p>
                  <p>Το 2016 απέκτησα Μεταπτυχιακό Δίπλωμα Ειδίκευσης στη Σεισμική Μηχανική και Αντισεισμικές Κατασκευές από το Ελληνικό Ανοιχτό Πανεπιστήμιο. Παράλληλα, είμαι Ενεργειακός Επιθεωρητής Α΄ τάξης, Ελεγκτής Δόμησης και κατέχω πτυχίο Μελετητή Δημοσίων Έργων Β΄ τάξης.</p>
                </div>
              </details>
            </div>

            {/* Δεξιά: φωτογραφίες γραφείου (click-to-lightbox) */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* Banner (index 0) */}
                <button
                  type="button"
                  onClick={() => openAt(0)}
                  className="col-span-2 sm:col-span-3 group cursor-pointer rounded-2xl overflow-hidden shadow-sm ring-1 ring-white/10 bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  aria-label="Μεγέθυνση εικόνας: Χώρος γραφείου — γενική άποψη"
                >
                  <img
                    src={GALLERY[0].src}
                    alt={GALLERY[0].alt}
                    className="w-full h-[var(--cardH)] object-cover cursor-pointer"
                    loading="lazy"
                  />
                </button>

                {/* Thumbs (index 1..end) */}
                {GALLERY.slice(1).map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => openAt(i + 1)}
                    className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm ring-1 ring-white/10 bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    aria-label={`Μεγέθυνση εικόνας: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-44 object-cover cursor-pointer"
                      loading="lazy"
                    />
                  </button>
                ))}


                {/* Λογότυπο (μη κλικαμπλ) */}
                <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-white/10 bg-white/5 flex items-center justify-center">
                  <img
                    src="/logo/logo_sign.png"
                    alt="Λογότυπο"
                    className="w-full h-44 object-contain p-6"
                    loading="lazy"
                  />
                </div>
              </div>

              <p className="mt-3 text-xs text-white/50 text-center">
                * Ενδεικτικό φωτογραφικό υλικό — θα ενημερωθεί με τελικά assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA (ίδιο στυλ με FAQ) */}
      <section className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center text-center">
          <h3 className="text-lg font-medium">Χρειάζεστε περισσότερες πληροφορίες;</h3>
          <p className="mt-2 text-white/80">
            Είμαστε στη διάθεσή σας για κάθε διευκρίνιση σχετικά με τη δική σας περίπτωση.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-white/20 px-4 py-2 text-white/90 hover:text-white hover:border-white/40 transition focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Επικοινωνία
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Lightbox Modal ---------- */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div className="relative max-w-[92vw] max-h-[92vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY[index].src}
              alt={GALLERY[index].alt}
              className="max-w-[92vw] max-h-[92vh] object-contain rounded-xl ring-1 ring-white/10 shadow-2xl"
            />

            {/* Close */}
            <button
              type="button"
              onClick={close}
              className="absolute -top-3 -right-3 md:top-2 md:right-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Κλείσιμο προβολής"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Προηγούμενη εικόνα"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Επόμενη εικόνα"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Caption */}
            <div className="absolute left-0 right-0 -bottom-10 md:bottom-[-3.25rem] text-center text-xs md:text-sm text-white/80">
              {GALLERY[index].alt}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
