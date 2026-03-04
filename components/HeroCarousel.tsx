'use client';

import { useEffect, useState } from 'react';

const images = [
  '/images/1.jpeg',
  '/images/3.jpeg',
  '/images/j.jpeg',
];

export default function HeroCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const showImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Image Gallery Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ perspective: '1000px' }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Company ${index + 1}`}
            className={`hero-image object-cover ${currentImage === index ? 'hero-image-active' : ''}`}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`image-dot w-2 h-2 rounded-full transition-colors duration-300 shadow-sm ${
              currentImage === index ? 'bg-white/90 active' : 'bg-white/40'
            } hover:bg-white`}
            onClick={() => showImage(index)}
            aria-label={`Show image ${index + 1}`}
            style={{ padding: 0, margin: '0 10px', minWidth: '4px', minHeight: '4px' }}
          />
        ))}
      </div>
    </div>
  );
}
