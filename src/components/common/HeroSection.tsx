import type { HeroSectionType } from "@/types/heroSectionType";

export default function HeroSection({
  badge,
  title,
  highlight,
  description,
  bgClass,
  highlightColor,
}: HeroSectionType) {
  return (
    <section className={`relative py-20 ${bgClass}`}>
      {/* Content */}
      <div className="max-w-6xl  mx-auto px-4 text-center relative sm:px-6 lg:px-8">
        <span className="bg-white/70 backdrop-blur-md text-pink-500 px-6 py-3 rounded-full text-sm font-semibold shadow-sm tracking-wider">
          {badge}
        </span>
        <h1 className="text-4xl  md:text-5xl font-extrabold text-gray-900 my-8 leading-tight">
          {title} <span className={highlightColor}>{highlight}</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
