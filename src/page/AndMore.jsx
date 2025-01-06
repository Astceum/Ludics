import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Modal from '../components/Modal.jsx'
import useDeviceType from '../components/useDeviceType.jsx';
import LazyImage from '../components/LazyImage.jsx';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import titleLogoTv from "../assets/image/ymas/title/LogoTV.svg";
import iconMail from "../assets/svg/mail.svg";
import iconPhone from "../assets/svg/phone.svg";
import contactoBg from "../assets/image/ymas/title/TRIANGULO.svg";
import hanConfiado from "../assets/image/ymas/title/han-confiado.svg";
import losMejores from "../assets/image/ymas/title/title-losMejores-osweld.svg";

import Company from '../components/Company.jsx';
import CompanyMobile from '../components/CompanyMobile.jsx';


import '../css/page/andMore.css'
import { Autoplay, Navigation } from 'swiper/modules';
import { slidesData2 } from '../components/Swiper2Data.jsx';
import { slidesData3 } from '../components/Swiper3Data.jsx';

const fadeInAnimations = {
  initial: {
    opacity: 0,
    y: 300,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  }
}

const bounceInRightAnimations = {
  initial: {
    opacity: 0,
    x: 500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 20,
      stiffness: 200,
      delay: 0.5,
      duration: 6,
    },
  }
}

const bounceInLeftAnimations = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 20,
      stiffness: 200,
      delay: 0.5,
      duration: 6,
    },
  }
}

const bounceInRightAnimationsMobile = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 20,
      stiffness: 200,
      delay: 0.5,
      duration: 6,
    },
  }
}

const bounceInLeftAnimationsMobile = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 20,
      stiffness: 200,
      delay: 0.5,
      duration: 6,
    },
  }
}

