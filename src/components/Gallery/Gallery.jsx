import Nav from '../Nav/Nav';
import './Gallery.scss';
export default () => {return (
    <div className='container'>
        <div className='Gallery'>
            <div className='Gallery__nav'>
                <Nav />
            </div>
            <div className='Gallery__items'>
                {/* два ряда - 7картинок
                    Math.floor(7 / 2) = 3
                    Math.ceil(7 / 2)

                    Можно взять семь элементов из массива, поделить на два с округлением в меньшую сторону - получим верхнюю строку. Затем из семи вычесть три и вторая строка готова.

                    Если длинна массива А == 14, то поделить его на два массива по 7(B, C) и затем в два массива 
                */}
            </div>
        </div>
    </div>
)}