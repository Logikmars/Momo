import { useEffect, useRef, useState } from 'react';
import './Hero.scss';

export default ({ setshowContent, showContent }) => {

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


    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const play = async () => {
                try {
                    await video.play();
                } catch (err) {
                    console.warn('Autoplay failed:', err);
                }
            };
            play();
        }
    }, []);

    return (
        <div className='Hero' id='#ABOUT'>
            <div className='Hero_video' style={{
                overflow: 'hidden'
            }}>
                <video
                    ref={videoRef}
                    src={`/vid_hor.mp4`}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleEnded}
                    style={{
                        transition: `opacity 500ms`,
                    }}
                    onLoadedMetadata={async (e) => {
                        const video = videoRef.current;
                        if (video) {
                            await video.play();
                        }
                    }}
                />
            </div>
            <div className='Hero_video' style={{
                overflow: showContent ? 'visible' : 'hidden'
            }}>
                <video
                    ref={videoRef2}
                    src={`/cycle_hor.mp4`}
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