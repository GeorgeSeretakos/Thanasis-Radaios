// app/blog/[slug]/page.jsx
"use client";

import * as React from "react";
import * as blogData from "../../../../public/data/blog";
import Link from "next/link";

export default function BlogSlugPage({ params }) {
  // ✅ Unwrap params (it's a Promise in newer Next.js versions)
  const { slug } = React.use(params);

  // Locale from localStorage (client-only)
  const [locale, setLocale] = React.useState("el");
  React.useEffect(() => {
    const saved = localStorage.getItem("locale") || "el";
    setLocale(saved);
  }, []);

  // Pick language-specific posts with safe fallback
  const posts = React.useMemo(() => {
    const fallback = blogData.default || blogData.posts_el || [];
    return locale === "en" ? blogData.posts_en || fallback : blogData.posts_el || fallback;
  }, [locale]);

  const post = React.useMemo(() => posts.find((p) => p.slug === slug), [posts, slug]);
  const isEN = locale === "en";

  if (!post) {
    // Slug not found (e.g., item is PDF-only)
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 prose prose-lg">
        <h2>{isEN ? "Article not found" : "Το άρθρο δεν βρέθηκε"}</h2>
        <p>
          {isEN
            ? "This content is available only as a PDF."
            : "Αυτό το περιεχόμενο είναι διαθέσιμο μόνο ως PDF."}
        </p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 prose prose-lg">
      <h2 className="mb-6">{post.title}</h2>

      {post.image && (
        <div className="mb-6">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            width={800}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      {post.content?.map((paragraph, idx) => (
        <p key={idx} className="mb-4">
          {paragraph}
        </p>
      ))}

      {post.externalUrl && (
        <Link
          href={post.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-[#1C86D1] font-medium hover:underline"
        >
          {isEN ? "Read more →" : "Διαβάστε περισσότερα →"}
        </Link>
      )}
    </article>
  );
}
