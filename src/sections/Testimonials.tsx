"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { motion } from 'framer-motion';
import React from "react";

const testimonials = [
  {
    text: "Como trader principiante, esta empresa me ha ayudado a entender los mercados de una manera clara y sencilla. ¡Estoy obteniendo mis primeros resultados positivos!",
    imageSrc: avatar1.src,
    name: "Juan Pérez",
    username: "@juanperez_trader",
  },
  {
    text: "Gracias a su enfoque práctico y mentorías en tiempo real, he mejorado mis estrategias de trading y ahora soy mucho más rentable.",
    imageSrc: avatar2.src,
    name: "Carla Gómez",
    username: "@carlagomez_fx",
  },
  {
    text: "Nunca imaginé que podría aprender a hacer trading de manera tan eficiente. El soporte y las herramientas que ofrecen son de primera calidad.",
    imageSrc: avatar3.src,
    name: "Luis Martínez",
    username: "@luism_trading",
  },
  {
    text: "Me han dado la confianza y el conocimiento que necesitaba para empezar a generar ingresos consistentes con mis inversiones.",
    imageSrc: avatar4.src,
    name: "Sofía Ramírez",
    username: "@sofiaramirez_fx",
  },
  {
    text: "La educación que brindan es clara, estructurada y llena de ejemplos prácticos. He visto un cambio significativo en mis operaciones.",
    imageSrc: avatar5.src,
    name: "Pedro Sánchez",
    username: "@pedrosanchez_trader",
  },
  {
    text: "Las sesiones de mentoría grupal han sido un gran impulso para entender las dinámicas del mercado y cómo tomar decisiones inteligentes.",
    imageSrc: avatar6.src,
    name: "Ana Fernández",
    username: "@anafernandez_trading",
  },
  {
    text: "La empresa me ha permitido desarrollar estrategias de trading sólidas y consistentes. El material educativo es insuperable.",
    imageSrc: avatar7.src,
    name: "Fernando López",
    username: "@fernandolopez_fx",
  },
  {
    text: "Desde que me uní a este programa, he logrado alcanzar mis objetivos financieros mucho más rápido de lo que imaginé. ¡Lo recomiendo al 100%!",
    imageSrc: avatar8.src,
    name: "María Torres",
    username: "@mariatorres_trader",
  },
  {
    text: "La flexibilidad del contenido y la disponibilidad de los mentores han sido clave para mejorar mis resultados como trader.",
    imageSrc: avatar9.src,
    name: "Javier Ramírez",
    username: "@javiramirez_trader",
  },
];



const firstColumn = testimonials.slice(0,3);
const secondColumn = testimonials.slice(3,6);
const trirdColumn = testimonials.slice(6,9);


const TestimonialsColumn = (props: { 
  className?: string; 
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div animate={{
      translateY: "-50%",
    }}
    transition={{
      duration: props.duration || 10,
      repeat: Infinity,
      esae: "linear",
      repeatType: "loop",
    }}
    className="flex flex-col gap-6 pb-6 ">
      {[...new Array(2)].fill(0).map((_, index) =>(
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }, testimonialIndex) => (
  <div className="card" key={testimonialIndex}>
    <div>{text}</div>
    <div className="flex items-center gap-2 mt-5">
      <Image 
        src={imageSrc} 
        alt={name}
        width={40} 
        height={40}
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col">
        <div className="font-medium tracking-tight">{name}</div>
        <div className="leading-5 tracking-tight">{username}</div>
      </div>
    </div>
  </div>
))}
        </React.Fragment>
      ))}     
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonios</div>
          </div>
          <h2 className="section-title text-black">Lo que dicen nuestros usuarios</h2>
          <p className="section-description mt-5">Las experiencias de nuestros clientes</p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15}/>
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block"/>
          <TestimonialsColumn testimonials={trirdColumn} className="hidden lg:block" duration={17}/>
        </div>
      </div>
    </section>
  );
};
