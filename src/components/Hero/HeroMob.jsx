import { useEffect, useRef, useState } from 'react';
import './Hero.scss';

export default ({ setshowContent, showContent }) => {
    const introTotalFrames = 210;
    const loopTotalFrames = 31;
    const fps = 18;

    const introFrames = useRef([]);
    const loopFrames = useRef([]);
    const imgRef = useRef(null);
    const [ready, setReady] = useState(false);
    const [isIntroEnded, setIsIntroEnded] = useState(false);

    useEffect(() => {
        const loadImages = (count, prefix) =>
            Promise.all(
                Array.from({ length: count }, (_, i) => {
                    const index = String(i + 1).padStart(4, '0');
                    const src = `/heroMobVid/${prefix}/frame_${index}.webp`;
                    return new Promise(resolve => {
                        const img = new Image();
                        img.src = src;
                        img.onload = () => resolve(img);
                    });
                })
            );

        (async () => {
            const [intro, loop] = await Promise.all([
                loadImages(introTotalFrames, 'intro'),
                loadImages(loopTotalFrames, 'loop'),
            ]);
            introFrames.current = intro;
            loopFrames.current = loop;
            setReady(true);
        })();
    }, []);

    useEffect(() => {
        if (!ready) return;

        let frame = 0;
        let loopFrame = 0;
        let isLooping = false;

        const draw = () => {
            if (!imgRef.current) return;

            if (!isLooping) {
                imgRef.current.src = introFrames.current[frame].src;
                frame++;
                if (frame >= introTotalFrames) {
                    isLooping = true;
                    setIsIntroEnded(true);
                    setshowContent(true);
                }
            } else {
                imgRef.current.src = loopFrames.current[loopFrame].src;
                loopFrame = (loopFrame + 1) % loopTotalFrames;
            }
        };

        const interval = setInterval(draw, 1000 / fps);
        return () => clearInterval(interval);
    }, [ready]);

    return (
        <div className='Hero' id='#ABOUT'>
            <div className='Hero_video' style={{ overflow: 'hidden' }}>
                <img
                    ref={imgRef}
                    style={{ transition: 'opacity 500ms', width: '100%' }}
                    draggable={false}
                    alt=""
                />
            </div>
        </div>
    );
};
