import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/overview.png';
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="hero" className='pt-8 pb-20 md:pb-10 md:pt-5 bg-white overflow-clip'>
      <div className="container">
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <div className="tag bg-black text-white">
              Version 2.0
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mt-6">
              Camina hacia el éxito
            </h1>
            <p className='text-xl text-black tracking-tight mt-6'>
              hgjhgjhgjhg
            </p>
            <div className='flex gap-1 items-center mt-[30px]'>
              <button className='btn btn-primary'>Empezar Ahora</button>
              <button className="btn btn-text">
                <span>Saber más</span>
                <ArrowIcon className="h-5 w-5 fill-black"/>
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image src={cogImage} alt="etg" className='md:absolute md:h-full md:w-auto md:max-w-none md:left-6' quality={100} priority={true}/>
          </div>
        </div>
      </div>
    </section>
  );
};
