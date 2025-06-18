import { useEffect, useRef, useState } from 'react';
import './Hero.scss';

export default ({ setshowContent, showContent }) => {
    const videoRef = useRef(null);
    const videoRef2 = useRef(null);

    const handleEnded = () => {
        if (videoRef.current) videoRef.current.style.opacity = 0;
        if (videoRef2.current) {
            videoRef2.current.play();
            videoRef2.current.style.opacity = 1;
            setshowContent(true);
        }
    };

    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsPortrait(window.innerHeight > window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const commonStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        transition: 'opacity 500ms',
        zIndex: -1,
        pointerEvents: 'none'
    };

    return (
        <div className='Hero' id='#ABOUT'>
            <div className='Hero_video'>
                {isPortrait !== null && (
                    <video
                        ref={videoRef}
                        src={`/vid_${isPortrait ? 'clean' : 'hor'}.mp4`}
                        autoPlay
                        muted
                        playsInline
                        preload="auto"
                        style={commonStyle}
                        onCanPlayThrough={async () => {
                            const video = videoRef.current;
                            if (video && video.readyState >= 3) {
                                try {
                                    await video.play();
                                } catch (e) {
                                    console.warn('Play failed', e);
                                }
                            }
                        }}
                        onEnded={handleEnded}
                    />
                )}
            </div>

            <div className='Hero_video'>
                <video
                    ref={videoRef2}
                    src={`/cycle_${isPortrait ? 'vert' : 'hor'}.mp4`}
                    muted
                    playsInline
                    loop
                    style={{ ...commonStyle, opacity: 0 }}
                />
            </div>
        </div>
    );
};
