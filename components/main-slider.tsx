"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/lib/models";
import { getServerImage } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MainSliderProps {
  sliders: Slider[];
}

const MainSlider = ({ sliders }: MainSliderProps) => {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % sliders.length);
  }, [sliders.length]);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + sliders.length) % sliders.length);
  }, [sliders.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!sliders?.length) return null;
  const current = sliders[index];

  return (
    <div className="w-full container mx-auto px-2">
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.id}
            src={getServerImage(current.image)}
            alt={current.title || "Slide"}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-center text-center px-6 md:px-28 text-white">
          <motion.h2
            key={`title-${current.id}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              delay: 1.2, // wait for image transition
              duration: 1,
              ease: "easeOut",
            }}
            className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-xl max-w-3xl"
          >
            {current.title}
          </motion.h2>

          {current.sub_title && (
            <motion.p
              key={`subtitle-${current.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                delay: 1.5, // starts slightly after title
                duration: 1,
                ease: "easeOut",
              }}
              className="text-base md:text-3xl max-w-4xl opacity-90 drop-shadow"
            >
              {current.sub_title}
            </motion.p>
          )}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full p-2 md:p-3 z-20 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full p-2 md:p-3 z-20 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 w-full flex justify-center gap-2">
          {sliders.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index
                  ? "bg-white scale-125"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
