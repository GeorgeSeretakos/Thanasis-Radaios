import posts from "../../../../public/data/blog";
import Link from "next/link";

export default function BlogSlugPage({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h2>Το άρθρο δεν βρέθηκε</h2>
        <p>Αυτό το περιεχόμενο είναι διαθέσιμο μόνο ως PDF.</p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="title-black text-center">{post.title}</h2>

      {post.contentHtml ? (
        <div
          className="content blog"
          dangerouslySetInnerHTML={{__html: post.contentHtml}}
        />

      ) : (
        post.content?.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
      )}

      {post.externalUrl && (
        <Link
          href={post.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 font-medium hover:underline"
        >
          Δείτε περισσότερα →
        </Link>
      )}

    </article>
  );
}