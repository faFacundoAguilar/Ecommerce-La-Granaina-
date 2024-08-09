import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const CardCarousel = () => {
  const cards = [
    { id: 1, title: 'Tarjeta 1', content: 'Contenido de la tarjeta 1', description: 'Breve descripción 1', imageUrl: '/pin5.jpeg' },
    { id: 2, title: 'Tarjeta 2', content: 'Contenido de la tarjeta 2', description: 'Breve descripción 2', imageUrl: '/pin5.jpeg' },
    { id: 3, title: 'Tarjeta 3', content: 'Contenido de la tarjeta 3', description: 'Breve descripción 3', imageUrl: '/pin5.jpeg' },
    { id: 4, title: 'Tarjeta 4', content: 'Contenido de la tarjeta 4', description: 'Breve descripción 4', imageUrl: '/pin5.jpeg' },
    { id: 5, title: 'Tarjeta 5', content: 'Contenido de la tarjeta 5', description: 'Breve descripción 5', imageUrl: '/pin5.jpeg' },
    { id: 6, title: 'Tarjeta 6', content: 'Contenido de la tarjeta 6', description: 'Breve descripción 6', imageUrl: '/pin5.jpeg' },
    { id: 7, title: 'Tarjeta 7', content: 'Contenido de la tarjeta 7', description: 'Breve descripción 7', imageUrl: '/pin5.jpeg' },
    { id: 8, title: 'Tarjeta 8', content: 'Contenido de la tarjeta 8', description: 'Breve descripción 8', imageUrl: '/pin5.jpeg' },
  ];

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledCards = shuffleCards(cards);

  const scrollRef = useRef(null);

  const animateScroll = (scrollContainer, targetScroll, duration) => {
    const initialScroll = scrollContainer.scrollLeft;
    const startTime = performance.now();

    const scrollStep = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const scrollProgress = Math.min(1, elapsedTime / duration);
      const newScroll = initialScroll + (targetScroll - initialScroll) * scrollProgress;
      scrollContainer.scrollLeft = newScroll;

      if (scrollProgress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const targetScroll = scrollContainer.scrollLeft - 200;
      const duration = 500;
      animateScroll(scrollContainer, targetScroll, duration);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const targetScroll = scrollContainer.scrollLeft + 200;
      const duration = 500;
      animateScroll(scrollContainer, targetScroll, duration);
    }
  };

  return (
    <div className="relative my-8 p-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-700 relative">Mas contenido dinamico</h2>
      <div className="flex overflow-hidden" ref={scrollRef}>
        {shuffledCards.map(card => (
          <div key={card.id} className="flex-none w-60 bg-white shadow-md mx-6 my-2 rounded-lg p-4">
            <img src={card.imageUrl} alt={card.title} className="w-full h-auto rounded-lg mb-2" />
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.content}</p>
            <p className="text-sm text-gray-500 mt-2">{card.description}</p>
            <br></br>
            <a
              className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="#"
            >
              <span
                className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-400 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              ></span>
              <span className="relative block border border-current bg-white px-6 py-2">ver demo</span>
            </a>
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300 z-10"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300 z-10"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
};

export default CardCarousel;
