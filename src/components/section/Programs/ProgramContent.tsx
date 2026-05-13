"use client";

import { colorClasses } from "@/data/programContent";
import type { Props } from "@/types/programType";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProgramContent({ program, reverse }: Props) {
  const [bg, text, softBg] = colorClasses[program.color].split(" ");

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className={`${reverse ? "lg:order-2" : ""}`}>
            <div className="relative group">
              <Image
                src={program.image}
                alt={program.title}
                height={500}
                width={500}
                className="w-full h-125 object-cover rounded-[40px] transition duration-500 group-hover:scale-105"
              />

              <div
                className={`absolute -bottom-6 -right-6 ${bg} text-white px-6 py-4 rounded-3xl shadow-xl`}
              >
                {program.ageGroup}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${reverse ? "lg:order-1" : ""}`}>
            <span
              className={`${softBg} ${text} px-5 py-2 rounded-full text-sm font-semibold`}
            >
              {program.category}
            </span>

            <h2 className="text-5xl font-bold mt-6 leading-tight text-gray-900">
              {program.title}
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              {program.description}
            </p>

            <div className="mt-8 space-y-4">
              {program.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${bg}`}></div>
                  <p className="text-gray-700 text-lg">{feature}</p>
                </div>
              ))}
            </div>

            <Link href="/admission#enquiry-form">
              <button
                className={`cursor-pointer mt-10 ${bg} hover:-translate-y-1 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg`}
              >
                Enroll in {program.title}
                <ArrowRight className="inline-block ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
