import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md p-8 bg-[#0c1935]/95 rounded-2xl border border-blue-500/20 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-white mb-6">Contacto</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nombre</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensaje</label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
