"use client";

import PageHeader from "../components/general/PageHeader";
import ServiceTabs from "../components/services/ServiceTabs";
import { servicesIndividuals, servicesPros } from "../../../public/data/servicesData";

export default function ServicesPage() {
  return (
    <main className="px-4">
      <PageHeader
        title="Υπηρεσίες για Ιδιώτες & Επαγγελματίες"
        lead="Παρέχουμε υπηρεσίες σε ιδιώτες, καθώς και σε επαγγελματίες του χώρου, όπως τεχνικές εταιρείες, μηχανικούς και κατασκευαστές"
      />

      <section className="max-w-5xl mx-auto pb-16">
        <ServiceTabs
          individuals={{ label: "Ιδιώτες", items: servicesIndividuals }}
          pros={{ label: "Επαγγελματίες", items: servicesPros }}
        />
      </section>
    </main>
  );
}
