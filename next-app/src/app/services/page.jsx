"use client";

import PageHeader from "../components/PageHeader";
import ServiceTabs from "../components/ServiceTabs";
import { servicesIndividuals, servicesPros } from "../../../public/data/servicesData";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

export default function ServicesPage() {
  return (
    <main className="px-4">
      <PageHeader
        eyebrow="Υπηρεσίες"
        title="Υπηρεσίες για Ιδιώτες & Επαγγελματίες"
        lead="Παρέχουμε υπηρεσίες σε ιδιώτες, καθώς και σε επαγγελματίες του χώρου, όπως τεχνικές εταιρείες, μηχανικούς και κατασκευαστές"
      />

      <section className="max-w-5xl mx-auto pb-16">
        <ServiceTabs
          individuals={{ label: "Ιδιώτες", items: servicesIndividuals }}
          pros={{ label: "Επαγγελματίες", items: servicesPros }}
        />
      </section>

      <TestimonialsCarousel />
    </main>
  );
}
