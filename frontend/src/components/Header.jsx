function Header() {
  return (
    <header className="relative h-96 bg-gray-200">
      <img
        src="https://escuelainenka.com/wp-content/uploads/bufete-de-abogados.jpg"
        alt="Abogado"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 px-6 md:px-16 lg:px-44 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <img
          src="/LegalConnect.webp" // Cambia esta ruta por el logo de la empresa
          alt="LegalConnect Logo"
          className="h-24 md:h-32 lg:h-48 w-auto mb-4"
        />
        <h1 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
          La plataforma que simplifica la conexión entre abogados y clientes.
          <br />
          Encuentra el abogado adecuado para tus necesidades legales o amplía tu
          práctica legal llegando a nuevos clientes.
        </h1>
      </div>
    </header>
  );
}

export default Header;
