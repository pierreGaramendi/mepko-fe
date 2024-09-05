"use client";
import React, { useState, useEffect, useCallback, ReactNode } from "react";

interface ImageCarouselProps {
  images: string[];
  autoChangeInterval?: number;
  children: ReactNode;
}

function isNotAnArray(variable: any) {
  return !Array.isArray(variable);
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ children, images, autoChangeInterval = 10000 }) => {
  if (isNotAnArray(images)) {
    images = [];
  }
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const goToNext = useCallback((): void => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const goToPrevious = (): void => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (slideIndex: number): void => {
    if (slideIndex !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(slideIndex);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const autoChangeTimer = setInterval(goToNext, autoChangeInterval);
    return () => clearInterval(autoChangeTimer);
  }, [goToNext, autoChangeInterval]);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="relative">
        <div
          className="flex w-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.3s ease-in-out" : "none",
          }}
        >
          {children}
        </div>
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 border-none cursor-pointer z-10 rounded-lg"
          onClick={goToPrevious}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 border-none cursor-pointer z-10 rounded-lg"
          onClick={goToNext}
        >
          &#10095;
        </button>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center z-10">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`cursor-pointer mx-1 text-2xl transition-colors duration-300 ease-in-out ${
              currentIndex === slideIndex ? "text-white" : "text-white opacity-60"
            }`}
            onClick={() => goToSlide(slideIndex)}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
};
