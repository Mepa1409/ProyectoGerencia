import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón Flotante */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleChatbot}
          className="bg-[#2C3E50] text-white p-4 rounded-full shadow-lg hover:bg-[#344c63] focus:outline-none"
        >
          <img className="w-10 h-10" src="/Bot.svg" alt="Bot" />
        </button>
      </div>

      {/* Ventana del Chatbot */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 bg-white w-80 h-96 shadow-lg rounded-lg flex flex-col overflow-hidden">
          <div className="bg-[#2C3E50] text-white px-4 py-3 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Lao</h2>
            <button
              onClick={toggleChatbot}
              className="text-white font-bold hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Aquí iría el contenido del chatbot, como mensajes y entradas de usuario */}
            <p className="text-gray-800">
              Hola, mi nombre es Lao ¿cómo puedo ayudarte hoy?
            </p>
          </div>
          <div className="p-3 border-t flex items-center">
            <textarea
              placeholder="Escribe un mensaje..."
              className="flex-1 p-2 border border-gray-300 rounded focus:outline-none resize-none"
            />
            <button className="w-10 h-10 ml-2 border border-gray-300 rounded hover:bg-gray-400 text-gray-500 hover:text-white flex items-center justify-center">
              <PaperAirplaneIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
