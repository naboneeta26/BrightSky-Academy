import { admissionSteps } from "@/data/admisionContent";

export default function AdmissionProcess() {
  return (
    <section className="relative overflow-hidden py-28 bg-white">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center">
          <span className="bg-pink-100 text-pink-500 px-6 py-3 rounded-full text-sm font-semibold tracking-[0.2em] uppercase">
            How To Enroll
          </span>

          <h2 className="text-5xl lg:text-5xl font-black text-gray-900 mt-8 leading-tight">
            Simple{" "}
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Admission Process
            </span>
          </h2>

          <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto leading-9">
            Four easy steps to begin your child&apos;s learning journey at
            BrightSky Academy.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-linear-to-r from-pink-300 via-pink-400 to-purple-300 rounded-full"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 relative z-10">
            {admissionSteps.map((step) => (
              <div key={step.id} className="text-center group">
                {/* Circle */}
                <div
                  className={`w-24 h-24 mx-auto rounded-full bg-linear-to-br ${step.color} flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2`}
                >
                  <span className="text-4xl font-black text-white">
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-8 mt-5 text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-20">
          <a
            href="#enquiry-form"
            className="cursor-pointer bg-linear-to-r from-pink-500 to-purple-500 hover:opacity-90 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Start Admission →
          </a>
        </div>
      </div>
    </section>
  );
}
