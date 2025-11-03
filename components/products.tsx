"use client";

import { Product } from "@/lib/models";
import { getServerImage } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <div
      dir="rtl"
      className="relative bg-white text-gray-800 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="w-full h-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          منتجاتنا <span className="text-blue-600">المميزة</span>
        </motion.h2>

        {/* شبكة المنتجات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: product.id * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group border rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
              >
                <div className="relative h-56 md:h-72 overflow-hidden">
                  <img
                    src={getServerImage(product.main_image ?? "")}
                    alt={product.name}
                    className="object-cover group-hover:scale-110 transition-transform duration-700 border-b shadow-md"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html:
                        product.description ?? "<p>لا توجد تفاصيل متاحة</p>",
                    }}
                  ></p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-3 rounded-full shadow-md transition-all duration-300"
          >
            عرض جميع المنتجات
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
