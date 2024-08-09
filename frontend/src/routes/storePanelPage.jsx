import { useState, useEffect } from "react";
import Header from "../COMPONENTES/header.jsx";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext.js";
import { Outlet } from "react-router-dom";

// Importa los íconos necesarios de FontAwesome
import { faHome, faUsers, faBox, faFolder, faCreditCard, faCog, faChevronDown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StorePanelPage() {
  const [productsInfo, setProductsInfo] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productURLName, setProductURLName] = useState("");

  const { user } = useAuthContext();

  // Aca defini las diapositivas para el Carousel
  const slides = [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>,
  ];

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/storepanel/products/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            name: productName,
            description: productDescription,
            price: productPrice,
            URLName: productURLName,
          }),
        }
      );
      const json = await response.json();
      if (response.ok) {
        console.log("Product added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/storepanel/products",
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setProductsInfo(json);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {/* sidebar */}
      <div className="bg-white h-screen font-sans flex">
        <div className="bg-white text-black w-72 p-6 flex flex-col border-r-2 border-purple shadow-lg">
          <div className="text-2xl font-bold mb-8 text-black animate-fade animate-once">Panel Administrador</div>
          <nav>
            <Link
              to="./"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-400 hover:text-black"
            >
              <FontAwesomeIcon icon={faHome} className="h-6 w-6 text-red-800 mr-3" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="./clients"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-400 hover:text-black"
            >
              <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-red-800 mr-3" />
              <span>Clientes</span>
            </Link>
            <Link
              to="./products"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-400 hover:text-black"
            >
              <FontAwesomeIcon icon={faBox} className="h-6 w-6 text-red-800 mr-3" />
              <span>Productos</span>
            </Link>
            <Link
              to="./orders"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-400 hover:text-black"
            >
              <FontAwesomeIcon icon={faFolder} className="h-6 w-6 text-red-800 mr-3" />
              <span>Ordenes</span>
            </Link>
            <Link
              to="./payments"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-400 hover:text-black"
            >
              <FontAwesomeIcon icon={faCreditCard} className="h-6 w-6 text-red-800 mr-3" />
              <span>Payments</span>
            </Link>
            <Link
              to="./settings"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-purple-400 hover:text-black"
            >
              <FontAwesomeIcon icon={faCog} className="h-6 w-6 text-red-800 mr-3" />
              <span>Ajustes</span>
            </Link>
         
            <details className="group mt-4">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-purple-400 hover:text-black">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6 text-red-800 mr-3" />
                  <span className="text-sm font-medium">Cuenta</span>
                </div>
                <FontAwesomeIcon icon={faChevronDown} className="h-5 w-5 text-red-800 transition duration-300 group-open:-rotate-180" />
              </summary>
              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <Link
                    to="./profile"
                    className="flex items-center py-2 px-4 rounded text-sm font-medium text-gray-500 hover:bg-purple-400 hover:text-black"
                  >
                    <FontAwesomeIcon icon={faUserCircle} className="h-5 w-5 text-red-800 mr-2" />
                    <span>Detalles</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="./security"
                    className="flex items-center py-2 px-4 rounded text-sm font-medium text-gray-500 hover:bg-purple-400 hover:text-black"
                  >
                    <FontAwesomeIcon icon={faCog} className="h-5 w-5 text-red-800 mr-2" />
                    <span>Seguridad</span>
                  </Link>
                </li>
                <li>
                  <form action="#">
                    <button
                      type="submit"
                      className="flex items-center py-2 px-4 rounded w-full text-sm font-medium text-gray-500 hover:bg-purple-400 hover:text-black"
                    >
                      <FontAwesomeIcon icon={faUserCircle} className="h-5 w-5 text-red-800 mr-2" />
                      <span>Logout</span>
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </nav>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a href="#" className="flex items-center gap-3 bg-transparent p-4 hover:bg-gray-50">
              <img
                alt=""
                src="perfil.JPG"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="text-sm">
                  <strong className="block text-base font-medium">Facundo Aguilar</strong>
                  <span className="text-gray-600">EscalonetaSA@gmail.com</span>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex-1 p-6 bg-white">
    
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default StorePanelPage;
