"use client";
import PageHeader from "../components/general/PageHeader";
import Testimonials from "../components/general/TestimonialsCarousel";

export default function ReviewsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <PageHeader
        title="Κριτικές Πελατών"
        lead="Διαβάστε τι έχουν να πουν οι συνεργάτες και οι πελάτες μας."
      />

      <Testimonials />
    </main>
  );
}
