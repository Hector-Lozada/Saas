import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Transforma tu futuro financiero con Elegance Trading Group.</p>
      <div className="inline-flex gap-1 items-center">
        <a href="https://wa.link/infvum" target='_blank'>Empezar Ahora</a>
        <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
      </div>
    </div>
    <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="Logo ETG" height={160} width=  {160}/>
          <MenuIcon className="h-5 w-5 md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#hero">Sobre ETG</a>
            <a href="#analisis">Análisis</a>
            <a href="#testimonials">Clientes</a>
            <a href="#precio">Precios</a>
            <a href="https://wa.link/qao0hh" target='_blank'>FAQ</a>
            <a href="https://t.me/+WiOuYTsG0uZhMDRh" target='_blank'>Novedades</a>
            <a href="https://wa.link/infvum" target='_blank' className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Empezar Ahora</a>
          </nav>
        </div>
      </div>
    </div>
    </header>
  );
};
