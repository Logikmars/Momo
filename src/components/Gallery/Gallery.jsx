import Nav from '../Nav/Nav';
import './Gallery.scss';
export default () => {

    // const galleryItems = [
    //     {
    //         img: "/img/gallery/1.webp"
    //     },
    //     {
    //         img: "/img/gallery/2.webp"
    //     },
    //     {
    //         img: "/img/gallery/3.webp"
    //     },
    //     {
    //         img: "/img/gallery/4.webp"
    //     },
    //     {
    //         img: "/img/gallery/5.webp"
    //     },
    //     {
    //         img: "/img/gallery/6.webp"
    //     },
    //     {
    //         img: "/img/gallery/7.webp"
    //     },
    //     {
    //         img: "/img/gallery/8.webp"
    //     },
    //     {
    //         img: "/img/gallery/9.webp"
    //     },
    //     {
    //         img: "/img/gallery/10.webp"
    //     },
    //     {
    //         img: "/img/gallery/11.webp"
    //     },
    //     {
    //         img: "/img/gallery/12.webp"
    //     },
    //     {
    //         img: "/img/gallery/13.webp"
    //     },
    //     {
    //         img: "/img/gallery/14.webp"
    //     },
    // ]

    return (
        <div className='container'>
            <div className='Gallery'>
                <div className='Gallery__nav'>
                    <Nav />
                </div>
                <div className='Gallery__items'>
                    {Array(14)
                        .fill(0)
                        .map((_, index) => {
                            return <>
                                <img src={`/img/gallery/${index + 1}.webp`} alt="" />
                            </>
                        })}
                    {/* два ряда - 7картинок
                    Math.floor(7 / 2) = 3
                    Math.ceil(7 / 2) = 4

                    Можно взять семь элементов из массива, поделить на два с округлением в меньшую сторону - получим верхнюю строку. Затем из семи вычесть три и вторая строка готова.

                    Если длинна массива А == 14, то поделить его на два массива по 7(B, C) и затем маппить по очереди их
                */}
                </div>
            </div>
        </div>
    )
}