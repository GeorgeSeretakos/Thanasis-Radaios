// components/ServiceCard.jsx
export default function ServiceCard({ iconSrc, iconAlt, title, description }) {
  return (
    <div className="border border-[#1C86D1] rounded-xl p-4 hover:shadow transition w-64 h-60 flex flex-col items-center text-center">
      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4">
        {typeof iconSrc === "string" ? (
          <img
            src={iconSrc}
            alt={iconAlt || title}
            className="w-12 h-12 object-contain"
          />
        ) : (
          // If iconSrc is a React component (like an imported SVG)
          <div className="w-8 h-8 text-cyan-500">{iconSrc}</div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#1C86D1] mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
