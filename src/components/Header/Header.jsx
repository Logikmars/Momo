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
                    <img src="/img/logo.svg" alt="" />
                </div>

                <div className='Header__social'>
                    <img src="/img/x.svg" alt="" />
                    <img src="/img/tg.svg" alt="" />
                    <img src="/img/dexs.svg" alt="" />
                </div>
            </div>
        </div>
    )
}   