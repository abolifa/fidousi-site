"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
} from "lucide-react";

const Footer = () => {
  const links = [
    { href: "#home", label: "الصفحة الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#products", label: "المنتجات" },
    { href: "#contact", label: "تواصل معنا" },
    { href: "#blog", label: "المدونة" },
  ];

  return (
    <footer
      dir="rtl"
      className="relative bg-linear-to-l from-[#0f172a] via-[#1e293b] to-[#334155] text-white pt-16 pb-8 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('/images/metal-pattern.png')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/app-logo-gold.png"
            alt="Alfirdousi Logo"
            className="h-14 w-auto mb-4"
          />
          <p className="text-gray-300 text-xs leading-relaxed mb-4 text-justify">
            شركة متخصصة في استيراد وبيع قطع غيار نواقل الحركة للشاحنات والمركبات
            الثقيلة. نلتزم بتقديم منتجات أصلية وموثوقة من أبرز المصانع العالمية.
          </p>
          <div className="flex items-center gap-3 mt-4 justify-center">
            {[
              {
                icon: Facebook,
                href: "https://www.facebook.com/profile.php?id=100086911845116",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/fardousi_trading_company",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/osama-fardousi-882038210",
              },
              { icon: Globe, href: "https://www.cei.it/" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-600 transition p-2 rounded-full"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h4 className="text-base font-semibold mb-4 text-blue-400">
            روابط سريعة
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {links.map(({ href, label }, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>

                <a
                  href={href}
                  className="hover:text-blue-400 transition hover:underline hover:underline-offset-2"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h4 className="text-base font-semibold mb-4 text-blue-400">
            معلومات التواصل
          </h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-blue-400" />
              <span>منطقة كرزاز، مصراتة، ليبيا</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />
              <a
                href="tel:+218917317311"
                className="hover:text-blue-400 transition"
                dir="ltr"
              >
                +218 91 731 7311
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />
              <a
                href="tel:+218917317311"
                className="hover:text-blue-400 transition"
                dir="ltr"
              >
                +218 92 517 4096
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              <a
                href="mailto:oso_zf85@yahoo.com"
                className="hover:text-blue-400 transition"
              >
                oso_zf85@yahoo.com
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h4 className="text-base font-semibold mb-4 text-blue-400">
            اشترك في النشرة البريدية
          </h4>
          <p className="text-gray-300 text-xs mb-4">
            كن أول من يعرف عن العروض والمنتجات.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 rounded-lg p-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-medium text-white transition text-xs"
            >
              اشتراك
            </button>
          </form>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} شركة الفردوسي التجارية — جميع الحقوق
          محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
