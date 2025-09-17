export default function IntroSection({
                                       image,
                                       videoSrc,
                                       videoType = "video/mp4",
                                       poster,
                                       title,
                                       paragraph,          // Backwards-compatible: arbitrary JSX
                                       lead,               // New: string/JSX for the main intro sentence/paragraph
                                       points,             // New: array of strings for bullets
                                       note,               // New: string/JSX for a small note/cta below the lead
                                       imageClassName = "object-cover",
                                       heightClass = "h-[40vh]", // tweak per page if needed
                                     }) {
  const hasVideo = !!videoSrc;
  const hasImage = !!image;
  const structured = lead || (points && points.length) || note;

  return (
    <section className="relative text-white bg-[#0B0B0C]">
      {/* Media area */}
      <div className={`relative ${heightClass} flex items-center justify-center text-center`}>
        {/* Background media or fallback */}
        <div className="absolute inset-0 -z-10">
          {hasVideo ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={poster}
            >
              <source src={videoSrc} type={videoType} />
            </video>
          ) : hasImage ? (
            <img src={image} alt="" className={`w-full h-full ${imageClassName}`} />
          ) : (
            // Fallback: subtle gray gradient base (no photo)
            <div className="w-full h-full bg-[linear-gradient(180deg,rgba(39,39,42,0.9)_0%,rgba(39,39,42,0.8)_50%,rgba(24,24,27,0.9)_100%)]" />
          )}

          {/* Gray linear-gradient overlay for readability */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(39,39,42,0.85)_0%,rgba(39,39,42,0.65)_35%,rgba(39,39,42,0.40)_60%,rgba(39,39,42,0.28)_100%)]" />
        </div>

        {/* Title */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
          </div>
        </div>
      </div>

      {/* Under-text (info block) */}
      <div className="w-full px-4 pb-10 md:pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {structured ? (
            // New polished split-card layout
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              {/* subtle top sheen */}
              <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
              <div className="relative px-5 py-6 md:px-8 md:py-8">
                <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
                  {/* Left: lead + note */}
                  <div className="md:col-span-3">
                    {lead && (
                      <p className="text-white/90 text-base md:text-lg leading-7 md:leading-8">
                        {lead}
                      </p>
                    )}
                    {note && (
                      <p className="mt-4 text-sm md:text-base text-white/80 leading-7">
                        {note}
                      </p>
                    )}
                  </div>

                  {/* Right: bullets */}
                  {points?.length ? (
                    <div className="md:col-span-2">
                      <ul className="grid gap-2.5 md:gap-3">
                        {points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-3 text-white/85 leading-7">
                            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md border border-white/25 text-xs">
                              ✓
                            </span>
                            <span className="text-sm md:text-base">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : paragraph ? (
            // Legacy mode: keep your existing JSX, but place it inside a nicer card
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 md:px-8 md:py-8 text-left">
              <div className="text-white/85 leading-7 md:leading-8 [&_p]:mb-3 last:[&_p]:mb-0">
                {paragraph}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
