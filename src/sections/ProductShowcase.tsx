import WorkSpace from '@/assets/nas1.png';
import gr from '@/assets/gr.png';
import Image from 'next/image';

export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">
        <div className='section-heading'>
          <div className='flex justify-center'>
            <div className='tag'>Aumenta tu capacidad de análisis</div>
          </div>
          <h2 className='section-title'>Una   forma más eficaz de leer el mercado</h2>
          <p className='section-description mt-5'>
            sndfsnmdfmsdnfmnds
          </p>
        </div>
        <div className='relative'>
          <Image src={WorkSpace} alt='workspace image' className='mt-10'
          priority={true}
          quality={100}/>
          <Image src={gr} alt='gr photo' height={148} className=' hidden md:block  absolute -right-36 -top-32'/>
        </div>
      </div>
    </section>
  );
};
