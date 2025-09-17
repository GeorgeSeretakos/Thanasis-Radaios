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

  const current = useMemo(() => TABS.find(t => t.key === active) ?? TABS[0], [active]);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex items-center justify-center gap-3 mb-8">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-5 py-2.5 rounded-xl text-sm md:text-base font-medium transition-colors border
        ${
              active === t.key
                ? "bg-white/10 border-white/20 text-white shadow-sm"
                : "bg-white/[0.03] hover:cursor-pointer border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/[0.06]"
            }`}
            aria-pressed={active === t.key}
          >
            {t.label}
          </button>
        ))}
      </div>


      {/* List (Accordion) */}
      <ServiceAccordion items={current.items} groupKey={current.key}/>
    </div>
  );
}
