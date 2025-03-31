import Nav from '../Nav/Nav';
import './Gallery.scss';
export default () => {return (
    <div className='container'>
        <div className='Gallery'>
            <div className='Gallery__nav'>
                <Nav />
            </div>
            <div className='Gallery__items'></div>
        </div>
    </div>
)}