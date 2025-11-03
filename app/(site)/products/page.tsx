"use client";

import Loading from "@/components/loading";
import api from "@/lib/api";
import { Product } from "@/lib/models";
import { getServerImage } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Products = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await api.get("/products");
      return response.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-red-500 text-center py-10">
        خطأ: {(error as Error).message}
      </div>
    );

  return (
    <section
      dir="rtl"
      className="relative min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-black py-20 overflow-hidden"
    >
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute right-0 top-0 w-2/3 h-full bg-linear-to-bl from-blue-300/30 via-transparent to-transparent dark:from-blue-900/10"
        />
      </div>

      <div className="container mx-auto px-5 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-extrabold text-center mb-16 tracking-tight text-gray-900 dark:text-white"
        >
          اكتشف <span className="text-blue-600">منتجاتنا</span> المميزة
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, duration: 0.8 }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products?.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Link
                href={`/products/${product.id}`}
                className="group relative bg-white dark:bg-zinc-900 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-zinc-800 flex flex-col"
              >
                {/* صورة المنتج */}
                <div className="relative aspect-square overflow-hidden">
                  {product.main_image ? (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      <img
                        src={getServerImage(product.main_image)}
                        alt={product.name}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </motion.div>
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-zinc-800 text-gray-400 text-sm">
                      لا توجد صورة
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* محتوى البطاقة */}
                <div className="p-5 flex flex-col grow justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {product.name}
                    </h2>
                    {product.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      عرض التفاصيل
                    </span>
                    <motion.span
                      whileHover={{ x: -4 }}
                      className="text-blue-600 dark:text-blue-400 font-bold text-lg"
                    >
                      ←
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
