"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { Product } from "@/lib/models";
import { getServerImage } from "@/lib/utils";
import Loading from "@/components/loading";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleProduct = () => {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await api.get(`/products/${id}`);
      return response.data;
    },
    enabled: !!id,
  });

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-center text-red-500 py-10">
        خطأ في تحميل المنتج: {(error as Error).message}
      </div>
    );

  if (!product)
    return <div className="text-center py-10">لم يتم العثور على المنتج</div>;

  return (
    <section
      dir="rtl"
      className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-black py-16"
    >
      <div className="container mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-10 items-start">
        {/* صورة المنتج */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-lg bg-white dark:bg-zinc-900"
        >
          {product.main_image ? (
            <img
              src={getServerImage(product.main_image)}
              alt={product.name}
              width={800}
              height={800}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex items-center justify-center h-96 bg-gray-100 dark:bg-zinc-800 text-gray-400">
              لا توجد صورة
            </div>
          )}
        </motion.div>

        {/* معلومات المنتج */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            {product.name}
          </h1>

          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {product.description && (
            <p
              className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-justify"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></p>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-8 rounded-xl shadow-md transition-colors duration-300"
          >
            اطلب الآن
          </motion.button>
        </motion.div>
      </div>

      {/* معرض الصور الإضافية */}
      {product.images && product.images.length > 0 && (
        <div className="container mx-auto px-4 md:px-10 mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            صور إضافية
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {product.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow border"
              >
                <img
                  src={getServerImage(img)}
                  alt={`صورة ${i + 1}`}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleProduct;
