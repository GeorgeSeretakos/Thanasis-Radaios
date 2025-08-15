// components/TextBgImage.jsx
export default function TextBgImage({
title,
text,
image,                // fallback image (required if no video)
videoSrc,             // e.g. "/videos/hero.mp4"
videoType = "video/mp4", // "video/mp4" | "video/webm" etc.
poster,               // optional poster image for video
height = "90vh",
overlay = "bg-black/50",
videoLoop = true,
videoMuted = true,    // must be true for autoplay on iOS
videoAutoplay = true, // must be true for autoplay
videoPlaysInline = true,
videoControls = false // keep false for pure background
}) {
  const useVideo = !!videoSrc;

  return (
    <section
      className="relative py-12 px-4 text-white flex items-center"
      style={{ height }}
    >
      {/* background media */}
      <div className="absolute inset-0">
        {useVideo ? (
          <video
            className="w-full h-full object-cover rounded-lg pointer-events-none"
            autoPlay={videoAutoplay}
            muted={videoMuted}
            loop={videoLoop}
            playsInline={videoPlaysInline}
            controls={videoControls}
            preload="auto"
            poster={poster}
            aria-hidden="true"
          >
            <source src={videoSrc} type={videoType} />
          </video>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
        <div className={`absolute inset-0 ${overlay}`}></div>
      </div>

      {/* content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <div
          className="text-lg leading-7"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </section>
  );
}
