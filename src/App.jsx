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
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);



function App() {
  return (
    <div className='App' style={{
      width: `100%`,
      overflow: 'hidden'
    }}>
      <Header />
      <Hero />
      <Partners />
      <About />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
