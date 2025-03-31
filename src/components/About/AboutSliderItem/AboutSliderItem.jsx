import './AboutSliderItem.scss';
export default ({ index, img, title, description}) => {return (
    <div className='AboutSliderItem'>
        <div className='AboutSliderItem__img'>
            <div className='AboutSliderItem__img_wrapper'>
                <img src={img} alt="" />
            </div>
            <div className='AboutSliderItem__title free_img'>
                <div className='AboutSliderItem__title_index free_img'>{index}</div>
                <div className='AboutSliderItem__title_title free_img'>{title}</div>
            </div>
        </div>
        <div className='AboutSliderItem__description'>
            {description}
        </div>
    </div>
)}