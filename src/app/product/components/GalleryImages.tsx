"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Image {
  _id: number;
  src: string;
  alt: string;
}

interface GalleryProps {
  images: string[];
}

export const GalleryIamges: React.FC<GalleryProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState<string>(images[0]);

  return (
    <div className="gallery flex flex-col w-full">
      <Image src={mainImage} className="h-full w-full rounded-lg" alt={`Slide ${mainImage}`} width={760} height={1000} />
      <div className="flex gap-3 mt-1">
        {images.map((image: string, index) => (
          <img
            key={index}
            src={image}
            alt={image}
            className={`cursor-pointer rounded-lg w-28 border-4 ${mainImage === image ? "border-indigo-600" : ""}`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};
