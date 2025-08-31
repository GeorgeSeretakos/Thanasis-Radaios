// app/components/blog/BlogCard.jsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogCard({ post, locale }) {
  if (!post) return null;

  // Fallback locale (only used if no prop is provided)
  const [internalLocale, setInternalLocale] = useState("el");

  useEffect(() => {
    if (locale == null) {
      const saved = localStorage.getItem("locale") || "el";
      setInternalLocale(saved);
    }
  }, [locale]);

  // Effective locale: prefer prop, else fallback we loaded
  const effectiveLocale = locale ?? internalLocale;
  const isEN = effectiveLocale === "en";

  const isPdf = !!post.pdfUrl;
  const isSlug = !!post.slug;
  const targetUrl = isPdf ? post.pdfUrl : isSlug ? `/blog/${post.slug}` : null;

  // Show image only for "news" posts (as in your comment)

  const linkLabel = isPdf
    ? isEN ? "View PDF →" : "Προβολή PDF →"
    : isEN ? "Learn more →" : "Μάθετε περισσότερα →";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-72">
      <div className="relative w-full h-[50%]">
        <img
          src={post.image || "/logo/4.png"}
          alt={post.imageAlt || post.title || (isEN ? "Post image" : "Εικόνα άρθρου")}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h4 className="text-gray-900 font-semibold mb-2">{post.title}</h4>

        {targetUrl && (
          <Link
            href={targetUrl}
            target={isPdf ? "_blank" : "_self"}
            rel={isPdf ? "noopener noreferrer" : undefined}
            className="inline-block mt-auto text-[#1C86D1] font-medium hover:underline"
          >
            {linkLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
