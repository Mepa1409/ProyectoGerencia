import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const UserCard = ({ abogado }) => {
  const whatsappLink = `https://wa.me/${abogado.phone}`;
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(abogado.email).then(
      () => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Ocultar el mensaje después de 2 segundos
      },
      (err) => {
        console.error("Error al copiar el texto: ", err);
      }
    );
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src="https://media.istockphoto.com/id/1171169099/es/foto/hombre-con-brazos-cruzados-aislados-sobre-fondo-gris.jpg?s=612x612&w=0&k=20&c=8qDLKdLMm2i8DHXY6crX6a5omVh2IxqrOxJV2QGzgFg="
          alt={`${abogado.name}'s photo`}
        />
        <div className="ml-4 flex-1 min-w-0">
          <h2 className="text-xl font-semibold text-gray-800">
            {abogado.name}
          </h2>
          <p
            className="text-gray-600 flex items-center gap-1 cursor-pointer"
            onClick={handleCopyEmail}
          >
            <EnvelopeIcon className="h-4 w-4 text-gray-500" />
            <span className="truncate">{abogado.email}</span>
          </p>
          <p className="text-gray-600 flex items-center gap-1">
            <PhoneIcon className="h-4 w-4 text-gray-500" />
            <span className="truncate">{abogado.phone}</span>
          </p>
          <p className="mt-2 text-sm pl-3 text-gray-500 bg-gray-100 rounded-full px-2 py-1 max-w-full truncate">
            {abogado.category}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 pl-3 inline-block flex items-center gap-1 bg-green-600 hover:bg-green-800 text-white rounded-full w-full text-center py-2 font-semibold text-sm"
          >
            <img className="w-5 h-5" src="/Whatsapp.svg" alt="" />
            WhatsApp
          </a>
          {copySuccess && (
            <p className="text-green-600 mt-2">¡Correo copiado!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
