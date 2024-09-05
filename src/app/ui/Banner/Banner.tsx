import Link from "next/link";
import Image from "next/image";
interface ImageCarouselProps {
  images: IBannerImage[];
}

interface IBannerImage {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export function BannerComponent({ images = [] }: ImageCarouselProps) {
  return (
    <>
      {images.map((image: any, index: number) => (
        <Link key={index} href={image.linkUrl} className="flex-none w-full">
          <Image
            src={image.imageUrl}
            className="w-full aspect-[16/9] max-h-[400px] object-fill"
            alt={`${image.description}`}
            width={2000}
            height={400}
            priority
          />
        </Link>
      ))}
    </>
  );
}
