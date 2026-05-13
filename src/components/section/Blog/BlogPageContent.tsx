import { blogs } from "@/data/blogContent";
import BlogCard from "./BlogCard";

export default function BlogPageContent() {
  return (
    <section className="py-28 bg-linear-to-b from-pink-300 via-purple-200 to-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
