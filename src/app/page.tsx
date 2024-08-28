import { ImageCarousel } from "./ui/ImageCarousel/ImageCarousel";
import ProductList from "./ui/product/ProductList";
import Carousel from "./ui/carousel/Carousel";
import { OurBenefitsComponent } from "./ui/OurBenefits/OurBenefits";
import { SectionWrapperComponent } from "./ui/SectionWrapper/SectionWrapper";
import { BannerComponent } from "./ui/Banner/Banner";
import { getBanners } from "./lib/data/getBanners";

export default async function Home() {
  const images = await getBanners();
  return (
    <section className="flex-1 w-full">
      <ImageCarousel images={images}>
        <BannerComponent images={images} />
      </ImageCarousel>

      <SectionWrapperComponent title="Mas Vendidos">
        <Carousel>
          <ProductList />
        </Carousel>
      </SectionWrapperComponent>

      <SectionWrapperComponent title="Nuestros Beneficios">
        <OurBenefitsComponent />
      </SectionWrapperComponent>
    </section>
  );
}
