// components/FeatureColumns.jsx
export default function FeatureColumns({
                                         sectionTitle,
                                         leftTitle,
                                         leftBullets,
                                         rightTitle,
                                         rightBullets,
                                         imageSrc,
                                         imageAlt
                                       }) {
  return (
    <div className="w-full py-12">
      {/* Main Section Title */}
      {/*{sectionTitle && (*/}
      {/*  <h2 className="title-teal text-center">*/}
      {/*    {sectionTitle}*/}
      {/*  </h2>*/}
      {/*)}*/}

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Left Column */}
        <div>
          <h3 className="title-teal">{leftTitle}</h3>
          <ul className="list-disc list-inside space-y-4 text-left">
            {leftBullets.map((bullet, idx) => (
              <li key={idx} className="">{bullet}</li>
            ))}
          </ul>
        </div>

        {/* Center Image */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={imageSrc}
            alt={imageAlt || ""}
            className="w-full h-full rounded-lg object-cover shadow"
          />
        </div>

        {/* Right Column */}
        <div>
          <h3 className="title-teal">{rightTitle}</h3>
          <ul className="list-disc list-inside space-y-4 text-left">
            {rightBullets.map((bullet, idx) => (
              <li key={idx} className="">{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
