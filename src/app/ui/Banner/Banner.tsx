import Link from "next/link";
import styles from "./Banner.module.css";
import Image from "next/image";
interface ImageCarouselProps {
  images: any[];
}

export async function BannerComponent({ images = [] }: ImageCarouselProps) {
  return (
    <>
      {images.map((image: any, index: number) => (
        <Link href={image.linkUrl} className={`${styles.slide}`}>
          <Image
            key={index}
            src={image.imageUrl}
            className={`${styles.slide}`}
            alt={`Slide ${index}`}
            width={1000}
            height={760}
          />
        </Link>
      ))}
    </>
  );
}
