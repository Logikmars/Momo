import { useEffect, useState } from 'react';
import './Viewer.scss';

export default ({ frame, close }) => {

    const [frameLocal, setframeLocal] = useState(frame);

    useEffect(() => {
        setTimeout(() => {
            setframeLocal(frame)
        }, 200);
    }, [frame])


    const handledownload = () => {
        console.log('load');
    }

    const [scale, setscale] = useState(1);

    return (
        <div className='Viewer' onClick={close}>
            <div className='Viewer_cross_wrapper' >
                <div className='Viewer_cross'>
                    <img src="/img/close.svg" alt="" />
                </div>
            </div>
            <div className='Viewer_content'>
                <img src={`/img/gallery/${frameLocal}.webp`} alt="" style={{
                    transform: `scale(${scale})`,
                    transition: 'transform 300ms',
                    willChange: `transform`
                }} onClick={(e) => {
                    e.stopPropagation()
                }} />
            </div>

            <div className='Viewer_scale'>
                <div className='Viewer_scale_download' onClick={(e) => {
                    e.stopPropagation()
                    handledownload()
                }}>
                    Download
                </div>
                <div className='Viewer_scale_wrapper'>
                    <div className='Viewer_scale_btn' onClick={(e) => {
                        e.stopPropagation()
                        setscale(prev => Math.min(prev + .5, 3))
                    }}>
                        <img src="/img/plus.svg" alt="" />
                    </div>
                    <div className='Viewer_scale_btn' onClick={(e) => {
                        e.stopPropagation()
                        setscale(prev => Math.max(prev - .5, .5))
                    }}>
                        <img src="/img/minus.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}