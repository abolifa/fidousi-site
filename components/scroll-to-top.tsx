"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.2 }}
      className="fixed bottom-6 left-6 md:left-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-lg z-50"
      aria-label="العودة للأعلى"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};

export default ScrollToTop;
