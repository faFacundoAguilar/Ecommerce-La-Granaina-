import React, { useState } from 'react';

const CardLink = () => {
    const [email, setEmail] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 

        console.log("Email enviado:", email);
        setAlertVisible(true);

        // Pasados 3 segundos, ocultamos ;)
        setTimeout(() => {
            setAlertVisible(false);
        }, 3000);

        // clean siempre clean ;)
        setEmail('');
    };

    return (
        <section className="text-gray-400 bg-transparent body-font">
            <div className="container mx-auto flex px-5 py-18 md:flex-row flex-col items-center">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-wide font-extrabold text-gray-900 dark:text-white font-anton">
                            ¿Estás preparado para iniciar tu tienda?
                        </h2>

                        <p className="mb-8 font-normal text-gray-800 sm:text-xl dark:text-gray-400 font-ubuntu">
                            Imagina crear tu tienda en línea en un abrir y cerrar de ojos, ¡y empezar a atraer clientes como un imán! Con nuestras herramientas súper intuitivas para gestionar inventarios, obtener análisis al instante y un soporte que nunca duerme, ¡tu éxito está al alcance de un clic! Deja tu correo y te enviaremos la información para ponernos en marcha. 💥
                        </p>
                    </div>
                    <form className="flex w-full md:justify-start justify-center items-end" onSubmit={handleSubmit}>
                        <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                            <label htmlFor="hero-field" className="leading-7 text-sm text-gray-400">Tu correo</label>
                            <input
                                type="email"
                                id="hero-field"
                                name="hero-field"
                                className="w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Ingresa tu correo"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="group relative inline-block text-xs font-bold text-black focus:outline-none focus:ring font-sans"
                        >
                            <span className="absolute inset-0 border border-black group-active:border-yellow-500"></span>
                            <span
                                className="block border border-black bg-green-500 px-12 py-3 transition-transform active:border-black active:bg-green-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                            >
                                Enviar
                            </span>
                        </button>
                    </form>
           
                    <div className="flex lg:flex-row md:flex-col text-gray-300">
                
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="bot.svg"
                    />
                </div>
            </div>

            {/* Componente de alerta */}
            {alertVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4 shadow-lg max-w-sm w-full">
                        <div className="flex items-start gap-4">
                            <span className="text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>

                            <div className="flex-1">
                                <strong className="block font-medium text-gray-900">Cambios guardados</strong>
                                <p className="mt-1 text-sm text-gray-700">Tu correo ha sido enviado.</p>
                            </div>

                            <button className="text-gray-500 transition hover:text-gray-600" onClick={() => setAlertVisible(false)}>
                                <span className="sr-only">Cerrar alerta</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CardLink;
