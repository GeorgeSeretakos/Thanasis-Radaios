"use client";
import posts from "../../../public/data/blog";
import BlogCard from "../components/blog/BlogCard";
import PageHeader from "../components/general/PageHeader";
import Footer from "../components/general/Footer";

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Νέα"
        lead="Μάθετε τα τελευταία νέα, ενημερώσεις και άρθρα από το γραφείο μας"
      />
      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.filter(Boolean).map((post) => (
            <div key={post.slug || post.pdfUrl || post.title}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}