function AndMore() {
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openModal = (videoUrl) => {
    setVideoUrl(videoUrl);
    setShowModal(prev => !prev);
  }

  const [autoplayDelay, setAutoplayDelay] = useState(2500);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setAutoplayDelay(1800);
      } else {
        setAutoplayDelay(2500);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const inMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const deviceType = useDeviceType();


  return (
    <>
    {/* <div id="t_and_more"> */}
      <aside id="and-more">
                
        <div id="container-resume">
            <div className="gradient-resume">
                <img loading="lazy" src={titleLogoTv} alt=""/>
                <h4><span>¡DALE PLAY A LA ENTRETENCIÓN!</span></h4>
                <p>TE INVITAMOS A VER PARTE DE NUESTRO CONTENIDO DIGITAL.
                </p>
            </div>
            <section className="video-resume">
                <video id="preview" src={inMobile ? '' : "https://www.ludics.cl/demoweb/img/y-mas/Diseno-LDCS.mp4"} type="video/mp4" loop autoPlay muted playsInline></video>
            </section>
        </div>
        <div className="slider-portafolio">
        <div className='swiper2-container'>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            speed={1500}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper2-button-next',
              prevEl: '.swiper2-button-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1025: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            
            modules={[Autoplay, Navigation]}
            className="swiper2 mySwiper2"
          >
            {slidesData2.map(slide => (
                <SwiperSlide key={slide.id}>
                    <a type="button" onClick={() => openModal(slide.videoUrl)} className="ver">
                        <img src={slide.imgSrc} alt="" />
                    </a>
                </SwiperSlide>
            ))}
          </Swiper>
            <div className="swiper2-button-next">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </div>
            <div className="swiper2-button-prev">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </div>
          </div>
          
          <div className='swiper3-container'>
          <Swiper
          slidesPerView={3}
          spaceBetween={20}
          dir="rtl"
          loop={true}
          speed={1500}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper3-button-next',
            prevEl: '.swiper3-button-prev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
          
          modules={[Autoplay, Navigation]}
          className="swiper3 mySwiper3"
        >
          {slidesData3.map(slide => (
              <SwiperSlide key={slide.id}>
                  <a type="button" onClick={() => openModal(slide.videoUrl)} className="ver">
                      <img src={slide.imgSrc} alt="" />
                  </a>
              </SwiperSlide>
          ))}
        </Swiper> 
          <div className="swiper3-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 320 512">
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
          </div>
          <div className="swiper3-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 320 512">
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
          </div>
        </div>
        </div>

        
        <div className='info-andMore'>  
        <section className='company-container'>
            <div id="title-company-and-more">
              <motion.img loading="lazy" className='title-losMejores' src={losMejores} alt=""
                variants={isMobile ? bounceInLeftAnimationsMobile : bounceInLeftAnimations}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false,
                }}
              ></motion.img>
              <motion.img loading="lazy" className='han-confiado' src={hanConfiado} alt=""
                variants={isMobile ? bounceInRightAnimationsMobile : bounceInRightAnimations}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false,
                }}>
              </motion.img>
            </div>
              {
                isMobile ? <CompanyMobile/> : <Company />
              }
          {/* </div> */}
        
        </section>
        {/* <div> */}
        {deviceType === 'ios' && 
        <>
        <motion.div className='contacto-bg-ios'
        variants={inMobile ? '' : fadeInAnimations}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: false,
        }}>
          <img src={contactoBg} alt="" />
          <div className='date-contact-ios'>
            <ul>
              <li>
                <img loading="lazy" src={iconMail} alt="" height="92px" />
                <h2>INFO@LUDICS.CL</h2>
              </li>
              <li>
                <img loading="lazy" src={iconPhone} alt="" height="92px" />
                <h2>+56 9 8804 3665</h2>
              </li>
            </ul>
          </div>
          
        <div className='footer-andMore-ios'>
          <h3>© 2024, &nbsp;&nbsp; BY &nbsp;&nbsp;LUDICS &nbsp;&nbsp;|&nbsp;&nbsp; DISEÑADORES &nbsp;DE &nbsp;EXPERIENCIAS</h3>
          
        </div>
        </motion.div>
        </>}
        {deviceType === 'android' && 
        <>
        <motion.div className='contacto-bg'
        variants={inMobile ? '' : fadeInAnimations}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: false,
        }}>
          <img src={contactoBg} alt="" />
          <div className='date-contact'>
            <ul>
              <li>
                <img loading="lazy" src={iconMail} alt="" height="92px" />
                <h2>INFO@LUDICS.CL</h2>
              </li>
              <li>
                <img loading="lazy" src={iconPhone} alt="" height="92px" />
                <h2>+56 9 8804 3665</h2>
              </li>
            </ul>
          </div>
          
        <div className='footer-andMore'>
          <h3>© 2024, &nbsp;&nbsp; BY &nbsp;&nbsp;LUDICS &nbsp;&nbsp;|&nbsp;&nbsp; DISEÑADORES &nbsp;DE &nbsp;EXPERIENCIAS</h3>
          
        </div>
        </motion.div>
        </>}
        {deviceType === 'desktop' && 
        <>
        <motion.div className='contacto-bg'
        variants={inMobile ? '' : fadeInAnimations}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: false,
        }}>
          <img src={contactoBg} alt="" />
          <div className='date-contact'>
            <ul>
              <li>
                <img loading="lazy" src={iconMail} alt="" height="92px" />
                <h2>INFO@LUDICS.CL</h2>
              </li>
              <li>
                <img loading="lazy" src={iconPhone} alt="" height="92px" />
                <h2>+56 9 8804 3665</h2>
              </li>
            </ul>
          </div>
          
        <div className='footer-andMore'>
          <h3>© 2024, &nbsp;&nbsp; BY &nbsp;&nbsp;LUDICS &nbsp;&nbsp;|&nbsp;&nbsp; DISEÑADORES &nbsp;DE &nbsp;EXPERIENCIAS</h3>
          
        </div>
        </motion.div>
        </>}

        {/* </div> */}
      </div>
      </aside>
      <Modal showModal={showModal} setShowModal={setShowModal} videoUrl={videoUrl} />
    {/* </div> */}
    </>
  )
}

export default AndMore