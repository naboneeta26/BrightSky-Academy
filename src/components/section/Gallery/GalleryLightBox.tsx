"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  images: string[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function GalleryLightbox({
  images,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
}: Props) {
  if (selectedIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-999 bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Button */}
        <button
          onClick={onPrev}
          className="absolute left-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Image */}
        <motion.img
          key={images[selectedIndex]}
          src={images[selectedIndex]}
          alt="Gallery Image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.8,
            opacity: 0,
          }}
          transition={{ duration: 0.3 }}
          className="max-h-[85vh] max-w-[90vw] rounded-[32px] shadow-2xl object-cover"
        />

        {/* Counter */}
        <div className="absolute bottom-8 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full">
          {selectedIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
