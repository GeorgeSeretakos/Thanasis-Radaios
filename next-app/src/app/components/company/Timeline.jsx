// components/Timeline.jsx
export default function Timeline({ items }) {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#E6F4FB] via-white to-[#F9FCFF]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="title-teal mb-12 sm:mb-16 text-center sm:text-left">
          Η πορεία της Miha-Bodytec
        </h2>

        <div className="space-y-12 sm:space-y-16">
          {items.map((it, i) => (
            <div
              key={it.year}
              className="grid grid-cols-1 md:grid-cols-3 items-center gap-x-6 gap-y-8 md:gap-y-0"
            >
              {/* 📱 Mobile layout (stacked) */}
              <div className="md:hidden flex flex-col items-center text-center space-y-4">
                <div className="text-[#1C86D1] text-2xl sm:text-3xl font-bold">
                  {it.year}
                </div>
                <p className="leading-relaxed font-medium text-sm sm:text-base">
                  <i>{it.text}</i>
                </p>
                <CenterMarker imageSrc={it.image} />
              </div>

              {/* 💻 Desktop layout (alternating) */}
              {i % 2 === 0 ? (
                <>
                  <div className="hidden md:block md:text-right">
                    <p className="leading-relaxed font-medium text-lg">
                      <i>{it.text}</i>
                    </p>
                  </div>
                  <div className="hidden md:flex justify-center">
                    <CenterMarker imageSrc={it.image} />
                  </div>
                  <div className="hidden md:block text-[#1C86D1] text-4xl lg:text-5xl font-bold">
                    {it.year}
                  </div>
                </>
              ) : (
                <>
                  <div className="hidden md:block text-[#1C86D1] text-4xl lg:text-5xl font-bold md:text-right">
                    {it.year}
                  </div>
                  <div className="hidden md:flex justify-center">
                    <CenterMarker imageSrc={it.image} />
                  </div>
                  <div className="hidden md:block">
                    <p className="leading-relaxed font-medium text-lg">
                      <i>{it.text}</i>
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CenterMarker({ imageSrc }) {
  return (
    <div className="relative flex items-center justify-center">
      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 border-[#1C86D1] bg-white overflow-hidden shadow-md">
        {imageSrc ? (
          <img src={imageSrc} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="w-4 h-4 rounded-full bg-[#1C86D1]" />
          </div>
        )}
      </div>
    </div>
  );
}
