// components/QandA.jsx
"use client";

export default function QandA({ items = [] }) {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-[#E6F4FB] via-white to-[#F9FCFF]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1C86D1] mb-10">
          Συχνές Ερωτήσεις
        </h2>

        <div className="space-y-6">
          {items.map((qa, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow border border-[#1C86D1]/20"
            >
              <h3 className="text-lg font-semibold text-[#1C86D1]">
                {qa.q}
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{qa.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
