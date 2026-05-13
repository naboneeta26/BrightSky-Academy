import { features } from "@/data/aboutContent";
import Image from "next/image";

export default function AboutSchoolFeatures() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* TOP TAG */}
            <span className="inline-block bg-green-100 text-green-600 px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              Our Commitment
            </span>

            {/* HEADING */}
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mt-6">
              Safety, Care & <span className="text-green-500">Excellence</span>
            </h2>

            {/* PARAGRAPHS */}
            <div className="space-y-8 mt-10">
              <p className="text-gray-600 text-lg leading-9">
                BrightSky Academy prioritizes child safety, joyful learning, and
                emotional development in a nurturing environment designed for
                every young learner.
              </p>

              <p className="text-gray-600 text-lg leading-9">
                Our classrooms encourage creativity, confidence, communication,
                and curiosity while maintaining strong parent-school
                collaboration and academic excellence.
              </p>
            </div>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-10 mt-14">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-200 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-gray-900" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 mt-2 leading-7">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/school.webp"
                alt="BrightSky Academy"
                width={700}
                height={700}
                className="w-full h-125 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
