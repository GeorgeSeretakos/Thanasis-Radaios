"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0B0B0C]/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center text-white">
        {/* 3) Λογότυπο + Τίτλος: πάντα ορατό */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="/logo/logo_sign.png"
            alt="Λογότυπο"
            className="h-16 w-auto object-contain opacity-95 group-hover:opacity-100 transition"
          />
          <div className="leading-tight">
            <p className="text-[11px] tracking-widest text-white/50 uppercase">Τεχνικό Γραφείο</p>
            <p className="text-sm sm:text-base font-semibold">
              Θανάσης Γ. Ραδαίος – Πολιτικός Μηχανικός
            </p>
          </div>
        </a>

        {/* Desktop πλοήγηση */}
        <nav className="hidden md:flex items-center gap-6 text-sm ml-auto">
          <a href="/" className="text-white/80 hover:text-white transition">Αρχική</a>
          <a href="/about" className="text-white/80 hover:text-white transition">Γραφείο</a>
          <a href="/services" className="text-white/80 hover:text-white transition">Υπηρεσίες</a>
          <a href="/faq" className="text-white/80 hover:text-white transition">FAQ</a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-3.5 py-2 text-white/90 hover:text-white hover:border-white/40 transition focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Επικοινωνία
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={open}
          className="md:hidden ml-auto inline-flex items-center justify-center rounded-lg border border-white/20 p-2 text-white hover:border-white/40 transition focus:outline-none focus:ring-2 focus:ring-white/30"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0B0B0C]/95 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-4 grid gap-1 text-sm text-white">
            <a href="/" className="py-3 px-2 rounded-md hover:bg-white/5">Αρχική</a>
            <a href="/about" className="py-3 px-2 rounded-md hover:bg-white/5">Γραφείο</a>
            <a href="/services" className="py-3 px-2 rounded-md hover:bg-white/5">Υπηρεσίες</a>
            <a href="/faq" className="py-3 px-2 rounded-md hover:bg-white/5">FAQ</a>
            <a
              href="/contact"
              className="mt-1 inline-flex items-center justify-center rounded-lg border border-white/20 px-3.5 py-2 text-white/90 hover:text-white hover:border-white/40 transition focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Επικοινωνία
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
