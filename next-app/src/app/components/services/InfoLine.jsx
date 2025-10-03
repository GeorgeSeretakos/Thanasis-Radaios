import Link from "next/link";

export default function InfoLine({
                                   href = "/contact",
                                   variant = "inline", // "inline" | "card"
                                   className = "",
                                 }) {
  if (variant === "card") {
    return (
      <div className={`my-8 ${className}`}>
        <div className="rounded-xl p-4 md:p-5 text-center">
          <p className="text-gray-200 text-sm md:text-base">
            <Link
              href={href}
              className="underline font-semibold text-[color:var(--brand-accent,#A0C8EB)] hover:opacity-90"
            >
              Επικοινωνήστε
            </Link>{" "}
            μαζί μας για περισσότερες πληροφορίες σχετικά με την δική σας περίπτωση.
          </p>
        </div>
      </div>
    );
  }

  // inline (centered text without dividers)
  return (
    <>
      <div className={`my-8 ${className} text-white`}>
        <p className="text-center italic text-sm md:text-base">
          <Link
            href={href}
            className="underline font-semibold hover:opacity-90 text-[color:var(--brand-accent,#60A5FA)]"
          >
            Επικοινωνήστε
          </Link>{" "}
          μαζί μας για περισσότερες πληροφορίες σχετικά με την δική σας περίπτωση.
        </p>
      </div>
      <div className="svc-rule"/>
    </>
  );
}
