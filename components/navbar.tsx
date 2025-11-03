"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "#about" },
    { label: "المنتجات", href: "#products" },
    { label: "شركاؤنا", href: "#partnership" },
    { label: "المقالات", href: "#blog" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
      }
    }
  };

  return (
    <div dir="rtl" className="w-full border-b bg-white dark:bg-zinc-900">
      <header className="w-full h-20 container mx-auto flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={200}
            height={40}
            className="object-contain h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }, i) => (
            <Link
              key={i}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 transition text-sm"
            >
              {label}
            </Link>
          ))}

          <a
            href="mailto:oso_zf85@yahoo.com"
            className="hover:text-blue-400 transition flex items-center gap-2"
          >
            <span className="text-blue-600 underline underline-offset-2 text-sm">
              oso_zf85@yahoo.com
            </span>
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 shadow-sm"
          >
            <ul className="flex flex-col items-center gap-4 py-5">
              {navLinks.map(({ label, href }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    className="block text-gray-800 dark:text-gray-200 text-base font-medium hover:text-blue-600 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex justify-center pb-5">
              <a
                href="mailto:oso_zf85@yahoo.com"
                className="hover:text-blue-400 transition flex items-center gap-2"
              >
                <Mail size={20} />
                <span className="text-blue-600 underline underline-offset-2 text-sm">
                  oso_zf85@yahoo.com
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
