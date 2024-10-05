import WorkSpace from '@/assets/nas1.png';
import gr from '@/assets/gr.png';
import Image from 'next/image';

export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]'>
      <div className="container">
        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className='tag'>Aumenta tu capacidad de análisis</div>
          </div>
          <h2 className='text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5'>Una   forma más eficaz de leer el mercado</h2>
          <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5'>
            sndfsnmdfmsdnfmnds
          </p>
        </div>
        <div className='relative'>
          <Image src={WorkSpace} alt='workspace image' className='mt-10'
          priority={true}
          quality={100}/>
          <Image src={gr} alt='gr photo' height={148} className='absolute -right-36 -top-32'/>
        </div>
      </div>
    </section>
  );
};
