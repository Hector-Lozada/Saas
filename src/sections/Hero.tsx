"use client";
import { useState } from 'react';
import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/overview.png';
import Image from "next/image";
import Modal from './../components/modules/Modal';
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
              Educamos a las personas en trading e inversiones para generar ingresos pasivos y activos de manera inteligente y eficaz. Nuestra misión es ayudarte a lograr la libertad financiera mediante herramientas innovadoras y estrategias personalizadas.
            </p>
            <div className='flex gap-1 items-center mt-[30px]'>
              <a href="https://wa.link/infvum" target='_blank' className='btn btn-primary'>Empezar Ahora</a>
              <button 
                className="btn btn-text flex items-center"
                onClick={() => setIsModalOpen(true)} // Abre el modal al hacer clic
              >
                Saber más
                <ArrowIcon className="h-5 w-5 fill-black ml-2"/>
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image src={cogImage} alt="etg" className='md:absolute md:h-full md:w-auto md:max-w-none md:left-6' quality={100} priority={true}/>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">¿Qué hacemos en Elegance Trading Group?</h2>
        <p>
          Nos especializamos en la enseñanza de trading e inversiones para que puedas generar ingresos pasivos y activos. Ofrecemos estrategias personalizadas y herramientas innovadoras para que logres la libertad financiera.
        </p>
      </Modal>
    </section>
  );
};
