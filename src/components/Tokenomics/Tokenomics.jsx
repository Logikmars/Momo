import { useEffect, useRef } from 'react';
import './Tokenomics.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export default ({ setactiveBlock }) => {


    const scope = useRef(null);
    useGSAP(() => {
        for (let index = 0; index < 9; index++) {
            gsap.fromTo(`.Tokenomics_bit_${index}`, {
                y: `${index * 50}px`,
                x: `${(index - 4) * 50}px`,

            }, {
                y: '0px',
                x: `0px`,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Tokenomics',
                    scrub: (index + 1),
                    // markers: true,
                    start: `top 90%`,
                    end: `50% 90%`,
                }
            })
        }
        gsap.fromTo(`.Tokenomics_bonePart_0`, {
            rotate: `20deg`,
            y: `100px`,
            x: `-200px`,

        }, {
            rotate: `0deg`,
            y: '0px',
            x: `0px`,
            ease: 'none',
            scrollTrigger: {
                trigger: '.Tokenomics',
                scrub: 5,
                // markers: true,
                start: 'top 90%',
                end: '50% 90%',
            }
        })
        gsap.fromTo(`.Tokenomics_bonePart_1`, {
            rotate: `50deg`,
            y: `300px`,
            x: `-50px`,

        }, {
            rotate: `0deg`,
            y: '0px',
            x: `0px`,
            ease: 'none',
            scrollTrigger: {
                trigger: '.Tokenomics',
                scrub: 3,
                // markers: true,
                start: 'top 90%',
                end: '50% 90%',
            }
        })
        gsap.fromTo(`.Tokenomics_bonePart_2`, {
            rotate: `-100deg`,
            y: `600px`,
            x: `00px`,

        }, {
            rotate: `0deg`,
            y: '0px',
            x: `0px`,
            ease: 'none',
            scrollTrigger: {
                trigger: '.Tokenomics',
                scrub: 3,
                // markers: true,
                start: 'top 90%',
                end: '50% 90%',
            }
        })
        gsap.fromTo(`.Tokenomics_bonePart_3`, {
            rotate: `-50deg`,
            y: `-200px`,
            x: `200px`,

        }, {
            rotate: `0deg`,
            y: '0px',
            x: `0px`,
            ease: 'none',
            scrollTrigger: {
                trigger: '.Tokenomics',
                scrub: 4,
                // markers: true,
                start: 'top 90%',
                end: '50% 90%',
            }
        })
        gsap.fromTo(`.Tokenomics_char`, {
            y: `200px`,

        }, {
            rotate: `0deg`,
            y: '0px',
            ease: 'none',
            scrollTrigger: {
                trigger: '.Tokenomics',
                scrub: 2,
                // markers: true,
                start: '30% 90%',
                end: '50% 90%',
            }
        })
        gsap.fromTo(`.Tokenomics_boneLeft`, {
            y: `200px`,
            x: `-100px`,

        }, {
            rotate: `0deg`,
            x: `0px`,
            y: '0px',
            ease: 'none',
            scrollTrigger: {
                trigger: '.Tokenomics',
                scrub: 2,
                // markers: true,
                start: '40% 90%',
                end: '50% 90%',
            }
        })
        gsap.fromTo(`.Tokenomics_boneRight`, {
            y: `200px`,
            x: `100px`,

        }, {
            rotate: `0deg`,
            y: '0px',
            x: `0px`,
            ease: 'none',
            scrollTrigger: {
                trigger: '.Tokenomics',
                scrub: 3,
                markers: true,
                start: '49% 90%',
                end: '50% 90%',
            }
        })
    }, { scope: scope })


    return (
        <div className='Tokenomics_wrapper' ref={scope}>
            <div className='Tokenomics' >
                <div className={`Tokenomics_boneLeft free_img`}>
                    <img src={`/img/tokenomics/resized_boneLeft.webp`} alt="" />
                </div>
                <div className={`Tokenomics_boneRight free_img`}>
                    <img src={`/img/tokenomics/resized_boneRight.webp`} alt="" />
                </div>
                <div className={`Tokenomics_char free_img`}>
                    <img src={`/img/tokenomics/resized_char.webp`} alt="" />
                </div>
                {Array(9)
                    .fill(0)
                    .map((_, index) => {
                        return <div className={`Tokenomics_bit_${index} free_img`} key={`Tokenomics_bit_${index}`}>
                            <img src={`/img/tokenomics/resized_bit${index + 1}.webp`} alt="" />
                        </div>
                    })}
                {Array(4)
                    .fill(0)
                    .map((_, index) => {
                        return <div className={`Tokenomics_bonePart_${index} free_img`} key={`Tokenomics_bonePart_${index}`}>
                            <img src={`/img/tokenomics/resized_bonePart${index + 1}.webp`} alt="" />
                        </div>
                    })}
            </div>
        </div>
    )
}