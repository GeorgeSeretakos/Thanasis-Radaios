import Link from "next/link";

export default function PricingPackage({
                                           title,
                                           text,
                                           ctaText,
                                           ctaLink,
                                           items = [],
                                         }) {
  const imgHeightClasses = "h-36 md:h-48 lg:h-56";

  return (
    <section className="w-full py-12">
      <div className="w-9/10 mx-auto flex flex-col gap-10">

        {/* Title + text */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {title && <h2 className="text-3xl font-extrabold text-[#1C86D1]">{title}</h2>}
          {text && <p className="text-gray-700 text-lg">{text}</p>}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {items.map((it, idx) => {
            const isEmphasized = idx === 1;
            return (
              <article
                key={idx}
                className={[
                  "rounded-2xl shadow-lg flex flex-col bg-white",
                  isEmphasized
                    ? "-mt-6 -mb-6 border-2 border-[#1C86D1]/60"
                    : "border-2 border-[#1C86D1]/30",
                ].join(" ")}
              >
                {it.image && (
                  <div
                    className={[
                      "w-full rounded-t-2xl overflow-hidden",
                      imgHeightClasses,
                      "bg-gray-50",
                      isEmphasized
                        ? "border-b border-[#1C86D1]"
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
                    isEmphasized ? "pt-6 pb-6 px-5" : "p-5",
                  ].join(" ")}
                >
                  <h3 className="text-xl font-bold text-[#1C86D1]">
                    <i>{it.title}</i>
                  </h3>

                  {Array.isArray(it.bullets) && it.bullets.length > 0 && (
                    <ul className="space-y-2 font-semibold text-sm">
                      {it.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <img
                            src="/icons/check.png"
                            alt=""
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
