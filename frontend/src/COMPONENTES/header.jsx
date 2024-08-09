import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faShieldAlt, faPlug, faRobot, faHandPointer } from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [showCategories, setShowCategories] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  //Para definir catego del menu desplegable.
  const categories = [
    { name: "Security", icon: faShieldAlt, description: "Security" },
    { name: "Integrations", icon: faPlug, description: "Integrations" },
    { name: "Automations", icon: faRobot, description: "Automations" },

  ];

  return (
    <header className="bg-transparent text-black font-sans font-medium">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo y navegación principal */}
        <div className="flex items-center space-x-6 lg:space-x-10">
          <div className="mr-4">
            <img src="GRANAINA.png" alt="Logo" className="w-28 h-auto -mt-4 -ml-8" />
          </div>

          <nav className="hidden lg:flex space-x-6">
            <Link to="/" className="relative text-lg font-bold hover:text-gray-800 transition-colors duration-300 group">
              Home
              <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-red-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="relative text-lg font-bold hover:text-gray-800 transition-colors duration-300 group">
              About
              <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-red-800  transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/search" className="relative text-lg font-bold hover:text-gray-800 transition-colors duration-300 group">
              Buscar
              <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-red-800  transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="#" className="relative text-lg font-bold hover:text-gray-800 transition-colors duration-300 group">
              Promotions
              <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-red-800  transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative">
              <button
                onClick={toggleCategories}
                className="flex items-center gap-2 text-lg font-bold hover:text-gray-800 transition-colors duration-300 group"
              >
                Servicios
                <svg
                  className={`w-4 h-4 transform ${showCategories ? "rotate-180" : ""} transition-transform duration-300`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {showCategories && (
                <ul className="absolute left-0 mt-2 bg-transparent text-black p-3 rounded-lg shadow-lg z-50 w-64">
                  {categories.map((category, index) => (
                    <li key={index} className="flex items-center gap-2 hover:text-gray-800 py-2 px-3 transition-colors duration-300">
                      <FontAwesomeIcon icon={category.icon} className="text-xl text-gray-700" />
                      <Link to={`/${category.name.toLowerCase().replace(/ /g, "-")}`} className="text-lg">{category.description}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>
        </div>

        {/* Iconos y opciones de usuario */}
        <div className="flex items-center space-x-4 lg:space-x-6 text-lg">
          {user ? (
            <div className="flex items-center gap-4">
              <p className="text-sm lg:text-base">{user.email}</p>
              {user.store ? (
                <Link to="/storepanel" className="group relative inline-block focus:outline-none focus:ring">
                  <span className="absolute inset-0 translate-x-0 translate-y-0 bg-blue-500 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5 rounded-lg"></span>
                  <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest font-sans text-white">
                    Mi tienda
                  </span>
                </Link>
              ) : (
                <Link to="/account" className="group relative inline-block focus:outline-none focus:ring">
                  <span className="absolute inset-0 translate-x-0 translate-y-0 bg-blue-500 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5 rounded-lg"></span>
                  <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest font-sans text-white">
                    Cuenta
                  </span>
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="group relative inline-block focus:outline-none focus:ring"
              >
                <span className="absolute inset-0 translate-x-0 translate-y-0 bg-red-500 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5 rounded-lg"></span>
                <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest font-sans text-white">
                  Cerrar sesión
                </span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="hover:text-gray-800 transition-colors duration-300">
              <FontAwesomeIcon icon={faUser} className="text-xl cursor-pointer" />
            </Link>
          )}
          <Link to="/cart" className="hover:text-gray-800 transition-colors duration-300">
            <FontAwesomeIcon icon={faShoppingCart} className="text-xl cursor-pointer" />
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
