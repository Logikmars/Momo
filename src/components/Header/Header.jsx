import './Header.scss';

import MediaLinks from "../MediaLinks/MediaLinks";

export default ({ showContent }) => {
    return (
        <div className='Header' style={{
            transition: `opacity 500ms`,
            opacity: showContent ? 1 : 0
        }}>
            <div className='container'>
                <div className='Header__logo'>
                    <img src="/img/PAWSE.webp" alt="" />
                </div>

                <MediaLinks />
            </div>
        </div>
    )
}   