"use client";  // Esto indica que el componente se renderiza en el cliente

import { useState } from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import CloseIcon from '@/assets/close.svg'; // Asegúrate de tener el ícono de cerrar

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambiar el estado del menú
  };

  const closeMenu = () => {
    setMenuOpen(false); // Cerrar el menú
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Barra superior */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Transforma tu futuro financiero con Elegance Trading Group.</p>
        <div className="inline-flex gap-1 items-center">
          <a href="#precio">Empezar Ahora</a>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* Sección principal del encabezado */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo ETG" height={160} width={160} />
            
            {/* Ícono del menú móvil (dependiendo del estado del menú) */}
            {menuOpen ? (
              <CloseIcon className="h-5 w-5 md:hidden cursor-pointer" onClick={toggleMenu} />
            ) : (
              <MenuIcon className="h-5 w-5 md:hidden cursor-pointer" onClick={toggleMenu} />
            )}
            
            {/* Menú para pantallas grandes */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#hero">Sobre ETG</a>
              <a href="#analisis">Análisis</a>
              <a href="#testimonials">Clientes</a>
              <a href="#precio">Precios</a>
              <a href="https://wa.link/qao0hh" target="_blank">FAQ</a>
              <a href="https://t.me/+WiOuYTsG0uZhMDRh" target="_blank">Novedades</a>
              <a href="#precio" className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Empezar Ahora
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      <div className={`md:hidden transition-transform duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
        <nav className="bg-white shadow-lg p-5">
          <a href="#hero" className="block py-2" onClick={closeMenu}>Sobre ETG</a>
          <a href="#analisis" className="block py-2" onClick={closeMenu}>Análisis</a>
          <a href="#testimonials" className="block py-2" onClick={closeMenu}>Clientes</a>
          <a href="#precio" className="block py-2" onClick={closeMenu}>Precios</a>
          <a href="https://wa.link/qao0hh" target="_blank" className="block py-2" onClick={closeMenu}>FAQ</a>
          <a href="https://t.me/+WiOuYTsG0uZhMDRh" target="_blank" className="block py-2" onClick={closeMenu}>Novedades</a>
          <a href="#precio" className="bg-black text-white px-4 py-2 rounded-lg font-medium block mt-2" onClick={closeMenu}>
            Empezar Ahora
          </a>
        </nav>
      </div>
    </header>
  );
};
