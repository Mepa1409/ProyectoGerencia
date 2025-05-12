import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div>
      <NavBar />
      <Header />
      <section className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-center mb-8">
          <Link
            to="/Login"
            className="uppercase bg-[#2C3E50] text-white w-96 py-2 px-6 rounded-lg hover:scale-105 hover:bg-[#344c63] transition-all"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/Register"
            className="uppercase bg-[#2C3E50] text-white w-96 py-2 px-6 rounded-lg hover:scale-105 hover:bg-[#344c63] transition-all"
          >
            Registrarse
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden max-w-md mx-auto">
            <div className="p-4 text-center">
              <h1 className="text-2xl font-bold">Acerca de Nosotros</h1>
            </div>
            <div className="p-4 flex flex-col items-center">
              <svg
                className="h-48 w-auto mb-4"
                data-slot="icon"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                ></path>
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"></path>
              </svg>
              <p className="text-gray-700 text-center">
                En LegalConnect, nuestra misión es brindar un puente entre las
                personas que enfrentan dificultades para acceder a la
                información y los abogados especializados en derecho penal.
                Sabemos que enfrentar un problema legal puede ser un desafío
                abrumador, especialmente cuando el acceso a la información y los
                recursos legales está limitado. Por eso, nos dedicamos a
                facilitar la conexión entre aquellos que necesitan asistencia
                jurídica y profesionales del derecho que pueden ofrecerles la
                orientación y el apoyo necesarios. Nuestro objetivo es asegurar
                que cada individuo, sin importar sus circunstancias, tenga la
                oportunidad de recibir la defensa y el asesoramiento que merece.
                Creemos en la justicia accesible para todos y trabajamos
                incansablemente para empoderar a quienes más lo necesitan en sus
                momentos de mayor vulnerabilidad.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden max-w-md mx-auto">
            <div className="p-4 text-center">
              <h1 className="text-2xl font-bold">Nuestro Propósito</h1>
            </div>
            <div className="p-4 flex flex-col items-center">
              <svg
                className="h-48 w-auto mb-4"
                data-slot="icon"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                ></path>
                <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z"></path>
              </svg>
              <p className="text-gray-700 text-center">
                En LegalConnect, entendemos que uno de los mayores desafíos para
                las personas que enfrentan problemas legales es saber qué tipo
                de abogado necesitan. La falta de conocimiento sobre los
                distintos campos del derecho puede hacer que la búsqueda de
                asistencia jurídica sea confusa y abrumadora. Por eso, nuestro
                propósito es simplificar este proceso al máximo. Nos dedicamos a
                proporcionar una plataforma fácil y rápida que conecta a los
                usuarios con abogados especializados según sus necesidades
                específicas. Queremos eliminar las barreras en la búsqueda de
                asesoramiento legal, ofreciendo un acceso directo y eficiente a
                los profesionales del derecho que pueden brindar la ayuda que
                cada individuo requiere. Con LegalConnect, el camino hacia la
                asistencia jurídica adecuada nunca ha sido tan claro y
                accesible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Inicio;

{
  /*<section style={{ padding: "50px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2em", color: "#333" }}>
          Bienvenido a legalCONNECT
        </h2>
        <p style={{ fontSize: "1.3em", color: "#666" }}>
          La plataforma que simplifica la conexión entre abogados y clientes.
          Encuentra el abogado adecuado para tus necesidades legales o amplía tu
          práctica legal llegando a nuevos clientes.
        </p>
        <p style={{ fontSize: "1.2em" }}>
          <Link
            to="/login"
            style={{
              marginRight: "10px",
              color: "#3498db",
              textDecoration: "none",
            }}
          >
            Login Usuario
          </Link>
          <Link
            to="/register"
            style={{
              marginRight: "10px",
              color: "#3498db",
              textDecoration: "none",
            }}
          >
            Registro de Usuario
          </Link>
          <Link
            to="/registerAbogados"
            style={{ color: "#3498db", textDecoration: "none" }}
          >
            Registro de Abogado
          </Link>
          <Link
            to="/loginAbogado"
            style={{
              marginLeft: "10px",
              color: "#3498db",
              textDecoration: "none",
            }}
          >
            Login Abogado
          </Link>
        </p>
      </section> */
}
