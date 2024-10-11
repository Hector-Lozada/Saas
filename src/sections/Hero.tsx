"use client";
import { useState } from 'react';
import ArrowIcon from '@/assets/arrow-right.svg';
import Logo from '@/assets/logo.png';
import cogImage from '@/assets/overview.png';
import Image from "next/image";
import Close from '@/assets/close.svg'

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="hero" className='pt-8 pb-20 md:pb-10 md:pt-5 bg-white overflow-clip'>
      <div className="container">
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <div className="tag bg-white text-black">
              ¿Quienes somos y qué hacemos?
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mt-6">
              Camina hacia el éxito
            </h1>
            <p className='text-xl text-black tracking-tight mt-6'>
            En Elegance Trading Group, somos profesionales apasionados por las inversiones y el trading. Nuestra misión es capacitar a personas de todas las edades para que tomen el control de su futuro financiero. Ofrecemos formación personalizada y estrategias para generar ingresos pasivos y activos en los mercados financieros. ¡Ubícanos en Codesa, Calle F y Calle 7 y empieza hoy mismo!
            </p>
            <div className='flex gap-1 items-center mt-[30px]'>
              <a href="#precio" className='btn btn-primary'>Empezar Ahora</a>
              <button 
                className="btn btn-text flex items-center"
                onClick={() => setIsModalOpen(true)} // Abre el modal al hacer clic
              >
                Saber más
                <ArrowIcon className="h-5 w-5 fill-black ml-2" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image src={cogImage} alt="etg" className='md:absolute md:h-full md:w-auto md:max-w-none md:left-6' quality={100} priority={true} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md md:max-w-xl w-full mx-4 md:mx-0 p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              <Close />
            </button>
            <div className='flex items-center justify-center mb-5'>
            <Image src={Logo} alt="Logo ETG" height={160} width={160} />
            </div>
            <h2 className="text-xl font-bold mb-4">Nuestro Enfoque</h2>
            <p>
            Se basa en el conocimiento y la práctica. Ofrecemos cursos, talleres y asesoramiento personalizado que abarcan desde los conceptos básicos del trading hasta las estrategias más avanzadas de inversión. Creemos en la educación financiera como el camino hacia la libertad económica, y estamos aquí para proporcionarte las herramientas necesarias para alcanzar tus metas.
            </p>
            <p className='mt-2'>
            Ya sea que estés iniciando en el mundo del trading o que busques perfeccionar tus habilidades, en Elegance Trading Group te guiamos paso a paso para que puedas tomar decisiones informadas y efectivas en el mercado.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
