"use client";

import HeroCarousel from "@/components/HeroCarousel";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const activityImages = [
    "/images/index.jpg",
    "/images/index2.png",
    "/images/index3.jpg",
    "/images/index4.jpg",
    "/images/index5.jpg",
  ];
  const activityTrackRef = useRef<HTMLDivElement | null>(null);
  const activitySlideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollActivities = (direction: "left" | "right") => {
    if (!activityTrackRef.current) {
      return;
    }

    const scrollAmount = activityTrackRef.current.clientWidth * 0.9;
    activityTrackRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const track = activityTrackRef.current;
    if (!track) {
      return;
    }

    const updateScrollState = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      setCanScrollLeft(track.scrollLeft > 0);
      setCanScrollRight(track.scrollLeft < maxScrollLeft - 1);
    };

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <>
      <HeroCarousel />

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="animate-fade-in order-2 lg:order-1 flex">
              <div className="relative group w-full">
                <div className="relative rounded-2xl shadow-2xl overflow-hidden h-full">
                  <div
                    ref={activityTrackRef}
                    className="flex gap-0 overflow-x-auto snap-x snap-mandatory scroll-smooth h-full hide-scrollbar"
                  >
                    {activityImages.map((src, index) => (
                      <div
                        key={src}
                        ref={(element) => {
                          activitySlideRefs.current[index] = element;
                        }}
                        className="snap-center shrink-0 w-full h-full"
                      >
                        <img
                          src={src}
                          className="w-full h-full min-h-[14rem] sm:min-h-[16rem] lg:min-h-[18rem] object-cover"
                          alt={`Activity ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollActivities("left")}
                    className={`absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white rounded-full p-2 shadow-lg transition ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    aria-label="Scroll activities left"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollActivities("right")}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white rounded-full p-2 shadow-lg transition ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    aria-label="Scroll activities right"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                
              </div>
            </div>
            <div
              className="hero-card glass-effect rounded-3xl p-6 sm:p-8 transition-all duration-500 animate-fade-in order-1 lg:order-2 h-full"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="mb-5">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">About Us</h3>
              </div>

              <p className="text-white/80 leading-relaxed text-base sm:text-lg mb-5">
                PT Sidik Mitra Sejahtera is a company engaged in information technology and system integration. Established in 2021, we are part of PT Anugerah Bintang Sejahtera, a trusted contractor company established in 2006.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-3 sm:p-4 text-center border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="text-xl sm:text-2xl font-bold text-white">2021</div>
                  <div className="text-white/70 text-xs sm:text-sm">Established</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-3 sm:p-4 text-center border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                  <div className="text-white/70 text-xs sm:text-sm">Projects</div>
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all duration-300 group"
                >
                Learn More
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10 sm:mb-12 animate-slide-up">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                Our Benefits
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
              Why Choose Us?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto px-4">
              Leading solutions with modern technology and professional team
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Innovation Card */}
            <div
              className="hero-card glass-effect rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 animate-fade-in group hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10 border border-white/5 hover:border-white/20"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Technology Innovation</h4>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                Using cutting-edge technology to deliver effective and efficient digital solutions.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-blue-400 text-sm font-semibold">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Quality Card */}
            <div
              className="hero-card glass-effect rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 animate-fade-in group hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 border border-white/5 hover:border-white/20"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Quality Guaranteed</h4>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                High quality standards in every project with thorough and regular testing.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-purple-400 text-sm font-semibold">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div
              className="hero-card glass-effect rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 animate-fade-in group hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-red-500/10 border border-white/5 hover:border-white/20 sm:col-span-2 lg:col-span-1"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.18l1.09 2.3 2.3 1.09L12 6.36l-2.3-1.09L12 2.18zM12 17.64l1.09 2.3 2.3 1.09-2.3 1.09L12 21.82l-1.09-2.3L8.61 18.43l2.3-1.09L12 17.64z"></path>
                </svg>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Support 24/7</h4>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                Professional support team ready to assist you anytime with quick response.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-pink-400 text-sm font-semibold">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
