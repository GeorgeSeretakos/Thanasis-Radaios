import Link from "next/link";

export default function PricingPackage({
                                         title,
                                         text,
                                         ctaText,
                                         ctaLink,
                                         items = [],
                                       }) {
  // make images taller on mobile
  const imgHeightClasses = "h-48 sm:h-56 md:h-48 lg:h-56";

  return (
    <section className="w-full py-12">
      <div className="w-9/10 mx-auto flex flex-col gap-10">
        {/* Title + text */}
        <div className="max-w-3xl mx-auto space-y-4">
          {title && (
            <h1 className="font-extrabold text-center text-[#1C86D1]">
              {title}
            </h1>
          )}
          {text && (
            <div className="text-gray-700 text-justify">
              {text}
            </div>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((it, idx) => {
            const isEmphasized = idx === 1;
            return (
              <article
                key={idx}
                className={[
                  "rounded-2xl shadow-lg flex flex-col bg-white border-2 transition",
                  // emphasize only on md+ (desktop), equal on mobile
                  isEmphasized
                    ? "md:-mt-6 md:-mb-6 md:border-[#1C86D1]/60 border-[#1C86D1]/30"
                    : "border-[#1C86D1]/30",
                ].join(" ")}
              >
                {it.image && (
                  <div
                    className={[
                      "w-full overflow-hidden bg-gray-50 rounded-t-2xl",
                      imgHeightClasses,
                      isEmphasized
                        ? "md:border-b md:border-[#1C86D1] border-b border-[#1C86D1]/30"
                        : "border-b border-[#1C86D1]/30",
                    ].join(" ")}
                  >
                    <img
                      src={it.image}
                      alt={it.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div
                  className={[
                    "flex flex-col gap-4",
                    isEmphasized
                      ? "md:pt-6 md:pb-6 md:px-5 p-5"
                      : "p-5",
                  ].join(" ")}
                >
                  <h3 className="font-bold text-[#1C86D1] text-base sm:text-lg">
                    <i>{it.title}</i>
                  </h3>

                  {Array.isArray(it.bullets) && it.bullets.length > 0 && (
                    <ul className="space-y-2 font-semibold !text-sm">
                      {it.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <img
                            src="/icons/check.png"
                            alt="Check icon"
                            className="w-5 h-5 mt-0.5 select-none"
                            aria-hidden="true"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {ctaText && (
          <div className="mt-12 mx-auto">
            <Link href={ctaLink || "#"} className="btn">
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
