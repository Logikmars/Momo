import Nav from '../Nav/Nav';
import './Header.scss';
export default ({ showContent }) => {
    return (
        <div className='Header' style={{
            transition: `opacity 500ms`,
            opacity: showContent ? 1 : 0
        }}>
            <div className='container'>
                <div className='Header__logo'>
                    <img src="/img/lg.svg" alt="" />
                </div>

                <div className='Header__social'>
                    <a href="#">
                        <img src="/img/x.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="/img/tg.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="/img/dex.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}   