import { motion, useInView, useAnimation } from 'framer-motion';

import "../css/companyMobile.css";



import santander from "../assets/image/ymas/company/Santander.svg" ;
import afpModelo from "../assets/image/ymas/company/Afp Modelo.svg" ;
import corpgroup from "../assets/image/ymas/company/Corpgroup.svg" ;
import abastible from "../assets/image/ymas/company/Abastible.svg" ;
import duocUc from "../assets/image/ymas/company/Duoc UC.svg" ;
import larrainVial from "../assets/image/ymas/company/LarrainVial.svg" ;
import adidas from "../assets/image/ymas/company/Adidas.svg" ;
import notCo from "../assets/image/ymas/company/NotCo.svg" ;
import entel from "../assets/image/ymas/company/Entel.svg" ;
import wom from "../assets/image/ymas/company/WOM.svg" ;
import movistar from "../assets/image/ymas/company/Movistar.svg" ;
import afc from "../assets/image/ymas/company/AFC.svg" ;
import bcoEstado from "../assets/image/ymas/company/Bco-estado.svg" ;
import bcoRipley from "../assets/image/ymas/company/bco-ripley.svg" ;
import bcoSecurity from "../assets/image/ymas/company/Bco-Security.svg" ;
import mega from "../assets/image/ymas/company/Mega.svg" ;
import chv from "../assets/image/ymas/company/Chv.svg" ;
import t13 from "../assets/image/ymas/company/T13.svg" ;
import tvn from "../assets/image/ymas/company/TVN.svg" ;
import copec from "../assets/image/ymas/company/Copec.svg" ;
import fundacionChile from "../assets/image/ymas/company/Fundacion-chile.svg" ;
import chinquinta from "../assets/image/ymas/company/Chilquinta.svg" ;
import natura from "../assets/image/ymas/company/Natura.svg" ;
import pyg from "../assets/image/ymas/company/P&G.svg" ;
import google from "../assets/image/ymas/company/Google.svg" ;
import smartFit from "../assets/image/ymas/company/Smart-fit.svg" ;
import soprole from "../assets/image/ymas/company/Soprole.svg" ;
import streetBurger from "../assets/image/ymas/company/Streat-burger.svg" ;
import weber from "../assets/image/ymas/company/WEBER.svg" ;
import codelco from "../assets/image/ymas/company/codelco.svg";
import isaIntervial from "../assets/image/ymas/company/isaIntervial.svg";
import aerosan from "../assets/image/ymas/company/aerosan.svg";





const fadeInAnimations = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 1,
    },
  }
}

function CompanyMobile() {
  return (
    <>
      <section  id="company-and-more">
        <motion.img loading="lazy" src={santander} className="company mobile-santander" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={afpModelo} className="company mobile-afpModelo" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={duocUc} className="company mobile-duocUc" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={codelco} className="company mobile-codelco" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={google} className="company mobile-google" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={corpgroup} className="company mobile-corpgroup" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={mega} className="company mobile-mega" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={t13} className="company mobile-t13" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={tvn} className="company mobile-tvn" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={chv} className="company mobile-chv" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={copec} className="company mobile-copec" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={pyg} className="company mobile-pyg" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={movistar} className="company mobile-movistar" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={wom} className="company mobile-wom" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={entel} className="company mobile-entel" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={afc} className="company mobile-afc" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={larrainVial} className="company mobile-larrainVial" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={isaIntervial} className="company mobile-isaIntervial" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={bcoEstado} className="company mobile-bcoEstado" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={fundacionChile} className="company mobile-fundacionChile" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={chinquinta} className="company mobile-chilquinta" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>        
        <motion.img loading="lazy" src={notCo} className="company mobile-notCo" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={soprole} className="company mobile-soprole" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={streetBurger} className="company mobile-streetBurger" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={bcoSecurity} className="company mobile-bcoSecurity" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={adidas} className="company mobile-adidas" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={aerosan} className="company mobile-aerosan" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={bcoRipley} className="company mobile-bcoRipley" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={natura} className="company mobile-natura" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={smartFit} className="company mobile-smartFit" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={abastible} className="company mobile-abastible" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
        <motion.img loading="lazy" src={weber} className="company mobile-weber" alt=""
          variants={fadeInAnimations}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
        ></motion.img>
      </section>
    </>
  )
}

export default CompanyMobile



