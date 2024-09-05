const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold title mb-4">Sobre Nosotros</h1>
        <p className="title">Discover the story behind our high-quality, customizable stainless steel bottles.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold title mb-6">Nuestra Historia</h2>
        <p className="mb-6 title">
          Nuestra empresa nació con la idea de ofrecer una alternativa sostenible y personalizada para llevar tus bebidas
          favoritas. Desde nuestros inicios, hemos creído en la importancia de productos que no solo sean funcionales, sino
          también reflejen la personalidad de nuestros clientes.
        </p>
        <img src="ruta-a-imagen.jpg" alt="Nuestra Historia" className="w-full h-auto rounded-lg" />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold title mb-6">Misión y Valores</h2>
        <p className="mb-6">Nuestra misión es crear productos sostenibles que reflejen tu personalidad.</p>
        <div className="flex justify-around mt-6">
          <div className="text-center max-w-xs">
            <img src="https://mui.com/static/images/avatar/1.jpg" alt="Sostenibilidad" className="w-16 h-16 mx-auto mb-4" />
            <p className="subtitle">Sostenibilidad</p>
          </div>
          <div className="text-center max-w-xs">
            <img src="ruta-a-icono-calidad.png" alt="Calidad" className="w-16 h-16 mx-auto mb-4" />
            <p className="subtitle">Calidad</p>
          </div>
          <div className="text-center max-w-xs">
            <img src="ruta-a-icono-personalizacion.png" alt="Personalización" className="w-16 h-16 mx-auto mb-4" />
            <p className="subtitle">Personalización</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold title mb-6">Lo Que Nos Diferencia</h2>
        <p className="mb-6">
          Lo que nos diferencia es nuestro compromiso con la calidad y la personalización. Utilizamos los mejores materiales y
          ofrecemos un proceso de personalización que te permite diseñar tu botella a tu gusto.
        </p>
        <img src="ruta-a-imagen-personalizacion.jpg" alt="Personalización" className="w-full h-auto rounded-lg" />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold title mb-6 text-center">Lo Que Dicen Nuestros Clientes</h2>
        <div className="flex justify-center gap-8">
          <div className="max-w-sm p-6 bg-contrast rounded-lg shadow-md text-center">
            <p className="mb-4">
              "¡Las botellas son increíbles! La calidad es insuperable y me encanta poder personalizar el diseño."
            </p>
            <span className="font-bold text-indigo-600">- Cliente Satisfecho</span>
          </div>
          <div className="max-w-sm p-6 bg-contrast rounded-lg shadow-md text-center">
            <p className="mb-4">"Una excelente opción para un regalo único y especial."</p>
            <span className="font-bold text-indigo-600">- Otro Cliente Satisfecho</span>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold title mb-6 text-center">Conoce a Nuestro Equipo</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <img
              src="https://mui.com/static/images/avatar/1.jpg"
              alt="Miembro del equipo 1"
              className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold title">Juan Perez</h3>
            <p className="subtitle">Diseñador</p>
          </div>
          <div className="text-center">
            <img
              src="https://mui.com/static/images/avatar/3.jpg"
              alt="Miembro del equipo 2"
              className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold title">Juana Rosado</h3>
            <p className="subtitle">Delivery</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
