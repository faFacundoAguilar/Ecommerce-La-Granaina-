import React from 'react';

const GoodHero = () => {
  return (
    <section className="relative px-4 py-24 mx-auto max-w-7xl">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 md:-ml-12 md:w-1/4 w-1/3 p-2 md:p-0 ">
        <img 
          src="85.svg" 
          alt="Banner" 
          className="w-full h-auto object-cover" 
        />
      </div>
      <div className="relative w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
      <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight animate-fade-down animate-once font-playwrite">
  Crea tu <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-purple-500 lg:inline">tienda en minutos</span>
  <br />
  <span className="block mt-2">y vende en segundos.</span>
</h1>

        <br></br>
        <p className="mt-2 px-0 mb-6 text-lg font-bold text-gray-600 md:text-xl lg:px-24 animate-fade-up animate-once font-ubuntu">
        Bienvenido a nuestra Ecommerce. Estamos aquí para revolucionar la forma en que vendes en línea, proporcionando herramientas y servicios que impulsan el éxito y el crecimiento. ¿Estás listo para una demostración? 🚀                   
        </p>
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
  <a className="group relative inline-block focus:outline-none focus:ring w-full mb-2 sm:w-auto sm:mb-0" href="#">
    <span
      className="absolute inset-0 translate-x-0 translate-y-0 bg-green-600 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
    ></span>
    <span
      className="relative inline-block border-2 border-black px-8 py-3 text-sm font-bold uppercase tracking-widest font-sans text-white"
    >
      Inicia tu tienda
    </span>
    <svg
      className="w-5 h-5 ml-2 absolute top-1/2 right-4 transform -translate-y-1/2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </a>
  <a className="group relative inline-block focus:outline-none focus:ring w-full mb-2 sm:w-auto sm:mb-0" href="#">
    <span
      className="absolute inset-0 translate-x-0 translate-y-0 bg-gray-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
    ></span>
    <span
      className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest font-sans"
    >
      Ver Demo
    </span>
    <svg
      className="w-5 h-5 ml-2 absolute top-1/2 right-4 transform -translate-y-1/2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
        clipRule="evenodd"
      />
    </svg>
  </a>
</div>
      </div>
    </section>
  );
};

export default GoodHero;
