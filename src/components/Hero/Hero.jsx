import { useEffect, useRef, useState } from 'react';
import './Hero.scss';
export default () => {



    const videoRef = useRef(null);
    const videoRef2 = useRef(null);

    const [textShow, settextShow] = useState(false);



    const dogsInText = {
        3: 1,
        17: 2,
        32: 3,
        46: 4,
        55: 5,
    }

    const handleEnded = () => {
        if (videoRef.current) {
            videoRef.current.style.opacity = 0
        }
        if (videoRef2.current) {
            videoRef2.current.play()
            videoRef2.current.style.opacity = .2
            settextShow(true)
        }
    }

    return (
        <div className='Hero' id='#ABOUT'>
            <div className='Hero_video'>
                <video
                    ref={videoRef}
                    src="/vid_hor.mp4"
                    autoPlay
                    muted
                    playsInline
                    // loop
                    onEnded={handleEnded}
                    style={{
                        transition: `opacity 500ms`
                    }}
                />
            </div>
            <div className='Hero_video'>
                <video
                    ref={videoRef2}
                    src="/cycle_hor.mp4"
                    // autoPlay
                    muted
                    playsInline
                    loop

                    style={{
                        transition: `opacity 500ms`,
                        opacity: 0
                    }}
                />
            </div>
            <div className='Hero__title'>
                <div className='Hero__title_text'>
                    {
                        `Escape The Feed Shit the dog who on a true digital detox`.split('').map((letter, index) => {
                            return <>
                                {
                                    !!dogsInText[index] && <div className='free_img Hero__title_text_img'>
                                        <img src={`/img/dogs/hero_text_dog_${dogsInText[index]}.webp`} alt=""
                                            style={{
                                                transition: `opacity 200ms ${(index * 50) + 1000}ms`,
                                                opacity: textShow ? 1 : 0
                                            }} />
                                    </div>
                                }
                                <span
                                    style={{
                                        transition: `opacity 200ms ${index * 50}ms`,
                                        opacity: textShow ? 1 : 0
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