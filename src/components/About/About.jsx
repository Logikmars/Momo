import { useEffect, useRef, useState } from 'react';
import Nav from '../Nav/Nav';
import './About.scss';
import AboutSliderItem from './AboutSliderItem/AboutSliderItem';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Slider from './Slider/Slider';
import Tokenomics from '../Tokenomics/Tokenomics';

export default ({ setactiveBlock }) => {


    return (
        <div className='About' >
            <div className='About_content'>
                <div className='About__paper'>
                    <img src="/img/paper.webp" alt="" />
                </div>
                <Slider />
            </div>
            <Tokenomics />
        </div>
    );
};
