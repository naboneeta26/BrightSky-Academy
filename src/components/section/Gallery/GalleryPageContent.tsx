"use client";

import Image from "next/image";
import { useState } from "react";
import GalleryLightbox from "./GalleryLightBox";

const images = [
  "/school.webp",
  "/school.webp",
  "/school.webp",
  "/school.webp",
  "/school.webp",
  "/school.webp",
];

export default function GalleryPageContent() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <section>
      {/* Gallery Section */}
      <div className="py-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mt-6 text-gray-900">
              Moments of Joy & Learning
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <div
                key={i}
                className="aspect-square cursor-pointer rounded-3xl overflow-hidden shadow-lg"
              >
                <Image
                  src={img}
                  onClick={() => setSelectedIndex(i)}
                  alt="Gallery"
                  height={500}
                  width={500}
                  className="object-cover w-full h-full"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
              </div>
            ))}
          </div>

          {/* lightbox */}
          <GalleryLightbox
            images={images}
            selectedIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            onNext={nextImage}
            onPrev={prevImage}
          />
        </div>
      </div>
    </section>
  );
}
