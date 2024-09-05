import ProductList from "./ui/product/ProductList";
import Carousel from "./ui/carousel/Carousel";
import { OurBenefitsComponent } from "./ui/OurBenefits/OurBenefits";
import { SectionWrapperComponent } from "./ui/SectionWrapper/SectionWrapper";
import { Suspense } from "react";
import { BannerSkeleton } from "./ui/skeleton/banner-skeleton/BannerSkeleton";
import { CarouselBannerComponent } from "./ui/CarouselBanner/CarouselBannerComponent";
import { ImageCarouselSkeleton } from "./ui/ImageCarousel/ImageCarouselSkeleton";

export default async function Home() {
  return (
    <section className="flex-1 w-full">
      <Suspense fallback={<ImageCarouselSkeleton />}>
        <CarouselBannerComponent />
      </Suspense>
      <SectionWrapperComponent title="Mas Vendidos">
        <Carousel>
          <Suspense fallback={<BannerSkeleton />}>
            <ProductList />
          </Suspense>
        </Carousel>
      </SectionWrapperComponent>

      <SectionWrapperComponent title="Nuestros Beneficios">
        <OurBenefitsComponent />
      </SectionWrapperComponent>
    </section>
  );
}
