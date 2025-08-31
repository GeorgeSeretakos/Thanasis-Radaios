// app/components/NewsletterModal.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState(null); // null until resolved

  // Helper: pick locale on first load
  const resolveInitialLocale = () => {
    // 1) If user already picked, honor it
    try {
      const saved = localStorage.getItem("locale");
      if (saved === "en" || saved === "el") return saved;
    } catch {}

    // 2) Prefer browser language
    try {
      const lang =
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        "";
      const lc = String(lang).toLowerCase();
      if (lc.startsWith("el") || lc.startsWith("gr")) return "el";
      if (lc.startsWith("en")) return "en";
    } catch {}

    // 3) Fallback
    return "el";
  };

  const seenKeyFor = (loc) => `newsletterModalSeen:${loc}`;

  useEffect(() => {
    // 1) Resolve locale (does NOT read <html lang> anymore)
    const resolved = resolveInitialLocale();
    setLocale(resolved);

    // Persist if first time
    try {
      if (!localStorage.getItem("locale")) {
        localStorage.setItem("locale", resolved);
      }
    } catch {}
    // keep <html lang> roughly in sync (client-side)
    if (typeof document !== "undefined") {
      document.documentElement.lang = resolved;
    }

    // 2) Show modal only if not seen for this locale in THIS session
    const seenKey = seenKeyFor(resolved);
    const hasSeen = sessionStorage.getItem(seenKey);
    if (!hasSeen) {
      setOpen(true);
      sessionStorage.setItem(seenKey, "true");
    }

    // 3) React to navbar locale switch (supports string or { locale })
    const onLocaleChange = (e) => {
      const detail = e?.detail;
      const next =
        (typeof detail === "string" && detail) ||
        (detail && detail.locale) ||
        localStorage.getItem("locale") ||
        "el";

      setLocale(next);
      document.documentElement.lang = next;
    };

    window.addEventListener("locale:changed", onLocaleChange);
    return () => window.removeEventListener("locale:changed", onLocaleChange);
  }, []);

  if (locale == null || !open) return null;

  const isEN = locale === "en";
  const t = {
    title: isEN ? "Subscribe to our Newsletter" : "Εγγραφή στο Newsletter",
    blurb: isEN
      ? "Fill in the form and stay up-to-date with our news."
      : "Συμπλήρωσε τη φόρμα και μείνε ενημερωμένος με τα νέα μας.",
    firstNamePh: isEN ? "First name" : "Όνομα",
    lastNamePh: isEN ? "Last name" : "Επώνυμο",
    emailPh: "Email",
    phonePh: isEN ? "Phone (optional)" : "Τηλέφωνο (προαιρετικό)",
    privacyPrefix: isEN ? "I accept the " : "Αποδέχομαι την ",
    privacyLink: isEN ? "Privacy Policy" : "Πολιτική Απορρήτου",
    submit: isEN ? "Sign up" : "Εγγραφή",
    closeAria: isEN ? "Close" : "Κλείσιμο",
  };

  const closeModal = () => {
    setOpen(false);
    // mark closed so cookie banner can appear (if you implemented that flow)
    try {
      sessionStorage.setItem("newsletterClosed", "true");
      const lc = localStorage.getItem("locale") || "el";
      sessionStorage.setItem(`newsletterModalSeen:${lc}`, "true");
      window.dispatchEvent(new Event("newsletter:closed"));
    } catch {}
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-title"
    >
      <div className="bg-white text-black rounded-xl p-5 sm:p-6 w-full max-w-[22rem] sm:max-w-md md:max-w-lg shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label={t.closeAria}
          type="button"
        >
          ✕
        </button>

        <h2 id="newsletter-title" className="text-xl font-bold mb-3 sm:mb-4">
          {t.title}
        </h2>
        <p className="mb-4 text-sm text-gray-600">{t.blurb}</p>

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
            {/* Keep field names in Greek — only placeholders change */}
            <input
              type="text"
              name="Όνομα"
              placeholder={t.firstNamePh}
              required
              className="flex-1 p-2 rounded border border-gray-300"
            />
            <input
              type="text"
              name="Επώνυμο"
              placeholder={t.lastNamePh}
              required
              className="flex-1 p-2 rounded border border-gray-300"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder={t.emailPh}
            required
            className="w-full p-2 rounded border border-gray-300"
          />

          <input
            type="tel"
            name="Τηλέφωνο"
            placeholder={t.phonePh}
            className="w-full p-2 rounded border border-gray-300"
          />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" required className="accent-blue-600 scale-110" />
              {t.privacyPrefix}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                {t.privacyLink}
              </Link>
            </label>
            <button type="submit" className="btn w-full md:w-auto">
              {t.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
