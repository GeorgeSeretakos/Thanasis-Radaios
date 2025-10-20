"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname() || "/";
  const isHome = pathname === "/";

  // Shared name line (scaled up globally)
  const NameLine = () => (
    <p className="mt-4 text-center leading-tight">
      <span className="align-baseline text-lg md:text-xl font-medium tracking-wide">
        ΘΑΝΑΣΗΣ Γ. ΡΑΔΑΙΟΣ
      </span>
      <span className="align-baseline text-sm md:text-base font-normal text-white/85">
        {" "}
        – Πολιτικός Μηχανικός ΕΜΠ, MSc
      </span>
    </p>
  );

  return (
    <footer className="w-full bg-[#0B0B0C] text-white h-[calc(100dvh-4rem)] grid grid-rows-[1fr_auto] overflow-x-hidden">
      {/* MAIN */}
      <section className="min-h-0 h-full flex flex-col">
        {/* CONTENT */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          {/* ===== HOME VARIANT ===== */}
          {isHome ? (
            <>
              {/* Title */}
              <h1 className="text-center text-[22px] sm:text-[24px] md:text-[25px] font-semibold tracking-[0.14em] uppercase leading-none">
                Τεχνικό Γραφείο
              </h1>

              {/* Logo */}
              <div className="mt-3 w-full max-w-[380px] sm:max-w-[420px]">
                <img
                  src="/logo/logo_sign.png"
                  alt="Λογότυπο"
                  className="mx-auto w-full h-28 sm:h-32 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Name + title */}
              <NameLine />

              {/* Contact info */}
              <div className="mt-4 mx-auto max-w-4xl text-left">
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs md:text-sm leading-snug">
                  {/* Phones */}
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 text-white/70"
                      aria-hidden="true"
                    >
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
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 text-white/70"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0l-8 5L4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <a
                      href="mailto:thanasisradaios@gmail.com"
                      className="hover:underline break-words"
                    >
                      thanasisradaios@gmail.com
                    </a>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 text-white/70"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 22s7-5.12 7-11a7 7 0 1 0-14 0c0 5.88 7 11 7 11Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="11"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <address className="not-italic">
                      Βασιλέως Αλεξάνδρου 58, Περιστέρι 121 34
                    </address>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* ===== NON-HOME VARIANT ===== */
            <>
              {/* Text without logo */}
              <h2 className="text-center text-[22px] sm:text-[24px] md:text-[25px] font-semibold tracking-[0.14em] uppercase leading-none">
                Τεχνικό Γραφείο
              </h2>
              <NameLine />

              {/* Contact info */}
              <div className="mt-4 mx-auto max-w-4xl text-left">
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs md:text-sm leading-snug">
                  {/* Phones */}
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 text-white/70"
                      aria-hidden="true"
                    >
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
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 text-white/70"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0l-8 5L4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <a
                      href="mailto:thanasisradaios@gmail.com"
                      className="hover:underline break-words"
                    >
                      thanasisradaios@gmail.com
                    </a>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 text-white/70"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 22s7-5.12 7-11a7 7 0 1 0-14 0c0 5.88 7 11 7 11Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="11"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <address className="not-italic">
                      Βασιλέως Αλεξάνδρου 58, Περιστέρι 121 34
                    </address>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Map */}
        <div className="relative w-[100dvw] left-1/2 -translate-x-1/2 h-40 md:h-52 lg:h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.6304424848936!2d23.693277075851736!3d38.00907959862871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a3b09e2f49df%3A0x67a12e8301f2d17a!2zzqTOlc6nzp3Omc6azp8gzpPOoc6RzqbOlc6Zzp8gLSDOmM6xzr3OrM-DzrfPgiDOky4gzqHOsc60zrHOr86_z4I!5e0!3m2!1sel!2sgr!4v1757517408506!5m2!1sel!2sgr"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Χάρτης γραφείου"
          />
        </div>
      </section>

      {/* Copyright */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center">
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs text-white/65">
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
              <a href="/privacy" className="hover:text-white/90">
                Privacy Policy
              </a>
              <span className="hidden sm:inline text-white/25">|</span>
              <a
                href="mailto:thanasisradaios@gmail.com"
                className="hover:text-white/90"
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
