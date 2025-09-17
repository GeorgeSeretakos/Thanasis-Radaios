// app/services/[slug]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "../../components/PageHeader";
import { getAllServices, getServiceBySlug } from "../../../../public/data";


export function generateStaticParams() {
  return getAllServices().map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const svc = getServiceBySlug(params.slug);
  if (!svc) return {};
  const title = `${svc.title} • Υπηρεσίες — ${svc.category}`;
  const desc =
    svc.summary ||
    "Αναλυτική περιγραφή υπηρεσίας, δικαιολογητικά και διαδικασία.";
  return {
    title,
    description: desc,
    alternates: { canonical: `/services/${svc.slug}` },
    openGraph: { title, description: desc, type: "article" },
  };
}

export default function ServiceDetailPage({ params }) {
  const svc = getServiceBySlug(params.slug);
  if (!svc) return notFound();

  return (
    <main className="px-4">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto pt-6 text-sm">
        <Link href="/services" className="opacity-70 hover:opacity-100">Υπηρεσίες</Link>
        <span className="opacity-50 mx-1">/</span>
        <span className="opacity-90">{svc.category}</span>
        <span className="opacity-50 mx-1">/</span>
        <span className="opacity-100">{svc.title}</span>
      </nav>

      {/* Header */}
      <section className="max-w-5xl mx-auto">
        <PageHeader
          eyebrow={svc.category}
          title={svc.title}
          lead={svc.summary}
        />
      </section>

      {/* Body */}
      <section className="max-w-5xl mx-auto pb-20">
        {/* Prefer HTML (like your Q&A). Fallback to React nodes if provided. */}
        {svc.aHtml ? (
          <div className="faq-answer" dangerouslySetInnerHTML={{ __html: svc.aHtml }} />
        ) : (
          <div className="faq-answer">
            {typeof svc.content === "function" ? svc.content() : svc.content}
          </div>
        )}

        {/* Back CTA */}
        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm hover:bg-white/90"
          >
            ← Πίσω στις Υπηρεσίες
          </Link>
        </div>
      </section>
    </main>
  );
}
