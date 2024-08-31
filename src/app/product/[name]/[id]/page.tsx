import { getProduct } from "@/app/lib/data/getProduct";
import { ShopControls } from "../../components/ShopControls";
import { GalleryIamges } from "../../components/GalleryImages";
import { IProduct } from "@/models/product.model";
import { FeaturesProduct } from "../../components/FeaturesProduct";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const product: IProduct = await getProduct(id);
    if (!product) {
      return {
        title: "Producto no encontrado",
      };
    }
    return {
      title: `${product.name} | Tu Ecommerce`,
      description: product.description,
    };
  } catch (error) {
    console.error("Database Error:", error);
    return { message: "Database Error: Failed to Delete Invoice" };
  }
}

export default async function ProductPage({ params }: { params: { name: string; id: string } }) {
  const { id } = params;
  const product: IProduct = await getProduct(id);
  return (
    <>
      <div className="flex space-x-10">
        <GalleryIamges images={product.images}></GalleryIamges>
        <div className="product-info w-2/5">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 text-sm mt-2 hidden lg:block">{product.description}</p>
          <div className="mt-2">
            <span className="text-3xl font-semibold">S/ {product.price}</span>
            <p className="text-sm text-indigo-700 mt-2 cursor-pointer">Ver los medios de pago</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-700 font-semibold mt-2">Llega gratis el lunes</p>
            <p className="text-sm text-indigo-700 cursor-pointer mt-2">Más formas de entrega</p>
          </div>
          <div className="mt-4 text-sm">
            <p className="text-lime-600 font-semibold"> Disponibilidad: Quedan {product.stock} en stock</p>
          </div>
          <ShopControls maxCount={product.stock} productId={product._id}></ShopControls>
        </div>
      </div>
      <div className="w-full pt-10">
        <div className="text-xl font-semibold mb-4">Características del producto</div>
        <FeaturesProduct content={product.features}></FeaturesProduct>
      </div>
    </>
  );
}
