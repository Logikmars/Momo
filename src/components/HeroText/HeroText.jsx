import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default ({ setactiveBlock }) => {

    const dogsInText = {
        3: 1,
        17: 2,
        32: 3,
        46: 4,
        55: 5,
    }

    const [showText, setshowText] = useState(false);

    const scope = useRef(null);
    useGSAP(() => {
        gsap.to('.Hero__title_text', {
            y: '0px',
            ease: 'none',
            scrollTrigger: {
                // markers: true,
                trigger: '.Hero__title_text',
                start: "0% 60%",
                end: '100% 60%',
            },
            onUpdate: () => {
                setshowText(true)
            }
        })
    }, { scope: scope })


    return (
        <div ref={scope} className="HeroText" id="Hero">
            {/* <div ref={obs}></div> */}
            <div className='Hero__title' id="ABOUT">
                <div className='Hero__title_text'>
                    {
                        `Escape The Feed Shit the dog who on a true digital detox`.split('').map((letter, index) => {
                            return <>
                                {
                                    !!dogsInText[index] && <div className='free_img Hero__title_text_img'>
                                        <img src={`/img/dogs/hero_text_dog_${dogsInText[index]}.webp`} alt=""
                                            style={{
                                                transition: `opacity 200ms ${(index * 30) + 1000}ms`,
                                                // opacity: showContent ? 1 : 0
                                                opacity: showText ? 1 : 0
                                            }} />
                                    </div>
                                }
                                <span
                                    style={{
                                        transition: `opacity 200ms ${index * 30}ms`,
                                        opacity: showText ? 1 : 0
                                    }}
                                >{letter}</span>
                            </>
                        })
                    }


                </div>
            </div>
        </div>

    )
}