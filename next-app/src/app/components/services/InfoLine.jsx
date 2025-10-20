import Link from "next/link";

export default function InfoLine({
                                   href = "/contact",
                                   variant = "inline",
                                   className = "",
                                   showBorder = true,
                                   showMargin = true,
                                 }) {
  const marginClass = showMargin ? "my-8" : "mt-8 mb-0";

  if (variant === "card") {
    return (
      <div className={`${marginClass} ${className}`}>
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
        {showBorder && <div className="svc-rule" />}
      </div>
    );
  }

  // inline (centered text)
  return (
    <>
      <div className={`${marginClass} ${className} text-white`}>
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
      {showBorder && <div className="svc-rule" />}
    </>
  );
}
