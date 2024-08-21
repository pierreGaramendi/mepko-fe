"use client";
import React, { useState, useEffect, useCallback, ReactNode } from "react";
import "./ImageCarousel.css";
import { BannerComponent } from "../Banner/Banner";

interface ImageCarouselProps {
  images: string[];
  autoChangeInterval?: number;
  children: ReactNode;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ children, images, autoChangeInterval = 10000 }) => {
  console.log("ImageCarousel",images)
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
    <div className="carousel">
      <div className="carousel-inner">
        <div
          className="slides-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.3s ease-in-out" : "none",
          }}
        >
          {/*           {images.map((image, index) => (
            <Image key={index} src={image} className="slide" alt={`Slide ${index}`} width={1000} height={760} />
          ))} */}

          {children}
        </div>
        <button className="left-arrow" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="right-arrow" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      <div className="dots">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`dot ${currentIndex === slideIndex ? "active" : ""}`}
            onClick={() => goToSlide(slideIndex)}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
};
