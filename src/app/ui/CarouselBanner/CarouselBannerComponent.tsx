import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import { BannerComponent } from "../Banner/Banner";
import { getBanners } from "@/app/lib/data/getBanners";

export const CarouselBannerComponent = async () => {
  const images = await getBanners();
  return (
    <ImageCarousel images={images}>
      <BannerComponent images={images} />
    </ImageCarousel>
  );
};
