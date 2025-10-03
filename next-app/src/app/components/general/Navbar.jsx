"use client";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavbarSeparators() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const links = useMemo(
    () => [
      { href: "/", label: "Αρχική" },
      { href: "/about", label: "Ποιοί Είμαστε" },
      { href: "/services", label: "Υπηρεσίες" },
      { href: "/projects", label: "Έργα" },
      { href: "/faq", label: "FAQ" },
      { href: "/blog", label: "Νέα" },
      { href: "/reviews", label: "Κριτικές" },
      { href: "/contact", label: "Επικοινωνία" }, // moved here
    ],
    []
  );

  const item =
    "relative px-3 py-2 text-sm text-white/80 hover:text-white transition";
  const bar =
    "pointer-events-none absolute inset-x-2 -bottom-0.5 h-[2px] bg-[#D4AF37FF]";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0B0B0C]/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center">
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="/logo/logo_sign.png"
            alt="Λογότυπο"
            className="h-16 w-auto object-contain opacity-95 group-hover:opacity-100 transition"
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center ml-auto">
          <nav className="flex items-center text-white/80">
            {links.map((l, i) => {
              const active = pathname === l.href;
              return (
                <div key={l.href} className="flex items-center">
                  <a
                    href={l.href}
                    className={`${item} ${active ? "text-white" : ""}`}
                  >
                    {l.label}
                    {active && <span className={bar} />}
                  </a>
                  {i < links.length - 1 && (
                    <span className="mx-1 h-4 w-px bg-white/15" />
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={open}
          className="md:hidden ml-auto inline-flex items-center justify-center rounded-lg border border-white/20 p-2 text-white hover:border-white/40 transition focus:outline-none focus:ring-2 focus:ring-white/30"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0B0B0C]/95 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-4 grid gap-2 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-md border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
