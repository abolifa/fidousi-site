"use client";

import { Section } from "@/lib/models";
import { motion } from "framer-motion";
import { getServerImage } from "@/lib/utils";

interface SectionProps {
  section: Section;
}

const SectionWidget = ({ section }: SectionProps) => {
  if (!section) {
    return null;
  }
  return (
    <section
      dir="rtl"
      className="relative bg-linear-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black py-20 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('/images/metal-pattern.png')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4"
        >
          {section.title}
        </motion.h2>

        <div className="w-24 h-1 bg-blue-600 mx-auto mb-10 rounded-full" />

        {/* Body Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="prose prose-gray dark:prose-invert max-w-none text-justify leading-relaxed text-gray-700 dark:text-gray-300 mb-12"
          dangerouslySetInnerHTML={{ __html: section.body ?? "" }}
        />

        {/* Images */}
        {section.images && section.images.length > 0 && (
          <div className="flex flex-wrap gap-6 justify-center">
            {section.images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl shadow-md bg-white dark:bg-zinc-800"
              >
                <img
                  src={getServerImage(image ?? "")}
                  alt={index.toString() ?? "Section Image"}
                  className="w-full h-64 object-contain transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionWidget;
