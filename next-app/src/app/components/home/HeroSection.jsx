export default function HeroSection() {
  return (
    <section className="relative h-[95vh]">
      {/* Background Image */}
      <img
        src="/images/general/7.webp"
        alt="Tonia Kaparelioti"
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 text-white">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            FF Medical & Wellness
          </h1>
          <p className="text-lg md:text-xl">
            Αποκλειστικός διανομέας Miha Bodytec
          </p>
          <p className="text-lg md:text-xl">
            σε Ελλάδα, Κύπρο και Βαλκάνια
          </p>
        </div>
      </div>
    </section>
  );
}
