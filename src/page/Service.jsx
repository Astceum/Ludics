import React, { useState, useRef, useEffect } from 'react';

import Modal from '../components/Modal.jsx'
import { EventoData } from '../components/dataService/EventoData.jsx';
import { TeamBuildingData } from '../components/dataService/TeamBuildingData .jsx';
import { AudiovisualData } from '../components/dataService/AudiovisualData.jsx';
import { DisenoData } from '../components/dataService/DisenoData.jsx';
import { StudioData } from '../components/dataService/StudioData.jsx';
import { TvShowData } from '../components/dataService/TvShowData.jsx';

import LazyVideo from '../components/LazyVideo';
import LazyImage from '../components/LazyImage.jsx';





function Service() {
    const [showModal, setShowModal] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const openModal = (videoUrl) => {
    setVideoUrl(videoUrl);
    setShowModal(prev => !prev);
  }

  return (
    <>
    <div id="eventos">
                <aside id="t_eventos">
                    <div id="btn-eventos">
                        <h2>EVENTOS</h2>

                        {EventoData.map(event => (
                            <div className="video ver animate-1" key={event.id}>
                                <a type="button" onClick={() => openModal(event.videoUrl)} >
                                    <div className="title-container">
                                        <h3 className="subtitle-video">{event.subTitles.toUpperCase()}</h3>
                                        <h1 className="title-video">{event.title.toUpperCase()}</h1>
                                    </div>
                                    <h4 className="play-mobile">PLAY</h4>
                                    <LazyImage src={event.imgSrc} alt="" className="img-front" />
                                    <LazyVideo
                                        src={event.videoSrc}
                                        type="video/mp4"
                                        className="video-1"
                                        placeholder={event.imgSrc}
                                    />
                                </a>
                            </div>
                        ))}
                        <div className="text-description-service">
                            <h3>EVENTOS</h3>
                            <p>Nuestro perfeccionamiento día a día y la confianza de nuestros clientes nos
                                han llevado a realizar todo tipo de eventos en el sentido más amplio de la
                                palabra, desde activaciones de marca, lanzamientos de productos, giras,
                                eventos corporativos presenciales, virtuales e hibridos hasta eventos
                                masivos.
                                Queremos sorprender, destacar y superar las expectativas de nuestros
                                clientes a travez de nuestra mejor expertiz, la creatividad y originalidad.</p>
                        </div>

                    </div>
                </aside>
            </div>
            <div id="building">
                <aside id="t_building">
                    <div id="btn-building">
                        <h2>TEAM BUILDING</h2>

                        {TeamBuildingData.map(event => (
                            <div className="video ver animate-1" key={event.id}>
                                <a type="button" onClick={() => openModal(event.videoUrl)} >
                                    <div className="title-container">
                                        <h3 className="subtitle-video">{event.subTitles.toUpperCase()}</h3>
                                        <h1 className="title-video">{event.title.toUpperCase()}</h1>
                                    </div>
                                    <h4 className="play-mobile">PLAY</h4>
                                    <LazyImage src={event.imgSrc} alt="" className="img-front" />
                                    <LazyVideo
                                        src={event.videoSrc}
                                        type="video/mp4"
                                        className="video-1"
                                        placeholder={event.imgSrc}
                                    />
                                </a>
                            </div>
                        ))}
                        <div className="text-description-service">
                            <h3>TEAM BUILDING</h3>
                            <p>Nuestra área especializada en entretención ha proporcionado un producto único a
                                la medida de nuestros clientes. Nuestros innovadores formatos de Team Building,
                                les permite experimentar la vivencia de participar en una competencia como en los
                                mejores programas de televisión. Todas las actividades están orientadas a realizar
                                trabajo en equipo e integración, además de fortalecer la comunicación entre los
                                colaboradores.
                                Esto nos ha llevado a aumentar la expertiz de nuevas propuestas para los clientes.
                                SOMOS LUDICS!! La evolución del Team Building.</p>
                        </div>
                    </div>
                </aside>
            </div>
            <div id="audiovisual">
                <aside id="t_audiovisual">
                    <div id="btn-audiovisual">
                        <h2>PRODUCCIÓN AUDIOVISUAL</h2>

                        {AudiovisualData.map(event => (
                            <div className="video ver animate-1" key={event.id}>
                                <a type="button" onClick={() => openModal(event.videoUrl)} >
                                    <div className="title-container">
                                        <h3 className="subtitle-video">{event.subTitles.toUpperCase()}</h3>
                                        <h1 className="title-video">{event.title.toUpperCase()}</h1>
                                    </div>
                                    <h4 className="play-mobile">PLAY</h4>
                                    <LazyImage src={event.imgSrc} alt="" className="img-front" />
                                    <LazyVideo
                                        src={event.videoSrc}
                                        type="video/mp4"
                                        className="video-1"
                                        placeholder={event.imgSrc}
                                    />
                                </a>
                            </div>
                        ))}
                        <div className="text-description-service">
                            <h3>PRODUCCIÓN AUDIOVISUAL</h3>
                            <p>Sabemos que la tecnología audiovisual juega un papel fundamental en la
                                era moderna, es por esto que elaboramos proyectos con los estándares
                                más actuales, adaptándolos a cualquier plataforma digital. Hemos tenido
                                experiencia en Videos corporativos, Contenidos de marcas, Material para
                                Social media, Motion graphics y Animación corporativa.
                                Sabemos que nuestra principal tarea es materializar la visión del cliente en
                                cada proyecto para poder transformarlo en el producto esperado.</p>
                        </div>
                    </div>
                </aside>
            </div>
            <div id="marketing">
                <aside id="t_marketing">
                    <div id="btn-marketing">
                        <h2>DISEÑO & REALIZACIÓN</h2>

                        {DisenoData.map(event => (
                            <div className="video ver animate-1" key={event.id}>
                                <a type="button" onClick={() => openModal(event.videoUrl)} >
                                    <div className="title-container">
                                        <h3 className="subtitle-video">{event.subTitles.toUpperCase()}</h3>
                                        <h1 className="title-video">{event.title.toUpperCase()}</h1>
                                    </div>
                                    <h4 className="play-mobile">PLAY</h4>
                                    <LazyImage src={event.imgSrc} alt="" className="img-front" />
                                    <LazyVideo
                                        src={event.videoSrc}
                                        type="video/mp4"
                                        className="video-1"
                                        placeholder={event.imgSrc}
                                    />
                                </a>
                            </div>
                        ))}
                        <div className="text-description-service">
                            <h3>DISEÑO & REALIZACIÓN</h3>
                            <p>Contamos con un equipo de diseñadores creativos capacitados para realizar
                                y producir proyectos adaptados a los nuevos tiempos, usando formatos de
                                diseño online y offline, con el fin de mejorar la experiencia de marca para
                                nuestros clientes.
                                Buscamos impulsar los productos desde la innovación e integrarlos
                                constantemente a las nuevas tendencias, creando la idea, produciendo la
                                experiencia y realizando el proyecto final.</p>
                        </div>
                    </div>
                </aside>
            </div>
            <div id="estudio">
                <aside id="t_estudio">
                    <div id="btn-estudio">
                        <h2>ESTUDIO & STREAMING</h2>

                        {StudioData.map(event => (
                            <div className="video ver animate-1" key={event.id}>
                                <a type="button" onClick={() => openModal(event.videoUrl)} >
                                    <div className="title-container">
                                        <h3 className="subtitle-video">{event.subTitles.toUpperCase()}</h3>
                                        <h1 className="title-video">{event.title.toUpperCase()}</h1>
                                    </div>
                                    <h4 className="play-mobile">PLAY</h4>
                                    <LazyImage src={event.imgSrc} alt="" className="img-front" />
                                    <LazyVideo
                                        src={event.videoSrc}
                                        type="video/mp4"
                                        className="video-1"
                                        placeholder={event.imgSrc}
                                    />
                                </a>
                            </div>
                        ))}
                        <div className="text-description-service">
                            <h3>ESTUDIO & STREAMING</h3>
                            <p>Nuestro estudio de televisión digital cuenta con los más altos estándares de
                                transmisión en vivo, logrando la mejor interacción con los asistentes.
                                Te invitamos a conocer nuestra nueva plataforma digital donde podemos
                                realizar contenido para las marcas, videos corporativos, lanzamientos de
                                productos, redes sociales y programas de televisión especialmente
                                diseñados para las empresas.</p>
                        </div>
                    </div>
                </aside>
            </div>
            <div id="tvshow">
                <aside id="t_tvshow">
                    <div id="btn-tvshow">
                        <h2>TV SHOW</h2>

                        {TvShowData.map(event => (
                            <div className="video ver animate-1" key={event.id}>
                                <a type="button" onClick={() => openModal(event.videoUrl)} >
                                    <div className="title-container">
                                        <h3 className="subtitle-video">{event.subTitles.toUpperCase()}</h3>
                                        <h1 className="title-video">{event.title.toUpperCase()}</h1>
                                    </div>
                                    <h4 className="play-mobile">PLAY</h4>
                                    <LazyImage src={event.imgSrc} alt="" className="img-front" />
                                    <LazyVideo
                                        src={event.videoSrc}
                                        type="video/mp4"
                                        className="video-1"
                                        placeholder={event.imgSrc}
                                    />
                                </a>
                            </div>
                        ))}
                        <div className="text-description-service">
                            <h3>TV SHOW</h3>
                            <p>Nuestro desarrollo creativo y expertiz en juegos nos ha llevado a ser parte
                                de importantes programas de televisión, tanto reality show como estelares.
                                Algunos de ellos son:
                                Mundos Opuestos 1 y 2, Pareja Perfecta, Generaciones Cruzadas, Vertigo
                                en la Calle, La Vega, Socios de la Parrilla, Minuto Para Ganar entre otros.
                                <br/><br/>
                                <span>Hemos lanzado más JUEGOS que nadie, y no vamos a parar.</span>
                            </p>
                        </div>
                    </div>
                </aside>
            </div>            
            <Modal showModal={showModal} setShowModal={setShowModal} videoUrl={videoUrl} />
        </>
  )
}

export default Service