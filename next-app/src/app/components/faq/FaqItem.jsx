export default function FaqItem({ q, aHtml }) {
  return (
    <details className="group">
      {/* Question tile (highlighted) */}
      <summary className="list-none">
        <div className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 md:px-6 md:py-3.5 transition-colors group-open:bg-white/[0.06] group-open:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
          <div className="flex items-start justify-between gap-3">
            <span className="text-sm md:text-base font-medium text-white/95">
              {q}
            </span>
            <span
              className="mt-0.5 shrink-0 rounded-full border border-white/25 px-2 py-0.5 text-[11px] text-white/80 group-open:hidden"
              aria-hidden="true"
            >
              +
            </span>
            <span
              className="mt-0.5 hidden shrink-0 rounded-full border border-white/25 px-2 py-0.5 text-[11px] text-white/80 group-open:inline"
              aria-hidden="true"
            >
              −
            </span>
          </div>
        </div>
      </summary>

      {/* Answer rendered as HTML */}
      <div className="group-open:mt-4 ml-3 md:ml-5 lg:ml-7">
        <div
          className="faq-answer border-l-2 border-white/15 pl-5 md:pl-8 lg:pl-10 max-w-3xl text-[15px] md:text-[16px] leading-8 tracking-[0.005em] text-white/85"
          dangerouslySetInnerHTML={{ __html: aHtml }}
        />
      </div>
    </details>
  );
}
