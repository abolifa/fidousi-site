"use client";

import Loading from "@/components/loading";
import api from "@/lib/api";
import { Post } from "@/lib/models";
import { getServerImage } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Posts = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await api.get("/posts");
      return response.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-center text-red-500 py-10">
        خطأ في تحميل المقالات: {(error as Error).message}
      </div>
    );

  return (
    <motion.section
      dir="rtl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-black py-20 overflow-hidden"
    >
      <div className="container mx-auto px-5 md:px-10">
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-4xl font-extrabold text-center mb-16 tracking-tight text-gray-900 dark:text-white"
        >
          مقالات <span className="text-blue-600">ومواضيع</span>
        </motion.h1>

        <motion.div
          variants={containerVariants}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts?.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link
                href={`/posts/${post.id}`}
                className="group block bg-white dark:bg-zinc-900 rounded-3xl shadow hover:shadow-xl overflow-hidden border border-gray-100 dark:border-zinc-800 transition-all duration-500"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  {post.images && post.images[0] ? (
                    <img
                      src={getServerImage(post.images[0])}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-zinc-800 text-gray-400">
                      لا توجد صورة
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {post.title}
                  </h2>
                  {post.body && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                      {post.body}
                    </p>
                  )}
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      قراءة المزيد
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
    </motion.section>
  );
};

export default Posts;
