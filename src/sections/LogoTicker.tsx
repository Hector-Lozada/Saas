"use client";

import acmeLogo from '@/assets/logo-acme.png';
import echoLogo from '@/assets/logo-echo.png';
import ftmoLogo from '@/assets/ftmoLogoo.png';
import funded from '@/assets/fundednext.png';
import topstep from '@/assets/TopStep-Logo.png';
import atf from '@/assets/atf.png';
import mt4 from '@/assets/mt4.png';
import mt5 from '@/assets/mt5.png';
import fp from '@/assets/fp-.png';
import tv from '@/assets/tv.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white"> {/* Fondo blanco */}
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
            <Image src={ftmoLogo} alt="FTMO Logo" className="logo-ticker-image"/>
            <Image src={funded} alt="Funded Next Logo" className="logo-ticker-image" />
            <Image src={topstep} alt="Topstep Logo" className="logo-ticker-image"/>
            <Image src={atf} alt="ATF Logo" className="logo-ticker-image"/>
            <Image src={mt4} alt="MT4 Logo" className="logo-ticker-image"/>
            <Image src={mt5} alt="MT5 Logo" className="logo-ticker-image"/>
            <Image src={fp} alt="FP Logo" className="logo-ticker-image"/>
            <Image src={tv} alt="Trading View Logo" className="logo-ticker-image"/>

            {/* Segundo carrusel */}
            <Image src={ftmoLogo} alt="FTMO Logo" className="logo-ticker-image"/>
            <Image src={funded} alt="Funded Next Logo" className="logo-ticker-image" />
            <Image src={topstep} alt="Topstep Logo" className="logo-ticker-image"/>
            <Image src={atf} alt="ATF Logo" className="logo-ticker-image"/>
            <Image src={mt4} alt="MT4 Logo" className="logo-ticker-image"/>
            <Image src={mt5} alt="MT5 Logo" className="logo-ticker-image"/>
            <Image src={fp} alt="FP Logo" className="logo-ticker-image"/>
            <Image src={tv} alt="Trading View Logo" className="logo-ticker-image"/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
