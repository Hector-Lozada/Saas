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
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Advanced",
    monthlyPrice: 50,
    buttonText: "Suscribirse",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Premium",
    monthlyPrice: 100,
    buttonText: "Suscribirse",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className='container'>
        <div className='section-heading'>
          <h2 className="section-title">Precios</h2>
          <p className="section-description">djnckdjc</p>
        </div>
        <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
          {pricingTiers.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features },
              index
            ) => (
              <div key={index} className={twMerge("p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full", inverse === true && 'border-black bg-black text-white')}>
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
                <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && 'text-black bg-white')}>{buttonText}</button>
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
