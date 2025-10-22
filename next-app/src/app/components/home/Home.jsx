"use client";

export default function Home() {
  const NameLine = () => (
    <p className="mt-4 text-center leading-tight !text-[16px] sm:!text-[18px] md:!text-[20px]">
      <span className="name-line-main align-baseline tracking-wide block sm:inline">
        ΘΑΝΑΣΗΣ Γ. Ραδαίος
      </span>
      {/* Dash hidden on mobile, shown from sm+ */}
      <span className="hidden sm:inline">{" "}–{" "}</span>
      <span className="name-line-sub align-baseline block sm:inline">
        Πολιτικός Μηχανικός ΕΜΠ, MSc
      </span>
    </p>
  );

  return (
    <section className="relative w-full min-h-[calc(100dvh-4rem)] bg-[#0B0B0C] text-white overflow-x-hidden">
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "42px 42px, 42px 42px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-h-[calc(100dvh-4rem)] flex flex-col items-center justify-center">
        {/* Heading (one scale smaller, forced) */}
        <h1 className="text-center uppercase leading-none tracking-[0.2em] font-semibold
                       !text-[23px] sm:!text-[25px] md:!text-[28px]">
          Τεχνικό Γραφείο
        </h1>

        {/* Logo one scale smaller */}
        <div className="mt-4 w-full max-w-[480px] sm:max-w-[520px]">
          <img
            src="/logo/logo_final.png"
            alt="Λογότυπο"
            className="mx-auto w-full h-32 sm:h-36 md:h-40 object-contain"
          />
        </div>

        <NameLine />

        {/* One-line contacts on desktop — sizes unchanged */}
        <div className="mt-6">
          <div className="flex flex-col md:flex-row items-center justify-center
                          gap-y-4 md:gap-y-0 md:gap-x-12 text-sm md:text-base">
            {/* Phones */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white/75"><path d="M4 5c0-1.1.9-2 2-2h2l2 4-2 1c1 2.5 3.5 5 6 6l1-2 4 2v2c0 1.1-.9 2-2 2 0 0-10 1-15-11V5Z" stroke="currentColor" strokeWidth="1.5"/></svg>
              <div className="flex items-center gap-x-3">
                <a href="tel:2105745542" className="hover:underline"><span dir="ltr">21 0574 5542</span></a>
                <span className="text-white/35">·</span>
                <a href="tel:6942242707" className="hover:underline"><span dir="ltr">694 224 2707</span></a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white/75"><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0l-8 5L4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              <a href="mailto:thanasisradaios@gmail.com" className="hover:underline">thanasisradaios@gmail.com</a>
            </div>

            {/* Address */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white/75"><path d="M12 22s7-5.12 7-11a7 7 0 1 0-14 0c0 5.88 7 11 7 11Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5"/></svg>
              <address className="not-italic">Βασιλέως Αλεξάνδρου 58, Περιστέρι 121 34</address>
            </div>
          </div>
        </div>

        {/* CTA row — size unchanged */}
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center rounded-xl border border-white/20 px-5 py-2 text-white/90 hover:text-white hover:border-white/40 transition focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Επικοινωνία
          </a>
        </div>
      </div>
    </section>
  );
}
