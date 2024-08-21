import { ImageCarousel } from "./ui/ImageCarousel/ImageCarousel";
import ProductList from "./ui/product/ProductList";
import Carousel from "./ui/product/Carousel";
import { OurBenefitsComponent } from "./ui/OurBenefits/OurBenefits";
import { SectionWrapperComponent } from "./ui/SectionWrapper/SectionWrapper";
import { BannerComponent } from "./ui/Banner/Banner";

export default async function Home() {
  const images = await fetch("http://localhost:3666/banners",{ cache: 'force-cache' }).then((res) => res.json());
  const products = [
    {
      id: 1,
      name: "Producto 1",
      image: "https://http2.mlstatic.com/D_Q_NP_2X_810260-MLU71048148370_082023-AD.webp",
      price: 19.99,
    },
    {
      id: 2,
      name: "Producto 2",
      image: "https://http2.mlstatic.com/D_Q_NP_2X_810260-MLU71048148370_082023-AD.webp",
      price: 19.99,
    },
    {
      id: 3,
      name: "Producto 3",
      image: "https://http2.mlstatic.com/D_Q_NP_2X_810260-MLU71048148370_082023-AD.webp",
      price: 19.99,
    },
    {
      id: 4,
      name: "Producto 4",
      image: "https://http2.mlstatic.com/D_Q_NP_2X_810260-MLU71048148370_082023-AD.webp",
      price: 19.99,
    },
    {
      id: 5,
      name: "Producto 5",
      image: "https://http2.mlstatic.com/D_Q_NP_2X_810260-MLU71048148370_082023-AD.webp",
      price: 19.99,
    },
    {
      id: 6,
      name: "Producto 6",
      image: "https://http2.mlstatic.com/D_Q_NP_2X_810260-MLU71048148370_082023-AD.webp",
      price: 19.99,
    },
    {
      id: 7,
      name: "Producto 7",
      image: "https://http2.mlstatic.com/D_Q_NP_2X_810260-MLU71048148370_082023-AD.webp",
      price: 19.99,
    },
    {
      id: 8,
      name: "Producto 8",
      image: "https://http2.mlstatic.com/D_Q_NP_2X_810260-MLU71048148370_082023-AD.webp",
      price: 19.99,
    },
  ];

  return (
    <section className="flex-1 w-full">
      <ImageCarousel images={images}>
        <BannerComponent images={images}/>
      </ImageCarousel>

      <SectionWrapperComponent title="Mas Vendidos">
        <Carousel>
          <ProductList products={products} />
        </Carousel>
      </SectionWrapperComponent>

      <SectionWrapperComponent title="Nuestros Beneficios">
        <OurBenefitsComponent />
      </SectionWrapperComponent>
    </section>
  );
}
