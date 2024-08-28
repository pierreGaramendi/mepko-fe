import { getProduct } from "@/app/lib/data/getProduct";
import { ShopControls } from "./ShopControls";
import { GalleryIamges } from "../../components/GalleryImages";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const product: any = await getProduct(id);
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
  const product: any = await getProduct(id);
  return (
    <>
      <div className="flex space-x-10">
        <GalleryIamges images={product.images}></GalleryIamges>
        {/*         <div className="product-image w-full">
          <Image src={product.images[0]} className="w-full rounded-lg" alt={`Slide ${product.name}`} width={1000} height={760} />
          <div className="flex space-x-2 mt-4">
            <img src={product.images[1]} alt="Red" className="w-16 h-16 rounded-lg cursor-pointer" />
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_2X_671091-MLA70401570305_072023-F.webp"
              alt="Green"
              className="w-16 h-16 rounded-lg cursor-pointer"
            />
          </div>
        </div> */}

        <div className="product-info w-full">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          {/* <p className="text-gray-600 mt-2">{product.description}</p> */}
          <div className="mt-2">
            <span className="text-3xl font-semibold">S/{' '}{product.price}</span>
            <p className="text-sm text-indigo-700 mt-2 cursor-pointer">Ver los medios de pago</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-700 font-semibold mt-2">Llega gratis el lunes</p>
            <p className="text-sm text-indigo-700 cursor-pointer mt-2">Más formas de entrega</p>
          </div>
          <div className="mt-4 text-sm">
            <p className="text-lime-600 font-semibold"> Disponibilidad: Quedan {product.stock} en stock</p>
          </div>
          <ShopControls maxCount={product.stock}></ShopControls>
        </div>
      </div>
      <div className="w-full pt-10">
        <div className="text-xl font-semibold">Características del producto</div>
        <br />
        <p>
          Sony, marca líder a nivel mundial en el ámbito de la fotografía, fabrica productos de alta performance, sin descuidar la
          elegancia en sus diseños.
        </p>
        <p>
          Fotos en todo momento Esta cámara se adapta a tu ritmo de vida y te ofrece excelentes resultados en situaciones
          complejas. En situaciones con poca iluminación o cuando necesitas realizar tomas de escenas rápidas, la cámara sin
          espejos sortea todos los obstáculos para ofrecer fotografías nítidas y videos en alta calidad. Su peso ligero y
          resultados increíbles la convierten en tu compañera ideal. Fotos profesionales de noche y de día Con el sensor CMOS la
          digitalización de las imágenes se realiza de manera interna, con gran rapidez y mediante transmisores más pequeños.
          Además, cuenta con una gran ventaja, el sensor es más sensible a la luz por lo que en condiciones de baja iluminación,
          obtienes excelentes tomas.
        </p>
        <br />
        <p>
          Dinamismo en tus fotografías Con la gran velocidad de obturación de tu cámara podrás congelar cualquier movimiento en
          milésimas de segundo, desde una gota que cae hasta un auto de fórmula 1. Por el contrario, con la velocidad de
          obturación lenta podrás captar movimientos casi imperceptibles como las luces de la ciudad o de las estrellas en la
          noche. Diviértete jugando con tu cámara y obtén fotografías con gran dinamismo. Domina tu cámara y conviértete en
          profesional Con tu cámara puedes enfocar manualmente objetos cercanos para asegurar nitidez y destacar unos sobre otros
          para conseguir fotos artísticas y profesionales. A su vez, con el modo autofoco lograrás fotografías espontáneas en
          cualquier momento y lugar. Alcanza el objetivo Logra la toma que quieras con el zoom óptico de 2x sin perder claridad ni
          calidad de la imagen. Experimenta acercando el objetivo e inmortaliza los detalles.
        </p>
      </div>
    </>
  );
}
