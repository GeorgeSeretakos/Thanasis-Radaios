// components/CookieBanner.jsx
"use client";

import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "cookieConsent";            // localStorage: persists across sessions
const COOKIE_BANNER_SHOWN_KEY = "cookieBannerShown";   // sessionStorage: once per session
const NL_CLOSED_FLAG = "newsletterClosed";             // set by NewsletterModal on close
// Some sites set a per-locale "seen" key; we check both just in case:
const NL_SEEN_KEYS = ["newsletterModalSeen:en", "newsletterModalSeen:el"];

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Already accepted → never show again
    if (localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted") return;

    // Already shown this session → don't show again
    if (sessionStorage.getItem(COOKIE_BANNER_SHOWN_KEY) === "true") return;

    const showBanner = () => {
      setVisible(true);
      sessionStorage.setItem(COOKIE_BANNER_SHOWN_KEY, "true");
    };

    // If newsletter already closed/seen in this session, show immediately
    const newsletterDone =
      sessionStorage.getItem(NL_CLOSED_FLAG) === "true" ||
      NL_SEEN_KEYS.some((k) => sessionStorage.getItem(k));

    if (newsletterDone) {
      showBanner();
      return;
    }

    // Otherwise wait for the modal to close (custom event emitted by NewsletterModal)
    const onNewsletterClosed = () => showBanner();
    window.addEventListener("newsletter:closed", onNewsletterClosed);

    // Fallback polling in case only the flag is set
    const interval = window.setInterval(() => {
      if (sessionStorage.getItem(NL_CLOSED_FLAG) === "true") {
        showBanner();
        window.clearInterval(interval);
        window.removeEventListener("newsletter:closed", onNewsletterClosed);
      }
    }, 500);

    return () => {
      window.removeEventListener("newsletter:closed", onNewsletterClosed);
      window.clearInterval(interval);
    };
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50" role="region" aria-label="Cookie banner">
      <div className="mx-auto max-w-5xl">
        <div className="m-4 rounded-xl border border-[#2a2a2a] bg-[#121212] text-[#f0f0f0] p-4 md:flex md:items-center md:justify-between gap-4">
          <p className="text-sm">
            We only use functional storage (local/session) as described in our{" "}
            <a href="/privacy-policy" className="underline">Privacy Policy</a>. Click Accept to continue.
          </p>
          <div className="mt-3 md:mt-0 flex gap-2">
            <button
              onClick={accept}
              className="px-4 py-2 rounded-lg bg-[#1f1f1f] text-[#f0f0f0] border border-[#2a2a2a] hover:bg-[#242424]"
              aria-label="Accept cookies"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
