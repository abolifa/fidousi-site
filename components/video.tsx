"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-white dark:bg-zinc-900 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <div className="relative w-full h-[100vh] md:h-[70vh] bg-blue-800 overflow-hidden">
          <video
            ref={ref}
            playsInline
            muted
            loop
            autoPlay={visible}
            preload="none"
            src={visible ? "/videos/zf.mp4" : undefined}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
