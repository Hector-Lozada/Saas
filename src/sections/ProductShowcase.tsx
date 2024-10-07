"use client";
import WorkSpace from '@/assets/nas1.png';
import Image from 'next/image';

export const ProductShowcase = () => {
  return (
    <section className='bg-white py-24 overflow-x-clip'> {/* Fondo con degradado blanco */}
      <div className="container">
        <div className='section-heading'>
          <div className='flex justify-center'>
            <div className='tag text-black'>Aumenta tu capacidad de análisis</div> {/* Texto negro */}
          </div>
          <h2 className='section-title text-black'>Una forma más eficaz de leer el mercado</h2> {/* Título negro */}
          <p className='section-description mt-5 text-black'>
            sndfsnmdfmsdnfmnds {/* Descripción en negro */}
          </p>
        </div>
        <div className='relative'>
          <Image 
            src={WorkSpace} 
            alt='workspace image' 
            className='mt-10'
            priority={true}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};
