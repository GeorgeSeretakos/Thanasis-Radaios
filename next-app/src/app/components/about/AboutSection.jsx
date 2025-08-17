// components/AboutSection.jsx
export default function AboutSection({
                                       title,
                                       image,
                                       reverse = false,
                                       fullWidthTitle = true,          // toggle between styles
                                       imageDimensions = "",
                                       description = [],
                                       ticks = [],
                                       features = [],
                                       tickIcon = "/icons/check.png",
                                     }) {
  return (
    <section className="w-4/5 m-auto px-4 py-12 rounded-xl">
      {/* Full width title (always centered if enabled) */}
      {fullWidthTitle && (
        <div className="bg-[#1C86D1] p-4 rounded-xl text-2xl font-bold text-white text-center !mb-8">
          {title}
        </div>
      )}

      <div
        className={`flex flex-col md:flex-row max-w-6xl mx-auto ${
          reverse ? "md:flex-row-reverse" : ""
        } gap-8 items-center`}
      >
        {/* Image */}
        <div className="flex-1">
          <img
            src={image}
            alt={title}
            className={`rounded-lg ${imageDimensions || "w-full object-cover"}`}
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Inline title (if NOT full width) */}
          {!fullWidthTitle && (
            <h2 className="title-teal mb-6">{title}</h2>
          )}

          {/* Description paragraphs */}
          <div className="leading-relaxed space-y-4">
            {description.map((item, i) =>
              typeof item === "string" && /<[^>]+>/.test(item) ? (
                <div key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ) : (
                <p key={i}>{item}</p>
              )
            )}
          </div>

          {/* Ticks */}
          {ticks.length > 0 && (
            <ul className="mt-6 space-y-2">
              {ticks.map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <img
                    src={tickIcon}
                    alt=""
                    className="w-5 h-5 mt-0.5 select-none"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Features */}
          {features.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={f.icon}
                    alt=""
                    className="w-14 h-14 object-contain mb-3 select-none"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium leading-snug">{f.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
