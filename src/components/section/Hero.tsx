import Link from "next/link";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-32 lg:pt-32 lg:pb-48">
      <div className="max-w-7xl mx-auto px-4 sm:p-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
            Where Every Child <br />
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dreams in Color
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            At BrightSky Academy, we provide a nurturing environment where
            children can explore, learn, and grow into confident individuals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admission">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-6 rounded-full text-lg bg-purple-600 text-white font-semibold
      hover:bg-purple-700 transition-all duration-300 cursor-pointer
      hover:-translate-y-1 shadow-lg"
              >
                Enroll Now
              </Button>
            </Link>
            <Link href="/programs">
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer w-full sm:w-auto rounded-full px-8 py-6 text-lg border-purple-300 font-medium hover:bg-purple-300 transition-all"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
