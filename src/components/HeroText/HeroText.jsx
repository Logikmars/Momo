import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default ({ setactiveBlock }) => {

    const dogsInText = {
        4: 1,
        145: 2,
        109: 3,
        96: 4,
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

                        `A gentle, cozy feeling that's like a snuggly blanket wrapped around your soul. To Pawse is to melt into a state of pure chill where everything is soft and easy.`.split('').map((letter, index) => {
                            return <>
                                {
                                    !!dogsInText[index] && <div className='free_img Hero__title_text_img'>
                                        <img src={`/img/dogs/hero_text_dog_${dogsInText[index]}.webp`} alt=""
                                            style={{
                                                transition: `opacity 200ms ${(index * 3) + 1000}ms`,
                                                // opacity: showContent ? 1 : 0
                                                opacity: showText ? 1 : 0
                                            }} />
                                    </div>
                                }
                                <span
                                    style={{
                                        transition: `opacity 200ms ${index * 3}ms`,
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