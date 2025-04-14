//React
import React, { useEffect, useRef } from 'react';

//Smooth scroll (with GSAP and Lenis)
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

//Bulma
import './../node_modules/bulma/css/bulma.min.css';

// Components
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const lenisRef = useRef(null);

  useEffect(() => {
    // Init Lenis (smooth scrolling)
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out
      smooth: true,
    });

    lenisRef.current = lenis;

    // Raf pour animer le scroll en continu
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Synchroniser GSAP ScrollTrigger avec Lenis
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    const onScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onScroll);

    // Nettoyage
    return () => {
      lenis.destroy();
      lenis.off('scroll', onScroll);
    };
  }, []);


  return (
    <div className="App has-navbar-fixed-top">
      <Header />
      <Main />

    </div>
  );
}

export default App;
