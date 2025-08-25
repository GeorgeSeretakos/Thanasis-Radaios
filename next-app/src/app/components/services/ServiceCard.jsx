// components/ServiceCard.jsx
export default function ServiceCard({ iconSrc, iconAlt, title, description }) {
  return (
    <div
      className="border border-[#1C86D1] bg-white rounded-xl p-6 shadow-lg transition
                 w-full max-w-sm lg:w-64 lg:h-60 flex flex-col items-center text-center"
    >
      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4">
        {typeof iconSrc === "string" ? (
          <img
            src={iconSrc}
            alt={iconAlt || title}
            className="w-12 h-12 object-contain"
          />
        ) : (
          <div className="w-8 h-8 text-cyan-500">{iconSrc}</div>
        )}
      </div>

      {/* Title */}
      <h3 className="!text-base !sm:text-lg font-semibold text-[#1C86D1] mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="!text-sm !sm:text-base text-gray-700">{description}</p>
    </div>
  );
}
