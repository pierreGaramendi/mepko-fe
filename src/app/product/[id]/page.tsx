import { getProduct } from "@/app/lib/data/getProduct";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product: any = await getProduct(params.id);
  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }
  return {
    title: `${product.name} | Tu Ecommerce`,
    description: product.description,
  };
}

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product: any = await getProduct(id);
  let color = "red";
  return (
    <>
      <div className="flex space-x-10">
        <div className="product-image w-full">
          <Image src={product.images[0]} className="w-full rounded-lg" alt={`Slide ${product.name}`} width={1000} height={760} />
          <div className="flex space-x-2 mt-4">
            <img src={product.images[1]} alt="Red" className="w-16 h-16 rounded-lg cursor-pointer" />
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_2X_671091-MLA70401570305_072023-F.webp"
              alt="Green"
              className="w-16 h-16 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        <div className="product-info w-full">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <div className="mt-4">
            <span className="text-green-600 text-xl font-semibold">${product.price}</span>
            <p className="text-sm text-gray-500 mt-1">Suggested payments with 6 months special financing</p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-700">Choose a Color</p>
            <div className="flex space-x-2 mt-2">
              <span
                style={{ minWidth: "30px", minHeight: "30px" }}
                className={`color-option rounded-full bg-red-500 ring-2 ring-green-600`}
              />
              <span className={`color-option bg-green-500 ${color === "green" ? "ring-2 ring-green-600" : ""}`} />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-4">
              <button className="border px-4 py-2 rounded">-</button>
              <span>3</span>
              <button className="border px-4 py-2 rounded">+</button>
            </div>
            <p className="text-sm text-red-600 mt-2">Only 12 Items Left! Don’t miss it</p>
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded">Personaliza tu producto</button>
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded">Buy Now</button>
            <button className="border px-6 py-3 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="w-full pt-10">
        <div className="text-xl">Características del producto</div>
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
