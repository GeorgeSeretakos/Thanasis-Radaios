import Image from "next/image";
import Link from "next/link";

export default function AboutOwnerSection() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
        {/* Left: Image */}
        <div className="flex-1">
          <div className="relative w-full h-[80vh]">
            <Image
              src="/images/general/8.webp"
              alt="Owner"
              fill
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1">
          <h2 className="title-teal">
            Miha Bodytec: Αποκλειστικός διανομέας σε Ελλάδα, Κύπρο και Βαλκάνια
          </h2>
          <div className="mb-4">

            <p className="mb-4">
              Είμαστε οι επίσημοι συνεργάτες της Miha Bodytec στην Ελλάδα. Στόχος μας είναι να φέρουμε την καινοτομία της ηλεκτρομυϊκής διέγερσης σε επαγγελματίες του fitness, της φυσικοθεραπείας και του wellness.
            </p>

            <p className="mb-4">
              Στηρίζουμε γυμναστήρια, studios και ανεξάρτητους επαγγελματίες να εντάξουν την EMS με επιτυχία, προσφέροντας ολοκληρωμένη υποστήριξη και τεχνογνωσία.
            </p>


          </div>

          <div className="mt-12">
            <Link href="/about-us" className="btn">
              Μάθε περισσότερα για εμένα
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
