import React from 'react';

const PurchaseTimeline = () => {
    return (
        <section className="text-gray-400 bg-transparent body-font">
            <div className="container px-5 py-24 mx-auto">
                {/* Header Section */}
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-800 rounded overflow-hidden">
                        <div className="w-24 h-full bg-red-700"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-black font-medium title-font text-4xl mb-2 sm:mb-0 font-caveat">Plantillas que impulsan ventas</h1>
                        <p className="sm:w-3/5 leading-relaxed text-xl sm:pl-10 pl-0 font-normal font-ubuntu text-black">
                        Nuestro ecommerce destaca por su diseño intuitivo y elegante, que garantiza una experiencia excepcional.
                        </p>
                    </div>
                </div>
                
                {/* Content Section */}
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="restovidrio.PNG" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-800 mt-5">UI/UX</h2>
                     
                        <a className="group relative inline-block focus:outline-none focus:ring mt-3" href="#">
                            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-gray-300  transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
                            <span className="relative inline-block border-2 border-current px-6 py-2 text-xs font-bold uppercase tracking-widest text-black">
                                Demo
                            </span>
                        </a>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="Impr.PNG" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-800 mt-5">UI/UX</h2>
                        
                        <a className="group relative inline-block focus:outline-none focus:ring mt-3" href="#">
                            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-gray-300  transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
                            <span className="relative inline-block border-2 border-current px-6 py-2 text-xs font-bold uppercase tracking-widest text-black">
                                Demo
                            </span>
                        </a>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="car.png" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-800 mt-5">UI/UX</h2>
                        
                        <a className="group relative inline-block focus:outline-none focus:ring mt-3" href="#">
                            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-gray-300  transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
                            <span className="relative inline-block border-2 border-current px-6 py-2 text-xs font-bold uppercase tracking-widest text-black">
                                Demo
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PurchaseTimeline;
