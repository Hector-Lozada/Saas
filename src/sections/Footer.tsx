import logo from '@/assets/logo.png';
import Image from 'next/image';
import SocialInsta from '@/assets/social-insta.svg';
import SocialWha from '@/assets/social-whatsapp.svg';
import SocialTele from '@/assets/social-telegram.svg';

export const Footer = () => {
  return (
    <footer className='bg-white border text-black text-sm py-10 text-center mt-5'>
      <div className='container'>
        <div className='inline-flex relative'>
          <Image src={logo} height={160} width={160} alt='Logo ETG'/>
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href="#">Sobre Nosotros</a>
          <a href="#">Características</a>
          <a href="#">Clientes</a>
          <a href="#">Precios</a>
          <a href="#">FAQ</a>
          <a href="#">Novedades</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <SocialInsta/>
          <SocialWha/>
          <SocialTele/>
        </div>
      </div>
      <p className='mt-6'>&copy; 2024 Elegance Trading Group. Todos los derechos reservados.</p>
    </footer>
  );
};
