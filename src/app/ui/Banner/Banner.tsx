import styles from "./Banner.module.css";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

export async function BannerComponent({ images = [] }: ImageCarouselProps) {
  const imagesLocal = await fetch("http://localhost:3666/banners", { cache: "force-cache" }).then((res) => res.json());
  console.log("BannerComponent==============", imagesLocal);
  return (
    <>
      {images.map((image: any, index: number) => (
        <Image key={index} src={image.imageUrl} className={`${styles.slide}`} alt={`Slide ${index}`} width={1000} height={760} />
      ))}
    </>
  );
}
