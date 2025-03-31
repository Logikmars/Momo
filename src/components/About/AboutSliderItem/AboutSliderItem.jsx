import './AboutSliderItem.scss';
export default ({ index, img, title, description}) => {return (
    <div className='AboutSliderItem'>
        <div className='AboutSliderItem__img'>
            <div className='AboutSliderItem__img_wrapper free_img'>
                <img src={img} alt="" className={`img ${
                index === 1 ? "img1" :
                index === 2 ? "img2" :
                index === 3 ? "img3" :
                index === 4 ? "img4" : ""
            }`}/>
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
)}