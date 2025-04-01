import { useEffect, useRef, useState } from 'react';
import './Hero.scss';
export default ({ setshowContent }) => {

    const videoRef = useRef(null);
    const videoRef2 = useRef(null);


    const handleEnded = () => {
        if (videoRef.current) {
            videoRef.current.style.opacity = 0
        }
        if (videoRef2.current) {
            videoRef2.current.play()
            videoRef2.current.style.opacity = 1
            setshowContent(true)
        }
    }

    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsPortrait(window.innerHeight > window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='Hero' id='#ABOUT'>
            <div className='Hero_video'>
                <video
                    ref={videoRef}
                    src={`/vid_${isPortrait ? 'vert' : 'hor'}.mp4`}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleEnded}
                    style={{
                        transition: `opacity 500ms`
                    }}
                    onLoadedMetadata={(e) => {
                        // e.currentTarget.playbackRate = 10;
                    }}
                />
            </div>
            <div className='Hero_video'>
                <video
                    ref={videoRef2}
                    src={`/cycle_${isPortrait ? 'vert' : 'hor'}.mp4`}
                    muted
                    playsInline
                    loop

                    style={{
                        transition: `opacity 500ms`,
                        opacity: 0
                    }}
                />
            </div>

        </div>
    )
}