"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { Post } from "@/lib/models";
import { getServerImage } from "@/lib/utils";
import Loading from "@/components/loading";
import { motion } from "framer-motion";

const SinglePost = () => {
  const { id } = useParams();

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery<Post>({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await api.get(`/posts/${id}`);
      return response.data;
    },
    enabled: !!id,
  });

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-center text-red-500 py-10">
        فشل تحميل المقال: {(error as Error).message}
      </div>
    );

  if (!post) return <div className="text-center py-10">المقال غير موجود</div>;

  return (
    <section
      dir="rtl"
      className="min-h-screen bg-liner-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-black py-16"
    >
      <div className="container mx-auto px-5 md:px-10 max-w-4xl">
        {post.images && post.images[0] && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video mb-10 rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={getServerImage(post.images[0])}
              alt={post.title}
              className="object-cover"
            />
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          {post.title}
        </motion.h1>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1 }}
                className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg dark:prose-invert max-w-none leading-loose text-gray-800 dark:text-gray-200"
          dangerouslySetInnerHTML={{ __html: post.body || "" }}
        />
      </div>
    </section>
  );
};

export default SinglePost;
