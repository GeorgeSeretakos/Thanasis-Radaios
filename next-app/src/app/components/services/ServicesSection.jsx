import ServiceCard from "./ServiceCard";
import Link from "next/link";
import services from "../../../../public/data/services";

export default function ServicesSection({ preview = false }) {
  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="title-teal">Προπόνηση EMS - Η υπηρεσία που θα αλλάξει την επιχείρησή σας</h2>
        <div className="max-w-2xl mb-8">
          <p className="text-lg text-gray-700 max-w-3xl">
            Εισάγετε στην επιχείρησή σας μια μέθοδο εκγύμνασης και θεραπείας που είναι ταυτόχρονα ασφαλής, σύντομη και εξαιρετικά αποτελεσματική. Κατάλληλη για όλες τις ηλικίες και για ευρύ φάσμα πελατών.
          </p>

          {preview && (
            <div className="mt-4">
              <Link href="/services" className="btn">
                Προβολή όλων
              </Link>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              iconSrc={service.iconSrc}
              iconAlt={service.iconAlt}
              title={service.title}
              description={service.description}
              />
            ))}
          </div>

        </div>
    </section>
);
}
