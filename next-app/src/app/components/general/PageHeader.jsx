export default function PageHeader({ title, lead, points = [], note = null }) {
  return (
    <section className="relative max-w-3xl px-6 mx-auto py-10 md:py-14">
      {/* Soft backdrop */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)]" />

      <div>
        <header className="text-center">
          <h1 className="mt-2 leading-tight">
            {title}
          </h1>
          {lead && <p className="mt-3 opacity-80">{lead}</p>}
        </header>

        {/* Bullets with tick icons */}
        {points.length > 0 && (
          <div className="max-w-lg mx-auto">
            <ul className="space-y-3 mt-8 opacity-90">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 py-1 text-[inherit]">
                  <svg className="mt-0.5 h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5"/>
                    <path d="M7 12.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                          strokeLinejoin="round"/>
                  </svg>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {note && (
          <div className="mt-6 max-w-3xl mx-auto opacity-80 text-center">
            {note}
          </div>
        )}
      </div>
    </section>
  );
}
