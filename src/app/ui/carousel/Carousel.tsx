"use client";
// Carousel.tsx
import React, { ReactNode, useRef } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300 + 20; // width of card + margin
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={`${styles.scrollButton} ${styles.scrollButtonLeft}`} onClick={() => scroll("left")}>
        &#10094;
      </button>
      <div className={styles.carousel} ref={carouselRef}>
        <div style={{ padding: "0", display: "flex" }}>{children}</div>
      </div>
      <button className={`${styles.scrollButton} ${styles.scrollButtonRight}`} onClick={() => scroll("right")}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
