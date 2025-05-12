import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#2C3E50] py-3 px-10 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <div className="flex items-center">
        <img
          src="/LegalConnect.webp" // Asegúrate de que esta ruta sea correcta
          alt="LegalConnect Logo"
          className="h-12"
        />
      </div>
      {isAuthenticated && (
        <div className="relative ">
          <button
            onClick={toggleMenu}
            className="flex items-center focus:outline-none transition-colors duration-200 ease-in-out"
          >
            <img
              src="https://media.istockphoto.com/id/1090878494/es/foto/retrato-de-joven-sonriente-a-hombre-guapo-en-camiseta-polo-azul-aislado-sobre-fondo-gris-de.jpg?s=612x612&w=0&k=20&c=dHFsDEJSZ1kuSO4wTDAEaGOJEF-HuToZ6Gt-E2odc6U="
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover"
            />
            <p className="ml-2 mr-3 text-white">
              Bienvenido, <span className="uppercase">{user.username}</span>
            </p>
            {menuOpen ? (
              <ChevronUpIcon className="h-6 w-6 text-white" />
            ) : (
              <ChevronDownIcon className="h-6 w-6 text-white" />
            )}
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg transition-transform duration-200 ease-in-out transform scale-95">
              <Link
                to="/"
                onClick={() => logout()}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-1000 ease-in-out"
              >
                Cerrar sesión
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
