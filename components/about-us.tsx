"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      dir="rtl"
      className="relative bg-linear-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black py-20 overflow-hidden"
    >
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-0 top-0 w-2/3 h-full"
        />
      </div>

      <div className="px-5 container mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* النص */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center text-right"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            من <span className="text-blue-600">نحن</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify mb-8">
            نحن شركة متخصصة في استيراد وبيع قطع غيار نواقل الحركة للشاحنات
            والمركبات الثقيلة، نسعى لتوفير منتجات موثوقة تجمع بين الجودة العالية
            والسعر المناسب لتلبية احتياجات السوق المحلي. نستورد قطع الغيار
            الأصلية والبديلة من كبرى الشركات والمصانع العالمية لضمان أفضل أداء
            ومتانة في الاستخدام. كما نحرص على تقديم خدمة سريعة ومتكاملة لعملائنا
            في جميع أنحاء ليبيا، مع التزامنا الدائم بالمصداقية، والتعامل المهني،
            وتوفير كل ما يلزم لضمان رضا عملائنا وثقتهم.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            viewport={{ once: true, amount: 0.2 }}
            href="/contact"
            className="self-start inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full shadow-md transition"
          >
            تواصل معنا
          </motion.a>
        </motion.div>

        {/* الصورة */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Image
            src="/images/about.jpg"
            alt="من نحن"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl object-cover"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute -bottom-6 left-5 bg-white/90 dark:bg-zinc-800 backdrop-blur-md rounded-2xl shadow-md p-4 text-center"
          >
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              خبرة تتجاوز 15 سنوات في مجال نواقل الحركة
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
