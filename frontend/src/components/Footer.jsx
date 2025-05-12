function Footer() {
  return (
    <footer className="bg-[#2C3E50] py-4 px-10 flex justify-between items-center shadow-lg mt-10">
      <div className="flex items-center">
        <img
          src="/LegalConnect.webp"
          alt="LegalConnect Logo"
          className="h-8 w-auto"
        />
      </div>

      <div className="text-white text-sm">
        © 2024 LegalConnect. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
