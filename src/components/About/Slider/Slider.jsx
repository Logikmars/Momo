import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AboutSliderItem from '../AboutSliderItem/AboutSliderItem';
export default () => {

    const listItem = [
        {
            img: '/img/bear1.webp',
            title: `Wait, this ain't grass`,
            description: `Get your eyes off the screen. Go outside. Call your mom. This page was not meant to be found.`
        },
        {
            img: '/img/bear2.webp',
            title: 'Still here?',
            description: `Alright grass-toucher. Guess it's time to teach you how to buy $MOMO. Don't say we didn't warn you and prepare the SOL.`
        },
        {
            img: '/img/bear3.webp',
            title: 'Go to raydium.io',
            description: `Now that you have some Solana, head to Raydium.io (or Jup.ag if you prefer) to be able to swap your $SOL for some $MOMO.`
        },
        {
            img: '/img/bear4.webp',
            title: 'Buy $MOMO',
            description: `And that's how you ended up holding 8 figures of $MOMO. Congrats.`
        }
    ];


    const [currentSlide, setcurrentSlide] = useState(1);

    const scope = useRef(null);
    useGSAP(() => {
        if (window.innerWidth > 700) {
            gsap.to('.About__slider', {
                y: '0px',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.About__slider_wrapper',
                    scrub: 0,
                    // markers: true,
                    pin: '.About__slider',
                    pinSpacing: false,
                    start: 'top 0%',
                    end: 'bottom 100%',
                    onUpdate: self => {
                        const percent = Math.round(self.progress * 100);
                        // console.log('Progress:', percent + '%');
                        setcurrentSlide(Math.max(Math.ceil(percent / (100 / 4)), 1))
                    }
                }
            })
        }
    }, { scope: scope })

    return (
        <div ref={scope} className='Slider'>
            <div className='About__slider_wrapper' id='HOW_TO_BUY'>
                <div className='About__slider'>
                    {listItem.map((el, index) => (
                        <AboutSliderItem
                            key={index}
                            currentSlide={currentSlide}
                            index={index + 1}
                            title={el.title}
                            description={el.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}