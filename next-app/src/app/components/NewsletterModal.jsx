"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("newsletterModalSeen");
    if (!hasSeen) {
      setOpen(true);
      sessionStorage.setItem("newsletterModalSeen", "true");
    }
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-title"
    >
      <div className="bg-white text-black rounded-xl p-5 sm:p-6 w-full max-w-[22rem] sm:max-w-md md:max-w-lg shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Κλείσιμο"
        >
          ✕
        </button>

        <h2 id="newsletter-title" className="text-xl font-bold mb-3 sm:mb-4">
          Εγγραφή στο Newsletter
        </h2>
        <p className="mb-4 text-sm text-gray-600">
          Συμπλήρωσε τη φόρμα και μείνε ενημερωμένος με τα νέα μας.
        </p>

        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thank-you"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="Όνομα"
              placeholder="Όνομα"
              required
              className="flex-1 p-2 rounded border border-gray-300"
            />
            <input
              type="text"
              name="Επώνυμο"
              placeholder="Επώνυμο"
              required
              className="flex-1 p-2 rounded border border-gray-300"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-2 rounded border border-gray-300"
          />

          <input
            type="tel"
            name="Τηλέφωνο"
            placeholder="Τηλέφωνο (προαιρετικό)"
            className="w-full p-2 rounded border border-gray-300"
          />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                required
                className="accent-blue-600 scale-110"
              />
              Αποδέχομαι την{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Πολιτική Απορρήτου
              </Link>
            </label>
            <button type="submit" className="btn w-full md:w-auto">
              Εγγραφή
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
