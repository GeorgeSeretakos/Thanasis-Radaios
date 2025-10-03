"use client";

import { useState, useMemo, useEffect } from "react";
import ServiceAccordion from "./ServiceAccordion";

export default function ServiceTabs({ individuals, pros }) {
  const TABS = [
    { key: "idiotes", label: individuals.label, items: individuals.items },
    { key: "epaggelmaties", label: pros.label, items: pros.items },
  ];

  // Deep-link ?tab=epaggelmaties or #idiotes/#epaggelmaties
  const getInitialTab = () => {
    if (typeof window === "undefined") return "idiotes";
    const url = new URL(window.location.href);
    const tParam = url.searchParams.get("tab");
    const hash = url.hash?.replace("#", "");
    if (tParam && ["idiotes", "epaggelmaties"].includes(tParam)) return tParam;
    if (hash && ["idiotes", "epaggelmaties"].includes(hash)) return hash;
    return "idiotes";
  };

  const [active, setActive] = useState(getInitialTab);

  useEffect(() => {
    // keep hash in sync for shareable links
    if (typeof window !== "undefined") {
      const targetHash = `#${active}`;
      if (window.location.hash !== targetHash) {
        history.replaceState(null, "", targetHash);
      }
    }
  }, [active]);

  const current = useMemo(
    () => TABS.find((t) => t.key === active) ?? TABS[0],
    [active]
  );

  // Navbar-like tab styles (minimal, with gold underline)
  const tabItem =
    "relative px-3 py-2 text-sm md:text-base font-medium text-white/80 hover:text-white hover:cursor-pointer transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded";
  const activeBar =
    "pointer-events-none absolute inset-x-2 -bottom-0.5 h-[2px] bg-[#D4AF37FF]";

  return (
    <div className="w-full">
      {/* Tabs (Navbar minimal style) */}
      <div className="flex items-center justify-center gap-0 mb-6">
        {TABS.map((t, i) => {
          const isActive = active === t.key;
          return (
            <div key={t.key} className="flex items-center">
              <button
                type="button"
                onClick={() => setActive(t.key)}
                aria-pressed={isActive}
                className={`${tabItem} ${isActive ? "text-white" : ""}`}
              >
                {t.label}
                {isActive && <span className={activeBar} />}
              </button>
              {i < TABS.length - 1 && (
                <span aria-hidden="true" className="mx-1 h-4 w-px bg-white/15" />
              )}
            </div>
          );
        })}
      </div>

      {/* List (Accordion) */}
      <ServiceAccordion items={current.items} groupKey={current.key} />
    </div>
  );
}
