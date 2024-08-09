import React from "react";

const CardAnimated = () => {
  return (
    <section>
      <div className="flex justify-center flex-wrap mx-auto md:flex-nowrap p-12">
        <a href="#">
          <div className="flex w-full">
            <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
              <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="uiux.jpg" alt="blog" />
              <div className="px-6 py-8">
                <h4 className="mt-4 text-2xl font-semibold text-neutral-600 font-sans">
                  <span>UI UX</span>
                </h4>
                <p className="mt-1 text-base font-normal text-gray-500 leading-relax">
                  Nuestros diseños sobresalen porque escuchamos al cliente y, según sus necesidades, creamos una experiencia de usuario de otro nivel. Hechale un vistazo a nuestro portafolio.
                </p>
                <a
                  className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="#"
                >
                  <span
                    className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                  ></span>
                  <span className="relative block border border-current bg-white px-6 py-2 text-xs">
                    Más información
                  </span>
                </a>
              </div>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="flex w-full">
            <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
              <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="pagos.jpg" alt="blog" />
              <div className="px-6 py-8">
                <h4 className="mt-4 text-2xl font-semibold text-neutral-600 font-sans">
                  <span>Pagos digitales.</span>
                </h4>
                <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                  Nuestra plataforma de e-commerce te ofrece la posibilidad de integrar fácilmente diversas pasarelas de pago, permitiendo que tus clientes realicen transacciones de forma segura y eficiente.
                </p>
                <a
                  className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="#"
                >
                  <span
                    className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                  ></span>
                  <span className="relative block border border-current bg-white px-6 py-2 text-xs">
                    Más información
                  </span>
                </a>
              </div>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="flex w-full">
            <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
              <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="soporte.jpg" alt="blog" />
              <div className="px-6 py-8">
                <h4 className="mt-4 text-2xl font-semibold text-neutral-600 font-sans">
                  <span>Soporte 24/7</span>
                </h4>
                <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                  Nuestro team GuitaMarket brinda soporte integral a nuestros usuarios, asegurando que puedan gestionar sus tiendas en línea de forma efectiva y resolver cualquier duda rápidamente.
                </p>
                <a
                  className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="#"
                >
                  <span
                    className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                  ></span>
                  <span className="relative block border border-current bg-white px-6 py-2 text-xs">
                    Más información
                  </span>
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default CardAnimated;
