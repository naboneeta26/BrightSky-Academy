import type { blogType } from "@/types/blogType";
import { ArrowRight, Clock3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  blog: blogType;
};

export default function BlogCard({ blog }: Props) {
  return (
    <div className="group bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-3 transition-all duration-500 border border-pink-100">
      <div className="relative h-65 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-5">
          <span className="bg-pink-100 text-pink-500 px-4 py-2 rounded-full text-sm font-semibold">
            {blog.category}
          </span>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock3 className="w-4 h-4" />
            {blog.readTime}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 leading-tight group-hover:text-pink-500 transition-colors duration-300">
          {blog.title}
        </h2>

        <p className="text-gray-600 leading-8 mt-5">{blog.description}</p>
        <div className="flex items-center justify-between mt-8">
          <div>
            <p className="font-semibold text-gray-900">{blog.author}</p>

            <p className="text-sm text-gray-500 mt-1">{blog.createdAt}</p>
          </div>

          <Link
            href={`/blogs/${blog.slug}`}
            className="group/link flex items-center gap-3 text-pink-500 font-semibold"
          >
            Read More
            <span className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
