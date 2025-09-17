import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "../../components/general/PageHeader";
import { getAllServices, getServiceBySlug } from "../../../../public/data";

export function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const svc = getServiceBySlug(params.slug);
  if (!svc) return {};
  const title = `${svc.title} • Υπηρεσίες — ${svc.category}`;
  const desc = svc.summary || "Αναλυτική περιγραφή υπηρεσίας, δικαιολογητικά και διαδικασία.";
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

  const backHref = "/services";
  const faqHref = typeof svc.faq === "string" && svc.faq.trim() ? `/faq#${svc.faq}` : null;

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
        <PageHeader eyebrow={svc.category} title={svc.title} lead={svc.summary} />
      </section>

      {/* Body */}
      <section className="max-w-5xl mx-auto pb-20">
        {svc.aHtml ? (
          <div className="faq-answer" dangerouslySetInnerHTML={{ __html: svc.aHtml }} />
        ) : (
          <div className="faq-answer">
            {typeof svc.content === "function" ? svc.content() : svc.content}
          </div>
        )}

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={backHref} className="btn btn-secondary">
            ← Πίσω στις Υπηρεσίες
          </Link>

          {faqHref && (
            <Link href={faqHref} className="btn btn-outline">
              Σχετικές Ερωτήσεις (FAQ)
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
