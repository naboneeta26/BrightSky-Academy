import Image from "next/image";
import Link from "next/link";

export default function AboutPageContent() {
  return (
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
            BrightSky Academy has been a beacon of excellence in early childhood
            education. We believe that every child is unique and deserves an
            environment that fosters their natural curiosity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/admission"
              className="
      px-7 py-3 rounded-full bg-pink-600 text-white font-semibold
      hover:bg-pink-700 transition-all duration-300
      hover:-translate-y-1 shadow-lg
    "
            >
              Enroll Now
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
  );
}
