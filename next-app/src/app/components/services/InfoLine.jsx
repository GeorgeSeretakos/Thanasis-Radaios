// app/components/blocks/InfoLine.jsx
import Link from "next/link";

export default function InfoLine({
                                   text = "Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες σχετικά με την δική σας περίπτωση.",
                                   href = "/contact",
                                   label = "Δείτε τους τρόπους επικοινωνίας εδώ",
                                   variant = "inline", // "inline" | "card"
                                   className = "",
                                 }) {
  if (variant === "card") {
    return (
      <div className={`my-8 ${className}`}>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 md:p-5 text-center">
          <p className="text-gray-200 text-sm md:text-base">
            {text}{"  "}
            <Link
              href={href}
              className="underline text-[color:var(--brand-accent,#A0C8EB)] hover:opacity-90"
            >
              {label}
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // inline (text centered between two dividers)
  return (
    <div className={`my-8 ${className}`}>
      <div className="h-px bg-white/10 mb-3" />
      <p className="text-center italic text-sm md:text-base text-[color:var(--brand-accent,#60A5FA)]">
        {text}{" "}
        <Link
          href={href}
          className="underline hover:opacity-90 text-[color:var(--brand-accent,#60A5FA)]"
        >
          {label}
        </Link>
      </p>
      <div className="h-px bg-white/10 mt-3" />
    </div>
  );
}
