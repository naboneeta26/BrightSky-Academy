import { advantages } from "@/data/aboutContent";

export default function AboutSchoolAdvantages() {
  return (
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
  );
}
