import FaqItem from "./FaqItem";

export default function FaqPanel({ category }) {
  return (
    <section
      id={category.id}
      aria-labelledby={`heading-${category.id}`}
      className="mt-6 md:mt-8"
    >
      <div className="flex items-center justify-between gap-3">
        <h2
          id={`heading-${category.id}`}
          className="text-lg md:text-xl font-semibold"
        >
          {category.title}
        </h2>
        {/* Removed the Copy Link button as requested */}
      </div>

      <div className="mt-6 grid gap-6">
        {category.items.map((item, i) => (
          <FaqItem key={i} q={item.q} aHtml={item.aHtml} />
        ))}
      </div>

    </section>
  );
}
