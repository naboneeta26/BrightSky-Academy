import { Card, CardContent } from "@/components/ui/card";

export default function HomeFeatures() {
  const features = [
    {
      title: "Expert Faculty",
      icon: "👨‍🏫",
      desc: "Dedicated educators with years of experience.",
    },
    {
      title: "Holistic Growth",
      icon: "🌱",
      desc: "Focus on academic, emotional, and social development.",
    },
    {
      title: "Modern Facilities",
      icon: "🏫",
      desc: "State-of-the-art classrooms and play areas.",
    },
  ];
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose BrightSky?
          </h2>
          <p className="mt-4 text-gray-600">
            Discover what makes our school special for your child&apos;s growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-xl shadow-gray-200 hover:-translate-y-3 hover:shadow-4xl hover:shadow-purple-300 transition-all duration-500"
            >
              <CardContent className="pt-8 text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
