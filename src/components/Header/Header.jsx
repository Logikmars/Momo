import Nav from '../Nav/Nav';
import './Header.scss';
export default () => {
    return (
        <div className='Header'>
            <div className='container'>
                <div className='Header__logo'>
                    <img src="/img/logo.svg" alt="" />
                </div>
                <div className='Header__nav'>
                    <Nav />
                </div>
                <div className='Header__social'>
                    <img src="/img/x.webp" alt="" />
                    <img src="/img/tg.webp" alt="" />
                    <img src="/img/dexs.webp" alt="" />
                </div>
            </div>
        </div>
    )
}