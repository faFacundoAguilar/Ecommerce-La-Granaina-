import React, { useState } from "react";
import { useCart } from "../hooks/useCart";
import DetailsProduct from "../routes/detailsproduct.jsx";

const ProductCard = ({ productInfo }) => {
  const { cart, addToCart, removeOneItemFromCart, removeFromCart } = useCart();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const cartProduct = cart.find((product) => {
    return product._id === productInfo._id;
  });

  const handleAddToCart = () => {
    addToCart(productInfo);
  };

  const handleRemoveOneItemFromCart = () => {
    removeOneItemFromCart(productInfo);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(productInfo);
  };

  const handleOpenDetails = () => {
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg h-auto max-w-sm mx-auto">
      {productInfo.imageUrl ? (
        <img
          src={productInfo.imageUrl}
          alt={productInfo.title}
          className="w-full h-48 rounded-t-md object-cover"
        />
      ) : (
        <div className="h-48 w-full bg-gray-300 rounded-t-md flex items-center justify-center text-gray-500">
          {productInfo.title}
        </div>
      )}
      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-lg font-semibold">{productInfo.name}</h2>
        {cartProduct ? (
          <>
            <div className="flex gap-2 items-center mb-4">
              <button
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300 text-center"
                onClick={handleAddToCart}
              >
                +
              </button>
              {cartProduct.quantity}
              <button
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300 text-center disabled:bg-gray-300"
                onClick={handleRemoveOneItemFromCart}
                disabled={cartProduct.quantity <= 1}
              >
                -
              </button>
            </div>
            <a
              className="group relative inline-block focus:outline-none focus:ring"
              href="#"
              onClick={handleRemoveFromCart}
            >
              <span
                className="absolute inset-0 translate-x-1 translate-y-1 bg-green-400 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
              ></span>
              <span className="relative inline-block border-2 border-current px-6 py-2 text-sm font-bold uppercase tracking-widest text-black">
                Añadir al carrito
              </span>
            </a>
          </>
        ) : (
          <a
            className="group relative inline-block focus:outline-none focus:ring"
            href="#"
            onClick={handleAddToCart}
          >
            <span
              className="absolute inset-0 translate-x-1 translate-y-1 bg-blue-400 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span className="relative inline-block border-2 border-current px-6 py-2 text-sm font-bold uppercase tracking-widest">
              Añadir al carrito
            </span>
          </a>
        )}
        <a
          className="group relative inline-block focus:outline-none focus:ring"
          onClick={handleOpenDetails}
          href="#"
        >
          <span
            className="absolute inset-0 w-full h-full translate-x-1 translate-y-1 bg-yellow-400 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
          ></span>
          <span className="relative inline-block w-full h-full border-2 border-current px-6 py-2 text-sm font-bold uppercase tracking-widest">
            Ver detalle
          </span>
        </a>
      </div>
      <DetailsProduct isOpen={isDetailsOpen} onClose={handleCloseDetails} />
    </div>
  );
};

export default ProductCard;
