import PageHeader from "../components/general/PageHeader";

export default function Contact() {
  return (
    <main className="w-full">
      <PageHeader
        title="Επικοινωνήστε μαζί μας"
        lead="Συμπληρώστε τη φόρμα και θα σας απαντήσουμε άμεσα."
      />

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
