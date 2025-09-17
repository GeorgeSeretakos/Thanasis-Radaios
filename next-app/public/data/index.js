import { servicesIndividuals, servicesPros } from "./servicesData";

// Επιστρέφει όλες τις υπηρεσίες flat, με κατηγορία για breadcrumbs
export function getAllServices() {
  return [
    ...servicesIndividuals.map(s => ({ ...s, category: "Ιδιώτες" })),
    ...servicesPros.map(s => ({ ...s, category: "Επαγγελματίες" })),
  ];
}

// Βρίσκει υπηρεσία από το slug
export function getServiceBySlug(slug) {
  return getAllServices().find(s => s.slug === slug) || null;
}
