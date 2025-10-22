"use client";

export default function HomeAlt1() {
  const NameLine = () => (
    <p className="mt-5 text-center leading-tight">
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
      className="
        relative w-full min-h-[calc(100dvh-4rem)]
        bg-[#0B0B0C] text-white overflow-x-hidden
        flex items-center justify-center px-4 sm:px-6 lg:px-8
      "
      style={{
        backgroundImage: `
          radial-gradient(1200px 600px at 70% -10%, rgba(212,175,55,0.12), rgba(212,175,55,0) 55%),
          radial-gradient(900px 500px at 0% 100%, rgba(255,255,255,0.06), rgba(255,255,255,0) 60%),
          url("data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>\
  <filter id='n'>\
    <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>\
    <feColorMatrix type='saturate' values='0'/>\
    <feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 0.05'/></feComponentTransfer>\
  </filter>\
  <rect width='100%' height='100%' filter='url(%23n)'/>\
</svg>")
        `,
        backgroundBlendMode: "screen, normal, normal",
        backgroundSize: "cover, cover, 160px 160px",
      }}
    >
      <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-center uppercase leading-none tracking-[0.2em] font-semibold
                       text-[26px] sm:text-[28px] md:text-[32px]">
          Τεχνικό Γραφείο
        </h1>

        {/* Logo — smaller scale */}
        <div className="mt-5 w-full max-w-[480px] sm:max-w-[520px]">
          <img
            src="/logo/logo_sign.png"
            alt="Λογότυπο"
            className="mx-auto w-full h-32 sm:h-36 md:h-40 object-contain"
            loading="eager"
          />
        </div>

        <NameLine />

        {/* CONTACTS: stacked on mobile, single row (3 columns) on md+ */}
        <div className="mt-6 mx-auto w-full max-w-4xl">
          <div
            className="
              flex flex-col items-center gap-4
              md:grid md:grid-cols-3 md:gap-10
              text-sm md:text-[15px] leading-snug
            "
          >
            {/* Phones */}
            <div className="min-w-0 flex items-center justify-center gap-2 whitespace-nowrap">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white/80" aria-hidden="true">
                <path d="M4 5c0-1.1.9-2 2-2h2l2 4-2 1c1 2.5 3.5 5 6 6l1-2 4 2v2c0 1.1-.9 2-2 2 0 0-10 1-15-11V5Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <div className="flex items-center gap-x-3">
                <a href="tel:2105745542" className="hover:underline"><span dir="ltr">21 0574 5542</span></a>
                <span className="text-white/35">·</span>
                <a href="tel:6942242707" className="hover:underline"><span dir="ltr">694 224 2707</span></a>
              </div>
            </div>

            {/* Email */}
            <div className="min-w-0 flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white/80" aria-hidden="true">
                <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0l-8 5L4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <a
                href="mailto:thanasisradaios@gmail.com"
                className="hover:underline break-words md:break-normal md:truncate md:max-w-[320px]"
                title="thanasisradaios@gmail.com"
              >
                thanasisradaios@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="min-w-0 flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white/80" aria-hidden="true">
                <path d="M12 22s7-5.12 7-11a7 7 0 1 0-14 0c0 5.88 7 11 7 11Z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <address
                className="not-italic whitespace-nowrap md:truncate md:max-w-[360px]"
                title="Βασιλέως Αλεξάνδρου 58, Περιστέρι 121 34"
              >
                Βασιλέως Αλεξάνδρου 58, Περιστέρι 121 34
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
