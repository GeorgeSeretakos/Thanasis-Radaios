export default function FeatureGrid({ items = [], title }) {
  return (
    <section className="w-4/5 mx-auto py-12">
      {title && (
        <div className="bg-[#1C86D1] p-4 rounded-xl text-2xl font-bold text-white !mb-8 text-center">
          {title}
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            {/* Icon */}
            <div className="w-12 h-12 flex-shrink-0">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
