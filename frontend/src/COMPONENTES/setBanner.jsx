import React from 'react';

const Banner = () => {
    return (
        <section className="text-gray-400 bg-transparent body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    {/* Reemplazar la etiqueta <img> con el diseño de la tarjeta */}
                    <a href="#" className="group block overflow-hidden lg:w-1/2 w-full lg:h-auto h-64 rounded">
                        <div className="relative h-full">
                            <img
                                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                                alt="Product Image 1"
                                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                                alt="Product Image 2"
                                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                        <div className="relative bg-white pt-3">
                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Limited Edition Sports Trainer
                            </h3>
                            <div className="mt-1.5 flex items-center justify-between text-gray-900">
                                <p className="tracking-wide">$189.99</p>
                                <p className="text-xs uppercase tracking-wide">6 Colors</p>
                            </div>
                        </div>
                    </a>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 className="text-gray-700 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 text-indigo-400"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                {/* Más íconos de calificación aquí */}
                                <span className="ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                                <a>
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                {/* Más íconos de redes sociales aquí */}
                            </span>
                        </div>
                        <p className="leading-relaxed">
                            Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
                        </p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button className="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-800 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-indigo-500 text-black pl-3 pr-10">
                                        <option>41</option>
                                        <option>45</option>
                                        <option>48</option>
                                        <option>55</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-white">$58.00</span>
                            <a href="#" className="group relative inline-block focus:outline-none focus:ring">
        <span
            className="absolute inset-0 translate-x-0 translate-y-0 bg-blue-500 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
        ></span>
        
        <span
            className="relative inline-block border-2 border-blue-500 px-6 py-2 text-sm font-bold uppercase tracking-widest text-white"
        >
            Ver demo
        </span>
    </a>
    <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
        <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
        >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
        </svg>
    </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
