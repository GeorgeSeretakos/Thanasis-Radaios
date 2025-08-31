// app/components/home/QuoteSection.jsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function QuoteSection() {
  const [locale, setLocale] = useState("el");

  useEffect(() => {
    const saved = localStorage.getItem("locale") || "el";
    setLocale(saved);
  }, []);

  const text =
    locale === "en"
      ? "20 minutes are enough to transform your clients’ daily lives"
      : "20 λεπτά αρκούν για να αλλάξουν την καθημερινότητα των πελατών σας";

  return (
    <section className="relative h-[60vh]">
      {/* Background Image */}
      <img
        src="/images/general/9.webp"
        alt="Quote Background"
        className="absolute inset-0 fill w-full h-full object-cover object-center z-0"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"/>

      {/* Text content */}
      <div className="relative z-20 h-full text-white flex items-center justify-center px-4">
        <h2 className="font-semibold text-center text-xl sm:text-2xl lg:text-3xl w-3/4 max-w-3xl leading-snug">
          {text}
        </h2>
      </div>
    </section>
  );
}
