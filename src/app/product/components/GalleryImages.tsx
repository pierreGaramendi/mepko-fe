"use client";
import Image from "next/image";
import React, { useState } from "react";

interface GalleryProps {
  images: string[];
}

export const GalleryIamges: React.FC<GalleryProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState<string>(images[0]);

  return (
    <div className="gallery flex flex-col w-full">
      <Image src={mainImage} className="h-full w-full rounded-lg" alt={`Slide ${mainImage}`} width={851} height={929}/>
      <div className="flex gap-3 mt-2">
        {images.map((image: string, index) => (
          <img
            key={index}
            src={image}
            alt={image}
            className={`cursor-pointer rounded-lg w-28 border-4 aspect-square ${mainImage === image ? "border-indigo-600" : ""}`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};
