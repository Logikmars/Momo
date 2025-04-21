import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Gallery from "./components/Gallery/Gallery"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Partners from "./components/Partners/Partners"
import Tokenomics from "./components/Tokenomics/Tokenomics"

import { useEffect, useRef, useState } from "react"
import HeroText from "./components/HeroText/HeroText"
import Nav from "./components/Nav/Nav"


import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);



function App() {

  const [showContent, setshowContent] = useState(false);

  const [activeBlock, setactiveBlock] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setactiveBlock(0)
    }, 1000);
  }, [])

  useEffect(() => {
    document.body.style.overflow = showContent ? '' : 'hidden';
    document.body.style.position = showContent ? '' : 'fixed';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showContent]);


  const scope = useRef(null)

  useGSAP(() => {
    gsap.to(".HeroText", {
      scrollTrigger: {
        trigger: ".HeroText",
        start: "0% 0%",
        end: '100% 100%',
        // markers: true,
        onUpdate: () => {
          console.log('enter to 1');
          setactiveBlock(1)
        }
      }
    });
    gsap.to(".Slider", {
      scrollTrigger: {
        trigger: ".Slider",
        start: "0% 0%",
        end: '100% 100%',
        // markers: true,
        onUpdate: () => {
          console.log('enter to 2');
          setactiveBlock(2)
        },
      }
    });
    gsap.to(".Tokenomics_wrapper", {
      scrollTrigger: {
        trigger: ".Tokenomics_wrapper",
        start: "0% 0%",
        end: '100% 100%',
        // markers: true,
        onUpdate: () => {
          console.log('enter to 3');
          setactiveBlock(3)
        },
      }
    });
    gsap.to(".Gallery", {
      scrollTrigger: {
        trigger: ".Gallery",
        start: "0% 0%",
        end: '100% 100%',
        // markers: true,
        onUpdate: () => {
          console.log('enter to 4');
          setactiveBlock(4)
        },
      }
    });
    gsap.to(".Footer", {
      scrollTrigger: {
        trigger: ".Footer",
        start: "0% 100%",
        end: '0% 100%',
        // markers: true,
        onUpdate: () => {
          console.log('enter to 5');
          setactiveBlock(5)
        },
      }
    });
  }, { scope: scope })

  return (
    <div className='App' style={{
      width: `100%`,
      overflow: 'hidden',
      maxHeight: showContent ? 'none' : '100dvh'
    }}
      ref={scope}
    >
      <div className='App_noise'>
      </div>
      <div className='Header__nav' style={{
        opacity: showContent ? 1 : 0
      }}>
        <Nav activeTab={activeBlock} />
      </div>
      <Header showContent={showContent} />
      <Hero showContent={showContent} setshowContent={setshowContent} />
      <HeroText setactiveBlock={setactiveBlock} />
      <About setactiveBlock={setactiveBlock} />
      <Tokenomics setactiveBlock={setactiveBlock} />
      <Gallery setactiveBlock={setactiveBlock} />
      <Footer setactiveBlock={setactiveBlock} />
    </div>
  )
}

export default App
