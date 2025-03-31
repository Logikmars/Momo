import { useEffect, useState } from 'react';
import './Hero.scss';
export default () => {

    const [textShow, settextShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            settextShow(true)
        }, 500);

    }, [])


    const dogsInText = {
        3: 1,
        17: 2,
        32: 3,
        46: 4,
        55: 5,
    }

    return (
        <div className='Hero'>

            <div className='Hero__title'>
                <div className='Hero__title_text'>
                    {
                        `Escape The Feed Shit the dog who on a true digital detox`.split('').map((letter, index) => {
                            return <>
                                {
                                    !!dogsInText[index] && <div className='free_img Hero__title_text_img'>
                                        <img src={`/img/dogs/hero_text_dog_${dogsInText[index]}.webp`} alt="" />
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