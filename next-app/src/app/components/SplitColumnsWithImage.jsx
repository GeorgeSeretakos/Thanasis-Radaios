export default function SplitColumnsWithImage({
title,
leftTitle,
leftBullets = [],
rightTitle,
rightBullets = [],
imageSrc,
imageAlt,
bulletIcon = "/icons/check.png",
bulletAlt = "bullet icon",
}) {
  return (
    <div className="w-full my-12 bg-gradient-to-b from-[#E6F4FB] via-white to-[#F9FCFF]">
      {/* Main Section Title */}
      {title && (
        <h2 className="title-black text-center mb-10">
          {title}
        </h2>
      )}

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Column */}
        <div>
          <h3 className="title-teal !text-center text-xl md:text-2xl mb-4">
            {leftTitle}
          </h3>
          <ul className="space-y-4 text-sm md:text-base">
            {leftBullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start font-semibold gap-3">
                <img
                  src={bulletIcon}
                  alt={bulletAlt}
                  className="w-5 h-5 mt-1 shrink-0"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Image */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={imageSrc}
            alt={imageAlt || ""}
            className="w-full h-full object-cover shadow"
          />
        </div>

        {/* Right Column */}
        <div>
          <h3 className="title-teal !text-center text-xl md:text-2xl mb-4">
            {rightTitle}
          </h3>
          <ul className="space-y-4 text-sm md:text-base">
            {rightBullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start font-semibold gap-3">
                <img
                  src={bulletIcon}
                  alt={bulletAlt}
                  className="w-5 h-5 mt-1 shrink-0"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
