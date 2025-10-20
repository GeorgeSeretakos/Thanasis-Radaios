import Link from "next/link";

export default function BlogCard({ post }) {
  if (!post) return null;

  const isPdf = Boolean(post.pdfUrl);
  const isSlug = Boolean(post.slug);

  const targetUrl = isPdf
    ? post.pdfUrl
    : isSlug
      ? `/blog/${post.slug}`
      : null;

  return (
    <div className="border-1 rounded-lg shadow-md overflow-hidden flex flex-col h-72">
      {/* Εικόνα → ΜΟΝΟ για news */}
      <div className="relative w-full h-[55%]">
        <img
          src={post.image || "/logo/4.png"}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Περιεχόμενο */}
      <div className="flex flex-col flex-1 p-4 border-t-0 rounded-b-lg">
        <h4 className="font-semibold">{post.title}</h4>

        {targetUrl && (
          <Link
            href={targetUrl}
            target={isPdf ? "_blank" : "_self"}
            rel={isPdf ? "noopener noreferrer" : undefined}
            className="inline-block mt-auto font-medium hover:underline"
          >
            {isPdf ? "Προβολή PDF →" : "Μάθετε περισσότερα →"}
          </Link>
        )}
      </div>
    </div>
  );
}