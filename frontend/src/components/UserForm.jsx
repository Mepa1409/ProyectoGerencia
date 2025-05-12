import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  EyeIcon,
  KeyIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserForm = ({ hola }) => {
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit } = useForm();
  const { signin, signinAbogado, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const onSubmit = handleSubmit((data) => {
    if (hola === "Abogado") {
      signinAbogado(data);
    } else {
      signin(data);
    }
  });

  useEffect(() => {
    if (isAuthenticated) {
      if (hola === "Abogado") {
        navigate("/bienvenida");
      } else {
        navigate("/abogadoslist");
      }
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96 z-10">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Iniciar sesión {hola}
        </h1>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 text-gray-500">
        <div className="relative">
          <EnvelopeIcon className="w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
            {...register("email", { required: true })}
          />
        </div>
        <div className="relative">
          <KeyIcon className="w-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Contraseña"
            {...register("password", { required: true })}
            className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
          />
          {showPass ? (
            <EyeSlashIcon
              onClick={handleShowPass}
              className="w-5 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:cursor-pointer"
            />
          ) : (
            <EyeIcon
              onClick={handleShowPass}
              className="w-5 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:cursor-pointer"
            />
          )}
        </div>
        <div className="flex gap-2 justify-center mt-2">
          <div>
            <button
              type="submit"
              className="uppercase bg-[#2C3E50] text-white w-full py-2 px-6 rounded-lg hover:scale-105 hover:bg-[#344c63] transition-all"
            >
              Ingresar
            </button>
          </div>
          <div>
            <button
              type="button"
              className="uppercase bg-[#2C3E50] text-white w-full py-2 px-6 rounded-lg hover:scale-105 hover:bg-[#344c63] transition-all"
            >
              Registrar
            </button>
          </div>
        </div>
        <div>
          <Link
            to="/"
            type="button"
            className="uppercase text-center bg-[#2C3E50] text-white w-full py-2 px-6 rounded-lg hover:scale-105 hover:bg-[#344c63] transition-all"
          >
            Atras
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
