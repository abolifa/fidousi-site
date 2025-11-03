"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Post } from "@/lib/models";
import { cn, getServerImage } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

interface LatestPostsProps {
  posts: Post[];
}

const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
  if (!posts?.length) return null;

  return (
    <div
      dir="rtl"
      className="relative bg-white text-gray-900 py-20 overflow-hidden"
    >
      {/* خلفية خفيفة */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('/images/metal-pattern.png')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          أحدث <span className="text-blue-600">المقالات</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="bg-white border rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] overflow-hidden transition-all flex flex-col"
            >
              {/* صورة المقال */}
              {post.images?.[0] && (
                <div className="relative h-56 md:h-64 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  <motion.img
                    src={getServerImage(post.images[0])}
                    alt={post.title}
                    className="object-contain h-full w-full p-4 transition-transform duration-700 hover:scale-105"
                  />
                </div>
              )}

              {/* المحتوى */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-blue-700 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {post.body
                      ? post.body.replace(/<[^>]+>/g, "").slice(0, 120) + "..."
                      : "تعرف على أحدث المعلومات والمنتجات من شركتنا."}
                  </p>
                </div>

                <div className="mt-auto pt-2">
                  <Link href={`/posts/${post.id}`}>اقرأ المزيد...</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Link
          href="/posts"
          className="mt-5 flex bg-blue-600 p-2 text-white rounded-lg px-5 z-50"
        >
          عرض جميع المقالات
        </Link>
      </div>
    </div>
  );
};

export default LatestPosts;
