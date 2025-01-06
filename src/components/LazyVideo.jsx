import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import LazyImage from './LazyImage';

const LazyVideo = ({ src, type, className, placeholder }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: [0, 0.25, 0.5, 0.75, 1],
    rootMargin: '1300px',
  });

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div ref={inViewRef} className={className}>
      {!isLoaded && <LazyImage src={isMobile ? '' : placeholder} alt="Loading..." className="placeholder" />}
      {inView && (
        <video
          src={isMobile ? '' : src} // Si es móvil, el src se establece como una cadena vacía
          type={type}
          loop
          autoPlay
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
      )}
    </div>
  );
};

export default LazyVideo;