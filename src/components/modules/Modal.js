import { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-1/3 border border-black">
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            className="text-black hover:text-gray-700 focus:outline-none"
          >
            X
          </button>
        </div>

        <div className="p-6 text-black">
          {children}
        </div>

        <div className="flex justify-end p-4">
            <a
            href="#precio"
            className="px-4 py-2 btn btn-primary rounded hover:bg-gray-300 hover:text-black"
            onClick={() => {
            onClose(); // Cierra el modal
            }}
            >
              Empezar Ahora
            </a>
            <button
            onClick={onClose}
            className="px-4 py-2 btn btn-text rounded"
            >
              Cerrar
            </button>
        </div>

      </div>
    </div>
  );
};

export default Modal;
