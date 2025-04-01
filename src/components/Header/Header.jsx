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
                    <Nav activeTab={1} />
                </div>
                <div className='Header__social'>
                    <img src="/img/x.svg" alt="" />
                    <img src="/img/tg.svg" alt="" />
                    <img src="/img/dexs.svg" alt="" />
                </div>
                <div className='Header__nav_mob'>
                    <Nav activeTab={1}/>
                </div>
            </div>
        </div>
    )
}   