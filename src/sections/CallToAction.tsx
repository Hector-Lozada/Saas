import ArrowRight from '@/assets/arrow-right.svg';

export const CallToAction = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className='section-heading'>
          <h2 className="section-title text-black">Ingresa a una clase GRATIS HOY</h2>
          <p className="section-description mt-5">
            {" "}
            Transforma tu futuro financiero con Elegance Trading Group. Aprende a invertir con confianza y a generar ingresos desde cualquier lugar del mundo.
          </p>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <a href='https://wa.link/infvum' target='_blank' className="btn btn-primary">Empiezar Ahora</a>
          <button className="btn btn-text">
            <a href='https://hector-portafolio.netlify.app/' target='_blank'>Conoce a tu mentor</a>
            <ArrowRight className='h-5 w-5' />
          </button>
        </div>
      </div>
    </section>    
  );
};
