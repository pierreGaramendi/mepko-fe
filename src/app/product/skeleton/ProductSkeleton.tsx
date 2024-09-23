/* const ProductSkeleton = () => {
  return (
    <>
      <div className="flex space-x-5">
        <div className="gallery flex flex-col w-full">
          <img
            alt="Slide https://picsum.photos/seed/LFmog/851/929"
            loading="lazy"
            width="851"
            height="929"
            decoding="async"
            data-nimg="1"
            className="h-full w-full rounded-lg"
            data-darkreader-inline-color=""
          />
          <div className="flex gap-3 mt-2">
            <img
              src="https://picsum.photos/seed/LFmog/851/929"
              alt="https://picsum.photos/seed/LFmog/851/929"
              className="cursor-pointer rounded-lg w-28 border-4 aspect-square border-indigo-600"
            />
            <img
              src="https://loremflickr.com/851/929?lock=1731061218279424"
              alt="https://loremflickr.com/851/929?lock=1731061218279424"
              className="cursor-pointer rounded-lg w-28 border-4 aspect-square "
            />
            <img
              src="https://loremflickr.com/851/929?lock=3727212142395392"
              alt="https://loremflickr.com/851/929?lock=3727212142395392"
              className="cursor-pointer rounded-lg w-28 border-4 aspect-square "
            />
          </div>
        </div>
        <div className="product-info w-2/5">
          <h1 className="text-3xl font-bold">Nombre del producto</h1>
          <p className="text-gray-600 text-sm mt-2 hidden lg:block">Descripcion del producto</p>
          <div className="mt-2">
            <span className="text-3xl font-semibold">S/ 12</span>
            <p className="text-sm text-indigo-700 mt-2 cursor-pointer">Ver los medios de pago</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-700 font-semibold mt-2">Llega gratis el lunes</p>
            <p className="text-sm text-indigo-700 cursor-pointer mt-2">Más formas de entrega</p>
          </div>
          <div className="mt-4 text-sm">
            <p className="text-lime-600 font-semibold"> Disponibilidad: Quedan 12 en stock</p>
          </div>
          <div className="mt-4">
            <div className="flex flex-col">
              <p className="text-gray-700 text-sm font-medium mt-2">Cantidad</p>
              <div className="flex mt-1">
                <button className="px-4 py-2 rounded-l-lg bg-gray-300 text-indigo-600 font-semibold text-xl">-</button>
                <span className="bg-gray-300 px-4 py-2">1</span>
                <button className="px-4 py-2 rounded-r-lg bg-gray-300 text-indigo-600 font-bold text-xl">+</button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex 2xl:space-x-4 flex-col 2xl:flex-row">
            <button className="btn-primary" type="button" data-headlessui-state="">
              Comprar Ahora
            </button>
            <button className="btn-secondary mt-2 2xl:mt-0" type="button" data-headlessui-state="">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
      <div className="w-full pt-10">
        <div className="text-xl font-semibold mb-4">Características del producto</div>
        <div>
          <p>
            Sony, marca líder a nivel mundial en el ámbito de la fotografía, fabrica productos de alta performance, sin descuidar
            la elegancia en sus diseños.
          </p>
          <br />
          <p>
            Fotos en todo momento Esta cámara se adapta a tu ritmo de vida y te ofrece excelentes resultados en situaciones
            complejas. En situaciones con poca iluminación o cuando necesitas realizar tomas de escenas rápidas, la cámara sin
            espejos sortea todos los obstáculos para ofrecer fotografías nítidas y videos en alta calidad.
          </p>
          <br />
          <p>
            Su peso ligero y resultados increíbles la convierten en tu compañera ideal. Fotos profesionales de noche y de día Con
            el sensor CMOS la digitalización de las imágenes se realiza de manera interna, con gran rapidez y mediante
            transmisores más pequeños. Además, cuenta con una gran ventaja, el sensor es más sensible a la luz por lo que en
            condiciones de baja iluminación, obtienes excelentes tomas.
          </p>
          <br />
          <p>
            Dinamismo en tus fotografías Con la gran velocidad de obturación de tu cámara podrás congelar cualquier movimiento en
            milésimas de segundo, desde una gota que cae hasta un auto de fórmula 1. Por el contrario, con la velocidad de
            obturación lenta podrás captar movimientos casi imperceptibles como las luces de la ciudad o de las estrellas en la
            noche. Diviértete jugando con tu cámara y obtén fotografías con gran dinamismo.
          </p>
          <br />
          <p>
            Domina tu cámara y conviértete en profesional Con tu cámara puedes enfocar manualmente objetos cercanos para asegurar
            nitidez y destacar unos sobre otros para conseguir fotos artísticas y profesionales. A su vez, con el modo autofoco
            lograrás fotografías espontáneas en cualquier momento y lugar. Alcanza el objetivo Logra la toma que quieras con el
            zoom óptico de 2x sin perder claridad ni calidad de la imagen. Experimenta acercando el objetivo e inmortaliza los
            detalles.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductSkeleton;
 */

export const ProductSkeleton = () => {
    return (
      <>
        <div className="flex space-x-5 animate-pulse">
          <div className="gallery flex flex-col w-full">
            <div className="h-full w-full rounded-lg bg-gray-300"></div>
            <div className="flex gap-3 mt-2">
              <div className="cursor-pointer rounded-lg w-28 aspect-square bg-gray-300"></div>
              <div className="cursor-pointer rounded-lg w-28 aspect-square bg-gray-300"></div>
              <div className="cursor-pointer rounded-lg w-28 aspect-square bg-gray-300"></div>
            </div>
          </div>
          <div className="product-info w-2/5">
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded mt-2 w-full"></div>
            <div className="h-4 bg-gray-200 rounded mt-2 w-1/2"></div>
            <div className="mt-4 h-8 bg-gray-300 rounded w-1/4"></div>
            <div className="mt-2 h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="mt-6 h-10 bg-gray-300 rounded w-1/3"></div>
            <div className="mt-4 h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="flex mt-4 gap-2">
              <div className="h-10 bg-gray-300 rounded w-1/4"></div>
              <div className="h-10 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        </div>
        <div className="w-full pt-10 animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </>
    );
  };