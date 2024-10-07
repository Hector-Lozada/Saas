import ArrowRight from '@/assets/arrow-right.svg';

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] PY-24">
      <div className="container">
        <div className='section-heading'>
          <h2 className="section-title">Ingresa a una clase GRATIS HOY</h2>
          <p className="section-description mt-5">
            {" "}
            kasjfkjfhlkashf
          </p>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Empiezar Ahora</button>
          <button className="btn btn-text">
            <span>Saber más</span>
            <ArrowRight className='h-5 w-5' />
          </button>
        </div>
      </div>
    </section>    
  );
};
