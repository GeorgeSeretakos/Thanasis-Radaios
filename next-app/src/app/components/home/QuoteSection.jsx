import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="relative h-[60vh]">
      {/* Background Image */}
      <Image
        src="/images/general/9.webp"
        alt="Quote Background"
        fill
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 h-full text-white w-full flex items-center justify-center">
        <p className="text-2xl md:text-3xl font-semibold max-w-3xl text-center">
          20 λεπτά αρκούν για να αλλάξουν την καθημερινότητα των πελατών σας
        </p>
      </div>
    </section>
  );
}
