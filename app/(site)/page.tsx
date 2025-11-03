"use client";

import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";
import LatestPosts from "@/components/latest-posts";
import MainSlider from "@/components/main-slider";
import Partnership from "@/components/partnership";
import FeaturedProducts from "@/components/products";
import ScrollToTop from "@/components/scroll-to-top";
import SectionWidget from "@/components/section";
import { Skeleton } from "@/components/ui/skeleton";
import api from "@/lib/api";
import { HomeData } from "@/lib/models";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

const Home = () => {
  const { data, isLoading, isError, error } = useQuery<HomeData>({
    queryKey: ["home-data"],
    queryFn: async () => {
      const res = await api.get("/sys-home");
      return res.data;
    },
  });

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center">
          <Loader className="animate-spin" size={30} />
        </div>
      ) : isError ? (
        <div>Error: {(error as Error).message}</div>
      ) : (
        <div className="w-full flex flex-col gap-0">
          <section id="home">
            <MainSlider sliders={data?.sliders ?? []} />
          </section>

          <section id="about">
            <AboutUs />
          </section>

          <section id="partnership">
            <Partnership />
          </section>

          <section id="products">
            <FeaturedProducts products={data?.products ?? []} />
          </section>

          <section id="contact">
            <Contact />
          </section>

          <section id="blog">
            <LatestPosts posts={data?.posts ?? []} />
          </section>

          {data?.sections !== undefined && data?.sections.length > 0 && (
            <>
              {data?.sections.map((section) => (
                <SectionWidget key={section.id} section={section} />
              ))}
            </>
          )}

          <ScrollToTop />
        </div>
      )}
    </>
  );
};

export default Home;
