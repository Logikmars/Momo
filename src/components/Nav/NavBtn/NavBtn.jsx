import './NavBtn.scss';
export default ({ text }) => {
    return (
        <div className='NavBtn'>
            <div className='NavBtn_text'>
                {text}
            </div>
            <div className='NavBtn_anim free_img'>
                <div className='NavBtn_anim_black'></div>
            </div>
            <div className='NavBtn_anim free_img'>
                <div className='NavBtn_anim_white'></div>
            </div>
        </div>
    )
}