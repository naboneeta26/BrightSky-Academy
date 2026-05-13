import { Phone, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function AdmissionBanner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-blue-500 via-pink-400 to-purple-300 py-22">
      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/50 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full">
          <GraduationCap className="w-5 h-5 text-white" />
          <span className="text-white font-semibold tracking-wide">
            Admissions Open 2026–27
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-4xl lg:text-6xl font-black text-white leading-tight">
          Give Your Child the Best Start
        </h1>

        {/* Description */}
        <p className="mt-8 text-xl text-white/90 leading-9 max-w-2xl mx-auto">
          BrightSky Academy nurtures creativity, confidence, curiosity, and
          joyful learning experiences in a safe and inspiring environment for
          every child.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8">
          {/* Apply Button */}
          <Link href="/admission#enquiry-form">
            <button className="cursor-pointer bg-white text-pink-500 hover:bg-pink-50 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105">
              Apply Now →
            </button>
          </Link>

          {/* Call Button */}
          <a
            href="tel:+917974854118"
            className="cursor-pointer flex items-center gap-3 border border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
