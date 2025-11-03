"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Partnership = () => {
  return (
    <div
      dir="rtl"
      className="relative bg-linear-to-l from-[#1e293b] via-[#334155] to-[#0f172a] text-white py-20 overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-start gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-right"
        >
          <h2 className="text-xl md:text-3xl font-bold mb-6">
            شراكة استراتيجية مع{" "}
            <span className="text-blue-400">CEI الإيطالية</span>
          </h2>

          <p className="text-md text-gray-200 leading-relaxed mb-6 text-justify">
            نفخر بتعاوننا مع شركة{" "}
            <span className="font-semibold text-blue-300">CEI</span> الإيطالية،
            الرائدة في تصنيع وتوريد قطع غيار نواقل الحركة للشاحنات والمركبات
            الثقيلة. تأسست CEI عام 1969 في مدينة بولونيا، وتشتهر بجودة منتجاتها
            التي تحمل علامة{" "}
            <strong className="text-white">Made in Italy</strong> وتطابقها مع
            معايير القطع الأصلية.
          </p>

          <p className="text-md text-gray-200 leading-relaxed mb-8 text-justify">
            بفضل هذه الشراكة، نوفّر لعملائنا في ليبيا مجموعة واسعة من القطع
            الأصلية والبديلة عالية الجودة، مع ضمان الأداء الممتاز والسعر
            التنافسي. إن تعاوننا مع CEI يعكس التزامنا بتقديم الأفضل في عالم قطع
            الغيار الثقيلة.
          </p>

          <p className="text-md text-gray-200 leading-relaxed mb-8 text-justify">
            تمتد هذه الشراكة لتشمل التبادل الفني والمعرفي لضمان تقديم أحدث
            الحلول والتقنيات في مجال نواقل الحركة. نعمل جنبًا إلى جنب مع{" "}
            <span className="font-semibold text-blue-300">CEI</span> لتطوير
            خدماتنا وتحسين تجربة العملاء، مما يعزز مكانتنا كموزع معتمد وموثوق
            لمنتجات تحمل الجودة الإيطالية الأصيلة.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            viewport={{ once: true, amount: 0.2 }}
            href="https://www.cei.it"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full shadow-lg transition"
          >
            تعرف على CEI
          </motion.a>
        </motion.div>

        {/* الصور */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex flex-col items-center gap-4"
        >
          {/* الصورة الكبيرة */}
          <Image
            src="/images/cei.png"
            alt="شراكتنا مع CEI"
            width={800}
            height={600}
            className="rounded-2xl shadow-2xl object-contain bg-white/5 backdrop-blur-sm p-4 w-full"
          />

          {/* الصورتان الصغيرتان */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <Image
              src="/images/cei-factory.jpg"
              alt="مصنع CEI"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg object-cover bg-white/5 backdrop-blur-sm p-2 w-full h-48 md:h-56"
            />
            <Image
              src="/images/cei-parts.jpg"
              alt="منتجات CEI"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg object-cover bg-white/5 backdrop-blur-sm p-2 w-full h-48 md:h-56"
            />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-4 text-center"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partnership;
