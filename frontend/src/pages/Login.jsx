import { useState } from "react";
import UserForm from "../components/UserForm";
import { Link } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

const Login = () => {
  const [side, setSide] = useState("");

  const handleClick = (side) => {
    setSide(side);
  };

  return (
    <div className="relative flex flex-col md:flex-row h-screen">
      {/* Botón "Regresar" centrado */}
      <div className="absolute inset-0 flex md:flex-col items-center justify-center">
        {side === "" ? (
          <>
            <h1 className="z-10 text-white font-semibold text-center text-xl md:text-2xl uppercase mr-5 md:mb-10">
              Iniciar Sesión
              <br />
              como:
            </h1>
            <Link
              to="/"
              className="z-10 bg-[#2C3E50] text-white p-8 w-20 h-20 rounded-full shadow-lg hover:bg-[#385470] transition flex items-center justify-center"
            >
              <ArrowUturnLeftIcon className="h-8 w-8 text-white" />
            </Link>
          </>
        ) : (
          <UserForm hola={side} />
        )}
      </div>

      {/* ABOGADOS */}
      <button
        onClick={() => {
          side !== "Clientes" && handleClick("Abogado");
        }}
        className="relative flex-1 w-full h-full group cursor-pointer"
      >
        <img
          src="https://blog.lemontech.com/wp-content/uploads/2021/01/frases-de-abogados.jpg"
          alt="Abogados"
          className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-xl md:text-2xl font-bold text-center p-4 uppercase">
            Abogados
          </h1>
        </div>
      </button>

      {/* CLIENTES */}
      <button
        onClick={() => {
          side !== "Abogados" && handleClick("Cliente");
        }}
        className="relative flex-1 w-full h-full group cursor-pointer"
      >
        <img
          src="https://wvw.qupos.com/hubfs/estrategias-servicio-al-cliente.webp"
          alt="Clientes"
          className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-xl md:text-2xl font-bold text-center p-4 uppercase">
            Clientes
          </h1>
        </div>
      </button>
    </div>
  );
};

export default Login;
