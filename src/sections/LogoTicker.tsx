"use client";

import acmeLogo from '@/assets/logo-acme.png';
import echoLogo from '@/assets/logo-echo.png';
import ftmoLogo from '@/assets/ftmoLogoo.png';
import funded from '@/assets/fundednext.png';
import topstep from '@/assets/TopStep-Logo.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image: linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className='flex gap-14 flex-none pr-14' 
          animate={{
            translateX: "-50%",
            }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            repeatType: "loop",
            }}
            >
            <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-image" />
            <Image src={echoLogo} alt="Acme Logo" className="logo-ticker-image"/>
            <Image src={ftmoLogo} alt="FTMO Logo" className="logo-ticker-image"/>
            <Image src={funded} alt="Funded Next Logo" className="logo-ticker-image" />
            <Image src={topstep} alt="Topstep Logo" className="logo-ticker-image"/>
            <Image src={topstep} alt="Topstep Logo" className="logo-ticker-image"/>
            <Image src={topstep} alt="Topstep Logo" className="logo-ticker-image"/>
            <Image src={topstep} alt="Topstep Logo" className="logo-ticker-image"/>
            <Image src={topstep} alt="Topstep Logo" className="logo-ticker-image"/>

            {/*Segundo carrousel */}

            <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-image" />
            <Image src={echoLogo} alt="Acme Logo" className="logo-ticker-image"/>
            <Image src={ftmoLogo} alt="FTMO Logo" className="logo-ticker-image"/>
            <Image src={funded} alt="Funded Next Logo" className="logo-ticker-image" />
            <Image src={topstep} alt="Topstep Logo" className="logo-ticker-image"/>
            <Image src={topstep} alt="Topstep Logo" className="logo-ticker-image"/>
            <Image src={topstep} alt="Topstep Logo" className="logo-ticker-image"/>
            <Image src={topstep} alt="Topstep Logo" className="logo-ticker-image"/>
            <Image src={topstep} alt="Topstep Logo" className="logo-ticker-image"/>
          </motion.div>
        </div>
      </div>
    </div>
);
};
