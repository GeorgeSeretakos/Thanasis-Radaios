"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function ServiceAccordion({ items, groupKey }) {
  const [highlightId, setHighlightId] = useState(null);
  const refs = useRef({});

  useEffect(() => {
    if (typeof window === "undefined" || !items?.length) return;
    const hash = window.location.hash?.replace("#", "");
    const match = items.find((it) => `${groupKey}-${it.slug}` === hash);
    if (!match) return;

    const el = refs.current[match.id];
    if (el?.scrollIntoView) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setHighlightId(match.id);
      const t = setTimeout(() => setHighlightId(null), 1400);
      return () => clearTimeout(t);
    }
  }, [items, groupKey]);

  if (!items?.length) return null;

  return (
    <div className="space-y-4">
      {items.map((it) => {
        const anchorId = `${groupKey}-${it.slug}`;
        const isHighlighted = highlightId === it.id;

        return (
          <Link
            key={it.id}
            href={`/services/${it.slug}`}
            className="block group focus:outline-none"
            aria-label={it.title}
          >
            <article
              id={anchorId}
              ref={(node) => (refs.current[it.id] = node)}
              className={[
                "rounded-2xl border overflow-hidden transition",
                "bg-white/[0.04] border-white/10 hover:border-white/20",
                "focus-within:ring-2 focus-within:ring-white/30",
                isHighlighted ? "ring-2 ring-white/40" : "",
              ].join(" ")}
            >
              <div className="px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-3">
                {/* Text side */}
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white/95 leading-tight">
                    {it.title}
                  </h3>
                  {it.summary && (
                    <p className="mt-1 text-sm text-white/80">{it.summary}</p>
                  )}
                </div>

                {/* Chevron aligned center */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 opacity-60 group-hover:opacity-90 translate-x-0 group-hover:translate-x-0.5 transition"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
