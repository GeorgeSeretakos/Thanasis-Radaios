"use client";

export default function HomeAlt2() {
  const NameLine = () => (
    <p className="mt-4 leading-tight text-center">
      <span className="name-line-main align-baseline tracking-wide">
        ΘΑΝΑΣΗΣ Γ. Ραδαίος
      </span>
      <span className="name-line-sub align-baseline">
        {" "}– Πολιτικός Μηχανικός ΕΜΠ, MSc
      </span>
    </p>
  );

  return (
    <section
      className="relative w-full min-h-[calc(100dvh-4rem)] bg-[#0B0B0C] text-white overflow-x-hidden"
      style={{
        backgroundImage: `
          radial-gradient(900px 500px at 0% 0%, rgba(212,175,55,0.10), rgba(212,175,55,0) 55%),
          url("data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'>\
  <filter id='n'>\
    <feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/>\
    <feColorMatrix type='saturate' values='0'/>\
    <feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 0.045'/></feComponentTransfer>\
  </filter>\
  <rect width='100%' height='100%' filter='url(%23n)'/>\
</svg>")
        `,
        backgroundBlendMode: "screen, normal",
        backgroundSize: "cover, 180px 180px",
      }}
    >
      {/* Full-height wrapper for vertical centering */}
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10 min-h-[calc(100dvh-4rem)] flex items-center">
        {/* 2 columns: left wider than right */}
        <div className="grid w-full grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8 lg:gap-10 items-center">

          {/* LEFT */}
          <div className="order-2 lg:order-1 flex flex-col items-center text-center">
            {/* Title */}
            <h1 className="uppercase leading-none tracking-[0.18em] font-semibold
                           text-[24px] sm:text-[26px] md:text-[30px]">
              Τεχνικό Γραφείο
            </h1>

            {/* Logo */}
            <div className="mt-4 w-full max-w-[500px] sm:max-w-[540px]">
              <img
                src="/logo/logo_sign.png"
                alt="Λογότυπο"
                className="mx-auto w-full h-36 sm:h-40 md:h-44 object-contain"
              />
            </div>

            <NameLine />

            {/* Contact info: tighter gaps */}
            <div className="mt-6 w-full">
              <div
                className="
                  flex flex-col items-center gap-3
                  md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-0
                  text-sm md:text-base leading-snug
                "
              >
                {/* Phones */}
                <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white/80" aria-hidden="true">
                    <path d="M4 5c0-1.1.9-2 2-2h2l2 4-2 1c1 2.5 3.5 5 6 6l1-2 4 2v2c0 1.1-.9 2-2 2 0 0-10 1-15-11V5Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <div className="flex items-center gap-x-2 whitespace-nowrap">
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
                <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white/80" aria-hidden="true">
                    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0l-8 5L4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  <a href="mailto:thanasisradaios@gmail.com" className="hover:underline">
                    thanasisradaios@gmail.com
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white/80" aria-hidden="true">
                    <path d="M12 22s7-5.12 7-11a7 7 0 1 0-14 0c0 5.88 7 11 7 11Z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <address className="not-italic whitespace-nowrap">
                    Βασιλέως Αλεξάνδρου 58, Περιστέρι 121 34
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Smaller image to keep layout balanced */}
          <div className="order-1 lg:order-2">
            <div className="mx-auto w-full max-w-[480px] md:max-w-[520px] lg:max-w-[560px]">
              <img
                src="/images/office/1.jpg"
                alt="Χώρος γραφείου"
                className="block w-full h-auto object-contain rounded-none"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
