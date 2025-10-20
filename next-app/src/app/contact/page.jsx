import PageHeader from "../components/general/PageHeader";

export default function Contact() {
  return (
    <main className="w-full">
      <PageHeader
        title="Επικοινωνήστε μαζί μας"
        lead="Συμπληρώστε τη φόρμα και θα σας απαντήσουμε άμεσα."
      />

      {/* Contact info row (same as Footer) */}
      <section>
        <div className="mx-auto max-w-4xl text-left">
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
      </section>

      <div className="mx-auto max-w-2xl rounded-2xl backdrop-blur p-6 sm:p-8 shadow-sm">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thank-you"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          {/* First row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="Όνομα *"
              className="w-full rounded-xl border border-white/15 px-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-black/20"
            />
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              placeholder="Επώνυμο *"
              className="w-full rounded-xl border border-white/15 px-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-black/20"
            />
          </div>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email *"
            className="w-full rounded-xl border border-white/15 px-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-black/20"
          />

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Τηλέφωνο *"
            className="w-full rounded-xl border border-white/15 px-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-black/20"
          />

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Μήνυμα (προαιρετικό)"
            className="w-full rounded-xl border border-white/15 px-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-black/20"
          />

          {/* Consent + Light button */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-2">
            <label className="flex items-center gap-2 text-xs sm:text-sm">
              <input
                type="checkbox"
                name="consent"
                value="yes"
                required
                className="opacity-70"
              />
              Αποδέχομαι την{" "}
              <a href="/privacy-policy" className="opacity-70 hover:underline">
                Πολιτική Απορρήτου
              </a>{" "}
              *
            </label>

            <button type="submit" className="btn btn-primary">
              Αποστολή
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
