'use client';

import { useEffect, useMemo, useState } from "react";
import CATEGORIES from "../../../public/data/qa";
import FaqPanel from "../components/faq/FaqPanel";
import PageHeader from "../components/general/PageHeader";
import InfoLine from "../components/services/InfoLine";
import Footer from "../components/general/Footer";

export default function Page() {
  const [active, setActive] = useState(CATEGORIES[0].id);

  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.replace("#", ""));
      if (id && CATEGORIES.some((c) => c.id === id)) setActive(id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const activeCategory = useMemo(
    () => CATEGORIES.find((c) => c.id === active) || CATEGORIES[0],
    [active]
  );

  return (
    <>
      <main className="bg-[#0B0B0C] text-white">
        <PageHeader
          title="Συνήθεις Ερωτήσεις & Συμβουλές"
          points={[
            "Εδώ θα βρείτε συμβουλές και απαντήσεις σε συνηθισμένες ερωτήσεις σχετικά με ακίνητα και θέματα μηχανικού.",
            "Οι ερωτήσεις έχουν οργανωθεί σε θεματικές ενότητες για ευκολότερη πλοήγηση.",
            "Οι απαντήσεις καλύπτουν πολλές περιπτώσεις, αλλά δεν εξαντλούν όλες τις πιθανές ανάγκες.",
          ]}
        />

        <InfoLine className="-mt-8" variant="inline"/>

        {/* Content */}
        <section className="pb-12 md:pb-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Active category first */}
            <FaqPanel category={activeCategory}/>

            {/* Other categories */}
            <div className="mt-4 grid gap-4">
              {CATEGORIES.filter((c) => c.id !== activeCategory.id).map((c) => (
                <FaqPanel key={c.id} category={c}/>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-14 md:mt-16 flex flex-col items-center text-center">
              <p className="text-sm text-white/80">Δεν βρήκατε αυτό που ψάχνετε;</p>
              <a
                href="/contact"
                className="mt-3 inline-flex items-center rounded-xl border border-white/20 px-4 py-2 text-sm text-white/90 hover:text-white hover:border-white/40 transition focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Επικοινωνήστε μαζί μας
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
