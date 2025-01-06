import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


import gradientRed from "../assets/image/ludics/gradient-red1.png";
import ludicsSquad from "../assets/image/ludics/ludics-squad.svg";
import titleDisenadores from "../assets/image/ludics/disenadores-de-exp.svg";


import '../css/page/ludics.css'


const fadeInAnimations = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: -20,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    }
  }

function Ludics() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
    <div id="t_ludics">
            <aside id="ludics">

                
                
                <div className="container-ludics">
                    <div className="blank"> </div>
                    <section className="img-team">
                        <img  id="ludics-team" src={isMobile ? '' : "https://www.ludics.cl/demoweb/img/ludics/Ludics_team.png"} alt=""/>
                        <img  id="ludics-team-mobile" src={isDesktop ? '' : "https://www.ludics.cl/demoweb/img/ludics/team-1.png"} alt=""/>
                    </section>
                    <section className="img-squad">
                        {/* <section id="gradient-container"> */}
                        <img loading="lazy" id="gradient-red" src={gradientRed} alt=""/>
                    {/* </section> */} 
                        <img loading="lazy" id="ludics-squad" src={ludicsSquad} alt=""/>
                    </section>

                    <section id="description-ludics-short">
                        <motion.p className="description-ludics"
                        variants={fadeInAnimations}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                          once: false,
                        }}
                        
                        >
                            La pasión por lo que hacemos es lo que nos caracteriza. 
                            <span> Entusiastas, inquietos, alegres, espontáneos, comprometidos y detallistas, algunas veces dispersos,</span>
                            &nbsp; pero es lo que nos hace un equipo diferente y único.
                        </motion.p>
                    </section>
                    
                    <div className="slider-team">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        loop={true}
                        centeredSlides={true}
                        initialSlide={3}
                        /* speed={600} */
                        /* preventClicks={true} */
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 80,
                            depth: 350,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{clickable: true}}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        autoplay={{
                          delay: 2500,  // Intervalo de tiempo en milisegundos (2.5 segundos)
                          disableOnInteraction: false, // Continúa el autoplay incluso después de la interacción del usuario
                        }}
                        /* onClick={(swiper) => swiper.slideTo(swiper.clickedIndex)} */
                        className="swiper1"
                    >
                        <SwiperSlide>
                            <img className="swiper-photo" src="https://www.ludics.cl/demoweb/img/ludics/team/DAVID.webp" alt=""/>
                            <img className='swiper-title' src="https://www.ludics.cl/demoweb/img/ludics/team/DAVID.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="swiper-photo" src="https://www.ludics.cl/demoweb/img/ludics/team/OSCAR.webp" alt=""/>
                            <img className='swiper-title' src="https://www.ludics.cl/demoweb/img/ludics/team/OSCAR.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="swiper-photo" src="https://www.ludics.cl/demoweb/img/ludics/team/CATA.webp" alt=""/>
                            <img className='swiper-title' src="https://www.ludics.cl/demoweb/img/ludics/team/CATA.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="swiper-photo" src="https://www.ludics.cl/demoweb/img/ludics/team/DANKO.webp" alt=""/>
                            <img className='swiper-title' src="https://www.ludics.cl/demoweb/img/ludics/team/DANKO.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="swiper-photo" src="https://www.ludics.cl/demoweb/img/ludics/team/CARLOS.webp" alt=""/>
                            <img className='swiper-title' src="https://www.ludics.cl/demoweb/img/ludics/team/CARLOS.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="swiper-photo" src="https://www.ludics.cl/demoweb/img/ludics/team/CAMILA.webp" alt=""/>
                            <img className='swiper-title' src="https://www.ludics.cl/demoweb/img/ludics/team/CAMILA.png" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="swiper-photo" src="https://www.ludics.cl/demoweb/img/ludics/team/JORGE.webp" alt=""/>
                            <img className='swiper-title' src="https://www.ludics.cl/demoweb/img/ludics/team/JORGE.png" alt=""/>
                        </SwiperSlide>
                    </Swiper>
                    </div>

                    <section id="description-ludics-longth">
                        <motion.p className="description-ludics"
                        variants={fadeInAnimations}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                          once: false,
                        }}
                        
                        >
                            <span>SOMOS GENERADORES DE IDEAS, PRODUCTORES DE EXPERIENCIAS Y REALIZADORES CREATIVOS.</span> 
                            <br/>
                            &nbsp;También somos creadores de contenido, actores, cocineros, filósofos, agricultores, 
                            inversionistas y juególogos. Antes de LUDICS, éramos arquitectos, fonoaudiólogos, abogados, periodistas, 
                            entrenadores, fotógrafos, músicos y bailarines. Somos un grupo asombrosamente diverso y shuuuper loco.
                            <br/>
                            <br/>
                            <span className='text-bold' > Siempre estamos buscando personas con talento para enriquecer nuestro trabajo y nuestra agencia. Creemos que es importante 
                            reflejar la diversidad en la que vivimos. </span>

                        </motion.p>
                    </section>
                    

                    {/* <div id="experiencia-title">
                        <img loading="lazy" src={titleDisenadores} alt=""/>
                    </div> */}

                    <div className="banner-footer">
                        <div className="slide-text">
                            <h1 className="text-slider">EVENTOS | TEAM BUILDING | STREAMING | REALIZADORES DE  JUEGOS | PRODUCCIÓN | DISEÑADORES DE EXPERIENCIA | LUDICS PLAY | CREADORES DE CONTENIDO | </h1>
                            <h1 className="text-slider">EVENTOS | TEAM BUILDING | STREAMING | REALIZADORES DE  JUEGOS | PRODUCCIÓN | DISEÑADORES DE EXPERIENCIA | LUDICS PLAY | CREADORES DE CONTENIDO | </h1>
                            <h1 className="text-slider">EVENTOS | TEAM BUILDING | STREAMING | REALIZADORES DE  JUEGOS | PRODUCCIÓN | DISEÑADORES DE EXPERIENCIA | LUDICS PLAY | CREADORES DE CONTENIDO | </h1>
                            <h1 className="text-slider">EVENTOS | TEAM BUILDING | STREAMING | REALIZADORES DE  JUEGOS | PRODUCCIÓN | DISEÑADORES DE EXPERIENCIA | LUDICS PLAY | CREADORES DE CONTENIDO | </h1>
                        </div>
                    </div>


                    <footer>
                        <div className="banner-img-video">
                            <video className="logo-video" src="https://www.ludics.cl/demoweb/img/ludics/tv-ludics-bg.mp4" type="video/mp4" loop autoPlay muted playsInline></video>
                            {/* <video className="logo-video-mobile" src="https://res.cloudinary.com/di5yg1rzm/video/upload/v1717445219/home-local/Secuencia_01_1_cek5q0.webm" type="video/webm" loop autoPlay muted playsInline></video> */}
                        </div>
                    </footer>
                </div>

            </aside>
        </div>
    </>
  )
}

export default Ludics