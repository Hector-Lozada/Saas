"use client";
import { useState } from 'react';
import ArrowIcon from '@/assets/arrow-right.svg';
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
              Elegance Trading Group te ofrece las herramientas y estrategias necesarias para diversificar tus ingresos y alcanzar la libertad financiera. Nos especializamos en capacitación para inversiones y trading, adaptándonos a tus necesidades. Ubícanos en Codesa, Calle F y Calle 7. ¡Empieza hoy mismo!
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
            <h2 className="text-xl font-bold mb-4">¿Qué hacemos en Elegance Trading Group?</h2>
            <p>
              En Elegance Trading Group, capacitamos a personas en trading e inversiones para generar ingresos pasivos y activos de manera eficiente y segura. A través de nuestros programas de formación personalizados, te enseñamos a utilizar herramientas de análisis de mercado, estrategias avanzadas y técnicas probadas para lograr una rentabilidad sostenida. Nuestra misión es guiarte en cada paso hacia la libertad financiera, proporcionando el conocimiento y los recursos necesarios para que tomes decisiones inteligentes. Únete a nuestra comunidad de inversores exitosos y comienza a transformar tu vida financiera hoy mismo.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
