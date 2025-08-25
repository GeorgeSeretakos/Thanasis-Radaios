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
    <div className="w-full my-12 bg-gradient-to-b from-[#E6F4FB] via-white to-[#F9FCFF] px-4 sm:px-6 lg:px-8">
      {/* Main Section Title */}
      {title && (
        <h2 className="title-black text-center mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h2>
      )}

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Left Column */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h3 className="title-teal mb-4">{leftTitle}</h3>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
            {leftBullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start font-semibold gap-3 text-left"
              >
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
        <div className="flex items-center justify-center">
          <img
            src={imageSrc}
            alt={imageAlt || ""}
            className="w-full max-w-sm sm:max-w-md lg:max-w-full object-contain lg:object-cover rounded-md md:rounded-none shadow"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h3 className="title-teal mb-4">{rightTitle}</h3>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
            {rightBullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start font-semibold gap-3 text-left"
              >
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
