// app/components/company/Advantages/Advantages.jsx
"use client";

import { useEffect, useState } from "react";
import styles from "./Advantages.module.css";

export default function Advantages({ locale: localeProp }) {
  // Local fallback only when no prop is provided
  const [storedLocale, setStoredLocale] = useState("el");

  useEffect(() => {
    if (localeProp != null) return; // if prop drives locale, do nothing here

    // Initial read from localStorage
    const saved = localStorage.getItem("locale") || "el";
    setStoredLocale(saved);

    // Optional: react to global locale changes (from Navbar)
    const onChange = (e) => {
      const next = e?.detail?.locale || localStorage.getItem("locale") || "el";
      setStoredLocale(next);
    };
    window.addEventListener("locale:changed", onChange);
    return () => window.removeEventListener("locale:changed", onChange);
  }, [localeProp]);

  // Effective locale: prefer prop, fallback to stored
  const locale = localeProp ?? storedLocale;
  const isEN = locale === "en";

  return (
    <section className="py-12">
      <div className={styles.container}>
        <h2 className="text-center">
          {isEN ? "Why choose us" : "Γιατί να μας επιλέξετε"}
        </h2>

        <div className={styles["advantage-grid"]}>
          {/* Card 1 – German Quality */}
          <div
            className={`${styles.card} ${styles.large}`}
            style={{ backgroundImage: "url('/images/general/10.webp')" }}
          >
            <div className={styles.content}>
              <h3>{isEN ? "German Quality" : "Γερμανική Ποιότητα"}</h3>
              <p>
                {isEN ? (
                  <>
                    Certified medical EMS device. Complete EMS equipment{" "}
                    <strong>“Made in Germany”</strong> with quality assurance.
                  </>
                ) : (
                  <>
                    Πιστοποιημένη ιατρική συσκευή ηλεκτρομυοδιέγερσης. Πλήρης
                    εξοπλισμός EMS <strong>“Made in Germany”</strong> με
                    εγγύηση ποιότητας
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Card 2 – Training & Certification */}
          <div
            className={`${styles.card} ${styles.small}`}
            style={{ backgroundImage: "url('/images/equipment/cards_1.jpg')" }}
          >
            <div className={styles.content}>
              <h3>{isEN ? "Training & Certification" : "Εκπαίδευση & Πιστοποίηση"}</h3>
              <p>
                {isEN
                  ? "Free training, international certification, and inclusion in a global network."
                  : "Δωρεάν εκπαίδευση, διεθνής πιστοποίηση, ένταξη σε παγκόσμιο δίκτυο"}
              </p>
            </div>
          </div>

          {/* Card 3 – Financial Advantage */}
          <div
            className={`${styles.card} ${styles.small}`}
            style={{ backgroundImage: "url('/images/general/30.jpg')" }}
          >
            <div className={styles.content}>
              <h3>{isEN ? "Financial Advantage" : "Οικονομικό Όφελος"}</h3>
              <p>
                {isEN
                  ? "Low upfront cost, high profit margin, fast payback."
                  : "Μικρό αρχικό κόστος, μεγάλο περιθώριο κέρδους, γρήγορη απόσβεση"}
              </p>
            </div>
          </div>

          {/* Card 4 – Strategic Support */}
          <div
            className={`${styles.card} ${styles.large}`}
            style={{ backgroundImage: "url('/images/general/19.jpg')" }}
          >
            <div className={styles.content}>
              <h3>{isEN ? "Strategic Support" : "Στρατηγική Υποστήριξη"}</h3>
              <p>
                {isEN
                  ? "Ongoing guidance to build a profitable service."
                  : "Συνεχής καθοδήγηση για ανάπτυξη μιας κερδοφόρας υπηρεσίας"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
