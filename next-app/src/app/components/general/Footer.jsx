export default function Footer() {
  const year = new Date().getFullYear();

  // Full-viewport footer, below a 4rem (h-16) navbar
  return (
    <footer className="w-full bg-[#0B0B0C] text-white h-[calc(100dvh-4rem)] grid grid-rows-[1fr_auto]">
      {/* Main content (fills available space). Scrolls if needed on small screens */}
      <section className="min-h-0 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <header className="text-center">
            <p className="text-[11px] tracking-widest text-white/50 uppercase">Τεχνικό Γραφείο</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold leading-tight">
              <span className="block">Θανάσης Γ. Ραδαίος - Πολιτικός Μηχανικός ΕΜΠ MSc</span>
            </h2>
          </header>

          {/* Two-column area: Contact (left), Map (right) */}
          <div className="mt-8 md:mt-10 grid gap-8 md:gap-10 lg:grid-cols-2 items-stretch">
            {/* Contact / Brand card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8 flex flex-col">
              <ul className="space-y-5 text-sm leading-relaxed">
                {/* Address */}
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white/70 mt-0.5" aria-hidden="true">
                    <path d="M12 22s7-5.12 7-11a7 7 0 1 0-14 0c0 5.88 7 11 7 11Z" stroke="currentColor"
                          strokeWidth="1.5"/>
                    <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <address className="not-italic">
                    Βασιλέως Αλεξάνδρου 58, Περιστέρι 121 34
                  </address>
                </li>

                {/* Phones */}
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white/70 mt-0.5" aria-hidden="true">
                    <path d="M4 5c0-1.1.9-2 2-2h2l2 4-2 1c1 2.5 3.5 5 6 6l1-2 4 2v2c0 1.1-.9 2-2 2 0 0-10 1-15-11V5Z"
                          stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <a href="tel:2105745542" className="hover:underline">
                      <span className="whitespace-nowrap" dir="ltr">21 0574 5542</span>
                    </a>
                    <span className="text-white/40">·</span>
                    <a href="tel:6942242707" className="hover:underline">
                      <span className="whitespace-nowrap" dir="ltr">694 224 2707</span>
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white/70 mt-0.5" aria-hidden="true">
                    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0l-8 5L4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6"
                          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  <a href="mailto:thanasisradaios@gmail.com" className="hover:underline break-words">
                    thanasisradaios@gmail.com
                  </a>
                </li>
              </ul>

              {/* Quick actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:2105745542"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3.5 py-2 text-xs md:text-sm text-white/90 hover:text-white hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 5c0-1.1.9-2 2-2h2l2 4-2 1c1 2.5 3.5 5 6 6l1-2 4 2v2c0 1.1-.9 2-2 2 0 0-10 1-15-11V5Z"
                          stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  Κλήση
                </a>
                <a
                  href="mailto:thanasisradaios@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3.5 py-2 text-xs md:text-sm text-white/90 hover:text-white hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0l-8 5L4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6"
                          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  Email
                </a>
                <a
                  href="https://maps.google.com/?q=%CE%92%CE%B1%CF%83%CE%B9%CE%BB%CE%AD%CF%89%CF%82%20%CE%91%CE%BB%CE%B5%CE%BE%CE%AC%CE%BD%CE%B4%CF%81%CE%BF%CF%85%2058,%20%CE%A0%CE%B5%CF%81%CE%B9%CF%83%CF%84%CE%AD%CF%81%CE%B9%20121%2034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3.5 py-2 text-xs md:text-sm text-white/90 hover:text-white hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 22s7-5.12 7-11a7 7 0 1 0-14 0c0 5.88 7 11 7 11Z" stroke="currentColor"
                          strokeWidth="1.5"/>
                    <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  Πλοήγηση
                </a>
              </div>

              {/* Brand mark */}
              <div className="mt-8 md:mt-10 flex items-center gap-4">
                <img
                  src="/logo/logo_sign.png"
                  alt="Λογότυπο Τεχνικό Γραφείο - Θανάσης Γ. Ραδαίος"
                  className="h-16 md:h-20 w-auto object-contain"
                  loading="lazy"
                />
                <div className="hidden sm:block text-xs text-white/60 leading-5">
                  Τεχνικό Γραφείο — Άδεια, Μελέτη, Κατασκευή
                </div>
              </div>
            </div>

            {/* Map block */}
            <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] min-h-[300px] lg:h-auto">
              <div className="relative h-[360px] sm:h-[420px] lg:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.6304424848936!2d23.693277075851736!3d38.00907959862871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a3b09e2f49df%3A0x67a12e8301f2d17a!2zzqTOlc6nzp3Omc6azp8gzpPOoc6RzqbOlc6Zzp8gLSDOmM6xzr3OrM-DzrfPgiDOky4gzqHOsc60zrHOr86_z4I!5e0!3m2!1sel!2sgr!4v1757517408506!5m2!1sel!2sgr"
                  className="absolute inset-0 w-full h-full"
                  style={{border: 0}}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Χάρτης γραφείου"
                />
              </div>

              {/* Map actions */}
              <div
                className="flex items-center justify-between gap-3 px-4 py-3 border-t border-white/10 text-xs text-white/70">
                <span>Εμφάνιση στο Google Maps</span>
                <a
                  href="https://maps.google.com/?q=%CE%92%CE%B1%CF%83%CE%B9%CE%BB%CE%AD%CF%89%CF%82%20%CE%91%CE%BB%CE%B5%CE%BE%CE%AC%CE%BD%CE%B4%CF%81%CE%BF%CF%85%2058,%20%CE%A0%CE%B5%CF%81%CE%B9%CF%83%CF%84%CE%AD%CF%81%CE%B9%20121%2034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 hover:border-white/35 hover:text-white transition"
                >
                  Άνοιγμα
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17l10-10M11 7h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                          strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom brand bar (copyright + privacy) */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center">
          <div
            className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-white/65">
            <div className="flex items-center gap-3">
              <img
                src="/logo/logo_sign.png"
                alt=""
                className="h-5 w-auto opacity-80 hidden sm:block"
                aria-hidden="true"
                loading="lazy"
              />
              <span>© {year} T. G. Radaios — All rights reserved.</span>
            </div>
            <nav className="flex items-center gap-4">
              <a href="/privacy"
                 className="hover:text-white/90 focus:outline-none focus:ring-2 focus:ring-white/30 rounded px-1">
                Privacy Policy
              </a>
              <span className="hidden sm:inline text-white/25">|</span>
              <a
                href="mailto:thanasisradaios@gmail.com"
                className="hover:text-white/90 focus:outline-none focus:ring-2 focus:ring-white/30 rounded px-1"
              >
                Support
              </a>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
}
