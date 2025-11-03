"use client";

declare global {
  interface Window {
    google: any;
  }
}

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Contact = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.google) return;

    const map = new window.google.maps.Map(mapRef.current!, {
      center: { lat: 32.306479, lng: 15.113486 },
      zoom: 12,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#1e293b" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#e2e8f0" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#0f172a" }] },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#0f172a" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#334155" }],
        },
      ],
    });

    new window.google.maps.Marker({
      position: { lat: 32.306479, lng: 15.113486 },
      map,
      title: "موقعنا",
    });
  }, []);

  return (
    <div
      dir="rtl"
      className="relative bg-linear-to-l from-[#1e293b] via-[#334155] to-[#0f172a] text-white py-20 overflow-hidden"
    >
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('/images/metal-pattern.png')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12"
        >
          تواصل معنا
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="text-right"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-300">
              موقعنا على الخريطة
            </h3>

            <div
              ref={mapRef}
              className="w-full h-[480px] rounded-2xl shadow-lg overflow-hidden"
            ></div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-300">
              أرسل لنا رسالة
            </h3>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-5">
              <div>
                <label className="block text-sm text-gray-200 mb-2">
                  الاسم
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  viewport={{ once: true, amount: 0.2 }}
                  type="text"
                  placeholder="اكتب اسمك الكامل"
                  className="w-full rounded-lg p-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-200 mb-2">
                  البريد الإلكتروني
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  viewport={{ once: true, amount: 0.2 }}
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-lg p-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-200 mb-2">
                  الرسالة
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  viewport={{ once: true, amount: 0.2 }}
                  rows={4}
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full rounded-lg p-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></motion.textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                viewport={{ once: true, amount: 0.2 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
              >
                إرسال الرسالة
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
