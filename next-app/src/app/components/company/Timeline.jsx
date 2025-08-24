// components/Timeline.jsx
export default function Timeline({ items }) {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#E6F4FB] via-white to-[#F9FCFF]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="title-teal mb-16">
          Η πορεία της Miha-Bodytec
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-[#1C86D1]/30" />

          <div className="space-y-16">
            {items.map((it, i) => (
              <div
                key={it.year}
                className="grid grid-cols-1 md:grid-cols-3 items-center gap-x-2 gap-y-16"
              >
                {i % 2 === 0 ? (
                  <>
                    {/* Text (left) */}
                    <div className="md:text-right">
                      <p className="leading-relaxed font-semibold">
                        <i>{it.text}</i>
                      </p>
                    </div>

                    {/* Marker / image (center) */}
                    <CenterMarker imageSrc={it.image} />

                    {/* Year (right) */}
                    <div className="text-[#1C86D1] text-4xl md:text-5xl font-bold">
                      {it.year}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Year (left) */}
                    <div className="text-[#1C86D1] text-4xl md:text-5xl font-bold md:text-right">
                      {it.year}
                    </div>

                    {/* Marker / image (center) */}
                    <CenterMarker imageSrc={it.image} />

                    {/* Text (right) */}
                    <div>
                      <p className="leading-relaxed font-semibold">
                        <i>{it.text}</i>
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CenterMarker({ imageSrc }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* vertical line (mobile) */}
      <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-[-2rem] bottom-[-2rem] w-[2px] bg-[#1C86D1]/30" />
      <div className="w-40 h-40 rounded-full border-2 border-[#1C86D1] bg-white overflow-hidden shadow-md">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="w-4 h-4 rounded-full bg-[#1C86D1]" />
          </div>
        )}
      </div>
    </div>
  );
}
