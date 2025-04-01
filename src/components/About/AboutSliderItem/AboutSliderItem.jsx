import './AboutSliderItem.scss';
export default ({ index, img, title, description, currentSlide }) => {
    return (
        <div className='AboutSliderItem_wrapper free_img' style={{
            // transition: `transform 500ms`,
            transform: `translate(${window.innerWidth > 700 ? ((currentSlide - index) * 1200 * -1) : 0}px,0px) `,
            opacity: window.innerWidth > 700 ? ((currentSlide === index) ? 1 : .5) : 1,
            filter: window.innerWidth > 700 ? `blur(${(currentSlide === index) ? 0 : 10}px)` : 'blur(0px)',
        }}>
            <div className='AboutSliderItem '>
                <div className='AboutSliderItem__img'>
                    <div className='AboutSliderItem__img_wrapper free_img'>
                        <img src={img} alt="" className={`img ${index === 1 ? "img1" :
                            index === 2 ? "img2" :
                                index === 3 ? "img3" :
                                    index === 4 ? "img4" : ""
                            }`} />
                    </div>
                    <div className='AboutSliderItem__title free_img'>
                        <div className='AboutSliderItem__title_index'>{index}</div>
                        <div className='AboutSliderItem__title_title'>{title}</div>
                    </div>
                </div>
                <div className='AboutSliderItem__description'>
                    {description}
                </div>
            </div>
        </div>
    )
}