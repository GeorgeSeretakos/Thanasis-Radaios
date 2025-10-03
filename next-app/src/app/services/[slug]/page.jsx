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
      <nav className="max-w-5xl mx-auto pt-6 text-sm">
        <div className="flex items-center justify-between gap-2">
          {/* Left: breadcrumb */}
          <div className="flex flex-wrap items-center">
            <Link href="/services" className="opacity-70 hover:opacity-100">Υπηρεσίες</Link>
            <span className="opacity-50 mx-1">/</span>
            <span className="opacity-90">{svc.category}</span>
            <span className="opacity-50 mx-1">/</span>
            <span className="opacity-100">{svc.title}</span>
          </div>

          <Link
            href={backHref}
            className="hidden sm:inline-flex items-center gap-1 opacity-70 hover:opacity-100"
          >
            <span aria-hidden>←</span>
            <span className="underline underline-offset-2 decoration-white/20 hover:decoration-white/40">
              Πίσω στις Υπηρεσίες
            </span>
          </Link>
        </div>

        {/* On mobile (<sm): move the back link below to avoid overlap */}
        <Link
          href={backHref}
          className="sm:hidden mt-2 inline-flex items-center gap-1 opacity-80 hover:opacity-100"
        >
          <span aria-hidden>←</span>
          <span className="underline underline-offset-2 decoration-white/20 hover:decoration-white/40">
            Πίσω στις Υπηρεσίες
          </span>
        </Link>
      </nav>



      {/* Header */}
      <section className="max-w-5xl mx-auto">
        <PageHeader title={svc.title} lead={svc.summary}/>
      </section>


      {/* Body */}
      <section className="max-w-5xl mx-auto pb-20">
        {svc.aHtml ? (
          <div className="faq-answer" dangerouslySetInnerHTML={{__html: svc.aHtml}}/>
        ) : (
          <div className="faq-answer">
            {typeof svc.content === "function" ? svc.content() : svc.content}
          </div>
        )}

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-3">
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
