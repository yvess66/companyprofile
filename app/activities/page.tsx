"use client";

import { motion } from "framer-motion";

export default function ActivitiesPage() {
  // Daftar foto kegiatan - ganti path di sini untuk upload foto baru
  const activities = [
    { id: 1, image: "/images/al.jpeg", title: "Instalasi CCTV Area Operasional" },
    { id: 2, image: "/images/b.jpeg", title: "Implementasi Sistem Monitoring" },
    { id: 3, image: "/images/13.jpeg", title: "Upgrade Perangkat Infrastruktur" },
    { id: 4, image: "/images/c.jpeg", title: "Pemeliharaan Berkala Site Client" },
    { id: 5, image: "/images/al.jpeg", title: "Training Teknisi IT" },
    { id: 6, image: "/images/b.jpeg", title: "Survey Lokasi Client Baru" },
  ];

  const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easing },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Activities
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto">
            Dokumentasi kegiatan dan project yang telah kami lakukan
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activities.map((activity) => (
            <motion.article
              key={activity.id}
              variants={fadeInUp}
              className="group relative rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg leading-snug">
                  {activity.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
         
        </motion.div>
      </div>
    </main>
  );
}
