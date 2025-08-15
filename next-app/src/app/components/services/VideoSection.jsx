export default function VideoSection({ title, paragraphs=[], videoUrl, reverse = false }) {
  return (
    <section className="w-full py-12">
      <div
        className={`max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center ${
          reverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
        }`}
      >
        {/* Text */}
        <div>
          <h2 className="title-teal">{title}</h2>
          {paragraphs.map((text, idx) => (
            <p key={idx} className="leading-7 mb-4 last:mb-0" dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </div>

        {/* Video */}
        <div
          className="relative w-full rounded-xl overflow-hidden shadow-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            src={videoUrl}
            title="Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
