"use client";
import PageHeader from "../components/general/PageHeader";
import Testimonials from "../components/general/TestimonialsCarousel";
import Footer from "../components/general/Footer";

export default function ReviewsPage() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-4">
        <PageHeader
          title="Κριτικές Πελατών"
          lead="Διαβάστε τι έχουν να πουν οι συνεργάτες και οι πελάτες μας."
        />
        <Testimonials/>
      </main>
      <Footer />
    </>
  );
}
