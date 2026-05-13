import { blogs } from "@/data/blogContent";
import { Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  slug: string;
};

export default async function SingleBlogPage({ slug }: Props) {
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return notFound();
  }
  return (
    <main className="bg-linear-to-b from-pink-50 to-white min-h-screen pb-28">
      {/* Hero */}
      <section className="relative overflow-hidden py-32 bg-linear-to-br from-pink-400 via-purple-300 to-blue-200">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold">
            {blog.category}
          </span>

          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mt-8">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xl font-semibold text-white">
            <span>{blog.author}</span>
            <span>{blog.createdAt}</span>

            <div className="flex items-center gap-2">
              <Clock3 className="w-5 h-5" />
              {blog.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="max-w-5xl mx-auto px-6 mt-20 relative z-20">
        <div className="relative h-125 rounded-[40px] overflow-hidden shadow-2xl">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      </section>
      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-xl border border-pink-100">
          <p className="text-xl leading-[2.2] text-gray-700">{blog.content}</p>
        </div>
      </section>
    </main>
  );
}
