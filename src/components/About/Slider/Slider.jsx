import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AboutSliderItem from '../AboutSliderItem/AboutSliderItem';
export default () => {

    const listItem = [
        {
            img: '/img/bear1.webp',
            title: 'Buy $MOMO',
            description: 'Download Phantom or your wallet of choice from the store. Desktop users, download the Google Chrome extension by going to Phantom'
        },
        {
            img: '/img/bear2.webp',
            title: 'Buy $MOMO',
            description: 'Download Phantom or your wallet of choice from the store. Desktop users, download the Google Chrome extension by going to Phantom'
        },
        {
            img: '/img/bear3.webp',
            title: 'Buy $MOMO',
            description: 'Download Phantom or your wallet of choice from the store. Desktop users, download the Google Chrome extension by going to Phantom'
        },
        {
            img: '/img/bear4.webp',
            title: 'Buy $MOMO',
            description: 'Download Phantom or your wallet of choice from the store. Desktop users, download the Google Chrome extension by going to Phantom'
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
        <div ref={scope}>
            <div className='About__slider_wrapper' id='HOW_TO_BUY'>
                <div className='About__slider'>
                    {listItem.map((el, index) => (
                        <AboutSliderItem
                            key={index}
                            currentSlide={currentSlide}
                            index={index + 1}
                            img={el.img}
                            title={el.title}
                            description={el.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}