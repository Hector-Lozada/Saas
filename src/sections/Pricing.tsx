import CheckIcon from '@/assets/check.svg';
import { twMerge } from 'tailwind-merge';

const pricingTiers = [
  {
    title: "Started",
    monthlyPrice: 35,
    buttonText: "Suscribirse",
    popular: false,
    inverse: false,
    features: [
      "Acceso a Mentorías Grupales",
      "Material de estudio básico",
      "Soporte básico por correo",
      "Acceso a Comunidad",
      "Cursos de Introducción al Trading",
    ],
    link: "https://wa.link/saj0qm",
  },  
  {
    title: "Advanced",
    monthlyPrice: 50,
    buttonText: "Suscribirse",
    popular: true,
    inverse: true,
    features: [
      "Acceso a Mentorías Grupales e Individuales",
      "Material de estudio avanzado",
      "Soporte prioritario",
      "Acceso completo a Comunidad",
      "Estrategias avanzadas ",
      "Sesiones de análisis en vivo",
    ],
    link: "https://wa.link/3pkhpr",
  },  
  {
    title: "Premium",
    monthlyPrice: 100,
    buttonText: "Suscribirse",
    popular: false,
    inverse: false,
    features: [
      "Mentoría personalizada 1 a 1",
      "Acceso exclusivo a estrategias profesionales",
      "Soporte dedicado 24/7",
      "Análisis de mercado en tiempo real",
      "Acceso a señales premium",
      "Simuladores avanzados de Trading",
      "Cuentas de fondeo"
    ],
    link: "https://wa.link/7jlzbj",
  }
  
];

export const Pricing = () => {
  return (
    <section id='precio' className="py-24 bg-white">
      <div className='container'>
        <div className='section-heading'>
          <h2 className="section-title text-black">Precios</h2>
          <p className="section-description">Elije el que mejor se adapte a tus necesidades</p>
        </div>
        <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
          {pricingTiers.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features, link },
              index
            ) => (
              <div key={index} className={twMerge("card", inverse === true && 'border-black bg-black text-white')}>
                <div className="flex justify-between">
                  <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && 'text-white/60')}>{title}</h3>
                  {popular === true && (
                    <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                      <span className="bg-gradient-to-r from-[#DD7DDF] via-[#E1CD86] to-[#71C2EF] text-transparent bg-clip-text font-medium">
                        Popular
                      </span>

                    </div>
                  )}
                </div>
                <div className='flex items-baseline gap-1 mt-[30px]'>
                  <span className='text-4xl font-bold tracking-tighter leading-none'>${monthlyPrice}</span>
                  <span className={twMerge("tracking-tighter font-bold text-black/50", inverse === true && 'text-white/60')}>/mes</span>
                </div>
                <a href={link} target='_blank' className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && 'text-black bg-white')}>{buttonText}</a>
                <ul className='flex flex-col gap-5 mt-8'>
                  {features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='text-sm flex items-center gap-4'>
                      <CheckIcon className='h-6 w-6'/>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
            )}
        </div>
      </div>
    </section>
  );
};
