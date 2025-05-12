import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import NavBar from "../components/NavBar";
import UserCard from "../components/UserCard";
import Chatbot from "../components/ChatBot";

function AbogadosList() {
  const { getAbogados, Abogados, getAbogado } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (selectedCategory) {
      getAbogado(selectedCategory);
    } else {
      getAbogados();
    }
  }, [selectedCategory, getAbogado, getAbogados]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Listado de Abogados
        </h1>
        <label className="block mb-4">
          Filtrar por categoría:
          <select onChange={handleCategoryChange} className="ml-2">
            <option value="">Todas</option>
            <option value="Derecho Civil">Derecho Civil</option>
            <option value="Derecho Penal">Derecho Penal</option>
            <option value="Derecho Laboral">Derecho Laboral</option>
            <option value="Derecho Familiar">Derecho Familiar</option>
            <option value="Derecho Fiscal">Derecho Fiscal</option>
            <option value="Derecho Administrativo">Derecho Administrativo</option>
            <option value="Derecho Internacional">Derecho Internacional</option>
            <option value="Derecho Inmobiliaro">Derecho Inmobiliario</option>
            <option value="Derecho Ambiental">Derecho Ambiental</option>
           


          </select>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(Abogados) && Abogados.length > 0 ? (
            Abogados.map((abogado) => (
              <UserCard key={abogado._id} abogado={abogado} />
            ))
          ) : (
            <p>No se encontraron abogados en esta categoría</p>
          )}
        </div>
      </div>
      <Chatbot />
    </>
  );
}

export default AbogadosList;
