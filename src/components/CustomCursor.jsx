import React, { useEffect, useRef } from 'react';
import '../css/customCursor.css';

const CustomCursor = () => {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);
  const innerCursorPlayRef = useRef(null);
  const innerPlayRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      innerCursorRef.current.style.left = `${x}px`;
      innerCursorRef.current.style.top = `${y}px`;
      innerCursorPlayRef.current.style.left = `${x}px`;
      innerCursorPlayRef.current.style.top = `${y}px`;
      outerCursorRef.current.style.left = `${x}px`;
      outerCursorRef.current.style.top = `${y}px`;
      innerPlayRef.current.style.left = `${x}px`;
      innerPlayRef.current.style.top = `${y}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    const links = Array.from(document.querySelectorAll('a'));
    const plays = Array.from(document.querySelectorAll('.ver'));

    links.forEach((link) => {
      link.addEventListener('mouseover', () => {
        outerCursorRef.current.classList.add('grow');
      });
      link.addEventListener('mouseleave', () => {
        outerCursorRef.current.classList.remove('grow');
      });
    });

    plays.forEach((play) => {
      play.addEventListener('mouseover', () => {
        innerCursorPlayRef.current.classList.add('play');
        innerCursorRef.current.classList.add('play');
        innerPlayRef.current.classList.add('play');
        innerPlayRef.current.innerHTML = `<h1>VER</h1>`;
      });
      play.addEventListener('mouseleave', () => {
        innerCursorPlayRef.current.classList.remove('play');
        innerCursorRef.current.classList.remove('play');
        innerPlayRef.current.classList.remove('play');
        innerPlayRef.current.innerHTML = ``;
      });
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      links.forEach((link) => {
        link.removeEventListener('mouseover', () => {
          outerCursorRef.current.classList.add('grow');
        });
        link.removeEventListener('mouseleave', () => {
          outerCursorRef.current.classList.remove('grow');
        });
      });
      plays.forEach((play) => {
        play.removeEventListener('mouseover', () => {
          innerCursorPlayRef.current.classList.add('play');
          innerCursorRef.current.classList.add('play');
          innerPlayRef.current.classList.add('play');
          innerPlayRef.current.innerHTML = `<h1>VER</h1>`;
        });
        play.removeEventListener('mouseleave', () => {
          innerCursorPlayRef.current.classList.remove('play');
          innerCursorRef.current.classList.remove('play')
          innerPlayRef.current.classList.remove('play');
          innerPlayRef.current.innerHTML = ``;
        });
      });
    };
  }, []);

  return (
    <>
      <div className="inner-cursor" ref={innerCursorRef}></div>
      <div className="outer-cursor" ref={outerCursorRef}></div>
      <div className="inner-cursor-play" ref={innerCursorPlayRef}></div>
      <div className="innerPlay" ref={innerPlayRef}></div>
    </>
  );
};

export default CustomCursor;
