import { useEffect, useRef, useState } from 'react';
import Nav from '../Nav/Nav';
import './About.scss';
import AboutSliderItem from './AboutSliderItem/AboutSliderItem';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Slider from './Slider/Slider';

export default ({ setactiveBlock }) => {

    const obs = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setactiveBlock(2)
            },
            { threshold: 0.1 }
        );

        if (obs.current) observer.observe(obs.current);

        return () => {
            if (obs.current) observer.unobserve(obs.current);
        };
    }, []);


    return (
        <div>
            <div className='About' >
                <div className='About__paper'>
                    <img src="/img/paper.webp" alt="" />
                </div>
                <div ref={obs}></div>

                <Slider />

            </div>
        </div>
    );
};
