export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B0B0C] text-white h-[calc(100dvh-4rem)] grid grid-rows-[1fr_auto] overflow-x-hidden">
      {/* MAIN */}
      <section className="min-h-0 h-full flex flex-col">
        {/* CONTENT centered vertically between navbar & map */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <p className="text-center text-[9px] md:text-[11px] tracking-[0.18em] text-white/55 uppercase leading-none">
            Τεχνικό Γραφείο
          </p>

          {/* Name */}
          <h2 className="mt-1 text-center text-base md:text-lg lg:text-xl font-semibold leading-snug">
            Θανάσης Γ. Ραδαίος - Πολιτικός Μηχανικός ΕΜΠ MSc
          </h2>

          {/* Logo */}
          <div className="mt-2 w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src="/logo/logo_sign.png"
              alt="Λογότυπο"
              className="w-full h-28 sm:h-32 md:h-36 object-contain"
              loading="lazy"
            />
          </div>


          {/* Contact info + CTAs */}
          <div className="mt-3 mx-auto max-w-3xl text-left">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs md:text-sm leading-snug">

              {/* Phones */}
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white/70" aria-hidden="true">
                  <path
                    d="M4 5c0-1.1.9-2 2-2h2l2 4-2 1c1 2.5 3.5 5 6 6l1-2 4 2v2c0 1.1-.9 2-2 2 0 0-10 1-15-11V5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="flex flex-wrap items-center gap-x-2">
                  <a href="tel:2105745542" className="hover:underline">
                    <span dir="ltr">21 0574 5542</span>
                  </a>
                  <span className="text-white/35">·</span>
                  <a href="tel:6942242707" className="hover:underline">
                    <span dir="ltr">694 224 2707</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white/70" aria-hidden="true">
                  <path
                    d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0l-8 5L4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href="mailto:thanasisradaios@gmail.com" className="hover:underline break-words">
                  thanasisradaios@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white/70" aria-hidden="true">
                  <path
                    d="M12 22s7-5.12 7-11a7 7 0 1 0-14 0c0 5.88 7 11 7 11Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <address className="not-italic">
                  Βασιλέως Αλεξάνδρου 58, Περιστέρι 121 34
                </address>
              </div>
            </div>

            {/*/!* CTAs *!/*/}
            {/*<div className="mt-6 flex flex-wrap justify-center gap-2">*/}
            {/*  <a*/}
            {/*    href="tel:2105745542"*/}
            {/*    className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3.5 py-1.5 text-xs md:text-sm text-white/90 hover:text-white hover:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"*/}
            {/*  >*/}
            {/*    Κλήση*/}
            {/*  </a>*/}
            {/*  <a*/}
            {/*    href="mailto:thanasisradaios@gmail.com"*/}
            {/*    className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3.5 py-1.5 text-xs md:text-sm text-white/90 hover:text-white hover:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"*/}
            {/*  >*/}
            {/*    Email*/}
            {/*  </a>*/}
            {/*  <a*/}
            {/*    href="https://www.google.com/maps/place/%CE%92%CE%B1%CF%83.+%CE%91%CE%BB%CE%B5%CE%BE%CE%AC%CE%BD%CE%B4%CF%81%CE%BF%CF%85+58,+%CE%A0%CE%B5%CF%81%CE%B9%CF%83%CF%84%CE%AD%CF%81%CE%B9+121+34/@38.0090795,23.6909811,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1a33713bf494d:0x34c78d62b163aea!8m2!3d38.0090754!4d23.695852!16s%2Fg%2F11rp4vtffj?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*    className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3.5 py-1.5 text-xs md:text-sm text-white/90 hover:text-white hover:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"*/}
            {/*  >*/}
            {/*    Πλοήγηση*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
        </div>

        <div className="relative w-[100dvw] left-1/2 -translate-x-1/2 h-52 md:h-64 lg:h-80">
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

      </section>

      {/* Copyright row (unchanged) */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center">
          <div
            className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs text-white/65">
            <div className="flex items-center gap-3">
              <img src="/logo/logo_sign.png" alt="" className="h-5 w-auto opacity-80 hidden sm:block" aria-hidden="true"
                   loading="lazy"/>
              <span>© {year} T. G. Radaios — All rights reserved.</span>
            </div>
            <nav className="flex items-center gap-4">
              <a href="/privacy" className="hover:text-white/90">Privacy Policy</a>
              <span className="hidden sm:inline text-white/25">|</span>
              <a href="mailto:thanasisradaios@gmail.com" className="hover:text-white/90">Support</a>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
}
