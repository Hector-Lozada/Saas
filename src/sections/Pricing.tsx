"use client";
import { useState } from 'react';
import CheckIcon from '@/assets/check.svg';
import { twMerge } from 'tailwind-merge';
import {PayPalButton} from '../components/PaypalButton';
import Adver from '@/assets/adver.svg';


interface PricingTier {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
  link: string;
  planId: string; // Añade el planId para cada tier
}

export const Pricing = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  const pricingTiers: PricingTier[] = [
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
      planId: "P-0P232153NB4691201M4EJEEA", // Plan ID para el nivel Started
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
      planId: "P-6SC87002J8541540AM4D6L3I", // Plan ID para el nivel Advanced
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
        "Cuentas de fondeo",
      ],
      link: "https://wa.link/7jlzbj",
      planId: "P-37E94323PF3224234M4D6MRQ", // Plan ID para el nivel Premium
    }
  ];

  const handleSubscriptionClick = (tier: PricingTier) => {
    setSelectedTier(tier);
    setShowModal(true);
  };

  return (
    <section id="precio" className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title text-black">Precios</h2>
          <p className="section-description">Elije el que mejor se adapte a tus necesidades</p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={twMerge("card", tier.inverse === true && "border-black bg-black text-white")}>
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", tier.inverse === true && "text-white/60")}>
                  {tier.title}
                </h3>
                {tier.popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className="bg-gradient-to-r from-[#DD7DDF] via-[#E1CD86] to-[#71C2EF] text-transparent bg-clip-text font-medium">
                      Popular
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">${tier.monthlyPrice}</span>
                <span className={twMerge("tracking-tighter font-bold text-black/50", tier.inverse === true && "text-white/60")}>
                  /mes
                </span>
              </div>
              <button
                onClick={() => handleSubscriptionClick(tier)}
                className={twMerge("btn btn-primary w-full mt-[30px]", tier.inverse === true && "text-black bg-white")}
              >
                {tier.buttonText}
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
          <div className='gap-1 mb-8'>
              <div className='flex items-center gap-1'>
                <Adver />
                <span className='font-bold'>Importante:</span>
              </div>
              <span>Una vez realizado el pago, tomar captura y enviar por medios oficiales.</span>
          </div>

            <h3 className="text-xl font-semibold mb-4">Suscribirse al plan {selectedTier.title}</h3>
            {/* Botones de PayPal para el plan seleccionado */}
            <PayPalButton planId={selectedTier.planId} />
            <div className="flex justify-end gap-2 mt-4">
              <button className="btn bg-red-500 text-white" onClick={() => setShowModal(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
