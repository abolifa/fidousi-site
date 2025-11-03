"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building2, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div
      dir="rtl"
      className="relative bg-linear-to-b from-gray-50 via-white to-gray-100 text-gray-800 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-light.png')] bg-cover bg-center" />
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-blue-600"
        >
          تواصل معنا
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-2xl p-10 shadow-xl space-y-6 border border-gray-200 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                معلومات الاتصال
              </h3>
              <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <span>شركة الفردوسي لقطع غيار الشاحنات</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <span>المنطقة الصناعية، مصراتة - ليبيا</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <span dir="ltr">+218 91 234 5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <span>info@alfirdousi.ly</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <span>السبت - الخميس: 8 ص إلى 6 م</span>
                </div>
              </div>
            </div>
            <p className="pt-4 text-gray-500 text-sm">
              يسعدنا تواصلك معنا للاستفسار عن المنتجات أو الشحن أو التعاون
              التجاري.
            </p>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-2xl shadow-xl p-10 space-y-6 border border-gray-200 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                أرسل لنا رسالة
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    الاسم
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="اكتب اسمك الكامل"
                    className="w-full rounded-lg p-3 bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    البريد الإلكتروني
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    placeholder="example@email.com"
                    className="w-full rounded-lg p-3 bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  الموضوع
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="موضوع الرسالة"
                  className="w-full rounded-lg p-3 bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  الرسالة
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  rows={5}
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full rounded-lg p-3 bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></motion.textarea>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition"
            >
              إرسال الرسالة
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
