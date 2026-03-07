"use client";

import HeroCarousel from "@/components/HeroCarousel";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const sectionHeight = "calc(100vh - 88px)";
  const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const activityUpdates = [
    {
      image: "/images/al.jpeg",
      title: "Instalasi CCTV Area Operasional",
    },
    {
      image: "/images/b.jpeg",
      title: "Implementasi Sistem Monitoring",
    },
    {
      image: "/images/13.jpeg",
      title: "Upgrade Perangkat Infrastruktur",
    },
    {
      image: "/images/c.jpeg",
      title: "Pemeliharaan Berkala Site Client",
    },
  ];
  const reduceMotion = useReducedMotion();

  const sectionReveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 64,
      scale: reduceMotion ? 1 : 0.985,
      filter: reduceMotion ? "none" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: reduceMotion ? 0.01 : 1.05,
        ease: easing,
      },
    },
    exit: {
      opacity: 0,
      y: reduceMotion ? 0 : -40,
      scale: reduceMotion ? 1 : 0.95,
      filter: reduceMotion ? "none" : "blur(4px)",
      transition: {
        duration: reduceMotion ? 0.01 : 0.6,
        ease: easing,
      },
    },
  };

  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.06,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.7,
        ease: easing,
      },
    },
  };

  return (
    <main className="snap-y snap-mandatory scroll-smooth motion-reduce:scroll-auto">
      <motion.section
        className="snap-start w-full relative overflow-hidden"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        style={{ height: sectionHeight }}
      >
        <div className="absolute inset-0">
          <HeroCarousel />
        </div>

        <motion.div
          className="relative z-10 h-full flex items-center justify-center"
          variants={textContainer}
        >
          {/* Optional content overlay */}
        </motion.div>
      </motion.section>

      <motion.section
        className="snap-start w-full relative overflow-hidden"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.35 }}
        style={{ height: sectionHeight }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/e.jpeg"
            alt="About Us Background"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          className="relative z-10 h-full flex items-center"
          variants={textContainer}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div variants={textItem} className="order-2 md:order-1">
                <img
                  src="/images/about-us.jpg"
                  alt="About Us"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
              <div className="order-1 md:order-2">
                <motion.h2 variants={textItem} className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  About Us
                </motion.h2>
                <motion.p variants={textItem} className="text-white/80 leading-relaxed text-lg sm:text-xl">
                  PT Sidik Mitra Sejahtera is a company engaged in information technology and system integration. Established in 2021, we are part of PT Anugerah Bintang Sejahtera, a trusted contractor company established in 2006.
                </motion.p>
                <motion.div variants={textItem} className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-lg bg-transparent px-6 py-3 text-white font-semibold transition hover:bg-white/10"
                  >
                    Learn More
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="snap-start w-full relative overflow-hidden"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        style={{ height: sectionHeight }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/13.jpeg"
            className="w-full h-full object-cover"
            alt="Activity Background"
          />
        </div>

        <motion.div className="relative z-10 h-full overflow-hidden" variants={textContainer}>
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 h-full flex flex-col">
            <motion.h2 variants={textItem} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
              Activity Section
            </motion.h2>
            <motion.p variants={textItem} className="text-white/80 text-base sm:text-lg lg:text-xl max-w-3xl mb-6 sm:mb-8" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
              Update kegiatan yang sedang berjalan dan yang sudah selesai.
            </motion.p>

            <motion.div variants={textItem} className="flex-1 overflow-y-scroll sm:overflow-visible pr-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 pb-2 sm:pb-0">
                {activityUpdates.map((activity) => (
                  <Link
                    key={activity.title}
                    href="/activities"
                    className="block rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition"
                  >
                    <img src={activity.image} alt={activity.title} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <h3 className="text-white font-semibold leading-snug">{activity.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
