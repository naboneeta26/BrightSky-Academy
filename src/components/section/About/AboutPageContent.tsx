import HeroSection from "@/components/common/HeroSection";
import { advantages } from "@/data/aboutContent";
import { pageHeroContent } from "@/data/heroContent";
import Image from "next/image";
import Link from "next/link";

export default function AboutPageContent() {
  const hero = pageHeroContent.about;
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroSection {...hero} />

      {/* About School Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold mb-6">
              ABOUT OUR SCHOOL
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              Our Mission is to <br />
              <span className="text-pink-600">Empower Every Child</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              BrightSky Academy has been a beacon of excellence in early
              childhood education. We believe that every child is unique and
              deserves an environment that fosters their natural curiosity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="
      px-7 py-3 rounded-full bg-pink-600 text-white font-semibold
      hover:bg-pink-700 transition-all duration-300
      hover:-translate-y-1 shadow-lg
    "
              >
                Learn More
              </Link>

              <Link
                href="/contact"
                className="
      px-7 py-3 rounded-full border border-pink-300
      text-gray-700 font-semibold hover:bg-pink-200
      transition-all duration-300
    "
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative  rounded-[32px] overflow-hidden shadow-2xl">
            <Image
              src="/about.jpg"
              alt="About"
              width={800}
              height={500}
              className="w-full h-112.5 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Advantages of School */}
      <section className="relative overflow-hidden py-28 bg-[#a190c3]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold tracking-widest uppercase">
              Why Choose Us
            </span>

            <h2 className="text-5xl lg:text-5xl font-bold text-white mt-8 leading-tight">
              The BrightSky Advantage
            </h2>

            <p className="text-white/90 text-lg mt-6 max-w-3xl mx-auto leading-8">
              We create a joyful learning environment where every child feels
              inspired, supported, and empowered to explore their creativity and
              build lifelong confidence.
            </p>
          </div>

          {/* Advantage Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:bg-white/20"
                >
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center ${item.color} shadow-lg group-hover:scale-110 transition duration-300`}
                  >
                    <Icon className={`w-10 h-10 ${item.iconColor}`} />
                  </div>
                  {/* Title */}
                  <h3 className="text-white text-xl font-bold mt-8 leading-relaxed whitespace-pre-line">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
