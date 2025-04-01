import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Gallery from "./components/Gallery/Gallery"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Partners from "./components/Partners/Partners"



import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useState } from "react"
import HeroText from "./components/HeroText/HeroText"
import Nav from "./components/Nav/Nav"
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


  return (
    <div className='App' style={{
      width: `100%`,
      overflow: 'hidden',
      maxHeight: showContent ? 'none' : '100dvh'
    }}>
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
      <Partners />
      <About setactiveBlock={setactiveBlock} />
      <Gallery setactiveBlock={setactiveBlock} />
      <Footer setactiveBlock={setactiveBlock} />
    </div>
  )
}

export default App
