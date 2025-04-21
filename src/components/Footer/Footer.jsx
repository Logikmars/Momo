import { useEffect, useRef } from 'react';
import './Footer.scss';
export default ({ setactiveBlock }) => {

    // const obs = useRef(null)

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setactiveBlock(5)
    //         },
    //         { threshold: 0.1 }
    //     );
    //     if (obs.current) observer.observe(obs.current);
    //     return () => {
    //         if (obs.current) observer.unobserve(obs.current);
    //     };
    // }, []);

    return (
        <div className='Footer' id='SOCIALS'>
            {/* <div ref={obs}></div> */}
            <div className='Footer__links'>
                <a className='Footer__links_item' href='#'>X / TWITTER</a>
                <a className='Footer__links_item' href='#'>TELEGRAM</a>
                <a className='Footer__links_item' href='#'>DEXSCREENER</a>
            </div>
        </div>
    )
}