import { useState } from 'react';
import Nav from '../Nav/Nav';
import './Gallery.scss';
import Viewer from './Viewer';
export default () => {

    const [viewingFrame, setviewingFrame] = useState(0);

    return (
        <>
            <div className='Gallery'>
                <div className='Gallery__nav'>
                    <Nav />
                </div>
                <div className='Gallery__items'>
                    {Array(14)
                        .fill(0)
                        .map((_, index) => {

                            const imgSize = (index) % 7 > 2 ? 'small' : 'large'

                            return <>
                                <img src={`/img/gallery/${index + 1}.webp`} className={`Gallery__items_element_${imgSize}`} alt="" onClick={() => { setviewingFrame(index + 1) }} />
                                {(index + 1) % 7 === 3 && <div className='Gallery__items_delimeter' />}
                                {(index + 1) % 7 === 0 && <div className='Gallery__items_delimeter' />}
                            </>

                        })}
                </div>
            </div>
            <div className='Gallery_viewer' style={{
                pointerEvents: !!viewingFrame ? 'all' : 'none',
                opacity: !!viewingFrame ? 1 : 0,
                transition: `opacity 200ms`
            }}>
                <Viewer frame={viewingFrame} close={() => { setviewingFrame(0) }} />
            </div>
        </>
    )
}